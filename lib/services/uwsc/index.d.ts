import Client from '../../core/client';
import { ConfigOptions } from '../../core/config';
import { CredentialOptions } from '../../core/credential';
/**
 * This client is used to call actions of **uwsc** service
 */
export default class UWSCClient extends Client {
    constructor({ config, credential, }: {
        config: ConfigOptions;
        credential: CredentialOptions;
    });
    /**
     * AddExportLineRules - 添加加速规则
     *
     * See also: https://docs.ucloud.cn/api/uwsc-api/add_export_line_rules
     */
    addExportLineRules(request?: AddExportLineRulesRequest): Promise<AddExportLineRulesResponse>;
    /**
     * BindCPE - 绑定 CPE
     *
     * See also: https://docs.ucloud.cn/api/uwsc-api/bind_cpe
     */
    bindCPE(request?: BindCPERequest): Promise<BindCPEResponse>;
    /**
     * CreateCEGateway - 创建CE客户网关
     *
     * See also: https://docs.ucloud.cn/api/uwsc-api/create_ce_gateway
     */
    createCEGateway(request?: CreateCEGatewayRequest): Promise<CreateCEGatewayResponse>;
    /**
     * CreateCETunnel - 创建隧道
     *
     * See also: https://docs.ucloud.cn/api/uwsc-api/create_ce_tunnel
     */
    createCETunnel(request?: CreateCETunnelRequest): Promise<CreateCETunnelResponse>;
    /**
     * CreateCPE - 创建 CPE
     *
     * See also: https://docs.ucloud.cn/api/uwsc-api/create_cpe
     */
    createCPE(request?: CreateCPERequest): Promise<CreateCPEResponse>;
    /**
     * CreateExportLine - 创建加速线路
     *
     * See also: https://docs.ucloud.cn/api/uwsc-api/create_export_line
     */
    createExportLine(request?: CreateExportLineRequest): Promise<CreateExportLineResponse>;
    /**
     * CreatePOPGW - 创建UWAN虚拟路由器
     *
     * See also: https://docs.ucloud.cn/api/uwsc-api/create_popgw
     */
    createPOPGW(request?: CreatePOPGWRequest): Promise<CreatePOPGWResponse>;
    /**
     * DeleteCEGateway - 删除CE网关
     *
     * See also: https://docs.ucloud.cn/api/uwsc-api/delete_ce_gateway
     */
    deleteCEGateway(request?: DeleteCEGatewayRequest): Promise<DeleteCEGatewayResponse>;
    /**
     * DeleteCETunnel - 删除隧道
     *
     * See also: https://docs.ucloud.cn/api/uwsc-api/delete_ce_tunnel
     */
    deleteCETunnel(request?: DeleteCETunnelRequest): Promise<DeleteCETunnelResponse>;
    /**
     * DeleteExportLine - 删除加速线路
     *
     * See also: https://docs.ucloud.cn/api/uwsc-api/delete_export_line
     */
    deleteExportLine(request?: DeleteExportLineRequest): Promise<DeleteExportLineResponse>;
    /**
     * DeleteExportLineRules - 删除加速规则
     *
     * See also: https://docs.ucloud.cn/api/uwsc-api/delete_export_line_rules
     */
    deleteExportLineRules(request?: DeleteExportLineRulesRequest): Promise<DeleteExportLineRulesResponse>;
    /**
     * DeletePOPGW - 删除UWAN虚拟路由器
     *
     * See also: https://docs.ucloud.cn/api/uwsc-api/delete_popgw
     */
    deletePOPGW(request?: DeletePOPGWRequest): Promise<DeletePOPGWResponse>;
    /**
     * DescribeCEGateway - 查询CE网关，优先级 Region > PopGwId > VPNId
     *
     * See also: https://docs.ucloud.cn/api/uwsc-api/describe_ce_gateway
     */
    describeCEGateway(request?: DescribeCEGatewayRequest): Promise<DescribeCEGatewayResponse>;
    /**
     * DescribeCETunnel - 查询隧道
     *
     * See also: https://docs.ucloud.cn/api/uwsc-api/describe_ce_tunnel
     */
    describeCETunnel(request?: DescribeCETunnelRequest): Promise<DescribeCETunnelResponse>;
    /**
     * DescribeCPE - 查询 CPE 信息
     *
     * See also: https://docs.ucloud.cn/api/uwsc-api/describe_cpe
     */
    describeCPE(request?: DescribeCPERequest): Promise<DescribeCPEResponse>;
    /**
     * DescribeExportLine - 查询CPE绑定的加速线路信息
     *
     * See also: https://docs.ucloud.cn/api/uwsc-api/describe_export_line
     */
    describeExportLine(request?: DescribeExportLineRequest): Promise<DescribeExportLineResponse>;
    /**
     * DescribeExportLineRules - 查询白名单
     *
     * See also: https://docs.ucloud.cn/api/uwsc-api/describe_export_line_rules
     */
    describeExportLineRules(request?: DescribeExportLineRulesRequest): Promise<DescribeExportLineRulesResponse>;
    /**
     * DescribePOPGW - 查询UWAN虚拟路由器
     *
     * See also: https://docs.ucloud.cn/api/uwsc-api/describe_popgw
     */
    describePOPGW(request?: DescribePOPGWRequest): Promise<DescribePOPGWResponse>;
    /**
     * ListAvailableRegion - 获取可用地域
     *
     * See also: https://docs.ucloud.cn/api/uwsc-api/list_available_region
     */
    listAvailableRegion(request?: ListAvailableRegionRequest): Promise<ListAvailableRegionResponse>;
    /**
     * UpdateBWPackage - 更新UWSC带宽包
     *
     * See also: https://docs.ucloud.cn/api/uwsc-api/update_bw_package
     */
    updateBWPackage(request?: UpdateBWPackageRequest): Promise<UpdateBWPackageResponse>;
    /**
     * UpdateCEGateway - 更新CE网关
     *
     * See also: https://docs.ucloud.cn/api/uwsc-api/update_ce_gateway
     */
    updateCEGateway(request?: UpdateCEGatewayRequest): Promise<UpdateCEGatewayResponse>;
    /**
     * UpdateCETunnel - 更新隧道配置
     *
     * See also: https://docs.ucloud.cn/api/uwsc-api/update_ce_tunnel
     */
    updateCETunnel(request?: UpdateCETunnelRequest): Promise<UpdateCETunnelResponse>;
    /**
     * UpdateCETunnelAttribute - 更新隧道属性
     *
     * See also: https://docs.ucloud.cn/api/uwsc-api/update_ce_tunnel_attribute
     */
    updateCETunnelAttribute(request?: UpdateCETunnelAttributeRequest): Promise<UpdateCETunnelAttributeResponse>;
    /**
     * UpdateExportLine - 修改加速线路
     *
     * See also: https://docs.ucloud.cn/api/uwsc-api/update_export_line
     */
    updateExportLine(request?: UpdateExportLineRequest): Promise<UpdateExportLineResponse>;
    /**
     * UpdatePOPGWAttribute - 更新UWAN虚拟路由器属性
     *
     * See also: https://docs.ucloud.cn/api/uwsc-api/update_popgw_attribute
     */
    updatePOPGWAttribute(request?: UpdatePOPGWAttributeRequest): Promise<UpdatePOPGWAttributeResponse>;
    /**
     * UpgradeExportLine - 升级加速线路
     *
     * See also: https://docs.ucloud.cn/api/uwsc-api/upgrade_export_line
     */
    upgradeExportLine(request?: UpgradeExportLineRequest): Promise<UpgradeExportLineResponse>;
}
/**
 * AddExportLineRules - 添加加速规则
 */
