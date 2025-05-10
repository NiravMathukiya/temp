'use client';

import { useState } from 'react';
import Sidebar from './Sidebar';
import RequestsTable from './RequestsTable';
import Header from './Header';

export default function Dashboard() {
  const [activeItem, setActiveItem] = useState('communication-request');

  // Mock data for communication requests
  const mockRequests = [
    {
      id: '1',
      portfolioMember: 'Ismaili Professional Network (IPN)',
      submittedBy: 'Katy',
      programName: 'Tee Time & Talk',
      email: 'amber9909@gmail.com',
      programDate: '2023-06-01',
      status: 'Pending',
    },
    {
      id: '2',
      portfolioMember: 'AKHB',
      submittedBy: 'CorpusChristi, SanAntonio',
      programName: 'International Nurses Day',
      email: 'foorucha1@yahoo.com',
      programDate: '2023-05-12',
      status: 'Pending',
    },
    {
      id: '3',
      portfolioMember: 'Local Announcements',
      submittedBy: 'CorpusChristi, SanAntonio',
      programName: 'Translations',
      email: 'icsw@usjj.org',
      programDate: '2023-05-09',
      status: 'Approved',
    },
    {
      id: '4',
      portfolioMember: 'Program',
      submittedBy: 'Beaumont',
      programName: 'Rites & Ceremonies COL @ BMT',
      email: 'icsw@usjj.org',
      programDate: '2023-05-09',
      status: 'Approved',
    },
    {
      id: '5',
      portfolioMember: 'Mental Health',
      submittedBy: 'CorpusChristi, SanAntonio',
      programName: 'Mental Health Awareness',
      email: 'zainabkhuwaja@gmail.com',
      programDate: '2023-05-08',
      status: 'Approved',
    },
  ];

  return (
    <div className="flex h-screen">
      <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-auto bg-gray-50">
          <div className="container mx-auto px-4 py-6">
            <RequestsTable requests={mockRequests} />
          </div>
        </main>
      </div>
    </div>
  );
}