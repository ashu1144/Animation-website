import React, { useState } from "react";
import { motion, scale } from "framer-motion";

function Featured() {
  const [isHovering, setHover] = useState(false);
  return (
    <div className="pt-15 bg-zinc-900">
      <div className="w-full h-full bg-zinc-900 ">
        <div>
          <h1 className=" p-8 pl-8 text-white text-6xl">Featured projects</h1>
        </div>
        <div>
          <hr className="border-t-1 border-zinc-700 " />
        </div>
        <div className=" relative flex flex-col gap-10 sm:gap-0 sm:flex-row mt-5 px-6 py-1">
          
          {/* featured */}
          <div className="w-full sm:w-1/2 group">
            <div className=" pl-1 sm:pl-3  flex justify-items-start gap-5 items-center">
              <div className="w-2 h-2 bg-white"></div>
              <h2 className="uppercase text-2xl text-white">salience labs</h2>
            </div>
            <div class="group mt-10 pr-2 sm:pl-5">
              <img
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                class="bg-zinc-900 w-full rounded transition-transform hover:scale-96 duration-500"
                src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-663x551.png"
                srcset="
                 https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-663x551.png 1x,
                https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png 2x"
                alt="Pitch deck design & brand identity for Salience Labs, a photonic switch company"
              />
            </div>
            <div className="w-ful ">
              {["brand photo", "pitch desk"].map((el, i) => (
                <motion.button
                  whileHover={{scale:1.2}}
                  key={i}
                  className="text-white border-2 rounded-2xl p-1 px-4 uppercase ml-0 sm:ml-4.5 m-4"
                >
                  {el}
                </motion.button>
              ))}
            </div>

            <div className="hidden z-10 absolute text-4xl sm:text-[5vw] left-30 top-56 sm:left-[30vw]  sm:top-[22vw] group-hover:flex">
              {"SALIENCE_LAB".split("").map((el, index) => (
                <motion.span
                  className="uppercase text-[#CDEA68] font-bold"
                  key={index}
                  initial={"-300%"}
                  animate={isHovering ? { y: "0%",opacity:1 } : { y: "-20%", opacity:0 }}
                  transition={{
                    ease: [0.77, 0, 0.175, 1],
                    delay: index * 0.1,
                    duration: 0.4,
                  }}
                >
                  {el}
                </motion.span>
              ))}
            </div>
          </div>

          <div className=" w-full sm:w-1/2 group">
            <div className=" sm:pl-5 flex justify-items-start gap-5 items-center">
              <div className="w-2 h-2 bg-white"></div>
              <h2 className="uppercase text-2xl text-white">
                Cardboard_spaceship
              </h2>
            </div>
            <div class="group mt-10 pr-2.5 sm:pr-5 pl-1 sm:pl-2">
              <img
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                className="bg-zinc-900 w-full rounded transition-transform hover:scale-96 duration-500"
                src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png"
                alt="Pitch deck design & brand identity for Salience Labs, a photonic switch company"
                width="663"
                height="551"
                loading="lazy"
              />
            </div>
            <div className="w-ful ">
              {["brand template", "sales desk", "social media template"].map(
                (el, i) => (
                  <motion.button
                    whileHover={{scale:1.1}}
                    key={i}
                    className="text-white border-2 rounded-2xl p-1 px-4 uppercase m-4"
                  >
                    {el}
                  </motion.button>
                )
              )}
            </div>
            <div className=" hidden z-10 absolute sm:text-[5vw] text-3xl left-16 top-196 sm:left-[36vw] sm:top-[22vw] group-hover:flex">
              {"spaceship".split("").map((el, index) => (
                <motion.span
                  className="uppercase text-[#CDEA68] font-bold"
                  key={index}
                  initial={"-300%"}
                  animate={isHovering ? { y: "0%" ,opacity:1 } : { y: "-20%" , opacity:0 }}
                  transition={{
                    ease: [0.77, 0, 0.175, 1],
                    delay: index * 0.1,
                    duration: 0.4,
                  }}
                >
                  {el}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