export interface AddExportLineRulesRequest {
    /**
     * UReach资源ID
     */
    ResourceId: string;
    /**
     * 白名单类型：Developer、CrossBorder
     */
    RuleTypes: string[];
}
/**
 * AddExportLineRules - 添加加速规则
 */
export interface AddExportLineRulesResponse {
}
/**
 * BindCPE - 绑定 CPE
 */
export interface BindCPERequest {
    /**
     * cpe id
     */
    CPEId: string;
    /**
     * sn id
     */
    Sn: string;
}
/**
 * BindCPE - 绑定 CPE
 */
export interface BindCPEResponse {
}
/**
 * CreateCEGateway - 创建CE客户网关
 */
export interface CreateCEGatewayRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone?: string;
    /**
     * 所属UWAN虚拟路由器资源ID
     */
    PopGwId: string;
    /**
     * 客户自有公网IP
     */
    PublicIp: string;
    /**
     * IP类型 枚举值：静态IP(Static) | 动态IP(Dynamic)
     */
    IpType: string;
    /**
     * 资源名称
     */
    Name?: string;
    /**
     * 备注
     */
    Remark?: string;
}
/**
 * CreateCEGateway - 创建CE客户网关
 */
export interface CreateCEGatewayResponse {
    /**
     * 客户网关资源 ID
     */
    VPNId: string;
    /**
     * 请求 ID
     */
    RequestId?: string;
}
/**
 * CreateCETunnel - 创建隧道
 */
