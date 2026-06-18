import { motion } from 'framer-motion'

const integrations = [
  { name: 'Slack',     color: '#4A154B', letter: 'S' },
  { name: 'Notion',    color: '#000000', letter: 'N' },
  { name: 'GitHub',    color: '#171515', letter: 'G' },
  { name: 'HubSpot',   color: '#FF7A59', letter: 'H' },
  { name: 'Airtable',  color: '#18BFFF', letter: 'A' },
  { name: 'Zapier',    color: '#FF4A00', letter: 'Z' },
  { name: 'Stripe',    color: '#635BFF', letter: 'S' },
  { name: 'Figma',     color: '#F24E1E', letter: 'F' },
  { name: 'Linear',    color: '#5E6AD2', letter: 'L' },
  { name: 'Jira',      color: '#0052CC', letter: 'J' },
  { name: 'Salesforce',color: '#00A1E0', letter: 'S' },
  { name: 'Asana',     color: '#F06A6A', letter: 'A' },
]

function LogoItem({ name, color, letter }: { name: string; color: string; letter: string }) {
  return (
    <div className="flex items-center gap-2.5 px-5 py-3 rounded-xl border border-white/8
                    bg-white/[0.03] hover:border-white/16 hover:bg-white/[0.06]
                    transition-all duration-300 cursor-default group flex-shrink-0">
      <div
        className="w-6 h-6 rounded-md flex items-center justify-center
                   text-white text-xs font-bold flex-shrink-0"
        style={{ backgroundColor: color }}
      >
        {letter}
      </div>
      <span className="text-gray-400 text-sm font-medium group-hover:text-gray-200
                       transition-colors whitespace-nowrap">
        {name}
      </span>
    </div>
  )
}

export default function Integrations() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-gray-500 text-sm font-medium uppercase tracking-widest">
            Works with your existing stack
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Fade edges */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-gray-950
                          to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-gray-950
                          to-transparent z-10 pointer-events-none" />

          {/* Row 1 */}
          <div className="flex gap-3 overflow-hidden mb-3">
            <motion.div
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="flex gap-3"
            >
              {[...integrations, ...integrations].map((item, i) => (
                <LogoItem key={i} {...item} />
              ))}
            </motion.div>
          </div>

          {/* Row 2 — reversed */}
          <div className="flex gap-3 overflow-hidden">
            <motion.div
              animate={{ x: ['-50%', '0%'] }}
              transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
              className="flex gap-3"
            >
              {[...[...integrations].reverse(), ...[...integrations].reverse()].map((item, i) => (
                <LogoItem key={i} {...item} />
              ))}
            </motion.div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-gray-600 text-sm mt-8"
        >
          100+ integrations available · New ones added every week
        </motion.p>
      </div>
    </section>
  )
}
