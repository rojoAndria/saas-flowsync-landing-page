import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function CtaBanner() {
  return (
    <section className="py-32 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative rounded-3xl border border-indigo-500/25 overflow-hidden
                     bg-gradient-to-br from-indigo-600/20 via-purple-600/10 to-transparent
                     p-12 md:p-16 text-center"
        >
          {/* Animated glows */}
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-20 -left-20 w-80 h-80 bg-indigo-600/30
                       rounded-full blur-[80px] pointer-events-none"
          />
          <motion.div
            animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.35, 0.2] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute -bottom-20 -right-20 w-80 h-80 bg-purple-600/25
                       rounded-full blur-[80px] pointer-events-none"
          />

          {/* Grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)]
                          bg-[size:40px_40px] pointer-events-none" />

          <div className="relative space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                         border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-medium"
            >
              <Sparkles className="w-3.5 h-3.5" />
              No credit card required
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-4xl md:text-6xl font-bold tracking-tight leading-tight"
            >
              Start automating
              <br />
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400
                               bg-clip-text text-transparent">
                today for free.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 text-lg max-w-xl mx-auto"
            >
              Join 2,000+ teams already saving hours every week.
              Set up your first workflow in minutes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
            >
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="group flex items-center gap-2 px-8 py-4 rounded-xl bg-white
                           text-gray-900 font-bold text-base hover:bg-gray-100 transition-colors
                           shadow-xl shadow-white/10"
              >
                Get started — it's free
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 rounded-xl border border-white/15 bg-white/5
                           hover:bg-white/10 font-medium text-gray-300 transition-colors text-base"
              >
                Talk to sales
              </motion.a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-xs text-gray-500 pt-2"
            >
              Free forever plan available · 14-day Pro trial · Cancel anytime
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
