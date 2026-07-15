import Client from '../../core/client';
import { ConfigOptions } from '../../core/config';
import { CredentialOptions } from '../../core/credential';
/**
 * This client is used to call actions of **ugn** service
 */
export default class UGNClient extends Client {
    constructor({ config, credential, }: {
        config: ConfigOptions;
        credential: CredentialOptions;
    });
    /**
     * AddRoutePolicy - 新增路由策略
     *
     * See also: https://docs.ucloud.cn/api/ugn-api/add_route_policy
     */
    addRoutePolicy(request?: AddRoutePolicyRequest): Promise<AddRoutePolicyResponse>;
    /**
     * AttachUGNNetworks - 批量关联网络实例
     *
     * See also: https://docs.ucloud.cn/api/ugn-api/attach_ugn_networks
     */
    attachUGNNetworks(request?: AttachUGNNetworksRequest): Promise<AttachUGNNetworksResponse>;
    /**
     * CreateSimpleUGNBwPackage - 云联网简洁版创建带宽包
     *
     * See also: https://docs.ucloud.cn/api/ugn-api/create_simple_ugn_bw_package
     */
    createSimpleUGNBwPackage(request?: CreateSimpleUGNBwPackageRequest): Promise<CreateSimpleUGNBwPackageResponse>;
    /**
     * CreateUGN - 创建云联网
     *
     * See also: https://docs.ucloud.cn/api/ugn-api/create_ugn
     */
    createUGN(request?: CreateUGNRequest): Promise<CreateUGNResponse>;
    /**
     * DelUGN - 删除云联网，仅云联网内无带宽包或网络实例时才可以被删除
     *
     * See also: https://docs.ucloud.cn/api/ugn-api/del_ugn
     */
    delUGN(request?: DelUGNRequest): Promise<DelUGNResponse>;
    /**
     * DeleteRoutePolicy - 删除路由策略
     *
     * See also: https://docs.ucloud.cn/api/ugn-api/delete_route_policy
     */
    deleteRoutePolicy(request?: DeleteRoutePolicyRequest): Promise<DeleteRoutePolicyResponse>;
    /**
     * DeleteUGNBwPackage - 删除带宽包，互通地域仅保留默认带宽包
     *
     * See also: https://docs.ucloud.cn/api/ugn-api/delete_ugn_bw_package
     */
    deleteUGNBwPackage(request?: DeleteUGNBwPackageRequest): Promise<DeleteUGNBwPackageResponse>;
    /**
     * DescribeSimpleUGN - 获取简洁版UGN详情
     *
     * See also: https://docs.ucloud.cn/api/ugn-api/describe_simple_ugn
     */
    describeSimpleUGN(request?: DescribeSimpleUGNRequest): Promise<DescribeSimpleUGNResponse>;
    /**
     * DetachUGNNetworks - 批量解除关联网络实例
     *
     * See also: https://docs.ucloud.cn/api/ugn-api/detach_ugn_networks
     */
    detachUGNNetworks(request?: DetachUGNNetworksRequest): Promise<DetachUGNNetworksResponse>;
    /**
     * EnableRoutePolicy - 启用\停用路由策略
     *
     * See also: https://docs.ucloud.cn/api/ugn-api/enable_route_policy
     */
    enableRoutePolicy(request?: EnableRoutePolicyRequest): Promise<EnableRoutePolicyResponse>;
    /**
     * GetSimpleBuyBwPrice - 获取简洁版带宽包价格
     *
     * See also: https://docs.ucloud.cn/api/ugn-api/get_simple_buy_bw_price
     */
    getSimpleBuyBwPrice(request?: GetSimpleBuyBwPriceRequest): Promise<GetSimpleBuyBwPriceResponse>;
    /**
     * GetSimpleUGNBwPackages - 获取指定云联网内的带宽包
     *
     * See also: https://docs.ucloud.cn/api/ugn-api/get_simple_ugn_bw_packages
     */
    getSimpleUGNBwPackages(request?: GetSimpleUGNBwPackagesRequest): Promise<GetSimpleUGNBwPackagesResponse>;
    /**
     * GetSwitchableBillingModes - 获取带宽包可以切换的计费类型
     *
     * See also: https://docs.ucloud.cn/api/ugn-api/get_switchable_billing_modes
     */
    getSwitchableBillingModes(request?: GetSwitchableBillingModesRequest): Promise<GetSwitchableBillingModesResponse>;
    /**
     * GetUGNRouteTable - 获取云联网路由表
     *
     * See also: https://docs.ucloud.cn/api/ugn-api/get_ugn_route_table
     */
    getUGNRouteTable(request?: GetUGNRouteTableRequest): Promise<GetUGNRouteTableResponse>;
    /**
     * ListSimpleBwPackage - 获取当前项目下的带宽包列表
     *
     * See also: https://docs.ucloud.cn/api/ugn-api/list_simple_bw_package
     */
    listSimpleBwPackage(request?: ListSimpleBwPackageRequest): Promise<ListSimpleBwPackageResponse>;
    /**
     * ListUGN - 获取当前项目下所有云联网资源
     *
     * See also: https://docs.ucloud.cn/api/ugn-api/list_ugn
     */
    listUGN(request?: ListUGNRequest): Promise<ListUGNResponse>;
    /**
     * ListUGNRegions - 获取UGN的可加入地域列表
     *
     * See also: https://docs.ucloud.cn/api/ugn-api/list_ugn_regions
     */
    listUGNRegions(request?: ListUGNRegionsRequest): Promise<ListUGNRegionsResponse>;
    /**
     * ModifyUGNBandwidth - 修改云联网带宽大小
     *
     * See also: https://docs.ucloud.cn/api/ugn-api/modify_ugn_bandwidth
     */
    modifyUGNBandwidth(request?: ModifyUGNBandwidthRequest): Promise<ModifyUGNBandwidthResponse>;
    /**
     * SendUGNApplyNetwork - 跨账号网络实例申请加入 UGN
     *
     * See also: https://docs.ucloud.cn/api/ugn-api/send_ugn_apply_network
     */
    sendUGNApplyNetwork(request?: SendUGNApplyNetworkRequest): Promise<SendUGNApplyNetworkResponse>;
    /**
     * UpdateRoutePolicy - 修改路由策略
     *
     * See also: https://docs.ucloud.cn/api/ugn-api/update_route_policy
     */
    updateRoutePolicy(request?: UpdateRoutePolicyRequest): Promise<UpdateRoutePolicyResponse>;
}
/**
 * AddRoutePolicy - 新增路由策略
 */
