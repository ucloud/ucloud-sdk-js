"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("../../core/client"));
const request_1 = __importDefault(require("../../core/request"));
/**
 * This client is used to call actions of **sandbox** service
 */
class sandboxClient extends client_1.default {
    constructor({ config, credential, }) {
        super({ config, credential });
    }
    /**
     * GetSandboxSite - 获取沙箱站点
     *
     * See also: https://docs.ucloud.cn/api/sandbox-api/get_sandbox_site
     */
    getSandboxSite(request) {
        const args = Object.assign({ Action: 'GetSandboxSite' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
}
exports.default = sandboxClient;
