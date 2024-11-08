const electron = require("electron");

electron.contextBridge.exposeInMainWorld("electron", {
    subscibeStatistics: (callback: (statistics: any) => void) => (
        electron.ipcRenderer.on("statistics", (_, stat)=>(
            callback(stat)
        ))
    ),
    getStaticData: () => electron.ipcRenderer.invoke("getStaticData"),
} satisfies Window["electron"])