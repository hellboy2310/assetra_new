import Navbar from "./common/Navbar";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Home from "./components/Home";
import About from "./components/About";
import Team from './components/Team';
import Services from "./components/Services";



function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/services' element={<Services/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </div>
  );
}

export default App
