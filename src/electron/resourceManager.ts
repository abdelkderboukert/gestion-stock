import osUtils from "os-utils"

const POLLING_INTERVAL = 500

export function pollResource() {
    setInterval(() => {
        getCpuUsage();
    }, POLLING_INTERVAL);  
}

function getCpuUsage() {
    osUtils.cpuUsage((per) => console.log(per));
}