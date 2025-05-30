import Link from 'next/link'
import React from 'react'
import {motion} from "framer-motion"

const MotionLink=motion(Link);

function Logo() {
  return (
    <div className='flex items-center justify-center mt-2'>
        <MotionLink
        className='w-16 h-16 text-light bg-dark flex items-center justify-center rounded-full text-2xl font-bold border border-solid border-transparent dark:border-light'
         href="/" animate={{
          background:["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"],
          transition:{duration:1,repeat:Infinity}
         }}>
            YS</MotionLink>
    </div>
  )
}

export default Logo