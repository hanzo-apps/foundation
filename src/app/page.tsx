import React from 'react'

import { Header, Footer } from '@luxfi/ui'

import siteDef from '@/site-def'

const Page = () => {
  return (<>
    <Header siteDef={siteDef}/>
    <main className='min-h-screen'>
      {/* Hero Section */}
      <section className='flex items-center justify-center py-32 px-4'>
        <div className='text-center max-w-4xl mx-auto'>
          <h1 className='text-5xl md:text-7xl font-bold tracking-tight mb-6'>
            Lux Foundation
          </h1>
          <p className='text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto'>
            Building the future of decentralized finance with quantum-safe blockchain technology.
          </p>
          <div className='flex gap-4 justify-center flex-wrap'>
            <a href='https://docs.lux.network' className='px-8 py-4 bg-white text-black rounded-md font-medium hover:bg-gray-100 transition-colors'>
              Read Documentation
            </a>
            <a href='https://github.com/luxfi' className='px-8 py-4 border border-white/30 rounded-md font-medium hover:border-white transition-colors'>
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
              <h3 className='text-xl font-semibold mb-4'>Quantum Safety</h3>
              <p className='text-gray-400'>
                Pioneering post-quantum cryptographic solutions to protect digital assets against future threats.
              </p>
            </div>
            <div className='p-8 rounded-xl bg-white/5 border border-white/10'>
              <h3 className='text-xl font-semibold mb-4'>Decentralization</h3>
              <p className='text-gray-400'>
                Building truly decentralized infrastructure that empowers users and communities worldwide.
              </p>
            </div>
            <div className='p-8 rounded-xl bg-white/5 border border-white/10'>
              <h3 className='text-xl font-semibold mb-4'>Open Source</h3>
              <p className='text-gray-400'>
                Committed to open development and transparency in all our protocols and applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className='py-24 px-4 border-t border-white/10'>
        <div className='max-w-6xl mx-auto text-center'>
          <h2 className='text-3xl md:text-4xl font-bold mb-8'>The Lux Ecosystem</h2>
          <p className='text-xl text-gray-400 mb-12 max-w-2xl mx-auto'>
            A comprehensive suite of blockchain solutions designed for the next generation of finance.
          </p>
          <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            <a href='https://lux.network' className='p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 transition-colors'>
              <h3 className='font-semibold mb-2'>Network</h3>
              <p className='text-sm text-gray-400'>Core blockchain infrastructure</p>
            </a>
            <a href='https://lux.exchange' className='p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 transition-colors'>
              <h3 className='font-semibold mb-2'>Exchange</h3>
              <p className='text-sm text-gray-400'>Decentralized trading</p>
            </a>
            <a href='https://lux.safe' className='p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 transition-colors'>
              <h3 className='font-semibold mb-2'>Safe</h3>
              <p className='text-sm text-gray-400'>Quantum-safe multisig</p>
            </a>
            <a href='https://lux.bridge' className='p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 transition-colors'>
              <h3 className='font-semibold mb-2'>Bridge</h3>
              <p className='text-sm text-gray-400'>Cross-chain transfers</p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-24 px-4 border-t border-white/10'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-3xl md:text-4xl font-bold mb-6'>Join the Community</h2>
          <p className='text-xl text-gray-400 mb-10'>
            Contribute to the future of decentralized finance.
          </p>
          <div className='flex gap-4 justify-center flex-wrap'>
            <a href='https://discord.gg/luxfi' className='px-8 py-4 bg-white text-black rounded-md font-medium hover:bg-gray-100 transition-colors'>
              Join Discord
            </a>
            <a href='https://twitter.com/luxaboratories' className='px-8 py-4 border border-white/30 rounded-md font-medium hover:border-white transition-colors'>
              Follow on X
            </a>
          </div>
        </div>
      </section>
    </main>
    <Footer siteDef={siteDef}/>
  </>)
}

export default Page
