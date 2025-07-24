import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/Navbar'
import React from 'react'

const layout = ({children}: {children: React.ReactNode}) => {
  return (
      <div className="flex h-screen overflow-hidden 0">
          <Sidebar />
          <div className="flex-1 flex flex-col ">
              <Navbar />
              <main className="flex-1 overflow-y-auto p-6">{children}</main>
              </div>
    </div>
  )
}

export default layout