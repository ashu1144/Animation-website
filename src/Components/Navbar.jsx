import React from 'react'
import Hamburger from 'hamburger-react'
import { motion} from "framer-motion";
import png from '../assets/pngimg.png'
import { useState, useEffect } from "react";

const Navbar = () => {
     const [isOpen, setOpen] = useState(false);
     const [show, setShow] = useState(true);
     const [lastScrollY, setLastScrollY] = useState(window.scrollY);

      
    useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scroll down
        setShow(false);
        setOpen(false)
      } else {
        // Scroll up
        setShow(true);

      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className={` ${!show? "hidden":""}  fixed z-[999] w-[100vw]  md:w-full text-white px-8 py-8 font-["Neue Montreals"] flex justify-between items-center `}>
        <div className='logo ml-5'>
         <div className="w-[72px] h-[30px] flex items-center justify-center">
          <motion.img
          initial={{scale:"0%" , rotate:0}}
          animate={{scale:"100%" , rotate:360}}
          transition={{ease:[0.76, 0, 0.24, 1] ,duration:1}} 
          className='rotate-15 w-15' src={png} alt="" />
          <span className='text-2xl'>Banana</span>
          </div>

        </div>
        <div className=' justify-between links flex gap-8 items-center '>
            {["services","Our work", "About Us" , "Insights" ,"contact Us" ].map((items , index)=>(
                <a className={` hover:underline hidden md:flex text-md font-light font-["Founders_Grotesk"] capitalize ${index===4 && "ml-34"}`} key={index}>{items}</a>
            ))}

        <div>
        
        <div className="md:hidden">
        <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>

      {isOpen && (
        <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        
        className="absolute top-20 left-0 w-full bg-zinc-900 p-4 text-white flex flex-col gap-3 md:hidden">
            {["services","Our work", "About Us" , "Insights" ,"contact Us" ].map((items , index)=>(
                <a className='p-2 pl-2 text-2xl border-t-1 border-zinc-500'  key={index}>{items}</a>
            ))}
        </motion.div>
      )}
        </div>

            


        </div>
        
        


    </div>
  )
}

export default Navbar