import { motion, type Transition } from 'framer-motion'
import { features } from '../data'

const cubicEase: Transition = { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }

export default function Features() {
  return (
    <section id="features" className="py-32 px-4 relative">
      {/* subtle glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px]
                      bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-20"
        >
          <p className="text-indigo-400 font-semibold text-sm uppercase tracking-widest">
            Features
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Everything you need to move faster
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            One platform that replaces five tools and actually makes your team happy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => {
            const Icon = f.icon
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                viewport={{ once: true }}
                transition={{ ...cubicEase, delay: i * 0.08 }}
                className="group relative p-6 rounded-2xl border border-white/8 bg-white/[0.03]
                           hover:border-white/15 hover:bg-white/[0.06] transition-colors duration-300
                           overflow-hidden cursor-default"
              >
                {/* hover glow */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity
                                 duration-500 ${f.bg} blur-2xl rounded-2xl`} />

                <div className="relative">
                  <div className={`inline-flex p-3 rounded-xl ${f.bg} border ${f.border} mb-4`}>
                    <Icon className={`w-5 h-5 ${f.color}`} strokeWidth={1.8} />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-white">{f.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
