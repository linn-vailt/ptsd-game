import { useState } from "react";
import "./App.css";
import Performer from "./components/Performer";
import Crowd from "./components/Crowd";
import Select from "./components/Select";
import { Howl } from "howler";
import raegal from "./assets/sounds/raegal.mp3";
import swift from "./assets/sounds/swift.mp3";
import kanye from "./assets/sounds/kanye.mp3";
import tydolla from "./assets/sounds/tydolla.mp3";
import euro from "./assets/sounds/euro.mp3";

function App() {
  const [selectedInstruments, setSelectedInstruments] = useState([]);
  const [crowdReaction, setCrowdReaction] = useState("");

  const handlePTSDClick = () => {
    let soundSrc;
    if (selectedInstruments.length === 4) {
      soundSrc = raegal;
      setCrowdReaction("cheer");
    } else if (selectedInstruments.length === 3) {
      soundSrc = euro;
      setCrowdReaction("bleed");
    } else if (selectedInstruments.length === 2) {
      if (
        selectedInstruments.includes("Guitar") &&
        selectedInstruments.includes("Piano")
      ) {
        soundSrc = tydolla;
      } else {
        soundSrc = kanye;
      }
      setCrowdReaction("bleed");
    } else if (selectedInstruments.length === 1) {
      soundSrc = swift;
      setCrowdReaction("bleed");
    }

    if (soundSrc) {
      playSound(soundSrc);
    }
  };

  const playSound = (src) => {
    const sound = new Howl({ src: [src] });
    sound.play();
  };

  return (
    <>
      <div className="header">
        <h6></h6>
        <h1>
          PLAY THE SYMPHONY,<span style={{ display: "block" }}>DARLING!</span>
        </h1>
        <h6 className="comment">
          You are not a bad person for playing this game.
        </h6>
      </div>
      <div className="sections">
        <div className="left-section">
          <Performer />
        </div>
        <div className="middle-section">
          <Select
            selectedInstruments={selectedInstruments}
            setSelectedInstruments={setSelectedInstruments}
            handlePTSDClick={handlePTSDClick}
          />
        </div>
        <div className="right-section">
          <Crowd crowdReaction={crowdReaction} />
        </div>
      </div>
      <div className="footer">
        <h6>
          Copyright © Linn Vailt. All rights reserved. You must be at least
          168cm to play. Disclaimer: graphic violence.
        </h6>
      </div>
    </>
  );
}

export default App;
