import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Check, X, Bookmark, Sparkles, ChevronRight, Filter, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { candidates } from '../../../data/mockData';

type DecisionState = Record<number, 'accepted' | 'rejected' | 'shortlisted' | null>;

function MatchRing({ percent }: { percent: number }) {
  const r = 28;
  const circ = 2 * Math.PI * r;
  const offset = circ - (percent / 100) * circ;
  const color = percent >= 90 ? '#10B981' : percent >= 75 ? '#059669' : '#6EE7B7';

  return (
    <div className="relative" style={{ width: 64, height: 64 }}>
      <svg viewBox="0 0 64 64" width={64} height={64} className="-rotate-90">
        <circle cx="32" cy="32" r={r} fill="none" stroke="#D1FAE5" strokeWidth="5" />
        <circle cx="32" cy="32" r={r} fill="none" stroke={color} strokeWidth="5"
          strokeDasharray={circ} strokeDashoffset={offset} strokeLinecap="round" />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-gray-900 text-xs" style={{ fontWeight: 700 }}>{percent}%</span>
      </div>
    </div>
  );
}

export function CandidatesMatching() {
  const navigate = useNavigate();
  const [decisions, setDecisions] = useState<DecisionState>({});
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<'all' | 'accepted' | 'rejected' | 'shortlisted' | 'pending'>('all');
  const [selectedOpportunity, setSelectedOpportunity] = useState('Web Developer');

  const decide = (id: number, decision: 'accepted' | 'rejected' | 'shortlisted') => {
    setDecisions((prev) => ({ ...prev, [id]: prev[id] === decision ? null : decision }));
  };

  const filtered = candidates.filter((c) => {
    const matchesSearch = !search || c.name.includes(search) || c.major.includes(search);
    const matchesFilter = filter === 'all' || filter === 'pending'
      ? !decisions[c.id]
      : decisions[c.id] === filter;
    return matchesSearch && (filter === 'all' || matchesFilter || filter === 'pending' && !decisions[c.id]);
  });

  const stats = {
    total: candidates.length,
    accepted: Object.values(decisions).filter((d) => d === 'accepted').length,
    rejected: Object.values(decisions).filter((d) => d === 'rejected').length,
    shortlisted: Object.values(decisions).filter((d) => d === 'shortlisted').length,
    pending: candidates.length - Object.values(decisions).filter(Boolean).length,
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-1">
          <Sparkles className="w-6 h-6 text-emerald-500" />
          <h1 className="text-gray-900 text-2xl" style={{ fontWeight: 700 }}>Candidate Matching</h1>
        </div>
        <p className="text-gray-500">AI analysis of the best candidates for your opportunities</p>
      </div>

      {/* AI Banner */}
      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-2xl p-4 mb-5 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
          <Sparkles className="w-5 h-5 text-emerald-600" />
        </div>
        <div>
          <p className="text-emerald-800 text-sm" style={{ fontWeight: 600 }}>AI at work!</p>
          <p className="text-emerald-600 text-sm">Analyzed {candidates.length} candidates and ranked them by match score with your requirements</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-5 gap-3 mb-5">
        {[
          { label: 'All', value: stats.total, filter: 'all', color: 'text-gray-700', bg: 'bg-gray-50 border-gray-200' },
          { label: 'Pending', value: stats.pending, filter: 'pending', color: 'text-amber-600', bg: 'bg-amber-50 border-amber-200' },
          { label: 'Accepted', value: stats.accepted, filter: 'accepted', color: 'text-green-600', bg: 'bg-green-50 border-green-200' },
          { label: 'Shortlisted', value: stats.shortlisted, filter: 'shortlisted', color: 'text-blue-600', bg: 'bg-blue-50 border-blue-200' },
          { label: 'Rejected', value: stats.rejected, filter: 'rejected', color: 'text-red-500', bg: 'bg-red-50 border-red-200' },
        ].map((stat) => (
          <button
            key={stat.label}
            onClick={() => setFilter(stat.filter as any)}
            className={`rounded-2xl p-3 border text-center transition-all ${stat.bg} ${filter === stat.filter ? 'ring-2 ring-emerald-400 ring-offset-1' : ''}`}
          >
            <p className={`text-xl mb-0.5 ${stat.color}`} style={{ fontWeight: 700 }}>{stat.value}</p>
            <p className="text-gray-500 text-xs">{stat.label}</p>
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="relative mb-4">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by candidate name or major..."
          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 pl-12 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-emerald-400 transition-colors"
        />
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
      </div>

      {/* Candidates */}
      <div className="space-y-3">
        <AnimatePresence>
          {filtered.sort((a, b) => b.match - a.match).map((candidate, i) => {
            const decision = decisions[candidate.id];
            return (
              <motion.div
                key={candidate.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ delay: i * 0.05 }}
                className={`bg-white rounded-2xl p-5 border shadow-sm hover:shadow-md transition-all ${
                  decision === 'accepted' ? 'border-green-300 bg-green-50/50' :
                  decision === 'rejected' ? 'border-red-200 bg-red-50/30 opacity-60' :
                  decision === 'shortlisted' ? 'border-blue-300 bg-blue-50/50' :
                  'border-gray-100'
                }`}
              >
                <div className="flex items-start gap-4 flex-wrap">
                  {/* Avatar + Info */}
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white text-lg flex-shrink-0" style={{ fontWeight: 700 }}>
                      {candidate.name[0]}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <h3 className="text-gray-900 text-sm" style={{ fontWeight: 600 }}>{candidate.name}</h3>
                        {i === 0 && <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-0.5 rounded-full" style={{ fontWeight: 600 }}>⭐ Best</span>}
                      </div>
                      <p className="text-gray-500 text-xs">{candidate.major} • {candidate.university}</p>
                      <p className="text-gray-400 text-xs">GPA: {candidate.gpa} | Experience: {candidate.experience}</p>
                    </div>
                  </div>

                  {/* Match Ring */}
                  <div className="flex flex-col items-center">
                    <MatchRing percent={candidate.match} />
                    <span className="text-xs text-gray-400 mt-1">Match</span>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-col gap-1 flex-1 min-w-0">
                    <p className="text-gray-400 text-xs mb-1">Key Skills</p>
                    <div className="flex flex-wrap gap-1">
                      {candidate.skills.slice(0, 4).map((skill) => (
                        <span key={skill} className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full">{skill}</span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <button
                      onClick={() => navigate(`/company/candidates/${candidate.id}`)}
                      className="text-gray-500 text-xs border border-gray-200 px-3 py-2 rounded-xl hover:bg-gray-50 transition-colors flex items-center gap-1"
                    >
                      Profile
                      <ChevronRight className="w-3 h-3" />
                    </button>
                    <button
                      onClick={() => decide(candidate.id, 'shortlisted')}
                      className={`p-2 rounded-xl transition-all ${decision === 'shortlisted' ? 'bg-blue-500 text-white' : 'border border-gray-200 text-gray-400 hover:border-blue-300 hover:text-blue-500'}`}
                      title="Shortlist"
                    >
                      <Bookmark className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => decide(candidate.id, 'rejected')}
                      className={`p-2 rounded-xl transition-all ${decision === 'rejected' ? 'bg-red-500 text-white' : 'border border-gray-200 text-gray-400 hover:border-red-300 hover:text-red-500'}`}
                      title="Reject"
                    >
                      <X className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => decide(candidate.id, 'accepted')}
                      className={`p-2 rounded-xl transition-all ${decision === 'accepted' ? 'bg-green-500 text-white' : 'border border-gray-200 text-gray-400 hover:border-green-300 hover:text-green-500'}`}
                      title="Accept"
                    >
                      <Check className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Decision Label */}
                {decision && (
                  <div className={`mt-3 pt-3 border-t text-xs text-center rounded-xl py-1 ${
                    decision === 'accepted' ? 'border-green-200 text-green-600 bg-green-50' :
                    decision === 'rejected' ? 'border-red-200 text-red-500 bg-red-50' :
                    'border-blue-200 text-blue-600 bg-blue-50'
                  }`} style={{ fontWeight: 600 }}>
                    {decision === 'accepted' ? '✓ Accepted' : decision === 'rejected' ? '✗ Rejected' : '⭐ Shortlisted'}
                  </div>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
