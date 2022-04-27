


    
/**
 * UnetBandwidthUsageEIPSet - 
 */
export interface UnetBandwidthUsageEIPSet {
    /**
     * 最近5分钟带宽用量, 单位Mbps
     */
    CurBandwidth?:number
    /**
     * 弹性IP资源ID
     */
    EIPId?:string
}
    
/**
 * UnBindEIPResponse - 
 */
export interface UnBindEIPResponse {
}
    
/**
 * DescribeShareBandwidthUpdatePriceRequest - 
 */
export interface DescribeShareBandwidthUpdatePriceRequest {
    /**
     * 地域。 参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Region:string
    /**
     * 共享带宽Id
     */
    ShareBandwidthId:string
    /**
     * 共享带宽值
     */
    ShareBandwidth:number
}
    
/**
 * DescribeShareBandwidthRequest - 
 */
export interface DescribeShareBandwidthRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * 需要返回的共享带宽Id
     */
    ShareBandwidthIds?:string[]
}
    
/**
 * DescribeEIPResponse - 
 */
export interface DescribeEIPResponse {
    /**
     * 满足条件的弹性IP总数
     */
    TotalCount?:number
    /**
     * 未绑定的弹性IP总数
     */
    UnbindCount?:number
    /**
     * 满足条件的弹性IP带宽总和, 单位Mbps
     */
    TotalBandwidth?:number
    /**
     * 弹性IP列表, 每项参数详见 UnetEIPSet
     */
    EIPSet?:
            UnetEIPSet[]
}
    
/**
 * AssociateEIPWithShareBandwidthResponse - 
 */
export interface AssociateEIPWithShareBandwidthResponse {
}
    
/**
 * GetEIPPriceRequest - 
 */
export interface GetEIPPriceRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * 弹性IP的线路如下: 国际: International BGP: Bgp 各地域允许的线路参数如下: cn-sh1: Bgp cn-sh2: Bgp cn-gd: Bgp cn-bj1: Bgp cn-bj2: Bgp hk: International us-ca: International th-bkk: International kr-seoul:International us-ws:International ge-fra:International sg:International tw-kh:International.其他海外线路均为 International,泉州为移动单线cn-qz:ChinaMobile
     */
    OperatorName:string
    /**
     * 弹性IP的外网带宽, 单位为Mbps, 范围 [0-800]
     */
    Bandwidth:number
    /**
     * 付费方式, 枚举值为: Year, 按年付费; Month, 按月付费; Dynamic, 按时付费; 默认为获取三种价格
     */
    ChargeType?:string
    /**
     * 弹性IP计费方式r. 枚举值为: Traffic, 流量计费; Bandwidth, 带宽计费; "ShareBandwidth",共享带宽模式. 默认为Bandwidth
     */
    PayMode?:string
    /**
     * 购买时长。默认: 1。按小时购买(Dynamic)时无需此参数。 月付时，此参数传0，代表了购买至月末
     */
    Quantity?:number
}
    
/**
 * DeleteFirewallRequest - 
 */
export interface DeleteFirewallRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * 防火墙资源ID
     */
    FWId:string
}
    
/**
 * UnetEIPSet - 
 */
export interface UnetEIPSet {
    /**
     * 弹性IP的资源ID
     */
    EIPId?:string
    /**
     * 外网出口权重, 默认为50, 范围[0-100]
     */
    Weight?:number
    /**
     * 带宽模式, 枚举值为: 0: 非共享带宽模式, 1: 共享带宽模式
     */
    BandwidthType?:number
    /**
     * 弹性IP的带宽, 单位为Mbps, 当BandwidthType=1时, 该处显示为共享带宽值. 当BandwidthType=0时, 该处显示这个弹性IP的带宽.
     */
    Bandwidth?:number
    /**
     * 弹性IP的资源绑定状态, 枚举值为: used: 已绑定, free: 未绑定, freeze: 已冻结
     */
    Status?:string
    /**
     * 付费方式, 枚举值为: Year, 按年付费; Month, 按月付费; Dynamic, 按小时付费; Trial, 试用. 按小时付费和试用这两种付费模式需要开通权限.
     */
    ChargeType?:string
    /**
     * 弹性IP的创建时间, 格式为Unix Timestamp
     */
    CreateTime?:number
    /**
     * 弹性IP的到期时间, 格式为Unix Timestamp
     */
    ExpireTime?:number
    /**
     * 弹性IP的详细信息列表, 具体结构见下方 UnetEIPResourceSet
     */
    Resource?:
        UnetEIPResourceSet
    /**
     * 弹性IP的详细信息列表, 具体结构见下方 UnetEIPAddrSet
     */
    EIPAddr?:
            UnetEIPAddrSet[]
    /**
     * 弹性IP的名称,缺省值为 "EIP"
     */
    Name?:string
    /**
     * 弹性IP的业务组标识, 缺省值为 "Default"
     */
    Tag?:string
    /**
     * 弹性IP的备注, 缺省值为 ""
     */
    Remark?:string
    /**
     * 弹性IP的计费模式, 枚举值为: "Bandwidth", 带宽计费; "Traffic", 流量计费; "ShareBandwidth",共享带宽模式. 默认为 "Bandwidth".
     */
    PayMode?:string
    /**
     * 共享带宽信息 参见 ShareBandwidthSet
     */
    ShareBandwidthSet?:
        ShareBandwidthSet
    /**
     * 弹性IP是否到期
     */
    Expire?:boolean
}
    
