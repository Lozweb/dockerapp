import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';



function App() {

  const [backRep, setBackRep] = useState<string>();
  const [install, setInstall] = useState<string>();
  const [add, setAdd] = useState<string>();

  useEffect( () => {
    const ping = async () => {
      const rep = await fetch("https://localhost:5000", { method: "GET" });
      if(rep.status === 200) rep.body ? setBackRep((await rep.json()).message) : setBackRep("error");
      const install = await fetch("https://localhost:5000/install", { method: "POST" });
      if(install.status === 200) install.body ? setInstall((await install.json()).message) : setInstall("error");
      const add = await fetch("https://localhost:5000/add", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({
          message: "add element from front"
        })
      });
      add.body ? setAdd((await add.json()).message) : setAdd("error");
    }
    ping().catch( error => console.log(error))

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
        <p>installation table : {install}</p>
        <p>Add : {add}</p>
      </header>
    </div>
  );
}

export default App;
