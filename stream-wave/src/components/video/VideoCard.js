'use client'
import { motion } from 'framer-motion'
import { Play, Eye, Clock } from 'lucide-react'
import { formatNumber, timeAgo, generateGradient } from '../../lib/utils'

export function VideoCard({ video, onClick }) {
  const { snippet, statistics } = video
  const { title, channelTitle, thumbnails, publishedAt } = snippet

  return (
    <motion.div
      whileHover={{ 
        scale: 1.05,
        y: -8,
      }}
      whileTap={{ scale: 0.95 }}
      onClick={() => onClick(video)}
      className="bg-dark-200 rounded-2xl overflow-hidden cursor-pointer group border border-gray-800 hover:border-primary-500 transition-all duration-300"
    >
      <div className="relative overflow-hidden">
        <img
          src={thumbnails.medium?.url || '/placeholder-thumbnail.jpg'}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded-lg">
          10:30
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-primary-500/90 p-4 rounded-full transform scale-75 group-hover:scale-100 transition-transform duration-300">
            <Play className="h-6 w-6 text-white fill-current" />
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-start space-x-3">
          <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${generateGradient(channelTitle.length)} flex-shrink-0`}>
            <span className="flex items-center justify-center w-full h-full text-white text-sm font-bold">
              {channelTitle?.[0]?.toUpperCase() || 'C'}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-white font-semibold line-clamp-2 group-hover:text-primary-400 transition-colors">
              {title}
            </h3>
            <p className="text-gray-400 text-sm mt-1">{channelTitle}</p>
            <div className="flex items-center space-x-4 text-gray-500 text-sm mt-2">
              <div className="flex items-center space-x-1">
                <Eye className="h-3 w-3" />
                <span>{formatNumber(statistics?.viewCount || 0)} views</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-3 w-3" />
                <span>{timeAgo(publishedAt)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}