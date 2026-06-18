'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'How does the AI find the best video moments?',
    answer:
      'Our neural networks analyze audio tracks for energy spikes, monitor visual streams for movement or high emotional expressions, and parse transcribed text for key hooks, stories, or punchlines. It then selects moments with the highest retention potential.',
  },
  {
    question: 'What video formats and lengths are supported?',
    answer:
      'We support MP4, MOV, AVI, and MKV file uploads. You can also paste direct links to YouTube videos or Twitch streams. Depending on your plan, we support input videos up to 120 minutes in length.',
  },
  {
    question: 'Can I customize the visual style of the captions?',
    answer:
      'Absolutely. We provide pre-designed template presets inspired by popular creators. You can also fully customize your fonts, stroke colors, active highlighting effects, size, placement, and auto-emoji options.',
  },
  {
    question: 'How accurate is the AI Virality Score?',
    answer:
      'The score is trained on historical data from millions of successful short-form videos. It scores your hook duration, pacing, and visual transitions. While it cannot guarantee performance, it correlates highly with user retention curves.',
  },
  {
    question: 'Can I post directly to TikTok, Reels, and Shorts?',
    answer:
      'Yes! Through official developer API integrations, you can link your TikTok, Instagram Reels, and YouTube channels to ViralCraft and publish or schedule drafts directly from your dashboard.',
  },
  {
    question: 'When will the full platform launch?',
    answer:
      'We are currently in active beta. Joining our waitlist secures early priority access, beta-testing pricing discounts, and regular feature updates as we roll out full access over the coming weeks.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 bg-[#030014] overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-radial-glow-pink pointer-events-none rounded-full blur-3xl opacity-10"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/25 bg-violet-500/5 text-violet-300 text-xs font-semibold uppercase tracking-widest mb-4"
          >
            FAQ
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-white"
          >
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
              Questions
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-neutral-400 mt-4 max-w-xl mx-auto text-base"
          >
            Clear answers to help you understand how ViralCraft accelerates your production.
          </motion.p>
        </div>

        {/* FAQ list */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="rounded-2xl border border-white/5 bg-white/[0.01] overflow-hidden transition-all duration-300 hover:border-white/10"
              >
                {/* Question trigger button */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full py-5 px-6 flex items-center justify-between text-left font-bold text-white hover:text-violet-400 transition-colors cursor-pointer group"
                >
                  <div className="flex items-center gap-3.5 pr-4">
                    <HelpCircle className={`w-5 h-5 shrink-0 ${isOpen ? 'text-violet-400' : 'text-neutral-500'} group-hover:text-violet-400 transition-colors`} />
                    <span className="text-sm md:text-base tracking-tight">{faq.question}</span>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-neutral-400 group-hover:text-white"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                {/* Answer panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="pb-6 px-6 pt-0 border-t border-white/5 mt-0 text-sm leading-relaxed text-neutral-400">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
