import { motion } from 'framer-motion'
import { Check, Sparkles } from 'lucide-react'
import { plans } from '../data'

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 px-4 relative">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                      w-[600px] h-[400px] bg-purple-600/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <p className="text-indigo-400 font-semibold text-sm uppercase tracking-widest">Pricing</p>
          <h2 className="text-4xl md:text-5xl font-bold">Simple, transparent pricing</h2>
          <p className="text-gray-400 text-lg">No hidden fees. Cancel anytime.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: plan.highlight ? -4 : -6, transition: { duration: 0.2 } }}
              className={`relative p-8 rounded-2xl border transition-colors
                ${plan.highlight
                  ? 'border-indigo-500/60 bg-gradient-to-b from-indigo-600/15 to-indigo-600/5 scale-105 shadow-2xl shadow-indigo-500/15'
                  : 'border-white/8 bg-white/[0.03] hover:border-white/15'
                }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5
                                px-3 py-1.5 rounded-full bg-indigo-600 text-xs font-semibold text-white
                                shadow-lg shadow-indigo-500/40">
                  <Sparkles className="w-3 h-3" />
                  Most popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-bold text-xl mb-1">{plan.name}</h3>
                <p className="text-gray-400 text-sm">{plan.desc}</p>
              </div>

              <div className="flex items-end gap-1 mb-7">
                <span className="text-5xl font-extrabold tracking-tight">{plan.price}</span>
                {plan.price !== 'Custom' && (
                  <span className="text-gray-400 mb-1.5 text-sm">/month</span>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm">
                    <span className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center
                                     ${plan.highlight ? 'bg-indigo-500/20 text-indigo-400' : 'bg-white/8 text-gray-400'}`}>
                      <Check className="w-3 h-3" strokeWidth={2.5} />
                    </span>
                    <span className="text-gray-300">{f}</span>
                  </li>
                ))}
              </ul>

              <motion.a
                href="#"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`block text-center py-3 rounded-xl font-semibold transition-colors text-sm
                  ${plan.highlight
                    ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/25'
                    : 'border border-white/10 bg-white/5 hover:bg-white/10 text-gray-300'
                  }`}
              >
                {plan.cta}
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-gray-500 text-sm mt-10"
        >
          All plans include a 14-day free trial. No credit card required.
        </motion.p>
      </div>
    </section>
  )
}
