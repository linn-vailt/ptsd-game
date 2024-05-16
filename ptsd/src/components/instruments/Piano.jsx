
function Piano({ selectedInstruments, setSelectedInstruments }) {
  const handleSelect = () => {
    if (!selectedInstruments.includes('Piano')) {
      setSelectedInstruments([...selectedInstruments, 'Piano']);
    }
  };

  return (
    <div className="instrument" onClick={handleSelect}>
      Piano
    </div>
  );
}

export default Piano;
