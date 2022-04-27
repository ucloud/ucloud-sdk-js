


    
/**
 * CreateNetworkAclResponse - 
 */
export interface CreateNetworkAclResponse {
    /**
     * 创建的ACL的ID
     */
    AclId:string
}
    
/**
 * AllocateSecondaryIpResponse - 
 */
export interface AllocateSecondaryIpResponse {
    /**
     * 
     */
    IpInfo:
        IpInfo
}
    
/**
 * SetGwDefaultExportRequest - 
 */
export interface SetGwDefaultExportRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 项目Id。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * NAT网关Id
     */
    NATGWId:string
    /**
     * NAT网关绑定的EIP。ExportIp和ExportEipId必填一个
     */
    ExportIp?:string
    /**
     * NAT网关绑定的EIP Id。ExportIp和ExportEipId必填一个
     */
    ExportEipId?:string
}
    
/**
 * UpdateSubnetAttributeResponse - 
 */
export interface UpdateSubnetAttributeResponse {
}
    
/**
 * DescribeNetworkAclAssociationBySubnetResponse - 
 */
export interface DescribeNetworkAclAssociationBySubnetResponse {
    /**
     * 绑定信息
     */
    Association:
        AssociationInfo
}
    
/**
 * NatGatewayDataSet - 
 */
export interface NatGatewayDataSet {
    /**
     * natgw id
     */
    NATGWId?:string
    /**
     * natgw名称
     */
    NATGWName?:string
    /**
     * 业务组
     */
    Tag?:string
    /**
     * 备注
     */
    Remark?:string
    /**
     * natgw创建时间
     */
    CreateTime?:number
    /**
     * 绑定的防火墙Id
     */
    FirewallId?:string
    /**
     * 所属VPC Id
     */
    VPCId?:string
    /**
     * 子网 Id
     */
    SubnetSet?:
            NatGatewaySubnetSet[]
    /**
     * 绑定的EIP 信息
     */
    IPSet?:
            NatGatewayIPSet[]
    /**
     * VPC名称
     */
    VPCName?:string
    /**
     * 枚举值，“enable”，默认出口规则使用了负载均衡；“disable”，默认出口规则未使用负载均衡。
     */
    IsSnatpoolEnabled?:string
    /**
     * 转发策略Id
     */
    PolicyId?:string[]
}
    
/**
 * ListSubnetForNATGWResponse - 
 */
export interface ListSubnetForNATGWResponse {
    /**
     * 具体参数请见NatgwSubnetDataSet
     */
    DataSet?:
            NatgwSubnetDataSet[]
}
    
/**
 * AclEntryInfo - 
 */
export interface AclEntryInfo {
    /**
     * Entry的ID
     */
    EntryId:string
    /**
     * 优先级
     */
    Priority:string
    /**
     * 出向或者入向
     */
    Direction:string
    /**
     * 针对的IP协议
     */
    IpProtocol:string
    /**
     * IP段的CIDR信息
     */
    CidrBlock:string
    /**
     * Port的段信息
     */
    PortRange:string
    /**
     * 匹配规则的动作
     */
    EntryAction:string
    /**
     * 应用目标类型。 0代表“子网内全部资源” ，1代表“子网内指定资源” 。
     */
    TargetType:number
    /**
     * 创建的Unix时间戳
     */
    CreateTime:number
    /**
     * 更改的Unix时间戳
     */
    UpdateTime:number
    /**
     * 应用目标资源信息。TargetType为0时不返回该值。具体结构见下方TargetResourceInfo
     */
    TargetResourceList?:
            TargetResourceInfo[]
    /**
     * 应用目标资源数量。TargetType为0时不返回该值。
     */
    TargetResourceCount?:number
}
    
/**
 * CreateNetworkAclAssociationRequest - 
 */
export interface CreateNetworkAclAssociationRequest {
    /**
     * 地域。 参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * ACL的ID
     */
    AclId:string
    /**
     * 需要绑定的子网ID
     */
    SubnetworkId:string
}
    
/**
 * AllocateVIPRequest - 
 */
export interface AllocateVIPRequest {
    /**
     * 地域
     */
    Region:string
    /**
     * 可用区
     */
    Zone?:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * 指定vip所属的VPC
     */
    VPCId:string
    /**
     * 子网id
     */
    SubnetId:string
    /**
     * 指定ip
     */
    Ip?:string
    /**
     * 申请数量，默认: 1
     */
    Count?:number
    /**
     * vip名，默认：VIP
     */
    Name?:string
    /**
     * 业务组名称，默认为Default
     */
    Tag?:string
    /**
     * 备注
     */
    Remark?:string
    /**
     * 业务组
     */
    BusinessId?:string
}
    
/**
 * NATGWSnatRule - 
 */
export interface NATGWSnatRule {
    /**
     * EIP地址，如106.76.xx.xx
     */
    SnatIp:string
    /**
     * 资源的内网IP地址
     */
    SourceIp:string
    /**
     * SourceIp所属的子网id
     */
    SubnetworkId:string
    /**
     * snat规则名称
     */
    Name:string
}
    
/**
 * DescribeWhiteListResourceResponse - 
 */
export interface DescribeWhiteListResourceResponse {
    /**
     * 白名单资源的详细信息，详见DescribeResourceWhiteListDataSet
     */
    DataSet:
            NatGWWhitelistDataSet[]
    /**
     * 上述DataSet总数量
     */
    TotalCount:number
}
    
/**
 * GetAvailableResourceForPolicyResponse - 
 */
export interface GetAvailableResourceForPolicyResponse {
    /**
     * 支持资源类型的信息
     */
    DataSet:
            GetAvailableResourceForPolicyDataSet[]
}
    
/**
 * DescribeNATGWPolicyRequest - 
 */
export interface DescribeNATGWPolicyRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 项目Id。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * NAT网关Id
     */
    NATGWId:string
    /**
     * 返回数据长度，默认为10000
     */
    Limit?:number
    /**
     * 列表起始位置偏移量，默认为0
     */
    Offset?:number
}
    
/**
 * SubnetResource - 
 */
export interface SubnetResource {
    /**
     * 名称
     */
    Name?:string
    /**
     * 资源Id
     */
    ResourceId?:string
    /**
     * 资源类型。对应的资源类型：UHOST，云主机；PHOST，物理云主机；ULB，负载均衡；UHADOOP_HOST，hadoop节点；UFORTRESS_HOST，堡垒机；UNATGW，NAT网关；UKAFKA，分布式消息系统；UMEM，内存存储；DOCKER，容器集群；UDB，数据库；UDW，数据仓库；VIP，内网VIP.
     */
    ResourceType?:string
    /**
     * 资源ip
     */
    IP?:string
}
    
/**
 * DescribeNetworkInterfaceRequest - 
 */
export interface DescribeNetworkInterfaceRequest {
    /**
     * 地域。 参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId:string
    /**
     * 所属VPC
     */
    VPCId?:string
    /**
     * 所属子网
     */
    SubnetId?:string
    /**
     * 虚拟网卡ID,可指定 0~n
     */
    InterfaceId?:string[]
    /**
     * 若为true 只返回默认网卡默认为false
     */
    OnlyDefault?:boolean
    /**
     * 若为true 过滤绑定在回收站主机中的网卡。默认为false。
     */
    NoRecycled?:boolean
    /**
     * 业务组
     */
    Tag?:string
    /**
     * 默认为20
     */
    Limit?:number
    /**
     * 默认为0
     */
    Offset?:number
}
    
