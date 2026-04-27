import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Mail, Lock, Eye, EyeOff, Sparkles, ArrowRight, Building2 } from 'lucide-react';
import { motion } from 'motion/react';
import wardiereLogo from '../../../imports/Wardiere.png';

export function CompanySignup() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [companyName, setCompanyName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/company/dashboard');
  };

  return (
    <div dir="ltr" className="min-h-screen flex bg-gray-50">
      {/* Left panel - decorative */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-emerald-800 via-emerald-700 to-teal-700 flex-col items-center justify-center p-12 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-teal-400/20 rounded-full blur-2xl" />
        </div>
        <div className="relative z-10 text-center">
          <img src={wardiereLogo} alt="Wardiere" className="h-16 w-auto mx-auto mb-8" />
          <p className="text-emerald-100 text-xl mb-12 leading-relaxed">
            Smart Hiring Platform for Top Talent
          </p>
          <div className="space-y-4">
            {['AI-Powered Candidate Matching', 'Access to Thousands of Students', 'Streamlined Hiring Process'].map((feature) => (
              <div key={feature} className="flex items-center gap-3 text-emerald-100">
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
            Create Company Account
          </h1>
          <p className="text-gray-500 mb-8">
            Start hiring the best talent with AI-powered matching
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm mb-2" style={{ fontWeight: 500 }}>Company Name</label>
              <div className="relative">
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="Enter your company name"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-12 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-emerald-400 focus:bg-white transition-colors"
                />
                <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 text-sm mb-2" style={{ fontWeight: 500 }}>
                Company Email Address
                <span className="text-emerald-600 ml-1">*</span>
              </label>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-12 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-emerald-400 focus:bg-white transition-colors"
                />
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
              <p className="text-xs text-gray-400 mt-1">
                Must be an official company email (e.g., @company.com)
              </p>
            </div>

            <div>
              <label className="block text-gray-700 text-sm mb-2" style={{ fontWeight: 500 }}>Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-4 pr-12 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-emerald-400 focus:bg-white transition-colors"
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-2xl py-4 flex items-center justify-center gap-2 transition-all duration-200 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 mt-6"
              style={{ fontWeight: 600 }}
            >
              <span>Create Account</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          <p className="text-center text-gray-400 text-xs mt-6">
            By creating an account, you agree to our{' '}
            <span className="text-emerald-600 cursor-pointer">Terms of Service</span>
            {' '}and{' '}
            <span className="text-emerald-600 cursor-pointer">Privacy Policy</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
