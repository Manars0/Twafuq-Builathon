import { useNavigate } from 'react-router';
import { Sparkles, TrendingUp, FileText, Eye, CheckCircle2, ArrowRight, Star, Zap, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { opportunities } from '../../../data/mockData';

function MatchCircle({ percent, size = 60 }: { percent: number; size?: number }) {
  const radius = (size / 2) - 6;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;
  const color = percent >= 90 ? '#10B981' : percent >= 70 ? '#4F46E5' : '#F59E0B';

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg viewBox={`0 0 ${size} ${size}`} style={{ width: size, height: size }} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="#E5E7EB" strokeWidth="5" />
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke={color} strokeWidth="5"
          strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round" />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-gray-800" style={{ fontWeight: 700, fontSize: size * 0.22 }}>{percent}%</span>
      </div>
    </div>
  );
}

const stats = [
  { label: 'Matched Opportunities', value: '12', icon: Sparkles, color: 'from-indigo-500 to-violet-500', bg: 'bg-indigo-50', text: 'text-indigo-600' },
  { label: 'Applications Submitted', value: '5', icon: FileText, color: 'from-blue-400 to-cyan-500', bg: 'bg-blue-50', text: 'text-blue-600' },
  { label: 'Profile Views', value: '34', icon: Eye, color: 'from-violet-500 to-purple-500', bg: 'bg-violet-50', text: 'text-violet-600' },
  { label: 'Applications Accepted', value: '2', icon: CheckCircle2, color: 'from-emerald-400 to-green-500', bg: 'bg-green-50', text: 'text-green-600' },
];

export function StudentDashboard() {
  const navigate = useNavigate();
  const topOpportunities = opportunities.slice(0, 4);

  return (
    <div className="p-6 space-y-6">
      {/* Welcome Banner */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-700 rounded-3xl p-6 text-white"
      >
        <div className="absolute top-0 right-0 w-full h-full opacity-10">
          <div className="absolute top-4 right-4 w-32 h-32 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 flex items-center justify-between">
          <div>
            <p className="text-indigo-200 text-sm mb-1">Welcome back,</p>
            <h1 className="text-white text-2xl mb-2" style={{ fontWeight: 700 }}>John Smith 👋</h1>
            <p className="text-indigo-200 text-sm">You have <span className="text-white" style={{ fontWeight: 600 }}>3 new opportunities</span> waiting for you today</p>
            <button
              onClick={() => navigate('/student/opportunities')}
              className="mt-4 flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/20 px-4 py-2 rounded-xl transition-all text-sm"
              style={{ fontWeight: 600 }}
            >
              <Zap className="w-4 h-4" />
              Explore Opportunities
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="hidden md:flex flex-col items-center">
            <MatchCircle percent={80} size={100} />
            <p className="text-indigo-200 text-xs mt-2">Profile Completion</p>
          </div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`w-10 h-10 rounded-xl ${stat.bg} flex items-center justify-center mb-3`}>
                <Icon className={`w-5 h-5 ${stat.text}`} />
              </div>
              <p className="text-gray-900 text-2xl mb-1" style={{ fontWeight: 700 }}>{stat.value}</p>
              <p className="text-gray-500 text-sm">{stat.label}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Suggested Opportunities */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-gray-900 text-xl" style={{ fontWeight: 700 }}>Top Matched Opportunities</h2>
          <button
            onClick={() => navigate('/student/opportunities')}
            className="flex items-center gap-1 text-indigo-600 text-sm hover:underline"
          >
            <span>View All</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {topOpportunities.map((opp, i) => (
            <motion.div
              key={opp.id}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all cursor-pointer group"
              onClick={() => navigate(`/student/opportunities/${opp.id}`)}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-2xl border border-gray-100 flex-shrink-0">
                  {opp.logo}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-gray-900 text-sm" style={{ fontWeight: 600 }}>{opp.position}</h3>
                      <p className="text-gray-500 text-xs">{opp.company}</p>
                    </div>
                    <div className="flex flex-col items-center flex-shrink-0">
                      <MatchCircle percent={opp.match} size={48} />
                      <span className="text-xs text-gray-400 mt-1">Match</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-gray-400 text-xs">{opp.location}</span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full" />
                    <span className="text-gray-400 text-xs">{opp.duration}</span>
                  </div>
                  <div className="flex gap-1 mt-2 flex-wrap">
                    {opp.skills.slice(0, 2).map((skill) => (
                      <span key={skill} className="bg-indigo-50 text-indigo-600 text-xs px-2 py-0.5 rounded-full">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
              <button
                className="mt-4 w-full text-center text-indigo-600 text-sm border border-indigo-200 bg-indigo-50 rounded-xl py-2 group-hover:bg-indigo-600 group-hover:text-white transition-all"
                style={{ fontWeight: 600 }}
              >
                View Details
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* AI Tip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-4 flex items-start gap-3"
      >
        <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
          <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
        </div>
        <div>
          <p className="text-amber-800 text-sm" style={{ fontWeight: 600 }}>AI Tip</p>
          <p className="text-amber-700 text-sm mt-1">Add your side projects to your profile to increase your match rate with companies by 25%+</p>
        </div>
      </motion.div>
    </div>
  );
}
