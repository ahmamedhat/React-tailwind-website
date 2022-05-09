import React from 'react'
import analytics from '../assets/images/analytics.png'

function Analytics() {
    return (
        <div className='py-16 px-4 bg-white'>
            <div className='grid md:grid-cols-2 mx-auto max-w-[1240px]'>
                <img className='w-[500px] mx-auto my-4' src={analytics} alt='/' />
                <div className='flex flex-col justify-center px-4'>
                    <p className='text-[#00df9a] font-bold md:text-3xl'>DATA ANALYTICS DASHBOARD</p>
                    <h1 className='font-bold py-2 sm:text-xl md:text-2xl text-xl'>Manage Data Analytics Centrally</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores odio quo animi molestiae quasi, rem necessitatibus minus, optio possimus harum molestias fugit, aspernatur similique corporis ipsa consectetur eius doloremque a.</p>
                    <button className='text-[#00df9a] w-40 px-2 py-1 rounded bg-black mx-auto my-6 md:mx-0 font-medium'>Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Analytics