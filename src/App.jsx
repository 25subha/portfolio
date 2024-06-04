// import { Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Project from "./pages/Project";
import Contact from "./components/ContactApi";
import toast, { Toaster } from 'react-hot-toast';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
 

  return (
    <div className=" bg-black text-white	h-full w-full font-[poppins] capitalize">
    <div>
          
     <Navbar/>
     <Home/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>

      <Toaster />
    </div>
    
  )
}

export default App;
