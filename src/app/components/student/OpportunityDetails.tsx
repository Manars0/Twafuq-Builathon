import { useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { ArrowLeft, MapPin, Clock, Users, CheckCircle2, XCircle, Sparkles, Send } from 'lucide-react';
import { motion } from 'motion/react';
import { opportunities } from '../../../data/mockData';

const mySkills = ['React', 'JavaScript', 'TypeScript', 'Node.js', 'Python', 'SQL'];

function SkillMatch({ skill, hasIt }: { skill: string; hasIt: boolean }) {
  return (
    <div className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm ${hasIt ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
      {hasIt
        ? <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
        : <XCircle className="w-4 h-4 text-red-400 flex-shrink-0" />}
      <span className={hasIt ? 'text-green-700' : 'text-red-500'}>{skill}</span>
      {hasIt ? (
        <span className="ml-auto text-green-600 text-xs" style={{ fontWeight: 600 }}>You have ✓</span>
      ) : (
        <span className="ml-auto text-red-400 text-xs">Required</span>
      )}
    </div>
  );
}

type ApplyButtonProps = {
  applied: boolean;
  onClick: () => void;
};

function ApplyButton({ applied, onClick }: ApplyButtonProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      whileHover={!applied ? { scale: 1.02 } : undefined}
      whileTap={!applied ? { scale: 0.98 } : undefined}
      disabled={applied}
      onClick={onClick}
      className={`w-full rounded-xl py-5 flex items-center justify-center gap-3 shadow-xl transition-all duration-300 ${
        applied
          ? 'bg-green-100 text-green-700 border border-green-300 cursor-not-allowed shadow-green-100/60'
          : 'bg-gradient-to-r from-[#003267] to-[#00509E] text-white shadow-[#003267]/30'
      }`}
      style={{ fontWeight: 700 }}
    >
      {applied ? (
        <span className="text-lg">✔ Applied</span>
      ) : (
        <>
          <Send className="w-5 h-5" />
          <span className="text-lg">Apply Now</span>
        </>
      )}
    </motion.button>
  );
}

export function OpportunityDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const opp = opportunities.find((o) => o.id === Number(id)) || opportunities[0];
  const matchPercent = opp.match;
  const [applied, setApplied] = useState(false);

  const radius = 52;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (matchPercent / 100) * circumference;
  const color = matchPercent >= 90 ? '#10B981' : matchPercent >= 70 ? '#003267' : '#F59E0B';

  const handleApply = () => {
    setApplied(true);
  };

  return (
    <div className="p-6 max-w-3xl">
      {/* Back */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-500 hover:text-gray-700 mb-6 group"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        <span className="text-sm">Back to Opportunities</span>
      </button>

      {/* Company Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm mb-4"
      >
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-3xl">
              {opp.logo}
            </div>
            <div>
              <h1 className="text-gray-900 text-xl mb-1" style={{ fontWeight: 700 }}>{opp.position}</h1>
              <p className="text-[#003267]" style={{ fontWeight: 600 }}>{opp.company}</p>
              <div className="flex items-center gap-3 mt-2 text-gray-400 text-sm">
                <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{opp.location}</span>
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{opp.duration}</span>
                <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" />{opp.applicants} applicants</span>
              </div>
            </div>
          </div>

          {/* Match Score */}
          <div className="flex flex-col items-center">
            <div className="relative" style={{ width: 120, height: 120 }}>
              <svg viewBox="0 0 120 120" width={120} height={120} className="-rotate-90">
                <circle cx="60" cy="60" r={radius} fill="none" stroke="#E5E7EB" strokeWidth="8" />
                <motion.circle
                  cx="60" cy="60" r={radius}
                  fill="none"
                  stroke={color}
                  strokeWidth="8"
                  strokeDasharray={circumference}
                  initial={{ strokeDashoffset: circumference }}
                  animate={{ strokeDashoffset: offset }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl text-gray-900" style={{ fontWeight: 800 }}>{matchPercent}%</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm mt-2">Match Rate</p>
            <span className="flex items-center gap-1 bg-[#EAF2FB] text-[#003267] text-xs px-2 py-1 rounded-full mt-1">
              <Sparkles className="w-3 h-3" />
              AI-Analyzed
            </span>
          </div>
        </div>

        {/* Salary */}
        <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
          <div>
            <p className="text-gray-400 text-xs">Monthly Stipend</p>
            <p className="text-gray-900 text-lg" style={{ fontWeight: 700 }}>{opp.salary}</p>
          </div>
          <div>
            <p className="text-gray-400 text-xs">Internship Type</p>
            <span className="bg-[#EAF2FB] text-[#003267] text-sm px-3 py-1 rounded-full" style={{ fontWeight: 500 }}>{opp.type}</span>
          </div>
        </div>
      </motion.div>

      {/* Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm mb-4"
      >
        <h2 className="text-gray-900 mb-3" style={{ fontWeight: 600 }}>About the Opportunity</h2>
        <p className="text-gray-600 leading-relaxed">{opp.description}</p>

        <h3 className="text-gray-900 mt-5 mb-3" style={{ fontWeight: 600 }}>Requirements</h3>
        <ul className="space-y-2">
          {opp.requirements.map((req) => (
            <li key={req} className="flex items-start gap-2 text-gray-600 text-sm">
              <CheckCircle2 className="w-4 h-4 text-[#4B76A4] mt-0.5 flex-shrink-0" />
              {req}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Skills Comparison */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm mb-4"
      >
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-5 h-5 text-[#003267]" />
          <h2 className="text-gray-900" style={{ fontWeight: 600 }}>Skills Comparison</h2>
        </div>

        {/* Progress bar */}
        <div className="mb-5">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-600">Matching Skills</span>
            <span className="text-[#003267]" style={{ fontWeight: 600 }}>
              {opp.skills.filter((s) => mySkills.includes(s)).length} / {opp.skills.length}
            </span>
          </div>
          <div className="bg-gray-100 rounded-full h-3">
            <motion.div
              className="bg-gradient-to-r from-[#003267] to-[#00509E] h-3 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${(opp.skills.filter((s) => mySkills.includes(s)).length / opp.skills.length) * 100}%` }}
              transition={{ duration: 1, delay: 0.4 }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {opp.skills.map((skill) => (
            <SkillMatch key={skill} skill={skill} hasIt={mySkills.includes(skill)} />
          ))}
        </div>
      </motion.div>

      {/* Apply Button */}
      <ApplyButton applied={applied} onClick={handleApply} />
    </div>
  );
}
