"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("../logger");
class Config {
    constructor({ region = '', projectId = '', baseUrl = 'https://api.ucloud.cn', userAgent = '', timeout = 30, maxRetries = 3, logger = new logger_1.DefaultLogger(logger_1.LogLevel.Info), }) {
        this.region = region;
        this.projectId = projectId;
        this.baseUrl = baseUrl;
        this.userAgent = userAgent;
        this.timeout = timeout;
        this.maxRetries = maxRetries;
        this.logger = logger;
    }
}
exports.default = Config;
