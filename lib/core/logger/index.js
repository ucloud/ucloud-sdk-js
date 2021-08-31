"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultLogger = exports.LogLevel = void 0;
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Debug"] = 0] = "Debug";
    LogLevel[LogLevel["Info"] = 1] = "Info";
    LogLevel[LogLevel["Error"] = 2] = "Error";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
class DefaultLogger {
    constructor(level) {
        this.level = level;
    }
    log(level, message, extras) {
        switch (level) {
            case LogLevel.Debug:
                console.log(message);
                break;
            case LogLevel.Info:
                console.log(message);
                break;
            case LogLevel.Error:
                console.log(message);
                break;
            default:
                console.log(message);
        }
    }
    debug(message, extras) {
        if (LogLevel.Debug < this.level) {
            return;
        }
        this.log(LogLevel.Debug, message, extras);
    }
    info(message, extras) {
        if (LogLevel.Info < this.level) {
            return;
        }
        this.log(LogLevel.Info, message, extras);
    }
    error(message, extras) {
        if (LogLevel.Error < this.level) {
            return;
        }
        this.log(LogLevel.Error, message, extras);
    }
}
exports.DefaultLogger = DefaultLogger;
