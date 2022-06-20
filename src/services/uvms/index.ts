import Client from '../../core/client';
import Request from '../../core/request';
import { ConfigOptions } from '../../core/config';
import { CredentialOptions } from '../../core/credential';

/**
 * This client is used to call actions of **uvms** service
 */
export default class UVMSClient extends Client {
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
   * SendUVMSMessage - 向指定号码拨打电话
   *
   * See also: https://docs.ucloud.cn/api/uvms-api/send_uvms_message
   */
  sendUVMSMessage(
    request?: SendUVMSMessageRequest
  ): Promise<SendUVMSMessageResponse> {
    const args = { Action: 'SendUVMSMessage', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as SendUVMSMessageResponse
    );
  }
}

/**
 * SendUVMSMessage - 向指定号码拨打电话
 */
export interface SendUVMSMessageRequest {
  /**
   * 被叫号码，采用 E.164 标准，格式为+[国家代码][用户号码]。例如：+8613512345678， 其中前面有一个+号 ，86为国家码，13512345678为手机号
   */
  CalledNumber: string;
  /**
   * 模板 ID，在控制台审核通过的模板 ID。
   */
  TemplateId: string;
  /**
   * 模板可变参数，以数组的方式填写，举例，TemplateParams.0，TemplateParams.1，... 若模板中无可变参数，则该项可不填写；若模板中有可变参数，则该项为必填项，参数个数需与变量个数保持一致，否则无法发送；
   */
  TemplateParams?: string[];
  /**
   * 主叫号码，号码随机时不填。专属号码时传入已购买的号码，仅支持一个号码，在控制台查看已购买的号码。
   */
  FromNumber?: string;
  /**
   * 自定义的业务标识ID，字符串（ 长度不能超过32 位），不支持 单引号、表情包符号等特殊字符
   */
  UserId?: string;
}

/**
 * SendUVMSMessage - 向指定号码拨打电话
 */
export interface SendUVMSMessageResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 ReqUuid。
   */
  ReqUuid: string;
  /**
   * 本次提交发送语音的唯一ID，可根据该值查询本次发送详情
   */
  SessionNo?: string;
  /**
   * 	本次提交的自定义业务标识ID，仅当发送时传入有效的UserId，才返回该字段。
   */
  UserId?: string;
}
