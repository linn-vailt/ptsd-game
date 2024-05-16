

function Listener({ crowdReaction }) {
  return (
    <div className={`listener ${crowdReaction === 'bleed' ? 'bleeding' : ''}`}>
      <div className="listener-content"></div>
    </div>
  );
}

export default Listener;
