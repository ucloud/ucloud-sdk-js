import Client from '../../core/client';
import { ConfigOptions } from '../../core/config';
import { CredentialOptions } from '../../core/credential';
/**
 * This client is used to call actions of **ufile** service
 */
export default class UFileClient extends Client {
    constructor({ config, credential, }: {
        config: ConfigOptions;
        credential: CredentialOptions;
    });
    /**
     * AddCORSRule - 添加跨域规则
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/add_cors_rule
     */
    addCORSRule(request?: AddCORSRuleRequest): Promise<AddCORSRuleResponse>;
    /**
     * AddUFileSSLCert - 给指定域名添加证书
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/add_ufile_ssl_cert
     */
    addUFileSSLCert(request?: AddUFileSSLCertRequest): Promise<AddUFileSSLCertResponse>;
    /**
     * BindBucketDomain - 绑定自定义域名
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/bind_bucket_domain
     */
    bindBucketDomain(request?: BindBucketDomainRequest): Promise<BindBucketDomainResponse>;
    /**
     * BuyUFilePkg - 购买流量包或存储包
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/buy_ufile_pkg
     */
    buyUFilePkg(request?: BuyUFilePkgRequest): Promise<BuyUFilePkgResponse>;
    /**
     * CreateBucket - 创建Bucket
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/create_bucket
     */
    createBucket(request?: CreateBucketRequest): Promise<CreateBucketResponse>;
    /**
     * CreateUFileLifeCycle - 创建生命周期管理
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/create_ufile_life_cycle
     */
    createUFileLifeCycle(request?: CreateUFileLifeCycleRequest): Promise<CreateUFileLifeCycleResponse>;
    /**
     * CreateUFileToken - 创建US3令牌
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/create_ufile_token
     */
    createUFileToken(request?: CreateUFileTokenRequest): Promise<CreateUFileTokenResponse>;
    /**
     * CreateUdsRule - 针对对象存储的文件，进行自动触发解压。
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/create_uds_rule
     */
    createUdsRule(request?: CreateUdsRuleRequest): Promise<CreateUdsRuleResponse>;
    /**
     * DeleteBucket - 删除Bucket
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/delete_bucket
     */
    deleteBucket(request?: DeleteBucketRequest): Promise<DeleteBucketResponse>;
    /**
     * DeleteCORSRule - 删除跨域规则
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/delete_cors_rule
     */
    deleteCORSRule(request?: DeleteCORSRuleRequest): Promise<DeleteCORSRuleResponse>;
    /**
     * DeleteUFileLifeCycle - 删除生命周期管理
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/delete_ufile_life_cycle
     */
    deleteUFileLifeCycle(request?: DeleteUFileLifeCycleRequest): Promise<DeleteUFileLifeCycleResponse>;
    /**
     * DeleteUFilePkg - 删除资源包(退费)
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/delete_ufile_pkg
     */
    deleteUFilePkg(request?: DeleteUFilePkgRequest): Promise<DeleteUFilePkgResponse>;
    /**
     * DeleteUFileSSLCert - 删除指定域名添加证书
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/delete_ufile_ssl_cert
     */
    deleteUFileSSLCert(request?: DeleteUFileSSLCertRequest): Promise<DeleteUFileSSLCertResponse>;
    /**
     * DeleteUFileToken - 删除令牌
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/delete_ufile_token
     */
    deleteUFileToken(request?: DeleteUFileTokenRequest): Promise<DeleteUFileTokenResponse>;
    /**
     * DescribeBucket - 获取Bucket的描述信息
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/describe_bucket
     */
    describeBucket(request?: DescribeBucketRequest): Promise<DescribeBucketResponse>;
    /**
     * DescribeCORSRule - 获取跨域规则信息
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/describe_cors_rule
     */
    describeCORSRule(request?: DescribeCORSRuleRequest): Promise<DescribeCORSRuleResponse>;
    /**
     * DescribeUFileAvailablePkg - 查询可购买的资源包列表
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/describe_ufile_available_pkg
     */
    describeUFileAvailablePkg(request?: DescribeUFileAvailablePkgRequest): Promise<DescribeUFileAvailablePkgResponse>;
    /**
     * DescribeUFileLifeCycle - 获取生命周期信息
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/describe_ufile_life_cycle
     */
    describeUFileLifeCycle(request?: DescribeUFileLifeCycleRequest): Promise<DescribeUFileLifeCycleResponse>;
    /**
     * DescribeUFilePkg - 查询已购买的资源包列表
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/describe_ufile_pkg
     */
    describeUFilePkg(request?: DescribeUFilePkgRequest): Promise<DescribeUFilePkgResponse>;
    /**
     * DescribeUFilePkgUsage - 查询资源包使用明细
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/describe_ufile_pkg_usage
     */
    describeUFilePkgUsage(request?: DescribeUFilePkgUsageRequest): Promise<DescribeUFilePkgUsageResponse>;
    /**
     * DescribeUFileReferer - 对象存储防盗链列表
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/describe_ufile_referer
     */
    describeUFileReferer(request?: DescribeUFileRefererRequest): Promise<DescribeUFileRefererResponse>;
    /**
     * DescribeUFileSSLCert - 查询指定存储桶所有证书
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/describe_ufile_ssl_cert
     */
    describeUFileSSLCert(request?: DescribeUFileSSLCertRequest): Promise<DescribeUFileSSLCertResponse>;
    /**
     * DescribeUFileToken - 获取令牌信息
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/describe_ufile_token
     */
    describeUFileToken(request?: DescribeUFileTokenRequest): Promise<DescribeUFileTokenResponse>;
    /**
     * DescribeUdsRule - 针对解压缩规则进行查询
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/describe_uds_rule
     */
    describeUdsRule(request?: DescribeUdsRuleRequest): Promise<DescribeUdsRuleResponse>;
    /**
     * GetBucketQuota - 获取bucket配额
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/get_bucket_quota
     */
    getBucketQuota(request?: GetBucketQuotaRequest): Promise<GetBucketQuotaResponse>;
    /**
     * GetBucketStaticPageRule - 获取bucket静态网页配置
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/get_bucket_static_page_rule
     */
    getBucketStaticPageRule(request?: GetBucketStaticPageRuleRequest): Promise<GetBucketStaticPageRuleResponse>;
    /**
     * GetProjectRegionQuota - 获取项目地域配额
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/get_project_region_quota
     */
    getProjectRegionQuota(request?: GetProjectRegionQuotaRequest): Promise<GetProjectRegionQuotaResponse>;
    /**
     * GetUFileDailyBill - 获取bucket每日账单
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/get_ufile_daily_bill
     */
    getUFileDailyBill(request?: GetUFileDailyBillRequest): Promise<GetUFileDailyBillResponse>;
    /**
     * GetUFileDailyReport - 查看日消费报表
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/get_ufile_daily_report
     */
    getUFileDailyReport(request?: GetUFileDailyReportRequest): Promise<GetUFileDailyReportResponse>;
    /**
     * GetUFileMonthlyBill - 获取bucket月度账单
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/get_ufile_monthly_bill
     */
    getUFileMonthlyBill(request?: GetUFileMonthlyBillRequest): Promise<GetUFileMonthlyBillResponse>;
    /**
     * GetUFilePkgPrice - 获取对资源进行新购、续费、升级等操作的价格
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/get_ufile_pkg_price
     */
    getUFilePkgPrice(request?: GetUFilePkgPriceRequest): Promise<GetUFilePkgPriceResponse>;
    /**
     * GetUFileQuota - 查看配额状态
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/get_ufile_quota
     */
    getUFileQuota(request?: GetUFileQuotaRequest): Promise<GetUFileQuotaResponse>;
    /**
     * GetUFileQuotaInfo - 获取配额信息
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/get_ufile_quota_info
     */
    getUFileQuotaInfo(request?: GetUFileQuotaInfoRequest): Promise<GetUFileQuotaInfoResponse>;
    /**
     * GetUFileQuotaPrice - 根据US3的购买配额，查询需要支付的价格。
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/get_ufile_quota_price
     */
    getUFileQuotaPrice(request?: GetUFileQuotaPriceRequest): Promise<GetUFileQuotaPriceResponse>;
    /**
     * GetUFileReport - 查看配额使用报表
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/get_ufile_report
     */
    getUFileReport(request?: GetUFileReportRequest): Promise<GetUFileReportResponse>;
    /**
     * RenewUFilePkg - 资源包续费
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/renew_ufile_pkg
     */
    renewUFilePkg(request?: RenewUFilePkgRequest): Promise<RenewUFilePkgResponse>;
    /**
     * SetBucketQuota - 设置bucket配额
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/set_bucket_quota
     */
    setBucketQuota(request?: SetBucketQuotaRequest): Promise<SetBucketQuotaResponse>;
    /**
     * SetProjectRegionQuota - 设置项目地域配额
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/set_project_region_quota
     */
    setProjectRegionQuota(request?: SetProjectRegionQuotaRequest): Promise<SetProjectRegionQuotaResponse>;
    /**
     * SetUFileReferer - 设置对象存储防盗链
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/set_ufile_referer
     */
    setUFileReferer(request?: SetUFileRefererRequest): Promise<SetUFileRefererResponse>;
    /**
     * UpdateBucket - 更改Bucket的属性
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/update_bucket
     */
    updateBucket(request?: UpdateBucketRequest): Promise<UpdateBucketResponse>;
    /**
     * UpdateBucketStaticPageRule - 修改bucket静态网页配置
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/update_bucket_static_page_rule
     */
    updateBucketStaticPageRule(request?: UpdateBucketStaticPageRuleRequest): Promise<UpdateBucketStaticPageRuleResponse>;
    /**
     * UpdateCORSRule - 更新跨域规则
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/update_cors_rule
     */
    updateCORSRule(request?: UpdateCORSRuleRequest): Promise<UpdateCORSRuleResponse>;
    /**
     * UpdateUFileLifeCycle - 更新生命周期管理
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/update_ufile_life_cycle
     */
    updateUFileLifeCycle(request?: UpdateUFileLifeCycleRequest): Promise<UpdateUFileLifeCycleResponse>;
    /**
     * UpdateUFileSSLCert - 更新指定域名证书
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/update_ufile_ssl_cert
     */
    updateUFileSSLCert(request?: UpdateUFileSSLCertRequest): Promise<UpdateUFileSSLCertResponse>;
    /**
     * UpdateUFileToken - 更新令牌的操作权限，可操作key的前缀，可操作bucket和令牌超时时间点
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/update_ufile_token
     */
    updateUFileToken(request?: UpdateUFileTokenRequest): Promise<UpdateUFileTokenResponse>;
    /**
     * UpdateUdsRule - 针对对象存储的文件，进行自动触发解压。
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/update_uds_rule
     */
    updateUdsRule(request?: UpdateUdsRuleRequest): Promise<UpdateUdsRuleResponse>;
}
/**
 * AddCORSRule - 添加跨域规则
 */
