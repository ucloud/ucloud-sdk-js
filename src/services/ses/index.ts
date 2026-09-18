import Client from '../../core/client';
import Request from '../../core/request';
import { ConfigOptions } from '../../core/config';
import { CredentialOptions } from '../../core/credential';

/**
 * This client is used to call actions of **ses** service
 */
export default class SESClient extends Client {
  constructor({
    config,
    credential,
  }: {
    config: ConfigOptions;
    credential: CredentialOptions;
  }) {
    super({ config, credential });
  }

  /**
   * SendSESEmail - 直接发送邮件，无需创建发送任务和模版，支持 HTML/纯文本内容、主题、抄送/密送、附件和邮件头，单次最多 100 个收件人。
   *
   * See also: https://docs.ucloud.cn/api/ses-api/send_ses_email
   */
  sendSESEmail(request?: SendSESEmailRequest): Promise<SendSESEmailResponse> {
    const args = { Action: 'SendSESEmail', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as SendSESEmailResponse
    );
  }

  /**
   * SendSESEmailTemplate - 通过模版发送邮件，无需创建发送任务。支持自定义主题、摘要、预览文本、抄送/密送、附件和邮件头，单次最多 100 个收件人。
   *
   * See also: https://docs.ucloud.cn/api/ses-api/send_ses_email_template
   */
  sendSESEmailTemplate(
    request?: SendSESEmailTemplateRequest
  ): Promise<SendSESEmailTemplateResponse> {
    const args = { Action: 'SendSESEmailTemplate', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as SendSESEmailTemplateResponse
    );
  }
}

/**
 * SendSESEmail - 直接发送邮件，无需创建发送任务和模版，支持 HTML/纯文本内容、主题、抄送/密送、附件和邮件头，单次最多 100 个收件人。
 */
export interface SendSESEmailRequest {
  /**
   * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
   */
  Zone?: string;
  /**
   * 邮件主题（长度 1~200 字符）
   */
  Subject: string;
  /**
   * 发件人邮箱，配置地址：https://console.ucloud.cn/ses/email-config?tab=sender-list
   */
  From: string;
  /**
   * 收件人
   */
  To: string[];
  /**
   * HTML 内容 （与Text二选一，长度上限 10,485,760个字符）
   */
  Html?: string;
  /**
   * 纯文本内容 （与Html二选一，长度上限 10,485,760个字符）
   */
  Text?: string;
  /**
   * 邮件预览文本
   */
  PreHeader?: string;
  /**
   * 发件人名称，不传或为空时，自动回落到该发件人在控制台配置的别名（Alias）
   */
  FromName?: string;
  /**
   * 抄送（抄送+密送总数量不能超过100）
   */
  Cc?: string[];
  /**
   * 密送（抄送+密送总数量不能超过100）
   */
  Bcc?: string[];
  /**
   *
   */
  Attachments?: {
    /**
     * 附件文件名
     */
    Filename?: string;
    /**
     * MIME 类型，如： application/pdf
     */
    ContentType?: string;
    /**
     * 附件内容（Base64 编码），单次请求最多 10 个附件；总大小不超过 10MB
     */
    Data?: string;
  }[];
  /**
   *
   */
  Headers?: {
    /**
     * 邮件头名称，最多 20 个且仅允许字母、数字和 -（正则 ^[A-Za-z0-9-]+$）。禁止使用保留名称：From/To/Cc/Bcc/Subject/Reply-To/Content-Type/Mime-Version，以及 X-SES- 前缀（均不区分大小写）。
     */
    Name?: string;
    /**
     * 邮件头值
     */
    Value?: string;
  }[];
}

/**
 * SendSESEmail - 直接发送邮件，无需创建发送任务和模版，支持 HTML/纯文本内容、主题、抄送/密送、附件和邮件头，单次最多 100 个收件人。
 */
export interface SendSESEmailResponse {
  /**
   * 本次发送任务的唯一标识
   */
  SessionNo: string;
  /**
   * 发送成功数
   */
  SuccessCount: number;
  /**
   * 发送失败的收件人列表
   */
  FailContent: {
    /**
     * 收件人
     */
    To?: string;
    /**
     * 收件邮箱
     */
    EmailAddress?: string;
    /**
     * 抄送
     */
    Cc?: string[];
    /**
     * 密送
     */
    Bcc?: string[];
    /**
     * 模版变量
     */
    TemplateVariableParams?: string[];
    /**
     * 失败原因
     */
    FailureReason?: string;
  }[];
}

/**
 * SendSESEmailTemplate - 通过模版发送邮件，无需创建发送任务。支持自定义主题、摘要、预览文本、抄送/密送、附件和邮件头，单次最多 100 个收件人。
 */
export interface SendSESEmailTemplateRequest {
  /**
   * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
   */
  Zone?: string;
  /**
   * 模版 ID，获取：https://console.ucloud.cn/ses/email-config?tab=template
   */
  TemplateId: string;
  /**
   * 发件人邮箱
   */
  From: string;
  /**
   * 邮件主题
   */
  Subject: string;
  /**
   * 邮件预览文本
   */
  PreHeader?: string;
  /**
   *
   */
  EmailContent?: {
    /**
     * 收件人，最多100条
     */
    To?: string;
    /**
     * 抄送（抄送+密送总数量不能超过100）
     */
    Cc?: string[];
    /**
     * 密送（抄送+密送总数量不能超过100）
     */
    Bcc?: string[];
    /**
     * 模版变量，格式 variableName{##}variableValue （例：{"name{##}Tom", "code{##}1234"}）
     */
    TemplateVariableParams?: string[];
  }[];
  /**
   * 发件人名称，不传或为空时，自动回落到该发件人在控制台配置的别名（Alias）
   */
  FromName?: string;
  /**
   *
   */
  Attachments?: {
    /**
     * 附件文件名
     */
    Filename?: string;
    /**
     * MIME 类型，如： application/pdf
     */
    ContentType?: string;
    /**
     * 附件内容（Base64 编码），单次请求最多 10 个附件；总大小不超过 10MB
     */
    Data?: string;
  }[];
  /**
   *
   */
  Headers?: {
    /**
     * 邮件头名称，最多 20 个且仅允许字母、数字和 -（正则 ^[A-Za-z0-9-]+$）。禁止使用保留名称：From/To/Cc/Bcc/Subject/Reply-To/Content-Type/Mime-Version，以及 X-SES- 前缀（均不区分大小写）。
     */
    Name?: string;
    /**
     * 邮件头值
     */
    Value?: string;
  }[];
}

/**
 * SendSESEmailTemplate - 通过模版发送邮件，无需创建发送任务。支持自定义主题、摘要、预览文本、抄送/密送、附件和邮件头，单次最多 100 个收件人。
 */
export interface SendSESEmailTemplateResponse {
  /**
   * 本次发送任务的唯一标识
   */
  SessionNo: string;
  /**
   * 发送成功数
   */
  SuccessCount: number;
  /**
   * 发送失败的收件人列表
   */
  FailContent: {
    /**
     * 收件人
     */
    To?: string;
    /**
     * 收件邮箱
     */
    EmailAddress?: string;
    /**
     * 抄送
     */
    Cc?: string[];
    /**
     * 密送
     */
    Bcc?: string[];
    /**
     * 模版变量
     */
    TemplateVariableParams?: string[];
    /**
     * 失败原因
     */
    FailureReason?: string;
  }[];
}
