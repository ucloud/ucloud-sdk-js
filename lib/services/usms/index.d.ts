import Client from '../../core/client';
import { ConfigOptions } from '../../core/config';
import { CredentialOptions } from '../../core/credential';
/**
 * This client is used to call actions of **usms** service
 */
export default class USMSClient extends Client {
    constructor({ config, credential, }: {
        config: ConfigOptions;
        credential: CredentialOptions;
    });
    /**
     * CreateUSMSSignature - 调用接口CreateUSMSSignature申请短信签名
     *
     * See also: https://docs.ucloud.cn/api/usms-api/create_usms_signature
     */
    createUSMSSignature(request?: CreateUSMSSignatureRequest): Promise<CreateUSMSSignatureResponse>;
    /**
     * CreateUSMSTemplate - 调用接口CreateUSMSTemplate申请短信模板
     *
     * See also: https://docs.ucloud.cn/api/usms-api/create_usms_template
     */
    createUSMSTemplate(request?: CreateUSMSTemplateRequest): Promise<CreateUSMSTemplateResponse>;
    /**
     * DeleteUSMSSignature - 调用接口DeleteUSMSSignature删除短信签名
     *
     * See also: https://docs.ucloud.cn/api/usms-api/delete_usms_signature
     */
    deleteUSMSSignature(request?: DeleteUSMSSignatureRequest): Promise<DeleteUSMSSignatureResponse>;
    /**
     * DeleteUSMSTemplate - 调用接口DeleteUSMSTemplate删除短信模板
     *
     * See also: https://docs.ucloud.cn/api/usms-api/delete_usms_template
     */
    deleteUSMSTemplate(request?: DeleteUSMSTemplateRequest): Promise<DeleteUSMSTemplateResponse>;
    /**
     * GetUSMSSendReceipt - 调用接口GetUSMSSendReceipt短信发送状态信息
     *
     * See also: https://docs.ucloud.cn/api/usms-api/get_usms_send_receipt
     */
    getUSMSSendReceipt(request?: GetUSMSSendReceiptRequest): Promise<GetUSMSSendReceiptResponse>;
    /**
     * QueryUSMSSignature - 调用接口QueryUSMSSignature查询短信签名申请状态
     *
     * See also: https://docs.ucloud.cn/api/usms-api/query_usms_signature
     */
    queryUSMSSignature(request?: QueryUSMSSignatureRequest): Promise<QueryUSMSSignatureResponse>;
    /**
     * QueryUSMSTemplate - 调用接口QueryUSMSTemplate查询短信模板申请状态
     *
     * See also: https://docs.ucloud.cn/api/usms-api/query_usms_template
     */
    queryUSMSTemplate(request?: QueryUSMSTemplateRequest): Promise<QueryUSMSTemplateResponse>;
    /**
     * SendBatchUSMSMessage - 调用SendBatchUSMSMessage接口批量发送短信
     *
     * See also: https://docs.ucloud.cn/api/usms-api/send_batch_usms_message
     */
    sendBatchUSMSMessage(request?: SendBatchUSMSMessageRequest): Promise<SendBatchUSMSMessageResponse>;
    /**
     * SendUSMSMessage - 调用接口SendUSMSMessage发送短信
     *
     * See also: https://docs.ucloud.cn/api/usms-api/send_usms_message
     */
    sendUSMSMessage(request?: SendUSMSMessageRequest): Promise<SendUSMSMessageResponse>;
    /**
     * UpdateUSMSSignature - 调用接口UpdateUSMSSignature修改未通过审核的短信签名，并重新提交审核
     *
     * See also: https://docs.ucloud.cn/api/usms-api/update_usms_signature
     */
    updateUSMSSignature(request?: UpdateUSMSSignatureRequest): Promise<UpdateUSMSSignatureResponse>;
    /**
     * UpdateUSMSTemplate - 调用接口UpdateUSMSTemplate修改未通过审核的短信模板，并重新提交审核
     *
     * See also: https://docs.ucloud.cn/api/usms-api/update_usms_template
     */
    updateUSMSTemplate(request?: UpdateUSMSTemplateRequest): Promise<UpdateUSMSTemplateResponse>;
}
/**
 * CreateUSMSSignature - 调用接口CreateUSMSSignature申请短信签名
 */
