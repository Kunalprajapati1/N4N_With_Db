import React from "react";
import { NavLink } from "react-router-dom";
import Newsletter from "../Newsletter/Newsletter";
import Fade from 'react-reveal/Fade';

const Solution = () => {

  const scrollToTop = () => {
    const aboutTopElement = document.getElementById('aboutTop');
    if (aboutTopElement) {
      aboutTopElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="   h-[1200px] md:mt-[700px] mt-[1200px] md:my-[950px] ">
      <div className="  relative ">
        <div className=" ">
          <img
            src="https://images.unsplash.com/photo-1541327050432-73a9b9812047?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D "
            className=" w-full bg-teal-300 h-full md:h-[700px] "
            alt=""
          />
        </div>
        <div className="  flex justify-center items-start inset-0 absolute mt-[200px] ">

        
        <div className=" md:-translate-y-36 md:p-0 p-10 text-right  md:w-[200px] ">
          <div className="">
      <Fade bottom distance="20%">

            <h1 className="text-[#48abb2] -mt-[200px] md:w-[680px] md:ml-[100px] md:mt-[80px] md:text-7xl text-2xl  text-center md:text-right font-bold   flex justify-center font-Main items-center">
              But every problem has a cure
            </h1>
            </Fade>
      <Fade bottom distance="20%">

           
            <h1 className="text-[#7fe4c3] md:w-[600px] md:mt-[50px] md:ml-40 mt-5  font-SourceSansPro  font-semibold text-justify md:text-right  text-sm md:text-xl">
              We have created a community which is actually a bridge for those
              who are actually want to donate but never find a platform to do so
              along with ones who want food, donations etc.
            </h1>
            </Fade>
          </div>
        </div>
</div>
      </div>
        <button onClick={scrollToTop} className=" transform duration-200 bg-[#7fe4c3]  ease-in-out border-2 border-[#7fe4c3] w-[200px] h-[50px] mt-3 md:mt-0  text-xl rounded-lg md:hover:bg-[#0ba773] hover:text-white md:-translate-y-[240px] translate-x-24  md:translate-x-[1230px] ">
          <NavLink className="" to="/about" >Know more</NavLink>
        </button>

        <div className=" md:mt-0 mt-48  ">
        
          <div className=" md:flex-col p-8 ">
            <div className=" md:w-[850px] md:h-[420px]   md:translate-y-[10px] md:translate-x-[600px] bg-[#48abb2] "></div>
            <h1 className=" md:w-[1200px] -translate-y-[200px] md:-translate-y-[390px] md:translate-x-[40px] font-SourceSansPro  font-bold text-3xl  md:text-5xl text-black">
      <Fade bottom distance="20%">

              Addressing Food Waste: Sharing Surplus Food for Good
              </Fade>
            </h1>
            
            <img
              className=" md:translate-x-[1000px] -translate-y-36 shadow-2xl shadow-black border-2 border-[#59e8f3] w-full h-full md:-translate-y-[290px] md:w-[400px] md:h-[200px] "
              src="/images/l.jpg "
              alt=""
            />
         
            <h1 className=" md:p-10 p-5 -translate-y-20 md:rounded-none rounded-lg bg-[#48abb281] border-2 border-[#214b4e] md:bg-[#48abb265] md:translate-x-[40px] md:-translate-y-[520px] md:border-2 md:border-[#2f494a]  md:w-[700px] md:text-xl">
      <Fade left distance="20%">
             
              Until now in our lives, everyone has come across moments in which
              we see a lot of food waste such as marriage, “langar”, Hotels,
              Restaurants, and our homes. So, collecting food from all these
              areas, and distributing the same to stray animals, and the needy,
              will cure the problem of food wastage to a great extent.
              </Fade>
            </h1>
          </div>
          
        </div>

        <div className=" md:p-0 p-7  md:mt-0 mt-[380px] ">
          <div className=" md:w-[850px] md:h-[430px] md:-translate-y-[320px] md:translate-x-[70px] bg-[#91dce6] "></div>

          <div className=" md:-translate-y-0 -translate-y-[500px] ">
            <h1 className=" text-3xl  font-SourceSansPro font-bold md:text-5xl md:translate-x-[370px] text-left md:text-right md:w-[1100px] md:-translate-y-[720px] ">
      <Fade bottom distance="20%">

              Food Waste Reduction: Nourishing Animals in Need
              </Fade>
            </h1>
          </div>
         

          <div
            className="  md:w-[200px] md:translate-x-[50px] md:p-10 md:text-xl
 -translate-y-[720px] "
          >
            <div className="  w-full md:w-[600px]">
              <img
                className="  md:mt-0 mt-[280px] translate-x-4 md:translate-x-[80px] border-2 border-[#91dce6]  h-full md:w-[400px] shadow-2xl shadow-black -md:translate-y-[1600px]"
                src="/images/d.jpg"
                alt=""
              />
            </div>
          </div>
          <div
            className=" bg-[#15356274] md:rounded-none rounded-lg border-2 border-[#153562] md:mt-0 mt-[350px]  md:w-[800px] md:translate-x-[650px] p-7 md:text-xl
 -translate-y-[1000px] "
          >
      <Fade right distance="20%">

            <h1>
              As ort food from the above-mentioned places can’t be given to
              humans, therefore, to minimize food wastage and cure the hunger
              problem in animals we will provide the ort to all the cowsheds,
              stray animals, especially cows, and dogs who are often seen on the
              roads eating plastic polybags, resulting in choking up themselves
              and finally leading to death.
            </h1>
            </Fade>
          </div>
        </div>
       
        <div className=" -translate-y-[1000px] md:-translate-y-[780px] ">
          <div className=" md:flex-col p-8 ">
            <div className=" md:w-[850px] md:h-[420px] md:translate-y-[10px] md:translate-x-[600px] bg-[#346080] "></div>
            <h1 className=" md:w-[1200px] md:-translate-y-[390px] text-3xl md:translate-x-[40px] font-SourceSansPro  font-bold  md:text-5xl text-black">
      <Fade bottom distance="20%">

              Reducing Vegetable Waste: Feeding the Needy
              </Fade>
            </h1>
            <img
              className=" md:translate-x-[1000px] w-full md:mt-0 mt-20 shadow-2xl shadow-black border-2 border-[#5cbbff] md:-translate-y-[290px] md:w-[400px] md:h-[200px] "
              src="/images/2.jpg "
              alt=""
            />
           
            <h1 className=" md:p-10 w-full h-full md:mt-0 mt-20 md:rounded-none rounded-lg p-7  bg-[#101d266f] md:translate-x-[40px] md:-translate-y-[520px] border-2 border-[#101d26]  md:w-[700px] md:text-xl">
      <Fade left distance="20%">
              Along with it to fulfill the needs and desires of needy humans we
              will make sure that the vegetables which are often seen by vendors
              are thrown away just because of a few marks on vegetables or
              because they are left unsold will be provided to them.
            </Fade>
            </h1>
          </div>
        
        </div>
       </section>
      <Newsletter />
    </>
  );
};

export default Solution;
