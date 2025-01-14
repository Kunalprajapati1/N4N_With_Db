import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
// import { Grid } from '@material-ui/core'
import Ngocard from "./Ngocard";
import Data_Ngos from "./Data";
import SingleNgo from "./SingleNgo";
import { motion } from "framer-motion";

const NgoList = () => {


  
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);



  const [search, setSearch] = useState("");

  const filteredArticles = Data_Ngos.filter((Details) => {
    const content = Details.id + Details.name + Details.written;
    return content.toLowerCase().includes(search.toLowerCase());
  });
  return (
    <>
      <motion.div
        className=" md:h-[2800px] h-[8000px] md:-mt-20 -mt-20 bg-[#000000]  "
        initial={{ opacity: 0 }}
        animate={{ opacity: 5 }}
        exit={{ opacity: 0 }}
      >
        <div id="aboutTop" className=" bg-black">
          <div className=" relative">
            <div className="">
              <img
                src="https://images.unsplash.com/photo-1659469377768-4f42f2f091c5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="bg-repeat-y w-full md:w-full h-full md:h-full"
                alt="not found"
              />
            </div>

            <div className=" absolute inset-1 flex justify-center ">
              <div className="projectPage-container">
                <div className=" w-full mt-20  ">
                  <Link to="/services">
                    <div className=" p-2">
                      <AiOutlineHome className=" bg-white hover:bg-[#7a98f1f1] transition ease-in-out w-10 h-10 rounded-full shadow-inner shadow-black p-2" />
                    </div>
                    <h1 className=" text-3xl md:mt-0 mt-4 md:text-5xl w-full font-Main text-center text-[#7577ff] ">
                      Here are the NGOs Registered with us
                    </h1>
                  </Link>
                </div>
                <div className=" md:mt-20 mt-6 p-3 md:p-2 ">
                  <input
                    className=" w-full placeholder:text-gray-500 md:w-[500px] md:translate-x-[450px] shadow-inner shadow-black rounded-full p-2 "
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search NGO..."
                  />
                </div>
                <div className="project-container">
                  <div
                    className="project-div flex  md:p-0 p-6 flex-wrap gap-10 items-center justify-evenly"
                    container
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                  >
                    {filteredArticles.map((Details) => (
                      <SingleNgo
                        key={Details.id}
                        id={Details.id}
                        name={Details.name}
                        pic={Details.pic}
                        written={Details.written}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={` z-50 scroll-to-top ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-9 h-9">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
</svg>


    </div>
      </motion.div>
    </>
  );
};

export default NgoList;