export interface AddCORSRuleRequest {
    /**
     * Bucket名称
     */
    BucketName: string;
    /**
     * 指定允许的跨域请求的来源，使用通配符(*)表示允许所有来源的跨域请求（多个Origin用‘,’分隔）
     */
    AllowedOrigin: string;
    /**
     * 指定允许的跨域请求方法。支持的方法名有：GET、PUT、POST、DELETE、HEAD、OPTIONS（多个Method用‘,’分隔）
     */
    AllowedMethod: string;
    /**
     * 指定允许的跨域请求头（多个Header用‘,’分隔）
     */
    AllowedHeader?: string;
    /**
     * 指定允许用户从应用程序中访问的响应头（多个ExposeHeader用‘,’分隔）
     */
    ExposeHeader?: string;
}
/**
 * AddCORSRule - 添加跨域规则
 */
export interface AddCORSRuleResponse {
    /**
     * 增加一条跨域规则的cors_id
     */
    CORSId: string;
}
/**
 * AddUFileSSLCert - 给指定域名添加证书
 */
export interface AddUFileSSLCertRequest {
    /**
     * 存储桶名称，全局唯一
     */
    BucketName: string;
    /**
     * 域名
     */
    Domain: string;
    /**
     * SSL证书名称
     */
    CertificateName: string;
    /**
     * 填写SSL证书文件内容（PEM编码）。证书文件内容填写格式：如果您的业务场景仅需确保服务端证书可信，则证书文件需要包含服务器证书（①）和中间证书（②）。如果您的中间证书和服务器证书是两个文件，您可以在证书链配置项填写中间证书内容即可。
     */
    Certificate?: string;
    /**
     * 填写SSL证书私钥内容（PEM编码）。私钥内容填写格式 RSA
     */
    CertificateKey?: string;
    /**
     * ussl证书的资源ID
     */
    USSLId?: string;
}
/**
 * AddUFileSSLCert - 给指定域名添加证书
 */
export interface AddUFileSSLCertResponse {
}
/**
 * BindBucketDomain - 绑定自定义域名
 */
export interface BindBucketDomainRequest {
    /**
     * 自定义域名对应的bucket名称
     */
    BucketName: string;
    /**
     * 自定义域名
     */
    Domain: string;
}
/**
 * BindBucketDomain - 绑定自定义域名
 */
export interface BindBucketDomainResponse {
    /**
     * 自定义域名对应的bucket名称
     */
    BucketName: string;
    /**
     * 自定义域名对应的Bucket的Id
     */
    BucketId: string;
}
/**
 * BuyUFilePkg - 购买流量包或存储包
 */
export interface BuyUFilePkgRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone?: string;
    /**
     * 资源包名称
     */
    PkgName: string;
    /**
     * 0: 标准存储包，1: 忙时流量包，2: 闲时流量包
     */
    PkgType: number;
    /**
     * 购买数量
     */
    Amount: number;
    /**
     * 数量单位，如 GB、TB 等
     */
    AmountUnit: string;
    /**
     * 购买时长
     */
    Duration: number;
    /**
     * 时长单位，如 Month、Year 等
     */
    DurationUnit: string;
}
/**
 * BuyUFilePkg - 购买流量包或存储包
 */
export interface BuyUFilePkgResponse {
    /**
     * 购买成功返回资源包Id
     */
    ResourceId: string;
}
/**
 * CreateBucket - 创建Bucket
 */
export interface CreateBucketRequest {
    /**
     * 待创建Bucket的名称，具有全局唯一性
     */
    BucketName: string;
    /**
     * Bucket访问类型，public或private; 默认为private
     */
    Type?: string;
    /**
     * Bucket所属业务组，默认为default
     */
    Tag?: string;
}
/**
 * CreateBucket - 创建Bucket
 */
export interface CreateBucketResponse {
    /**
     * 已创建Bucket的名称
     */
    BucketName?: string;
    /**
     * 已创建Bucket的ID
     */
    BucketId?: string;
}
/**
 * CreateUFileLifeCycle - 创建生命周期管理
 */
