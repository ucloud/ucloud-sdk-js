


    
/**
 * IPSecData - 
 */
export interface IPSecData {
    /**
     * IPSec通道中使用的认证算法
     */
    IPSecAuthenticationAlgorithm?:string
    /**
     * IPSec通道中使用的加密算法
     */
    IPSecEncryptionAlgorithm?:string
    /**
     * 指定VPN连接的本地子网，用逗号分隔
     */
    IPSecLocalSubnetIds?:string[]
    /**
     * 使用的安全协议，ESP或AH
     */
    IPSecProtocol?:string
    /**
     * 指定VPN连接的客户网段，用逗号分隔
     */
    IPSecRemoteSubnets?:string[]
    /**
     * IPSec中SA的生存时间
     */
    IPSecSALifetime?:string
    /**
     * IPSec中SA的生存时间（以字节计）
     */
    IPSecSALifetimeBytes?:string
    /**
     * 是否开启PFS功能,Disable表示关闭，数字表示DH组
     */
    IPSecPFSDhGroup?:string
}
    
/**
 * CreateVPNGatewayRequest - 
 */
export interface CreateVPNGatewayRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId:string
    /**
     * 新建VPN网关名称
     */
    VPNGatewayName:string
    /**
     * 新建VPN网关所属VPC的资源ID
     */
    VPCId:string
    /**
     * 购买的VPN网关规格，枚举值为: Standard, 标准型; Enhanced, 增强型
     */
    Grade:string
    /**
     * 备注，默认为空
     */
    Remark?:string
    /**
     * 业务组名称，默认为 "Default"
     */
    Tag?:string
    /**
     * 购买时长, 默认: 1
     */
    Quantity?:number
    /**
     * 付费方式, 枚举值为: Year, 按年付费; Month, 按月付费；Dynamic, 按需付费(需开启权限)；Trial, 试用(需开启权限)；默认为按月付费
     */
    ChargeType?:string
    /**
     * 业务组ID
     */
    BusinessId?:string
    /**
     * 若要绑定EIP，在此填上EIP的资源ID
     */
    EIPId?:string
    /**
     * 代金券ID, 默认不使用
     */
    CouponId?:string
}
    
/**
 * VPNGatewayDataSet - 
 */
export interface VPNGatewayDataSet {
    /**
     * 网关Id
     */
    VPNGatewayId?:string
    /**
     * 网关名字
     */
    VPNGatewayName?:string
    /**
     * 网关业务组
     */
    Tag?:string
    /**
     * 网关备注
     */
    Remark?:string
    /**
     * 所属VPCId
     */
    VPCId?:string
    /**
     * 所属VPC名字
     */
    VPCName?:string
    /**
     * 付费类型
     */
    ChargeType?:string
    /**
     * 创建时间
     */
    CreateTime?:number
    /**
     * 到期时间
     */
    ExpireTime?:number
    /**
     * 是否自动续费
     */
    AutoRenew?:string
    /**
     * 网关类型
     */
    Grade?:string
    /**
     * 绑定EIP的IP地址
     */
    EIP?:string
    /**
     * EIP类型
     */
    EIPType?:string
    /**
     * EIPID
     */
    EIPId?:string
}
    
/**
 * RemoteVPNGatewayDataSet - 
 */
export interface RemoteVPNGatewayDataSet {
    /**
     * 客户网关ID
     */
    RemoteVPNGatewayId?:string
    /**
     * 客户网关名称
     */
    RemoteVPNGatewayName?:string
    /**
     * 客户网关IP地址
     */
    RemoteVPNGatewayAddr?:string
    /**
     * 用户组
     */
    Tag?:string
    /**
     * 备注
     */
    Remark?:string
    /**
     * 创建时间
     */
    CreateTime?:number
    /**
     * 活跃的隧道数量
     */
    TunnelCount?:number
}
    
/**
 * DescribeVPNGatewayResponse - 
 */
