
function Guitar({ selectedInstruments, setSelectedInstruments }) {
  const handleSelect = () => {
    if (!selectedInstruments.includes('Guitar')) {
      setSelectedInstruments([...selectedInstruments, 'Guitar']);
    }
  };

  return (
    <div className="instrument" onClick={handleSelect}>
      Guitar
    </div>
  );
}

export default Guitar;
