import performer from "../assets/performer.png";

function Listener({ crowdReaction }) {
  const top = Math.random() * 30;
  const left = Math.random() * 30;
  return (
    <div className={`listener ${crowdReaction === "bleed" ? "bleeding" : ""}`}>
      <img
        src={performer}
        alt="Listener"
        className="person"
        style={{ top: top, left: left }}
      />
    </div>
  );
}

export default Listener;
