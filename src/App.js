import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/main";
import Data from "./components/Data";
import Details from "./components/Details";
import User from "./components/User";
import Footer from "./components/footer";

function App() {
  return (
    <div className="main sm:bg-transparent">
      <Navbar />
      <Main />
      <Data />
      <Details />
      <User />
      <Footer />
    </div>
  );
}

export default App;
