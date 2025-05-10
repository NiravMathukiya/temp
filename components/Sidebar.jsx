'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Users, FileText, List, User, BarChart, Book, 
  Calendar, Coffee, ChevronDown, Mail
} from 'lucide-react';

export default function Sidebar({ activeItem, setActiveItem }) {
  const [openMenus, setOpenMenus] = useState({
    'communications': true,
    'graphics': false,
    'bookings': false,
    'food': false,
  });

  const toggleMenu = (menu) => {
    setOpenMenus(prev => ({
      ...prev,
      [menu]: !prev[menu]
    }));
  };

  return (
    <aside className="sidebar w-64 flex-shrink-0">
      <div className="logo-container p-4 border-b border-slate-700">
        <h2 className="text-sm font-semibold">ISMAILI COUNCIL FOR</h2>
        <h2 className="text-sm font-semibold">THE SOUTHWESTERN USA</h2>
      </div>
      
      <div className="p-4 border-b border-slate-700">
        <h3 className="text-gray-300">Karishma Sharif</h3>
        <div className="flex items-center mt-1">
          <span className="bg-blue-500 w-2 h-2 rounded-full mr-2"></span>
          <span className="text-xs text-gray-400">Master Admin</span>
        </div>
      </div>
      
      <nav className="p-2">
       
        
        <div 
          className={`sidebar-item ${openMenus.communications ? 'active' : ''}`}
          onClick={() => toggleMenu('communications')}
        >
          <Mail size={18} />
          <span className="flex-1">Communications Request</span>
          <ChevronDown size={16} className={`transform transition-transform ${openMenus.communications ? 'rotate-180' : ''}`} />
        </div>
        
        {openMenus.communications && (
          <div className="pl-8">
            <Link href="/announcements">
              <div className={`sidebar-item ${activeItem === 'jamati-announcements' ? 'active' : ''}`}>
                <span>Jamati Announcements</span>
              </div>
            </Link>
            <Link href="/submissions">
              <div className={`sidebar-item ${activeItem === 'request-submissions' ? 'active' : ''}`}>
                <span>Communication Request Submissions</span>
              </div>
            </Link>
            <Link href="/subscribers">
              <div className={`sidebar-item ${activeItem === 'request-subscribers' ? 'active' : ''}`}>
                <span>Communication Request Subscribers</span>
              </div>
            </Link>
            <Link href="/insight">
              <div className={`sidebar-item ${activeItem === 'ismaili-insight' ? 'active' : ''}`}>
                <span>Ismaili Insight</span>
              </div>
            </Link>
            <Link href="/social-media">
              <div className={`sidebar-item ${activeItem === 'social-media' ? 'active' : ''}`}>
                <span>Social Media</span>
              </div>
            </Link>
          </div>
        )}
        
        <div 
          className={`sidebar-item ${openMenus.graphics ? 'active' : ''}`}
          onClick={() => toggleMenu('graphics')}
        >
          <BarChart size={18} />
          <span className="flex-1">Graphics Request (1)</span>
          <ChevronDown size={16} className={`transform transition-transform ${openMenus.graphics ? 'rotate-180' : ''}`} />
        </div>
        
        {openMenus.graphics && (
          <div className="pl-8">
            <div className="sidebar-item">
              <span>Graphics Request Submissions (1)</span>
            </div>
          </div>
        )}
        
        <div 
          className={`sidebar-item ${openMenus.bookings ? 'active' : ''}`}
          onClick={() => toggleMenu('bookings')}
        >
          <Calendar size={18} />
          <span className="flex-1">Bookings</span>
          <ChevronDown size={16} className={`transform transition-transform ${openMenus.bookings ? 'rotate-180' : ''}`} />
        </div>
        
        {openMenus.bookings && (
          <div className="pl-8">
            <div className="sidebar-item">
              <span>Bookings</span>
            </div>
            <div className="sidebar-item">
              <span>Pending Bookings</span>
            </div>
            <div className="sidebar-item">
              <span>Booking Comments (15)</span>
            </div>
            <div className="sidebar-item">
              <span>Double Bookings</span>
            </div>
            <div className="sidebar-item">
              <span>Booking Subscribers</span>
            </div>
          </div>
        )}
        
        <div 
          className={`sidebar-item ${openMenus.food ? 'active' : ''}`}
          onClick={() => toggleMenu('food')}
        >
          <Coffee size={18} />
          <span className="flex-1">Food Support</span>
          <ChevronDown size={16} className={`transform transition-transform ${openMenus.food ? 'rotate-180' : ''}`} />
        </div>
        
        {openMenus.food && (
          <div className="pl-8">
            <div className="sidebar-item">
              <span>Food Support Dashboard</span>
            </div>
            <div className="sidebar-item">
              <span>Food Support Subscribers</span>
            </div>
          </div>
        )}
        
        <div className="sidebar-item">
          <Book size={18} />
          <span>Form Builder</span>
        </div>
      </nav>
    </aside>
  );
}