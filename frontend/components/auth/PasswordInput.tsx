'use client';

import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
}

export const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ error, label, className = '', ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <div className="w-full flex flex-col gap-1.5 text-left">
        {label && (
          <label className="text-xs font-semibold text-neutral-400 tracking-wide uppercase">
            {label}
          </label>
        )}
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            ref={ref}
            className={`w-full px-4 py-3 pr-11 rounded-xl bg-white/5 border text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all text-sm ${
              error ? 'border-rose-500/50 focus:ring-rose-500/30' : 'border-white/10'
            } ${className}`}
            {...props}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-300 transition-colors cursor-pointer"
          >
            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>
        {error && <span className="text-xs text-rose-400 mt-0.5">{error}</span>}
      </div>
    );
  }
);

PasswordInput.displayName = 'PasswordInput';
