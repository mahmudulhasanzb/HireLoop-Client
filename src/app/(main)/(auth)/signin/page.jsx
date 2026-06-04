'use client';

import { authClient } from '@/lib/auth-client';
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  Link,
  Surface,
  TextField,
} from '@heroui/react';

import { Lock, Mail } from 'lucide-react';

export default function SignInPage() {
  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    const { email, password } = userData;

    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: '/',
    });

    console.log({ data, error });
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-black px-4 py-10">
      <Surface className="w-full max-w-md rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-2xl shadow-violet-500/5">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-white">Welcome Back</h1>

          <p className="mt-3 text-white/50">
            Sign in to continue your HireLoop journey.
          </p>
        </div>

        <Form onSubmit={onSubmit} className="space-y-5">
          <TextField isRequired name="email" type="email">
            <Label className="text-white">Email</Label>

            <Input
              startContent={<Mail size={18} />}
              placeholder="john@example.com"
              variant="bordered"
              classNames={{
                input: 'text-white',
              }}
            />

            <FieldError />
          </TextField>

          <TextField isRequired name="password" type="password">
            <Label className="text-white">Password</Label>

            <Input
              startContent={<Lock size={18} />}
              placeholder="••••••••"
              variant="bordered"
              classNames={{
                input: 'text-white',
              }}
            />

            <FieldError />
          </TextField>

          <Button
            type="submit"
            className="mt-4 h-12 w-full rounded-2xl bg-violet-500 text-base font-semibold"
          >
            Sign In
          </Button>
        </Form>

        <p className="mt-6 text-center text-sm text-white/50">
          Don’t have an account?{' '}
          <Link href="/signup" className="text-violet-400">
            Create Account
          </Link>
        </p>
      </Surface>
    </section>
  );
}
