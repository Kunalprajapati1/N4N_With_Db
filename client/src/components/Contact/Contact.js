// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import Fade from "react-reveal/Fade";

// const Contact = (props) => {
//   const [isVisible, setIsVisible] = useState(false);

//   const handleScroll = () => {
//     if (window.scrollY > 100) {
//       setIsVisible(true);
//     } else {
//       setIsVisible(false);
//     }
//   };

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     // Scroll to the top when the component mounts
//     window.scrollTo(0, 0);
//   }, []);

//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

  

//   return (
//     <>
      // <motion.div
      //   className=" bg-[#00101d] h-[2000px] md:h-full "
      //   initial={{ opacity: 0 }}
      //   animate={{ opacity: 5 }}
      //   exit={{ opacity: 0 }}
      // >
//         <div className=" relative">
//           <img
//             src="https://images.unsplash.com/photo-1690321607822-669326f4e3cc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             className=" md:h-[1900px] h-full w-full "
//             alt="not found"
//           />

//           <div class="absolute inset-0 flex items-center justify-center">
//             <div className="md:p-0 p-2 w-full h-full  ">
//               <Fade top distance="20%">
//                 <div class=" md:p-20   font-Main ">
//                   <div class="  text-center sm:text-center md:mx-auto ">
//                     {/* <p class="md:text-4xl font-semi uppercase tracking-wide text-gray-900 dark:text-blue-200">
//                       Contact
//                     </p> */}
                    // <h2 class="md:p-20 font-italic text-4xl p-10  font- tracking-tight  text-blue-600 md:drop-shadow-[4px_3px_var(--tw-shadow-color)] shadow-[#5b715e98] dark:text-white md:text-7xl sm:text-5xl">
                    //   Reach out to us easily – we're just a message away!
                    // </h2>
//                   </div>
                  // <div class="flex w-full   md:mt-[100px] mt-6 p-2  md:mb-10 items-stretch justify-center">
                  //   <p class=" text-center md:rounded-none rounded-3xl md:p-10 font-Main p-4 w-full bg-[#34d83443]  md:bg-blue-500 font- md:text-xl text-[white] md:text-gray-800 dark:text-slate-400">
                  //     "Connect with us effortlessly - your questions, feedback,
                  //     and inquiries matter. We're here to listen and respond
                  //     promptly."
                  //   </p>
                  // </div>
//                 </div>

//                 <div className=" md:mt-0 mt-10 p-3 md:p-20">
//                   <div className=" md:border-2 backdrop-blur-md md:p-20  p-2 md:mt-20 mt-10 md:mb-0 mb-10 md:w-full w-full  font-Main font- md:flex justify-center gap-20 ">
//                     <div className="">
//                       <li class="flex">
//                         <div class="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             width="24"
//                             height="24"
//                             viewBox="0 0 24 24"
//                             fill="none"
//                             stroke="currentColor"
//                             stroke-width="2"
//                             stroke-linecap="round"
//                             stroke-linejoin="round"
//                             class="h-6 w-6"
//                           >
//                             <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
//                             <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
//                           </svg>
//                         </div>
//                         <div class="ml-4 mb-4">
//                           <h3 class="mb-2 font- md:text-lg  leading-6 text-blue-400 dark:text-white">
//                             Our Address
//                           </h3>
//                           <p class="text-gray-300  text-sm  dark:text-slate-400">
//                             2709, Jawahar Colony N.I.T. Faridabad
//                           </p>
//                           <p class="text-gray-300  text-sm  dark:text-slate-400">
//                             Faridabad, Haryana, India
//                           </p>
//                         </div>
//                       </li>
//                     </div>
//                     <div className="  ">
//                       <li class="flex">
//                         <div class="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             width="24"
//                             height="24"
//                             viewBox="0 0 24 24"
//                             fill="none"
//                             stroke="currentColor"
//                             stroke-width="2"
//                             stroke-linecap="round"
//                             stroke-linejoin="round"
//                             class="h-6 w-6"
//                           >
//                             <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
//                             <path d="M15 7a2 2 0 0 1 2 2"></path>
//                             <path d="M15 3a6 6 0 0 1 6 6"></path>
//                           </svg>
//                         </div>
                        // <div class="ml-4 mb-4">
                        //   <h3 class="mb-2 md:text-lg font- leading-6 text-blue-400 dark:text-white">
                        //     Contact
                        //   </h3>
                        //   <p class="text-gray-300 text-sm  dark:text-slate-400">
                        //     {" "}
                        //     Mobile:
                        //     <a
                        //       href="tel:+11234567890"
                        //       className="text-gray-300 transition ease-in-out hover:text-blue-500 dark:text-slate-400"
                        //     >
                        //       +1 (123) 456-7890
                        //     </a>
                        //   </p>
                        //   <p class="text-gray-300 text-sm  dark:text-slate-400">
                        //     Mail:
                        //     <a
                        //       href="mailto:need4need@gmail.com"
                        //       className="text-gray-300 transition ease-in-out hover:text-blue-500 dark:text-slate-400"
                        //     >
                        //       need4need@gmail.com
                        //     </a>
                        //   </p>
                        // </div>
