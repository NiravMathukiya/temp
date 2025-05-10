import Link from 'next/link';
import { Filter, Plus, Download } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="flex justify-between items-center p-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Communication Request</h1>
          <div className="flex items-center text-sm text-gray-500 mt-1">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <span className="mx-2">&gt;</span>
            <span>Communication Request</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            className="flex items-center justify-center bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 transition"
          >
            <Download size={16} className="mr-1" />
            Export
          </button>
          <button
            className="flex items-center justify-center bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 transition"
          >
            <Download size={16} className="mr-1" />
            Export
          </button>
          <Link 
            href="/request/new"
            className="flex items-center justify-center bg-green-600 text-white px-3 py-2 rounded hover:bg-green-700 transition"
          >
            <Plus size={16} className="mr-1" />
            New
          </Link>
          <button
            className="flex items-center justify-center bg-red-600 text-white px-3 py-2 rounded hover:bg-red-700 transition"
          >
            <Filter size={16} />
          </button>
        </div>
      </div>
    </header>
  );
}