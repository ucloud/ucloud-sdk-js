


    
/**
 * UpdateUFileTokenResponse - 
 */
export interface UpdateUFileTokenResponse {
}
    
/**
 * DeleteUFileLifeCycleResponse - 
 */
export interface DeleteUFileLifeCycleResponse {
}
    
/**
 * UFileQuotaLeft - 
 */
export interface UFileQuotaLeft {
    /**
     * 配额剩余量
     */
    Left?:number
}
    
/**
 * DeleteBucketResponse - 
 */
export interface DeleteBucketResponse {
    /**
     * Bucket的名称
     */
    BucketName?:string
    /**
     * Bucket的ID
     */
    BucketId?:string
}
    
/**
 * CreateUFileLifeCycleRequest - 
 */
export interface CreateUFileLifeCycleRequest {
    /**
     * 地域。 参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Region?:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * 生命周期名称
     */
    LifeCycleName:string
    /**
     * 生命周期所适用的前缀；*为整个存储空间文件；一条规则只支持一个文件前缀；
     */
    Prefix:string
    /**
     * Enabled -- 启用，Disabled -- 不启用
     */
    Status:string
    /**
     * 存储空间名称
     */
    BucketName:string
    /**
     * 指定一个过期天数N，文件会在其最近更新时间点的N天后过期，自动删除；参数范围：[7,36500]，0代表不启用
     */
    Days?:number
    /**
     * 指定一个过期天数N，文件会在其最近更新时间点的N天后，自动变为归档存储类型；参数范围：[7,36500]，0代表不启用
     */
    ArchivalDays?:number
    /**
     * 指定一个过期天数N，文件会在其最近更新时间点的N天后，自动变为低频存储类型；参数范围：[7,36500]，0代表不启用
     */
    IADays?:number
}
    
/**
 * DeleteUFileTokenResponse - 
 */
export interface DeleteUFileTokenResponse {
}
    
/**
 * GetUFileReportRequest - 
 */
export interface GetUFileReportRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * 查询开始时间
     */
    StartTime:number
    /**
     * 查询结束时间
     */
    EndTime:number
}
    
/**
 * GetUFileReportResponse - 
 */
export interface GetUFileReportResponse {
    /**
     * 报表内容 参数见 UFileReportSet
     */
    DataSet?:
            UFileReportSet[]
}
    
/**
 * DescribeBucketRequest - 
 */
export interface DescribeBucketRequest {
    /**
     * 如果提供此参数，则获取相应地域下所有空间的空间名称(只返回空间名称信息)
     */
    Region?:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * 待获取Bucket的名称，若不提供，则获取所有Bucket
     */
    BucketName?:string
    /**
     * 获取所有Bucket列表的偏移数目，默认为0
     */
    Offset?:number
    /**
     * 获取所有Bucket列表的限制数目，默认为20
     */
    Limit?:number
}
    
/**
 * GetUFileQuotaInfoRequest - 
 */
export interface GetUFileQuotaInfoRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * 配额类型，取值为storage-volume, download-traffic或request-count
     */
    QuotaType:string[]
}
    
/**
 * UFileBucketSet - 
 */
export interface UFileBucketSet {
    /**
     * Bucket所属地域
     */
    Region?:string
    /**
     * Bucket名称
     */
    BucketName?:string
    /**
     * Bucket的ID
     */
    BucketId?:string
    /**
     * Bucket的域名集合 参数见 UFileDomainSet
     */
    Domain?:
        UFileDomainSet
    /**
     * 与Bucket关联的CND加速域名的ID列表
     */
    CdnDomainId?:string[]
    /**
     * Bucket访问类型
     */
    Type?:string
    /**
     * Bucket的创建时间
     */
    CreateTime?:number
    /**
     * Bucket的修改时间
     */
    ModifyTime?:number
    /**
     * Bucket所属业务, general或vod或udb general: 普通业务； vod: 视频云业务; udb: 云数据库业务
     */
    Biz?:string
    /**
     * 所属业务组
     */
    Tag?:string
    /**
     * 是否存在自定义域名。0不存在，1存在，2错误
     */
    HasUserDomain?:number
}
    
