import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router';
import { Upload, FileText, CheckCircle2, Sparkles, ArrowRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
type Phase = 'upload' | 'processing' | 'preview';

const extractedSkills = ['Python', 'Django', 'React', 'SQL', 'Machine Learning', 'Data Analysis'];

export function CVUpload() {
  const navigate = useNavigate();
  const [phase, setPhase] = useState<Phase>('upload');
  const [isDragging, setIsDragging] = useState(false);
  const [fileName, setFileName] = useState('');
  const [progress, setProgress] = useState(0);

  const simulateUpload = (name: string) => {
    setFileName(name);
    setPhase('processing');
    let prog = 0;
    const interval = setInterval(() => {
      prog += Math.random() * 15;
      if (prog >= 100) {
        prog = 100;
        clearInterval(interval);
        setTimeout(() => setPhase('preview'), 500);
      }
      setProgress(Math.min(prog, 100));
    }, 200);
  };

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) simulateUpload(file.name);
  }, []);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) simulateUpload(file.name);
  };

  return (
    <div dir="ltr" className="min-h-screen bg-gradient-to-br from-gray-50 to-[#EAF2FB] flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        <AnimatePresence mode="wait">
          {phase === 'upload' && (
            <motion.div key="upload" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
            >
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#003267] to-[#00509E] flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Upload className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-gray-900 text-2xl mb-2" style={{ fontWeight: 700 }}>Upload Resume</h2>
                <p className="text-gray-500">AI will automatically extract all your data</p>
              </div>

              {/* Drag & Drop Zone */}
              <div
                onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={handleDrop}
                className={`border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-200 ${
                  isDragging ? 'border-[#00509E] bg-[#EAF2FB]' : 'border-gray-200 bg-gray-50 hover:border-[#7FA7CF] hover:bg-[#EAF2FB]'
                }`}
              >
                <motion.div animate={isDragging ? { scale: 1.1 } : { scale: 1 }}>
                  <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-600 text-lg mb-2" style={{ fontWeight: 500 }}>
                    {isDragging ? 'Drop the file here' : 'Drag and drop your resume file here'}
                  </p>
                  <p className="text-gray-400 text-sm mb-6">Supports PDF, DOC, DOCX (up to 10 MB)</p>
                  <label className="cursor-pointer bg-[#003267] hover:bg-[#00264D] text-white px-6 py-3 rounded-xl transition-colors inline-block"
                    style={{ fontWeight: 500 }}>
                    <input type="file" className="hidden" accept=".pdf,.doc,.docx" onChange={handleFileInput} />
                    Choose File
                  </label>
                </motion.div>
              </div>
            </motion.div>
          )}

          {phase === 'processing' && (
            <motion.div key="processing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 text-center"
            >
              <div className="w-20 h-20 relative mx-auto mb-8">
                <div className="absolute inset-0 rounded-full border-4 border-[#D9E8F8]" />
                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-[#003267] border-t-transparent"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                />
                <div className="absolute inset-3 rounded-full bg-[#EAF2FB] flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-[#003267]" />
                </div>
              </div>

              <h2 className="text-gray-900 text-2xl mb-2" style={{ fontWeight: 700 }}>AI is analyzing your file</h2>
              <p className="text-gray-500 mb-8 text-sm">{fileName}</p>

              <div className="mb-6">
                <div className="flex justify-between text-sm text-gray-500 mb-2">
                  <span>Completed</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <div className="bg-gray-100 rounded-full h-3 overflow-hidden">
                  <motion.div
                    className="bg-gradient-to-r from-[#003267] to-[#00509E] h-3 rounded-full"
                    style={{ width: `${progress}%` }}
                    transition={{ duration: 0.2 }}
                  />
                </div>
              </div>

              <div className="space-y-2 text-left">
                {['Extracting personal information', 'Analyzing technical skills', 'Extracting experience and projects', 'Identifying education level'].map((step, i) => (
                  <div key={step} className={`flex items-center gap-3 ${progress > (i + 1) * 25 ? 'text-gray-700' : 'text-gray-300'}`}>
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${progress > (i + 1) * 25 ? 'bg-green-100' : 'bg-gray-100'}`}>
                      {progress > (i + 1) * 25
                        ? <CheckCircle2 className="w-4 h-4 text-green-500" />
                        : <div className="w-2 h-2 bg-gray-300 rounded-full" />}
                    </div>
                    <span className="text-sm">{step}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {phase === 'preview' && (
            <motion.div key="preview" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-gray-900 text-xl" style={{ fontWeight: 700 }}>Extracted Data</h2>
                  <div className="flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">
                    <CheckCircle2 className="w-4 h-4" />
                    Processing Completed
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-gray-500 text-sm block mb-1">Name</label>
                      <input defaultValue="John Smith" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-[#00509E] transition-colors" />
                    </div>
                    <div>
                      <label className="text-gray-500 text-sm block mb-1">Major</label>
                      <input defaultValue="Computer Science" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-[#00509E] transition-colors" />
                    </div>
                  </div>

                  <div>
                    <label className="text-gray-500 text-sm block mb-2">Extracted Skills</label>
                    <div className="flex flex-wrap gap-2">
                      {extractedSkills.map((skill) => (
                        <span key={skill} className="bg-[#EAF2FB] text-[#003267] border border-[#BFD2EA] text-sm px-3 py-1 rounded-full flex items-center gap-1">
                          {skill}
                          <button className="text-[#4B76A4] hover:text-[#003267] text-base leading-none">×</button>
                        </span>
                      ))}
                      <button className="border-2 border-dashed border-gray-300 text-gray-400 text-sm px-3 py-1 rounded-full hover:border-[#7FA7CF] hover:text-[#003267]">
                        + Add
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="text-gray-500 text-sm block mb-2">Experience</label>
                    <div className="space-y-2">
                      {[
                        { role: 'Web Developer - Internship', company: 'Tech Solutions Company', period: '2023' },
                        { role: 'Research Assistant', company: 'King Saud University', period: '2022-2023' },
                      ].map((exp) => (
                        <div key={exp.role} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-200">
                          <div>
                            <p className="text-gray-700 text-sm" style={{ fontWeight: 500 }}>{exp.role}</p>
                            <p className="text-gray-400 text-xs">{exp.company} • {exp.period}</p>
                          </div>
                          <button className="text-gray-400 hover:text-red-400 transition-colors">
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => navigate('/student/review')}
                className="w-full bg-gradient-to-r from-[#003267] to-[#00509E] text-white rounded-2xl py-4 flex items-center justify-center gap-2 shadow-lg shadow-[#003267]/25"
                style={{ fontWeight: 600 }}
              >
                <span>Confirm and Continue to Review Profile</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
