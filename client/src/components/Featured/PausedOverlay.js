
import { HiArrowRight } from "react-icons/hi";

const PausedOverlay = ({ img, alt, name }) => (
  <div className=" w-full ">
    <img
      src={img}
      alt={alt}
      className="absolute w-full h-full bg-cover"
    />
    <div className="relative ">
      {/* <div className=""></div> */}
    </div>
    <div className="bg-[#000000a8] w-full md:w-full  z-10 font-Main bottom-0 p-2 md:p-2 absolute">
      <div className="">
        <h1 className="text-white md:text-3xl">{name}</h1>
      </div>
      <div className="flex justify-start gap-2">
        <p className="text-white t md:mt-4">See their Achievement</p>
        <HiArrowRight className="text-white mt-5" />
      </div>
    </div>
  </div>
);

export default PausedOverlay;
