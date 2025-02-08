import React from "react";
import HomePage from "./pages/HomePage";
import Languages from "./component/Languages";
import Navbar from "./component/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Languages />
      <HomePage />
    </div>
  );
}

export default App;
