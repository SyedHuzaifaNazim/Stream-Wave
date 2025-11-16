import { NextResponse } from 'next/server'
import { YouTubeAPI } from '../../../../lib/youtube-api'

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get('q')
    const type = searchParams.get('type') || 'popular'

    let videos = []

    if (query) {
      videos = await YouTubeAPI.searchVideos(query)
    } else if (type === 'popular') {
      videos = await YouTubeAPI.getPopularVideos()
    }

    return NextResponse.json({ videos })
  } catch (error) {
    console.error('API videos error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch videos' },
      { status: 500 }
    )
  }
}