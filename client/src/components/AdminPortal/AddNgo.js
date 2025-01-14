import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { SigninRider } from "../../actions/riderAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { addDonator } from "../../actions/donatorAction";
import tnc from "../../Data/TnC";
import { addNgo } from "../../actions/ngoActions";
import { addNgoReducer } from "../../reducers/ngoReducer";

const AddNgo = () => {
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

      const [Ngoname, setNgoname] = useState("");
      const [Ngoemail, setNgoemail] = useState("");
      const [NgoAddress, setNgoAddress] = useState("");
      const [NgoState, setNgoState] = useState("");
      const [NgoCity, setNgoCity] = useState("");
      const [NgoPincode, setNgoPincode] = useState("");
      const [Ngopassword, setNgopassword] = useState("");
      const [NgoPNumber, setNgoPNumber] = useState("");
      const [NgoaltPNumber, setNgoaltPNumber] = useState("");

  // let navigate = useNavigate();

  const addNgoState = useSelector((state) => state.addNgoReducer);
  const { loading, error, success } = addNgoState;

  const dispatch = useDispatch();

  const submitForm = async (e) => {
    // window.scrollTo({top:0,behavior:"smooth"});
    e.preventDefault();

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(Ngoemail)) {
      toast.warn("Please enter a valid email address.", {
        position: "top-center",
      });
      return;
    }

    // Phone number validation
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(NgoPNumber)) {
      toast.warn("Please enter a valid 10-digit phone number.", {
        position: "top-center",
      });
      return;
    }

    if (Ngoname.trim() === "" || Ngoemail.trim() === "" || NgoAddress.trim() === "" ||NgoState.trim() === "" ||NgoCity.trim() === "" ||NgoPincode.trim() === "" ||Ngopassword.trim() === "" ||NgoPNumber.trim() === ""||NgoaltPNumber.trim() === "" )  {
      toast.warn("Please fill out all required fields.", {
        position: "top-center",
      });

      // alert("Password do not match");
    } else if (Ngopassword.length < 5) {
      toast.error("Password should have at least 5 characters.", {
        position: "top-center",
      });
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(Ngopassword)) {
      toast.error("Password should contain at least one special character.", {
        position: "top-center",
      });
    } else {
      const ngo = { Ngoname,Ngoemail,NgoAddress, NgoState, NgoCity, NgoPincode,  Ngopassword,NgoPNumber,NgoaltPNumber };
      dispatch(addNgo(ngo));
      setNgoname("");
      setNgoemail("");
      setNgoAddress("");
      setNgoState("");
      setNgoCity("");
      setNgoPincode("");
      setNgopassword("");
      setNgoPNumber("");
      setNgoaltPNumber("");

      if (!success) {
        console.log(`${error}`);
      } else {
        toast.success("New NGO has been added!", {
          position: "top-center",
        });
      }
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
        className="bg-[black] md:h-full h-[1200px] "
        initial={{ opacity: 0 }}
        animate={{ opacity: 5 }}
        exit={{ opacity: 0 }}
      >
      <div className="relative">
        <div className="">
            <img src="https://images.unsplash.com/photo-1581904902396-1460f95198c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className=""/>
        </div>
        <div className=" absolute inset-1">

        
        <div className="  relative bg-[#00000032] md:w-full h-full shadow-2xl shadow-black">
          <div className="  h-full  md:opacity-90 bg-blend-overlay w-full"></div>
          <div className="flex justify-center md:p-0 p- absolute md:inset-1">
            <div className=" z-10 md:p-10 md:mt-20 -mt-[100px]  md:bg-[#00000000] bg-[#6cbacf00] w-full h-full shadow-2xl shadow-[#3d5378] rounded-3xl border-2 border-[#ffffff65] hover:border-white transition duration-300 ease-in-out  backdrop-blur-xl md:w-[1000px] md:h-[780px] overflow-hidden">
              <div className=" md:p-10 p-3 mx-auto">
                <div className="max-w-3xl  mx-auto">
                  <h2
                    className=" font-Mainitalic text-center
                  md:text-7xl divide-red-500  md:p-10 p-6 text-5xl text-[#dfcafd] tracking-tighter"
                  >
                    Add a new NGO
                  </h2>
                   
                  <form
                    onSubmit={submitForm}
                    className="flex font-Main flex-wrap md:p-0 p-3"
                  >
                    <div className="w-full md:w-1/2 p-3">
                      <label className="block">
                        <input
                          className="p-4 w-full text-[#72a2e1] tracking-tight bg-[#f6f6f640]  placeholder:text-cyan-50 outline-none border border-gray-300 rounded-lg focus:border-indigo-500 transition duration-200"
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
                          className="p-4 w-full text-[#72a2e1] tracking-tight bg-[#f6f6f640]  placeholder:text-cyan-50 outline-none border border-gray-300 rounded-lg focus:border-indigo-500 transition duration-200"
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
                          className="p-4 w-full text-[#72a2e1] tracking-tight bg-[#f6f6f640]  placeholder:text-cyan-50 outline-none border border-gray-300 rounded-lg focus:border-indigo-500 transition duration-200"
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

                    <button
                      className=" bg-[#8578a9] md:mt-10 mt-3 p-3 text-white transition ease-in-out hover:bg-[#8c1521] hover:text-[white] hover:shadow-black hover:shadow-2xl rounded-xl w-full "
                      type="submit"
                    >
                      Add New
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div></div>
      </div>
      </motion.div>
      <ToastContainer />
    </>
  );
};

export default AddNgo;
