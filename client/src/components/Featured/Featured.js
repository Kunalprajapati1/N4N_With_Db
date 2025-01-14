// import React, { useState, useEffect } from 'react';

// const BackgroundChanger = () => {
//   const [backgroundIndex, setBackgroundIndex] = useState(0);
//   const backgrounds = [
//     `url(https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
//     `url(https://images.unsplash.com/photo-1461301214746-1e109215d6d3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
//     `url(https://images.unsplash.com/photo-1475727946784-2890c8fdb9c8?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
//     `url(https://images.unsplash.com/photo-1491466424936-e304919aada7?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
    
//     `url(https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
//     `url(https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
//     `url(https://images.unsplash.com/photo-1482784160316-6eb046863ece?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
//     }, 2000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="w-full md:w-[800px] h-screen flex items-center bg-no-repeat justify-center transition-opacity duration-1000 ease-in-out" style={{ backgroundImage: backgrounds[backgroundIndex], transition:" ease-in-out ", backgroundSize: 'contain', opacity: 1 }}>
//     </div>
//   );
// };

// export default BackgroundChanger;


import HoverVideoPlayer from "react-hover-video-player";

import PausedOverlay from "./PausedOverlay";
import LoadingOverlay from "./LoadingOverlay";
import Featured_Data from "./FeaturedData";

export default function App() {
  return (
    <div className="md:flex justify-center gap-16 md:p-20 md:-mt-[250px]">
          <div className="md:grid md:grid-cols-2  gap-12">
            {Featured_Data.map((Details) => (
              <div key={Details.id}>
                <HoverVideoPlayer
                  videoSrc={Details.video}
                  className="md:w-full  mt-10 hover:border-4 backdrop-filter backdrop-blur-lg
                     border-[#ffffff] shadow-black shadow-2xl hover:shadow-[#9dffa4]  hover:-translate-y-5 cursor-pointer transition ease-in-out"
                  pausedOverlay={<PausedOverlay img={Details.img} alt={Details.alt} name={Details.name} />}
                  loadingOverlay={<LoadingOverlay />}
                />
              </div>
            ))}
          </div>
        </div>
  );
}

