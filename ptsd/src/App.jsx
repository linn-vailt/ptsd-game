// import { useState } from 'react'
import "./App.css";
import Performer from "./components/Performer";
import Crowd from "./components/Crowd";
import Select from "./components/Select";

function App() {
  return (
    <>
      <h1>PLAY THE SYMPHONY, DARLING</h1>
      <div className="sections">
        <div className="left-section">
          <Performer />
        </div>
        <div className="middle-section">
          <Select />
        </div>
        <div className="right-section">
          <Crowd />
        </div>
      </div>
    </>
  );
}

export default App;
