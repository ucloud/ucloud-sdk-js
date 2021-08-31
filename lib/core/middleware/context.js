"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Context = void 0;
class Context {
    constructor({ credential, config, request, response, exception, }) {
        this.credential = credential;
        this.config = config;
        this.request = request;
        this.response = response;
        this.exception = exception;
    }
}
exports.Context = Context;
