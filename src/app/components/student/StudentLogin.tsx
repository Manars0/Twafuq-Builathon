import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Mail, Lock, Eye, EyeOff, Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import wardiereLogo from '../../../imports/Wardiere.png';

export function StudentLogin() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/student/setup');
  };

  return (
    <div dir="ltr" className="min-h-screen flex bg-gray-50">
      {/* Left panel - decorative */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-700 flex-col items-center justify-center p-12 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-violet-400/20 rounded-full blur-2xl" />
        </div>
        <div className="relative z-10 text-center">
          <img src={wardiereLogo} alt="Wardiere" className="h-16 w-auto mx-auto mb-8" />
          <p className="text-indigo-100 text-xl mb-12 leading-relaxed">
            Your Smart Platform for Professional Internships
          </p>
          <div className="space-y-4">
            {['AI-Powered Smart Matching', 'Thousands of Opportunities', 'Track Your Applications Easily'].map((feature) => (
              <div key={feature} className="flex items-center gap-3 text-indigo-100">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right panel - form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          {/* Logo on mobile */}
          <div className="flex items-center justify-center gap-2 mb-10 lg:hidden">
            <img src={wardiereLogo} alt="Wardiere" className="h-10 w-auto" />
          </div>

          <h1 className="text-gray-900 text-3xl mb-2" style={{ fontWeight: 700 }}>
            {isLogin ? 'Welcome Back 👋' : 'Create Your Account'}
          </h1>
          <p className="text-gray-500 mb-8">
            {isLogin ? 'Sign in to access your personalized internship opportunities' : 'Start your career journey today for free'}
          </p>

          {/* LinkedIn Login - Only show for signup */}
          {!isLogin && (
            <>
              <button
                onClick={() => navigate('/student/setup')}
                className="w-full flex items-center justify-center gap-3 bg-[#0077B5] hover:bg-[#006396] text-white rounded-2xl py-4 mb-6 transition-colors duration-200"
                style={{ fontWeight: 600 }}
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span>Import from LinkedIn (Optional)</span>
              </button>

              {/* Divider */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-1 h-px bg-gray-200" />
                <span className="text-gray-400 text-sm">or</span>
                <div className="flex-1 h-px bg-gray-200" />
              </div>
            </>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div>
                <label className="block text-gray-700 text-sm mb-2" style={{ fontWeight: 500 }}>Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-indigo-400 focus:bg-white transition-colors"
                />
              </div>
            )}

            <div>
              <label className="block text-gray-700 text-sm mb-2" style={{ fontWeight: 500 }}>
                {!isLogin ? 'University Email Address' : 'Email Address'}
                {!isLogin && <span className="text-indigo-600 ml-1">*</span>}
              </label>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={!isLogin ? 'student@university.edu' : 'example@email.com'}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-12 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-indigo-400 focus:bg-white transition-colors"
                />
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
              {!isLogin && (
                <p className="text-xs text-gray-400 mt-1">
                  Must be a valid university email (.edu) for verification
                </p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 text-sm mb-2" style={{ fontWeight: 500 }}>Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-4 pr-12 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-indigo-400 focus:bg-white transition-colors"
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {isLogin && (
              <div className="flex justify-start">
                <button type="button" className="text-indigo-600 text-sm hover:underline">Forgot Password?</button>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white rounded-2xl py-4 flex items-center justify-center gap-2 transition-all duration-200 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 mt-2"
              style={{ fontWeight: 600 }}
            >
              <span>{isLogin ? 'Sign In' : 'Create Account'}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          <p className="text-center text-gray-500 mt-6">
            {isLogin ? "Don't have an account? " : 'Already have an account? '}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-indigo-600 hover:underline"
              style={{ fontWeight: 600 }}
            >
              {isLogin ? 'Sign Up' : 'Sign In'}
            </button>
          </p>

          <p className="text-center text-gray-400 text-xs mt-4">
            By signing in, you agree to our{' '}
            <span className="text-indigo-600 cursor-pointer">Terms of Service</span>
            {' '}and{' '}
            <span className="text-indigo-600 cursor-pointer">Privacy Policy</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
