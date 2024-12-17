import React from "react";

import team2 from '../../../assets/team2.jpg'
import { motion } from "motion/react"
import { easeOut } from "motion";
import team1 from '../../../assets/team1.jpg'

const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 md:h-[500px]">
        <div className="hero-content flex-col  lg:flex-row-reverse">
          <div className="md:flex-1 w-full">
            <motion.img
            animate={{
                y: [0,50,0]
            }}
            transition={{
                duration:5, delay:1, repeat:Infinity
            }}
              src={team1}
              className="max-w-sm rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-900 shadow-2xl w-40 md:w-80"
            />
          
                <motion.img  animate={{
                x: [100,150,100]
            }}
            transition={{
                duration:5, delay:1, repeat:Infinity
            }}  className="max-w-sm w-40 md:w-80 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-900" src={team2} alt="" />
            
          </div>
          <div className="md:flex-1">
            <motion.h1 animate={{
                x:[0,50,0],
                transition: { duration: 4,repeat: Infinity,delay:2, ease: easeOut },
                
            }} className="text-5xl font-bold">New <motion.span animate={{ color: ['#f1391c', '#1cf1b7','#dbf11c']

            }} transition={{duration: 2, repeat: Infinity,delay:1}}>Jobs</motion.span> For You!</motion.h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn bg-blue-950 text-white font-bold">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
