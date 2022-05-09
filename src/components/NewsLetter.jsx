import React from 'react'
import Newsletter from '../assets/images/newsletter.png'

function NewsLetter() {
    return (
        <div className='text-white justify-center max-w-[1000px] mx-auto grid md:grid-cols-2 p-4'>
            <img className='w-[300px] md:w-[400px] m-auto' src={Newsletter} alt='/' />
            <div className='m-auto text-center'>
                <h1 className='font-bold text-2xl md:text-3xl lg:text-4xl my-4'>Subscribe to our Newsletter!</h1>
                <p className='text-gray-500'>Enter your E-mail now and get the latest updates</p>
                <div className='items-center flex flex-col md:flex-row'>
                    <input type='email' placeholder='Email Address' className='w-full rounded py-1 px-2 my-2 text-black font-bold' />
                    <button className='bg-[#00df9a] w-40 px-2 py-1 rounded h-full text-black mx-auto font-medium md:ml-1'>Notify me</button>
                </div>
                <p className='text-gray-300 font-light text-xs md:text-sm my-3'>We care about the protection of your data, read our <span className='underline text-[#00df9a]'>privacy policies</span></p>
            </div>
        </div>
    )
}

export default NewsLetter