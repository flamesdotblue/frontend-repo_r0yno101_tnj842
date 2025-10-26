import React from 'react';
import { Menu, Search, Bell, User } from 'lucide-react';

export default function Topbar({ onMenuClick }) {
  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b bg-white/80 px-4 backdrop-blur">
      <div className="flex items-center gap-2">
        <button
          onClick={onMenuClick}
          className="rounded p-2 hover:bg-gray-100 lg:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>
        <h1 className="text-base font-semibold text-gray-800">Overview</h1>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative hidden sm:block">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="w-52 rounded-md border bg-white py-2 pl-9 pr-3 text-sm outline-none ring-0 placeholder:text-gray-400 focus:border-gray-300 focus:ring-2 focus:ring-blue-100"
          />
        </div>
        <button className="relative rounded p-2 hover:bg-gray-100" aria-label="Notifications">
          <Bell className="h-5 w-5 text-gray-700" />
          <span className="absolute right-1 top-1 inline-flex h-2 w-2 items-center justify-center rounded-full bg-red-500" />
        </button>
        <div className="flex items-center gap-2 rounded-full border bg-white px-2 py-1">
          <User className="h-4 w-4 text-gray-600" />
          <span className="text-sm text-gray-700">Admin</span>
        </div>
      </div>
    </header>
  );
}