export interface DescribeVPNGatewayResponse {
    /**
     * 满足条件的VPN网关总数
     */
    TotalCount?:number
    /**
     * 获取的VPN网关信息列表，每项参数详见 VPNGatewayDataSet
     */
    DataSet?:
            VPNGatewayDataSet[]
}
    
/**
 * GetVPNGatewayPriceResponse - 
 */
export interface GetVPNGatewayPriceResponse {
    /**
     * 获取的VPN网关价格信息列表，每项参数详见 VPNGatewayPriceSet
     */
    PriceSet?:
            VPNGatewayPriceSet[]
}
    
/**
 * GetVPNGatewayUpgradePriceResponse - 
 */
export interface GetVPNGatewayUpgradePriceResponse {
    /**
     * 调整规格后的VPN网关价格, 单位为"元", 如需退费此处为负值
     */
    Price?:number
}
    
/**
 * VPNTunnelDataSet - 
 */
export interface VPNTunnelDataSet {
    /**
     * 隧道id
     */
    VPNTunnelId?:string
    /**
     * 隧道名称
     */
    VPNTunnelName?:string
    /**
     * 用户组
     */
    Tag?:string
    /**
     * 备注
     */
    Remark?:string
    /**
     * 所属VPN网关id
     */
    VPNGatewayId?:string
    /**
     * 对端网关Id
     */
    RemoteVPNGatewayId?:string
    /**
     * VPN网关名字
     */
    VPNGatewayName?:string
    /**
     * 对端网关名字
     */
    RemoteVPNGatewayName?:string
    /**
     * 所属VPCId
     */
    VPCId?:string
    /**
     * 所属VOC名字
     */
    VPCName?:string
    /**
     * 创建时间
     */
    CreateTime?:number
    /**
     * IKE参数
     */
    IKEData?:
        IKEData
    /**
     * IPSec参数
     */
    IPSecData?:
        IPSecData
}
    
/**
 * GetVPNGatewayPriceRequest - 
 */
export interface GetVPNGatewayPriceRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId:string
    /**
     * VPN网关规格。枚举值，包括：标准型：Standard，增强型：Enhanced。
     */
    Grade:string
    /**
     * 付费方式, 枚举值为: Year, 按年付费; Month, 按月付费; Dynamic, 按需付费(需开启权限); 默认为获取三种价格
     */
    ChargeType?:string
    /**
     * 购买时长, 默认: 1
     */
    Quantity?:number
}
    
/**
 * UpdateVPNGatewayResponse - 
 */
export interface UpdateVPNGatewayResponse {
}
    
/**
 * CreateVPNGatewayResponse - 
 */
export interface CreateVPNGatewayResponse {
    /**
     * 新建VPN网关的资源ID
     */
    VPNGatewayId?:string
}
    
/**
 * DeleteVPNGatewayRequest - 
 */
export interface DeleteVPNGatewayRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId:string
    /**
     * VPN网关的资源ID
     */
    VPNGatewayId:string
    /**
     * 删除VPN时是否一并释放EIP。false，只解绑EIP不删除EIP；true，解绑并释放EIP。默认是false
     */
    ReleaseEip?:boolean
}
    
/**
 * DescribeRemoteVPNGatewayResponse - 
 */
export interface DescribeRemoteVPNGatewayResponse {
    /**
     * 符合条件的客户VPN网关总数
     */
    TotalCount?:number
    /**
     * 客户VPN网关列表, 每项参数详见 RemoteVPNGatewayDataSet
     */
    DataSet?:
            RemoteVPNGatewayDataSet[]
}
    
/**
 * CreateRemoteVPNGatewayRequest - 
 */
export interface CreateRemoteVPNGatewayRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId:string
    /**
     * 客户VPN网关名称
     */
    RemoteVPNGatewayName:string
    /**
     * 客户VPN网关地址
     */
    RemoteVPNGatewayAddr:string
    /**
     * 业务组名称，默认为 "Default"
     */
    Tag?:string
    /**
     * 备注，默认为空
     */
    Remark?:string
}
    
/**
 * DeleteVPNGatewayResponse - 
 */
