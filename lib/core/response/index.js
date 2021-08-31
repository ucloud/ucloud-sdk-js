"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Response {
    constructor(data, requestId) {
        this.data = data;
        this.requestId = requestId;
    }
    toObject() {
        return this.data;
    }
    getMessage() {
        return this.data['Message'] || '';
    }
    getRetCode() {
        return this.data['RetCode'] || 0;
    }
    getRequestId() {
        return this.requestId || '';
    }
}
exports.default = Response;