export interface CreateUSMSSignatureRequest {
    /**
     * 签名内容
     */
    SigContent: string;
    /**
     * 签名类型，说明如下：0-公司或企业的全称或简称；1-App应用的全称或简称；2-工信部备案网站的全称或简称；3-公众号或小程序的全称或简称；4-商标名的全称或简称；5-政府/机关事业单位/其他单位的全称或简称；
     */
    SigType: number;
    /**
     * 签名用途，0-自用，1-他用；
     */
    SigPurpose: number;
    /**
     * 签名的资质证明文件类型，需与签名类型保持一致，说明如下：0-三证合一/企业营业执照/组织机构代码证书/社会信用代码证书；1-应用商店后台开发者管理截图；2-备案服务商的备案成功截图(含域名，网站名称，备案号)；3-公众号或小程序的管理界面截图；4-商标注册证书；5-组织机构代码证书、社会信用代码证书；
     */
    CertificateType: number;
    /**
     * 短信签名申请原因
     */
    Description: string;
    /**
     * 短信签名的资质证明文件，需先进行base64编码格式转换，此处填写转换后的字符串。文件大小不超过4 MB
     */
    File: string;
    /**
     * 国内/国际短信。true:国际短信，false:国内短信，若不传值则默认该值为false
     */
    International?: boolean;
    /**
     * 短信签名授权委托文件，需先进行base64编码格式转换，此处填写转换后的字符串。文件大小不超过4 MB；当您是代理并使用第三方的签名时（也即SigPurpose为1-他用），该项为必填项；
     */
    ProxyFile?: string;
}
/**
 * CreateUSMSSignature - 调用接口CreateUSMSSignature申请短信签名
 */
export interface CreateUSMSSignatureResponse {
    /**
     * 短信签名ID（短信签名申请时的工单ID）
     */
    SigId?: string;
}
/**
 * CreateUSMSTemplate - 调用接口CreateUSMSTemplate申请短信模板
 */
export interface CreateUSMSTemplateRequest {
    /**
     * 短信模板用途类型：1-验证码类短信模板；2-系统通知类短信模板；3-会员推广类短信模板；
     */
    Purpose: number;
    /**
     * 短信模板名称，不超过32个字符，每个中文、符号、英文、数字等都计为1个字。
     */
    TemplateName: string;
    /**
     * 短信模板内容，说明如下：字数不超过500，每个中文、符号、英文、数组等都计为一个字；模板中的变量填写格式：{N}，其中N为大于1的整数，有多个参数时，建议N从1开始顺次，例如：{1}、{2}等；短信模板禁止仅包括变量的情况；
     */
    Template: string;
    /**
     * 标记是否为国际短信。true:国际短信，false:国内短信，若不传值则默认该值为false
     */
    International?: boolean;
    /**
     * 短信模板申请原因说明，字数不超过128，每个中文、符号、英文、数字等都计为1个字。
     */
    Remark?: string;
    /**
     * 当Purpose为3时，也即会员推广类短信模板，该项必填。枚举值：TD退订、回T退订、回N退订、回TD退订、退订回T、退订回D、退订回TD、退订回复T、退订回复D、退订回复N、退订回复TD、拒收回T
     */
    UnsubscribeInfo?: string;
    /**
     * 模板变量属性说明
     */
    Instruction?: string;
}
/**
 * CreateUSMSTemplate - 调用接口CreateUSMSTemplate申请短信模板
 */
export interface CreateUSMSTemplateResponse {
    /**
     * 短信模板ID（短信模板申请时的工单ID）
     */
    TemplateId: string;
}
/**
 * DeleteUSMSSignature - 调用接口DeleteUSMSSignature删除短信签名
 */
export interface DeleteUSMSSignatureRequest {
    /**
     * 签名ID（也即短信签名申请时的工单ID），支持以数组的方式，举例，以SigIds.0、SigIds.1...SigIds.N方式传入
     */
    SigIds: string[];
}
/**
 * DeleteUSMSSignature - 调用接口DeleteUSMSSignature删除短信签名
 */
export interface DeleteUSMSSignatureResponse {
}
/**
 * DeleteUSMSTemplate - 调用接口DeleteUSMSTemplate删除短信模板
 */
