// components/Crowd.jsx

import Listener from './Listener';

function Crowd({ crowdReaction }) {
  return (
    <div className={`crowd ${crowdReaction}`}
    >
      {[...Array(10)].map((_, i) => (
        <Listener key={i} />
      ))}
    </div>
  );
}

export default Crowd;
