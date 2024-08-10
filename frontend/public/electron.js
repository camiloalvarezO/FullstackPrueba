// archivo de electron
const { app, BrowserWindow } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');
let mainWindow;
function createWindow() {
    mainWindow = new BrowserWindow({ 
        width: 900,
        height: 680,
        resizable: true,
        minWidth: 900,
        minHeight: 680,
        icon: "./public/favicon.ico",
     });

    mainWindow.loadURL(isDev
                         ? 'http://localhost:3000' 
                         : `file://${path.join(__dirname, '../build/index.html')}`);

    mainWindow.on('closed', () => mainWindow = null);
    mainWindow.once('ready-to-show', () => {
        mainWindow.show();
    });
}
app.on('ready', createWindow);

// cerrar cuando todas las ventanas estén cerradas
// que significa darwin?
// es el nombre del sistema operativo de mac
// en este caso si el sistema operativo no es mac
// se cierra la aplicación
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

