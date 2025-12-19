import React, { type PropsWithChildren } from 'react'
import type { Viewport, Metadata } from 'next'

import './globals.css'

export const metadata: Metadata = {
  title: 'Lux Foundation - Quantum-Safe Blockchain Technology',
  description: 'Building the future of decentralized finance with quantum-safe blockchain technology. Lux Industries Inc.',
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='en' className='dark'>
      <body className='bg-black text-white flex flex-col min-h-full'>
        <main className='flex flex-col grow'>
          {children}
        </main>
      </body>
    </html>
  )
}
