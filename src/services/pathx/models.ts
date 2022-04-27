


    
/**
 * DeleteUGAInstanceRequest - 
 */
export interface DeleteUGAInstanceRequest {
    /**
     * 项目ID,如org-xxxx。请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId:string
    /**
     * 加速配置实例ID
     */
    UGAId:string
}
    
/**
 * LineDetail - 
 */
export interface LineDetail {
    /**
     * 线路源
     */
    LineFrom:string
    /**
     * 线路目的
     */
    LineTo:string
    /**
     * 线路计费Id
     */
    LineId?:string
    /**
     * 线路源中文名称
     */
    LineFromName:string
    /**
     * 线路目的中文名称
     */
    LineToName:string
}
    
/**
 * BindPathXSSLResponse - 
 */
export interface BindPathXSSLResponse {
}
    
/**
 * CreateUGAInstanceRequest - 
 */
export interface CreateUGAInstanceRequest {
    /**
     * 项目ID,如org-xxxx。请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId:string
    /**
     * 加速配置实例名称
     */
    Name:string
    /**
     * 加速源IP，多个IP用英文半角逗号(,)隔开；IPList和Domain二选一必填
     */
    IPList?:string
    /**
     * 加速源域名，IPList和Domain二选一必填
     */
    Domain?:string
    /**
     * TCP端口号，已废弃。请使用 CreateUGAForwarder API 创建端口
     */
    TCP?:string[]
    /**
     * UDP端口号，已废弃。请使用 CreateUGAForwarder API 创建端口
     */
    UDP?:string[]
}
    
/**
 * DeletePathXSSLResponse - 
 */
export interface DeletePathXSSLResponse {
}
    
/**
 * DescribeUPathRequest - 
 */
export interface DescribeUPathRequest {
    /**
     * 项目ID。请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId:string
    /**
     * 如果不填参数 返回 ProjectId 下所有的线路资源，填此参数则返回upath实例ID匹配的线路
     */
    UPathId?:string
}
    
/**
 * DescribeUGA3InstanceRequest - 
 */
export interface DescribeUGA3InstanceRequest {
    /**
     * 项目ID。请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId:string
    /**
     * 加速配置实例ID，如果传了实例ID 则返回匹配实例ID的记录；如果没传则返回 ProjectId 下全部实例且符合分页要求
     */
    InstanceId?:string
    /**
     * 返回的最大条数，默认为100，最大值400
     */
    Limit?:number
    /**
     * 偏移量，默认为0
     */
    Offset?:number
}
    
/**
 * GetPathXMetricRequest - 
 */
export interface GetPathXMetricRequest {
    /**
     * 项目ID。请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId:string
    /**
     * ResourceId，如upath ID  和 uga ID 
     */
    ResourceId:string
    /**
     * 查询起始时间，10位长度时间戳
     */
    BeginTime:number
    /**
     * 查询结束时间，10位长度时间戳
     */
    EndTime:number
    /**
     * 查询监控的指标项。目前仅允许以下四项：NetworkOut:出向带宽，NetworkIn:入向带宽，NetworkOutUsage:出向带宽使用率，NetworkInUsage:入向带宽使用率
     */
    MetricName:string[]
    /**
     * upath:加速线路,uga:加速实例
     */
    ResourceType:string
    /**
     * 具体线路id，调用DescribePathXLineConfig接口获取线路列表
     */
    LineId:string
}
    
/**
 * CreateUGA3PortRequest - 
 */
export interface CreateUGA3PortRequest {
    /**
     * 项目ID。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId:string
    /**
     * 加速配置实例ID
     */
    InstanceId:string
    /**
     * TCP接入端口，禁用65123端口
     */
    TCP?:number[]
    /**
     * TCP回源端口
     */
    TCPRS?:number[]
}
    
/**
 * ModifyUGA3InstanceRequest - 
 */
export interface ModifyUGA3InstanceRequest {
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId:string
    /**
     * 加速配置实例ID，格式uga-xxxx。不支持GlobalSSH实例。
     */
    InstanceId:string
    /**
     * 加速配置实例名称，不填或空字符串则不更新
     */
    Name?:string
    /**
     * 备注信息，暂时前端为使用
     */
    Remark?:string
}
    
/**
 * DeleteUGA3InstanceRequest - 
 */
export interface DeleteUGA3InstanceRequest {
    /**
     * 项目ID,如org-xxxx。请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId:string
    /**
     * 实例Id,资源的唯一标识
     */
    InstanceId:string
}
    
/**
 * UGAL4Forwarder - 
 */
export interface UGAL4Forwarder {
    /**
     * 接入端口
     */
    Port:number
    /**
     * 转发协议，枚举值["TCP"，"UDP"，"HTTPHTTP"，"HTTPSHTTP"，"HTTPSHTTPS"]。TCP和UDP代表四层转发，其余为七层转发
     */
    Protocol:string
    /**
     * RSPort，源站监听端口
     */
    RSPort:number
}
    
/**
 * CreateUGA3InstanceResponse - 
 */
export interface CreateUGA3InstanceResponse {
    /**
     * 加速配置ID
     */
    InstanceId:string
    /**
     * 加速域名 用户可把业务域名CName到此域名上
     */
    CName?:string
}
    
/**
 * UGAAInfo - 
 */
export interface UGAAInfo {
    /**
     * 加速配置实例ID
     */
    UGAId:string
    /**
     * 加速域名，请在加速区域配置您的业务域名的CName记录值为加速域名
     */
    CName:string
    /**
     * 加速配置名称
     */
    UGAName:string
    /**
     * 源站IP列表，多个值由半角英文逗号相隔
     */
    IPList?:string[]
    /**
     * 源站域名
     */
    Domain?:string
    /**
     * 源站所在区域，加速实例在绑定线路后会自动设置该值。console页面上通过该值过滤加速实例可以绑定的upath实例。注意：缺少该值会导致在console上无法修改线路
     */
    Location?:string
    /**
     * 绑定的加速线路
     */
    UPathSet?:
            UPathSet[]
    /**
     * 端口配置信息（不再维护，建议使用ForwarderSet）
     */
    TaskSet?:
            UGAATask[]
    /**
     * UGA 4层转发器配置，记录接入或回源端口，接入或回源协议信息
     */
    L4ForwarderSet?:
            UGAL4Forwarder[]
    /**
     * UGA 7层转发器配置，记录接入或回源端口，接入或回源协议信息 如绑定证书会返回证书ID
     */
    L7ForwarderSet?:
            UGAL7Forwarder[]
    /**
     * 线路出口IP地址
     */
    OutPublicIpList?:
            OutPublicIpInfo[]
}
    
