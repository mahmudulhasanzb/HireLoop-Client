'use client';

import { Link } from '@heroui/react';
import {
  BriefcaseBusiness,
  Building2,
  DollarSign,
  BookOpen,
  LifeBuoy,
  Mail,
} from 'lucide-react';

// Custom inline SVG icons because brand icons are removed in Lucide v1+
///=========================
const Facebook = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Linkedin = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Twitter = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);
///================

const footerLinks = {
  Product: [
    {
      label: 'Job Discovery',
      href: '/jobs',
      icon: BriefcaseBusiness,
    },
    {
      label: 'Companies',
      href: '/companies',
      icon: Building2,
    },
    {
      label: 'Salary Insights',
      href: '/salary',
      icon: DollarSign,
    },
  ],

  Navigation: [
    {
      label: 'Help Center',
      href: '/help',
      icon: LifeBuoy,
    },
    {
      label: 'Career Library',
      href: '/career-library',
      icon: BookOpen,
    },
    {
      label: 'Contact',
      href: '/contact',
      icon: Mail,
    },
  ],

  Resources: [
    {
      label: 'Brand Guideline',
      href: '/brand',
    },
    {
      label: 'Newsroom',
      href: '/newsroom',
    },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          {/* Left Content */}
          <div className="max-w-sm">
            {/* Logo */}
            <Link
              href="/"
              className="mb-6 flex items-center gap-3 text-white no-underline"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500">
                <span className="text-lg font-bold text-white">H</span>
              </div>

              <div className="leading-tight">
                <h2 className="text-xl font-bold">HireLoop</h2>

                <p className="text-sm text-white/50">AI Career Platform</p>
              </div>
            </Link>

            <p className="text-base leading-8 text-white/50">
              The modern AI-native job platform built for ambitious developers,
              recruiters, and companies.
            </p>

            {/* Socials */}
            <div className="mt-8 flex items-center gap-4">
              <Link
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/70 transition hover:bg-violet-500 hover:text-white"
              >
                <Facebook size={20} />
              </Link>

              <Link
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/70 transition hover:bg-violet-500 hover:text-white"
              >
                <Twitter size={20} />
              </Link>

              <Link
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/70 transition hover:bg-violet-500 hover:text-white"
              >
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-violet-400">
              Product
            </h3>

            <ul className="space-y-4">
              {footerLinks.Product.map(item => {
                const Icon = item.icon;

                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="flex items-center gap-3 text-base text-white/50 transition hover:text-white"
                    >
                      {Icon && <Icon size={18} />}
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-violet-400">
              Navigation
            </h3>

            <ul className="space-y-4">
              {footerLinks.Navigation.map(item => {
                const Icon = item.icon;

                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="flex items-center gap-3 text-base text-white/50 transition hover:text-white"
                    >
                      {Icon && <Icon size={18} />}
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-violet-400">
              Resources
            </h3>

            <ul className="space-y-4">
              {footerLinks.Resources.map(item => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-base text-white/50 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/40 md:flex-row">
          <p>© {new Date().getFullYear()} HireLoop. All rights reserved.</p>

          <div className="flex items-center gap-5">
            <Link href="/terms" className="text-white/40 hover:text-white">
              Terms & Conditions
            </Link>

            <Link href="/privacy" className="text-white/40 hover:text-white">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
