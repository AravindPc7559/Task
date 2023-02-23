import React from 'react'
import {FiShoppingCart} from 'react-icons/fi'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const {count} = useSelector((state) => state.products)

  return (
    <div className='w-full h-[50px] bg-blue-600 px-5 md:px-10 py-3'>
        <div className='flex justify-between'>
            <div>
                <Link to="/" >Home</Link>
            </div>
              <Link to='/cart'>
            <div className='flex gap-1'>
              <FiShoppingCart className='text-2xl' />
                <h1 className='text-xl'>{count}</h1>
            </div>
              </Link>
        </div>
    </div>
  )
}

export default Navbar