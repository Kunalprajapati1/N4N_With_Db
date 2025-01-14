import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState } from "react";
import { loginAdmin } from "../../actions/adminAction";



const AdminLogin = () => {
  const [officialname, setOfficialName] = useState("");
  const [password, setPassword] = useState("");
  const [officialemail, setOfficialEmail] = useState("");

  const dispatch = useDispatch();

  // const loginAdminState = useSelector(state => state.loginAdminReducer);
  // const {error,success,loading} = loginAdminState;

  // useEffect(() => {
  //     if(localStorage.getItem('currentAdmin')){
  //       window.location.href = '/';
  //     }
  //   },[])

  const loginAdminHandler = async (e) => {
    // window.scrollTo({top:0,behavior:"smooth"});
    e.preventDefault();

    if (
      officialname.trim() === "" ||
      password.trim() === "" || 
      officialemail.trim() === "" 
    ) {
      toast.warn("Please fill out all required fields.", {
        position: "top-center",
      });

      // alert("Password do not match");
    } else {
      const admin = {
        officialname,
        password, 
        officialemail, 
      }; 
      dispatch(loginAdmin(admin));
      setOfficialName("");
      setPassword(""); 
      setOfficialEmail(""); 
      toast.success("Logging you In..", {
        position: "top-center",
      });
    }
  };

  return (
    <>
      <motion.div
        className="bg-[conic-gradient(var(--tw-gradient-stops))] from-blue-400 via-gray-900 to-gray-300
       
         md:-mt-40 -mt-20 h-[800px] md:h-full "
        initial={{ opacity: 0 }}
        animate={{ opacity: 5 }}
        exit={{ opacity: 0 }}
      >
        <div className="relative">
          {/* <img
            src="https://images.unsplash.com/photo-1495592822108-9e6261896da8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className=" w-full h-full "
            alt="not found"
          /> */}
          <div className=" inset-1 ">
            <div className=" p-5 md:py-20 py-10   md:p-10 ">
              <div className="border-2 mt-20 md:mt-28 border-white rounded-3xl backdrop-blur-md bg-[#85858500] font-Main font-semibold ">
                <h1 className="text-3xl p-10 text-center font-Main font-  leading-tight tracking-tight text-blue-800 md:text-4xl dark:text-white">
                  Admin Login
                </h1>
                <form className="font-bold p-5  md:p-20 ">
                  <div className=" md:flex md:justify-between gap-[2px] ">
                    <div>
                      <label
                        htmlFor="Official Name"
                        className="block mb-2 text-sm font-medium text-gray-200 dark:text-white"
                      >
                        Admin Name
                      </label>
                      <input
                        type="text"
                        name="Official Name"
                        id="Official Name"
                        value={officialname}
                        onChange={(e) => setOfficialName(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full md:w-[550px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Daniel"
                        required=""
                      />
                    </div>
                    <div className=" md:mt-0 mt-7">
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-200 dark:text-white"
                      >
                        Admin Password
                      </label>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        name="password"
                        id="password"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full md:w-[550px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="password"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="mt-8">
                    <label
                      htmlFor="officialemail"
                      className="block mb-2 text-sm font-medium text-gray-200 dark:text-white"
                    >
                      Admin Email
                    </label>
                    <input
                      type="email"
                      value={officialemail}
                      onChange={(e) => setOfficialEmail(e.target.value)}
                      name="officialemail"
                      id="officialemail"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full   p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="officialemail"
                      required=""
                    />
                  </div>
                  <div className=" mt-10">
                    <button
                      className="w-full text-base bg-[#3962f4] p-3 rounded-3xl shadow-sm shadow-gray-400 transition ease-in-out delay-100 font-black hover:bg-[#4000ff] hover:text-white text-center text-[#000000]"
                      onClick={(event) => loginAdminHandler(event)}
                    >
                      Login account
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div> 
      </motion.div>
      <ToastContainer />
    </>
  );
};

export default AdminLogin;
