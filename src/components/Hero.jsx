import React from 'react'
import Typed from 'react-typed';


function Hero() {
    return (
        <div className='flex flex-col justify-center text-white w-full h-screen mx-auto text-center'>
            <p className='text-[#00df9a] sm:text-6xl md:text-7xl text-4xl font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
            <h1 className='text-2xl sm:text-4xl md:text-5xl font-bold md:py-4'>
                Grow with data.</h1>

            <div className='flex justify-center w-full'>
                <p className='text-xl sm:text-5xl md:text-6xl font-bold'>Fast, flexible financing for</p>
                <Typed
                    className='text-xl sm:text-5xl md:text-6xl font-bold md:pl-4 pl-2'
                    strings={[
                        'BTB',
                        'BTC',
                        'SASS']}
                    typeSpeed={100}
                    backSpeed={80}
                    loop >
                </Typed>
            </div>
            <p className='text-xl md:text-2xl text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC and SASS platforms</p>
            <button className='bg-[#00df9a] w-40 px-2 py-1 rounded text-black mx-auto my-6 font-medium'>Get Started</button>
        </div>
    )
}

export default Hero