/**
 * ResizeShareBandwidthRequest - 
 */
export interface ResizeShareBandwidthRequest {
    /**
     * 地域。 参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * 带宽值，单位为Mb，范围 [20-5000] (最大值受地域限制)
     */
    ShareBandwidth:number
    /**
     * 共享带宽的Id
     */
    ShareBandwidthId:string
}
    
/**
 * AllocateEIPResponse - 
 */
export interface AllocateEIPResponse {
    /**
     * 申请到的EIP资源详情 参见 UnetAllocateEIPSet
     */
    EIPSet?:
            UnetAllocateEIPSet[]
}
    
/**
 * GrantFirewallResponse - 
 */
export interface GrantFirewallResponse {
}
    
/**
 * DescribeFirewallResourceResponse - 
 */
export interface DescribeFirewallResourceResponse {
    /**
     * 资源列表，见 ResourceSet
     */
    ResourceSet?:
            ResourceSet[]
    /**
     * 绑定资源总数
     */
    TotalCount?:number
}
    
/**
 * UnetAllocateEIPSet - 
 */
export interface UnetAllocateEIPSet {
    /**
     * 申请到的EIP资源ID
     */
    EIPId?:string
    /**
     * 申请到的IPv4地址. 
     */
    EIPAddr?:
            UnetEIPAddrSet[]
}
    
/**
 * SetEIPPayModeResponse - 
 */
export interface SetEIPPayModeResponse {
}
    
/**
 * BindEIPRequest - 
 */
export interface BindEIPRequest {
    /**
     * 地域
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写
     */
    ProjectId?:string
    /**
     * 弹性IP的资源Id
     */
    EIPId:string
    /**
     * 弹性IP请求绑定的资源类型, 枚举值为: uhost: 云主机; ulb, 负载均衡器 upm: 物理机; hadoophost: 大数据集群;fortresshost：堡垒机；udockhost：容器；udhost：私有专区主机；natgw：natgw；udb：udb；vpngw：ipsec vpn；ucdr：云灾备；dbaudit：数据库审计；uni：虚拟网卡；cube，Cube容器。如果EIP为普通带宽计费，且带宽值高于2G，则只允许绑定在快杰型云主机和ULB
     */
    ResourceType:string
    /**
     * 弹性IP请求绑定的资源ID
     */
    ResourceId:string
}
    
/**
 * AllocateShareBandwidthResponse - 
 */
export interface AllocateShareBandwidthResponse {
    /**
     * 共享带宽资源Id
     */
    ShareBandwidthId?:string
}
    
/**
 * SetEIPPayModeRequest - 
 */
export interface SetEIPPayModeRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * 弹性IP的资源Id
     */
    EIPId:string
    /**
     * 计费模式. 枚举值："Traffic", 流量计费模式; "Bandwidth", 带宽计费模式
     */
    PayMode:string
    /**
     * 调整的目标带宽值, 单位Mbps. 各地域的带宽值范围如下: 流量计费[1-200],其余情况[1-800]
     */
    Bandwidth:number
}
    
/**
 * DeleteFirewallResponse - 
 */
export interface DeleteFirewallResponse {
}
    
/**
 * DisassociateFirewallRequest - 
 */
export interface DisassociateFirewallRequest {
    /**
     * 地域。 参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * 防火墙ID
     */
    FWId:string
    /**
     * 需要解绑的资源ID
     */
    ResourceId:string
    /**
     * 资源类型：ULB 表示负载均衡
     */
    ResourceType:string
}
    
/**
 * UnetShareBandwidthSet - 
 */