export interface AddRoutePolicyRequest {
    /**
     * 云联网实例ID
     */
    UGNID: string;
    /**
     *
     */
    Policy?: {
        /**
         * 策略方向，限定取值："In"/"Out"
         */
        Direction: string;
        /**
         * 策略优先级，范围：[1,255]，数值越小优先级越大，同一方向，策略优先级不可重复
         */
        Priority: number;
        /**
         * 策略执行动作，限定取值："Permit"/"Deny"
         */
        RouteAction: string;
        /**
         *
         */
        SrcNetworks?: {
            /**
             * 路由策略需要匹配的路由的网络实例ID数组
             */
            NetworkId: string;
            /**
             * 路由策略需要匹配的路由的网络实例下的网段数组
             */
            Prefixes?: string[];
        }[];
        /**
         * 策略名称，限定长度255
         */
        Name?: string;
        /**
         * 当执行动作为 "Permit" 时，给匹配中的路由设置路由优先级，范围：[1,255]，数值越小优先级越大
         */
        RoutePriority?: number;
        /**
         * 路由策略需要匹配的路由的所在地域数组
         */
        SrcRegions?: string[];
        /**
         * 路由策略需要匹配的路由的网络实例类型数组，限定取值："VPC" / "UWAN-VRouter"
         */
        SrcNetworkTypes?: string[];
        /**
         * 路由策略需要作用的网络实例类型数组，限定取值："VPC" / "UWAN-VRouter"，"Direction" 为 "In" 时，该值无效
         */
        DstNetworkTypes?: string[];
        /**
         *
         */
        DstNetworks?: {
            /**
             * 路由策略需要作用的网络实例ID数组，"Direction" 为 "In" 时，该值无效
             */
            NetworkId?: string;
        }[];
    };
}
/**
 * AddRoutePolicy - 新增路由策略
 */
export interface AddRoutePolicyResponse {
}
/**
 * AttachUGNNetworks - 批量关联网络实例
 */
export interface AttachUGNNetworksRequest {
    /**
     * UGN ID
     */
    UGNID: string;
    /**
     *
     */
    Networks?: {
        /**
         * 网络实例 ID，如 uvnet-xxxx
         */
        NetworkID: string;
        /**
         * 网络实例类型，枚举值：VPC/UCVR/...
         */
        Type: string;
        /**
         * 网络实例所属地域，如 cn-sh2
         */
        Region: string;
        /**
         * 网络实例所属项目名，如 org-xxx
         */
        OrgName: string;
    }[];
}
/**
 * AttachUGNNetworks - 批量关联网络实例
 */