export interface CreateCETunnelRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone?: string;
    /**
     * 所属CE网关资源ID
     */
    VPNId: string;
    /**
     *
     */
    IKEConf?: {
        /**
         * IKE 共享密钥
         */
        PreSharedKey: string;
        /**
         * IKE 版本，取值： "ike v1"，"ike v2"
         */
        Version: string;
        /**
         * IKE 协商模式，主模式(main)/野蛮模式(aggressive)，IKE V2时不使用该参数
         */
        ExchangeMode: string;
        /**
         * IKE 加密算法，取值："aes128", "aes192", "aes256", "aes512", "3des"
         */
        EncryptionAlgorithm: string;
        /**
         * IKE 认证算法，取值："md5", "sha1", "sha2-256"
         */
        AuthenticationAlgorithm: string;
        /**
         * DH group，指定IKE交换密钥时使用的DH组。取值："1", "2", "5", "14", "15", "16"
         */
        DhGroup: string;
        /**
         * 本端标识，取值：“auto”，“<ip-address>”
         */
        LocalId: string;
        /**
         * 对端标识，取值：“auto”，“<ip-address>”
         */
        RemoteId: string;
        /**
         * IKE SA的生存周期，取值范围：600-604800
         */
        SALifeTime: string;
    };
    /**
     *
     */
    IPSecConf?: {
        /**
         * 需要和 VPC 互通的本地数据中心侧的网段，用于第二阶段协商。
         */
        CENetwork: string[];
        /**
         * IPSec 安全协议，取值：“esp”，“ah”
         */
        Protocol: string;
        /**
         * IPSec 加密算法，取值："aes128", "aes192", "aes256", "aes512", "3des"
         */
        EncryptionAlgorithm: string;
        /**
         * 第二阶段协商的认证算法。取值：md5、sha1、sha2-256。
         */
        AuthenticationAlgorithm: string;
        /**
         * 第二阶段协商使用的 Diffie-Hellman 密钥交换算法。取值：disabled、1、2、5、14、15、16。
         */
        PFSDhGroup: string;
        /**
         * 第二阶段协商出的 SA 的生存周期。单位：秒。取值范围：1200~604800
         */
        SALifeTime: string;
        /**
         * 第二阶段协商出的 SA 的生存周期。单位：字节 KB。取值范围：8000 – 20000000，默认使用SA超时时间
         */
        SALifetimeBytes?: string;
    };
    /**
     * IPSec 关闭后动作，枚举值：restart、trap、none
     */
    CloseAction: string;
    /**
     *
     */
    DPDConf?: {
        /**
         * 是否开启 DPD（对等体存活检测）功能。取值：0（关闭）、1（开启）
         */
        Enabled: number;
        /**
         * DPD超时后的动作,Enable为1（开启）时有效。可取值为clear（断开）、restart（重试）和 trap（流量触发）
         */
        Action?: string;
        /**
         * DPD探测间隔时间。dpdEnable为1（开启）时有效。单位为秒，默认为 10
         */
        Delay?: number;
        /**
         * DPD超时时间。即探测确认对端不存在需要的时间。dpdEnable为1（开启）时有效。单位为秒。取值范围为 30-60（IKEv2 默认为 0）
         */
        Timeout?: number;
    };
    /**
     * 路由模式，枚举值：感兴趣流(FLow) | BGP(BGP)
     */
    Mode: string;
    /**
     *
     */
    BGPConf?: {
        /**
         * BGP隧道网段。该网段需是一个在 169.254.0.0/16 内的掩码长度为 30 的网段。
         */
        TunnelCidr?: string;
        /**
         * Ucloud侧的自治系统号。
         */
        LocalAsn?: string;
        /**
         * 对端BGP ASN号。
         */
        PeerAsn?: string;
        /**
         * 云端BGP地址。必须从BGP隧道网段内分配。
         */
        LocalIp?: string;
        /**
         * 用户端BGP地址。必须从BGP隧道网段内分配。
         */
        PeerIp?: string;
    };
    /**
     * 资源名称
     */
    Name?: string;
    /**
     * 备注
     */
    Remark?: string;
}
/**
 * CreateCETunnel - 创建隧道
 */
export interface CreateCETunnelResponse {
    /**
     * VPN 隧道 ID
     */
    VPNTunnelId: string;
}
/**
 * CreateCPE - 创建 CPE
 */
export interface CreateCPERequest {
    /**
     * cpe 名称
     */
    Name: string;
    /**
     * cpe 备注
     */
    Remark: string;
    /**
     * 设备型号，枚举值: UCPE3600、UCPE3601
     */
    DeviceType: string;
    /**
     * 标签：UReach智能网关：Access
     */
    Label?: string;
    /**
     * 结构体，详见UserInfo模型
     */
    UserInfo?: string;
    /**
     * 数量，默认为1
     */
    Count?: number;
}
/**
 * CreateCPE - 创建 CPE
 */
export interface CreateCPEResponse {
    /**
     * cpe id
     */
    CPEId: string;
}
/**
 * CreateExportLine - 创建加速线路
 */
