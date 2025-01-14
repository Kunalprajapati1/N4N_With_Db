import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loginDonator } from "../../actions/donatorAction";
import { NavLink } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LoginDonator() {
  const [DonatorEmail, setDonatorEmail] = useState("");
  const [DonatorPassword, setDonatorPassword] = useState("");
  // let navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();

    // Email validation using a regular expression
    const emailRegex = /\S+@\S+\.\S+/;

    if (!emailRegex.test(DonatorEmail)) {
      toast.warn("Please enter a valid email address.", {
        position: "top-center",
      });
      return;
    }

    if (DonatorEmail === "" || DonatorPassword === "") {
      toast.warn("Please fill all the fields");
    } else {
      const donator = { DonatorEmail, DonatorPassword };
      console.log(donator);
      dispatch(loginDonator(donator)); //dispatch yaha pe store karane me help kr rha h
      setDonatorEmail(""); //dispactcher ka kam hota hai process ko initial se running state mai leke jaana
      setDonatorPassword("");

      // toast.success("Logged In successfully");
      // navigate("/");
    }
  };
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = (event) => {
    event.preventDefault();
    setIsPasswordVisible(!isPasswordVisible);
  };

  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
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

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <motion.div
        className=" bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-gray-900 via-blue-400 to-gray-900 md:h-full md:w-full -mt-20 md:-mt-20 "
        initial={{ opacity: 0 }}
        animate={{ opacity: 5 }}
        exit={{ opacity: 0 }}
      >
        {/* <div className=" "> */}
          {/* <img
            src="https://images.unsplash.com/photo-1496172664771-19198187b28f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className= " md:w-full  "
            alt="not found"
          /> */}
          <div className=" h-full  md:p-0 p-5 md:py-0 py-36   flex justify-center ">
            {/* <div className="w-full  text-white "> */}
              {/* <div className=" flex justify-center w-full "> */}
                {/* <div className="flex justify-center font-Main"> */}
                  <div className=" mt-24 md:mb-10 border-2 border-gray-500 hover:border-white transition ease-in-out delay-100  backdrop-blur-lg rounded-3xl h-full      ">
                    <form className=" md:p-28 p-6 ">
                      <div id="aboutTop" className=" ">
                        <h2 className=" text-center font-Main  text-2xl md:text-3xl text-[#6976ff] tracking-tighter">
                          Login to your donating Account
                        </h2>
                      </div>{" "}
                      <div className="mt-10 md:mt-10">
                        <div
                          className=" flex justify-center  relative mb-6"
                          data-te-input-wrapper-init
                        >
                          <input
                            type="email"
                            value={DonatorEmail}
                            onChange={(e) => setDonatorEmail(e.target.value)}
                            className="md:p-4 p-3  text-[#ffffff] tracking-tight  w-full h-full bg-[#ffffff49] md:w-[500px] placeholder:text-white outline-none border border-gray-200 rounded-lg focus:border-blue-500 transition duration-200"
                            placeholder="Email address*"
                          />
                          <label
                            htmlhtmlhtmlfor="exampleFormControlInput2"
                            className="pointer-events-none absolute  left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                          ></label>
                        </div>
                        <div
                          className="  flex justify-center  relative mb-6"
                          data-te-input-wrapper-init
                        >
                          <label className="w-full md:w-[500px] block relative">
                            <input
                              type={isPasswordVisible ? "text" : "password"}
                              value={DonatorPassword}
                              onChange={(e) =>
                                setDonatorPassword(e.target.value)
                              }
                              className="md:p-4 p-3 w-full h-full  text-[#ffffff] tracking-tight - bg-[#ffffff49] md:w-[500px] placeholder:text-white outline-none border border-gray-200 rounded-lg focus:border-blue-500  transition duration-200"
                              id="exampleFormControlInput22"
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
                                  {/* Closed eye icon for hiding password */}
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
                        <div className=" flex justify-center w-full md:p-3">
                          <button
                            type="button"
                            onClick={submitHandler}
                            className="  transform delay-50 bg-[#46688a9b] ease-in inline-block rounded bg-primary border-2 md:hover:bg-[#273c2d9b] px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                            data-te-ripple-init
                            data-te-ripple-color="light"
                          >
                            Login
                          </button>
                        </div>
                        <br />
                      </div>
                    <div className="flex  justify-center w-full h-full  ">
                      <span className="  font-medium text-[#f8fbff] tracking-tight">
                        <span>Don't have an account?</span>
                        <NavLink
                          to="/SignupDonator"
                          className="text-[#a0a0ff] hover:text-[#6224ff] gap-8 font-Main font- transition duration-200"
                        >
                          {" "}
                          Sign Up
                        </NavLink>
                      </span>
                    </div>
                    </form>
                  </div>
                {/* </div> */}
              {/* </div> */}
            {/* </div> */}
          </div>
        {/* </div> */}
      </motion.div>
      <ToastContainer />
    </>
  );
}

export default LoginDonator;