export interface AttachUGNNetworksResponse {
    /**
     * 数组，数组内每个元素的字段如下： NetworkID：string，网络实例 ID，如 uvnet-xxxx； Type：string，网络实例类型，枚举值：VPC/UCVR/...； Region：string，网络实例所属地域，如 cn-sh2； OrgName：string，网络实例所属项目名，如 org-xxx
     */
    Networks: {
        /**
         * 网络实例所在地域
         */
        Region: string;
        /**
         * 网络实例的ID，如 vnet-xxxxx
         */
        NetworkID: string;
        /**
         * 网络实例名称
         */
        Name: string;
        /**
         * 网络实例类型：VPC/UCVR/...
         */
        Type: string;
        /**
         * 网络实例所在项目名
         */
        OrgName: string;
        /**
         * 网络实例所属公司ID
         */
        CompanyID: number;
        /**
         * 网络实例所在地域ID
         */
        RegionID?: number;
        /**
         * 网络实例所在项目的ID
         */
        OrgID?: number;
        /**
         * 网络实例的唯一标识，如 vpc 的 tunnel_id
         */
        VNI?: number;
        /**
         * 创建时间
         */
        InsertTime?: number;
    }[];
    /**
     * UGN ID
     */
    UGNID?: string;
}
/**
 * CreateSimpleUGNBwPackage - 云联网简洁版创建带宽包
 */
export interface CreateSimpleUGNBwPackageRequest {
    /**
     * ugn 资源 id
     */
    UGNID: string;
    /**
     * 地域 A 名称
     */
    RegionA: string;
    /**
     * 地域 B 名称
     */
    RegionB: string;
    /**
     * 购买的带宽值
     */
    BandWidth: number;
    /**
     * 计费模式 FixedBw:固定带宽｜Max5:第五峰值｜Traffic:流量计费 固定带宽：按月/按年 Max5：后付费 流量计费：后付费
     */
    PayMode: string;
    /**
     * 付费方式 Month:按月｜Year:按年｜PostPay:后付费｜Count:按量
     */
    ChargeType: string;
    /**
     * 购买份数，主要用于预付费
     */
    Quantity: number;
    /**
     * 带宽包名称
     */
    Name?: string;
    /**
     * 备注
     */
    Remark?: string;
    /**
     * 服务质量 Diamond:钻石｜Platinum:铂金｜Gold:黄金
     */
    Qos?: string;
    /**
     * 智能路径 Delay:最低时延｜IGP:普通线路｜TCO:最低成本
     */
    Path?: string;
    /**
     * 代金券 id
     */
    CouponId?: string;
}
/**
 * CreateSimpleUGNBwPackage - 云联网简洁版创建带宽包
 */
export interface CreateSimpleUGNBwPackageResponse {
}
/**
 * CreateUGN - 创建云联网
 */
export interface CreateUGNRequest {
    /**
     * UGN名称
     */
    Name?: string;
    /**
     * 备注
     */
    Remark?: string;
    /**
     *
     */
    Networks?: {
        /**
         * 网络实例 ID，如 uvnet-xxxx
         */
        NetworkID?: string;
        /**
         * 网络实例类型，枚举值：VPC/UCVR/...
         */
        Type?: string;
        /**
         * 网络实例所属地域，如 cn-sh2
         */
        Region?: string;
        /**
         * 网络实例所属项目名，如 org-xxx
         */
        OrgName?: string;
    }[];
}
/**
 * CreateUGN - 创建云联网
 */
export interface CreateUGNResponse {
    /**
     * UGN ID
     */
    UGNID?: string;
    /**
     * 网络实例列表
     */
    Networks?: {
        /**
         * 网络实例所在地域
         */
        Region: string;
        /**
         * 网络实例的ID，如 vnet-xxxxx
         */
        NetworkID: string;
        /**
         * 网络实例名称
         */
        Name: string;
        /**
         * 网络实例类型：VPC/UCVR/...
         */
        Type: string;
        /**
         * 网络实例所在项目名
         */
        OrgName: string;
        /**
         * 网络实例所属公司ID
         */
        CompanyID: number;
        /**
         * 网络实例所在地域ID
         */
        RegionID?: number;
        /**
         * 网络实例所在项目的ID
         */
        OrgID?: number;
        /**
         * 网络实例的唯一标识，如 vpc 的 tunnel_id
         */
        VNI?: number;
        /**
         * 创建时间
         */
        InsertTime?: number;
    }[];
}
/**
 * DelUGN - 删除云联网，仅云联网内无带宽包或网络实例时才可以被删除
 */
export interface DelUGNRequest {
    /**
     * UGNID
     */
    UGNID: string;
}
/**
 * DelUGN - 删除云联网，仅云联网内无带宽包或网络实例时才可以被删除
 */
export interface DelUGNResponse {
}
/**
 * DeleteRoutePolicy - 删除路由策略
 */
