import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signupDonator } from "../../actions/donatorAction";
import { MdCloseFullscreen } from "react-icons/md";

const DonateDirect = () => {
  const dispatch = useDispatch();

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
  // const [isHovered, setIsHovered] = useState(false);

  const [imageVisible, setImageVisible] = useState(false);

  const handleButtonClick = () => {
    setImageVisible(!imageVisible);
  };

  const handleCloseButtonClick = () => {
    setImageVisible(false);
  };

  const [Donatorname, setDonatorname] = useState("");
  const [DonatorEmail, setDonatorEmail] = useState("");
  const [Donatorpincode, setDonatorpincode] = useState("");
  const [Donatorphone, setDonatorphone] = useState("");
  const [Donatormessage, setDonatormessage] = useState("");
  const [DonatorPassword, setDonatorPassword] = useState("");
  const [DonatorConfirmpassword, setDonatorConfirmpassword] = useState("");
  // let navigate = useNavigate();

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
      DonatorPassword.trim() === "" ||
      DonatorConfirmpassword.trim() === ""
    ) {
      toast.warn("Please fill out all required fields.", {
        position: "top-center",
      });
    } else if (DonatorPassword !== DonatorConfirmpassword) {
      toast.error("Keys do not match.");
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

  return (
    <>
      <motion.div
        className="bg-[conic-gradient(var(--tw-gradient-stops))] from-gray-900 via-blue-600 to-gray-700 md:h-full h-[1000px] md:-mt-20 -mt-20  relative  "
        initial={{ opacity: 0 }}
        animate={{ opacity: 6 }}
        exit={{ opacity: 0 }}
      >
        {/* <div className=" "> */}
        <div className=" relative">
          <img
            src="https://images.unsplash.com/photo-1511149521648-612cb6799f07?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className=" w-full md:h-1/2 "
            alt="not found"
          />
        </div>
        <div className=" absolute inset-1 md:flex justify-between">
          {/* <div className=" flex justify-center  "> */}
          <div className=" md:p-20 md:mt-0 mt-7 md:flex justify-between   ">
            <div className=" md:p-20   backdrop-blur-md  rounded-3xl   ">
              <h2 className="md:p-0 p-3 mt-20 md:mt-10 font-Main text-blue-400 text-xl  text-center   font-semibold md:text-4xl title-font">
                Donate Food -{" "}
              </h2>
              <h2 className="md:p-0 p-3 font-Main text-blue-400 text-lg  text-center   font-semibold md:text-lg title-font">
                Give us all your necessary details and the nearest NGO will come
                to pick your remaining food.
              </h2>
              <div className=" md:mt-20 md:p-0  p-7 flex justify-center">
                <button
                  className="w-full border-2 border-blue-700 hover:bg-blue-400 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-700 transition ease-in-out bg-[#1b1b846e] md:p-4 rounded-2xl font-Main text-white text-lg p-3 md:text-xl"
                  onClick={handleButtonClick}
                >
                  Click me to help a Poor
                </button>

                {imageVisible && (
                  <div className="z-50 fixed md:mt-0 mt-52  first-letter: top-0 left-0 w-full h-full flex items-center justify-center bg-white md:bg-[#000000]  ">
                    <div className="relative bg-black py-24 transition-all z-50 duration-500 ease-in-out transform scale-100">
                      <div className=" flex justify-between">
                      <h1 className=" md:px-10  rounded-3xl md:text-lg text-white text-center">
                        Scan for the minimum donation amount to maximize the
                        impact on social causes
                      </h1>
                      <button
                        onClick={handleCloseButtonClick}
                        className="absolute top-4 right-4 text-white text-xl cursor-pointer"
                      >
                        <MdCloseFullscreen />
                      </button>

                        </div>
                      

                      <div className=" md:p-10 p-10  flex justify-center">
                        <img
                          src="images/upi_1694167014482.png"
                          className="shadow-2xl   shadow-[#21353c2a] bg-[#d2d0d0a9] rounded-3xl"
                          alt="not found"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className=" py-0   w-full h-full  ">
              <div className=" md:backdrop-blur-md  -z-30 rounded-4xl md:bg-[#2a1c970b] transition ease-in-out   hover:shadow-pik-400 shadow-2xl dark:border   dark:border-gray-700">
                <div className=" p-3 md:p-8">
                  <form className="flex font-Main flex-wrap md:p-5 p-3">
                    <div className="w-full md:w-full p-3">
                      <label className="block">
                        <input
                          className="p-3 w-full text-[#ffffff] tracking-tight bg-[#f6f6f640]  placeholder:text-cyan-50 outline-none border border-gray-300 rounded-lg focus:border-indigo-500 transition duration-200"
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
                          className="p-3 w-full text-[#f0f7ff] tracking-tight bg-[#f6f6f640]  placeholder:text-cyan-50 outline-none border border-gray-300 rounded-lg focus:border-indigo-500 transition duration-200"
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
                          className="p-3 w-full text-[#f0f7ff] tracking-tight bg-[#f6f6f640]  placeholder:text-cyan-50 outline-none border border-gray-300 rounded-lg focus:border-indigo-500 transition duration-200"
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
                          className="p-3 w-full text-[#f0f7ff] tracking-tight bg-[#f6f6f640]  placeholder:text-cyan-50 outline-none border border-gray-300 rounded-lg focus:border-indigo-500 transition duration-200"
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
                          className="p-3 w-full text-[#f0f7ff] tracking-tight bg-[#f6f6f640]  placeholder:text-cyan-50 outline-none border border-gray-300 rounded-lg focus:border-indigo-500 transition duration-200"
                          id="signUpInput1-2"
                          type="text"
                          value={Donatormessage}
                          required="TRUE"
                          onChange={(e) => setDonatormessage(e.target.value)}
                          placeholder="Any Message you want to Deliver"
                        />
                      </label>
                    </div>
                    <div className="w-full md:w-full p-3">
                      <label className="block relative">
                        <input
                          className="p-3 w-full text-[#f0f7ff] tracking-tight bg-[#f6f6f640] placeholder:text-cyan-50 outline-none border border-gray-300 rounded-lg focus:border-indigo-500 transition duration-200"
                          type={isPasswordVisible ? "text" : "password"}
                          value={DonatorPassword}
                          required="TRUE"
                          onChange={(e) => setDonatorPassword(e.target.value)}
                          placeholder="Create your Unique Key eg: #5642qwe@ for future reference*"
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
                    <div className="w-full md:w-full p-3">
                      <label className="block relative">
                        <input
                          className="p-3 w-full text-[#f0f7ff] tracking-tight bg-[#f6f6f640] placeholder:text-cyan-50 outline-none border border-gray-300 rounded-lg focus:border-indigo-500 transition duration-200"
                          type={isPasswordVisible ? "text" : "password"}
                          value={DonatorConfirmpassword}
                          required="TRUE"
                          red
                          onChange={(e) =>
                            setDonatorConfirmpassword(e.target.value)
                          }
                          placeholder="Re-write your Unique Key*"
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

                    <div className="w-full flex justify-center p-3">
                      <button
                        type="button"
                        onClick={submitSignup}
                        className="  w-full rounded-full transform delay-50 bg-[#328cc141] ease-in inline-block bg-primary border-2 md:hover:bg-blue-700 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                      >
                        <h1 className=" font-Main">
                        Donate

                        </h1>
                      </button>
                      <br />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* </div> */}
            {/* </div> */}
          </div>
        </div>

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
      </motion.div>
      <ToastContainer />
    </>
  );
};

export default DonateDirect;
