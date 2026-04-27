import { useState } from 'react';
import { Edit3, Plus, X, Camera, GraduationCap, Briefcase, Star, MapPin, Mail } from 'lucide-react';
import { motion } from 'motion/react';

const initialSkills = ['React', 'JavaScript', 'TypeScript', 'Node.js', 'Python', 'SQL', 'Git'];
const experiences = [
  { role: 'Web Developer Intern', company: 'Tech Solutions Co.', period: 'June 2023 - August 2023', skills: ['React', 'CSS'] },
  { role: 'Research Assistant', company: 'King Saud University', period: 'January 2023 - May 2023', skills: ['Python', 'Data Analysis'] },
];

export function StudentProfile() {
  const [skills, setSkills] = useState(initialSkills);
  const [newSkill, setNewSkill] = useState('');
  const [editingSection, setEditingSection] = useState<string | null>(null);

  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill('');
    }
  };

  return (
    <div className="p-6 max-w-2xl space-y-4">
      {/* Header */}
      <h1 className="text-gray-900 text-2xl mb-6" style={{ fontWeight: 700 }}>Profile</h1>

      {/* Profile Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-gray-800" style={{ fontWeight: 600 }}>Personal Information</h2>
          <button
            onClick={() => setEditingSection(editingSection === 'info' ? null : 'info')}
            className="flex items-center gap-1.5 text-indigo-600 text-sm bg-indigo-50 px-3 py-1.5 rounded-xl hover:bg-indigo-100 transition-colors"
          >
            <Edit3 className="w-3.5 h-3.5" />
            {editingSection === 'info' ? 'Save' : 'Edit'}
          </button>
        </div>

        {/* Avatar */}
        <div className="flex items-center gap-5 mb-6">
          <div className="relative">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white text-3xl shadow-lg" style={{ fontWeight: 700 }}>
              A
            </div>
            <button className="absolute -bottom-1 -right-1 w-7 h-7 bg-indigo-600 rounded-full flex items-center justify-center shadow-md hover:bg-indigo-700 transition-colors">
              <Camera className="w-3.5 h-3.5 text-white" />
            </button>
          </div>
          <div>
            <h3 className="text-gray-900 text-xl" style={{ fontWeight: 700 }}>John Smith</h3>
            <p className="text-indigo-600">Software Engineering Student</p>
            <div className="flex items-center gap-3 mt-1 text-gray-400 text-sm">
              <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />Riyadh</span>
              <span className="flex items-center gap-1"><Mail className="w-3 h-3" />ahmed@student.edu.sa</span>
            </div>
          </div>
        </div>

        {/* Completion */}
        <div className="bg-indigo-50 rounded-2xl p-4 mb-5">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-indigo-700" style={{ fontWeight: 500 }}>Profile Completion</span>
            <span className="text-indigo-700" style={{ fontWeight: 700 }}>80%</span>
          </div>
          <div className="bg-indigo-100 rounded-full h-2">
            <div className="bg-gradient-to-r from-indigo-500 to-violet-500 h-2 rounded-full" style={{ width: '80%' }} />
          </div>
          <p className="text-indigo-500 text-xs mt-2">Add your profile picture to complete your profile</p>
        </div>

        {editingSection === 'info' ? (
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-gray-500 text-xs mb-1 block">Full Name</label>
              <input defaultValue="John Smith" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 text-gray-800 text-sm focus:outline-none focus:border-indigo-400 transition-colors" />
            </div>
            <div>
              <label className="text-gray-500 text-xs mb-1 block">Major</label>
              <input defaultValue="Software Engineering" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 text-gray-800 text-sm focus:outline-none focus:border-indigo-400 transition-colors" />
            </div>
            <div>
              <label className="text-gray-500 text-xs mb-1 block">University</label>
              <input defaultValue="King Abdullah University" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 text-gray-800 text-sm focus:outline-none focus:border-indigo-400 transition-colors" />
            </div>
            <div>
              <label className="text-gray-500 text-xs mb-1 block">GPA</label>
              <input defaultValue="4.7 / 5.0" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 text-gray-800 text-sm focus:outline-none focus:border-indigo-400 transition-colors" />
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: GraduationCap, label: 'Major', value: 'Software Engineering' },
              { icon: Star, label: 'GPA', value: '4.7 / 5.0' },
              { icon: GraduationCap, label: 'University', value: 'King Abdullah University' },
              { icon: MapPin, label: 'Location', value: 'Riyadh, Saudi Arabia' },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="bg-gray-50 rounded-xl p-3 flex items-start gap-2">
                  <Icon className="w-4 h-4 text-indigo-400 mt-0.5" />
                  <div>
                    <p className="text-gray-400 text-xs">{item.label}</p>
                    <p className="text-gray-700 text-sm" style={{ fontWeight: 500 }}>{item.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </motion.div>

      {/* Skills */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-gray-800" style={{ fontWeight: 600 }}>Skills</h2>
          <span className="text-gray-400 text-xs">{skills.length} skills</span>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {skills.map((skill) => (
            <motion.span
              key={skill}
              layout
              className="bg-indigo-50 text-indigo-700 border border-indigo-200 text-sm px-3 py-1.5 rounded-full flex items-center gap-1.5"
            >
              {skill}
              <button onClick={() => setSkills(skills.filter((s) => s !== skill))}
                className="text-indigo-400 hover:text-indigo-600 transition-colors">
                <X className="w-3 h-3" />
              </button>
            </motion.span>
          ))}
        </div>

        <div className="flex gap-2">
          <input
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addSkill()}
            placeholder="Add a new skill..."
            className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:border-indigo-400 transition-colors"
          />
          <button
            onClick={addSkill}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2.5 rounded-xl transition-colors"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </motion.div>

      {/* Experiences */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-gray-800" style={{ fontWeight: 600 }}>Experience</h2>
          <button className="flex items-center gap-1 text-indigo-600 text-sm bg-indigo-50 px-3 py-1.5 rounded-xl hover:bg-indigo-100">
            <Plus className="w-3.5 h-3.5" />
            Add
          </button>
        </div>

        <div className="space-y-3">
          {experiences.map((exp, i) => (
            <div key={i} className="relative p-4 bg-gray-50 rounded-xl border border-gray-200 group hover:border-indigo-200 transition-colors">
              <button className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-400 transition-all">
                <X className="w-4 h-4" />
              </button>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-5 h-5 text-indigo-500" />
                </div>
                <div>
                  <p className="text-gray-900 text-sm" style={{ fontWeight: 600 }}>{exp.role}</p>
                  <p className="text-gray-500 text-xs">{exp.company}</p>
                  <p className="text-gray-400 text-xs mt-1">{exp.period}</p>
                  <div className="flex gap-1 mt-2">
                    {exp.skills.map((s) => (
                      <span key={s} className="bg-white text-gray-600 border border-gray-200 text-xs px-2 py-0.5 rounded-full">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