export interface DeleteRoutePolicyRequest {
    /**
     * 云联网实例ID
     */
    UGNID: string;
    /**
     * 需要删除的路由策略ID数组
     */
    PolicyIds: string[];
}
/**
 * DeleteRoutePolicy - 删除路由策略
 */
export interface DeleteRoutePolicyResponse {
}
/**
 * DeleteUGNBwPackage - 删除带宽包，互通地域仅保留默认带宽包
 */
export interface DeleteUGNBwPackageRequest {
    /**
     * 带宽包ID
     */
    BwPackageID: string;
    /**
     * UGNID
     */
    UGNID: string;
}
/**
 * DeleteUGNBwPackage - 删除带宽包，互通地域仅保留默认带宽包
 */
export interface DeleteUGNBwPackageResponse {
}
/**
 * DescribeSimpleUGN - 获取简洁版UGN详情
 */
export interface DescribeSimpleUGNRequest {
    /**
     * UGN ID
     */
    UGNID: string;
}
/**
 * DescribeSimpleUGN - 获取简洁版UGN详情
 */
export interface DescribeSimpleUGNResponse {
    /**
     * 云联网实例基本信息
     */
    UGN: {
        /**
         * 云联网资源 ID
         */
        UGNID: string;
        /**
         * 云联网名称
         */
        Name: string;
        /**
         * 云联网备注
         */
        Remark: string;
        /**
         * 云联网创建时间
         */
        CreateTime: number;
        /**
         * 关联网络实例数量
         */
        NetworkCount: number;
        /**
         * 绑定带宽包数量
         */
        BwPackageCount: number;
        /**
         * 关联的路由策略数量
         */
        PolicyCount: number;
        /**
         * 申请待加入的网络数量
         */
        ApplyNetworksCount: number;
    };
    /**
     * 加入云联网网络实例基本信息
     */
    Networks: {
        /**
         * 网络实例所在地域
         */
        Region: string;
        /**
         * 网络实例的ID，如 vnet-xxxxx
         */
        NetworkID: string;
        /**
         * 网络实例名称
         */
        Name: string;
        /**
         * 网络实例类型：VPC/HybridGW/...
         */
        Type: string;
        /**
         * 网络实例所在项目名
         */
        OrgName: string;
        /**
         * 网络实例所在地域ID
         */
        RegionID?: number;
        /**
         * 网络实例所在项目的ID
         */
        OrgID?: number;
        /**
         *
         */
        CreateTime?: number;
    }[];
    /**
     * 云联网下的带宽基本信息
     */
    BwPackages: {
        /**
         * 带宽包 ID
         */
        PackageID: string;
        /**
         * UGN ID
         */
        UGNID: string;
        /**
         * 计费模式 FixedBw:固定带宽｜Peak95:经典95｜Max5:第五峰值｜Traffic:流量计费
         */
        PayMode: string;
        /**
         * 地域A名称
         */
        RegionA: string;
        /**
         * 地域B名称
         */
        RegionB: string;
        /**
         * 带宽值
         */
        BandWidth: number;
        /**
         * 服务质量Diamond:钻石｜Platinum:铂金｜Gold:黄金
         */
        Qos: string;
        /**
         * 智能路径Delay:最低时延｜IGP:普通线路｜TCO:最低成本
         */
        Path: string;
        /**
         * 创建时间
         */
        CreateTime: number;
        /**
         * 带宽包名称
         */
        Name?: string;
        /**
         * 备注
         */
        Remark?: string;
        /**
         * 过期时间
         */
        ExpireTime?: number;
        /**
         * 带宽包切换状态
         */
        ChangeStatus?: number;
        /**
         * 带宽包切换时间
         */
        ChangeTime?: number;
        /**
         * 带宽包切换计费类型
         */
        ChangePayMode?: string;
    }[];
    /**
     * 云联网下的路由基本信息
     */
    Routes: {
        /**
         * 目的网段
         */
        DstAddr?: string;
        /**
         * 下一跳网络实例 ID
         */
        NextHopID?: string;
        /**
         * 下一跳网络实例类型
         */
        NextHopType?: string;
        /**
         * 下一跳网络实例所属地域
         */
        NextHopRegion?: string;
        /**
         * 下一跳网络实例所属地域 id
         */
        NextHopRegionID?: number;
        /**
         * 路由优先级
         */
        Priority?: number;
        /**
         * true: 由于命中路由策略而失效
         */
        Deny?: boolean;
        /**
         * true: 由于优先级比其他前缀相同的路由低而失效
         */
        Restrict?: boolean;
        /**
         * true: 由于优先级相同但插入数据库的时间比其他前缀相同的路由晚而失效
         */
        Conflict?: boolean;
        /**
         * 匹配中的入向路由策略id
         */
        InPolicyId?: string;
        /**
         * 匹配中的入向路由策略名称
         */
        InPolicyName?: string;
        /**
         * 匹配中的出向路由策略id
         */
        OutPolicyId?: string;
        /**
         * 匹配中的出向路由策略名称
         */
        OutPolicyName?: string;
    }[];
    /**
     * 云联网的路由策略基本信息
     */
    Policies?: {
        /**
         * 作用地域
         */
        Region?: string;
        /**
         * 路由策略ID
         */
        PolicyId?: string;
        /**
         * 路由策略名称，限定长度255
         */
        Name?: string;
        /**
         * 策略方向，限定取值："In"/"Out"
         */
        Direction?: string;
        /**
         * 是否启用
         */
        Enabled?: boolean;
        /**
         * 策略优先级，范围：[1,255]，数值越小优先级越大，同一方向，策略优先级不可重复
         */
        Priority?: number;
        /**
         * 策略执行动作，限定取值："Permit"/"Deny"
         */
        Action?: string;
        /**
         * 当执行动作为 "Permit" 时，给匹配中的路由设置路由优先级，范围：[1,255]，数值越小优先级越大
         */
        RoutePriority?: number;
        /**
         * 路由策略需要匹配的路由的所在地域数组
         */
        SrcRegions?: string[];
        /**
         * 路由策略需要匹配的路由的网络实例类型数组，限定取值："VPC" / "UWAN-VRouter"
         */
        SrcNetworkTypes?: string[];
        /**
         * 路由策略需要匹配的路由的网络实例类型以及该实例下的网段信息
         */
        SrcNetworks?: {
            /**
             * 网络实例ID
             */
            NetworkId?: string;
            /**
             * 网络实例上报的网段
             */
            Prefixes?: string[];
        }[];
        /**
         * 路由策略需要作用的网络实例类型数组，限定取值："VPC" / "UWAN-VRouter"
         */
        DstNetworkTypes?: string[];
        /**
         * 路由策略需要作用的网络实例ID
         */
        DstNetworks?: {
            /**
             * 网络实例ID
             */
            NetworkId?: string;
            /**
             * 网络实例上报的网段
             */
            Prefixes?: string[];
        }[];
        /**
         * 创建时间
         */
        CreateTime?: number;
        /**
         * 是否匹配中路由
         */
        Matched?: boolean;
    }[];
}
/**
 * DetachUGNNetworks - 批量解除关联网络实例
 */
