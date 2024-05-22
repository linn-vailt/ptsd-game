import tromboneImage from "../../assets/trombone.png";

function Trombone() {
  return (
    <div
      className="instrument"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={tromboneImage} alt="Trombone" className="performer-img" />
      Trombone
    </div>
  );
}

export default Trombone;