export interface DeleteVPNGatewayResponse {
}
    
/**
 * CreateRemoteVPNGatewayResponse - 
 */
export interface CreateRemoteVPNGatewayResponse {
    /**
     * 新建客户VPN网关的资源ID
     */
    RemoteVPNGatewayId?:string
}
    
/**
 * GetVPNGatewayUpgradePriceRequest - 
 */
export interface GetVPNGatewayUpgradePriceRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId:string
    /**
     * VPN网关的资源ID
     */
    VPNGatewayId:string
    /**
     * 更改的VPN网关规格，枚举值为: Standard, 标准型; Enhanced, 增强型。
     */
    Grade:string
}
    
/**
 * DescribeVPNGatewayRequest - 
 */
export interface DescribeVPNGatewayRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId:string
    /**
     * VPN网关的资源ID，例如VPNGatewayIds.0代表希望获取VPN网关1的信息，VPNGatewayIds.1代表VPN网关2，如果为空，则返回当前Region中所有VPN网关的信息
     */
    VPNGatewayIds?:string[]
    /**
     * VPC的资源ID，返回指定的VPC下的所有VPN网关的信息。默认返回当前Region中所有VPN网关实例的信息
     */
    VPCId?:string
    /**
     * 数据偏移量。默认为0
     */
    Offset?:number
    /**
     * 业务组名称，若指定则返回指定的业务组下的所有VPN网关的信息。
     */
    Tag?:string
    /**
     * 数据分页值。默认为20
     */
    Limit?:number
}
    
/**
 * DeleteVPNTunnelRequest - 
 */
export interface DeleteVPNTunnelRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId:string
    /**
     * VPN隧道的资源ID
     */
    VPNTunnelId:string
}
    
/**
 * DeleteRemoteVPNGatewayResponse - 
 */
export interface DeleteRemoteVPNGatewayResponse {
}
    
/**
 * DeleteRemoteVPNGatewayRequest - 
 */
export interface DeleteRemoteVPNGatewayRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId:string
    /**
     * 客户VPN网关的资源ID
     */
    RemoteVPNGatewayId:string
}
    
/**
 * CreateVPNTunnelResponse - 
 */
export interface CreateVPNTunnelResponse {
    /**
     * VPN隧道的资源ID
     */
    VPNTunnelId?:string
}
    
/**
 * IKEData - 
 */
export interface IKEData {
    /**
     * IKE认证算法
     */
    IKEAuthenticationAlgorithm?:string
    /**
     * IKEDH组
     */
    IKEDhGroup?:string
    /**
     * IKE加密算法
     */
    IKEEncryptionAlgorithm?:string
    /**
     * IKEv1协商模式
     */
    IKEExchangeMode?:string
    /**
     * IKE本地ID标识
     */
    IKELocalId?:string
    /**
     * IKE预共享秘钥
     */
    IKEPreSharedKey?:string
    /**
     * IKE对端ID标识
     */
    IKERemoteId?:string
    /**
     * IKE秘钥生存时间
     */
    IKESALifetime?:string
    /**
     * IKE版本
     */
    IKEVersion?:string
}
    
/**
 * DescribeVPNTunnelRequest - 
 */
export interface DescribeVPNTunnelRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId:string
    /**
     * VPN隧道的资源ID，例如VPNTunnelIds.0代表希望获取信息的VPN隧道1，VPNTunneIds.1代表VPN隧道2，如果为空，则返回当前Region中所有的VPN隧道实例
     */
    VPNTunnelIds?:string[]
    /**
     * 数据偏移量, 默认为0
     */
    Offset?:number
    /**
     * 数据分页值, 默认为20
     */
    Limit?:number
    /**
     * 业务组名称，若指定则返回指定的业务组下的所有VPN网关的信息
     */
    Tag?:string
}
    
/**
 * UpdateVPNTunnelAttributeRequest - 
 */
