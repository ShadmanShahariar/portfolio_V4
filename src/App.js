import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import Footer from "./components/Footer";
import OurCompany from "./routes/OurCompany";
import OurTeam from "./routes/OurTeam";

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/our-company" element={<OurCompany />} />
        <Route path="/about/our-team" element={<OurTeam />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
