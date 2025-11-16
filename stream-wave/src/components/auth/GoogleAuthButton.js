'use client'
import { motion } from 'framer-motion'
import { signIn } from 'next-auth/react'
import { FcGoogle } from 'react-icons/fc'

export function GoogleAuthButton({ loading = false }) {
  const handleGoogleSignIn = async () => {
    try {
      await signIn('google', { callbackUrl: '/' })
    } catch (error) {
      console.error('Google sign in error:', error)
    }
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={handleGoogleSignIn}
      disabled={loading}
      className="w-full flex items-center justify-center space-x-3 bg-white text-gray-900 font-semibold py-4 px-6 rounded-2xl hover:bg-gray-50 transition-colors duration-300 border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {loading ? (
        <div className="w-6 h-6 border-2 border-gray-900 border-t-transparent rounded-full animate-spin" />
      ) : (
        <>
          <FcGoogle className="w-6 h-6" />
          <span>Continue with Google</span>
        </>
      )}
    </motion.button>
  )
}