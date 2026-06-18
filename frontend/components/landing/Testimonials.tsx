'use client';

import { motion } from 'framer-motion';
import { Star, MessageSquare } from 'lucide-react';

const testimonials = [
  {
    quote: 'Saved me 5 hours per video. The AI auto-reframing is crazy accurate, keeping me centered even when I pace around the studio.',
    author: 'Alex Rivera',
    handle: '@alextech',
    role: 'YouTube Creator (500K+ Subs)',
    color: 'from-violet-500 to-indigo-500',
  },
  {
    quote: 'Generated 20 clips from one single podcast episode. Our social channels are growing at 300% month-over-month. ViralCraft is an unfair advantage.',
    author: 'Sarah Jenkins',
    handle: '@sarahgrows',
    role: 'Growth Marketer',
    color: 'from-fuchsia-500 to-pink-500',
  },
  {
    quote: 'The virality score matches up with our actual TikTok data surprisingly well. It helps us filter out low-hook content before uploading.',
    author: 'Marcus Chen',
    handle: '@marcusclips',
    role: 'Agency Founder (10M+ Monthly Views)',
    color: 'from-blue-500 to-cyan-500',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 bg-[#030014] overflow-hidden">
      {/* Background visual overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-radial-glow pointer-events-none rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/25 bg-violet-500/5 text-violet-300 text-xs font-semibold uppercase tracking-widest mb-4"
          >
            Testimonials
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-white"
          >
            What Creators{' '}
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
              Are Saying
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-neutral-400 mt-4 max-w-xl mx-auto text-base"
          >
            Real feedback from creators, agencies, and marketers scaling their content output.
          </motion.p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="relative p-8 rounded-3xl border border-white/5 bg-white/[0.01] backdrop-blur-sm flex flex-col justify-between hover:border-white/10 hover:bg-white/[0.02] border-glow-purple transition-all duration-300 group"
            >
              {/* Highlight bar */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-violet-500/20 to-transparent"></div>

              <div>
                {/* Stars */}
                <div className="flex items-center gap-1 mb-6 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-neutral-300 text-sm leading-relaxed italic mb-8">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                {/* Mock avatar */}
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center font-bold text-white text-sm shadow-md`}>
                  {testimonial.author.charAt(0)}
                </div>

                <div className="text-left">
                  <h4 className="text-sm font-bold text-white tracking-tight">{testimonial.author}</h4>
                  <div className="flex flex-col sm:flex-row sm:gap-2 text-[11px] font-medium text-neutral-400 mt-0.5">
                    <span className="text-violet-400 font-semibold">{testimonial.handle}</span>
                    <span className="hidden sm:inline text-neutral-600">•</span>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
