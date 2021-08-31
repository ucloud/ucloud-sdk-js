"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("../../core/client"));
const request_1 = __importDefault(require("../../core/request"));
/**
 * This client is used to call actions of **ubill** service
 */
class UBillClient extends client_1.default {
    constructor({ config, credential, }) {
        super({ config, credential });
    }
    /**
     * GetBalance - 获取账户余额
     *
     * See also: https://docs.ucloud.cn/api/ubill-api/get_balance
     */
    getBalance(request) {
        const args = Object.assign({ Action: 'GetBalance' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetBillDataFileUrl - 生成账单数据文件下载的 url
     *
     * See also: https://docs.ucloud.cn/api/ubill-api/get_bill_data_file_url
     */
    getBillDataFileUrl(request) {
        const args = Object.assign({ Action: 'GetBillDataFileUrl' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
}
exports.default = UBillClient;
