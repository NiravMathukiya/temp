'use client';

import { useState } from 'react';
import Link from 'next/link';
import * as Icons from 'lucide-react';
import { useSelector } from 'react-redux';

const sidebarData = [
  {
    title: 'Communications Request',
    icon: 'Mail',
    items: [
      { name: 'Jamati Announcements', path: '/announcements' },
      { name: 'Communication Request Submissions', path: '/announcements' },
      { name: 'Communication Request Subscribers', path: '/subscribers' },
      { name: 'Ismaili Insight', path: '/insight' },
      { name: 'Social Media', path: '/social-media' },
    ]
  },
  {
    title: 'Graphics Request (1)',
    icon: 'BarChart',
    items: [
      { name: 'Graphics Request Submissions (1)', path: '/graphics-request' }
    ]
  },
  {
    title: 'Bookings',
    icon: 'Calendar',
    items: [
      { name: 'Bookings', path: '/bookings' },
      { name: 'Pending Bookings', path: '/pending-bookings' },
      { name: 'Booking Comments (15)', path: '/booking-comments' },
      { name: 'Double Bookings', path: '/double-bookings' },
      { name: 'Booking Subscribers', path: '/booking-subscribers' },
    ]
  },
  {
    title: 'Food Support',
    icon: 'Coffee',
    items: [
      { name: 'Food Support Dashboard', path: '/food-dashboard' },
      { name: 'Food Support Subscribers', path: '/food-subscribers' }
    ]
  },
];

export default function Sidebar({ activeItem, setActiveItem }) {
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  const [activeMenu, setActiveMenu] = useState(null);



  const toggleMenu = (index) => {
    setActiveMenu(prev => (prev === index ? null : index));
  };

  if (!isOpen) return null;

  return (
    <aside className="sidebar w-64 bg-white shadow-md">
      <div className="p-4 border-b border-slate-700">
        <h3 className="text-gray-300">Karishma Sharif</h3>
        <div className="flex items-center mt-1">
          <span className="bg-blue-500 w-2 h-2 rounded-full mr-2"></span>
          <span className="text-xs text-gray-400">Master Admin</span>
        </div>
      </div>

      <nav className="p-2 space-y-1">
        {sidebarData.map((section, index) => {
          const Icon = Icons[section.icon] || Icons.List;
          const isOpen = activeMenu === index;

          return (
            <div key={index}>
              <div
                className={`sidebar-item flex items-center justify-between cursor-pointer px-4 py-2  ${isOpen ? '' : ''}`}
                onClick={() => toggleMenu(index)}
              >
                <div className="flex items-center gap-2">
                  <Icon size={18} />
                  <span>{section.title}</span>
                </div>
                <Icons.ChevronDown size={16} className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
              </div>

              <div
                className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="pl-8 py-1">
                  {section.items.map((item, i) => (
                    <Link key={i} href={item.path}>
                      <div
                        className={`sidebar-item px-2 py-1 text-sm rounded  ${activeItem === item.name ? ' text-blue-700' : ''
                          }`}
                      >
                        {item.name}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </nav>
    </aside >
  );
}
