"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transport = void 0;
const response_1 = __importDefault(require("../response"));
const exception_1 = require("../exception");
const axios_1 = __importDefault(require("axios"));
class Transport {
    constructor({ baseUrl, userAgent, options, }) {
        this.baseUrl = baseUrl;
        this.userAgent = userAgent;
        this.options = options;
    }
    invoke(req) {
        return __awaiter(this, void 0, void 0, function* () {
            let resp;
            try {
                const httpResp = yield axios_1.default(Object.assign({ method: 'post', baseURL: this.baseUrl, headers: {
                        'User-Agent': this.userAgent,
                        'Content-Type': 'application/json',
                    }, data: req.toObject() }, this.options));
                const requestId = httpResp.headers['x-ucloud-request-uuid'];
                resp = new response_1.default(httpResp.data, requestId);
            }
            catch (e) {
                throw new exception_1.UCloudError({
                    typ: exception_1.EXC_TYPE_TRANSPORT,
                    message: e.message,
                    retCode: -1,
                });
            }
            if (resp != null && resp.getRetCode() != 0) {
                throw new exception_1.UCloudError({
                    typ: exception_1.EXC_TYPE_TRANSPORT,
                    message: resp.getMessage(),
                    retCode: resp.getRetCode(),
                    requestId: resp.getRequestId(),
                });
            }
            return resp;
        });
    }
}
exports.Transport = Transport;
