"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UCloudError = exports.EXC_TYPE_UNKNOWN = exports.EXC_TYPE_TRANSPORT = exports.EXC_TYPE_RET_CODE = void 0;
exports.EXC_TYPE_RET_CODE = 'RetCode';
exports.EXC_TYPE_TRANSPORT = 'Transport';
exports.EXC_TYPE_UNKNOWN = 'Unknown';
class UCloudError extends Error {
    constructor({ typ, message, retCode, requestId, }) {
        super(message);
        this.typ = typ;
        this.retCode = retCode;
        this.requestId = requestId;
    }
}
exports.UCloudError = UCloudError;
