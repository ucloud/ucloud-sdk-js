import Client from '../../core/client';
import Request from '../../core/request';
import { ConfigOptions } from '../../core/config';
import { CredentialOptions } from '../../core/credential';

/**
 * This client is used to call actions of **vpc** service
 */
export default class VPCClient extends Client {
  constructor({
    config,
    credential,
  }: {
    config: ConfigOptions;
    credential: CredentialOptions;
  }) {
    super({ config, credential });
  }

  /**
   * AddSnatRule - 对于绑定了多个EIP的NAT网关，您可以将一个子网下的某台云主机映射到某个特定的EIP上，规则生效后，则该云主机通过该特定的EIP访问互联网。
   *
   * See also: https://docs.ucloud.cn/api/vpc2.0-api/add_snat_rule
   */
  addSnatRule(request?: AddSnatRuleRequest): Promise<AddSnatRuleResponse> {
    const args = { Action: 'AddSnatRule', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as AddSnatRuleResponse
    );
  }

  /**
   * AddVPCNetwork - 添加VPC网段
   *
   * See also: https://docs.ucloud.cn/api/vpc2.0-api/add_vpc_network
   */
  addVPCNetwork(
    request?: AddVPCNetworkRequest
  ): Promise<AddVPCNetworkResponse> {
    const args = { Action: 'AddVPCNetwork', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as AddVPCNetworkResponse
    );
  }

  /**
   * AddWhiteListResource - 添加NAT网关白名单
   *
   * See also: https://docs.ucloud.cn/api/vpc2.0-api/add_white_list_resource
   */
  addWhiteListResource(
    request?: AddWhiteListResourceRequest
  ): Promise<AddWhiteListResourceResponse> {
    const args = { Action: 'AddWhiteListResource', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as AddWhiteListResourceResponse
    );
  }

  /**
   * AllocateSecondaryIp - 分配ip（用于uk8s使用）
   *
   * See also: https://docs.ucloud.cn/api/vpc2.0-api/allocate_secondary_ip
   */
  allocateSecondaryIp(
    request?: AllocateSecondaryIpRequest
  ): Promise<AllocateSecondaryIpResponse> {
    const args = { Action: 'AllocateSecondaryIp', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as AllocateSecondaryIpResponse
    );
  }

  /**
   * AllocateVIP - 根据提供信息，申请内网VIP(Virtual IP），多用于高可用程序作为漂移IP。
   *
   * See also: https://docs.ucloud.cn/api/vpc2.0-api/allocate_vip
   */
  allocateVIP(request?: AllocateVIPRequest): Promise<AllocateVIPResponse> {
    const args = { Action: 'AllocateVIP', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as AllocateVIPResponse
    );
  }

  /**
   * AssociateRouteTable - 绑定子网的路由表
   *
   * See also: https://docs.ucloud.cn/api/vpc2.0-api/associate_route_table
   */
  associateRouteTable(
    request?: AssociateRouteTableRequest
  ): Promise<AssociateRouteTableResponse> {
    const args = { Action: 'AssociateRouteTable', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as AssociateRouteTableResponse
    );
  }

  /**
   * CloneRouteTable - 将现有的路由表复制为一张新的路由表
   *
   * See also: https://docs.ucloud.cn/api/vpc2.0-api/clone_route_table
   */
  cloneRouteTable(
    request?: CloneRouteTableRequest
  ): Promise<CloneRouteTableResponse> {
    const args = { Action: 'CloneRouteTable', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as CloneRouteTableResponse
    );
  }

  /**
   * CreateNATGW - 创建NAT网关
   *
   * See also: https://docs.ucloud.cn/api/vpc2.0-api/create_natgw
   */
  createNATGW(request?: CreateNATGWRequest): Promise<CreateNATGWResponse> {
    const args = { Action: 'CreateNATGW', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as CreateNATGWResponse
    );
  }

  /**
   * CreateNATGWPolicy - 添加NAT网关端口转发规则
   *
   * See also: https://docs.ucloud.cn/api/vpc2.0-api/create_natgw_policy
   */
  createNATGWPolicy(
    request?: CreateNATGWPolicyRequest
  ): Promise<CreateNATGWPolicyResponse> {
    const args = { Action: 'CreateNATGWPolicy', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as CreateNATGWPolicyResponse
    );
  }

  /**
   * CreateNetworkAcl - 创建网络ACL
   *
   * See also: https://docs.ucloud.cn/api/vpc2.0-api/create_network_acl
   */
  createNetworkAcl(
    request?: CreateNetworkAclRequest
  ): Promise<CreateNetworkAclResponse> {
    const args = { Action: 'CreateNetworkAcl', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as CreateNetworkAclResponse
    );
  }

  /**
   * CreateNetworkAclAssociation - 创建ACL的绑定关系
   *
   * See also: https://docs.ucloud.cn/api/vpc2.0-api/create_network_acl_association
   */
  createNetworkAclAssociation(
    request?: CreateNetworkAclAssociationRequest
  ): Promise<CreateNetworkAclAssociationResponse> {
    const args = { Action: 'CreateNetworkAclAssociation', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as CreateNetworkAclAssociationResponse
    );
  }

  /**
   * CreateNetworkAclEntry - 创建ACL的规则
   *
   * See also: https://docs.ucloud.cn/api/vpc2.0-api/create_network_acl_entry
   */
  createNetworkAclEntry(
    request?: CreateNetworkAclEntryRequest
  ): Promise<CreateNetworkAclEntryResponse> {
    const args = { Action: 'CreateNetworkAclEntry', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as CreateNetworkAclEntryResponse
    );
  }

  /**
   * CreateRouteTable - 创建路由表
   *
   * See also: https://docs.ucloud.cn/api/vpc2.0-api/create_route_table
   */
  createRouteTable(
    request?: CreateRouteTableRequest
  ): Promise<CreateRouteTableResponse> {
    const args = { Action: 'CreateRouteTable', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as CreateRouteTableResponse
    );
  }

  /**
   * CreateSnatDnatRule - 调用接口后会自动创建内外网IP之间的SNAT和DNAT规则，支持TCP、UDP协议全端口
   *
   * See also: https://docs.ucloud.cn/api/vpc2.0-api/create_snat_dnat_rule
   */
  createSnatDnatRule(
    request?: CreateSnatDnatRuleRequest
  ): Promise<CreateSnatDnatRuleResponse> {
    const args = { Action: 'CreateSnatDnatRule', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as CreateSnatDnatRuleResponse
    );
  }

  /**
   * CreateSubnet - 创建子网
   *
   * See also: https://docs.ucloud.cn/api/vpc2.0-api/create_subnet
   */
  createSubnet(request?: CreateSubnetRequest): Promise<CreateSubnetResponse> {
    const args = { Action: 'CreateSubnet', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as CreateSubnetResponse
    );
  }

  /**
   * CreateVPC - 创建VPC
   *
   * See also: https://docs.ucloud.cn/api/vpc2.0-api/create_vpc
   */
  createVPC(request?: CreateVPCRequest): Promise<CreateVPCResponse> {
    const args = { Action: 'CreateVPC', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as CreateVPCResponse
    );
  }

  /**
   * CreateVPCIntercom - 新建VPC互通关系
   *
   * See also: https://docs.ucloud.cn/api/vpc2.0-api/create_vpc_intercom
   */
  createVPCIntercom(
    request?: CreateVPCIntercomRequest
  ): Promise<CreateVPCIntercomResponse> {
    const args = { Action: 'CreateVPCIntercom', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as CreateVPCIntercomResponse
    );
  }

  /**
   * DeleteNATGW - 删除NAT网关
   *
   * See also: https://docs.ucloud.cn/api/vpc2.0-api/delete_natgw
   */
  deleteNATGW(request?: DeleteNATGWRequest): Promise<DeleteNATGWResponse> {
    const args = { Action: 'DeleteNATGW', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DeleteNATGWResponse
    );
  }

  /**
   * DeleteNATGWPolicy - 删除NAT网关端口转发规则
   *
   * See also: https://docs.ucloud.cn/api/vpc2.0-api/delete_natgw_policy
   */
  deleteNATGWPolicy(
    request?: DeleteNATGWPolicyRequest
  ): Promise<DeleteNATGWPolicyResponse> {
    const args = { Action: 'DeleteNATGWPolicy', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DeleteNATGWPolicyResponse
    );
  }

  /**
   * DeleteNetworkAcl - 删除网络ACL
   *
   * See also: https://docs.ucloud.cn/api/vpc2.0-api/delete_network_acl
   */
  deleteNetworkAcl(
    request?: DeleteNetworkAclRequest
  ): Promise<DeleteNetworkAclResponse> {
    const args = { Action: 'DeleteNetworkAcl', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DeleteNetworkAclResponse
    );
  }

  /**
   * DeleteNetworkAclAssociation - 删除网络ACL绑定关系
   *
   * See also: https://docs.ucloud.cn/api/vpc2.0-api/delete_network_acl_association
   */
  deleteNetworkAclAssociation(
    request?: DeleteNetworkAclAssociationRequest
  ): Promise<DeleteNetworkAclAssociationResponse> {
    const args = { Action: 'DeleteNetworkAclAssociation', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DeleteNetworkAclAssociationResponse
    );
  }

  /**
   * DeleteNetworkAclEntry - 删除ACL的规则
   *
   * See also: https://docs.ucloud.cn/api/vpc2.0-api/delete_network_acl_entry
   */
  deleteNetworkAclEntry(
    request?: DeleteNetworkAclEntryRequest
  ): Promise<DeleteNetworkAclEntryResponse> {
    const args = { Action: 'DeleteNetworkAclEntry', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DeleteNetworkAclEntryResponse
    );
  }

  /**
   * DeleteRouteTable - 删除自定义路由表
   *
   * See also: https://docs.ucloud.cn/api/vpc2.0-api/delete_route_table
   */
  deleteRouteTable(
    request?: DeleteRouteTableRequest
  ): Promise<DeleteRouteTableResponse> {
    const args = { Action: 'DeleteRouteTable', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DeleteRouteTableResponse
    );
  }

  /**
   * DeleteSecondaryIp - 删除ip（用于uk8s使用）
   *
   * See also: https://docs.ucloud.cn/api/vpc2.0-api/delete_secondary_ip
   */
  deleteSecondaryIp(
    request?: DeleteSecondaryIpRequest
  ): Promise<DeleteSecondaryIpResponse> {
    const args = { Action: 'DeleteSecondaryIp', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DeleteSecondaryIpResponse
    );
  }

  /**
   * DeleteSnatDnatRule - 删除NAT创建内外网IP映射规则
   *
   * See also: https://docs.ucloud.cn/api/vpc2.0-api/delete_snat_dnat_rule
   */
  deleteSnatDnatRule(
    request?: DeleteSnatDnatRuleRequest
  ): Promise<DeleteSnatDnatRuleResponse> {
    const args = { Action: 'DeleteSnatDnatRule', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DeleteSnatDnatRuleResponse
    );
  }

  /**
   * DeleteSnatRule - 删除指定的出口规则（SNAT规则）
   *
   * See also: https://docs.ucloud.cn/api/vpc2.0-api/delete_snat_rule
   */
  deleteSnatRule(
    request?: DeleteSnatRuleRequest
  ): Promise<DeleteSnatRuleResponse> {
    const args = { Action: 'DeleteSnatRule', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DeleteSnatRuleResponse
    );
  }

  /**
   * DeleteSubnet - 删除子网
   *
   * See also: https://docs.ucloud.cn/api/vpc2.0-api/delete_subnet
   */
  deleteSubnet(request?: DeleteSubnetRequest): Promise<DeleteSubnetResponse> {
    const args = { Action: 'DeleteSubnet', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DeleteSubnetResponse
    );
  }

