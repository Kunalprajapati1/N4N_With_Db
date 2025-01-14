import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// import Loader from '../components/Loader';
// import Error from '../components/Error';
// import {AiFillDelete} from 'react-icons/ai';

import { motion } from "framer-motion";
import { AiFillDelete } from "react-icons/ai";
import { admindeleteDonator, getAllDonators } from "../../actions/donatorAction";
import { getAllDonatorsReducer } from "../../reducers/donatorReducer";




const DonatorsList = () => {
  const donatorState = useSelector((state) => state.getAllDonatorsReducer);
  const { donators } = donatorState;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllDonators());
  }, [dispatch]);

  return (
    <>
      <motion.div
        className="bg-gradient-to-r from-[#69b2c6af] from-0% via-[#69b2c653] via-50% to-[#69b2c6af] to-90%"
        initial={{ opacity: 0 }}
        animate={{ opacity: 5 }}
        exit={{ opacity: 0 }}
      >
      <div className=" relative">
        <div className="">
          <img src="https://images.unsplash.com/photo-1634655511368-6cd7213719f4?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="not found" className=""/>
        </div>
        <div className=" absolute inset-1">
        <div className="flex font-Main font-bold flex-col md:p-20 md:gap-20 gap-10 py-10">
          <h1 className="md:text-8xl text-6xl text-[#ffffff] font-Mainitalic font-black text-center hover:text-light2">
            Donator's List
          </h1>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xl text-[#ffffff] uppercase bg-[#000000] dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3 hover:text-light2">
                    Donators Id
                  </th>
                  <th scope="col" className="px-6 py-3 hover:text-light2">
                    Donators Name
                  </th>
                  <th scope="col" className="px-6 py-3 hover:text-light2">
                    Donators Email
                  </th>
                  <th scope="col" className="px-6 py-3 hover:text-light2">
                    Donators Phone
                  </th> 
                  <th scope="col" className="px-6 py-3 hover:text-light2">
                    Donators Password
                  </th>
                  <th scope="col" className="px-6 py-3 hover:text-light2">
                    Delete
                  </th>
                </tr>
              </thead>

              <tbody>
                {donators &&
                  donators.map((donator) => (
                    <tr
                      key={donator._id}
                      className="bg-[#a4bee755] backdrop-blur-md border-b dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-600"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-[black] whitespace-nowrap dark:text-white"
                      >
                        {donator._id}
                      </th>
                      <td className="px-6 py-4 hover:bg-[#5389d5]  text-[black]">{donator.Donatorname}</td>
                      <td className="px-6 py-4 text-[black] hover:bg-[#5389d5] ">{donator.DonatorEmail}</td>
                      <td className="px-6 py-4 text-[black] hover:bg-[#5389d5] ">{donator.Donatorphone}</td>
                      <td className="px-6 py-4 text-[black] hover:bg-[#5389d5] ">{donator.DonatorPassword}</td>

                      <td>
                        <AiFillDelete
                          className=" fill-red-600  hover:bg-[#5389d5]  cursor-pointer text-2xl "
                          onClick={() => {
                            dispatch(admindeleteDonator(donator._id));
                          }}
                        />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
        </div>
      </div>
        
      </motion.div>
    </>
  );
};

export default DonatorsList;
