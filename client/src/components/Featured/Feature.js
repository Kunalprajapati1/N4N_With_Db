import React from "react";
import HoverVideoPlayer from "react-hover-video-player";
import { HiArrowRight } from "react-icons/hi";
import Featured_Data from "./FeaturedData";
import { Link, NavLink } from "react-router-dom";
import PausedOverlay from "./PausedOverlay";
import LoadingOverlay from "./LoadingOverlay";

import Fade from 'react-reveal/Fade';

const App = () => {
  const maxItemsToShow = 6;
  const showViewAllButton = Featured_Data.length > maxItemsToShow;

  return (
    <>

    
    <div className="md:translate-y-[450px] bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-indigo-200 via-slate-600 to-indigo-200 translate-y-[1900px] font-Main">
      
      <div className=" mt-1 bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-indigo-200 via-gray-400 to-indigo-200 ">
        <div className="">
          {/* <img
            src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="  w-full md:w-full h-full md:h-full"
            alt="not found"
          /> */}
        </div>
        <div className=" inset-1">
        <div className="w-full md:mt- mt-0 text-center">
        <h1 className="text-3xl font-bold md:drop-shadow-[4px_3px_var(--tw-shadow-color)] shadow-[#7ec9f1] md:text-4xl md:p-3  p-7 ">
        <Fade bottom distance="20%">

          <h2 className=" md:mt-20 ">Get a Chance to get Featured with us!</h2>
        </Fade>
        </h1>
      </div>
          <div className="md:flex p-3 justify-center gap-16 md:p-20 md:mt-0">
            <div className="md:grid md:grid-cols-2  gap-12">

          
            <Fade bottom distance="20%">
              {Featured_Data.map((Details) => (
                <div key={Details.id}>
                  <HoverVideoPlayer
                    // videoSrc={Details.video}
                    className="md:w-[600px]  mt-10  backdrop-filter backdrop-blur-lg
                         shadow-black shadow-2xl hover:shadow-[#8890ff] cursor-pointer transition ease-in-out"
                    pausedOverlay={<PausedOverlay img={Details.img} alt={Details.alt} name={Details.name} />}
                    // loadingOverlay={<LoadingOverlay />}
                  />
                </div>
              ))}
              </Fade>
            </div>
          </div>

          {/* {showViewAllButton && (
            <div className="w-full flex justify-center md:w-full ">
              <Link to="/FeaturedItem">
                <button className="  gap-3 transition ease-in-out hover:bg-slate-800  shadow-inner shadow-slate-500 flex justify-center md:w-[250px] p-4 md:mt-0 mt-5   md:p-3 bg-[black] w-full rounded-full text-xl text-white ">
                  <h1 className=" md:text text-lg ">View All</h1>
                  <HiArrowRight className=" mt-1" />
                </button>
              </Link>
            </div>
          )} */}

        </div>
      </div>

      <footer className="bg-[black]  dark:bg-gray-900">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        
      {/* <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" /> */}
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-200 sm:text-center dark:text-gray-200">© 2024 
          <NavLink to="/" className="hover:underline">Need4Need™</NavLink>. All Rights Reserved.
          </span>
          
      </div>
    </div>
</footer>
    </div>
   
</>
  );
};

export default App;