export interface CreateUFileLifeCycleRequest {
    /**
     * 生命周期名称
     */
    LifeCycleName: string;
    /**
     * 生命周期所适用的前缀；*为整个存储空间文件；一条规则只支持一个文件前缀；
     */
    Prefix: string;
    /**
     * Enabled -- 启用，Disabled -- 不启用
     */
    Status: string;
    /**
     * 存储空间名称
     */
    BucketName: string;
    /**
     * 指定一个过期天数N，文件会在其最近更新时间点的N天后过期，自动删除；参数范围：[7,36500]，0代表不启用
     */
    Days?: number;
    /**
     * 指定一个过期天数N，文件会在其最近更新时间点的N天后，自动变为归档存储类型；参数范围：[7,36500]，0代表不启用
     */
    ArchivalDays?: number;
    /**
     * 指定一个过期天数N，文件会在其最近更新时间点的N天后，自动变为低频存储类型；参数范围：[7,36500]，0代表不启用
     */
    IADays?: number;
    /**
     * 指定一个历史文件过期天数N，文件会在其最近更新时间点的N天后过期,自动删除；范围： [7,36500]
     */
    HistVerDeleteDays?: number;
    /**
     * 指定一个历史文件过期天数N，文件会在其最近更新时间点的N天后过期,自动删除；范围： [7,36500]
     */
    HistVerArchivalDays?: number;
    /**
     * 指定一个历史文件过期天数N，文件会在其最近更新时间点的N天后过期,自动删除；范围： [7,36500]
     */
    HistVerIADays?: number;
    /**
     * Tag，参数格式"k1=v1&k2=v2"，key的最大长度为128， value最大长度为256byte，tag的最大数量为10
     */
    Tags?: string;
    /**
     * 文件的最小size
     */
    MinSize?: number;
    /**
     * 文件的最大size
     */
    MaxSize?: number;
}
/**
 * CreateUFileLifeCycle - 创建生命周期管理
 */
export interface CreateUFileLifeCycleResponse {
    /**
     * 生命周期Id
     */
    LifeCycleId: string;
}
/**
 * CreateUFileToken - 创建US3令牌
 */
export interface CreateUFileTokenRequest {
    /**
     * 令牌名称
     */
    TokenName: string;
    /**
     * 令牌允许执行的操作[ TOKEN_ALLOW_NONE 没有权限, TOKEN_ALLOW_READ 下载权限 , TOKEN_ALLOW_WRITE 上传权限 , TOKEN_ALLOW_DELETE 删除权限 , TOKEN_ALLOW_LIST 列表权限, TOKEN_ALLOW_IOP 图片处理权限, TOKEN_DENY_UPDATE 禁止覆盖权限]。默认TOKEN_ALLOW_NONE
     */
    AllowedOps?: string[];
    /**
     * 令牌允许操作的key前缀，默认*表示全部
     */
    AllowedPrefixes?: string[];
    /**
     * 令牌允许操作的bucket，默认*表示全部
     */
    AllowedBuckets?: string[];
    /**
     * Unix 时间戳，精确到秒，为令牌过期时间点。默认过期时间为一天（即当前Unix时间戳+86400）；注意：过期时间不能超过 4102416000
     */
    ExpireTime?: number;
    /**
     * 令牌黑名单，支持ipv4，ipv6格式。
     */
    BlackIPList?: string[];
    /**
     * 令牌白名单，支持ipv4，ipv6格式。
     */
    WhiteIPList?: string[];
}
/**
 * CreateUFileToken - 创建US3令牌
 */
export interface CreateUFileTokenResponse {
    /**
     * 令牌唯一ID
     */
    TokenId?: string;
    /**
     * 创建令牌的详细信息
     */
    UFileTokenSet?: {
        /**
         * 所属地区
         */
        Region: string;
        /**
         * 令牌ID
         */
        TokenId: string;
        /**
         * 令牌名称
         */
        TokenName: string;
        /**
         * 令牌公钥
         */
        PublicKey: string;
        /**
         * 令牌私钥
         */
        PrivateKey: string;
        /**
         * 令牌允许执行的操作，[ TOKEN_ALLOW_NONE 没有权限, TOKEN_ALLOW_READ 下载权限, TOKEN_ALLOW_WRITE 上传权限, TOKEN_ALLOW_DELETE 删除权限, TOKEN_ALLOW_LIST 列表权限, TOKEN_ALLOW_IOP 图片处理权限]
         */
        AllowedOps: string[];
        /**
         * 令牌允许操作的key前缀
         */
        AllowedPrefixes: string[];
        /**
         * 令牌允许操作的bucket
         */
        AllowedBuckets: string[];
        /**
         * 令牌的超时时间点
         */
        ExpireTime: number;
        /**
         * 创建时间
         */
        CreateTime: number;
        /**
         * 修改时间
         */
        ModifyTime: number;
        /**
         * 令牌黑名单
         */
        BlackIPList?: string[];
        /**
         * 令牌白名单
         */
        WhiteIPList?: string[];
    };
}
/**
 * CreateUdsRule - 针对对象存储的文件，进行自动触发解压。
 */
export interface CreateUdsRuleRequest {
    /**
     * 规则名称
     */
    RuleName: string;
    /**
     * 源Bucket名字，全局唯一
     */
    SrcBucket: string;
    /**
     * 源bucket的token之一的tokenId
     */
    SrcTokenId: string;
    /**
     * 目标Bucket名字，全局唯一
     */
    DstBucket: string;
    /**
     * 目标bucket的token之一的tokenId
     */
    DstTokenId: string;
    /**
     * 解压后的目标目录
     */
    DstDirectory: string;
    /**
     * 是否以压缩文件的前缀为最后一层目录
     */
    KeepUS3Name: boolean;
    /**
     * 解压缩触发的前缀
     */
    Prefixes: string;
    /**
     * 操作的ops数组，"Ops.0":"unzip"
     */
    Ops: string[];
    /**
     * 通知的事件数组
     */
    Events?: string[];
    /**
     * 联系的用户组ID
     */
    ContactGroupId?: string;
    /**
     * 通知的类型数组
     */
    NotificationTypes?: string[];
}
/**
 * CreateUdsRule - 针对对象存储的文件，进行自动触发解压。
 */
export interface CreateUdsRuleResponse {
    /**
     * 创建规则的规则ID
     */
    RuleId: string;
}
/**
 * DeleteBucket - 删除Bucket
 */
export interface DeleteBucketRequest {
    /**
     * 待删除Bucket的名称
     */
    BucketName: string;
}
/**
 * DeleteBucket - 删除Bucket
 */
export interface DeleteBucketResponse {
    /**
     * Bucket的名称
     */
    BucketName?: string;
    /**
     * Bucket的ID
     */
    BucketId?: string;
}
/**
 * DeleteCORSRule - 删除跨域规则
 */
export interface DeleteCORSRuleRequest {
    /**
     * Bucket名称
     */
    BucketName: string;
    /**
     * 跨域规则ID
     */
    CORSId: string;
}
/**
 * DeleteCORSRule - 删除跨域规则
 */
export interface DeleteCORSRuleResponse {
}
/**
 * DeleteUFileLifeCycle - 删除生命周期管理
 */
export interface DeleteUFileLifeCycleRequest {
    /**
     * 生命周期Id
     */
    LifeCycleId: string;
    /**
     * 存储空间名称
     */
    BucketName: string;
}
/**
 * DeleteUFileLifeCycle - 删除生命周期管理
 */
export interface DeleteUFileLifeCycleResponse {
}
/**
 * DeleteUFilePkg - 删除资源包(退费)
 */
export interface DeleteUFilePkgRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone?: string;
    /**
     * 资源ID
     */
    ResourceId: string;
}
/**
 * DeleteUFilePkg - 删除资源包(退费)
 */
export interface DeleteUFilePkgResponse {
}
/**
 * DeleteUFileSSLCert - 删除指定域名添加证书
 */
export interface DeleteUFileSSLCertRequest {
    /**
     * 存储桶名称，全局唯一
     */
    BucketName: string;
    /**
     * 域名
     */
    Domain: string;
}
/**
 * DeleteUFileSSLCert - 删除指定域名添加证书
 */
export interface DeleteUFileSSLCertResponse {
}
/**
 * DeleteUFileToken - 删除令牌
 */
export interface DeleteUFileTokenRequest {
    /**
     * 令牌ID
     */
    TokenId: string;
}
/**
 * DeleteUFileToken - 删除令牌
 */
