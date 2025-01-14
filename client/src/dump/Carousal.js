import React from "react";
import DonateDirect from "./Screens/Donators/DonateDirect";

const Carousal = () => {
  return (
    <>
      <DonateDirect />
      <div
        className="carousel carousel-center w-70 p-4 bg-[#000000e0] rounded-box"
        style={{ overflow: "auto", scrollBehavior: "smooth" }}
      >
        <div
          className="flex"
          style={{
            width: "4200px",
            height: "450px",
            scrollSnapType: "x mandatory",
            animation: "scroll 30s linear infinite",
            gap: "30px",
          }}
        >
          <div
            className="carousel-item"
            style={{ width: "100%", scrollSnapAlign: "start" }}
          >
            <div className="image-container">
              <img
                src="/images/3.jpg"
                alt="Mountain"
                className=" opacity-20 rounded-box h-[450px] w-[800px]"
              />
              <div className="  -mt-[400px] ml-[0px] rounded-3xl bg-[#000000] w-[600px] shadow-2xl shadow-black h-[300px]">
                <h1 className=" text-tranform:lowercase w-[500px]  h-[150px] m-[40px] text-4xl text-[#ffffff] font-	Courier New text-left ">
                  Want to donate ? Want to help?
                </h1>

                <div className="flex flex-col items-center mt-0">
                  <button className="group rounded-2xl h-12 w-48 bg-[#1a3a8bdc] font-bold text-lg text-white relative overflow-hidden mb-4">
                    Register Yourself
                    <div className="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-2xl"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="carousel-item"
            style={{ width: "100%", scrollSnapAlign: "start" }}
          >
            <div className="image-container">
              <img
                src="/images/2.jpg"
                alt="Beach"
                className="opacity-20 rounded-box h-[450px] w-[800px]"
              />
              <div className="  -mt-[400px] ml-[0px] rounded-3xl bg-[#000000] w-[600px] shadow-2xl shadow-black h-[300px]">
                <h1 className=" w-[500px]  h-[150px] m-[40px] text-4xl text-[#ffffff]  text-left ">
                  Who we are? What we do?
                </h1>{" "}
                <div className="flex flex-col items-center mt-0">
                  <button className="group rounded-2xl h-12 w-48 bg-[#1a3a8bdc] font-bold text-lg text-white relative overflow-hidden mb-4">
                    Know About Us
                    <div className="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-2xl"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="carousel-item"
            style={{ width: "100%", scrollSnapAlign: "start" }}
          >
            <div className="image-container">
              <img
                src="/images/3.jpg"
                alt="Cityscape"
                className="opacity-20 rounded-box h-[450px] w-[800px]"
              />
              <div className="  -mt-[400px] ml-[0px] rounded-3xl bg-[#000000] w-[600px] shadow-2xl shadow-black h-[300px]">
                <h1 className=" w-[500px]  h-[150px] m-[40px] text-4xl text-[#ffffff] font-	Courier New text-left ">
                  Don't Throw your leftover food in Dustbins, someone is waiting
                  for food
                </h1>

                <div className="flex flex-col items-center mt-0">
                  <button className="group rounded-2xl h-12 w-48 bg-[#1a3a8bdc] font-bold text-lg text-white relative overflow-hidden mb-4">
                    See Hunger problem
                    <div className="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-2xl"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="carousel-item"
            style={{ width: "100%", scrollSnapAlign: "start" }}
          >
            <div className="image-container">
              <img
                src="/images/4.jpg"
                alt="Forest"
                className="opacity-20 rounded-box h-[450px] w-[800px]"
              />
              <div className="  -mt-[400px] ml-[0px] rounded-3xl bg-[#000000] w-[600px] shadow-2xl shadow-black h-[300px]">
                <h1 className=" w-[500px]  h-[150px] m-[40px] text-4xl text-[#ffffff] font-	Courier New text-left ">
                  Work with us, Join as a volunteer
                </h1>

                <div className="flex flex-col items-center mt-0">
                  <button className="group rounded-2xl h-12 w-48 bg-[#1a3a8bdc] font-bold text-lg text-white relative overflow-hidden mb-4">
                    Join Now
                    <div className="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-2xl"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="carousel-item"
            style={{ width: "100%", scrollSnapAlign: "start" }}
          >
            <div className="image-container">
              <img
                src="/images/5.jpg"
                alt="Desert"
                className="opacity-20 rounded-box h-[450px] w-[800px]"
              />
              <div className="  -mt-[400px] ml-[0px] rounded-3xl bg-[#000000] w-[600px] shadow-2xl shadow-black h-[300px]">
                <h1 className=" w-[500px]  h-[150px] m-[40px] text-4xl text-[#ffffff]  New text-left ">
                  Wanna know more abbout food wastage and hunger problem?
                </h1>

                <div className="flex flex-col items-center mt-">
                  <button className="group rounded-2xl h-12 w-48 bg-[#1a3a8bdc] font-bold text-lg text-white relative overflow-hidden mb-4">
                    Read More
                    <div className="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-2xl"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousal;
