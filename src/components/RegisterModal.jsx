import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle, ArrowRight } from 'lucide-react';

export function RegisterModal({ isOpen, onClose }) {
  const [role, setRole] = useState('ca'); // 'ca' or 'delegate'
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    college: '',
    phone: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({ name: '', email: '', college: '', phone: '' });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-lg border border-white/15 bg-[#09090c] p-6 sm:p-10 shadow-2xl overflow-hidden font-sans"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 text-neutral-400 hover:text-white transition-colors focus:outline-none cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div>
              {/* Header */}
              <div className="space-y-1 mb-8">
                <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#e50914] font-semibold">
                  TECHFEST 2026 // CA TASK CONCEPT
                </div>
                <h3 className="text-2xl sm:text-3xl font-black font-['Space_Grotesk'] text-white uppercase tracking-tight">
                  INTEREST REGISTRATION
                </h3>
                <p className="text-xs text-neutral-400 font-mono tracking-wider">
                  STUDENT ASSIGNMENT PREVIEW // 16—18 DECEMBER
                </p>
              </div>

              {/* Role Switcher */}
              <div className="grid grid-cols-2 gap-2 mb-6 p-1 bg-white/[0.04] border border-white/10">
                <button
                  type="button"
                  onClick={() => setRole('ca')}
                  className={`py-2 text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer ${
                    role === 'ca'
                      ? 'bg-[#e50914] text-white font-bold'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  COLLEGE AMBASSADOR
                </button>
                <button
                  type="button"
                  onClick={() => setRole('delegate')}
                  className={`py-2 text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer ${
                    role === 'delegate'
                      ? 'bg-[#e50914] text-white font-bold'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  FESTIVAL DELEGATE
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ada Lovelace"
                    className="w-full px-4 py-3 bg-black/60 border border-white/10 text-white placeholder-neutral-600 text-sm focus:border-[#e50914] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                    INSTITUTION / UNIVERSITY *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.college}
                    onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                    placeholder="Institute Name, City"
                    className="w-full px-4 py-3 bg-black/60 border border-white/10 text-white placeholder-neutral-600 text-sm focus:border-[#e50914] focus:outline-none transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-4 py-3 bg-black/60 border border-white/10 text-white placeholder-neutral-600 text-sm focus:border-[#e50914] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                      PHONE NUMBER *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 bg-black/60 border border-white/10 text-white placeholder-neutral-600 text-sm focus:border-[#e50914] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#e50914] text-white font-mono font-bold text-xs uppercase tracking-[0.2em] transition-all duration-300 hover:bg-[#ff1e27] cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>SUBMIT PREVIEW</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="py-8 text-center space-y-6">
              <div className="h-16 w-16 mx-auto rounded-full bg-[#e50914]/20 border border-[#e50914] flex items-center justify-center text-[#e50914]">
                <CheckCircle className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#e50914]">
                  // STATUS: SIMULATION COMPLETE
                </div>
                <h3 className="text-2xl font-black font-['Space_Grotesk'] text-white uppercase tracking-tight">
                  SUBMISSION DEMO RECORDED
                </h3>
                <p className="text-sm text-neutral-400 font-sans max-w-sm mx-auto leading-relaxed">
                  Your registration demonstration for the Techfest College Ambassador assignment has been recorded. Submission details referenced for{' '}
                  <span className="text-white font-mono">{formData.email}</span>.
                </p>
              </div>

              <div className="p-4 bg-white/[0.03] border border-white/10 text-left font-mono text-xs text-neutral-400 space-y-1">
                <div>ROLE // {role === 'ca' ? 'COLLEGE AMBASSADOR' : 'FESTIVAL DELEGATE'}</div>
                <div>APPLICANT // {formData.name.toUpperCase()}</div>
                <div>VENUE // IIT BOMBAY · MUMBAI</div>
              </div>

              <button
                type="button"
                onClick={handleReset}
                className="px-8 py-3 bg-white text-black font-mono font-bold text-xs uppercase tracking-widest hover:bg-neutral-200 transition-colors cursor-pointer"
              >
                CLOSE PREVIEW
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
