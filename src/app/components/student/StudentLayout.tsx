import { Outlet, NavLink, useNavigate } from 'react-router';
import {
  LayoutDashboard, Search, FileText, Bell, User, LogOut, ChevronRight
} from 'lucide-react';
import wardiereLogo from '../../../imports/Wardiere.png';

const navItems = [
  { to: '/student/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/student/opportunities', icon: Search, label: 'Explore Opportunities' },
  { to: '/student/applications', icon: FileText, label: 'My Applications' },
  { to: '/student/notifications', icon: Bell, label: 'Notifications', badge: 2 },
  { to: '/student/profile', icon: User, label: 'Profile' },
];

export function StudentLayout() {
  const navigate = useNavigate();

  return (
    <div dir="ltr" className="min-h-screen bg-gray-50 flex">
      {/* Main Content */}
      <main className="flex-1 min-h-screen" style={{ marginLeft: '280px' }}>
        <Outlet />
      </main>

      {/* Left Sidebar */}
      <aside
        className="fixed left-0 top-0 h-screen w-70 bg-white border-r border-gray-100 shadow-sm flex flex-col z-20"
        style={{ width: '280px' }}
      >
        {/* Logo */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <img src={wardiereLogo} alt="Wardiere" className="h-8 w-auto" />
          </div>
        </div>

        {/* Profile Summary */}
        <div className="p-4 mx-4 my-4 bg-gradient-to-r from-indigo-50 to-violet-50 rounded-2xl border border-indigo-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white" style={{ fontWeight: 700 }}>J</div>
            <div className="flex-1 min-w-0">
              <p className="text-gray-900 text-sm truncate" style={{ fontWeight: 600 }}>John Smith</p>
              <p className="text-gray-500 text-xs truncate">Software Engineering</p>
            </div>
          </div>
          <div className="mt-3">
            <div className="flex justify-between text-xs text-gray-500 mb-1">
              <span>Profile Completion</span>
              <span style={{ fontWeight: 600 }}>80%</span>
            </div>
            <div className="bg-white rounded-full h-1.5">
              <div className="bg-gradient-to-r from-indigo-500 to-violet-500 h-1.5 rounded-full" style={{ width: '80%' }} />
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
          <p className="text-gray-400 text-xs px-3 py-2" style={{ fontWeight: 600, letterSpacing: '0.05em' }}>MAIN MENU</p>
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                    isActive
                      ? 'bg-gradient-to-r from-indigo-500 to-violet-500 text-white shadow-md shadow-indigo-200'
                      : 'text-gray-600 hover:bg-indigo-50 hover:text-indigo-600'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <Icon className="w-5 h-5 flex-shrink-0" />
                    <span className="flex-1 text-sm" style={{ fontWeight: 500 }}>{item.label}</span>
                    {item.badge && !isActive && (
                      <span className="bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full min-w-[1.25rem] text-center">
                        {item.badge}
                      </span>
                    )}
                  </>
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* Bottom Actions */}
        <div className="p-4 border-t border-gray-100 space-y-1">
          <button
            onClick={() => navigate('/')}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-500 hover:bg-red-50 hover:text-red-500 transition-all duration-200"
          >
            <LogOut className="w-5 h-5" />
            <span className="text-sm" style={{ fontWeight: 500 }}>Sign Out</span>
          </button>
        </div>
      </aside>
    </div>
  );
}