/**
 * DeleteRouteTableRequest - 
 */
export interface DeleteRouteTableRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId:string
    /**
     * 路由表资源ID
     */
    RouteTableId:string
}
    
/**
 * AssociateRouteTableResponse - 
 */
export interface AssociateRouteTableResponse {
}
    
/**
 * GetAvailableResourceForPolicyRequest - 
 */
export interface GetAvailableResourceForPolicyRequest {
    /**
     * 地域。 参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Region:string
    /**
     * 项目Id。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * NAT网关Id
     */
    NATGWId:string
    /**
     * 返回数据长度，默认为20
     */
    Limit?:number
    /**
     * 列表起始位置偏移量，默认为0
     */
    Offset?:number
}
    
/**
 * UpdateVPCNetworkResponse - 
 */
export interface UpdateVPCNetworkResponse {
}
    
/**
 * DescribeInstanceNetworkInterfaceResponse - 
 */
export interface DescribeInstanceNetworkInterfaceResponse {
    /**
     * 虚拟网卡信息
     */
    NetworkInterfaceSet:
            NetworkInterface[]
}
    
/**
 * ReleaseVIPResponse - 
 */
export interface ReleaseVIPResponse {
}
    
/**
 * UpdateSnatRuleRequest - 
 */
export interface UpdateSnatRuleRequest {
    /**
     * 地域。 参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * NAT网关的ID，
     */
    NATGWId:string
    /**
     * 需要出外网的私网IP地址，例如10.9.7.xx
     */
    SourceIp:string
    /**
     * EIP的ip地址,例如106.75.xx.xx
     */
    SnatIp:string
    /**
     * snat名称，即出口规则名称
     */
    Name?:string
}
    
/**
 * DescribeSnatRuleResponse - 
 */
export interface DescribeSnatRuleResponse {
    /**
     * 某个NAT网关的所有Snat规则
     */
    DataSet:
            NATGWSnatRule[]
    /**
     * 规则数量
     */
    TotalCount:number
}
    
/**
 * DescribeNATGWResponse - 
 */
export interface DescribeNATGWResponse {
    /**
     * 满足条件的实例的总数
     */
    TotalCount:number
    /**
     * 查到的NATGW信息列表
     */
    DataSet?:
            NatGatewayDataSet[]
}
    
/**
 * DescribeSubnetResponse - 
 */
export interface DescribeSubnetResponse {
    /**
     * 子网总数量
     */
    TotalCount:number
    /**
     * 子网信息数组，具体资源见下方SubnetInfo
     */
    DataSet:
            SubnetInfo[]
}
    
/**
 * DescribeSnatDnatRuleRequest - 
 */
export interface DescribeSnatDnatRuleRequest {
    /**
     * 地域。 参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * 获取NAT上添加的所有SnatDnatRule信息
     */
    NATGWId?:string[]
    /**
     * 获取EIP对应的SnatDnatRule信息
     */
    EIP?:string[]
}
    
/**
 * UpdateNATGWPolicyRequest - 
 */
export interface UpdateNATGWPolicyRequest {
    /**
     * 地域。 参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Region:string
    /**
     * 项目Id。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * NAT网关Id
     */
    NATGWId:string
    /**
     * 转发策略Id
     */
    PolicyId:string
    /**
     * 协议类型。枚举值为：TCP 、 UDP
     */
    Protocol:string
    /**
     * 源IP。填写对应的EIP Id
     */
    SrcEIPId:string
    /**
     * 源端口。可填写固定端口，也可填写端口范围。支持的端口范围为1-6553
     */
    SrcPort:string
    /**
     * 目标IP。填写对应的目标IP地址
     */
    DstIP:string
    /**
     * 目标端口。可填写固定端口，也可填写端口范围。支持的端口范围为1-65535
     */
    DstPort:string
    /**
     * 转发策略名称。默认为空
     */
    PolicyName?:string
}
    
/**
 * NATGWPolicyDataSet - 
 */
export interface NATGWPolicyDataSet {
    /**
     * NAT网关Id
     */
    NATGWId:string
    /**
     * 转发策略Id
     */
    PolicyId:string
    /**
     * 协议类型
     */
    Protocol:string
    /**
     * 端口转发前端EIP
     */
    SrcEIP:string
    /**
     * 端口转发前端EIP Id
     */
    SrcEIPId:string
    /**
     * 源端口
     */
    SrcPort:string
    /**
     * 目的地址
     */
    DstIP:string
    /**
     * 目的端口
     */
    DstPort:string
    /**
     * 转发策略名称
     */
    PolicyName?:string
}
    
/**
 * UpdateNATGWPolicyResponse - 
 */
export interface UpdateNATGWPolicyResponse {
}
    
/**
 * AddVPCNetworkRequest - 
 */
export interface AddVPCNetworkRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * 源VPC短ID
     */
    VPCId:string
    /**
     * 增加网段
     */
    Network:string[]
}
    
/**
 * NatGWWhitelistDataSet - 
 */
export interface NatGWWhitelistDataSet {
    /**
     * NATGateWay Id
     */
    NATGWId:string
    /**
     * 白名单开关标记
     */
    IfOpen:number
    /**
     * 白名单详情
     */
    ObjectIPInfo:
            DescribeWhiteListResourceObjectIPInfo[]
}
    
/**
 * RouteTableInfo - 
 */
export interface RouteTableInfo {
    /**
     * 路由表资源ID
     */
    RouteTableId?:string
    /**
     * 路由表类型。1为默认路由表，0为自定义路由表
     */
    RouteTableType?:number
    /**
     * 绑定该路由表的子网数量
     */
    SubnetCount?:number
    /**
     * 路由表所属的VPC资源ID
     */
    VPCId?:string
    /**
     * 路由表所属的VPC资源名称
     */
    VPCName?:string
    /**
     * 路由表所属业务组
     */
    Tag?:string
    /**
     * 路由表备注
     */
    Remark?:string
    /**
     * 创建时间戳
     */
    CreateTime?:number
    /**
     * 路由规则
     */
    RouteRules?:
            RouteRuleInfo[]
}
    
/**
 * UpdateRouteTableAttributeResponse - 
 */
export interface UpdateRouteTableAttributeResponse {
}
    
/**
 * AclInfo - 
 */
export interface AclInfo {
    /**
     * ACL所属的VPC ID
     */
    VpcId:string
    /**
     * ACL的ID
     */
    AclId:string
    /**
     * 名称
     */
    AclName:string
    /**
     * 描述
     */
    Description:string
    /**
     * 所有的规则
     */
    Entries:
            AclEntryInfo[]
    /**
     * 所有的绑定关系，具体结构见下方AssociationInfo
     */
    Associations:
            AssociationInfo[]
    /**
     * 创建的Unix时间戳
     */
    CreateTime:number
    /**
     * 更改的Unix时间戳
     */
    UpdateTime:number
}
    
/**
 * UpdateSnatRuleResponse - 
 */
export interface UpdateSnatRuleResponse {
}
    
/**
 * CreateVPCRequest - 
 */
export interface CreateVPCRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * VPC名称
     */
    Name:string
    /**
     * VPC网段
     */
    Network:string[]
    /**
     * 业务组名称
     */
    Tag?:string
    /**
     * 备注
     */
    Remark?:string
}
    
/**
 * DeleteWhiteListResourceResponse - 
 */
export interface DeleteWhiteListResourceResponse {
}
    
