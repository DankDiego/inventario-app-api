import Navbar from '../dashboard/navbar/Navbar'
import Sidebar from '../dashboard/sidebar/Sidebar'
import { useState } from 'react'
export default function DashLayout ({ children }) {
  const [sidebarOpen, setsidebarOpen] = useState(false)
  const openSidebar = () => {
    setsidebarOpen(true)
  }
  const closeSidebar = () => {
    setsidebarOpen(false)
  }
  return (
    <>
      <div className='containerdash'>
        <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
        {children}
        <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
      </div>
    </>
  )
}
