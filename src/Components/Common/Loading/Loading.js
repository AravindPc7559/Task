import React from 'react'

const Loading = () => {
  return (
    <div className="absolute top-[50%] left-[50%] animate-pulse -translate-x-[50%] -translate-y-[50%] p-12 rounded-full bg-blue-600">
      <h1 className='text-white font-semibold '> Loading...</h1>
    </div>
  )
}

export default Loading