export interface UnetShareBandwidthSet {
    /**
     * 共享带宽类型
     */
    IPVersion:string
    /**
     * 共享带宽值(预付费)/共享带宽峰值(后付费), 单位Mbps
     */
    ShareBandwidth?:number
    /**
     * 共享带宽的资源ID
     */
    ShareBandwidthId?:string
    /**
     * 付费方式, 预付费:Year 按年,Month 按月,Dynamic 按需;后付费:PostPay(按月)
     */
    ChargeType?:string
    /**
     * 创建时间, 格式为Unix Timestamp
     */
    CreateTime?:number
    /**
     * 过期时间, 格式为Unix Timestamp
     */
    ExpireTime?:number
    /**
     * EIP信息,详情见 EIPSetData
     */
    EIPSet?:
            EIPSetData[]
    /**
     * 共享带宽名称
     */
    Name?:string
}
    
/**
 * GetEIPUpgradePriceRequest - 
 */
export interface GetEIPUpgradePriceRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * 弹性IP的资源ID
     */
    EIPId:string
    /**
     * 弹性IP的外网带宽, 单位为Mbps, 范围 [1-800]
     */
    Bandwidth:number
}
    
/**
 * DescribeBandwidthPackageRequest - 
 */
export interface DescribeBandwidthPackageRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * 返回数据分页值, 取值范围为 [0,10000000] 之间的整数, 默认为20
     */
    Limit?:number
    /**
     * 返回数据偏移量, 默认为0
     */
    Offset?:number
}
    
/**
 * DeleteBandwidthPackageResponse - 
 */
export interface DeleteBandwidthPackageResponse {
}
    
/**
 * DescribeEIPRequest - 
 */
export interface DescribeEIPRequest {
    /**
     * 地域
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写
     */
    ProjectId?:string
    /**
     * 弹性IP的资源ID如果为空, 则返回当前 Region中符合条件的的所有EIP
     */
    EIPIds?:string[]
    /**
     * 数据偏移量, 默认为0
     */
    Offset?:number
    /**
     * 数据分页值, 默认为20
     */
    Limit?:number
    /**
     * IP地址，支持通过ip查询，如果ip与EIP都传，会取并集查询
     */
    IPs?:string[]
}
    
/**
 * CreateFirewallRequest - 
 */
export interface CreateFirewallRequest {
    /**
     * 地域
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写
     */
    ProjectId?:string
    /**
     * 防火墙规则，例如：TCP|22|192.168.1.1/22|DROP|LOW|禁用22端口，第一个参数代表协议：第二个参数代表端口号，第三个参数为ip，第四个参数为ACCEPT（接受）和DROP（拒绝），第五个参数优先级：HIGH（高），MEDIUM（中），LOW（低），第六个参数为该条规则的自定义备注,bj1不支持添加备注
     */
    Rule:string[]
    /**
     * 防火墙名称
     */
    Name:string
    /**
     * 防火墙业务组，默认为Default
     */
    Tag?:string
    /**
     * 防火墙描述，默认为空
     */
    Remark?:string
}
    
/**
 * ModifyEIPBandwidthResponse - 
 */
export interface ModifyEIPBandwidthResponse {
}
    
/**
 * ResourceSet - 
 */
export interface ResourceSet {
    /**
     * 可用区
     */
    Zone?:number
    /**
     * 资源绑定的虚拟网卡的名称
     */
    SubResourceName:string
    /**
     * 资源绑定的虚拟网卡的ID
     */
    SubResourceId:string
    /**
     * 资源绑定的虚拟网卡的类型，“uni”，虚拟网卡。
     */
    SubResourceType:string
    /**
     * 名称
     */
    Name?:string
    /**
     * 内网IP
     */
    PrivateIP?:string
    /**
     * 备注
     */
    Remark?:string
    /**
     * 绑定该防火墙的资源id
     */
    ResourceID?:string
    /**
     * 绑定防火墙组的资源类型。"unatgw"，NAT网关； "uhost"，云主机； "upm"，物理云主机； "hadoophost"，hadoop节点； "fortresshost"，堡垒机； "udhost"，私有专区主机；"udockhost"，容器；"dbaudit"，数据库审计，“uni”，虚拟网卡。
     */
    ResourceType?:string
    /**
     * 状态
     */
    Status?:number
    /**
     * 业务组
     */
    Tag?:string
}
    
/**
 * DeleteBandwidthPackageRequest - 
 */
export interface DeleteBandwidthPackageRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * 带宽包资源ID
     */
    BandwidthPackageId:string
}
    