export interface CreateExportLineRequest {
    /**
     * 本端地域
     */
    FromRegion: string;
    /**
     * 目标地域
     */
    ToRegion: string;
    /**
     * IP类型：International、BGP、Native、Resident
     */
    IpType: string;
    /**
     * CPE Id
     */
    CPEId: string;
    /**
     * 套餐类型：2M-Entry、5M-Basic、10M-Enterprise
     */
    PkgType?: string;
    /**
     * 带宽大小
     */
    Bandwidth?: number;
    /**
     * 资源名称
     */
    Name?: string;
    /**
     * 业务组名称, 默认为 "Default"
     */
    Tag?: string;
    /**
     * 计费模式。枚举值为： Year，按年付费； Month，按月付费； Dynamic，按小时付费（需开启权限）。默认为月付
     */
    ChargeType?: string;
    /**
     * 购买时长。默认: 1。按小时购买(Dynamic)时无需此参数。 月付时，此参数传0，代表了购买至月末。
     */
    Quantity?: number;
    /**
     * 备注
     */
    Remark?: string;
    /**
     * 计费类型：fixed-bw，固定带宽；traffic，流量计费
     */
    PayMode?: string;
    /**
     * 代金券ID。请登录用户中心查看
     */
    CouponId?: number;
}
/**
 * CreateExportLine - 创建加速线路
 */
export interface CreateExportLineResponse {
    /**
     * 资源ID
     */
    ResourceId: string;
}
/**
 * CreatePOPGW - 创建UWAN虚拟路由器
 */
export interface CreatePOPGWRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone?: string;
    /**
     *
     */
    BWConf?: {
        /**
         * 带宽的名称
         */
        Name: string;
        /**
         * 带宽的计费方式，取值：- fixed-bw：固定带宽计费；- traffic：流量计费。
         */
        PayMode: string;
        /**
         * UWAN 网关的带宽规格。取值：1-100。单位：Mbps。
         */
        BwMax: number;
        /**
         * 付费方式，枚举值：- Month：月付；- Year：年付；- Postpadi：后付费（仅支持流量计费方式）
         */
        ChargeType: string;
        /**
         * 带宽购买时长，默认为 0，代表有效期至月底
         */
        Quantity?: number;
        /**
         * 产品 ID
         */
        ProductId?: number;
        /**
         * 优惠券 ID
         */
        CouponId?: string;
        /**
         * 带宽包备注信息
         */
        Remark?: string;
        /**
         * 带宽类型，默认为空字符串
         */
        BwType?: string;
    };
    /**
     * 资源名称
     */
    Name: string;
    /**
     * UWAN 网关的购买时长，默认为 0，代表有效期至月底。(保持和BWConf.Quantity 相同)
     */
    Quantity: number;
    /**
     * 资源备注信息
     */
    Remark?: string;
    /**
     * 付费方式, 枚举值为: - Year：按年付费; - Month:  按月付费；(月付非必填，默认为 0；年付必填。)
     */
    ChargeType?: string;
    /**
     * 入网类型，仅支持“IPSec”
     */
    Type?: string;
    /**
     * 代金券ID, 默认不使用
     */
    CouponId?: string;
}
/**
 * CreatePOPGW - 创建UWAN虚拟路由器
 */
export interface CreatePOPGWResponse {
    /**
     * UWAN 网关实例 ID
     */
    PopGwId?: string;
    /**
     * 请求 ID
     */
    RequestId?: string;
}
/**
 * DeleteCEGateway - 删除CE网关
 */
export interface DeleteCEGatewayRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone?: string;
    /**
     * CE 实例 ID
     */
    VPNId: string;
}
/**
 * DeleteCEGateway - 删除CE网关
 */
export interface DeleteCEGatewayResponse {
    /**
     * 请求 ID
     */
    RequestId?: string;
}
/**
 * DeleteCETunnel - 删除隧道
 */
export interface DeleteCETunnelRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone?: string;
    /**
     * 资源ID
     */
    VPNTunnelId: string;
}
/**
 * DeleteCETunnel - 删除隧道
 */
export interface DeleteCETunnelResponse {
    /**
     * 请求 ID
     */
    RequestId?: string;
}
/**
 * DeleteExportLine - 删除加速线路
 */
export interface DeleteExportLineRequest {
    /**
     * UReach资源ID
     */
    ResourceId: string;
}
/**
 * DeleteExportLine - 删除加速线路
 */
export interface DeleteExportLineResponse {
}
/**
 * DeleteExportLineRules - 删除加速规则
 */
export interface DeleteExportLineRulesRequest {
    /**
     * UReach资源ID
     */
    ResourceId: string;
    /**
     * 白名单类型：Developer、CrossBorder
     */
    RuleTypes: string[];
}
/**
 * DeleteExportLineRules - 删除加速规则
 */
export interface DeleteExportLineRulesResponse {
}
/**
 * DeletePOPGW - 删除UWAN虚拟路由器
 */
export interface DeletePOPGWRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone?: string;
    /**
     * UWAN虚拟路由器资源ID
     */
    PopGwId: string;
}
/**
 * DeletePOPGW - 删除UWAN虚拟路由器
 */
export interface DeletePOPGWResponse {
    /**
     * 请求 ID
     */
    RequestId?: string;
}
/**
 * DescribeCEGateway - 查询CE网关，优先级 Region > PopGwId > VPNId
 */
