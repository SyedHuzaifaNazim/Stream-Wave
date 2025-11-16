'use client'
import { useState } from 'react'
import { Search, Mic } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from './Button'

export function SearchBar({ onSearch, loading = false }) {
  const [query, setQuery] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (query.trim()) {
      onSearch(query)
    }
  }

  return (
    <motion.form 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className="flex items-center space-x-4 w-full max-w-2xl"
    >
      <div className="flex-1 relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for amazing videos..."
          className="w-full pl-10 pr-4 py-3 bg-dark-200 border border-gray-700 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
        />
        <button
          type="button"
          className="absolute inset-y-0 right-0 pr-3 flex items-center"
        >
          <Mic className="h-5 w-5 text-gray-400 hover:text-primary-500 transition-colors" />
        </button>
      </div>
      <Button 
        type="submit" 
        loading={loading}
        className="rounded-2xl"
      >
        Search
      </Button>
    </motion.form>
  )
}