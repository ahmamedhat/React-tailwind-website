import React from 'react'

function Card(props) {
  return (
    <div className='text-black rounded-lg w-full px-6 min-w-[300px] bg-white items-center justify-center flex flex-col shadow-xl mx-auto max-w-[400px] hover:scale-105 duration-200'>
        <img className={`w-[${props.imageSize}px] h-[190px] mx-auto`} src= {props.image}/>
        <h2 className='font-bold my-1 text-2xl'>{props.title}</h2>
        <p className='text-1xl font-bold text-gray-400'>${props.price}</p>
        <div className='flex flex-col justify-center items-center border-t-2 border-gray-100 rounded-sm mt-4 pt-4 w-full'>
            <p><span className='text-[#00df9a] font-bold'>{props.storage}</span> of Storage</p>
            <p><span className='text-[#00df9a] font-bold'>{props.usersAllowed}</span> Granted user</p>
            <p>Send up to <span className='text-[#00df9a] font-bold'>{props.upTo}</span></p>
        </div>
        <button className='bg-[#00df9a] my-4 w-40 px-2 py-1 rounded h-full text-black font-medium md:ml-1'>Start Trial</button>

    </div>
  )
}

export default Card