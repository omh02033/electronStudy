import { app, BrowserWindow, ipcMain } from 'electron';

let win: BrowserWindow | null;

const isDev = process.env.NODE_ENV === 'develop';

app.whenReady().then(() => {
  win = new BrowserWindow({
    title: 'harangt',
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      devTools: isDev,
    },
    frame: false,
    transparent: true,
    titleBarStyle: 'hidden',
  });

  win.loadFile('index.html');
  if (isDev) win.webContents.openDevTools();

  win.on("closed", () => (win = null));
});

ipcMain.on('testtt', (event, arg) => {
  console.log(arg);
  event.sender.send('ttre', arg+1);
});