/**
 * GetEIPPayModeResponse - 
 */
export interface GetEIPPayModeResponse {
    /**
     * EIP的计费模式, 参见 EIPPayModeSet
     */
    EIPPayMode?:
            EIPPayModeSet[]
}
    
/**
 * CreateBandwidthPackageResponse - 
 */
export interface CreateBandwidthPackageResponse {
    /**
     * 所创建带宽包的资源ID
     */
    BandwidthPackageId?:string
}
    
/**
 * ModifyEIPBandwidthRequest - 
 */
export interface ModifyEIPBandwidthRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * 弹性IP的资源ID
     */
    EIPId:string
    /**
     * 弹性IP的外网带宽, 单位为Mbps. 各地域的带宽值范围如下：流量计费[1-200],带宽计费[1-800]
     */
    Bandwidth:number
}
    
/**
 * DisassociateEIPWithShareBandwidthResponse - 
 */
export interface DisassociateEIPWithShareBandwidthResponse {
}
    
/**
 * UpdateFirewallResponse - 
 */
export interface UpdateFirewallResponse {
    /**
     * 防火墙id
     */
    FWId?:string
}
    
/**
 * EIPSetData - 
 */
export interface EIPSetData {
    /**
     * EIP带宽值
     */
    Bandwidth?:number
    /**
     * EIP的IP信息，详情见EIPAddrSet
     */
    EIPAddr?:
            EIPAddrSet[]
    /**
     * EIP资源Id
     */
    EIPId?:string
}
    
/**
 * DescribeShareBandwidthUpdatePriceResponse - 
 */
export interface DescribeShareBandwidthUpdatePriceResponse {
    /**
     * 共享带宽升降级价格
     */
    Price:number
}
    
/**
 * ReleaseShareBandwidthResponse - 
 */
export interface ReleaseShareBandwidthResponse {
}
    
/**
 * DescribeBandwidthUsageRequest - 
 */
export interface DescribeBandwidthUsageRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * 返回数据分页值, 取值范围为 [0,10000000] 之间的整数, 默认为20
     */
    Limit?:number
    /**
     * 返回数据偏移量, 默认为0
     */
    OffSet?:number
    /**
     * 弹性IP的资源Id. 如果为空, 则返回当前 Region中符合条件的所有EIP的带宽用量, n为自然数
     */
    EIPIds?:string[]
}
    
/**
 * DisassociateEIPWithShareBandwidthRequest - 
 */
export interface DisassociateEIPWithShareBandwidthRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * 共享带宽ID
     */
    ShareBandwidthId:string
    /**
     * 移出共享带宽后，EIP的外网带宽, 单位为Mbps. 各地域带宽范围如下：  流量计费[1-200],带宽计费[1-800]
     */
    Bandwidth:number
    /**
     * EIP的资源Id；默认移出该共享带宽下所有的EIP
     */
    EIPIds?:string[]
    /**
     * 移出共享带宽后，EIP的计费模式. 枚举值: "Traffic", 流量计费; "Bandwidth", 带宽计费;  默认为 "Bandwidth".
     */
    PayMode?:string
    /**
     * 共享带宽类型，IPv4或者IPv6，不传默认IPv4
     */
    IPVersion?:string
}
    
/**
 * GetThroughputDailyBillingInfoResponse - 
 */
export interface GetThroughputDailyBillingInfoResponse {
    /**
     * EIP流量计费信息，详见模型ThroughputDailyBillingInfo
     */
    Stats?:
            ThroughputDailyBillingInfo[]
    /**
     * 计费总流量
     */
    TotalOut?:number
    /**
     * 资源ID
     */
    EIPId?:string
}
    
/**
 * UpdateFirewallRequest - 
 */
export interface UpdateFirewallRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * 防火墙资源ID
     */
    FWId:string
    /**
     * 防火墙规则，例如：TCP|22|192.168.1.1/22|DROP|LOW|禁用22端口，第一个参数代表协议：第二个参数代表端口号，第三个参数为ip，第四个参数为ACCEPT（接受）和DROP（拒绝），第五个参数优先级：HIGH（高），MEDIUM（中），LOW（低），第六个参数为该条规则的自定义备注
     */
    Rule:string[]
}
    
/**
 * UpdateEIPAttributeResponse - 
 */
export interface UpdateEIPAttributeResponse {
}
    
/**
 * UnetEIPResourceSet - 
 */
