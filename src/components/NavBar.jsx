import React, { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Experience', to: '/experience' },
  { label: 'Education', to: '/education' },
  { label: 'Projects', to: '/projects' },
  { label: 'Skills', to: '/skills' },
]

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-[#f4f4f4] border-b border-navy/20"
    >
      <nav className="w-full pl-20 pr-10 h-18 py-4 flex items-center justify-between">
        <NavLink to="/" className="font-serif text-lg text-navy font-medium tracking-wider">
          SB
        </NavLink>

        <ul className="hidden md:flex items-center gap-4">
          {links.map((link, i) => (
            <React.Fragment key={link.to}>
              <li>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `px-3 py-1.5 text-sm font-serif uppercase tracking-wider rounded border transition-colors duration-200 ${
                      isActive
                        ? 'text-white bg-navy border-navy'
                        : 'text-dim border-navy/40 hover:bg-navy hover:text-white hover:border-navy'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            </React.Fragment>
          ))}
        </ul>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-px bg-navy transition-all duration-200 origin-center ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-5 h-px bg-navy transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-navy transition-all duration-200 origin-center ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-[#f4f4f4] border-b border-navy/20 px-6 pb-4">
          <ul className="flex flex-col items-center gap-3 pt-2">
            {links.map((link) => (
              <li key={link.to} className="w-full">
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `block w-full text-center px-4 py-2 text-sm font-serif uppercase tracking-wider rounded border transition-colors duration-200 ${
                      isActive
                        ? 'text-white bg-navy border-navy'
                        : 'text-dim border-navy/40 hover:bg-navy hover:text-white hover:border-navy'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
