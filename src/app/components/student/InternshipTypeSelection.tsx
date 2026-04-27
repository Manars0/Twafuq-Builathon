import { useNavigate } from 'react-router';
import { Briefcase, Sun, Grid, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

const options = [
  {
    id: 'coop',
    icon: Briefcase,
    title: 'Co-op Internship',
    description: 'Longer-term internships integrated with your academic program',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'summer',
    icon: Sun,
    title: 'Summer Internship',
    description: 'Short-term opportunities during summer break',
    gradient: 'from-orange-500 to-amber-500',
  },
  {
    id: 'no-preference',
    icon: Grid,
    title: 'No Preference',
    description: 'Show me all available internship opportunities',
    gradient: 'from-violet-500 to-purple-500',
  },
];

export function InternshipTypeSelection() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string | null>(null);

  const handleContinue = () => {
    if (selected) {
      navigate('/student/sector-selection');
    }
  };

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
            What type of internship are you looking for?
          </h1>
          <p className="text-gray-500 text-lg mb-2">
            Choose your preference to get better matched opportunities
          </p>
          <p className="text-gray-400 text-sm">
            Choose your preference or select 'No Preference' to see all options
          </p>
        </motion.div>

        {/* Options */}
        <div className="space-y-4 mb-8">
          {options.map((option, index) => {
            const Icon = option.icon;
            const isSelected = selected === option.id;
            return (
              <motion.div
                key={option.id}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
                onClick={() => setSelected(option.id)}
                className={`group cursor-pointer bg-white rounded-2xl p-6 border-2 transition-all duration-300 hover:scale-[1.01] ${
                  isSelected
                    ? 'border-indigo-400 shadow-lg shadow-indigo-500/20'
                    : 'border-gray-100 hover:border-indigo-200 shadow-sm hover:shadow-md'
                }`}
              >
                <div className="flex items-center gap-5">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${option.gradient} flex items-center justify-center shadow-md flex-shrink-0`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-gray-900 text-lg mb-1" style={{ fontWeight: 600 }}>
                      {option.title}
                    </h3>
                    <p className="text-gray-500">{option.description}</p>
                  </div>

                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                      isSelected
                        ? 'border-indigo-500 bg-indigo-500'
                        : 'border-gray-300 bg-white'
                    }`}
                  >
                    {isSelected && (
                      <div className="w-2 h-2 bg-white rounded-full" />
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Continue Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          onClick={handleContinue}
          disabled={!selected}
          className={`w-full rounded-2xl py-4 transition-all duration-200 ${
            selected
              ? 'bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
          style={{ fontWeight: 600 }}
        >
          Continue
        </motion.button>

        {/* Progress indicator */}
        <div className="flex items-center justify-center gap-2 mt-6">
          <div className="w-8 h-1.5 rounded-full bg-indigo-600" />
          <div className="w-8 h-1.5 rounded-full bg-gray-200" />
          <div className="w-8 h-1.5 rounded-full bg-gray-200" />
        </div>
      </div>
    </div>
  );
}