  /**
   * DeleteVPC - 删除VPC
   *
   * See also: https://docs.ucloud.cn/api/vpc2.0-api/delete_vpc
   */
  deleteVPC(request?: DeleteVPCRequest): Promise<DeleteVPCResponse> {
    const args = { Action: 'DeleteVPC', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DeleteVPCResponse
    );
  }

  /**
   * DeleteVPCIntercom - 删除VPC互通关系
   *
   * See also: https://docs.ucloud.cn/api/vpc2.0-api/delete_vpc_intercom
   */
  deleteVPCIntercom(
    request?: DeleteVPCIntercomRequest
  ): Promise<DeleteVPCIntercomResponse> {
    const args = { Action: 'DeleteVPCIntercom', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DeleteVPCIntercomResponse
    );
  }

  /**
   * DeleteWhiteListResource - 删除NAT网关白名单列表
   *
   * See also: https://docs.ucloud.cn/api/vpc2.0-api/delete_white_list_resource
   */
  deleteWhiteListResource(
    request?: DeleteWhiteListResourceRequest
  ): Promise<DeleteWhiteListResourceResponse> {
    const args = { Action: 'DeleteWhiteListResource', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DeleteWhiteListResourceResponse
    );
  }

  /**
   * DescribeInstanceNetworkInterface - 展示云主机绑定的网卡信息
   *
   * See also: https://docs.ucloud.cn/api/vpc2.0-api/describe_instance_network_interface
   */
  describeInstanceNetworkInterface(
    request?: DescribeInstanceNetworkInterfaceRequest
  ): Promise<DescribeInstanceNetworkInterfaceResponse> {
    const args = {
      Action: 'DescribeInstanceNetworkInterface',
      ...(request || {}),
    };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DescribeInstanceNetworkInterfaceResponse
    );
  }

  /**
   * DescribeNATGW - 获取NAT网关信息
   *
   * See also: https://docs.ucloud.cn/api/vpc2.0-api/describe_natgw
   */
  describeNATGW(
    request?: DescribeNATGWRequest
  ): Promise<DescribeNATGWResponse> {
    const args = { Action: 'DescribeNATGW', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DescribeNATGWResponse
    );
  }

  /**
   * DescribeNATGWPolicy - 展示NAT网关端口转发规则
   *
   * See also: https://docs.ucloud.cn/api/vpc2.0-api/describe_natgw_policy
   */
  describeNATGWPolicy(
    request?: DescribeNATGWPolicyRequest
  ): Promise<DescribeNATGWPolicyResponse> {
    const args = { Action: 'DescribeNATGWPolicy', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DescribeNATGWPolicyResponse
    );
  }

  /**
   * DescribeNetworkAcl - 获取网络ACL
   *
   * See also: https://docs.ucloud.cn/api/vpc2.0-api/describe_network_acl
   */
  describeNetworkAcl(
    request?: DescribeNetworkAclRequest
  ): Promise<DescribeNetworkAclResponse> {
    const args = { Action: 'DescribeNetworkAcl', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DescribeNetworkAclResponse
    );
  }

  /**
   * DescribeNetworkAclAssociation - 获取网络ACL的绑定关系列表
   *
   * See also: https://docs.ucloud.cn/api/vpc2.0-api/describe_network_acl_association
   */
  describeNetworkAclAssociation(
    request?: DescribeNetworkAclAssociationRequest
  ): Promise<DescribeNetworkAclAssociationResponse> {
    const args = {
      Action: 'DescribeNetworkAclAssociation',
      ...(request || {}),
    };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DescribeNetworkAclAssociationResponse
    );
  }

  /**
   * DescribeNetworkAclAssociationBySubnet - 获取子网的ACL绑定信息
   *
   * See also: https://docs.ucloud.cn/api/vpc2.0-api/describe_network_acl_association_by_subnet
   */
  describeNetworkAclAssociationBySubnet(
    request?: DescribeNetworkAclAssociationBySubnetRequest
  ): Promise<DescribeNetworkAclAssociationBySubnetResponse> {
    const args = {
      Action: 'DescribeNetworkAclAssociationBySubnet',
      ...(request || {}),
    };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DescribeNetworkAclAssociationBySubnetResponse
    );
  }

  /**
   * DescribeNetworkAclEntry - 获取ACL的规则信息
   *
   * See also: https://docs.ucloud.cn/api/vpc2.0-api/describe_network_acl_entry
   */
  describeNetworkAclEntry(
    request?: DescribeNetworkAclEntryRequest
  ): Promise<DescribeNetworkAclEntryResponse> {
    const args = { Action: 'DescribeNetworkAclEntry', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DescribeNetworkAclEntryResponse
    );
  }

  /**
   * DescribeNetworkInterface - 展示虚拟网卡信息
   *
   * See also: https://docs.ucloud.cn/api/vpc2.0-api/describe_network_interface
   */
  describeNetworkInterface(
    request?: DescribeNetworkInterfaceRequest
  ): Promise<DescribeNetworkInterfaceResponse> {
    const args = { Action: 'DescribeNetworkInterface', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DescribeNetworkInterfaceResponse
    );
  }

  /**
   * DescribeRouteTable - 获取路由表详细信息(包括路由策略)
   *
   * See also: https://docs.ucloud.cn/api/vpc2.0-api/describe_route_table
   */
  describeRouteTable(
    request?: DescribeRouteTableRequest
  ): Promise<DescribeRouteTableResponse> {
    const args = { Action: 'DescribeRouteTable', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DescribeRouteTableResponse
    );
  }

  /**
   * DescribeSecondaryIp - 查询SecondaryIp（uk8s使用）
   *
   * See also: https://docs.ucloud.cn/api/vpc2.0-api/describe_secondary_ip
   */
  describeSecondaryIp(
    request?: DescribeSecondaryIpRequest
  ): Promise<DescribeSecondaryIpResponse> {
    const args = { Action: 'DescribeSecondaryIp', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DescribeSecondaryIpResponse
    );
  }

  /**
   * DescribeSnatDnatRule - 获取基于NAT创建的内外网IP映射规则信息
   *
   * See also: https://docs.ucloud.cn/api/vpc2.0-api/describe_snat_dnat_rule
   */
  describeSnatDnatRule(
    request?: DescribeSnatDnatRuleRequest
  ): Promise<DescribeSnatDnatRuleResponse> {
    const args = { Action: 'DescribeSnatDnatRule', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DescribeSnatDnatRuleResponse
    );
  }

  /**
   * DescribeSnatRule - 获取Nat网关的出口规则（SNAT规则）
   *
   * See also: https://docs.ucloud.cn/api/vpc2.0-api/describe_snat_rule
   */
  describeSnatRule(
    request?: DescribeSnatRuleRequest
  ): Promise<DescribeSnatRuleResponse> {
    const args = { Action: 'DescribeSnatRule', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DescribeSnatRuleResponse
    );
  }

  /**
   * DescribeSubnet - 获取子网信息
   *
   * See also: https://docs.ucloud.cn/api/vpc2.0-api/describe_subnet
   */
  describeSubnet(
    request?: DescribeSubnetRequest
  ): Promise<DescribeSubnetResponse> {
    const args = { Action: 'DescribeSubnet', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DescribeSubnetResponse
    );
  }

  /**
   * DescribeSubnetResource - 展示子网资源
   *
   * See also: https://docs.ucloud.cn/api/vpc2.0-api/describe_subnet_resource
   */
  describeSubnetResource(
    request?: DescribeSubnetResourceRequest
  ): Promise<DescribeSubnetResourceResponse> {
    const args = { Action: 'DescribeSubnetResource', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DescribeSubnetResourceResponse
    );
  }

  /**
   * DescribeVIP - 获取内网VIP详细信息
   *
   * See also: https://docs.ucloud.cn/api/vpc2.0-api/describe_vip
   */
  describeVIP(request?: DescribeVIPRequest): Promise<DescribeVIPResponse> {
    const args = { Action: 'DescribeVIP', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DescribeVIPResponse
    );
  }

  /**
   * DescribeVPC - 获取VPC信息
   *
   * See also: https://docs.ucloud.cn/api/vpc2.0-api/describe_vpc
   */
  describeVPC(request?: DescribeVPCRequest): Promise<DescribeVPCResponse> {
    const args = { Action: 'DescribeVPC', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DescribeVPCResponse
    );
  }

  /**
   * DescribeVPCIntercom - 获取VPC互通信息
   *
   * See also: https://docs.ucloud.cn/api/vpc2.0-api/describe_vpc_intercom
   */
  describeVPCIntercom(
    request?: DescribeVPCIntercomRequest
  ): Promise<DescribeVPCIntercomResponse> {
    const args = { Action: 'DescribeVPCIntercom', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DescribeVPCIntercomResponse
    );
  }

  /**
   * DescribeWhiteListResource - 展示NAT网关白名单资源列表
   *
   * See also: https://docs.ucloud.cn/api/vpc2.0-api/describe_white_list_resource
   */
  describeWhiteListResource(
    request?: DescribeWhiteListResourceRequest
  ): Promise<DescribeWhiteListResourceResponse> {
    const args = { Action: 'DescribeWhiteListResource', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DescribeWhiteListResourceResponse
    );
  }

  /**
   * EnableWhiteList - 修改NAT网关白名单开关
   *
   * See also: https://docs.ucloud.cn/api/vpc2.0-api/enable_white_list
   */
  enableWhiteList(
    request?: EnableWhiteListRequest
  ): Promise<EnableWhiteListResponse> {
    const args = { Action: 'EnableWhiteList', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as EnableWhiteListResponse
    );
  }

  /**
   * GetAvailableResourceForPolicy - 获取NAT网关可配置端口转发规则的资源信息
   *
   * See also: https://docs.ucloud.cn/api/vpc2.0-api/get_available_resource_for_policy
   */
  getAvailableResourceForPolicy(
    request?: GetAvailableResourceForPolicyRequest
  ): Promise<GetAvailableResourceForPolicyResponse> {
    const args = {
      Action: 'GetAvailableResourceForPolicy',
      ...(request || {}),
    };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as GetAvailableResourceForPolicyResponse
    );
  }

  /**
   * GetAvailableResourceForSnatRule - 获取可用于添加snat规则（出口规则）的资源列表
   *
   * See also: https://docs.ucloud.cn/api/vpc2.0-api/get_available_resource_for_snat_rule
   */
  getAvailableResourceForSnatRule(
    request?: GetAvailableResourceForSnatRuleRequest
  ): Promise<GetAvailableResourceForSnatRuleResponse> {
    const args = {
      Action: 'GetAvailableResourceForSnatRule',
      ...(request || {}),
    };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as GetAvailableResourceForSnatRuleResponse
    );
  }

  /**
   * GetAvailableResourceForWhiteList - 获取NAT网关可添加白名单的资源
   *
   * See also: https://docs.ucloud.cn/api/vpc2.0-api/get_available_resource_for_white_list
   */
  getAvailableResourceForWhiteList(
    request?: GetAvailableResourceForWhiteListRequest
  ): Promise<GetAvailableResourceForWhiteListResponse> {
    const args = {
      Action: 'GetAvailableResourceForWhiteList',
      ...(request || {}),
    };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as GetAvailableResourceForWhiteListResponse
    );
  }

  /**
   * GetNetworkAclTargetResource - 获取ACL规则应用目标列表
   *
   * See also: https://docs.ucloud.cn/api/vpc2.0-api/get_network_acl_target_resource
   */
  getNetworkAclTargetResource(
    request?: GetNetworkAclTargetResourceRequest
  ): Promise<GetNetworkAclTargetResourceResponse> {
    const args = { Action: 'GetNetworkAclTargetResource', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as GetNetworkAclTargetResourceResponse
    );
  }

  /**
   * ListSubnetForNATGW - 展示NAT网关可绑定的子网列表
   *
   * See also: https://docs.ucloud.cn/api/vpc2.0-api/list_subnet_for_natgw
   */
  listSubnetForNATGW(
    request?: ListSubnetForNATGWRequest
  ): Promise<ListSubnetForNATGWResponse> {
    const args = { Action: 'ListSubnetForNATGW', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as ListSubnetForNATGWResponse
    );
  }

  /**
   * ModifyRouteRule - 路由策略增、删、改
   *
   * See also: https://docs.ucloud.cn/api/vpc2.0-api/modify_route_rule
   */
  modifyRouteRule(
    request?: ModifyRouteRuleRequest
  ): Promise<ModifyRouteRuleResponse> {
    const args = { Action: 'ModifyRouteRule', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as ModifyRouteRuleResponse
    );
  }

  /**
   * MoveSecondaryIPMac - 把 Secondary IP 从旧 MAC 迁移到新 MAC
   *
   * See also: https://docs.ucloud.cn/api/vpc2.0-api/move_secondary_ip_mac
   */
  moveSecondaryIPMac(
    request?: MoveSecondaryIPMacRequest
  ): Promise<MoveSecondaryIPMacResponse> {
    const args = { Action: 'MoveSecondaryIPMac', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as MoveSecondaryIPMacResponse
    );
  }

  /**
   * ReleaseVIP - 释放VIP资源
   *
   * See also: https://docs.ucloud.cn/api/vpc2.0-api/release_vip
   */
  releaseVIP(request?: ReleaseVIPRequest): Promise<ReleaseVIPResponse> {
    const args = { Action: 'ReleaseVIP', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as ReleaseVIPResponse
    );
  }

  /**
   * SetGwDefaultExport - 设置NAT网关的默认出口
   *
   * See also: https://docs.ucloud.cn/api/vpc2.0-api/set_gw_default_export
   */
  setGwDefaultExport(
    request?: SetGwDefaultExportRequest
  ): Promise<SetGwDefaultExportResponse> {
    const args = { Action: 'SetGwDefaultExport', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as SetGwDefaultExportResponse
    );
  }

  /**
   * UpdateNATGWPolicy - 更新NAT网关端口转发规则
   *
   * See also: https://docs.ucloud.cn/api/vpc2.0-api/update_natgw_policy
   */
  updateNATGWPolicy(
    request?: UpdateNATGWPolicyRequest
  ): Promise<UpdateNATGWPolicyResponse> {
    const args = { Action: 'UpdateNATGWPolicy', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as UpdateNATGWPolicyResponse
    );
  }

  /**
   * UpdateNATGWSubnet - 更新NAT网关绑定的子网
   *
   * See also: https://docs.ucloud.cn/api/vpc2.0-api/update_natgw_subnet
   */
  updateNATGWSubnet(
    request?: UpdateNATGWSubnetRequest
  ): Promise<UpdateNATGWSubnetResponse> {
    const args = { Action: 'UpdateNATGWSubnet', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as UpdateNATGWSubnetResponse
    );
  }

  /**
   * UpdateNetworkAcl - 更改ACL
   *
   * See also: https://docs.ucloud.cn/api/vpc2.0-api/update_network_acl
   */
  updateNetworkAcl(
    request?: UpdateNetworkAclRequest
  ): Promise<UpdateNetworkAclResponse> {
    const args = { Action: 'UpdateNetworkAcl', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as UpdateNetworkAclResponse
    );
  }

  /**
   * UpdateNetworkAclEntry - 更新ACL的规则
   *
   * See also: https://docs.ucloud.cn/api/vpc2.0-api/update_network_acl_entry
   */
  updateNetworkAclEntry(
    request?: UpdateNetworkAclEntryRequest
  ): Promise<UpdateNetworkAclEntryResponse> {
    const args = { Action: 'UpdateNetworkAclEntry', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as UpdateNetworkAclEntryResponse
    );
  }

  /**
   * UpdateRouteTableAttribute - 更新路由表基本信息
   *
   * See also: https://docs.ucloud.cn/api/vpc2.0-api/update_route_table_attribute
   */
  updateRouteTableAttribute(
    request?: UpdateRouteTableAttributeRequest
  ): Promise<UpdateRouteTableAttributeResponse> {
    const args = { Action: 'UpdateRouteTableAttribute', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as UpdateRouteTableAttributeResponse
    );
  }

  /**
   * UpdateSnatRule - 更新指定的出口规则（SNAT规则）
   *
   * See also: https://docs.ucloud.cn/api/vpc2.0-api/update_snat_rule
   */
  updateSnatRule(
    request?: UpdateSnatRuleRequest
  ): Promise<UpdateSnatRuleResponse> {
    const args = { Action: 'UpdateSnatRule', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as UpdateSnatRuleResponse
    );
  }

  /**
   * UpdateSubnetAttribute - 更新子网信息
   *
   * See also: https://docs.ucloud.cn/api/vpc2.0-api/update_subnet_attribute
   */
  updateSubnetAttribute(
    request?: UpdateSubnetAttributeRequest
  ): Promise<UpdateSubnetAttributeResponse> {
    const args = { Action: 'UpdateSubnetAttribute', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as UpdateSubnetAttributeResponse
    );
  }

  /**
   * UpdateVIPAttribute - 更新VIP信息
   *
   * See also: https://docs.ucloud.cn/api/vpc2.0-api/update_vip_attribute
   */
  updateVIPAttribute(
    request?: UpdateVIPAttributeRequest
  ): Promise<UpdateVIPAttributeResponse> {
    const args = { Action: 'UpdateVIPAttribute', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as UpdateVIPAttributeResponse
    );
  }

  /**
   * UpdateVPCNetwork - 更新VPC网段
   *
   * See also: https://docs.ucloud.cn/api/vpc2.0-api/update_vpc_network
   */
  updateVPCNetwork(
    request?: UpdateVPCNetworkRequest
  ): Promise<UpdateVPCNetworkResponse> {
    const args = { Action: 'UpdateVPCNetwork', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as UpdateVPCNetworkResponse
    );
  }
}

