import React from 'react'
import MainHeader from '../components/MainHeader'
import Sidebar from '../components/Sidebar'

const SideBarWrapper = ({ children }) => {
  return (
    <>
      <MainHeader />
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* <Header /> */}
          <main className="flex-1 overflow-auto bg-gray-50 p-6">
            {children}
          </main>
        </div>
      </div>
    </>
  )
}

export default SideBarWrapper