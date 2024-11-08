type statistics = {
    cpuUsage: number,
    ramUsage: number, 
    storageData: number,
    message: string,
};

type staticData = {
    totalStorage: number,
    cpuModel: string,
    totalMemoryGB: number,
};

interface Window {
    electron: {
        subscibeStatistics: (callback: (statistics: statistics) => void) => void;
        getStaticData: () => Promise<staticData>; 
    }
}