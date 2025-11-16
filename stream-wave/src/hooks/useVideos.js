import { useState, useEffect } from 'react'
import { YouTubeAPI } from '../lib/youtube-api'

export function useVideos() {
  const [videos, setVideos] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const searchVideos = async (query) => {
    if (!query.trim()) return
    
    setLoading(true)
    setError(null)
    
    try {
      const results = await YouTubeAPI.searchVideos(query)
      setVideos(results)
    } catch (err) {
      setError('Failed to search videos')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const getPopularVideos = async () => {
    setLoading(true)
    setError(null)
    
    try {
      const results = await YouTubeAPI.getPopularVideos()
      setVideos(results)
    } catch (err) {
      setError('Failed to load popular videos')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getPopularVideos()
  }, [])

  return {
    videos,
    loading,
    error,
    searchVideos,
    getPopularVideos,
  }
}