export interface UpdateVPNTunnelAttributeRequest {
    /**
     * 地域。 参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId:string
    /**
     * VPN隧道的资源ID
     */
    VPNTunnelId:string
    /**
     * 预共享密钥
     */
    IKEPreSharedKey?:string
    /**
     * IKE协商过程中使用的加密算法
     */
    IKEEncryptionAlgorithm?:string
    /**
     * IKE协商过程中使用的认证算法
     */
    IKEAuthenticationAlgorithm?:string
    /**
     * IKE协商过程中使用的模式，可选“主动模式”与“野蛮模式”。IKEV2不使用该参数。
     */
    IKEExchangeMode?:string
    /**
     * 本端标识。不填时默认使用之前的参数，结合IKEversion进行校验，IKEV2时不能为auto。
     */
    IKELocalId?:string
    /**
     * 客户端标识。不填时默认使用之前的参数，结合IKEversion进行校验，IKEV2时不能为auto。
     */
    IKERemoteId?:string
    /**
     * IKE协商过程中使用的DH组
     */
    IKEDhGroup?:string
    /**
     * IKE中SA的生存时间
     */
    IKESALifetime?:string
    /**
     * 使用的安全协议，ESP或AH
     */
    IPSecProtocol?:string
    /**
     * 指定VPN连接的本地子网的id，用逗号分隔
     */
    IPSecLocalSubnetIds?:string[]
    /**
     * 指定VPN连接的客户网段，用逗号分隔
     */
    IPSecRemoteSubnets?:string[]
    /**
     * IPSec隧道中使用的加密算法
     */
    IPSecEncryptionAlgorithm?:string
    /**
     * IPSec隧道中使用的认证算法
     */
    IPSecAuthenticationAlgorithm?:string
    /**
     * IPSec中SA的生存时间
     */
    IPSecSALifetime?:string
    /**
     * IPSec中SA的生存时间（以字节计）
     */
    IPSecSALifetimeBytes?:string
    /**
     * IPSec中的PFS是否开启
     */
    IPSecPFSDhGroup?:string
    /**
     * 枚举值："IKE V1","IKE V2"
     */
    IKEVersion?:string
    /**
     * IPSec隧道关闭后的处理动作，默认与原本一致，若原本为空，必传。枚举值：“none”,不处理（推荐为none，流量会自动触发隧道重建）；“restart”重建
     */
    IPSecCloseAction?:string
}
    
/**
 * CreateVPNTunnelRequest - 
 */
