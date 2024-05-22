import guitarImage from "../../assets/guitar.png";

function Guitar() {
  return (
    <div
      className="instrument"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={guitarImage} alt="Guitar" className="performer-img" />
      Guitar
    </div>
  );
}

export default Guitar;
