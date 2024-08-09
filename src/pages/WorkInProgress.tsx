import React from 'react'
import gif from '../assets/wip.png'
import Image from 'next/image'

const WorkInProgress = () => {
  return (
   
    <div className="flex flex-col items-center justify-center h-screen">
    <h1 className=" font-bold mb-24 text-blue-900 sm:text-6xl lg:text-8xl">Under Construction...</h1>
    <Image src={gif} alt="progressing" className="w-[80vh] h-[60vh]" />
  </div>

  )
}

export default WorkInProgress