/**
 * DeleteSecondaryIpResponse - 
 */
export interface DeleteSecondaryIpResponse {
}
    
/**
 * AddSnatRuleRequest - 
 */
export interface AddSnatRuleRequest {
    /**
     * 地域。 参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * NAT网关的ID
     */
    NATGWId:string
    /**
     * 需要出外网的私网IP地址，例如10.9.7.xx
     */
    SourceIp:string
    /**
     * EIP的ip地址,例如106.75.xx.xx
     */
    SnatIp:string
    /**
     * snat规则名称，默认为“出口规则”
     */
    Name?:string
}
    
/**
 * GetAvailableResourceForSnatRuleResponse - 
 */
export interface GetAvailableResourceForSnatRuleResponse {
    /**
     * 返回的资源详细信息
     */
    DataSet:
            GetAvailableResourceForSnatRuleDataSet[]
    /**
     * 总数
     */
    TotalCount:number
}
    
/**
 * UpdateRouteTableAttributeRequest - 
 */
export interface UpdateRouteTableAttributeRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId:string
    /**
     * 路由表ID
     */
    RouteTableId:string
    /**
     * 名称
     */
    Name?:string
    /**
     * 备注
     */
    Remark?:string
    /**
     * 业务组名称
     */
    Tag?:string
}
    
/**
 * DeleteNATGWResponse - 
 */
export interface DeleteNATGWResponse {
}
    
/**
 * DescribeVPCResponse - 
 */
export interface DescribeVPCResponse {
    /**
     * vpc信息，具体结构见下方VPCInfo
     */
    DataSet?:
            VPCInfo[]
}
    
/**
 * CreateRouteTableRequest - 
 */
export interface CreateRouteTableRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId:string
    /**
     * 所属的VPC资源ID
     */
    VPCId:string
    /**
     * 路由表名称。默认为RouteTable
     */
    Name?:string
    /**
     * 路由表所属业务组
     */
    Tag?:string
    /**
     * 备注
     */
    Remark?:string
}
    
/**
 * DescribeVIPResponse - 
 */
export interface DescribeVIPResponse {
    /**
     * 内网VIP详情，请见VIPDetailSet
     */
    VIPSet?:
            VIPDetailSet[]
    /**
     * 内网VIP地址列表
     */
    DataSet?:string[]
    /**
     * vip数量
     */
    TotalCount?:number
}
    
/**
 * DeleteNATGWRequest - 
 */
export interface DeleteNATGWRequest {
    /**
     * 地域。 参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Region:string
    /**
     * 项目Id。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * NAT网关Id
     */
    NATGWId:string
    /**
     * 是否释放绑定的EIP。true：解绑并释放；false：只解绑不释放。默认为false
     */
    ReleaseEip?:boolean
}
    
/**
 * DeleteSnatRuleResponse - 
 */
export interface DeleteSnatRuleResponse {
}
    
/**
 * CreateNetworkAclEntryRequest - 
 */
export interface CreateNetworkAclEntryRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * ACL的ID
     */
    AclId:string
    /**
     * Entry的优先级，对于同样的Direction来说，不能重复
     */
    Priority:number
    /**
     * 出向或者入向（“Ingress”, "Egress")
     */
    Direction:string
    /**
     * 协议规则描述
     */
    IpProtocol:string
    /**
     * IPv4段的CIDR表示
     */
    CidrBlock:string
    /**
     * 针对的端口范围
     */
    PortRange:string
    /**
     * 规则的行为("Accept", "Reject")
     */
    EntryAction:string
    /**
     * 描述。长度限制为不超过32字节。
     */
    Description?:string
    /**
     * 应用目标类型。0代表“子网内全部资源”，1代表“子网内指定资源”，默认为0
     */
    TargetType?:number
    /**
     * 应用目标资源列表。默认为全部资源生效。TargetType为0时不用填写该值。
     */
    TargetResourceIds?:string[]
}
    
/**
 * DescribeRouteTableResponse - 
 */
export interface DescribeRouteTableResponse {
    /**
     * 路由表信息
     */
    RouteTables?:
            RouteTableInfo[]
    /**
     * RouteTables字段的数量
     */
    TotalCount?:number
}
    
/**
 * GetAvailableResourceForWhiteListResponse - 
 */
export interface GetAvailableResourceForWhiteListResponse {
    /**
     * 返回白名单列表的详细信息
     */
    DataSet:
            GetAvailableResourceForWhiteListDataSet[]
    /**
     * 白名单资源列表的总的个数
     */
    TotalCount:number
}
    
/**
 * DescribeSubnetResourceRequest - 
 */
export interface DescribeSubnetResourceRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * 子网id
     */
    SubnetId:string
    /**
     * 资源类型，默认为全部资源类型。枚举值为：UHOST，云主机；PHOST，物理云主机；ULB，负载均衡；UHADOOP_HOST，hadoop节点；UFORTRESS_HOST，堡垒机；UNATGW，NAT网关；UKAFKA，Kafka消息队列；UMEM，内存存储；DOCKER，容器集群；UDB，数据库；UDW，数据仓库；VIP，内网VIP.
     */
    ResourceType?:string
    /**
     * 列表起始位置偏移量，默认为0
     */
    Offset?:number
    /**
     * 单页返回数据长度，默认为20
     */
    Limit?:number
}
    
/**
 * DeleteSnatRuleRequest - 
 */
export interface DeleteSnatRuleRequest {
    /**
     * 地域。 参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * NAT网关的ID
     */
    NATGWId:string
    /**
     * 需要出外网的私网IP地址，例如10.9.7.xx
     */
    SourceIp:string
}
    
/**
 * TargetResourceInfo - 
 */
export interface TargetResourceInfo {
    /**
     * 子网ID
     */
    SubnetworkId:string
    /**
     * 资源名称
     */
    ResourceName:string
    /**
     * 资源ID
     */
    ResourceId:string
    /**
     * 资源类型
     */
    ResourceType:number
    /**
     * 资源绑定的虚拟网卡的名称
     */
    SubResourceName:string
    /**
     * 资源绑定的虚拟网卡的ID
     */
    SubResourceId:string
    /**
     * 资源绑定虚拟网卡的类型
     */
    SubResourceType:number
    /**
     * 资源内网IP
     */
    PrivateIp:string
}
    
/**
 * DeleteVPCRequest - 
 */
export interface DeleteVPCRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * VPC资源Id
     */
    VPCId:string
}
    
/**
 * CreateNetworkAclRequest - 
 */
export interface CreateNetworkAclRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * 将要创建的ACL所属VPC的ID
     */
    VpcId:string
    /**
     * ACL的名称
     */
    AclName:string
    /**
     * ACL的描述
     */
    Description?:string
}
    
/**
 * CreateVPCIntercomResponse - 
 */
export interface CreateVPCIntercomResponse {
}
    
/**
 * DescribeNetworkAclAssociationResponse - 
 */
export interface DescribeNetworkAclAssociationResponse {
    /**
     * 绑定信息列表
     */
    AssociationList:
            AssociationInfo[]
}
    
/**
 * CloneRouteTableResponse - 
 */
export interface CloneRouteTableResponse {
    /**
     * 复制后新的路由表资源ID
     */
    RouteTableId?:string
}
    
/**
 * DeleteVPCResponse - 
 */
export interface DeleteVPCResponse {
}
    
/**
 * DescribeVPCIntercomRequest - 
 */