/**
 * NodeDelays - 
 */
export interface NodeDelays {
    /**
     * 加速区域
     */
    Area:string
    /**
     * 加速区域Code
     */
    AreaCode:string
    /**
     * 国家代码
     */
    CountryCode:string
    /**
     * 国旗Code
     */
    FlagUnicode:string
    /**
     * 国旗Emoji
     */
    FlagEmoji:string
    /**
     * 加速延迟
     */
    Latency:number
    /**
     * 公网延迟
     */
    LatencyInternet:number
    /**
     * 加速提升比例
     */
    LatencyOptimization:number
    /**
     * 加速后丢包率
     */
    Loss:number
    /**
     * 原始丢包率
     */
    LossInternet:number
    /**
     * 丢包下降比例
     */
    LossOptimization:number
}
    
/**
 * ModifyUGA3OriginInfoResponse - 
 */
export interface ModifyUGA3OriginInfoResponse {
}
    
/**
 * ModifyUGA3PortRequest - 
 */
export interface ModifyUGA3PortRequest {
    /**
     * 项目ID。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId:string
    /**
     * 加速配置实例ID
     */
    InstanceId:string
    /**
     * TCP接入端口，禁用65123端口
     */
    TCP?:number[]
    /**
     * TCP回源端口
     */
    TCPRS?:number[]
}
    
/**
 * ModifyGlobalSSHPortRequest - 
 */
export interface ModifyGlobalSSHPortRequest {
    /**
     * 项目ID，如org-xxxx。请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId:string
    /**
     * 实例ID,资源唯一标识。当前仅收费版GlobalSSH实例可以修改端口。
     */
    InstanceId:string
    /**
     * 源站服务器监听的SSH端口号。收费版本端口范围[1,65535]且不能为80，443，65123端口。免费版不支持修改端口。
     */
    Port:number
}
    
/**
 * ModifyGlobalSSHRemarkResponse - 
 */
export interface ModifyGlobalSSHRemarkResponse {
}
    
/**
 * UpdatePathXWhitelistResponse - 
 */
export interface UpdatePathXWhitelistResponse {
}
    
/**
 * DescribeGlobalSSHInstanceRequest - 
 */
export interface DescribeGlobalSSHInstanceRequest {
    /**
     * 项目ID，如org-xxxx。请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId:string
    /**
     * 实例ID，资源唯一标识
     */
    InstanceId?:string
}
    
/**
 * CreateUGA3InstanceRequest - 
 */
export interface CreateUGA3InstanceRequest {
    /**
     * 项目ID,如org-xxxx。请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId:string
    /**
     * 实例的共享带宽大小，单位Mbps
     */
    Bandwidth:number
    /**
     * 加速配置实例名称,默认PathX
     */
    Name?:string
    /**
     * 非必填,如果不填，会根据Domain 和IPList 去选一个最近的源站区域BKK表示AreaCode;曼谷表示Area["BKK":"曼谷","DXB":"迪拜","FRA":"法兰克福","SGN":"胡志明市","HKG":"香港",CGK":"雅加达","LOS":"拉各斯","LHR":"伦敦","LAX":"洛杉矶","MNL":"马尼拉","DME":"莫斯科","BOM":"孟买","MSP":"圣保罗","ICN":"首尔","PVG":"上海","SIN":"新加坡","NRT":"东京","IAD":"华盛顿","TPE": "台北"]
     */
    AreaCode?:string
    /**
     * 备注项
     */
    Remark?:string
    /**
     * 支付方式，如按月、按年、按时[Year,Month,Dynamic]
     */
    ChargeType?:string
    /**
     * 购买周期
     */
    Quantity?:number
    /**
     * 加速大区,默认Global,[    "Global":"全球",    "AP":"亚太",    "EU":"欧洲",    "ME":"中东",    "OA":"大洋洲",    "AF":"非洲",    "NA":"北美洲",    "SA":"南美洲"]
     */
    AccelerationArea?:string
    /**
     * 加速源IP，多个IP用英文半角逗号(,)隔开；IPList和Domain二选一必填
     */
    OriginIPList?:string
    /**
     * 加速源域名，IPList和Domain二选一必填
     */
    OriginDomain?:string
    /**
     * 使用代金券可冲抵部分费用，仅全地域可用的代金券
     */
    CouponId?:string
}
    
/**
 * DescribeUGA3InstanceResponse - 
 */
export interface DescribeUGA3InstanceResponse {
    /**
     * 全球加速实例信息列表
     */
    ForwardInstanceInfos?:
            ForwardInfo[]
    /**
     * 符合条件的总数
     */
    TotalCount?:number
}
    
/**
 * ModifyUPathBandwidthResponse - 
 */
export interface ModifyUPathBandwidthResponse {
}
    
/**
 * GetGlobalSSHPriceRequest - 
 */
export interface GetGlobalSSHPriceRequest {
    /**
     * 项目ID,如org-xxxx。请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId:string
    /**
     * 购买周期，如果ChargeType为Month，Quantity默认为0；其他情况必须为大于0的整数
     */
    Quantity?:number
    /**
     * 计费类型：Dynamic，Month，Year
     */
    ChargeType?:string
    /**
     * 版本类型。枚举值，Enterprise:企业版；Basic:基础版。可不填，默认为Basic。 
     */
    InstanceType?:string
}
    
/**
 * DescribeUPathResponse - 
 */
export interface DescribeUPathResponse {
    /**
     * 线路信息数组
     */
    UPathSet:
            UPathInfo[]
}
    
/**
 * ModifyGlobalSSHTypeRequest - 
 */
export interface ModifyGlobalSSHTypeRequest {
    /**
     * 项目ID，如org-xxxx。请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId:string
    /**
     * 实例ID,资源唯一标识
     */
    InstanceId:string
    /**
     * 取值范围["Enterprise","Basic"]，分别对应企业版和基础版，表示升级后的实例类型。比如从Free版本升级为Basic版或Enterprise版，不可从收费版降级为免费版，或从企业版降级为基础版
     */
    InstanceType:string
    /**
     * 支付方式，如按月、按年、按时
     */
    ChargeType?:string
    /**
     * 购买时间，当ChargeType为Month，Quantity为0代表购买到月底
     */
    Quantity?:string
    /**
     * 可抵扣费用的券，通常不使用
     */
    CouponId?:string
}
    
/**
 * CreatePathXSSLRequest - 
 */