export interface DetachUGNNetworksRequest {
    /**
     * UGNID
     */
    UGNID: string;
    /**
     * 网络实例 ID
     */
    Networks: string[];
}
/**
 * DetachUGNNetworks - 批量解除关联网络实例
 */
export interface DetachUGNNetworksResponse {
    /**
     * 数组，数组内每个元素的字段如下： NetworkID：string，网络实例 ID，如 uvnet-xxxx； Type：string，网络实例类型，枚举值：VPC/UCVR/...； Region：string，网络实例所属地域，如 cn-sh2； OrgName：string，网络实例所属项目名，如 org-xxx
     */
    Networks: {
        /**
         * 网络实例所在地域
         */
        Region: string;
        /**
         * 网络实例的ID，如 vnet-xxxxx
         */
        NetworkID: string;
        /**
         * 网络实例名称
         */
        Name: string;
        /**
         * 网络实例类型：VPC/UCVR/...
         */
        Type: string;
        /**
         * 网络实例所在项目名
         */
        OrgName: string;
        /**
         * 网络实例所属公司ID
         */
        CompanyID: number;
        /**
         * 网络实例所在地域ID
         */
        RegionID?: number;
        /**
         * 网络实例所在项目的ID
         */
        OrgID?: number;
        /**
         * 网络实例的唯一标识，如 vpc 的 tunnel_id
         */
        VNI?: number;
        /**
         * 创建时间
         */
        InsertTime?: number;
    }[];
    /**
     * UGN ID
     */
    UGNID?: string;
}
/**
 * EnableRoutePolicy - 启用\停用路由策略
 */
export interface EnableRoutePolicyRequest {
    /**
     * 云联网实例ID
     */
    UGNID: string;
    /**
     * 路由策略ID
     */
    PolicyId: string;
    /**
     * 是否启用
     */
    Enable: boolean;
}
/**
 * EnableRoutePolicy - 启用\停用路由策略
 */
export interface EnableRoutePolicyResponse {
}
/**
 * GetSimpleBuyBwPrice - 获取简洁版带宽包价格
 */