export interface DeleteUSMSTemplateRequest {
    /**
     * 模板ID（也即短信模板申请时的工单ID），支持以数组的方式，举例，以TemplateIds.0、TemplateIds.1...TemplateIds.N方式传入
     */
    TemplateIds: string[];
}
/**
 * DeleteUSMSTemplate - 调用接口DeleteUSMSTemplate删除短信模板
 */
export interface DeleteUSMSTemplateResponse {
}
/**
 * GetUSMSSendReceipt - 调用接口GetUSMSSendReceipt短信发送状态信息
 */
export interface GetUSMSSendReceiptRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone?: string;
    /**
     * 发送短信时返回的SessionNo集合，SessionNoSet.0,SessionNoSet.1....格式，单次调用集合数需控制在100个以内
     */
    SessionNoSet: string[];
}
/**
 * GetUSMSSendReceipt - 调用接口GetUSMSSendReceipt短信发送状态信息
 */
export interface GetUSMSSendReceiptResponse {
    /**
     * 回执信息集合
     */
    Data: {
        /**
         * 发送短信时返回的SessionNo
         */
        SessionNo: string;
        /**
         * 每个手机号的短信回执信息集合
         */
        ReceiptSet: {
            /**
             * 手机号码
             */
            Phone: string;
            /**
             * 消耗短信条数
             */
            CostCount: number;
            /**
             * 回执结果，枚举值：\\ > 发送成功: 代表成功 \\ > Success: 代表成功 \\ > 发送失败: 代表失败 \\ > Fail: 代表失败 \\ > 状态未知: 代表未知 \\ > Unknow: 代表未知
             */
            ReceiptResult: string;
            /**
             * 状态报告编码
             */
            ReceiptCode: string;
            /**
             * 回执结果描述
             */
            ReceiptDesc: string;
            /**
             * 回执返回时间
             */
            ReceiptTime: number;
            /**
             * 自定义的业务标识ID，字符串
             */
            UserId: string;
        }[];
    }[];
}
/**
 * QueryUSMSSignature - 调用接口QueryUSMSSignature查询短信签名申请状态
 */
export interface QueryUSMSSignatureRequest {
    /**
     * 已申请的短信签名ID（短信签名申请时的工单ID）；签名ID和签名至少需填写1项；
     */
    SigId?: string;
    /**
     * 签名内容；签名ID和签名至少需填写1项；
     */
    SigContent?: string;
}
/**
 * QueryUSMSSignature - 调用接口QueryUSMSSignature查询短信签名申请状态
 */
export interface QueryUSMSSignatureResponse {
    /**
     * 签名信息
     */
    Data: {
        /**
         * 短信签名ID
         */
        SigId: string;
        /**
         * 短信签名内容
         */
        SigContent: string;
        /**
         * 签名状态，0-待审核 1-审核中 2-审核通过 3-审核未通过 4-被禁用
         */
        Status: number;
        /**
         * 短信签名未通过审核原因
         */
        ErrDesc: string;
    };
}
/**
 * QueryUSMSTemplate - 调用接口QueryUSMSTemplate查询短信模板申请状态
 */
export interface QueryUSMSTemplateRequest {
    /**
     * 模板ID
     */
    TemplateId: string;
}
/**
 * QueryUSMSTemplate - 调用接口QueryUSMSTemplate查询短信模板申请状态
 */
export interface QueryUSMSTemplateResponse {
    /**
     * 短信模板明细信息，各字段说明详见OutTemplate
     */
    Data?: {
        /**
         * 短信模板ID
         */
        TemplateId: string;
        /**
         * 模板类型，选项：1-验证码类 2-通知类 3-会员推广类
         */
        Purpose: number;
        /**
         * 短信模板名称
         */
        TemplateName: string;
        /**
         * 短信模板内容
         */
        Template: string;
        /**
         * 退订信息；一般填写方式“回T退订”，当purpose为3（也即会员推广类）时，为必填项
         */
        UnsubscribeInfo: string;
        /**
         * 短信模板状态；状态说明：0-待审核，1-审核中，2-审核通过，3-审核未通过，4-被禁用
         */
        Status: number;
        /**
         * 模板说明
         */
        Remark: string;
        /**
         * 审核失败原因
         */
        ErrDesc: string;
        /**
         * 创建时间
         */
        CreateTime: number;
        /**
         * 模板变量属性说明
         */
        Instruction?: string;
    };
}
/**
 * SendBatchUSMSMessage - 调用SendBatchUSMSMessage接口批量发送短信
 */
