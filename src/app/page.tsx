import React from 'react'
import Link from 'next/link'

const navLinks = [
  { href: 'https://hanzo.ai', label: 'Hanzo AI' },
  { href: 'https://docs.hanzo.ai', label: 'Docs' },
  { href: 'https://github.com/hanzoai', label: 'GitHub' },
]

const Header = () => (
  <header className='w-full border-b border-white/10'>
    <div className='max-w-6xl mx-auto px-4 py-4 flex items-center justify-between'>
      <Link href='/' className='text-xl font-bold'>
        Hanzo Foundation
      </Link>
      <nav className='flex gap-6'>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className='text-sm text-gray-400 hover:text-white transition-colors'
          >
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  </header>
)

const Footer = () => (
  <footer className='w-full border-t border-white/10 py-12'>
    <div className='max-w-6xl mx-auto px-4'>
      <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
        <div className='text-gray-400 text-sm'>
          © 2024-2025 Hanzo Industries Inc. All rights reserved.
        </div>
        <div className='flex gap-6'>
          <a href='https://discord.gg/hanzoai' className='text-gray-400 hover:text-white transition-colors text-sm'>
            Discord
          </a>
          <a href='https://twitter.com/hanaboratories' className='text-gray-400 hover:text-white transition-colors text-sm'>
            X
          </a>
          <a href='https://github.com/hanzoai' className='text-gray-400 hover:text-white transition-colors text-sm'>
            GitHub
          </a>
        </div>
      </div>
    </div>
  </footer>
)

const Page = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <main className='flex-grow'>
        {/* Hero Section */}
        <section className='flex items-center justify-center py-32 px-4'>
          <div className='text-center max-w-4xl mx-auto'>
            <h1 className='text-5xl md:text-7xl font-bold tracking-tight mb-6'>
              Hanzo Foundation
            </h1>
            <p className='text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto'>
              Building frontier AI and foundational models for the next generation of intelligent systems.
            </p>
            <div className='flex gap-4 justify-center flex-wrap'>
              <a href='https://docs.hanzo.ai' className='px-8 py-4 bg-white text-black rounded-md font-medium hover:bg-gray-100 transition-colors'>
                Read Documentation
              </a>
              <a href='https://github.com/hanzoai' className='px-8 py-4 border border-white/30 rounded-md font-medium hover:border-white transition-colors'>
                View on GitHub
              </a>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className='py-24 px-4 border-t border-white/10'>
          <div className='max-w-6xl mx-auto'>
            <h2 className='text-3xl md:text-4xl font-bold text-center mb-16'>Our Mission</h2>
            <div className='grid md:grid-cols-3 gap-8'>
              <div className='p-8 rounded-xl bg-white/5 border border-white/10'>
                <h3 className='text-xl font-semibold mb-4'>Large Language Models</h3>
                <p className='text-gray-400'>
                  Developing cutting-edge LLMs and foundational models that push the boundaries of machine intelligence.
                </p>
              </div>
              <div className='p-8 rounded-xl bg-white/5 border border-white/10'>
                <h3 className='text-xl font-semibold mb-4'>Agent Frameworks</h3>
                <p className='text-gray-400'>
                  Building autonomous agent systems that can reason, plan, and execute complex multi-step tasks.
                </p>
              </div>
              <div className='p-8 rounded-xl bg-white/5 border border-white/10'>
                <h3 className='text-xl font-semibold mb-4'>Model Context Protocol</h3>
                <p className='text-gray-400'>
                  Pioneering infrastructure for context management and cross-model communication at scale.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className='py-24 px-4 border-t border-white/10'>
          <div className='max-w-6xl mx-auto text-center'>
            <h2 className='text-3xl md:text-4xl font-bold mb-8'>The Hanzo Platform</h2>
            <p className='text-xl text-gray-400 mb-12 max-w-2xl mx-auto'>
              A comprehensive suite of AI tools designed for developers and enterprises.
            </p>
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
              <a href='https://hanzo.ai/cli' className='p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 transition-colors'>
                <h3 className='font-semibold mb-2'>CLI</h3>
                <p className='text-sm text-gray-400'>Command-line AI assistant</p>
              </a>
              <a href='https://hanzo.ai/studio' className='p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 transition-colors'>
                <h3 className='font-semibold mb-2'>Studio</h3>
                <p className='text-sm text-gray-400'>Visual model development</p>
              </a>
              <a href='https://hanzo.ai/desktop' className='p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 transition-colors'>
                <h3 className='font-semibold mb-2'>Desktop</h3>
                <p className='text-sm text-gray-400'>Native AI applications</p>
              </a>
              <a href='https://hanzo.ai/engine' className='p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 transition-colors'>
                <h3 className='font-semibold mb-2'>Engine</h3>
                <p className='text-sm text-gray-400'>Enterprise inference API</p>
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-24 px-4 border-t border-white/10'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-3xl md:text-4xl font-bold mb-6'>Join the Community</h2>
            <p className='text-xl text-gray-400 mb-10'>
              Contribute to the future of artificial intelligence.
            </p>
            <div className='flex gap-4 justify-center flex-wrap'>
              <a href='https://discord.gg/hanzoai' className='px-8 py-4 bg-white text-black rounded-md font-medium hover:bg-gray-100 transition-colors'>
                Join Discord
              </a>
              <a href='https://twitter.com/hanaboratories' className='px-8 py-4 border border-white/30 rounded-md font-medium hover:border-white transition-colors'>
                Follow on X
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Page
