import React from 'react';
import { DollarSign, Users, TrendingUp, ArrowDownRight } from 'lucide-react';

const stats = [
  {
    label: 'Revenue',
    value: '$24,300',
    change: '+12.3% this month',
    icon: DollarSign,
    trend: 'up',
  },
  {
    label: 'Active Users',
    value: '8,142',
    change: '+3.1% this week',
    icon: Users,
    trend: 'up',
  },
  {
    label: 'Conversion',
    value: '4.8%',
    change: '-0.6% vs last week',
    icon: TrendingUp,
    trend: 'down',
  },
];

export default function StatsGrid() {
  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {stats.map(({ label, value, change, icon: Icon, trend }) => (
        <div key={label} className="rounded-xl border bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="rounded-lg bg-blue-50 p-2 text-blue-600">
              <Icon className="h-5 w-5" />
            </div>
            <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs ${
              trend === 'up'
                ? 'bg-green-50 text-green-700'
                : 'bg-red-50 text-red-700'
            }`}>
              {trend === 'up' ? (
                <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor" aria-hidden>
                  <path d="M13 7h7v7h-2V9.41l-7.3 7.3-4-4L2 18.41 3.41 20l4.3-4.3 4 4L21 10.41V15h2V7z" />
                </svg>
              ) : (
                <ArrowDownRight className="h-3 w-3" />
              )}
              {trend === 'up' ? 'Up' : 'Down'}
            </span>
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-500">{label}</p>
            <p className="mt-1 text-2xl font-semibold text-gray-800">{value}</p>
            <p className="mt-2 text-xs text-gray-500">{change}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
