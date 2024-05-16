import drumsImage from "../../assets/drums.png";

function Drums() {
  return (
    <div className="instrument">
      <img src={drumsImage} alt="Drums" className="performer-img" />
      Drums
    </div>
  );
}

export default Drums;