/**
 * AddSnatRule - 对于绑定了多个EIP的NAT网关，您可以将一个子网下的某台云主机映射到某个特定的EIP上，规则生效后，则该云主机通过该特定的EIP访问互联网。
 */
export interface AddSnatRuleRequest {
  /**
   * NAT网关的ID
   */
  NATGWId: string;
  /**
   * 需要出外网的私网IP地址，例如10.9.7.xx
   */
  SourceIp: string;
  /**
   * EIP的ip地址,例如106.75.xx.xx
   */
  SnatIp: string;
  /**
   * snat规则名称，默认为“出口规则”
   */
  Name?: string;
}

/**
 * AddSnatRule - 对于绑定了多个EIP的NAT网关，您可以将一个子网下的某台云主机映射到某个特定的EIP上，规则生效后，则该云主机通过该特定的EIP访问互联网。
 */
export interface AddSnatRuleResponse {}

/**
 * AddVPCNetwork - 添加VPC网段
 */
export interface AddVPCNetworkRequest {
  /**
   * 源VPC短ID
   */
  VPCId: string;
  /**
   * 增加网段
   */
  Network: string[];
}

/**
 * AddVPCNetwork - 添加VPC网段
 */
export interface AddVPCNetworkResponse {}

/**
 * AddWhiteListResource - 添加NAT网关白名单
 */
export interface AddWhiteListResourceRequest {
  /**
   * NAT网关Id
   */
  NATGWId: string;
  /**
   * 可添加白名单的资源Id
   */
  ResourceIds: string[];
}

/**
 * AddWhiteListResource - 添加NAT网关白名单
 */
export interface AddWhiteListResourceResponse {}

/**
 * AllocateSecondaryIp - 分配ip（用于uk8s使用）
 */
export interface AllocateSecondaryIpRequest {
  /**
   * 可用区。参见 [可用区列表](../summary/regionlist.html)
   */
  Zone: string;
  /**
   * 节点mac
   */
  Mac: string;
  /**
   * 资源Id
   */
  ObjectId: string;
  /**
   * 子网Id（若未指定，则根据zone获取默认子网进行创建）
   */
  SubnetId?: string;
  /**
   * vpcId
   */
  VPCId?: string;
  /**
   * 指定Ip分配
   */
  Ip?: string;
}

/**
 * AllocateSecondaryIp - 分配ip（用于uk8s使用）
 */
export interface AllocateSecondaryIpResponse {
  /**
   *
   */
  IpInfo: {
    /**
     *
     */
    Ip?: string;
    /**
     *
     */
    Mask?: string;
    /**
     *
     */
    Gateway?: string;
    /**
     *
     */
    Mac?: string;
    /**
     *
     */
    SubnetId?: string;
    /**
     *
     */
    VPCId?: string;
  };
}

/**
 * AllocateVIP - 根据提供信息，申请内网VIP(Virtual IP），多用于高可用程序作为漂移IP。
 */
export interface AllocateVIPRequest {
  /**
   * 可用区
   */
  Zone?: string;
  /**
   * 指定vip所属的VPC
   */
  VPCId: string;
  /**
   * 子网id
   */
  SubnetId: string;
  /**
   * 指定ip
   */
  Ip?: string;
  /**
   * 申请数量，默认: 1
   */
  Count?: number;
  /**
   * vip名，默认：VIP
   */
  Name?: string;
  /**
   * 业务组名称，默认为Default
   */
  Tag?: string;
  /**
   * 备注
   */
  Remark?: string;
  /**
   * 业务组
   */
  BusinessId?: string;
}

/**
 * AllocateVIP - 根据提供信息，申请内网VIP(Virtual IP），多用于高可用程序作为漂移IP。
 */
export interface AllocateVIPResponse {
  /**
   * 申请到的VIP资源相关信息
   */
  VIPSet?: {
    /**
     * 虚拟ip
     */
    VIP?: string;
    /**
     * 虚拟ip id
     */
    VIPId?: string;
    /**
     * VPC id
     */
    VPCId?: string;
  }[];
  /**
   * 申请到的VIP地址
   */
  DataSet?: string[];
}

/**
 * AssociateRouteTable - 绑定子网的路由表
 */
export interface AssociateRouteTableRequest {
  /**
   * 子网ID
   */
  SubnetId: string;
  /**
   * 路由表资源ID
   */
  RouteTableId: string;
}

/**
 * AssociateRouteTable - 绑定子网的路由表
 */
export interface AssociateRouteTableResponse {}

/**
 * CloneRouteTable - 将现有的路由表复制为一张新的路由表
 */
export interface CloneRouteTableRequest {
  /**
   * 被克隆的路由表ID
   */
  RouteTableId: string;
}

/**
 * CloneRouteTable - 将现有的路由表复制为一张新的路由表
 */
export interface CloneRouteTableResponse {
  /**
   * 复制后新的路由表资源ID
   */
  RouteTableId?: string;
}

/**
 * CreateNATGW - 创建NAT网关
 */
