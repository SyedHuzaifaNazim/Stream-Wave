'use client'
import { motion } from 'framer-motion'
import { 
  Home, 
  Compass, 
  Library, 
  History, 
  Clock, 
  ThumbsUp, 
  Settings,
  Music,
  Gamepad2,
  Film,
  Sparkles
} from 'lucide-react'

const menuItems = [
  { icon: Home, label: 'Home', active: true },
  { icon: Compass, label: 'Explore', active: false },
  { icon: Library, label: 'Library', active: false },
  { icon: History, label: 'History', active: false },
  { icon: Clock, label: 'Watch Later', active: false },
  { icon: ThumbsUp, label: 'Liked Videos', active: false },
]

const categories = [
  { icon: Music, label: 'Music', color: 'text-pink-500' },
  { icon: Gamepad2, label: 'Gaming', color: 'text-green-500' },
  { icon: Film, label: 'Movies', color: 'text-purple-500' },
  { icon: Sparkles, label: 'Entertainment', color: 'text-yellow-500' },
]

export function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: isOpen ? 0 : -300 }}
        transition={{ type: 'spring', damping: 30 }}
        className="fixed top-0 left-0 h-full w-80 bg-dark-100 border-r border-gray-800 z-50 overflow-y-auto"
      >
        <div className="p-6">
          {/* Main Menu */}
          <nav className="space-y-2 mb-8">
            {menuItems.map((item, index) => (
              <motion.button
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`w-full flex items-center space-x-4 px-4 py-3 rounded-2xl transition-all duration-300 ${
                  item.active 
                    ? 'bg-primary-500/20 text-primary-500 border border-primary-500/30' 
                    : 'text-gray-400 hover:text-white hover:bg-dark-200'
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span className="font-medium">{item.label}</span>
              </motion.button>
            ))}
          </nav>

          {/* Categories */}
          <div className="mb-8">
            <h3 className="text-gray-500 text-sm font-semibold uppercase tracking-wider mb-4 px-4">
              Categories
            </h3>
            <div className="space-y-2">
              {categories.map((category, index) => (
                <motion.button
                  key={category.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (index + menuItems.length) * 0.1 }}
                  className="w-full flex items-center space-x-4 px-4 py-3 rounded-2xl text-gray-400 hover:text-white hover:bg-dark-200 transition-all duration-300"
                >
                  <category.icon className={`h-5 w-5 ${category.color}`} />
                  <span className="font-medium">{category.label}</span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Settings */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="w-full flex items-center space-x-4 px-4 py-3 rounded-2xl text-gray-400 hover:text-white hover:bg-dark-200 transition-all duration-300"
          >
            <Settings className="h-5 w-5" />
            <span className="font-medium">Settings</span>
          </motion.button>
        </div>
      </motion.div>
    </>
  )
}