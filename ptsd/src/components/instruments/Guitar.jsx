import guitarImage from "../../assets/guitar.png";

function Guitar() {
  return (
    <div className="instrument">
      <img src={guitarImage} alt="Guitar" className="performer-img" />
      Guitar
    </div>
  );
}

export default Guitar;
