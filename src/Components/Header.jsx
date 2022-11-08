import React from 'react'
import Logo from '../assets/logo.svg'

function Header() {
  return (
    <div className='flex justify-between items-center mx-4 md:mx-10 lg:mx-[164px] mt-[18px] md:mt-9'>
        <img src={Logo} alt="logo" className='w-[48px] h-[48px] cursor-pointer' />
        <a href="/" className='text-sm bg-[#030303] text-white font-bold py-3 px-7 rounded-3xl
        hover:bg-[#755CDE] duration-200'> Free Consultation </a>
    </div>
  )
}

export default Header