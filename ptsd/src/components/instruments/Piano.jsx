import pianoImage from "../../assets/piano.png";

function Piano() {
  return (
    <div className="instrument">
      <img src={pianoImage} alt="Piano" className="performer-img" />
      Piano
    </div>
  );
}

export default Piano;