export interface SendBatchUSMSMessageRequest {
    /**
     * 批量发送内容，该参数是json数组的base64编码结果。发送内容json数组中，每个“模板+签名”组合作为一个子项，每个子项内支持多个号码，示例：发送内容json数组（base64编码前）：[{"TemplateId": "UTA20212831C85C", "SigContent": "UCloud", "Target": [{"TemplateParams": ["123456"], "Phone": "18500000123", "ExtendCode": "123", "UserId": "456"} ] } ]   。json数组中各参数的定义："TemplateId":模板ID，"SigContent"短信签名内容，"Target"具体到号码粒度的发送内容。"Target"中的具体字段有："TemplateParams"实际发送的模板参数（若使用的是无参数模板，该参数不能传值），"Phone"手机号码, "ExtendCode"短信扩展码, "UserId"自定义业务标识ID。其中必传参数为"TemplateId", "SigContent", "Target"（"Target"中必传参数为"Phone"）。实际调用本接口时TaskContent传值（发送内容base64编码后）为：W3siVGVtcGxhdGVJZCI6ICJVVEEyMDIxMjgzMUM4NUMiLCAiU2lnQ29udGVudCI6ICJVQ2xvdWQiLCAiVGFyZ2V0IjogW3siVGVtcGxhdGVQYXJhbXMiOiBbIjEyMzQ1NiJdLCAiUGhvbmUiOiAiMTg1MDAwMDAxMjMiLCAiRXh0ZW5kQ29kZSI6ICIxMjMiLCAiVXNlcklkIjogIjQ1NiJ9IF0gfSBdIA==
     */
    TaskContent: string;
}
/**
 * SendBatchUSMSMessage - 调用SendBatchUSMSMessage接口批量发送短信
 */
export interface SendBatchUSMSMessageResponse {
    /**
     * 本次提交发送任务的唯一ID，可根据该值查询本次发送的短信列表。注：成功提交短信数大于0时，才返回该字段
     */
    SessionNo?: string;
    /**
     * 本次请求Uuid
     */
    ReqUuid?: string;
    /**
     * 成功提交短信（未拆分）条数
     */
    SuccessCount?: number;
    /**
     * 未发送成功的详情，返回码非0时该字段有效，可根据该字段数据重发
     */
    FailContent?: {
        /**
         * 模板ID
         */
        TemplateId: string;
        /**
         * 签名
         */
        SigContent: string;
        /**
         * 具体号码信息
         */
        Target: {
            /**
             * 模板参数
             */
            TemplateParams: string[];
            /**
             * 手机号
             */
            Phone: string;
            /**
             * 扩展号码
             */
            ExtendCode?: string;
            /**
             * 用户自定义ID
             */
            UserId?: string;
            /**
             * 发送失败原因。注：若模板/签名校验失败，该字段为空
             */
            FailureDetails?: string;
        }[];
        /**
         * 未能成功发送的详情。注：模板/签名检验失败时，该字段有效
         */
        FailureDetails?: string;
    }[];
}
/**
 * SendUSMSMessage - 调用接口SendUSMSMessage发送短信
 */
export interface SendUSMSMessageRequest {
    /**
     * 电话号码数组，电话号码格式为(60)1xxxxxxxx，()中为国际长途区号(如中国为86或0086，两种格式都支持)，后面为电话号码.若不传入国际区号，如1851623xxxx，则默认为国内手机号
     */
    PhoneNumbers: string[];
    /**
     * 短信签名内容，请到[USMS控制台](https://console.ucloud.cn/usms)的签名管理页面查看；使用的短信签名必须是已申请并且通过审核；
     */
    SigContent: string;
    /**
     * 模板ID（也即短信模板申请时的工单ID），请到[USMS控制台](https://console.ucloud.cn/usms)的模板管理页面查看；使用的短信模板必须是已申请并通过审核；
     */
    TemplateId: string;
    /**
     * 模板可变参数，以数组的方式填写，举例，TemplateParams.0，TemplateParams.1，... 若模板中无可变参数，则该项可不填写；若模板中有可变参数，则该项为必填项，参数个数需与变量个数保持一致，否则无法发送；
     */
    TemplateParams?: string[];
    /**
     * 短信扩展码，格式为阿拉伯数字串，默认不开通，如需开通请联系 UCloud技术支持
     */
    ExtendCode?: string;
    /**
     * 自定义的业务标识ID，字符串（ 长度不能超过32 位），不支持 单引号、表情包符号等特殊字符
     */
    UserId?: string;
}
/**
 * SendUSMSMessage - 调用接口SendUSMSMessage发送短信
 */
