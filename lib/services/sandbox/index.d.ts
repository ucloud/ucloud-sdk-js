import Client from '../../core/client';
import { ConfigOptions } from '../../core/config';
import { CredentialOptions } from '../../core/credential';
/**
 * This client is used to call actions of **sandbox** service
 */
export default class SandboxClient extends Client {
    constructor({ config, credential, }: {
        config: ConfigOptions;
        credential: CredentialOptions;
    });
    /**
     * CheckSandboxCustomDomain - 检查自定义域名
     *
     * See also: https://docs.ucloud.cn/api/sandbox-api/check_sandbox_custom_domain
     */
    checkSandboxCustomDomain(request?: CheckSandboxCustomDomainRequest): Promise<CheckSandboxCustomDomainResponse>;
    /**
     * CreateSandboxSite - 创建站点空间
     *
     * See also: https://docs.ucloud.cn/api/sandbox-api/create_sandbox_site
     */
    createSandboxSite(request?: CreateSandboxSiteRequest): Promise<CreateSandboxSiteResponse>;
    /**
     * DeleteSandboxSite - 删除站点空间
     *
     * See also: https://docs.ucloud.cn/api/sandbox-api/delete_sandbox_site
     */
    deleteSandboxSite(request?: DeleteSandboxSiteRequest): Promise<DeleteSandboxSiteResponse>;
    /**
     * GetSandboxSite - 获取沙箱站点
     *
     * See also: https://docs.ucloud.cn/api/sandbox-api/get_sandbox_site
     */
    getSandboxSite(request?: GetSandboxSiteRequest): Promise<GetSandboxSiteResponse>;
    /**
     * ListSandboxSites - 列出站点空间
     *
     * See also: https://docs.ucloud.cn/api/sandbox-api/list_sandbox_sites
     */
    listSandboxSites(request?: ListSandboxSitesRequest): Promise<ListSandboxSitesResponse>;
    /**
     * UpdateSandboxSite - 更新站点空间
     *
     * See also: https://docs.ucloud.cn/api/sandbox-api/update_sandbox_site
     */
    updateSandboxSite(request?: UpdateSandboxSiteRequest): Promise<UpdateSandboxSiteResponse>;
    /**
     * UpdateSandboxSiteCustomDomain - 更新沙箱站点自定义域名
     *
     * See also: https://docs.ucloud.cn/api/sandbox-api/update_sandbox_site_custom_domain
     */
    updateSandboxSiteCustomDomain(request?: UpdateSandboxSiteCustomDomainRequest): Promise<UpdateSandboxSiteCustomDomainResponse>;
}
/**
 * CheckSandboxCustomDomain - 检查自定义域名
 */
export interface CheckSandboxCustomDomainRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * 自定义域名
     */
    CustomDomain: string;
    /**
     * 目标域名
     */
    TargetDomain: string;
    /**
     * 如果为true，则表示获取检查结果
     */
    Get?: boolean;
}
/**
 * CheckSandboxCustomDomain - 检查自定义域名
 */
export interface CheckSandboxCustomDomainResponse {
    /**
     * 检查结果Unknown:未知Checking：检查中Success：成功Timeout：超时Error：检查失败
     */
    Status: string;
}
/**
 * CreateSandboxSite - 创建站点空间
 */
export interface CreateSandboxSiteRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * 站点空间名称
     */
    Name: string;
    /**
     * 密钥
     */
    APIKey: string;
    /**
     * 密钥ID
     */
    KeyID: string;
    /**
     * 访问码
     */
    AccessCode: string;
    /**
     * 环境变量，格式：["key=value"]
     */
    Envs?: string;
}
/**
 * CreateSandboxSite - 创建站点空间
 */
export interface CreateSandboxSiteResponse {
}
/**
 * DeleteSandboxSite - 删除站点空间
 */
export interface DeleteSandboxSiteRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * 站点沙箱ID
     */
    SandboxID: string;
}
/**
 * DeleteSandboxSite - 删除站点空间
 */
export interface DeleteSandboxSiteResponse {
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
         * 站点环境变量。格式：["key=value"]
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
        /**
         * IP限制
         */
        IPAccess?: {
            /**
             * IP 列表
             */
            IPList?: string[];
            /**
             * IP限制模式"":不限制IP“allow”:自定义白名单“deny”:自定义黑名单
             */
            Mode?: string;
        };
    };
}
/**
 * ListSandboxSites - 列出站点空间
 */
export interface ListSandboxSitesRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
}
/**
 * ListSandboxSites - 列出站点空间
 */
export interface ListSandboxSitesResponse {
    /**
     * 站点空间列表
     */
    Sites: {
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
         * 站点环境变量。格式：["key=value"]
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
        /**
         * IP限制
         */
        IPAccess?: {
            /**
             * IP 列表
             */
            IPList?: string[];
            /**
             * IP限制模式"":不限制IP“allow”:自定义白名单“deny”:自定义黑名单
             */
            Mode?: string;
        };
    }[];
    /**
     * 目标域名地址
     */
    CustomTargetDomain?: string;
}
/**
 * UpdateSandboxSite - 更新站点空间
 */
export interface UpdateSandboxSiteRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * 站点沙箱ID
     */
    SandboxID: string;
    /**
     * 更新站点空间名称
     */
    Name?: string;
    /**
     * 更新站点空间API Key
     */
    APIKey?: string;
    /**
     * 更新站点空间Key ID（需要和APIKey一起传）
     */
    KeyID?: string;
    /**
     * 更新站点空间环境变量，格式为["Key=Value"]
     */
    Envs?: string;
    /**
     * 访问码
     */
    AccessCode?: string;
    /**
     *
     */
    IPAccess?: {
        /**
         * 访问限制IP，格式["192.168.1.2","192.168.1.3"]
         */
        IPList?: string;
        /**
         * 访问模式，- ""：无IP限制- "allow":白名单模式- "deny":黑名单
         */
        Mode?: string;
    };
}
/**
 * UpdateSandboxSite - 更新站点空间
 */
export interface UpdateSandboxSiteResponse {
}
/**
 * UpdateSandboxSiteCustomDomain - 更新沙箱站点自定义域名
 */
export interface UpdateSandboxSiteCustomDomainRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * 沙箱ID
     */
    SandboxID: string;
    /**
     * 自定义域名
     */
    CustomDomain: string;
}
/**
 * UpdateSandboxSiteCustomDomain - 更新沙箱站点自定义域名
 */
export interface UpdateSandboxSiteCustomDomainResponse {
}