export interface GetSimpleBuyBwPriceRequest {
    /**
     * 地域 A 名称
     */
    RegionA: string;
    /**
     * 地域 B 名称
     */
    RegionB: string;
    /**
     * 计费模式 FixedBw:固定带宽｜Max5:第五峰值｜Traffic:流量计费 固定带宽：按月/按年 Max5：后付费 流量计费：按量付费
     */
    PayMode: string;
    /**
     * 付费方式 Month:按月｜Year:按年｜PostPay:后付费｜Count:按量
     */
    ChargeType: string;
    /**
     * 服务质量 Diamond:钻石｜Platinum:铂金｜Gold:黄金
     */
    Qos: string;
    /**
     * 智能路径 Delay:最低时延｜IGP:普通线路｜TCO:最低成本
     */
    Path: string;
    /**
     * 购买的带宽值，默认为1
     */
    BandWidth?: number;
}
/**
 * GetSimpleBuyBwPrice - 获取简洁版带宽包价格
 */
export interface GetSimpleBuyBwPriceResponse {
    /**
     * 最终价格 = 原价 * 用户折扣 * 产品折扣
     */
    TotalPrice: number;
    /**
     * 客户折扣价 = 原价 * 用户折扣
     */
    CustomPrice: number;
    /**
     * 原价
     */
    OriginalPrice: number;
}
/**
 * GetSimpleUGNBwPackages - 获取指定云联网内的带宽包
 */
export interface GetSimpleUGNBwPackagesRequest {
    /**
     * UGN ID
     */
    UGNID: string;
    /**
     * 偏移量，默认0
     */
    Offset?: number;
    /**
     * 	分页大小，默认20
     */
    Limit?: number;
    /**
     * 带宽包ID列表，不填查询UGN下全部带宽包
     */
    PackageIds?: string[];
}
/**
 * GetSimpleUGNBwPackages - 获取指定云联网内的带宽包
 */
export interface GetSimpleUGNBwPackagesResponse {
    /**
     * 带宽包列表
     */
    BwPackages: {
        /**
         * 带宽包 ID
         */
        PackageID: string;
        /**
         * UGN ID
         */
        UGNID: string;
        /**
         * 计费模式 FixedBw:固定带宽｜Peak95:经典95｜Max5:第五峰值｜Traffic:流量计费
         */
        PayMode: string;
        /**
         * 地域A名称
         */
        RegionA: string;
        /**
         * 地域B名称
         */
        RegionB: string;
        /**
         * 带宽值
         */
        BandWidth: number;
        /**
         * 服务质量Diamond:钻石｜Platinum:铂金｜Gold:黄金
         */
        Qos: string;
        /**
         * 智能路径Delay:最低时延｜IGP:普通线路｜TCO:最低成本
         */
        Path: string;
        /**
         * 创建时间
         */
        CreateTime: number;
        /**
         * 带宽包名称
         */
        Name?: string;
        /**
         * 备注
         */
        Remark?: string;
        /**
         * 过期时间
         */
        ExpireTime?: number;
        /**
         * 带宽包切换状态
         */
        ChangeStatus?: number;
        /**
         * 带宽包切换时间
         */
        ChangeTime?: number;
        /**
         * 带宽包切换计费类型
         */
        ChangePayMode?: string;
    }[];
    /**
     * 带宽包数量
     */
    TotalCount: number;
    /**
     * 偏移量
     */
    Offset: number;
    /**
     * 分页大小
     */
    Limit: number;
}
/**
 * GetSwitchableBillingModes - 获取带宽包可以切换的计费类型
 */
export interface GetSwitchableBillingModesRequest {
    /**
     * 带宽包 id
     */
    BwPackageID: string;
}
/**
 * GetSwitchableBillingModes - 获取带宽包可以切换的计费类型
 */
export interface GetSwitchableBillingModesResponse {
    /**
     * 支持的计费类型。FixedBw：固定带宽，Traffic：流量计费，Max5：第五峰值。
     */
    PayModes: string[];
}
/**
 * GetUGNRouteTable - 获取云联网路由表
 */
export interface GetUGNRouteTableRequest {
    /**
     * 云联网实例ID
     */
    UGNID: string;
    /**
     * 路由表类型，分为初始路由表、中阶路由表以及最终路由表，限定取值："Origin"/"Middle"/"Final"
     */
    Type: string;
}
/**
 * GetUGNRouteTable - 获取云联网路由表
 */