export interface DescribeVPCIntercomRequest {
    /**
     * 源VPC所在地域。 参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Region:string
    /**
     * 源VPC所在项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * VPC短ID
     */
    VPCId:string
    /**
     * 目的VPC所在地域，默认为全部地域
     */
    DstRegion?:string
    /**
     * 目的项目ID，默认为全部项目
     */
    DstProjectId?:string
}
    
/**
 * NetworkInterface - 
 */
export interface NetworkInterface {
    /**
     * 虚拟网卡资源ID
     */
    InterfaceId:string
    /**
     * 所属VPC
     */
    VPCId:string
    /**
     * 所属子网
     */
    SubnetId:string
    /**
     * 关联内网IP。当前一个网卡仅支持绑定一个内网IP
     */
    PrivateIpSet:string[]
    /**
     * 关联Mac
     */
    MacAddress:string
    /**
     * 绑定状态
     */
    Status:number
    /**
     * 网卡的内网IP信息
     */
    PrivateIp:string[]
    /**
     * 虚拟网卡名称
     */
    Name?:string
    /**
     * 内网IP掩码
     */
    Netmask?:string
    /**
     * 默认网关
     */
    Gateway?:string
    /**
     * 绑定实例资源ID
     */
    AttachInstanceId?:string
    /**
     * 是否是绑定实例的默认网卡 false:不是 true:是
     */
    Default?:boolean
    /**
     * 创建时间
     */
    CreateTime?:number
    /**
     * 备注
     */
    Remark?:string
    /**
     * 业务组
     */
    Tag?:string
    /**
     * 虚拟网卡绑定的EIP ID信息
     */
    EIPIdSet?:string[]
    /**
     * 虚拟网卡绑定的防火墙ID信息
     */
    FirewallIdSet?:string[]
    /**
     * 网卡的内网IP配额信息
     */
    PrivateIplimit?:string[]
}
    
/**
 * DescribeNetworkAclAssociationBySubnetRequest - 
 */
export interface DescribeNetworkAclAssociationBySubnetRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * 子网的ID
     */
    SubnetworkId:string
}
    
/**
 * CreateVPCIntercomRequest - 
 */
export interface CreateVPCIntercomRequest {
    /**
     * 源VPC所在地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 源VPC所在项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * 源VPC短ID
     */
    VPCId:string
    /**
     * 目的VPC短ID
     */
    DstVPCId:string
    /**
     * 目的VPC所在地域，默认与源VPC同地域。
     */
    DstRegion?:string
    /**
     * 目的VPC项目ID。默认与源VPC同项目。
     */
    DstProjectId?:string
}
    
/**
 * AssociateRouteTableRequest - 
 */
export interface AssociateRouteTableRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId:string
    /**
     * 子网ID
     */
    SubnetId:string
    /**
     * 路由表资源ID
     */
    RouteTableId:string
}
    
/**
 * DescribeNetworkAclEntryRequest - 
 */
export interface DescribeNetworkAclEntryRequest {
    /**
     * 地域。 参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * ACL的ID
     */
    AclId:string
}
    
/**
 * NatGatewaySubnetSet - 
 */
export interface NatGatewaySubnetSet {
    /**
     * 子网id
     */
    SubnetworkId:string
    /**
     * 子网网段
     */
    Subnet:string
    /**
     * 子网名字
     */
    SubnetName:string
}
    
/**
 * DeleteNetworkAclEntryResponse - 
 */
export interface DeleteNetworkAclEntryResponse {
}
    
/**
 * UpdateNetworkAclEntryRequest - 
 */
export interface UpdateNetworkAclEntryRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * ACL的ID
     */
    AclId:string
    /**
     * 需要更新的Entry Id
     */
    EntryId:string
    /**
     * Entry的优先级，对于同样的Direction来说，不能重复
     */
    Priority:number
    /**
     * 出向或者入向（“Ingress”, "Egress")
     */
    Direction:string
    /**
     * 针对的协议规则
     */
    IpProtocol:string
    /**
     * IPv4段的CIDR表示
     */
    CidrBlock:string
    /**
     * 针对的端口范围
     */
    PortRange:string
    /**
     * 规则的行为("Accept", "Reject")
     */
    EntryAction:string
    /**
     * 描述
     */
    Description?:string
    /**
     * 应用目标类型。0代表“子网内全部资源”， 1代表“子网内指定资源”。默认为0
     */
    TargetType?:number
    /**
     * 应用目标资源列表。默认为全部资源生效。TargetType为0时不用填写该值
     */
    TargetResourceIds?:string[]
}
    
/**
 * DescribeSubnetRequest - 
 */
export interface DescribeSubnetRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * 子网id数组，适用于一次查询多个子网信息
     */
    SubnetIds?:string[]
    /**
     * 子网id，适用于一次查询一个子网信息
     */
    SubnetId?:string
    /**
     * 路由表Id
     */
    RouteTableId?:string
    /**
     * VPC资源id
     */
    VPCId?:string
    /**
     * 业务组名称，默认为Default
     */
    Tag?:string
    /**
     * 偏移量，默认为0
     */
    Offset?:number
    /**
     * 列表长度，默认为20
     */
    Limit?:number
    /**
     * 是否返回子网的可用IP数，true为是，false为否，默认不返回
     */
    ShowAvailableIPs?:boolean
}
    
/**
 * DeleteRouteTableResponse - 
 */
export interface DeleteRouteTableResponse {
}
    
/**
 * DescribeNetworkAclResponse - 
 */
export interface DescribeNetworkAclResponse {
    /**
     * ACL的信息，具体结构见下方AclInfo
     */
    AclList:
            AclInfo[]
}
    
/**
 * DeleteNetworkAclAssociationRequest - 
 */
export interface DeleteNetworkAclAssociationRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * 需要删除的AclId
     */
    AclId:string
    /**
     * 绑定的子网ID
     */
    SubnetworkId:string
}
    
/**
 * MoveSecondaryIPMacRequest - 
 */
export interface MoveSecondaryIPMacRequest {
    /**
     * 地域。 参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * Secondary IP
     */
    Ip:string
    /**
     * 旧 Mac。Secondary IP 当前所绑定的 Mac
     */
    OldMac:string
    /**
     * 新 Mac。Secondary IP 迁移的目的 Mac
     */
    NewMac:string
    /**
     * 子网 ID。IP/OldMac/NewMac 三者必须在同一子网
     */
    SubnetId:string
}
    
/**
 * UpdateNetworkAclRequest - 
 */
export interface UpdateNetworkAclRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * Acl的名称
     */
    AclName:string
    /**
     * 需要更改的ACL ID
     */
    AclId:string
    /**
     * 描述
     */
    Description:string
}
    
/**
 * DescribeSnatDnatRuleResponse - 
 */
export interface DescribeSnatDnatRuleResponse {
    /**
     * 规则信息
     */
    DataSet?:
            SnatDnatRuleInfo[]
}
    
/**
 * AssociationInfo - 
 */
export interface AssociationInfo {
    /**
     * 绑定ID
     */
    AssociationId:string
    /**
     * ACL的ID
     */
    AclId:string
    /**
     * 绑定的子网ID
     */
    SubnetworkId:string
    /**
     * 创建的Unix时间戳
     */
    CreateTime:number
}
    
/**
 * CreateSnatDnatRuleResponse - 
 */
export interface CreateSnatDnatRuleResponse {
}
    
/**
 * AddVPCNetworkResponse - 
 */
export interface AddVPCNetworkResponse {
}
    
