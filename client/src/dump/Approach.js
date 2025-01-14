import React from "react";
import Newsletter from "../components/Newsletter/Newsletter";

const Approach = () => {
  return (
    <>
      <div className=" bg-[#19501028]  h-screen">
        <div className="inline-flex translate-x-[300px] py-20  ">
          <hr className="w-[900px] h-[2px] my-8 bg-gray-200 border-0 dark:bg-[#000000]" />
          <span className="absolute px-2 py-4 text-4xl font-medium text-gray-900 -translate-x-1/2 bg-[#059669] left-1/2 dark:text-white dark:bg-[#059669] hover:text-black ">
            Our Approach
          </span>
        </div>
        <div className="px-[28px] translate-x-[350px] md:-mt-[px]  w-[800px]">
          <h1 className=" text-center ">
            We don’t just ask why. We find solutions to hunger that transform
            and last. Our answer is to build power with grassroots initiatives
            that nourish people and enrich communities.
          </h1>

          {/* !----svgs and details about our approach-----! */}
        </div>
        <div className="justify-start flex py-10 ">
          <div className=" w-[400px] h-[200px] translate-x-[20px] ">
            <div className=" justify-start">
              <img
                src="images/F_supply.jpg"
                className=" border-0 border-black shadow-lg   shadow-black  w-[300px] md:ml-[60px] "
                alt="not found"
              />
              <>
                <h1 className="font-Boogaloo md:mt-[30px] text-2xl text-center">
                  <u>Food Supplier</u>
                </h1>
                <h2 className="  md:w-[350px] md:-mt-[10px] md:ml-[50px] py-4 text-sm text-justify ">
                  Blockchain technology enables food suppliers to establish a
                  transparent and secure system for tracking the food supply
                  chain, ensuring efficient verification, reducing waste, and
                  promoting fair distribution. This fosters trust,
                  accountability, and improves the overall supply of food to
                  those in need.
                </h2>
              </>
            </div>
          </div>

          <div className="w-[400px] h-[200px] translate-x-[160px]">
            <div className=" justify-center">
              <img
                src="images/i.jpg"
                className=" shadow-lg shadow-black md:w-[350px] md:ml-[10px] "
                alt=""
              />
              <>
                <h1 className=" md:mt-[20px] font-Boogaloo text-2xl text-center">
                  <u> An Integrated Platform</u>
                </h1>
                <h2 className="py-4 text-center">
                  Invest in sustainable, grassroots solutions and training
                  programs that help community members grow their own food,
                  elevate their voice and share their knowledge with others.
                </h2>
              </>
            </div>
          </div>

          <div className="w-[400px] translate-x-[300px] h-[200px]">
            <div className=" justify-end">
              <img
                src="images/NGO_.jpg"
                className=" md:-ml-[20px] md:w-[500px] shadow-lg shadow-black "
                alt=""
              />
              <>
                <h1 className="font-Boogaloo md:-ml-[20px] md:mt-[20px] text-2xl text-center">
                  <u>Non-Governmental Organisation</u>
                </h1>
                <h2 className=" text-sm md:-ml-[0px] md:w-[370px] text-justify md:-mt-[15px] py-4 text-center">
                  NGOs are leveraging the Need4Need platform, supported by
                  blockchain technology, to efficiently supply food to the
                  needy. The platform allows NGOs to connect with donors, food
                  suppliers, and beneficiaries in a transparent and secure
                  manner. Through smart contracts and decentralized
                  verification, the platform ensures traceability and reduces
                  administrative overhead.
                </h2>
              </>
            </div>
          </div>
        </div>
      </div>

      <Newsletter />
    </>
  );
};

export default Approach;