export interface CreatePathXSSLRequest {
    /**
     * 项目ID org-xxx格式。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId:string
    /**
     * SSL证书的名字
     */
    SSLName:string
    /**
     * 所添加的SSL证书类型，目前只支持Pem格式
     */
    SSLType?:string
    /**
     * SSL证书的完整内容，私钥不可使用密码，包括加密证书的私钥、用户证书或CA证书等
     */
    SSLContent?:string
    /**
     * 用户自签证书内容
     */
    UserCert?:string
    /**
     * 加密证书的私钥，不可使用密码保护，开启密码保护后，重启服务需要输入密码
     */
    PrivateKey?:string
    /**
     * CA颁发证书内容
     */
    CACert?:string
}
    
/**
 * ModifyUGA3BandwidthResponse - 
 */
export interface ModifyUGA3BandwidthResponse {
}
    
/**
 * GetUGA3UpdatePriceResponse - 
 */
export interface GetUGA3UpdatePriceResponse {
    /**
     * 价格 元。大于0需付费，小于0则退费。
     */
    Price:number
}
    
/**
 * DeleteUGA3PortRequest - 
 */
export interface DeleteUGA3PortRequest {
    /**
     * 项目ID。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId:string
    /**
     * 加速配置实例ID
     */
    InstanceId:string
    /**
     * TCP接入端口
     */
    TCP?:number[]
}
    
/**
 * DeleteUGAForwarderResponse - 
 */
export interface DeleteUGAForwarderResponse {
}
    
/**
 * CreateUGA3PortResponse - 
 */
export interface CreateUGA3PortResponse {
}
    
/**
 * GetUGA3UpdatePriceRequest - 
 */
export interface GetUGA3UpdatePriceRequest {
    /**
     * 项目ID。请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId:string
    /**
     * 资源ID
     */
    InstanceId:string
    /**
     * 只有升级带宽的时候有价格变化
     */
    Bandwidth?:number
    /**
     * 暂未支持，加速大区，在更换加速大区的时候使用
     */
    AccelerationArea?:string
    /**
     * 暂未支持，源站区域
     */
    AreaCode?:string
}
    
/**
 * CreateUGAInstanceResponse - 
 */
export interface CreateUGAInstanceResponse {
    /**
     * 加速配置ID
     */
    UGAId:string
    /**
     * 加速域名 用户可把业务域名CName到此域名上。注意：未绑定线路情况时 加速域名解析不出IP。
     */
    CName?:string
}
    
/**
 * ModifyGlobalSSHPortResponse - 
 */
export interface ModifyGlobalSSHPortResponse {
}
    
/**
 * DescribePathXLineConfigResponse - 
 */
export interface DescribePathXLineConfigResponse {
    /**
     * UGAA线路列表,参考UGAALine字段定义
     */
    LineSet?:
            UGAALine[]
}
    
/**
 * CreateUPathRequest - 
 */
export interface CreateUPathRequest {
    /**
     * 项目ID,如org-xxxx。请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId:string
    /**
     * 名字，便于记忆区分
     */
    Name:string
    /**
     * 选择的线路，由DescribePathXLineConfig接口提供
     */
    LineId:string
    /**
     * 当PostPaid为false时，该值为预付费固定带宽；当PostPaid为true时，该值为后付费保底带宽，保底带宽越大可用的上限带宽越大。最小1Mbps,最大带宽由 DescribePathXLineConfig 接口获得。可联系产品团队咨询最大带宽。
     */
    Bandwidth:number
    /**
     * 计费模式，默认为Month 按月收费,可选范围['Month','Year','Dynamic']
     */
    ChargeType?:string
    /**
     * 购买周期，ChargeType为Month时，Quantity默认为0代表购买到月底，按时和按年付费该参数必须大于0
     */
    Quantity?:number
    /**
     * 是否开启后付费, 默认为false ，不开启后付费。当ChargeType为Dynamic时不能开启后付费。
     */
    PostPaid?:boolean
    /**
     * private:专线线路；public:海外SD-WAN。默认为private。
     */
    PathType?:string
    /**
     * 代金券Id
     */
    CouponId?:string
}
    
/**
 * AlarmRuler - 
 */
export interface AlarmRuler {
    /**
     * 收敛策略，可选范围 ['Exponential','Continuous','Once']，分别对应指数递增、连续告警、单次告警
     */
    AlarmStrategy:string
    /**
     * 告警探测周期，单位秒
     */
    AlarmFrequency:number
    /**
     * 比较策略，可选 ['GE','LE']  分别代表不小于和不大于
     */
    Compare:string
    /**
     * 联系组ID
     */
    ContactGroupId:number
    /**
     * 告警指标名称, 所有n的个数必须一致。目前仅允许以下四项：UpathNetworkOut:出向带宽，UpathNetworkIn:入向带宽，UpathNetworkOutUsage:出向带宽使用率，UpathNetworkInUsage:入向带宽使用率
     */
    MetricName:string
    /**
     * 告警阈值，带宽使用率的阈值范围是[50,100]的正整数，带宽告警阈值为1000000的倍数, 如大于2Mbps则告警 阈值应该传 2000000
     */
    Threshold:number
    /**
     * 告警触发周期（次数）
     */
    TriggerCount:number
    /**
     * 告警模板策略ID
     */
    AlarmTemplateRuleId:number
    /**
     * 资源类型
     */
    ResourceType?:string
}
    
/**
 * DescribeUPathTemplateResponse - 
 */
export interface DescribeUPathTemplateResponse {
    /**
     * 监控模板详情
     */
    DataSet:
            AlarmRuler[]
}
    
/**
 * ForwardTask - 
 */
export interface ForwardTask {
    /**
     * 转发协议，枚举值["TCP"，"UDP"，"HTTPHTTP"，"HTTPSHTTP"，"HTTPSHTTPS"，"WSWS"，"WSSWS"，"WSSWSS"]。TCP和UDP代表四层转发，其余为七层转发。
     */
    Protocol:string
    /**
     * 源站服务器监听的端口号
     */
    RSPort:number
    /**
     * 加速端口
     */
    Port:number
}
    
/**
 * MetricPeriod - 
 */
export interface MetricPeriod {
    /**
     * 出向带宽
     */
    NetworkOut?:
            MatricPoint[]
    /**
     * 入向带宽
     */
    NetworkIn?:
            MatricPoint[]
    /**
     * 出向带宽使用率
     */
    NetworkOutUsage?:
            MatricPoint[]
    /**
     * 入向带宽使用率
     */
    NetworkInUsage?:
            MatricPoint[]
}
    
/**
 * UGAUnBindUPathRequest - 
 */
