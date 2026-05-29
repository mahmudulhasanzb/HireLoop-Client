'use client';

import { useState } from 'react';
import { Button, Link } from '@heroui/react';
import {
  Menu,
  X,
  BriefcaseBusiness,
  Building2,
  CreditCard,
} from 'lucide-react';

const navItems = [
  {
    label: 'Browse Jobs',
    href: '/jobs',
    icon: BriefcaseBusiness,
  },
  {
    label: 'Companies',
    href: '/companies',
    icon: Building2,
  },
  {
    label: 'Pricing',
    href: '/pricing',
    icon: CreditCard,
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/30 backdrop-blur-2xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 text-white no-underline"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-violet-500 to-fuchsia-500 shadow-lg shadow-violet-500/20">
            <span className="text-lg font-bold text-white">H</span>
          </div>

          <div className="hidden leading-tight sm:block">
            <h2 className="text-base font-bold text-white">HireLoop</h2>
            <p className="text-xs text-white/50">Modern Job Platform</p>
          </div>
        </Link>

        {/* Desktop Navigation & Actions */}
        <div className="hidden lg:flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-xl">
          <ul className="flex items-center gap-2">
            {navItems.map(item => {
              const Icon = item.icon;
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium text-white/70 transition-all duration-200 hover:bg-white/10 hover:text-white "
                  >
                    <Icon size={17} />
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="h-6 w-px bg-white/10" />

          <div className="flex items-center gap-3">
            <Link href="/login">
              <Button
                variant="light"
                className="font-medium text-violet-400 hover:bg-white/5"
              >
                Sign In
              </Button>
            </Link>

            <Link href="/register">
              <Button className="rounded-2xl bg-white px-6 font-semibold text-black hover:scale-[1.02] transition-transform duration-200">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10 lg:hidden"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-black/80 backdrop-blur-2xl transition-all duration-300 lg:hidden ${
          isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="space-y-2 px-4 py-5">
          {navItems.map(item => {
            const Icon = item.icon;

            return (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-white/70 transition hover:bg-white/10 hover:text-white"
              >
                <Icon size={18} />
                {item.label}
              </Link>
            );
          })}

          <div className="mt-4 flex flex-col gap-3 border-t border-white/10 pt-4">
            <Link href="/login">
              <Button
                variant="flat"
                className="h-12 bg-white/5 font-medium text-white"
              >
                Sign In
              </Button>
            </Link>

            <Link href="/register">
              <Button className="h-12 bg-white font-semibold text-black">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
