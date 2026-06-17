import { motion, useAnimationFrame, useMotionValue } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { testimonials } from '../data'

// card width (340px) + left margin (12px) + right margin (12px) = 364px per slot
const CARD_SLOT = 364

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div
      style={{ width: 340, marginLeft: 12, marginRight: 12, flexShrink: 0 }}
      className="p-6 rounded-2xl border border-white/8 bg-white/[0.03]
                 hover:border-white/14 hover:bg-white/[0.055] transition-all duration-300"
    >
      <Quote className="w-5 h-5 text-indigo-400/60 mb-4" />
      <p className="text-gray-300 text-sm leading-relaxed mb-6">"{t.text}"</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`w-9 h-9 rounded-full ${t.color} flex items-center justify-center
                           text-xs font-bold text-white flex-shrink-0`}>
            {t.avatar}
          </div>
          <div>
            <p className="text-sm font-semibold text-white">{t.name}</p>
            <p className="text-xs text-gray-500">{t.role}</p>
          </div>
        </div>
        <div className="flex gap-0.5">
          {[...Array(t.rating)].map((_, i) => (
            <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
      </div>
    </div>
  )
}

function MarqueeRow({ items, speed, reverse = false }: {
  items: typeof testimonials
  speed: number
  reverse?: boolean
}) {
  const trackWidth = items.length * CARD_SLOT
  // Forward starts at 0, reverse starts offset by one full set so wrap is seamless
  const x = useMotionValue(reverse ? -trackWidth : 0)

  useAnimationFrame((_, delta) => {
    const step = (speed * delta) / 1000
    let current = x.get()

    if (reverse) {
      current += step
      if (current >= 0) current -= trackWidth
    } else {
      current -= step
      if (current <= -trackWidth) current += trackWidth
    }

    x.set(current)
  })

  // Render 3 copies so there is always content on screen regardless of offset
  const tripled = [...items, ...items, ...items]

  return (
    <div className="overflow-hidden">
      <motion.div className="flex" style={{ x }}>
        {tripled.map((t, i) => (
          <TestimonialCard key={`${t.name}-${i}`} t={t} />
        ))}
      </motion.div>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-4 mb-16 px-4"
      >
        <p className="text-indigo-400 font-semibold text-sm uppercase tracking-widest">
          Testimonials
        </p>
        <h2 className="text-4xl md:text-5xl font-bold">
          Loved by teams everywhere
        </h2>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          Don't take our word for it — here's what our customers say.
        </p>
      </motion.div>

      <div className="relative space-y-4">
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-950
                        to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-950
                        to-transparent z-10 pointer-events-none" />

        <MarqueeRow items={testimonials} speed={45} />
        <MarqueeRow items={[...testimonials].reverse()} speed={38} reverse />
      </div>
    </section>
  )
}
