// Select.jsx
import { useState } from "react";
import Piano from "./instruments/Piano";
import pianoImage from "../assets/piano.png";
import Drums from "./instruments/Drums";
import drumsImage from "../assets/drums.png";
import Guitar from "./instruments/Guitar";
import guitarImage from "../assets/guitar.png";
import Trombone from "./instruments/Trombone";
import tromboneImage from "../assets/trombone.png";
import "../App.css"; // Import CSS file for Select component styling

function Select() {
  const [selectedInstrument, setSelectedInstrument] = useState("");

  const handleInstrumentSelect = (instrument) => {
    setSelectedInstrument(instrument);
  };

  const handlePlayButtonClick = () => {
    // Play sound based on the selectedInstrument
    // Implement sound playing logic here
    console.log(selectedInstrument);
  };

  return (
    <div className="main-square">
      {Piano}
      <button
        className={`instrument-square ${
          selectedInstrument === "piano" ? "selected" : ""
        }`}
        onClick={() => handleInstrumentSelect("piano")}
        style={{
          backgroundImage: `url(${pianoImage})`,
          backgroundSize: "20%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "50% 40%",
        }}
      >
        Piano
      </button>
      {Drums}
      <button
        className={`instrument-square ${
          selectedInstrument === "drums" ? "selected" : ""
        }`}
        onClick={() => handleInstrumentSelect("drums")}
        style={{
          backgroundImage: `url(${drumsImage})`,
          backgroundSize: "20%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "50% 40%",
        }}
      >
        Drums
      </button>
      {Guitar}
      <button
        className={`instrument-square ${
          selectedInstrument === "guitar" ? "selected" : ""
        }`}
        onClick={() => handleInstrumentSelect("guitar")}
        style={{
          backgroundImage: `url(${guitarImage})`,
          backgroundSize: "20%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "50% 40%",
        }}
      >
        Guitar
      </button>
      {Trombone}
      <button
        className={`instrument-square ${
          selectedInstrument === "trombone" ? "selected" : ""
        }`}
        onClick={() => handleInstrumentSelect("trombone")}
        style={{
          backgroundImage: `url(${tromboneImage})`,
          backgroundSize: "25%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "50% 40%",
        }}
      >
        Trombone
      </button>
      {/* Play button */}
      <button className="play-button" onClick={handlePlayButtonClick}>
        PTSD!
      </button>
    </div>
  );
}

export default Select;
