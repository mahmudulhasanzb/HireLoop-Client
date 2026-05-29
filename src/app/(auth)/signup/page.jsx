'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Form, Input, Link } from '@heroui/react';

import { Lock, Mail, User } from 'lucide-react';
import { authClient } from '@/lib/auth-client';

const roles = [
  {
    key: 'seeker',
    label: 'Job Seeker',
  },
  {
    key: 'recruiter',
    label: 'Recruiter',
  },
];

export default function SignUpPage() {
  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());
    const { name, email, password, role } = userData;

    const { data, error } = await authClient.signUp.email({
      name,
      email,
      password,
      role,
    });
    console.log({ data, error });
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-black px-4 py-10">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-2xl shadow-violet-500/5">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-white">Create Account</h1>
          <p className="mt-3 text-white/50">
            Join HireLoop and discover your next opportunity.
          </p>
        </div>

        <Form onSubmit={onSubmit} className="space-y-5">
          <div className="flex flex-col space-y-5">
            <Input
              isRequired
              name="name"
              type="text"
              label="Full Name"
              labelPlacement="outside"
              placeholder="John Doe"
              variant="bordered"
              startContent={<User size={18} className="text-white/40" />}
              classNames={{
                label: 'text-white font-medium',
                input: 'text-white',
                inputWrapper:
                  'border-white/10 hover:border-white/20 focus-within:!border-violet-500 bg-white/5',
              }}
            />

            <Input
              isRequired
              name="email"
              type="email"
              label="Email"
              labelPlacement="outside"
              placeholder="john@example.com"
              variant="bordered"
              startContent={<Mail size={18} className="text-white/40" />}
              classNames={{
                label: 'text-white font-medium',
                input: 'text-white',
                inputWrapper:
                  'border-white/10 hover:border-white/20 focus-within:!border-violet-500 bg-white/5',
              }}
            />

            <Input
              isRequired
              name="image"
              type="url"
              label="Image"
              labelPlacement="outside"
              placeholder="https://example.com/image.jpg"
              variant="bordered"
              // startContent={<Link size={18} className="text-white/40" />}
              classNames={{
                label: 'text-white font-medium',
                input: 'text-white',
                inputWrapper:
                  'border-white/10 hover:border-white/20 focus-within:!border-violet-500 bg-white/5',
              }}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-white">
              Select Role
            </label>
            <div className="relative">
              <select
                required
                name="role"
                defaultValue=""
                className="h-12 w-full cursor-pointer appearance-none rounded-xl border border-white/10 bg-white/5 px-3 pr-10 text-sm text-white outline-none transition-all hover:border-white/20 focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
              >
                <option
                  value=""
                  disabled
                  className="bg-neutral-900 text-white/45"
                >
                  Choose your role
                </option>
                {roles.map(role => (
                  <option
                    key={role.key}
                    value={role.key}
                    className="bg-neutral-900 text-white"
                  >
                    {role.label}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-white/40">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          <Input
            isRequired
            name="password"
            type="password"
            label="Password"
            labelPlacement="outside"
            placeholder="••••••••"
            variant="bordered"
            startContent={<Lock size={18} className="text-white/40" />}
            classNames={{
              label: 'text-white font-medium',
              input: 'text-white',
              inputWrapper:
                'border-white/10 hover:border-white/20 focus-within:!border-violet-500 bg-white/5',
            }}
          />

          <Button
            type="submit"
            className="mt-4 h-12 w-full rounded-2xl bg-violet-500 text-base font-semibold text-white hover:bg-violet-600 transition-colors"
          >
            Create Account
          </Button>
        </Form>

        <p className="mt-6 text-center text-sm text-white/50">
          Already have an account?{' '}
          <Link href="/signin" className="text-violet-400">
            Sign In
          </Link>
        </p>
      </div>
    </section>
  );
}
