'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Clock, Star, Zap } from 'lucide-react'
import { VideoGrid } from '../../../components/ui/VideoGrid'
import { useVideos } from '../../../hooks/useVideos'
import { YouTubeAPI } from '../../../lib/youtube-api'

export default function HomePage() {
  const { videos, loading, error, searchVideos, getPopularVideos } = useVideos()
  const [featuredVideo, setFeaturedVideo] = useState(null)

  useEffect(() => {
    // Get a featured video
    const getFeaturedVideo = async () => {
      const popular = await YouTubeAPI.getPopularVideos(1)
      if (popular.length > 0) {
        const videoDetails = await YouTubeAPI.getVideoDetails(popular[0].id.videoId || popular[0].id)
        setFeaturedVideo(videoDetails)
      }
    }
    getFeaturedVideo()
  }, [])

  const categories = [
    { name: 'Trending', icon: TrendingUp, color: 'from-red-500 to-orange-500' },
    { name: 'Music', icon: Star, color: 'from-green-500 to-blue-500' },
    { name: 'Gaming', icon: Zap, color: 'from-purple-500 to-pink-500' },
    { name: 'Live', icon: Clock, color: 'from-yellow-500 to-red-500' },
  ]

  return (
    <div className="p-6 space-y-8">
      {/* Hero Section */}
      {featuredVideo && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-dark-300/90 to-transparent z-10" />
          <img
            src={featuredVideo.snippet.thumbnails.maxres?.url || featuredVideo.snippet.thumbnails.high?.url}
            alt={featuredVideo.snippet.title}
            className="w-full h-96 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-bold text-white mb-4 max-w-2xl"
            >
              {featuredVideo.snippet.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-gray-300 text-lg mb-6 max-w-2xl line-clamp-2"
            >
              {featuredVideo.snippet.description}
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-primary-500 text-white px-8 py-3 rounded-2xl font-semibold hover:bg-primary-600 transition-colors duration-300"
            >
              Watch Now
            </motion.button>
          </div>
        </motion.section>
      )}

      {/* Categories */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-white mb-6">Browse Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <motion.button
              key={category.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className={`bg-gradient-to-r ${category.color} p-6 rounded-2xl text-white font-semibold text-lg hover:shadow-2xl transition-all duration-300`}
            >
              <category.icon className="h-8 w-8 mb-2" />
              {category.name}
            </motion.button>
          ))}
        </div>
      </motion.section>

      {/* Popular Videos */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Popular Videos</h2>
          <button className="text-primary-500 hover:text-primary-400 transition-colors">
            View All
          </button>
        </div>
        
        <VideoGrid 
          videos={videos} 
          onVideoClick={(video) => console.log('Video clicked:', video)}
          loading={loading}
        />

        {error && (
          <div className="text-center py-8">
            <p className="text-red-500">{error}</p>
            <button
              onClick={getPopularVideos}
              className="mt-4 bg-primary-500 text-white px-6 py-2 rounded-xl hover:bg-primary-600 transition-colors"
            >
              Try Again
            </button>
          </div>
        )}
      </motion.section>
    </div>
  )
}