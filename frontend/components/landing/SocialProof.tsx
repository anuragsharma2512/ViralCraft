'use client';

import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const stats = [
  { label: 'Videos Processed', value: '10,000+' },
  { label: 'Shorts Generated', value: '2M+' },
  { label: 'Hours Saved', value: '500K+' },
];

const platforms = [
  {
    name: 'YouTube',
    icon: (
      <svg className="w-5 h-5 text-red-500 fill-red-500" viewBox="0 0 24 24">
        <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.516 3.516 12 3.516 12 3.516s-7.516 0-9.388.539a3.003 3.003 0 0 0-2.11 2.108C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.108C4.484 20.484 12 20.484 12 20.484s7.516 0 9.388-.539a3.003 3.003 0 0 0 2.11-2.108C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
    color: 'hover:text-red-500',
  },
  {
    name: 'TikTok',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.74-3.99-1.72-.08-.07-.15-.17-.26-.21-.01.95.01 1.9.01 2.84 0 2.89-.83 5.84-3.07 7.56-2.4 1.83-5.83 2.14-8.52.89-2.83-1.3-4.71-4.43-4.32-7.61.3-2.5 2.01-4.82 4.47-5.59.85-.26 1.74-.35 2.62-.35.01 4 .01 8 0 12 .09.52.4.99.88 1.19.7.3 1.56.24 2.19-.24.71-.56.96-1.57.6-2.41-.33-.8-.92-1.44-1.76-1.68-.08-.02-.16-.06-.23-.09v-4.14c1.17.2 2.29.8 3.09 1.68.74.83 1.09 1.95 1.13 3.06.02-3.18.01-6.37.01-9.56-.99-.02-1.98-.31-2.82-.84-.89-.57-1.55-1.47-1.83-2.49h-3.92V.02h3.91z" />
      </svg>
    ),
    color: 'hover:text-cyan-400',
  },
  {
    name: 'Instagram',
    icon: (
      <svg className="w-5 h-5 text-pink-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
    color: 'hover:text-pink-500',
  },
  {
    name: 'LinkedIn',
    icon: (
      <svg className="w-5 h-5 text-blue-500 fill-blue-500" viewBox="0 0 24 24">
        <path d="M22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003zM7.12 20.452H3.555V9h3.564v11.452zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm15.11 13.019h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286z"/>
      </svg>
    ),
    color: 'hover:text-blue-500',
  },
];

export default function SocialProof() {
  return (
    <section className="relative py-20 bg-black/40 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        {/* Creator support notification */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 text-neutral-500 text-xs font-semibold uppercase tracking-widest mb-10"
        >
          <Users className="w-4 h-4 text-violet-500" />
          <span>Trusted by creators worldwide</span>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl text-center mb-16">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative p-6 rounded-2xl border border-white/5 bg-white/[0.01] backdrop-blur-sm group hover:border-white/10 transition-colors"
            >
              {/* Highlight background lines */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[1px] bg-gradient-to-r from-transparent via-violet-500/50 to-transparent"></div>
              
              <h3 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-white via-neutral-100 to-neutral-300 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                {stat.value}
              </h3>
              <p className="text-sm font-medium text-neutral-400 mt-2 uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Logos container */}
        <div className="flex flex-col items-center w-full">
          <p className="text-sm text-neutral-500 mb-6 font-medium">Export optimized layouts directly to</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {platforms.map((platform, idx) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`flex items-center gap-2.5 text-neutral-400 font-semibold transition-colors duration-300 ${platform.color} cursor-pointer group`}
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/10 group-hover:scale-110 transition-all">
                  {platform.icon}
                </div>
                <span className="text-sm tracking-tight text-neutral-400 group-hover:text-white transition-colors">
                  {platform.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
