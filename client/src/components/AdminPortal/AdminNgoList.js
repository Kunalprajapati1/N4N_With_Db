import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// import Loader from '../components/Loader';
// import Error from '../components/Error';
// import {AiFillDelete} from 'react-icons/ai';

import { motion } from "framer-motion";
import { AiFillDelete } from "react-icons/ai";
import { admindeleteNgo, getAllNgos } from "../../actions/ngoActions";
import { getAllNgosReducer } from "../../reducers/ngoReducer";
 




const AdminNgoList = () => {
  const ngoState = useSelector((state) => state.getAllNgosReducer);
  const { ngos } = ngoState; // Use optional chaining to handle undefined ngoState
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllNgos());
  }, [dispatch]);

  return (
    <>
      <motion.div
        className="bg-[black] h-[1000px] md:h-full "
        initial={{ opacity: 0 }}
        animate={{ opacity: 5 }}
        exit={{ opacity: 0 }}
      >
      <div className=" relative">
        <div className="">
          <img src="https://images.unsplash.com/photo-1684162205807-630e5d5904be?q=80&w=1901&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="not found" className=""/>
        </div>
        <div className=" absolute inset-1">
        <div className="flex font-Main font-bold flex-col md:p-20 md:gap-20 gap-10 py-10">
          <h1 className="md:text-8xl text-6xl text-[#5796ce] font-Mainitalic font-black text-center hover:text-light2">
            NGO's List
          </h1>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xl text-[#ffffff] uppercase bg-[#000000] dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3 text-[red] ">
                    NGO's Id
                  </th>
                  <th scope="col" className="px-6 py-3 ">
                    NGO's Name
                  </th>
                  <th scope="col" className="px-6 py-3 ">
                    NGO's Email
                  </th>
                  <th scope="col" className="px-6 py-3 ">
                    NGO's Address
                  </th>
                  <th scope="col" className="px-6 py-3 ">
                    NGO's State
                  </th>
                  <th scope="col" className="px-6 py-3  ">
                    NGO's City
                  </th>
                  <th scope="col" className="px-6 py-3  ">
                    NGO's Pincode
                  </th>
                  <th scope="col" className="px-6 py-3  ">
                    NGO's Phone
                  </th> 
                  <th scope="col" className="px-6 py-3  ">
                    NGO's Aternative Phone
                  </th> 
                  <th scope="col" className="px-6 py-3  ">
                    NGO's Password
                  </th>
                  <th scope="col" className="px-6 py-3  ">
                    Delete
                  </th>
                </tr>
              </thead>

              <tbody>
              {ngos && ngos.map((ngo) => (
                    <tr
                      key={ngo._id}
                      className="bg-[#0b0c117c] backdrop-blur-md border-b dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-600"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-[red] whitespace-nowrap dark:text-white"
                      >
                        {ngo._id}
                      </th>
                      <td className="px-6 py-4 hover:bg-[#5389d5]  text-[white]">{ngo.Ngoname}</td>
                      <td className="px-6 py-4 text-[white] hover:bg-[#5389d5] ">{ngo.Ngoemail}</td>
                      <td className="px-6 py-4 text-[white] hover:bg-[#5389d5] ">{ngo.NgoAddress}</td>
                      <td className="px-6 py-4 text-[white] hover:bg-[#5389d5] ">{ngo.NgoState}</td>
                      <td className="px-6 py-4 text-[white] hover:bg-[#5389d5] ">{ngo.NgoCity}</td>
                      <td className="px-6 py-4 text-[white] hover:bg-[#5389d5] ">{ngo.NgoPincode}</td>
                      <td className="px-6 py-4 text-[white] hover:bg-[#5389d5] ">{ngo.Ngopassword}</td>
                      <td className="px-6 py-4 text-[white] hover:bg-[#5389d5] ">{ngo.NgoPNumber}</td>
                      <td className="px-6 py-4 text-[white] hover:bg-[#5389d5] ">{ngo.NgoaltPNumber}</td>
                      

                      <td>
                        <AiFillDelete
                          className=" fill-red-600  hover:bg-[#5389d5]  cursor-pointer text-2xl "
                          onClick={() => {
                            dispatch(admindeleteNgo(ngo._id));
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

export default AdminNgoList;
