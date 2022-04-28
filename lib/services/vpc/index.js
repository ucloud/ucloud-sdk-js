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
     * See also: https://docs.ucloud.cn/api/vpc2.0-api/add_snat_rule
     */
    addSnatRule(request) {
        const args = Object.assign({ Action: 'AddSnatRule' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * AddVPCNetwork - 添加VPC网段
     *
     * See also: https://docs.ucloud.cn/api/vpc2.0-api/add_vpc_network
     */
    addVPCNetwork(request) {
        const args = Object.assign({ Action: 'AddVPCNetwork' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * AddWhiteListResource - 添加NAT网关白名单
     *
     * See also: https://docs.ucloud.cn/api/vpc2.0-api/add_white_list_resource
     */
    addWhiteListResource(request) {
        const args = Object.assign({ Action: 'AddWhiteListResource' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * AllocateSecondaryIp - 分配ip（用于uk8s使用）
     *
     * See also: https://docs.ucloud.cn/api/vpc2.0-api/allocate_secondary_ip
     */
    allocateSecondaryIp(request) {
        const args = Object.assign({ Action: 'AllocateSecondaryIp' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * AllocateVIP - 根据提供信息，申请内网VIP(Virtual IP），多用于高可用程序作为漂移IP。
     *
     * See also: https://docs.ucloud.cn/api/vpc2.0-api/allocate_vip
     */
    allocateVIP(request) {
        const args = Object.assign({ Action: 'AllocateVIP' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * AssociateRouteTable - 绑定子网的路由表
     *
     * See also: https://docs.ucloud.cn/api/vpc2.0-api/associate_route_table
     */
    associateRouteTable(request) {
        const args = Object.assign({ Action: 'AssociateRouteTable' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CloneRouteTable - 将现有的路由表复制为一张新的路由表
     *
     * See also: https://docs.ucloud.cn/api/vpc2.0-api/clone_route_table
     */
    cloneRouteTable(request) {
        const args = Object.assign({ Action: 'CloneRouteTable' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateNATGW - 创建NAT网关
     *
     * See also: https://docs.ucloud.cn/api/vpc2.0-api/create_natgw
     */
    createNATGW(request) {
        const args = Object.assign({ Action: 'CreateNATGW' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateNATGWPolicy - 添加NAT网关端口转发规则
     *
     * See also: https://docs.ucloud.cn/api/vpc2.0-api/create_natgw_policy
     */
    createNATGWPolicy(request) {
        const args = Object.assign({ Action: 'CreateNATGWPolicy' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateNetworkAcl - 创建网络ACL
     *
     * See also: https://docs.ucloud.cn/api/vpc2.0-api/create_network_acl
     */
    createNetworkAcl(request) {
        const args = Object.assign({ Action: 'CreateNetworkAcl' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateNetworkAclAssociation - 创建ACL的绑定关系
     *
     * See also: https://docs.ucloud.cn/api/vpc2.0-api/create_network_acl_association
     */
    createNetworkAclAssociation(request) {
        const args = Object.assign({ Action: 'CreateNetworkAclAssociation' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateNetworkAclEntry - 创建ACL的规则
     *
     * See also: https://docs.ucloud.cn/api/vpc2.0-api/create_network_acl_entry
     */
    createNetworkAclEntry(request) {
        const args = Object.assign({ Action: 'CreateNetworkAclEntry' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateRouteTable - 创建路由表
     *
     * See also: https://docs.ucloud.cn/api/vpc2.0-api/create_route_table
     */
    createRouteTable(request) {
        const args = Object.assign({ Action: 'CreateRouteTable' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateSnatDnatRule - 调用接口后会自动创建内外网IP之间的SNAT和DNAT规则，支持TCP、UDP协议全端口
     *
     * See also: https://docs.ucloud.cn/api/vpc2.0-api/create_snat_dnat_rule
     */
    createSnatDnatRule(request) {
        const args = Object.assign({ Action: 'CreateSnatDnatRule' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateSubnet - 创建子网
     *
     * See also: https://docs.ucloud.cn/api/vpc2.0-api/create_subnet
     */
    createSubnet(request) {
        const args = Object.assign({ Action: 'CreateSubnet' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateVPC - 创建VPC
     *
     * See also: https://docs.ucloud.cn/api/vpc2.0-api/create_vpc
     */
    createVPC(request) {
        const args = Object.assign({ Action: 'CreateVPC' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateVPCIntercom - 新建VPC互通关系
     *
     * See also: https://docs.ucloud.cn/api/vpc2.0-api/create_vpc_intercom
     */
    createVPCIntercom(request) {
        const args = Object.assign({ Action: 'CreateVPCIntercom' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteNATGW - 删除NAT网关
     *
     * See also: https://docs.ucloud.cn/api/vpc2.0-api/delete_natgw
     */
    deleteNATGW(request) {
        const args = Object.assign({ Action: 'DeleteNATGW' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteNATGWPolicy - 删除NAT网关端口转发规则
     *
     * See also: https://docs.ucloud.cn/api/vpc2.0-api/delete_natgw_policy
     */
    deleteNATGWPolicy(request) {
        const args = Object.assign({ Action: 'DeleteNATGWPolicy' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteNetworkAcl - 删除网络ACL
     *
     * See also: https://docs.ucloud.cn/api/vpc2.0-api/delete_network_acl
     */
    deleteNetworkAcl(request) {
        const args = Object.assign({ Action: 'DeleteNetworkAcl' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteNetworkAclAssociation - 删除网络ACL绑定关系
     *
     * See also: https://docs.ucloud.cn/api/vpc2.0-api/delete_network_acl_association
     */
    deleteNetworkAclAssociation(request) {
        const args = Object.assign({ Action: 'DeleteNetworkAclAssociation' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteNetworkAclEntry - 删除ACL的规则
     *
     * See also: https://docs.ucloud.cn/api/vpc2.0-api/delete_network_acl_entry
     */
    deleteNetworkAclEntry(request) {
        const args = Object.assign({ Action: 'DeleteNetworkAclEntry' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteRouteTable - 删除自定义路由表
     *
     * See also: https://docs.ucloud.cn/api/vpc2.0-api/delete_route_table
     */
    deleteRouteTable(request) {
        const args = Object.assign({ Action: 'DeleteRouteTable' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteSecondaryIp - 删除ip（用于uk8s使用）
     *
     * See also: https://docs.ucloud.cn/api/vpc2.0-api/delete_secondary_ip
     */
    deleteSecondaryIp(request) {
        const args = Object.assign({ Action: 'DeleteSecondaryIp' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteSnatDnatRule - 删除NAT创建内外网IP映射规则
     *
     * See also: https://docs.ucloud.cn/api/vpc2.0-api/delete_snat_dnat_rule
     */
    deleteSnatDnatRule(request) {
        const args = Object.assign({ Action: 'DeleteSnatDnatRule' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteSnatRule - 删除指定的出口规则（SNAT规则）
     *
     * See also: https://docs.ucloud.cn/api/vpc2.0-api/delete_snat_rule
     */
    deleteSnatRule(request) {
        const args = Object.assign({ Action: 'DeleteSnatRule' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteSubnet - 删除子网
     *
     * See also: https://docs.ucloud.cn/api/vpc2.0-api/delete_subnet
     */
    deleteSubnet(request) {
        const args = Object.assign({ Action: 'DeleteSubnet' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteVPC - 删除VPC
     *
     * See also: https://docs.ucloud.cn/api/vpc2.0-api/delete_vpc
     */
    deleteVPC(request) {
        const args = Object.assign({ Action: 'DeleteVPC' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteVPCIntercom - 删除VPC互通关系
     *
     * See also: https://docs.ucloud.cn/api/vpc2.0-api/delete_vpc_intercom
     */
    deleteVPCIntercom(request) {
        const args = Object.assign({ Action: 'DeleteVPCIntercom' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteWhiteListResource - 删除NAT网关白名单列表
     *
     * See also: https://docs.ucloud.cn/api/vpc2.0-api/delete_white_list_resource
     */
    deleteWhiteListResource(request) {
        const args = Object.assign({ Action: 'DeleteWhiteListResource' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeInstanceNetworkInterface - 展示云主机绑定的网卡信息
     *
     * See also: https://docs.ucloud.cn/api/vpc2.0-api/describe_instance_network_interface
     */
    describeInstanceNetworkInterface(request) {
        const args = Object.assign({ Action: 'DescribeInstanceNetworkInterface' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeNATGW - 获取NAT网关信息
     *
     * See also: https://docs.ucloud.cn/api/vpc2.0-api/describe_natgw
     */
    describeNATGW(request) {
        const args = Object.assign({ Action: 'DescribeNATGW' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeNATGWPolicy - 展示NAT网关端口转发规则
     *
     * See also: https://docs.ucloud.cn/api/vpc2.0-api/describe_natgw_policy
     */
    describeNATGWPolicy(request) {
        const args = Object.assign({ Action: 'DescribeNATGWPolicy' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeNetworkAcl - 获取网络ACL
     *
     * See also: https://docs.ucloud.cn/api/vpc2.0-api/describe_network_acl
     */
    describeNetworkAcl(request) {
        const args = Object.assign({ Action: 'DescribeNetworkAcl' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeNetworkAclAssociation - 获取网络ACL的绑定关系列表
     *
     * See also: https://docs.ucloud.cn/api/vpc2.0-api/describe_network_acl_association
     */
    describeNetworkAclAssociation(request) {
        const args = Object.assign({ Action: 'DescribeNetworkAclAssociation' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeNetworkAclAssociationBySubnet - 获取子网的ACL绑定信息
     *
     * See also: https://docs.ucloud.cn/api/vpc2.0-api/describe_network_acl_association_by_subnet
     */
    describeNetworkAclAssociationBySubnet(request) {
        const args = Object.assign({ Action: 'DescribeNetworkAclAssociationBySubnet' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeNetworkAclEntry - 获取ACL的规则信息
     *
     * See also: https://docs.ucloud.cn/api/vpc2.0-api/describe_network_acl_entry
     */
    describeNetworkAclEntry(request) {
        const args = Object.assign({ Action: 'DescribeNetworkAclEntry' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeNetworkInterface - 展示虚拟网卡信息
     *
     * See also: https://docs.ucloud.cn/api/vpc2.0-api/describe_network_interface
     */
    describeNetworkInterface(request) {
        const args = Object.assign({ Action: 'DescribeNetworkInterface' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeRouteTable - 获取路由表详细信息(包括路由策略)
     *
     * See also: https://docs.ucloud.cn/api/vpc2.0-api/describe_route_table
     */
    describeRouteTable(request) {
        const args = Object.assign({ Action: 'DescribeRouteTable' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeSecondaryIp - 查询SecondaryIp（uk8s使用）
     *
     * See also: https://docs.ucloud.cn/api/vpc2.0-api/describe_secondary_ip
     */
    describeSecondaryIp(request) {
        const args = Object.assign({ Action: 'DescribeSecondaryIp' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeSnatDnatRule - 获取基于NAT创建的内外网IP映射规则信息
     *
     * See also: https://docs.ucloud.cn/api/vpc2.0-api/describe_snat_dnat_rule
     */
    describeSnatDnatRule(request) {
        const args = Object.assign({ Action: 'DescribeSnatDnatRule' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeSnatRule - 获取Nat网关的出口规则（SNAT规则）
     *
     * See also: https://docs.ucloud.cn/api/vpc2.0-api/describe_snat_rule
     */
    describeSnatRule(request) {
        const args = Object.assign({ Action: 'DescribeSnatRule' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeSubnet - 获取子网信息
     *
     * See also: https://docs.ucloud.cn/api/vpc2.0-api/describe_subnet
     */
    describeSubnet(request) {
        const args = Object.assign({ Action: 'DescribeSubnet' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeSubnetResource - 展示子网资源
     *
     * See also: https://docs.ucloud.cn/api/vpc2.0-api/describe_subnet_resource
     */
    describeSubnetResource(request) {
        const args = Object.assign({ Action: 'DescribeSubnetResource' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeVIP - 获取内网VIP详细信息
     *
     * See also: https://docs.ucloud.cn/api/vpc2.0-api/describe_vip
     */
    describeVIP(request) {
        const args = Object.assign({ Action: 'DescribeVIP' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeVPC - 获取VPC信息
     *
     * See also: https://docs.ucloud.cn/api/vpc2.0-api/describe_vpc
     */
    describeVPC(request) {
        const args = Object.assign({ Action: 'DescribeVPC' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeVPCIntercom - 获取VPC互通信息
     *
     * See also: https://docs.ucloud.cn/api/vpc2.0-api/describe_vpc_intercom
     */
    describeVPCIntercom(request) {
        const args = Object.assign({ Action: 'DescribeVPCIntercom' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeWhiteListResource - 展示NAT网关白名单资源列表
     *
     * See also: https://docs.ucloud.cn/api/vpc2.0-api/describe_white_list_resource
     */
    describeWhiteListResource(request) {
        const args = Object.assign({ Action: 'DescribeWhiteListResource' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * EnableWhiteList - 修改NAT网关白名单开关
     *
     * See also: https://docs.ucloud.cn/api/vpc2.0-api/enable_white_list
     */
    enableWhiteList(request) {
        const args = Object.assign({ Action: 'EnableWhiteList' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetAvailableResourceForPolicy - 获取NAT网关可配置端口转发规则的资源信息
     *
     * See also: https://docs.ucloud.cn/api/vpc2.0-api/get_available_resource_for_policy
     */
    getAvailableResourceForPolicy(request) {
        const args = Object.assign({ Action: 'GetAvailableResourceForPolicy' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetAvailableResourceForSnatRule - 获取可用于添加snat规则（出口规则）的资源列表
     *
     * See also: https://docs.ucloud.cn/api/vpc2.0-api/get_available_resource_for_snat_rule
     */
    getAvailableResourceForSnatRule(request) {
        const args = Object.assign({ Action: 'GetAvailableResourceForSnatRule' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetAvailableResourceForWhiteList - 获取NAT网关可添加白名单的资源
     *
     * See also: https://docs.ucloud.cn/api/vpc2.0-api/get_available_resource_for_white_list
     */
    getAvailableResourceForWhiteList(request) {
        const args = Object.assign({ Action: 'GetAvailableResourceForWhiteList' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetNetworkAclTargetResource - 获取ACL规则应用目标列表
     *
     * See also: https://docs.ucloud.cn/api/vpc2.0-api/get_network_acl_target_resource
     */
    getNetworkAclTargetResource(request) {
        const args = Object.assign({ Action: 'GetNetworkAclTargetResource' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ListSubnetForNATGW - 展示NAT网关可绑定的子网列表
     *
     * See also: https://docs.ucloud.cn/api/vpc2.0-api/list_subnet_for_natgw
     */
    listSubnetForNATGW(request) {
        const args = Object.assign({ Action: 'ListSubnetForNATGW' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ModifyRouteRule - 路由策略增、删、改
     *
     * See also: https://docs.ucloud.cn/api/vpc2.0-api/modify_route_rule
     */
    modifyRouteRule(request) {
        const args = Object.assign({ Action: 'ModifyRouteRule' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * MoveSecondaryIPMac - 把 Secondary IP 从旧 MAC 迁移到新 MAC
     *
     * See also: https://docs.ucloud.cn/api/vpc2.0-api/move_secondary_ip_mac
     */
    moveSecondaryIPMac(request) {
        const args = Object.assign({ Action: 'MoveSecondaryIPMac' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ReleaseVIP - 释放VIP资源
     *
     * See also: https://docs.ucloud.cn/api/vpc2.0-api/release_vip
     */
    releaseVIP(request) {
        const args = Object.assign({ Action: 'ReleaseVIP' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * SetGwDefaultExport - 设置NAT网关的默认出口
     *
     * See also: https://docs.ucloud.cn/api/vpc2.0-api/set_gw_default_export
     */
    setGwDefaultExport(request) {
        const args = Object.assign({ Action: 'SetGwDefaultExport' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateNATGWPolicy - 更新NAT网关端口转发规则
     *
     * See also: https://docs.ucloud.cn/api/vpc2.0-api/update_natgw_policy
     */
    updateNATGWPolicy(request) {
        const args = Object.assign({ Action: 'UpdateNATGWPolicy' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateNATGWSubnet - 更新NAT网关绑定的子网
     *
     * See also: https://docs.ucloud.cn/api/vpc2.0-api/update_natgw_subnet
     */
    updateNATGWSubnet(request) {
        const args = Object.assign({ Action: 'UpdateNATGWSubnet' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateNetworkAcl - 更改ACL
     *
     * See also: https://docs.ucloud.cn/api/vpc2.0-api/update_network_acl
     */
    updateNetworkAcl(request) {
        const args = Object.assign({ Action: 'UpdateNetworkAcl' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateNetworkAclEntry - 更新ACL的规则
     *
     * See also: https://docs.ucloud.cn/api/vpc2.0-api/update_network_acl_entry
     */
    updateNetworkAclEntry(request) {
        const args = Object.assign({ Action: 'UpdateNetworkAclEntry' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateRouteTableAttribute - 更新路由表基本信息
     *
     * See also: https://docs.ucloud.cn/api/vpc2.0-api/update_route_table_attribute
     */
    updateRouteTableAttribute(request) {
        const args = Object.assign({ Action: 'UpdateRouteTableAttribute' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateSnatRule - 更新指定的出口规则（SNAT规则）
     *
     * See also: https://docs.ucloud.cn/api/vpc2.0-api/update_snat_rule
     */
    updateSnatRule(request) {
        const args = Object.assign({ Action: 'UpdateSnatRule' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateSubnetAttribute - 更新子网信息
     *
     * See also: https://docs.ucloud.cn/api/vpc2.0-api/update_subnet_attribute
     */
    updateSubnetAttribute(request) {
        const args = Object.assign({ Action: 'UpdateSubnetAttribute' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateVIPAttribute - 更新VIP信息
     *
     * See also: https://docs.ucloud.cn/api/vpc2.0-api/update_vip_attribute
     */
    updateVIPAttribute(request) {
        const args = Object.assign({ Action: 'UpdateVIPAttribute' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateVPCNetwork - 更新VPC网段
     *
     * See also: https://docs.ucloud.cn/api/vpc2.0-api/update_vpc_network
     */
    updateVPCNetwork(request) {
        const args = Object.assign({ Action: 'UpdateVPCNetwork' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
}
exports.default = VPCClient;
