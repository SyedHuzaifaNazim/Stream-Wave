import { Inter } from 'next/font/google'
import './globals.css'
import ClientProviders from './ClientProviders'   // ✔ Correct import

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'StreamWave - Next Generation Video Platform',
  description: 'Experience videos like never before with StreamWave',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  )
}
