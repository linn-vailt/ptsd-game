
import { useState } from "react";
import { Howl } from "howler";
import Piano from "./instruments/Piano";
import pianoImage from "../assets/piano.png";
import pianoSound from "../assets/sounds/piano.wav";
import Drums from "./instruments/Drums";
import drumsImage from "../assets/drums.png";
import drumsSound from "../assets/sounds/drums.wav";
import Guitar from "./instruments/Guitar";
import guitarImage from "../assets/guitar.png";
import guitarSound from "../assets/sounds/guitar.wav";
import Trombone from "./instruments/Trombone";
import tromboneImage from "../assets/trombone.png";
import tromboneSound from "../assets/sounds/trombone.wav";
import "../App.css"; 

function Select({ setCrowdReaction }) {
  const [selectedInstruments, setSelectedInstruments] = useState([]);

  const sounds = {
    piano: new Howl({ src: [pianoSound] }),
    drums: new Howl({ src: [drumsSound] }),
    guitar: new Howl({ src: [guitarSound] }),
    trombone: new Howl({ src: [tromboneSound] })
  };

  const handleInstrumentSelect = (instrument) => {
    setSelectedInstruments((prev) =>
      prev.includes(instrument) ? prev.filter((inst) => inst !== instrument) : [...prev, instrument]
    );
  };

  const handlePlayButtonClick = () => {
    selectedInstruments.forEach((instrument) => {
      sounds[instrument].play();
    });
    evaluateCrowdReaction();
    setSelectedInstruments([]); // Reset selection after playing the sound
  };

  const evaluateCrowdReaction = () => {
    const allInstruments = ["piano", "drums", "guitar", "trombone"];
    if (
      selectedInstruments.length === allInstruments.length &&
      allInstruments.every((instr) => selectedInstruments.includes(instr))
    ) {
      setCrowdReaction("cheer");
    } else {
      setCrowdReaction("bleed");
    }
  };

  return (
    <div className="main-square">
      {Piano}
      <button
        className={`instrument-square ${
          selectedInstruments.includes("piano") ? "selected" : ""
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
          selectedInstruments.includes("drums") ? "selected" : ""
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
          selectedInstruments.includes("guitar") ? "selected" : ""
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
          selectedInstruments.includes("trombone") ? "selected" : ""
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
