const electron = require("electron");

// import { contextBridge, ipcRenderer } from 'electron';

electron.contextBridge.exposeInMainWorld("electron", {
  subscribeStatistics: (callback: (statistics: any) => void) =>{
    electron.ipcRenderer.on('statistics', (event, stat) => {
      callback(stat);
    });
  },
  getStaticData: () => {
    return electron.ipcRenderer.invoke('getStaticData');
  }
});