export interface GetUGNRouteTableResponse {
    /**
     * 云联网实例ID
     */
    UGNID: string;
    /**
     * 路由表，"Origin"/"Middle" 用这个
     */
    Routes: {
        /**
         * 目的网段
         */
        DstAddr?: string;
        /**
         * 下一跳网络实例 ID
         */
        NextHopID?: string;
        /**
         * 下一跳网络实例类型
         */
        NextHopType?: string;
        /**
         * 下一跳网络实例所属地域
         */
        NextHopRegion?: string;
        /**
         * 下一跳网络实例所属地域 id
         */
        NextHopRegionID?: number;
        /**
         * 路由优先级
         */
        Priority?: number;
        /**
         * true: 由于命中路由策略而失效
         */
        Deny?: boolean;
        /**
         * true: 由于优先级比其他前缀相同的路由低而失效
         */
        Restrict?: boolean;
        /**
         * true: 由于优先级相同但插入数据库的时间比其他前缀相同的路由晚而失效
         */
        Conflict?: boolean;
        /**
         * 匹配中的入向路由策略id
         */
        InPolicyId?: string;
        /**
         * 匹配中的入向路由策略名称
         */
        InPolicyName?: string;
        /**
         * 匹配中的出向路由策略id
         */
        OutPolicyId?: string;
        /**
         * 匹配中的出向路由策略名称
         */
        OutPolicyName?: string;
    }[];
    /**
     * 网络实例对应的路由表，"Final" 用这个
     */
    VRoutes: {
        /**
         * 网络实例ID
         */
        NetworkId?: string;
        /**
         * 该网络实例对应的路由
         */
        Routes?: {
            /**
             * 目的网段
             */
            DstAddr?: string;
            /**
             * 下一跳网络实例 ID
             */
            NextHopID?: string;
            /**
             * 下一跳网络实例类型
             */
            NextHopType?: string;
            /**
             * 下一跳网络实例所属地域
             */
            NextHopRegion?: string;
            /**
             * 下一跳网络实例所属地域 id
             */
            NextHopRegionID?: number;
            /**
             * 路由优先级
             */
            Priority?: number;
            /**
             * true: 由于命中路由策略而失效
             */
            Deny?: boolean;
            /**
             * true: 由于优先级比其他前缀相同的路由低而失效
             */
            Restrict?: boolean;
            /**
             * true: 由于优先级相同但插入数据库的时间比其他前缀相同的路由晚而失效
             */
            Conflict?: boolean;
            /**
             * 匹配中的入向路由策略id
             */
            InPolicyId?: string;
            /**
             * 匹配中的入向路由策略名称
             */
            InPolicyName?: string;
            /**
             * 匹配中的出向路由策略id
             */
            OutPolicyId?: string;
            /**
             * 匹配中的出向路由策略名称
             */
            OutPolicyName?: string;
        }[];
    }[];
}
/**
 * ListSimpleBwPackage - 获取当前项目下的带宽包列表
 */
export interface ListSimpleBwPackageRequest {
    /**
     * 偏移量，默认0
     */
    Offset?: number;
    /**
     * 分页大小，默认20
     */
    Limit?: number;
}
/**
 * ListSimpleBwPackage - 获取当前项目下的带宽包列表
 */
export interface ListSimpleBwPackageResponse {
    /**
     * 带宽包数量
     */
    TotalCount: number;
    /**
     * 偏移量
     */
    Offset: number;
    /**
     * 分页大小
     */
    Limit: number;
    /**
     * 带宽包列表
     */
    BwPackages: {
        /**
         * 带宽包 ID
         */
        PackageID: string;
        /**
         * UGN ID
         */
        UGNID: string;
        /**
         * 计费模式 FixedBw:固定带宽｜Peak95:经典95｜Max5:第五峰值｜Traffic:流量计费
         */
        PayMode: string;
        /**
         * 地域A名称
         */
        RegionA: string;
        /**
         * 地域B名称
         */
        RegionB: string;
        /**
         * 带宽值
         */
        BandWidth: number;
        /**
         * 服务质量Diamond:钻石｜Platinum:铂金｜Gold:黄金
         */
        Qos: string;
        /**
         * 智能路径Delay:最低时延｜IGP:普通线路｜TCO:最低成本
         */
        Path: string;
        /**
         * 创建时间
         */
        CreateTime: number;
        /**
         * 带宽包名称
         */
        Name?: string;
        /**
         * 备注
         */
        Remark?: string;
        /**
         * 过期时间
         */
        ExpireTime?: number;
        /**
         * 带宽包切换状态
         */
        ChangeStatus?: number;
        /**
         * 带宽包切换时间
         */
        ChangeTime?: number;
        /**
         * 带宽包切换计费类型
         */
        ChangePayMode?: string;
    }[];
}
/**
 * ListUGN - 获取当前项目下所有云联网资源
 */
export interface ListUGNRequest {
    /**
     * 分页大小，默认20
     */
    Limit?: number;
    /**
     * 偏移量，默认0
     */
    Offset?: number;
}
/**
 * ListUGN - 获取当前项目下所有云联网资源
 */