export interface CreateNATGWRequest {
  /**
   * NAT网关名称
   */
  NATGWName: string;
  /**
   * NAT网关绑定的EIPId
   */
  EIPIds: string[];
  /**
   * NAT网关绑定的防火墙Id
   */
  FirewallId: string;
  /**
   * NAT网关绑定的子网Id，默认为空。
   */
  SubnetworkIds?: string[];
  /**
   * NAT网关所属的VPC Id。默认为Default VPC Id
   */
  VPCId?: string;
  /**
   * 白名单开关标记。0表示关闭，1表示开启。默认为0
   */
  IfOpen?: number;
  /**
   * 业务组。默认为空
   */
  Tag?: string;
  /**
   * 备注。默认为空
   */
  Remark?: string;
}

/**
 * CreateNATGW - 创建NAT网关
 */
export interface CreateNATGWResponse {
  /**
   * 申请到的NATGateWay Id
   */
  NATGWId?: string;
}

/**
 * CreateNATGWPolicy - 添加NAT网关端口转发规则
 */
export interface CreateNATGWPolicyRequest {
  /**
   * NAT网关Id
   */
  NATGWId: string;
  /**
   * 协议类型。枚举值为：TCP、UDP
   */
  Protocol: string;
  /**
   * 源IP。填写对应的EIP Id
   */
  SrcEIPId: string;
  /**
   * 源端口。可填写固定端口，也可填写端口范围。支持的端口范围为1-65535
   */
  SrcPort: string;
  /**
   * 目标IP。填写对应的目标IP地址
   */
  DstIP: string;
  /**
   * 目标端口。可填写固定端口，也可填写端口范围。支持的端口范围为1-65535
   */
  DstPort: string;
  /**
   * 转发策略名称。默认为空
   */
  PolicyName?: string;
}

/**
 * CreateNATGWPolicy - 添加NAT网关端口转发规则
 */
export interface CreateNATGWPolicyResponse {
  /**
   * 创建时分配的策略Id
   */
  PolicyId: string;
}

/**
 * CreateNetworkAcl - 创建网络ACL
 */
export interface CreateNetworkAclRequest {
  /**
   * 将要创建的ACL所属VPC的ID
   */
  VpcId: string;
  /**
   * ACL的名称
   */
  AclName: string;
  /**
   * ACL的描述
   */
  Description?: string;
}

/**
 * CreateNetworkAcl - 创建网络ACL
 */
export interface CreateNetworkAclResponse {
  /**
   * 创建的ACL的ID
   */
  AclId: string;
}

/**
 * CreateNetworkAclAssociation - 创建ACL的绑定关系
 */
export interface CreateNetworkAclAssociationRequest {
  /**
   * ACL的ID
   */
  AclId: string;
  /**
   * 需要绑定的子网ID
   */
  SubnetworkId: string;
}

/**
 * CreateNetworkAclAssociation - 创建ACL的绑定关系
 */
export interface CreateNetworkAclAssociationResponse {
  /**
   * 创建的绑定关系的ID
   */
  AssociationId: string;
  /**
   * 该子网之前的绑定关系信息
   */
  PrevAssociation?: {
    /**
     * 绑定ID
     */
    AssociationId: string;
    /**
     * ACL的ID
     */
    AclId: string;
    /**
     * 绑定的子网ID
     */
    SubnetworkId: string;
    /**
     * 创建的Unix时间戳
     */
    CreateTime: number;
  };
}

/**
 * CreateNetworkAclEntry - 创建ACL的规则
 */
export interface CreateNetworkAclEntryRequest {
  /**
   * ACL的ID
   */
  AclId: string;
  /**
   * Entry的优先级，对于同样的Direction来说，不能重复
   */
  Priority: number;
  /**
   * 出向或者入向（“Ingress”, "Egress")
   */
  Direction: string;
  /**
   * 协议规则描述
   */
  IpProtocol: string;
  /**
   * IPv4段的CIDR表示
   */
  CidrBlock: string;
  /**
   * 针对的端口范围
   */
  PortRange: string;
  /**
   * 规则的行为("Accept", "Reject")
   */
  EntryAction: string;
  /**
   * 描述。长度限制为不超过32字节。
   */
  Description?: string;
  /**
   * 应用目标类型。0代表“子网内全部资源”，1代表“子网内指定资源”，默认为0
   */
  TargetType?: number;
  /**
   * 应用目标资源列表。默认为全部资源生效。TargetType为0时不用填写该值。
   */
  TargetResourceIds?: string[];
}

/**
 * CreateNetworkAclEntry - 创建ACL的规则
 */
export interface CreateNetworkAclEntryResponse {
  /**
   * 创建的Entry的ID
   */
  EntryId: string;
}

/**
 * CreateRouteTable - 创建路由表
 */
export interface CreateRouteTableRequest {
  /**
   * 所属的VPC资源ID
   */
  VPCId: string;
  /**
   * 路由表名称。默认为RouteTable
   */
  Name?: string;
  /**
   * 路由表所属业务组
   */
  Tag?: string;
  /**
   * 备注
   */
  Remark?: string;
}

/**
 * CreateRouteTable - 创建路由表
 */
export interface CreateRouteTableResponse {
  /**
   * 路由表ID
   */
  RouteTableId?: string;
}

/**
 * CreateSnatDnatRule - 调用接口后会自动创建内外网IP之间的SNAT和DNAT规则，支持TCP、UDP协议全端口
 */
export interface CreateSnatDnatRuleRequest {
  /**
   * 内网P地址
   */
  PrivateIp: string[];
  /**
   * EIP的IP地址。按入参顺序，PrivateIp与EIP一一对应建立映射关系。
   */
  EIP: string[];
  /**
   * 映射所使用的NAT网关资源ID
   */
  NATGWId: string;
}

/**
 * CreateSnatDnatRule - 调用接口后会自动创建内外网IP之间的SNAT和DNAT规则，支持TCP、UDP协议全端口
 */
export interface CreateSnatDnatRuleResponse {}

/**
 * CreateSubnet - 创建子网
 */
export interface CreateSubnetRequest {
  /**
   * VPC资源ID
   */
  VPCId: string;
  /**
   * 子网网络地址，例如192.168.0.0
   */
  Subnet: string;
  /**
   * 子网网络号位数，默认为24
   */
  Netmask?: number;
  /**
   * 子网名称，默认为Subnet
   */
  SubnetName?: string;
  /**
   * 业务组名称，默认为Default
   */
  Tag?: string;
  /**
   * 备注
   */
  Remark?: string;
}

/**
 * CreateSubnet - 创建子网
 */
export interface CreateSubnetResponse {
  /**
   * 子网ID
   */
  SubnetId?: string;
}

/**
 * CreateVPC - 创建VPC
 */
export interface CreateVPCRequest {
  /**
   * VPC名称
   */
  Name: string;
  /**
   * VPC网段
   */
  Network: string[];
  /**
   * 业务组名称
   */
  Tag?: string;
  /**
   * 备注
   */
  Remark?: string;
}

/**
 * CreateVPC - 创建VPC
 */
export interface CreateVPCResponse {
  /**
   * VPC资源Id
   */
  VPCId?: string;
}

/**
 * CreateVPCIntercom - 新建VPC互通关系
 */
export interface CreateVPCIntercomRequest {
  /**
   * 源VPC短ID
   */
  VPCId: string;
  /**
   * 目的VPC短ID
   */
  DstVPCId: string;
  /**
   * 目的VPC所在地域，默认与源VPC同地域。
   */
  DstRegion?: string;
  /**
   * 目的VPC项目ID。默认与源VPC同项目。
   */
  DstProjectId?: string;
}

/**
 * CreateVPCIntercom - 新建VPC互通关系
 */
export interface CreateVPCIntercomResponse {}

/**
 * DeleteNATGW - 删除NAT网关
 */
export interface DeleteNATGWRequest {
  /**
   * NAT网关Id
   */
  NATGWId: string;
  /**
   * 是否释放绑定的EIP。true：解绑并释放；false：只解绑不释放。默认为false
   */
  ReleaseEip?: boolean;
}

/**
 * DeleteNATGW - 删除NAT网关
 */
export interface DeleteNATGWResponse {}

/**
 * DeleteNATGWPolicy - 删除NAT网关端口转发规则
 */
export interface DeleteNATGWPolicyRequest {
  /**
   * NAT网关Id
   */
  NATGWId: string;
  /**
   * 端口转发规则Id
   */
  PolicyId: string;
}

/**
 * DeleteNATGWPolicy - 删除NAT网关端口转发规则
 */
export interface DeleteNATGWPolicyResponse {}

/**
 * DeleteNetworkAcl - 删除网络ACL
 */
export interface DeleteNetworkAclRequest {
  /**
   * 需要删除的AclId
   */
  AclId: string;
}

/**
 * DeleteNetworkAcl - 删除网络ACL
 */
export interface DeleteNetworkAclResponse {}

/**
 * DeleteNetworkAclAssociation - 删除网络ACL绑定关系
 */
export interface DeleteNetworkAclAssociationRequest {
  /**
   * 需要删除的AclId
   */
  AclId: string;
  /**
   * 绑定的子网ID
   */
  SubnetworkId: string;
}

/**
 * DeleteNetworkAclAssociation - 删除网络ACL绑定关系
 */
export interface DeleteNetworkAclAssociationResponse {}

/**
 * DeleteNetworkAclEntry - 删除ACL的规则
 */
export interface DeleteNetworkAclEntryRequest {
  /**
   * Acl的ID
   */
  AclId: string;
  /**
   * 需要删除的EntryId
   */
  EntryId: string;
}

/**
 * DeleteNetworkAclEntry - 删除ACL的规则
 */
export interface DeleteNetworkAclEntryResponse {}

/**
 * DeleteRouteTable - 删除自定义路由表
 */
export interface DeleteRouteTableRequest {
  /**
   * 路由表资源ID
   */
  RouteTableId: string;
}

/**
 * DeleteRouteTable - 删除自定义路由表
 */
export interface DeleteRouteTableResponse {}

/**
 * DeleteSecondaryIp - 删除ip（用于uk8s使用）
 */
export interface DeleteSecondaryIpRequest {
  /**
   * 可用区。参见 [可用区列表](../summary/regionlist.html)
   */
  Zone: string;
  /**
   * ip
   */
  Ip: string;
  /**
   * mac
   */
  Mac: string;
  /**
   * 子网Id
   */
  SubnetId: string;
  /**
   * VPCId
   */
  VPCId?: string;
  /**
   * 资源Id
   */
  ObjectId?: string;
}

/**
 * DeleteSecondaryIp - 删除ip（用于uk8s使用）
 */
export interface DeleteSecondaryIpResponse {}

/**
 * DeleteSnatDnatRule - 删除NAT创建内外网IP映射规则
 */
export interface DeleteSnatDnatRuleRequest {
  /**
   * EIP的IP地址,PrivateIp与EIP需一一对应
   */
  EIP: string[];
  /**
   * 内网P地址
   */
  PrivateIp: string[];
  /**
   * 映射所使用的NAT网关资源ID
   */
  NATGWId: string;
}

/**
 * DeleteSnatDnatRule - 删除NAT创建内外网IP映射规则
 */
export interface DeleteSnatDnatRuleResponse {}

/**
 * DeleteSnatRule - 删除指定的出口规则（SNAT规则）
 */
export interface DeleteSnatRuleRequest {
  /**
   * NAT网关的ID
   */
  NATGWId: string;
  /**
   * 需要出外网的私网IP地址，例如10.9.7.xx
   */
  SourceIp: string;
}

/**
 * DeleteSnatRule - 删除指定的出口规则（SNAT规则）
 */
export interface DeleteSnatRuleResponse {}

/**
 * DeleteSubnet - 删除子网
 */
export interface DeleteSubnetRequest {
  /**
   * 子网ID
   */
  SubnetId: string;
}

