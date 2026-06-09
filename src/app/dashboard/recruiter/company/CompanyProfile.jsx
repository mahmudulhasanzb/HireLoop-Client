'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useSession } from '@/lib/auth-client';
import {
  Button,
  Card,
  Form,
  Input,
  Label,
  TextField,
  TextArea,
  Select,
  ListBox,
} from '@heroui/react';
import {
  Building2,
  Globe,
  MapPin,
  Users,
  Upload,
  X,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Edit,
  Eye,
  Loader2,
} from 'lucide-react';
import toast from 'react-hot-toast';
import { createCompany } from '@/lib/actions/companies';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:8000';
const imgbbApiKey = process.env.NEXT_PUBLIC_IMGBB_API_KEY;

// Industry options
const industries = [
  { id: 'technology', name: 'Technology' },
  { id: 'design', name: 'Design' },
  { id: 'marketing', name: 'Marketing' },
  { id: 'sales', name: 'Sales' },
  { id: 'healthcare', name: 'Healthcare' },
  { id: 'finance', name: 'Finance' },
  { id: 'education', name: 'Education' },
  { id: 'other', name: 'Other' },
];

// Employee count ranges
const employeeRanges = [
  { id: '1-10', name: '1-10 employees' },
  { id: '11-50', name: '11-50 employees' },
  { id: '51-200', name: '51-200 employees' },
  { id: '201-500', name: '201-500 employees' },
  { id: '500+', name: '500+ employees' },
];

