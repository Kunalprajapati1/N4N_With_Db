import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import tnc from "../../Data/TnC";
import { signupDonator } from "../../actions/donatorAction";

const SignupDonator = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const [Donatorname, setDonatorname] = useState("");
  const [DonatorEmail, setDonatorEmail] = useState("");
  const [Donatorpincode, setDonatorpincode] = useState("");
  const [Donatorphone, setDonatorphone] = useState("");
  const [Donatormessage, setDonatormessage] = useState("");
  const [DonatorPassword, setDonatorPassword] = useState("");
  const [DonatorConfirmpassword, setDonatorConfirmpassword] = useState("");
  // let navigate = useNavigate();

  const dispatch = useDispatch();

 const submitSignup = async (e) => {
  e.preventDefault();

  // Email validation using a regular expression
   const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(DonatorEmail)) {
    toast.warn("Please enter a valid email address.", {
      position: "top-center",
    });
    return;
  }

  // Phone number validation
  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(Donatorphone)) {
    toast.warn("Please enter a valid 10-digit phone number.", {
      position: "top-center",
    });
    return;
  }

  if (
    Donatorname.trim() === "" ||
    DonatorEmail.trim() === "" ||
    Donatorpincode.trim() === "" ||
    Donatorphone.trim() === "" ||
    DonatorPassword.trim() === ""||
    DonatorConfirmpassword.trim() === "" 
  ) {
    toast.warn("Please fill out all required fields.", {
      position: "top-center",
    });
  } else if (DonatorPassword !== DonatorConfirmpassword) {
    toast.error("Passwords do not match.");
  } else {
    const donator = {
      Donatorname,
      DonatorEmail,
      Donatorpincode,
      Donatorphone,
      Donatormessage,
      DonatorPassword,
      DonatorConfirmpassword,
    };
    dispatch(signupDonator(donator));
    setDonatorname("");
    setDonatorEmail("");
    setDonatorphone("");
    setDonatormessage("");
    setDonatorpincode("");
    setDonatorPassword("");
    setDonatorConfirmpassword("");
    // toast.success("Account created successfully!.", {
    //   position: "top-center",
    // });
    // navigate("/LoginDonator");
  }
};


  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = (event) => {
    event.preventDefault();
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleClick = (event) => {
    event.preventDefault();
    Swal.fire({
      text: tnc.tnc,
      width: 800,
      customclassName: {
        text: "font-Main justify",
        // text: "justify",
        title: "text-2xl font-Main font-Main text-blue-600",
        confirmButton:
          "bg-blue-500 font-Main hover:bg-blue-600 text-white font-Main py-2 px-4 rounded",
      },
      // icon: "warning",

      confirmButtonColor: "#3085d6",

      confirmButtonText: "Accept",
    });
  };

  return (
    <>
      <motion.div
        className=" bg-[conic-gradient(var(--tw-gradient-stops))] from-gray-900 via-gray-900 to-blue-900 md:-mt-20 -mt-20 h-[1000px] md:h-[850px] "
        initial={{ opacity: 0 }}
        animate={{ opacity: 5 }}
        exit={{ opacity: 0 }}
      >
        {/* <div className="  relative bg-[#00000032] md:w-full h-full shadow-2xl shadow-black"> */}
          {/* <div className="  h-full  md:opacity-90 bg-blend-overlay w-full"></div> */}
          <div className="flex justify-center md:p-0  mt-20 p-1 mb-2 absolute md:inset-1">
            <div className=" z-10 md:mt-10    md:bg-[#00000000] bg-[#6cbacf00] w-full h-full shadow-2xl hover:shadow-[#4c84e5] rounded-3xl border-2 border-[#ffffff65] hover:border-white transition duration-300 ease-in-out  backdrop-blur-xl md:w-2/3 md:h-full overflow-hidden">
              <div className=" md:p-0 p-3 mx-auto">
                <div className="max-w-3xl  mx-auto">
                  <h2
                    className="md:font-Main font-Main text-center
                  md:text-4xl divide-red-500  md:p-10 p-6 text-2xl text-[#5073ff] tracking-tighter"
                  >
                    Create your free account
                  </h2>
                  <p className="  font-Main text-center   text-sm text-[#ffffff] tracking-tight">
                    Be the first one in this social and Nobel cause
                  </p>
                  <form className="flex bg-yellw-500 font-Main mt-4 flex-wrap md:p-0 p-3" >
                    <div className="w-full md:w-1/2 p-3">
                      <label className="block">
                        <input
                          className="p-4 w-full text-[#72a2e1] tracking-tight bg-[#f6f6f640]  placeholder:text-cyan-50 outline-none border border-gray-300 rounded-lg focus:border-indigo-500 transition duration-200"
                          id="signUpInput1-1"
                          type="text"
                          value={Donatorname}
                          onChange={(e) => setDonatorname(e.target.value)}
                          required="TRUE"
                          placeholder="Name*"
                        />
                      </label>
                    </div>
                    <div className="w-full md:w-1/2 p-3">
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
                    <div className="w-full md:w-1/2 p-3">
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
                    <div className="w-full md:w-1/2 p-3">
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
                      <label className="block">
                        <input
                          className="p-4 w-full text-[#f0f7ff] tracking-tight bg-[#f6f6f640]  placeholder:text-cyan-50 outline-none border border-gray-300 rounded-lg focus:border-indigo-500 transition duration-200"
                          id="signUpInput1-2"
                          type="text"
                          value={Donatormessage}
                          required="TRUE"
                          onChange={(e) => setDonatormessage(e.target.value)}
                          placeholder="Any Message you want to Deliver"
                        />
                      </label>
                    </div>
                    <div className="w-full md:w-1/2 p-3">
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
                    <div className="w-full md:w-1/2 p-3">
                      <label className="block relative">
                        <input
                          className="p-4 w-full text-[#f0f7ff] tracking-tight bg-[#f6f6f640] placeholder:text-cyan-50 outline-none border border-gray-300 rounded-lg focus:border-indigo-500 transition duration-200"
                          type={isPasswordVisible ? "text" : "password"}
                          value={DonatorConfirmpassword}
                          required="TRUE"
                          
                          red
                          onChange={(e) => setDonatorConfirmpassword(e.target.value)}
                          placeholder="Confirm Password*"
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
                    <div className="w-full p-3">
                      <div className="relative flex p-px bg-transparent overflow-hidden rounded-lg">
                        <div className="inline-block text-sm md:text-md">
                          <div className="flex  items-justify">
                            <div className="">
                              <label
                                htmlFor="default-checkbox"
                                className="flex items-center cursor-pointer text-gray-200"
                              >
                                <input
                                  className="w-5 h-5 border border-gray-500 rounded mr-2.5"
                                  type="checkbox"
                                />

                                <span className="text-sm  w-full md:text-md">
                                  <button
                                    onClick={handleClick}
                                    className="text-white text-xs text-left md:text-md hover:text-[#ff6060]"
                                  >
                                    I agree to the Terms &amp; Conditions &amp;
                                    Privacy Policy
                                  </button>
                                </span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full flex justify-center p-3">
                      <button
                        type="button"
                        onClick={submitSignup}
                        className=" translate-x-[10px] transform delay-50 bg-[#328cc141] ease-in inline-block rounded bg-primary border-2 md:hover:bg-[#73a9c8fe] px-7 pb-2.5 pt-3 text-sm font-Main uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                      >
                        Create Account
                      </button>
                      <br />
                    </div>
                    <span className=" md:  p-3 font-Main md:mt-[x0px] md:text-left text-center w-full h-full text-[#b1d1fa] tracking-tight">
                      <span>Already have an account?</span>
                      <button onClick={scrollToTop}>
                        <NavLink
                          to="/LoginDonator"
                          className="text-[#bfbffd] hover:text-[#2c2e63] gap-8   font-Main transition duration-200"
                        >
                          {" "}
                          Log In
                        </NavLink>
                      </button>
                    </span>
                  </form>
                </div>
              </div>
            </div>
          </div>
        {/* </div> */}
        {/* <button
          className=" md:w-[100px] h-[40px] animate-pulse transform ease-in-out duration-300  shadow-[#76d46a] shadow-md md:hover:bg-blue-700 md:hover:text-white md:translate-x-[1350px] -mt-[80px] 
       rounded-full bg-[#23b668] absolute"
        >
          <NavLink to="/">
            <h1 className=" font-Main font-Main text-xl">Back</h1>
          </NavLink>
        </button> */}
      </motion.div>
      <ToastContainer />
    </>
  );
};

export default SignupDonator;
