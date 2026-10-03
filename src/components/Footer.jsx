import { ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#050505] border-t border-white/[0.08] py-16 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          {/* Brand & Submission Marker */}
          <div className="space-y-1">
            <div className="text-2xl font-black uppercase font-['Space_Grotesk'] tracking-tighter text-white">
              TECHFEST
            </div>
            <div className="text-xs font-mono tracking-[0.25em] uppercase text-neutral-400">
              COLLEGE AMBASSADOR TASK // 2026
            </div>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center gap-8 md:gap-10">
            <a
              href="#competitions"
              onClick={(e) => handleLinkClick(e, '#competitions')}
              className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 hover:text-white transition-colors"
            >
              EVENTS
            </a>
            <a
              href="#workshops"
              onClick={(e) => handleLinkClick(e, '#workshops')}
              className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 hover:text-white transition-colors"
            >
              WORKSHOPS
            </a>
            <a
              href="#edition30"
              onClick={(e) => handleLinkClick(e, '#edition30')}
              className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 hover:text-white transition-colors"
            >
              ABOUT
            </a>
            <a
              href="#campus"
              onClick={(e) => handleLinkClick(e, '#campus')}
              className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 hover:text-white transition-colors"
            >
              CAMPUS
            </a>
            <a
              href="#register"
              onClick={(e) => handleLinkClick(e, '#register')}
              className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 hover:text-[#e50914] transition-colors"
            >
              REGISTER
            </a>
          </nav>

          {/* Back to top + Student Submission tag */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <div className="text-xs font-mono text-neutral-400 tracking-wider">
              Student Submission · Techfest College Ambassador Program · 2026
            </div>

            <button
              onClick={scrollToTop}
              className="h-10 w-10 flex items-center justify-center border border-white/10 text-neutral-400 hover:text-white hover:border-[#e50914] transition-colors cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Public Submission Disclaimer */}
        <div className="pt-8 border-t border-white/[0.06] text-center md:text-left">
          <p className="text-[11px] font-mono text-neutral-400 leading-relaxed max-w-3xl">
            Disclaimer: This is a student-submitted educational assignment for the Techfest College Ambassador Program. It is not an official publication or website of IIT Bombay.
          </p>
        </div>
      </div>
    </footer>
  );
}
