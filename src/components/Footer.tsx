import { useState } from 'react'
import { Zap, MessageCircle, Code2, Users, ArrowRight } from 'lucide-react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <footer className="border-t border-white/6 py-16 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Newsletter */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between
                        gap-6 pb-12 mb-12 border-b border-white/6">
          <div>
            <h3 className="font-bold text-lg mb-1">Stay in the loop</h3>
            <p className="text-gray-500 text-sm">Product updates, tips and automation ideas. No spam.</p>
          </div>
          {submitted ? (
            <div className="flex items-center gap-2 text-green-400 text-sm font-medium">
              <span className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center text-xs">✓</span>
              You're on the list!
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                required
                className="flex-1 md:w-64 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10
                           text-sm text-white placeholder-gray-500 outline-none
                           focus:border-indigo-500/50 focus:bg-white/8 transition-all"
              />
              <button
                type="submit"
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-indigo-600
                           hover:bg-indigo-500 text-sm font-semibold transition-colors flex-shrink-0"
              >
                Subscribe
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>

        <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-4 max-w-xs">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
                <Zap className="w-4 h-4 text-white fill-white" />
              </div>
              <span className="text-lg font-bold">Flow<span className="text-indigo-400">Sync</span></span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              The automation platform that moves as fast as your team. Connect, automate, and grow.
            </p>
            <div className="flex items-center gap-3">
              {[MessageCircle, Code2, Users].map((Icon, i) => (
                <a key={i} href="#"
                   className="w-9 h-9 rounded-lg border border-white/8 bg-white/3 flex items-center
                              justify-center text-gray-500 hover:text-white hover:border-white/20
                              hover:bg-white/8 transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 text-sm">
            {[
              { title: 'Product', links: ['Features', 'Pricing', 'Changelog', 'Roadmap'] },
              { title: 'Company', links: ['About', 'Blog', 'Careers', 'Press'] },
              { title: 'Legal', links: ['Privacy', 'Terms', 'Cookies', 'Contact'] },
            ].map((col) => (
              <div key={col.title} className="space-y-3">
                <h4 className="font-semibold text-white text-xs uppercase tracking-widest">{col.title}</h4>
                {col.links.map((link) => (
                  <a key={link} href="#"
                     className="block text-gray-500 hover:text-gray-300 transition-colors">
                    {link}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-white/6 pt-8 flex flex-col md:flex-row items-center
                        justify-between gap-4 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} FlowSync, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