/**
 * GetAvailableResourceForSnatRuleRequest - 
 */
export interface GetAvailableResourceForSnatRuleRequest {
    /**
     * 地域。 参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId:string
    /**
     * NAT网关Id
     */
    NATGWId:string
    /**
     * 数据偏移量, 默认为0
     */
    Offset?:number
    /**
     * 数据分页值, 默认为20
     */
    Limit?:number
}
    
/**
 * CreateNetworkAclAssociationResponse - 
 */
export interface CreateNetworkAclAssociationResponse {
    /**
     * 创建的绑定关系的ID
     */
    AssociationId:string
    /**
     * 该子网之前的绑定关系信息
     */
    PrevAssociation?:
        AssociationInfo
}
    
/**
 * DescribeNATGWRequest - 
 */
export interface DescribeNATGWRequest {
    /**
     * 地域。 参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Region:string
    /**
     * 项目Id。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * NAT网关Id。默认为该项目下所有NAT网关
     */
    NATGWIds?:string[]
    /**
     * 数据偏移量。默认为0
     */
    Offset?:number
    /**
     * 数据分页值。默认为20
     */
    Limit?:number
}
    
/**
 * DescribeNetworkAclRequest - 
 */
export interface DescribeNetworkAclRequest {
    /**
     * 地域。 参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * 列表偏移量
     */
    Offset?:number
    /**
     * 列表获取的个数限制
     */
    Limit?:string
    /**
     * 需要获取的ACL所属的VPC的ID
     */
    VpcId?:string
}
    
/**
 * DeleteNetworkAclEntryRequest - 
 */
export interface DeleteNetworkAclEntryRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * Acl的ID
     */
    AclId:string
    /**
     * 需要删除的EntryId
     */
    EntryId:string
}
    
/**
 * DescribeVPCIntercomResponse - 
 */
export interface DescribeVPCIntercomResponse {
    /**
     * 联通VPC信息数组
     */
    DataSet?:
            VPCIntercomInfo[]
}
    
/**
 * AllocateSecondaryIpRequest - 
 */
export interface AllocateSecondaryIpRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
     */
    Zone:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId:string
    /**
     * 节点mac
     */
    Mac:string
    /**
     * 资源Id
     */
    ObjectId:string
    /**
     * 子网Id（若未指定，则根据zone获取默认子网进行创建）
     */
    SubnetId?:string
    /**
     * vpcId
     */
    VPCId?:string
    /**
     * 指定Ip分配
     */
    Ip?:string
}
    
/**
 * UpdateVIPAttributeResponse - 
 */
export interface UpdateVIPAttributeResponse {
}
    
/**
 * DescribeWhiteListResourceRequest - 
 */
export interface DescribeWhiteListResourceRequest {
    /**
     * 项目id
     */
    ProjectId:string
    /**
     * 地域。 参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Region:string
    /**
     * NAT网关的Id
     */
    NATGWIds:string[]
    /**
     * 数据偏移量, 默认为0
     */
    Offset?:number
    /**
     * 数据分页值, 默认为20
     */
    Limit?:number
}
    
/**
 * DeleteVPCIntercomRequest - 
 */
export interface DeleteVPCIntercomRequest {
    /**
     * 源VPC所在地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 源VPC所在项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * 源VPC短ID
     */
    VPCId:string
    /**
     * 目的VPC短ID
     */
    DstVPCId:string
    /**
     * 目的VPC所在地域，默认为源VPC所在地域
     */
    DstRegion?:string
    /**
     * 目的VPC所在项目ID，默认为源VPC所在项目ID
     */
    DstProjectId?:string
}
    
/**
 * UpdateNATGWSubnetResponse - 
 */
export interface UpdateNATGWSubnetResponse {
}
    
/**
 * DescribeRouteTableRequest - 
 */
export interface DescribeRouteTableRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * 所属VPC的资源ID
     */
    VPCId?:string
    /**
     * 路由表资源ID
     */
    RouteTableId?:string
    /**
     * 数据偏移量。默认为0
     */
    OffSet?:number
    /**
     * 数据分页值。默认为20
     */
    Limit?:number
    /**
     * 业务组ID
     */
    BusinessId?:string
}
    
/**
 * VPCIntercomInfo - 
 */
export interface VPCIntercomInfo {
    /**
     * 项目Id
     */
    ProjectId?:string
    /**
     * vpc类型（1表示托管VPC，0表示公有云VPC）
     */
    VPCType:number
    /**
     * 项目Id（数字）
     */
    AccountId:number
    /**
     * VPC的地址空间
     */
    Network?:string[]
    /**
     * 所属地域
     */
    DstRegion?:string
    /**
     * VPC名字
     */
    Name?:string
    /**
     * VPCId
     */
    VPCId?:string
    /**
     * 业务组（未分组显示为 Default）
     */
    Tag?:string
}
    
/**
 * DescribeSecondaryIpRequest - 
 */
export interface DescribeSecondaryIpRequest {
    /**
     * 地域。 参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * 子网Id
     */
    SubnetId:string
    /**
     * VPCId
     */
    VPCId:string
    /**
     * Ip
     */
    Ip?:string
    /**
     * Mac
     */
    Mac?:string
}
    
/**
 * SetGwDefaultExportResponse - 
 */
export interface SetGwDefaultExportResponse {
}
    
/**
 * ModifyRouteRuleResponse - 
 */
export interface ModifyRouteRuleResponse {
}
    
/**
 * DeleteSecondaryIpRequest - 
 */
export interface DeleteSecondaryIpRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
     */
    Zone:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId:string
    /**
     * ip
     */
    Ip:string
    /**
     * mac
     */
    Mac:string
    /**
     * 子网Id
     */
    SubnetId:string
    /**
     * VPCId
     */
    VPCId?:string
    /**
     * 资源Id
     */
    ObjectId?:string
}
    
/**
 * GetAvailableResourceForWhiteListDataSet - 
 */
export interface GetAvailableResourceForWhiteListDataSet {
    /**
     * 资源类型Id
     */
    ResourceId:string
    /**
     * 资源名称
     */
    ResourceName:string
    /**
     * 资源的内网Ip
     */
    PrivateIP:string
    /**
     * 资源类型。"uhost"：云主机； "upm"，物理云主机； "hadoophost"：hadoop节点； "fortresshost"：堡垒机： "udockhost"，容器
     */
    ResourceType:string
    /**
     * 资源绑定的虚拟网卡的实例名称
     */
    SubResourceName:string
    /**
     * 资源所属VPCId
     */
    VPCId:string
    /**
     * 资源所属子网Id
     */
    SubnetworkId:string
    /**
     * 资源绑定的虚拟网卡的实例ID
     */
    SubResourceId?:string
    /**
     * 资源绑定的虚拟网卡的实例类型
     */
    SubResourceType?:string
}
    
/**
 * GetAvailableResourceForPolicyDataSet - 
 */
export interface GetAvailableResourceForPolicyDataSet {
    /**
     * 资源的Id
     */
    ResourceId:string
    /**
     * 资源对应的内网Ip
     */
    PrivateIP:string
    /**
     * 资源类型。"uhost"：云主机； "upm"，物理云主机； "hadoophost"：hadoop节点； "fortresshost"：堡垒机： "udockhost"，容器
     */
    ResourceType:string
}
    
/**
 * GetAvailableResourceForSnatRuleDataSet - 
 */
