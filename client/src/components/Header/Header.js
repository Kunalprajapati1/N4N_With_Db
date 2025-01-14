import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import { motion } from "framer-motion";
import { RiMenuAddFill } from "react-icons/ri";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [signinModal, setsigninModal] = useState(false);

  return (
    <>
      {" "}
      <motion.div
        className="sticky top-0 z-50 bg-[#0000000f] "
        initial={{ opacity: 0 }}
        animate={{ opacity: 5 }}
        exit={{ opacity: 0 }}
      >
        <div className="bg-[#00000000] md:backdrop-blur-md  flex justify-between font-Main items-end md:px-10 px-7 md:py-0 py-2">
              <div className="   md:w-[80px]  w-1/5 ">
            <NavLink className=" md:w-[80px]  " to="/"> 
              <img
                className="md:w-[80px]   "
                src="../images/n4nn.jpg"
                alt="not valid"
                />

                 </NavLink>
            </div> 
          

          <div>
            <div className="md:flex hidden  md:mb-2 z-50 justify-center md:gap-10 items-center text-blue-700 text-lg ">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "   transition ease-in-out  font-Main  text-[#ffffff]   rounded-xl"
                    : null
                }
              >
                Home
              </NavLink>

              <div className="group relative inline-block">
                <h1
                  to=""
                  className="text-blue-700 inline-flex hover:bg-[#61a0e9] transition ease-in-out gap-2 hover:text-[#ffffff] font-Main items-center p-2  rounde"
                >
                  Need4Need <MdKeyboardArrowDown className="text-2xl" />
                </h1>
                <div className="font-Main  z-50  hidden absolute group-hover:block w-full">
                  <div className="bg-[#c6d7ff] group-hover:block flex flex-col text-center space-y-2  z-20 absolute rounded-bl-xl rounded-br-2xl ">
                    <NavLink
                      to="/About"
                      className={({ isActive }) =>
                        isActive
                          ? "   transition ease-in-out  font-Main  text-[#ffffff]  rounded-xl"
                          : null
                      }
                    >
                  <button className=" px-12 w-full hover:bg-[#61a0e962] mb-2 transition ease-in-out  " >

                    <h1 className="mt-3 w-full mb-2 text-blue-800 font-semibold   "> About </h1>
                     
                  </button>
                    </NavLink>
                    <NavLink
                      to="/services"
                      className={({ isActive }) =>
                        isActive
                          ? " mt-3  transition ease-in-out  font-Main  text-[#ffffff]   rounded-xl"
                          : null
                      }
                    >
                  <button className="  w-full hover:bg-[#61a0e96b] transition ease-in-out  " >
                      <h1 className="mb-2 mt-2 text-blue-800 font-semibold ">Services</h1>
                      </button>
                    </NavLink>
                    <NavLink
                      to="/Contact"
                      className={({ isActive }) =>
                        isActive
                          ? "   transition ease-in-out  font-Main  text-[#ffffff]   rounded-xl"
                          : null
                      }
                    >
                      <button className=" rounded-bl-xl rounded-br-2xl  w-full hover:bg-[#61a0e96e] transition ease-in-out  " >
                      <h1 className="mt-3 mb-2 text-blue-800 font-semibold  ">Contact</h1>
                    </button>
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="flex gap-6 justify-center items-center text-blue-400 text-lg font-semibold">
                {/* <NavLink to="/safety"
                className={({ isActive }) =>
                      isActive ? "   transition ease-in-out  font-Main  text-[#ffffff]   rounded-xl" : null
                    }>
                   
                    Safety
                   
                </NavLink> */}
                <button
                  onClick={() => setsigninModal(true)}
                  className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-blue-500 rounded-xl group"
                >
                
                  <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-blue-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                    <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-blue-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                  <span className="relative w-full text-left text-white transition-colors duration-200 font-Main ease-in-out group-hover:text-white">
                    Sign in
                  </span>

                
                </button>

                <button
                  onClick={() => setShowModal(true)}
                  className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-blue-500 rounded-xl group"
                >
                 
                  <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-blue-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                    <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-blue-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                  <span className="relative w-full text-left text-white transition-colors duration-200 font-Main ease-in-out group-hover:text-white">
                    Log in
                  </span>
                </button>
              </div>
            </div>

            {/* <div className="flex justify-between overflow-hidden bg-ellow-700   ">
              {!menu && (
                <RiMenuAddFill 
                  fontSize={28}
                  className="bg-blue-40 mb-3  rounded fill-white md:hidden cursor-pointer"
                  onClick={() => setMenu(true)}
                />
              )}
              {menu && (
                 <motion.div
                 className="  z-30    backdrop-blur-md fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-md md:hidden list-none
                 flex flex-col justify-start items-center rounded-md  text-white  animate-slide-in"
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 exit={{ opacity: 0 }}
               >
                <ul
                  className="z-30 bg-black filter  backdrop-blur-md fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-md md:hidden list-none
            flex flex-col justify-start items-center rounded-md   text-white animate-slide-in"
                >
                  <li className="text-xl  w-full my-3">
                    <AiOutlineClose
                      className="stroke-2 "
                      onClick={() => setMenu(false)}
                    />
                  </li>
                  <NavLink
                    to="/"
                    end
                    className={({ isActive }) =>
                      isActive ? "text-blue-400 font-black" : null
                    }
                  >
                    <li className="my-3 text-lg mx-4 font-semibold cursor-pointer hover:text-[#9be961]">
                      Home
                    </li>
                  </NavLink>
                  <NavLink
                            to="/About"
                            className={({ isActive }) => isActive ? 'text-light1 text-blue-400  ' : null }
                          >
                            <li className="cursor-pointer my-5   z-10 text-lg font-semibold hover:text-light2">
                              About Us
                            </li>
                          </NavLink>
                          <NavLink
                            to="/services"
                            className={({ isActive }) => isActive ? 'text-light1 text-blue-400 ' : null }
                          >
                            <li className="cursor-pointer my-5 text-lg mt-1 font-semibold hover:text-light2">
                              Services
                            </li>
                          </NavLink>
                          <NavLink
                            to="/Contact"
                            className={({ isActive }) => isActive ? 'text-light1 text-blue-400 ' : null }
                          >
                            <li className="cursor-pointer my-5 text-lg mt-1 font-semibold hover:text-light2">
                              Contact
                            </li>
                          </NavLink>
                  <div className="   flex flex-col ">
                    <button
                      onClick={() => setsigninModal(true)}
                      className="relative my-4 inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-blue-500 rounded-xl group"
                    >
                      <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-blue-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                      </span>
                      <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-blue-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                      <span className="relative w-full text-center  text-white transition-colors duration-200 font-Main ease-in-out group-hover:text-white">
                        Sign in
                      </span>
                    </button>

                    <button
                      onClick={() => setShowModal(true)}
                      className="relative my-4 inline-flex items-center   justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-blue-500 rounded-xl group"
                    >
                      <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-blue-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                      </span>
                      <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-blue-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                      <span className="relative w-full text-center  text-white transition-colors duration-200 font-Main ease-in-out group-hover:text-white">
                        Log in
                      </span>
                    </button>
                  </div>
                </ul>
                </motion.div>
              )}
            </div> */}
          <div className="flex justify-between overflow-hidden bg-ellow-700">
      {!menu && (
        <RiMenuAddFill 
          fontSize={28}
          className="bg-blue-40 mb-3 rounded fill-white md:hidden cursor-pointer"
          onClick={() => setMenu(true)}
        />
      )}
      {menu && (
        <motion.div
          className="z-30 backdrop-blur-md fixed top-0 right-0 p-3 w-[70vw] h-screen shadow-md md:hidden list-none
            flex flex-col justify-start items-center rounded-md text-white animate-slide-in"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <ul
            className="z-30 bg-black filter backdrop-blur-md fixed top-0 right-0 p-3 w-[70vw] h-screen shadow-md md:hidden list-none
            flex flex-col justify-start items-center rounded-md text-white animate-slide-in"
          >
            <li className="text-xl w-full my-3">
              <AiOutlineClose
                className="stroke-2"
                onClick={() => setMenu(false)}
              />
            </li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? "text-blue-400 font-black" : null
              }
              onClick={() => setMenu(false)}
            >
              <li className="my-3 text-lg mx-4 font-semibold cursor-pointer hover:text-[#9be961]">
                Home
              </li>
            </NavLink>
            <NavLink
              to="/About"
              className={({ isActive }) => isActive ? 'text-light1 text-blue-400' : null}
              onClick={() => setMenu(false)}
            >
              <li className="cursor-pointer my-5 z-10 text-lg font-semibold hover:text-light2">
                About Us
              </li>
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) => isActive ? 'text-light1 text-blue-400' : null}
              onClick={() => setMenu(false)}
            >
              <li className="cursor-pointer my-5 text-lg mt-1 font-semibold hover:text-light2">
                Services
              </li>
            </NavLink>
            <NavLink
              to="/Contact"
              className={({ isActive }) => isActive ? 'text-light1 text-blue-400' : null}
              onClick={() => setMenu(false)}
            >
              <li className="cursor-pointer my-5 text-lg mt-1 font-semibold hover:text-light2">
                Contact
              </li>
            </NavLink>
            <div className="flex flex-col">
              <button
                onClick={() => {
                  setsigninModal(true);
                  setMenu(false);
                }}
                className="relative my-4 inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-blue-500 rounded-xl group"
              >
                <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-blue-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                  <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                </span>
                <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-blue-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                <span className="relative w-full text-center text-white transition-colors duration-200 font-Main ease-in-out group-hover:text-white">
                  Sign in
                </span>
              </button>

              <button
                onClick={() => {
                  setShowModal(true);
                  setMenu(false);
                }}
                className="relative my-4 inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-blue-500 rounded-xl group"
              >
                <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-blue-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                  <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                </span>
                <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-blue-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                <span className="relative w-full text-center text-white transition-colors duration-200 font-Main ease-in-out group-hover:text-white">
                  Log in
                </span>
              </button>
            </div>
          </ul>
        </motion.div>
      )}
    </div>
          </div>

        </div>

        {/* Signin Modal */}
        {signinModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-transparent backdrop-blur-lg">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg relative flex flex-col w-full sm:w-[400px] md:w-[500px] lg:w-[600px] bg-[#ffffff] outline-none focus:outline-none">
                <button
                  className="px-3 mt-2 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => setsigninModal(false)}
                >
                  <AiOutlineClose className="fill-blue-400" />
                </button>
                <div className="flex justify-center border-b solid p-5">
                  <h3 className="text-3xl font-Main w-full text-center text-black">
                    Register Yourself as:
                  </h3>
                </div>
                <div className="relative md:flex justify-evenly text-xl md:mb-10 md:p-10 p-6 gap-10">
                  <NavLink to="/SignupDonator" onClick={() => setsigninModal(false)}>
                    <div className="bg-[white] transition ease-in-out flex gap-4 justify-center items-center hover:text-white hover:bg-black shadow-2xl hover:shadow-black hover:border-[white] rounded-2xl cursor-pointer shadow-black p-12 md:mt-0 md:p-12">
                      <h1 className="font-Main text-2xl w-full">Donator</h1>
                      <FaArrowRight className="mt-2" />
                    </div>
                  </NavLink>
                  <NavLink to="/SignupNGO" onClick={() => setsigninModal(false)}>
                    <div className="bg-[white] transition ease-in-out flex gap-4 justify-center items-center hover:text-white hover:bg-black shadow-2xl hover:shadow-black hover:border-[white] rounded-2xl cursor-pointer shadow-black p-12 mt-8 md:mt-0 md:p-12">
                      <h1 className="font-Main text-2xl w-full">NGO</h1>
                      <FaArrowRight className="mt-2" />
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      {/* Login Modal */}
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-transparent backdrop-blur-lg">
            <div className="relative w-auto my-6 mx-auto border-2 border-black max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full md:w-full bg-[#ffffff] outline-none focus:outline-none">
                <button
                  className="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => setShowModal(false)}
                >
                  <AiOutlineClose className="fill-blue-500" />
                </button>
                <div className="flex w-full justify-center text-center p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-Main text-center text-black font-semibold">
                    Log in as:
                  </h3>
                </div>
                <div className="relative md:flex justify-center text-xl md:p-10 p-10 gap-10">
                  <NavLink
                    className="transition ease-in-out"
                    to="/LoginDonator"
                    onClick={() => setShowModal(false)}
                  >
                    <div className="bg-[white] transition ease-in-out flex gap-4 justify-center items-center hover:text-white hover:bg-black shadow-2xl hover:shadow-black hover:border-[white] rounded-2xl cursor-pointer shadow-black p-12 md:mt-0 md:p-12">
                      <h1>Donator</h1>
                      <FaArrowRight />
                    </div>
                  </NavLink>
                  <NavLink
                    to="/LoginNgo"
                    onClick={() => setShowModal(false)}
                  >
                    <div className="bg-[white] transition ease-in-out shadow-2xl hover:shadow-black flex gap-4 justify-center items-center hover:text-white hover:bg-black hover:border-[white] rounded-2xl cursor-pointer shadow-black p-12 md:mt-0 mt-5 md:p-12">
                      <h1>NGO</h1>
                      <FaArrowRight />
                    </div>
                  </NavLink>
                  <NavLink
                    to="/AdminLogin"
                    onClick={() => setShowModal(false)}
                  >
                    <div className="bg-[white] transition ease-in-out shadow-2xl hover:shadow-black flex gap-4 justify-center items-center hover:text-white hover:bg-black hover:border-[white] rounded-2xl cursor-pointer shadow-black p-12 md:mt-0 mt-5 md:p-12">
                      <h1>Admin</h1>
                      <FaArrowRight />
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      </motion.div>{" "}
    </>
  );
};

export default Header;
