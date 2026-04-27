import React, { useState } from 'react';
import { CheckCircle2, CreditCard, Download, Zap, Crown, Building2 } from 'lucide-react';
import { motion } from 'motion/react';

const plans = [
  {
    id: 'starter',
    name: 'Starter Plan',
    priceMonthly: 149,
    icon: Zap,
    features: [
      'Up to 2 training opportunities',
      'Access to matched candidates',
      'Basic matching results',
      'Up to 50 candidates per month',
      'Standard support',
    ],
    current: false,
    popular: false,
    freeTrial: true,
    customPricing: false,
  },
  {
    id: 'growth',
    name: 'Growth Plan',
    priceMonthly: 349,
    icon: Crown,
    features: [
      'Up to 5 training opportunities',
      'Shortlist of top-matched candidates',
      'Advanced filtering (skills, major)',
      'Up to 150 candidates per month',
      'Priority listing',
      'Basic analytics dashboard',
    ],
    current: true,
    popular: true,
    badge: 'Most Popular',
    freeTrial: true,
    customPricing: false,
  },
  {
    id: 'enterprise',
    name: 'Enterprise Plan',
    icon: Building2,
    features: [
      'Unlimited opportunities',
      'Unlimited candidates',
      'Advanced AI matching',
      'Full analytics dashboard',
      'Dedicated account support',
      'Employer branding features',
    ],
    current: false,
    popular: false,
    freeTrial: false,
    customPricing: true,
  },
];

const invoices = [
  { id: 'INV-2024-003', date: '2024-01-01', amount: '349 SAR', status: 'Paid' },
  { id: 'INV-2023-012', date: '2023-12-01', amount: '349 SAR', status: 'Paid' },
  { id: 'INV-2023-011', date: '2023-11-01', amount: '349 SAR', status: 'Paid' },
  { id: 'INV-2023-010', date: '2023-10-01', amount: '349 SAR', status: 'Paid' },
];

export function Billing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const yearlyDiscount = 0.2;
  const formatMonthlyEquivalent = (monthly: number) =>
    Math.round(monthly * (1 - yearlyDiscount));

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
            <h2 className="text-white text-2xl mb-1" style={{ fontWeight: 700 }}>Growth Plan</h2>
            <p className="text-emerald-200 text-sm">Next renewal: February 1, 2024</p>
          </div>
          <div className="text-right">
            <p className="text-3xl text-white" style={{ fontWeight: 800 }}>
              {billingCycle === 'yearly' ? `${formatMonthlyEquivalent(349)} SAR` : '349 SAR'}
            </p>
            <p className="text-emerald-200 text-sm">
              {billingCycle === 'yearly' ? 'per month, billed annually' : 'Monthly'}
            </p>
          </div>
        </div>

        <div className="mt-5 pt-5 border-t border-white/20 flex gap-3 flex-wrap">
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
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
          <h2 className="text-gray-900" style={{ fontWeight: 600 }}>Subscription Plans</h2>

          {/* Billing toggle */}
          <div
            className="inline-flex items-center gap-1 p-1 rounded-xl bg-gray-100 border border-gray-200/80 shadow-inner"
            role="group"
            aria-label="Billing period"
          >
            <button
              type="button"
              onClick={() => setBillingCycle('monthly')}
              className={`relative px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
                billingCycle === 'monthly'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              style={{ fontWeight: billingCycle === 'monthly' ? 600 : 500 }}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle('yearly')}
              className={`relative px-4 py-2 rounded-lg text-sm transition-all duration-200 flex items-center gap-2 ${
                billingCycle === 'yearly'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              style={{ fontWeight: billingCycle === 'yearly' ? 600 : 500 }}
            >
              Yearly
              <span className="text-[10px] uppercase tracking-wide px-1.5 py-0.5 rounded-md bg-emerald-100 text-emerald-700">
                −20%
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 items-stretch">
          {plans.map((plan, i) => {
            const Icon = plan.icon;
            const isGrowth = plan.popular;
            const showPrice = !plan.customPricing && 'priceMonthly' in plan;

            const monthlyPrice = showPrice ? plan.priceMonthly : null;
            const displayPrice =
              monthlyPrice == null
                ? null
                : billingCycle === 'yearly'
                  ? formatMonthlyEquivalent(monthlyPrice)
                  : monthlyPrice;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`relative rounded-2xl border-2 transition-transform duration-200 hover:scale-105 flex flex-col ${
                  isGrowth
                    ? 'p-6 pt-8 border-emerald-400 bg-gradient-to-b from-emerald-50 to-white ring-2 ring-emerald-400/60 ring-offset-2 shadow-lg shadow-emerald-500/10 md:scale-[1.03] z-10'
                    : 'p-5 border-gray-200 bg-white hover:border-emerald-200'
                }`}
              >
                {'badge' in plan && plan.badge ? (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-xs px-3 py-1 rounded-full shadow-md" style={{ fontWeight: 600 }}>
                    {plan.badge}
                  </div>
                ) : null}

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-gray-900" style={{ fontWeight: 600 }}>{plan.name}</h3>
                  </div>
                </div>

                <div className="mb-2">
                  {plan.customPricing ? (
                    <span className="text-2xl sm:text-3xl text-gray-900" style={{ fontWeight: 800 }}>Custom Pricing</span>
                  ) : (
                    <>
                      <span className="text-3xl text-gray-900" style={{ fontWeight: 800 }}>{displayPrice}</span>
                      <span className="text-gray-500 text-sm"> SAR / month</span>
                      {billingCycle === 'yearly' && monthlyPrice != null && (
                        <p className="text-emerald-600 text-xs mt-1" style={{ fontWeight: 500 }}>
                          Billed annually · Save 20%
                        </p>
                      )}
                    </>
                  )}
                </div>

                {'freeTrial' in plan && plan.freeTrial && (
                  <p className="text-emerald-700 text-sm mb-4" style={{ fontWeight: 600 }}>
                    7-day free trial
                  </p>
                )}
                {!plan.freeTrial && !plan.customPricing && <div className="mb-4" />}

                <ul className="space-y-2 mb-5 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  className={`w-full py-3 rounded-xl text-sm transition-colors mt-auto ${
                    plan.customPricing
                      ? 'bg-gray-900 text-white hover:bg-gray-800 shadow-md'
                      : plan.current
                        ? 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-md shadow-emerald-200 cursor-default'
                        : 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-md shadow-emerald-200'
                  }`}
                  style={{ fontWeight: 600 }}
                  disabled={plan.current && !plan.customPricing}
                >
                  {plan.customPricing
                    ? 'Contact Sales'
                    : plan.current
                      ? 'Your Current Plan'
                      : 'Start Free Trial'}
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
          <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
            <CreditCard className="w-5 h-5 text-emerald-600" />
          </div>
          <div>
            <p className="text-gray-900 text-sm" style={{ fontWeight: 500 }}>Visa **** **** **** 4242</p>
            <p className="text-gray-400 text-xs">Expires 12/2026</p>
          </div>
          <button className="ml-auto text-emerald-700 text-sm border border-emerald-200 px-3 py-1.5 rounded-xl hover:bg-emerald-50 transition-colors" style={{ fontWeight: 500 }}>
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
                <button type="button" className="text-gray-400 hover:text-emerald-600 transition-colors" aria-label="Download invoice">
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
