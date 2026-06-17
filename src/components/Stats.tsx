import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { stats } from '../data'

function useCountUp(target: number, duration = 1800, active = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    let startTime: number | null = null
    const isDecimal = !Number.isInteger(target)

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = eased * target
      setCount(isDecimal ? Math.round(current * 100) / 100 : Math.floor(current))
      if (progress < 1) requestAnimationFrame(step)
      else setCount(target)
    }

    requestAnimationFrame(step)
  }, [active, target, duration])

  return count
}

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const count = useCountUp(stat.value, 1800, inView)
  const Icon = stat.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="flex flex-col items-center text-center p-8 rounded-2xl border border-white/8
                 bg-white/[0.03] hover:border-white/14 hover:bg-white/[0.055] transition-all
                 duration-300 group"
    >
      <div className={`inline-flex p-3 rounded-xl ${stat.bg} border ${stat.border} mb-5
                       group-hover:scale-110 transition-transform duration-300`}>
        <Icon className={`w-6 h-6 ${stat.color}`} strokeWidth={1.8} />
      </div>
      <div className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2">
        <span className={stat.color}>{count}</span>
        <span className="text-white/60 text-3xl">{stat.suffix}</span>
      </div>
      <p className="text-gray-400 text-sm font-medium">{stat.label}</p>
    </motion.div>
  )
}

export default function Stats() {
  return (
    <section className="py-20 px-4 border-y border-white/6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/3 via-transparent
                      to-purple-600/3 pointer-events-none" />
      <div className="max-w-5xl mx-auto relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