export interface DeleteUFileTokenResponse {
}
/**
 * DescribeBucket - 获取Bucket的描述信息
 */
export interface DescribeBucketRequest {
    /**
     * 待获取Bucket的名称，若不提供，则获取所有Bucket
     */
    BucketName?: string;
    /**
     * 获取所有Bucket列表的偏移数目，默认为0
     */
    Offset?: number;
    /**
     * 获取所有Bucket列表的限制数目，默认为20
     */
    Limit?: number;
}
/**
 * DescribeBucket - 获取Bucket的描述信息
 */
export interface DescribeBucketResponse {
    /**
     * Bucket的描述信息 参数见 UFileBucketSet
     */
    DataSet?: {
        /**
         * Bucket所属地域
         */
        Region?: string;
        /**
         * 默认存储类型
         */
        StorageClass?: string;
        /**
         * Bucket名称
         */
        BucketName?: string;
        /**
         * Bucket的ID
         */
        BucketId?: string;
        /**
         * Bucket的域名集合 参数见 UFileDomainSet
         */
        Domain?: {
            /**
             * 源站域名
             */
            Src?: string[];
            /**
             * UCDN加速域名
             */
            Cdn?: string[];
            /**
             * 用户自定义源站域名
             */
            CustomSrc?: string[];
            /**
             * 用户自定义CDN加速域名
             */
            CustomCdn?: string[];
        };
        /**
         * 与Bucket关联的CND加速域名的ID列表
         */
        CdnDomainId?: string[];
        /**
         * Bucket访问类型
         */
        Type?: string;
        /**
         * Bucket的创建时间
         */
        CreateTime?: number;
        /**
         * Bucket的修改时间
         */
        ModifyTime?: number;
        /**
         * Bucket所属业务, general或vod或udb general: 普通业务； vod: 视频云业务; udb: 云数据库业务
         */
        Biz?: string;
        /**
         * 所属业务组
         */
        Tag?: string;
        /**
         * 是否存在自定义域名。0不存在，1存在，2错误
         */
        HasUserDomain?: number;
    }[];
}
/**
 * DescribeCORSRule - 获取跨域规则信息
 */
export interface DescribeCORSRuleRequest {
    /**
     * Bucket名称
     */
    BucketName: string;
    /**
     * 跨域规则ID，不指定则返回所有跨域规则信息
     */
    CORSId?: string;
}
/**
 * DescribeCORSRule - 获取跨域规则信息
 */
export interface DescribeCORSRuleResponse {
    /**
     * 跨域规则信息集合
     */
    DataSet: {
        /**
         * 指定允许的跨域请求的来源，使用通配符(*)表示允许所有来源的跨域请求（多个Origin用‘,’分隔）
         */
        AllowedOrigin: string;
        /**
         * 指定允许的跨域请求方法。支持的方法名有：GET、PUT、POST、DELETE、HEAD、OPTIONS（多个Method用‘,’分隔）
         */
        AllowedMethod: string;
        /**
         * 跨域规则id
         */
        CORSId: string;
        /**
         * 跨域规则创建时间
         */
        CreateTime: number;
        /**
         * 跨域规则最新修改时间
         */
        ModifyTime: number;
        /**
         * 指定允许的跨域请求头（多个Header用‘,’分隔）
         */
        AllowedHeader: string;
        /**
         * 指定允许用户从应用程序中访问的响应头（多个ExposeHeader用‘,’分隔）
         */
        ExposeHeader: string;
    }[];
}
/**
 * DescribeUFileAvailablePkg - 查询可购买的资源包列表
 */
export interface DescribeUFileAvailablePkgRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone?: string;
}
/**
 * DescribeUFileAvailablePkg - 查询可购买的资源包列表
 */
export interface DescribeUFileAvailablePkgResponse {
    /**
     * 可购买的资源包规格
     */
    PkgList: {
        /**
         * 资源类型ID
         */
        Type?: number;
        /**
         * 资源类型名称
         */
        Name?: string;
        /**
         * 支持购买的数量规格
         */
        Specs?: {
            /**
             * 仅针对当前规格生效的durations
             */
            Durations: {
                /**
                 * 折扣
                 */
                Discount: number;
                /**
                 * 购买时长
                 */
                Duration?: number;
                /**
                 * 时长单位，如: Month、Year
                 */
                Unit?: string;
            }[];
            /**
             * 购买数量
             */
            Amount?: number;
            /**
             * 数量的单位，如：GB，TB
             */
            Unit?: string;
        }[];
        /**
         * 公共支持购买的时长，当一个Spec配了独立的Durations时，就按独立配置Durations生效；否者按CommonDurations生效
         */
        CommonDurations?: {
            /**
             * 折扣
             */
            Discount: number;
            /**
             * 购买时长
             */
            Duration?: number;
            /**
             * 时长单位，如: Month、Year
             */
            Unit?: string;
        }[];
    }[];
}
/**
 * DescribeUFileLifeCycle - 获取生命周期信息
 */
export interface DescribeUFileLifeCycleRequest {
    /**
     * 存储空间名称
     */
    BucketName: string;
    /**
     * 生命周期Id；不传递此参数拉取存储空间下面的所有生命周期信息
     */
    LifeCycleId?: string;
}
/**
 * DescribeUFileLifeCycle - 获取生命周期信息
 */
export interface DescribeUFileLifeCycleResponse {
    /**
     * 生命周期信息
     */
    DataSet: {
        /**
         * 文件的最小size
         */
        MinSize: string;
        /**
         * 文件的最大size
         */
        MaxSize: string;
        /**
         * 生命周期Id
         */
        LifeCycleId?: string;
        /**
         * 生命周期名称
         */
        LifeCycleName?: string;
        /**
         * 生命周期所适用的前缀；*为整个存储空间文件；
         */
        Prefix?: string;
        /**
         * 指定一个过期天数N，文件会在其最近更新时间点的N天后过期，自动删除，0代表不启用；
         */
        Days?: number;
        /**
         * Enabled -- 启用，Disabled -- 不启用
         */
        Status?: string;
        /**
         * 存储空间名称
         */
        BucketName?: string;
        /**
         * 指定一个过期天数N，文件会在其最近更新时间点的N天后过期，自动转换为归档存储类型，0代表不启用；
         */
        ArchivalDays?: number;
        /**
         * 指定一个过期天数N，文件会在其最近更新时间点的N天后过期，自动转换为低频存储类型，0代表不启用；
         */
        IADays?: number;
    }[];
}
/**
 * DescribeUFilePkg - 查询已购买的资源包列表
 */
export interface DescribeUFilePkgRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone?: string;
    /**
     * 查询指定的资源包，当指定ResourceId查询时，Region是必填的
     */
    ResourceId?: string;
    /**
     * 默认0表示查询全部已购买的资源包，1表示查询过期的，-1表示查询非过期的
     */
    Expired?: number;
}
/**
 * DescribeUFilePkg - 查询已购买的资源包列表
 */
export interface DescribeUFilePkgResponse {
    /**
     * 已购买的资源包
     */
    Pkgs: {
        /**
         * 资源包地域
         */
        Region: string;
        /**
         * 资源包ID
         */
        ResourceId?: string;
        /**
         * 资源包名称
         */
        PkgName?: string;
        /**
         * 资源包类型ID
         */
        PkgType?: number;
        /**
         * 资源包容量
         */
        Amount?: number;
        /**
         * 资源包剩余容量（仅支持流量包）
         */
        RemainAmount?: string;
        /**
         * 资源包创建时间
         */
        CreateTime?: number;
        /**
         * 资源包失效时间
         */
        ExpiredTime?: number;
    }[];
}
/**
 * DescribeUFilePkgUsage - 查询资源包使用明细
 */
export interface DescribeUFilePkgUsageRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone?: string;
    /**
     * 资源包ID
     */
    ResourceId: string;
    /**
     * 开始时间，如 2023-09-01
     */
    StartDate: string;
    /**
     * 结束时间，如 2023-09-01
     */
    EndDate: string;
}
/**
 * DescribeUFilePkgUsage - 查询资源包使用明细
 */
export interface DescribeUFilePkgUsageResponse {
    /**
     * 按天返回的使用明细
     */
    Usage?: {
        /**
         * 日期
         */
        Date?: string;
        /**
         * 使用量，单位为B
         */
        Cost?: string;
    }[];
}
/**
 * DescribeUFileReferer - 对象存储防盗链列表
 */
export interface DescribeUFileRefererRequest {
    /**
     * 存储空间名称
     */
    BucketName: string;
}
/**
 * DescribeUFileReferer - 对象存储防盗链列表
 */
export interface DescribeUFileRefererResponse {
    /**
     * 防盗链Referer类型，支持两种类型，1黑名单，2白名单；未开启referer时不返回此参数
     */
    RefererType: number;
    /**
     * 防盗链Referer规则列表；未开启referer时不返回此参数
     */
    RefererList: string[];
    /**
     * ReferType为白名单时，NullRefer为false代表不允许NULL refer访问，为true代表允许Null refer访问; 未开启referer时不返回此参数
     */
    NullRefer: boolean;
    /**
     * 防盗链功能是否开启，"on"表示开启，"off"表示关闭
     */
    RefererStatus?: string;
    /**
     * 黑名单列表
     */
    BlackList?: string[];
    /**
     * 白名单列表
     */
    WhiteList?: string[];
}
/**
 * DescribeUFileSSLCert - 查询指定存储桶所有证书
 */
export interface DescribeUFileSSLCertRequest {
    /**
     * 存储桶名称，全局唯一
     */
    BucketName: string;
}
/**
 * DescribeUFileSSLCert - 查询指定存储桶所有证书
 */
export interface DescribeUFileSSLCertResponse {
    /**
     * 证书列表
     */
    DataSet?: {
        /**
         * 域名
         */
        Domain?: string;
        /**
         * SSL证书内容，和域名对应
         */
        Certificate?: string;
        /**
         * SSL证书对应的私钥
         */
        CertificateKey?: string;
        /**
         * SSL证书名称
         */
        CertificateName?: string;
    }[];
}
/**
 * DescribeUFileToken - 获取令牌信息
 */
export interface DescribeUFileTokenRequest {
    /**
     * 令牌ID，只返回指定ID信息，否则拉取所有令牌
     */
    TokenId?: string;
    /**
     * 令牌名称，只返回指定令牌名称信息，否则拉取所有令牌
     */
    TokenName?: string;
    /**
     * 0表示显示部分token信息；不传递和其他情况表示显示全部token信息
     */
    Display?: number;
}
/**
 * DescribeUFileToken - 获取令牌信息
 */
export interface DescribeUFileTokenResponse {
    /**
     * 令牌描述信息
     */
    DataSet: {
        /**
         * 所属地区
         */
        Region: string;
        /**
         * 令牌ID
         */
        TokenId: string;
        /**
         * 令牌名称
         */
        TokenName: string;
        /**
         * 令牌公钥
         */
        PublicKey: string;
        /**
         * 令牌私钥
         */
        PrivateKey: string;
        /**
         * 令牌允许执行的操作，[ TOKEN_ALLOW_NONE 没有权限, TOKEN_ALLOW_READ 下载权限, TOKEN_ALLOW_WRITE 上传权限, TOKEN_ALLOW_DELETE 删除权限, TOKEN_ALLOW_LIST 列表权限, TOKEN_ALLOW_IOP 图片处理权限]
         */
        AllowedOps: string[];
        /**
         * 令牌允许操作的key前缀
         */
        AllowedPrefixes: string[];
        /**
         * 令牌允许操作的bucket
         */
        AllowedBuckets: string[];
        /**
         * 令牌的超时时间点
         */
        ExpireTime: number;
        /**
         * 创建时间
         */
        CreateTime: number;
        /**
         * 修改时间
         */
        ModifyTime: number;
        /**
         * 令牌黑名单
         */
        BlackIPList?: string[];
        /**
         * 令牌白名单
         */
        WhiteIPList?: string[];
    }[];
}
/**
 * DescribeUdsRule - 针对解压缩规则进行查询
 */
export interface DescribeUdsRuleRequest {
    /**
     * 源BucketName
     */
    BucketName: string;
    /**
     * 规则ID，不设置时，查询改bucket的所有规则
     */
    RuleId?: string;
}
/**
 * DescribeUdsRule - 针对解压缩规则进行查询
 */
export interface DescribeUdsRuleResponse {
    /**
     * 此次删除的规则的ID
     */
    TotalCount: number;
    /**
     * 规则数组
     */
    DataSet?: string[];
}
/**
 * GetBucketQuota - 获取bucket配额
 */
export interface GetBucketQuotaRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * bucket名称
     */
    BucketName: string;
}
/**
 * GetBucketQuota - 获取bucket配额
 */
export interface GetBucketQuotaResponse {
    /**
     * bucket配额
     */
    QuotaLimit: number;
    /**
     * bucket名称
     */
    BucketName: string;
}
/**
 * GetBucketStaticPageRule - 获取bucket静态网页配置
 */
export interface GetBucketStaticPageRuleRequest {
    /**
     * 存储桶名称
     */
    Bucket: string;
}
/**
 * GetBucketStaticPageRule - 获取bucket静态网页配置
 */
export interface GetBucketStaticPageRuleResponse {
    /**
     * 规则内容
     */
    Rule: {
        /**
         * 启用状态
         */
        Status?: string;
        /**
         * 默认网页
         */
        DefaultIndex?: string;
        /**
         * 子目录重定向功能的启用状态
         */
        SubDirRedirect?: string;
        /**
         * 404时的处理规则
         */
        RuleFor404?: string;
        /**
         * 默认404页面在存储桶的路径
         */
        DefaultPage404?: string;
    };
}
/**
 * GetProjectRegionQuota - 获取项目地域配额
 */
export interface GetProjectRegionQuotaRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone?: string;
}
/**
 * GetProjectRegionQuota - 获取项目地域配额
 */
export interface GetProjectRegionQuotaResponse {
    /**
     * 地域
     */
    Region: string;
    /**
     * 配额类型
     */
    QuotaType: string;
    /**
     * 配额数目
     */
    QuotaLimit: number;
}
/**
 * GetUFileDailyBill - 获取bucket每日账单
 */
export interface GetUFileDailyBillRequest {
    /**
     * 查询开始时间;unix时间戳，单位s
     */
    StartTime: number;
    /**
     * 查询结束时间;unix时间戳,单位s
     */
    EndTime: number;
    /**
     * 空间名称。此字段不为空，返回此Bucket日账单,否则，返回这个项目的日账单
     */
    BucketName?: string;
}
/**
 * GetUFileDailyBill - 获取bucket每日账单
 */