export interface CreateVPNTunnelRequest {
    /**
     * 地域。 参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId:string
    /**
     * VPN隧道名称
     */
    VPNTunnelName:string
    /**
     * VPN网关的资源ID
     */
    VPNGatewayId:string
    /**
     * 客户VPN网关的资源ID
     */
    RemoteVPNGatewayId:string
    /**
     * 预共享密钥
     */
    IKEPreSharedKey:string
    /**
     * vpcId
     */
    VPCId:string
    /**
     * ike版本，枚举值： "IKE V1"，"IKE V2"，默认v1
     */
    IKEVersion:string
    /**
     * 指定VPN连接的本地子网的资源ID，最多可填写10个。
     */
    IPSecLocalSubnetIds:string[]
    /**
     * 指定VPN连接的客户网段，最多可填写20个。
     */
    IPSecRemoteSubnets:string[]
    /**
     * 业务组，默认为“Default”
     */
    Tag?:string
    /**
     * 备注，默认为空
     */
    Remark?:string
    /**
     * IKE协商过程中使用的加密算法，枚举值，"aes128", "aes192", "aes256", "aes512", "3des"。默认值为“aes128”
     */
    IKEEncryptionAlgorithm?:string
    /**
     * IKE协商过程中使用的认证算法，"md5", "sha1", "sha2-256"。默认值为“sha1”
     */
    IKEAuthenticationAlgorithm?:string
    /**
     * IKE协商过程中使用的模式，枚举值，主模式，“main”；野蛮模式，“aggressive”。IKEV1默认为主模式“main”，IKEV2时不使用该参数。
     */
    IKEExchangeMode?:string
    /**
     * 本端标识。枚举值，自动识别，“auto”；IP地址或域名。默认为自动识别“auto”。IKEV2必填该参数
     */
    IKELocalId?:string
    /**
     * 客户端标识。枚举值，自动识别，“auto”；IP地址或域名。默认为“自动识别“auto”。IKEV2必填该参数
     */
    IKERemoteId?:string
    /**
     * IKE协商过程中使用的DH组，枚举值，"1", "2", "5", "14", "15", "16"。默认为“15”
     */
    IKEDhGroup?:string
    /**
     * IKE中SA的生存时间，可填写范围为600-604800。默认为86400。
     */
    IKESALifetime?:string
    /**
     * 使用的安全协议，枚举值，“esp”，“ah”。默认为“esp”
     */
    IPSecProtocol?:string
    /**
     * IPSec隧道中使用的加密算法，枚举值，"aes128", "aes192", "aes256", "aes512", "3des"。默认值为“aes128”
     */
    IPSecEncryptionAlgorithm?:string
    /**
     * IPSec隧道中使用的认证算法，枚举值，"md5", "sha1","sha2-256"。默认值为“sha1”
     */
    IPSecAuthenticationAlgorithm?:string
    /**
     * IPSec中SA的生存时间，可填写范围为1200 - 604800。默认为3600
     */
    IPSecSALifetime?:string
    /**
     * IPSec中SA的生存时间（以字节计）。可选为8000 – 20000000。默认使用SA生存时间，
     */
    IPSecSALifetimeBytes?:string
    /**
     * IPSec的PFS是否开启，枚举值，，不开启，"disable"；数字表示DH组, "1", "2", "5", "14", "15", "16"。默认为“disable”。
     */
    IPSecPFSDhGroup?:string
    /**
     * IPSec隧道关闭后的处理动作，枚举值：“none”，流量触发；“restart”，自动重联，默认为none
     */
    IPSecCloseAction?:string
}
    
/**
 * UpdateVPNGatewayRequest - 
 */
export interface UpdateVPNGatewayRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId:string
    /**
     * VPN网关的资源ID
     */
    VPNGatewayId:string
    /**
     * 网关规格。枚举值为: Standard, 标准型; Enhanced, 增强型。
     */
    Grade:string
}
    
/**
 * UpdateVPNTunnelAttributeResponse - 
 */
export interface UpdateVPNTunnelAttributeResponse {
}
    
/**
 * VPNGatewayPriceSet - 
 */
export interface VPNGatewayPriceSet {
    /**
     * VPN网关付费方式
     */
    ChargeType?:string
    /**
     * VPN网关价格, 单位"元"
     */
    Price?:number
    /**
     * 资源有效期, 以Unix Timestamp表示
     */
    PurchaseValue?:number
}
    
/**
 * DeleteVPNTunnelResponse - 
 */
export interface DeleteVPNTunnelResponse {
}
    
/**
 * DescribeVPNTunnelResponse - 
 */
export interface DescribeVPNTunnelResponse {
    /**
     * VPN隧道总数
     */
    TotalCount?:number
    /**
     * 获取的VPN隧道信息列表，每项参数详见 VPNTunnelDataSet
     */
    DataSet?:
            VPNTunnelDataSet[]
}
    
/**
 * DescribeRemoteVPNGatewayRequest - 
 */
export interface DescribeRemoteVPNGatewayRequest {
    /**
     * 地域。 参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId:string
    /**
     * 客户VPN网关的资源ID，例如RemoteVPNGatewayIds.0代表希望获取客户VPN网关1的信息，RemoteVPNGatewayIds.1代表客户VPN网关2，如果为空，则返回当前Region中所有客户VPN网关实例的信息
     */
    RemoteVPNGatewayIds?:string[]
    /**
     * 业务组名称，若指定则返回业务组下所有客户VPN网关信息
     */
    Tag?:string
    /**
     * 数据偏移量, 默认为0
     */
    Offset?:number
    /**
     * 数据分页值, 默认为20
     */
    Limit?:number
}
