import React from "react";
import Problems from "./Problems";
import Slide from 'react-reveal/Slide';
const Explainhome = () => {
  return (
    <>
      <section className=" mt-16  md:mt-[90px] bg-[#5492d9b1] w-full h-full md:h-[540px] ">
      
<div className=" md:flex justify-center gap-40 ">

<Slide left>

<div className=" md:p-0 p-10 ">
<h1 className=" md:translate-x-[100px] md:translate-y-[35px] md:w-[600px] text-5xl font-extrabold font-SourceSansPro md:text-8xl">
  1.3 Billion Tons
  </h1>
  

<div className="md:translate-x-[100px] md:p-0 p-3 md:mt-0 mt-8 md:translate-y-[80px] md:border-4 border-2 border-[#175b5b]  h-full md:w-[700px] md:h-[270px] ">
  
  <h1 className="md:text-3xl font-SourceSansPro md:p-[25px]">
  According to the Food and agriculture organization, about 1.3
                billion tons of food is wasted every year, the results of the
                study suggest that roughly one-third of food produced for human
                consumption is wasted globally.
  </h1>
</div>

</div>
</Slide>
<Slide right>
<div className="md:p-16 p-5 ">
  <img className=" shadow-black shadow-2xl " src="\images\wastedfood.jpg"/>
</div>
</Slide>
</div>
      </section>
      <Problems />
    </>
  );
};

export default Explainhome;
