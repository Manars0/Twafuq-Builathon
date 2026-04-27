import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Mail, Eye, EyeOff, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import tawafuqLogo from '../../../imports/Tawafuq.png';

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center p-6">
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
            {isLogin ? 'Welcome Back' : 'Create Your Account'}
          </h1>

          <p className="text-gray-500 text-center mb-6">
            {isLogin
              ? 'Sign in to access your personalized internship opportunities'
              : 'Start your career journey today'}
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {!isLogin && (
              <div>
                <label className="text-gray-600 text-sm block mb-2 font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3"
                />
              </div>
            )}

            {/* Email */}
            <div>
              <label className="text-gray-600 text-sm block mb-2 font-medium">
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@email.com"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-12 py-3 focus:outline-none focus:border-[#003267]"
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
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-4 pr-12 py-3 focus:outline-none focus:border-[#003267]"
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

            {/* Forgot */}
            {isLogin && (
              <div className="text-left">
                <button className="text-sm text-[#003267] hover:underline">
                  Forgot Password?
                </button>
              </div>
            )}

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#003267] to-[#00509E] text-white py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-[#003267]/20 hover:shadow-[#003267]/30 transition-all"
            >
              {isLogin ? 'Sign In' : 'Create Account'}
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          {/* Switch */}
          <p className="text-center text-gray-500 mt-6">
            {isLogin ? "Don't have an account? " : 'Already have an account? '}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-[#003267] font-semibold hover:underline"
            >
              {isLogin ? 'Sign Up' : 'Sign In'}
            </button>
          </p>

        </motion.div>
      </div>
    </div>
  );
}