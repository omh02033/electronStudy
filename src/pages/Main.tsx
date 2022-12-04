import React from 'react';

const { ipcRenderer } = require('electron');

export const Main: React.FC = () => {
  const notification = () => {
    ipcRenderer.send('notification', {
      title: '테스트',
      subtitle: '서브타이틀',
      body: '유도희희히히 세바시',
    });
  };

  return (
    <div>
      <h1>hi</h1>
      <input type="button" value="notification" onClick={notification} />
    </div>
  );
};