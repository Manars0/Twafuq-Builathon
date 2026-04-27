import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowRight, ArrowLeft, PenLine, Plus, X, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const majors = ['Software Engineering', 'Computer Science', 'Computer Engineering', 'Information Technology', 'Information Security', 'Artificial Intelligence', 'Data Science', 'Other'];
const suggestedSkills = ['Python', 'JavaScript', 'React', 'Java', 'SQL', 'Machine Learning', 'Flutter', 'UI/UX', 'Figma', 'Cloud', 'DevOps', 'AI'];
const interestOptions = ['Web Development', 'Mobile Development', 'Artificial Intelligence', 'Big Data', 'Cybersecurity', 'Design', 'Entrepreneurship', 'Cloud Computing'];

const steps = ['Basic Information', 'Skills', 'Interests'];

export function ManualInput() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedMajor, setSelectedMajor] = useState('');
  const [skills, setSkills] = useState<string[]>([]);
  const [customSkill, setCustomSkill] = useState('');
  const [interests, setInterests] = useState<string[]>([]);
  const [name, setName] = useState('');
  const [university, setUniversity] = useState('');
  const [gpa, setGpa] = useState('');

  const addSkill = (skill: string) => {
    if (skill && !skills.includes(skill)) setSkills([...skills, skill]);
    setCustomSkill('');
  };

  const removeSkill = (skill: string) => setSkills(skills.filter((s) => s !== skill));

  const toggleInterest = (interest: string) => {
    setInterests((prev) =>
      prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]
    );
  };

  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div dir="ltr" className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-400 to-rose-500 flex items-center justify-center mx-auto mb-4 shadow-lg">
            <PenLine className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-gray-900 text-2xl mb-1" style={{ fontWeight: 700 }}>Manual Input</h1>
          <p className="text-gray-500">Enter your data step by step</p>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-3">
            {steps.map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm transition-all ${
                  i < currentStep ? 'bg-green-500 text-white' :
                  i === currentStep ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-400'
                }`} style={{ fontWeight: 600 }}>
                  {i < currentStep ? <CheckCircle2 className="w-4 h-4" /> : i + 1}
                </div>
                <span className={`text-sm ${i === currentStep ? 'text-orange-600' : 'text-gray-400'}`} style={{ fontWeight: i === currentStep ? 600 : 400 }}>
                  {step}
                </span>
                {i < steps.length - 1 && <div className={`h-px w-12 ${i < currentStep ? 'bg-green-400' : 'bg-gray-200'}`} />}
              </div>
            ))}
          </div>
          <div className="bg-gray-200 rounded-full h-2">
            <motion.div
              className="bg-gradient-to-r from-orange-400 to-rose-500 h-2 rounded-full"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
          <AnimatePresence mode="wait">
            {/* Step 1: Basic Info */}
            {currentStep === 0 && (
              <motion.div key="step1" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 30 }}
                className="space-y-5"
              >
                <h2 className="text-gray-900 text-xl mb-6" style={{ fontWeight: 600 }}>Basic Information</h2>
                <div>
                  <label className="text-gray-600 text-sm block mb-2" style={{ fontWeight: 500 }}>Full Name</label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-orange-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-gray-600 text-sm block mb-2" style={{ fontWeight: 500 }}>University</label>
                  <input
                    value={university}
                    onChange={(e) => setUniversity(e.target.value)}
                    placeholder="University name"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-orange-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-gray-600 text-sm block mb-3" style={{ fontWeight: 500 }}>Major</label>
                  <div className="grid grid-cols-2 gap-2">
                    {majors.map((major) => (
                      <button
                        key={major}
                        onClick={() => setSelectedMajor(major)}
                        className={`py-3 px-4 rounded-xl text-sm border-2 transition-all ${
                          selectedMajor === major
                            ? 'border-orange-400 bg-orange-50 text-orange-700'
                            : 'border-gray-200 bg-gray-50 text-gray-600 hover:border-orange-200'
                        }`}
                      >
                        {major}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-gray-600 text-sm block mb-2" style={{ fontWeight: 500 }}>GPA</label>
                  <input
                    value={gpa}
                    onChange={(e) => setGpa(e.target.value)}
                    placeholder="Example: 4.5 / 5.0"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-orange-400 transition-colors"
                  />
                </div>
              </motion.div>
            )}

            {/* Step 2: Skills */}
            {currentStep === 1 && (
              <motion.div key="step2" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 30 }}>
                <h2 className="text-gray-900 text-xl mb-6" style={{ fontWeight: 600 }}>Skills</h2>
                <div className="mb-5">
                  <label className="text-gray-600 text-sm block mb-2" style={{ fontWeight: 500 }}>Add your skills</label>
                  <div className="flex gap-2">
                    <input
                      value={customSkill}
                      onChange={(e) => setCustomSkill(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && addSkill(customSkill)}
                      placeholder="Type a skill and press Enter"
                      className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-orange-400 transition-colors"
                    />
                    <button
                      onClick={() => addSkill(customSkill)}
                      className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 rounded-xl transition-colors"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="mb-5">
                  <p className="text-gray-500 text-sm mb-3">Choose from suggestions:</p>
                  <div className="flex flex-wrap gap-2">
                    {suggestedSkills.map((skill) => (
                      <button
                        key={skill}
                        onClick={() => skills.includes(skill) ? removeSkill(skill) : addSkill(skill)}
                        className={`text-sm px-3 py-2 rounded-full border-2 transition-all ${
                          skills.includes(skill)
                            ? 'border-orange-400 bg-orange-50 text-orange-700'
                            : 'border-gray-200 text-gray-500 hover:border-orange-200'
                        }`}
                      >
                        {skills.includes(skill) ? `✓ ${skill}` : `+ ${skill}`}
                      </button>
                    ))}
                  </div>
                </div>

                {skills.length > 0 && (
                  <div>
                    <p className="text-gray-500 text-sm mb-2">Selected skills:</p>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <span key={skill} className="bg-orange-50 text-orange-700 border border-orange-200 text-sm px-3 py-1 rounded-full flex items-center gap-1">
                          {skill}
                          <button onClick={() => removeSkill(skill)} className="text-orange-400 hover:text-orange-600">
                            <X className="w-3 h-3" />
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {/* Step 3: Interests */}
            {currentStep === 2 && (
              <motion.div key="step3" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 30 }}>
                <h2 className="text-gray-900 text-xl mb-2" style={{ fontWeight: 600 }}>Professional Interests</h2>
                <p className="text-gray-500 text-sm mb-6">Select the fields that interest you</p>
                <div className="grid grid-cols-2 gap-3">
                  {interestOptions.map((interest) => (
                    <button
                      key={interest}
                      onClick={() => toggleInterest(interest)}
                      className={`py-4 px-4 rounded-2xl text-sm border-2 transition-all text-left ${
                        interests.includes(interest)
                          ? 'border-orange-400 bg-orange-50 text-orange-700'
                          : 'border-gray-200 bg-gray-50 text-gray-600 hover:border-orange-200'
                      }`}
                    >
                      <span className="block mb-1">{interests.includes(interest) ? '✓' : '○'}</span>
                      {interest}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            <button
              onClick={() => currentStep > 0 ? setCurrentStep(currentStep - 1) : navigate('/student/setup')}
              className="flex items-center gap-2 text-gray-500 hover:text-gray-700 py-3 px-5 rounded-xl hover:bg-gray-100 transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Previous</span>
            </button>
            <button
              onClick={() => currentStep < steps.length - 1 ? setCurrentStep(currentStep + 1) : navigate('/student/review')}
              className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-rose-500 text-white py-3 px-6 rounded-xl shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 transition-all"
              style={{ fontWeight: 600 }}
            >
              <span>{currentStep < steps.length - 1 ? 'Next' : 'Review Profile'}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
