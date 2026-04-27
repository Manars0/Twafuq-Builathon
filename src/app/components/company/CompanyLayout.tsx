import { Outlet, NavLink, useNavigate } from 'react-router';
import {
  LayoutDashboard, Plus, Briefcase, Users, Bell, CreditCard, LogOut, Building2
} from 'lucide-react';
import wardiereLogo from '../../../imports/Wardiere.png';

const navItems = [
  { to: '/company/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/company/create', icon: Plus, label: 'Create New Opportunity' },
  { to: '/company/opportunities', icon: Briefcase, label: 'Manage Opportunities' },
  { to: '/company/candidates', icon: Users, label: 'Candidate Matching' },
  { to: '/company/notifications', icon: Bell, label: 'Notifications', badge: 2 },
  { to: '/company/billing', icon: CreditCard, label: 'Billing & Payment' },
];

export function CompanyLayout() {
  const navigate = useNavigate();

  return (
    <div dir="ltr" className="min-h-screen bg-gray-50 flex">
      {/* Main Content */}
      <main className="flex-1 min-h-screen" style={{ marginLeft: '280px' }}>
        <Outlet />
      </main>

      {/* Left Sidebar */}
      <aside
        className="fixed left-0 top-0 h-screen bg-white border-r border-gray-100 shadow-sm flex flex-col z-20"
        style={{ width: '280px' }}
      >
        {/* Logo */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <img src={wardiereLogo} alt="Wardiere" className="h-10 w-auto" />
            <div>
              <p className="text-gray-400 text-xs">Company Dashboard</p>
            </div>
          </div>
        </div>

        {/* Company Profile */}
        <div className="p-4 mx-4 my-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl border border-emerald-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center text-white text-lg">
              🛢️
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-gray-900 text-sm truncate" style={{ fontWeight: 600 }}>Saudi Aramco</p>
              <p className="text-gray-500 text-xs truncate">Global Energy Company</p>
            </div>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full" />
            <span className="text-green-600 text-xs">Active Subscription - Professional Plan</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
          <p className="text-gray-400 text-xs px-3 py-2" style={{ fontWeight: 600 }}>Main Menu</p>
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-200'
                      : 'text-gray-600 hover:bg-emerald-50 hover:text-emerald-700'
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
                    {item.to === '/company/create' && (
                      <span className={`text-xs px-1.5 py-0.5 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-emerald-100 text-emerald-700'}`}>New</span>
                    )}
                  </>
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* Bottom */}
        <div className="p-4 border-t border-gray-100 space-y-1">
          <button
            onClick={() => navigate('/')}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-500 hover:bg-red-50 hover:text-red-500 transition-all duration-200"
          >
            <LogOut className="w-5 h-5" />
            <span className="text-sm" style={{ fontWeight: 500 }}>Log Out</span>
          </button>
        </div>
      </aside>
    </div>
  );
}
