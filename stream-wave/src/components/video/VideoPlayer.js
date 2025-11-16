'use client'
import { useState, useRef } from 'react'
import { Play, Pause, Volume2, VolumeX, Maximize, Settings } from 'lucide-react'
import { motion } from 'framer-motion'

export function VideoPlayer({ videoId, title }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [volume, setVolume] = useState(1)
  const videoRef = useRef(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <div className="relative bg-black rounded-2xl overflow-hidden group">
      {/* Video Element */}
      <video
        ref={videoRef}
        className="w-full aspect-video"
        poster={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
        onClick={togglePlay}
      >
        <source src={`/api/video/${videoId}`} type="video/mp4" />
      </video>

      {/* Custom Controls */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {/* Top Controls */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
          <h1 className="text-white text-xl font-bold line-clamp-1">
            {title}
          </h1>
          <button className="p-2 text-white hover:bg-white/10 rounded-xl transition-colors">
            <Maximize className="h-5 w-5" />
          </button>
        </div>

        {/* Center Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={togglePlay}
            className="bg-primary-500/90 p-6 rounded-full text-white hover:bg-primary-600 transition-colors"
          >
            {isPlaying ? (
              <Pause className="h-8 w-8" />
            ) : (
              <Play className="h-8 w-8 fill-current" />
            )}
          </motion.button>
        </div>

        {/* Bottom Controls */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center space-x-4">
          <button
            onClick={togglePlay}
            className="text-white hover:bg-white/10 p-2 rounded-xl transition-colors"
          >
            {isPlaying ? (
              <Pause className="h-5 w-5" />
            ) : (
              <Play className="h-5 w-5 fill-current" />
            )}
          </button>

          <button
            onClick={toggleMute}
            className="text-white hover:bg-white/10 p-2 rounded-xl transition-colors"
          >
            {isMuted ? (
              <VolumeX className="h-5 w-5" />
            ) : (
              <Volume2 className="h-5 w-5" />
            )}
          </button>

          <div className="flex-1 bg-gray-600 rounded-full h-1">
            <div className="bg-primary-500 h-1 rounded-full w-1/4"></div>
          </div>

          <button className="text-white hover:bg-white/10 p-2 rounded-xl transition-colors">
            <Settings className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}