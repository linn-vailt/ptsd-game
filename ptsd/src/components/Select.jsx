// Select.jsx
import { useState } from 'react';
import Piano from './instruments/Piano';
import Drums from './instruments/Drums';
import Guitar from './instruments/Guitar';
import Trombone from './instruments/Trombone';
import '../App.css'; // Import CSS file for Select component styling

function Select() {
  const [selectedInstrument, setSelectedInstrument] = useState('');

  const handleInstrumentSelect = (instrument) => {
    setSelectedInstrument(instrument);
  };

  const handlePlayButtonClick = () => {
    // Play sound based on the selectedInstrument
    // Implement sound playing logic here
    console.log(selectedInstrument)
  };

  return (
    <div className="select">
      {/* Main square */}
      <div className="main-square">
        {Piano}
        <button
          className={`instrument-square ${selectedInstrument === 'piano' ? 'selected' : ''}`}
          onClick={() => handleInstrumentSelect('piano')}
        >
          Piano
        </button>
        {Drums}
        <button
          className={`instrument-square ${selectedInstrument === 'drums' ? 'selected' : ''}`}
          onClick={() => handleInstrumentSelect('drums')}
        >
          Drums
        </button>
        {Guitar}
        <button
          className={`instrument-square ${selectedInstrument === 'guitar' ? 'selected' : ''}`}
          onClick={() => handleInstrumentSelect('guitar')}
        >
          Guitar
        </button>
        {Trombone}
        <button
          className={`instrument-square ${selectedInstrument === 'trombone' ? 'selected' : ''}`}
          onClick={() => handleInstrumentSelect('trombone')}
        >
          Trombone
        </button>
        {/* Play button */}
        <button className="play-button" onClick={handlePlayButtonClick}>
          PTSD!
        </button>
      </div>
    </div>
  );
}

export default Select;
