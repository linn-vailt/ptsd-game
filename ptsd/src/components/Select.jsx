/* eslint-disable react/prop-types */
import Piano from "./instruments/Piano";
import pianoSound from "../assets/sounds/piano.wav";
import Drums from "./instruments/Drums";
import drumsSound from "../assets/sounds/drums.wav";
import Guitar from "./instruments/Guitar";
import guitarSound from "../assets/sounds/guitar.wav";
import Trombone from "./instruments/Trombone";
import tromboneSound from "../assets/sounds/trombone.wav";

const instruments = [
  { name: "Piano", component: Piano, sound: pianoSound },
  { name: "Drums", component: Drums, sound: drumsSound },
  { name: "Guitar", component: Guitar, sound: guitarSound },
  { name: "Trombone", component: Trombone, sound: tromboneSound },
];

function Select({
  selectedInstruments,
  setSelectedInstruments,
  handlePTSDClick,
  isPlaying,
}) {
  const handleClick = (name, sound) => {
    if (!selectedInstruments.includes(name)) {
      setSelectedInstruments([...selectedInstruments, name]);
      playInstrumentSound(sound);
    } else {
      setSelectedInstruments(
        selectedInstruments.filter((instrument) => instrument !== name)
      );
    }
  };

  const playInstrumentSound = (sound) => {
    const instrumentSound = new Howl({ src: [sound] });
    instrumentSound.play();
  };

  return (
    <div className="main-square">
      {instruments.map((instrument) => (
        <div
          key={instrument.name}
          className={`instrument-square ${
            selectedInstruments.includes(instrument.name) ? "selected" : ""
          }`}
          onClick={() => handleClick(instrument.name, instrument.sound)}
        >
          <instrument.component />
        </div>
      ))}
      <button
        className={`play-button ${isPlaying ? "active" : ""}`}
        onClick={handlePTSDClick}
      >
        {isPlaying ? "Stop It" : "PTSD"}
      </button>
    </div>
  );
}

export default Select;
