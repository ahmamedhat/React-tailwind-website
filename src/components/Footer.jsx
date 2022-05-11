import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { AiFillInstagram, AiFillGithub } from 'react-icons/ai'
import { BsLinkedin } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'

function Footer() {
    return (
        <div className='text-white pt-8'>
            <h1 className='text-center font-medium text-2xl'>Contact Me</h1>
            <div className='flex flex-row justify-around items-center p-12 max-w-[700px] mx-auto'>
                <FaFacebook className='cursor-pointer' size={30} />
                <AiFillInstagram size={30} />
                <HiOutlineMail size={30} />
                <BsLinkedin size={30} />
                <AiFillGithub size={30} />
            </div>

        </div>
    )
}

export default Footer