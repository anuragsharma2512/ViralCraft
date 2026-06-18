'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: { monthly: 0, yearly: 0 },
    description: 'Perfect for testing the AI capabilities.',
    features: [
      '3 video uploads per month',
      'Up to 15 min input video length',
      'Standard AI Highlight Detection',
      'Auto Reframing (9:16 crop)',
      'Watermarked video export',
    ],
    cta: 'Get Started Free',
    popular: false,
  },
  {
    name: 'Creator',
    price: { monthly: 19, yearly: 15 },
    description: 'Ideal for individual creators posting daily.',
    features: [
      '30 video uploads per month',
      'Up to 60 min input video length',
      'Advanced AI Highlight Detection',
      'Dynamic styled captions',
      'AI Virality Score prediction',
      'Watermark-free export',
      'Direct sharing to socials',
    ],
    cta: 'Join Waitlist',
    popular: true,
  },
  {
    name: 'Agency',
    price: { monthly: 49, yearly: 39 },
    description: 'Designed for agencies managing multiple brands.',
    features: [
      'Unlimited video uploads',
      'Up to 120 min input video length',
      'Multi-user workspace access',
      'Custom branding templates',
      'Priority rendering queue',
      'Dedicated analytics dashboard',
      'API access & webhook sync',
    ],
    cta: 'Join Waitlist',
    popular: false,
  },
];

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const scrollToCta = () => {
    const element = document.getElementById('cta');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="relative py-24 bg-[#030014] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-radial-glow pointer-events-none rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Title */}
        <div className="text-center mb-12 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/25 bg-violet-500/5 text-violet-300 text-xs font-semibold uppercase tracking-widest mb-4"
          >
            Pricing
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-white"
          >
            Flexible Plans For{' '}
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
              Every Scale
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-neutral-400 mt-4 max-w-xl mx-auto text-base"
          >
            Choose the plan that matches your production rate. Save up to 20% with annual billing.
          </motion.p>
        </div>

        {/* Toggle Switch */}
        <div className="flex justify-center mb-16">
          <div className="bg-white/5 border border-white/10 p-1.5 rounded-full flex items-center relative gap-1">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer relative z-10 ${
                billingCycle === 'monthly' ? 'text-white bg-violet-600' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer relative z-10 ${
                billingCycle === 'yearly' ? 'text-white bg-violet-600' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Yearly
              <span className="absolute -top-3 -right-4 px-2 py-0.5 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-[8px] font-extrabold text-white uppercase tracking-wider">
                -20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className={`relative rounded-3xl border p-8 flex flex-col justify-between backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] ${
                plan.popular
                  ? 'border-violet-500 bg-violet-950/[0.07] shadow-xl shadow-violet-500/10'
                  : 'border-white/5 bg-white/[0.01] hover:border-white/10 hover:bg-white/[0.02]'
              }`}
            >
              {/* Top glow beam for popular card */}
              {plan.popular && (
                <div className="absolute top-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-violet-400 to-transparent"></div>
              )}

              {/* Popular Badge */}
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-[10px] font-extrabold text-white uppercase tracking-wider flex items-center gap-1 shadow-lg shadow-violet-500/20">
                  <Sparkles className="w-3 h-3 text-white" />
                  Most Popular
                </span>
              )}

              <div>
                {/* Header */}
                <h3 className="text-xl font-bold text-white mb-2 tracking-tight">{plan.name}</h3>
                <p className="text-xs text-neutral-400 mb-6">{plan.description}</p>

                {/* Price */}
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl md:text-5xl font-extrabold text-white">
                    ${billingCycle === 'monthly' ? plan.price.monthly : plan.price.yearly}
                  </span>
                  <span className="text-sm font-medium text-neutral-500">/month</span>
                </div>

                {/* Features List */}
                <div className="space-y-4">
                  {plan.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3 text-sm text-neutral-300">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                        plan.popular ? 'bg-violet-600/20 text-violet-400' : 'bg-white/5 text-neutral-500'
                      }`}>
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={scrollToCta}
                className={`mt-10 w-full py-4 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                  plan.popular
                    ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-500/25 hover:from-violet-500 hover:to-fuchsia-500 hover:scale-105'
                    : 'bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
