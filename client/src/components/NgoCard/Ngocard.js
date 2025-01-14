import React from "react";
import Data_Ngos from "./Data";
import Fade from 'react-reveal/Fade';
import SingleNgo from './SingleNgo';
import Newsletter from "../Newsletter/Newsletter";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import Featured from "../Featured/Featured";
import Feature from "../Featured/Feature";

const Ngocard = () => {

  const scrollToTop = () => {
    const aboutTopElement = document.getElementById('aboutTop');
    if (aboutTopElement) {
      aboutTopElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  
  return (
    <>

{Data_Ngos.length > 0 && (
  <div className=" font-Main   md:mb-[400px]    ">
                <div className="   md:py-5  ">
       
         <Fade bottom distance="20%">
          <h1 className="md:absolute text-3xl  md:px-2 m  md:p-0 p-5 text-gray-900 w-full dark:text-white font-bold md:text-4xl  hover:text-black text-center">
            NGOs which you can contact 
          </h1>
          </Fade>
        </div>
        <div className="md:flex mt-0   absolute md:h-[1000px]  h-full w-full md:w-full  md:justify-center ">
          <div className=" md:h-full  ">
            <div className="md:flex p-7  md:mt-0  md:flex-row flex-col md:flex-wrap md:justify-center items-center md:gap-x-20 gap-y-20 md:gap-y-14 md:px-20">
                            {Data_Ngos.slice(0, 3).map(Details => (
                                <SingleNgo
                                   key={Details.id} pic={Details.pic} name={Details.name} written={Details.written}
                                />
                            ))}
                        </div> 

                          {Data_Ngos.length > 3 && (
                            <div className="  w-full flex justify-center md:w-full ">
                                <Link to="/NgoList">
                                    <button onClick={scrollToTop} className="  md:mt-20  gap-3  transition ease-in-out hover:bg-slate-800  shadow-inner shadow-slate-500 flex justify-center md:w-[250px] p-3 bg-[black] w-full rounded-full text-xl text-white ">
                                       
                                       <h1 className=" text-lg">
                                        View All

                                       </h1>
                                        <HiArrowRight className=" mt-1 " />
                                    </button>
                                </Link>
                            </div>
                        )}  
                    </div>
                    </div>
                </div>
            )}
            <Feature/>
            {/* <Featured/>        */}
      {/* <Newsletter/> */}
      {/* <Newsletter /> */}
    </>
  );
};

export default Ngocard;
