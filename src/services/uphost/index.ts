import Client from "../../core/client";
import Request from "../../core/request";
import {ConfigOptions} from "../../core/config";
import {CredentialOptions} from "../../core/credential";

import * as models from './models';

/**
 * This client is used to call actions of **UPHost** service
 */
export default class UphostClient extends Client {
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
     * CreatePHost - 
     *
     * See also: https://docs.ucloud.cn/api/up_host-api/up_host
     */
    createPHost(request?: models.CreatePHostRequest): Promise<models.CreatePHostResponse> {
        const args = {Action: "CreatePHost", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.CreatePHostResponse)
    }
    
        
    /**
     * CreatePHostImage - 
     *
     * See also: https://docs.ucloud.cn/api/up_host-api/up_host
     */
    createPHostImage(request?: models.CreatePHostImageRequest): Promise<models.CreatePHostImageResponse> {
        const args = {Action: "CreatePHostImage", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.CreatePHostImageResponse)
    }
    
        
    /**
     * DescribeBaremetalMachineType - 
     *
     * See also: https://docs.ucloud.cn/api/up_host-api/up_host
     */
    describeBaremetalMachineType(request?: models.DescribeBaremetalMachineTypeRequest): Promise<models.DescribeBaremetalMachineTypeResponse> {
        const args = {Action: "DescribeBaremetalMachineType", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeBaremetalMachineTypeResponse)
    }
    
        
    /**
     * DescribePHost - 
     *
     * See also: https://docs.ucloud.cn/api/up_host-api/up_host
     */
    describePHost(request?: models.DescribePHostRequest): Promise<models.DescribePHostResponse> {
        const args = {Action: "DescribePHost", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribePHostResponse)
    }
    
        
    /**
     * DescribePHostImage - 
     *
     * See also: https://docs.ucloud.cn/api/up_host-api/up_host
     */
    describePHostImage(request?: models.DescribePHostImageRequest): Promise<models.DescribePHostImageResponse> {
        const args = {Action: "DescribePHostImage", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribePHostImageResponse)
    }
    
        
    /**
     * DescribePHostMachineType - 
     *
     * See also: https://docs.ucloud.cn/api/up_host-api/up_host
     */
    describePHostMachineType(request?: models.DescribePHostMachineTypeRequest): Promise<models.DescribePHostMachineTypeResponse> {
        const args = {Action: "DescribePHostMachineType", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribePHostMachineTypeResponse)
    }
    
        
    /**
     * DescribePHostTags - 
     *
     * See also: https://docs.ucloud.cn/api/up_host-api/up_host
     */
    describePHostTags(request?: models.DescribePHostTagsRequest): Promise<models.DescribePHostTagsResponse> {
        const args = {Action: "DescribePHostTags", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribePHostTagsResponse)
    }
    
        
    /**
     * GetPHostDiskUpgradePrice - 
     *
     * See also: https://docs.ucloud.cn/api/up_host-api/up_host
     */
    getPHostDiskUpgradePrice(request?: models.GetPHostDiskUpgradePriceRequest): Promise<models.GetPHostDiskUpgradePriceResponse> {
        const args = {Action: "GetPHostDiskUpgradePrice", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.GetPHostDiskUpgradePriceResponse)
    }
    
        
    /**
     * GetPHostPrice - 
     *
     * See also: https://docs.ucloud.cn/api/up_host-api/up_host
     */
    getPHostPrice(request?: models.GetPHostPriceRequest): Promise<models.GetPHostPriceResponse> {
        const args = {Action: "GetPHostPrice", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.GetPHostPriceResponse)
    }
    
        
    /**
     * ModifyPHostImageInfo - 
     *
     * See also: https://docs.ucloud.cn/api/up_host-api/up_host
     */
    modifyPHostImageInfo(request?: models.ModifyPHostImageInfoRequest): Promise<models.ModifyPHostImageInfoResponse> {
        const args = {Action: "ModifyPHostImageInfo", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.ModifyPHostImageInfoResponse)
    }
    
        
    /**
     * ModifyPHostInfo - 
     *
     * See also: https://docs.ucloud.cn/api/up_host-api/up_host
     */
    modifyPHostInfo(request?: models.ModifyPHostInfoRequest): Promise<models.ModifyPHostInfoResponse> {
        const args = {Action: "ModifyPHostInfo", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.ModifyPHostInfoResponse)
    }
    
        
    /**
     * PoweroffPHost - 
     *
     * See also: https://docs.ucloud.cn/api/up_host-api/up_host
     */
    poweroffPHost(request?: models.PoweroffPHostRequest): Promise<models.PoweroffPHostResponse> {
        const args = {Action: "PoweroffPHost", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.PoweroffPHostResponse)
    }
    
        
    /**
     * RebootPHost - 
     *
     * See also: https://docs.ucloud.cn/api/up_host-api/up_host
     */
    rebootPHost(request?: models.RebootPHostRequest): Promise<models.RebootPHostResponse> {
        const args = {Action: "RebootPHost", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.RebootPHostResponse)
    }
    
        
    /**
     * ReinstallPHost - 
     *
     * See also: https://docs.ucloud.cn/api/up_host-api/up_host
     */
    reinstallPHost(request?: models.ReinstallPHostRequest): Promise<models.ReinstallPHostResponse> {
        const args = {Action: "ReinstallPHost", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.ReinstallPHostResponse)
    }
    
        
    /**
     * ResetPHostPassword - 
     *
     * See also: https://docs.ucloud.cn/api/up_host-api/up_host
     */
    resetPHostPassword(request?: models.ResetPHostPasswordRequest): Promise<models.ResetPHostPasswordResponse> {
        const args = {Action: "ResetPHostPassword", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.ResetPHostPasswordResponse)
    }
    
        
    /**
     * ResizePHostAttachedDisk - 
     *
     * See also: https://docs.ucloud.cn/api/up_host-api/up_host
     */
    resizePHostAttachedDisk(request?: models.ResizePHostAttachedDiskRequest): Promise<models.ResizePHostAttachedDiskResponse> {
        const args = {Action: "ResizePHostAttachedDisk", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.ResizePHostAttachedDiskResponse)
    }
    
        
    /**
     * StartPHost - 
     *
     * See also: https://docs.ucloud.cn/api/up_host-api/up_host
     */
    startPHost(request?: models.StartPHostRequest): Promise<models.StartPHostResponse> {
        const args = {Action: "StartPHost", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.StartPHostResponse)
    }
    
        
    /**
     * StopPHost - 
     *
     * See also: https://docs.ucloud.cn/api/up_host-api/up_host
     */
    stopPHost(request?: models.StopPHostRequest): Promise<models.StopPHostResponse> {
        const args = {Action: "StopPHost", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.StopPHostResponse)
    }
    
        
    /**
     * TerminatePHost - 
     *
     * See also: https://docs.ucloud.cn/api/up_host-api/up_host
     */
    terminatePHost(request?: models.TerminatePHostRequest): Promise<models.TerminatePHostResponse> {
        const args = {Action: "TerminatePHost", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.TerminatePHostResponse)
    }
    
        
    /**
     * TerminatePHostImage - 
     *
     * See also: https://docs.ucloud.cn/api/up_host-api/up_host
     */
    terminatePHostImage(request?: models.TerminatePHostImageRequest): Promise<models.TerminatePHostImageResponse> {
        const args = {Action: "TerminatePHostImage", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.TerminatePHostImageResponse)
    }
    
}
