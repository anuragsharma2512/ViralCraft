'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useRouter } from 'next/navigation';
import { Loader2, CheckCircle2, AlertCircle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { PasswordInput } from './PasswordInput';

const resetPasswordSchema = z
  .object({
    password: z.string().min(8, 'Password must be at least 8 characters'),
    confirmPassword: z.string().min(1, 'Please confirm your password'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

type ResetPasswordInput = z.infer<typeof resetPasswordSchema>;

export default function ResetPasswordForm() {
  const router = useRouter();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordInput>({
    resolver: zodResolver(resetPasswordSchema),
  });

  const onSubmit = async (data: ResetPasswordInput) => {
    setStatus('loading');
    setErrorMessage('');

    try {
      // Simulate password reset API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setStatus('success');
      // Redirect to login page
      setTimeout(() => {
        router.push('/auth/login');
      }, 2000);
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Forms header */}
      <div className="text-left">
        <h2 className="text-2xl font-extrabold text-white tracking-tight">Set New Password</h2>
        <p className="text-sm text-neutral-400 mt-1.5">
          Enter your new password below. It must be at least 8 characters long.
        </p>
      </div>

      {/* Success/Error Notices */}
      {status === 'success' && (
        <div className="flex items-center gap-2.5 text-emerald-400 text-sm bg-emerald-500/10 py-3 px-4 rounded-xl border border-emerald-500/20">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>Password reset successfully! Redirecting to login...</span>
        </div>
      )}

      {status === 'error' && (
        <div className="flex items-center gap-2.5 text-rose-400 text-sm bg-rose-500/10 py-3 px-4 rounded-xl border border-rose-500/20">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Reset Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        {/* New Password */}
        <PasswordInput
          label="New Password"
          placeholder="••••••••"
          disabled={status === 'loading' || status === 'success'}
          error={errors.password?.message}
          {...register('password')}
        />

        {/* Confirm Password */}
        <PasswordInput
          label="Confirm New Password"
          placeholder="••••••••"
          disabled={status === 'loading' || status === 'success'}
          error={errors.confirmPassword?.message}
          {...register('confirmPassword')}
        />

        {/* Submit */}
        <button
          type="submit"
          disabled={status === 'loading' || status === 'success'}
          className="mt-2 w-full py-3.5 rounded-xl bg-linear-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-lg shadow-violet-500/25 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer disabled:opacity-50"
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Resetting password...
            </>
          ) : (
            'Reset Password'
          )}
        </button>
      </form>

      {/* Back button */}
      <div className="text-center mt-2">
        <Link
          href="/auth/login"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to login
        </Link>
      </div>
    </div>
  );
}