export interface SendUSMSMessageResponse {
    /**
     * 本次提交发送的短信的唯一ID，可根据该值查询本次发送的短信列表
     */
    SessionNo?: string;
    /**
     * 本次提交的自定义业务标识ID，仅当发送时传入有效的UserId，才返回该字段。
     */
    UserId?: string;
}
/**
 * UpdateUSMSSignature - 调用接口UpdateUSMSSignature修改未通过审核的短信签名，并重新提交审核
 */
export interface UpdateUSMSSignatureRequest {
    /**
     * 签名ID（也即短信签名申请时的工单ID），支持以数组的方式，举例，以SigIds.0、SigIds.1...SigIds.N方式传入
     */
    SigId: string;
    /**
     * 新的短信签名内容；长度为2-12个字符, 可包含中文、数字和符号；无需填写【】或[]，系统会自动添加
     */
    SigContent: string;
    /**
     * 签名类型，说明如下：0-公司或企业的全称或简称；1-App应用的全称或简称；2-工信部备案网站的全称或简称；3-公众号或小程序的全称或简称；4-商标名的全称或简称；5-政府/机关事业单位/其他单位的全称或简称；
     */
    SigType: number;
    /**
     * 签名用途，0-自用，1-他用；
     */
    SigPurpose: number;
    /**
     * 短信签名的资质证明文件内容，需先进行base64编码格式转换，此处填写转换后的字符串。文件大小不超过4 MB。内容格式如下: [file type];[code type],[base64]  如：image/jpeg;base64,5YaF5a65
     */
    File?: string;
    /**
     * 签名的资质证明文件类型，需与签名类型保持一致，说明如下：0-三证合一/企业营业执照/组织机构代码证书/社会信用代码证书；1-应用商店后台开发者管理截图；2-备案服务商的备案成功截图(含域名，网站名称，备案号)；3-公众号或小程序的管理界面截图；4-商标注册证书；5-组织机构代码证书、社会信用代码证书；
     */
    CertificateType?: number;
    /**
     * 短信签名授权委托文件内容，需先进行base64编码格式转换，此处填写转换后的字符串。文件大小不超过4 MB；当您是代理并使用第三方的签名时（也即SigPurpose为1-他用），该项为必填项；格式和File类似。
     */
    ProxyFile?: string;
    /**
     * 短信签名的资质证明文件URL，若未更改审核材料，则该处使用已上传审核材料的URL链接，否则使用File参数
     */
    Document?: string;
    /**
     * 短信签名授权委托文件URL，若未更改授权委托文件，则该处填写已上传的授权委托文件的URL链接，否则使用ProxyFile参数
     */
    ProxyDoc?: string;
}
/**
 * UpdateUSMSSignature - 调用接口UpdateUSMSSignature修改未通过审核的短信签名，并重新提交审核
 */
export interface UpdateUSMSSignatureResponse {
}
/**
 * UpdateUSMSTemplate - 调用接口UpdateUSMSTemplate修改未通过审核的短信模板，并重新提交审核
 */
export interface UpdateUSMSTemplateRequest {
    /**
     * 短信模板ID
     */
    TemplateId: string;
    /**
     * 新的模板内容。模板名称和模板内容必须提供一个，否则会报错。小于等于600个字
     */
    Template: string;
    /**
     * 新的模板名称。小于等于32个字，每个中文、英文、数组、符合都计为一个字
     */
    TemplateName?: string;
    /**
     * 短信模板申请原因说明，字数不超过128，每个中文、符号、英文、数字等都计为1个字。
     */
    Remark?: string;
    /**
     * 模板变量属性说明
     */
    Instruction?: string;
}
/**
 * UpdateUSMSTemplate - 调用接口UpdateUSMSTemplate修改未通过审核的短信模板，并重新提交审核
 */
export interface UpdateUSMSTemplateResponse {
}
