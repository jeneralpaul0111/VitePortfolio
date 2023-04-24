import { useState } from "react";
//import './App.css'
import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div
      style={{
        backgroundColor: "ghostwhite",
      }}
    >
      <Sidenav />
      <Main />
      <Work />
      <Projects />
      <Contact />
    </div>
  );
}
export default App;