/**
 * DeleteSubnet - 删除子网
 */
export interface DeleteSubnetResponse {}

/**
 * DeleteVPC - 删除VPC
 */
export interface DeleteVPCRequest {
  /**
   * VPC资源Id
   */
  VPCId: string;
}

/**
 * DeleteVPC - 删除VPC
 */
export interface DeleteVPCResponse {}

/**
 * DeleteVPCIntercom - 删除VPC互通关系
 */
export interface DeleteVPCIntercomRequest {
  /**
   * 源VPC短ID
   */
  VPCId: string;
  /**
   * 目的VPC短ID
   */
  DstVPCId: string;
  /**
   * 目的VPC所在地域，默认为源VPC所在地域
   */
  DstRegion?: string;
  /**
   * 目的VPC所在项目ID，默认为源VPC所在项目ID
   */
  DstProjectId?: string;
}

/**
 * DeleteVPCIntercom - 删除VPC互通关系
 */
export interface DeleteVPCIntercomResponse {}

/**
 * DeleteWhiteListResource - 删除NAT网关白名单列表
 */
export interface DeleteWhiteListResourceRequest {
  /**
   * NAT网关Id
   */
  NATGWId: string;
  /**
   * 删除白名单的资源Id
   */
  ResourceIds: string[];
}

/**
 * DeleteWhiteListResource - 删除NAT网关白名单列表
 */
export interface DeleteWhiteListResourceResponse {}

/**
 * DescribeInstanceNetworkInterface - 展示云主机绑定的网卡信息
 */
export interface DescribeInstanceNetworkInterfaceRequest {
  /**
   * 云主机ID
   */
  InstanceId: string;
  /**
   * 默认为0
   */
  Offset?: number;
  /**
   * 默认为20
   */
  Limit?: number;
}

/**
 * DescribeInstanceNetworkInterface - 展示云主机绑定的网卡信息
 */
export interface DescribeInstanceNetworkInterfaceResponse {
  /**
   * 虚拟网卡信息
   */
  NetworkInterfaceSet: {
    /**
     * 虚拟网卡资源ID
     */
    InterfaceId: string;
    /**
     * 所属VPC
     */
    VPCId: string;
    /**
     * 所属子网
     */
    SubnetId: string;
    /**
     * 关联内网IP。当前一个网卡仅支持绑定一个内网IP
     */
    PrivateIpSet: string[];
    /**
     * 关联Mac
     */
    MacAddress: string;
    /**
     * 绑定状态
     */
    Status: number;
    /**
     * 网卡的内网IP信息
     */
    PrivateIp: string[];
    /**
     * 虚拟网卡名称
     */
    Name?: string;
    /**
     * 内网IP掩码
     */
    Netmask?: string;
    /**
     * 默认网关
     */
    Gateway?: string;
    /**
     * 绑定实例资源ID
     */
    AttachInstanceId?: string;
    /**
     * 是否是绑定实例的默认网卡 false:不是 true:是
     */
    Default?: boolean;
    /**
     * 创建时间
     */
    CreateTime?: number;
    /**
     * 备注
     */
    Remark?: string;
    /**
     * 业务组
     */
    Tag?: string;
    /**
     * 虚拟网卡绑定的EIP ID信息
     */
    EIPIdSet?: string[];
    /**
     * 虚拟网卡绑定的防火墙ID信息
     */
    FirewallIdSet?: string[];
    /**
     * 网卡的内网IP配额信息
     */
    PrivateIplimit?: string[];
  }[];
}

/**
 * DescribeNATGW - 获取NAT网关信息
 */
export interface DescribeNATGWRequest {
  /**
   * NAT网关Id。默认为该项目下所有NAT网关
   */
  NATGWIds?: string[];
  /**
   * 数据偏移量。默认为0
   */
  Offset?: number;
  /**
   * 数据分页值。默认为20
   */
  Limit?: number;
}

/**
 * DescribeNATGW - 获取NAT网关信息
 */
export interface DescribeNATGWResponse {
  /**
   * 满足条件的实例的总数
   */
  TotalCount: number;
  /**
   * 查到的NATGW信息列表
   */
  DataSet?: {
    /**
     * natgw id
     */
    NATGWId?: string;
    /**
     * natgw名称
     */
    NATGWName?: string;
    /**
     * 业务组
     */
    Tag?: string;
    /**
     * 备注
     */
    Remark?: string;
    /**
     * natgw创建时间
     */
    CreateTime?: number;
    /**
     * 绑定的防火墙Id
     */
    FirewallId?: string;
    /**
     * 所属VPC Id
     */
    VPCId?: string;
    /**
     * 子网 Id
     */
    SubnetSet?: {
      /**
       * 子网id
       */
      SubnetworkId: string;
      /**
       * 子网网段
       */
      Subnet: string;
      /**
       * 子网名字
       */
      SubnetName: string;
    }[];
    /**
     * 绑定的EIP 信息
     */
    IPSet?: {
      /**
       * 外网IP的 EIPId
       */
      EIPId: string;
      /**
       * 权重为100的为出口
       */
      Weight: number;
      /**
       * EIP带宽类型
       */
      BandwidthType: string;
      /**
       * 带宽
       */
      Bandwidth: number;
      /**
       * 外网IP信息
       */
      IPResInfo: {
        /**
         * IP的运营商信息
         */
        OperatorName: string;
        /**
         * 外网IP
         */
        EIP: string;
      }[];
    }[];
    /**
     * VPC名称
     */
    VPCName?: string;
    /**
     * 枚举值，“enable”，默认出口规则使用了负载均衡；“disable”，默认出口规则未使用负载均衡。
     */
    IsSnatpoolEnabled?: string;
    /**
     * 转发策略Id
     */
    PolicyId?: string[];
  }[];
}

/**
 * DescribeNATGWPolicy - 展示NAT网关端口转发规则
 */
export interface DescribeNATGWPolicyRequest {
  /**
   * NAT网关Id
   */
  NATGWId: string;
  /**
   * 返回数据长度，默认为10000
   */
  Limit?: number;
  /**
   * 列表起始位置偏移量，默认为0
   */
  Offset?: number;
}

/**
 * DescribeNATGWPolicy - 展示NAT网关端口转发规则
 */
export interface DescribeNATGWPolicyResponse {
  /**
   * 满足条件的转发策略总数
   */
  TotalCount: number;
  /**
   * 查到的NATGW 转发策略的详细信息
   */
  DataSet?: {
    /**
     * NAT网关Id
     */
    NATGWId: string;
    /**
     * 转发策略Id
     */
    PolicyId: string;
    /**
     * 协议类型
     */
    Protocol: string;
    /**
     * 端口转发前端EIP
     */
    SrcEIP: string;
    /**
     * 端口转发前端EIP Id
     */
    SrcEIPId: string;
    /**
     * 源端口
     */
    SrcPort: string;
    /**
     * 目的地址
     */
    DstIP: string;
    /**
     * 目的端口
     */
    DstPort: string;
    /**
     * 转发策略名称
     */
    PolicyName?: string;
  }[];
}

/**
 * DescribeNetworkAcl - 获取网络ACL
 */
export interface DescribeNetworkAclRequest {
  /**
   * 列表偏移量
   */
  Offset?: number;
  /**
   * 列表获取的个数限制
   */
  Limit?: string;
  /**
   * 需要获取的ACL所属的VPC的ID
   */
  VpcId?: string;
}

/**
 * DescribeNetworkAcl - 获取网络ACL
 */
export interface DescribeNetworkAclResponse {
  /**
   * ACL的信息，具体结构见下方AclInfo
   */
  AclList: {
    /**
     * ACL所属的VPC ID
     */
    VpcId: string;
    /**
     * ACL的ID
     */
    AclId: string;
    /**
     * 名称
     */
    AclName: string;
    /**
     * 描述
     */
    Description: string;
    /**
     * 所有的规则
     */
    Entries: {
      /**
       * Entry的ID
       */
      EntryId: string;
      /**
       * 优先级
       */
      Priority: string;
      /**
       * 出向或者入向
       */
      Direction: string;
      /**
       * 针对的IP协议
       */
      IpProtocol: string;
      /**
       * IP段的CIDR信息
       */
      CidrBlock: string;
      /**
       * Port的段信息
       */
      PortRange: string;
      /**
       * 匹配规则的动作
       */
      EntryAction: string;
      /**
       * 应用目标类型。 0代表“子网内全部资源” ，1代表“子网内指定资源” 。
       */
      TargetType: number;
      /**
       * 创建的Unix时间戳
       */
      CreateTime: number;
      /**
       * 更改的Unix时间戳
       */
      UpdateTime: number;
      /**
       * 应用目标资源信息。TargetType为0时不返回该值。具体结构见下方TargetResourceInfo
       */
      TargetResourceList?: {
        /**
         * 子网ID
         */
        SubnetworkId: string;
        /**
         * 资源名称
         */
        ResourceName: string;
        /**
         * 资源ID
         */
        ResourceId: string;
        /**
         * 资源类型
         */
        ResourceType: number;
        /**
         * 资源绑定的虚拟网卡的名称
         */
        SubResourceName: string;
        /**
         * 资源绑定的虚拟网卡的ID
         */
        SubResourceId: string;
        /**
         * 资源绑定虚拟网卡的类型
         */
        SubResourceType: number;
        /**
         * 资源内网IP
         */
        PrivateIp: string;
      }[];
      /**
       * 应用目标资源数量。TargetType为0时不返回该值。
       */
      TargetResourceCount?: number;
    }[];
    /**
     * 所有的绑定关系，具体结构见下方AssociationInfo
     */
    Associations: {
      /**
       * 绑定ID
       */
      AssociationId: string;
      /**
       * ACL的ID
       */
      AclId: string;
      /**
       * 绑定的子网ID
       */
      SubnetworkId: string;
      /**
       * 创建的Unix时间戳
       */
      CreateTime: number;
    }[];
    /**
     * 创建的Unix时间戳
     */
    CreateTime: number;
    /**
     * 更改的Unix时间戳
     */
    UpdateTime: number;
  }[];
}

/**
 * DescribeNetworkAclAssociation - 获取网络ACL的绑定关系列表
 */
export interface DescribeNetworkAclAssociationRequest {
  /**
   * Acl的ID
   */
  AclId: string;
  /**
   * 列表偏移量
   */
  Offset?: number;
  /**
   * 列表获取的个数限制
   */
  Limit?: string;
}

/**
 * DescribeNetworkAclAssociation - 获取网络ACL的绑定关系列表
 */
export interface DescribeNetworkAclAssociationResponse {
  /**
   * 绑定信息列表
   */
  AssociationList: {
    /**
     * 绑定ID
     */
    AssociationId: string;
    /**
     * ACL的ID
     */
    AclId: string;
    /**
     * 绑定的子网ID
     */
    SubnetworkId: string;
    /**
     * 创建的Unix时间戳
     */
    CreateTime: number;
  }[];
}

/**
 * DescribeNetworkAclAssociationBySubnet - 获取子网的ACL绑定信息
 */
export interface DescribeNetworkAclAssociationBySubnetRequest {
  /**
   * 子网的ID
   */
  SubnetworkId: string;
}

/**
 * DescribeNetworkAclAssociationBySubnet - 获取子网的ACL绑定信息
 */
export interface DescribeNetworkAclAssociationBySubnetResponse {
  /**
   * 绑定信息
   */
  Association: {
    /**
     * 绑定ID
     */
    AssociationId: string;
    /**
     * ACL的ID
     */
    AclId: string;
    /**
     * 绑定的子网ID
     */
    SubnetworkId: string;
    /**
     * 创建的Unix时间戳
     */
    CreateTime: number;
  };
}

