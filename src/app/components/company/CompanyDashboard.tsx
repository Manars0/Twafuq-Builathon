import { useNavigate } from 'react-router';
import { Briefcase, Users, Eye, TrendingUp, ChevronRight, Sparkles, Plus, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { companyOpportunities, candidates } from '../../../data/mockData';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

const chartData = [
  { day: 'Sat', applications: 8 },
  { day: 'Sun', applications: 14 },
  { day: 'Mon', applications: 11 },
  { day: 'Tue', applications: 20 },
  { day: 'Wed', applications: 17 },
  { day: 'Thu', applications: 25 },
  { day: 'Fri', applications: 9 },
];

const kpis = [
  { label: 'Total Opportunities', value: '4', icon: Briefcase, color: 'text-emerald-600', bg: 'bg-emerald-50', change: '+1 this week' },
  { label: 'Total Candidates', value: '116', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50', change: '+12 this week' },
  { label: 'Profile Views', value: '705', icon: Eye, color: 'text-violet-600', bg: 'bg-violet-50', change: '+89 this week' },
  { label: 'Acceptance Rate', value: '18%', icon: TrendingUp, color: 'text-orange-600', bg: 'bg-orange-50', change: 'Market avg 12%' },
];

export function CompanyDashboard() {
  const navigate = useNavigate();
  const topCandidates = candidates.slice(0, 3);

  return (
    <div className="p-6 space-y-6">
      {/* Welcome Banner */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden bg-gradient-to-br from-emerald-700 via-emerald-800 to-teal-800 rounded-3xl p-6 text-white"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 right-4 w-32 h-32 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 flex items-center justify-between flex-wrap gap-4">
          <div>
            <p className="text-emerald-200 text-sm mb-1">Welcome,</p>
            <h1 className="text-white text-2xl mb-2" style={{ fontWeight: 700 }}>Saudi Aramco</h1>
            <p className="text-emerald-200 text-sm">
              AI found <span className="text-white" style={{ fontWeight: 600 }}>8 excellent candidates</span> for your posted opportunities
            </p>
          </div>
          <button
            onClick={() => navigate('/company/create')}
            className="flex items-center gap-2 bg-white text-emerald-700 px-5 py-3 rounded-2xl shadow-lg hover:bg-emerald-50 transition-colors"
            style={{ fontWeight: 600 }}
          >
            <Plus className="w-5 h-5" />
            Add New Opportunity
          </button>
        </div>
      </motion.div>

      {/* KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi, i) => {
          const Icon = kpi.icon;
          return (
            <motion.div
              key={kpi.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`w-10 h-10 rounded-xl ${kpi.bg} flex items-center justify-center mb-3`}>
                <Icon className={`w-5 h-5 ${kpi.color}`} />
              </div>
              <p className="text-gray-900 text-2xl mb-1" style={{ fontWeight: 700 }}>{kpi.value}</p>
              <p className="text-gray-500 text-xs mb-1">{kpi.label}</p>
              <p className="text-emerald-600 text-xs" style={{ fontWeight: 500 }}>{kpi.change}</p>
            </motion.div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Chart */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm"
        >
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-gray-900" style={{ fontWeight: 600 }}>Applications This Week</h2>
            <span className="text-emerald-600 text-sm flex items-center gap-1">
              <ArrowUpRight className="w-4 h-4" />
              +32% vs last week
            </span>
          </div>
          <ResponsiveContainer width="100%" height={160}>
            <BarChart data={chartData}>
              <XAxis dataKey="day" tick={{ fontSize: 11, fill: '#9CA3AF' }} axisLine={false} tickLine={false} />
              <YAxis hide />
              <Tooltip
                contentStyle={{ background: '#1F2937', border: 'none', borderRadius: '12px', color: 'white', fontSize: 12 }}
                cursor={{ fill: '#F0FDF4' }}
              />
              <Bar dataKey="applications" fill="#059669" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Active Opportunities */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm"
        >
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-gray-900" style={{ fontWeight: 600 }}>Active Opportunities</h2>
            <button onClick={() => navigate('/company/opportunities')} className="text-emerald-600 text-sm flex items-center gap-1">
              View All <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="space-y-3">
            {companyOpportunities.filter((o) => o.status === 'active').map((opp) => (
              <div key={opp.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-emerald-50 transition-colors cursor-pointer"
                onClick={() => navigate('/company/candidates')}>
                <div>
                  <p className="text-gray-900 text-sm" style={{ fontWeight: 500 }}>{opp.title}</p>
                  <p className="text-gray-400 text-xs">{opp.applicants} applicants • {opp.views} views</p>
                </div>
                <div className="text-right">
                  <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full" style={{ fontWeight: 500 }}>Active</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Top AI Candidates */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm"
      >
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-emerald-500" />
            <h2 className="text-gray-900" style={{ fontWeight: 600 }}>Top Candidates - AI Selection</h2>
          </div>
          <button onClick={() => navigate('/company/candidates')} className="text-emerald-600 text-sm flex items-center gap-1">
            View All <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {topCandidates.map((c, i) => (
            <div key={c.id}
              onClick={() => navigate(`/company/candidates/${c.id}`)}
              className="p-4 border border-gray-100 rounded-2xl hover:border-emerald-200 hover:shadow-md transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white" style={{ fontWeight: 700 }}>
                  {c.name[0]}
                </div>
                <div>
                  <p className="text-gray-900 text-sm" style={{ fontWeight: 600 }}>{c.name}</p>
                  <p className="text-gray-400 text-xs">{c.major}</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex-1 mr-3">
                  <div className="bg-gray-100 rounded-full h-2">
                    <div className="bg-emerald-500 h-2 rounded-full" style={{ width: `${c.match}%` }} />
                  </div>
                </div>
                <span className="text-emerald-600 text-sm" style={{ fontWeight: 700 }}>{c.match}%</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
