// components/Performer.jsx
import performerImg from "../assets/performer.png";
import '../App.css'

function Performer() {
  return (
    <div>
      <img src={performerImg} alt="The performer" style={{ width: '50%', height: 'auto', paddingLeft: '30px' }}/>
    </div>
  );
}

export default Performer;
