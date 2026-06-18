'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play, CheckCircle2, AlertTriangle, Clock, Sparkles } from 'lucide-react';

export default function BeforeAfter() {
  return (
    <section id="before-after" className="relative py-24 bg-[#030014] overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-radial-glow pointer-events-none rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-white"
          >
            Streamline Your{' '}
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
              Content Workflow
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-neutral-400 mt-4 max-w-xl mx-auto text-base"
          >
            See how ViralCraft transforms hours of manual video production into minutes of automated creation.
          </motion.p>
        </div>

        {/* Side-by-Side Comparison */}
        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Before Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 rounded-3xl border border-red-500/10 bg-red-950/[0.03] p-8 flex flex-col justify-between relative group hover:border-red-500/20 transition-all"
          >
            {/* Top border beam */}
            <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-red-500/20 to-transparent"></div>

            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="px-4 py-1.5 rounded-full border border-red-500/20 bg-red-500/10 text-red-400 text-xs font-bold uppercase tracking-wider">
                  The Old Way
                </span>
                <Clock className="w-5 h-5 text-red-500/60" />
              </div>

              <h4 className="text-2xl font-bold text-neutral-200 mb-2">60 Minute Podcast</h4>
              <p className="text-sm text-neutral-500 mb-6">Hours of painstaking manual audio/video editing</p>

              <div className="space-y-4">
                {[
                  'Manually scrub hours of raw footage to find highlights',
                  'Crop and resize video for portrait orientation (9:16) manually',
                  'Type, time, and style word-by-word subtitles manually',
                  'Struggle to select engaging clips that actually perform',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-neutral-400 text-sm">
                    <AlertTriangle className="w-4 h-4 text-red-500/70 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
              <span className="text-sm text-neutral-500 font-medium">Average Time Spent</span>
              <span className="text-base font-bold text-red-400">4 - 6 Hours</span>
            </div>
          </motion.div>

          {/* Transformation Arrow / Divider */}
          <div className="flex lg:flex-col items-center justify-center gap-4 py-4 lg:py-0 shrink-0">
            <div className="hidden lg:block w-[1px] h-16 bg-gradient-to-b from-transparent to-violet-500/30"></div>
            <div className="relative w-12 h-12 rounded-full border border-violet-500/30 bg-violet-600/10 flex items-center justify-center text-violet-400 shadow-lg shadow-violet-500/10">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div className="hidden lg:block w-[1px] h-16 bg-gradient-to-b from-violet-500/30 to-transparent"></div>
          </div>

          {/* After Card (ViralCraft) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 rounded-3xl border border-violet-500/20 bg-violet-950/[0.05] p-8 flex flex-col justify-between relative group hover:border-violet-500/30 transition-all shadow-2xl shadow-violet-500/5"
          >
            {/* Top border beam */}
            <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-violet-500/30 to-transparent"></div>

            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-violet-400" />
                  ViralCraft AI
                </span>
                <CheckCircle2 className="w-5 h-5 text-violet-400" />
              </div>

              <h4 className="text-2xl font-bold text-white mb-2">12+ Viral-Ready Shorts</h4>
              <p className="text-sm text-neutral-400 mb-6">Fully optimized vertical shorts ready for publishing</p>

              <div className="space-y-4">
                {[
                  'AI automatically detects key high-retention moments',
                  'AI Auto-Reframes focus tracking active speakers in 9:16',
                  'Dynamic caption templates with custom emoji highlights',
                  'Accurate AI Virality Score predicts performance likelihood',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-neutral-200 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
              <span className="text-sm text-neutral-400 font-medium">Average Time Spent</span>
              <span className="text-base font-bold bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
                Under 3 Minutes
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
