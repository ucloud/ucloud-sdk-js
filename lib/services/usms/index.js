"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("../../core/client"));
const request_1 = __importDefault(require("../../core/request"));
/**
 * This client is used to call actions of **usms** service
 */
class USMSClient extends client_1.default {
    constructor({ config, credential, }) {
        super({ config, credential });
    }
    /**
     * CreateUSMSSignature - 调用接口CreateUSMSSignature申请短信签名
     *
     * See also: https://docs.ucloud.cn/api/usms-api/create_usms_signature
     */
    createUSMSSignature(request) {
        const args = Object.assign({ Action: 'CreateUSMSSignature' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateUSMSTemplate - 调用接口CreateUSMSTemplate申请短信模板
     *
     * See also: https://docs.ucloud.cn/api/usms-api/create_usms_template
     */
    createUSMSTemplate(request) {
        const args = Object.assign({ Action: 'CreateUSMSTemplate' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteUSMSSignature - 调用接口DeleteUSMSSignature删除短信签名
     *
     * See also: https://docs.ucloud.cn/api/usms-api/delete_usms_signature
     */
    deleteUSMSSignature(request) {
        const args = Object.assign({ Action: 'DeleteUSMSSignature' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteUSMSTemplate - 调用接口DeleteUSMSTemplate删除短信模板
     *
     * See also: https://docs.ucloud.cn/api/usms-api/delete_usms_template
     */
    deleteUSMSTemplate(request) {
        const args = Object.assign({ Action: 'DeleteUSMSTemplate' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUSMSSendReceipt - 调用接口GetUSMSSendReceipt短信发送状态信息
     *
     * See also: https://docs.ucloud.cn/api/usms-api/get_usms_send_receipt
     */
    getUSMSSendReceipt(request) {
        const args = Object.assign({ Action: 'GetUSMSSendReceipt' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * QueryUSMSSignature - 调用接口QueryUSMSSignature查询短信签名申请状态
     *
     * See also: https://docs.ucloud.cn/api/usms-api/query_usms_signature
     */
    queryUSMSSignature(request) {
        const args = Object.assign({ Action: 'QueryUSMSSignature' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * QueryUSMSTemplate - 调用接口QueryUSMSTemplate查询短信模板申请状态
     *
     * See also: https://docs.ucloud.cn/api/usms-api/query_usms_template
     */
    queryUSMSTemplate(request) {
        const args = Object.assign({ Action: 'QueryUSMSTemplate' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * SendBatchUSMSMessage - 调用SendBatchUSMSMessage接口批量发送短信
     *
     * See also: https://docs.ucloud.cn/api/usms-api/send_batch_usms_message
     */
    sendBatchUSMSMessage(request) {
        const args = Object.assign({ Action: 'SendBatchUSMSMessage' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * SendUSMSMessage - 调用接口SendUSMSMessage发送短信
     *
     * See also: https://docs.ucloud.cn/api/usms-api/send_usms_message
     */
    sendUSMSMessage(request) {
        const args = Object.assign({ Action: 'SendUSMSMessage' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateUSMSSignature - 调用接口UpdateUSMSSignature修改未通过审核的短信签名，并重新提交审核
     *
     * See also: https://docs.ucloud.cn/api/usms-api/update_usms_signature
     */
    updateUSMSSignature(request) {
        const args = Object.assign({ Action: 'UpdateUSMSSignature' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateUSMSTemplate - 调用接口UpdateUSMSTemplate修改未通过审核的短信模板，并重新提交审核
     *
     * See also: https://docs.ucloud.cn/api/usms-api/update_usms_template
     */
    updateUSMSTemplate(request) {
        const args = Object.assign({ Action: 'UpdateUSMSTemplate' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
}
exports.default = USMSClient;