/**
 * DescribeNetworkAclEntry - 获取ACL的规则信息
 */
export interface DescribeNetworkAclEntryRequest {
  /**
   * ACL的ID
   */
  AclId: string;
}

/**
 * DescribeNetworkAclEntry - 获取ACL的规则信息
 */
export interface DescribeNetworkAclEntryResponse {
  /**
   * 所有的规则信息
   */
  EntryList: {
    /**
     * Entry的ID
     */
    EntryId: string;
    /**
     * 优先级
     */
    Priority: string;
    /**
     * 出向或者入向
     */
    Direction: string;
    /**
     * 针对的IP协议
     */
    IpProtocol: string;
    /**
     * IP段的CIDR信息
     */
    CidrBlock: string;
    /**
     * Port的段信息
     */
    PortRange: string;
    /**
     * 匹配规则的动作
     */
    EntryAction: string;
    /**
     * 应用目标类型。 0代表“子网内全部资源” ，1代表“子网内指定资源” 。
     */
    TargetType: number;
    /**
     * 创建的Unix时间戳
     */
    CreateTime: number;
    /**
     * 更改的Unix时间戳
     */
    UpdateTime: number;
    /**
     * 应用目标资源信息。TargetType为0时不返回该值。具体结构见下方TargetResourceInfo
     */
    TargetResourceList?: {
      /**
       * 子网ID
       */
      SubnetworkId: string;
      /**
       * 资源名称
       */
      ResourceName: string;
      /**
       * 资源ID
       */
      ResourceId: string;
      /**
       * 资源类型
       */
      ResourceType: number;
      /**
       * 资源绑定的虚拟网卡的名称
       */
      SubResourceName: string;
      /**
       * 资源绑定的虚拟网卡的ID
       */
      SubResourceId: string;
      /**
       * 资源绑定虚拟网卡的类型
       */
      SubResourceType: number;
      /**
       * 资源内网IP
       */
      PrivateIp: string;
    }[];
    /**
     * 应用目标资源数量。TargetType为0时不返回该值。
     */
    TargetResourceCount?: number;
  }[];
}

/**
 * DescribeNetworkInterface - 展示虚拟网卡信息
 */
export interface DescribeNetworkInterfaceRequest {
  /**
   * 所属VPC
   */
  VPCId?: string;
  /**
   * 所属子网
   */
  SubnetId?: string;
  /**
   * 虚拟网卡ID,可指定 0~n
   */
  InterfaceId?: string[];
  /**
   * 若为true 只返回默认网卡默认为false
   */
  OnlyDefault?: boolean;
  /**
   * 若为true 过滤绑定在回收站主机中的网卡。默认为false。
   */
  NoRecycled?: boolean;
  /**
   * 业务组
   */
  Tag?: string;
  /**
   * 默认为20
   */
  Limit?: number;
  /**
   * 默认为0
   */
  Offset?: number;
}

/**
 * DescribeNetworkInterface - 展示虚拟网卡信息
 */
export interface DescribeNetworkInterfaceResponse {
  /**
   * 虚拟网卡信息
   */
  NetworkInterfaceSet: {
    /**
     * 虚拟网卡资源ID
     */
    InterfaceId: string;
    /**
     * 所属VPC
     */
    VPCId: string;
    /**
     * 所属子网
     */
    SubnetId: string;
    /**
     * 关联内网IP。当前一个网卡仅支持绑定一个内网IP
     */
    PrivateIpSet: string[];
    /**
     * 关联Mac
     */
    MacAddress: string;
    /**
     * 绑定状态
     */
    Status: number;
    /**
     * 网卡的内网IP信息
     */
    PrivateIp: string[];
    /**
     * 虚拟网卡名称
     */
    Name?: string;
    /**
     * 内网IP掩码
     */
    Netmask?: string;
    /**
     * 默认网关
     */
    Gateway?: string;
    /**
     * 绑定实例资源ID
     */
    AttachInstanceId?: string;
    /**
     * 是否是绑定实例的默认网卡 false:不是 true:是
     */
    Default?: boolean;
    /**
     * 创建时间
     */
    CreateTime?: number;
    /**
     * 备注
     */
    Remark?: string;
    /**
     * 业务组
     */
    Tag?: string;
    /**
     * 虚拟网卡绑定的EIP ID信息
     */
    EIPIdSet?: string[];
    /**
     * 虚拟网卡绑定的防火墙ID信息
     */
    FirewallIdSet?: string[];
    /**
     * 网卡的内网IP配额信息
     */
    PrivateIplimit?: string[];
  }[];
  /**
   * 虚拟网卡总数
   */
  TotalCount?: number;
}

/**
 * DescribeRouteTable - 获取路由表详细信息(包括路由策略)
 */
export interface DescribeRouteTableRequest {
  /**
   * 所属VPC的资源ID
   */
  VPCId?: string;
  /**
   * 路由表资源ID
   */
  RouteTableId?: string;
  /**
   * 数据偏移量。默认为0
   */
  OffSet?: number;
  /**
   * 数据分页值。默认为20
   */
  Limit?: number;
  /**
   * 业务组ID
   */
  BusinessId?: string;
}

/**
 * DescribeRouteTable - 获取路由表详细信息(包括路由策略)
 */
export interface DescribeRouteTableResponse {
  /**
   * 路由表信息
   */
  RouteTables?: {
    /**
     * 路由表资源ID
     */
    RouteTableId?: string;
    /**
     * 路由表类型。1为默认路由表，0为自定义路由表
     */
    RouteTableType?: number;
    /**
     * 绑定该路由表的子网数量
     */
    SubnetCount?: number;
    /**
     * 路由表所属的VPC资源ID
     */
    VPCId?: string;
    /**
     * 路由表所属的VPC资源名称
     */
    VPCName?: string;
    /**
     * 路由表所属业务组
     */
    Tag?: string;
    /**
     * 路由表备注
     */
    Remark?: string;
    /**
     * 创建时间戳
     */
    CreateTime?: number;
    /**
     * 路由规则
     */
    RouteRules?: {
      /**
       * 项目ID信息
       */
      AccountId?: number;
      /**
       * 目的地址
       */
      DstAddr?: string;
      /**
       * 保留字段，暂未使用
       */
      DstPort?: number;
      /**
       * 路由下一跳资源ID
       */
      NexthopId?: string;
      /**
       * 路由表下一跳类型。LOCAL，本VPC内部通信路由；PUBLIC，公共服务路由；CNAT，外网路由；UDPN，跨域高速通道路由；HYBRIDGW，混合云路由；INSTANCE，实例路由；VNET，VPC联通路由；IPSEC VPN，指向VPN网关的路由。
       */
      NexthopType?: string;
      /**
       * 保留字段，暂未使用
       */
      OriginAddr?: string;
      /**
       * 保留字段，暂未使用
       */
      Priority?: number;
      /**
       * 路由规则备注
       */
      Remark?: string;
      /**
       * 规则ID
       */
      RouteRuleId?: string;
      /**
       * 路由表资源ID
       */
      RouteTableId?: string;
      /**
       * 路由规则类型。0，系统路由规则；1，自定义路由规则
       */
      RuleType?: number;
      /**
       * 保留字段，暂未使用
       */
      SrcAddr?: string;
      /**
       * 保留字段，暂未使用
       */
      SrcPort?: number;
      /**
       * 所属的VPC
       */
      VNetId?: string;
    }[];
  }[];
  /**
   * RouteTables字段的数量
   */
  TotalCount?: number;
}

/**
 * DescribeSecondaryIp - 查询SecondaryIp（uk8s使用）
 */
export interface DescribeSecondaryIpRequest {
  /**
   * 子网Id
   */
  SubnetId: string;
  /**
   * VPCId
   */
  VPCId: string;
  /**
   * Ip
   */
  Ip?: string;
  /**
   * Mac
   */
  Mac?: string;
}

/**
 * DescribeSecondaryIp - 查询SecondaryIp（uk8s使用）
 */
export interface DescribeSecondaryIpResponse {
  /**
   *
   */
  DataSet?: {
    /**
     *
     */
    Ip?: string;
    /**
     *
     */
    Mask?: string;
    /**
     *
     */
    Gateway?: string;
    /**
     *
     */
    Mac?: string;
    /**
     *
     */
    SubnetId?: string;
    /**
     *
     */
    VPCId?: string;
  }[];
}

/**
 * DescribeSnatDnatRule - 获取基于NAT创建的内外网IP映射规则信息
 */
export interface DescribeSnatDnatRuleRequest {
  /**
   * 获取NAT上添加的所有SnatDnatRule信息
   */
  NATGWId?: string[];
  /**
   * 获取EIP对应的SnatDnatRule信息
   */
  EIP?: string[];
}

/**
 * DescribeSnatDnatRule - 获取基于NAT创建的内外网IP映射规则信息
 */
export interface DescribeSnatDnatRuleResponse {
  /**
   * 规则信息
   */
  DataSet?: {
    /**
     * 内网IP地址
     */
    PrivateIp?: string;
    /**
     * 映射所使用的NAT网关资源ID
     */
    NATGWId?: string;
    /**
     * EIP的IP地址
     */
    EIP?: string;
  }[];
}

/**
 * DescribeSnatRule - 获取Nat网关的出口规则（SNAT规则）
 */
export interface DescribeSnatRuleRequest {
  /**
   * NAT网关的ID
   */
  NATGWId: string;
  /**
   * 需要出外网的私网IP地址，例如10.9.7.xx
   */
  SourceIp?: string;
  /**
   * EIP的ip地址,例如106.75.xx.xx
   */
  SnatIp?: string;
  /**
   * 偏移，默认为0
   */
  Offset?: string;
  /**
   * 分页，默认为20
   */
  Limit?: string;
}

/**
 * DescribeSnatRule - 获取Nat网关的出口规则（SNAT规则）
 */
export interface DescribeSnatRuleResponse {
  /**
   * 某个NAT网关的所有Snat规则
   */
  DataSet: {
    /**
     * EIP地址，如106.76.xx.xx
     */
    SnatIp: string;
    /**
     * 资源的内网IP地址
     */
    SourceIp: string;
    /**
     * SourceIp所属的子网id
     */
    SubnetworkId: string;
    /**
     * snat规则名称
     */
    Name: string;
  }[];
  /**
   * 规则数量
   */
  TotalCount: number;
}

/**
 * DescribeSubnet - 获取子网信息
 */
export interface DescribeSubnetRequest {
  /**
   * 子网id数组，适用于一次查询多个子网信息
   */
  SubnetIds?: string[];
  /**
   * 子网id，适用于一次查询一个子网信息
   */
  SubnetId?: string;
  /**
   * 路由表Id
   */
  RouteTableId?: string;
  /**
   * VPC资源id
   */
  VPCId?: string;
  /**
   * 业务组名称，默认为Default
   */
  Tag?: string;
  /**
   * 偏移量，默认为0
   */
  Offset?: number;
  /**
   * 列表长度，默认为20
   */
  Limit?: number;
  /**
   * 是否返回子网的可用IP数，true为是，false为否，默认不返回
   */
  ShowAvailableIPs?: boolean;
}

/**
 * DescribeSubnet - 获取子网信息
 */
