'use client';

import React from 'react';

export default function SocialLogin() {
  const handleGoogleLogin = () => {
    console.log('[OAUTH] Initiated Google login flow');
    // Implement real OAuth redirect later
  };

  const handleGithubLogin = () => {
    console.log('[OAUTH] Initiated GitHub login flow');
    // Implement real OAuth redirect later
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <div className="h-px flex-1 bg-white/10"></div>
        <span className="text-xs font-semibold text-neutral-500 uppercase tracking-widest shrink-0">
          Or continue with
        </span>
        <div className="h-px flex-1 bg-white/10"></div>
      </div>

      <div className="grid grid-cols-2 gap-3.5">
        {/* Google Button */}
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all text-sm font-semibold text-white cursor-pointer"
        >
          {/* Custom Google Icon */}
          <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
            <path
              fill="#EA4335"
              d="M12 5.04c1.66 0 3.2.57 4.38 1.69l3.27-3.27C17.67 1.6 15.02 1 12 1 7.35 1 3.39 3.67 1.39 7.56l3.85 2.99c.9-2.7 3.4-4.51 6.76-4.51z"
            />
            <path
              fill="#4285F4"
              d="M23.49 12.27c0-.81-.07-1.59-.2-2.36H12v4.51h6.46c-.29 1.48-1.14 2.73-2.4 3.58l3.7 2.87c2.16-2 3.73-4.94 3.73-8.6z"
            />
            <path
              fill="#FBBC05"
              d="M5.24 14.56a7.1 7.1 0 0 1 0-4.12l-3.85-2.99a11.96 11.96 0 0 0 0 10.1l3.85-2.99z"
            />
            <path
              fill="#34A853"
              d="M12 23c3.24 0 5.97-1.07 7.96-2.91l-3.7-2.87c-1.03.69-2.35 1.1-4.26 1.1-3.36 0-5.86-1.81-6.76-4.51l-3.85 2.99C3.39 20.33 7.35 23 12 23z"
            />
          </svg>
          Google
        </button>

        {/* GitHub Button */}
        <button
          type="button"
          onClick={handleGithubLogin}
          className="flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all text-sm font-semibold text-white cursor-pointer"
        >
          {/* Custom GitHub Icon */}
          <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
          </svg>
          GitHub
        </button>
      </div>
    </div>
  );
}