/**
 * CreateUFileLifeCycleResponse - 
 */
export interface CreateUFileLifeCycleResponse {
    /**
     * 生命周期Id
     */
    LifeCycleId:string
}
    
/**
 * DeleteUFileLifeCycleRequest - 
 */
export interface DeleteUFileLifeCycleRequest {
    /**
     * 地域。 参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Region?:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * 生命周期Id
     */
    LifeCycleId:string
    /**
     * 存储空间名称
     */
    BucketName:string
}
    
/**
 * GetUFileQuotaResponse - 
 */
export interface GetUFileQuotaResponse {
    /**
     * 剩余的配额数值
     */
    LeftQuota?:number
}
    
/**
 * LifeCycleItem - 
 */
export interface LifeCycleItem {
    /**
     * 生命周期Id
     */
    LifeCycleId?:string
    /**
     * 生命周期名称
     */
    LifeCycleName?:string
    /**
     * 生命周期所适用的前缀；*为整个存储空间文件；
     */
    Prefix?:string
    /**
     * 指定一个过期天数N，文件会在其最近更新时间点的N天后过期，自动删除，0代表不启用；
     */
    Days?:number
    /**
     * Enabled -- 启用，Disabled -- 不启用
     */
    Status?:string
    /**
     * 存储空间名称
     */
    BucketName?:string
    /**
     * 指定一个过期天数N，文件会在其最近更新时间点的N天后过期，自动转换为归档存储类型，0代表不启用；
     */
    ArchivalDays?:number
    /**
     * 指定一个过期天数N，文件会在其最近更新时间点的N天后过期，自动转换为低频存储类型，0代表不启用；
     */
    IADays?:number
}
    
/**
 * UFileTotalReportItem - 
 */
export interface UFileTotalReportItem {
    /**
     * 下载流量：单位byte；国内无此字段
     */
    Flow?:number
    /**
     * 闲时流量；单位byte；海外无此字段
     */
    IdleFlow?:number
    /**
     * 忙时流量；单位byte；海外无此字段
     */
    BusyFlow?:number
    /**
     * cdn回源流量;单位byte
     */
    CdnFlow?:number
    /**
     * API请求次数（万次）
     */
    ApiTimes?:number
}
    
/**
 * DescribeUFileLifeCycleRequest - 
 */
export interface DescribeUFileLifeCycleRequest {
    /**
     * 地域。 参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Region?:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * 存储空间名称
     */
    BucketName:string
    /**
     * 生命周期Id；不传递此参数拉取存储空间下面的所有生命周期信息
     */
    LifeCycleId?:string
}
    
/**
 * DeleteBucketRequest - 
 */
export interface DeleteBucketRequest {
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * 待删除Bucket的名称
     */
    BucketName:string
}
    
/**
 * GetUFileQuotaPriceRequest - 
 */
export interface GetUFileQuotaPriceRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 存储容量，单位: GB*天，范围: [0, 30 000 000]，步长：100GB*天
     */
    StorageVolume?:number
    /**
     * 下载流量，单位: GB，范围: [0, 60 000]，步长：1GB
     */
    DownloadTraffic?:number
    /**
     * 请求次数，单位：万次，范围：[0, 1 000 000]，步长：1万次
     */
    RequestCount?:number
}
    
/**
 * CreateUFileTokenRequest - 
 */