export interface GetAvailableResourceForSnatRuleDataSet {
    /**
     * 资源ID
     */
    ResourceId?:string
    /**
     * 资源名称
     */
    ResourceName?:string
    /**
     * 资源内网IP
     */
    PrivateIP?:string
    /**
     * 资源类型
     */
    ResourceType?:string
    /**
     * 资源所属VPC的ID
     */
    SubnetworkId?:string
    /**
     * 资源所属子网的ID
     */
    VPCId?:string
}
    
/**
 * NatgwSubnetDataSet - 
 */
export interface NatgwSubnetDataSet {
    /**
     * 子网id
     */
    SubnetId:string
    /**
     * 子网网段
     */
    Subnet:string
    /**
     * 掩码
     */
    Netmask:string
    /**
     * 子网名字
     */
    SubnetName:string
    /**
     * 是否绑定NATGW
     */
    HasNATGW:boolean
}
    
/**
 * UpdateNATGWSubnetRequest - 
 */
export interface UpdateNATGWSubnetRequest {
    /**
     * 地域。 参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Region:string
    /**
     * 项目Id。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * NAT网关Id
     */
    NATGWId:string
    /**
     * NAT网关绑定的子网Id
     */
    SubnetworkIds?:string[]
}
    
/**
 * DeleteWhiteListResourceRequest - 
 */
export interface DeleteWhiteListResourceRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 项目Id。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * NAT网关Id
     */
    NATGWId:string
    /**
     * 删除白名单的资源Id
     */
    ResourceIds:string[]
}
    
/**
 * DescribeVPCRequest - 
 */
export interface DescribeVPCRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId:string
    /**
     * VPCId
     */
    VPCIds?:string[]
    /**
     * 业务组名称
     */
    Tag?:string
    /**
     * 
     */
    Offset?:number
    /**
     * 
     */
    Limit?:number
}
    
/**
 * NatGWIPResInfo - 
 */
export interface NatGWIPResInfo {
    /**
     * IP的运营商信息
     */
    OperatorName:string
    /**
     * 外网IP
     */
    EIP:string
}
    
/**
 * UpdateSubnetAttributeRequest - 
 */
export interface UpdateSubnetAttributeRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * 子网ID
     */
    SubnetId:string
    /**
     * 子网名称(如果Name不填写，Tag必须填写)
     */
    Name?:string
    /**
     * 业务组名称(如果Tag不填写，Name必须填写)
     */
    Tag?:string
}
    
/**
 * DeleteNetworkAclResponse - 
 */
export interface DeleteNetworkAclResponse {
}
    
/**
 * VPCInfo - 
 */
export interface VPCInfo {
    /**
     * 
     */
    NetworkInfo:
            VPCNetworkInfo[]
    /**
     * 
     */
    SubnetCount:number
    /**
     * 
     */
    CreateTime:number
    /**
     * 
     */
    UpdateTime:number
    /**
     * 
     */
    Tag:string
    /**
     * 
     */
    Name:string
    /**
     * VPCId
     */
    VPCId?:string
    /**
     * 
     */
    Network?:string[]
    /**
     * VPC关联的IPv6网段
     */
    IPv6Network?:string
    /**
     * VPC关联的IPv6网段所属运营商
     */
    OperatorName?:string
}
    
/**
 * SubnetInfo - 
 */
export interface SubnetInfo {
    /**
     * 可用区名称
     */
    Zone?:string
    /**
     * 子网关联的IPv6网段
     */
    IPv6Network?:string
    /**
     * VPCId
     */
    VPCId?:string
    /**
     * VPC名称
     */
    VPCName?:string
    /**
     * 子网Id
     */
    SubnetId?:string
    /**
     * 子网名称
     */
    SubnetName?:string
    /**
     * 备注
     */
    Remark?:string
    /**
     * 业务组
     */
    Tag?:string
    /**
     * 子网类型
     */
    SubnetType?:number
    /**
     * 子网网段
     */
    Subnet?:string
    /**
     * 子网掩码
     */
    Netmask?:string
    /**
     * 子网网关
     */
    Gateway?:string
    /**
     * 创建时间
     */
    CreateTime?:number
    /**
     * 是否有natgw
     */
    HasNATGW?:boolean
    /**
     * 路由表Id
     */
    RouteTableId?:string
    /**
     * 可用IP数量
     */
    AvailableIPs?:number
}
    
/**
 * GetAvailableResourceForWhiteListRequest - 
 */
export interface GetAvailableResourceForWhiteListRequest {
    /**
     * 地域。 参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Region:string
    /**
     * 项目Id。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * NAT网关Id
     */
    NATGWId:string
    /**
     * 数据偏移量, 默认为0
     */
    Offset?:number
    /**
     * 数据分页值, 默认为20
     */
    Limit?:number
}
    
/**
 * VIPDetailSet - 
 */
export interface VIPDetailSet {
    /**
     * 地域
     */
    Zone?:string
    /**
     * 虚拟ip id
     */
    VIPId?:string
    /**
     * 创建时间
     */
    CreateTime?:number
    /**
     * 真实主机ip
     */
    RealIp?:string
    /**
     * 虚拟ip
     */
    VIP?:string
    /**
     * 子网id
     */
    SubnetId?:string
    /**
     * VPC id
     */
    VPCId?:string
    /**
     * VIP名称
     */
    Name?:string
    /**
     * VIP备注
     */
    Remark?:string
    /**
     * VIP所属业务组
     */
    Tag?:string
}
    
/**
 * UpdateVIPAttributeRequest - 
 */
export interface UpdateVIPAttributeRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId:string
    /**
     * 内网VIP的资源Id
     */
    VIPId:string
    /**
     * 内网VIP的备注
     */
    Remark?:string
    /**
     * 内网VIP的名称
     */
    Name?:string
    /**
     * 内网VIP所属的业务组
     */
    Tag?:string
}
    
/**
 * CreateSubnetRequest - 
 */
export interface CreateSubnetRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * VPC资源ID
     */
    VPCId:string
    /**
     * 子网网络地址，例如192.168.0.0
     */
    Subnet:string
    /**
     * 子网网络号位数，默认为24
     */
    Netmask?:number
    /**
     * 子网名称，默认为Subnet
     */
    SubnetName?:string
    /**
     * 业务组名称，默认为Default
     */
    Tag?:string
    /**
     * 备注
     */
    Remark?:string
}
    
/**
 * EnableWhiteListResponse - 
 */
export interface EnableWhiteListResponse {
}
    
/**
 * DeleteSubnetRequest - 
 */
export interface DeleteSubnetRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * 子网ID
     */
    SubnetId:string
}
    
/**
 * DeleteSnatDnatRuleResponse - 
 */
export interface DeleteSnatDnatRuleResponse {
}
    
/**
 * UpdateVPCNetworkRequest - 
 */
export interface UpdateVPCNetworkRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId:string
    /**
     * VPC的ID
     */
    VPCId:string
    /**
     * 需要保留的VPC网段。当前仅支持删除VPC网段，添加网段请参考[AddVPCNetwork](https://docs.ucloud.cn/api/vpc2.0-api/add_vpc_network)
     */
    Network:string[]
}
    
/**
 * CreateRouteTableResponse - 
 */
export interface CreateRouteTableResponse {
    /**
     * 路由表ID
     */
    RouteTableId?:string
}
    
/**
 * UpdateNetworkAclEntryResponse - 
 */
export interface UpdateNetworkAclEntryResponse {
}
    
/**
 * EnableWhiteListRequest - 
 */
