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
const config_1 = __importDefault(require("./config"));
const credential_1 = __importDefault(require("./credential"));
const middleware_1 = require("./middleware");
const transport_1 = require("./transport");
const version_1 = require("../version");
const exception_1 = require("./exception");
const middlewares_1 = require("./middlewares");
class Client {
    constructor({ config, credential, }) {
        this.config = new config_1.default(config);
        this.credential = new credential_1.default(credential);
        this.middlewares = [
            middlewares_1.defaultsMiddleware,
            middlewares_1.credentialMiddleware,
            middlewares_1.logMiddleware,
        ];
        let ua = `JS-SDK/${version_1.VERSION}`;
        if (!!config.userAgent) {
            ua += config.userAgent;
        }
        this.transport = new transport_1.Transport({
            baseUrl: this.config.baseUrl,
            userAgent: ua,
        });
    }
    useMiddleware(options) {
        this.middlewares.push(options);
    }
    withTransport(transport) {
        this.transport = transport;
    }
    invoke(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const ctx = new middleware_1.Context({
                config: this.config,
                credential: this.credential,
                request: req,
            });
            // resolve request
            this.middlewares.forEach((middleware) => {
                if (!middleware.request) {
                    return;
                }
                ctx.request = middleware.request(ctx);
            });
            // do invoking
            let resp;
            const maxRetries = this.config.maxRetries || 3;
            for (let k = 0; k <= maxRetries; k++) {
                try {
                    resp = yield this.transport.invoke(ctx.request);
                    break; // success, stop retrying
                }
                catch (e) {
                    ctx.exception = e;
                    this.middlewares.forEach((middleware) => {
                        if (!middleware.error) {
                            return;
                        }
                        middleware.error(ctx);
                    });
                    if (k == maxRetries) {
                        throw e;
                    }
                }
            }
            // resolve response
            ctx.response = resp;
            this.middlewares.forEach((middleware) => {
                if (!middleware.response) {
                    return;
                }
                ctx.response = middleware.response(ctx);
            });
            if (!resp) {
                throw new exception_1.UCloudError({
                    typ: exception_1.EXC_TYPE_TRANSPORT,
                    retCode: -1,
                    message: 'invalid response',
                    requestId: '',
                });
            }
            return resp;
        });
    }
}
exports.default = Client;
