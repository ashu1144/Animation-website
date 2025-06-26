import { motion } from 'framer-motion'
import React from 'react'



function Marque() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full pt-20 pb-22 text-white  bg-[#0072CE] rounded-t-4xl -mb-[169px]  xl:-mb-[27vw] '>
        <div className='border-zinc-900 text-zinc-900 border-y-4 border-t-1 border-b-1 my-[3%]  flex items-center pt-[2%]  overflow-hidden'>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear" ,repeat:Infinity , duration:10}} style={{ fontFamily: '"Edu SA Hand", cursive'  }}  className=" pr-20 min-w-[210vw] text-[14vw] leading-none  uppercase  -tracking-[15px] font-extrabold ">It's going to be a blast.</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear" ,repeat:Infinity , duration:10}} style={{ fontFamily: '"Edu SA Hand", cursive'  }}  className=" pr-20 min-w-[210vw] text-[14vw] leading-none  uppercase  -tracking-[15px] font-extrabold ">It's going to be a blast.</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear" ,repeat:Infinity , duration:10}} style={{ fontFamily: '"Edu SA Hand", cursive'  }}  className=" pr-20 min-w-[210vw] text-[14vw] leading-none  uppercase  -tracking-[15px] font-extrabold ">It's going to be a blast.</motion.h1>
        </div>
 
    </div>
  )
}

export default Marque