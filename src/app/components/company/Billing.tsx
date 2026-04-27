import { CheckCircle2, CreditCard, Download, Zap, Crown, Building2 } from 'lucide-react';
import { motion } from 'motion/react';

const plans = [
  {
    id: 'basic',
    name: 'Basic',
    price: '299',
    period: 'month',
    icon: Zap,
    color: 'border-gray-200 bg-white',
    buttonColor: 'bg-gray-100 text-gray-700 hover:bg-gray-200',
    features: ['3 active training opportunities', '30 candidates/month', 'Basic AI analysis', 'Technical support'],
    current: false,
  },
  {
    id: 'pro',
    name: 'Professional',
    price: '799',
    period: 'month',
    icon: Crown,
    color: 'border-emerald-400 bg-gradient-to-b from-emerald-50 to-white ring-2 ring-emerald-400 ring-offset-2',
    buttonColor: 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-md shadow-emerald-200',
    features: ['Unlimited training opportunities', 'Unlimited candidates', 'Advanced AI analysis', 'Detailed reports', 'Priority support', 'ATS integration'],
    current: true,
    badge: 'Current Plan',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: '2499',
    period: 'month',
    icon: Building2,
    color: 'border-gray-200 bg-white',
    buttonColor: 'bg-gray-800 text-white hover:bg-gray-900',
    features: ['All Professional features', 'Dedicated account manager', 'Custom integration', 'Guaranteed SLA', 'Team training', 'Custom reports'],
    current: false,
  },
];

const invoices = [
  { id: 'INV-2024-003', date: '2024-01-01', amount: '799 SAR', status: 'Paid' },
  { id: 'INV-2023-012', date: '2023-12-01', amount: '799 SAR', status: 'Paid' },
  { id: 'INV-2023-011', date: '2023-11-01', amount: '799 SAR', status: 'Paid' },
  { id: 'INV-2023-010', date: '2023-10-01', amount: '799 SAR', status: 'Paid' },
];

export function Billing() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="mb-2">
        <h1 className="text-gray-900 text-2xl mb-1" style={{ fontWeight: 700 }}>Billing & Payment</h1>
        <p className="text-gray-500">Manage your subscription, payment methods, and invoices</p>
      </div>

      {/* Current Plan Banner */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-emerald-700 to-teal-700 rounded-3xl p-6 text-white"
      >
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <p className="text-emerald-200 text-sm mb-1">Your Current Subscription</p>
            <h2 className="text-white text-2xl mb-1" style={{ fontWeight: 700 }}>Professional Plan</h2>
            <p className="text-emerald-200 text-sm">Next renewal: February 1, 2024</p>
          </div>
          <div className="text-right">
            <p className="text-3xl text-white" style={{ fontWeight: 800 }}>799 SAR</p>
            <p className="text-emerald-200 text-sm">Monthly</p>
          </div>
        </div>

        <div className="mt-5 pt-5 border-t border-white/20 flex gap-3">
          <button className="bg-white text-emerald-700 px-4 py-2 rounded-xl text-sm hover:bg-emerald-50 transition-colors" style={{ fontWeight: 600 }}>
            Cancel Subscription
          </button>
          <button className="bg-white/20 text-white border border-white/20 px-4 py-2 rounded-xl text-sm hover:bg-white/30 transition-colors" style={{ fontWeight: 500 }}>
            Change Payment Method
          </button>
        </div>
      </motion.div>

      {/* Plans */}
      <div>
        <h2 className="text-gray-900 mb-4" style={{ fontWeight: 600 }}>Subscription Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {plans.map((plan, i) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`relative rounded-2xl p-5 border-2 ${plan.color}`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-xs px-3 py-1 rounded-full" style={{ fontWeight: 600 }}>
                    {plan.badge}
                  </div>
                )}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-gray-900" style={{ fontWeight: 600 }}>{plan.name}</h3>
                  </div>
                </div>

                <div className="mb-5">
                  <span className="text-3xl text-gray-900" style={{ fontWeight: 800 }}>{plan.price}</span>
                  <span className="text-gray-400 text-sm"> SAR/{plan.period}</span>
                </div>

                <ul className="space-y-2 mb-5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 rounded-xl text-sm transition-colors ${plan.buttonColor}`} style={{ fontWeight: 600 }}>
                  {plan.current ? 'Your Current Plan' : 'Upgrade to this Plan'}
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Payment Method */}
      <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
        <h2 className="text-gray-900 mb-4" style={{ fontWeight: 600 }}>Payment Method</h2>
        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
          <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center">
            <CreditCard className="w-5 h-5 text-indigo-600" />
          </div>
          <div>
            <p className="text-gray-900 text-sm" style={{ fontWeight: 500 }}>Visa **** **** **** 4242</p>
            <p className="text-gray-400 text-xs">Expires 12/2026</p>
          </div>
          <button className="ml-auto text-indigo-600 text-sm border border-indigo-200 px-3 py-1.5 rounded-xl hover:bg-indigo-50 transition-colors" style={{ fontWeight: 500 }}>
            Change
          </button>
        </div>
      </div>

      {/* Invoices */}
      <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
        <h2 className="text-gray-900 mb-4" style={{ fontWeight: 600 }}>Previous Invoices</h2>
        <div className="space-y-2">
          {invoices.map((invoice) => (
            <div key={invoice.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-emerald-200 transition-colors">
              <div>
                <p className="text-gray-900 text-sm" style={{ fontWeight: 500 }}>{invoice.id}</p>
                <p className="text-gray-400 text-xs">{invoice.date}</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-gray-700 text-sm" style={{ fontWeight: 600 }}>{invoice.amount}</span>
                <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full" style={{ fontWeight: 500 }}>{invoice.status}</span>
                <button className="text-gray-400 hover:text-emerald-600 transition-colors">
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
