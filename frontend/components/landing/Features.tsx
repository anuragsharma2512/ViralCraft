'use client';

import { motion } from 'framer-motion';
import { BrainCircuit, Crop, Type, Gauge, Share2, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: <BrainCircuit className="w-6 h-6 text-violet-400" />,
    title: 'AI Highlight Detection',
    description: 'Our advanced neural network analyzes audio cues, facial expressions, and pacing to instantly isolate high-retention highlights.',
  },
  {
    icon: <Crop className="w-6 h-6 text-fuchsia-400" />,
    title: 'Auto Reframing',
    description: 'Keep the active speaker dead-center at all times. Smooth, intelligent panning converts landscape (16:9) to portrait (9:16) automatically.',
  },
  {
    icon: <Type className="w-6 h-6 text-indigo-400" />,
    title: 'Dynamic Captions',
    description: 'Generate word-by-word interactive subtitles styled like top creators. Auto-emojis and custom highlighting maximize audience retention.',
  },
  {
    icon: <Gauge className="w-6 h-6 text-violet-400" />,
    title: 'Virality Score',
    description: 'Unique predictor score checks hook strength, pacing, and viral potential against social algorithms before you hit upload.',
  },
  {
    icon: <Share2 className="w-6 h-6 text-fuchsia-400" />,
    title: 'Multi-Platform Export',
    description: 'One-click publish directly to TikTok, YouTube Shorts, and Instagram Reels with custom descriptions and optimal aspect settings.',
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-indigo-400" />,
    title: 'Analytics Dashboard',
    description: 'Track aggregate views, viewer retention curves, and performance analytics across all social accounts in one centralized dashboard.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
};

export default function Features() {
  return (
    <section id="features" className="relative py-24 bg-[#030014] overflow-hidden">
      {/* Visual background glows */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-radial-glow pointer-events-none rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-radial-glow-pink pointer-events-none rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/25 bg-violet-500/5 text-violet-300 text-xs font-semibold uppercase tracking-widest mb-4"
          >
            Features
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-white"
          >
            Engineered For{' '}
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
              Maximum Reach
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-neutral-400 mt-4 max-w-xl mx-auto text-base"
          >
            Everything you need to scale your short-form content output without sacrificing edit quality.
          </motion.p>
        </div>

        {/* Feature Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              className="relative p-8 rounded-3xl border border-white/5 bg-white/[0.01] backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.02] hover:border-white/10 border-glow-purple overflow-hidden group"
            >
              {/* Card glowing header anchor */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-violet-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/10 group-hover:border-white/10 transition-all">
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                {feature.title}
              </h3>
              
              <p className="text-sm leading-relaxed text-neutral-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
