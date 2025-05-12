'use client';

import { Menu } from 'lucide-react';
import { toggleSidebar } from '../store/slices/sidebarSlice';
import { useDispatch } from 'react-redux';

const MainHeader = () => {
    const dispatch = useDispatch();

    return (
        <header className="flex items-center justify-between bg-[#EFEFEF] p-3 shadow-md w-full">
            <div className="flex items-center gap-3">
                <button
                    onClick={() => dispatch(toggleSidebar())}
                    className="p-1 rounded hover:bg-gray-200"
                >
                    <Menu className="w-6 h-6" />
                </button>
                <span className="text-sm font-semibold hidden md:block text-green-900">
                    ISMAILI COUNCIL FOR THE SOUTHWESTERN USA
                </span>
            </div>
            <div className="flex items-center gap-4 text-sm">
                <span className="hidden lg:block">GO TO DEV</span>
                <span className="hidden lg:block">DEV ENVIRONMENT</span>
                <span className="hidden md:block">Mon, May 12, 2025 00:35</span>
                <button className="text-blue-600 hover:underline flex items-center gap-1">
                    Logout
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 10a1 1 0 011-1h9.586l-2.293-2.293a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L13.586 11H4a1 1 0 01-1-1z" />
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default MainHeader;
