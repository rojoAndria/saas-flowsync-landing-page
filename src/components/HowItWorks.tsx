import { motion, type Variants } from 'framer-motion'
import { steps } from '../data'

const lineVariants: Variants = {
  hidden: { scaleY: 0 },
  visible: { scaleY: 1, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function HowItWorks() {
  return (
    <section id="how" className="py-32 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-20"
        >
          <p className="text-indigo-400 font-semibold text-sm uppercase tracking-widest">
            How it works
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">Up and running in 3 steps</h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            From zero to fully automated in under 10 minutes.
          </p>
        </motion.div>

        <div className="relative">
          {/* vertical connector line */}
          <motion.div
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="absolute left-9 top-10 bottom-10 w-px bg-gradient-to-b
                       from-blue-500/40 via-indigo-500/40 to-purple-500/40 origin-top"
          />

          <div className="flex flex-col gap-10">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="flex gap-6 group"
                >
                  {/* Icon circle */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className={`relative flex-shrink-0 w-[72px] h-[72px] rounded-2xl
                                ${step.bg} border ${step.border} flex items-center justify-center
                                z-10 shadow-lg`}
                  >
                    <Icon className={`w-7 h-7 ${step.color}`} strokeWidth={1.6} />
                    <span className={`absolute -top-2 -right-2 text-[10px] font-extrabold
                                      ${step.color} bg-gray-950 border ${step.border}
                                      rounded-full w-6 h-6 flex items-center justify-center`}>
                      {i + 1}
                    </span>
                  </motion.div>

                  {/* Content */}
                  <div className={`flex-1 p-6 rounded-2xl border border-white/6 bg-white/[0.025]
                                   group-hover:border-white/12 group-hover:bg-white/[0.05]
                                   transition-all duration-300`}>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-sm">{step.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
