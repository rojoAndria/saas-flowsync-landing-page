import { motion, type Variants } from 'framer-motion'
import { ArrowRight, Play, Star } from 'lucide-react'

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
}

const floatingVariants: Variants = {
  initial: { y: 0 },
  animate: {
    y: [-8, 8, -8],
    transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
  },
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center
                        text-center px-4 pt-24 overflow-hidden">

      {/* Multi-layer glow background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                     w-[700px] h-[700px] bg-indigo-600 rounded-full blur-[140px]"
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute top-1/3 left-1/3 w-[400px] h-[400px]
                     bg-purple-600 rounded-full blur-[120px]"
        />
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]
                        bg-[size:64px_64px]" />
        {/* Fade edges */}
        <div className="absolute inset-0 bg-radial-[ellipse_at_center] from-transparent via-transparent to-gray-950/80" />
      </div>

      {/* Floating orbs */}
      <motion.div
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        className="absolute top-1/4 left-[10%] w-3 h-3 rounded-full bg-indigo-400/40 blur-sm"
      />
      <motion.div
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        style={{ animationDelay: '2s' }}
        className="absolute top-1/3 right-[12%] w-2 h-2 rounded-full bg-purple-400/40 blur-sm"
      />
      <motion.div
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        className="absolute bottom-1/3 left-[15%] w-4 h-4 rounded-full bg-blue-400/20 blur-md"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl space-y-7 relative"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="flex justify-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
            border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-400" />
            </span>
            Now in public beta — join 2,000+ teams
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.08]"
        >
          Automate your{' '}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400
                             bg-clip-text text-transparent">
              workflow
            </span>
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r
                         from-indigo-400 via-purple-400 to-pink-400 origin-left rounded-full"
            />
          </span>
          ,{' '}
          <br className="hidden md:block" />
          effortlessly.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
        >
          FlowSync connects your tools, automates your processes, and gives your
          team back hours every week.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="group flex items-center gap-2 px-8 py-3.5 rounded-xl bg-indigo-600
                       hover:bg-indigo-500 font-semibold text-white transition-colors
                       shadow-xl shadow-indigo-500/30"
          >
            Start for free
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </motion.a>
          <motion.a
            href="#how"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-8 py-3.5 rounded-xl border border-white/10
                       bg-white/5 hover:bg-white/10 font-medium text-gray-300 transition-colors"
          >
            <Play className="w-4 h-4 fill-gray-300" />
            See how it works
          </motion.a>
        </motion.div>

        {/* Social proof */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-3 pt-2"
        >
          <div className="flex -space-x-2">
            {['bg-indigo-500', 'bg-purple-500', 'bg-pink-500', 'bg-blue-500'].map((c, i) => (
              <div key={i} className={`w-7 h-7 rounded-full ${c} border-2 border-gray-950
                                       flex items-center justify-center text-xs font-bold`}>
                {['A', 'B', 'C', 'D'][i]}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span className="text-sm text-gray-400">
            <span className="text-gray-200 font-medium">4.9/5</span> from 500+ reviews
          </span>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-white/20 flex items-start
                     justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-white/40" />
        </motion.div>
      </motion.div>
    </section>
  )
}
