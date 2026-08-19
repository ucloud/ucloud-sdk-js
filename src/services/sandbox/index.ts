import Client from '../../core/client';
import Request from '../../core/request';
import { ConfigOptions } from '../../core/config';
import { CredentialOptions } from '../../core/credential';

/**
 * This client is used to call actions of **sandbox** service
 */
export default class sandboxClient extends Client {
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
   * GetSandboxSite - 获取沙箱站点
   *
   * See also: https://docs.ucloud.cn/api/sandbox-api/get_sandbox_site
   */
  getSandboxSite(
    request?: GetSandboxSiteRequest
  ): Promise<GetSandboxSiteResponse> {
    const args = { Action: 'GetSandboxSite', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as GetSandboxSiteResponse
    );
  }
}

/**
 * GetSandboxSite - 获取沙箱站点
 */
export interface GetSandboxSiteRequest {
  /**
   * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
   */
  Zone: string;
  /**
   * 沙箱ID
   */
  SandboxID: string;
}

/**
 * GetSandboxSite - 获取沙箱站点
 */
export interface GetSandboxSiteResponse {
  /**
   * 站点
   */
  Site: {
    /**
     * 名称
     */
    Name: string;
    /**
     * 是否就绪
     */
    Ready: boolean;
    /**
     * 站点ID
     */
    ID: string;
    /**
     * 沙箱ID
     */
    SandboxID: string;
    /**
     * 站点访问地址
     */
    Host: string;
    /**
     * 站点Key ID
     */
    KeyID: string;
    /**
     * 更新时间
     */
    UpdateTime: number;
    /**
     * 访问码
     */
    AccessCode: string;
    /**
     * 连接密钥
     */
    ConnectKey: string;
    /**
     * 站点环境变量。格式：key=value
     */
    Envs?: string[];
    /**
     * 自定义域名
     */
    CustomDomain?: string;
    /**
     * 自定义域名签发状态
     */
    CustomDomainStatus?: string;
    /**
     * 自定义域名签发错误信息
     */
    CustomDomainError?: string;
  };
}
