import pianoImage from "../../assets/piano.png";

function Piano() {
  return (
    <div
      className="instrument"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={pianoImage} alt="Piano" className="performer-img" />
      Piano
    </div>
  );
}

export default Piano;
