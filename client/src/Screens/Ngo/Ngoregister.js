import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signNgo } from "../../actions/ngoActions";
import Fade from "react-reveal/Fade";


const   Ngoregister = () => {

  
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
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
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
  const [NgoComment, setNgoComment] = useState("");
  // let navigate = useNavigate();

  const dispatch = useDispatch();

  const submitSignup = async (e) => {
    e.preventDefault();

    if (Ngoname.trim() === "" || Ngoemail.trim() === "" || NgoAddress.trim() === "" ||NgoState.trim() === "" ||NgoCity.trim() === "" ||NgoPincode.trim() === "" ||Ngopassword.trim() === "" ||NgoPNumber.trim() === ""||NgoaltPNumber.trim() === "" ) {
      toast.warn("Please fill out all required fields.", {
        position: "top-center",
      });
    } else {
      const ngo = { Ngoname,Ngoemail,NgoAddress, NgoState, NgoCity, NgoPincode,  Ngopassword,NgoPNumber,NgoaltPNumber,NgoComment };
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
      setNgoComment("");
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
  
  return (
    <>
      <motion.div
        className=" md:-mt-20  -mt-20 relative md:h-[500px] h-[1400px] bg-[#030103]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 6 }}
        exit={{ opacity: 0 }}
      >
     

        {/* <div className="  font-Main  w-full h-full shadow-2xl "> */}
          <div className=" relative ">
         
            <img
              src="https://images.unsplash.com/photo-1625685553971-222fb25d504a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className=" w-full md:h-screen "
              alt="not found"
            />
          </div>

          <div className="p-2 md:flex justify-between absolute inset-1   ">
            <div className=" bgy md:mt-20 mt-10 md:p-0 p-5 ">
              <div className="relative w-full mt-4 rounded-3xl backdrop-blur-md md:backdrop-blur-0 md:bg-transparent bg-[#665a9000] md:mt-32 md:p-10 p-2   md:text-4xl   overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full filter backdrop-blur-md md:backdrop-blur-md bg-[rgba(102,90,144,0.24)]"></div>
                <h2 className="relative z-10 text-[#d0cadc] text-3xl mb-1 md:p-0 px-6 text-center   font-semibold md:text-4xl font-Main title-font">
                  <Fade bottom distance="20%">
                    Get Connected
                  </Fade>
                </h2>
                <p className="relative z-10 leading-relaxed md:text-xl md:mb-5   text-center  w-full p-6 md:p-0 text-[#81bedd]">
                  <Fade bottom distance="20%">
                    Please share all your necessary details so that your Food
                    pickup details can be shared on your Emails.
                  </Fade>
                </p>
              </div>
            </div>
            <div className="   md:w-full  mt-20   w-full ">
              <div className=" bg-blue600  md:">
                <div className="  md:w-full rounded-3xl filter backdrop-blur-3xl  md:rounded-2xl bg-[#16176d01]    rounded-lgdark:border  dark:border-gray-700">
            <h1 className="  md:p-5  text-white md:text-4xl md:w-full  text-4xl text-center w-full ">
              <Fade bottom distance="20%">
                Fill the following Information
              </Fade>
            </h1>
                  <div className="p-6  ">
                    <form className="   ">
                      <div className=" md:flex justify-between">
                      <Fade bottom distance="20%">
                      <div className="w-full md:w-full p-3">
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
                      </Fade>
                      
                      <Fade bottom distance="20%">
                      <div className="w-full md:w-full p-3">
                      <label className="block">
                        <input
                          className="p-3 w-full text-[#f0f7ff] tracking-tight bg-[#f6f6f640]  placeholder:text-cyan-50 outline-none border border-gray-300 rounded-lg focus:border-indigo-500 transition duration-200"
                          id="signUpInput1-2"
                          type="email"
                          value={Ngoemail}
                          required="TRUE"
                          onChange={(e) => setNgoemail(e.target.value)}
                          placeholder="Organisation Email Address*"
                        />
                      </label>
                    </div>
                      </Fade>
                    </div> <div className=" md:flex justify-between">
                      <Fade bottom distance="20%">
                      <div className="w-full md:w-full p-3">
                      <label className="block">
                        <input
                          className="p-3 w-full text-[#ffffff] tracking-tight bg-[#f6f6f640]  placeholder:text-cyan-50 outline-none border border-gray-300 rounded-lg focus:border-indigo-500 transition duration-200"
                          id="signUpInput1-1"
                          type="text"
                          value={NgoAddress}
                          onChange={(e) => setNgoAddress(e.target.value)}
                          required="TRUE"
                          placeholder="Organisation Address*"
                        />
                      </label>
                    </div>
                      </Fade>
                      <Fade>
                      <div className="w-full md:w-full p-3">
                      <label className="block">
                        <input
                          className="p-3 w-full text-[#f0f7ff] tracking-tight bg-[#f6f6f640]  placeholder:text-cyan-50 outline-none border border-gray-300 rounded-lg focus:border-indigo-500 transition duration-200"
                          id="signUpInput1-2"
                          type="text"
                          value={NgoState}
                          required="TRUE"
                          onChange={(e) => setNgoState(e.target.value)}
                          placeholder="Organisation State*"
                        />
                      </label>
                    </div>
                      </Fade>
                    </div> <div className=" md:flex justify-between">
                      <Fade bottom distance="20%">
                      <div className="w-full md:w-full p-3">
                      <label className="block">
                        <input
                          className="p-3 w-full text-[#ffffff] tracking-tight bg-[#f6f6f640]  placeholder:text-cyan-50 outline-none border border-gray-300 rounded-lg focus:border-indigo-500 transition duration-200"
                          id="signUpInput1-1"
                          type="text"
                          value={NgoCity}
                          onChange={(e) => setNgoCity(e.target.value)}
                          required="TRUE"
                          placeholder="Organisation City*"
                        />
                      </label>
                    </div>
                      </Fade>
                      <Fade bottom distance="20%">
                      <div className="w-full md:w-full p-3">
                      <label className="block">
                        <input
                          className="p-3 w-full text-[#f0f7ff] tracking-tight bg-[#f6f6f640]  placeholder:text-cyan-50 outline-none border border-gray-300 rounded-lg focus:border-indigo-500 transition duration-200"
                          id="signUpInput1-2"
                          type="number"
                          value={NgoPincode}
                          required="TRUE"
                          onChange={(e) => setNgoPincode(e.target.value)}
                          placeholder="Organisation Pincode*"
                        />
                      </label>
                    </div>
                      </Fade>
                    </div> <div className=" md:flex justify-between">
                      <Fade bottom distance="20%">
                      <div className="w-full md:w-full p-3">
                      <input
                        className="p-3 w-full text-[#f0f7ff] tracking-tight bg-[#f6f6f640] placeholder:text-cyan-50 outline-none border border-gray-300 rounded-lg focus:border-indigo-500 transition duration-200"
                        type="number"
                        value={NgoPNumber}
                        required
                        onChange={(e) => setNgoPNumber(e.target.value)}
                        placeholder="Organisation Phone Number*"
                      />
                    </div>
                      </Fade>
                      <Fade>
                      <div className="w-full md:w-full p-3">
                      <input
                        className="p-3 w-full text-[#f0f7ff] tracking-tight bg-[#f6f6f640] placeholder:text-cyan-50 outline-none border border-gray-300 rounded-lg focus:border-indigo-500 transition duration-200"
                        type="number"
                        value={NgoaltPNumber}
                        required
                        onChange={(e) => setNgoaltPNumber(e.target.value)}
                        placeholder="Alternative Phone Number*"
                      />
                    </div>
                      </Fade>
                    </div> <div className=" md:flex justify-between">
                      <Fade>
                      <div className="p-3 w-full">
                      <label className="block relative">
                        <input
                          className="p-3 w-full text-[#f0f7ff] tracking-tight bg-[#f6f6f640] placeholder:text-cyan-50 outline-none border border-gray-300 rounded-lg focus:border-indigo-500 transition duration-200"
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
                      </Fade>
                      <Fade>
                      <div className="w-full md:w-full p-3">
                      <input
                        className="p-3 w-full text-[#f0f7ff] tracking-tight bg-[#f6f6f640] placeholder:text-cyan-50 outline-none border border-gray-300 rounded-lg focus:border-indigo-500 transition duration-200"
                        type="text"
                        value={NgoComment}
                        required
                        onChange={(e) => setNgoComment(e.target.value)}
                        placeholder="Anything You wanna Say"
                      />
                    </div>
                      </Fade>
                    </div>
                      {/* <button
                        onClick={submitNgoData}
                        type="button"
                        className="w-full shadow-inner shadow-blue-800 text-white bg-[#30c04a91] hover:bg-blue-500 transform ease-in-out duration-300 hover:font-bold hover:text-black focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-xl text-xl px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 font-Main "
                      >
                        Send
                      </button> */}
                    </form>
                    <div className="w-full flex justify-center p-3">
                      <button
                        type="button"
                        onClick={submitSignup}
                        className=" w-full rounded-full transform delay-50 bg-[#328cc141] ease-in inline-block bg-primary border-2 md:hover:bg-[#73a9c8fe] px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                      >
                        Register your Ngo
                      </button>
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={` z-50 scroll-to-top ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-9 h-9">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
</svg>


    </div>
        {/* </div> */}
      </motion.div>
      <ToastContainer />
    </>
  );
};

export default Ngoregister;
