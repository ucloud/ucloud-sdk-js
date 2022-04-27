


    
/**
 * ModifyUDPNBandwidthResponse - 
 */
export interface ModifyUDPNBandwidthResponse {
}
    
/**
 * DescribeUDPNRequest - 
 */
export interface DescribeUDPNRequest {
    /**
     * 地域。 参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Region?:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * 申请到的 UDPN 资源 ID。若为空，则查询该用户在机房所有的专线信息。非默认项目资源，需填写ProjectId
     */
    UDPNId?:string
    /**
     * 列表起始位置偏移量，默认为 0
     */
    Offset?:number
    /**
     * 返回数据长度，默认为 20
     */
    Limit?:number
}
    
/**
 * ReleaseUDPNRequest - 
 */
export interface ReleaseUDPNRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region?:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * UDPN 资源 Id
     */
    UDPNId:string
}
    
/**
 * ModifyUDPNBandwidthRequest - 
 */
export interface ModifyUDPNBandwidthRequest {
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * UDPN Id
     */
    UDPNId:string
    /**
     * 调整后专线带宽, 单位为Mbps，取值范围为大于等于2且小于等于1000([2-1000])的整数
     */
    Bandwidth:number
    /**
     * 代金劵 ID
     */
    CouponId?:string
}
    
/**
 * UDPNLineSet - 
 */
export interface UDPNLineSet {
    /**
     * 支持UDPN的地域之一，北京二：cn-bj2, 上海二：cn-sh2, 广东：cn-gd, 亚太： hk, 上海一：cn-sh1, 法兰克福：ge-fra, 新加坡：sg, 华盛顿：us-ws, 洛杉矶：us-la， 东京：jpn-tky
     */
    LocalRegion:string
    /**
     * 支持UDPN的地域之一，北京二：cn-bj2, 上海二：cn-sh2, 广东：cn-gd, 亚太： hk, 上海一：cn-sh1, 法兰克福：ge-fra, 新加坡：sg, 华盛顿：us-ws, 洛杉矶：us-la， 东京：jpn-tky
     */
    RemoteRegion:string
    /**
     * 线路带宽上限,单位 M
     */
    BandwidthUpperLimit:number
}
    
/**
 * AllocateUDPNRequest - 
 */
export interface AllocateUDPNRequest {
    /**
     * 地域。 参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Region?:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * 专线可用区1，支持地域：北京二：cn-bj2, 上海二：cn-sh2, 广东：cn-gd, 亚太： hk, 上海一：cn-sh1, 法兰克福：ge-fra, 新加坡：sg,  洛杉矶：us-ca， 华盛顿：us-ws， 东京：jpn-tky
     */
    Peer1:string
    /**
     * 专线可用区2，支持地域：北京二：cn-bj2, 上海二：cn-sh2, 广东：cn-gd, 亚太： hk, 上海一：cn-sh1, 法兰克福：ge-fra, 新加坡：sg,  洛杉矶：us-ca， 华盛顿：us-ws， 东京：jpn-tky
     */
    Peer2:string
    /**
     * 带宽
     */
    Bandwidth:number
    /**
     * 计费类型，枚举值为： Year，按年付费； Month，按月付费； Dynamic，按需付费
     */
    ChargeType?:string
    /**
     * 计费时长，默认 1
     */
    Quantity?:number
    /**
     * 计费模式. 枚举值："Traffic", 流量计费模式; 否则 带宽计费模式；
     */
    PayMode?:string
    /**
     * 代金劵
     */
    CouponId?:string
}
    
/**
 * GetUDPNPriceResponse - 
 */
export interface GetUDPNPriceResponse {
    /**
     * 资源有效期 unix 时间戳
     */
    PurchaseValue:number
    /**
     * 专线价格
     */
    Price:number
}
    
/**
 * UDPNData - 
 */
export interface UDPNData {
    /**
     * UDPN 资源短 ID
     */
    UDPNId:string
    /**
     * 可用区域 1
     */
    Peer1:string
    /**
     * 可用区域 2
     */
    Peer2:string
    /**
     * 计费类型
     */
    ChargeType:string
    /**
     * 带宽
     */
    Bandwidth:number
    /**
     * unix 时间戳 创建时间
     */
    CreateTime:number
    /**
     * unix 时间戳 到期时间
     */
    ExpireTime:number
}
    
/**
 * AllocateUDPNResponse - 
 */
export interface AllocateUDPNResponse {
    /**
     * 资源名称
     */
    UDPNId:string
}
    
/**
 * ReleaseUDPNResponse - 
 */
export interface ReleaseUDPNResponse {
}
    
/**
 * GetUDPNUpgradePriceRequest - 
 */
export interface GetUDPNUpgradePriceRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region?:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * 专线带宽资源 Id
     */
    UDPNId:string
    /**
     * 带宽
     */
    Bandwidth:number
}
    
/**
 * GetUDPNPriceRequest - 
 */
export interface GetUDPNPriceRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region?:string
    /**
     * 专线可用区1，支持地域：北京二：cn-bj2, 上海二：cn-sh2, 广东：cn-gd, 亚太： hk, 上海一：cn-sh1, 法兰克福：ge-fra, 新加坡：sg, 洛杉矶：us-la， 华盛顿：us-ws， 东京：jpn-tky
     */
    Peer1:string
    /**
     * 专线可用区2，支持地域：北京二：cn-bj2, 上海二：cn-sh2, 广东：cn-gd, 亚太： hk, 上海一：cn-sh1, 法兰克福：ge-fra, 新加坡：sg, 洛杉矶：us-la， 华盛顿：us-ws， 东京：jpn-tky
     */
    Peer2:string
    /**
     * 带宽信息
     */
    Bandwidth:number
    /**
     * 计费类型
     */
    ChargeType?:string
    /**
     * 购买时长
     */
    Quantity?:number
    /**
     * PayMode，枚举值，Bandwidth：带宽；Traffic：流量  默认不填写：带宽
     */
    PayMode?:string
}
    
/**
 * GetUDPNLineListRequest - 
 */
export interface GetUDPNLineListRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region?:string
    /**
     * 
     */
    ProjectId?:string
}
    
/**
 * DescribeUDPNResponse - 
 */
export interface DescribeUDPNResponse {
    /**
     * 查询到的总数量
     */
    TotalCount:number
    /**
     * UDPN详情
     */
    DataSet?:
            UDPNData[]
}
    
/**
 * GetUDPNUpgradePriceResponse - 
 */
export interface GetUDPNUpgradePriceResponse {
    /**
     * 升级后的价格
     */
    Price:number
}
    
/**
 * GetUDPNLineListResponse - 
 */
export interface GetUDPNLineListResponse {
    /**
     * DataSet中的元素个数
     */
    TotalCount:number
    /**
     * 当前支持的专线线路详细信息，详见UDPNLineSet
     */
    DataSet:
            UDPNLineSet[]
}
