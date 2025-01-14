import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { getDonatorById } from "../../actions/donatorAction";




const DonatorProfile = () => {
  const [Donatorname, setDonatorname] = useState("");
  const [DonatorEmail, setDonatorEmail] = useState("");
  const [Donatorpincode, setDonatorpincode] = useState("");

  const [Donatorphone, setDonatorphone] = useState("");
  const [DonatorPassword, setDonatorPassword] = useState("");

  const dispatch = useDispatch();

  const donatorState = useSelector((state) => state.loginDonatorReducer);
  const { currentDonator } = donatorState;

  const getDonatorByState = useSelector((state) => state.getDonatorByIdReducer);
  const { donator } = getDonatorByState;

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

  return (
    <>
      <div className=" relative">
        <div className="">
          <img
            src="https://images.unsplash.com/photo-1670248012895-1cd8139bf32c?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className=" md:h-[800px] w-full h-full "
            alt=""
          />
        </div>
        <div className=" absolute inset-1">
          <div className="">
            <motion.div
              className="bg-gradient-to-r from-[#000000] from-0% via-[#00000088] via-50% to-[#000000] to-90%"
              initial={{ opacity: 0 }}
              animate={{ opacity: 5 }}
              exit={{ opacity: 0 }}
            >
              <div className="font-Main  w-full   justify-center   absolute mt-10 left-0">
                <div className="md:flex  md:flex-row flex-col md:space-y-0 space-y-10 md:justify-center">
                  <div className="md:w-1/2 w-full md:px-0 px-4  flex justify-center">
                    <div className="bg-[8da98077] shadow-[#78b774] backdrop-blur-md shadow-md border-2 border-blue-300 text-[#000000] flex flex-col gap-10 py-10 p-10 rounded-3xl  text-left text-2xl md:w-full w-full items-center">
                      <h1 className="md:text-5xl text-4xl text-blue-700  ">
                        Your Donator Profile
                      </h1>
                      <img
                        src="https://cdn4.vectorstock.com/i/1000x1000/97/03/user-sign-white-icon-vector-15479703.jpg"
                        alt="Passenger Icon"
                        className="w-1/6 rounded-full"
                      />
                      <div className="w-full text-[black] md:px-10 pl-4">
                        <h1>Name   &nbsp;:&nbsp; {Donatorname}</h1>
                        <h1>Your Donator's ID &nbsp;:&nbsp; {currentDonator._id}</h1>

                        <h1>Email &nbsp;:&nbsp; {DonatorEmail}</h1>
                        <h1>Pincode &nbsp;:&nbsp; {Donatorpincode}</h1>
                       <h1>Password &nbsp;:&nbsp; {DonatorPassword}</h1>
                        <h1>Phone Number &nbsp;:&nbsp; {Donatorphone}</h1>
                                            
                        {/* <h1>Password &nbsp;:&nbsp; {currentNgo.riderPassword}</h1>   */}
                        <div className=" flex justify-center p-8 ">
                          <NavLink to="/EditDonator">
                            <button className="bg-blue-600 p-3 rounded-full text-lg text-white">
                              Edit Donator Details
                            </button>
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DonatorProfile;
