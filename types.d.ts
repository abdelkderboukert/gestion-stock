// types.d.ts
type Statistics = {
    cpuUsage: number,
    ramUsage: number, 
    storageData: {
        total: number;
        usage: number;
    },
    message: string,
};

type StaticData = {
    totalStorage: number,
    cpuModel: string,
    totalMemoryGB: number,
};

interface Window{
    electron: {
        subscribeStatistics: (callback: (statistics: Statistics) => void) => void;
        getStaticData: () => Promise<StaticData>; 
    }
}