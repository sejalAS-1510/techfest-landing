import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../data/festivalData';

export function Navbar({ onOpenRegister }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href, isAction) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (isAction && onOpenRegister) {
      onOpenRegister();
      return;
    }

    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#050505]/85 backdrop-blur-md border-b border-white/10 py-4 shadow-2xl'
            : 'bg-transparent border-b border-white/[0.04] py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex items-center space-x-3 text-white focus:outline-none cursor-pointer"
          >
            <div className="h-6 w-1.5 bg-[#e50914] transition-transform duration-300 group-hover:scale-y-125" />
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-black tracking-tighter uppercase font-['Space_Grotesk'] text-white">
                TECHFEST
              </span>
              <span className="text-[9px] font-mono tracking-[0.25em] text-neutral-400 uppercase -mt-1">
                30TH EDITION // CA SUBMISSION
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center space-x-10">
            {NAV_LINKS.map((link) => {
              if (link.isAction) {
                return (
                  <button
                    key={link.label}
                    onClick={(e) => handleLinkClick(e, link.href, true)}
                    className="relative group overflow-hidden px-5 py-2 text-xs font-mono font-semibold uppercase tracking-wider text-white border border-white/20 transition-all duration-300 hover:border-[#e50914] hover:bg-[#e50914] cursor-pointer"
                  >
                    <span className="relative z-10 flex items-center gap-1.5">
                      {link.label}
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </button>
                );
              }

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href, false)}
                  className="relative text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 hover:text-white transition-colors duration-200 py-1"
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white hover:text-[#e50914] transition-colors focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Full-Screen Overlay Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 bg-[#050505] flex flex-col justify-between p-8 pt-28 md:hidden"
          >
            <div className="space-y-6">
              <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#e50914]">
                // NAVIGATION PROTOCOL
              </div>
              <div className="flex flex-col space-y-5">
                {NAV_LINKS.map((link, idx) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * idx }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href, link.isAction)}
                      className={`text-2xl font-black font-['Space_Grotesk'] tracking-tight uppercase flex items-center justify-between border-b border-white/5 pb-3 ${
                        link.isAction ? 'text-[#e50914]' : 'text-white'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="w-5 h-5 text-neutral-600" />
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="border-t border-white/10 pt-6 text-[11px] font-mono text-neutral-500 space-y-1">
              <div>16—18 DECEMBER 2026 // POWAI, MUMBAI</div>
              <div className="text-[#e50914]">CA PROGRAM SUBMISSION</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