export interface UnetEIPResourceSet {
    /**
     * 已绑定的资源类型, 枚举值为: uhost, 云主机；natgw：NAT网关；ulb：负载均衡器；upm: 物理机; hadoophost: 大数据集群;fortresshost：堡垒机；udockhost：容器；udhost：私有专区主机；vpngw：IPSec VPN；ucdr：云灾备；dbaudit：数据库审计，uni：虚拟网卡。
     */
    ResourceType?:string
    /**
     * 已绑定的资源名称
     */
    ResourceName?:string
    /**
     * 已绑定资源的资源ID
     */
    ResourceID?:string
    /**
     * 资源绑定的虚拟网卡的类型。uni，虚拟网卡。
     */
    SubResourceType?:string
    /**
     * 资源绑定的虚拟网卡的名称
     */
    SubResourceName?:string
    /**
     * 资源绑定的虚拟网卡的ID
     */
    SubResourceId?:string
    /**
     * 弹性IP的资源ID
     */
    EIPId?:string
}
    
/**
 * CreateBandwidthPackageRequest - 
 */
export interface CreateBandwidthPackageRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 带宽大小(单位Mbps), 取值范围[2,800] (最大值受地域限制)
     */
    Bandwidth:number
    /**
     * 所绑定弹性IP的资源ID
     */
    EIPId:string
    /**
     * 带宽包有效时长, 取值范围为大于0的整数, 即该带宽包在EnableTime到 EnableTime+TimeRange时间段内生效
     */
    TimeRange:number
    /**
     * 生效时间, 格式为 Unix timestamp, 默认为立即开通
     */
    EnableTime?:number
    /**
     * 代金券ID
     */
    CouponId?:string
}
    
/**
 * UpdateFirewallAttributeResponse - 
 */
export interface UpdateFirewallAttributeResponse {
}
    
/**
 * DisassociateFirewallResponse - 
 */
export interface DisassociateFirewallResponse {
}
    
/**
 * ModifyEIPWeightResponse - 
 */
export interface ModifyEIPWeightResponse {
}
    
/**
 * CreateFirewallResponse - 
 */
export interface CreateFirewallResponse {
    /**
     * 防火墙ID
     */
    FWId?:string
}
    
/**
 * EIPPayModeSet - 
 */
export interface EIPPayModeSet {
    /**
     * EIP的资源ID
     */
    EIPId?:string
    /**
     * EIP的计费模式. 枚举值为：Bandwidth, 带宽计费;Traffic, 流量计费; "ShareBandwidth",共享带宽模式
     */
    EIPPayMode?:string
}
    
/**
 * UnetEIPAddrSet - 
 */
export interface UnetEIPAddrSet {
    /**
     * 运营商信息如: 国际: International, BGP: BGP
     */
    OperatorName?:string
    /**
     * IP地址
     */
    IP?:string
}
    
/**
 * EIPAddrSet - 
 */
export interface EIPAddrSet {
    /**
     * 运营商信息, 枚举值为:  BGP: BGP; International: 国际.
     */
    OperatorName?:string
    /**
     * 弹性IP地址
     */
    IP?:string
}
    
/**
 * ReleaseShareBandwidthRequest - 
 */
export interface ReleaseShareBandwidthRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * 共享带宽ID
     */
    ShareBandwidthId:string
    /**
     * 关闭共享带宽后，各EIP恢复为的带宽值
     */
    EIPBandwidth:number
    /**
     * 默认为 Bandwidth 带宽计费
     */
    PayMode?:string
}
    
/**
 * AllocateShareBandwidthRequest - 
 */
export interface AllocateShareBandwidthRequest {
    /**
     * 地域。 参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。
     */
    ProjectId?:string
    /**
     * 共享带宽名字
     */
    Name:string
    /**
     * 付费方式:Year 按年,Month 按月,Dynamic 按时;
     */
    ChargeType:string
    /**
     * 共享带宽值
     */
    ShareBandwidth:number
    /**
     * 购买时长
     */
    Quantity?:number
    /**
     * 共享带宽类型，IPv4或者IPv6，不传默认IPv4
     */
    IPVersion?:string
}
    
/**
 * DescribeShareBandwidthPriceRequest - 
 */
export interface DescribeShareBandwidthPriceRequest {
    /**
     * 地域。 参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * 付费方式, 预付费:Year 按年,Month 按月,Dynamic 按需;
     */
    ChargeType:string
    /**
     * 共享带宽值
     */
    ShareBandwidth:number
    /**
     * 购买数量
     */
    Quantity?:number
    /**
     * 香港地域支持：BGPPro和International。其他地域无需填写该字段
     */
    OperatorName?:string
}
    
