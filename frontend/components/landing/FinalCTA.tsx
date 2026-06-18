'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Loader, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus('success');
        setMessage(data.message);
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong.');
      }
    } catch (err) {
      setStatus('error');
      setMessage('Failed to submit. Please try again.');
    }
  };

  return (
    <section id="cta" className="relative py-24 bg-[#030014] overflow-hidden">
      {/* Background glowing gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-radial-glow pointer-events-none rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl border border-violet-500/30 bg-gradient-to-br from-violet-950/20 via-neutral-950 to-indigo-950/20 p-10 md:p-16 text-center shadow-2xl overflow-hidden group"
        >
          {/* Subtle grid lines inside card */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>

          {/* Sparkles decorations */}
          <Sparkles className="w-10 h-10 text-violet-500/20 absolute -top-2 left-1/4 animate-bounce" />
          <Sparkles className="w-8 h-8 text-pink-500/10 absolute bottom-4 right-1/4 animate-pulse" />

          {/* Headline */}
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
            Ready to Turn Every Video <br />
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-500 to-indigo-400 bg-clip-text text-transparent">
              Into Viral Content?
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-sm md:text-base text-neutral-400 max-w-xl mx-auto mb-10 leading-relaxed">
            Join the waitlist today to secure priority access to our AI tools, template libraries, and exclusive launch-week discounts.
          </p>

          {/* Lead capture form */}
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address..."
                required
                disabled={status === 'loading'}
                className="flex-1 px-5 py-4 rounded-full bg-white/5 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all text-sm"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-6 py-4 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-lg shadow-violet-500/25 transition-all hover:scale-105 cursor-pointer min-w-[140px]"
              >
                {status === 'loading' ? (
                  <Loader className="w-4 h-4 animate-spin" />
                ) : (
                  <>
                    Join Waitlist
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            {/* Validation messages */}
            <AnimatePresence mode="wait">
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-4 flex items-center gap-2 text-emerald-400 text-sm justify-center bg-emerald-500/10 py-2.5 px-4 rounded-xl border border-emerald-500/20"
                >
                  <CheckCircle className="w-4 h-4 shrink-0" />
                  <span>{message}</span>
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-4 flex items-center gap-2 text-rose-400 text-sm justify-center bg-rose-500/10 py-2.5 px-4 rounded-xl border border-rose-500/20"
                >
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{message}</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Subtext info */}
            <p className="mt-6 text-xs text-neutral-500 font-medium">
              No Credit Card Required • Early Beta Access
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
