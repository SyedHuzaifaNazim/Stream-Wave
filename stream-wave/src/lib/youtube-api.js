const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY
const BASE_URL = 'https://www.googleapis.com/youtube/v3'

export class YouTubeAPI {
  static async searchVideos(query, maxResults = 20) {
    try {
      const response = await fetch(
        `${BASE_URL}/search?part=snippet&type=video&maxResults=${maxResults}&q=${encodeURIComponent(query)}&key=${YOUTUBE_API_KEY}`
      )
      const data = await response.json()
      return data.items || []
    } catch (error) {
      console.error('YouTube API search error:', error)
      return []
    }
  }

  static async getVideoDetails(videoId) {
    try {
      const response = await fetch(
        `${BASE_URL}/videos?part=snippet,statistics,contentDetails&id=${videoId}&key=${YOUTUBE_API_KEY}`
      )
      const data = await response.json()
      return data.items?.[0] || null
    } catch (error) {
      console.error('YouTube API video details error:', error)
      return null
    }
  }

  static async getPopularVideos(maxResults = 20) {
    try {
      const response = await fetch(
        `${BASE_URL}/videos?part=snippet,statistics&chart=mostPopular&maxResults=${maxResults}&regionCode=US&key=${YOUTUBE_API_KEY}`
      )
      const data = await response.json()
      return data.items || []
    } catch (error) {
      console.error('YouTube API popular videos error:', error)
      return []
    }
  }

  static async getChannelDetails(channelId) {
    try {
      const response = await fetch(
        `${BASE_URL}/channels?part=snippet,statistics&id=${channelId}&key=${YOUTUBE_API_KEY}`
      )
      const data = await response.json()
      return data.items?.[0] || null
    } catch (error) {
      console.error('YouTube API channel details error:', error)
      return null
    }
  }

  static async getRelatedVideos(videoId, maxResults = 20) {
    try {
      const response = await fetch(
        `${BASE_URL}/search?part=snippet&type=video&maxResults=${maxResults}&relatedToVideoId=${videoId}&key=${YOUTUBE_API_KEY}`
      )
      const data = await response.json()
      return data.items || []
    } catch (error) {
      console.error('YouTube API related videos error:', error)
      return []
    }
  }
}