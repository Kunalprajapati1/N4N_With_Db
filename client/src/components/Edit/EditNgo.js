import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "sweetalert2/dist/sweetalert2.min.css";
import { toast } from 'react-toastify';
import { deleteNgo, getNgoById, updateNgo } from "../../actions/ngoActions";

const EditNgo = () => {

    const dispatch = useDispatch();
    const [Ngoname, setNgoname] = useState("");
    const [Ngoemail, setNgoemail] = useState("");
    const [NgoAddress, setNgoAddress] = useState("");
    const [NgoState, setNgoState] = useState("");
    const [NgoCity, setNgoCity] = useState("");
    const [NgoPincode, setNgoPincode] = useState("");
    const [Ngopassword, setNgopassword] = useState("");
    const [NgoPNumber, setNgoPNumber] = useState("");
    const [NgoaltPNumber, setNgoaltPNumber] = useState("");

    const ngoState = useSelector((state) => state.loginNgoReducer);
    const { currentNgo } = ngoState;

    const getNgoByState = useSelector(state => state.getNgoByIdReducer);
    const {ngo} = getNgoByState;
    // const updateriderState = useSelector(state => state.updateriderByIdReducer);
    // const {updateloading,updateerror,updatesuccess} = updateriderState;

    useEffect(() => {
        if(ngo){
          if(ngo._id === currentNgo._id){
            setNgoname(ngo.Ngoname);
            setNgoemail(ngo.Ngoemail);
            setNgoAddress(ngo.NgoAddress);
            setNgoState(ngo.NgoState);
            setNgoCity(ngo.NgoCity);
            setNgoPincode(ngo.NgoPincode);
            setNgopassword(ngo.Ngopassword);
            setNgoPNumber(ngo.NgoPNumber);
            setNgoaltPNumber(ngo.NgoaltPNumber);
        }else{
          dispatch(getNgoById(currentNgo._id));
        } 
        }else{
          dispatch(getNgoById(currentNgo._id));
        }
        
      },[ngo,dispatch,currentNgo._id]);


      const submitForm = (e) => {
        e.preventDefault();
        const updatedNgo = {
          _id : currentNgo._id,
          Ngoname,
          Ngoemail,
          NgoAddress,
          NgoState,
          NgoCity,
          NgoPincode,
          Ngopassword,
          NgoPNumber,
          NgoaltPNumber,
        }
        dispatch(updateNgo(updatedNgo));
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
                    dispatch(deleteNgo(currentNgo._id));
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
        className=" bg-[#000000] h-[1400px] md:h-full  "
      >
      <div className="relative">
        <div className="">
          <img src="https://images.unsplash.com/photo-1533497197926-c9e810dcea9a?q=80&w=1937&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="" alt=" not found"/>
        </div>
        <div className=" absolute inset-1">
<div className="body py-20">
          <div className="font-Main font-bold">
           

            <div className="bg-[#ffffff00] border-2 border-[#686767] hover:border-[#c5c4c4] transition ease-in-out backdrop-blur-lg md:mx-40 mx-4 rounded-xl md:px-10 px-4 ">
              <div>
                <h1 className="text-3xl text-center font-Main font-bold leading-tight tracking-tight md:p-10 text-gray-100 md:text-2xl dark:text-white">
                  Edit your Details
                </h1>
                <div className="input">
                  <form onSubmit={submitForm} className="space-y-4 p-4 mt-6 md:space-y-6">
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
                    <div className="w-full md:w-full p-3">
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
                    <div className="w-full md:w-full p-3">
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
                    <div className="w-full md:w-full p-3">
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
                    <div className="w-full md:w-full p-3">
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
                    <div className="w-full md:w-full p-3">
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
                    <div className="w-full md:w-full p-3">
                      <input
                        className="p-4 w-full text-[#f0f7ff] tracking-tight bg-[#f6f6f640] placeholder:text-cyan-50 outline-none border border-gray-300 rounded-lg focus:border-indigo-500 transition duration-200"
                        type="number"
                        value={NgoPNumber}
                        required
                        onChange={(e) => setNgoPNumber(e.target.value)}
                        placeholder="Organisation Phone Number*"
                      />
                    </div>
                    <div className="w-full md:w-full p-3">
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
                          type={"text"}
                          value={Ngopassword}
                          required
                          onChange={(e) => setNgopassword(e.target.value)}
                          placeholder="Password*"
                        />
                        
                      </label>
                    </div>
                    
                    <button
                    type='submit'
                    className="w-full bg-blue-600 text-white bg-primary-600 hover:bg-blue-700 transition ease-in-out focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Update an account
                  </button>
                    
                  {/* <button
                    onClick={() => {dispatch(deleteNgo(currentNgo._id))}}
                    className="w-full bg-red-500 text-white bg-primary-600 hover:bg-red-700  transition ease-in-out focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Delete an account
                  </button> */}
                  </form>
                  <button
          onClick={showDeleteAlert}
          className="w-full bg-red-500 text-white bg-primary-600 hover:bg-red-700 transition ease-in-out focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Delete an account
        </button>
                </div>
                 <div className="md:px-36 flex md:justify-start justify-center p-6">
                
                  <button className="font-Main">
                    <NavLink
                      to="/"
                      className="inline-flex px-4 items-center justify-center md:translate-x-[350px] h-10 md:w-[150px] md:translate-y-[20px] text-md font-semibold text-center text-white no-underline align-middle transition-all duration-300 ease-in-out hover:bg-[#001a804c] bg-transparent border-2 border-blue-600 border-solid rounded-full cursor-pointer select-none hover:text-gray-100 md:mb-8 hover:border-[white] focus:shadow-xs focus:no-underline"
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
      </div>
        
      </motion.div>
      <ToastContainer />
    </>
  )
}

export default EditNgo