import React from 'react';

const rows = [
  { id: '#8492', name: 'Premium Plan', customer: 'Acme Inc.', amount: '$499', status: 'Paid', date: 'Oct 17, 2025' },
  { id: '#8491', name: 'Team Seats', customer: 'Orbit LLC', amount: '$219', status: 'Pending', date: 'Oct 16, 2025' },
  { id: '#8488', name: 'Usage Add-on', customer: 'Nova Labs', amount: '$92', status: 'Paid', date: 'Oct 15, 2025' },
  { id: '#8486', name: 'Starter Plan', customer: 'PixelWorks', amount: '$29', status: 'Refunded', date: 'Oct 13, 2025' },
];

function StatusBadge({ status }) {
  const map = {
    Paid: 'bg-green-50 text-green-700',
    Pending: 'bg-yellow-50 text-yellow-700',
    Refunded: 'bg-gray-100 text-gray-700',
  };
  return (
    <span className={`rounded-full px-2.5 py-1 text-xs ${map[status] || 'bg-gray-100 text-gray-700'}`}>
      {status}
    </span>
  );
}

export default function RecentTable() {
  return (
    <section className="rounded-xl border bg-white shadow-sm">
      <div className="flex items-center justify-between border-b px-5 py-4">
        <h2 className="text-sm font-semibold text-gray-800">Recent Transactions</h2>
        <button className="text-sm text-blue-600 hover:underline">View all</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] table-fixed">
          <thead>
            <tr className="text-left text-xs uppercase tracking-wider text-gray-500">
              <th className="px-5 py-3 font-medium">Order</th>
              <th className="px-5 py-3 font-medium">Product</th>
              <th className="px-5 py-3 font-medium">Customer</th>
              <th className="px-5 py-3 font-medium">Amount</th>
              <th className="px-5 py-3 font-medium">Status</th>
              <th className="px-5 py-3 font-medium">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y text-sm">
            {rows.map((r) => (
              <tr key={r.id} className="hover:bg-gray-50">
                <td className="px-5 py-3 font-medium text-gray-800">{r.id}</td>
                <td className="px-5 py-3 text-gray-700">{r.name}</td>
                <td className="px-5 py-3 text-gray-700">{r.customer}</td>
                <td className="px-5 py-3 text-gray-700">{r.amount}</td>
                <td className="px-5 py-3"><StatusBadge status={r.status} /></td>
                <td className="px-5 py-3 text-gray-500">{r.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
