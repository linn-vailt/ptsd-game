import performerImg from "../assets/performer.png";
import '../App.css';

function Performer({ image }) {
  return (
    <div>
      <img 
        src={image || performerImg} 
        alt="The performer" 
        style={{ width: '40%', height: 'auto', paddingLeft: '140px'}}
      />
    </div>
  );
}

export default Performer;
