import { Bell, CheckCircle2, XCircle, Eye, Star, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { notifications } from '../../../data/mockData';

const typeConfig: Record<string, { icon: React.ElementType; color: string; bg: string }> = {
  match: { icon: Sparkles, color: 'text-indigo-600', bg: 'bg-indigo-50' },
  accepted: { icon: CheckCircle2, color: 'text-green-600', bg: 'bg-green-50' },
  view: { icon: Eye, color: 'text-blue-600', bg: 'bg-blue-50' },
  reminder: { icon: Star, color: 'text-amber-500', bg: 'bg-amber-50' },
  rejected: { icon: XCircle, color: 'text-red-500', bg: 'bg-red-50' },
};

export function StudentNotifications() {
  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-gray-900 text-2xl mb-1" style={{ fontWeight: 700 }}>Notifications</h1>
          <p className="text-gray-500">{unreadCount > 0 ? `You have ${unreadCount} unread notifications` : 'All notifications read'}</p>
        </div>
        <button className="text-indigo-600 text-sm hover:underline" style={{ fontWeight: 500 }}>
          Mark all as read
        </button>
      </div>

      {/* Unread Section */}
      {notifications.some((n) => !n.read) && (
        <div className="mb-6">
          <p className="text-gray-500 text-xs mb-3 px-1" style={{ fontWeight: 600 }}>New</p>
          <div className="space-y-2">
            {notifications.filter((n) => !n.read).map((notif, i) => {
              const config = typeConfig[notif.type] || typeConfig.match;
              const Icon = config.icon;
              return (
                <motion.div
                  key={notif.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white rounded-2xl p-4 border border-indigo-100 shadow-sm hover:shadow-md transition-all cursor-pointer relative"
                >
                  <div className="absolute left-4 top-4 w-2 h-2 bg-indigo-500 rounded-full" />
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-xl ${config.bg} flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-5 h-5 ${config.color}`} />
                    </div>
                    <div className="flex-1 pl-6">
                      <p className="text-gray-800 text-sm leading-relaxed" style={{ fontWeight: 500 }}>{notif.message}</p>
                      <p className="text-gray-400 text-xs mt-1">{notif.time}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      )}

      {/* Read Section */}
      {notifications.some((n) => n.read) && (
        <div>
          <p className="text-gray-500 text-xs mb-3 px-1" style={{ fontWeight: 600 }}>Earlier</p>
          <div className="space-y-2">
            {notifications.filter((n) => n.read).map((notif, i) => {
              const config = typeConfig[notif.type] || typeConfig.match;
              const Icon = config.icon;
              return (
                <motion.div
                  key={notif.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="bg-white/70 rounded-2xl p-4 border border-gray-100 hover:shadow-sm transition-all cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-xl ${config.bg} opacity-60 flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-5 h-5 ${config.color}`} />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-500 text-sm leading-relaxed">{notif.message}</p>
                      <p className="text-gray-400 text-xs mt-1">{notif.time}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      )}

      {notifications.length === 0 && (
        <div className="text-center py-16 text-gray-400">
          <Bell className="w-12 h-12 mx-auto mb-3 opacity-40" />
          <p>No notifications</p>
        </div>
      )}
    </div>
  );
}
