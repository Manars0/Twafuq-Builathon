import { useNavigate } from 'react-router';
import { Linkedin, Upload, PenLine, Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const options = [
  {
    id: 'linkedin',
    icon: Linkedin,
    title: 'Import from LinkedIn',
    description: 'Import your skills and experience automatically from your LinkedIn profile with one click',
    badge: 'Fastest',
    badgeColor: 'bg-blue-100 text-blue-700',
    gradient: 'from-blue-500 to-cyan-500',
    route: '/student/linkedin',
  },
  {
    id: 'cv',
    icon: Upload,
    title: 'Upload Resume',
    description: 'Upload your resume file and AI will automatically extract your information',
    badge: 'AI-Powered',
    badgeColor: 'bg-violet-100 text-violet-700',
    gradient: 'from-violet-500 to-purple-500',
    route: '/student/cv-upload',
  },
  {
    id: 'manual',
    icon: PenLine,
    title: 'Manual Input',
    description: 'Enter your information step by step and build your profile the way you want',
    badge: 'Flexible',
    badgeColor: 'bg-orange-100 text-orange-700',
    gradient: 'from-orange-400 to-rose-500',
    route: '/student/manual',
  },
];

export function ProfileSetup() {
  const navigate = useNavigate();

  return (
    <div dir="ltr" className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-indigo-500/30">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-gray-900 text-3xl mb-3" style={{ fontWeight: 800 }}>
            How would you like to start your profile?
          </h1>
          <p className="text-gray-500 text-lg">
            Choose the method that works best for you to create your professional profile
          </p>
        </motion.div>

        {/* Options */}
        <div className="space-y-4">
          {options.map((option, index) => {
            const Icon = option.icon;
            return (
              <motion.div
                key={option.id}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
                onClick={() => navigate(option.route)}
                className="group cursor-pointer bg-white rounded-2xl p-6 border border-gray-100 hover:border-indigo-200 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.01]"
              >
                <div className="flex items-center gap-5">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${option.gradient} flex items-center justify-center shadow-md flex-shrink-0`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-gray-900 text-lg" style={{ fontWeight: 600 }}>{option.title}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${option.badgeColor}`} style={{ fontWeight: 600 }}>
                        {option.badge}
                      </span>
                    </div>
                    <p className="text-gray-500">{option.description}</p>
                  </div>

                  <div className="w-10 h-10 rounded-full bg-gray-50 group-hover:bg-indigo-50 flex items-center justify-center transition-colors flex-shrink-0">
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-indigo-500 transition-colors" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center text-gray-400 text-sm mt-8"
        >
          You can edit your profile anytime after creation
        </motion.p>
      </div>
    </div>
  );
}