export interface DescribeCEGatewayRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone?: string;
    /**
     * UWAN 实例 ID
     */
    PopGwId?: string;
    /**
     * CE 实例 ID
     */
    VPNId?: string;
    /**
     * 偏移量
     */
    Offset?: number;
    /**
     * 限制量
     */
    Limit?: number;
}
/**
 * DescribeCEGateway - 查询CE网关，优先级 Region > PopGwId > VPNId
 */
export interface DescribeCEGatewayResponse {
    /**
     * 总数
     */
    TotalCount: number;
    /**
     * CE信息
     */
    VPNInfos: {
        /**
         * 地域
         */
        Region?: string;
        /**
         * UWAN 实例 ID
         */
        PopGwId?: string;
        /**
         * UWAN 资源名称
         */
        PopGwName?: string;
        /**
         * CE 网关 ID
         */
        VPNId?: string;
        /**
         * 子隧道 ID
         */
        VPNTunnelIds?: string[];
        /**
         * CE 名称
         */
        Name?: string;
        /**
         * 客户自有外网 IP
         */
        PublicIp?: string;
        /**
         * CE网关的接入方式：静态IP（Static）,动态IP（Dynamic）
         */
        IpType?: string;
        /**
         * 状态（默认为空）
         */
        Status?: string;
        /**
         * 创建时间
         */
        CreateTime?: number;
        /**
         * CE备注
         */
        Remark?: string;
    }[];
    /**
     * 请求 ID
     */
    RequestId?: string;
}
/**
 * DescribeCETunnel - 查询隧道
 */
export interface DescribeCETunnelRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone?: string;
    /**
     * CE 网关 ID
     */
    VPNId?: string;
    /**
     * 隧道 ID
     */
    VPNTunnelId?: string;
    /**
     * 列表起始位置偏移量，默认为0
     */
    Offset?: number;
    /**
     * 返回数据长度，默认为20，最大100
     */
    Limit?: number;
}
/**
 * DescribeCETunnel - 查询隧道
 */
export interface DescribeCETunnelResponse {
    /**
     * 总数
     */
    TotalCount: number;
    /**
     * 隧道信息
     */
    VPNTunnelInfos: {
        /**
         * 地域
         */
        Region?: string;
        /**
         * CE 网关 ID
         */
        VPNId?: string;
        /**
         * 隧道 ID
         */
        VPNTunnelId?: string;
        /**
         * 隧道名称
         */
        Name?: string;
        /**
         * 备注
         */
        Remark?: string;
        /**
         * 创建时间
         */
        CreateTime?: number;
        /**
         * IKE 配置信息
         */
        IKEConf?: {
            /**
             * 预共享密钥
             */
            PreSharedKey?: string;
            /**
             * 版本
             */
            Version?: string;
            /**
             * 协商模式
             */
            ExchangeMode?: string;
            /**
             * 加密算法
             */
            EncryptionAlgorithm?: string;
            /**
             * 认证算法
             */
            AuthenticationAlgorithm?: string;
            /**
             * 分组信息
             */
            DhGroup?: string;
            /**
             * 本端标识
             */
            LocalId?: string;
            /**
             * 对端标识
             */
            RemoteId?: string;
            /**
             * IKE SA的生存周期
             */
            SALifeTime?: string;
        };
        /**
         * IPSec 配置信息
         */
        IPSecConf?: {
            /**
             * 客户网段
             */
            CENetwork?: string[];
            /**
             * 安全协议
             */
            Protocol?: string;
            /**
             * 加密算法
             */
            EncryptionAlgorithm?: string;
            /**
             * 认证算法
             */
            AuthenticationAlgorithm?: string;
            /**
             * 第二阶段协商使用的 Diffie-Hellman 密钥交换算法
             */
            PFSDhGroup?: string;
            /**
             * 第二阶段的 SA 的生存周期
             */
            SALifeTime?: string;
            /**
             * 第二阶段的 SA 的生存周期
             */
            SALifetimeBytes?: string;
        };
        /**
         * 隧道关闭后动作
         */
        CloseAction?: string;
        /**
         * BGP 配置信息
         */
        BGPConf?: {
            /**
             * BGP隧道网段
             */
            TunnelCidr?: string;
            /**
             * 本端自治系统号
             */
            LocalAsn?: number;
            /**
             * 对端自治系统号
             */
            PeerAsn?: number;
            /**
             * 云端BGP地址
             */
            LocalIp?: string;
            /**
             * 用户端BGP地址
             */
            PeerIp?: string;
        };
        /**
         * 路由模式
         */
        Mode?: string;
        /**
         * DPD 配置信息
         */
        DPDConf?: {
            /**
             * 是否开启 DPD
             */
            Enabled: number;
            /**
             * DPD 行为
             */
            Action: string;
            /**
             * DPD 探测间隔时间
             */
            Delay: number;
            /**
             * DPD 探测超时时间
             */
            Timeout: number;
        };
        /**
         * 隧道协商动作
         */
        StartAction?: string;
    }[];
    /**
     * 请求 ID
     */
    RequestId?: string;
}
/**
 * DescribeCPE - 查询 CPE 信息
 */
