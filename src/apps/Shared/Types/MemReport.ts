export type MemReport = {
    byKey: {
        key: string;
        mem: number;
    }[];
    memTotal: number;
}