export interface UGAUnBindUPathRequest {
    /**
     * 项目ID。请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId:string
    /**
     * 加速配置实例ID 格式uga-xxx
     */
    UGAId:string
    /**
     * 加速线路实例ID 格式upath-xxx
     */
    UPathId:string
}
    
/**
 * DescribeUGAInstanceRequest - 
 */
export interface DescribeUGAInstanceRequest {
    /**
     * 项目ID。请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId:string
    /**
     * 加速配置实例ID，如果传了实例ID 则返回匹配实例ID的记录；如果没传则返回 ProjectId 下全部实例且符合分页要求
     */
    UGAId?:string
    /**
     * 返回的最大条数，默认为100，最大值400
     */
    Limit?:number
    /**
     * 偏移量，默认为0
     */
    Offset?:number
}
    
/**
 * DeleteUGA3PortResponse - 
 */
export interface DeleteUGA3PortResponse {
}
    
/**
 * DescribeUPathTemplateRequest - 
 */
export interface DescribeUPathTemplateRequest {
    /**
     * 项目ID。请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId:string
    /**
     * 加速线路实例ID,格式 upath-xxxx
     */
    UPathId:string
}
    
/**
 * DeleteGlobalSSHInstanceResponse - 
 */
export interface DeleteGlobalSSHInstanceResponse {
}
    
/**
 * DescribeUGA3OptimizationRequest - 
 */
export interface DescribeUGA3OptimizationRequest {
    /**
     * 项目ID,如org-xxxx。请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * 源站AreaCode
     */
    AreaCode:string
    /**
     * 默认一天 ，枚举类型["Hour","Day","Week"]
     */
    TimeRange?:string
    /**
     * 加速大区,默认Global,[    "Global":"全球",    "AP":"亚太",    "EU":"欧洲",    "ME":"中东",    "OA":"大洋洲",    "AF":"非洲",    "NA":"北美洲",    "SA":"南美洲"]
     */
    AccelerationArea?:string
}
    
/**
 * DeleteUPathRequest - 
 */
export interface DeleteUPathRequest {
    /**
     * 项目ID。请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId:string
    /**
     * 加速线路实例ID
     */
    UPathId:string
}
    
/**
 * ModifyGlobalSSHRemarkRequest - 
 */
export interface ModifyGlobalSSHRemarkRequest {
    /**
     * 项目ID，如org-xxxx。请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId:string
    /**
     * 实例ID,资源唯一标识
     */
    InstanceId:string
    /**
     * 备注信息，不填默认为空字符串
     */
    Remark?:string
}
    
/**
 * CreateGlobalSSHInstanceResponse - 
 */
export interface CreateGlobalSSHInstanceResponse {
    /**
     * 实例ID，资源唯一标识
     */
    InstanceId:string
    /**
     * 加速域名，访问该域名可就近接入
     */
    AcceleratingDomain?:string
}
    
/**
 * ModifyUPathTemplateResponse - 
 */
export interface ModifyUPathTemplateResponse {
}
    
/**
 * UGAATask - 
 */
export interface UGAATask {
    /**
     * 接入端口
     */
    Port:number
    /**
     * 转发协议，枚举值["TCP"，"UDP"，"HTTPHTTP"，"HTTPSHTTP"，"HTTPSHTTPS"]。TCP和UDP代表四层转发，其余为七层转发
     */
    Protocol:string
}
    
/**
 * ModifyUGA3PortResponse - 
 */
export interface ModifyUGA3PortResponse {
}
    
/**
 * ModifyGlobalSSHTypeResponse - 
 */
export interface ModifyGlobalSSHTypeResponse {
}
    
/**
 * ModifyUGA3OriginInfoRequest - 
 */
export interface ModifyUGA3OriginInfoRequest {
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId:string
    /**
     * 加速配置实例ID，格式uga3-xxxx。
     */
    InstanceId:string
    /**
     * 加速源域名，仅支持1个域名。修改源站时 OriginIPList和OriginDomain至少填一个。OriginIPList和OriginDomain都填时 以Domain为准,如果两个都不填，不修改
     */
    OriginDomain:string
    /**
     * ，加速源IP，多个IP用英文半角逗号(,)隔开。修改源站时 ，OriginIPList和OriginDomain至少填一个。OriginIPList和OriginDomain都填时 以OriginDomain为准。如果两个都不填，不修改
     */
    OriginIPList:string
}
    
/**
 * UnBindPathXSSLResponse - 
 */
export interface UnBindPathXSSLResponse {
}
    
/**
 * DeletePathXSSLRequest - 
 */
export interface DeletePathXSSLRequest {
    /**
     * 项目ID。请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId:string
    /**
     * SSL证书的ID
     */
    SSLId:string
}
    
/**
 * DeleteUPathResponse - 
 */
export interface DeleteUPathResponse {
}
    
/**
 * AccelerationInfo - 
 */
export interface AccelerationInfo {
    /**
     * 加速大区代码
     */
    AccelerationArea:string
    /**
     * 加速大区名称
     */
    AccelerationName:string
    /**
     * 加速提升情况
     */
    NodeInfo:
            NodeDelays[]
}
    
/**
 * BindPathXSSLRequest - 
 */
export interface BindPathXSSLRequest {
    /**
     * 项目ID。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId:string
    /**
     * 证书ID，如果没有指定证书ID也没有申请免费证书，HTTPS接入无法正常工作
     */
    SSLId:string
    /**
     * UGA实例ID
     */
    UGAId:string
    /**
     * 绑定SSL证书的HTTPS端口。Port.0 Port.1对应多个Port。如果Port不存在则不会绑定
     */
    Port:number[]
}
    
/**
 * MatricPoint - 
 */
export interface MatricPoint {
    /**
     * 时间戳 
     */
    Timestamp?:number
    /**
     * 监控点数值
     */
    Value?:number
}
    
/**
 * SrcAreaInfo - 
 */
export interface SrcAreaInfo {
    /**
     * AreaCode ,城市机场代码
     */
    AreaCode:string
    /**
     * AreaCode对应城市名
     */
    Area:string
    /**
     * 国旗Emoji
     */
    FlagEmoji:string
    /**
     * 国旗Unicode
     */
    FlagUnicode:string
}
    
/**
 * AccelerationAreaInfos - 
 */
export interface AccelerationAreaInfos {
    /**
     * 加速区code
     */
    AccelerationArea:string
    /**
     * 加速节点信息
     */
    AccelerationNodes:
            SrcAreaInfo[]
}
    
/**
 * UGA3Price - 
 */
