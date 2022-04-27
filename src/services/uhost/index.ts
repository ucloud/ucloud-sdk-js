import Client from "../../core/client";
import Request from "../../core/request";
import {ConfigOptions} from "../../core/config";
import {CredentialOptions} from "../../core/credential";

import * as models from './models';

/**
 * This client is used to call actions of **UHost** service
 */
export default class UhostClient extends Client {
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
     * CopyCustomImage - 
     *
     * See also: https://docs.ucloud.cn/api/u_host-api/u_host
     */
    copyCustomImage(request?: models.CopyCustomImageRequest): Promise<models.CopyCustomImageResponse> {
        const args = {Action: "CopyCustomImage", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.CopyCustomImageResponse)
    }
    
        
    /**
     * CreateCustomImage - 
     *
     * See also: https://docs.ucloud.cn/api/u_host-api/u_host
     */
    createCustomImage(request?: models.CreateCustomImageRequest): Promise<models.CreateCustomImageResponse> {
        const args = {Action: "CreateCustomImage", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.CreateCustomImageResponse)
    }
    
        
    /**
     * CreateIsolationGroup - 
     *
     * See also: https://docs.ucloud.cn/api/u_host-api/u_host
     */
    createIsolationGroup(request?: models.CreateIsolationGroupRequest): Promise<models.CreateIsolationGroupResponse> {
        const args = {Action: "CreateIsolationGroup", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.CreateIsolationGroupResponse)
    }
    
        
    /**
     * CreateUHostInstance - 
     *
     * See also: https://docs.ucloud.cn/api/u_host-api/u_host
     */
    createUHostInstance(request?: models.CreateUHostInstanceRequest): Promise<models.CreateUHostInstanceResponse> {
        const args = {Action: "CreateUHostInstance", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.CreateUHostInstanceResponse)
    }
    
        
    /**
     * CreateUHostKeyPair - 
     *
     * See also: https://docs.ucloud.cn/api/u_host-api/u_host
     */
    createUHostKeyPair(request?: models.CreateUHostKeyPairRequest): Promise<models.CreateUHostKeyPairResponse> {
        const args = {Action: "CreateUHostKeyPair", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.CreateUHostKeyPairResponse)
    }
    
        
    /**
     * DeleteIsolationGroup - 
     *
     * See also: https://docs.ucloud.cn/api/u_host-api/u_host
     */
    deleteIsolationGroup(request?: models.DeleteIsolationGroupRequest): Promise<models.DeleteIsolationGroupResponse> {
        const args = {Action: "DeleteIsolationGroup", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DeleteIsolationGroupResponse)
    }
    
        
    /**
     * DeleteUHostKeyPairs - 
     *
     * See also: https://docs.ucloud.cn/api/u_host-api/u_host
     */
    deleteUHostKeyPairs(request?: models.DeleteUHostKeyPairsRequest): Promise<models.DeleteUHostKeyPairsResponse> {
        const args = {Action: "DeleteUHostKeyPairs", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DeleteUHostKeyPairsResponse)
    }
    
        
    /**
     * DescribeImage - 
     *
     * See also: https://docs.ucloud.cn/api/u_host-api/u_host
     */
    describeImage(request?: models.DescribeImageRequest): Promise<models.DescribeImageResponse> {
        const args = {Action: "DescribeImage", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeImageResponse)
    }
    
        
    /**
     * DescribeIsolationGroup - 
     *
     * See also: https://docs.ucloud.cn/api/u_host-api/u_host
     */
    describeIsolationGroup(request?: models.DescribeIsolationGroupRequest): Promise<models.DescribeIsolationGroupResponse> {
        const args = {Action: "DescribeIsolationGroup", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeIsolationGroupResponse)
    }
    
        
    /**
     * DescribeUHostInstance - 
     *
     * See also: https://docs.ucloud.cn/api/u_host-api/u_host
     */
    describeUHostInstance(request?: models.DescribeUHostInstanceRequest): Promise<models.DescribeUHostInstanceResponse> {
        const args = {Action: "DescribeUHostInstance", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeUHostInstanceResponse)
    }
    
        
    /**
     * DescribeUHostKeyPairs - 
     *
     * See also: https://docs.ucloud.cn/api/u_host-api/u_host
     */
    describeUHostKeyPairs(request?: models.DescribeUHostKeyPairsRequest): Promise<models.DescribeUHostKeyPairsResponse> {
        const args = {Action: "DescribeUHostKeyPairs", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeUHostKeyPairsResponse)
    }
    
        
    /**
     * DescribeUHostTags - 
     *
     * See also: https://docs.ucloud.cn/api/u_host-api/u_host
     */
    describeUHostTags(request?: models.DescribeUHostTagsRequest): Promise<models.DescribeUHostTagsResponse> {
        const args = {Action: "DescribeUHostTags", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeUHostTagsResponse)
    }
    
        
    /**
     * GetAttachedDiskUpgradePrice - 
     *
     * See also: https://docs.ucloud.cn/api/u_host-api/u_host
     */
    getAttachedDiskUpgradePrice(request?: models.GetAttachedDiskUpgradePriceRequest): Promise<models.GetAttachedDiskUpgradePriceResponse> {
        const args = {Action: "GetAttachedDiskUpgradePrice", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.GetAttachedDiskUpgradePriceResponse)
    }
    
        
    /**
     * GetUHostInstancePrice - 
     *
     * See also: https://docs.ucloud.cn/api/u_host-api/u_host
     */
    getUHostInstancePrice(request?: models.GetUHostInstancePriceRequest): Promise<models.GetUHostInstancePriceResponse> {
        const args = {Action: "GetUHostInstancePrice", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.GetUHostInstancePriceResponse)
    }
    
        
    /**
     * GetUHostInstanceVncInfo - 
     *
     * See also: https://docs.ucloud.cn/api/u_host-api/u_host
     */
    getUHostInstanceVncInfo(request?: models.GetUHostInstanceVncInfoRequest): Promise<models.GetUHostInstanceVncInfoResponse> {
        const args = {Action: "GetUHostInstanceVncInfo", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.GetUHostInstanceVncInfoResponse)
    }
    
        
    /**
     * GetUHostUpgradePrice - 
     *
     * See also: https://docs.ucloud.cn/api/u_host-api/u_host
     */
    getUHostUpgradePrice(request?: models.GetUHostUpgradePriceRequest): Promise<models.GetUHostUpgradePriceResponse> {
        const args = {Action: "GetUHostUpgradePrice", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.GetUHostUpgradePriceResponse)
    }
    
        
    /**
     * ImportCustomImage - 
     *
     * See also: https://docs.ucloud.cn/api/u_host-api/u_host
     */
    importCustomImage(request?: models.ImportCustomImageRequest): Promise<models.ImportCustomImageResponse> {
        const args = {Action: "ImportCustomImage", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.ImportCustomImageResponse)
    }
    
        
    /**
     * ImportUHostKeyPairs - 
     *
     * See also: https://docs.ucloud.cn/api/u_host-api/u_host
     */
    importUHostKeyPairs(request?: models.ImportUHostKeyPairsRequest): Promise<models.ImportUHostKeyPairsResponse> {
        const args = {Action: "ImportUHostKeyPairs", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.ImportUHostKeyPairsResponse)
    }
    
        
    /**
     * LeaveIsolationGroup - 
     *
     * See also: https://docs.ucloud.cn/api/u_host-api/u_host
     */
    leaveIsolationGroup(request?: models.LeaveIsolationGroupRequest): Promise<models.LeaveIsolationGroupResponse> {
        const args = {Action: "LeaveIsolationGroup", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.LeaveIsolationGroupResponse)
    }
    
        
    /**
     * ModifyUHostIP - 
     *
     * See also: https://docs.ucloud.cn/api/u_host-api/u_host
     */
    modifyUHostIP(request?: models.ModifyUHostIPRequest): Promise<models.ModifyUHostIPResponse> {
        const args = {Action: "ModifyUHostIP", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.ModifyUHostIPResponse)
    }
    
        
    /**
     * ModifyUHostInstanceName - 
     *
     * See also: https://docs.ucloud.cn/api/u_host-api/u_host
     */
    modifyUHostInstanceName(request?: models.ModifyUHostInstanceNameRequest): Promise<models.ModifyUHostInstanceNameResponse> {
        const args = {Action: "ModifyUHostInstanceName", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.ModifyUHostInstanceNameResponse)
    }
    
        
    /**
     * ModifyUHostInstanceRemark - 
     *
     * See also: https://docs.ucloud.cn/api/u_host-api/u_host
     */
    modifyUHostInstanceRemark(request?: models.ModifyUHostInstanceRemarkRequest): Promise<models.ModifyUHostInstanceRemarkResponse> {
        const args = {Action: "ModifyUHostInstanceRemark", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.ModifyUHostInstanceRemarkResponse)
    }
    
        
    /**
     * ModifyUHostInstanceTag - 
     *
     * See also: https://docs.ucloud.cn/api/u_host-api/u_host
     */
    modifyUHostInstanceTag(request?: models.ModifyUHostInstanceTagRequest): Promise<models.ModifyUHostInstanceTagResponse> {
        const args = {Action: "ModifyUHostInstanceTag", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.ModifyUHostInstanceTagResponse)
    }
    
        
    /**
     * PoweroffUHostInstance - 
     *
     * See also: https://docs.ucloud.cn/api/u_host-api/u_host
     */
    poweroffUHostInstance(request?: models.PoweroffUHostInstanceRequest): Promise<models.PoweroffUHostInstanceResponse> {
        const args = {Action: "PoweroffUHostInstance", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.PoweroffUHostInstanceResponse)
    }
    
        
    /**
     * RebootUHostInstance - 
     *
     * See also: https://docs.ucloud.cn/api/u_host-api/u_host
     */
    rebootUHostInstance(request?: models.RebootUHostInstanceRequest): Promise<models.RebootUHostInstanceResponse> {
        const args = {Action: "RebootUHostInstance", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.RebootUHostInstanceResponse)
    }
    
        
    /**
     * ReinstallUHostInstance - 
     *
     * See also: https://docs.ucloud.cn/api/u_host-api/u_host
     */
    reinstallUHostInstance(request?: models.ReinstallUHostInstanceRequest): Promise<models.ReinstallUHostInstanceResponse> {
        const args = {Action: "ReinstallUHostInstance", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.ReinstallUHostInstanceResponse)
    }
    
        
    /**
     * ResetUHostInstancePassword - 
     *
     * See also: https://docs.ucloud.cn/api/u_host-api/u_host
     */
    resetUHostInstancePassword(request?: models.ResetUHostInstancePasswordRequest): Promise<models.ResetUHostInstancePasswordResponse> {
        const args = {Action: "ResetUHostInstancePassword", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.ResetUHostInstancePasswordResponse)
    }
    
        
    /**
     * ResizeAttachedDisk - 
     *
     * See also: https://docs.ucloud.cn/api/u_host-api/u_host
     */
    resizeAttachedDisk(request?: models.ResizeAttachedDiskRequest): Promise<models.ResizeAttachedDiskResponse> {
        const args = {Action: "ResizeAttachedDisk", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.ResizeAttachedDiskResponse)
    }
    
        
    /**
     * ResizeUHostInstance - 
     *
     * See also: https://docs.ucloud.cn/api/u_host-api/u_host
     */
    resizeUHostInstance(request?: models.ResizeUHostInstanceRequest): Promise<models.ResizeUHostInstanceResponse> {
        const args = {Action: "ResizeUHostInstance", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.ResizeUHostInstanceResponse)
    }
    
        
    /**
     * StartUHostInstance - 
     *
     * See also: https://docs.ucloud.cn/api/u_host-api/u_host
     */
    startUHostInstance(request?: models.StartUHostInstanceRequest): Promise<models.StartUHostInstanceResponse> {
        const args = {Action: "StartUHostInstance", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.StartUHostInstanceResponse)
    }
    
        
    /**
     * StopUHostInstance - 
     *
     * See also: https://docs.ucloud.cn/api/u_host-api/u_host
     */
    stopUHostInstance(request?: models.StopUHostInstanceRequest): Promise<models.StopUHostInstanceResponse> {
        const args = {Action: "StopUHostInstance", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.StopUHostInstanceResponse)
    }
    
        
    /**
     * TerminateCustomImage - 
     *
     * See also: https://docs.ucloud.cn/api/u_host-api/u_host
     */
    terminateCustomImage(request?: models.TerminateCustomImageRequest): Promise<models.TerminateCustomImageResponse> {
        const args = {Action: "TerminateCustomImage", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.TerminateCustomImageResponse)
    }
    
        
    /**
     * TerminateUHostInstance - 
     *
     * See also: https://docs.ucloud.cn/api/u_host-api/u_host
     */
    terminateUHostInstance(request?: models.TerminateUHostInstanceRequest): Promise<models.TerminateUHostInstanceResponse> {
        const args = {Action: "TerminateUHostInstance", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.TerminateUHostInstanceResponse)
    }
    
        
    /**
     * UpgradeToArkUHostInstance - 
     *
     * See also: https://docs.ucloud.cn/api/u_host-api/u_host
     */
    upgradeToArkUHostInstance(request?: models.UpgradeToArkUHostInstanceRequest): Promise<models.UpgradeToArkUHostInstanceResponse> {
        const args = {Action: "UpgradeToArkUHostInstance", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.UpgradeToArkUHostInstanceResponse)
    }
    
}