export interface DescribeCPERequest {
    /**
     * cpe id
     */
    CPEId?: string;
    /**
     * 标签：Access、Network
     */
    Label?: string;
}
/**
 * DescribeCPE - 查询 CPE 信息
 */
export interface DescribeCPEResponse {
    /**
     * cpe 详情
     */
    CPEInfos?: {
        /**
         * 资源ID
         */
        CPEId?: string;
        /**
         * 资源名称
         */
        CPEName?: string;
        /**
         * 备注
         */
        Remark?: string;
        /**
         * 设备型号
         */
        DeviceTypeName?: string;
        /**
         * 供应商
         */
        Vendor?: string;
        /**
         * 绑定的UWAN资源ID
         */
        PopGwId?: string[];
        /**
         * 设备SN
         */
        Sn?: string;
        /**
         * 状态
         */
        Status?: number;
        /**
         * 配置更新时间
         */
        ConfUpdateTime?: number;
        /**
         * 端口
         */
        Ports?: string[];
        /**
         * 链路数量
         */
        LinkNum?: number;
        /**
         * 创建时间
         */
        CreateTime?: number;
        /**
         * 是否与线路绑定
         */
        LineStatus?: string;
        /**
         * 绑定的UReach线路资源ID
         */
        ResourceIds?: string[];
        /**
         * 有效使用时间(天)
         */
        UseTime?: number;
    }[];
}
/**
 * DescribeExportLine - 查询CPE绑定的加速线路信息
 */
export interface DescribeExportLineRequest {
    /**
     * CPE资源ID
     */
    CPEId?: string;
    /**
     * UReach资源ID
     */
    ResourceId?: string;
}
/**
 * DescribeExportLine - 查询CPE绑定的加速线路信息
 */
export interface DescribeExportLineResponse {
    /**
     * 线路信息
     */
    LineInfos?: {
        /**
         * 名称
         */
        Name?: string;
        /**
         * 备注
         */
        Remark?: string;
        /**
         * 线路资源ID
         */
        ResourceId?: string;
        /**
         * 线路资源ID对应的加速线路ID
         */
        InstanceId?: string;
        /**
         * 带宽大小(Mbps)
         */
        Bandwidth?: number;
        /**
         * 付费方式(按月、按年等)
         */
        ChargeType?: string;
        /**
         * 计费方式(固定带宽: fixed-bw；流量计费：traffic)
         */
        PayMode?: string;
        /**
         * 入口地域
         */
        FromRegion?: string;
        /**
         * 入口地域名称
         */
        FromRegionName?: string;
        /**
         * 出口地域
         */
        ToRegion?: string;
        /**
         * 出口地域名称
         */
        ToRegionName?: string;
        /**
         *
         */
        IP?: string[];
        /**
         * 线路是否绑定CPE；"1"：已绑定；"0"未绑定
         */
        Status?: string;
        /**
         * 创建时间
         */
        CreateTime?: number;
        /**
         * 到期时间
         */
        ExpireTime?: number;
        /**
         * 线路绑定的CPE资源ID
         */
        CPEIds?: string[];
        /**
         * 套餐类型
         */
        PkgType?: string;
        /**
         * IP类型
         */
        IpType?: string;
        /**
         * 是否过期(normal/expire)
         */
        InstanceStatus?: string;
        /**
         *
         */
        Socks?: {
            /**
             *
             */
            Addr?: string;
            /**
             *
             */
            Port?: number;
            /**
             *
             */
            Account?: string;
        };
        /**
         * 源IP地址
         */
        Source?: string[];
    }[];
}
/**
 * DescribeExportLineRules - 查询白名单
 */
export interface DescribeExportLineRulesRequest {
    /**
     * UReach资源ID
     */
    ResourceId?: string;
    /**
     * 白名单类型
     */
    RuleType?: string;
}
/**
 * DescribeExportLineRules - 查询白名单
 */
export interface DescribeExportLineRulesResponse {
    /**
     * 白名单信息
     */
    WhiteListInfos: {
        /**
         *
         */
        RuleType?: string;
        /**
         *
         */
        Name?: string;
        /**
         *
         */
        Remark?: string;
    }[];
}
/**
 * DescribePOPGW - 查询UWAN虚拟路由器
 */
export interface DescribePOPGWRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone?: string;
    /**
     * UWAN 实例 ID
     */
    PopGwId: string;
    /**
     * 偏移量
     */
    Offset?: number;
    /**
     * 限制量
     */
    Limit?: number;
}
/**
 * DescribePOPGW - 查询UWAN虚拟路由器
 */
