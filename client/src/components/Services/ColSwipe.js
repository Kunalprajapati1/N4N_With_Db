import React from "react";
import Fade from 'react-reveal/Fade';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  EffectCoverflow,
  Autoplay,
} from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import Ngocard from "../NgoCard/Ngocard";

SwiperCore.use([Navigation, Pagination, EffectCoverflow, Autoplay]);

const ColSwipe = () => {
  return (
    <>
      <div className="  md:mt-20 mt-10 font-Main  w-full md:py-   ">
        {/* <hr className="md:w-[1000px] md:h-[2px] md:my-8 md:translate-y-[0px] md:translate-x-[255px] bg-gray-200 border-0 dark:bg-[#000000]" /> */}
        <Fade bottom distance="20%">
        
        <h1 className="md:absolute w-full text-center  md:text-4xl text-gray-900  text-2xl  md:p-5 md:px-8 p-2 dark:text-white dark:bg-[#059669] hover:text-black ">
          <b> Know about the services we provide to the arising problems </b>
        </h1>
        </Fade>
      </div>

      <div className=" mt-5 md:p-40 md:tran0 p-3 w-full">
         <Swiper spaceBetween={10} centeredSlides={true}
             autoplay={{ delay: 1000, disableOnInteraction: false, reverseDirection : false}}
             pagination={{ clickable: true, }}
             navigation={true}
             loop={true}
             modules={[Autoplay, Pagination, Navigation]}
             className="  rounded-3xl md:h-[700px] h-full "
         >
         <SwiperSlide>
         <img
            className="object-fit w-full h-full"
            src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D"
            alt="slide 1"
         />
         </SwiperSlide>
         <SwiperSlide>
         <img
            className="object-fit w-full h-full"
            src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG9vcnxlbnwwfDB8MHx8fDI%3D"
            alt="slide 2"
         />
         </SwiperSlide>
         <SwiperSlide>
         <img
            className="object-fit w-full h-full"
            src="https://images.unsplash.com/photo-1495556650867-99590cea3657?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="slide 3"
         />
         </SwiperSlide>
         <SwiperSlide>
         <img
            className="object-fit w-full h-full"
            src="https://images.unsplash.com/photo-1576381394626-53b3d2d48145?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="slide 3"
         />
         </SwiperSlide>
        </Swiper> 
       </div>
<Ngocard />
    </>
  );
};

export default ColSwipe;