//                       </li>
//                     </div>
//                     <div className="">
//                       <li class="flex">
//                         <div class="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             width="24"
//                             height="24"
//                             viewBox="0 0 24 24"
//                             fill="none"
//                             stroke="currentColor"
//                             stroke-width="2"
//                             stroke-linecap="round"
//                             stroke-linejoin="round"
//                             class="h-6 w-6"
//                           >
//                             <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
//                             <path d="M12 7v5l3 3"></path>
//                           </svg>
//                         </div>
//                         <div class="ml-4 mb-4">
//                           <h3 class="mb-2 md:text-lg  font- leading-6 text-blue-400 dark:text-white">
//                             Working hours
//                           </h3>
//                           <p class="text-gray-300 text-sm  dark:text-slate-400">
//                             Monday - Friday: 08:00 - 17:00
//                           </p>
//                           <p class="text-gray-300 text-sm  dark:text-slate-400">
//                             Saturday &amp; Sunday: 08:00 - 12:00
//                           </p>
//                         </div>
//                       </li>
//                     </div>
//                   </div>
//                   <div className=" mt-28 ">
//                   <div className="">
//                     <h2 class=" text-3xl font-Main md:mt-20 font- tracking-tight  text-blue-400  dark:text-white text-center md:text-4xl sm:text-5xl">
//                       Fill your Details with Query
//                     </h2>
//                   </div>
//                   <div className="grid md:mt-[100px] mt-10 font-Main md:grid-cols-2 items-center shadow-black shadow-2xl  overflow-hidden  rounded-3xl max-w-6xl mx-auto ">
//                     <div className="sm:p-10 max-sm:px-4 max-sm:py-8 bg-[#0508147c]">
//                       <h2 className="text-3xl font-extra text-white">
//                         Get In <span className="text-blue-500">Touch</span>
//                       </h2>
//                       <p className="text-sm text-gray-200 mt-3">
//                         Have a specific inquiry or looking to explore new
//                         opportunities? Our experienced team is ready to engage
//                         with you.
//                       </p>
//                       <form>
//                         <div className="space-y-4 mt-8">
//                           <input
//                             type="text"
//                             placeholder="Full Name"
//                             className="px-2 py-3 bg-transparent text-white placeholder:text-gray-300 w-full text-sm border-b border-gray-200 focus:border-white outline-none"
//                           />

//                           <input
//                             type="number"
//                             placeholder="Phone No."
//                             className="px-2 py-3 bg-transparent text-white w-full placeholder:text-gray-300 text-sm border-b border-gray-200 focus:border-white outline-none"
//                           />

//                           <input
//                             type="email"
//                             placeholder="Email"
//                             className="px-2 py-3 bg-transparent text-white w-full placeholder:text-gray-300 text-sm border-b border-gray-200 focus:border-white outline-none"
//                           />

