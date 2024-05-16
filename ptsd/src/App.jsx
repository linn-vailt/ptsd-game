
import { useState } from 'react';
import "./App.css";
import Performer from "./components/Performer";
import Crowd from "./components/Crowd";
import Select from "./components/Select";

function App() {
  const [selectedInstruments, setSelectedInstruments] = useState([]);
  const [crowdReaction, setCrowdReaction] = useState('');

  return (
    <>
      <div className="header">
        <h6></h6>
        <h1>
          PLAY THE SYMPHONY,<span style={{ display: "block" }}>DARLING!</span>
        </h1>
        <h6 className="comment">You are not a bad person for playing this game.</h6>
      </div>
      <div className="sections">
        <div className="left-section">
          <Performer />
        </div>
        <div className="middle-section">
          <Select
            selectedInstruments={selectedInstruments}
            setSelectedInstruments={setSelectedInstruments}
            setCrowdReaction={setCrowdReaction}
          />
        </div>
        <div className="right-section">
          <Crowd crowdReaction={crowdReaction} />
        </div>
      </div>
      <div className="footer">
        <h6>Copyright © Linn Vailt. All rights reserved. You must be at least 168cm to play. Disclaimer: graphic violence.</h6>
      </div>
    </>
  );
}

export default App;
