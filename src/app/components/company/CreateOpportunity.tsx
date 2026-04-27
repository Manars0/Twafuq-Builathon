import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Plus, X, CheckCircle2, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

const suggestedSkills = ['Python', 'JavaScript', 'React', 'SQL', 'Machine Learning', 'Java', 'AWS', 'Docker', 'Figma', 'UI/UX', 'C++', 'Node.js'];
const types = ['Summer', 'Co-op'];
const locations = ['Riyadh', 'Jeddah', 'Dammam', 'Tabuk', 'Remote'];
const durations = ['1 month', '2 months', '3 months', '4 months', '6 months'];

export function CreateOpportunity() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');
  const [location, setLocation] = useState('');
  const [duration, setDuration] = useState('');
  const [salary, setSalary] = useState('');
  const [skills, setSkills] = useState<string[]>([]);
  const [newSkill, setNewSkill] = useState('');
  const [requirements, setRequirements] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const addSkill = (skill: string) => {
    if (skill && !skills.includes(skill)) setSkills([...skills, skill]);
    setNewSkill('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => navigate('/company/opportunities'), 2000);
  };

  if (submitted) {
    return (
      <div className="p-6 flex items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center bg-white rounded-3xl p-12 border border-gray-100 shadow-xl max-w-md w-full"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-green-500" />
          </div>
          <h2 className="text-gray-900 text-2xl mb-3" style={{ fontWeight: 700 }}>Opportunity Posted Successfully!</h2>
          <p className="text-gray-500 mb-6">AI is now analyzing student profiles and finding the best candidates for you</p>
          <div className="flex items-center justify-center gap-2 text-emerald-600">
            <Sparkles className="w-4 h-4 animate-pulse" />
            <span className="text-sm">Analyzing candidates...</span>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-2xl">
      <div className="mb-6">
        <h1 className="text-gray-900 text-2xl mb-1" style={{ fontWeight: 700 }}>Create New Training Opportunity</h1>
        <p className="text-gray-500">AI will automatically match the opportunity with the best candidates</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Basic Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
        >
          <h2 className="text-gray-800 mb-5" style={{ fontWeight: 600 }}>Basic Information</h2>

          <div className="space-y-4">
            <div>
              <label className="text-gray-600 text-sm block mb-2" style={{ fontWeight: 500 }}>Job Title *</label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                placeholder="Example: Web Developer, UX Designer, Data Analyst..."
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-emerald-400 transition-colors"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-gray-600 text-sm block mb-2" style={{ fontWeight: 500 }}>Training Type</label>
                <div className="flex flex-wrap gap-2">
                  {types.map((t) => (
                    <button key={t} type="button" onClick={() => setType(t)}
                      className={`text-xs px-3 py-1.5 rounded-lg border transition-all ${type === t ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-gray-50 text-gray-600 border-gray-200 hover:border-emerald-200'}`}>
                      {t}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-gray-600 text-sm block mb-2" style={{ fontWeight: 500 }}>Location</label>
                <div className="flex flex-wrap gap-2">
                  {locations.map((loc) => (
                    <button key={loc} type="button" onClick={() => setLocation(loc)}
                      className={`text-xs px-3 py-1.5 rounded-lg border transition-all ${location === loc ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-gray-50 text-gray-600 border-gray-200 hover:border-emerald-200'}`}>
                      {loc}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-gray-600 text-sm block mb-2" style={{ fontWeight: 500 }}>Duration</label>
                <select
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-emerald-400 transition-colors"
                >
                  <option value="">Select duration</option>
                  {durations.map((d) => <option key={d} value={d}>{d}</option>)}
                </select>
              </div>
              <div>
                <label className="text-gray-600 text-sm block mb-2" style={{ fontWeight: 500 }}>Monthly Stipend</label>
                <input
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                  placeholder="Example: 3000 SAR"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-emerald-400 transition-colors"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
        >
          <h2 className="text-gray-800 mb-4" style={{ fontWeight: 600 }}>Opportunity Description</h2>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Write a detailed description of the opportunity and tasks the trainee will perform..."
            rows={5}
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-emerald-400 transition-colors resize-none leading-relaxed"
          />
          <div>
            <label className="text-gray-600 text-sm block mb-2 mt-4" style={{ fontWeight: 500 }}>Requirements & Qualifications</label>
            <textarea
              value={requirements}
              onChange={(e) => setRequirements(e.target.value)}
              placeholder="Example: Third-year student, 3.5+ GPA, English proficiency..."
              rows={3}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-emerald-400 transition-colors resize-none"
            />
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
        >
          <h2 className="text-gray-800 mb-4" style={{ fontWeight: 600 }}>Required Skills</h2>

          <div className="flex gap-2 mb-4">
            <input
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill(newSkill))}
              placeholder="Add a skill..."
              className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:border-emerald-400 transition-colors"
            />
            <button type="button" onClick={() => addSkill(newSkill)}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-xl transition-colors">
              <Plus className="w-4 h-4" />
            </button>
          </div>

          <p className="text-gray-400 text-xs mb-3">Suggestions:</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {suggestedSkills.map((skill) => (
              <button key={skill} type="button" onClick={() => addSkill(skill)}
                className={`text-xs px-3 py-1.5 rounded-full border transition-all ${skills.includes(skill) ? 'bg-emerald-100 text-emerald-700 border-emerald-300' : 'bg-gray-50 text-gray-500 border-gray-200 hover:border-emerald-200'}`}>
                {skills.includes(skill) ? `✓ ${skill}` : `+ ${skill}`}
              </button>
            ))}
          </div>

          {skills.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-sm px-3 py-1 rounded-full flex items-center gap-1">
                  {skill}
                  <button type="button" onClick={() => setSkills(skills.filter((s) => s !== skill))} className="text-emerald-400 hover:text-emerald-600">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
          )}
        </motion.div>

        {/* Submit */}
        <button type="submit"
          className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-2xl py-5 flex items-center justify-center gap-3 shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all"
          style={{ fontWeight: 700 }}>
          <Sparkles className="w-5 h-5" />
          <span className="text-lg">Post Opportunity & Start Smart Matching</span>
        </button>
      </form>
    </div>
  );
}
