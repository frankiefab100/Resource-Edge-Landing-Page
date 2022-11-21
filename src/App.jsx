import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import HumanResource from "./components/HR/HumanResource";
import AdminLogistics from "./components/Admin/AdminLogistics";
import Finance from "./components/Finance/Finance";
import Features from "./components/Features/FeatureBrands";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <HumanResource />
      <AdminLogistics />
      <Finance />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
