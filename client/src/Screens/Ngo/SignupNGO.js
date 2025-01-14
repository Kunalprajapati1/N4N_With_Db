import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import tnc from "../../Data/TnC";
import { signNgo } from "../../actions/ngoActions";


const SignupNGO = () => {
  const ToTop = () => {
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

  const [Ngoname, setNgoname] = useState("");
  const [Ngoemail, setNgoemail] = useState("");
  const [NgoAddress, setNgoAddress] = useState("");
  const [NgoState, setNgoState] = useState("");
  const [NgoCity, setNgoCity] = useState("");
  const [NgoPincode, setNgoPincode] = useState("");
  const [Ngopassword, setNgopassword] = useState("");
  const [NgoPNumber, setNgoPNumber] = useState("");
  const [NgoaltPNumber, setNgoaltPNumber] = useState("");
  let navigate = useNavigate();

  const dispatch = useDispatch();

  const submitSignup = async (e) => {
    e.preventDefault();

    if (Ngoname.trim() === "" || Ngoemail.trim() === "" || NgoAddress.trim() === "" ||NgoState.trim() === "" ||NgoCity.trim() === "" ||NgoPincode.trim() === "" ||Ngopassword.trim() === "" ||NgoPNumber.trim() === ""||NgoaltPNumber.trim() === "" ) {
      toast.warn("Please fill out all required fields.", {
        position: "top-center",
      });
    } else {
      const ngo = { Ngoname,Ngoemail,NgoAddress, NgoState, NgoCity, NgoPincode,  Ngopassword,NgoPNumber,NgoaltPNumber };
      dispatch(signNgo(ngo));
      setNgoname("");
      setNgoemail("");
      setNgoAddress("");
      setNgoState("");
      setNgoCity("");
      setNgoPincode("");
      setNgopassword("");
      setNgoPNumber("");
      setNgoaltPNumber("");
      // toast.success("Account created successfully!", {
      //   position: "top-center",
      // });
      // navigate("/Entry");
    }
  };
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = (event) => {
    event.preventDefault();
    setIsPasswordVisible(!isPasswordVisible);
  };
   const handleClick = () => {
    Swal.fire({
      text: tnc.tnc,
      width: 800,
      customclassName: {
        text: "font-Main",
        text: "justify",
        title: "text-2xl font-Main font-bold text-blue-600",
        confirmButton:
          "bg-blue-500 font-Main hover:bg-blue-600 text-white font-bold py-2 px-4 rounded",
      },
      // icon: "warning",

      confirmButtonColor: "#3085d6",

      confirmButtonText: "Accept",
    });
  };

  return (
    <>
      <motion.div
        className="bg-[conic-gradient(var(--tw-gradient-stops))] from-blue-900 to-gray-400  h-full md:h-full md:-mt-20 -mt-20  "
        initial={{ opacity: 0 }}
        animate={{ opacity: 5 }}
        exit={{ opacity: 0 }}
      >
        <div className="   ">
          {/* <div className=" md:h-[900px] h-[1200px]  bg-blend-overlay w-full"></div> */}
          <div className="flex justify-center md:p-0  mt-0 p-3  md:inset-1">
            <div className=" z-10 md:mt-20 mt-20 md:bg-[#00000000] bg-[#6cbacf00] w-full h-full shadow-2xl hover:shadow-[#3d5378] rounded-3xl  border-2 border-[#ffffff65] hover:border-white transition duration-300 ease-in-out  backdrop-blur-xl md:w-[1000px] md:h-full overflow-hidden">
              <div className=" md:p-0 p- mx-auto">
                <div className="max-w-3xl mt-5  mx-auto">
                  <h2
                    className="font-Mainitalic text-center
                  md:text-4xl divide-red-500  md:p-10 p-3  text-3xl text-[#b4cefd] tracking-tighter"
                  >
                    Create your <span className=" font-Main ">NGO</span> account
                  </h2>
                  <p className="md:p font-Main text-center text-sm text-[#ffffff] tracking-tight">
                    Be the first one in this social and Nobel cause
                  </p>
                  <form className="flex font-Main flex-wrap md:p-0 p-3">
                    <div className="w-full md:w-1/2 p-3">
                      <label className="block">
                        <input
                          className="p-4 w-full text-[#ffffff] tracking-tight bg-[#f6f6f640]  placeholder:text-cyan-50 outline-none border border-gray-300 rounded-lg focus:border-indigo-500 transition duration-200"
                          id="signUpInput1-1"
                          type="text"
                          value={Ngoname}
                          onChange={(e) => setNgoname(e.target.value)}
                          required="TRUE"
                          placeholder="Organisation Name*"
                        />
                      </label>
                    </div>
                    <div className="w-full md:w-1/2 p-3">
                      <label className="block">
                        <input
                          className="p-4 w-full text-[#f0f7ff] tracking-tight bg-[#f6f6f640]  placeholder:text-cyan-50 outline-none border border-gray-300 rounded-lg focus:border-indigo-500 transition duration-200"
                          id="signUpInput1-2"
                          type="email"
                          value={Ngoemail}
                          required="TRUE"
                          onChange={(e) => setNgoemail(e.target.value)}
                          placeholder="Organisation Email Address*"
                        />
                      </label>
                    </div>
                    <div className="w-full md:w-1/2 p-3">
                      <label className="block">
                        <input
                          className="p-4 w-full text-[#ffffff] tracking-tight bg-[#f6f6f640]  placeholder:text-cyan-50 outline-none border border-gray-300 rounded-lg focus:border-indigo-500 transition duration-200"
                          id="signUpInput1-1"
                          type="text"
                          value={NgoAddress}
                          onChange={(e) => setNgoAddress(e.target.value)}
                          required="TRUE"
                          placeholder="Organisation Address*"
                        />
                      </label>
                    </div>
                    <div className="w-full md:w-1/2 p-3">
                      <label className="block">
                        <input
                          className="p-4 w-full text-[#f0f7ff] tracking-tight bg-[#f6f6f640]  placeholder:text-cyan-50 outline-none border border-gray-300 rounded-lg focus:border-indigo-500 transition duration-200"
                          id="signUpInput1-2"
                          type="text"
                          value={NgoState}
                          required="TRUE"
                          onChange={(e) => setNgoState(e.target.value)}
                          placeholder="Organisation State*"
                        />
                      </label>
                    </div>
                    <div className="w-full md:w-1/2 p-3">
                      <label className="block">
                        <input
                          className="p-4 w-full text-[#ffffff] tracking-tight bg-[#f6f6f640]  placeholder:text-cyan-50 outline-none border border-gray-300 rounded-lg focus:border-indigo-500 transition duration-200"
                          id="signUpInput1-1"
                          type="text"
                          value={NgoCity}
                          onChange={(e) => setNgoCity(e.target.value)}
                          required="TRUE"
                          placeholder="Organisation City*"
                        />
                      </label>
                    </div>
                    <div className="w-full md:w-1/2 p-3">
                      <label className="block">
                        <input
                          className="p-4 w-full text-[#f0f7ff] tracking-tight bg-[#f6f6f640]  placeholder:text-cyan-50 outline-none border border-gray-300 rounded-lg focus:border-indigo-500 transition duration-200"
                          id="signUpInput1-2"
                          type="number"
                          value={NgoPincode}
                          required="TRUE"
                          onChange={(e) => setNgoPincode(e.target.value)}
                          placeholder="Organisation Pincode*"
                        />
                      </label>
                    </div>
                    <div className="w-full md:w-1/2 p-3">
                      <input
                        className="p-4 w-full text-[#f0f7ff] tracking-tight bg-[#f6f6f640] placeholder:text-cyan-50 outline-none border border-gray-300 rounded-lg focus:border-indigo-500 transition duration-200"
                        type="number"
                        value={NgoPNumber}
                        required
                        onChange={(e) => setNgoPNumber(e.target.value)}
                        placeholder="Organisation Phone Number*"
                      />
                    </div>
                    <div className="w-full md:w-1/2 p-3">
                      <input
                        className="p-4 w-full text-[#f0f7ff] tracking-tight bg-[#f6f6f640] placeholder:text-cyan-50 outline-none border border-gray-300 rounded-lg focus:border-indigo-500 transition duration-200"
                        type="number"
                        value={NgoaltPNumber}
                        required
                        onChange={(e) => setNgoaltPNumber(e.target.value)}
                        placeholder="Alternative Phone Number*"
                      />
                    </div>
                    <div className="p-3 w-full">
                      <label className="block relative">
                        <input
                          className="p-4 w-full text-[#f0f7ff] tracking-tight bg-[#f6f6f640] placeholder:text-cyan-50 outline-none border border-gray-300 rounded-lg focus:border-indigo-500 transition duration-200"
                          type={isPasswordVisible ? "text" : "password"}
                          value={Ngopassword}
                          required
                          onChange={(e) => setNgopassword(e.target.value)}
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
                                    className="text-white text-sm md:text-md hover:text-[#ff6060]"
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
                        className=" translate-x-[10px] transform delay-50 bg-[#328cc141] ease-in inline-block rounded bg-primary border-2 md:hover:bg-[#73a9c8fe] px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                      >
                        Create Account
                      </button>
                      <br />
                    </div>
                    <span className=" md:p-0 p-3 font-Main md:mt-[10px] md:text-left text-center w-full h-full text-[#b1d1fa] tracking-tight">
                      <span>Already have an account?</span>
                      <button onClick={ToTop}>
                        <NavLink
                          to="/LoginNgo"
                          className="text-[#bfbffd] hover:text-[#ff6464] gap-8 font-Main font-bold transition duration-200"
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

export default SignupNGO;
