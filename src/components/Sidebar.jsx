import React from 'react';
import { Home, BarChart3, Users, Settings, LogOut } from 'lucide-react';

const navItems = [
  { label: 'Overview', icon: Home },
  { label: 'Analytics', icon: BarChart3 },
  { label: 'Customers', icon: Users },
  { label: 'Settings', icon: Settings },
];

export default function Sidebar({ open, onClose }) {
  return (
    <aside
      className={`fixed inset-y-0 left-0 z-40 w-64 transform bg-white shadow-lg transition-transform duration-200 ease-in-out lg:static lg:translate-x-0 ${
        open ? 'translate-x-0' : '-translate-x-full'
      }`}
      aria-label="Sidebar"
    >
      <div className="flex h-16 items-center justify-between border-b px-4">
        <span className="font-semibold tracking-tight">Dashboard</span>
        <button
          className="rounded p-2 text-gray-500 hover:bg-gray-100 lg:hidden"
          onClick={onClose}
          aria-label="Close sidebar"
        >
          ×
        </button>
      </div>

      <nav className="px-3 py-4">
        <ul className="space-y-1">
          {navItems.map(({ label, icon: Icon }) => (
            <li key={label}>
              <button className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-100">
                <Icon className="h-4 w-4" />
                <span>{label}</span>
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-6 border-t pt-4">
          <button className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-100">
            <LogOut className="h-4 w-4" />
            <span>Log out</span>
          </button>
        </div>
      </nav>
    </aside>
  );
}
