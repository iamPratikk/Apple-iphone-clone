import React from 'react'
import {appleImg,searchImg,bagImg} from "../utils";
import { navLists } from '../constants';


const Navbar = () => {
  return (
    <header className='w-full py-5 sm:px-10 px-5 flex justify-between items-center' >
      <nav className='flex w-full screen-max-width' >
        <img src={appleImg} alt="apple" width={20} height={20}  />
        <div className='flex flex-1 justify-center max-sm:hidden' >
          {navLists.map((item,i)=>{
            return <div className='px-5 text-sm cursor-pointer text-gray-100 hover:text-white transition-all' key={i} >{item}</div>
          })}
        </div>
        <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1' >
          <img src={searchImg} alt="search" width={20} height={30} />
          <img src={bagImg} alt="Bag" width={20} height={30} />
        </div>
      </nav>
    </header>
  )
}

export default Navbar