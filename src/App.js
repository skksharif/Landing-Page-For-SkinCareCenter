import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";

import Skin from "./pages/Skin";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Disease from "./components/Disease";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/skin-services" element={<Skin />} />
        <Route path="/cosmetic-dermotology" element={<Disease />}>
            <Route path=":treatmentName" element={<Disease/>}/>
        </Route>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
