const { ipcRenderer } = require('electron');

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('#winMin').addEventListener('click', () => {
        ipcRenderer.send('toggle-minimize-window');
    })

    document.querySelector('#winMax').addEventListener('click', () => {
        ipcRenderer.send('toggle-maximize-window');
    })

    document.querySelector('#winClose').addEventListener('click', () => {
        ipcRenderer.send('close-window')
    })
})