export interface UGA3Price {
    /**
     * 加速大区代码
     */
    AccelerationArea:string
    /**
     * 加速大区名称
     */
    AccelerationAreaName:string
    /**
     * 转发配置价格
     */
    AccelerationForwarderPrice:number
    /**
     * 加速配置带宽价格
     */
    AccelerationBandwidthPrice:number
}
    
/**
 * CreateGlobalSSHInstanceRequest - 
 */
export interface CreateGlobalSSHInstanceRequest {
    /**
     * 项目ID,如org-xxxx。请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId:string
    /**
     * 填写支持SSH访问IP的地区名称，如“洛杉矶”，“新加坡”，“香港”，“东京”，“华盛顿”，“法兰克福”，“首尔”。Area和AreaCode两者必填一个
     */
    Area:string
    /**
     * 被SSH访问的源站IP，仅支持IPv4地址。
     */
    TargetIP:string
    /**
     * 源站服务器监听的SSH端口，可取范围[1-65535]，不能使用80，443,  65123端口。如果InstanceType=Free，取值范围缩小为[22,3389],linux系统选择22，windows系统自动选3389。
     */
    Port:number
    /**
     * AreaCode, 区域航空港国际通用代码。Area和AreaCode两者必填一个
     */
    AreaCode:string
    /**
     * 备注信息
     */
    Remark?:string
    /**
     * 支付方式，如按月：Month、 按年：Year、按时：Dynamic
     */
    ChargeType?:string
    /**
     * 购买数量按月购买至月底请传0
     */
    Quantity?:number
    /**
     * 枚举值：["Ultimate","Enterprise","Basic","Primary"], 分别代表旗舰版，企业版，基础版，入门版
     */
    InstanceType?:string
    /**
     * Ultimate版本带宽包大小,枚举值：[0,20,40]。单位MB
     */
    BandwidthPackage?:number
    /**
     * InstanceType等于Basic时可以在["cn-bj2","cn-sh2","cn-gd"]中选择1个作为转发机房，其他付费版默认配置三个转发机房
     */
    ForwardRegion?:string
    /**
     * 使用代金券可冲抵部分费用
     */
    CouponId?:string
}
    
/**
 * UGAL7Forwarder - 
 */
export interface UGAL7Forwarder {
    /**
     * 接入端口
     */
    Port:number
    /**
     * 转发协议，枚举值["TCP"，"UDP"，"HTTPHTTP"，"HTTPSHTTP"，"HTTPSHTTPS"]。TCP和UDP代表四层转发，其余为七层转发
     */
    Protocol:string
    /**
     * RSPort，源站监听端口
     */
    RSPort:number
    /**
     * 证书ID
     */
    SSLId?:string
    /**
     * 证书名称
     */
    SSLName?:string
}
    
/**
 * DeleteUGAInstanceResponse - 
 */
export interface DeleteUGAInstanceResponse {
}
    
/**
 * SSLBindedTargetSet - 
 */
export interface SSLBindedTargetSet {
    /**
     * SSL证书绑定到的实例ID
     */
    ResourceId:string
    /**
     * SSL证书绑定到的实例名称
     */
    ResourceName?:string
}
    
/**
 * CreateUGAForwarderRequest - 
 */
export interface CreateUGAForwarderRequest {
    /**
     * 项目ID。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId:string
    /**
     * 加速配置实例ID
     */
    UGAId:string
    /**
     * HTTP接入HTTP回源转发，接入端口。禁用65123端口
     */
    HTTPHTTP?:number[]
    /**
     * HTTP接入HTTP回源转发，源站监听端口
     */
    HTTPHTTPRS?:number[]
    /**
     * HTTPS接入HTTP回源转发，接入端口。禁用65123端口
     */
    HTTPSHTTP?:number[]
    /**
     * HTTPS接入HTTP回源转发，回源端口
     */
    HTTPSHTTPRS?:number[]
    /**
     * HTTPS接入HTTPS回源转发，接入端口。禁用65123端口
     */
    HTTPSHTTPS?:number[]
    /**
     * HTTPS接入HTTPS回源转发，源站监听端口
     */
    HTTPSHTTPSRS?:number[]
    /**
     * TCP接入端口，禁用65123端口
     */
    TCP?:number[]
    /**
     * TCP回源端口
     */
    TCPRS?:number[]
    /**
     * UDP接入端口，禁用65123端口
     */
    UDP?:number[]
    /**
     * UDP回源端口
     */
    UDPRS?:number[]
    /**
     * WebSocket接入WebSocket回源转发，接入端口。禁用65123。
     */
    WSWS?:number[]
    /**
     * WebSocket接入WebSocket回源转发，源站监听端口
     */
    WSWSRS?:number[]
    /**
     * WebSocketS接入WebSocketS回源转发，接入端口。禁用65123。
     */
    WSSWSS?:number[]
    /**
     * WebSocketS接入WebSocketS回源转发，源站监听端口。
     */
    WSSWSSRS?:number[]
    /**
     * WebSocketS接入WebSocket回源转发，接入端口。禁用65123。
     */
    WSSWS?:number[]
    /**
     * WebSocketS接入WebSocket回源转发，源站监听端口。
     */
    WSSWSRS?:number[]
}
    
/**
 * GlobalSSHInfo - 
 */
export interface GlobalSSHInfo {
    /**
     * 实例ID，资源唯一标识
     */
    InstanceId:string
    /**
     * 枚举值：["Enterprise","Basic","Free","Welfare"], 分别代表企业版，基础版本，免费版本，较早的公测免费版
     */
    InstanceType:string
    /**
     * GlobalSSH分配的加速域名。
     */
    AcceleratingDomain:string
    /**
     * 被SSH访问的IP所在地区
     */
    Area:string
    /**
     * 被SSH访问的源站 IPv4地址。
     */
    TargetIP:string
    /**
     * 备注信息
     */
    Remark:string
    /**
     * 源站服务器监听的SSH端口，windows系统为RDP端口
     */
    Port:number
    /**
     * InstanceType等于Free时，由系统自动分配，不等于源站Port值。InstanceType不等于Free时，与源站Port值相同。
     */
    GlobalSSHPort:number
    /**
     * 支付周期，如Month,Year,Dynamic等
     */
    ChargeType:string
    /**
     * 资源创建时间戳
     */
    CreateTime:number
    /**
     * 资源过期时间戳
     */
    ExpireTime:number
    /**
     * 是否过期
     */
    Expire:boolean
    /**
     * globalssh Ultimate带宽包大小
     */
    BandwidthPackage?:number
    /**
     * InstanceType为Basic版本时，需要展示具体分配的转发机房
     */
    ForwardRegion?:string
}
    
