"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("../../core/client"));
const request_1 = __importDefault(require("../../core/request"));
/**
 * This client is used to call actions of **uvms** service
 */
class UVMSClient extends client_1.default {
    constructor({ config, credential, }) {
        super({ config, credential });
    }
    /**
     * SendUVMSMessage - 向指定号码拨打电话
     *
     * See also: https://docs.ucloud.cn/api/uvms-api/send_uvms_message
     */
    sendUVMSMessage(request) {
        const args = Object.assign({ Action: 'SendUVMSMessage' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
}
exports.default = UVMSClient;
