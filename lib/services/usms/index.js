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
     * AddBackfill - 用户通过接口发送消息，当消息在终端被消费，调用该接口，进行记录。
     *
     * See also: https://docs.ucloud.cn/api/usms-api/add_backfill
     */
    addBackfill(request) {
        const args = Object.assign({ Action: 'AddBackfill' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * AddUSMSSignatureQualification - 添加短信签名资质申请记录
     *
     * See also: https://docs.ucloud.cn/api/usms-api/add_usms_signature_qualification
     */
    addUSMSSignatureQualification(request) {
        const args = Object.assign({ Action: 'AddUSMSSignatureQualification' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
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
     * DeleteUSMSSignatureQualification - 删除短信签名资质申请记录
     *
     * See also: https://docs.ucloud.cn/api/usms-api/delete_usms_signature_qualification
     */
    deleteUSMSSignatureQualification(request) {
        const args = Object.assign({ Action: 'DeleteUSMSSignatureQualification' }, (request || {}));
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
     * GetUSMSSendStatistics - 获取发送统计数据
     *
     * See also: https://docs.ucloud.cn/api/usms-api/get_usms_send_statistics
     */
    getUSMSSendStatistics(request) {
        const args = Object.assign({ Action: 'GetUSMSSendStatistics' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUSMSSignatureQualification - 获取短信签名资质申请记录列表
     *
     * See also: https://docs.ucloud.cn/api/usms-api/get_usms_signature_qualification
     */
    getUSMSSignatureQualification(request) {
        const args = Object.assign({ Action: 'GetUSMSSignatureQualification' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUSMSTemplateSendStatistics - 获取模板发送统计数据
     *
     * See also: https://docs.ucloud.cn/api/usms-api/get_usms_template_send_statistics
     */
    getUSMSTemplateSendStatistics(request) {
        const args = Object.assign({ Action: 'GetUSMSTemplateSendStatistics' }, (request || {}));
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
     * QueryUSMSSignatureQualification - 获取短信签名资质申请记录详情
     *
     * See also: https://docs.ucloud.cn/api/usms-api/query_usms_signature_qualification
     */
    queryUSMSSignatureQualification(request) {
        const args = Object.assign({ Action: 'QueryUSMSSignatureQualification' }, (request || {}));
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
     * UpdateUSMSSignatureQualification - 修改短信签名资质申请记录
     *
     * See also: https://docs.ucloud.cn/api/usms-api/update_usms_signature_qualification
     */
    updateUSMSSignatureQualification(request) {
        const args = Object.assign({ Action: 'UpdateUSMSSignatureQualification' }, (request || {}));
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
    /**
     * UploadUSMSFile - 上传文件
     *
     * See also: https://docs.ucloud.cn/api/usms-api/upload_usms_file
     */
    uploadUSMSFile(request) {
        const args = Object.assign({ Action: 'UploadUSMSFile' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
}
exports.default = USMSClient;