/**
 * GetUGA3MetricRequest - 
 */
export interface GetUGA3MetricRequest {
    /**
     * 项目ID。请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId:string
    /**
     * 资源ID
     */
    InstanceId:string
    /**
     * 查询起始时间，10位长度时间戳
     */
    BeginTime:number
    /**
     * 查询结束时间，10位长度时间戳
     */
    EndTime:number
    /**
     * 查询监控的指标项。可不传	NetworkOut:出口总带宽	NetworkIn：入口总带宽	NetworkOutUsage：出口带宽使用率	NetworkInUsage：入口总带宽使用率	NetworkOutSubline ：子线路出口带宽	NetworkInSubline：子线路入口带宽	Delay：线路平均延迟	DelaySubline：子线路延迟	ConnectCount：当前连接数	ConnectCountSubline：子线路当前连接数	DelayPromote：延迟提升	DelayPromoteSubline：子线路延迟提升
     */
    MetricName?:string[]
    /**
     * 是否为子线路。为了简化查询,true 会返回所有子线路监控项可以，false:返回所有汇总的监控数据
     */
    IsSubline?:boolean
    /**
     * 子线路AreaCode ,子线路的时候传，不是子线路可以不传
     */
    AreaCode?:string
}
    
/**
 * ForwardInfo - 
 */
export interface ForwardInfo {
    /**
     * 加速配置ID
     */
    InstanceId:string
    /**
     * 加速域名
     */
    CName:string
    /**
     * 加速实例名称
     */
    Name:string
    /**
     * 加速大区代码
     */
    AccelerationArea:string
    /**
     * 加速大区名称
     */
    AccelerationAreaName:string
    /**
     * 加速节点列表
     */
    AccelerationAreaInfos:
            AccelerationAreaInfos[]
    /**
     * 回源出口IP地址
     */
    EgressIpList:
            OutPublicIpInfo[]
    /**
     * 购买的带宽值
     */
    Bandwidth:number
    /**
     * 源站中文名
     */
    OriginArea:string
    /**
     * 源站AreaCode
     */
    OriginAreaCode:string
    /**
     * 资源创建时间
     */
    CreateTime:number
    /**
     * 资源过期时间
     */
    ExpireTime:number
    /**
     * 计费方式
     */
    ChargeType:string
    /**
     * 备注
     */
    Remark?:string
    /**
     * 端口列表
     */
    PortSets?:
            ForwardTask[]
    /**
     * 源站IP列表，多个值由半角英文逗号相隔
     */
    IPList?:string[]
    /**
     * 源站域名
     */
    Domain?:string
}
    
/**
 * UnBindPathXSSLRequest - 
 */
export interface UnBindPathXSSLRequest {
    /**
     * 项目ID。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId:string
    /**
     * UGA实例ID。
     */
    UGAId:string
    /**
     * SSL证书ID。
     */
    SSLId:string
    /**
     * 解绑SSL证书的HTTPS端口。Port.0 Port.1格式 端口错误则解绑失败。
     */
    Port:number[]
}
    
/**
 * GetPathXMetricResponse - 
 */
export interface GetPathXMetricResponse {
    /**
     * 监控数据结果集
     */
    DataSet?:
        MetricPeriod
}
    
/**
 * UGAUnBindUPathResponse - 
 */
export interface UGAUnBindUPathResponse {
}
    
/**
 * DescribePathXSSLResponse - 
 */
export interface DescribePathXSSLResponse {
    /**
     * SSL证书详细信息，具体结构见 PathXSSLSet
     */
    DataSet?:
            PathXSSLSet[]
    /**
     * 符合条件的证书总数
     */
    TotalCount?:number
}
    
/**
 * DescribeUGA3AreaResponse - 
 */
export interface DescribeUGA3AreaResponse {
    /**
     * 支持源站的地区,比如：AreaSet[{            "Area": "首尔",            "AreaCode": "ICN",            "CountryCode": "CN",            "ContinentCode": "CN"        }]ContinentCode:["CN","NA","OT"];"CN":表示国内，"NA":表示美洲，“OT"：表示欧洲等其他地区
     */
    AreaSet?:
            ForwardArea[]
}
    
/**
 * DescribeUGA3OptimizationResponse - 
 */
export interface DescribeUGA3OptimizationResponse {
    /**
     * 加速详情
     */
    AccelerationInfos?:
            AccelerationInfo[]
}
    
/**
 * DescribeGlobalSSHInstanceResponse - 
 */
export interface DescribeGlobalSSHInstanceResponse {
    /**
     * GlobalSSH实例列表，实例的属性参考GlobalSSHInfo模型
     */
    InstanceSet?:
            GlobalSSHInfo[]
}
    
/**
 * UGA3Metric - 
 */
export interface UGA3Metric {
    /**
     * 出向带宽
     */
    NetworkOut?:
            MatricPoint[]
    /**
     * 入向带宽
     */
    NetworkIn?:
            MatricPoint[]
    /**
     * 出向带宽使用率
     */
    NetworkOutUsage?:
            MatricPoint[]
    /**
     * 入向带宽使用率
     */
    NetworkInUsage?:
            MatricPoint[]
    /**
     * 子线路出口带宽
     */
    NetworkOutSubline?:
            MatricPoint[]
    /**
     * 子线路入口带宽
     */
    NetworkInSubline?:
            MatricPoint[]
    /**
     * 线路平均延迟
     */
    Delay?:
            MatricPoint[]
    /**
     * 子线路延迟
     */
    DelaySubline?:
            MatricPoint[]
    /**
     * 延迟提升
     */
    DelayPromote?:
            MatricPoint[]
    /**
     * 子线路延迟提升
     */
    DelayPromoteSubline?:
            MatricPoint[]
    /**
     * 当前连接数
     */
    ConnectCount?:
            MatricPoint[]
    /**
     * 子线路当前连接数
     */
    ConnectCountSubline?:
            MatricPoint[]
}
    
/**
 * ModifyUPathTemplateRequest - 
 */
