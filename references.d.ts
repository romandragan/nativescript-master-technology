declare var global: NodeJS.Global;
declare var masterProcess: Process;

declare namespace NodeJS {
    interface Global {
        masterProcess: Process;
    }
}

interface Process {
    restart(msg?: string): void;
    exit(): void;
    isDebug(): boolean;
    isEmulator(): boolean;
    processMessages(): void;
}

interface Console {
    keys(data: string | {}, printValue?: boolean): void;
}