'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, Film, Flame, Play, CheckCircle2, Share2 } from 'lucide-react';
import Image from 'next/image';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen bg-[#030014] bg-grid-pattern animate-grid flex overflow-hidden">
      {/* Background glowing gradients */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-radial-glow pointer-events-none rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-125 h-125 bg-radial-glow-pink pointer-events-none rounded-full blur-3xl opacity-20"></div>

      {/* Main Split Container */}
      <div className="w-full flex">
        
        {/* Left Panel: Centered Auth Form */}
        <div className="flex-1 flex flex-col justify-between py-8 px-6 sm:px-12 relative z-10 w-full max-w-xl mx-auto lg:max-w-none">
          {/* Logo Header */}
          <div className="flex justify-start">
            <Link href="/" className="flex items-center gap-2 cursor-pointer group">
              <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-linear-to-br from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-500/25">
                <Sparkles className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-lg font-bold tracking-tight text-white group-hover:text-neutral-200 transition-colors">
                ViralCraft
              </span>
            </Link>
          </div>

          {/* Form Card Container */}
          <div className="flex-1 flex items-center justify-center py-10 w-full max-w-md mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full p-8 rounded-3xl border border-white/5 bg-white/1 backdrop-blur-md shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-8 right-8 h-px bg-linear-to-r from-transparent via-violet-500/20 to-transparent"></div>
              {children}
            </motion.div>
          </div>

          {/* Clean Footer terms links */}
          <div className="flex justify-center text-xs text-neutral-500 gap-4">
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <span>•</span>
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>

        {/* Right Panel: Showcase (Desktop Only) */}
        <div className="hidden lg:flex flex-1 relative bg-black/30 border-l border-white/5 flex-col items-center justify-center px-16 text-center select-none overflow-hidden">
          {/* Panning grid inside right panel */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          
          <div className="relative z-10 max-w-lg flex flex-col items-center">
            {/* Sparkling badge */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-semibold uppercase tracking-wider mb-6"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>AI Dashboard Preview</span>
            </motion.div>

            {/* Headline */}
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight mb-4">
              Turn Every Long Video Into <br />
              <span className="bg-linear-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
                10+ Viral Shorts
              </span>
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed mb-10 max-w-sm">
              Our AI automatically detects key moments, adds animated word-level highlights, reframes to 9:16 layout, and publishes to socials.
            </p>

            {/* Desktop Showcase Visual Mockup */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full rounded-2xl border border-white/10 bg-neutral-900/60 p-4 shadow-2xl relative overflow-hidden text-left"
            >
              {/* Inner overlay */}
              <div className="absolute inset-0 bg-linear-to-tr from-violet-500/5 via-transparent to-pink-500/5 pointer-events-none"></div>

              {/* Header simulator */}
              <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/60"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/60"></div>
                </div>
                <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">AI CLIP ENGINE</span>
              </div>

              {/* Content mock rows */}
              <div className="space-y-3.5">
                {/* Row 1: Active task */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/2 border border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-violet-600/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
                      <Film className="w-4 h-4 animate-pulse" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">Full-Podcast-Episode-08.mp4</h4>
                      <p className="text-[10px] text-neutral-500 mt-0.5">58 minutes duration • Processing complete</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-violet-500/10 border border-violet-500/25 text-violet-300">
                    Done
                  </span>
                </div>

                {/* Grid stats */}
                <div className="grid grid-cols-2 gap-3.5">
                  {/* Stat 1 */}
                  <div className="p-3.5 rounded-xl bg-white/2 border border-white/5 flex flex-col gap-1.5">
                    <span className="text-[10px] font-semibold text-neutral-500 uppercase tracking-wider">CLIPS CREATED</span>
                    <span className="text-xl font-extrabold text-white flex items-center gap-1.5">
                      12 Shorts
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    </span>
                  </div>

                  {/* Stat 2 */}
                  <div className="p-3.5 rounded-xl bg-white/2 border border-white/5 flex flex-col gap-1.5">
                    <span className="text-[10px] font-semibold text-neutral-500 uppercase tracking-wider">AI VIRAL SCORE</span>
                    <span className="text-xl font-extrabold text-white flex items-center gap-1.5">
                      98% Potential
                      <Flame className="w-4 h-4 text-orange-500 fill-orange-500" />
                    </span>
                  </div>
                </div>

                {/* Subtitle simulation timeline */}
                <div className="p-3.5 rounded-xl bg-white/2 border border-white/5">
                  <span className="text-[10px] font-semibold text-neutral-500 uppercase tracking-wider block mb-2">AUTOGENERATED CAPTIONS</span>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-violet-600/10 flex items-center justify-center text-violet-400">
                      <Play className="w-3 h-3 fill-violet-400 text-violet-400 translate-x-0.5" />
                    </div>
                    <p className="text-[11px] text-white font-bold leading-normal italic">
                      “And that <span className="text-yellow-400 bg-yellow-500/10 px-1 py-0.5 rounded">secret</span> changed my entire career...”
                    </p>
                  </div>
                </div>

                {/* Sync status */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/2 border border-white/5">
                  <div className="flex items-center gap-2">
                    <Share2 className="w-3.5 h-3.5 text-neutral-400" />
                    <span className="text-[11px] text-neutral-400 font-medium">Auto-Sync platforms</span>
                  </div>
                  <div className="flex gap-1.5">
                    {['YT', 'TT', 'IG'].map((item) => (
                      <span key={item} className="w-5 h-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[8px] font-extrabold text-neutral-300">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
