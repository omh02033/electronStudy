import { app, BrowserWindow, ipcMain } from 'electron';
import * as isDev from 'electron-is-dev';
const path = require('path');

let win: BrowserWindow | null;

app.whenReady().then(() => {
  win = new BrowserWindow({
    title: 'vite react electron',
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
      // devTools: false,
    },
    titleBarStyle: 'hidden',
  });

  win.loadURL(
    isDev
      ? 'http://localhost:5173'
      : `file://${path.join(__dirname, '../index.html')}`
  );
  win.on("closed", () => (win = null));
});

ipcMain.on('testtt', (event, arg) => {
  console.log(arg);
  event.sender.send('ttre', arg+1);
});
