import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Search, Filter, MapPin, Clock, Users, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { opportunities } from '../../../data/mockData';

const locations = ['All', 'Riyadh', 'Jeddah', 'Dammam', 'Tabuk'];
const types = ['All', 'Summer', 'Co-op'];
const sortOptions = ['Highest Match', 'Most Recent', 'Least Competitive'];

function MatchBadge({ percent }: { percent: number }) {
  const color = percent >= 90 ? 'bg-green-50 text-green-700 border-green-200' :
    percent >= 70 ? 'bg-indigo-50 text-indigo-700 border-indigo-200' :
    'bg-amber-50 text-amber-700 border-amber-200';
  const dot = percent >= 90 ? 'bg-green-500' : percent >= 70 ? 'bg-indigo-500' : 'bg-amber-500';
  return (
    <span className={`flex items-center gap-1.5 text-sm px-3 py-1 rounded-full border ${color}`} style={{ fontWeight: 600 }}>
      <span className={`w-2 h-2 rounded-full ${dot}`} />
      {percent}% Match
    </span>
  );
}

export function Opportunities() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [sortBy, setSortBy] = useState('Highest Match');
  const [showFilters, setShowFilters] = useState(false);

  const filtered = opportunities
    .filter((opp) => {
      const matchesSearch = !search || opp.company.includes(search) || opp.position.includes(search);
      const matchesLocation = selectedLocation === 'All' || opp.location === selectedLocation;
      const matchesType = selectedType === 'All' || opp.type === selectedType;
      return matchesSearch && matchesLocation && matchesType;
    })
    .sort((a, b) => sortBy === 'Highest Match' ? b.match - a.match : 0);

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-gray-900 text-2xl mb-1" style={{ fontWeight: 700 }}>Explore Opportunities</h1>
        <p className="text-gray-500">Discover internship opportunities that match your profile with AI technology</p>
      </div>

      {/* Search & Filter Bar */}
      <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm mb-4">
        <div className="flex gap-3 mb-3">
          <div className="flex-1 relative">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for company or position..."
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 pl-12 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-indigo-400 transition-colors text-sm"
            />
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-2 px-4 py-3 rounded-xl border text-sm transition-colors ${showFilters ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-gray-50 text-gray-600 border-gray-200 hover:border-indigo-300'}`}
            style={{ fontWeight: 500 }}
          >
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
        </div>

        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="space-y-3 pt-3 border-t border-gray-100"
          >
            <div>
              <p className="text-gray-500 text-xs mb-2" style={{ fontWeight: 500 }}>Location</p>
              <div className="flex flex-wrap gap-2">
                {locations.map((loc) => (
                  <button
                    key={loc}
                    onClick={() => setSelectedLocation(loc)}
                    className={`text-sm px-3 py-1.5 rounded-lg border transition-all ${selectedLocation === loc ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-gray-50 text-gray-600 border-gray-200 hover:border-indigo-200'}`}
                  >
                    {loc}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-gray-500 text-xs mb-2" style={{ fontWeight: 500 }}>Internship Type</p>
              <div className="flex flex-wrap gap-2">
                {types.map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`text-sm px-3 py-1.5 rounded-lg border transition-all ${selectedType === type ? 'bg-violet-600 text-white border-violet-600' : 'bg-gray-50 text-gray-600 border-gray-200 hover:border-violet-200'}`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-gray-500 text-xs mb-2" style={{ fontWeight: 500 }}>Sort By</p>
              <div className="flex flex-wrap gap-2">
                {sortOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setSortBy(opt)}
                    className={`text-sm px-3 py-1.5 rounded-lg border transition-all ${sortBy === opt ? 'bg-gray-800 text-white border-gray-800' : 'bg-gray-50 text-gray-600 border-gray-200 hover:border-gray-400'}`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-gray-500 text-sm">
          <span className="text-gray-900" style={{ fontWeight: 600 }}>{filtered.length}</span> opportunities available
        </p>
        <p className="text-gray-400 text-xs">Sorted by: {sortBy}</p>
      </div>

      {/* Opportunities Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {filtered.map((opp, i) => (
          <motion.div
            key={opp.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all group cursor-pointer"
            onClick={() => navigate(`/student/opportunities/${opp.id}`)}
          >
            {/* Company */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-2xl">
                  {opp.logo}
                </div>
                <div>
                  <h3 className="text-gray-900 text-sm" style={{ fontWeight: 600 }}>{opp.company}</h3>
                  <p className="text-indigo-600 text-sm" style={{ fontWeight: 500 }}>{opp.position}</p>
                </div>
              </div>
              <MatchBadge percent={opp.match} />
            </div>

            {/* Match Bar */}
            <div className="mb-4">
              <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span>Match rate with your profile</span>
                <span style={{ fontWeight: 600 }}>{opp.match}%</span>
              </div>
              <div className="bg-gray-100 rounded-full h-2">
                <motion.div
                  className={`h-2 rounded-full ${opp.match >= 90 ? 'bg-green-500' : opp.match >= 70 ? 'bg-indigo-500' : 'bg-amber-500'}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${opp.match}%` }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                />
              </div>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {opp.skills.slice(0, 3).map((skill) => (
                <span key={skill} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-lg">{skill}</span>
              ))}
              {opp.skills.length > 3 && (
                <span className="text-gray-400 text-xs px-2 py-1">+{opp.skills.length - 3}</span>
              )}
            </div>

            {/* Info */}
            <div className="flex items-center gap-4 text-gray-400 text-xs mb-4">
              <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{opp.location}</span>
              <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{opp.duration}</span>
              <span className="flex items-center gap-1"><Users className="w-3 h-3" />{opp.applicants} applicants</span>
            </div>

            <button
              className="w-full text-center text-indigo-600 text-sm border-2 border-indigo-200 bg-indigo-50 rounded-xl py-2.5 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 transition-all flex items-center justify-center gap-2"
              style={{ fontWeight: 600 }}
            >
              View Details
              <ChevronRight className="w-4 h-4" />
            </button>
          </motion.div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-gray-400">
          <Search className="w-12 h-12 mx-auto mb-3 opacity-50" />
          <p>No opportunities match your search</p>
        </div>
      )}
    </div>
  );
}