export interface DescribePOPGWResponse {
    /**
     * 总数
     */
    TotalCount: number;
    /**
     * UWAN 实例信息
     */
    POPGWInfos: {
        /**
         * 地域信息
         */
        Region?: string;
        /**
         * 网关实例 ID
         */
        PopGwId?: string;
        /**
         * 网关名称
         */
        Name?: string;
        /**
         * 备注
         */
        Remark?: string;
        /**
         * 创建时间
         */
        CreateTime?: number;
        /**
         * 带宽包信息
         */
        BWPackageInfo?: {
            /**
             * UWAN 网关带宽 ID
             */
            BwId?: string;
            /**
             * 带宽包名称
             */
            Name?: string;
            /**
             * 备注
             */
            Remark?: string;
            /**
             * 计费方式eg:(固定带宽)
             */
            PayMode?: string;
            /**
             * 付费方式eg:(Month)
             */
            ChargeType?: string;
            /**
             * 网关外网 IP
             */
            PublicIp?: string;
            /**
             * 最大带宽值
             */
            BandWidth?: number;
            /**
             * 过期时间
             */
            DueTime?: number;
        };
        /**
         * 云联网信息
         */
        UGNInfo?: {
            /**
             * 云联网 ID
             */
            UGNId?: string;
            /**
             * 云联网名称
             */
            UGNName?: string;
            /**
             * UGN 带宽包信息
             */
            UGNBWInfos?: {
                /**
                 * UGN带宽包ID
                 */
                UGNBWId?: string;
                /**
                 * UGN带宽包名称
                 */
                UGNBWName?: string;
            }[];
        };
        /**
         * CPE数量
         */
        CPENum?: number;
        /**
         * 客户网关数量
         */
        CENum?: number;
        /**
         * VCPE 数量
         */
        VCPENum?: number;
        /**
         * 唯一标识
         */
        VNI?: number;
        /**
         * 过期时间
         */
        DueTime?: number;
        /**
         * 付费类型
         */
        ChargeType?: string;
        /**
         * 规格：IPSec、SSL
         */
        Type?: string;
    }[];
    /**
     * 请求 ID
     */
    RequestId?: string;
}
/**
 * ListAvailableRegion - 获取可用地域
 */
export interface ListAvailableRegionRequest {
}
/**
 * ListAvailableRegion - 获取可用地域
 */
export interface ListAvailableRegionResponse {
    /**
     * 可用地域
     */
    Region: string[];
}
/**
 * UpdateBWPackage - 更新UWSC带宽包
 */
export interface UpdateBWPackageRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone?: string;
    /**
     * 带宽包资源ID
     */
    BwId: string;
    /**
     * 带宽峰值
     */
    BwMax: number;
}
/**
 * UpdateBWPackage - 更新UWSC带宽包
 */
export interface UpdateBWPackageResponse {
    /**
     * 请求 ID
     */
    RequestId?: string;
}
/**
 * UpdateCEGateway - 更新CE网关
 */
export interface UpdateCEGatewayRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone?: string;
    /**
     * CE网关资源ID
     */
    VPNId: string;
    /**
     * 公网IP
     */
    PublicIp?: string;
    /**
     * 资源名称
     */
    Name?: string;
    /**
     * 备注
     */
    Remark?: string;
}
/**
 * UpdateCEGateway - 更新CE网关
 */
export interface UpdateCEGatewayResponse {
    /**
     * 请求 ID
     */
    RequestId?: string;
}
/**
 * UpdateCETunnel - 更新隧道配置
 */
