import React from "react";
import { Navbar, Footer, Services, Welcome, Transactions } from "./components";

const App = () => {
  return (
    <div className=" min-h-screen ">
      <div className=" gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
};

export default App;
