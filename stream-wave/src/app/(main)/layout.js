'use client'
import { useState } from 'react'
import { SessionProvider } from 'next-auth/react'
import { Header } from '../../../components/layout/Header'
import { Sidebar } from '../../../components/layout/Sidebar'
import { AuthGuard } from '../../../components/auth/AuthGuard'

export default function MainLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [searchLoading, setSearchLoading] = useState(false)

  const handleSearch = async (query) => {
    setSearchLoading(true)
    // Search logic will be implemented in the page component
    setTimeout(() => setSearchLoading(false), 1000)
  }

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <SessionProvider>
      <AuthGuard>
        <div className="min-h-screen bg-dark-300">
          <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
          <Header 
            onSearch={handleSearch} 
            searchLoading={searchLoading}
            onToggleSidebar={toggleSidebar}
          />
          <main className="lg:ml-0 transition-all duration-300">
            {children}
          </main>
        </div>
      </AuthGuard>
    </SessionProvider>
  )
}