export interface UpdateCETunnelRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone?: string;
    /**
     * 资源ID
     */
    VPNTunnelId: string;
    /**
     *
     */
    IKEConf?: {
        /**
         * IKE 共享密钥
         */
        PreSharedKey: string;
        /**
         * IKE 版本，取值： "ike v1"，"ike v2"
         */
        Version: string;
        /**
         * IKE 协商模式，主模式(main)/野蛮模式(aggressive)，IKE V2时不使用该参数
         */
        ExchangeMode: string;
        /**
         * IKE 加密算法，取值："aes128", "aes192", "aes256", "aes512", "3des"
         */
        EncryptionAlgorithm: string;
        /**
         * IKE 认证算法，取值："md5", "sha1", "sha2-256"
         */
        AuthenticationAlgorithm: string;
        /**
         * DH group，指定IKE交换密钥时使用的DH组。取值："1", "2", "5", "14", "15", "16"
         */
        DhGroup: string;
        /**
         * 本端标识，取值：“auto”，“<ip-address>”
         */
        LocalId: string;
        /**
         * 对端标识，取值：“auto”，“<ip-address>”
         */
        RemoteId: string;
        /**
         * IKE SA的生存周期，取值范围：600-604800
         */
        SALifeTime: string;
    };
    /**
     *
     */
    IPSecConf?: {
        /**
         * 需要和 VPC 互通的本地数据中心侧的网段，用于第二阶段协商。
         */
        CENetwork: string[];
        /**
         * IPSec 安全协议，取值：“esp”，“ah”
         */
        Protocol: string;
        /**
         * IPSec 加密算法，取值："aes128", "aes192", "aes256", "aes512", "3des"
         */
        EncryptionAlgorithm: string;
        /**
         * 第二阶段协商的认证算法。取值：md5、sha1、sha2-256。
         */
        AuthenticationAlgorithm: string;
        /**
         * 第二阶段协商使用的 Diffie-Hellman 密钥交换算法。取值：disabled、1、2、5、14、15、16。
         */
        PFSDhGroup: string;
        /**
         * 第二阶段协商出的 SA 的生存周期。单位：秒。取值范围：1200~604800
         */
        SALifeTime: string;
        /**
         * 第二阶段协商出的 SA 的生存周期。单位：字节 KB。取值范围：8000 – 20000000，默认使用SA超时时间
         */
        SALifetimeBytes?: string;
    };
    /**
     * IPSec 关闭后动作，枚举值：restart、trap、none
     */
    CloseAction?: string;
    /**
     *
     */
    DPDConf?: {
        /**
         * 是否开启 DPD（对等体存活检测）功能。取值：0（关闭）、1（开启）
         */
        Enabled?: string;
        /**
         * DPD超时后的动作,Enable为1（开启）时有效。可取值为clear（断开）、restart（重试）和 trap（流量触发）
         */
        Action?: string;
        /**
         * DPD探测间隔时间。dpdEnable为1（开启）时有效。单位为秒，默认为 10
         */
        Delay?: string;
        /**
         * DPD超时时间。即探测确认对端不存在需要的时间。dpdEnable为1（开启）时有效。单位为秒。取值范围为 30-60（IKEv2 默认为 0）
         */
        Timeout?: string;
    };
    /**
     *
     */
    BGPConf?: {
        /**
         * BGP隧道网段。该网段需是一个在 169.254.0.0/16 内的掩码长度为 30 的网段。
         */
        TunnelCidr?: string;
        /**
         * Ucloud侧的自治系统号。
         */
        LocalAsn?: string;
        /**
         * 对端BGP ASN号。
         */
        PeerAsn?: string;
        /**
         * 云端BGP地址。必须从BGP隧道网段内分配。
         */
        LocalIp?: string;
        /**
         * 用户端BGP地址。必须从BGP隧道网段内分配。
         */
        PeerIp?: string;
    };
}
/**
 * UpdateCETunnel - 更新隧道配置
 */
export interface UpdateCETunnelResponse {
}
/**
 * UpdateCETunnelAttribute - 更新隧道属性
 */
export interface UpdateCETunnelAttributeRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone?: string;
    /**
     * 资源ID
     */
    VPNTunnelId: string;
    /**
     * 资源名称
     */
    Name?: string;
    /**
     * 备注
     */
    Remark?: string;
}
/**
 * UpdateCETunnelAttribute - 更新隧道属性
 */
export interface UpdateCETunnelAttributeResponse {
    /**
     * 请求 ID
     */
    RequestId?: string;
}
/**
 * UpdateExportLine - 修改加速线路
 */
export interface UpdateExportLineRequest {
    /**
     * UReach资源ID
     */
    ResourceId: string;
    /**
     * 带宽大小（仅自定义套餐支持修改）
     */
    Bandwidth: string;
}
/**
 * UpdateExportLine - 修改加速线路
 */
export interface UpdateExportLineResponse {
}
/**
 * UpdatePOPGWAttribute - 更新UWAN虚拟路由器属性
 */
export interface UpdatePOPGWAttributeRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone?: string;
    /**
     * UWAN虚拟路由器资源ID
     */
    PopGwId: string;
    /**
     * 资源名称
     */
    Name?: string;
    /**
     * 备注
     */
    Remark?: string;
}
/**
 * UpdatePOPGWAttribute - 更新UWAN虚拟路由器属性
 */
export interface UpdatePOPGWAttributeResponse {
    /**
     * 请求 ID
     */
    RequestId?: string;
}
/**
 * UpgradeExportLine - 升级加速线路
 */
export interface UpgradeExportLineRequest {
    /**
     * UReach资源ID
     */
    ResourceId: string;
    /**
     * 目标套餐类型：2M-Entry、5M-Basic、10M-Enterprise
     */
    PkgType: string;
    /**
     * 原IP类型：International、BGP、Native、Resident
     */
    IpType: string;
    /**
     * 带宽大小
     */
    Bandwidth?: number;
    /**
     * 计费模式。枚举值为： Year，按年付费； Month，按月付费； Dynamic，按小时付费（需开启权限）。默认为月付
     */
    ChargeType?: string;
    /**
     * 购买时长。默认: 1。按小时购买(Dynamic)时无需此参数。 月付时，此参数传0，代表了购买至月末。
     */
    Quantity?: number;
    /**
     * 代金券ID。请登录用户中心查看
     */
    CouponId?: number;
}
/**
 * UpgradeExportLine - 升级加速线路
 */
export interface UpgradeExportLineResponse {
}
