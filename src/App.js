import { Link, Route, Routes} from "react-router-dom";
import * as React from "react"
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Home from "./pages/autres/Home";
import Services from "./pages/autres/Services";
import Contact from "./pages/autres/Contact";
import Aide from "./pages/autres/Aide";
import Error from "./pages/autres/Error";
import Recherche from "./pages/autres/Recherche";
import Postedoc from "./pages/autres/Postedoc";

export default function App() {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login />} />
    <Route path="/services" element={<Services />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/aide" element={<Aide />} />
    <Route path="/error" element={<Error />} />
    <Route path="/recherche" element={<Recherche />} />
    <Route path="/postedoc" element={<Postedoc />} />
    
  </Routes>
  );
}