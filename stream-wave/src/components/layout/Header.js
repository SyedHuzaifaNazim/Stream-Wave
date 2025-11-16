'use client'
import { useState } from 'react'
import { Menu, Search, Bell, User, Sun, Moon, LogOut } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useAuth } from '../../context/AuthContext'
import { useTheme } from '../../context/ThemeContext'
import { Button } from '../ui/Button'
import { SearchBar } from '../ui/SearchBar'

export function Header({ onSearch, searchLoading, onToggleSidebar }) {
  const { user, isAuthenticated } = useAuth()
  const { theme, toggleTheme } = useTheme()
  const [showUserMenu, setShowUserMenu] = useState(false)

  return (
    <header className="bg-dark-100/80 backdrop-blur-lg border-b border-gray-800 sticky top-0 z-50">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left Section */}
          <div className="flex items-center space-x-6">
            <button
              onClick={onToggleSidebar}
              className="p-2 rounded-xl hover:bg-dark-200 transition-colors text-gray-400 hover:text-white"
            >
              <Menu className="h-6 w-6" />
            </button>
            
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SW</span>
              </div>
              <span className="text-white font-bold text-xl bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
                StreamWave
              </span>
            </div>
          </div>

          {/* Center Section - Search */}
          <div className="flex-1 max-w-2xl mx-8">
            <SearchBar onSearch={onSearch} loading={searchLoading} />
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl hover:bg-dark-200 transition-colors text-gray-400 hover:text-white"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            {isAuthenticated ? (
              <>
                <button className="p-2 rounded-xl hover:bg-dark-200 transition-colors text-gray-400 hover:text-white relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-dark-100"></span>
                </button>

                <div className="relative">
                  <button
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="flex items-center space-x-3 p-2 rounded-xl hover:bg-dark-200 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center">
                      <span className="text-white text-sm font-bold">
                        {user?.name?.[0]?.toUpperCase() || 'U'}
                      </span>
                    </div>
                    <span className="text-white text-sm font-medium hidden md:block">
                      {user?.name}
                    </span>
                  </button>

                  <AnimatePresence>
                    {showUserMenu && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute right-0 top-full mt-2 w-48 bg-dark-200 rounded-2xl shadow-xl border border-gray-700 py-2"
                      >
                        <button className="w-full px-4 py-2 text-left text-gray-300 hover:bg-dark-100 hover:text-white transition-colors flex items-center space-x-2">
                          <User className="h-4 w-4" />
                          <span>Profile</span>
                        </button>
                        <button className="w-full px-4 py-2 text-left text-gray-300 hover:bg-dark-100 hover:text-white transition-colors flex items-center space-x-2">
                          <LogOut className="h-4 w-4" />
                          <span>Sign Out</span>
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </>
            ) : (
              <Button variant="primary" size="sm">
                Sign In
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}