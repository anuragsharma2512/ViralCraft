'use client';

import { motion } from 'framer-motion';
import { Upload, Cpu, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: <Upload className="w-6 h-6 text-violet-400" />,
    title: 'Upload Long Video',
    description: 'Drop your video files or simply paste a YouTube/Twitch URL. ViralCraft processes almost any format instantly.',
  },
  {
    number: '02',
    icon: <Cpu className="w-6 h-6 text-fuchsia-400" />,
    title: 'AI Magic Processing',
    description: 'Our AI engine analyzes the content, selects high-impact hooks, reframes to 9:16 portrait focus, and compiles styled captions.',
  },
  {
    number: '03',
    icon: <Rocket className="w-6 h-6 text-indigo-400" />,
    title: 'Export & Go Viral',
    description: 'Preview the clips, adjust subtitles if needed, then export. Schedule directly to TikTok, Shorts, and Reels with a single click.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 bg-[#030014] overflow-hidden">
      {/* Background visual overlays */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-radial-glow pointer-events-none rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Title */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/25 bg-violet-500/5 text-violet-300 text-xs font-semibold uppercase tracking-widest mb-4"
          >
            How it works
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-white"
          >
            Three Steps To{' '}
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
              Viral Dominance
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-neutral-400 mt-4 max-w-xl mx-auto text-base"
          >
            No complex timelines or expensive editors. Just automated brilliance in minutes.
          </motion.p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mx-auto relative">
          {/* Connecting dashed line for desktop */}
          <div className="hidden md:block absolute top-[52px] left-[15%] right-[15%] h-[1px] border-t border-dashed border-white/10 z-0"></div>

          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="flex flex-col items-center text-center relative z-10 group"
            >
              {/* Step Circle */}
              <div className="w-16 h-16 rounded-full bg-[#030014] border-2 border-white/10 flex items-center justify-center mb-6 relative group-hover:border-violet-500/40 group-hover:scale-105 transition-all shadow-xl">
                {/* Neon glow */}
                <div className="absolute inset-0 rounded-full bg-violet-500/5 group-hover:bg-violet-500/10 blur-sm"></div>
                {step.icon}

                {/* Step number badge */}
                <span className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white text-[10px] font-bold flex items-center justify-center shadow-md">
                  {step.number}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-neutral-400 max-w-xs">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
