import { useNavigate } from 'react-router';
import { CheckCircle2, XCircle, Clock, ChevronRight, FileText } from 'lucide-react';
import { motion } from 'motion/react';
import { applications } from '../../../data/mockData';

const statusConfig = {
  accepted: {
    label: 'Accepted',
    icon: CheckCircle2,
    bg: 'bg-green-50',
    text: 'text-green-700',
    border: 'border-green-200',
    dot: 'bg-green-500',
    cardBorder: 'border-l-4 border-l-green-400',
  },
  rejected: {
    label: 'Rejected',
    icon: XCircle,
    bg: 'bg-red-50',
    text: 'text-red-600',
    border: 'border-red-200',
    dot: 'bg-red-500',
    cardBorder: 'border-l-4 border-l-red-400',
  },
  pending: {
    label: 'Under Review',
    icon: Clock,
    bg: 'bg-amber-50',
    text: 'text-amber-700',
    border: 'border-amber-200',
    dot: 'bg-amber-500',
    cardBorder: 'border-l-4 border-l-amber-400',
  },
};

const stats = [
  { label: 'Total Applications', value: applications.length, color: 'text-gray-900', bg: 'bg-gray-50 border-gray-200' },
  { label: 'Accepted', value: applications.filter((a) => a.status === 'accepted').length, color: 'text-green-600', bg: 'bg-green-50 border-green-200' },
  { label: 'Under Review', value: applications.filter((a) => a.status === 'pending').length, color: 'text-amber-600', bg: 'bg-amber-50 border-amber-200' },
  { label: 'Rejected', value: applications.filter((a) => a.status === 'rejected').length, color: 'text-red-500', bg: 'bg-red-50 border-red-200' },
];

export function Applications() {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-gray-900 text-2xl mb-1" style={{ fontWeight: 700 }}>My Applications</h1>
        <p className="text-gray-500">Track the status of all your internship applications</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-3 mb-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className={`rounded-2xl p-4 border text-center ${stat.bg}`}
          >
            <p className={`text-2xl mb-1 ${stat.color}`} style={{ fontWeight: 700 }}>{stat.value}</p>
            <p className="text-gray-500 text-xs">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Applications List */}
      <div className="space-y-3">
        {applications.map((app, i) => {
          const config = statusConfig[app.status];
          const Icon = config.icon;
          return (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 }}
              className={`bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all group ${config.cardBorder}`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-2xl">
                    {app.logo}
                  </div>
                  <div>
                    <h3 className="text-gray-900" style={{ fontWeight: 600 }}>{app.position}</h3>
                    <p className="text-gray-500 text-sm">{app.company}</p>
                    <p className="text-gray-400 text-xs mt-1">Application Date: {new Date(app.date).toLocaleDateString('en-US')}</p>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-3">
                  {/* Status Badge */}
                  <span className={`flex items-center gap-2 text-sm px-3 py-1.5 rounded-full border ${config.bg} ${config.text} ${config.border}`} style={{ fontWeight: 600 }}>
                    <span className={`w-2 h-2 rounded-full ${config.dot}`} />
                    {config.label}
                  </span>

                  {/* Match */}
                  <span className="text-indigo-600 text-sm" style={{ fontWeight: 500 }}>{app.match}% Match</span>
                </div>
              </div>

              {/* Match Bar */}
              <div className="mt-4">
                <div className="bg-gray-100 rounded-full h-1.5">
                  <div
                    className={`h-1.5 rounded-full ${app.status === 'accepted' ? 'bg-green-500' : app.status === 'rejected' ? 'bg-red-400' : 'bg-indigo-500'}`}
                    style={{ width: `${app.match}%` }}
                  />
                </div>
              </div>

              {/* Actions */}
              <div className="mt-4 flex gap-2">
                {app.status === 'accepted' && (
                  <button className="flex-1 text-center bg-green-50 text-green-700 border border-green-200 text-sm py-2 rounded-xl hover:bg-green-100 transition-colors" style={{ fontWeight: 500 }}>
                    View Job Offer
                  </button>
                )}
                <button
                  onClick={() => navigate(`/student/opportunities/${app.id}`)}
                  className="flex items-center gap-1 text-indigo-600 text-sm border border-indigo-200 bg-indigo-50 px-4 py-2 rounded-xl hover:bg-indigo-100 transition-colors"
                  style={{ fontWeight: 500 }}
                >
                  Details
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {applications.length === 0 && (
        <div className="text-center py-16 text-gray-400">
          <FileText className="w-12 h-12 mx-auto mb-3 opacity-50" />
          <p>You haven't applied to any opportunities yet</p>
        </div>
      )}
    </div>
  );
}
