// types.d.ts
type statistics = {
    cpuUsage: number,
    ramUsage: number, 
    storageData: {
        total: number;
        usage: number;
    },
    message: string,
};

type staticData = {
    totalStorage: number,
    cpuModel: string,
    totalMemoryGB: number,
};

interface Window {
    electron: {
        subscribeStatistics: (callback: (statistics: statistics) => void) => void;
        getStaticData: () => Promise<staticData>; 
    }
}