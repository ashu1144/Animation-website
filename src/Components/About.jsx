import React from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import { motion, scale } from "framer-motion";

function About() {
  const links = ["Instagram", "Behance", "Facebook", "Linkedin"];
  const isSmall = window.innerWidth < 768;
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed={isSmall ? "0.1" : "0.7"}
      className="w-full py-20 bg-[#FEE101] rounded-t-4xl font-['Neue_Montreal'] -mb-[26vw]  "
    >
      <h1 className=" px-8 sm:px-20 text-[11vw] md:text-6xl xl:leading-[4.5vw] leading-[18vw]  text-black ">
        Bananaaa! squealed a Minion, grinning wildly. “Bello! Tulaliloo ti
        amo!” Sirens blared “Bee do! Bee do!” Minions giggled, yelled “Poopaye!”
        and “La Papaya!” Pure silly mayhem!
      </h1>

      <div className="pt-20 pb-5">
        <hr className="border-1" />
      </div>

      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4  gap-10 sm:gap-1 px-10 text-[17px] font-lighter text-zinc-750  ">
        <div className="">
          <h3>What you can expect</h3>
        </div>
        <div></div>
        <div className="leading-7 lg:w-106 lg:pr-35 flex flex-col gap-10 items-center ">
          <h3>
            We help the banana‑loving teams and tiny startups that make the world spin — they save the planet, do crypto magic, build shiny chips, and cook fancy Michelin‑yummies!
          </h3>
          <h3>
           We believe a mix of big ideas, silly Minion giggles (and a bit of strong banana‑coffee) makes your message super clear, very fun, and truly irresistible!


          </h3>
        </div>

        <div className="relative justify-center  items-center gap-4 pb-6">
          <div className=" absolute items-center top-[5vw] md:left-[28vw] lg:left-[12vw] lg:top-[20vh] flex flex-col gap-5 w-20 overflow-hidden">
            {links.map((text, index) => (
              <motion.div
                key={index}
                className="relative cursor-pointer text-black capitalize"
                initial="rest"
                whileHover="hover"
                animate="rest"
              >
                <span>{text}</span>
                <motion.div
                  className="absolute left-0 bottom-0 h-[1px] w-full bg-black"
                  variants={{
                    rest: { x: "0%" },
                    hover: { x: "100%" },
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="md:pt-20 pt-[45vw]   ">
        <hr />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-25 sm:gap-1 px-12 pb-18">
        <div className="mt-5 sm:mt-2 ml-1">
          <div className="mt-2 ml-2">
            <div className="-ml-8 sm:ml-0">
              <h1 className="text-[40px]  sm:text-[55px] leading-[6.5vw]">
                Our approach:
              </h1>
            </div>
            <div className="relative group pt-6 sm:pt-0 -ml-10 sm:ml-0 md:mt-5 ">
              <button
                className="
            relative z-10 flex items-center justify-center rounded-full
            cursor-pointer  font-sans text-[1.4rem] leading-[1] font-[400] uppercase
            px-8 py-4
            border-2
            group-hover:scale-110
            border-zinc-800
            text-zinc-500
            transition-[color,background-color,scale]
            duration-300
           
          "
              >
                Read more
                <span className="ml-3 transition-transform duration-300 group-hover:scale-150">
                  <HiArrowUpRight className="text-xl" />
                </span>
              </button>
              <div
                className="
            absolute left-28 bottom-[-28.9px] z-0
            h-14 w-56 rounded-3xl bg-zinc-800
            scale-0 origin-bottom -translate-x-1/2 -translate-y-1/2
            transition-transform duration-300 group-hover:scale-110
          "
              />
            </div>
          </div>
        </div>

        <motion.div
        initial={{scale:"80%"}}
        animate={{scale:"100%"}}
        transition={{ease:[0.76, 0, 0.24, 1] , duration:1}} 
        className="group w-full mt-5 -ml-3 sm:ml-1 ">
          <img
            src="https://i.pinimg.com/736x/64/eb/67/64eb679d83d9bb6e8fc66719869e5e12.jpg"
            alt="Example"
            className="w-full h-full border-[1px] border-zinc-900 rounded-xl transition-transform group-hover:scale-90 duration-500"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default About;