export interface EnableWhiteListRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 项目Id。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * NAT网关Id
     */
    NATGWId:string
    /**
     * 白名单开关标记。0：关闭；1：开启。默认为0
     */
    IfOpen:number
}
    
/**
 * DescribeNATGWPolicyResponse - 
 */
export interface DescribeNATGWPolicyResponse {
    /**
     * 满足条件的转发策略总数
     */
    TotalCount:number
    /**
     * 查到的NATGW 转发策略的详细信息
     */
    DataSet?:
            NATGWPolicyDataSet[]
}
    
/**
 * SnatDnatRuleInfo - 
 */
export interface SnatDnatRuleInfo {
    /**
     * 内网IP地址
     */
    PrivateIp?:string
    /**
     * 映射所使用的NAT网关资源ID
     */
    NATGWId?:string
    /**
     * EIP的IP地址
     */
    EIP?:string
}
    
/**
 * UpdateNetworkAclResponse - 
 */
export interface UpdateNetworkAclResponse {
}
    
/**
 * DescribeSnatRuleRequest - 
 */
export interface DescribeSnatRuleRequest {
    /**
     * 地域。 参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * NAT网关的ID
     */
    NATGWId:string
    /**
     * 需要出外网的私网IP地址，例如10.9.7.xx
     */
    SourceIp?:string
    /**
     * EIP的ip地址,例如106.75.xx.xx
     */
    SnatIp?:string
    /**
     * 偏移，默认为0
     */
    Offset?:string
    /**
     * 分页，默认为20
     */
    Limit?:string
}
    
/**
 * GetNetworkAclTargetResourceResponse - 
 */
export interface GetNetworkAclTargetResourceResponse {
    /**
     * ACL规则应用目标资源列表，具体结构见下方TargetResourceInfo
     */
    TargetResourceList:
            TargetResourceInfo[]
    /**
     * ACL规则应用目标资源总数
     */
    TotalCount:number
}
    
/**
 * ModifyRouteRuleRequest - 
 */
export interface ModifyRouteRuleRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId:string
    /**
     * 通过DescribeRouteTable拿到
     */
    RouteTableId:string
    /**
     * 格式: RouteRuleId | 目的网段 | 下一跳类型（支持INSTANCE、VIP） | 下一跳 |优先级（保留字段，填写0即可）| 备注 | 增、删、改标志（add/delete/update） 。"添加"示例: test_id | 10.8.0.0/16 | instance | uhost-xd8ja | 0 | Default Route Rule| add (添加的RouteRuleId填任意非空字符串) 。"删除"示例: routerule-xk3jxa | 10.8.0.0/16 | instance | uhost-xd8ja | 0 | Default Route Rule| delete (RouteRuleId来自DescribeRouteTable中)     。“修改”示例: routerule-xk3jxa | 10.8.0.0/16 | instance | uhost-cjksa2 | 0 | Default Route Rule| update (RouteRuleId来自DescribeRouteTable中)   
     */
    RouteRule:string[]
}
    
/**
 * DescribeNetworkInterfaceResponse - 
 */
export interface DescribeNetworkInterfaceResponse {
    /**
     * 虚拟网卡信息
     */
    NetworkInterfaceSet:
            NetworkInterface[]
    /**
     * 虚拟网卡总数
     */
    TotalCount?:number
}
    
/**
 * CreateNetworkAclEntryResponse - 
 */
export interface CreateNetworkAclEntryResponse {
    /**
     * 创建的Entry的ID
     */
    EntryId:string
}
    
/**
 * DeleteNATGWPolicyResponse - 
 */
export interface DeleteNATGWPolicyResponse {
}
    
/**
 * DescribeWhiteListResourceObjectIPInfo - 
 */
export interface DescribeWhiteListResourceObjectIPInfo {
    /**
     * natgw字符串
     */
    GwType:string
    /**
     * 白名单资源的内网IP
     */
    PrivateIP:string
    /**
     * 白名单资源Id信息
     */
    ResourceId:string
    /**
     * 白名单资源名称
     */
    ResourceName:string
    /**
     * 白名单资源类型
     */
    ResourceType:string
    /**
     * 资源绑定的虚拟网卡的实例ID
     */
    SubResourceId:string
    /**
     * 资源绑定的虚拟网卡的实例名称
     */
    SubResourceName:string
    /**
     * 资源绑定的虚拟网卡的类型
     */
    SubResourceType:string
    /**
     * 白名单资源所属VPCId
     */
    VPCId?:string
}
    
/**
 * AddSnatRuleResponse - 
 */
export interface AddSnatRuleResponse {
}
    
/**
 * CreateSnatDnatRuleRequest - 
 */
export interface CreateSnatDnatRuleRequest {
    /**
     * 地域。 参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * 内网P地址
     */
    PrivateIp:string[]
    /**
     * EIP的IP地址。按入参顺序，PrivateIp与EIP一一对应建立映射关系。
     */
    EIP:string[]
    /**
     * 映射所使用的NAT网关资源ID
     */
    NATGWId:string
}
    
/**
 * AddWhiteListResourceRequest - 
 */
export interface AddWhiteListResourceRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 项目Id。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * NAT网关Id
     */
    NATGWId:string
    /**
     * 可添加白名单的资源Id
     */
    ResourceIds:string[]
}
    
/**
 * CreateVPCResponse - 
 */
export interface CreateVPCResponse {
    /**
     * VPC资源Id
     */
    VPCId?:string
}
    
/**
 * AllocateVIPResponse - 
 */
export interface AllocateVIPResponse {
    /**
     * 申请到的VIP资源相关信息
     */
    VIPSet?:
            VIPSet[]
    /**
     * 申请到的VIP地址
     */
    DataSet?:string[]
}
    
/**
 * DeleteNetworkAclAssociationResponse - 
 */
export interface DeleteNetworkAclAssociationResponse {
}
    
/**
 * CloneRouteTableRequest - 
 */
export interface CloneRouteTableRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId:string
    /**
     * 被克隆的路由表ID
     */
    RouteTableId:string
}
    
/**
 * CreateNATGWPolicyRequest - 
 */
export interface CreateNATGWPolicyRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 项目Id。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * NAT网关Id
     */
    NATGWId:string
    /**
     * 协议类型。枚举值为：TCP、UDP
     */
    Protocol:string
    /**
     * 源IP。填写对应的EIP Id
     */
    SrcEIPId:string
    /**
     * 源端口。可填写固定端口，也可填写端口范围。支持的端口范围为1-65535
     */
    SrcPort:string
    /**
     * 目标IP。填写对应的目标IP地址
     */
    DstIP:string
    /**
     * 目标端口。可填写固定端口，也可填写端口范围。支持的端口范围为1-65535
     */
    DstPort:string
    /**
     * 转发策略名称。默认为空
     */
    PolicyName?:string
}
    
/**
 * DeleteVPCIntercomResponse - 
 */
export interface DeleteVPCIntercomResponse {
}
    
/**
 * VIPSet - 
 */
export interface VIPSet {
    /**
     * 虚拟ip
     */
    VIP?:string
    /**
     * 虚拟ip id
     */
    VIPId?:string
    /**
     * VPC id
     */
    VPCId?:string
}
    
/**
 * GetNetworkAclTargetResourceRequest - 
 */
export interface GetNetworkAclTargetResourceRequest {
    /**
     * 地域。 参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * 子网ID。
     */
    SubnetworkId:string[]
}
    
/**
 * CreateNATGWResponse - 
 */
