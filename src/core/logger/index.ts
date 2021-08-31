export enum LogLevel {
  Debug,
  Info,
  Error,
}

export interface Logger {
  debug(message: any, extras?: object): void;

  info(message: any, extras?: object): void;

  error(message: any, extras?: object): void;
}

export class DefaultLogger {
  level: LogLevel;

  constructor(level: LogLevel) {
    this.level = level;
  }

  log(level: LogLevel, message: string, extras?: object) {
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

  debug(message: string, extras?: object) {
    if (LogLevel.Debug < this.level) {
      return;
    }
    this.log(LogLevel.Debug, message, extras);
  }

  info(message: string, extras?: object) {
    if (LogLevel.Info < this.level) {
      return;
    }
    this.log(LogLevel.Info, message, extras);
  }

  error(message: string, extras?: object) {
    if (LogLevel.Error < this.level) {
      return;
    }
    this.log(LogLevel.Error, message, extras);
  }
}
