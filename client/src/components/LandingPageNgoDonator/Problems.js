import React from "react";
import Solution from "./Solution";
import Fade from 'react-reveal/Fade';
const Problems = () => {
  return (
    <>
     
      <section>
      <Fade bottom distance="20%">
        <div className="  md:p-0 p-10 md:mt-20 mt-10 ">
          <h1 className=" md:p-[100px] font-SourceSansPro text-5xl md:text-6xl font-bold">
            Problems Arising Because of Food Waste
          </h1>
          {/* <hr className="h-1 -my-[80px] md:w-[300px ]  md:mx-[90px] bg-gray-700 border-0 rounded dark:bg-gray-700" /> */}
        </div></Fade>

      
        <div className="   h-full w-full md:p-0 p-10 md:-translate-y-[150px] translate-y-[1px] ">
          <div className=" w-full md:w-[1000px] h-[200px] md:my-[80px] md:ml-[90px] md:p-[50px] ">
            <h1 className=" md:text-justify text-justify font-SourceSansPro text-xl md:text-2xl ">
              <ul>
      <Fade bottom distance="20%">

                <li>
                  <b>Climate Change:</b> As previously mentioned, food wastage
                  contributes to climate change by emitting methane as it
                  decomposes in landfills. Methane is a potent bluehouse gas
                  that has a more significant impact on global warming than
                  carbon dioxide.
                  <br />
                  <br />
                  <b>Water Scarcity:</b> The production of food requires a
                  considerable amount of water, and when food is wasted, all of
                  the water used in its production is also wasted. This puts
                  additional pressure on already scarce water resources,
                  especially in areas that are prone to droughts and water
                  shortages.
                  <br />
                  <br />
                </li></Fade>
      <Fade bottom distance="20%">

                <li>
                  <b>Land Use:</b> Agriculture is one of the primary drivers of
                  deforestation and habitat destruction, and food wastage puts
                  additional pressure on these resources. This is because
                  producing food requires large amounts of land, and when food
                  is wasted, all of that land is also wasted.
                  <br />
                  <br />
                </li>
                </Fade>
      <Fade bottom distance="20%">

                <l1>
                  <b>Biodiversity Loss: </b>Food production is a leading cause
                  of biodiversity loss, and when food is wasted, it worsens this
                  problem. Agriculture uses large amounts of land and water, and
                  food wastage puts additional pressure on these resources,
                  leading to habitat destruction and loss of biodiversity.
                  <br />
                  <br />
                </l1>
                </Fade>
      <Fade bottom distance="20%">

                <li>
                  <b>Resource Depletion:</b> The production of food requires
                  significant amounts of resources such as water, energy, and
                  land. When food is wasted, all of these resources are also
                  wasted, leading to their depletion.
                  <br />
                  <br />
                </li>
                </Fade>
      <Fade bottom distance="20%">

                <li>
                  <b>Health Risks:</b> Food that is wasted can become a public
                  health hazard if it is not disposed of properly. When food
                  decomposes, it can attract pests such as rats and flies, which
                  can spread diseases to humans.
                </li>
                </Fade>
              </ul>
            </h1>
          </div>
        </div>
       
      </section>

      <Solution/>
    </>
  );
};

export default Problems;
