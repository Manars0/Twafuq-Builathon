import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Plus, Eye, Users, Edit3, Trash2, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { companyOpportunities as initialOpportunities } from '../../../data/mockData';

const statusConfig = {
  active: { label: 'Active', bg: 'bg-green-100', text: 'text-green-700', dot: 'bg-green-500' },
  closed: { label: 'Closed', bg: 'bg-gray-100', text: 'text-gray-500', dot: 'bg-gray-400' },
  draft: { label: 'Draft', bg: 'bg-amber-100', text: 'text-amber-700', dot: 'bg-amber-500' },
};

export function ManageOpportunities() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<'all' | 'active' | 'closed' | 'draft'>('all');
  const [opportunities, setOpportunities] = useState(initialOpportunities);

  const handleDelete = (id: number) => {
    setOpportunities(opportunities.filter((opp) => opp.id !== id));
  };

  const handleEdit = (id: number) => {
    navigate(`/company/edit/${id}`);
  };

  const filtered =
    filter === 'all'
      ? opportunities
      : opportunities.filter((o) => o.status === filter);

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-gray-900 text-2xl mb-1" style={{ fontWeight: 700 }}>
            Manage Opportunities
          </h1>
          <p className="text-gray-500">Control all your posted training opportunities</p>
        </div>

        <button
          type="button"
          onClick={() => navigate('/company/create')}
          className="flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-5 py-3 rounded-2xl shadow-md shadow-emerald-200 hover:shadow-emerald-300 transition-all cursor-pointer"
          style={{ fontWeight: 600 }}
        >
          <Plus className="w-5 h-5" />
          New Opportunity
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        {[
          {
            label: 'Active Opportunities',
            value: opportunities.filter((o) => o.status === 'active').length,
            color: 'text-green-600',
            bg: 'bg-green-50 border-green-200',
          },
          {
            label: 'Closed',
            value: opportunities.filter((o) => o.status === 'closed').length,
            color: 'text-gray-600',
            bg: 'bg-gray-50 border-gray-200',
          },
          {
            label: 'Drafts',
            value: opportunities.filter((o) => o.status === 'draft').length,
            color: 'text-amber-600',
            bg: 'bg-amber-50 border-amber-200',
          },
        ].map((stat) => (
          <div key={stat.label} className={`rounded-2xl p-4 border text-center ${stat.bg}`}>
            <p className={`text-3xl mb-1 ${stat.color}`} style={{ fontWeight: 700 }}>
              {stat.value}
            </p>
            <p className="text-gray-500 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="flex gap-2 mb-5">
        {(['all', 'active', 'closed', 'draft'] as const).map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-xl text-sm transition-all cursor-pointer ${
              filter === f
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-white text-gray-600 border border-gray-200 hover:border-emerald-200'
            }`}
            style={{ fontWeight: filter === f ? 600 : 400 }}
          >
            {f === 'all' ? 'All' : statusConfig[f].label}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div
          className="grid grid-cols-[1fr_auto_auto_auto_auto] gap-4 px-5 py-3 bg-gray-50 border-b border-gray-100 text-xs text-gray-500"
          style={{ fontWeight: 600 }}
        >
          <span>Position</span>
          <span>Applicants</span>
          <span>Views</span>
          <span>Status</span>
          <span>Actions</span>
        </div>

        <div className="divide-y divide-gray-50">
          {filtered.map((opp, i) => {
            const config = statusConfig[opp.status];

            return (
              <motion.div
                key={opp.id}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                className="grid grid-cols-[1fr_auto_auto_auto_auto] gap-4 items-center px-5 py-4 hover:bg-gray-50 transition-colors"
              >
                <div>
                  <p className="text-gray-900 text-sm" style={{ fontWeight: 600 }}>
                    {opp.title}
                  </p>

                  <div className="flex gap-1 mt-1 flex-wrap">
                    {opp.skills.slice(0, 2).map((skill) => (
                      <span
                        key={skill}
                        className="bg-gray-100 text-gray-500 text-xs px-2 py-0.5 rounded-md"
                      >
                        {skill}
                      </span>
                    ))}

                    {opp.skills.length > 2 && (
                      <span className="text-gray-400 text-xs">
                        +{opp.skills.length - 2}
                      </span>
                    )}
                  </div>

                  <p className="text-gray-400 text-xs mt-1">{opp.date}</p>
                </div>

                <div className="flex items-center gap-1.5 text-gray-600">
                  <Users className="w-4 h-4 text-gray-400" />
                  <span className="text-sm" style={{ fontWeight: 600 }}>
                    {opp.applicants}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-gray-600">
                  <Eye className="w-4 h-4 text-gray-400" />
                  <span className="text-sm" style={{ fontWeight: 600 }}>
                    {opp.views}
                  </span>
                </div>

                <span
                  className={`text-xs px-3 py-1 rounded-full flex items-center gap-1.5 ${config.bg} ${config.text}`}
                  style={{ fontWeight: 500 }}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${config.dot}`} />
                  {config.label}
                </span>

                <div className="relative flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => navigate('/company/candidates')}
                    className="p-2 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors cursor-pointer"
                    title="View Candidates"
                  >
                    <Users className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleEdit(opp.id)}
                    className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
                    title="Edit"
                  >
                    <Edit3 className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDelete(opp.id)}
                    className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                    title="Delete"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-gray-400">
          <p>No opportunities in this category</p>
        </div>
      )}
    </div>
  );
}