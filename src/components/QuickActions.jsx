import React from 'react';
import { Plus, Download, Filter } from 'lucide-react';

export default function QuickActions() {
  return (
    <section className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h2 className="text-base font-semibold text-gray-800">Quick Actions</h2>
        <p className="text-sm text-gray-500">Create, export, or filter your data in one click</p>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <button className="inline-flex items-center gap-2 rounded-md border bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
          <Filter className="h-4 w-4" />
          Filters
        </button>
        <button className="inline-flex items-center gap-2 rounded-md border bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
          <Download className="h-4 w-4" />
          Export
        </button>
        <button className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700">
          <Plus className="h-4 w-4" />
          New
        </button>
      </div>
    </section>
  );
}
