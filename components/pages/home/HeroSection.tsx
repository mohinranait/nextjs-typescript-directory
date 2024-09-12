'use client';
import React from 'react'


const HeroSection: React.FC = () => {
    return (
        <section >
            <div className="container">
                <div className='flex items-center justify-center gap-3'>
                    <button className='px-3 py-2 rounded bg-gray-200 text-gray-800'>Light</button>
                    <button className='px-3 py-2 rounded bg-gray-200 text-gray-800'>Dark</button>
                    <button className='px-3 py-2 rounded bg-gray-200 text-gray-800'>Green</button>
                    <button className='px-3 py-2 rounded bg-gray-200 text-gray-800'>Blue</button>
                    <button className='px-3 py-2 rounded bg-gray-200 text-gray-800'>Red</button>
                </div>
            </div>
        </section>
    )
}

export default HeroSection