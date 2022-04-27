import Client from "../../core/client";
import Request from "../../core/request";
import {ConfigOptions} from "../../core/config";
import {CredentialOptions} from "../../core/credential";

import * as models from './models';

/**
 * This client is used to call actions of **UMem** service
 */
export default class UmemClient extends Client {
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
     * CheckUDredisSpaceAllowance - 
     *
     * See also: https://docs.ucloud.cn/api/u_mem-api/u_mem
     */
    checkUDredisSpaceAllowance(request?: models.CheckUDredisSpaceAllowanceRequest): Promise<models.CheckUDredisSpaceAllowanceResponse> {
        const args = {Action: "CheckUDredisSpaceAllowance", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.CheckUDredisSpaceAllowanceResponse)
    }
    
        
    /**
     * CheckURedisAllowance - 
     *
     * See also: https://docs.ucloud.cn/api/u_mem-api/u_mem
     */
    checkURedisAllowance(request?: models.CheckURedisAllowanceRequest): Promise<models.CheckURedisAllowanceResponse> {
        const args = {Action: "CheckURedisAllowance", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.CheckURedisAllowanceResponse)
    }
    
        
    /**
     * CreateUMemBackup - 
     *
     * See also: https://docs.ucloud.cn/api/u_mem-api/u_mem
     */
    createUMemBackup(request?: models.CreateUMemBackupRequest): Promise<models.CreateUMemBackupResponse> {
        const args = {Action: "CreateUMemBackup", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.CreateUMemBackupResponse)
    }
    
        
    /**
     * CreateUMemSpace - 
     *
     * See also: https://docs.ucloud.cn/api/u_mem-api/u_mem
     */
    createUMemSpace(request?: models.CreateUMemSpaceRequest): Promise<models.CreateUMemSpaceResponse> {
        const args = {Action: "CreateUMemSpace", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.CreateUMemSpaceResponse)
    }
    
        
    /**
     * CreateUMemcacheGroup - 
     *
     * See also: https://docs.ucloud.cn/api/u_mem-api/u_mem
     */
    createUMemcacheGroup(request?: models.CreateUMemcacheGroupRequest): Promise<models.CreateUMemcacheGroupResponse> {
        const args = {Action: "CreateUMemcacheGroup", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.CreateUMemcacheGroupResponse)
    }
    
        
    /**
     * CreateURedisBackup - 
     *
     * See also: https://docs.ucloud.cn/api/u_mem-api/u_mem
     */
    createURedisBackup(request?: models.CreateURedisBackupRequest): Promise<models.CreateURedisBackupResponse> {
        const args = {Action: "CreateURedisBackup", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.CreateURedisBackupResponse)
    }
    
        
    /**
     * CreateURedisGroup - 
     *
     * See also: https://docs.ucloud.cn/api/u_mem-api/u_mem
     */
    createURedisGroup(request?: models.CreateURedisGroupRequest): Promise<models.CreateURedisGroupResponse> {
        const args = {Action: "CreateURedisGroup", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.CreateURedisGroupResponse)
    }
    
        
    /**
     * DeleteUMemSpace - 
     *
     * See also: https://docs.ucloud.cn/api/u_mem-api/u_mem
     */
    deleteUMemSpace(request?: models.DeleteUMemSpaceRequest): Promise<models.DeleteUMemSpaceResponse> {
        const args = {Action: "DeleteUMemSpace", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DeleteUMemSpaceResponse)
    }
    
        
    /**
     * DeleteUMemcacheGroup - 
     *
     * See also: https://docs.ucloud.cn/api/u_mem-api/u_mem
     */
    deleteUMemcacheGroup(request?: models.DeleteUMemcacheGroupRequest): Promise<models.DeleteUMemcacheGroupResponse> {
        const args = {Action: "DeleteUMemcacheGroup", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DeleteUMemcacheGroupResponse)
    }
    
        
    /**
     * DeleteURedisGroup - 
     *
     * See also: https://docs.ucloud.cn/api/u_mem-api/u_mem
     */
    deleteURedisGroup(request?: models.DeleteURedisGroupRequest): Promise<models.DeleteURedisGroupResponse> {
        const args = {Action: "DeleteURedisGroup", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DeleteURedisGroupResponse)
    }
    
        
    /**
     * DescribeUDRedisProxyInfo - 
     *
     * See also: https://docs.ucloud.cn/api/u_mem-api/u_mem
     */
    describeUDRedisProxyInfo(request?: models.DescribeUDRedisProxyInfoRequest): Promise<models.DescribeUDRedisProxyInfoResponse> {
        const args = {Action: "DescribeUDRedisProxyInfo", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeUDRedisProxyInfoResponse)
    }
    
        
    /**
     * DescribeUDRedisSlowlog - 
     *
     * See also: https://docs.ucloud.cn/api/u_mem-api/u_mem
     */
    describeUDRedisSlowlog(request?: models.DescribeUDRedisSlowlogRequest): Promise<models.DescribeUDRedisSlowlogResponse> {
        const args = {Action: "DescribeUDRedisSlowlog", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeUDRedisSlowlogResponse)
    }
    
        
    /**
     * DescribeUMem - 
     *
     * See also: https://docs.ucloud.cn/api/u_mem-api/u_mem
     */
    describeUMem(request?: models.DescribeUMemRequest): Promise<models.DescribeUMemResponse> {
        const args = {Action: "DescribeUMem", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeUMemResponse)
    }
    
        
    /**
     * DescribeUMemBackup - 
     *
     * See also: https://docs.ucloud.cn/api/u_mem-api/u_mem
     */
    describeUMemBackup(request?: models.DescribeUMemBackupRequest): Promise<models.DescribeUMemBackupResponse> {
        const args = {Action: "DescribeUMemBackup", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeUMemBackupResponse)
    }
    
        
    /**
     * DescribeUMemBackupURL - 
     *
     * See also: https://docs.ucloud.cn/api/u_mem-api/u_mem
     */
    describeUMemBackupURL(request?: models.DescribeUMemBackupURLRequest): Promise<models.DescribeUMemBackupURLResponse> {
        const args = {Action: "DescribeUMemBackupURL", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeUMemBackupURLResponse)
    }
    
        
    /**
     * DescribeUMemBlockInfo - 
     *
     * See also: https://docs.ucloud.cn/api/u_mem-api/u_mem
     */
    describeUMemBlockInfo(request?: models.DescribeUMemBlockInfoRequest): Promise<models.DescribeUMemBlockInfoResponse> {
        const args = {Action: "DescribeUMemBlockInfo", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeUMemBlockInfoResponse)
    }
    
        
    /**
     * DescribeUMemPrice - 
     *
     * See also: https://docs.ucloud.cn/api/u_mem-api/u_mem
     */
    describeUMemPrice(request?: models.DescribeUMemPriceRequest): Promise<models.DescribeUMemPriceResponse> {
        const args = {Action: "DescribeUMemPrice", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeUMemPriceResponse)
    }
    
        
    /**
     * DescribeUMemSpace - 
     *
     * See also: https://docs.ucloud.cn/api/u_mem-api/u_mem
     */
    describeUMemSpace(request?: models.DescribeUMemSpaceRequest): Promise<models.DescribeUMemSpaceResponse> {
        const args = {Action: "DescribeUMemSpace", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeUMemSpaceResponse)
    }
    
        
    /**
     * DescribeUMemUpgradePrice - 
     *
     * See also: https://docs.ucloud.cn/api/u_mem-api/u_mem
     */
    describeUMemUpgradePrice(request?: models.DescribeUMemUpgradePriceRequest): Promise<models.DescribeUMemUpgradePriceResponse> {
        const args = {Action: "DescribeUMemUpgradePrice", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeUMemUpgradePriceResponse)
    }
    
        
    /**
     * DescribeUMemcacheGroup - 
     *
     * See also: https://docs.ucloud.cn/api/u_mem-api/u_mem
     */
    describeUMemcacheGroup(request?: models.DescribeUMemcacheGroupRequest): Promise<models.DescribeUMemcacheGroupResponse> {
        const args = {Action: "DescribeUMemcacheGroup", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeUMemcacheGroupResponse)
    }
    
        
    /**
     * DescribeUMemcachePrice - 
     *
     * See also: https://docs.ucloud.cn/api/u_mem-api/u_mem
     */
    describeUMemcachePrice(request?: models.DescribeUMemcachePriceRequest): Promise<models.DescribeUMemcachePriceResponse> {
        const args = {Action: "DescribeUMemcachePrice", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeUMemcachePriceResponse)
    }
    
        
    /**
     * DescribeUMemcacheUpgradePrice - 
     *
     * See also: https://docs.ucloud.cn/api/u_mem-api/u_mem
     */
    describeUMemcacheUpgradePrice(request?: models.DescribeUMemcacheUpgradePriceRequest): Promise<models.DescribeUMemcacheUpgradePriceResponse> {
        const args = {Action: "DescribeUMemcacheUpgradePrice", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeUMemcacheUpgradePriceResponse)
    }
    
        
    /**
     * DescribeURedisBackup - 
     *
     * See also: https://docs.ucloud.cn/api/u_mem-api/u_mem
     */
    describeURedisBackup(request?: models.DescribeURedisBackupRequest): Promise<models.DescribeURedisBackupResponse> {
        const args = {Action: "DescribeURedisBackup", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeURedisBackupResponse)
    }
    
        
    /**
     * DescribeURedisBackupURL - 
     *
     * See also: https://docs.ucloud.cn/api/u_mem-api/u_mem
     */
    describeURedisBackupURL(request?: models.DescribeURedisBackupURLRequest): Promise<models.DescribeURedisBackupURLResponse> {
        const args = {Action: "DescribeURedisBackupURL", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeURedisBackupURLResponse)
    }
    
        
    /**
     * DescribeURedisConfig - 
     *
     * See also: https://docs.ucloud.cn/api/u_mem-api/u_mem
     */
    describeURedisConfig(request?: models.DescribeURedisConfigRequest): Promise<models.DescribeURedisConfigResponse> {
        const args = {Action: "DescribeURedisConfig", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeURedisConfigResponse)
    }
    
        
    /**
     * DescribeURedisGroup - 
     *
     * See also: https://docs.ucloud.cn/api/u_mem-api/u_mem
     */
    describeURedisGroup(request?: models.DescribeURedisGroupRequest): Promise<models.DescribeURedisGroupResponse> {
        const args = {Action: "DescribeURedisGroup", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeURedisGroupResponse)
    }
    
        
    /**
     * DescribeURedisPrice - 
     *
     * See also: https://docs.ucloud.cn/api/u_mem-api/u_mem
     */
    describeURedisPrice(request?: models.DescribeURedisPriceRequest): Promise<models.DescribeURedisPriceResponse> {
        const args = {Action: "DescribeURedisPrice", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeURedisPriceResponse)
    }
    
        
    /**
     * DescribeURedisSlowlog - 
     *
     * See also: https://docs.ucloud.cn/api/u_mem-api/u_mem
     */
    describeURedisSlowlog(request?: models.DescribeURedisSlowlogRequest): Promise<models.DescribeURedisSlowlogResponse> {
        const args = {Action: "DescribeURedisSlowlog", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeURedisSlowlogResponse)
    }
    
        
    /**
     * DescribeURedisUpgradePrice - 
     *
     * See also: https://docs.ucloud.cn/api/u_mem-api/u_mem
     */
    describeURedisUpgradePrice(request?: models.DescribeURedisUpgradePriceRequest): Promise<models.DescribeURedisUpgradePriceResponse> {
        const args = {Action: "DescribeURedisUpgradePrice", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeURedisUpgradePriceResponse)
    }
    
        
    /**
     * DescribeURedisVersion - 
     *
     * See also: https://docs.ucloud.cn/api/u_mem-api/u_mem
     */
    describeURedisVersion(request?: models.DescribeURedisVersionRequest): Promise<models.DescribeURedisVersionResponse> {
        const args = {Action: "DescribeURedisVersion", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeURedisVersionResponse)
    }
    
        
    /**
     * FlushallURedisGroup - 
     *
     * See also: https://docs.ucloud.cn/api/u_mem-api/u_mem
     */
    flushallURedisGroup(request?: models.FlushallURedisGroupRequest): Promise<models.FlushallURedisGroupResponse> {
        const args = {Action: "FlushallURedisGroup", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.FlushallURedisGroupResponse)
    }
    
        
    /**
     * GetUMemSpaceState - 
     *
     * See also: https://docs.ucloud.cn/api/u_mem-api/u_mem
     */
    getUMemSpaceState(request?: models.GetUMemSpaceStateRequest): Promise<models.GetUMemSpaceStateResponse> {
        const args = {Action: "GetUMemSpaceState", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.GetUMemSpaceStateResponse)
    }
    
        
    /**
     * ISolationURedisGroup - 
     *
     * See also: https://docs.ucloud.cn/api/u_mem-api/u_mem
     */
    iSolationURedisGroup(request?: models.ISolationURedisGroupRequest): Promise<models.ISolationURedisGroupResponse> {
        const args = {Action: "ISolationURedisGroup", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.ISolationURedisGroupResponse)
    }
    
        
    /**
     * ModifyUMemSpaceName - 
     *
     * See also: https://docs.ucloud.cn/api/u_mem-api/u_mem
     */
    modifyUMemSpaceName(request?: models.ModifyUMemSpaceNameRequest): Promise<models.ModifyUMemSpaceNameResponse> {
        const args = {Action: "ModifyUMemSpaceName", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.ModifyUMemSpaceNameResponse)
    }
    
        
    /**
     * ModifyURedisGroupName - 
     *
     * See also: https://docs.ucloud.cn/api/u_mem-api/u_mem
     */
    modifyURedisGroupName(request?: models.ModifyURedisGroupNameRequest): Promise<models.ModifyURedisGroupNameResponse> {
        const args = {Action: "ModifyURedisGroupName", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.ModifyURedisGroupNameResponse)
    }
    
        
    /**
     * ModifyURedisGroupPassword - 
     *
     * See also: https://docs.ucloud.cn/api/u_mem-api/u_mem
     */
    modifyURedisGroupPassword(request?: models.ModifyURedisGroupPasswordRequest): Promise<models.ModifyURedisGroupPasswordResponse> {
        const args = {Action: "ModifyURedisGroupPassword", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.ModifyURedisGroupPasswordResponse)
    }
    
        
    /**
     * RemoveUDRedisData - 
     *
     * See also: https://docs.ucloud.cn/api/u_mem-api/u_mem
     */
    removeUDRedisData(request?: models.RemoveUDRedisDataRequest): Promise<models.RemoveUDRedisDataResponse> {
        const args = {Action: "RemoveUDRedisData", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.RemoveUDRedisDataResponse)
    }
    
        
    /**
     * ResizeUMemSpace - 
     *
     * See also: https://docs.ucloud.cn/api/u_mem-api/u_mem
     */
    resizeUMemSpace(request?: models.ResizeUMemSpaceRequest): Promise<models.ResizeUMemSpaceResponse> {
        const args = {Action: "ResizeUMemSpace", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.ResizeUMemSpaceResponse)
    }
    
        
    /**
     * ResizeURedisGroup - 
     *
     * See also: https://docs.ucloud.cn/api/u_mem-api/u_mem
     */
    resizeURedisGroup(request?: models.ResizeURedisGroupRequest): Promise<models.ResizeURedisGroupResponse> {
        const args = {Action: "ResizeURedisGroup", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.ResizeURedisGroupResponse)
    }
    
        
    /**
     * RestartUMemcacheGroup - 
     *
     * See also: https://docs.ucloud.cn/api/u_mem-api/u_mem
     */
    restartUMemcacheGroup(request?: models.RestartUMemcacheGroupRequest): Promise<models.RestartUMemcacheGroupResponse> {
        const args = {Action: "RestartUMemcacheGroup", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.RestartUMemcacheGroupResponse)
    }
    
        
    /**
     * RestartURedisGroup - 
     *
     * See also: https://docs.ucloud.cn/api/u_mem-api/u_mem
     */
    restartURedisGroup(request?: models.RestartURedisGroupRequest): Promise<models.RestartURedisGroupResponse> {
        const args = {Action: "RestartURedisGroup", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.RestartURedisGroupResponse)
    }
    
        
    /**
     * UpdateURedisBackupStrategy - 
     *
     * See also: https://docs.ucloud.cn/api/u_mem-api/u_mem
     */
    updateURedisBackupStrategy(request?: models.UpdateURedisBackupStrategyRequest): Promise<models.UpdateURedisBackupStrategyResponse> {
        const args = {Action: "UpdateURedisBackupStrategy", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.UpdateURedisBackupStrategyResponse)
    }
    
}
