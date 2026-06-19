'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useRouter } from 'next/navigation';
import { Loader2, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { PasswordInput } from './PasswordInput';
import SocialLogin from './SocialLogin';

const signupSchema = z
  .object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().min(1, 'Email is required').email('Please enter a valid email address'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
    confirmPassword: z.string().min(1, 'Please confirm your password'),
    terms: z.boolean().refine((val) => val === true, {
      message: 'You must agree to the Terms and Privacy Policy',
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

type SignupInput = z.infer<typeof signupSchema>;

export default function SignupForm() {
  const router = useRouter();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupInput>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      terms: false,
    },
  });

  const onSubmit = async (data: SignupInput) => {
    setStatus('loading');
    setErrorMessage('');

    try {
      // Simulate registration API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      if (data.email.includes('error')) {
        throw new Error('An account with this email already exists.');
      }

      setStatus('success');
      // Redirect to dashboard
      setTimeout(() => {
        router.push('/dashboard');
      }, 500);
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message || 'Registration failed. Please try again.');
    }
  };

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Forms header */}
      <div className="text-left">
        <h2 className="text-2xl font-extrabold text-white tracking-tight">Create Account</h2>
        <p className="text-sm text-neutral-400 mt-1.5">Sign up today and get 10 free AI-generated clips.</p>
      </div>

      {/* Success/Error Notices */}
      {status === 'success' && (
        <div className="flex items-center gap-2.5 text-emerald-400 text-sm bg-emerald-500/10 py-3 px-4 rounded-xl border border-emerald-500/20">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>Account created! Redirecting to dashboard...</span>
        </div>
      )}

      {status === 'error' && (
        <div className="flex items-center gap-2.5 text-rose-400 text-sm bg-rose-500/10 py-3 px-4 rounded-xl border border-rose-500/20">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Signup Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        {/* Name Field */}
        <div className="w-full flex flex-col gap-1.5 text-left">
          <label className="text-xs font-semibold text-neutral-400 tracking-wide uppercase">
            Full Name
          </label>
          <input
            type="text"
            placeholder="John Doe"
            disabled={status === 'loading'}
            className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all text-sm ${
              errors.name ? 'border-rose-500/50 focus:ring-rose-500/30' : 'border-white/10'
            }`}
            {...register('name')}
          />
          {errors.name && (
            <span className="text-xs text-rose-400 mt-0.5">{errors.name.message}</span>
          )}
        </div>

        {/* Email Field */}
        <div className="w-full flex flex-col gap-1.5 text-left">
          <label className="text-xs font-semibold text-neutral-400 tracking-wide uppercase">
            Email Address
          </label>
          <input
            type="email"
            placeholder="name@company.com"
            disabled={status === 'loading'}
            className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all text-sm ${
              errors.email ? 'border-rose-500/50 focus:ring-rose-500/30' : 'border-white/10'
            }`}
            {...register('email')}
          />
          {errors.email && (
            <span className="text-xs text-rose-400 mt-0.5">{errors.email.message}</span>
          )}
        </div>

        {/* Password Fields */}
        <PasswordInput
          label="Password"
          placeholder="••••••••"
          disabled={status === 'loading'}
          error={errors.password?.message}
          {...register('password')}
        />

        <PasswordInput
          label="Confirm Password"
          placeholder="••••••••"
          disabled={status === 'loading'}
          error={errors.confirmPassword?.message}
          {...register('confirmPassword')}
        />

        {/* Terms and Privacy Checkbox */}
        <div className="w-full flex flex-col gap-1 text-left mt-1">
          <label className="flex items-start gap-2.5 cursor-pointer select-none">
            <input
              type="checkbox"
              disabled={status === 'loading'}
              className="mt-0.5 rounded border-white/10 bg-white/5 text-violet-600 focus:ring-violet-500/30 focus:ring-offset-0 w-4 h-4 cursor-pointer"
              {...register('terms')}
            />
            <span className="text-xs text-neutral-400 leading-normal">
              I agree to the{' '}
              <Link href="#" className="text-violet-400 hover:text-violet-300 font-semibold transition-colors">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link href="#" className="text-violet-400 hover:text-violet-300 font-semibold transition-colors">
                Privacy Policy
              </Link>
            </span>
          </label>
          {errors.terms && (
            <span className="text-xs text-rose-400 mt-1">{errors.terms.message}</span>
          )}
        </div>

        {/* Submit CTA */}
        <button
          type="submit"
          disabled={status === 'loading' || status === 'success'}
          className="mt-2 w-full py-3.5 rounded-xl bg-linear-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-lg shadow-violet-500/25 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer disabled:opacity-50"
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Creating account...
            </>
          ) : (
            <>
              Get Started Free
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </form>

      {/* Social Provider Logins */}
      <SocialLogin />

      {/* Form Switch Link */}
      <p className="text-sm text-neutral-400 text-center mt-2">
        Already have an account?{' '}
        <Link
          href="/auth/login"
          className="font-semibold text-violet-400 hover:text-violet-300 transition-colors"
        >
          Log in
        </Link>
      </p>
    </div>
  );
}
