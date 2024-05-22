import Navber from "./components/Navber";
// import { Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Project from "./pages/Project";
import Contact from "./components/ContactApi";
import toast, { Toaster } from 'react-hot-toast';

function App() {
 

  return (
    <div className=" bg-black text-white	">
      <Navber />
      
      <main className="mx-20">
        {/* <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />}/>
          <Route path="/project" element={<Project />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes> */}
            <Home/>
          <About/>
          <Skills/>
          <Project/>
          <Contact/>
      </main>
      <Toaster />
    </div>
  )
}

export default App;
