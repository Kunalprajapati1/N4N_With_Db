import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import Explainhome from "./Explainhome";
import "react-toastify/dist/ReactToastify.css";
import Fade from "react-reveal/Fade";

const Ngomain = () => {
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
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  // const ZoomInScrollOut = batch(Sticky(),FadeOut(), ZoomOut());
  return (
    <>
      <motion.div
        className="  "
        initial={{ opacity: 0 }}
        animate={{ opacity: 6 }}
        exit={{ opacity: 0 }}
      >
        <div id="Top" className=" relative ">
          <div className="   ">
            <img
              src="https://images.unsplash.com/photo-1617791160505-6f00504e3519?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className=" opacity-65 bg-blend-overlay md:blur-0 md:w-full md:h-[700px]"
              alt=""
            />
          </div>
          <div className="  absolute   inset-1 ">
              <div className="relative mt-32 md:flex md:justify-center ">
                <div className=" md:p-0 p-3 ">
                  <h1 className="relative md:p-12 p-5 md:translate-y-0 -translate-y-[100px] z-10 md:w border-2 border-[#79b4b3] md:text-6xl md:h-[320px] md:w-[900px] rounded-xl md:rounded-3xl w-full  text-[#bca0de] md:text-[#b8b7e2] font-Main font-text-lg md:font-light text-center bg-[a571a540] filter backdrop-blur-md">
                  Unlock a powerful platform to unite and amplify your NGO's
                    social mission
                  </h1>
                  <div className="   flex justify-center w-full md:mt-[50px] -mt-[90px]">
                    <NavLink
                      to="/Ngoregister"
                      className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
                    >
                       <span className="font-Main w-full h-full bg-gradient-to-br from-[#0a5013] via-[#269819] to-[#706dde] group-hover:from-[#0403283c] group-hover:via-[#0b33073f] group-hover:to-[#3d58405c] group-hover:border-[#2265d0] group-hover:border-4 absolute"></span>
                  <span className="relative px-[10px] py-[5px] md:px-6 md:py-3 transition-all ease-out bg-[#030f07] rounded-md group-hover:bg-opacity-20 duration-400">
                        <span className="relative md:px-10 font-Main text-sm md:text-lg text-white">
                        Register your NGO
                        </span>
                      </span>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
         
        </div>

        <div className="  ">
          <div
            className={` z-50 scroll-to-top ${isVisible ? "visible" : ""}`}
            onClick={scrollToTop}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-9 h-9"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m4.5 18.75 7.5-7.5 7.5 7.5"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m4.5 12.75 7.5-7.5 7.5 7.5"
              />
            </svg>
          </div>
        </div>
        <Explainhome />
      </motion.div>
    </>
  );
};

export default Ngomain;