export interface CreateUFileTokenRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region?:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * 令牌名称
     */
    TokenName:string
    /**
     * 令牌允许执行的操作，[ TOKEN_ALLOW_NONE , TOKEN_ALLOW_READ , TOKEN_ALLOW_WRITE , TOKEN_ALLOW_DELETE , TOKEN_ALLOW_LIST, TOKEN_ALLOW_IOP , TOKEN_ALLOW_DP  ]。默认TOKEN_ALLOW_NONE
     */
    AllowedOps?:string[]
    /**
     * 令牌允许操作的key前缀，默认*表示全部
     */
    AllowedPrefixes?:string[]
    /**
     * 令牌允许操作的bucket，默认*表示全部
     */
    AllowedBuckets?:string[]
    /**
     * Unix 时间戳，精确到秒，为令牌过期时间点。默认过期时间为一天（即当前Unix时间戳+86400）；注意：过期时间不能超过 4102416000
     */
    ExpireTime?:number
}
    
/**
 * UFileReportItem - 
 */
export interface UFileReportItem {
    /**
     * 总消费情况
     */
    Total?:
            UFileTotalReportItem[]
    /**
     * 日消费情况
     */
    Daily?:
            UFileDailyReportItem[]
}
    
/**
 * UFileDailyReportItem - 
 */
export interface UFileDailyReportItem {
    /**
     * 标准存储量；单位byte
     */
    Storage?:number
    /**
     * 低频存储量；单位byte
     */
    IaStorage?:number
    /**
     * 冷存（归档）存储量；单位byte
     */
    AcStorage?:number
    /**
     * 低频数据取回量；单位byte
     */
    IaGetSize?:number
    /**
     * 冷存激活量，即归档数据取回量；单位byte
     */
    AcRestore?:number
    /**
     * 忙时流量；单位byte；海外无此字段
     */
    BusyFlow?:number
    /**
     * 闲时流量；单位byte；海外无此字段
     */
    IdleFlow?:number
    /**
     * cdn回源流量;单位byte
     */
    CdnFlow?:number
    /**
     * 下载流量：单位byte；国内无此字段
     */
    Flow?:number
    /**
     * 配额消费时间，unix时间戳（单位s），精确到日期
     */
    Date?:number
    /**
     * API请求次数（万次）
     */
    ApiTimes?:number
}
    
/**
 * UFileReportSet - 
 */
export interface UFileReportSet {
    /**
     * 配额消费时间，unix时间戳，精确到日期
     */
    Time?:number
    /**
     * 配额消费当日使用的存储容量，单位：GB*天
     */
    StorageVolume?:number
    /**
     * 配额消费当日使用的下载流量，单位：GB
     */
    DownloadTraffic?:number
    /**
     * 配额消费当日使用的请求次数，单位：万次
     */
    RequestCount?:number
}
    
/**
 * DescribeBucketResponse - 
 */
export interface DescribeBucketResponse {
    /**
     * Bucket的描述信息 参数见 UFileBucketSet
     */
    DataSet?:
            UFileBucketSet[]
}
    
/**
 * DeleteUFileTokenRequest - 
 */
export interface DeleteUFileTokenRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId:string
    /**
     * 令牌ID
     */
    TokenId:string
}
    
/**
 * GetUFileDailyReportRequest - 
 */
export interface GetUFileDailyReportRequest {
    /**
     * 地域。 参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * 查询开始时间;unix时间戳，单位s
     */
    StartTime:number
    /**
     * 查询结束时间;unix时间戳,单位s
     */
    EndTime:number
    /**
     * 空间名称。此字段不为空，返回此Bucket日使用量；否则，返回这个项目的日使用量
     */
    BucketName?:string
}
    
/**
 * CreateUFileTokenResponse - 
 */
export interface CreateUFileTokenResponse {
    /**
     * 创建令牌的token_id
     */
    TokenId?:string
}
    
/**
 * SetUFileRefererRequest - 
 */
