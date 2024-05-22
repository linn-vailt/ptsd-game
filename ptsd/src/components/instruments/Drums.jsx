import drumsImage from "../../assets/drums.png";

function Drums() {
  return (
    <div
      className="instrument"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={drumsImage} alt="Drums" className="performer-img" />
      Drums
    </div>
  );
}

export default Drums;