export interface GetUFileDailyBillResponse {
    /**
     * 消费情况
     */
    DataSet: {
        /**
         * bucket账单
         */
        BucketBills?: {
            /**
             * bucket对应的资源系统标签
             */
            Labels?: {
                /**
                 * 标签对应key
                 */
                Key?: string;
                /**
                 * 标签对应value
                 */
                Value?: string;
            }[];
            /**
             * 下载低频存储次数费用；分
             */
            GetCountIaBill?: number;
            /**
             * 下载标准存储次数费用；分
             */
            GetCountBill?: number;
            /**
             * 上传归档存储次数费用；分
             */
            PutCountAcBill?: number;
            /**
             * 上传低频存储次数费用；分
             */
            PutCountIaBill?: number;
            /**
             * 上传标准存储次数费用；分
             */
            PutCountBill?: number;
            /**
             * 对象标签费用: 分
             */
            ObjectTagCountBill?: number;
            /**
             * 标准-存储总容量费用；分
             */
            StorageBill?: number;
            /**
             * 低频-存储总容量费用；分
             */
            IaStorageBill?: number;
            /**
             * 归档-存储总容量费用；分
             */
            AcStorageBill?: number;
            /**
             * 低频-数据取回量，即低频文件的数据取回量费用；分
             */
            IaGetSizeBill?: number;
            /**
             * 归档-标准解冻量，即归档文件的解冻类型为标准（Strandard）的解冻量费用； 分
             */
            AcRestoreBill?: number;
            /**
             * 归档-高优先级解冻量，即归档文件的解冻类型为高优先级（Expedited）的解冻量费用； 分
             */
            AcExpeditedRetrievalBill?: number;
            /**
             * 低频-短期存储量，即补足未满最短存储期限的剩余天数的存储量费用；分
             */
            IaShortStorageBill?: number;
            /**
             * 归档-短期存储量，即补足未满最短存储期限的剩余天数的存储量费用；分
             */
            AcShortStorageBill?: number;
            /**
             * 基础图片处理量费用；分
             */
            ImageHandleFlowBill?: number;
            /**
             * 图片高级压缩次数费用；分
             */
            ImageCompressCountBill?: number;
            /**
             * 忙时流量费用；分；海外无此字段
             */
            BusyFlowBill?: number;
            /**
             * 闲时流量费用；分；海外无此字段
             */
            IdleFlowBill?: number;
            /**
             * cdn回源流量费用;分
             */
            CdnFlowBill?: number;
            /**
             * 下载流量费用：分；国内无此字段
             */
            FlowBill?: number;
            /**
             * 配额消费时间，unix时间戳；单位s，精确到日期
             */
            Date?: number;
            /**
             * 下载归档存储次数费用；分
             */
            GetCountAcBill?: number;
            /**
             * 总费用;分
             */
            TotalBill?: number;
        }[];
    }[];
}
/**
 * GetUFileDailyReport - 查看日消费报表
 */
export interface GetUFileDailyReportRequest {
    /**
     * 查询开始时间;unix时间戳，单位s
     */
    StartTime: number;
    /**
     * 查询结束时间;unix时间戳,单位s
     */
    EndTime: number;
    /**
     * 空间名称。此字段不为空，返回此Bucket日使用量；否则，返回这个项目的日使用量
     */
    BucketName?: string;
}
/**
 * GetUFileDailyReport - 查看日消费报表
 */
export interface GetUFileDailyReportResponse {
    /**
     * 消费情况
     */
    DataSet: {
        /**
         * 总消费情况
         */
        Total?: {
            /**
             * 下载流量：单位GB；国内无此字段
             */
            Flow?: number;
            /**
             * 闲时流量；单位GB；海外无此字段
             */
            IdleFlow?: number;
            /**
             * 忙时流量；单位GB；海外无此字段
             */
            BusyFlow?: number;
            /**
             * cdn回源流量;单位GB
             */
            CdnFlow?: number;
            /**
             * API请求次数（万次）
             */
            ApiTimes?: number;
        }[];
        /**
         * 日消费情况
         */
        Daily?: {
            /**
             * 标准-存储总容量；单位GB
             */
            Storage?: number;
            /**
             * 低频-存储总容量；单位GB
             */
            IaStorage?: number;
            /**
             * 归档-存储总容量；单位GB
             */
            AcStorage?: number;
            /**
             * 低频-数据取回量，即低频文件的数据取回量；单位GB
             */
            IaGetSize?: number;
            /**
             * 归档-标准解冻量，即归档文件的解冻类型为标准（Strandard）的解冻量；单位GB
             */
            AcRestore?: number;
            /**
             * 归档-高优先级解冻量，即归档文件的解冻类型为高优先级（Expedited）的解冻量；单位GB
             */
            AcExpeditedRetrieval?: number;
            /**
             * 低频-短期存储量，即补足未满最短存储期限的剩余天数的存储量；单位GB
             */
            IaShortStorage?: number;
            /**
             * 归档-短期存储量，即补足未满最短存储期限的剩余天数的存储量；单位GB
             */
            AcShortStorage?: number;
            /**
             * 基础图片处理量；单位GB
             */
            ImageHandleFlow?: number;
            /**
             * 图片高级压缩次数；单位千次
             */
            ImageCompressCount?: number;
            /**
             * 忙时流量；单位GB；海外无此字段
             */
            BusyFlow?: number;
            /**
             * 闲时流量；单位GB；海外无此字段
             */
            IdleFlow?: number;
            /**
             * cdn回源流量;单位GB
             */
            CdnFlow?: number;
            /**
             * 下载流量：单位GB；国内无此字段
             */
            Flow?: number;
            /**
             * 配额消费时间，unix时间戳；单位s，精确到日期
             */
            Date?: number;
            /**
             * 请求次数；单位万次
             */
            ApiTimes?: number;
            /**
             * 对象标签个数; 单位万个
             */
            ObjectTagCount?: number;
        }[];
    }[];
}
/**
 * GetUFileMonthlyBill - 获取bucket月度账单
 */
export interface GetUFileMonthlyBillRequest {
    /**
     * 查询开始月份;例如"1994-07"
     */
    StartMonth: string;
    /**
     * 查询结束时间;例如"1994-07"
     */
    EndMonth: string;
    /**
     * 空间名称。此字段不为空，返回此Bucket日账单,否则，返回这个项目的日账单
     */
    BucketName?: string;
}
/**
 * GetUFileMonthlyBill - 获取bucket月度账单
 */
export interface GetUFileMonthlyBillResponse {
    /**
     * 消费情况
     */
    DataSet: {
        /**
         * bucket账单
         */
        BucketBills?: {
            /**
             * bucket对应的资源系统标签
             */
            Labels?: {
                /**
                 * 标签对应key
                 */
                Key?: string;
                /**
                 * 标签对应value
                 */
                Value?: string;
            }[];
            /**
             * 下载低频存储次数费用；分
             */
            GetCountIaBill?: number;
            /**
             * 下载标准存储次数费用；分
             */
            GetCountBill?: number;
            /**
             * 上传归档存储次数费用；分
             */
            PutCountAcBill?: number;
            /**
             * 上传低频存储次数费用；分
             */
            PutCountIaBill?: number;
            /**
             * 上传标准存储次数费用；分
             */
            PutCountBill?: number;
            /**
             * 对象标签费用: 分
             */
            ObjectTagCountBill?: number;
            /**
             * 标准-存储总容量费用；分
             */
            StorageBill?: number;
            /**
             * 低频-存储总容量费用；分
             */
            IaStorageBill?: number;
            /**
             * 归档-存储总容量费用；分
             */
            AcStorageBill?: number;
            /**
             * 低频-数据取回量，即低频文件的数据取回量费用；分
             */
            IaGetSizeBill?: number;
            /**
             * 归档-标准解冻量，即归档文件的解冻类型为标准（Strandard）的解冻量费用； 分
             */
            AcRestoreBill?: number;
            /**
             * 归档-高优先级解冻量，即归档文件的解冻类型为高优先级（Expedited）的解冻量费用； 分
             */
            AcExpeditedRetrievalBill?: number;
            /**
             * 低频-短期存储量，即补足未满最短存储期限的剩余天数的存储量费用；分
             */
            IaShortStorageBill?: number;
            /**
             * 归档-短期存储量，即补足未满最短存储期限的剩余天数的存储量费用；分
             */
            AcShortStorageBill?: number;
            /**
             * 基础图片处理量费用；分
             */
            ImageHandleFlowBill?: number;
            /**
             * 图片高级压缩次数费用；分
             */
            ImageCompressCountBill?: number;
            /**
             * 忙时流量费用；分；海外无此字段
             */
            BusyFlowBill?: number;
            /**
             * 闲时流量费用；分；海外无此字段
             */
            IdleFlowBill?: number;
            /**
             * cdn回源流量费用;分
             */
            CdnFlowBill?: number;
            /**
             * 下载流量费用：分；国内无此字段
             */
            FlowBill?: number;
            /**
             * 配额消费月份
             */
            Month?: string;
            /**
             * 下载归档存储次数费用；分
             */
            GetCountAcBill?: number;
            /**
             * 总费用;分
             */
            TotalBill?: number;
        }[];
    }[];
}
/**
 * GetUFilePkgPrice - 获取对资源进行新购、续费、升级等操作的价格
 */