export interface SetUFileRefererRequest {
    /**
     * 地域。 参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Region?:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * 存储空间名称
     */
    BucketName:string
    /**
     * 开启关闭referer防盗链;关闭防盗链会清空防盗链参数设置，开启防盗链必须指定 RefererType、Referers；开启：on， 关闭：off;
     */
    RefererStatus:string
    /**
     * RefererType为白名单时，RefererAllowNull为false代表不允许空referer访问，为true代表允许空referer访问;此参数默认为 true; 
     */
    RefererAllowNull?:boolean
    /**
     * 防盗链Referer类型，支持两种类型，黑名单和白名单; 1黑名单，2白名单；RefererStatus为"on"时此参数必填；
     */
    RefererType?:number
    /**
     * 防盗链Referer规则，支持正则表达式（不支持符号';')
     */
    Referers?:string[]
}
    
/**
 * CreateBucketResponse - 
 */
export interface CreateBucketResponse {
    /**
     * 已创建Bucket的名称
     */
    BucketName?:string
    /**
     * 已创建Bucket的ID
     */
    BucketId?:string
}
    
/**
 * CreateBucketRequest - 
 */
export interface CreateBucketRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * 待创建Bucket的名称，具有全局唯一性
     */
    BucketName:string
    /**
     * Bucket访问类型，public或private; 默认为private
     */
    Type?:string
}
    
/**
 * DescribeUFileTokenResponse - 
 */
export interface DescribeUFileTokenResponse {
    /**
     * 令牌描述信息
     */
    DataSet:
            UFileTokenSet[]
}
    
/**
 * GetUFileQuotaPriceResponse - 
 */
export interface GetUFileQuotaPriceResponse {
    /**
     * 待支付价格，单位：分
     */
    Price?:number
}
    
/**
 * GetUFileQuotaRequest - 
 */
export interface GetUFileQuotaRequest {
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * 配额类型，取值为storage-volume, download-traffic或request-count
     */
    QuotaType:string
}
    
/**
 * GetUFileQuotaInfoResponse - 
 */
export interface GetUFileQuotaInfoResponse {
    /**
     * 配额信息数据集
     */
    DataSet?:
            UFileQuotaDataSetItem[]
}
    
/**
 * UFileQuotaDataSetItem - 
 */
export interface UFileQuotaDataSetItem {
    /**
     * 可用地域
     */
    Region?:string
    /**
     * 是否欠费：1表示欠费；0表示未欠费
     */
    Owe?:number
    /**
     * 剩余存储容量
     */
    Storage?:
        UFileQuotaLeft
    /**
     * 剩余下载流量
     */
    DownloadFlow?:
        UFileQuotaLeft
    /**
     * 剩余请求次数
     */
    RequestCnt?:
        UFileQuotaLeft
}
    
/**
 * UpdateUFileLifeCycleResponse - 
 */
export interface UpdateUFileLifeCycleResponse {
}
    
/**
 * GetUFileDailyReportResponse - 
 */
export interface GetUFileDailyReportResponse {
    /**
     * 消费情况
     */
    DataSet:
            UFileReportItem[]
}
    
/**
 * UpdateUFileLifeCycleRequest - 
 */
export interface UpdateUFileLifeCycleRequest {
    /**
     * 地域。 参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Region?:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * 生命周期Id
     */
    LifeCycleId:string
    /**
     * 生命周期名称
     */
    LifeCycleName:string
    /**
     * 生命周期所适用的前缀；*为整个存储空间文件；一条规则只支持一个文件前缀；
     */
    Prefix:string
    /**
     * Enabled -- 启用，Disabled -- 不启用
     */
    Status:string
    /**
     * 存储空间名称
     */
    BucketName:string
    /**
     * 指定一个过期天数N，文件会在其最近更新时间点的N天后过期,自动删除；范围： [7,36500]
     */
    Days?:number
    /**
     * 指定一个过期天数N，文件会在其最近更新时间点的N天后过期，自动转换为归档存储类型；范围： [7,36500]，0代表不启用
     */
    ArchivalDays?:number
    /**
     * 指定一个过期天数N，文件会在其最近更新时间点的N天后过期，自动转换为低频存储类型；范围： [7,36500]，0代表不启用
     */
    IADays?:number
}
    
