import React, { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import './index.css';
const { ipcRenderer } = window.require('electron');

function App() {
  const [count, setCount] = useState(0);

  const clicked = () => {
    setCount((count) => count + 1);
    console.log('clicked');

    ipcRenderer.send('testtt', count);
  }

  useEffect(() => {
    ipcRenderer.on('ttre', (event: any, arg: any) => {
      console.log(arg);
    });
  }, []);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={reactLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={clicked}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
