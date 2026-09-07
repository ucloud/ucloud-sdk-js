"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("../../core/client"));
const request_1 = __importDefault(require("../../core/request"));
/**
 * This client is used to call actions of **vpc** service
 */
class VPCClient extends client_1.default {
    constructor({ config, credential, }) {
        super({ config, credential });
    }
    /**
     * AddSnatRule - 对于绑定了多个EIP的NAT网关，您可以将一个子网下的某台云主机映射到某个特定的EIP上，规则生效后，则该云主机通过该特定的EIP访问互联网。
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/add_snat_rule
     */
    addSnatRule(request) {
        const args = Object.assign({ Action: 'AddSnatRule' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * AddSubnetIPv6 - 子网关联IPv6
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/add_subnet_ip_v6
     */
    addSubnetIPv6(request) {
        const args = Object.assign({ Action: 'AddSubnetIPv6' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * AddVPCIPv6 - VPC关联IPv6网段
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/add_vpc_ip_v6
     */
    addVPCIPv6(request) {
        const args = Object.assign({ Action: 'AddVPCIPv6' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * AddVPCNetwork - 添加VPC网段
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/add_vpc_network
     */
    addVPCNetwork(request) {
        const args = Object.assign({ Action: 'AddVPCNetwork' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * AddWhiteListResource - 添加NAT网关白名单
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/add_white_list_resource
     */
    addWhiteListResource(request) {
        const args = Object.assign({ Action: 'AddWhiteListResource' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * AllocateBatchSecondaryIp - 批量申请虚拟网卡辅助IP
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/allocate_batch_secondary_ip
     */
    allocateBatchSecondaryIp(request) {
        const args = Object.assign({ Action: 'AllocateBatchSecondaryIp' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * AllocateSecondaryIp - 分配ip（用于uk8s使用）
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/allocate_secondary_ip
     */
    allocateSecondaryIp(request) {
        const args = Object.assign({ Action: 'AllocateSecondaryIp' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * AllocateVIP - 根据提供信息，申请内网VIP(Virtual IP），多用于高可用程序作为漂移IP。
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/allocate_vip
     */
    allocateVIP(request) {
        const args = Object.assign({ Action: 'AllocateVIP' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * AssignIPv6 - 申请IPv6地址
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/assign_ip_v6
     */
    assignIPv6(request) {
        const args = Object.assign({ Action: 'AssignIPv6' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * AssociateRouteTable - 绑定子网的路由表
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/associate_route_table
     */
    associateRouteTable(request) {
        const args = Object.assign({ Action: 'AssociateRouteTable' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * AssociateSecGroup - 绑定资源到安全组
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/associate_sec_group
     */
    associateSecGroup(request) {
        const args = Object.assign({ Action: 'AssociateSecGroup' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * AssociateSecGroupDynamic - 绑定安全组，动态调整绑定优先级
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/associate_sec_group_dynamic
     */
    associateSecGroupDynamic(request) {
        const args = Object.assign({ Action: 'AssociateSecGroupDynamic' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * AttachNetworkInterface - 绑定网卡到云主机
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/attach_network_interface
     */
    attachNetworkInterface(request) {
        const args = Object.assign({ Action: 'AttachNetworkInterface' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CloneRouteTable - 将现有的路由表复制为一张新的路由表
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/clone_route_table
     */
    cloneRouteTable(request) {
        const args = Object.assign({ Action: 'CloneRouteTable' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CopySecGroup - 复制安全组
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/copy_sec_group
     */
    copySecGroup(request) {
        const args = Object.assign({ Action: 'CopySecGroup' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateNATGW - 创建NAT网关
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/create_natgw
     */
    createNATGW(request) {
        const args = Object.assign({ Action: 'CreateNATGW' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateNATGWPolicy - 添加NAT网关端口转发规则
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/create_natgw_policy
     */
    createNATGWPolicy(request) {
        const args = Object.assign({ Action: 'CreateNATGWPolicy' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateNetworkAcl - 创建网络ACL
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/create_network_acl
     */
    createNetworkAcl(request) {
        const args = Object.assign({ Action: 'CreateNetworkAcl' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateNetworkAclAssociation - 创建ACL的绑定关系
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/create_network_acl_association
     */
    createNetworkAclAssociation(request) {
        const args = Object.assign({ Action: 'CreateNetworkAclAssociation' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateNetworkAclEntry - 创建ACL的规则
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/create_network_acl_entry
     */
    createNetworkAclEntry(request) {
        const args = Object.assign({ Action: 'CreateNetworkAclEntry' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateNetworkInterface - 创建虚拟网卡
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/create_network_interface
     */
    createNetworkInterface(request) {
        const args = Object.assign({ Action: 'CreateNetworkInterface' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateRouteTable - 创建路由表
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/create_route_table
     */
    createRouteTable(request) {
        const args = Object.assign({ Action: 'CreateRouteTable' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateSecGroup - 创建安全组
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/create_sec_group
     */
    createSecGroup(request) {
        const args = Object.assign({ Action: 'CreateSecGroup' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateSecGroupRule -
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/create_sec_group_rule
     */
    createSecGroupRule(request) {
        const args = Object.assign({ Action: 'CreateSecGroupRule' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateSnatDnatRule - 调用接口后会自动创建内外网IP之间的SNAT和DNAT规则，支持TCP、UDP协议全端口
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/create_snat_dnat_rule
     */
    createSnatDnatRule(request) {
        const args = Object.assign({ Action: 'CreateSnatDnatRule' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateSubnet - 创建子网
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/create_subnet
     */
    createSubnet(request) {
        const args = Object.assign({ Action: 'CreateSubnet' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateVPC - 创建VPC
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/create_vpc
     */
    createVPC(request) {
        const args = Object.assign({ Action: 'CreateVPC' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateVPCIntercom - 新建VPC互通关系
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/create_vpc_intercom
     */
    createVPCIntercom(request) {
        const args = Object.assign({ Action: 'CreateVPCIntercom' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteNATGW - 删除NAT网关
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/delete_natgw
     */
    deleteNATGW(request) {
        const args = Object.assign({ Action: 'DeleteNATGW' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteNATGWPolicy - 删除NAT网关端口转发规则
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/delete_natgw_policy
     */
    deleteNATGWPolicy(request) {
        const args = Object.assign({ Action: 'DeleteNATGWPolicy' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteNetworkAcl - 删除网络ACL
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/delete_network_acl
     */
    deleteNetworkAcl(request) {
        const args = Object.assign({ Action: 'DeleteNetworkAcl' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteNetworkAclAssociation - 删除网络ACL绑定关系
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/delete_network_acl_association
     */
    deleteNetworkAclAssociation(request) {
        const args = Object.assign({ Action: 'DeleteNetworkAclAssociation' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteNetworkAclEntry - 删除ACL的规则
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/delete_network_acl_entry
     */
    deleteNetworkAclEntry(request) {
        const args = Object.assign({ Action: 'DeleteNetworkAclEntry' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteNetworkInterface - 删除网卡
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/delete_network_interface
     */
    deleteNetworkInterface(request) {
        const args = Object.assign({ Action: 'DeleteNetworkInterface' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteRouteTable - 删除自定义路由表
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/delete_route_table
     */
    deleteRouteTable(request) {
        const args = Object.assign({ Action: 'DeleteRouteTable' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteSecGroup - 删除安全组
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/delete_sec_group
     */
    deleteSecGroup(request) {
        const args = Object.assign({ Action: 'DeleteSecGroup' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteSecGroupRule -
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/delete_sec_group_rule
     */
    deleteSecGroupRule(request) {
        const args = Object.assign({ Action: 'DeleteSecGroupRule' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteSecondaryIp - 删除ip（用于uk8s使用）
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/delete_secondary_ip
     */
    deleteSecondaryIp(request) {
        const args = Object.assign({ Action: 'DeleteSecondaryIp' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteSnatDnatRule - 删除NAT创建内外网IP映射规则
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/delete_snat_dnat_rule
     */
    deleteSnatDnatRule(request) {
        const args = Object.assign({ Action: 'DeleteSnatDnatRule' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteSnatRule - 删除指定的出口规则（SNAT规则）
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/delete_snat_rule
     */
    deleteSnatRule(request) {
        const args = Object.assign({ Action: 'DeleteSnatRule' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteSubnet - 删除子网
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/delete_subnet
     */
    deleteSubnet(request) {
        const args = Object.assign({ Action: 'DeleteSubnet' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteSubnetIPv6 - 子网取消关联IPv6
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/delete_subnet_ip_v6
     */
    deleteSubnetIPv6(request) {
        const args = Object.assign({ Action: 'DeleteSubnetIPv6' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteVPC - 删除VPC
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/delete_vpc
     */
    deleteVPC(request) {
        const args = Object.assign({ Action: 'DeleteVPC' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteVPCIPv6 - VPC取消关联IPv6网段
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/delete_vpc_ip_v6
     */
    deleteVPCIPv6(request) {
        const args = Object.assign({ Action: 'DeleteVPCIPv6' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteVPCIntercom - 删除VPC互通关系
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/delete_vpc_intercom
     */
    deleteVPCIntercom(request) {
        const args = Object.assign({ Action: 'DeleteVPCIntercom' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteWhiteListResource - 删除NAT网关白名单列表
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/delete_white_list_resource
     */
    deleteWhiteListResource(request) {
        const args = Object.assign({ Action: 'DeleteWhiteListResource' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeInstanceNetworkInterface - 展示云主机绑定的网卡信息
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/describe_instance_network_interface
     */
    describeInstanceNetworkInterface(request) {
        const args = Object.assign({ Action: 'DescribeInstanceNetworkInterface' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeNATGW - 获取NAT网关信息
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/describe_natgw
     */
    describeNATGW(request) {
        const args = Object.assign({ Action: 'DescribeNATGW' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeNATGWPolicy - 展示NAT网关端口转发规则
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/describe_natgw_policy
     */
    describeNATGWPolicy(request) {
        const args = Object.assign({ Action: 'DescribeNATGWPolicy' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeNetworkAcl - 获取网络ACL
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/describe_network_acl
     */
    describeNetworkAcl(request) {
        const args = Object.assign({ Action: 'DescribeNetworkAcl' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeNetworkAclAssociation - 获取网络ACL的绑定关系列表
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/describe_network_acl_association
     */
    describeNetworkAclAssociation(request) {
        const args = Object.assign({ Action: 'DescribeNetworkAclAssociation' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeNetworkAclAssociationBySubnet - 获取子网的ACL绑定信息
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/describe_network_acl_association_by_subnet
     */
    describeNetworkAclAssociationBySubnet(request) {
        const args = Object.assign({ Action: 'DescribeNetworkAclAssociationBySubnet' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeNetworkAclEntry - 获取ACL的规则信息
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/describe_network_acl_entry
     */
    describeNetworkAclEntry(request) {
        const args = Object.assign({ Action: 'DescribeNetworkAclEntry' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeNetworkInterface - 展示虚拟网卡信息
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/describe_network_interface
     */
    describeNetworkInterface(request) {
        const args = Object.assign({ Action: 'DescribeNetworkInterface' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeResourceSecGroup - 查询资源绑定的安全组信息
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/describe_resource_sec_group
     */
    describeResourceSecGroup(request) {
        const args = Object.assign({ Action: 'DescribeResourceSecGroup' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeRouteTable - 获取路由表详细信息(包括路由策略)
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/describe_route_table
     */
    describeRouteTable(request) {
        const args = Object.assign({ Action: 'DescribeRouteTable' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeSecGroup -
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/describe_sec_group
     */
    describeSecGroup(request) {
        const args = Object.assign({ Action: 'DescribeSecGroup' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeSecGroupResource - 获取安全组绑资源信息
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/describe_sec_group_resource
     */
    describeSecGroupResource(request) {
        const args = Object.assign({ Action: 'DescribeSecGroupResource' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeSecondaryIp - 查询SecondaryIp（uk8s使用）
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/describe_secondary_ip
     */
    describeSecondaryIp(request) {
        const args = Object.assign({ Action: 'DescribeSecondaryIp' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeSnatDnatRule - 获取基于NAT创建的内外网IP映射规则信息
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/describe_snat_dnat_rule
     */
    describeSnatDnatRule(request) {
        const args = Object.assign({ Action: 'DescribeSnatDnatRule' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeSnatRule - 获取Nat网关的出口规则（SNAT规则）
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/describe_snat_rule
     */
    describeSnatRule(request) {
        const args = Object.assign({ Action: 'DescribeSnatRule' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeSubnet - 获取子网信息
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/describe_subnet
     */
    describeSubnet(request) {
        const args = Object.assign({ Action: 'DescribeSubnet' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeSubnetResource - 展示子网资源
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/describe_subnet_resource
     */
    describeSubnetResource(request) {
        const args = Object.assign({ Action: 'DescribeSubnetResource' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeVIP - 获取内网VIP详细信息
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/describe_vip
     */
    describeVIP(request) {
        const args = Object.assign({ Action: 'DescribeVIP' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeVPC - 获取VPC信息
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/describe_vpc
     */
    describeVPC(request) {
        const args = Object.assign({ Action: 'DescribeVPC' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeVPCIntercom - 获取VPC互通信息
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/describe_vpc_intercom
     */
    describeVPCIntercom(request) {
        const args = Object.assign({ Action: 'DescribeVPCIntercom' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeWhiteListResource - 展示NAT网关白名单资源列表
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/describe_white_list_resource
     */
    describeWhiteListResource(request) {
        const args = Object.assign({ Action: 'DescribeWhiteListResource' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DetachNetworkInterface - 解绑云主机关联网卡
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/detach_network_interface
     */
    detachNetworkInterface(request) {
        const args = Object.assign({ Action: 'DetachNetworkInterface' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DisableUniEipDirectMode - 关闭虚拟网卡EIP直通功能
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/disable_uni_eip_direct_mode
     */
    disableUniEipDirectMode(request) {
        const args = Object.assign({ Action: 'DisableUniEipDirectMode' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DisableVPCIPv6 - VPC关闭IPv6
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/disable_vpc_ip_v6
     */
    disableVPCIPv6(request) {
        const args = Object.assign({ Action: 'DisableVPCIPv6' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DisassociateSecGroup - 解绑安全组和资源绑定关系
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/disassociate_sec_group
     */
    disassociateSecGroup(request) {
        const args = Object.assign({ Action: 'DisassociateSecGroup' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * EnableUniEipDirectMode - 开启虚拟网卡EIP直通功能
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/enable_uni_eip_direct_mode
     */
    enableUniEipDirectMode(request) {
        const args = Object.assign({ Action: 'EnableUniEipDirectMode' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * EnableWhiteList - 修改NAT网关白名单开关
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/enable_white_list
     */
    enableWhiteList(request) {
        const args = Object.assign({ Action: 'EnableWhiteList' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetAvailableResourceForPolicy - 获取NAT网关可配置端口转发规则的资源信息
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/get_available_resource_for_policy
     */
    getAvailableResourceForPolicy(request) {
        const args = Object.assign({ Action: 'GetAvailableResourceForPolicy' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetAvailableResourceForSnatRule - 获取可用于添加snat规则（出口规则）的资源列表
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/get_available_resource_for_snat_rule
     */
    getAvailableResourceForSnatRule(request) {
        const args = Object.assign({ Action: 'GetAvailableResourceForSnatRule' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetAvailableResourceForWhiteList - 获取NAT网关可添加白名单的资源
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/get_available_resource_for_white_list
     */
    getAvailableResourceForWhiteList(request) {
        const args = Object.assign({ Action: 'GetAvailableResourceForWhiteList' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetNetworkAclTargetResource - 获取ACL规则应用目标列表
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/get_network_acl_target_resource
     */
    getNetworkAclTargetResource(request) {
        const args = Object.assign({ Action: 'GetNetworkAclTargetResource' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ListSubnetForNATGW - 展示NAT网关可绑定的子网列表
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/list_subnet_for_natgw
     */
    listSubnetForNATGW(request) {
        const args = Object.assign({ Action: 'ListSubnetForNATGW' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ModifyRouteRule - 路由策略增、删、改
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/modify_route_rule
     */
    modifyRouteRule(request) {
        const args = Object.assign({ Action: 'ModifyRouteRule' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * MoveSecondaryIPMac - 把 Secondary IP 从旧 MAC 迁移到新 MAC
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/move_secondary_ip_mac
     */
    moveSecondaryIPMac(request) {
        const args = Object.assign({ Action: 'MoveSecondaryIPMac' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ReleaseVIP - 释放VIP资源
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/release_vip
     */
    releaseVIP(request) {
        const args = Object.assign({ Action: 'ReleaseVIP' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * SetGwDefaultExport - 设置NAT网关的默认出口
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/set_gw_default_export
     */
    setGwDefaultExport(request) {
        const args = Object.assign({ Action: 'SetGwDefaultExport' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * SwitchToFirewall - 切换至防火墙模式
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/switch_to_firewall
     */
    switchToFirewall(request) {
        const args = Object.assign({ Action: 'SwitchToFirewall' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * SwitchToSecGroup - 切换至安全组模式
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/switch_to_sec_group
     */
    switchToSecGroup(request) {
        const args = Object.assign({ Action: 'SwitchToSecGroup' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UnassignIPv6 - 释放IPv6地址
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/unassign_ip_v6
     */
    unassignIPv6(request) {
        const args = Object.assign({ Action: 'UnassignIPv6' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateNATGW - 更新nat网关基本信息
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/update_natgw
     */
    updateNATGW(request) {
        const args = Object.assign({ Action: 'UpdateNATGW' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateNATGWPolicy - 更新NAT网关端口转发规则
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/update_natgw_policy
     */
    updateNATGWPolicy(request) {
        const args = Object.assign({ Action: 'UpdateNATGWPolicy' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateNATGWSnatpool - NAT网关默认出口规则是否开启Snatpool，若开启，对应控制台上的负载均衡流量出口方式。
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/update_natgw_snatpool
     */
    updateNATGWSnatpool(request) {
        const args = Object.assign({ Action: 'UpdateNATGWSnatpool' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateNATGWSubnet - 更新NAT网关绑定的子网
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/update_natgw_subnet
     */
    updateNATGWSubnet(request) {
        const args = Object.assign({ Action: 'UpdateNATGWSubnet' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateNetworkAcl - 更改ACL
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/update_network_acl
     */
    updateNetworkAcl(request) {
        const args = Object.assign({ Action: 'UpdateNetworkAcl' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateNetworkAclEntry - 更新ACL的规则
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/update_network_acl_entry
     */
    updateNetworkAclEntry(request) {
        const args = Object.assign({ Action: 'UpdateNetworkAclEntry' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateNetworkInterfaceDefaultOutput - 更新虚拟网卡默认出口(仅用于开启EIP网卡可见模式的虚拟网卡)
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/update_network_interface_default_output
     */
    updateNetworkInterfaceDefaultOutput(request) {
        const args = Object.assign({ Action: 'UpdateNetworkInterfaceDefaultOutput' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateRouteTableAttribute - 更新路由表基本信息
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/update_route_table_attribute
     */
    updateRouteTableAttribute(request) {
        const args = Object.assign({ Action: 'UpdateRouteTableAttribute' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateSecGroup - 更新安全组基本信息
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/update_sec_group
     */
    updateSecGroup(request) {
        const args = Object.assign({ Action: 'UpdateSecGroup' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateSecGroupAssociation - 仅对操作的安全组ID生效，其他已有的绑定关系不受影响。
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/update_sec_group_association
     */
    updateSecGroupAssociation(request) {
        const args = Object.assign({ Action: 'UpdateSecGroupAssociation' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateSecGroupRule -
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/update_sec_group_rule
     */
    updateSecGroupRule(request) {
        const args = Object.assign({ Action: 'UpdateSecGroupRule' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateSnatRule - 更新指定的出口规则（SNAT规则）
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/update_snat_rule
     */
    updateSnatRule(request) {
        const args = Object.assign({ Action: 'UpdateSnatRule' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateSubnetAttribute - 更新子网信息
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/update_subnet_attribute
     */
    updateSubnetAttribute(request) {
        const args = Object.assign({ Action: 'UpdateSubnetAttribute' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateVIPAttribute - 更新VIP信息
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/update_vip_attribute
     */
    updateVIPAttribute(request) {
        const args = Object.assign({ Action: 'UpdateVIPAttribute' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateVPCIPv6 - 更新VPC IPv6网段
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/update_vpc_ip_v6
     */
    updateVPCIPv6(request) {
        const args = Object.assign({ Action: 'UpdateVPCIPv6' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateVPCNetwork - 更新VPC网段
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/update_vpc_network
     */
    updateVPCNetwork(request) {
        const args = Object.assign({ Action: 'UpdateVPCNetwork' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
}
exports.default = VPCClient;
