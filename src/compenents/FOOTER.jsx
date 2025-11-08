import{
    FaFacebook,FaInstagram,FaTwitter
} from"react-icons/fa";

import React from 'react'

const FOOTER = () => {
  return (
    <footer className='bg-black text-white text-center py-6 mt-6'>
        <p>© 2025 Apple Inc. All rights reserved.</p>
        <div className='flex justify-center mt-4 space-x-3'> 
            <a href='#' className="flex space-x-2 hover:text-blue-500"> <FaFacebook/> Facebook</a>
            <a href='#' className="flex space-x-2 hover:text-blue-500"> <FaInstagram/> Instagram</a>
            <a href='#' className="flex space-x-2 hover:text-blue-500"> <FaTwitter/> X</a>
        </div>
    </footer>
  )
}

export default FOOTER