export interface ModifyUPathTemplateRequest {
    /**
     * 项目ID。请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId:string
    /**
     * 加速线路实例ID
     */
    UPathId:string
    /**
     * 告警指标名称, 所有n的个数必须一致。目前仅允许以下四项：UpathNetworkOut:出向带宽，UpathNetworkIn:入向带宽，UpathNetworkOutUsage:出向带宽使用率，UpathNetworkInUsage:入向带宽使用率
     */
    MetricName?:string[]
    /**
     * 告警阈值，带宽使用率的阈值范围是[50,100]的正整数，带宽告警阈值为1000000的倍数, 如大于2Mbps则告警 阈值应该传 2000000
     */
    Threshold?:number[]
    /**
     * 告警探测周期，单位：秒
     */
    AlarmFrequency?:number[]
    /**
     * 告警组id
     */
    ContactGroupId?:number[]
    /**
     * 比较策略，可选 ['GE','LE']  分别代表不小于和不大于
     */
    Compare?:string[]
    /**
     * 收敛策略，可选范围 ['Exponential','Continuous','Once']，分别对应指数递增、连续告警、单次告警
     */
    AlarmStrategy?:string[]
    /**
     * 告警触发周期（次数）
     */
    TriggerCount?:number[]
}
    
/**
 * DescribeUGA3AreaRequest - 
 */
export interface DescribeUGA3AreaRequest {
    /**
     * 项目ID,如org-xxxx。请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * IP集合，非必填。如果填IP或者域名，会推荐一个地域在返回列表的第一个，源站IP集合，以逗号分隔[127.0.0.1,127.0.0.2]
     */
    IPList?:string
    /**
     * 域名，非必填。如果填IP或者域名，会推荐一个地域在返回列表的第一个
     */
    Domain?:string
}
    
/**
 * DeleteGlobalSSHInstanceRequest - 
 */
export interface DeleteGlobalSSHInstanceRequest {
    /**
     * 项目ID,如org-xxxx。请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId:string
    /**
     * 实例Id,资源的唯一标识
     */
    InstanceId:string
}
    
/**
 * UGAALine - 
 */
export interface UGAALine {
    /**
     * 线路源
     */
    LineFrom:string
    /**
     * 线路目的
     */
    LineTo:string
    /**
     * 线路源中文名称
     */
    LineFromName:string
    /**
     * 线路目的中文名称
     */
    LineToName:string
    /**
     * 线路可售最大带宽
     */
    MaxBandwidth:number
    /**
     * 线路计费Id
     */
    LineId?:string
    /**
     * 子线路信息
     */
    LineDetail?:
            LineDetail[]
}
    
/**
 * DescribeUGAInstanceResponse - 
 */
export interface DescribeUGAInstanceResponse {
    /**
     * 全球加速实例信息列表
     */
    UGAList?:
            UGAAInfo[]
    /**
     * 符合条件的总数
     */
    TotalCount?:number
}
    
/**
 * DeleteUGAForwarderRequest - 
 */
export interface DeleteUGAForwarderRequest {
    /**
     * 项目ID。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId:string
    /**
     * 加速配置实例ID
     */
    UGAId:string
    /**
     * HTTP接入HTTP回源，接入端口。禁用65123端口
     */
    HTTPHTTP?:number[]
    /**
     * HTTPS接入HTTP回源， 接入端口。禁用65123端口
     */
    HTTPSHTTP?:number[]
    /**
     * HTTPS接入HTTPS回源， 接入端口。禁用65123端口
     */
    HTTPSHTTPS?:number[]
    /**
     * WebSocketS接入WebSocketS回源， 接入端口。禁用65123端口
     */
    WSSWSS?:number[]
    /**
     * WebSocket接入WebSocket回源， 接入端口。禁用65123端口
     */
    WSWS?:number[]
    /**
     * WebSocketS接入WebSocket回源， 接入端口。禁用65123端口。
     */
    WSSWS?:number[]
    /**
     * TCP接入端口
     */
    TCP?:number[]
    /**
     * UDP接入端口
     */
    UDP?:number[]
}
    
/**
 * ModifyUPathBandwidthRequest - 
 */
export interface ModifyUPathBandwidthRequest {
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId:string
    /**
     * UPath 加速线路实例Id
     */
    UPathId:string
    /**
     * 线路带宽，单位Mbps。最小1Mbps,最大带宽由 DescribePathXLineConfig 接口获得。如需更大带宽，请联系产品团队。
     */
    Bandwidth:number
}
    
/**
 * GetGlobalSSHUpdatePriceRequest - 
 */
export interface GetGlobalSSHUpdatePriceRequest {
    /**
     * 项目ID,如org-xxxx。请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId:string
    /**
     * 升级后的实例类型。枚举值，Enterprise:企业版；Basic:基础版。
     */
    InstanceType:string
    /**
     * 实例ID，唯一资源标识。从免费版升级到付费版可不填，其他情况必填。
     */
    InstanceId?:string
    /**
     * 购买周期，如果ChargeType为Month，Quantity可以不填默认为0；其他情况必须为正整数。
     */
    Quantity?:number
    /**
     * 计费类型：Dynamic，Month，Year。从免费版升级到付费版必须传，其他情况不需要传
     */
    ChargeType?:string
}
    
/**
 * UPathInfo - 
 */
export interface UPathInfo {
    /**
     * 是否为后付费实例
     */
    PostPaid?:boolean
    /**
     * 计费模式，默认为Month 按月收费,可选范围['Month','Year','Dynamic']
     */
    ChargeType?:string
    /**
     * UPath实例名字
     */
    Name?:string
    /**
     * UPath加速线路实例ID
     */
    UPathId?:string
    /**
     * 带宽，单位Mbps
     */
    Bandwidth?:number
    /**
     * 选择的线路
     */
    LineId?:string
    /**
     * 与该UPath绑定的UGA列表
     */
    UGAList?:
            PathXUGAInfo[]
    /**
     * UPath创建的时间，10位时间戳
     */
    CreateTime?:number
    /**
     * UPath的过期时间，10位时间戳
     */
    ExpireTime?:number
    /**
     * 线路入口名称
     */
    LineFromName?:string
    /**
     * 线路出口名称
     */
    LineToName?:string
    /**
     * 线路出口IP数组
     */
    OutPublicIpList?:
            OutPublicIpInfo[]
}
    
/**
 * GetGlobalSSHUpdatePriceResponse - 
 */
export interface GetGlobalSSHUpdatePriceResponse {
    /**
     * 价格,返回单位为元。正数表示付费升级，负数表示降级退费。
     */
    Price?:number
}
    
/**
 * ForwardArea - 
 */
export interface ForwardArea {
    /**
     * 源站区域代码
     */
    AreaCode:string
    /**
     * 源站区域中文
     */
    Area:string
    /**
     * 国家代码
     */
    CountryCode:string
    /**
     * 国旗unicode
     */
    FlagUnicode:string
    /**
     * 国旗 emoji
     */
    FlagEmoji:string
    /**
     * 大陆代码
     */
    ContinentCode:string
}
    
/**
 * GetUGA3MetricResponse - 
 */