//                           <textarea
//                             placeholder="Write Message"
//                             className="px-2 pt-3 bg-transparent text-white w-full placeholder:text-gray-300 text-sm border-b border-gray-200 focus:border-white outline-none"
//                           ></textarea>
//                         </div>
//                         <button
//                           type="button"
//                           className="mt-8 flex items-center justify-center text-sm w-full rounded px-4 py-2.5 font-semi bg-blue-600 text-white hover:bg-blue-700"
//                         >
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             width="16px"
//                             height="16px"
//                             fill="#fff"
//                             className="mr-2"
//                             viewBox="0 0 548.244 548.244"
//                           >
//                             <path
//                               fill-rule="evenodd"
//                               d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
//                               clip-rule="evenodd"
//                               data-original="#000000"
//                             />
//                           </svg>
//                           Send Message
//                         </button>
//                       </form>
//                       <ul className="mt-4 flex justify-center lg:space-x-6 max-lg:flex-col max-lg:items-center max-lg:space-y-2 ">
//                       <li className="flex items-center text-blue-500">
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="16px"
//     height="16px"
//     fill="currentColor"
//     viewBox="0 0 479.058 479.058"
//   >
//     <path
//       d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
//       data-original="#000000"
//     />
//   </svg>
//   <a
//     href="mailto:need4need@gmail.com"
//     className="text-current text-sm ml-3"
//   >
//     <strong>need4need@gmail.com</strong>
//   </a>
// </li>

//                         <li className="flex items-center text-blue-500">
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             width="16px"
//                             height="16px"
//                             fill="currentColor"
//                             viewBox="0 0 482.6 482.6"
//                           >
//                             <path
//                               d="M98.339 320.8c47.6 56.9 104.9 101.7 170.3 133.4 24.9 11.8 58.2 25.8 95.3 28.2 2.3.1 4.5.2 6.8.2 24.9 0 44.9-8.6 61.2-26.3.1-.1.3-.3.4-.5 5.8-7 12.4-13.3 19.3-20 4.7-4.5 9.5-9.2 14.1-14 21.3-22.2 21.3-50.4-.2-71.9l-60.1-60.1c-10.2-10.6-22.4-16.2-35.2-16.2-12.8 0-25.1 5.6-35.6 16.1l-35.8 35.8c-3.3-1.9-6.7-3.6-9.9-5.2-4-2-7.7-3.9-11-6-32.6-20.7-62.2-47.7-90.5-82.4-14.3-18.1-23.9-33.3-30.6-48.8 9.4-8.5 18.2-17.4 26.7-26.1 3-3.1 6.1-6.2 9.2-9.3 10.8-10.8 16.6-23.3 16.6-36s-5.7-25.2-16.6-36l-29.8-29.8c-3.5-3.5-6.8-6.9-10.2-10.4-6.6-6.8-13.5-13.8-20.3-20.1-10.3-10.1-22.4-15.4-35.2-15.4-12.7 0-24.9 5.3-35.6 15.5l-37.4 37.4c-13.6 13.6-21.3 30.1-22.9 49.2-1.9 23.9 2.5 49.3 13.9 80 17.5 47.5 43.9 91.6 83.1 138.7zm-72.6-216.6c1.2-13.3 6.3-24.4 15.9-34l37.2-37.2c5.8-5.6 12.2-8.5 18.4-8.5 6.1 0 12.3 2.9 18 8.7 6.7 6.2 13 12.7 19.8 19.6 3.4 3.5 6.9 7 10.4 10.6l29.8 29.8c6.2 6.2 9.4 12.5 9.4 18.7s-3.2 12.5-9.4 18.7c-3.1 3.1-6.2 6.3-9.3 9.4-9.3 9.4-18 18.3-27.6 26.8l-.5.5c-8.3 8.3-7 16.2-5 22.2.1.3.2.5.3.8 7.7 18.5 18.4 36.1 35.1 57.1 30 37 61.6 65.7 96.4 87.8 4.3 2.8 8.9 5 13.2 7.2 4 2 7.7 3.9 11 6 .4.2.7.4 1.1.6 3.3 1.7 6.5 2.5 9.7 2.5 8 0 13.2-5.1 14.9-6.8l37.4-37.4c5.8-5.8 12.1-8.9 18.3-8.9 7.6 0 13.8 4.7 17.7 8.9l60.3 60.2c12 12 11.9 25-.3 37.7-4.2 4.5-8.6 8.8-13.3 13.3-7 6.8-14.3 13.8-20.9 21.7-11.5 12.4-25.2 18.2-42.9 18.2-1.7 0-3.5-.1-5.2-.2-32.8-2.1-63.3-14.9-86.2-25.8-62.2-30.1-116.8-72.8-162.1-127-37.3-44.9-62.4-86.7-79-131.5-10.3-27.5-14.2-49.6-12.6-69.7z"
//                               data-original="#000000"
//                             ></path>
//                           </svg>
//                           <a
//                             href="javascript:void(0)"
//                             className="text-current text-sm ml-3"
//                           >
//                             <strong>+91 9818909927</strong>
//                           </a>
//                         </li>
//                       </ul>
//                     </div>
//                     <div className="z-10 relative h-full max-md:min-h-[350px]">
//                       <iframe
//                         src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed"
//                         className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
//                         frameborder="0"
//                         allowfullscreen
//                       ></iframe>
//                     </div>
//                   </div></div>
//                 </div>
//               </Fade>
//             </div>
//           </div>
//         </div>
//         <div
//           className={` z-50 scroll-to-top ${isVisible ? "visible" : ""}`}
//           onClick={scrollToTop}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke-width="1.5"
//             stroke="currentColor"
//             class="w-9 h-9"
//           >
//             <path
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               d="m4.5 18.75 7.5-7.5 7.5 7.5"
//             />
//             <path
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               d="m4.5 12.75 7.5-7.5 7.5 7.5"
//             />
//           </svg>
//         </div>
//       </motion.div>
//     </>
//   );
// };
// export default Contact;
// // export default GoogleApiWrapper({
// //   apiKey: "AIzaSyBrNEx8tasNAw2WFJXPd_lPuJswTZQ8Trc", // Replace with your Google Maps API key
// // })(Ask);
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Fade from "react-reveal/Fade";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { contact } from "../../actions/user";
// import { contact } from "../../actions/user";


