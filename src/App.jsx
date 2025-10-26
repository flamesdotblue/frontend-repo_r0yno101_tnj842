import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import StatsGrid from './components/StatsGrid';
import RecentTable from './components/RecentTable';
import QuickActions from './components/QuickActions';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <main className="flex min-h-screen w-full flex-col lg:ml-64">
          <Topbar onMenuClick={() => setSidebarOpen(true)} />

          <div className="mx-auto w-full max-w-7xl p-4 sm:p-6 lg:p-8">
            <div className="mb-6">
              <QuickActions />
            </div>

            <div className="mb-6">
              <StatsGrid />
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <RecentTable />
              </div>
              <div className="rounded-xl border bg-white p-5 shadow-sm">
                <h2 className="text-sm font-semibold text-gray-800">Notes</h2>
                <p className="mt-2 text-sm text-gray-600">
                  This is a minimal dashboard layout designed with clean, plain styles. Use it as a
                  starting point and customize as needed.
                </p>
                <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-gray-600">
                  <li>Responsive sidebar with mobile toggle</li>
                  <li>Top bar with search and notifications</li>
                  <li>Stat cards and a recent transactions table</li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
