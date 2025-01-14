import React from "react";
import { motion } from "framer-motion";

import { NavLink } from "react-router-dom";
 

const HomeScreen = () => {
  return (
    <>
      <motion.div
        className=" bg-[#000000c5]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 5 }}
        exit={{ opacity: 0 }}
      >
        <div
          className="md:h-screen h-full bg-blend-overlay"
          style={{
            backgroundImage:
              "url(images/pngtree-light-blue-summer-nice-background-stock-photo-image-pngtree-image_738449.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
        {/* <Header/> */}
          <div className="flex flex-col md:gap-28 w-full">
            <hr className="border-4 border-[#22c55e]" />
            <div className="flex md:flex-row flex-col justify-center px-4 md:px-10">
              <div className="md:w-1/2 w-full md:py-0 py-10 flex justify-center items-center">
              <img
                className="w-full"
                src="images/t.jpg"
                alt="hello"
              />
              </div>
              <div className=" font-Main md:w-1/2 w-full">
                <h1 className="font-bold text-center text-5xl">
                  Book your first Ride with
                </h1>
                <h2 className="text-blue-800 font-bold py-7 text-center text-6xl md:text-7xl">
                  {" "}
                  Book-n-Go
                </h2>
                <h2 className="text-blue-800 font-bold text-center text-2xl">
                  {" "}
                  Always there whenever you needed
                </h2>
                <div className="gap-20 md:py-20 py-10 flex justify-center">
                  <NavLink
                    to="/LoginFirst"
                    className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 border-blue-500 bg-[#33d1334b] font-medium border-blue-00 text-blue-600"
                  >
                    <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-blue-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                    <span className="relative text-blue-600 transition duration-300 font-Main font-bold group-hover:text-white ease">
                      See all the Rides
                    </span>
                  </NavLink>
                  <NavLink
                    to="/AboutUs"
                    className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 border-blue-500 bg-[#33d1334b] font-medium border-blue-00 text-blue-600"
                  >
                    <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-blue-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>

                    <span className="relative text-blue-600 transition duration-300 font-Main font-bold group-hover:text-white ease">
                      {" "}
                      Learn about Book-n-Go
                    </span>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      
    </>
  );
};

export default HomeScreen;