/**
 * ShareBandwidthSet - 
 */
export interface ShareBandwidthSet {
    /**
     * 共享带宽带宽值
     */
    ShareBandwidth?:number
    /**
     * 共享带宽的资源名称
     */
    ShareBandwidthName?:string
    /**
     * 共享带宽ID
     */
    ShareBandwidthId?:string
}
    
/**
 * GetEIPPayModeRequest - 
 */
export interface GetEIPPayModeRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * 弹性IP的资源Id
     */
    EIPId:string[]
}
    
/**
 * UpdateFirewallAttributeRequest - 
 */
export interface UpdateFirewallAttributeRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * 防火墙资源ID
     */
    FWId:string
    /**
     * 防火墙名称，默认为空，为空则不做修改。Name,Tag,Remark必须填写1个及以上
     */
    Name?:string
    /**
     * 防火墙业务组，默认为空，为空则不做修改。Name,Tag,Remark必须填写1个及以上
     */
    Tag?:string
    /**
     * 防火墙备注，默认为空，为空则不做修改。Name,Tag,Remark必须填写1个及以上
     */
    Remark?:string
}
    
/**
 * UnetBandwidthPackageSet - 
 */
export interface UnetBandwidthPackageSet {
    /**
     * 带宽包的资源ID
     */
    BandwidthPackageId?:string
    /**
     * 生效时间, 格式为 Unix Timestamp
     */
    EnableTime?:number
    /**
     * 失效时间, 格式为 Unix Timestamp
     */
    DisableTime?:number
    /**
     * 创建时间, 格式为 Unix Timestamp
     */
    CreateTime?:number
    /**
     * 带宽包的临时带宽值, 单位Mbps
     */
    Bandwidth?:number
    /**
     * 带宽包所绑定弹性IP的资源ID
     */
    EIPId?:string
    /**
     * 带宽包所绑定弹性IP的详细信息,只有当EIPId对应双线IP时, EIPAddr的长度为2, 其他情况, EIPAddr长度均为1.参见 EIPAddrSet
     */
    EIPAddr?:
            EIPAddrSet[]
}
    
/**
 * AssociateEIPWithShareBandwidthRequest - 
 */
export interface AssociateEIPWithShareBandwidthRequest {
    /**
     * 地域。
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。
     */
    ProjectId?:string
    /**
     * 要加入共享带宽的EIP的资源Id
     */
    EIPIds:string[]
    /**
     * 共享带宽ID
     */
    ShareBandwidthId:string
    /**
     * 共享带宽类型，IPv4或者IPv6，不传默认IPv4
     */
    IPVersion?:string
}
    
/**
 * DescribeShareBandwidthResponse - 
 */
export interface DescribeShareBandwidthResponse {
    /**
     * 共享带宽信息组 参见 UnetShareBandwidthSet
     */
    DataSet?:
            UnetShareBandwidthSet[]
    /**
     * 符合条件的共享带宽总数，大于等于返回DataSet长度
     */
    TotalCount?:number
}
    
/**
 * GetEIPUpgradePriceResponse - 
 */
export interface GetEIPUpgradePriceResponse {
    /**
     * 调整带宽后的EIP价格, 单位为"元", 如需退费此处为负值
     */
    Price?:number
}
    
/**
 * EIPPriceDetailSet - 
 */
export interface EIPPriceDetailSet {
    /**
     * 弹性IP付费方式
     */
    ChargeType?:string
    /**
     * 购买弹性IP的实际价格, 单位"元"
     */
    Price?:number
    /**
     * 弹性IP的原价，单位“元”
     */
    OriginalPrice?:number
    /**
     * 资源有效期, 以Unix Timestamp表示
     */
    PurchaseValue?:number
}
    
/**
 * GrantFirewallRequest - 
 */
export interface GrantFirewallRequest {
    /**
     * 地域。 参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * 防火墙资源ID
     */
    FWId:string
    /**
     * 绑定防火墙组的资源类型，默认为全部资源类型。枚举值为："unatgw"，NAT网关； "uhost"，云主机； "upm"，物理云主机； "hadoophost"，hadoop节点； "fortresshost"，堡垒机； "udhost"，私有专区主机；"udockhost"，容器；"dbaudit"，数据库审计，”uni“，虚拟网卡，“cube”，Cube容器实例。
     */
    ResourceType:string
    /**
     * 所应用资源ID
     */
    ResourceId:string
}
    
