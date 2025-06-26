import React from "react";
import { motion, scale } from "framer-motion";

function Footer() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 bg-white text-shadow-zinc-900 px-[3vw]">
      <div className="pt-10 ">
        <h1 className=' font-["Neue Montreals"] font-extrabold leading-[10vw] md:leading-[9vw] lg:leading-[5vw] uppercase lg:text-[6.2vw] text-[12vw] font-[]'>
          Mischief-<br />
          Laughter
        </h1>
      </div>
      <div className="flex flex-col gap-[2vw] mt-[2vw] md:pt-1 pb-20">
        <h1 className=' font-["Neue Montreals"] font-extrabold leading-[5vw] uppercase text-[12vw] lg:text-[6.2vw] font-[]'>
          presentation
        </h1>
        <div className="flex flex-col md:flex-row gap-[18vw] mt-12">
          <div className="flex flex-col gap-10">
            <div className="w-18">
              <h1>s:</h1>
              <div className="flex flex-col gap-5 items-center mt-3">
                {["instagram", "banhance", "facebook", "linkedin"].map(
                  (el, index) => (
                    <motion.h1
                      whileHover="hover"
                      initial="rest"
                      animate="rest"
                      className="relative  capitalize overflow-hidden cursor-pointer"
                      key={index}
                    >
                      {el}
                      <motion.div
                        initial={{ x: "0%" }}
                        variants={{
                          rest: { x: "0%" },
                          hover: { x: "-100%" },
                        }}
                        transition={{
                          ease: "easeInOut",
                          delay: 0,
                          duration: 0.2,
                        }}
                        className=" h-[1px] absolute w-[95%] left-0 bg-zinc-900 top-5"
                      ></motion.div>
                    </motion.h1>
                  )
                )}
              </div>
            </div>
            <div className="flex flex-col gap-5 ">
              <h1>L:</h1>
              <h1 className=" capitalize ">
                02-1965 W 4th Ave
                <br /> Vancouver,Canada
              </h1>
              <h1 className=" capitalize">
                30 Chukarina St Lviv,
                <br /> Ukraine
              </h1>
            </div>
            <div>
              <h1>E.</h1>
              <span>shaikmohammadashan@gmail.com</span>
            </div>
          </div>
          <div className="flex flex-col-reverse  gap-5">
            <div className="w-25 flex flex-col items-start gap-5 pb-2.5 ">
            {["Contact us", "Insights", "About us", "Our work", "Servies"].map((el, index) => (
                <motion.h1
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                  className=" relative  capitalize overflow-hidden cursor-pointer"
                  key={index}
                >
                  {el}
                  <motion.div
                    initial={{ x: "0%" }}
                    variants={{
                      rest: { x: "0%" },
                      hover: { x: "-100%" },
                    }}
                    transition={{
                      ease: "easeInOut",
                      delay: 0,
                      duration: 0.2,
                    }}
                    className={`h-[1px] absolute w-full   bg-zinc-900 top-5 `}
                  ></motion.div>
                </motion.h1>
              )
            )}
            </div>
            <h1>M:</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
