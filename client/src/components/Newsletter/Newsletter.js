import React, { useState } from "react";
import Footer from "../Footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    if (email === "") {
      toast.warn("Please enter your email address", {
        position: "top-center",
      });
    } else {
      const user = { email };
      setEmail("");
      const res = await fetch(
        "https://subscribenewsletter-f2e99-default-rtdb.firebaseio.com/emailnewslett.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );
      if (res) {
        setEmail("");
        toast.success(
          "Thanks for subscribing! You will be notified by our every latest news!!",
          {
            position: "top-center",
          }
        );
        console.log(user);
      }
    }
  };
  return (
    <>
      <div className=" bg-[#789bc9] h-[500px] md:h-[500px] translate-y-[650px] md:translate-y-[400px] mt-[900px] md:mt-[100px] absolute container my-24 mx-auto md:px-6">
        <section className="mb-32  text-center lg:text-left">
          <div className="flex flex-wrap justify-center">
            <div className="w-full shrink-0 grow-0 basis-auto px-3 md:w-10/12 lg:w-11/12 xl:w-10/12">
              <div className="grid items-center gap-x-6 lg:grid-cols-2">
                <div className="mb-20 lg:mb-0">
                  <h2 className="md:text-7xl text-4xl translate-y-[80px] font-medium font-Foldit dark:text-white">
                    Do not miss any updates.
                    <br />
                    <span className="text-primary font-Foldit dark:text-primary-400">
                      Subscribe to the newsletter !!
                    </span>
                  </h2>
                </div>
                <form method="POST">
                  <div className="mb-6 translate-y-[80px] flex-row md:mb-0 md:flex">
                    <div
                      className="relative mb-3 w-full md:mr-3 md:mb-0 xl:w-96"
                      data-te-input-wrapper-init
                    >
                      <input
                        type="text"
                        className="peer shadow-2xl shadow-black block min-h-[auto] h-[50px] md:h-[50px] w-full rounded border-2 border-black px-3 bg-[#dcd7d750] py-[0.32rem] placeholder:text-white"
                        id="exampleFormControlInput2"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                      />
                      <label
                        htmlhtmlfor="exampleFormControlInput2"
                        className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                      ></label>
                    </div>
                    <button
                      type="submit"
                      onClick={submitHandler}
                      className="inline-block shadow-black shadow-2xl rounded md:my-0 transform duration-300 ease-in-out hover:bg-blue-800 hover:border-2 hover:border-blue-900  w-[150px] h-[50px] bg-black text-white text-xl font-SourceSansPro font-bold "
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
      <ToastContainer />
    </>
  );
};

export default Newsletter;