/**
 * UpdateBucketResponse - 
 */
export interface UpdateBucketResponse {
    /**
     * Bucket的名称
     */
    BucketName?:string
    /**
     * Bucket的ID
     */
    BucketId?:string
}
    
/**
 * UpdateBucketRequest - 
 */
export interface UpdateBucketRequest {
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * 待修改Bucket的名称
     */
    BucketName:string
    /**
     * Bucket访问类型;public或private
     */
    Type:string
}
    
/**
 * SetUFileRefererResponse - 
 */
export interface SetUFileRefererResponse {
}
    
/**
 * DescribeUFileTokenRequest - 
 */
export interface DescribeUFileTokenRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region?:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * 令牌ID，只返回指定ID信息，否则拉取所有令牌
     */
    TokenId?:string
    /**
     * 令牌名称，只返回指定令牌名称信息，否则拉取所有令牌
     */
    TokenName?:string
    /**
     * 0表示显示部分token信息；不传递和其他情况表示显示全部token信息
     */
    Display?:number
}
    
/**
 * UFileTokenSet - 
 */
export interface UFileTokenSet {
    /**
     * 令牌ID
     */
    TokenId:string
    /**
     * 令牌名称
     */
    TokenName:string
    /**
     * 令牌公钥
     */
    PublicKey:string
    /**
     * 令牌私钥
     */
    PrivateKey:string
    /**
     * 令牌允许执行的操作，[ TOKEN_ALLOW_NONE , TOKEN_ALLOW_READ , TOKEN_ALLOW_WRITE , TOKEN_ALLOW_DELETE , TOKEN_ALLOW_LIST, TOKEN_ALLOW_IOP , TOKEN_ALLOW_DP ]
     */
    AllowedOps:string[]
    /**
     * 令牌允许操作的key前缀
     */
    AllowedPrefixes:string[]
    /**
     * 令牌允许操作的bucket
     */
    AllowedBuckets:string[]
    /**
     * 令牌的超时时间点
     */
    ExpireTime:number
    /**
     * 创建时间
     */
    CreateTime:number
    /**
     * 修改时间
     */
    ModifyTime:number
    /**
     * 所属地区
     */
    Region:string
}
    
/**
 * DescribeUFileLifeCycleResponse - 
 */
export interface DescribeUFileLifeCycleResponse {
    /**
     * 生命周期信息
     */
    DateSet:
            LifeCycleItem[]
}
    
/**
 * UFileDomainSet - 
 */
export interface UFileDomainSet {
    /**
     * 源站域名
     */
    Src?:string[]
    /**
     * UCDN加速域名
     */
    Cdn?:string[]
    /**
     * 用户自定义源站域名
     */
    CustomSrc?:string[]
    /**
     * 用户自定义CDN加速域名
     */
    CustomCdn?:string[]
}
    
/**
 * UpdateUFileTokenRequest - 
 */
export interface UpdateUFileTokenRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region?:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId:string
    /**
     * 令牌ID
     */
    TokenId:string
    /**
     * 令牌名称
     */
    TokenName?:string
    /**
     * 令牌允许执行的操作，[ TOKEN_ALLOW_NONE , TOKEN_ALLOW_READ , TOKEN_ALLOW_WRITE , TOKEN_ALLOW_DELETE , TOKEN_ALLOW_LIST, TOKEN_ALLOW_IOP , TOKEN_ALLOW_DP ]
     */
    AllowedOps?:string[]
    /**
     * 令牌允许操作的key前缀
     */
    AllowedPrefixes?:string[]
    /**
     * 令牌允许操作的bucket
     */
    AllowedBuckets?:string[]
    /**
     * 令牌的超时时间点（时间戳）;注意：过期时间不能超过 4102416000
     */
    ExpireTime?:number
}
