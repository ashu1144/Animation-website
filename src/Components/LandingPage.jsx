import React from 'react'
import { HiArrowUpRight } from "react-icons/hi2";
import { color, motion, scale} from "framer-motion";
const LandingPage = () => {
  return (
    <div  data-scroll data-scroll-section data-scroll-speed="-.3" className='relative w-full h-full bg-zinc-900 text-white pt-1 -mb-[2vh] xl:-mb-2'>
        <div className='textStructure  px-[3vw] mt-[35vw] sm:mt-[28vw] md:mt-[21vh] '>
            <div className="masker font-semibold ">
                <h1 className=" text-[300%]  sm:text-[8vw] leading-[0.8] font-extrabold tracking-tighter uppercase  ">we create</h1>
            </div>
            <div className="masker font-semibold flex items-center ml-2  ">
                <motion.div
                    initial={{width:0}}
                    animate={{width:"9vw"}}
                    transition={{ease:[0.76, 0, 0.24, 1], duration:1}}
                    className='bg-red-400 mt-3 w-35 h-[5.4vw]'>
                    <img className='h-full w-full' src="https://i.pinimg.com/736x/68/f1/71/68f171a7671807151e8c7615043e4e57.jpg" alt="" />
                </motion.div>
                <div className="text-[300%]  sm:text-[8vw] leading-[0.8] font-extrabold tracking-tighter uppercase  ">
                  eye opening
                </div>
            </div>
            <div className="masker font-semibold ">
                <h1 className="text-[300%]  sm:text-[8vw] leading-[0.8] font-extrabold tracking-tighter uppercase ">
                    presentation
                </h1>
            </div>
        </div>
{/* bottom-[10vw] */}
        <div className='absolute bottom-[14vw]  w-full md:bottom-[150px] xl:bottom-[8vw]' >
           <hr className="border-t-2 border-zinc-700 " />
        <div className=' px-6 py-2 gap-2 flex justify-between md:items-center text-[16.55px] md:flex-row flex-col sm:items-start '>
            {["For public and private companies", "From the first pitch to IPO"].map((para , index)=>(
                <p className='font-normal' key={index}>{para}</p>))}
            
            <motion.h1 
               whileHover={{scale: 1.1,color}}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}

                className=' mt-1.5  start flex al gap-2 uppercase text-[14.666px]'>
                <div className="border-2 py-2 px-3.5 rounded-2xl tracking-wider ">start the project</div>
                <div className='border-2 p-1.5 rounded-full' >
                    <span>
                        <HiArrowUpRight className='text-xl' />

                    </span>
                </div>

            </motion.h1>

        </div>
        </div>
    </div>
  )
}

export default LandingPage