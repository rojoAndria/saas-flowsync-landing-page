import { motion } from 'framer-motion'
import { Zap, Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-3"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between
                      bg-gray-950/70 backdrop-blur-xl border border-white/8
                      rounded-2xl px-5 py-3 shadow-lg shadow-black/20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center
                          group-hover:bg-indigo-500 transition-colors">
            <Zap className="w-4 h-4 text-white fill-white" />
          </div>
          <span className="text-lg font-bold tracking-tight">
            Flow<span className="text-indigo-400">Sync</span>
          </span>
        </a>

        {/* Links desktop */}
        <div className="hidden md:flex items-center gap-7 text-sm text-gray-400">
          {['Features', 'How it works', 'Pricing'].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s/g, '')}`}
              className="hover:text-white transition-colors relative group"
            >
              {link}
              <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-indigo-400
                               scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
          ))}
        </div>

        {/* CTA desktop */}
        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors px-3 py-1.5">
            Sign in
          </a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="text-sm px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500
                       font-semibold transition-colors shadow-md shadow-indigo-500/20"
          >
            Get started →
          </motion.a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-400 hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-2 mx-auto max-w-6xl bg-gray-900/95 backdrop-blur-xl
                     border border-white/8 rounded-2xl p-5 flex flex-col gap-4 text-sm"
        >
          {['Features', 'How it works', 'Pricing'].map((link) => (
            <a key={link} href={`#${link.toLowerCase().replace(/\s/g, '')}`}
               onClick={() => setMenuOpen(false)}
               className="text-gray-300 hover:text-white transition-colors">
              {link}
            </a>
          ))}
          <div className="border-t border-white/8 pt-4 flex flex-col gap-3">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Sign in</a>
            <a href="#" className="px-4 py-2.5 rounded-xl bg-indigo-600 text-center
                                    font-semibold hover:bg-indigo-500 transition-colors">
              Get started →
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
