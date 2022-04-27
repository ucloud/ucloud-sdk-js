import Client from "../../core/client";
import Request from "../../core/request";
import {ConfigOptions} from "../../core/config";
import {CredentialOptions} from "../../core/credential";

import * as models from './models';

/**
 * This client is used to call actions of **UNet** service
 */
export default class UnetClient extends Client {
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
     * AllocateEIP - 
     *
     * See also: https://docs.ucloud.cn/api/u_net-api/u_net
     */
    allocateEIP(request?: models.AllocateEIPRequest): Promise<models.AllocateEIPResponse> {
        const args = {Action: "AllocateEIP", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.AllocateEIPResponse)
    }
    
        
    /**
     * AllocateShareBandwidth - 
     *
     * See also: https://docs.ucloud.cn/api/u_net-api/u_net
     */
    allocateShareBandwidth(request?: models.AllocateShareBandwidthRequest): Promise<models.AllocateShareBandwidthResponse> {
        const args = {Action: "AllocateShareBandwidth", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.AllocateShareBandwidthResponse)
    }
    
        
    /**
     * AssociateEIPWithShareBandwidth - 
     *
     * See also: https://docs.ucloud.cn/api/u_net-api/u_net
     */
    associateEIPWithShareBandwidth(request?: models.AssociateEIPWithShareBandwidthRequest): Promise<models.AssociateEIPWithShareBandwidthResponse> {
        const args = {Action: "AssociateEIPWithShareBandwidth", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.AssociateEIPWithShareBandwidthResponse)
    }
    
        
    /**
     * BindEIP - 
     *
     * See also: https://docs.ucloud.cn/api/u_net-api/u_net
     */
    bindEIP(request?: models.BindEIPRequest): Promise<models.BindEIPResponse> {
        const args = {Action: "BindEIP", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.BindEIPResponse)
    }
    
        
    /**
     * CreateBandwidthPackage - 
     *
     * See also: https://docs.ucloud.cn/api/u_net-api/u_net
     */
    createBandwidthPackage(request?: models.CreateBandwidthPackageRequest): Promise<models.CreateBandwidthPackageResponse> {
        const args = {Action: "CreateBandwidthPackage", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.CreateBandwidthPackageResponse)
    }
    
        
    /**
     * CreateFirewall - 
     *
     * See also: https://docs.ucloud.cn/api/u_net-api/u_net
     */
    createFirewall(request?: models.CreateFirewallRequest): Promise<models.CreateFirewallResponse> {
        const args = {Action: "CreateFirewall", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.CreateFirewallResponse)
    }
    
        
    /**
     * DeleteBandwidthPackage - 
     *
     * See also: https://docs.ucloud.cn/api/u_net-api/u_net
     */
    deleteBandwidthPackage(request?: models.DeleteBandwidthPackageRequest): Promise<models.DeleteBandwidthPackageResponse> {
        const args = {Action: "DeleteBandwidthPackage", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DeleteBandwidthPackageResponse)
    }
    
        
    /**
     * DeleteFirewall - 
     *
     * See also: https://docs.ucloud.cn/api/u_net-api/u_net
     */
    deleteFirewall(request?: models.DeleteFirewallRequest): Promise<models.DeleteFirewallResponse> {
        const args = {Action: "DeleteFirewall", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DeleteFirewallResponse)
    }
    
        
    /**
     * DescribeBandwidthPackage - 
     *
     * See also: https://docs.ucloud.cn/api/u_net-api/u_net
     */
    describeBandwidthPackage(request?: models.DescribeBandwidthPackageRequest): Promise<models.DescribeBandwidthPackageResponse> {
        const args = {Action: "DescribeBandwidthPackage", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeBandwidthPackageResponse)
    }
    
        
    /**
     * DescribeBandwidthUsage - 
     *
     * See also: https://docs.ucloud.cn/api/u_net-api/u_net
     */
    describeBandwidthUsage(request?: models.DescribeBandwidthUsageRequest): Promise<models.DescribeBandwidthUsageResponse> {
        const args = {Action: "DescribeBandwidthUsage", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeBandwidthUsageResponse)
    }
    
        
    /**
     * DescribeEIP - 
     *
     * See also: https://docs.ucloud.cn/api/u_net-api/u_net
     */
    describeEIP(request?: models.DescribeEIPRequest): Promise<models.DescribeEIPResponse> {
        const args = {Action: "DescribeEIP", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeEIPResponse)
    }
    
        
    /**
     * DescribeFirewall - 
     *
     * See also: https://docs.ucloud.cn/api/u_net-api/u_net
     */
    describeFirewall(request?: models.DescribeFirewallRequest): Promise<models.DescribeFirewallResponse> {
        const args = {Action: "DescribeFirewall", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeFirewallResponse)
    }
    
        
    /**
     * DescribeFirewallResource - 
     *
     * See also: https://docs.ucloud.cn/api/u_net-api/u_net
     */
    describeFirewallResource(request?: models.DescribeFirewallResourceRequest): Promise<models.DescribeFirewallResourceResponse> {
        const args = {Action: "DescribeFirewallResource", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeFirewallResourceResponse)
    }
    
        
    /**
     * DescribeShareBandwidth - 
     *
     * See also: https://docs.ucloud.cn/api/u_net-api/u_net
     */
    describeShareBandwidth(request?: models.DescribeShareBandwidthRequest): Promise<models.DescribeShareBandwidthResponse> {
        const args = {Action: "DescribeShareBandwidth", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeShareBandwidthResponse)
    }
    
        
    /**
     * DescribeShareBandwidthPrice - 
     *
     * See also: https://docs.ucloud.cn/api/u_net-api/u_net
     */
    describeShareBandwidthPrice(request?: models.DescribeShareBandwidthPriceRequest): Promise<models.DescribeShareBandwidthPriceResponse> {
        const args = {Action: "DescribeShareBandwidthPrice", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeShareBandwidthPriceResponse)
    }
    
        
    /**
     * DescribeShareBandwidthUpdatePrice - 
     *
     * See also: https://docs.ucloud.cn/api/u_net-api/u_net
     */
    describeShareBandwidthUpdatePrice(request?: models.DescribeShareBandwidthUpdatePriceRequest): Promise<models.DescribeShareBandwidthUpdatePriceResponse> {
        const args = {Action: "DescribeShareBandwidthUpdatePrice", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeShareBandwidthUpdatePriceResponse)
    }
    
        
    /**
     * DisassociateEIPWithShareBandwidth - 
     *
     * See also: https://docs.ucloud.cn/api/u_net-api/u_net
     */
    disassociateEIPWithShareBandwidth(request?: models.DisassociateEIPWithShareBandwidthRequest): Promise<models.DisassociateEIPWithShareBandwidthResponse> {
        const args = {Action: "DisassociateEIPWithShareBandwidth", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DisassociateEIPWithShareBandwidthResponse)
    }
    
        
    /**
     * DisassociateFirewall - 
     *
     * See also: https://docs.ucloud.cn/api/u_net-api/u_net
     */
    disassociateFirewall(request?: models.DisassociateFirewallRequest): Promise<models.DisassociateFirewallResponse> {
        const args = {Action: "DisassociateFirewall", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DisassociateFirewallResponse)
    }
    
        
    /**
     * GetEIPPayMode - 
     *
     * See also: https://docs.ucloud.cn/api/u_net-api/u_net
     */
    getEIPPayMode(request?: models.GetEIPPayModeRequest): Promise<models.GetEIPPayModeResponse> {
        const args = {Action: "GetEIPPayMode", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.GetEIPPayModeResponse)
    }
    
        
    /**
     * GetEIPPrice - 
     *
     * See also: https://docs.ucloud.cn/api/u_net-api/u_net
     */
    getEIPPrice(request?: models.GetEIPPriceRequest): Promise<models.GetEIPPriceResponse> {
        const args = {Action: "GetEIPPrice", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.GetEIPPriceResponse)
    }
    
        
    /**
     * GetEIPUpgradePrice - 
     *
     * See also: https://docs.ucloud.cn/api/u_net-api/u_net
     */
    getEIPUpgradePrice(request?: models.GetEIPUpgradePriceRequest): Promise<models.GetEIPUpgradePriceResponse> {
        const args = {Action: "GetEIPUpgradePrice", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.GetEIPUpgradePriceResponse)
    }
    
        
    /**
     * GetThroughputDailyBillingInfo - 
     *
     * See also: https://docs.ucloud.cn/api/u_net-api/u_net
     */
    getThroughputDailyBillingInfo(request?: models.GetThroughputDailyBillingInfoRequest): Promise<models.GetThroughputDailyBillingInfoResponse> {
        const args = {Action: "GetThroughputDailyBillingInfo", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.GetThroughputDailyBillingInfoResponse)
    }
    
        
    /**
     * GrantFirewall - 
     *
     * See also: https://docs.ucloud.cn/api/u_net-api/u_net
     */
    grantFirewall(request?: models.GrantFirewallRequest): Promise<models.GrantFirewallResponse> {
        const args = {Action: "GrantFirewall", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.GrantFirewallResponse)
    }
    
        
    /**
     * ModifyEIPBandwidth - 
     *
     * See also: https://docs.ucloud.cn/api/u_net-api/u_net
     */
    modifyEIPBandwidth(request?: models.ModifyEIPBandwidthRequest): Promise<models.ModifyEIPBandwidthResponse> {
        const args = {Action: "ModifyEIPBandwidth", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.ModifyEIPBandwidthResponse)
    }
    
        
    /**
     * ModifyEIPWeight - 
     *
     * See also: https://docs.ucloud.cn/api/u_net-api/u_net
     */
    modifyEIPWeight(request?: models.ModifyEIPWeightRequest): Promise<models.ModifyEIPWeightResponse> {
        const args = {Action: "ModifyEIPWeight", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.ModifyEIPWeightResponse)
    }
    
        
    /**
     * ReleaseEIP - 
     *
     * See also: https://docs.ucloud.cn/api/u_net-api/u_net
     */
    releaseEIP(request?: models.ReleaseEIPRequest): Promise<models.ReleaseEIPResponse> {
        const args = {Action: "ReleaseEIP", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.ReleaseEIPResponse)
    }
    
        
    /**
     * ReleaseShareBandwidth - 
     *
     * See also: https://docs.ucloud.cn/api/u_net-api/u_net
     */
    releaseShareBandwidth(request?: models.ReleaseShareBandwidthRequest): Promise<models.ReleaseShareBandwidthResponse> {
        const args = {Action: "ReleaseShareBandwidth", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.ReleaseShareBandwidthResponse)
    }
    
        
    /**
     * ResizeShareBandwidth - 
     *
     * See also: https://docs.ucloud.cn/api/u_net-api/u_net
     */
    resizeShareBandwidth(request?: models.ResizeShareBandwidthRequest): Promise<models.ResizeShareBandwidthResponse> {
        const args = {Action: "ResizeShareBandwidth", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.ResizeShareBandwidthResponse)
    }
    
        
    /**
     * SetEIPPayMode - 
     *
     * See also: https://docs.ucloud.cn/api/u_net-api/u_net
     */
    setEIPPayMode(request?: models.SetEIPPayModeRequest): Promise<models.SetEIPPayModeResponse> {
        const args = {Action: "SetEIPPayMode", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.SetEIPPayModeResponse)
    }
    
        
    /**
     * UnBindEIP - 
     *
     * See also: https://docs.ucloud.cn/api/u_net-api/u_net
     */
    unBindEIP(request?: models.UnBindEIPRequest): Promise<models.UnBindEIPResponse> {
        const args = {Action: "UnBindEIP", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.UnBindEIPResponse)
    }
    
        
    /**
     * UpdateEIPAttribute - 
     *
     * See also: https://docs.ucloud.cn/api/u_net-api/u_net
     */
    updateEIPAttribute(request?: models.UpdateEIPAttributeRequest): Promise<models.UpdateEIPAttributeResponse> {
        const args = {Action: "UpdateEIPAttribute", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.UpdateEIPAttributeResponse)
    }
    
        
    /**
     * UpdateFirewall - 
     *
     * See also: https://docs.ucloud.cn/api/u_net-api/u_net
     */
    updateFirewall(request?: models.UpdateFirewallRequest): Promise<models.UpdateFirewallResponse> {
        const args = {Action: "UpdateFirewall", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.UpdateFirewallResponse)
    }
    
        
    /**
     * UpdateFirewallAttribute - 
     *
     * See also: https://docs.ucloud.cn/api/u_net-api/u_net
     */
    updateFirewallAttribute(request?: models.UpdateFirewallAttributeRequest): Promise<models.UpdateFirewallAttributeResponse> {
        const args = {Action: "UpdateFirewallAttribute", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.UpdateFirewallAttributeResponse)
    }
    
}
