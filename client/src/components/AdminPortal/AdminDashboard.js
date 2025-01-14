import { motion } from "framer-motion";
import React from "react";
import { useSelector } from "react-redux";
// import Loader from '../components/Loader';
// import Success from '../components/Success';
// import Error from '../components/Error';

const AdminDashboard = () => {
  const adminState = useSelector((state) => state.loginAdminReducer);
  const { currentAdmin } = adminState;
  return (
    <>
      <motion.div
        className="bg-[#000000] md:h-full h-[800px]  "
        initial={{ opacity: 0 }}
        animate={{ opacity: 5 }}
        exit={{ opacity: 0 }}
      >
        <div className=" relative">
          <div className="">
            <img src="https://images.unsplash.com/photo-1636953056323-9c09fdd74fa6?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="" alt=" not found" />
          </div>
          <div className=" absolute inset-1">
            <div className="font-bold md:p-5 p-2  ">
              <div className="  md:my-20 font-Main my-10">
                <div className="md:flex md:flex-row flex-col md:space-y-0 space-y-10 md:justify-center">
                  <div className="md:w-full w-full md:px-0 px-  flex justify-center">
                    <div className="  p-7  backdrop-blur-md border-4 transition ease-in-out hover:shadow-2xl
                     hover:shadow-[#9bcd7ea2] border-[#d5d5d5] text-white flex flex-col gap-10 md:py-10 md:p-10 rounded-3xl  text-center text-2xl md:w-full w-full items-center">
                      <h1 className="md:text-5xl text-4xl text-[#5bdd7a]">
                        Admin Details
                      </h1>
                      <img
                        src="https://cdn2.iconfinder.com/data/icons/web-solid/32/user-512.png"
                        alt="Admin Icon"
                        className="w-[200px] bg-white rounded-full "
                      />
                      <div className="  flex justify-center">
                      <div className="w-full text-left  md:text-4xl text-2xl md:p-5">
                        <h1 className="text-[#ee5959]  ">
                          Official Name &nbsp;:&nbsp;{" "}
                         <span className="text-[#5bdd7a]">{currentAdmin.officialname}</span> 
                        </h1>
                        <h1 className="text-[#ee5959] mt-5">Admin ID &nbsp;:&nbsp; { "  "}
                        <span className="text-[#5bdd7a]">{currentAdmin._id}</span> </h1>

                        <h1 className="text-[#ee5959] mb-4 md:mb-2 mt-5">
                          Official Email &nbsp;:&nbsp;{" "}
                          <span className="text-[#5bdd7a]"> {currentAdmin.officialemail}</span>
                        </h1>
                      </div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default AdminDashboard;
