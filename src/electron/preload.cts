const electron = require("electron");

import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electron', {
  subscribeStatistics: (callback: (statistics: statistics) => void) => {
    ipcRenderer.on('statistics', (event, statistics) => {
      callback(statistics);
    });
  },
  getStaticData: () => {
    return ipcRenderer.invoke('getStaticData');
  }
});