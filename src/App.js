import React, {useState, useEffect, useRef} from 'react';
import './App.css';

function App() {

  const [country, setCountry] = useState('');
  const inputRef = useRef('');
  const [random, setRandom] = useState(-1);


  const resetCountryName = () => {
    setCountry('');
    
  };

  useEffect(() => {
    inputRef.current = random;
  }, [random]);

  const generateRandomNumber = () => {
    setRandom(Math.random() * 100);
  };
  return (
    <div className="App">


      Country Name: <input type="text" name="country" value={country} onChange={e => setCountry(e.target.value)}/>
      <button onClick={resetCountryName}>Reset Country</button>
      <div>The country name:{country}</div>
      
        <div>Random Number: {random}</div>
      
      <button onClick={generateRandomNumber}>Generate</button>
      { typeof inputRef.current !== undefined && 
        <div>Previous Number: {inputRef.current}</div>
      }
    </div>
  );
}

export default App;
