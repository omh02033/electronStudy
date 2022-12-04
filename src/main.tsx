import React from 'react';
import ReactDOM from 'react-dom/client';
import './node-api';

const { ipcRenderer } = require('electron');

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <h1>hi</h1>
    <input type="button" value="notification" onClick={() => {
      ipcRenderer.send('notification', {
        title: '테스트',
        subtitle: '서브타이틀',
        body: '유도희히히ㅣ히 세바시시',
      });
    }} />
  </React.StrictMode>
)

postMessage({ payload: 'removeLoading' }, '*');
