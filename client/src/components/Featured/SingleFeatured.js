import React from 'react'
import PausedOverlay from './PausedOverlay'
import HoverVideoPlayer from "react-hover-video-player";
import { HiArrowRight } from "react-icons/hi";


  
  const SingleFeatured = () => {
    return (
      <>
        <div className="flex w-full justify-center gap-16 p-20 md:mt-20">
          <HoverVideoPlayer
            // videoSrc={video}
            className="w-full grid grid-cols-2 hover:border-4 backdrop-filter backdrop-blur-lg
              border-[#ffffff] hover:shadow-[#7a97ff] shadow-2xl   cursor-pointer transition ease-in-out "
            pausedOverlay={({ id,alt, name, img }) => (
              <div key={id} className="">
                <img
      src={img}
      alt={alt}
      className=" absolute w-full h-full bg-cover "
    />
    <div className=" relative ">
<div className="">

</div>
    </div>
    <div className=" bg-[#ffffffa8] w-full z-10 font-Main bottom-0 p-2 absolute ">
    <div className="">
      <h1 className=" text-white text-3xl">{name}</h1>

    </div>
      <div className=" flex justify-start gap-2">
        <p className=" text-white mt-4">See there Achievement</p>
        <HiArrowRight className="  text-white mt-5 " />
      </div>
    </div>
              </div>
            )}
          />
        </div>
      </>
    );
  };

  export default SingleFeatured