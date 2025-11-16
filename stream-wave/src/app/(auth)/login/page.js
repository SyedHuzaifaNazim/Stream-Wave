'use client'
import { motion } from 'framer-motion'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Play, Sparkles } from 'lucide-react'
import { GoogleAuthButton } from '../../../components/auth/GoogleAuthButton'

export default function LoginPage() {
  const { data: session } = useSession()
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (session) {
      router.push('/')
    }
  }, [session, router])

  const features = [
    'Unlimited video streaming',
    'Personalized recommendations',
    'Create playlists',
    '4K video quality',
    'Ad-free experience'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-300 via-dark-200 to-dark-100 flex items-center justify-center p-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl w-full items-center">
        {/* Left Side - Branding */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <div className="flex items-center justify-center lg:justify-start space-x-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
              <Play className="h-6 w-6 text-white fill-current" />
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
              StreamWave
            </span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
              StreamWave
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl">
            Experience the next generation of video streaming. Discover, watch, and share amazing content in stunning quality.
          </p>

          <div className="space-y-4 mb-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
                className="flex items-center space-x-3 text-gray-300"
              >
                <Sparkles className="h-5 w-5 text-primary-500" />
                <span>{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Side - Login Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-dark-200/50 backdrop-blur-lg border border-gray-700 rounded-3xl p-8 lg:p-12 shadow-2xl"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">
              Join StreamWave
            </h2>
            <p className="text-gray-400">
              Sign in to start your streaming journey
            </p>
          </div>

          <div className="space-y-6">
            <GoogleAuthButton loading={loading} />

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-dark-200 text-gray-400">
                  Or continue with email
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-4 py-3 bg-dark-100 border border-gray-700 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your email"
                />
              </div>

              <button className="w-full bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold py-4 px-6 rounded-2xl hover:from-primary-600 hover:to-accent-600 transition-all duration-300 transform hover:-translate-y-0.5">
                Continue with Email
              </button>
            </div>
          </div>

          <p className="text-center text-gray-500 text-sm mt-8">
            By continuing, you agree to our{' '}
            <a href="#" className="text-primary-500 hover:text-primary-400 transition-colors">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#" className="text-primary-500 hover:text-primary-400 transition-colors">
              Privacy Policy
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  )
}