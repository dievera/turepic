import "./App.css";
//import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./route/Home";
import Imagen from "./route/Imagen";
import Autor from "./route/Autor";
import Footer from "./components/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <div className="row">
            <Navbar />
            <Home />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Imagen" element={<Imagen />} />
              <Route path="/Autor" element={<Autor />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
