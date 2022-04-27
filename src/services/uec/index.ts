import Client from "../../core/client";
import Request from "../../core/request";
import {ConfigOptions} from "../../core/config";
import {CredentialOptions} from "../../core/credential";

import * as models from './models';

/**
 * This client is used to call actions of **UEC** service
 */
export default class UecClient extends Client {
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
     * BindUEcFirewall - 
     *
     * See also: https://docs.ucloud.cn/api/uec-api/uec
     */
    bindUEcFirewall(request?: models.BindUEcFirewallRequest): Promise<models.BindUEcFirewallResponse> {
        const args = {Action: "BindUEcFirewall", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.BindUEcFirewallResponse)
    }
    
        
    /**
     * CreateUEcCustomImage - 
     *
     * See also: https://docs.ucloud.cn/api/uec-api/uec
     */
    createUEcCustomImage(request?: models.CreateUEcCustomImageRequest): Promise<models.CreateUEcCustomImageResponse> {
        const args = {Action: "CreateUEcCustomImage", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.CreateUEcCustomImageResponse)
    }
    
        
    /**
     * CreateUEcFirewall - 
     *
     * See also: https://docs.ucloud.cn/api/uec-api/uec
     */
    createUEcFirewall(request?: models.CreateUEcFirewallRequest): Promise<models.CreateUEcFirewallResponse> {
        const args = {Action: "CreateUEcFirewall", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.CreateUEcFirewallResponse)
    }
    
        
    /**
     * CreateUEcHolder - 
     *
     * See also: https://docs.ucloud.cn/api/uec-api/uec
     */
    createUEcHolder(request?: models.CreateUEcHolderRequest): Promise<models.CreateUEcHolderResponse> {
        const args = {Action: "CreateUEcHolder", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.CreateUEcHolderResponse)
    }
    
        
    /**
     * CreateUEcSubnet - 
     *
     * See also: https://docs.ucloud.cn/api/uec-api/uec
     */
    createUEcSubnet(request?: models.CreateUEcSubnetRequest): Promise<models.CreateUEcSubnetResponse> {
        const args = {Action: "CreateUEcSubnet", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.CreateUEcSubnetResponse)
    }
    
        
    /**
     * CreateUEcVHost - 
     *
     * See also: https://docs.ucloud.cn/api/uec-api/uec
     */
    createUEcVHost(request?: models.CreateUEcVHostRequest): Promise<models.CreateUEcVHostResponse> {
        const args = {Action: "CreateUEcVHost", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.CreateUEcVHostResponse)
    }
    
        
    /**
     * DeleteUEcCustomImage - 
     *
     * See also: https://docs.ucloud.cn/api/uec-api/uec
     */
    deleteUEcCustomImage(request?: models.DeleteUEcCustomImageRequest): Promise<models.DeleteUEcCustomImageResponse> {
        const args = {Action: "DeleteUEcCustomImage", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DeleteUEcCustomImageResponse)
    }
    
        
    /**
     * DeleteUEcHolder - 
     *
     * See also: https://docs.ucloud.cn/api/uec-api/uec
     */
    deleteUEcHolder(request?: models.DeleteUEcHolderRequest): Promise<models.DeleteUEcHolderResponse> {
        const args = {Action: "DeleteUEcHolder", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DeleteUEcHolderResponse)
    }
    
        
    /**
     * DeleteUEcSubnet - 
     *
     * See also: https://docs.ucloud.cn/api/uec-api/uec
     */
    deleteUEcSubnet(request?: models.DeleteUEcSubnetRequest): Promise<models.DeleteUEcSubnetResponse> {
        const args = {Action: "DeleteUEcSubnet", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DeleteUEcSubnetResponse)
    }
    
        
    /**
     * DeleteUEcVHost - 
     *
     * See also: https://docs.ucloud.cn/api/uec-api/uec
     */
    deleteUEcVHost(request?: models.DeleteUEcVHostRequest): Promise<models.DeleteUEcVHostResponse> {
        const args = {Action: "DeleteUEcVHost", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DeleteUEcVHostResponse)
    }
    
        
    /**
     * DescribeUEcFirewall - 
     *
     * See also: https://docs.ucloud.cn/api/uec-api/uec
     */
    describeUEcFirewall(request?: models.DescribeUEcFirewallRequest): Promise<models.DescribeUEcFirewallResponse> {
        const args = {Action: "DescribeUEcFirewall", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeUEcFirewallResponse)
    }
    
        
    /**
     * DescribeUEcFirewallResource - 
     *
     * See also: https://docs.ucloud.cn/api/uec-api/uec
     */
    describeUEcFirewallResource(request?: models.DescribeUEcFirewallResourceRequest): Promise<models.DescribeUEcFirewallResourceResponse> {
        const args = {Action: "DescribeUEcFirewallResource", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeUEcFirewallResourceResponse)
    }
    
        
    /**
     * DescribeUEcHolder - 
     *
     * See also: https://docs.ucloud.cn/api/uec-api/uec
     */
    describeUEcHolder(request?: models.DescribeUEcHolderRequest): Promise<models.DescribeUEcHolderResponse> {
        const args = {Action: "DescribeUEcHolder", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeUEcHolderResponse)
    }
    
        
    /**
     * DescribeUEcHolderIDC - 
     *
     * See also: https://docs.ucloud.cn/api/uec-api/uec
     */
    describeUEcHolderIDC(request?: models.DescribeUEcHolderIDCRequest): Promise<models.DescribeUEcHolderIDCResponse> {
        const args = {Action: "DescribeUEcHolderIDC", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeUEcHolderIDCResponse)
    }
    
        
    /**
     * DescribeUEcIDC - 
     *
     * See also: https://docs.ucloud.cn/api/uec-api/uec
     */
    describeUEcIDC(request?: models.DescribeUEcIDCRequest): Promise<models.DescribeUEcIDCResponse> {
        const args = {Action: "DescribeUEcIDC", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeUEcIDCResponse)
    }
    
        
    /**
     * DescribeUEcSubnet - 
     *
     * See also: https://docs.ucloud.cn/api/uec-api/uec
     */
    describeUEcSubnet(request?: models.DescribeUEcSubnetRequest): Promise<models.DescribeUEcSubnetResponse> {
        const args = {Action: "DescribeUEcSubnet", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeUEcSubnetResponse)
    }
    
        
    /**
     * DescribeUEcVHost - 
     *
     * See also: https://docs.ucloud.cn/api/uec-api/uec
     */
    describeUEcVHost(request?: models.DescribeUEcVHostRequest): Promise<models.DescribeUEcVHostResponse> {
        const args = {Action: "DescribeUEcVHost", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeUEcVHostResponse)
    }
    
        
    /**
     * DescribeUEcVHostISP - 
     *
     * See also: https://docs.ucloud.cn/api/uec-api/uec
     */
    describeUEcVHostISP(request?: models.DescribeUEcVHostISPRequest): Promise<models.DescribeUEcVHostISPResponse> {
        const args = {Action: "DescribeUEcVHostISP", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeUEcVHostISPResponse)
    }
    
        
    /**
     * GetUEcHolderLog - 
     *
     * See also: https://docs.ucloud.cn/api/uec-api/uec
     */
    getUEcHolderLog(request?: models.GetUEcHolderLogRequest): Promise<models.GetUEcHolderLogResponse> {
        const args = {Action: "GetUEcHolderLog", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.GetUEcHolderLogResponse)
    }
    
        
    /**
     * GetUEcHolderMetrics - 
     *
     * See also: https://docs.ucloud.cn/api/uec-api/uec
     */
    getUEcHolderMetrics(request?: models.GetUEcHolderMetricsRequest): Promise<models.GetUEcHolderMetricsResponse> {
        const args = {Action: "GetUEcHolderMetrics", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.GetUEcHolderMetricsResponse)
    }
    
        
    /**
     * GetUEcIDCCutInfo - 
     *
     * See also: https://docs.ucloud.cn/api/uec-api/uec
     */
    getUEcIDCCutInfo(request?: models.GetUEcIDCCutInfoRequest): Promise<models.GetUEcIDCCutInfoResponse> {
        const args = {Action: "GetUEcIDCCutInfo", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.GetUEcIDCCutInfoResponse)
    }
    
        
    /**
     * GetUEcIDCVHostData - 
     *
     * See also: https://docs.ucloud.cn/api/uec-api/uec
     */
    getUEcIDCVHostData(request?: models.GetUEcIDCVHostDataRequest): Promise<models.GetUEcIDCVHostDataResponse> {
        const args = {Action: "GetUEcIDCVHostData", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.GetUEcIDCVHostDataResponse)
    }
    
        
    /**
     * GetUEcImage - 
     *
     * See also: https://docs.ucloud.cn/api/uec-api/uec
     */
    getUEcImage(request?: models.GetUEcImageRequest): Promise<models.GetUEcImageResponse> {
        const args = {Action: "GetUEcImage", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.GetUEcImageResponse)
    }
    
        
    /**
     * GetUEcPodPrice - 
     *
     * See also: https://docs.ucloud.cn/api/uec-api/uec
     */
    getUEcPodPrice(request?: models.GetUEcPodPriceRequest): Promise<models.GetUEcPodPriceResponse> {
        const args = {Action: "GetUEcPodPrice", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.GetUEcPodPriceResponse)
    }
    
        
    /**
     * GetUEcUpgradePrice - 
     *
     * See also: https://docs.ucloud.cn/api/uec-api/uec
     */
    getUEcUpgradePrice(request?: models.GetUEcUpgradePriceRequest): Promise<models.GetUEcUpgradePriceResponse> {
        const args = {Action: "GetUEcUpgradePrice", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.GetUEcUpgradePriceResponse)
    }
    
        
    /**
     * GetUEcVHostData - 
     *
     * See also: https://docs.ucloud.cn/api/uec-api/uec
     */
    getUEcVHostData(request?: models.GetUEcVHostDataRequest): Promise<models.GetUEcVHostDataResponse> {
        const args = {Action: "GetUEcVHostData", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.GetUEcVHostDataResponse)
    }
    
        
    /**
     * GetUEcVHostPrice - 
     *
     * See also: https://docs.ucloud.cn/api/uec-api/uec
     */
    getUEcVHostPrice(request?: models.GetUEcVHostPriceRequest): Promise<models.GetUEcVHostPriceResponse> {
        const args = {Action: "GetUEcVHostPrice", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.GetUEcVHostPriceResponse)
    }
    
        
    /**
     * ImportUEcCustomImage - 
     *
     * See also: https://docs.ucloud.cn/api/uec-api/uec
     */
    importUEcCustomImage(request?: models.ImportUEcCustomImageRequest): Promise<models.ImportUEcCustomImageResponse> {
        const args = {Action: "ImportUEcCustomImage", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.ImportUEcCustomImageResponse)
    }
    
        
    /**
     * LoginUEcDocker - 
     *
     * See also: https://docs.ucloud.cn/api/uec-api/uec
     */
    loginUEcDocker(request?: models.LoginUEcDockerRequest): Promise<models.LoginUEcDockerResponse> {
        const args = {Action: "LoginUEcDocker", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.LoginUEcDockerResponse)
    }
    
        
    /**
     * ModifyUEcBandwidth - 
     *
     * See also: https://docs.ucloud.cn/api/uec-api/uec
     */
    modifyUEcBandwidth(request?: models.ModifyUEcBandwidthRequest): Promise<models.ModifyUEcBandwidthResponse> {
        const args = {Action: "ModifyUEcBandwidth", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.ModifyUEcBandwidthResponse)
    }
    
        
    /**
     * ModifyUEcHolderName - 
     *
     * See also: https://docs.ucloud.cn/api/uec-api/uec
     */
    modifyUEcHolderName(request?: models.ModifyUEcHolderNameRequest): Promise<models.ModifyUEcHolderNameResponse> {
        const args = {Action: "ModifyUEcHolderName", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.ModifyUEcHolderNameResponse)
    }
    
        
    /**
     * ModifyUEcImageName - 
     *
     * See also: https://docs.ucloud.cn/api/uec-api/uec
     */
    modifyUEcImageName(request?: models.ModifyUEcImageNameRequest): Promise<models.ModifyUEcImageNameResponse> {
        const args = {Action: "ModifyUEcImageName", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.ModifyUEcImageNameResponse)
    }
    
        
    /**
     * PoweroffUEcVHost - 
     *
     * See also: https://docs.ucloud.cn/api/uec-api/uec
     */
    poweroffUEcVHost(request?: models.PoweroffUEcVHostRequest): Promise<models.PoweroffUEcVHostResponse> {
        const args = {Action: "PoweroffUEcVHost", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.PoweroffUEcVHostResponse)
    }
    
        
    /**
     * ReinstallUEcVHost - 
     *
     * See also: https://docs.ucloud.cn/api/uec-api/uec
     */
    reinstallUEcVHost(request?: models.ReinstallUEcVHostRequest): Promise<models.ReinstallUEcVHostResponse> {
        const args = {Action: "ReinstallUEcVHost", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.ReinstallUEcVHostResponse)
    }
    
        
    /**
     * RestartUEcHolder - 
     *
     * See also: https://docs.ucloud.cn/api/uec-api/uec
     */
    restartUEcHolder(request?: models.RestartUEcHolderRequest): Promise<models.RestartUEcHolderResponse> {
        const args = {Action: "RestartUEcHolder", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.RestartUEcHolderResponse)
    }
    
        
    /**
     * RestartUEcVHost - 
     *
     * See also: https://docs.ucloud.cn/api/uec-api/uec
     */
    restartUEcVHost(request?: models.RestartUEcVHostRequest): Promise<models.RestartUEcVHostResponse> {
        const args = {Action: "RestartUEcVHost", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.RestartUEcVHostResponse)
    }
    
        
    /**
     * StartUEcVHost - 
     *
     * See also: https://docs.ucloud.cn/api/uec-api/uec
     */
    startUEcVHost(request?: models.StartUEcVHostRequest): Promise<models.StartUEcVHostResponse> {
        const args = {Action: "StartUEcVHost", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.StartUEcVHostResponse)
    }
    
        
    /**
     * StopUEcVHost - 
     *
     * See also: https://docs.ucloud.cn/api/uec-api/uec
     */
    stopUEcVHost(request?: models.StopUEcVHostRequest): Promise<models.StopUEcVHostResponse> {
        const args = {Action: "StopUEcVHost", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.StopUEcVHostResponse)
    }
    
        
    /**
     * UnBindUEcFirewall - 
     *
     * See also: https://docs.ucloud.cn/api/uec-api/uec
     */
    unBindUEcFirewall(request?: models.UnBindUEcFirewallRequest): Promise<models.UnBindUEcFirewallResponse> {
        const args = {Action: "UnBindUEcFirewall", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.UnBindUEcFirewallResponse)
    }
    
        
    /**
     * UpdateUEcFirewall - 
     *
     * See also: https://docs.ucloud.cn/api/uec-api/uec
     */
    updateUEcFirewall(request?: models.UpdateUEcFirewallRequest): Promise<models.UpdateUEcFirewallResponse> {
        const args = {Action: "UpdateUEcFirewall", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.UpdateUEcFirewallResponse)
    }
    
        
    /**
     * UpdateUEcFirewallAttribute - 
     *
     * See also: https://docs.ucloud.cn/api/uec-api/uec
     */
    updateUEcFirewallAttribute(request?: models.UpdateUEcFirewallAttributeRequest): Promise<models.UpdateUEcFirewallAttributeResponse> {
        const args = {Action: "UpdateUEcFirewallAttribute", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.UpdateUEcFirewallAttributeResponse)
    }
    
        
    /**
     * UpdateUEcSubnet - 
     *
     * See also: https://docs.ucloud.cn/api/uec-api/uec
     */
    updateUEcSubnet(request?: models.UpdateUEcSubnetRequest): Promise<models.UpdateUEcSubnetResponse> {
        const args = {Action: "UpdateUEcSubnet", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.UpdateUEcSubnetResponse)
    }
    
}
