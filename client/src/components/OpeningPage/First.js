import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import Fade from "react-reveal/Fade";
const First = () => {
  const scrollToTop = () => {
    const aboutTopElement = document.getElementById('aboutTop');
    if (aboutTopElement) {
      aboutTopElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <motion.div
        className="bg-[#000002]  md:-mt-20  w-full md:h-full h-full "
        initial={{ opacity: 0 }}
        animate={{ opacity: 6 }}
        exit={{ opacity: 0 }}
      >
        <div className=" bg-black ">
          <div className="">
            {/* <img
              src="https://images.unsplash.com/photo-1510906594845-bc082582c8cc?q=80&w=2044&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className=" md:h-[750px] w-full "
              alt="not found"
            /> */}
          </div>

          <div className=" w-full h-screen bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black md:p-0 p-3  -mt-[80px] md:mt-0  ">
            <div className="flex justify-center ">
             
            <div className="  md:mb-20 md:mt-28 mt-20 font-Main w-full md:w-2/3 md:rounded-3xl duration-300 md:p-16 p-7  filter backdrop-blur-md " >
                <h1 className="md:text-4xl text-white text-3xl text-center">
                  <Fade>
                    Please tell us Who <h2>are you before moving forward :)</h2>
                  </Fade>
                </h1>

                <div className="  ">
                  <div className=" md:flex justify-center mt-20 gap-10  ">
                    <div className=" text-center  w-full    rounded-full   ">
                    <button onClick={scrollToTop}>
                      <NavLink
                        to="/Ngoregister"
                        className="relative  transition ease-in-out bg-[#c0bccf4b] hover:bg-[#c0bccf71]  shadow-black inline-flex items-center hover:shadow-xl   md:h-[175px]  justify-center   overflow-hidden font-semibold text-white w-full rounded-2xl shadow-2xl group"
                      >
                        <h1 className="p-12   text-center md:text-2xl text-xl font-Main relative">
                         Connection with NGO
                        </h1>
                      </NavLink>

                    </button>
                    </div>
                    <div className=" text-center md:mt-0 mt-16  w-full   rounded-full  ">
                    <button onClick={scrollToTop}>
                    <NavLink
                        to="/DonateDirect"
                        className="relative transition ease-in-out bg-[#c0bccf4a] hover:bg-[#c0bccf71] shadow-black inline-flex items-center hover:shadow-xl  md:h-[175px]  justify-center md:py-0 py-6  overflow-hidden font-semibold text-white w-full rounded-2xl shadow-2xl group"
                      >
                        <h1 className="p-5 text-center md:text-2xl text-xl font-Main relative">
                        Donate without Registering
                        </h1>
                      </NavLink>
                      {/* <NavLink
                        to="/DonateDirect"
                        className="relative border-2 border-[#a2a1a1] hover:bg-[#94c0d919] transition ease-in-out bg-[#c0bccf4a]  shadow-black inline-flex items-center hover:shadow-xl hover:shadow-[#7396b3cb]  hover:-translate-y-10      justify-center  overflow-hidden font-bold text-white w-full rounded-2xl shadow-2xl group"
                      >
                        <h1 className="p-8  text-center md:text-3xl text-xl font-Main relative">
                         Donate without Registering
                        </h1>
                      </NavLink> */}

                    </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className=" w-full md:w-[300px]  bg-yellow-500 md:p-0 p-8"> */}

        {/* </div> */}
      </motion.div>
    </>
  );
};

export default First;