const ContactUs = (props) => {
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
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const [UserName, setUserName] = useState("");
  const [UserPhoneNumber, setUserPhoneNumber] = useState("");
  const [UserEmail, setUserEmail] = useState("");
  const [UserMessage, setUserMessage] = useState("");
  const dispatch = useDispatch();

  
 const submitSignup = async (e) => {
  e.preventDefault();

  // Email validation using a regular expression
   const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(UserEmail)) {
    toast.warn("Please enter a valid email address.", {
      position: "top-center",
    });
    return;
  }

  // Phone number validation
  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(UserPhoneNumber)) {
    toast.warn("Please enter a valid 10-digit phone number.", {
      position: "top-center",
    });
    return;
  }

  if (
    UserName.trim() === "" ||
    UserEmail.trim() === "" ||
    UserPhoneNumber.trim() === ""
  ) {
    toast.warn("Please fill out all required fields")
  } else {
    const userContact = {
      UserName,
      UserEmail, 
      UserPhoneNumber,
      UserMessage,
      
    };
    dispatch(contact(userContact));
    setUserName("");
    setUserEmail("");
    setUserPhoneNumber("");
    setUserMessage("");
    
    // toast.success("Account created successfully!.", {
    //   position: "top-center",
    // });
    // navigate("/LoginDonator");
  }
};
  return (
    <>
    <ToastContainer />
    <motion.div
        className=" bg-[#00101d] md:-mt-20 -mt-20 h-[2000px] md:h-full "
        initial={{ opacity: 0 }}
        animate={{ opacity: 5 }}
        exit={{ opacity: 0 }}
      >
        <div className=" relative">
        <img
            src="https://img.freepik.com/free-photo/white-smoke-collection-black-background_1112-1676.jpg?w=360&t=st=1717585260~exp=1717585860~hmac=2602ef7436b77635d5f0cae7673b806e023887c0404e8bcf814cafcaaf1d8d69"
            className=" md:h-[1900px] h-full w-full "
            alt="not found"
          />

          <div class="absolute inset-0 flex items-center md:mt-40  mt-20 justify-center">
            <div className="md:p-0 p-2 w-full h-full  ">
              <Fade top distance="20%">
                <div class=" md:p-20  text-justify  font-Main ">
                  <div class="  text-center sm:text-center md:mx-auto ">
                    {/* <p class="md:text-4xl font-semi uppercase tracking-wide text-gray-900 dark:text-blue-200">
                      Contact
                    </p> */}
                    <h2 class="  font-Main text-xl  font-semi tracking-tight  text-blue-600  p-shadow-[4px_3px_var(--tw-shadow-color)] shadow-[#5b5c7198]  px-10 md:px-0 dark:text-white md:text-4xl sm:text-5xl">
                      Reach out to us easily – We're just a message away!
                    </h2>
                    <p class=" md:mt-8 mt-6 px-10 md:px-0 text-justify md:text-center md:rounded-none rounded-3xl m 0 font-Main  w-full bg-[#34d83400]  md:bg-[#34d83400] font- md:text-xl text-[white] md:text-gray-300 dark:text-slate-400">
                      "Connect with us effortlessly - your questions, feedback,
                      and inquiries matter. We're here to listen and respond
                      promptly."
                    </p>
                  </div>
                   
                </div>

                <div className=" md:mt-10 mt-10 p-3 md: ">
                    <hr className=" w-full border-white "/>
                  <div className="  bg-fuchia-500 backdrop-blur-md md:p-20  p-2 md:mt-1 mt-10 md:mb-0 mb-10 md:w-full w-full  font-main  md:flex justify-evenly ">
                    <div className="  bg-fchsia-900 hover:border-2 p-5 transition ease-in-out hover:bg-slate-800 rounded-2xl  ">
                      <li class="flex">
                        <div class="flex h-10 w-10 items-center justify-center rounded bg-[#000000] text-gray-50">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="h-6 w-6"
                          >
                            <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                            <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                          </svg>
                        </div>
                        <div class="ml-4  mb-4">
                          <h3 class="mb-2 font- md:text-lg  leading-6 text-blue-400 dark:text-white">
                            Our Address
                          </h3>
                          <p class="text-[white]  text-sm  dark:text-slate-400">
                            3/ 191, Sivaji Ganeshan Street,
                          </p>
                          <p class="text-[white]  text-sm  dark:text-slate-400">
                            S.N.Puram , Sivakasi, Tamil Nadu India
                          </p>
                        </div>
                      </li>
                    </div>
                    <div className=" rounded-2xl  hover:border-2 p-5 transition ease-in-out hover:bg-slate-800 ">
                      <li class="flex">
                        <div class="flex h-10 w-10 items-center justify-center rounded bg-[#000000] text-gray-50">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="h-6 w-6"
                          >
                            <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                            <path d="M15 7a2 2 0 0 1 2 2"></path>
                            <path d="M15 3a6 6 0 0 1 6 6"></path>
                          </svg>
                        </div>
                        <div class="ml-4 mb-4">
                          <h3 class="mb-2 md:text-lg font- leading-6 text-blue-400 dark:text-white">
                            Contact
                          </h3>
                          <p class="text-gray-300 text-sm  dark:text-slate-400">
                            {" "}
                            Mobile:
                            <a
                              href="tel:+11234567890"
                              className="text-gray-300 transition ease-in-out hover:text-blue-500 dark:text-slate-400"
                            >
                              +1 (123) 456-7890
                            </a>
                          </p>
                          <p class="text-gray-300 text-sm  dark:text-slate-400">
                            Mail:
                            <a
                              href="mailto:need4need@gmail.com"
                              className="text-gray-300 transition ease-in-out hover:text-blue-500 dark:text-slate-400"
                            >
                              need4need@gmail.com
                            </a>
                          </p>
                        </div>
                      </li>
                    </div>
                    <div className="hover:border-2 p-5 rounded-2xl transition ease-in-out hover:bg-slate-800 ">
                      <li class="flex">
                        <div class="flex h-10 w-10 items-center justify-center rounded bg-[#000000] text-gray-50">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="h-6 w-6"
                          >
                            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                            <path d="M12 7v5l3 3"></path>
                          </svg>
                        </div>
                        <div class="ml-4 mb-4">
                          <h3 class="mb-2 md:text-lg  font- leading-6 text-blue-400 dark:text-white">
                            Working hours
                          </h3>
                          <p class="text-[white] text-sm  dark:text-slate-400">
                            Monday - Friday: 08:00 - 17:00
                          </p>
                          <p class="text-[white] text-sm  dark:text-slate-400">
                            Saturday &amp; Sunday: 08:00 - 12:00
                          </p>
                        </div>
                      </li>
                    </div>
                  </div>
                  <hr className=" w-full border-white "/>

                  <div className=" mt-20 md:mt-0">
                    <div className="">
                      <h2 class=" text-3xl font-main md:mt-20 font- tracking-tight  text-[#e1e1e1]    text-center md:text-4xl sm:text-5xl">
                        Fill your Details with Query
                      </h2>
                    </div>
                    <div className="grid md:mt-[100px] mt-10 font-main md:grid-cols-2 items-center shadow-black shadow-2xl  overflow-hidden  rounded-3xl max-w-6xl mx-auto ">
                      <div className="sm:p-10 max-sm:px-4 max-sm:py-8 bg-[#0508147c]">
                        <h2 className="text-3xl font-extra text-white">
                          Get In <span className="text-blue-400">Touch</span>
                        </h2>
                        <p className="text-sm text-gray-200 mt-3">
                          Have a specific inquiry or looking to explore new
                          opportunities? Our experienced team is ready to engage
                          with you.
                        </p>
                        <form>
                          <div className="space-y-4 mt-8">
                            <input
                              type="text"
                              value={UserName}
                              onChange={(e) => setUserName(e.target.value)}
                              placeholder="Full Name"
                              className="px-2 py-3 bg-transparent text-white placeholder:text-gray-300 w-full text-sm border-b border-gray-200 focus:border-white outline-none"
                            />

                            <input
                              type="number"
                              value={UserPhoneNumber}
                              onChange={(e) =>
                                setUserPhoneNumber(e.target.value)
                              }
                              placeholder="Phone No."
                              className="px-2 py-3 bg-transparent text-white w-full placeholder:text-gray-300 text-sm border-b border-gray-200 focus:border-white outline-none"
                            />

                            <input
                              type="email"
                              value={UserEmail}
                              onChange={(e) => setUserEmail(e.target.value)}
                              placeholder="Email"
                              className="px-2 py-3 bg-transparent text-white w-full placeholder:text-gray-300 text-sm border-b border-gray-200 focus:border-white outline-none"
                            />

                            <input
                              type="text"
                              value={UserMessage}
                              onChange={(e) => setUserMessage(e.target.value)}
                              placeholder="Message"
                              className="px-2 py-3 bg-transparent text-white w-full placeholder:text-gray-300 text-sm border-b border-gray-200 focus:border-white outline-none"
                            />
                          </div>
                          <button
                        onClick={submitSignup}
                            type="button"
                            className="mt-8 flex items-center justify-center text-sm w-full rounded px-4 py-2.5 font-semi bg-blue-400 text-white hover:bg-blue-400"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16px"
                              height="16px"
                              fill="#fff"
                              className="mr-2"
                              viewBox="0 0 548.244 548.244"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                                clip-rule="evenodd"
                                data-original="#000000"
                              />
                            </svg>
                            Send Message
                          </button>
                        </form>
                        <ul className="mt-4 flex justify-center lg:space-x-6 max-lg:flex-col max-lg:items-center max-lg:space-y-2 ">
                          <li className="flex items-center text-blue-400">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16px"
                              height="16px"
                              fill="currentColor"
                              viewBox="0 0 479.058 479.058"
                            >
                              <path
                                d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                                data-original="#000000"
                              />
                            </svg>
                            <a
                              href="mailto:unityofyouthofficial@gmail.com"
                              className="text-current text-sm ml-3"
                            >
                              <strong>unityofyouthofficial@gmail.com</strong>
                            </a>
                          </li>

                          <li className="flex items-center text-blue-400">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16px"
                              height="16px"
                              fill="currentColor"
                              viewBox="0 0 482.6 482.6"
                            >
                              <path
                                d="M98.339 320.8c47.6 56.9 104.9 101.7 170.3 133.4 24.9 11.8 58.2 25.8 95.3 28.2 2.3.1 4.5.2 6.8.2 24.9 0 44.9-8.6 61.2-26.3.1-.1.3-.3.4-.5 5.8-7 12.4-13.3 19.3-20 4.7-4.5 9.5-9.2 14.1-14 21.3-22.2 21.3-50.4-.2-71.9l-60.1-60.1c-10.2-10.6-22.4-16.2-35.2-16.2-12.8 0-25.1 5.6-35.6 16.1l-35.8 35.8c-3.3-1.9-6.7-3.6-9.9-5.2-4-2-7.7-3.9-11-6-32.6-20.7-62.2-47.7-90.5-82.4-14.3-18.1-23.9-33.3-30.6-48.8 9.4-8.5 18.2-17.4 26.7-26.1 3-3.1 6.1-6.2 9.2-9.3 10.8-10.8 16.6-23.3 16.6-36s-5.7-25.2-16.6-36l-29.8-29.8c-3.5-3.5-6.8-6.9-10.2-10.4-6.6-6.8-13.5-13.8-20.3-20.1-10.3-10.1-22.4-15.4-35.2-15.4-12.7 0-24.9 5.3-35.6 15.5l-37.4 37.4c-13.6 13.6-21.3 30.1-22.9 49.2-1.9 23.9 2.5 49.3 13.9 80 17.5 47.5 43.9 91.6 83.1 138.7zm-72.6-216.6c1.2-13.3 6.3-24.4 15.9-34l37.2-37.2c5.8-5.6 12.2-8.5 18.4-8.5 6.1 0 12.3 2.9 18 8.7 6.7 6.2 13 12.7 19.8 19.6 3.4 3.5 6.9 7 10.4 10.6l29.8 29.8c6.2 6.2 9.4 12.5 9.4 18.7s-3.2 12.5-9.4 18.7c-3.1 3.1-6.2 6.3-9.3 9.4-9.3 9.4-18 18.3-27.6 26.8l-.5.5c-8.3 8.3-7 16.2-5 22.2.1.3.2.5.3.8 7.7 18.5 18.4 36.1 35.1 57.1 30 37 61.6 65.7 96.4 87.8 4.3 2.8 8.9 5 13.2 7.2 4 2 7.7 3.9 11 6 .4.2.7.4 1.1.6 3.3 1.7 6.5 2.5 9.7 2.5 8 0 13.2-5.1 14.9-6.8l37.4-37.4c5.8-5.8 12.1-8.9 18.3-8.9 7.6 0 13.8 4.7 17.7 8.9l60.3 60.2c12 12 11.9 25-.3 37.7-4.2 4.5-8.6 8.8-13.3 13.3-7 6.8-14.3 13.8-20.9 21.7-11.5 12.4-25.2 18.2-42.9 18.2-1.7 0-3.5-.1-5.2-.2-32.8-2.1-63.3-14.9-86.2-25.8-62.2-30.1-116.8-72.8-162.1-127-37.3-44.9-62.4-86.7-79-131.5-10.3-27.5-14.2-49.6-12.6-69.7z"
                                data-original="#000000"
                              ></path>
                            </svg>
                            <a
                              href="javascript:void(0)"
                              className="text-current text-sm ml-3"
                            >
                              <strong>+91 9600722059</strong>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="z-10 relative h-full max-md:min-h-[350px]">
                        <iframe
                          src="https://maps.google.com/maps?q=UNITY%20OF%20YOUTH%20FOUNDATION&t=&z=13&ie=UTF8&iwloc=&output=embed"
                          className="absolute inset-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                          frameborder="0"
                          allowfullscreen
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
        <div
          className={` z-50 scroll-to-top ${isVisible ? "visible" : ""}`}
          onClick={scrollToTop}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-9 h-9"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m4.5 18.75 7.5-7.5 7.5 7.5"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m4.5 12.75 7.5-7.5 7.5 7.5"
            />
          </svg>
        </div>
      </motion.div>
    </>
  );
};
export default ContactUs;
// export default GoogleApiWrapper({
//   apiKey: "AIzaSyBrNEx8tasNAw2WFJXPd_lPuJswTZQ8Trc", // Replace with your Google Maps API key
// })(Ask);
