import Client from "../../core/client";
import Request from "../../core/request";
import {ConfigOptions} from "../../core/config";
import {CredentialOptions} from "../../core/credential";

import * as models from './models';

/**
 * This client is used to call actions of **VPC** service
 */
export default class VpcClient extends Client {
    constructor(
        {
            config,
            credential,
        }: {
            config: ConfigOptions,
            credential: CredentialOptions,
        }
    ) {
        super({config, credential});
    }
        
    /**
     * AddSnatRule - 
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/vpc
     */
    addSnatRule(request?: models.AddSnatRuleRequest): Promise<models.AddSnatRuleResponse> {
        const args = {Action: "AddSnatRule", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.AddSnatRuleResponse)
    }
    
        
    /**
     * AddVPCNetwork - 
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/vpc
     */
    addVPCNetwork(request?: models.AddVPCNetworkRequest): Promise<models.AddVPCNetworkResponse> {
        const args = {Action: "AddVPCNetwork", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.AddVPCNetworkResponse)
    }
    
        
    /**
     * AddWhiteListResource - 
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/vpc
     */
    addWhiteListResource(request?: models.AddWhiteListResourceRequest): Promise<models.AddWhiteListResourceResponse> {
        const args = {Action: "AddWhiteListResource", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.AddWhiteListResourceResponse)
    }
    
        
    /**
     * AllocateSecondaryIp - 
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/vpc
     */
    allocateSecondaryIp(request?: models.AllocateSecondaryIpRequest): Promise<models.AllocateSecondaryIpResponse> {
        const args = {Action: "AllocateSecondaryIp", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.AllocateSecondaryIpResponse)
    }
    
        
    /**
     * AllocateVIP - 
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/vpc
     */
    allocateVIP(request?: models.AllocateVIPRequest): Promise<models.AllocateVIPResponse> {
        const args = {Action: "AllocateVIP", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.AllocateVIPResponse)
    }
    
        
    /**
     * AssociateRouteTable - 
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/vpc
     */
    associateRouteTable(request?: models.AssociateRouteTableRequest): Promise<models.AssociateRouteTableResponse> {
        const args = {Action: "AssociateRouteTable", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.AssociateRouteTableResponse)
    }
    
        
    /**
     * CloneRouteTable - 
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/vpc
     */
    cloneRouteTable(request?: models.CloneRouteTableRequest): Promise<models.CloneRouteTableResponse> {
        const args = {Action: "CloneRouteTable", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.CloneRouteTableResponse)
    }
    
        
    /**
     * CreateNATGW - 
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/vpc
     */
    createNATGW(request?: models.CreateNATGWRequest): Promise<models.CreateNATGWResponse> {
        const args = {Action: "CreateNATGW", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.CreateNATGWResponse)
    }
    
        
    /**
     * CreateNATGWPolicy - 
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/vpc
     */
    createNATGWPolicy(request?: models.CreateNATGWPolicyRequest): Promise<models.CreateNATGWPolicyResponse> {
        const args = {Action: "CreateNATGWPolicy", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.CreateNATGWPolicyResponse)
    }
    
        
    /**
     * CreateNetworkAcl - 
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/vpc
     */
    createNetworkAcl(request?: models.CreateNetworkAclRequest): Promise<models.CreateNetworkAclResponse> {
        const args = {Action: "CreateNetworkAcl", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.CreateNetworkAclResponse)
    }
    
        
    /**
     * CreateNetworkAclAssociation - 
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/vpc
     */
    createNetworkAclAssociation(request?: models.CreateNetworkAclAssociationRequest): Promise<models.CreateNetworkAclAssociationResponse> {
        const args = {Action: "CreateNetworkAclAssociation", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.CreateNetworkAclAssociationResponse)
    }
    
        
    /**
     * CreateNetworkAclEntry - 
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/vpc
     */
    createNetworkAclEntry(request?: models.CreateNetworkAclEntryRequest): Promise<models.CreateNetworkAclEntryResponse> {
        const args = {Action: "CreateNetworkAclEntry", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.CreateNetworkAclEntryResponse)
    }
    
        
    /**
     * CreateRouteTable - 
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/vpc
     */
    createRouteTable(request?: models.CreateRouteTableRequest): Promise<models.CreateRouteTableResponse> {
        const args = {Action: "CreateRouteTable", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.CreateRouteTableResponse)
    }
    
        
    /**
     * CreateSnatDnatRule - 
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/vpc
     */
    createSnatDnatRule(request?: models.CreateSnatDnatRuleRequest): Promise<models.CreateSnatDnatRuleResponse> {
        const args = {Action: "CreateSnatDnatRule", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.CreateSnatDnatRuleResponse)
    }
    
        
    /**
     * CreateSubnet - 
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/vpc
     */
    createSubnet(request?: models.CreateSubnetRequest): Promise<models.CreateSubnetResponse> {
        const args = {Action: "CreateSubnet", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.CreateSubnetResponse)
    }
    
        
    /**
     * CreateVPC - 
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/vpc
     */
    createVPC(request?: models.CreateVPCRequest): Promise<models.CreateVPCResponse> {
        const args = {Action: "CreateVPC", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.CreateVPCResponse)
    }
    
        
    /**
     * CreateVPCIntercom - 
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/vpc
     */
    createVPCIntercom(request?: models.CreateVPCIntercomRequest): Promise<models.CreateVPCIntercomResponse> {
        const args = {Action: "CreateVPCIntercom", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.CreateVPCIntercomResponse)
    }
    
        
    /**
     * DeleteNATGW - 
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/vpc
     */
    deleteNATGW(request?: models.DeleteNATGWRequest): Promise<models.DeleteNATGWResponse> {
        const args = {Action: "DeleteNATGW", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DeleteNATGWResponse)
    }
    
        
    /**
     * DeleteNATGWPolicy - 
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/vpc
     */
    deleteNATGWPolicy(request?: models.DeleteNATGWPolicyRequest): Promise<models.DeleteNATGWPolicyResponse> {
        const args = {Action: "DeleteNATGWPolicy", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DeleteNATGWPolicyResponse)
    }
    
        
    /**
     * DeleteNetworkAcl - 
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/vpc
     */
    deleteNetworkAcl(request?: models.DeleteNetworkAclRequest): Promise<models.DeleteNetworkAclResponse> {
        const args = {Action: "DeleteNetworkAcl", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DeleteNetworkAclResponse)
    }
    
        
    /**
     * DeleteNetworkAclAssociation - 
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/vpc
     */
    deleteNetworkAclAssociation(request?: models.DeleteNetworkAclAssociationRequest): Promise<models.DeleteNetworkAclAssociationResponse> {
        const args = {Action: "DeleteNetworkAclAssociation", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DeleteNetworkAclAssociationResponse)
    }
    
        
    /**
     * DeleteNetworkAclEntry - 
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/vpc
     */
    deleteNetworkAclEntry(request?: models.DeleteNetworkAclEntryRequest): Promise<models.DeleteNetworkAclEntryResponse> {
        const args = {Action: "DeleteNetworkAclEntry", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DeleteNetworkAclEntryResponse)
    }
    
        
    /**
     * DeleteRouteTable - 
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/vpc
     */
    deleteRouteTable(request?: models.DeleteRouteTableRequest): Promise<models.DeleteRouteTableResponse> {
        const args = {Action: "DeleteRouteTable", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DeleteRouteTableResponse)
    }
    
        
    /**
     * DeleteSecondaryIp - 
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/vpc
     */
    deleteSecondaryIp(request?: models.DeleteSecondaryIpRequest): Promise<models.DeleteSecondaryIpResponse> {
        const args = {Action: "DeleteSecondaryIp", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DeleteSecondaryIpResponse)
    }
    
        
    /**
     * DeleteSnatDnatRule - 
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/vpc
     */
    deleteSnatDnatRule(request?: models.DeleteSnatDnatRuleRequest): Promise<models.DeleteSnatDnatRuleResponse> {
        const args = {Action: "DeleteSnatDnatRule", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DeleteSnatDnatRuleResponse)
    }
    
        
    /**
     * DeleteSnatRule - 
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/vpc
     */
    deleteSnatRule(request?: models.DeleteSnatRuleRequest): Promise<models.DeleteSnatRuleResponse> {
        const args = {Action: "DeleteSnatRule", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DeleteSnatRuleResponse)
    }
    
        
    /**
     * DeleteSubnet - 
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/vpc
     */
    deleteSubnet(request?: models.DeleteSubnetRequest): Promise<models.DeleteSubnetResponse> {
        const args = {Action: "DeleteSubnet", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DeleteSubnetResponse)
    }
    
        
    /**
     * DeleteVPC - 
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/vpc
     */
    deleteVPC(request?: models.DeleteVPCRequest): Promise<models.DeleteVPCResponse> {
        const args = {Action: "DeleteVPC", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DeleteVPCResponse)
    }
    
        
    /**
     * DeleteVPCIntercom - 
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/vpc
     */
    deleteVPCIntercom(request?: models.DeleteVPCIntercomRequest): Promise<models.DeleteVPCIntercomResponse> {
        const args = {Action: "DeleteVPCIntercom", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DeleteVPCIntercomResponse)
    }
    
        
    /**
     * DeleteWhiteListResource - 
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/vpc
     */
    deleteWhiteListResource(request?: models.DeleteWhiteListResourceRequest): Promise<models.DeleteWhiteListResourceResponse> {
        const args = {Action: "DeleteWhiteListResource", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DeleteWhiteListResourceResponse)
    }
    
        
    /**
     * DescribeInstanceNetworkInterface - 
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/vpc
     */
    describeInstanceNetworkInterface(request?: models.DescribeInstanceNetworkInterfaceRequest): Promise<models.DescribeInstanceNetworkInterfaceResponse> {
        const args = {Action: "DescribeInstanceNetworkInterface", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeInstanceNetworkInterfaceResponse)
    }
    
        
    /**
     * DescribeNATGW - 
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/vpc
     */
    describeNATGW(request?: models.DescribeNATGWRequest): Promise<models.DescribeNATGWResponse> {
        const args = {Action: "DescribeNATGW", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeNATGWResponse)
    }
    
        
    /**
     * DescribeNATGWPolicy - 
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/vpc
     */
    describeNATGWPolicy(request?: models.DescribeNATGWPolicyRequest): Promise<models.DescribeNATGWPolicyResponse> {
        const args = {Action: "DescribeNATGWPolicy", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeNATGWPolicyResponse)
    }
    
        
    /**
     * DescribeNetworkAcl - 
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/vpc
     */
    describeNetworkAcl(request?: models.DescribeNetworkAclRequest): Promise<models.DescribeNetworkAclResponse> {
        const args = {Action: "DescribeNetworkAcl", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeNetworkAclResponse)
    }
    
        
    /**
     * DescribeNetworkAclAssociation - 
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/vpc
     */
    describeNetworkAclAssociation(request?: models.DescribeNetworkAclAssociationRequest): Promise<models.DescribeNetworkAclAssociationResponse> {
        const args = {Action: "DescribeNetworkAclAssociation", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeNetworkAclAssociationResponse)
    }
    
        
    /**
     * DescribeNetworkAclAssociationBySubnet - 
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/vpc
     */
    describeNetworkAclAssociationBySubnet(request?: models.DescribeNetworkAclAssociationBySubnetRequest): Promise<models.DescribeNetworkAclAssociationBySubnetResponse> {
        const args = {Action: "DescribeNetworkAclAssociationBySubnet", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeNetworkAclAssociationBySubnetResponse)
    }
    
        
    /**
     * DescribeNetworkAclEntry - 
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/vpc
     */
    describeNetworkAclEntry(request?: models.DescribeNetworkAclEntryRequest): Promise<models.DescribeNetworkAclEntryResponse> {
        const args = {Action: "DescribeNetworkAclEntry", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeNetworkAclEntryResponse)
    }
    
        
    /**
     * DescribeNetworkInterface - 
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/vpc
     */
    describeNetworkInterface(request?: models.DescribeNetworkInterfaceRequest): Promise<models.DescribeNetworkInterfaceResponse> {
        const args = {Action: "DescribeNetworkInterface", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeNetworkInterfaceResponse)
    }
    
        
    /**
     * DescribeRouteTable - 
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/vpc
     */
    describeRouteTable(request?: models.DescribeRouteTableRequest): Promise<models.DescribeRouteTableResponse> {
        const args = {Action: "DescribeRouteTable", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeRouteTableResponse)
    }
    
        
    /**
     * DescribeSecondaryIp - 
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/vpc
     */
    describeSecondaryIp(request?: models.DescribeSecondaryIpRequest): Promise<models.DescribeSecondaryIpResponse> {
        const args = {Action: "DescribeSecondaryIp", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeSecondaryIpResponse)
    }
    
        
    /**
     * DescribeSnatDnatRule - 
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/vpc
     */
    describeSnatDnatRule(request?: models.DescribeSnatDnatRuleRequest): Promise<models.DescribeSnatDnatRuleResponse> {
        const args = {Action: "DescribeSnatDnatRule", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeSnatDnatRuleResponse)
    }
    
        
    /**
     * DescribeSnatRule - 
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/vpc
     */
    describeSnatRule(request?: models.DescribeSnatRuleRequest): Promise<models.DescribeSnatRuleResponse> {
        const args = {Action: "DescribeSnatRule", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeSnatRuleResponse)
    }
    
        
    /**
     * DescribeSubnet - 
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/vpc
     */
    describeSubnet(request?: models.DescribeSubnetRequest): Promise<models.DescribeSubnetResponse> {
        const args = {Action: "DescribeSubnet", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeSubnetResponse)
    }
    
        
    /**
     * DescribeSubnetResource - 
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/vpc
     */
    describeSubnetResource(request?: models.DescribeSubnetResourceRequest): Promise<models.DescribeSubnetResourceResponse> {
        const args = {Action: "DescribeSubnetResource", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeSubnetResourceResponse)
    }
    
        
    /**
     * DescribeVIP - 
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/vpc
     */
    describeVIP(request?: models.DescribeVIPRequest): Promise<models.DescribeVIPResponse> {
        const args = {Action: "DescribeVIP", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeVIPResponse)
    }
    
        
    /**
     * DescribeVPC - 
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/vpc
     */
    describeVPC(request?: models.DescribeVPCRequest): Promise<models.DescribeVPCResponse> {
        const args = {Action: "DescribeVPC", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeVPCResponse)
    }
    
        
    /**
     * DescribeVPCIntercom - 
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/vpc
     */
    describeVPCIntercom(request?: models.DescribeVPCIntercomRequest): Promise<models.DescribeVPCIntercomResponse> {
        const args = {Action: "DescribeVPCIntercom", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeVPCIntercomResponse)
    }
    
        
    /**
     * DescribeWhiteListResource - 
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/vpc
     */
    describeWhiteListResource(request?: models.DescribeWhiteListResourceRequest): Promise<models.DescribeWhiteListResourceResponse> {
        const args = {Action: "DescribeWhiteListResource", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeWhiteListResourceResponse)
    }
    
        
    /**
     * EnableWhiteList - 
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/vpc
     */
    enableWhiteList(request?: models.EnableWhiteListRequest): Promise<models.EnableWhiteListResponse> {
        const args = {Action: "EnableWhiteList", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.EnableWhiteListResponse)
    }
    
        
    /**
     * GetAvailableResourceForPolicy - 
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/vpc
     */
    getAvailableResourceForPolicy(request?: models.GetAvailableResourceForPolicyRequest): Promise<models.GetAvailableResourceForPolicyResponse> {
        const args = {Action: "GetAvailableResourceForPolicy", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.GetAvailableResourceForPolicyResponse)
    }
    
        
    /**
     * GetAvailableResourceForSnatRule - 
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/vpc
     */
    getAvailableResourceForSnatRule(request?: models.GetAvailableResourceForSnatRuleRequest): Promise<models.GetAvailableResourceForSnatRuleResponse> {
        const args = {Action: "GetAvailableResourceForSnatRule", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.GetAvailableResourceForSnatRuleResponse)
    }
    
        
    /**
     * GetAvailableResourceForWhiteList - 
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/vpc
     */
    getAvailableResourceForWhiteList(request?: models.GetAvailableResourceForWhiteListRequest): Promise<models.GetAvailableResourceForWhiteListResponse> {
        const args = {Action: "GetAvailableResourceForWhiteList", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.GetAvailableResourceForWhiteListResponse)
    }
    
        
    /**
     * GetNetworkAclTargetResource - 
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/vpc
     */
    getNetworkAclTargetResource(request?: models.GetNetworkAclTargetResourceRequest): Promise<models.GetNetworkAclTargetResourceResponse> {
        const args = {Action: "GetNetworkAclTargetResource", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.GetNetworkAclTargetResourceResponse)
    }
    
        
    /**
     * ListSubnetForNATGW - 
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/vpc
     */
    listSubnetForNATGW(request?: models.ListSubnetForNATGWRequest): Promise<models.ListSubnetForNATGWResponse> {
        const args = {Action: "ListSubnetForNATGW", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.ListSubnetForNATGWResponse)
    }
    
        
    /**
     * ModifyRouteRule - 
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/vpc
     */
    modifyRouteRule(request?: models.ModifyRouteRuleRequest): Promise<models.ModifyRouteRuleResponse> {
        const args = {Action: "ModifyRouteRule", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.ModifyRouteRuleResponse)
    }
    
        
    /**
     * MoveSecondaryIPMac - 
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/vpc
     */
    moveSecondaryIPMac(request?: models.MoveSecondaryIPMacRequest): Promise<models.MoveSecondaryIPMacResponse> {
        const args = {Action: "MoveSecondaryIPMac", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.MoveSecondaryIPMacResponse)
    }
    
        
    /**
     * ReleaseVIP - 
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/vpc
     */
    releaseVIP(request?: models.ReleaseVIPRequest): Promise<models.ReleaseVIPResponse> {
        const args = {Action: "ReleaseVIP", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.ReleaseVIPResponse)
    }
    
        
    /**
     * SetGwDefaultExport - 
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/vpc
     */
    setGwDefaultExport(request?: models.SetGwDefaultExportRequest): Promise<models.SetGwDefaultExportResponse> {
        const args = {Action: "SetGwDefaultExport", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.SetGwDefaultExportResponse)
    }
    
        
    /**
     * UpdateNATGWPolicy - 
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/vpc
     */
    updateNATGWPolicy(request?: models.UpdateNATGWPolicyRequest): Promise<models.UpdateNATGWPolicyResponse> {
        const args = {Action: "UpdateNATGWPolicy", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.UpdateNATGWPolicyResponse)
    }
    
        
    /**
     * UpdateNATGWSubnet - 
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/vpc
     */
    updateNATGWSubnet(request?: models.UpdateNATGWSubnetRequest): Promise<models.UpdateNATGWSubnetResponse> {
        const args = {Action: "UpdateNATGWSubnet", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.UpdateNATGWSubnetResponse)
    }
    
        
    /**
     * UpdateNetworkAcl - 
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/vpc
     */
    updateNetworkAcl(request?: models.UpdateNetworkAclRequest): Promise<models.UpdateNetworkAclResponse> {
        const args = {Action: "UpdateNetworkAcl", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.UpdateNetworkAclResponse)
    }
    
        
    /**
     * UpdateNetworkAclEntry - 
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/vpc
     */
    updateNetworkAclEntry(request?: models.UpdateNetworkAclEntryRequest): Promise<models.UpdateNetworkAclEntryResponse> {
        const args = {Action: "UpdateNetworkAclEntry", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.UpdateNetworkAclEntryResponse)
    }
    
        
    /**
     * UpdateRouteTableAttribute - 
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/vpc
     */
    updateRouteTableAttribute(request?: models.UpdateRouteTableAttributeRequest): Promise<models.UpdateRouteTableAttributeResponse> {
        const args = {Action: "UpdateRouteTableAttribute", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.UpdateRouteTableAttributeResponse)
    }
    
        
    /**
     * UpdateSnatRule - 
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/vpc
     */
    updateSnatRule(request?: models.UpdateSnatRuleRequest): Promise<models.UpdateSnatRuleResponse> {
        const args = {Action: "UpdateSnatRule", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.UpdateSnatRuleResponse)
    }
    
        
    /**
     * UpdateSubnetAttribute - 
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/vpc
     */
    updateSubnetAttribute(request?: models.UpdateSubnetAttributeRequest): Promise<models.UpdateSubnetAttributeResponse> {
        const args = {Action: "UpdateSubnetAttribute", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.UpdateSubnetAttributeResponse)
    }
    
        
    /**
     * UpdateVIPAttribute - 
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/vpc
     */
    updateVIPAttribute(request?: models.UpdateVIPAttributeRequest): Promise<models.UpdateVIPAttributeResponse> {
        const args = {Action: "UpdateVIPAttribute", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.UpdateVIPAttributeResponse)
    }
    
        
    /**
     * UpdateVPCNetwork - 
     *
     * See also: https://docs.ucloud.cn/api/vpc-api/vpc
     */
    updateVPCNetwork(request?: models.UpdateVPCNetworkRequest): Promise<models.UpdateVPCNetworkResponse> {
        const args = {Action: "UpdateVPCNetwork", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.UpdateVPCNetworkResponse)
    }
    
}
