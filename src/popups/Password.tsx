import React, { useState } from 'react';
const { ipcRenderer } = require('electron');

export const POPUP_Password: React.FC = () => {
  const [password, setPassword] = useState<string>('');

  const submit = () => {
    ipcRenderer.send('thisPassword', password);
  };

  return (
    <form onSubmit={submit}>
      <input
        type="password"
        onChange={({ target: { value } }) => setPassword(value)}
      />
    </form>
  );
};
