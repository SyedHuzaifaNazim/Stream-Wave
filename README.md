# 🎬 StreamWave - Next Generation Video Platform

![StreamWave Banner](https://via.placeholder.com/1200x400/0c4a6e/ffffff?text=StreamWave+-+Next+Generation+Video+Platform)

<div     align="center">

[![Next.js](https://img.shields.io/badge/Next.js-14.0-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.2-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

**Experience videos like never before** - A modern, feature-rich YouTube clone built with cutting-edge technology

[Demo](#live-demo) • [Features](#-features) • [Installation](#-installation) • [Tech Stack](#-tech-stack) • [Contributing](#-contributing)

</div>

## ✨ Overview

StreamWave is a modern, high-performance video streaming platform that redefines how users discover and interact with video content. Built with Next.js 14 and featuring a stunning glass-morphism design, StreamWave offers an immersive viewing experience with seamless animations and intuitive navigation.

![StreamWave Preview](https://via.placeholder.com/800x450/1e1e2e/0ea5e9?text=Beautiful+Modern+Interface)

## 🚀 Features

### 🎨 **Stunning User Experience**
- **Glass Morphism Design** - Beautiful frosted glass effects and modern UI
- **Smooth Animations** - Powered by Framer Motion for buttery-smooth interactions
- **Dark/Light Theme** - Automatic theme detection with manual toggle
- **Responsive Design** - Flawless experience across all devices
- **Micro-interactions** - Delightful hover effects and transitions

### 🔐 **Secure Authentication**
- **Google OAuth 2.0** - Secure login with real Google ID verification
- **JWT Token Management** - Secure session handling
- **Protected Routes** - Automatic redirect for unauthenticated users
- **Profile Management** - User profiles with personalized content

### 📺 **Advanced Video Features**
- **YouTube API Integration** - Real video data from YouTube
- **Smart Search** - Advanced search with filters and suggestions
- **Video Recommendations** - AI-powered content discovery
- **Watch History** - Personal viewing history tracking
- **Playlist Management** - Create and manage video playlists

### ⚡ **Performance Optimized**
- **Next.js 14 App Router** - Latest React framework features
- **Server-Side Rendering** - Lightning-fast page loads
- **Image Optimization** - Automatic image optimization and lazy loading
- **Code Splitting** - Efficient bundle splitting for faster loads

## 🛠 Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **React 18** - Modern React with hooks
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library
- **Lucide React** - Beautiful SVG icons

### Backend & APIs
- **NextAuth.js** - Complete authentication solution
- **YouTube Data API v3** - Video content and metadata
- **JWT** - JSON Web Tokens for secure sessions
- **Google OAuth** - Secure third-party authentication

### Development & Deployment
- **ESLint** - Code linting and quality
- **PostCSS** - CSS processing
- **Vercel** - Optimal deployment platform

## 📦 Installation

### Prerequisites
- Node.js 18.17 or later
- YouTube Data API v3 key
- Google OAuth credentials

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/streamwave.git
   cd streamwave
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Environment Configuration**
   Create `.env.local` file:
   ```env
   # Google OAuth
   GOOGLE_CLIENT_ID=your_google_oauth_client_id
   GOOGLE_CLIENT_SECRET=your_google_oauth_secret
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your_nextauth_secret

   # YouTube Data API
   YOUTUBE_API_KEY=your_youtube_data_api_key

   # JWT Secret
   JWT_SECRET=your_jwt_secret_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### API Keys Setup

#### YouTube Data API
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable YouTube Data API v3
4. Create credentials (API key)
5. Add the key to your `.env.local`

#### Google OAuth
1. In Google Cloud Console, go to "APIs & Services" > "Credentials"
2. Create OAuth 2.0 Client ID
3. Set authorized redirect URIs to `http://localhost:3000/api/auth/callback/google`
4. Add Client ID and Secret to your `.env.local`

## 🎯 Usage

### For Users
1. **Sign In** - Use your Google account for secure authentication
2. **Browse Content** - Explore trending videos and categories
3. **Search** - Find specific content with advanced search
4. **Watch** - Enjoy videos with custom video player
5. **Personalize** - Create playlists and manage watch history

### For Developers
```javascript
// Example: Using the YouTube API wrapper
import { YouTubeAPI } from './lib/youtube-api'

// Search for videos
const videos = await YouTubeAPI.searchVideos('react tutorials')

// Get video details
const videoDetails = await YouTubeAPI.getVideoDetails('VIDEO_ID')

// Get popular videos
const popularVideos = await YouTubeAPI.getPopularVideos()
```

## 📁 Project Structure

```
streamwave/
├── src/
│   ├── app/                 # Next.js 14 app router
│   ├── components/          # Reusable React components
│   ├── lib/                # Utility libraries and configurations
│   ├── context/            # React context providers
│   ├── hooks/              # Custom React hooks
│   └── styles/             # Global styles and CSS
├── public/                 # Static assets
└── configuration files
```

## 🔧 Configuration

### Tailwind CSS
The project uses a custom Tailwind configuration with extended colors and animations:

```javascript
// tailwind.config.js
theme: {
  extend: {
    colors: {
      primary: { /* Custom primary colors */ },
      accent: { /* Custom accent colors */ },
      dark: { /* Dark theme colors */ }
    },
    animation: {
      'float': 'float 6s ease-in-out infinite',
      'glow': 'glow 2s ease-in-out infinite alternate',
    }
  }
}
```

### Next.js Configuration
Optimized for performance with image optimization and API routes:

```javascript
// next.config.js
module.exports = {
  images: {
    domains: ['lh3.googleusercontent.com', 'i.ytimg.com'],
  },
  experimental: {
    appDir: true,
  }
}
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms
The application can be deployed on any platform that supports Node.js:

- **Netlify** - With next-on-netlify
- **AWS** - Using Amplify or Lambda
- **DigitalOcean** - With App Platform
- **Railway** - Simple deployment

## 🤝 Contributing

We love your input! We want to make contributing to StreamWave as easy and transparent as possible.

### Development Process
1. Fork the project
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style
- Use TypeScript for new components
- Follow ESLint configuration
- Write meaningful commit messages
- Add comments for complex logic

## 🐛 Troubleshooting

### Common Issues

**Authentication Errors**
- Verify Google OAuth credentials
- Check redirect URIs in Google Cloud Console
- Ensure NEXTAUTH_URL is set correctly

**YouTube API Issues**
- Verify API key is valid and has quota
- Check if YouTube Data API v3 is enabled
- Ensure API key has proper restrictions

**Build Errors**
- Clear Next.js cache: `rm -rf .next`
- Reinstall dependencies: `npm install`
- Check Node.js version (requires 18.17+)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing framework
- **Tailwind CSS** - For the utility-first CSS approach
- **YouTube** - For the Data API
- **Vercel** - For seamless deployment
- **React Community** - For endless inspiration

## 📞 Support

- **Documentation**: [GitHub Wiki](https://github.com/your-username/streamwave/wiki)
- **Issues**: [GitHub Issues](https://github.com/your-username/streamwave/issues)
- **Email**: support@streamwave.com
- **Twitter**: [@streamwave](https://twitter.com/streamwave)

## 🌟 Show Your Support

If you find this project helpful, please give it a ⭐️ on GitHub!

---

<div align="center">

**Built with ❤️ using Next.js, React, and Tailwind CSS**

[Privacy Policy](https://github.com/your-username/streamwave/privacy.md) • 
[Terms of Service](https://github.com/your-username/streamwave/terms.md) • 
[Code of Conduct](https://github.com/your-username/streamwave/code-of-conduct.md)

© 2024 StreamWave. All rights reserved.

</div>

---