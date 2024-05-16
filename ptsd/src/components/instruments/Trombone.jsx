
function Trombone({ selectedInstruments, setSelectedInstruments }) {
  const handleSelect = () => {
    if (!selectedInstruments.includes( 'Trombone')) {
      setSelectedInstruments([...selectedInstruments,  'Trombone']);
    }
  };

  return (
    <div className="instrument" onClick={handleSelect}>
     Trombone
    </div>
  );
}

export default Trombone;
