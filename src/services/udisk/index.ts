import Client from "../../core/client";
import Request from "../../core/request";
import {ConfigOptions} from "../../core/config";
import {CredentialOptions} from "../../core/credential";

import * as models from './models';

/**
 * This client is used to call actions of **UDisk** service
 */
export default class UdiskClient extends Client {
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
     * AttachUDisk - 
     *
     * See also: https://docs.ucloud.cn/api/u_disk-api/u_disk
     */
    attachUDisk(request?: models.AttachUDiskRequest): Promise<models.AttachUDiskResponse> {
        const args = {Action: "AttachUDisk", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.AttachUDiskResponse)
    }
    
        
    /**
     * CloneUDisk - 
     *
     * See also: https://docs.ucloud.cn/api/u_disk-api/u_disk
     */
    cloneUDisk(request?: models.CloneUDiskRequest): Promise<models.CloneUDiskResponse> {
        const args = {Action: "CloneUDisk", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.CloneUDiskResponse)
    }
    
        
    /**
     * CloneUDiskSnapshot - 
     *
     * See also: https://docs.ucloud.cn/api/u_disk-api/u_disk
     */
    cloneUDiskSnapshot(request?: models.CloneUDiskSnapshotRequest): Promise<models.CloneUDiskSnapshotResponse> {
        const args = {Action: "CloneUDiskSnapshot", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.CloneUDiskSnapshotResponse)
    }
    
        
    /**
     * CloneUDiskUDataArk - 
     *
     * See also: https://docs.ucloud.cn/api/u_disk-api/u_disk
     */
    cloneUDiskUDataArk(request?: models.CloneUDiskUDataArkRequest): Promise<models.CloneUDiskUDataArkResponse> {
        const args = {Action: "CloneUDiskUDataArk", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.CloneUDiskUDataArkResponse)
    }
    
        
    /**
     * CreateAttachUDisk - 
     *
     * See also: https://docs.ucloud.cn/api/u_disk-api/u_disk
     */
    createAttachUDisk(request?: models.CreateAttachUDiskRequest): Promise<models.CreateAttachUDiskResponse> {
        const args = {Action: "CreateAttachUDisk", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.CreateAttachUDiskResponse)
    }
    
        
    /**
     * CreateUDisk - 
     *
     * See also: https://docs.ucloud.cn/api/u_disk-api/u_disk
     */
    createUDisk(request?: models.CreateUDiskRequest): Promise<models.CreateUDiskResponse> {
        const args = {Action: "CreateUDisk", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.CreateUDiskResponse)
    }
    
        
    /**
     * CreateUDiskSnapshot - 
     *
     * See also: https://docs.ucloud.cn/api/u_disk-api/u_disk
     */
    createUDiskSnapshot(request?: models.CreateUDiskSnapshotRequest): Promise<models.CreateUDiskSnapshotResponse> {
        const args = {Action: "CreateUDiskSnapshot", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.CreateUDiskSnapshotResponse)
    }
    
        
    /**
     * DeleteUDisk - 
     *
     * See also: https://docs.ucloud.cn/api/u_disk-api/u_disk
     */
    deleteUDisk(request?: models.DeleteUDiskRequest): Promise<models.DeleteUDiskResponse> {
        const args = {Action: "DeleteUDisk", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DeleteUDiskResponse)
    }
    
        
    /**
     * DeleteUDiskSnapshot - 
     *
     * See also: https://docs.ucloud.cn/api/u_disk-api/u_disk
     */
    deleteUDiskSnapshot(request?: models.DeleteUDiskSnapshotRequest): Promise<models.DeleteUDiskSnapshotResponse> {
        const args = {Action: "DeleteUDiskSnapshot", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DeleteUDiskSnapshotResponse)
    }
    
        
    /**
     * DescribeRecycleUDisk - 
     *
     * See also: https://docs.ucloud.cn/api/u_disk-api/u_disk
     */
    describeRecycleUDisk(request?: models.DescribeRecycleUDiskRequest): Promise<models.DescribeRecycleUDiskResponse> {
        const args = {Action: "DescribeRecycleUDisk", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeRecycleUDiskResponse)
    }
    
        
    /**
     * DescribeUDisk - 
     *
     * See also: https://docs.ucloud.cn/api/u_disk-api/u_disk
     */
    describeUDisk(request?: models.DescribeUDiskRequest): Promise<models.DescribeUDiskResponse> {
        const args = {Action: "DescribeUDisk", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeUDiskResponse)
    }
    
        
    /**
     * DescribeUDiskPrice - 
     *
     * See also: https://docs.ucloud.cn/api/u_disk-api/u_disk
     */
    describeUDiskPrice(request?: models.DescribeUDiskPriceRequest): Promise<models.DescribeUDiskPriceResponse> {
        const args = {Action: "DescribeUDiskPrice", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeUDiskPriceResponse)
    }
    
        
    /**
     * DescribeUDiskSnapshot - 
     *
     * See also: https://docs.ucloud.cn/api/u_disk-api/u_disk
     */
    describeUDiskSnapshot(request?: models.DescribeUDiskSnapshotRequest): Promise<models.DescribeUDiskSnapshotResponse> {
        const args = {Action: "DescribeUDiskSnapshot", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeUDiskSnapshotResponse)
    }
    
        
    /**
     * DescribeUDiskUpgradePrice - 
     *
     * See also: https://docs.ucloud.cn/api/u_disk-api/u_disk
     */
    describeUDiskUpgradePrice(request?: models.DescribeUDiskUpgradePriceRequest): Promise<models.DescribeUDiskUpgradePriceResponse> {
        const args = {Action: "DescribeUDiskUpgradePrice", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeUDiskUpgradePriceResponse)
    }
    
        
    /**
     * DetachUDisk - 
     *
     * See also: https://docs.ucloud.cn/api/u_disk-api/u_disk
     */
    detachUDisk(request?: models.DetachUDiskRequest): Promise<models.DetachUDiskResponse> {
        const args = {Action: "DetachUDisk", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DetachUDiskResponse)
    }
    
        
    /**
     * RecoverUDisk - 
     *
     * See also: https://docs.ucloud.cn/api/u_disk-api/u_disk
     */
    recoverUDisk(request?: models.RecoverUDiskRequest): Promise<models.RecoverUDiskResponse> {
        const args = {Action: "RecoverUDisk", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.RecoverUDiskResponse)
    }
    
        
    /**
     * RenameUDisk - 
     *
     * See also: https://docs.ucloud.cn/api/u_disk-api/u_disk
     */
    renameUDisk(request?: models.RenameUDiskRequest): Promise<models.RenameUDiskResponse> {
        const args = {Action: "RenameUDisk", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.RenameUDiskResponse)
    }
    
        
    /**
     * ResizeUDisk - 
     *
     * See also: https://docs.ucloud.cn/api/u_disk-api/u_disk
     */
    resizeUDisk(request?: models.ResizeUDiskRequest): Promise<models.ResizeUDiskResponse> {
        const args = {Action: "ResizeUDisk", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.ResizeUDiskResponse)
    }
    
        
    /**
     * RestoreUDisk - 
     *
     * See also: https://docs.ucloud.cn/api/u_disk-api/u_disk
     */
    restoreUDisk(request?: models.RestoreUDiskRequest): Promise<models.RestoreUDiskResponse> {
        const args = {Action: "RestoreUDisk", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.RestoreUDiskResponse)
    }
    
        
    /**
     * SetUDiskUDataArkMode - 
     *
     * See also: https://docs.ucloud.cn/api/u_disk-api/u_disk
     */
    setUDiskUDataArkMode(request?: models.SetUDiskUDataArkModeRequest): Promise<models.SetUDiskUDataArkModeResponse> {
        const args = {Action: "SetUDiskUDataArkMode", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.SetUDiskUDataArkModeResponse)
    }
    
}
