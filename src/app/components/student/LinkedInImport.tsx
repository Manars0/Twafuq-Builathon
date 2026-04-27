import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { CheckCircle2, Linkedin, Sparkles, Edit3, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import wardiereLogo from '../../../imports/Wardiere.png';

const loadingSteps = [
  'Connecting to LinkedIn...',
  'Importing your personal data...',
  'Analyzing your skills and experience...',
  'Processing data with AI...',
  'Process completed! ✨',
];

const skills = ['React', 'JavaScript', 'TypeScript', 'Node.js', 'Python', 'SQL', 'Git', 'Agile'];
const interests = ['Web Development', 'Artificial Intelligence', 'User Experience'];

export function LinkedInImport() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(true);
  const [currentLoadingStep, setCurrentLoadingStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLoadingStep((prev) => {
        if (prev >= loadingSteps.length - 1) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 600);
          return prev;
        }
        return prev + 1;
      });
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div dir="ltr" className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 text-center"
            >
              <div className="w-20 h-20 rounded-3xl bg-[#0077B5] flex items-center justify-center mx-auto mb-8 shadow-lg">
                <Linkedin className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-gray-900 text-2xl mb-2" style={{ fontWeight: 700 }}>Importing your profile from LinkedIn</h2>
              <p className="text-gray-500 mb-10">AI is analyzing your data...</p>

              {/* AI Processing Animation */}
              <div className="mb-8">
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="absolute inset-0 rounded-full border-4 border-indigo-100" />
                  <motion.div
                    className="absolute inset-0 rounded-full border-4 border-indigo-500 border-t-transparent"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  />
                  <div className="absolute inset-4 rounded-full bg-indigo-50 flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-indigo-500" />
                  </div>
                </div>

                {/* Progress bar */}
                <div className="bg-gray-100 rounded-full h-2 mb-4">
                  <motion.div
                    className="bg-gradient-to-r from-indigo-500 to-violet-500 h-2 rounded-full"
                    animate={{ width: `${((currentLoadingStep + 1) / loadingSteps.length) * 100}%` }}
                    transition={{ duration: 0.5 }}
                    style={{ width: 0 }}
                  />
                </div>
              </div>

              {/* Steps */}
              <div className="space-y-3 text-left">
                {loadingSteps.map((step, index) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: index <= currentLoadingStep ? 1 : 0.3 }}
                    className="flex items-center gap-3"
                  >
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                      index < currentLoadingStep ? 'bg-green-100' :
                      index === currentLoadingStep ? 'bg-indigo-100' : 'bg-gray-100'
                    }`}>
                      {index < currentLoadingStep ? (
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                      ) : index === currentLoadingStep ? (
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 0.8, repeat: Infinity }}
                          className="w-2 h-2 bg-indigo-500 rounded-full"
                        />
                      ) : (
                        <div className="w-2 h-2 bg-gray-300 rounded-full" />
                      )}
                    </div>
                    <span className={`text-sm ${index <= currentLoadingStep ? 'text-gray-700' : 'text-gray-400'}`}>
                      {step}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="preview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-gray-900 text-xl" style={{ fontWeight: 700 }}>Imported Data Preview</h2>
                  <span className="flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">
                    <CheckCircle2 className="w-4 h-4" />
                    Imported Successfully
                  </span>
                </div>

                {/* Profile Info */}
                <div className="flex items-center gap-4 mb-6 p-4 bg-gray-50 rounded-2xl">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-400 to-violet-500 flex items-center justify-center text-white text-2xl" style={{ fontWeight: 700 }}>
                    J
                  </div>
                  <div>
                    <h3 className="text-gray-900" style={{ fontWeight: 600 }}>John Smith</h3>
                    <p className="text-gray-500 text-sm">Software Engineering Student - King Abdullah University</p>
                    <p className="text-gray-400 text-xs">Riyadh, Saudi Arabia</p>
                  </div>
                  <button className="ml-auto text-indigo-500 hover:text-indigo-600">
                    <Edit3 className="w-5 h-5" />
                  </button>
                </div>

                {/* Fields */}
                <div className="space-y-4">
                  <div>
                    <label className="text-gray-500 text-sm block mb-2">Major</label>
                    <input
                      defaultValue="Software Engineering"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-indigo-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-gray-500 text-sm block mb-2">University</label>
                    <input
                      defaultValue="King Abdullah University of Science and Technology"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-indigo-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-gray-500 text-sm block mb-2">Skills</label>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <span key={skill} className="bg-indigo-50 text-indigo-700 border border-indigo-200 text-sm px-3 py-1 rounded-full flex items-center gap-1">
                          {skill}
                          <button className="text-indigo-400 hover:text-indigo-600">×</button>
                        </span>
                      ))}
                      <button className="border-2 border-dashed border-gray-300 text-gray-400 text-sm px-3 py-1 rounded-full hover:border-indigo-300 hover:text-indigo-500 transition-colors">
                        + Add
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="text-gray-500 text-sm block mb-2">Experience</label>
                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                      <p className="text-gray-700 text-sm" style={{ fontWeight: 500 }}>Web Developer Intern - Saudi Technology Company</p>
                      <p className="text-gray-400 text-xs">June 2023 - August 2023</p>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => navigate('/student/review')}
                className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-2xl py-4 flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/20"
                style={{ fontWeight: 600 }}
              >
                <span>Confirm Data and Continue</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
