import React,  { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import Explainhome from "./Explainhome";

const Herosection = () => {

  const [isVisible, setIsVisible] = useState(false);
  
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  // const ZoomInScrollOut = batch(Sticky(),FadeOut(), ZoomOut());
  return (
    <>
      <motion.div
        // className="bg-gradient-to-tr relative h-full md:h-[650px] from-[#d3ffd9b0] via-[#00000000] to-[#042607cd] "
        initial={{ opacity: 0 }}
        animate={{ opacity: 6 }}
        exit={{ opacity: 0 }}
      >
        <div className=" relative ">
          <div className="">
            <img
              src="https://images.unsplash.com/photo-1654198340681-a2e0fc449f1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className=" opacity bg-blend-overlay blur- md:w-full md:h-[650px]"
              alt=""
            />
            <div className="  absolute   inset-1 ">
              <div className="relative mt-24 md:flex md:justify-center ">
                <div className=" md:p-0 p-3 ">
                  <h1 className="relative md:p-12 p-5 md:translate-y-0 -translate-y-[100px] z-10 md:w border-2 border-[#a571a5] md:text-5xl md:h-[280px] md:w-[900px] rounded-xl md:rounded-3xl w-full  text-[#bca0de] md:text-[#b8b7e2] font-Main font-text-lg md:font-light text-left bg-[a571a540] filter backdrop-blur-md">
                    Let's take a step forward in the initiative in preventing
                    food wastage and supply it to the needy one
                  </h1>
                  <div className="   flex justify-center w-full md:mt-[50px] -mt-[90px]">
                    <NavLink
                      to="/DonateDirect"
                      className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
                    >
                      <span className="w-full h-full bg-gradient-to-br from-[#462a4f] via-[#764785] to-[#706dde] group-hover:from-[#0403283c] group-hover:via-[#0b33073f] group-hover:to-[#76478564] group-hover:border-[#c26cdf] group-hover:border-4 absolute"></span>
                      <span className="relative px-[10px] py-[5px] md:px-20 md:py-3 transition-all ease-out bg-[#030f07] rounded-md group-hover:bg-opacity-20 duration-400">
                        <span className="relative md:px-10 font-Main text-sm md:text-lg text-white">
                          Donate
                        </span>
                      </span>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={` z-50 scroll-to-top ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-9 h-9">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
</svg>


    </div>
        <div className="-translate-y-[740px]  translate-x-[500px] flex gap-[10px] justify-end items-center md:ml-[700px] md:w-[300px]  -md:mt-[200px] "></div>
        <Explainhome />
      </motion.div>
    </>
  );
};

export default Herosection;
