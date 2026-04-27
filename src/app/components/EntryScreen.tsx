import { useNavigate } from 'react-router';
import { GraduationCap, Building2, ChevronRight, Sparkles, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import wardiereLogo from '../../imports/Wardiere.png';

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
          <div className="flex items-center justify-center gap-3 mb-3">
            <img src={wardiereLogo} alt="Wardiere" className="h-12 w-auto" />
          </div>
          <p className="text-gray-500 text-lg">AI-Powered Smart Matching Platform for Professional Internships</p>
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
              className="group cursor-pointer relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-700 p-8 border border-indigo-500/30 hover:border-indigo-400/60 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-indigo-500/20"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-full h-full opacity-10">
                <div className="absolute top-4 right-4 w-32 h-32 bg-white rounded-full blur-2xl" />
                <div className="absolute bottom-8 left-8 w-24 h-24 bg-violet-300 rounded-full blur-xl" />
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
                <p className="text-indigo-100 text-lg mb-8 leading-relaxed">
                  Discover internship opportunities that match your skills and career aspirations with AI technology
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {['Smart Matching', 'Personalized Opportunities', 'Track Applications'].map((tag) => (
                    <span key={tag} className="bg-white/15 text-white text-sm px-3 py-1 rounded-full border border-white/20">
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="mt-auto w-full bg-white text-indigo-700 rounded-2xl py-4 flex items-center justify-center gap-3 group-hover:bg-indigo-50 transition-colors duration-200"
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
            className="flex justify-center gap-12 mt-12"
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
        </div>
      </div>
    </div>
  );
}
