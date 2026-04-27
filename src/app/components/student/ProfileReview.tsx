import { useNavigate } from 'react-router';
import { CheckCircle2, Edit3, Star, ArrowRight, User, Briefcase, GraduationCap } from 'lucide-react';
import { motion } from 'motion/react';
import wardiereLogo from '../../../imports/Wardiere.png';

const skills = ['React', 'JavaScript', 'TypeScript', 'Node.js', 'Python', 'SQL', 'Git'];
const interests = ['Web Development', 'Artificial Intelligence', 'User Experience'];

const profileSections = [
  { label: 'Personal Information', complete: true, percent: 100 },
  { label: 'Skills', complete: true, percent: 100 },
  { label: 'Education', complete: true, percent: 100 },
  { label: 'Experience', complete: false, percent: 60 },
  { label: 'Interests', complete: true, percent: 100 },
  { label: 'Profile Picture', complete: false, percent: 0 },
];

function CircularProgress({ percent }: { percent: number }) {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div className="relative w-28 h-28">
      <svg viewBox="0 0 100 100" className="w-28 h-28 -rotate-90">
        <circle cx="50" cy="50" r={radius} fill="none" stroke="#E5E7EB" strokeWidth="8" />
        <motion.circle
          cx="50" cy="50" r={radius}
          fill="none"
          stroke="url(#grad)"
          strokeWidth="8"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4F46E5" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl text-gray-900" style={{ fontWeight: 800 }}>{percent}%</span>
      </div>
    </div>
  );
}

export function ProfileReview() {
  const navigate = useNavigate();

  return (
    <div dir="ltr" className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
          {/* Completion Card */}
          <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100">
            <div className="flex items-center gap-6">
              <CircularProgress percent={80} />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <h2 className="text-gray-900 text-xl" style={{ fontWeight: 700 }}>Profile Completion: 80%</h2>
                </div>
                <p className="text-gray-500 text-sm mb-4">Your profile is in great shape! Complete the missing sections to improve your chances</p>
                <div className="space-y-2">
                  {profileSections.map((section) => (
                    <div key={section.label} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${section.complete ? 'bg-green-100' : 'bg-gray-100'}`}>
                        {section.complete
                          ? <CheckCircle2 className="w-4 h-4 text-green-500" />
                          : <div className="w-2 h-2 bg-gray-300 rounded-full" />}
                      </div>
                      <span className="text-sm text-gray-600 flex-1">{section.label}</span>
                      <div className="w-24 bg-gray-100 rounded-full h-1.5">
                        <div
                          className={`h-1.5 rounded-full ${section.complete ? 'bg-green-400' : 'bg-orange-300'}`}
                          style={{ width: `${section.percent}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Profile Preview */}
          <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-gray-900 text-lg" style={{ fontWeight: 600 }}>Profile</h3>
              <button className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 text-sm bg-indigo-50 px-3 py-2 rounded-xl transition-colors">
                <Edit3 className="w-4 h-4" />
                <span>Edit</span>
              </button>
            </div>

            {/* Avatar & Name */}
            <div className="flex items-center gap-4 mb-6 p-4 bg-gradient-to-r from-indigo-50 to-violet-50 rounded-2xl border border-indigo-100">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white text-2xl shadow-lg" style={{ fontWeight: 700 }}>J</div>
              <div>
                <h4 className="text-gray-900 text-lg" style={{ fontWeight: 600 }}>John Smith</h4>
                <p className="text-gray-500 text-sm">Software Engineering Student</p>
                <p className="text-indigo-600 text-sm">King Abdullah University | GPA: 4.7/5.0</p>
              </div>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-2 gap-3 mb-5">
              {[
                { icon: GraduationCap, label: 'Major', value: 'Software Engineering' },
                { icon: Briefcase, label: 'Experience', value: 'Summer Internship - 3 months' },
                { icon: User, label: 'Location', value: 'Riyadh, Saudi Arabia' },
                { icon: Star, label: 'GPA', value: '4.7 / 5.0' },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="bg-gray-50 rounded-xl p-3 flex items-start gap-3">
                    <Icon className="w-4 h-4 text-indigo-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-400 text-xs">{item.label}</p>
                      <p className="text-gray-700 text-sm" style={{ fontWeight: 500 }}>{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Skills */}
            <div className="mb-4">
              <p className="text-gray-500 text-sm mb-2" style={{ fontWeight: 500 }}>Skills</p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="bg-indigo-50 text-indigo-700 border border-indigo-200 text-sm px-3 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div>
              <p className="text-gray-500 text-sm mb-2" style={{ fontWeight: 500 }}>Interests</p>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span key={interest} className="bg-violet-50 text-violet-700 border border-violet-200 text-sm px-3 py-1 rounded-full">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate('/student/dashboard')}
            className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-2xl py-5 flex items-center justify-center gap-3 shadow-xl shadow-indigo-500/25"
            style={{ fontWeight: 700 }}
          >
            <CheckCircle2 className="w-6 h-6" />
            <span className="text-lg">Confirm and Create My Profile</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
