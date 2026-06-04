const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
const getCompanyJobs = async (companyId) => {
  const res = await fetch(`${baseUrl}/api/jobs?companyId=${companyId}&status=${status}`)
}