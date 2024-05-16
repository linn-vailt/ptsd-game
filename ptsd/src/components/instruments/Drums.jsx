
function Drums({ selectedInstruments, setSelectedInstruments }) {
  const handleSelect = () => {
    if (!selectedInstruments.includes('Drums')) {
      setSelectedInstruments([...selectedInstruments, 'Drums']);
    }
  };

  return (
    <div className="instrument" onClick={handleSelect}>
      Drums
    </div>
  );
}

export default Drums;
