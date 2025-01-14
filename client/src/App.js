import React, { useState, useEffect } from "react";
import "./App.css";
// import Header from "../src/components/Header";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Herosection from "./components/LandingPageNgoDonator/Herosection";
import Contact from "./components/Contact/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DonateDirect from "./Screens/Donators/DonateDirect";
import Explainhome from "./components/LandingPageNgoDonator/Explainhome";
import Solution from "./components/LandingPageNgoDonator/Solution";
import Newsletter from "./components/Newsletter/Newsletter";
import Login from "./dump/Login";
import PulseLoader from "react-spinners/PulseLoader";
import First from "./components/OpeningPage/First";
import Ngomain from "./components/LandingPageNgoDonator/Ngomain";
import Ngoregister from "../src/Screens/Ngo/Ngoregister";
import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";
import Footer2 from "./components/Footer/Footer2";
import NgoList from "./components/NgoCard/NgoList";
import SignupNGO from "./Screens/Ngo/SignupNGO";
import LoginNgo from "./Screens/Ngo/LoginNgo";
import LoginDonator from "./Screens/Donators/LoginDonator";
import SignupDonator from "./Screens/Donators/SignupDonator";
import AdminLogin from "./Screens/Admin/AdminLogin";
import DonatorHeader from "./components/Header/DonatorHeader";
import Footer from "./components/Footer/Footer";
import NgoHeader from "./components/Header/NgoHeader";
import AdminHeader from "./components/Header/AdminHeader";
import AdminDashboard from "./components/AdminPortal/AdminDashboard";
import HomeScreen from "../src/components/Header/HomeScreen";
import DonatorsList from "./components/AdminPortal/DonatorsList"
import AdminNgoList from "./components/AdminPortal/AdminNgoList";
import AddDonator from "./components/AdminPortal/AddDonator";
import AddNgo from "./components/AdminPortal/AddNgo";
import NgoProfile from "./components/Profile/NgoProfile";
import DonatorProfile from "./components/Profile/DonatorProfile";
import EditDonator from "./components/Edit/EditDonator";
import EditNgo from "./components/Edit/EditNgo";
import NotFound from "./components/NotFound/NotFound";



const App = () => {
  let currentNgo = localStorage.getItem("currentNgo")
    ? JSON.parse(localStorage.getItem("currentNgo"))
    : null;
  let currentDonator = localStorage.getItem("currentDonator")
    ? JSON.parse(localStorage.getItem("currentDonator"))
    : null;
  let currentAdmin = localStorage.getItem("currentAdmin")
    ? JSON.parse(localStorage.getItem("currentAdmin"))
    : null;

  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 4000);
  }, []);

  return (
    <>
<Router>
      {Loading ? (
        <div id="toTop" className="App">
          <PulseLoader

            color={"#007fee"}
            loading={Loading}
            className="  "
            size={10}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) :
        currentDonator ? (
        <>
        <DonatorHeader />
          <Routes>
            <Route exact path="/" element={<Herosection />} />
            <Route exact path="/Explainhome" element={<Explainhome />} />
            <Route exact path="/Solution" element={<Solution />} />
            <Route exact path="/Newsletter" element={<Newsletter />} />
            <Route exact path="/Services" element={<Services />} />
            <Route exact path="/Contact" element={<Contact />} />
            <Route exact path="/About" element={<About />} />
            <Route exact path="/Footer" element={<Footer />} />
            <Route exact path="/DonateDirect" element={<DonateDirect />} />
            <Route exact path="/Footer2" element={<Footer2 />} />
            <Route exact path="/DonatorProfile" element={<DonatorProfile />} />
            <Route exact path="/EditDonator" element={<EditDonator />} />
          <Route exact path="/NgoList" element={<NgoList />} />

            <Route path="*" element={<NotFound />} />
            
          </Routes>
        </>
      ) : currentNgo ? (
        <>
        <NgoHeader />
          <Routes>
          <Route exact path="/" element={<Ngomain />} />
          <Route exact path="/NgoList" element={<NgoList />} />
            <Route exact path="/Ngoregister" element={<Ngoregister />} />
            <Route exact path="/Herosection" element={<Herosection />} />
            <Route exact path="/Explainhome" element={<Explainhome />} />
            <Route exact path="/Solution" element={<Solution />} />
            <Route exact path="/Newsletter" element={<Newsletter />} />
            <Route exact path="/Services" element={<Services />} />
            <Route exact path="/Contact" element={<Contact />} />
            <Route exact path="/About" element={<About />} />
            <Route exact path="/Footer" element={<Footer />} />
            <Route exact path="/Footer2" element={<Footer2 />} />
            <Route exact path="/NgoProfile" element={<NgoProfile/>} />
            <Route exact path="/EditNgo" element={<EditNgo/>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </>
      ) : currentAdmin ? (
        <>
        <AdminHeader/>
           
          <Routes>
            <Route exact path="/" element={<AdminDashboard/>} />
            <Route exact path="/DonatorsList" element={<DonatorsList/>} />
            <Route exact path="/AdminNgoList" element={<AdminNgoList/>} />
            <Route exact path="/AddDonator" element={<AddDonator/>} />
            <Route exact path="/AddNgo" element={<AddNgo/>} />
            <Route path="*" element={<NotFound />} />
            
          
            


          </Routes>
        </>
      ) : (
        <>
        
          <Header />
          <Routes>
            <Route exact path="/" element={<First />} />
            <Route exact path="/SignupNGO" element={<SignupNGO />} />
            <Route exact path="/AdminLogin" element={<AdminLogin />} />
            <Route exact path="/SignupDonator" element={<SignupDonator />} />
            <Route exact path="/LoginDonator" element={<LoginDonator />} />
            <Route exact path="/LoginNgo" element={<LoginNgo />} />
            <Route exact path="/NgoList" element={<NgoList />} />
            <Route exact path="/Ngoregister" element={<Ngoregister />} />
            <Route exact path="/Ngomain" element={<Ngomain />} />
            <Route exact path="/Herosection" element={<Herosection />} />
            <Route exact path="/Explainhome" element={<Explainhome />} />
            <Route exact path="/Solution" element={<Solution />} />
            <Route exact path="/DonateDirect" element={<DonateDirect />} />
            <Route exact path="/About" element={<About />} />
            <Route exact path="/Newsletter" element={<Newsletter />} />
            <Route exact path="/Services" element={<Services />} />
            <Route exact path="/Contact" element={<Contact />} />
            <Route exact path="/Login" element={<Login />} />
            <Route exact path="/Footer2" element={<Footer2 />} />
            <Route exact path="/Footer" element={<Footer />} />
             <Route path="*" element={<NotFound />} />
          </Routes>
        
        </>
      )}
    </Router>

    </>
  );
};

export default App;