export interface CreateNATGWResponse {
    /**
     * 申请到的NATGateWay Id
     */
    NATGWId?:string
}
    
/**
 * VPCNetworkInfo - 
 */
export interface VPCNetworkInfo {
    /**
     * vpc地址空间
     */
    Network?:string
    /**
     * 地址空间中子网数量
     */
    SubnetCount?:number
}
    
/**
 * AddWhiteListResourceResponse - 
 */
export interface AddWhiteListResourceResponse {
}
    
/**
 * IpInfo - 
 */
export interface IpInfo {
    /**
     * 
     */
    Ip?:string
    /**
     * 
     */
    Mask?:string
    /**
     * 
     */
    Gateway?:string
    /**
     * 
     */
    Mac?:string
    /**
     * 
     */
    SubnetId?:string
    /**
     * 
     */
    VPCId?:string
}
    
/**
 * ReleaseVIPRequest - 
 */
export interface ReleaseVIPRequest {
    /**
     * 地域
     */
    Region:string
    /**
     * 可用区
     */
    Zone?:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写
     */
    ProjectId?:string
    /**
     * 内网VIP的id
     */
    VIPId:string
}
    
/**
 * RouteRuleInfo - 
 */
export interface RouteRuleInfo {
    /**
     * 项目ID信息
     */
    AccountId?:number
    /**
     * 目的地址
     */
    DstAddr?:string
    /**
     * 保留字段，暂未使用
     */
    DstPort?:number
    /**
     * 路由下一跳资源ID
     */
    NexthopId?:string
    /**
     * 路由表下一跳类型。LOCAL，本VPC内部通信路由；PUBLIC，公共服务路由；CNAT，外网路由；UDPN，跨域高速通道路由；HYBRIDGW，混合云路由；INSTANCE，实例路由；VNET，VPC联通路由；IPSEC VPN，指向VPN网关的路由。
     */
    NexthopType?:string
    /**
     * 保留字段，暂未使用
     */
    OriginAddr?:string
    /**
     * 保留字段，暂未使用
     */
    Priority?:number
    /**
     * 路由规则备注
     */
    Remark?:string
    /**
     * 规则ID
     */
    RouteRuleId?:string
    /**
     * 路由表资源ID
     */
    RouteTableId?:string
    /**
     * 路由规则类型。0，系统路由规则；1，自定义路由规则
     */
    RuleType?:number
    /**
     * 保留字段，暂未使用
     */
    SrcAddr?:string
    /**
     * 保留字段，暂未使用
     */
    SrcPort?:number
    /**
     * 所属的VPC
     */
    VNetId?:string
}
    
/**
 * NatGatewayIPSet - 
 */
export interface NatGatewayIPSet {
    /**
     * 外网IP的 EIPId
     */
    EIPId:string
    /**
     * 权重为100的为出口
     */
    Weight:number
    /**
     * EIP带宽类型
     */
    BandwidthType:string
    /**
     * 带宽
     */
    Bandwidth:number
    /**
     * 外网IP信息
     */
    IPResInfo:
            NatGWIPResInfo[]
}
    
/**
 * DeleteSnatDnatRuleRequest - 
 */
export interface DeleteSnatDnatRuleRequest {
    /**
     * 地域。 参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * EIP的IP地址,PrivateIp与EIP需一一对应
     */
    EIP:string[]
    /**
     * 内网P地址
     */
    PrivateIp:string[]
    /**
     * 映射所使用的NAT网关资源ID
     */
    NATGWId:string
}
    
/**
 * DeleteNetworkAclRequest - 
 */
export interface DeleteNetworkAclRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * 需要删除的AclId
     */
    AclId:string
}
    
/**
 * CreateNATGWPolicyResponse - 
 */
export interface CreateNATGWPolicyResponse {
    /**
     * 创建时分配的策略Id
     */
    PolicyId:string
}
    
/**
 * DescribeSecondaryIpResponse - 
 */
export interface DescribeSecondaryIpResponse {
    /**
     * 
     */
    DataSet?:
            IpInfo[]
}
    
/**
 * DeleteNATGWPolicyRequest - 
 */
export interface DeleteNATGWPolicyRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 项目Id。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * NAT网关Id
     */
    NATGWId:string
    /**
     * 端口转发规则Id
     */
    PolicyId:string
}
    
/**
 * DescribeVIPRequest - 
 */
export interface DescribeVIPRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
     */
    Zone?:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId:string
    /**
     * vpc的id,指定SubnetId时必填
     */
    VPCId?:string
    /**
     * 子网id，不指定则获取VPCId下的所有vip
     */
    SubnetId?:string
    /**
     * VIP ID
     */
    VIPId?:string
    /**
     * 业务组名称, 默认为 Default
     */
    Tag?:string
    /**
     * 业务组
     */
    BusinessId?:string
}
    
/**
 * DescribeInstanceNetworkInterfaceRequest - 
 */
export interface DescribeInstanceNetworkInterfaceRequest {
    /**
     * 地域。 参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId:string
    /**
     * 云主机ID
     */
    InstanceId:string
    /**
     * 默认为0
     */
    Offset?:number
    /**
     * 默认为20
     */
    Limit?:number
}
    
/**
 * MoveSecondaryIPMacResponse - 
 */
export interface MoveSecondaryIPMacResponse {
}
    
/**
 * DescribeSubnetResourceResponse - 
 */
export interface DescribeSubnetResourceResponse {
    /**
     * 总数
     */
    TotalCount?:number
    /**
     * 返回数据集，请见SubnetResource
     */
    DataSet?:
            SubnetResource[]
}
    
/**
 * CreateNATGWRequest - 
 */
export interface CreateNATGWRequest {
    /**
     * 地域。 参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Region:string
    /**
     * 项目Id。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * NAT网关名称
     */
    NATGWName:string
    /**
     * NAT网关绑定的EIPId
     */
    EIPIds:string[]
    /**
     * NAT网关绑定的防火墙Id
     */
    FirewallId:string
    /**
     * NAT网关绑定的子网Id，默认为空。
     */
    SubnetworkIds?:string[]
    /**
     * NAT网关所属的VPC Id。默认为Default VPC Id
     */
    VPCId?:string
    /**
     * 白名单开关标记。0表示关闭，1表示开启。默认为0
     */
    IfOpen?:number
    /**
     * 业务组。默认为空
     */
    Tag?:string
    /**
     * 备注。默认为空
     */
    Remark?:string
}
    
/**
 * DeleteSubnetResponse - 
 */
export interface DeleteSubnetResponse {
}
    
/**
 * CreateSubnetResponse - 
 */
export interface CreateSubnetResponse {
    /**
     * 子网ID
     */
    SubnetId?:string
}
    
/**
 * DescribeNetworkAclEntryResponse - 
 */
export interface DescribeNetworkAclEntryResponse {
    /**
     * 所有的规则信息
     */
    EntryList:
            AclEntryInfo[]
}
    
/**
 * ListSubnetForNATGWRequest - 
 */
export interface ListSubnetForNATGWRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 项目Id。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * NAT网关所属VPC Id。默认值为Default VPC Id
     */
    VPCId?:string
}
    
/**
 * DescribeNetworkAclAssociationRequest - 
 */
export interface DescribeNetworkAclAssociationRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * Acl的ID
     */
    AclId:string
    /**
     * 列表偏移量
     */
    Offset?:number
    /**
     * 列表获取的个数限制
     */
    Limit?:string
}
