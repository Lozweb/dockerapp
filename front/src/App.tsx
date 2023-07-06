import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';



function App() {

  const [backRep, setBackRep] = useState<string>()

  useEffect( () => {
    const fetchData = async () => {
      const rep = await fetch(
          "https://localhost:5000",
          {
            method: "GET"
          }
      );
      if(rep.status === 200) {
        rep.body ? setBackRep((await rep.json()).message) : setBackRep("error");
      }
    }
    fetchData().catch( error => console.log(error))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{backRep}</p>
      </header>
    </div>
  );
}

export default App;
