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

const loginSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Please enter a valid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

type LoginInput = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const router = useRouter();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginInput) => {
    setStatus('loading');
    setErrorMessage('');

    // Simulate login API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Let's mock a simple check
      if (data.email.includes('error')) {
        throw new Error('Invalid email or password combination.');
      }

      setStatus('success');
      // Simulated redirect to dashboard
      setTimeout(() => {
        router.push('/dashboard');
      }, 500);
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message || 'Authentication failed. Please try again.');
    }
  };

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Forms header */}
      <div className="text-left">
        <h2 className="text-2xl font-extrabold text-white tracking-tight">Welcome Back</h2>
        <p className="text-sm text-neutral-400 mt-1.5">Sign in to your ViralCraft account to continue.</p>
      </div>

      {/* Success/Error Notices */}
      {status === 'success' && (
        <div className="flex items-center gap-2.5 text-emerald-400 text-sm bg-emerald-500/10 py-3 px-4 rounded-xl border border-emerald-500/20">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>Login successful! Redirecting to dashboard...</span>
        </div>
      )}

      {status === 'error' && (
        <div className="flex items-center gap-2.5 text-rose-400 text-sm bg-rose-500/10 py-3 px-4 rounded-xl border border-rose-500/20">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Login Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
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

        {/* Password Field */}
        <div className="relative">
          <PasswordInput
            label="Password"
            placeholder="••••••••"
            disabled={status === 'loading'}
            error={errors.password?.message}
            {...register('password')}
          />
          <div className="absolute right-0 top-0">
            <Link
              href="/auth/forgot-password"
              className="text-xs font-semibold text-violet-400 hover:text-violet-300 transition-colors"
            >
              Forgot Password?
            </Link>
          </div>
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
              Signing in...
            </>
          ) : (
            <>
              Sign In
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </form>

      {/* Social Provider Logins */}
      <SocialLogin />

      {/* Form Switch Link */}
      <p className="text-sm text-neutral-400 text-center mt-2">
        Don't have an account?{' '}
        <Link
          href="/auth/signup"
          className="font-semibold text-violet-400 hover:text-violet-300 transition-colors"
        >
          Create account
        </Link>
      </p>
    </div>
  );
}
