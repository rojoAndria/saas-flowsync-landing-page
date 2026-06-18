import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'
import { faqs } from '../data'

function FaqItem({ faq, index }: { faq: { q: string; a: string }; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className={`border rounded-xl overflow-hidden transition-colors duration-300
                  ${open ? 'border-indigo-500/30 bg-indigo-500/5' : 'border-white/8 bg-white/[0.02]'}`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-medium text-white text-sm md:text-base">{faq.q}</span>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className={`flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center
                      transition-colors ${open ? 'border-indigo-400 text-indigo-400' : 'border-white/20 text-gray-400'}`}
        >
          <Plus className="w-3.5 h-3.5" strokeWidth={2.5} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="px-6 pb-5 text-gray-400 text-sm leading-relaxed">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Faq() {
  return (
    <section className="py-32 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-14"
        >
          <p className="text-indigo-400 font-semibold text-sm uppercase tracking-widest">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-bold">Any questions?</h2>
          <p className="text-gray-400 text-lg">
            Everything you need to know before getting started.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FaqItem key={faq.q} faq={faq} index={i} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-gray-500 text-sm mt-10"
        >
          Still have questions?{' '}
          <a href="#" className="text-indigo-400 hover:text-indigo-300 transition-colors underline underline-offset-2">
            Chat with our team
          </a>
        </motion.p>
      </div>
    </section>
  )
}
