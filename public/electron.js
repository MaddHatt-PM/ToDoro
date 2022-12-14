const { default: installExtension, REACT_DEVELOPER_TOOLS } = require('electron-devtools-installer');

const path = require("path");
const ipc = require('electron').ipcMain;
const { app, BrowserWindow } = require("electron");
const isDev = require("electron-is-dev");

const Store = require('./store.js')

const defaultSize = { width: 300, height: 600 }

const store = new Store({
  configName: 'user-preferences',
  defaults: {
    windowBounds: { x: 800, y: 300, width: defaultSize.width, height: defaultSize.hieght },
    wasMaximized: false,
  }
})

function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: defaultSize.width,
    height: defaultSize.height,
    titleBarStyle: "hidden",
    show: false,
    alwaysOnTop: true,
    // frame: false,
    // transparent: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    }
  });

  // and load the index.html of the app.
  // win.loadFile("index.html");
  win.loadURL(
    isDev ?
      "http://localhost:3000" :
      `file://${path.join(__dirname, "../build/index.html")}`
  );

  // Open the DevTools.
  if (isDev) {
    win.webContents.openDevTools();
  }
  win.once('ready-to-show', () => {
    win.setBounds(store.get('windowBounds'));
    if (store.get('wasMaximized'))
      win.maximize();

    win.show()
  })

  ipc.on('toggle-minimize-window', function (event) {
    win.minimize();
  });

  ipc.on('toggle-maximize-window', function (event) {
    if (win.isMaximized()) {
      win.unmaximize();
    } else {
      win.maximize();
    }
  });

  ipc.on('close-window', function (event) {
    if (win.id === 1) {
      store.set('windowBounds', win.getBounds());
      store.set('wasMaximized', win.isMaximized());
    }
    win.close();
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  if (isDev) {
    installExtension(REACT_DEVELOPER_TOOLS)
      .then((name) => console.log(`Added Extension:  ${name}`))
      .catch((err) => console.log('An error occurred: ', err));
  }

  createWindow();
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.