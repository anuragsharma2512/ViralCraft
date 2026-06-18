'use client';

import { motion } from 'framer-motion';
import { Play, Sparkles, Flame, Eye } from 'lucide-react';
import Image from 'next/image';

const reels = [
  {
    title: 'Podcast Clip',
    category: 'Podcast',
    virality: '98%',
    views: '1.2M',
    image: '/podcast.png',
    caption: '“And that is how we scaled to $10M ARR in 12 months without ads...”',
  },
  {
    title: 'Gaming Highlight',
    category: 'Gaming',
    virality: '95%',
    views: '840K',
    image: '/gaming.png',
    caption: '“NO WAY! The luckiest item drop in cyber arena history! 🤯🔥”',
  },
  {
    title: 'Interview Snippet',
    category: 'Interview',
    virality: '97%',
    views: '2.1M',
    image: '/interview.png',
    caption: '“The single most important skill for developers in 2026 is...”',
  },
  {
    title: 'Tutorial Moment',
    category: 'Tutorial',
    virality: '94%',
    views: '450K',
    image: '/tutorial.png',
    caption: '“Write clean JS in 3 lines using this crazy arrow trick! 🚀💻”',
  },
];

export default function VideoShowcase() {
  return (
    <section id="showcase" className="relative py-24 bg-[#030014] overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-radial-glow pointer-events-none rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/25 bg-violet-500/5 text-violet-300 text-xs font-semibold uppercase tracking-widest mb-4"
          >
            Showcase
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-white"
          >
            See ViralCraft{' '}
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
              In Action
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-neutral-400 mt-4 max-w-xl mx-auto text-base"
          >
            Hover over the vertical cards below to see generated shorts and virality scores.
          </motion.p>
        </div>

        {/* Video Reels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {reels.map((reel, idx) => (
            <motion.div
              key={reel.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="relative rounded-2xl overflow-hidden aspect-[9/16] bg-neutral-900 border border-white/10 group cursor-pointer shadow-2xl hover:shadow-violet-500/10 hover:border-violet-500/40 transition-all duration-300"
            >
              {/* Image preview */}
              <Image
                src={reel.image}
                alt={reel.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Video darker gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/40 opacity-70 group-hover:opacity-80 transition-opacity"></div>

              {/* Top Meta info (Category + Virality Badge) */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/10 backdrop-blur-md text-white border border-white/10">
                  {reel.category}
                </span>

                <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-violet-600/90 backdrop-blur-sm text-white text-[10px] font-bold border border-violet-500/30 shadow-lg">
                  <Flame className="w-3 h-3 fill-white text-white" />
                  <span>{reel.virality} Viral Score</span>
                </div>
              </div>

              {/* Center Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/25 flex items-center justify-center group-hover:scale-115 group-hover:bg-violet-600 group-hover:border-violet-500 text-white transition-all shadow-xl">
                  <Play className="w-5 h-5 fill-white text-white translate-x-0.5" />
                </div>
              </div>

              {/* Bottom Captions & Views info */}
              <div className="absolute bottom-4 left-4 right-4 z-10">
                {/* Simulated captions */}
                <p className="text-xs text-yellow-400 font-semibold mb-3 leading-snug drop-shadow-md text-center bg-black/40 backdrop-blur-[2px] p-2 rounded-lg border border-white/5">
                  {reel.caption}
                </p>

                {/* View Counter */}
                <div className="flex items-center justify-center gap-1 text-[11px] font-bold text-neutral-400">
                  <Eye className="w-3.5 h-3.5" />
                  <span>{reel.views} Estimated Views</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
