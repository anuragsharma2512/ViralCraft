'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, Sparkles, CheckCircle, AlertCircle, X, Loader } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [showDemo, setShowDemo] = useState(false);

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
    <section className="relative min-h-screen pt-36 pb-20 overflow-hidden flex flex-col items-center justify-center bg-[#030014] bg-grid-pattern animate-grid">
      {/* Radial glow overlays */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[800px] h-[500px] bg-radial-glow pointer-events-none rounded-full blur-3xl opacity-60 animate-pulse-slow"></div>
      <div className="absolute top-1/3 left-1/4 w-[300px] md:w-[500px] h-[300px] bg-radial-glow-pink pointer-events-none rounded-full blur-3xl opacity-40"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        {/* Sparkle Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-semibold uppercase tracking-wider mb-8"
        >
          <Sparkles className="w-3.5 h-3.5 text-violet-400" />
          <span>AI-Powered Video Clipper</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight max-w-4xl text-white"
        >
          Turn Every Long Video Into{' '}
          <span className="bg-gradient-to-r from-violet-400 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent">
            10+ Viral Shorts
          </span>{' '}
          Automatically
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-neutral-400 max-w-2xl leading-relaxed"
        >
          Upload a video or paste a YouTube link. Our AI finds the best moments, adds captions, reframes the video, and exports viral-ready shorts.
        </motion.p>

        {/* CTA Waitlist and Demo Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 w-full max-w-md"
        >
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

          {/* Form Message Status */}
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

          {/* Watch Demo Trigger */}
          <div className="mt-6 flex justify-center">
            <button
              type="button"
              onClick={() => setShowDemo(true)}
              className="flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white transition-colors cursor-pointer group"
            >
              <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center bg-white/5 group-hover:bg-white/10 transition-colors">
                <Play className="w-3.5 h-3.5 fill-white text-white translate-x-0.5" />
              </div>
              Watch Demo video
            </button>
          </div>
        </motion.div>

        {/* Dashboard 3D Mockup Container */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, type: 'spring', stiffness: 50 }}
          className="mt-16 relative w-full max-w-5xl rounded-2xl border border-white/15 bg-neutral-900/50 backdrop-blur-md p-2.5 shadow-2xl shadow-violet-500/10 group overflow-hidden"
          style={{ perspective: 1000 }}
        >
          {/* Inner Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/5 via-transparent to-pink-500/5 pointer-events-none"></div>
          
          <motion.div 
            whileHover={{ rotateX: 1, rotateY: -1, scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            className="rounded-xl overflow-hidden border border-white/5 relative aspect-[16/10]"
          >
            <Image
              src="/dashboard.png"
              alt="ViralCraft AI Dashboard Editor Mockup"
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Demo Video Modal Popup */}
      <AnimatePresence>
        {showDemo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl bg-neutral-950 border border-white/10 rounded-2xl overflow-hidden aspect-video shadow-2xl"
            >
              {/* Modal Close Button */}
              <button
                onClick={() => setShowDemo(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 border border-white/10 text-white flex items-center justify-center hover:bg-black/80 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Video placeholder display */}
              <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-violet-950/20 to-neutral-950 text-center">
                <div className="w-20 h-20 rounded-full bg-violet-600/20 border border-violet-500/30 flex items-center justify-center mb-6 animate-pulse">
                  <Play className="w-8 h-8 fill-violet-400 text-violet-400 translate-x-1" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">ViralCraft Product Walkthrough</h3>
                <p className="text-neutral-400 max-w-md text-sm mb-6">
                  See how our AI analyzes a 45-minute YouTube interview, crops the faces automatically, creates moving word-level highlights, and outputs 8 ready-to-schedule clips in under 3 minutes.
                </p>
                <div className="px-6 py-2.5 rounded-full border border-white/5 bg-white/5 text-xs text-neutral-400">
                  Interactive demo video playing in staging mode
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
