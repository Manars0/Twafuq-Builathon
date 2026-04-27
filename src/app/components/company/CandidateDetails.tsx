import { useParams, useNavigate } from 'react-router';
import { ArrowLeft, CheckCircle2, Sparkles, GraduationCap, Mail, Briefcase, Check, X } from 'lucide-react';
import { motion } from 'motion/react';
import { candidates } from '../../../data/mockData';

const requiredSkills = ['React', 'Node.js', 'Python', 'SQL', 'TypeScript'];

export function CandidateDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const candidate = candidates.find((c) => c.id === Number(id)) || candidates[0];

  const radius = 52;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (candidate.match / 100) * circumference;

  return (
    <div className="p-6 max-w-3xl">
      {/* Back */}
      <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-500 hover:text-gray-700 mb-6 group">
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        <span className="text-sm">Back to Candidates</span>
      </button>

      {/* Profile Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm mb-4"
      >
        <div className="flex items-start gap-5 flex-wrap">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white text-3xl shadow-lg flex-shrink-0" style={{ fontWeight: 700 }}>
            {candidate.name[0]}
          </div>
          <div className="flex-1">
            <h1 className="text-gray-900 text-2xl mb-1" style={{ fontWeight: 700 }}>{candidate.name}</h1>
            <p className="text-emerald-600 text-sm mb-2" style={{ fontWeight: 500 }}>{candidate.major}</p>
            <div className="flex flex-wrap gap-3 text-gray-400 text-sm">
              <span className="flex items-center gap-1"><GraduationCap className="w-3.5 h-3.5" />{candidate.university}</span>
              <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5" />{candidate.email}</span>
              <span className="flex items-center gap-1"><Briefcase className="w-3.5 h-3.5" />Experience: {candidate.experience}</span>
            </div>
          </div>

          {/* Match Circle */}
          <div className="flex flex-col items-center">
            <div className="relative" style={{ width: 120, height: 120 }}>
              <svg viewBox="0 0 120 120" width={120} height={120} className="-rotate-90">
                <circle cx="60" cy="60" r={radius} fill="none" stroke="#D1FAE5" strokeWidth="8" />
                <motion.circle
                  cx="60" cy="60" r={radius}
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="8"
                  strokeDasharray={circumference}
                  initial={{ strokeDashoffset: circumference }}
                  animate={{ strokeDashoffset: offset }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl text-gray-900" style={{ fontWeight: 800 }}>{candidate.match}%</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm mt-2">Match Score</p>
          </div>
        </div>

        {/* GPA + Actions */}
        <div className="mt-5 pt-5 border-t border-gray-100 flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-4">
            <div className="text-center">
              <p className="text-gray-400 text-xs">GPA</p>
              <p className="text-gray-900" style={{ fontWeight: 700 }}>{candidate.gpa}</p>
            </div>
            <div className="w-px h-8 bg-gray-200" />
            <div className="text-center">
              <p className="text-gray-400 text-xs">Skills</p>
              <p className="text-gray-900" style={{ fontWeight: 700 }}>{candidate.skills.length}</p>
            </div>
          </div>

          <div className="flex gap-2">
            <button className="flex items-center gap-2 bg-red-50 text-red-500 border border-red-200 px-4 py-2.5 rounded-xl text-sm hover:bg-red-100 transition-colors" style={{ fontWeight: 500 }}>
              <X className="w-4 h-4" />
              Reject
            </button>
            <button className="flex items-center gap-2 bg-emerald-600 text-white px-5 py-2.5 rounded-xl text-sm hover:bg-emerald-700 transition-colors shadow-md shadow-emerald-200" style={{ fontWeight: 600 }}>
              <Check className="w-4 h-4" />
              Accept Candidate
            </button>
          </div>
        </div>
      </motion.div>

      {/* AI Analysis */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 rounded-2xl p-6 mb-4"
      >
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-5 h-5 text-emerald-600" />
          <h2 className="text-gray-900" style={{ fontWeight: 600 }}>AI Analysis</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-gray-600 text-sm mb-3" style={{ fontWeight: 500 }}>Strengths</p>
            <div className="space-y-2">
              {candidate.strengths.map((strength) => (
                <div key={strength} className="flex items-center gap-2 bg-white rounded-xl p-3 border border-emerald-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{strength}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-gray-600 text-sm mb-3" style={{ fontWeight: 500 }}>AI Recommendation</p>
            <div className="bg-white rounded-xl p-4 border border-emerald-100">
              <p className="text-gray-700 text-sm leading-relaxed">
                {candidate.name} is an <span className="text-emerald-600" style={{ fontWeight: 600 }}>excellent</span> candidate with a {candidate.match}% match score.
                Possesses the required core skills and has a high academic GPA.
                <span className="text-emerald-600" style={{ fontWeight: 600 }}> Highly recommended</span> to contact for an interview.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Skills Match */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm mb-4"
      >
        <h2 className="text-gray-900 mb-4" style={{ fontWeight: 600 }}>Skills Match</h2>

        {/* Bar */}
        <div className="mb-5">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-600">Skills matching your requirements</span>
            <span className="text-emerald-600" style={{ fontWeight: 600 }}>
              {candidate.skills.filter((s) => requiredSkills.includes(s)).length} / {requiredSkills.length}
            </span>
          </div>
          <div className="bg-gray-100 rounded-full h-3">
            <motion.div
              className="bg-gradient-to-r from-emerald-500 to-teal-500 h-3 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${(candidate.skills.filter((s) => requiredSkills.includes(s)).length / requiredSkills.length) * 100}%` }}
              transition={{ duration: 1, delay: 0.4 }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {requiredSkills.map((skill) => {
            const hasIt = candidate.skills.includes(skill);
            return (
              <div key={skill} className={`flex items-center gap-2 p-3 rounded-xl text-sm ${hasIt ? 'bg-green-50 border border-green-200' : 'bg-gray-50 border border-gray-200'}`}>
                {hasIt
                  ? <CheckCircle2 className="w-4 h-4 text-green-500" />
                  : <div className="w-4 h-4 rounded-full border-2 border-gray-300" />}
                <span className={hasIt ? 'text-green-700' : 'text-gray-400'}>{skill}</span>
                <span className={`ml-auto text-xs ${hasIt ? 'text-green-600' : 'text-gray-400'}`} style={{ fontWeight: 500 }}>
                  {hasIt ? 'Available' : 'Not available'}
                </span>
              </div>
            );
          })}
        </div>

        {/* All Candidate Skills */}
        <div className="mt-5 pt-5 border-t border-gray-100">
          <p className="text-gray-500 text-sm mb-3" style={{ fontWeight: 500 }}>All Candidate Skills</p>
          <div className="flex flex-wrap gap-2">
            {candidate.skills.map((skill) => (
              <span key={skill} className={`text-sm px-3 py-1 rounded-full ${requiredSkills.includes(skill) ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-gray-100 text-gray-600'}`}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