/**
 * DescribeFirewallResourceRequest - 
 */
export interface DescribeFirewallResourceRequest {
    /**
     * 地域。 参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * 防火墙ID
     */
    FWId:string
    /**
     * 返回数据长度，默认为20，最大1000
     */
    Limit?:number
    /**
     * 列表起始位置偏移量，默认为0
     */
    Offset?:number
}
    
/**
 * DescribeFirewallResponse - 
 */
export interface DescribeFirewallResponse {
    /**
     * 获取的防火墙组详细信息 参见 FirewallDataSet
     */
    DataSet?:
            FirewallDataSet[]
    /**
     * 防火墙资源数量
     */
    TotalCount?:number
}
    
/**
 * ModifyEIPWeightRequest - 
 */
export interface ModifyEIPWeightRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * 弹性IP的资源ID
     */
    EIPId:string
    /**
     * 外网出口权重, 范围[0-100] 取值为0时, 该弹性IP不会被使用. 取值为100时, 同主机下只会使用这个弹性IP，其他弹性IP不会被使用 请勿将多个绑定在同一资源的弹性IP设置为相同权重
     */
    Weight:number
}
    
/**
 * DescribeBandwidthUsageResponse - 
 */
export interface DescribeBandwidthUsageResponse {
    /**
     * EIPSet中的元素个数
     */
    TotalCount?:number
    /**
     * 单个弹性IP的带宽用量详细信息, 详见 UnetBandwidthUsageEIPSet, 如没有弹性IP资源则没有该返回值。
     */
    EIPSet?:
            UnetBandwidthUsageEIPSet[]
}
    
/**
 * UnBindEIPRequest - 
 */
export interface UnBindEIPRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * 弹性IP的资源Id
     */
    EIPId:string
    /**
     * 弹性IP请求解绑的资源类型, 枚举值为: uhost: 云主机; ulb, 负载均衡器 upm: 物理机; hadoophost: 大数据集群;fortresshost：堡垒机；udockhost：容器；udhost：私有专区主机；natgw：NAT网关；udb：udb；vpngw：ipsec vpn；ucdr：云灾备；dbaudit：数据库审计；
     */
    ResourceType:string
    /**
     * 弹性IP请求解绑的资源ID
     */
    ResourceId:string
}
    
/**
 * ReleaseEIPRequest - 
 */
export interface ReleaseEIPRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * 弹性IP的资源ID
     */
    EIPId:string
}
    
/**
 * ReleaseEIPResponse - 
 */
export interface ReleaseEIPResponse {
}
    
/**
 * GetEIPPriceResponse - 
 */
export interface GetEIPPriceResponse {
    /**
     * 弹性IP价格详情 详情见 EIPPriceDetailSet
     */
    PriceSet?:
            EIPPriceDetailSet[]
}
    
/**
 * AllocateEIPRequest - 
 */
export interface AllocateEIPRequest {
    /**
     * 地域。
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 
     */
    ProjectId?:string
    /**
     * 弹性IP线路，枚举值：国际线路， International；BGP线路：Bgp；精品BGP：BGPPro。使用BGP线路的地域：北京二、上海金融云、上海二、广州等，其他地域均使用国际线路。使用BGPPro线路的地域：香港
     */
    OperatorName:string
    /**
     * 弹性IP的外网带宽, 单位为Mbps. 共享带宽模式必须指定0M带宽, 非共享带宽模式必须指定非0Mbps带宽. 各地域非共享带宽的带宽范围如下： 流量计费[1-300]，带宽计费[1-10000]
     */
    Bandwidth:number
    /**
     * 业务组名称, 默认为 "Default"
     */
    Tag?:string
    /**
     * 付费方式, 枚举值为: Year, 按年付费; Month, 按月付费; Dynamic, 按时付费，默认为按月付费。
     */
    ChargeType?:string
    /**
     * 购买的时长, 默认: 1
     */
    Quantity?:number
    /**
     * 弹性IP的计费模式. 枚举值: "Traffic", 流量计费; "Bandwidth", 带宽计费; "ShareBandwidth",共享带宽模式. 默认为 "Bandwidth".“PostAccurateBandwidth”：带宽后付费模式
     */
    PayMode?:string
    /**
     * 绑定的共享带宽Id,仅当PayMode为ShareBandwidth时有效
     */
    ShareBandwidthId?:string
    /**
     * 弹性IP的名称, 默认为 "EIP"
     */
    Name?:string
    /**
     * 购买EIP数量，默认值为1
     */
    Count?:number
    /**
     * 弹性IP的备注, 默认为空
     */
    Remark?:string
    /**
     * 代金券ID, 默认不使用
     */
    CouponId?:string
}
    
