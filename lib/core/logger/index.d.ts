export declare enum LogLevel {
    Debug = 0,
    Info = 1,
    Error = 2
}
export interface Logger {
    debug(message: any, extras?: object): void;
    info(message: any, extras?: object): void;
    error(message: any, extras?: object): void;
}
export declare class DefaultLogger {
    level: LogLevel;
    constructor(level: LogLevel);
    log(level: LogLevel, message: string, extras?: object): void;
    debug(message: string, extras?: object): void;
    info(message: string, extras?: object): void;
    error(message: string, extras?: object): void;
}
