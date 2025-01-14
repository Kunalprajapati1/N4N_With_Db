import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import { motion } from "framer-motion";
import { HiMenuAlt4 } from "react-icons/hi";
import { logoutAdmin } from "../../actions/adminAction";
import { CgProfile } from "react-icons/cg";
import { useDispatch } from "react-redux";

const AdminHeader = () => {
  const [menu, setMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [signinModal, setsigninModal] = useState(false);
  const dispatch = useDispatch();
  return (
    <>
      {" "}
      <motion.div
        className="bg-gradient-to-r from-[#008232e9] from-0% via-[#00823250] via-50% to-emerald-500 to-90%"
        initial={{ opacity: 0 }}
        animate={{ opacity: 5 }}
        exit={{ opacity: 0 }}
      >
        <div className="bg-[#000000ff] flex justify-end font-Main items-end md:px-10 px-5 py-4">
          {/* <div>
            <NavLink to="/">
              <img
                className="md:w-1/4 w-1/3"
                src="../images/Black_and_blue_Modern_Automotive_Logo__1_-removebg-preview.png"
                alt="not valid"
              />
            </NavLink>
          </div> */}

          <div>
          <div className="md:flex hidden justify-center md:gap-10 items-center text-blue-400 text-lg font-bold">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "   transition ease-in-out font-bold font-Main  text-[#ffffff]   rounded-xl"
                    : null
                }
              >
                Admin Dashboard
              </NavLink>
              <NavLink
                to="/DonatorsList"
                className={({ isActive }) =>
                  isActive
                    ? "   transition ease-in-out font-bold font-Main  text-[#ffffff]   rounded-xl"
                    : null
                }
              >
                {" "}
                View Donators
              </NavLink>

              <div className="flex gap-10  justify-center items-center text-blue-400 text-lg font-semibold">
                <NavLink
                  to="/AdminNgoList"
                  className={({ isActive }) =>
                    isActive
                      ? "   transition ease-in-out font-bold font-Main  text-[#ffffff]   rounded-xl"
                      : null
                  }
                >
                  View NGOs
                </NavLink>
                <div className="group relative inline-block">
                <button
                  
                  className="text-blue-400 inline-flex hover:bg-[#9be961] transition ease-in-out gap-2 hover:text-[#000000] font-Main items-center py-2 px-5 rounded-xl"
                >
                  Add New<MdKeyboardArrowDown className="text-2xl" />
                </button>
                <div className="font-Main hidden absolute group-hover:block w-full">
                  <div className="bg-[#153619] group-hover:block flex flex-col text-center p-4 space-y-2  z-20 absolute rounded-bl-xl rounded-br-2xl ">
                    <NavLink to="/AddDonator"
                    className={({ isActive }) =>
                      isActive ? "   transition ease-in-out font-bold font-Main  text-[#ffffff] px-6   rounded-xl" : " px-6"
                    }>  Donator
                       
                    </NavLink>
                    <br/>
                    <NavLink to="/AddNgo"
                    className={({ isActive }) =>
                      isActive ? "   transition ease-in-out font-bold font-Main  text-[#ffffff]   rounded-xl" : null
                    }>
                    <button className="mt-3">
                       NGO
                    </button>
                        
                    </NavLink> 
                    
                  </div>
                </div>
              </div>
              </div>
              <button
                        onClick={() => {
                          dispatch(logoutAdmin());
                        }}
                        className=" p-2 hover:bg-red-700   hover:shadow-inner tranition ease-in-out bg-red-500"
                      >
                        <span className="relative  text-left text-white transition-colors duration-200 font-Main ease-in-out group-hover:text-white">
                          Logout
                        </span>
                      </button>
            </div>
            

            <div className="flex relative">
              {!menu && (
                <HiMenuAlt4
                  fontSize={28}
                  className="bg-blue-400 rounded fill-white md:hidden cursor-pointer"
                  onClick={() => setMenu(true)}
                />
              )}
              {menu && (
                <ul
                  className="z-50 bg-black/70 backdrop-blur-md fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-md md:hidden list-none
            flex flex-col justify-start items-center rounded-md blue-glassmorphism text-white animate-slide-in"
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
                  >
                    <li className="my-3 text-lg mx-4 font-semibold cursor-pointer hover:text-[#9be961]">
                      Admin Dashboard
                    </li>
                  </NavLink>
                  <NavLink
                    to="/DonatorsList"
                    className={({ isActive }) =>
                      isActive ? "text-blue-400 font-bold" : null
                    }
                  >
                    <li className="my-3 text-lg mx-4 font-semibold cursor-pointer hover:text-[#9be961]">
                      View Donators
                    </li>
                  </NavLink>
                  <NavLink
                    to="/AdminNgoList"
                    className={({ isActive }) =>
                      isActive ? "text-blue-400 font-bold" : null
                    }
                  >
                    <li className="my-3 text-lg mx-4 font-semibold cursor-pointer hover:text-[#9be961]">
                      View NGOs
                    </li>
                  </NavLink>

                   
                    <li className="group my-3 relative inline-block cursor-pointer text-lg font-semibold hover:text-light2">
                      <span className="flex flex-row gap-2 justify-center">
                        <button className="inline-flex outline-none pb-2 focus:outline-none">
                          Add
                        </button>
                        <MdKeyboardArrowDown className="text-2xl" />
                      </span>
                      <div className="bg-teal-900 z-50 w-36 text-center border-solid border-2 border-white/10 shadow-gray-400/50 shadow-md rounded absolute p-3  hidden group-hover:block">
                        <ul className="text-white">
                           
                          <NavLink
                            to="/AddDonator"
                            className={({ isActive }) => isActive ? 'text-light1 font-bold' : null }
                          >
                            <li className="cursor-pointer text-lg mt-1 font-semibold hover:text-light2">
                              Donator
                            </li>
                          </NavLink>
                          <NavLink
                            to="/AddNgo"
                            className={({ isActive }) => isActive ? 'text-light1 font-bold' : null }
                          >
                            <li className="cursor-pointer text-lg mt-1 font-semibold hover:text-light2">
                             NGO
                            </li>
                          </NavLink>
                        </ul>
                      </div>
                    </li>
                   

                  <div className=" flex flex-col ">
                     
                    <button
                      onClick={() => {
                        dispatch(logoutAdmin());
                      }}
                      className="relative my-4 inline-flex items-center   justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-blue-500 rounded-xl group"
                    >
                      <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-blue-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                      </span>
                      <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-blue-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                      <span className="relative w-full text-center font-bold text-white transition-colors duration-200 font-Main ease-in-out group-hover:text-white">
                        Log Out
                      </span>
                    </button>
                  </div>
                </ul>
              )}
            </div>
          </div>
        </div>

       
      </motion.div>{" "}
    </>
  );
};

export default AdminHeader;