export interface ListUGNResponse {
    /**
     * UGN 列表
     */
    UGNs: {
        /**
         * 云联网资源 ID
         */
        UGNID: string;
        /**
         * 云联网名称
         */
        Name: string;
        /**
         * 云联网备注
         */
        Remark: string;
        /**
         * 云联网创建时间
         */
        CreateTime: number;
        /**
         * 关联网络实例数量
         */
        NetworkCount: number;
        /**
         * 绑定带宽包数量
         */
        BwPackageCount: number;
        /**
         * 关联的路由策略数量
         */
        PolicyCount: number;
        /**
         * 申请待加入的网络数量
         */
        ApplyNetworksCount: number;
    }[];
    /**
     * UGN数量
     */
    TotalCount?: number;
    /**
     * 偏移量
     */
    Offset?: number;
    /**
     * 分页大小
     */
    Limit?: number;
}
/**
 * ListUGNRegions - 获取UGN的可加入地域列表
 */
export interface ListUGNRegionsRequest {
    /**
     * 数组，已选区域，例如：cn-bj2， cn-wlcb
     */
    SelectedRegions?: string[];
}
/**
 * ListUGNRegions - 获取UGN的可加入地域列表
 */
export interface ListUGNRegionsResponse {
    /**
     * 可加入地域列表
     */
    RegionLIst: {
        /**
         * 地域名称
         */
        Region: string;
        /**
         * 地域ID
         */
        RegIonId: number;
        /**
         * 是否为海外地域
         */
        IsOverseas: boolean;
        /**
         * 是否上线
         */
        IsOnline: boolean;
        /**
         * 添加region需要做的校验
         */
        Needs?: string[];
    }[];
}
/**
 * ModifyUGNBandwidth - 修改云联网带宽大小
 */
export interface ModifyUGNBandwidthRequest {
    /**
     * 带宽包id
     */
    PackageID: string;
    /**
     * 云联网id
     */
    UGNID: string;
    /**
     * 带宽值
     */
    BandWidth: number;
}
/**
 * ModifyUGNBandwidth - 修改云联网带宽大小
 */
export interface ModifyUGNBandwidthResponse {
}
/**
 * SendUGNApplyNetwork - 跨账号网络实例申请加入 UGN
 */
export interface SendUGNApplyNetworkRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone?: string;
    /**
     * 网络实例 ID，如 uvnet-xxxx
     */
    NetworkID: string;
    /**
     * 网络实例类型，枚举值：VPC/UWAN-VRouter/...
     */
    NetworkType: string;
    /**
     * 网络实例所属地域，如 cn-sh2
     */
    NetworkRegion: string;
    /**
     * 网络实例所属项目名，如 org-xxx
     */
    NetworkOrgName: string;
    /**
     * UGN id
     */
    UGNID: string;
    /**
     * UGN所属公司 id
     */
    UGNCompanyID: number;
}
/**
 * SendUGNApplyNetwork - 跨账号网络实例申请加入 UGN
 */
export interface SendUGNApplyNetworkResponse {
}
/**
 * UpdateRoutePolicy - 修改路由策略
 */
export interface UpdateRoutePolicyRequest {
    /**
     * 云联网实例ID
     */
    UGNID: string;
    /**
     *
     */
    Policy?: {
        /**
         * 路由策略ID
         */
        PolicyId: string;
        /**
         * 策略名称，限定长度 255
         */
        Name?: string;
        /**
         * 策略方向，限定取值："In"/"Out"
         */
        Direction?: string;
        /**
         * 策略优先级，范围：[1,255]，数值越小优先级越大，同一方向，策略优先级不可重复
         */
        Priority?: number;
        /**
         * 策略执行动作，限定取值："Permit"/"Deny"
         */
        RouteAction?: string;
        /**
         * 当执行动作为 "Permit" 时，给匹配中的路由设置路由优先级，范围：[1,255]，数值越小优先级越大
         */
        RoutePriority?: number;
        /**
         * 路由策略需要匹配的路由的所在地域数组
         */
        SrcRegions?: string[];
        /**
         * 路由策略需要匹配的路由的网络实例类型数组，限定取值："VPC" / "UWAN-VRouter"
         */
        SrcNetworkTypes?: string[];
        /**
         *
         */
        SrcNetworks?: {
            /**
             * 路由策略需要匹配的路由的网络实例ID数组
             */
            NetworkId?: string;
            /**
             * 路由策略需要匹配的路由的网络实例下的网段数组
             */
            Prefixes?: string[];
        }[];
        /**
         * 路由策略需要作用的网络实例类型数组，限定取值："VPC" / "UWAN-VRouter"
         */
        DstNetworkTypes?: string[];
        /**
         *
         */
        DstNetworks?: {
            /**
             * 路由策略需要作用的网络实例ID数组
             */
            NetworkId?: string;
        }[];
    };
}
/**
 * UpdateRoutePolicy - 修改路由策略
 */
export interface UpdateRoutePolicyResponse {
}