export default function CompanyProfile({ recruiter, recruiterCompany }) {

  const [company, setCompany] = useState(recruiterCompany);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [logoUrl, setLogoUrl] = useState('');

  // Form values state
  const [formValues, setFormValues] = useState({
    name: '',
    industry: 'technology',
    website: '',
    location: '',
    employeeCount: '1-10',
    description: '',
  });

  const fileInputRef = useRef(null);

  // Fetch company details
  const fetchCompany = async () => {
    if (!recruiter?.email) return;
    try {
      setLoading(true);
      const res = await fetch(
        `${baseUrl}/api/companies/recruiter/${recruiter.email}`,
      );
      if (res.ok) {
        const data = await res.json();
        if (data) {
          setCompany(data);
          setLogoUrl(data.logo || '');
          setFormValues({
            name: data.name || '',
            industry: data.industry || 'technology',
            website: data.website || '',
            location: data.location || '',
            employeeCount: data.employeeCount || '1-10',
            description: data.description || '',
          });
        } else {
          setCompany(null);
        }
      }
    } catch (error) {
      console.error('Error fetching company:', error);
      toast.error('Failed to load company details');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (recruiter?.email) {
      fetchCompany();
    }
  }, [recruiter?.email]);

  // Handle Logo Upload to Imgbb
  const handleLogoUpload = async e => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate size (up to 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast.error('Image size must be less than 5MB');
      return;
    }

    try {
      setUploadingImage(true);
      const formData = new FormData();
      formData.append('image', file);

      const res = await fetch(
        `https://api.imgbb.com/1/upload?key=${imgbbApiKey}`,
        {
          method: 'POST',
          body: formData,
        },
      );

      if (!res.ok) throw new Error('Imgbb upload failed');
      const result = await res.json();

      if (result.success && result.data?.url) {
        setLogoUrl(result.data.url);
        toast.success('Logo uploaded successfully!');
      } else {
        throw new Error('Invalid response from Imgbb');
      }
    } catch (error) {
      console.error('Logo upload error:', error);
      toast.error('Failed to upload logo to Imgbb. Please try again.');
    } finally {
      setUploadingImage(false);
    }
  };

  const removeLogo = () => {
    setLogoUrl('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Submit Company Form (Register or Update)
  const handleSubmit = async e => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const companyData = Object.fromEntries(formData.entries());
    const { name, industry, website, location, employeeCount, description } =
      companyData;


    if (!name) {
      toast.error('Company Name is required');
      return;
    }

    if (!logoUrl) {
      toast.error('Please upload a company logo');
      return;
    }

    const payload = {
      name,
      industry,
      website,
      location,
      employeeCount,
      description,
      logo: logoUrl,
      recruiterId: recruiter.id || recruiter._id
    };



    try {
      let res;
      if (company?._id) {
        // Update
        res = await fetch(`${baseUrl}/api/companies/${company._id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      } else {
        // Create
        payload.status = 'pending'; // Default status
        const result = await createCompany(payload);
        res = {
          ok: !!(result?.insertedId || result?._id || result?.acknowledged),
        };
      }

      if (res.ok) {
        toast.success(
          company?._id
            ? 'Company profile updated successfully'
            : 'Company registered successfully',
        );
        setIsEditing(false);
        fetchCompany();
      } else {
        toast.error('Failed to save company information');
      }
    } catch (error) {
      console.error('Submit error:', error);
      toast.error('An error occurred. Please try again.');
    }
  };

  // Simulation: Toggle Status
  const handleSimulateStatus = async status => {
    if (!company?._id) return;
    try {
      const res = await fetch(
        `${baseUrl}/api/companies/${company._id}/status`,
        {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ status }),
        },
      );
      if (res.ok) {
        toast.success(`Company status simulated as "${status}"`);
        fetchCompany();
      } else {
        toast.error('Failed to change simulated status');
      }
    } catch (error) {
      console.error('Status patch error:', error);
      toast.error('Error changing simulated status');
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-zinc-400">
        <Loader2 className="w-10 h-10 animate-spin text-violet-500 mb-4" />
        <p className="text-sm">Loading company details...</p>
      </div>
    );
  }

  if (!recruiter) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-zinc-400">
        <Building2 className="w-16 h-16 text-zinc-600 mb-4" />
        <h2 className="text-xl font-semibold text-white mb-2">Access Denied</h2>
        <p className="text-sm">
          Please sign in as a recruiter to manage company details.
        </p>
      </div>
    );
  }

  // 1. NO COMPANY REGISTERED PROMPT VIEW
  if (!company && !isEditing) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-[#0d0d0e] px-4">
        <div className="max-w-xl w-full bg-[#121214] border border-zinc-900 rounded-xl p-12 text-center shadow-2xl space-y-6">
          <div className="w-16 h-16 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center mx-auto text-zinc-400">
            <Building2 size={28} />
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-white">
              No Company Profile Registered
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              You haven't registered a company profile yet. Please register your
              company details to start posting and managing jobs on HireLoop.
            </p>
          </div>
          <Button
            onClick={() => setIsEditing(true)}
            className="bg-white text-black font-semibold hover:bg-zinc-200 rounded-lg px-6 h-11 cursor-pointer"
          >
            Register Company
          </Button>
        </div>
      </div>
    );
  }

  // Dark styles configured exactly like the image
  const textInputClass =
    'w-full text-white bg-[#1c1c1e] border border-zinc-800 hover:bg-[#242426] focus:border-zinc-600 rounded-lg h-12 px-3 text-sm placeholder:text-zinc-600 outline-none transition-all';
  const textAreaClass =
    'w-full text-white bg-[#1c1c1e] border border-zinc-800 hover:bg-[#242426] focus:border-zinc-600 rounded-lg p-3 text-sm placeholder:text-zinc-600 outline-none transition-all';
  const triggerClasses =
    'w-full flex items-center justify-between bg-[#1c1c1e] border border-zinc-800 hover:bg-[#242426] h-12 rounded-lg px-3 text-white transition-all text-sm outline-none data-[focused=true]:border-zinc-600';
  const popoverClasses =
    'bg-[#1c1c1e] border border-zinc-800 text-white rounded-lg shadow-xl p-1';
  const listItemClasses =
    'flex items-center justify-between p-2 rounded-md hover:bg-zinc-800 cursor-pointer text-sm text-zinc-200 outline-none data-[focused=true]:bg-zinc-800';

  // 2. REGISTER FORM VIEW
  if (isEditing) {
    return (
      <div className="min-h-screen bg-[#0d0d0e] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-[#121214] border border-zinc-900 rounded-xl p-8 shadow-2xl relative">
          {/* Close button if editing */}
          {company && (
            <button
              onClick={() => setIsEditing(false)}
              className="absolute top-6 right-6 text-zinc-500 hover:text-white transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>
          )}

          {/* Form Header */}
          <div className="border-b border-zinc-800 pb-6 mb-8">
            <h1 className="text-2xl font-semibold tracking-tight">
              {company ? 'Edit Company Details' : 'Register New Company'}
            </h1>
            <p className="text-zinc-400 text-sm mt-1">
              Enter your business details to start hiring on HireLoop.
            </p>
          </div>

          <Form onSubmit={handleSubmit} className="space-y-8">
            {/* ROW 1: Name and Industry */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TextField className="flex flex-col gap-1 w-full">
                <Label className="text-zinc-400 font-medium text-sm">
                  Company Name
                </Label>
                <Input
                  placeholder="e.g. Acme Corp"
                  name="name"
                  className={textInputClass}
                  value={formValues.name}
                  onChange={e =>
                    setFormValues({ ...formValues, name: e.target.value })
                  }
                />
              </TextField>

              <Select
                className="w-full"
                name="industry"
                selectedKey={formValues.industry}
                onSelectionChange={key =>
                  setFormValues({ ...formValues, industry: key })
                }
              >
                <Label className="text-zinc-400 font-medium text-sm mb-1 block">
                  Industry / Category
                </Label>
                <Select.Trigger className={triggerClasses}>
                  <Select.Value className="text-white" />
                  <Select.Indicator />
                </Select.Trigger>
                <Select.Popover className={popoverClasses}>
                  <ListBox className="outline-none">
                    {industries.map(ind => (
                      <ListBox.Item
                        key={ind.id}
                        id={ind.id}
                        className={listItemClasses}
                        textValue={ind.name}
                      >
                        {ind.name}
                      </ListBox.Item>
                    ))}
                  </ListBox>
                </Select.Popover>
              </Select>
            </div>

            {/* ROW 2: Website URL and Location */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TextField className="flex flex-col gap-1 w-full">
                <Label className="text-zinc-400 font-medium text-sm">
                  Website URL
                </Label>
                <div className="relative flex items-center">
                  <div className="bg-zinc-800 text-zinc-400 px-3 h-12 flex items-center border border-zinc-800 rounded-l-lg text-sm font-medium pointer-events-none select-none">
                    https://
                  </div>
                  <Input
                    placeholder="www.company.com"
                    name="website"
                    className={`${textInputClass} rounded-l-none`}
                    value={formValues.website}
                    onChange={e =>
                      setFormValues({ ...formValues, website: e.target.value })
                    }
                  />
                </div>
              </TextField>

              <TextField className="flex flex-col gap-1 w-full">
                <Label className="text-zinc-400 font-medium text-sm">
                  Location
                </Label>
                <div className="relative flex items-center">
                  <MapPin
                    size={16}
                    className="absolute left-3.5 text-zinc-500 pointer-events-none"
                  />
                  <Input
                    placeholder="City, Country"
                    name="location"
                    className={`${textInputClass} pl-10`}
                    value={formValues.location}
                    onChange={e =>
                      setFormValues({ ...formValues, location: e.target.value })
                    }
                  />
                </div>
              </TextField>
            </div>

            {/* ROW 3: Employee Count and Company Logo Upload */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              <Select
                className="w-full"
                name="employeeCount"
                selectedKey={formValues.employeeCount}
                onSelectionChange={key =>
                  setFormValues({ ...formValues, employeeCount: key })
                }
              >
                <Label className="text-zinc-400 font-medium text-sm mb-1 block">
                  Employee Count Range
                </Label>
                <Select.Trigger className={triggerClasses}>
                  <Select.Value className="text-white" />
                  <Select.Indicator />
                </Select.Trigger>
                <Select.Popover className={popoverClasses}>
                  <ListBox className="outline-none">
                    {employeeRanges.map(range => (
                      <ListBox.Item
                        key={range.id}
                        id={range.id}
                        className={listItemClasses}
                        textValue={range.name}
                      >
                        {range.name}
                      </ListBox.Item>
                    ))}
                  </ListBox>
                </Select.Popover>
              </Select>

              {/* LOGO UPLOAD COMPONENT */}
              <div className="flex flex-col gap-1 w-full">
                <span className="text-zinc-400 font-medium text-sm block">
                  Company Logo
                </span>

                {logoUrl ? (
                  <div className="relative flex items-center gap-3 p-3 bg-zinc-900/40 border border-zinc-800 rounded-lg">
                    <img
                      src={logoUrl}
                      alt="Company Logo Preview"
                      className="w-12 h-12 object-cover rounded-lg bg-zinc-800 border border-zinc-700"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-zinc-300 font-medium truncate">
                        Logo uploaded
                      </p>
                      <button
                        type="button"
                        onClick={removeLogo}
                        className="text-[10px] text-red-400 hover:text-red-300 font-semibold uppercase mt-0.5"
                      >
                        Remove logo
                      </button>
                    </div>
                  </div>
                ) : (
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="border-2 border-dashed border-zinc-800 hover:border-zinc-600 rounded-lg p-3 flex items-center justify-center gap-3 cursor-pointer transition-all bg-zinc-900/10 hover:bg-zinc-900/30"
                  >
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleLogoUpload}
                      accept="image/*"
                      className="hidden"
                    />
                    <div className="w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center border border-zinc-800">
                      {uploadingImage ? (
                        <Loader2 className="w-5 h-5 text-zinc-400 animate-spin" />
                      ) : (
                        <Upload className="w-5 h-5 text-zinc-400" />
                      )}
                    </div>
                    <div>
                      <p className="text-xs text-zinc-200 font-semibold">
                        {uploadingImage ? 'Uploading Logo...' : 'Upload image'}
                      </p>
                      <p className="text-[10px] text-zinc-500">
                        PNG, JPG up to 5MB
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* ROW 4: Brief Description */}
            <TextField className="flex flex-col gap-1 w-full">
              <Label className="text-zinc-400 font-medium text-sm">
                Brief Description
              </Label>
              <TextArea
                placeholder="Tell us about your company's mission and culture..."
                name="description"
                rows={4}
                className={textAreaClass}
                value={formValues.description}
                onChange={e =>
                  setFormValues({ ...formValues, description: e.target.value })
                }
              />
            </TextField>

            {/* FOOTER ACTIONS */}
            <div className="flex justify-end gap-3 pt-4 border-t border-zinc-800 w-full">
              <Button
                type="button"
                onClick={() => setIsEditing(false)}
                className="border border-zinc-800 text-zinc-300 bg-transparent hover:bg-zinc-900 rounded-lg px-6 font-medium h-11 transition-all"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="bg-white text-black font-semibold hover:bg-zinc-200 rounded-lg px-6 transition-colors h-11 cursor-pointer"
              >
                {company ? 'Save Changes' : 'Register Company'}
              </Button>
            </div>
          </Form>
        </div>
      </div>
    );
  }

  // 2. COMPANY PROFILE DISPLAY VIEW
  // Style badges/banners based on company status
  let statusBadgeStyles = '';
  let statusBanner = null;

  if (company.status === 'approved') {
    statusBadgeStyles =
      'bg-emerald-950/40 text-emerald-400 border border-emerald-900/50';
    statusBanner = (
      <div className="flex items-start gap-3 p-4 bg-emerald-950/20 border border-emerald-900/50 rounded-xl text-emerald-300 text-sm">
        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
        <div>
          <span className="font-semibold block text-emerald-200 mb-0.5">
            Verification Approved
          </span>
          Your profile is approved. You can post and manage jobs publicly on
          HireLoop.
        </div>
      </div>
    );
  } else if (company.status === 'rejected') {
    statusBadgeStyles = 'bg-red-950/40 text-red-400 border border-red-900/50';
    statusBanner = (
      <div className="flex items-start gap-3 p-4 bg-red-950/20 border border-red-900/50 rounded-xl text-red-300 text-sm">
        <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
        <div>
          <span className="font-semibold block text-red-200 mb-0.5">
            Verification Rejected
          </span>
          Your registration request was rejected by admin. Please review and
          update your information or contact admin support.
        </div>
      </div>
    );
  } else {
    // Default to 'pending'
    statusBadgeStyles =
      'bg-amber-950/40 text-amber-400 border border-amber-900/50';
    statusBanner = (
      <div className="flex items-start gap-3 p-4 bg-amber-950/20 border border-amber-900/50 rounded-xl text-amber-300 text-sm">
        <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
        <div>
          <span className="font-semibold block text-amber-200 mb-0.5">
            Verification Pending
          </span>
          Your company profile is under review by admin. You will be allowed to
          publish jobs once verification is approved.
        </div>
      </div>
    );
  }

  const selectedIndustry =
    industries.find(ind => ind.id === company.industry)?.name ||
    company.industry;
  const selectedEmployees =
    employeeRanges.find(range => range.id === company.employeeCount)?.name ||
    `${company.employeeCount} employees`;

  return (
    <div className="min-h-screen bg-[#0d0d0e] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-6">
        {/* Status Alerts */}
        {statusBanner}

        {/* Company Card */}
        <Card className="bg-[#121214] border border-zinc-900 rounded-xl p-8 shadow-2xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-zinc-800/80">
            <div className="flex items-center gap-4">
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                className="w-16 h-16 rounded-xl bg-zinc-800 object-cover border border-zinc-700"
              />
              <div>
                <h1 className="text-2xl font-bold text-white tracking-tight">
                  {company.name}
                </h1>
                <div className="flex items-center gap-2 mt-1.5">
                  <span
                    className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${statusBadgeStyles}`}
                  >
                    {company.status || 'Pending'}
                  </span>
                </div>
              </div>
            </div>

            <Button
              onClick={() => setIsEditing(true)}
              className="bg-zinc-800 text-zinc-100 hover:bg-zinc-700 font-semibold px-4 rounded-lg h-10 flex items-center gap-2 border border-zinc-700/50 transition-all cursor-pointer"
            >
              <Edit size={16} />
              Edit Profile
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-6 border-b border-zinc-800/80">
            {/* Website URL */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                <Globe className="w-4 h-4 text-zinc-400" />
              </div>
              <div>
                <span className="text-[10px] uppercase text-zinc-500 font-semibold tracking-wide block">
                  Website
                </span>
                <a
                  href={`https://${company.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-300 hover:text-white transition-colors underline font-medium"
                >
                  {company.website}
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                <MapPin className="w-4 h-4 text-zinc-400" />
              </div>
              <div>
                <span className="text-[10px] uppercase text-zinc-500 font-semibold tracking-wide block">
                  Location
                </span>
                <span className="text-sm text-zinc-300 font-medium">
                  {company.location}
                </span>
              </div>
            </div>

            {/* Industry */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                <Building2 className="w-4 h-4 text-zinc-400" />
              </div>
              <div>
                <span className="text-[10px] uppercase text-zinc-500 font-semibold tracking-wide block">
                  Industry
                </span>
                <span className="text-sm text-zinc-300 font-medium capitalize">
                  {selectedIndustry}
                </span>
              </div>
            </div>

            {/* Employees */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                <Users className="w-4 h-4 text-zinc-400" />
              </div>
              <div>
                <span className="text-[10px] uppercase text-zinc-500 font-semibold tracking-wide block">
                  Company Size
                </span>
                <span className="text-sm text-zinc-300 font-medium">
                  {selectedEmployees}
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="pt-6">
            <h3 className="text-sm font-semibold text-zinc-400 mb-2.5 uppercase tracking-wider">
              About the Company
            </h3>
            <p className="text-sm text-zinc-300 leading-relaxed bg-zinc-900/20 border border-zinc-800/40 p-4 rounded-xl">
              {company.description || 'No description provided.'}
            </p>
          </div>
        </Card>

        {/* Developer Sandbox Panel to change verification status */}
        <Card className="bg-[#1c1c1e]/40 border border-amber-900/30 rounded-xl p-6 shadow-md">
          <div className="flex items-center gap-2.5 mb-3 text-amber-400">
            <Eye size={18} />
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Simulate Admin Controls (Dev sandbox)
            </h3>
          </div>
          <p className="text-xs text-zinc-400 mb-4 leading-relaxed">
            Use these controls to instantly toggle your company's status in the
            database to verify different dashboard states (posting validation,
            status alerts, badges).
          </p>
          <div className="flex flex-wrap gap-2.5">
            <Button
              onClick={() => handleSimulateStatus('pending')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold border cursor-pointer transition-all ${
                company.status === 'pending'
                  ? 'bg-amber-950/60 border-amber-700 text-amber-400'
                  : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-700'
              }`}
            >
              Set Pending
            </Button>
            <Button
              onClick={() => handleSimulateStatus('approved')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold border cursor-pointer transition-all ${
                company.status === 'approved'
                  ? 'bg-emerald-950/60 border-emerald-700 text-emerald-400'
                  : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-700'
              }`}
            >
              Set Approved
            </Button>
            <Button
              onClick={() => handleSimulateStatus('rejected')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold border cursor-pointer transition-all ${
                company.status === 'rejected'
                  ? 'bg-red-950/60 border-red-700 text-red-400'
                  : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-700'
              }`}
            >
              Set Rejected
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
