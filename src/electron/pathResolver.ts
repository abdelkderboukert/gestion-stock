import { isDev } from "./util";
import path from "path";
import { app } from "electron";

export function getPreloadPath(){
    return path.join(
        app.getAppPath(),
        isDev() ? '.' : '..',
        '/dist-electron/preload.cjs'
    );
}