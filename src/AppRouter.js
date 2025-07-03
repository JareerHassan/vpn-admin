// App.jsx (ya AppRouter.jsx)
import React from "react";
import Navbar from "./components/Home/Navbar";
import Home from "./components/Home/Home";
import Slider from "./components/Home/slider";
import About from "./components/Home/About";
import Clients from "./components/Home/Clients";
import Meetour from "./components/Home/Meetour";
import Footer from "./components/Home/Footer";
import './App.css'

const App = () => {
  return (
    <div className="bg-[#242f37] text-white min-h-screen">
      <Navbar />
      {/* Navbar fixed height approx 80px; give main top padding to avoid overlap */}
      <main className="pt-[80px]">
        <Home />
        <Slider />
        <About />
        <Clients />
        <Meetour />
        <Footer />
      </main>
    </div>
  );
};

export default App;

