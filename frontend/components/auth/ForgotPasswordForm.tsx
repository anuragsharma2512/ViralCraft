'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2, Mail, CheckCircle2, AlertCircle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const forgotPasswordSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Please enter a valid email address'),
});

type ForgotPasswordInput = z.infer<typeof forgotPasswordSchema>;

export default function ForgotPasswordForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordInput>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = async (data: ForgotPasswordInput) => {
    setStatus('loading');
    setErrorMessage('');

    try {
      // Simulate recovery API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      if (data.email.includes('error')) {
        throw new Error('No account found with this email address.');
      }

      setStatus('success');
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Forms header */}
      <div className="text-left">
        <h2 className="text-2xl font-extrabold text-white tracking-tight">Reset Password</h2>
        <p className="text-sm text-neutral-400 mt-1.5">
          Enter your email address and we'll send you a link to recover your account.
        </p>
      </div>

      {/* Success/Error Notices */}
      {status === 'success' ? (
        <div className="flex flex-col gap-4 text-center py-6 px-4 bg-emerald-500/10 rounded-2xl border border-emerald-500/20">
          <div className="mx-auto w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-base font-bold text-white">Check your email</h3>
            <p className="text-xs text-neutral-400 max-w-xs mx-auto">
              We have sent a password reset link to your email. Click the link to set a new password.
            </p>
          </div>
          <Link
            href="/auth/login"
            className="mt-4 text-sm font-semibold text-violet-400 hover:text-violet-300 transition-colors flex items-center justify-center gap-1.5"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to login
          </Link>
        </div>
      ) : (
        <>
          {status === 'error' && (
            <div className="flex items-center gap-2.5 text-rose-400 text-sm bg-rose-500/10 py-3 px-4 rounded-xl border border-rose-500/20">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <div className="w-full flex flex-col gap-1.5 text-left">
              <label className="text-xs font-semibold text-neutral-400 tracking-wide uppercase">
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  placeholder="name@company.com"
                  disabled={status === 'loading'}
                  className={`w-full pl-11 pr-4 py-3 rounded-xl bg-white/5 border text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all text-sm ${
                    errors.email ? 'border-rose-500/50 focus:ring-rose-500/30' : 'border-white/10'
                  }`}
                  {...register('email')}
                />
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500 pointer-events-none" />
              </div>
              {errors.email && (
                <span className="text-xs text-rose-400 mt-0.5">{errors.email.message}</span>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === 'loading'}
              className="mt-2 w-full py-3.5 rounded-xl bg-linear-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-lg shadow-violet-500/25 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer disabled:opacity-50"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending recovery link...
                </>
              ) : (
                'Send Recovery Link'
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
        </>
      )}
    </div>
  );
}