/**
 * UpdateEIPAttributeRequest - 
 */
export interface UpdateEIPAttributeRequest {
    /**
     * 地域。 参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * EIP资源ID
     */
    EIPId:string
    /**
     * 名字（Name Tag Remark都为空则报错）
     */
    Name?:string
    /**
     * 业务
     */
    Tag?:string
    /**
     * 备注
     */
    Remark?:string
}
    
/**
 * DescribeShareBandwidthPriceResponse - 
 */
export interface DescribeShareBandwidthPriceResponse {
    /**
     * 共享带宽总价格
     */
    TotalPrice?:number
}
    
/**
 * BindEIPResponse - 
 */
export interface BindEIPResponse {
}
    
/**
 * ThroughputDailyBillingInfo - 
 */
export interface ThroughputDailyBillingInfo {
    /**
     * 计费开始时间
     */
    StartTime?:number
    /**
     * 计费结束时间
     */
    EndTime?:number
    /**
     * 计费流量，单位“GB”
     */
    QuantityOut?:number
    /**
     * 是否已计费，“Yes”或者“No”
     */
    BillingState?:string
}
    
/**
 * FirewallRuleSet - 
 */
export interface FirewallRuleSet {
    /**
     * 源地址
     */
    SrcIP?:string
    /**
     * 优先级
     */
    Priority?:string
    /**
     * 协议类型
     */
    ProtocolType?:string
    /**
     * 目标端口
     */
    DstPort?:string
    /**
     * 防火墙动作
     */
    RuleAction?:string
    /**
     * 防火墙规则备注
     */
    Remark?:string
}
    
/**
 * ResizeShareBandwidthResponse - 
 */
export interface ResizeShareBandwidthResponse {
}
    
/**
 * GetThroughputDailyBillingInfoRequest - 
 */
export interface GetThroughputDailyBillingInfoRequest {
    /**
     * 地域。 参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * EIP的资源ID
     */
    EIPId:string
    /**
     * 查询开始时间时间戳
     */
    StartTime:number
    /**
     * 查询结束时间时间戳
     */
    EndTime:number
}
    
/**
 * FirewallDataSet - 
 */
export interface FirewallDataSet {
    /**
     * 防火墙ID
     */
    FWId:string
    /**
     * 安全组ID（即将废弃）
     */
    GroupId:string
    /**
     * 防火墙名称
     */
    Name?:string
    /**
     * 防火墙业务组
     */
    Tag?:string
    /**
     * 防火墙备注
     */
    Remark?:string
    /**
     * 防火墙绑定资源数量
     */
    ResourceCount?:number
    /**
     * 防火墙组创建时间，格式为Unix Timestamp
     */
    CreateTime?:number
    /**
     * 防火墙组类型，枚举值为： "user defined", 用户自定义防火墙； "recommend web", 默认Web防火墙； "recommend non web", 默认非Web防火墙
     */
    Type?:string
    /**
     * 防火墙组中的规则列表，参见 FirewallRuleSet
     */
    Rule?:
            FirewallRuleSet[]
}
    
/**
 * DescribeFirewallRequest - 
 */
export interface DescribeFirewallRequest {
    /**
     * 地域
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写
     */
    ProjectId?:string
    /**
     * 防火墙ID，默认为返回所有防火墙
     */
    FWId?:string
    /**
     * 绑定防火墙组的资源类型，默认为全部资源类型。枚举值为："unatgw"，NAT网关； "uhost"，云主机；“uni”，虚拟网卡； "upm"，物理云主机； "hadoophost"，hadoop节点； "fortresshost"，堡垒机； "udhost"，私有专区主机；"udockhost"，容器；"dbaudit"，数据库审计.
     */
    ResourceType?:string
    /**
     * 绑定防火墙组的资源ID
     */
    ResourceId?:string
    /**
     * 返回数据长度，默认为20，最大10000000
     */
    Limit?:number
    /**
     * 列表起始位置偏移量，默认为0
     */
    Offset?:number
}
    
/**
 * DescribeBandwidthPackageResponse - 
 */
export interface DescribeBandwidthPackageResponse {
    /**
     * 满足条件的带宽包总数
     */
    TotalCount?:number
    /**
     * 带宽包详细信息, 参见 UnetBandwidthPackageSet
     */
    DataSets?:
            UnetBandwidthPackageSet[]
}
