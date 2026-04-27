import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Mail, Eye, EyeOff, ArrowRight, Building2 } from 'lucide-react';
import { motion } from 'motion/react';
import tawafuqLogo from '../../../imports/Tawafuq.png';

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-emerald-50 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
        >

          {/* Logo */}
          <div className="text-center mb-6">
            <img
              src={tawafuqLogo}
              alt="Tawafuq"
              className="mx-auto h-[300px] md:h-[340px] w-auto object-contain"
            />
          </div>

          {/* Title */}
          <h1 className="text-gray-900 text-xl mb-2 text-center font-semibold">
            Create Company Account
          </h1>

          <p className="text-gray-500 text-center mb-6">
            Start hiring the best talent with AI-powered matching
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Company Name */}
            <div>
              <label className="text-gray-600 text-sm block mb-2 font-medium">
                Company Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="Enter your company name"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-12 py-3 focus:outline-none focus:border-emerald-500"
                />
                <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-gray-600 text-sm block mb-2 font-medium">
                Company Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-12 py-3 focus:outline-none focus:border-emerald-500"
                />
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="text-gray-600 text-sm block mb-2 font-medium">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-4 pr-12 py-3 focus:outline-none focus:border-emerald-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all"
            >
              Create Account
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          {/* Terms */}
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