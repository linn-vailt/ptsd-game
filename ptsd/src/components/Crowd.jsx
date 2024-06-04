
import Listener from './Listener';
import bloodImage from '../assets/blood.png';

// eslint-disable-next-line react/prop-types
function Crowd({ crowdReaction }) {
  return (
    <div className="crowd">
      {[...Array(20)].map((_, i) => (
        <Listener key={i} crowdReaction={crowdReaction} />
      ))}
      {crowdReaction === 'bleed' && <img src={bloodImage} alt="Blood" className="blood-effect"  />}
    </div>
  );
}

export default Crowd;
