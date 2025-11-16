'use client'
import { motion } from 'framer-motion'
import { VideoCard } from './VideoCard'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export function VideoGrid({ videos, onVideoClick, loading }) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="bg-dark-200 rounded-2xl p-4 animate-pulse">
            <div className="bg-dark-100 h-48 rounded-xl mb-4"></div>
            <div className="space-y-3">
              <div className="bg-dark-100 h-4 rounded"></div>
              <div className="bg-dark-100 h-3 rounded w-2/3"></div>
              <div className="flex space-x-4">
                <div className="bg-dark-100 h-3 rounded w-1/4"></div>
                <div className="bg-dark-100 h-3 rounded w-1/4"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
    >
      {videos.map((video, index) => (
        <motion.div key={video.id.videoId || video.id} variants={item}>
          <VideoCard video={video} onClick={onVideoClick} />
        </motion.div>
      ))}
    </motion.div>
  )
}