export interface GetUFilePkgPriceRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone?: string;
    /**
     * 操作类型，new:新购,upgrade:升级,renew:续费,delete:退费
     */
    InquiryType: string;
    /**
     * 新购和升级时必填
     */
    Amount?: number;
    /**
     * 新购和升级时必填
     */
    AmountUnit?: string;
    /**
     * 新购和续费时必填
     */
    Duration?: number;
    /**
     * 新购和续费时必填
     */
    DurationUnit?: string;
    /**
     * 资源id，升级续费退费时为必填
     */
    ResourceId?: string;
}
/**
 * GetUFilePkgPrice - 获取对资源进行新购、续费、升级等操作的价格
 */
export interface GetUFilePkgPriceResponse {
    /**
     * 实际价格
     */
    CustomPrice?: number;
    /**
     * 原始价格
     */
    OriginPrice?: number;
}
/**
 * GetUFileQuota - 查看配额状态
 */
export interface GetUFileQuotaRequest {
    /**
     * 配额类型，取值为storage-volume, download-traffic或request-count
     */
    QuotaType: string;
}
/**
 * GetUFileQuota - 查看配额状态
 */
export interface GetUFileQuotaResponse {
    /**
     * 剩余的配额数值
     */
    LeftQuota?: number;
}
/**
 * GetUFileQuotaInfo - 获取配额信息
 */
export interface GetUFileQuotaInfoRequest {
    /**
     * 配额类型，取值为storage-volume, download-traffic或request-count
     */
    QuotaType: string[];
}
/**
 * GetUFileQuotaInfo - 获取配额信息
 */
export interface GetUFileQuotaInfoResponse {
    /**
     * 配额信息数据集
     */
    DataSet?: {
        /**
         * 可用地域
         */
        Region?: string;
        /**
         * 是否欠费：1表示欠费；0表示未欠费
         */
        Owe?: number;
        /**
         * 剩余存储容量
         */
        Storage?: {
            /**
             * 配额剩余量
             */
            Left?: number;
        };
        /**
         * 剩余下载流量
         */
        DownloadFlow?: {
            /**
             * 配额剩余量
             */
            Left?: number;
        };
        /**
         * 剩余请求次数
         */
        RequestCnt?: {
            /**
             * 配额剩余量
             */
            Left?: number;
        };
    }[];
}
/**
 * GetUFileQuotaPrice - 根据US3的购买配额，查询需要支付的价格。
 */
export interface GetUFileQuotaPriceRequest {
    /**
     * 存储容量，单位: GB*天，范围: [0, 30 000 000]，步长：100GB*天
     */
    StorageVolume?: number;
    /**
     * 下载流量，单位: GB，范围: [0, 60 000]，步长：1GB
     */
    DownloadTraffic?: number;
    /**
     * 请求次数，单位：万次，范围：[0, 1 000 000]，步长：1万次
     */
    RequestCount?: number;
}
/**
 * GetUFileQuotaPrice - 根据US3的购买配额，查询需要支付的价格。
 */
export interface GetUFileQuotaPriceResponse {
    /**
     * 待支付价格，单位：分
     */
    Price?: number;
}
/**
 * GetUFileReport - 查看配额使用报表
 */
export interface GetUFileReportRequest {
    /**
     * 查询开始时间
     */
    StartTime: number;
    /**
     * 查询结束时间
     */
    EndTime: number;
}
/**
 * GetUFileReport - 查看配额使用报表
 */
export interface GetUFileReportResponse {
    /**
     * 报表内容 参数见 UFileReportSet
     */
    DataSet?: {
        /**
         * 配额消费时间，unix时间戳，精确到日期
         */
        Time?: number;
        /**
         * 配额消费当日使用的存储容量，单位：GB*天
         */
        StorageVolume?: number;
        /**
         * 配额消费当日使用的下载流量，单位：GB
         */
        DownloadTraffic?: number;
        /**
         * 配额消费当日使用的请求次数，单位：万次
         */
        RequestCount?: number;
    }[];
}
/**
 * RenewUFilePkg - 资源包续费
 */
export interface RenewUFilePkgRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone?: string;
    /**
     * 资源ID
     */
    ResourceId: string;
    /**
     * 资源类型ID
     */
    PkgType: number;
    /**
     * 续费时长
     */
    Duration: number;
    /**
     * 时长单位
     */
    DurationUnit: string;
}
/**
 * RenewUFilePkg - 资源包续费
 */
export interface RenewUFilePkgResponse {
}
/**
 * SetBucketQuota - 设置bucket配额
 */
export interface SetBucketQuotaRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * bucket名称
     */
    BucketName: string;
    /**
     * bucket配额
     */
    QuotaLimit: number;
}
/**
 * SetBucketQuota - 设置bucket配额
 */
export interface SetBucketQuotaResponse {
}
/**
 * SetProjectRegionQuota - 设置项目地域配额
 */
export interface SetProjectRegionQuotaRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone?: string;
    /**
     * 配额数目(单位是Byte)
     */
    QuotaLimit: number;
}
/**
 * SetProjectRegionQuota - 设置项目地域配额
 */
export interface SetProjectRegionQuotaResponse {
    /**
     * 地域
     */
    Region: string;
    /**
     * 配额类型
     */
    QuotaType: string;
    /**
     * 配额数目(单位是Byte)
     */
    QuotaLimit: string;
}
/**
 * SetUFileReferer - 设置对象存储防盗链
 */
export interface SetUFileRefererRequest {
    /**
     * 存储空间名称
     */
    BucketName: string;
    /**
     * 开启关闭referer防盗链;关闭防盗链会清空防盗链参数设置，开启防盗链必须指定 RefererType、Referers；开启：on， 关闭：off;
     */
    RefererStatus: string;
    /**
     * RefererType为白名单时，RefererAllowNull为false代表不允许空referer访问，为true代表允许空referer访问;此参数默认为 true;
     */
    RefererAllowNull?: boolean;
    /**
     * 防盗链Referer类型，支持三种类型，1代表设置黑名单、2代表设置白名单，3代表同时设置黑白名单; （其中1和2是为了向前兼容，后续调用只应该传递类型3）RefererStatus为"on"时此参数必填；
     */
    RefererType?: number;
    /**
     * 防盗链Referer规则，支持正则表达式（不支持符号';')，该字段已弃用，请使用WhiteList.n或BlackList.n
     */
    Referers?: string[];
    /**
     * 白名单列表中的一项
     */
    WhiteList?: string[];
    /**
     * 黑名单列表中的一项
     */
    BlackList?: string[];
}
/**
 * SetUFileReferer - 设置对象存储防盗链
 */
export interface SetUFileRefererResponse {
}
/**
 * UpdateBucket - 更改Bucket的属性
 */
export interface UpdateBucketRequest {
    /**
     * 待修改Bucket的名称
     */
    BucketName: string;
    /**
     * Bucket访问类型;public或private
     */
    Type?: string;
    /**
     * 默认存储类型
     */
    StorageClass?: string;
}
/**
 * UpdateBucket - 更改Bucket的属性
 */