export interface DescribeSubnetResponse {
  /**
   * 子网总数量
   */
  TotalCount: number;
  /**
   * 子网信息数组，具体资源见下方SubnetInfo
   */
  DataSet: {
    /**
     * 可用区名称
     */
    Zone?: string;
    /**
     * 子网关联的IPv6网段
     */
    IPv6Network?: string;
    /**
     * VPCId
     */
    VPCId?: string;
    /**
     * VPC名称
     */
    VPCName?: string;
    /**
     * 子网Id
     */
    SubnetId?: string;
    /**
     * 子网名称
     */
    SubnetName?: string;
    /**
     * 备注
     */
    Remark?: string;
    /**
     * 业务组
     */
    Tag?: string;
    /**
     * 子网类型
     */
    SubnetType?: number;
    /**
     * 子网网段
     */
    Subnet?: string;
    /**
     * 子网掩码
     */
    Netmask?: string;
    /**
     * 子网网关
     */
    Gateway?: string;
    /**
     * 创建时间
     */
    CreateTime?: number;
    /**
     * 是否有natgw
     */
    HasNATGW?: boolean;
    /**
     * 路由表Id
     */
    RouteTableId?: string;
    /**
     * 可用IP数量
     */
    AvailableIPs?: number;
  }[];
}

/**
 * DescribeSubnetResource - 展示子网资源
 */
export interface DescribeSubnetResourceRequest {
  /**
   * 子网id
   */
  SubnetId: string;
  /**
   * 资源类型，默认为全部资源类型。枚举值为：UHOST，云主机；PHOST，物理云主机；ULB，负载均衡；UHADOOP_HOST，hadoop节点；UFORTRESS_HOST，堡垒机；UNATGW，NAT网关；UKAFKA，Kafka消息队列；UMEM，内存存储；DOCKER，容器集群；UDB，数据库；UDW，数据仓库；VIP，内网VIP.
   */
  ResourceType?: string;
  /**
   * 列表起始位置偏移量，默认为0
   */
  Offset?: number;
  /**
   * 单页返回数据长度，默认为20
   */
  Limit?: number;
}

/**
 * DescribeSubnetResource - 展示子网资源
 */
export interface DescribeSubnetResourceResponse {
  /**
   * 总数
   */
  TotalCount?: number;
  /**
   * 返回数据集，请见SubnetResource
   */
  DataSet?: {
    /**
     * 名称
     */
    Name?: string;
    /**
     * 资源Id
     */
    ResourceId?: string;
    /**
     * 资源类型。对应的资源类型：UHOST，云主机；PHOST，物理云主机；ULB，负载均衡；UHADOOP_HOST，hadoop节点；UFORTRESS_HOST，堡垒机；UNATGW，NAT网关；UKAFKA，分布式消息系统；UMEM，内存存储；DOCKER，容器集群；UDB，数据库；UDW，数据仓库；VIP，内网VIP.
     */
    ResourceType?: string;
    /**
     * 资源ip
     */
    IP?: string;
  }[];
}

/**
 * DescribeVIP - 获取内网VIP详细信息
 */
export interface DescribeVIPRequest {
  /**
   * 可用区。参见 [可用区列表](../summary/regionlist.html)
   */
  Zone?: string;
  /**
   * vpc的id,指定SubnetId时必填
   */
  VPCId?: string;
  /**
   * 子网id，不指定则获取VPCId下的所有vip
   */
  SubnetId?: string;
  /**
   * VIP ID
   */
  VIPId?: string;
  /**
   * 业务组名称, 默认为 Default
   */
  Tag?: string;
  /**
   * 业务组
   */
  BusinessId?: string;
}

/**
 * DescribeVIP - 获取内网VIP详细信息
 */
export interface DescribeVIPResponse {
  /**
   * 内网VIP详情，请见VIPDetailSet
   */
  VIPSet?: {
    /**
     * 地域
     */
    Zone?: string;
    /**
     * 虚拟ip id
     */
    VIPId?: string;
    /**
     * 创建时间
     */
    CreateTime?: number;
    /**
     * 真实主机ip
     */
    RealIp?: string;
    /**
     * 虚拟ip
     */
    VIP?: string;
    /**
     * 子网id
     */
    SubnetId?: string;
    /**
     * VPC id
     */
    VPCId?: string;
    /**
     * VIP名称
     */
    Name?: string;
    /**
     * VIP备注
     */
    Remark?: string;
    /**
     * VIP所属业务组
     */
    Tag?: string;
  }[];
  /**
   * 内网VIP地址列表
   */
  DataSet?: string[];
  /**
   * vip数量
   */
  TotalCount?: number;
}

/**
 * DescribeVPC - 获取VPC信息
 */
export interface DescribeVPCRequest {
  /**
   * VPCId
   */
  VPCIds?: string[];
  /**
   * 业务组名称
   */
  Tag?: string;
  /**
   *
   */
  Offset?: number;
  /**
   *
   */
  Limit?: number;
}

/**
 * DescribeVPC - 获取VPC信息
 */
export interface DescribeVPCResponse {
  /**
   * vpc信息，具体结构见下方VPCInfo
   */
  DataSet?: {
    /**
     *
     */
    NetworkInfo: {
      /**
       * vpc地址空间
       */
      Network?: string;
      /**
       * 地址空间中子网数量
       */
      SubnetCount?: number;
    }[];
    /**
     *
     */
    SubnetCount: number;
    /**
     *
     */
    CreateTime: number;
    /**
     *
     */
    UpdateTime: number;
    /**
     *
     */
    Tag: string;
    /**
     *
     */
    Name: string;
    /**
     * VPCId
     */
    VPCId?: string;
    /**
     *
     */
    Network?: string[];
    /**
     * VPC关联的IPv6网段
     */
    IPv6Network?: string;
    /**
     * VPC关联的IPv6网段所属运营商
     */
    OperatorName?: string;
  }[];
}

/**
 * DescribeVPCIntercom - 获取VPC互通信息
 */
export interface DescribeVPCIntercomRequest {
  /**
   * VPC短ID
   */
  VPCId: string;
  /**
   * 目的VPC所在地域，默认为全部地域
   */
  DstRegion?: string;
  /**
   * 目的项目ID，默认为全部项目
   */
  DstProjectId?: string;
}

/**
 * DescribeVPCIntercom - 获取VPC互通信息
 */
export interface DescribeVPCIntercomResponse {
  /**
   * 联通VPC信息数组
   */
  DataSet?: {
    /**
     * 项目Id
     */
    ProjectId?: string;
    /**
     * vpc类型（1表示托管VPC，0表示公有云VPC）
     */
    VPCType: number;
    /**
     * 项目Id（数字）
     */
    AccountId: number;
    /**
     * VPC的地址空间
     */
    Network?: string[];
    /**
     * 所属地域
     */
    DstRegion?: string;
    /**
     * VPC名字
     */
    Name?: string;
    /**
     * VPCId
     */
    VPCId?: string;
    /**
     * 业务组（未分组显示为 Default）
     */
    Tag?: string;
  }[];
}

/**
 * DescribeWhiteListResource - 展示NAT网关白名单资源列表
 */
export interface DescribeWhiteListResourceRequest {
  /**
   * NAT网关的Id
   */
  NATGWIds: string[];
  /**
   * 数据偏移量, 默认为0
   */
  Offset?: number;
  /**
   * 数据分页值, 默认为20
   */
  Limit?: number;
}

/**
 * DescribeWhiteListResource - 展示NAT网关白名单资源列表
 */
export interface DescribeWhiteListResourceResponse {
  /**
   * 白名单资源的详细信息，详见DescribeResourceWhiteListDataSet
   */
  DataSet: {
    /**
     * NATGateWay Id
     */
    NATGWId: string;
    /**
     * 白名单开关标记
     */
    IfOpen: number;
    /**
     * 白名单详情
     */
    ObjectIPInfo: {
      /**
       * natgw字符串
       */
      GwType: string;
      /**
       * 白名单资源的内网IP
       */
      PrivateIP: string;
      /**
       * 白名单资源Id信息
       */
      ResourceId: string;
      /**
       * 白名单资源名称
       */
      ResourceName: string;
      /**
       * 白名单资源类型
       */
      ResourceType: string;
      /**
       * 资源绑定的虚拟网卡的实例ID
       */
      SubResourceId: string;
      /**
       * 资源绑定的虚拟网卡的实例名称
       */
      SubResourceName: string;
      /**
       * 资源绑定的虚拟网卡的类型
       */
      SubResourceType: string;
      /**
       * 白名单资源所属VPCId
       */
      VPCId?: string;
    }[];
  }[];
  /**
   * 上述DataSet总数量
   */
  TotalCount: number;
}

/**
 * EnableWhiteList - 修改NAT网关白名单开关
 */
export interface EnableWhiteListRequest {
  /**
   * NAT网关Id
   */
  NATGWId: string;
  /**
   * 白名单开关标记。0：关闭；1：开启。默认为0
   */
  IfOpen: number;
}

/**
 * EnableWhiteList - 修改NAT网关白名单开关
 */
export interface EnableWhiteListResponse {}

/**
 * GetAvailableResourceForPolicy - 获取NAT网关可配置端口转发规则的资源信息
 */
export interface GetAvailableResourceForPolicyRequest {
  /**
   * NAT网关Id
   */
  NATGWId: string;
  /**
   * 返回数据长度，默认为20
   */
  Limit?: number;
  /**
   * 列表起始位置偏移量，默认为0
   */
  Offset?: number;
}

/**
 * GetAvailableResourceForPolicy - 获取NAT网关可配置端口转发规则的资源信息
 */
export interface GetAvailableResourceForPolicyResponse {
  /**
   * 支持资源类型的信息
   */
  DataSet: {
    /**
     * 资源的Id
     */
    ResourceId: string;
    /**
     * 资源对应的内网Ip
     */
    PrivateIP: string;
    /**
     * 资源类型。"uhost"：云主机； "upm"，物理云主机； "hadoophost"：hadoop节点； "fortresshost"：堡垒机： "udockhost"，容器
     */
    ResourceType: string;
  }[];
}

/**
 * GetAvailableResourceForSnatRule - 获取可用于添加snat规则（出口规则）的资源列表
 */
export interface GetAvailableResourceForSnatRuleRequest {
  /**
   * NAT网关Id
   */
  NATGWId: string;
  /**
   * 数据偏移量, 默认为0
   */
  Offset?: number;
  /**
   * 数据分页值, 默认为20
   */
  Limit?: number;
}

/**
 * GetAvailableResourceForSnatRule - 获取可用于添加snat规则（出口规则）的资源列表
 */
export interface GetAvailableResourceForSnatRuleResponse {
  /**
   * 返回的资源详细信息
   */
  DataSet: {
    /**
     * 资源ID
     */
    ResourceId?: string;
    /**
     * 资源名称
     */
    ResourceName?: string;
    /**
     * 资源内网IP
     */
    PrivateIP?: string;
    /**
     * 资源类型
     */
    ResourceType?: string;
    /**
     * 资源所属VPC的ID
     */
    SubnetworkId?: string;
    /**
     * 资源所属子网的ID
     */
    VPCId?: string;
  }[];
  /**
   * 总数
   */
  TotalCount: number;
}

/**
 * GetAvailableResourceForWhiteList - 获取NAT网关可添加白名单的资源
 */
export interface GetAvailableResourceForWhiteListRequest {
  /**
   * NAT网关Id
   */
  NATGWId: string;
  /**
   * 数据偏移量, 默认为0
   */
  Offset?: number;
  /**
   * 数据分页值, 默认为20
   */
  Limit?: number;
}

/**
 * GetAvailableResourceForWhiteList - 获取NAT网关可添加白名单的资源
 */