export interface GetUGA3MetricResponse {
    /**
     * 监控数据结果集
     */
    DataSet?:
        UGA3Metric
}
    
/**
 * CreatePathXSSLResponse - 
 */
export interface CreatePathXSSLResponse {
    /**
     * SSL证书的Id
     */
    SSLId:string
}
    
/**
 * PathXUGAInfo - 
 */
export interface PathXUGAInfo {
    /**
     * 加速配置ID
     */
    UGAId?:string
    /**
     * 源站IP列表，多个值由半角英文逗号相隔
     */
    IPList?:string[]
    /**
     * 源站域名
     */
    Domain?:string
}
    
/**
 * UGABindUPathResponse - 
 */
export interface UGABindUPathResponse {
}
    
/**
 * DescribePathXSSLRequest - 
 */
export interface DescribePathXSSLRequest {
    /**
     * 项目ID。请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId:string
    /**
     * SSL证书的Id，不传分页获取证书列表
     */
    SSLId?:string
    /**
     * 不为空则按证书名称、证书域名模糊搜索 分页返回结果
     */
    SearchValue?:string
    /**
     * 最大返回条数，默认100，最大400
     */
    Limit?:number
    /**
     * 偏移值 默认为0
     */
    Offset?:number
}
    
/**
 * DescribePathXLineConfigRequest - 
 */
export interface DescribePathXLineConfigRequest {
    /**
     * 项目ID,如org-xxxx。请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId:string
}
    
/**
 * UPathSet - 
 */
export interface UPathSet {
    /**
     * UPath名字
     */
    UPathName?:string
    /**
     * UPath 实例ID
     */
    UPathId?:string
    /**
     * 带宽 Mbps, 1~800Mbps
     */
    Bandwidth?:number
    /**
     * 线路ID
     */
    LineId?:string
    /**
     * 线路起点中文名字，加速区域
     */
    LineFromName?:string
    /**
     * 线路对端中文名字，源站区域
     */
    LineToName?:string
    /**
     * 线路起点英文代号，加速区域
     */
    LineFrom?:string
    /**
     * 线路对端英文代号，源站区域
     */
    LineTo?:string
}
    
/**
 * OutPublicIpInfo - 
 */
export interface OutPublicIpInfo {
    /**
     *  线路回源节点EIP
     */
    IP?:string
    /**
     * 线路回源节点机房代号
     */
    Area?:string
}
    
/**
 * UpdatePathXWhitelistRequest - 
 */
export interface UpdatePathXWhitelistRequest {
    /**
     * 项目ID,如org-xxxx。请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId:string
    /**
     * GlobalSSH实例ID，资源唯一标识
     */
    InstanceId:string
    /**
     * 白名单规则,例如 "Whitelist.0": "192.168.1.1/24|tcp|22"，"Whitelist.1": "192.168.1.2|tcp|8080:8090"，第一个参数为ip或ip段，第二个参数代表协议（tcp/udp），第三个参数代表端口号或端口范围（使用 ':' 隔开）；可以添加多条规则（递增Whitelist.n字段内的n值）；此接口需要列出全部规则，例如不填则为清空白名单规则，如若需要增量添加，使用InsertPathXWhitelist接口,globalssh 没有端口范围：端口设置成加速端口，协议设置成tcp:ip|tcp|加速端口
     */
    Whitelist?:string[]
}
    
/**
 * UGABindUPathRequest - 
 */
export interface UGABindUPathRequest {
    /**
     * 项目ID。请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId:string
    /**
     * 加速配置实例ID，格式uga-xxxx
     */
    UGAId:string
    /**
     * 加速线路实例ID，格式upath-xxx
     */
    UPathId:string
    /**
     * 代金券
     */
    CouponId?:string
}
    
/**
 * GetUGA3PriceRequest - 
 */
export interface GetUGA3PriceRequest {
    /**
     * 项目ID。请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId:string
    /**
     * 共享带宽大小
     */
    Bandwidth:number
    /**
     * 源站区域
     */
    AreaCode:string
    /**
     * 购买时间数量，当ChargeType为Month时 Quantity默认为0，代表购买至月底。按年按小时必须为大于0
     */
    Quantity?:number
    /**
     * 计费方式，默认按月支付。Month: 按月; Year: 按年; Dynamic: 按小时收
     */
    ChargeType?:string
    /**
     * 加速大区,默认返回所有加速大区价格
     */
    AccelerationArea?:string
}
    
/**
 * PathXSSLSet - 
 */
export interface PathXSSLSet {
    /**
     * SSL证书的Id
     */
    SSLId?:string
    /**
     * SSL证书的名字
     */
    SSLName?:string
    /**
     * 证书域名
     */
    SubjectName?:string
    /**
     * 证书过期时间 时间戳
     */
    ExpireTime?:number
    /**
     * 证书来源，0：用户上传 1: 免费颁发
     */
    SourceType?:number
    /**
     * SSL证书（用户证书、私钥、ca证书合并）内容md5值
     */
    SSLMD5?:string
    /**
     * SSL证书的创建时间 时间戳
     */
    CreateTime?:number
    /**
     * SSL证书绑定的对象
     */
    SSLBindedTargetSet?:
            SSLBindedTargetSet[]
    /**
     * SSL证书内容
     */
    SSLContent?:string
}
    
/**
 * CreateUPathResponse - 
 */
export interface CreateUPathResponse {
    /**
     * 加速线路实例Id
     */
    PathId:string
}
    
/**
 * DeleteUGA3InstanceResponse - 
 */
export interface DeleteUGA3InstanceResponse {
}
    
/**
 * ModifyUGA3BandwidthRequest - 
 */
export interface ModifyUGA3BandwidthRequest {
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId:string
    /**
     * 加速配置实例ID，格式uga3-xxxx
     */
    InstanceId:string
    /**
     * 带宽大小，范围[1,100]，不传则不更新
     */
    Bandwidth?:number
    /**
     * 需要全地域可用的代金券
     */
    CouponId?:string
}
    
/**
 * GetGlobalSSHPriceResponse - 
 */
export interface GetGlobalSSHPriceResponse {
    /**
     * 价格,返回单位为元
     */
    Price?:number
}
    
/**
 * GetUGA3PriceResponse - 
 */
export interface GetUGA3PriceResponse {
    /**
     * 加速大区对应价格
     */
    UGA3Price:
            UGA3Price[]
}
    
/**
 * CreateUGAForwarderResponse - 
 */
export interface CreateUGAForwarderResponse {
}
    
/**
 * ModifyUGA3InstanceResponse - 
 */
export interface ModifyUGA3InstanceResponse {
}