export interface UpdateBucketResponse {
    /**
     * Bucket的名称
     */
    BucketName?: string;
    /**
     * Bucket的ID
     */
    BucketId?: string;
}
/**
 * UpdateBucketStaticPageRule - 修改bucket静态网页配置
 */
export interface UpdateBucketStaticPageRuleRequest {
    /**
     * 存储桶名称
     */
    Bucket: string;
    /**
     * 启用状态(enable/disable,只有绑定了自定义域名才能开启)
     */
    Status?: string;
    /**
     * 默认首页
     */
    DefaultIndex?: string;
    /**
     * 子目录是否启用重定向
     */
    SubDirRedirect?: string;
    /**
     * 404规则
     */
    RuleFor404?: string;
    /**
     * 404时的默认页面
     */
    DefaultPage404?: string;
}
/**
 * UpdateBucketStaticPageRule - 修改bucket静态网页配置
 */
export interface UpdateBucketStaticPageRuleResponse {
}
/**
 * UpdateCORSRule - 更新跨域规则
 */
export interface UpdateCORSRuleRequest {
    /**
     * 跨域规则ID
     */
    CORSId: string;
    /**
     * Bucket名称
     */
    BucketName: string;
    /**
     * 指定允许的跨域请求的来源，使用通配符(*)表示允许所有来源的跨域请求（多个Origin用‘,’分隔）
     */
    AllowedOrigin: string;
    /**
     * 指定允许的跨域请求方法。支持的方法名有：GET、PUT、POST、DELETE、HEAD、OPTIONS（多个Method用‘,’分隔）
     */
    AllowedMethod: string;
    /**
     * 指定允许的跨域请求头（多个Header用‘,’分隔）
     */
    AllowedHeader?: string;
    /**
     * 指定允许用户从应用程序中访问的响应头（多个ExposeHeader用‘,’分隔）
     */
    ExposeHeader?: string;
}
/**
 * UpdateCORSRule - 更新跨域规则
 */
export interface UpdateCORSRuleResponse {
}
/**
 * UpdateUFileLifeCycle - 更新生命周期管理
 */
export interface UpdateUFileLifeCycleRequest {
    /**
     * 生命周期Id
     */
    LifeCycleId: string;
    /**
     * 生命周期名称
     */
    LifeCycleName: string;
    /**
     * 生命周期所适用的前缀；*为整个存储空间文件；一条规则只支持一个文件前缀；
     */
    Prefix: string;
    /**
     * Enabled -- 启用，Disabled -- 不启用
     */
    Status: string;
    /**
     * 存储空间名称
     */
    BucketName: string;
    /**
     * 指定一个过期天数N，文件会在其最近更新时间点的N天后过期,自动删除；范围： [7,36500]
     */
    Days?: number;
    /**
     * 指定一个过期天数N，文件会在其最近更新时间点的N天后过期，自动转换为归档存储类型；范围： [7,36500]，0代表不启用
     */
    ArchivalDays?: number;
    /**
     * 指定一个过期天数N，文件会在其最近更新时间点的N天后过期，自动转换为低频存储类型；范围： [7,36500]，0代表不启用
     */
    IADays?: number;
    /**
     * 指定一个历史文件过期天数N，文件会在其最近更新时间点的N天后过期,自动删除；范围： [7,36500]
     */
    HistVerDeleteDays?: number;
    /**
     * 指定一个历史文件过期天数N，文件会在其最近更新时间点的N天后过期,自动删除；范围： [7,36500]
     */
    HistVerArchivalDays?: number;
    /**
     * 指定一个历史文件过期天数N，文件会在其最近更新时间点的N天后过期,自动删除；范围： [7,36500]
     */
    HistVerIADays?: number;
    /**
     * Tag，参数格式"k1=v1&k2=v2"，key的最大长度为128， value最大长度为256byte，tag的最大数量为10
     */
    Tags?: string;
    /**
     * 文件的最小size
     */
    MinSize?: number;
    /**
     * 文件的最大size
     */
    MaxSize?: string;
}
/**
 * UpdateUFileLifeCycle - 更新生命周期管理
 */
export interface UpdateUFileLifeCycleResponse {
}
/**
 * UpdateUFileSSLCert - 更新指定域名证书
 */
export interface UpdateUFileSSLCertRequest {
    /**
     * 存储桶名称，全局唯一
     */
    BucketName: string;
    /**
     * 域名
     */
    Domain: string;
    /**
     * SSL证书名称
     */
    CertificateName: string;
    /**
     * 填写SSL证书文件内容（PEM编码）。 证书文件内容填写格式： 如果您的业务场景仅需确保服务端证书可信，则证书文件需要包含服务器证书（①）和中间证书（②）。如果您的中间证书和服务器证书是两个文件，您可以在证书链配置项填写中间证书内容即可。
     */
    Certificate: string;
    /**
     * 填写SSL证书私钥内容（PEM编码）。
     */
    CertificateKey: string;
}
/**
 * UpdateUFileSSLCert - 更新指定域名证书
 */
export interface UpdateUFileSSLCertResponse {
}
/**
 * UpdateUFileToken - 更新令牌的操作权限，可操作key的前缀，可操作bucket和令牌超时时间点
 */
export interface UpdateUFileTokenRequest {
    /**
     * 令牌ID
     */
    TokenId: string;
    /**
     * 令牌名称
     */
    TokenName?: string;
    /**
     * 令牌允许执行的操作，[ TOKEN_ALLOW_NONE , TOKEN_ALLOW_READ , TOKEN_ALLOW_WRITE , TOKEN_ALLOW_DELETE , TOKEN_ALLOW_LIST, TOKEN_ALLOW_IOP , TOKEN_ALLOW_DP ]
     */
    AllowedOps?: string[];
    /**
     * 令牌允许操作的key前缀
     */
    AllowedPrefixes?: string[];
    /**
     * 令牌允许操作的bucket
     */
    AllowedBuckets?: string[];
    /**
     * 令牌的超时时间点（时间戳）;注意：过期时间不能超过 4102416000
     */
    ExpireTime?: number;
}
/**
 * UpdateUFileToken - 更新令牌的操作权限，可操作key的前缀，可操作bucket和令牌超时时间点
 */
export interface UpdateUFileTokenResponse {
}
/**
 * UpdateUdsRule - 针对对象存储的文件，进行自动触发解压。
 */
export interface UpdateUdsRuleRequest {
    /**
     * 规则的唯一Id
     */
    RuleId: string;
    /**
     * 规则名称
     */
    RuleName: string;
    /**
     * 源Bucket名字，全局唯一
     */
    SrcBucket: string;
    /**
     * 源bucket的token之一的tokenId
     */
    SrcTokenId: string;
    /**
     * 目标Bucket名字，全局唯一
     */
    DstBucket: string;
    /**
     * 目标bucket的token之一的tokenId
     */
    DstTokenId: string;
    /**
     * 解压后的目标目录
     */
    DstDirectory: string;
    /**
     * 是否以压缩文件的前缀为最后一层目录
     */
    KeepUS3Name: boolean;
    /**
     * 触发解压缩的前缀
     */
    Prefixes: string;
    /**
     * 操作的ops数组,"Ops.0":"unzip"
     */
    Ops?: string[];
    /**
     * 通知的事件数组
     */
    Events?: string[];
    /**
     * 联系的用户组ID
     */
    ContactGroupId?: string;
    /**
     * 通知的类型数组
     */
    NotificationTypes?: string[];
}
/**
 * UpdateUdsRule - 针对对象存储的文件，进行自动触发解压。
 */
export interface UpdateUdsRuleResponse {
    /**
     * 返回规则的规则ID
     */
    RuleId: string;
    /**
     * 该请求的消息成功或者失败的描述
     */
    Mesage?: string;
}