export interface GetAvailableResourceForWhiteListResponse {
  /**
   * 返回白名单列表的详细信息
   */
  DataSet: {
    /**
     * 资源类型Id
     */
    ResourceId: string;
    /**
     * 资源名称
     */
    ResourceName: string;
    /**
     * 资源的内网Ip
     */
    PrivateIP: string;
    /**
     * 资源类型。"uhost"：云主机； "upm"，物理云主机； "hadoophost"：hadoop节点； "fortresshost"：堡垒机： "udockhost"，容器
     */
    ResourceType: string;
    /**
     * 资源绑定的虚拟网卡的实例名称
     */
    SubResourceName: string;
    /**
     * 资源所属VPCId
     */
    VPCId: string;
    /**
     * 资源所属子网Id
     */
    SubnetworkId: string;
    /**
     * 资源绑定的虚拟网卡的实例ID
     */
    SubResourceId?: string;
    /**
     * 资源绑定的虚拟网卡的实例类型
     */
    SubResourceType?: string;
  }[];
  /**
   * 白名单资源列表的总的个数
   */
  TotalCount: number;
}

/**
 * GetNetworkAclTargetResource - 获取ACL规则应用目标列表
 */
export interface GetNetworkAclTargetResourceRequest {
  /**
   * 子网ID。
   */
  SubnetworkId: string[];
}

/**
 * GetNetworkAclTargetResource - 获取ACL规则应用目标列表
 */
export interface GetNetworkAclTargetResourceResponse {
  /**
   * ACL规则应用目标资源列表，具体结构见下方TargetResourceInfo
   */
  TargetResourceList: {
    /**
     * 子网ID
     */
    SubnetworkId: string;
    /**
     * 资源名称
     */
    ResourceName: string;
    /**
     * 资源ID
     */
    ResourceId: string;
    /**
     * 资源类型
     */
    ResourceType: number;
    /**
     * 资源绑定的虚拟网卡的名称
     */
    SubResourceName: string;
    /**
     * 资源绑定的虚拟网卡的ID
     */
    SubResourceId: string;
    /**
     * 资源绑定虚拟网卡的类型
     */
    SubResourceType: number;
    /**
     * 资源内网IP
     */
    PrivateIp: string;
  }[];
  /**
   * ACL规则应用目标资源总数
   */
  TotalCount: number;
}

/**
 * ListSubnetForNATGW - 展示NAT网关可绑定的子网列表
 */
export interface ListSubnetForNATGWRequest {
  /**
   * NAT网关所属VPC Id。默认值为Default VPC Id
   */
  VPCId?: string;
}

/**
 * ListSubnetForNATGW - 展示NAT网关可绑定的子网列表
 */
export interface ListSubnetForNATGWResponse {
  /**
   * 具体参数请见NatgwSubnetDataSet
   */
  DataSet?: {
    /**
     * 子网id
     */
    SubnetId: string;
    /**
     * 子网网段
     */
    Subnet: string;
    /**
     * 掩码
     */
    Netmask: string;
    /**
     * 子网名字
     */
    SubnetName: string;
    /**
     * 是否绑定NATGW
     */
    HasNATGW: boolean;
  }[];
}

/**
 * ModifyRouteRule - 路由策略增、删、改
 */
export interface ModifyRouteRuleRequest {
  /**
   * 通过DescribeRouteTable拿到
   */
  RouteTableId: string;
  /**
   * 格式: RouteRuleId | 目的网段 | 下一跳类型（支持INSTANCE、VIP） | 下一跳 |优先级（保留字段，填写0即可）| 备注 | 增、删、改标志（add/delete/update） 。"添加"示例: test_id | 10.8.0.0/16 | instance | uhost-xd8ja | 0 | Default Route Rule| add (添加的RouteRuleId填任意非空字符串) 。"删除"示例: routerule-xk3jxa | 10.8.0.0/16 | instance | uhost-xd8ja | 0 | Default Route Rule| delete (RouteRuleId来自DescribeRouteTable中)     。“修改”示例: routerule-xk3jxa | 10.8.0.0/16 | instance | uhost-cjksa2 | 0 | Default Route Rule| update (RouteRuleId来自DescribeRouteTable中)
   */
  RouteRule: string[];
}

/**
 * ModifyRouteRule - 路由策略增、删、改
 */
export interface ModifyRouteRuleResponse {}

/**
 * MoveSecondaryIPMac - 把 Secondary IP 从旧 MAC 迁移到新 MAC
 */
export interface MoveSecondaryIPMacRequest {
  /**
   * Secondary IP
   */
  Ip: string;
  /**
   * 旧 Mac。Secondary IP 当前所绑定的 Mac
   */
  OldMac: string;
  /**
   * 新 Mac。Secondary IP 迁移的目的 Mac
   */
  NewMac: string;
  /**
   * 子网 ID。IP/OldMac/NewMac 三者必须在同一子网
   */
  SubnetId: string;
}

/**
 * MoveSecondaryIPMac - 把 Secondary IP 从旧 MAC 迁移到新 MAC
 */
export interface MoveSecondaryIPMacResponse {}

/**
 * ReleaseVIP - 释放VIP资源
 */
export interface ReleaseVIPRequest {
  /**
   * 可用区
   */
  Zone?: string;
  /**
   * 内网VIP的id
   */
  VIPId: string;
}

/**
 * ReleaseVIP - 释放VIP资源
 */
export interface ReleaseVIPResponse {}

/**
 * SetGwDefaultExport - 设置NAT网关的默认出口
 */
export interface SetGwDefaultExportRequest {
  /**
   * NAT网关Id
   */
  NATGWId: string;
  /**
   * NAT网关绑定的EIP。ExportIp和ExportEipId必填一个
   */
  ExportIp?: string;
  /**
   * NAT网关绑定的EIP Id。ExportIp和ExportEipId必填一个
   */
  ExportEipId?: string;
}

/**
 * SetGwDefaultExport - 设置NAT网关的默认出口
 */
export interface SetGwDefaultExportResponse {}

/**
 * UpdateNATGWPolicy - 更新NAT网关端口转发规则
 */
export interface UpdateNATGWPolicyRequest {
  /**
   * NAT网关Id
   */
  NATGWId: string;
  /**
   * 转发策略Id
   */
  PolicyId: string;
  /**
   * 协议类型。枚举值为：TCP 、 UDP
   */
  Protocol: string;
  /**
   * 源IP。填写对应的EIP Id
   */
  SrcEIPId: string;
  /**
   * 源端口。可填写固定端口，也可填写端口范围。支持的端口范围为1-6553
   */
  SrcPort: string;
  /**
   * 目标IP。填写对应的目标IP地址
   */
  DstIP: string;
  /**
   * 目标端口。可填写固定端口，也可填写端口范围。支持的端口范围为1-65535
   */
  DstPort: string;
  /**
   * 转发策略名称。默认为空
   */
  PolicyName?: string;
}

/**
 * UpdateNATGWPolicy - 更新NAT网关端口转发规则
 */
export interface UpdateNATGWPolicyResponse {}

/**
 * UpdateNATGWSubnet - 更新NAT网关绑定的子网
 */
export interface UpdateNATGWSubnetRequest {
  /**
   * NAT网关Id
   */
  NATGWId: string;
  /**
   * NAT网关绑定的子网Id
   */
  SubnetworkIds?: string[];
}

/**
 * UpdateNATGWSubnet - 更新NAT网关绑定的子网
 */
export interface UpdateNATGWSubnetResponse {}

/**
 * UpdateNetworkAcl - 更改ACL
 */
export interface UpdateNetworkAclRequest {
  /**
   * Acl的名称
   */
  AclName: string;
  /**
   * 需要更改的ACL ID
   */
  AclId: string;
  /**
   * 描述
   */
  Description: string;
}

/**
 * UpdateNetworkAcl - 更改ACL
 */
export interface UpdateNetworkAclResponse {}

/**
 * UpdateNetworkAclEntry - 更新ACL的规则
 */
export interface UpdateNetworkAclEntryRequest {
  /**
   * ACL的ID
   */
  AclId: string;
  /**
   * 需要更新的Entry Id
   */
  EntryId: string;
  /**
   * Entry的优先级，对于同样的Direction来说，不能重复
   */
  Priority: number;
  /**
   * 出向或者入向（“Ingress”, "Egress")
   */
  Direction: string;
  /**
   * 针对的协议规则
   */
  IpProtocol: string;
  /**
   * IPv4段的CIDR表示
   */
  CidrBlock: string;
  /**
   * 针对的端口范围
   */
  PortRange: string;
  /**
   * 规则的行为("Accept", "Reject")
   */
  EntryAction: string;
  /**
   * 描述
   */
  Description?: string;
  /**
   * 应用目标类型。0代表“子网内全部资源”， 1代表“子网内指定资源”。默认为0
   */
  TargetType?: number;
  /**
   * 应用目标资源列表。默认为全部资源生效。TargetType为0时不用填写该值
   */
  TargetResourceIds?: string[];
}

/**
 * UpdateNetworkAclEntry - 更新ACL的规则
 */
export interface UpdateNetworkAclEntryResponse {}

/**
 * UpdateRouteTableAttribute - 更新路由表基本信息
 */
export interface UpdateRouteTableAttributeRequest {
  /**
   * 路由表ID
   */
  RouteTableId: string;
  /**
   * 名称
   */
  Name?: string;
  /**
   * 备注
   */
  Remark?: string;
  /**
   * 业务组名称
   */
  Tag?: string;
}

/**
 * UpdateRouteTableAttribute - 更新路由表基本信息
 */
export interface UpdateRouteTableAttributeResponse {}

/**
 * UpdateSnatRule - 更新指定的出口规则（SNAT规则）
 */
export interface UpdateSnatRuleRequest {
  /**
   * NAT网关的ID，
   */
  NATGWId: string;
  /**
   * 需要出外网的私网IP地址，例如10.9.7.xx
   */
  SourceIp: string;
  /**
   * EIP的ip地址,例如106.75.xx.xx
   */
  SnatIp: string;
  /**
   * snat名称，即出口规则名称
   */
  Name?: string;
}

/**
 * UpdateSnatRule - 更新指定的出口规则（SNAT规则）
 */
export interface UpdateSnatRuleResponse {}

/**
 * UpdateSubnetAttribute - 更新子网信息
 */
export interface UpdateSubnetAttributeRequest {
  /**
   * 子网ID
   */
  SubnetId: string;
  /**
   * 子网名称(如果Name不填写，Tag必须填写)
   */
  Name?: string;
  /**
   * 业务组名称(如果Tag不填写，Name必须填写)
   */
  Tag?: string;
}

/**
 * UpdateSubnetAttribute - 更新子网信息
 */
export interface UpdateSubnetAttributeResponse {}

/**
 * UpdateVIPAttribute - 更新VIP信息
 */
export interface UpdateVIPAttributeRequest {
  /**
   * 内网VIP的资源Id
   */
  VIPId: string;
  /**
   * 内网VIP的备注
   */
  Remark?: string;
  /**
   * 内网VIP的名称
   */
  Name?: string;
  /**
   * 内网VIP所属的业务组
   */
  Tag?: string;
}

/**
 * UpdateVIPAttribute - 更新VIP信息
 */
export interface UpdateVIPAttributeResponse {}

/**
 * UpdateVPCNetwork - 更新VPC网段
 */
export interface UpdateVPCNetworkRequest {
  /**
   * VPC的ID
   */
  VPCId: string;
  /**
   * 需要保留的VPC网段。当前仅支持删除VPC网段，添加网段请参考[AddVPCNetwork](https://docs.ucloud.cn/api/vpc2.0-api/add_vpc_network)
   */
  Network: string[];
}

/**
 * UpdateVPCNetwork - 更新VPC网段
 */
export interface UpdateVPCNetworkResponse {}
