import React from "react";
import Link from "next/link";
import { Filter, Plus, Download } from "lucide-react";

interface HeaderProps {
  title?: string;
  onFilterClick?: () => void;
  showExportButton?: boolean;
  // etc.
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="bg-white shadow">
      <div className="flex flex-wrap justify-between items-center p-4 gap-y-2">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Communication Request
          </h1>
          <div className="flex items-center text-sm text-gray-500 mt-1">
            <Link
              href="/"
              className="hover:text-primary transition-colors duration-300"
            >
              Home
            </Link>
            <span className="mx-2">&gt;</span>
            <span>Communication Request</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Export CSV */}
          <button className="flex items-center justify-center bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 transition-colors duration-300">
            <Download size={16} className="mr-1" />
            Export CSV
          </button>

          {/* Export PDF (optional variation) */}
          {/* <button
            className="flex items-center justify-center bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 transition-colors duration-300"
          >
            <Download size={16} className="mr-1" />
            Export PDF
          </button> */}

          {/* New Request */}
          <Link
            href="/announcements/new"
            className="flex items-center justify-center bg-green-600 text-white px-3 py-2 rounded hover:bg-green-700 transition-colors duration-300"
          >
            <Plus size={16} className="mr-1" />
            New
          </Link>

          {/* Filter */}
          <button className="flex items-center justify-center bg-red-600 text-white px-3 py-2 rounded hover:bg-red-700 transition-colors duration-300">
            <Filter size={16} className="mr-1" />
            Filter
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
