import { useState } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router';
import {
  LayoutDashboard, Search, FileText, Bell, User, LogOut, Menu, X
} from 'lucide-react';
import tawafuqLogo from '../../../imports/Tawafuq.png';

const navItems = [
  { to: '/student/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/student/opportunities', icon: Search, label: 'Explore Opportunities' },
  { to: '/student/applications', icon: FileText, label: 'My Applications' },
  { to: '/student/notifications', icon: Bell, label: 'Notifications', badge: 2 },
  { to: '/student/profile', icon: User, label: 'Profile' },
];

export function StudentLayout() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div dir="ltr" className="min-h-screen bg-gray-50 flex">
      {/* Mobile overlay */}
      <button
        type="button"
        aria-label="Close menu"
        onClick={closeSidebar}
        className={`fixed inset-0 z-40 bg-black/40 md:hidden transition-opacity duration-300 ${
          sidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Main Content */}
      <main className="flex-1 min-h-screen w-full md:ml-[280px] ml-0">
        <div className="md:hidden sticky top-0 z-30 flex items-center gap-3 bg-white border-b border-gray-100 px-4 py-3 shadow-sm">
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setSidebarOpen(true)}
            className="p-2 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
        <Outlet />
      </main>

      {/* Left Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen w-[280px] bg-white border-r border-gray-100 shadow-sm flex flex-col z-50 md:z-20 transition-transform duration-300 ease-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
      >
        <button
          type="button"
          aria-label="Close menu"
          onClick={closeSidebar}
          className="md:hidden absolute right-3 top-3 z-10 p-2 rounded-xl text-gray-600 hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Logo */}
        <div className="px-4 py-6 border-b border-gray-100">
          <div className="w-full min-w-0 flex justify-center">
            <img src={tawafuqLogo} alt="Tawafuq" className="h-[12vw] min-h-[90px] max-h-[400px] w-auto max-w-full object-contain" />
          </div>
        </div>

        {/* Profile Summary */}
        <div className="p-4 mx-4 my-4 bg-gradient-to-r from-[#EAF2FB] to-[#D9E8F8] rounded-2xl border border-[#BFD2EA]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#003267] to-[#00509E] flex items-center justify-center text-white" style={{ fontWeight: 700 }}>J</div>
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
              <div className="bg-gradient-to-r from-[#003267] to-[#00509E] h-1.5 rounded-full" style={{ width: '80%' }} />
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
                onClick={closeSidebar}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                    isActive
                      ? 'bg-gradient-to-r from-[#003267] to-[#00509E] text-white shadow-md shadow-[#003267]/25'
                      : 'text-gray-600 hover:bg-[#EAF2FB] hover:text-[#003267]'
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
            type="button"
            onClick={() => {
              closeSidebar();
              navigate('/');
            }}
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
