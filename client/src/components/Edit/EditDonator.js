import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "sweetalert2/dist/sweetalert2.min.css";

import { deleteDonator, updateDonator, getDonatorById } from "../../actions/donatorAction";

const EditDonator = () => {

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = (event) => {
    event.preventDefault();
    setIsPasswordVisible(!isPasswordVisible);
  };

   

  const dispatch = useDispatch();

  const [Donatorname, setDonatorname] = useState("");
  const [DonatorEmail, setDonatorEmail] = useState("");
  const [Donatorphone, setDonatorphone] = useState("");
  const [DonatorPassword, setDonatorPassword] = useState("");
  const [Donatorpincode, setDonatorpincode] = useState("");

 
  const donatorState = useSelector((state) => state.loginDonatorReducer);
  const { currentDonator } = donatorState;

  const getDonatorByState = useSelector((state) => state.getDonatorByIdReducer);
  const { donator } = getDonatorByState;
  // const updatedonatorState = useSelector(state => state.updateDonatordByIdReducer);
  // const {updateloading,updateerror,updatesuccess} = updatedonatorState;

  useEffect(() => {
    if (donator) {
      if (donator._id === currentDonator._id) {
        setDonatorname(donator.Donatorname);
        setDonatorEmail(donator.DonatorEmail);
        setDonatorpincode(donator.Donatorpincode);
        setDonatorphone(donator.Donatorphone);
        setDonatorPassword(donator.DonatorPassword);
      } else {
        dispatch(getDonatorById(currentDonator._id));
      }
    } else {
      dispatch(getDonatorById(currentDonator._id));
    }
  }, [donator, dispatch, currentDonator._id]);

  const submitForm = (e) => {
    e.preventDefault();
    const updatedDonator = {
      _id: currentDonator._id,
      Donatorname,
      DonatorEmail,
      Donatorpincode,
      Donatorphone,
      DonatorPassword,
    };
    dispatch(updateDonator(updatedDonator));
  };

  const showDeleteAlert = () => {
    toast.dark(
      <>
      <div className=" text-center">
      <p>Are you sure you want to delete your account?</p>
      </div>
        <div className="flex items-center justify-center">
          {/* <p>Are you sure you want to delete your account?</p> */}
          <div className="">
          <div className="flex mt-4 justify-end ">
            <button
              onClick={() => {
                toast.dismiss();
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md mx-2"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                dispatch(deleteDonator(currentDonator._id));
                toast.dismiss();
                // Redirect or perform any action after deletion
              }}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
            >
              Delete
            </button>
          </div></div>
        </div>
      </>,
      {
        position: "top-center",
        autoClose: false,
        hideProgressBar: true,
        closeOnClick: false,
        draggable: true,
        progress: undefined,
      }
    );
  };
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 5 }}
        exit={{ opacity: 0 }}
         className=" bg-black h-[800px] md:h-full "
      >

      <div className="relative">
        <div className="">
          <img src="https://images.unsplash.com/photo-1618386230114-462340e82fc7?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="" alt="not found"/>
        </div>
        <div className="absolute inset-1">
        <div className="font-Main font-bold">
            <div>
              <h1 className="px-4 text-center text-gray-300 text-4xl md:text-5xl font-Main font-bold">
                {" "}
                Edit your Details{" "}
              </h1>
            </div>

            <div className="bg-[#ffffff00] backdrop-blur-md    rounded-xl md:px-10 ">
              <div>
                
                <div className="input">
                  <form
                    onSubmit={submitForm}
                    className="space-y-4 p-4 mt-6 md:space-y-6"
                  >
                    <div className="w-full md:w-full p-3">
                      <label className="block">
                        <input
                          className="p-4 w-full text-[#ffffff] tracking-tight bg-[#f6f6f640]  placeholder:text-cyan-50 outline-none border border-gray-300 rounded-lg focus:border-indigo-500 transition duration-200"
                          id="signUpInput1-1"
                          type="text"
                          value={Donatorname}
                          onChange={(e) => setDonatorname(e.target.value)}
                          required="TRUE"
                          placeholder="Name*"
                        />
                      </label>
                    </div>
                    <div className="w-full md:w-full p-3">
                      <label className="block">
                        <input
                          className="p-4 w-full text-[#f0f7ff] tracking-tight bg-[#f6f6f640]  placeholder:text-cyan-50 outline-none border border-gray-300 rounded-lg focus:border-indigo-500 transition duration-200"
                          id="signUpInput1-2"
                          type="email"
                          value={DonatorEmail}
                          required="TRUE"
                          onChange={(e) => setDonatorEmail(e.target.value)}
                          placeholder="Email Address*"
                        />
                      </label>
                    </div>
                    <div className="w-full md:w-full p-3">
                      <label className="block">
                        <input
                          className="p-4 w-full text-[#f0f7ff] tracking-tight bg-[#f6f6f640]  placeholder:text-cyan-50 outline-none border border-gray-300 rounded-lg focus:border-indigo-500 transition duration-200"
                          id="signUpInput1-2"
                          type="number"
                          value={Donatorpincode}
                          required="TRUE"
                          onChange={(e) => setDonatorpincode(e.target.value)}
                          placeholder="Pincode*"
                        />
                      </label>
                    </div>
                    <div className="w-full md:w-full p-3">
                      <label className="block">
                        <input
                          className="p-4 w-full text-[#f0f7ff] tracking-tight bg-[#f6f6f640]  placeholder:text-cyan-50 outline-none border border-gray-300 rounded-lg focus:border-indigo-500 transition duration-200"
                          id="signUpInput1-2"
                          type="number"
                          value={Donatorphone}
                          required="TRUE"
                          onChange={(e) => setDonatorphone(e.target.value)}
                          placeholder="Phone Number*"
                        />
                      </label>
                    </div>
                    <div className="w-full md:w-full p-3">
                      <label className="block relative">
                        <input
                          className="p-4 w-full text-[#f0f7ff] tracking-tight bg-[#f6f6f640] placeholder:text-cyan-50 outline-none border border-gray-300 rounded-lg focus:border-indigo-500 transition duration-200"
                          type={isPasswordVisible ? "text" : "password"}
                          value={DonatorPassword}
                          required="TRUE"
                          onChange={(e) => setDonatorPassword(e.target.value)}
                          placeholder="Password*"
                        />
                         <button
                          className="absolute right-4 top-1/2 transform -translate-y-1/2"
                          onClick={togglePasswordVisibility}
                        >
                          {isPasswordVisible ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              className="text-[#f0f7ff] w-6 h-6"
                            >
                              {/* Eye icon for showing password */}
                               <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                              />
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                              /> 
                             </svg>
                          ) : ( 
                             <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              className="text-[#f0f7ff] w-6 h-6"
                            >
                              Closed eye icon for hiding password
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                              />
                            </svg> 
                           )}
                        </button>   
                      </label>
                    </div>
                    
                   
                  <button
                      type="submit"
                      className="w-full bg-blue-600 text-white bg-primary-600 hover:bg-blue-700 transition ease-in-out focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      Update an account
                    </button>
                  
                  </form>
                  <button
          onClick={showDeleteAlert}
          className="w-full bg-red-500 text-white bg-primary-600 hover:bg-red-700 transition ease-in-out focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Delete an account
        </button>
                </div>
                <div className="md:px-36 flex justify-center p-6">
                  <button className="font-Main">
                    <NavLink
                      to="/"
                      className="inline-flex px-4 items-center justify-center  h-10 md:w-[150px] text-md font-semibold text-center text-[#ffffff] no-underline align-middle transition-all duration-300 ease-in-out   bg-transparent border-2 border-blue-600 border-solid rounded-full cursor-pointer select-none   hover:border-[#4166cd] focus:shadow-xs focus:no-underline"
                    >
                      Go to Home
                    </NavLink>
                  </button>
                </div>
              </div>
            </div>
          </div>
        
        </div>
      </div>
         
         
      </motion.div>
      <ToastContainer />
    </>
  );
};

export default EditDonator;
