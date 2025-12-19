import React, { type PropsWithChildren } from 'react'
import type { Viewport, Metadata } from 'next'

import './globals.css'

export const metadata: Metadata = {
  title: 'Hanzo Foundation - AI Infrastructure for the Future',
  description: 'Building frontier AI and foundational models. Large language models, agent frameworks, and model context protocol. Hanzo Industries Inc.',
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
