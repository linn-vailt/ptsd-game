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
import Box from "@mui/material/Box";


function App() {
  const [selectedInstruments, setSelectedInstruments] = useState([]);
  const [crowdReaction, setCrowdReaction] = useState("");
  const [currentSound, setCurrentSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePTSDClick = () => {
    if (isPlaying && currentSound) {
      currentSound.stop();
      setIsPlaying(false);
      setCurrentSound(null);
      setCrowdReaction("");
      setSelectedInstruments([]);
      return;
    }

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
      const sound = new Howl({ src: [soundSrc] });
      sound.play();
      setCurrentSound(sound);
      setIsPlaying(true);
    }
  };

  return (
    <Box>
      <div className="header">
        <h6></h6>
        <h1>
          PLAY THE SYMPHONY,<span style={{ display: "block" }}>DARLING!</span>
        </h1>
        <h6 className="comment">
          You are not a bad person for playing this game.
        </h6>
      </div>
      <Box className="sections" style={{alignProperty:'center'}}>
        <Box className="left-section">
          <Performer />
        </Box>
        <Box className="middle-section">
          <Select
            selectedInstruments={selectedInstruments}
            setSelectedInstruments={setSelectedInstruments}
            handlePTSDClick={handlePTSDClick}
            isPlaying={isPlaying}
          />
        </Box>
        <div className="right-section">
          <Crowd crowdReaction={crowdReaction} />
        </div>
      </Box>
      <div className="footer">
        <h6>
          Copyright © Linn Vailt. All rights reserved. You must be at least
          168cm to play. Disclaimer: graphic violence.
        </h6>
      </div>
    </Box>
  );
}

export default App;
