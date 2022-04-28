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
     * DeleteBucket - 删除Bucket
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/delete_bucket
     */
    deleteBucket(request?: DeleteBucketRequest): Promise<DeleteBucketResponse>;
    /**
     * DeleteUFileLifeCycle - 删除生命周期管理
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/delete_ufile_life_cycle
     */
    deleteUFileLifeCycle(request?: DeleteUFileLifeCycleRequest): Promise<DeleteUFileLifeCycleResponse>;
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
     * DescribeUFileLifeCycle - 获取生命周期信息
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/describe_ufile_life_cycle
     */
    describeUFileLifeCycle(request?: DescribeUFileLifeCycleRequest): Promise<DescribeUFileLifeCycleResponse>;
    /**
     * DescribeUFileToken - 获取令牌信息
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/describe_ufile_token
     */
    describeUFileToken(request?: DescribeUFileTokenRequest): Promise<DescribeUFileTokenResponse>;
    /**
     * GetUFileDailyReport - 查看日消费报表
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/get_ufile_daily_report
     */
    getUFileDailyReport(request?: GetUFileDailyReportRequest): Promise<GetUFileDailyReportResponse>;
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
     * UpdateUFileLifeCycle - 更新生命周期管理
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/update_ufile_life_cycle
     */
    updateUFileLifeCycle(request?: UpdateUFileLifeCycleRequest): Promise<UpdateUFileLifeCycleResponse>;
    /**
     * UpdateUFileToken - 更新令牌的操作权限，可操作key的前缀，可操作bucket和令牌超时时间点
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/update_ufile_token
     */
    updateUFileToken(request?: UpdateUFileTokenRequest): Promise<UpdateUFileTokenResponse>;
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
     * 令牌允许执行的操作，[ TOKEN_ALLOW_NONE , TOKEN_ALLOW_READ , TOKEN_ALLOW_WRITE , TOKEN_ALLOW_DELETE , TOKEN_ALLOW_LIST, TOKEN_ALLOW_IOP , TOKEN_ALLOW_DP  ]。默认TOKEN_ALLOW_NONE
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
}
/**
 * CreateUFileToken - 创建US3令牌
 */
export interface CreateUFileTokenResponse {
    /**
     * 创建令牌的token_id
     */
    TokenId?: string;
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
    DateSet: {
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
         * 令牌允许执行的操作，[ TOKEN_ALLOW_NONE , TOKEN_ALLOW_READ , TOKEN_ALLOW_WRITE , TOKEN_ALLOW_DELETE , TOKEN_ALLOW_LIST, TOKEN_ALLOW_IOP , TOKEN_ALLOW_DP ]
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
         * 所属地区
         */
        Region: string;
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
             * 下载流量：单位byte；国内无此字段
             */
            Flow?: number;
            /**
             * 闲时流量；单位byte；海外无此字段
             */
            IdleFlow?: number;
            /**
             * 忙时流量；单位byte；海外无此字段
             */
            BusyFlow?: number;
            /**
             * cdn回源流量;单位byte
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
             * 标准存储量；单位byte
             */
            Storage?: number;
            /**
             * 低频存储量；单位byte
             */
            IaStorage?: number;
            /**
             * 冷存（归档）存储量；单位byte
             */
            AcStorage?: number;
            /**
             * 低频数据取回量；单位byte
             */
            IaGetSize?: number;
            /**
             * 冷存激活量，即归档数据取回量；单位byte
             */
            AcRestore?: number;
            /**
             * 忙时流量；单位byte；海外无此字段
             */
            BusyFlow?: number;
            /**
             * 闲时流量；单位byte；海外无此字段
             */
            IdleFlow?: number;
            /**
             * cdn回源流量;单位byte
             */
            CdnFlow?: number;
            /**
             * 下载流量：单位byte；国内无此字段
             */
            Flow?: number;
            /**
             * 配额消费时间，unix时间戳（单位s），精确到日期
             */
            Date?: number;
            /**
             * API请求次数（万次）
             */
            ApiTimes?: number;
        }[];
    }[];
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
     * 防盗链Referer类型，支持两种类型，黑名单和白名单; 1黑名单，2白名单；RefererStatus为"on"时此参数必填；
     */
    RefererType?: number;
    /**
     * 防盗链Referer规则，支持正则表达式（不支持符号';')
     */
    Referers?: string[];
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
    Type: string;
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
}
/**
 * UpdateUFileLifeCycle - 更新生命周期管理
 */
export interface UpdateUFileLifeCycleResponse {
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
