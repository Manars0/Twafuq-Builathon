import React from 'react';
import { useNavigate } from 'react-router';
import { GraduationCap, Building2, ChevronRight, Sparkles, Zap, FileSearch, MessagesSquare, Puzzle, ClipboardCheck, Scale, BarChart3 } from 'lucide-react';
import { motion } from 'motion/react';
import tawafuqLogo from '../../imports/Tawafuq.png';

export function EntryScreen() {
  const navigate = useNavigate();

  return (
    <div dir="ltr" className="min-h-screen flex flex-col bg-gradient-to-br from-[#f8fffd] to-[#e6f4f1] overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex items-center justify-center py-10"
      >
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-0">
            <img src={tawafuqLogo} alt="Tawafuq" className="mx-auto h-[300px] md:h-[340px] w-auto object-contain" />
          </div>
          <p className="text-gray-500 text-lg mt-0 mb-0">AI-Powered Smart Matching Platform for Professional Internships</p>
        </div>
      </motion.header>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-6 pb-16">
        <div className="w-full max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center text-gray-900 text-2xl mb-12"
            style={{ fontWeight: 600 }}
          >
            Welcome! How would you like to sign in?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Student Card */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              onClick={() => navigate('/student/login')}
              className="group cursor-pointer relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#003267] via-[#004685] to-[#00509E] p-8 border border-[#1A4E86]/40 hover:border-[#2E669E]/70 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#003267]/30"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-full h-full opacity-10">
                <div className="absolute top-4 right-4 w-32 h-32 bg-white rounded-full blur-2xl" />
                <div className="absolute bottom-8 left-8 w-24 h-24 bg-[#7FB0DE] rounded-full blur-xl" />
              </div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/20">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex items-center gap-1 bg-white/20 rounded-full px-3 py-1">
                    <Zap className="w-4 h-4 text-yellow-300" />
                    <span className="text-white text-sm">AI Matching</span>
                  </div>
                </div>

                <h3 className="text-white text-3xl mb-3" style={{ fontWeight: 700 }}>Sign in as Student</h3>
                <p className="text-[#C6DCF1] text-lg mb-8 leading-relaxed">
                  Discover internship opportunities that match your skills and career aspirations with AI technology
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {['Smart Matching', 'Personalized Opportunities', 'Track Applications'].map((tag) => (
                    <span key={tag} className="bg-white/15 text-white text-sm px-3 py-1 rounded-full border border-white/20">
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="mt-auto w-full bg-white text-[#003267] rounded-2xl py-4 flex items-center justify-center gap-3 group-hover:bg-[#EAF2FB] transition-colors duration-200"
                  style={{ fontWeight: 700 }}>
                  <span>Start Your Career Journey</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>

            {/* Company Card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              onClick={() => navigate('/company/signup')}
              className="group cursor-pointer relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-800 via-emerald-700 to-teal-700 p-8 border border-emerald-500/30 hover:border-emerald-400/60 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-emerald-500/20"
            >
              <div className="absolute top-0 right-0 w-full h-full opacity-10">
                <div className="absolute top-4 left-4 w-32 h-32 bg-white rounded-full blur-2xl" />
                <div className="absolute bottom-8 right-8 w-24 h-24 bg-emerald-300 rounded-full blur-xl" />
              </div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/20">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex items-center gap-1 bg-white/20 rounded-full px-3 py-1">
                    <Sparkles className="w-4 h-4 text-yellow-300" />
                    <span className="text-white text-sm">Smart Hiring</span>
                  </div>
                </div>

                <h3 className="text-white text-3xl mb-3" style={{ fontWeight: 700 }}>Sign in as Company</h3>
                <p className="text-emerald-100 text-lg mb-8 leading-relaxed">
                  Find the best young talent and manage internship opportunities efficiently with AI analytics
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {['Top Candidates', 'AI Analysis', 'Smart Management'].map((tag) => (
                    <span key={tag} className="bg-white/15 text-white text-sm px-3 py-1 rounded-full border border-white/20">
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="mt-auto w-full bg-white text-emerald-700 rounded-2xl py-4 flex items-center justify-center gap-3 group-hover:bg-emerald-50 transition-colors duration-200"
                  style={{ fontWeight: 700 }}>
                  <span>Start Smart Hiring</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-8 md:gap-12 mt-12"
          >
            {[
              { value: '+5000', label: 'Registered Students' },
              { value: '+300', label: 'Leading Companies' },
              { value: '94%', label: 'Match Accuracy' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl text-gray-900 mb-1" style={{ fontWeight: 700 }}>{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Comparison section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-12 md:mt-16 rounded-3xl bg-[#091A2B] px-4 py-8 md:px-8 md:py-10 border border-[#1A3552]"
          >
            <h3 className="text-center text-white text-xl md:text-2xl mb-6" style={{ fontWeight: 700 }}>
              Traditional Hiring vs Our AI-Powered Hiring
            </h3>

            <div className="hidden md:block overflow-x-auto">
              <div className="min-w-[760px] rounded-2xl overflow-hidden border border-[#1A3552]">
                <div className="grid grid-cols-3 bg-[#0F2438]">
                  <div className="px-5 py-4 text-gray-200 text-sm" style={{ fontWeight: 600 }}>Aspect</div>
                  <div className="px-5 py-4 text-gray-300 text-sm border-l border-[#1A3552]" style={{ fontWeight: 600 }}>Traditional Hiring</div>
                  <div className="px-5 py-4 text-[#CFE3F7] text-sm border-l border-[#1A3552] bg-gradient-to-r from-[#003267] to-[#004685]" style={{ fontWeight: 700 }}>Tawafuq (AI-Powered Hiring)</div>
                </div>

                {[
                  { icon: FileSearch, aspect: 'Role clarity', traditional: 'Vague job descriptions', modern: 'Clear role expectations' },
                  { icon: MessagesSquare, aspect: 'Interview process', traditional: 'Repeated interviews', modern: 'One structured interview' },
                  { icon: Puzzle, aspect: 'Interview focus', traditional: 'Fragmented questions', modern: 'Skills assessed together' },
                  { icon: ClipboardCheck, aspect: 'Evaluation method', traditional: 'CV-based assumptions', modern: 'Your real responses' },
                  { icon: Scale, aspect: 'Fairness', traditional: 'Depends on interviewer', modern: 'Same criteria for everyone' },
                  { icon: BarChart3, aspect: 'Outcome clarity', traditional: 'No clear feedback', modern: 'Clear strengths & signals' },
                ].map((row, index) => {
                  const Icon = row.icon;
                  return (
                    <div key={row.aspect} className={`grid grid-cols-3 ${index % 2 === 0 ? 'bg-[#0D2033]' : 'bg-[#0B1D2F]'}`}>
                      <div className="px-5 py-4 text-gray-100 text-sm flex items-center gap-2 border-t border-[#1A3552]">
                        <Icon className="w-4 h-4 text-[#89B4DD]" />
                        <span style={{ fontWeight: 600 }}>{row.aspect}</span>
                      </div>
                      <div className="px-5 py-4 text-gray-300 text-sm border-l border-t border-[#1A3552]">{row.traditional}</div>
                      <div className="px-5 py-4 text-[#E5F0FB] text-sm border-l border-t border-[#1A3552] bg-[#0C2A45]">{row.modern}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="md:hidden space-y-3">
              {[
                { icon: FileSearch, aspect: 'Role clarity', traditional: 'Vague job descriptions', modern: 'Clear role expectations' },
                { icon: MessagesSquare, aspect: 'Interview process', traditional: 'Repeated interviews', modern: 'One structured interview' },
                { icon: Puzzle, aspect: 'Interview focus', traditional: 'Fragmented questions', modern: 'Skills assessed together' },
                { icon: ClipboardCheck, aspect: 'Evaluation method', traditional: 'CV-based assumptions', modern: 'Your real responses' },
                { icon: Scale, aspect: 'Fairness', traditional: 'Depends on interviewer', modern: 'Same criteria for everyone' },
                { icon: BarChart3, aspect: 'Outcome clarity', traditional: 'No clear feedback', modern: 'Clear strengths & signals' },
              ].map((row) => {
                const Icon = row.icon;
                return (
                  <div key={row.aspect} className="rounded-2xl border border-[#1A3552] bg-[#0D2033] p-4">
                    <div className="flex items-center gap-2 text-white mb-3" style={{ fontWeight: 600 }}>
                      <Icon className="w-4 h-4 text-[#89B4DD]" />
                      <span>{row.aspect}</span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="rounded-xl bg-[#10283E] px-3 py-2 text-gray-300">
                        <span className="text-gray-400">Traditional: </span>
                        {row.traditional}
                      </div>
                      <div className="rounded-xl bg-gradient-to-r from-[#003267] to-[#004685] px-3 py-2 text-[#E5F0FB]">
                        <span className="text-[#C6DCF1]">Tawafuq: </span>
                        {row.modern}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="text-center text-[#C6DCF1] text-sm md:text-base max-w-4xl mx-auto mt-6 leading-relaxed">
              Complete one structured AI interview and be evaluated on what you say - not keywords, assumptions, or who interviews you. Create your profile and experience a more transparent hiring process.
            </p>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
