"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("../../core/client"));
const request_1 = __importDefault(require("../../core/request"));
/**
 * This client is used to call actions of **ses** service
 */
class SESClient extends client_1.default {
    constructor({ config, credential, }) {
        super({ config, credential });
    }
    /**
     * SendSESEmail - 直接发送邮件，无需创建发送任务和模版，支持 HTML/纯文本内容、主题、抄送/密送、附件和邮件头，单次最多 100 个收件人。
     *
     * See also: https://docs.ucloud.cn/api/ses-api/send_ses_email
     */
    sendSESEmail(request) {
        const args = Object.assign({ Action: 'SendSESEmail' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * SendSESEmailTemplate - 通过模版发送邮件，无需创建发送任务。支持自定义主题、摘要、预览文本、抄送/密送、附件和邮件头，单次最多 100 个收件人。
     *
     * See also: https://docs.ucloud.cn/api/ses-api/send_ses_email_template
     */
    sendSESEmailTemplate(request) {
        const args = Object.assign({ Action: 'SendSESEmailTemplate' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
}
exports.default = SESClient;
