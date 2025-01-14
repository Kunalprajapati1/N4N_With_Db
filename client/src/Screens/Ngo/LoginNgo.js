import React, {useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { useNavigate  } from 'react-router-dom';
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { logNgo } from "../../actions/ngoActions";

const LoginNgo = () => {
   
  const [Ngoemail, setNgoemail] = useState("");
  const [Ngopassword, setNgopassword] = useState("");
  // let navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
  
    // Email validation using a regular expression
    const emailRegex = /\S+@\S+\.\S+/;

    if (!emailRegex.test(Ngoemail)) {
      toast.warn("Please enter a valid email address.", {
        position: "top-center",
      });
      return;
    }
  
    if (Ngoemail === "" || Ngopassword === "") {
      toast.warn("Please fill all the fields");
    } else {
      const ngo = { Ngoemail, Ngopassword };
      console.log(ngo);
      dispatch(logNgo(ngo)); //dispatch yaha pe store karane me help kr rha h
      setNgoemail(""); //dispactcher ka kam hota hai process ko initial se running state mai leke jaana
      setNgopassword("");
  
      // toast.success("Logged In successfully");
      // setTimeout(() => {
      //   history.push("/"); // Replace "/" with your desired route
      // }, 2000); // Adjust the timeout duration (in milliseconds) as needed
    }
  };
  
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = (event) => {
    event.preventDefault();
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <>
      <motion.div
        className="bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-gray-500 via-blue-500 to-indigo-900 md:-mt-20 -mt-20   "
        initial={{ opacity: 0 }}
        animate={{ opacity: 5 }}
        exit={{ opacity: 0 }}
      >
        <div className=" ">
          {/* <img
            src="https://images.unsplash.com/photo-1698728877137-963bca5b5310?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className=" h-full md:w-full "
            alt="not found"
          /> */}
          <div className="   flex justify-center inset-1 ">
            <div className="h-full   w-full  text-white ">
              <div className="h-full flex justify-center w-full ">
                <div className="flex  md:py-0 py-20  md:p-0 p-5 h-full md:h-1/2 w-full md:w-1/2 justify-center font-Main">
                  <div
                    id="aboutTop"
                    className="mt-36 md:mb-20 w-full backdrop-blur-lg border-2  h-full md:w-full md:p-20 "
                    style={{
                      border: "2px solid",
                      borderImage:
                        "linear-gradient(to right, #3498db, #ffffff)",
                      borderImageSlice: 1,
                      borderRadius: "45px",
                    }}
                  >
                    <form className=" md:p-0 p-10 w-full h-full " action="POST">
                      <div className=" ">
                        <h2 className=" text-center font-Main  text-2xl md:text-4xl text-[#dee0ff] tracking-tighter">
                          Login to your NGO Account
                        </h2>
                      </div>{" "}
                      <div className="md:mt-10 mt-20">
                        <div
                          className=" flex justify-center  relative mb-6"
                          data-te-input-wrapper-init
                        >
                          <input
                            type="email"
                            value={Ngoemail}
                            onChange={(e) => setNgoemail(e.target.value)}
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
                              value={Ngopassword}
                              onChange={(e) => setNgopassword(e.target.value)}
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
                            className=" w-full  transform delay-50 bg-[#96abf99b] ease-in inline-block rounded-full bg-primary border-2 md:hover:bg-[#96b1ffe4] px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                            data-te-ripple-init
                            data-te-ripple-color="light"
                          >
                            Login
                          </button>
                        </div>
                        <br />
                    <div className=" md:mt-[0px] flex justify-center w-full h-full  ">
                      <span className="  font-Main  text-[#f8fbff] tracking-tight">
                        <span>Don't have an account?</span>
                        <NavLink
                          to="/SignupNGO"
                          className="text-[#b6b6ff] hover:text-[#ff2424] gap-8 font-Main font- transition duration-200"
                        >
                          Sign Up
                        </NavLink>
                      </span>
                    </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <button
          className=" md:w-[100px] h-[40px] animate-pulse transform ease-in-out duration-300  shadow-[#76d46a] shadow-md md:hover:bg-blue-700 md:hover:text-white md:translate-x-[1350px] -mt-[80px] 
       rounded-full bg-[#23b668] absolute"
        >
          <NavLink to="/">
            <h1 className=" font-SourceSansPro font-semibold text-xl">Back</h1>
          </NavLink>
        </button> */}
      </motion.div>
      <ToastContainer />
    </>
  );
};

export default LoginNgo;
