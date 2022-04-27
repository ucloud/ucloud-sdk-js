import Client from "../../core/client";
import Request from "../../core/request";
import {ConfigOptions} from "../../core/config";
import {CredentialOptions} from "../../core/credential";

import * as models from './models';

/**
 * This client is used to call actions of **UDB** service
 */
export default class UdbClient extends Client {
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
     * BackupUDBInstance - 
     *
     * See also: https://docs.ucloud.cn/api/udb-api/udb
     */
    backupUDBInstance(request?: models.BackupUDBInstanceRequest): Promise<models.BackupUDBInstanceResponse> {
        const args = {Action: "BackupUDBInstance", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.BackupUDBInstanceResponse)
    }
    
        
    /**
     * BackupUDBInstanceBinlog - 
     *
     * See also: https://docs.ucloud.cn/api/udb-api/udb
     */
    backupUDBInstanceBinlog(request?: models.BackupUDBInstanceBinlogRequest): Promise<models.BackupUDBInstanceBinlogResponse> {
        const args = {Action: "BackupUDBInstanceBinlog", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.BackupUDBInstanceBinlogResponse)
    }
    
        
    /**
     * BackupUDBInstanceErrorLog - 
     *
     * See also: https://docs.ucloud.cn/api/udb-api/udb
     */
    backupUDBInstanceErrorLog(request?: models.BackupUDBInstanceErrorLogRequest): Promise<models.BackupUDBInstanceErrorLogResponse> {
        const args = {Action: "BackupUDBInstanceErrorLog", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.BackupUDBInstanceErrorLogResponse)
    }
    
        
    /**
     * BackupUDBInstanceSlowLog - 
     *
     * See also: https://docs.ucloud.cn/api/udb-api/udb
     */
    backupUDBInstanceSlowLog(request?: models.BackupUDBInstanceSlowLogRequest): Promise<models.BackupUDBInstanceSlowLogResponse> {
        const args = {Action: "BackupUDBInstanceSlowLog", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.BackupUDBInstanceSlowLogResponse)
    }
    
        
    /**
     * ChangeUDBParamGroup - 
     *
     * See also: https://docs.ucloud.cn/api/udb-api/udb
     */
    changeUDBParamGroup(request?: models.ChangeUDBParamGroupRequest): Promise<models.ChangeUDBParamGroupResponse> {
        const args = {Action: "ChangeUDBParamGroup", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.ChangeUDBParamGroupResponse)
    }
    
        
    /**
     * CheckRecoverUDBInstance - 
     *
     * See also: https://docs.ucloud.cn/api/udb-api/udb
     */
    checkRecoverUDBInstance(request?: models.CheckRecoverUDBInstanceRequest): Promise<models.CheckRecoverUDBInstanceResponse> {
        const args = {Action: "CheckRecoverUDBInstance", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.CheckRecoverUDBInstanceResponse)
    }
    
        
    /**
     * CheckUDBInstanceToHAAllowance - 
     *
     * See also: https://docs.ucloud.cn/api/udb-api/udb
     */
    checkUDBInstanceToHAAllowance(request?: models.CheckUDBInstanceToHAAllowanceRequest): Promise<models.CheckUDBInstanceToHAAllowanceResponse> {
        const args = {Action: "CheckUDBInstanceToHAAllowance", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.CheckUDBInstanceToHAAllowanceResponse)
    }
    
        
    /**
     * ClearUDBLog - 
     *
     * See also: https://docs.ucloud.cn/api/udb-api/udb
     */
    clearUDBLog(request?: models.ClearUDBLogRequest): Promise<models.ClearUDBLogResponse> {
        const args = {Action: "ClearUDBLog", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.ClearUDBLogResponse)
    }
    
        
    /**
     * CreateMongoDBReplicaSet - 
     *
     * See also: https://docs.ucloud.cn/api/udb-api/udb
     */
    createMongoDBReplicaSet(request?: models.CreateMongoDBReplicaSetRequest): Promise<models.CreateMongoDBReplicaSetResponse> {
        const args = {Action: "CreateMongoDBReplicaSet", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.CreateMongoDBReplicaSetResponse)
    }
    
        
    /**
     * CreateUDBInstance - 
     *
     * See also: https://docs.ucloud.cn/api/udb-api/udb
     */
    createUDBInstance(request?: models.CreateUDBInstanceRequest): Promise<models.CreateUDBInstanceResponse> {
        const args = {Action: "CreateUDBInstance", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.CreateUDBInstanceResponse)
    }
    
        
    /**
     * CreateUDBInstanceByRecovery - 
     *
     * See also: https://docs.ucloud.cn/api/udb-api/udb
     */
    createUDBInstanceByRecovery(request?: models.CreateUDBInstanceByRecoveryRequest): Promise<models.CreateUDBInstanceByRecoveryResponse> {
        const args = {Action: "CreateUDBInstanceByRecovery", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.CreateUDBInstanceByRecoveryResponse)
    }
    
        
    /**
     * CreateUDBParamGroup - 
     *
     * See also: https://docs.ucloud.cn/api/udb-api/udb
     */
    createUDBParamGroup(request?: models.CreateUDBParamGroupRequest): Promise<models.CreateUDBParamGroupResponse> {
        const args = {Action: "CreateUDBParamGroup", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.CreateUDBParamGroupResponse)
    }
    
        
    /**
     * CreateUDBReplicationInstance - 
     *
     * See also: https://docs.ucloud.cn/api/udb-api/udb
     */
    createUDBReplicationInstance(request?: models.CreateUDBReplicationInstanceRequest): Promise<models.CreateUDBReplicationInstanceResponse> {
        const args = {Action: "CreateUDBReplicationInstance", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.CreateUDBReplicationInstanceResponse)
    }
    
        
    /**
     * CreateUDBRouteInstance - 
     *
     * See also: https://docs.ucloud.cn/api/udb-api/udb
     */
    createUDBRouteInstance(request?: models.CreateUDBRouteInstanceRequest): Promise<models.CreateUDBRouteInstanceResponse> {
        const args = {Action: "CreateUDBRouteInstance", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.CreateUDBRouteInstanceResponse)
    }
    
        
    /**
     * CreateUDBSlave - 
     *
     * See also: https://docs.ucloud.cn/api/udb-api/udb
     */
    createUDBSlave(request?: models.CreateUDBSlaveRequest): Promise<models.CreateUDBSlaveResponse> {
        const args = {Action: "CreateUDBSlave", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.CreateUDBSlaveResponse)
    }
    
        
    /**
     * DeleteUDBInstance - 
     *
     * See also: https://docs.ucloud.cn/api/udb-api/udb
     */
    deleteUDBInstance(request?: models.DeleteUDBInstanceRequest): Promise<models.DeleteUDBInstanceResponse> {
        const args = {Action: "DeleteUDBInstance", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DeleteUDBInstanceResponse)
    }
    
        
    /**
     * DeleteUDBLogPackage - 
     *
     * See also: https://docs.ucloud.cn/api/udb-api/udb
     */
    deleteUDBLogPackage(request?: models.DeleteUDBLogPackageRequest): Promise<models.DeleteUDBLogPackageResponse> {
        const args = {Action: "DeleteUDBLogPackage", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DeleteUDBLogPackageResponse)
    }
    
        
    /**
     * DeleteUDBParamGroup - 
     *
     * See also: https://docs.ucloud.cn/api/udb-api/udb
     */
    deleteUDBParamGroup(request?: models.DeleteUDBParamGroupRequest): Promise<models.DeleteUDBParamGroupResponse> {
        const args = {Action: "DeleteUDBParamGroup", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DeleteUDBParamGroupResponse)
    }
    
        
    /**
     * DescribeUDBBackup - 
     *
     * See also: https://docs.ucloud.cn/api/udb-api/udb
     */
    describeUDBBackup(request?: models.DescribeUDBBackupRequest): Promise<models.DescribeUDBBackupResponse> {
        const args = {Action: "DescribeUDBBackup", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeUDBBackupResponse)
    }
    
        
    /**
     * DescribeUDBBackupBlacklist - 
     *
     * See also: https://docs.ucloud.cn/api/udb-api/udb
     */
    describeUDBBackupBlacklist(request?: models.DescribeUDBBackupBlacklistRequest): Promise<models.DescribeUDBBackupBlacklistResponse> {
        const args = {Action: "DescribeUDBBackupBlacklist", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeUDBBackupBlacklistResponse)
    }
    
        
    /**
     * DescribeUDBBinlogBackupURL - 
     *
     * See also: https://docs.ucloud.cn/api/udb-api/udb
     */
    describeUDBBinlogBackupURL(request?: models.DescribeUDBBinlogBackupURLRequest): Promise<models.DescribeUDBBinlogBackupURLResponse> {
        const args = {Action: "DescribeUDBBinlogBackupURL", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeUDBBinlogBackupURLResponse)
    }
    
        
    /**
     * DescribeUDBInstance - 
     *
     * See also: https://docs.ucloud.cn/api/udb-api/udb
     */
    describeUDBInstance(request?: models.DescribeUDBInstanceRequest): Promise<models.DescribeUDBInstanceResponse> {
        const args = {Action: "DescribeUDBInstance", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeUDBInstanceResponse)
    }
    
        
    /**
     * DescribeUDBInstanceBackupState - 
     *
     * See also: https://docs.ucloud.cn/api/udb-api/udb
     */
    describeUDBInstanceBackupState(request?: models.DescribeUDBInstanceBackupStateRequest): Promise<models.DescribeUDBInstanceBackupStateResponse> {
        const args = {Action: "DescribeUDBInstanceBackupState", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeUDBInstanceBackupStateResponse)
    }
    
        
    /**
     * DescribeUDBInstanceBackupURL - 
     *
     * See also: https://docs.ucloud.cn/api/udb-api/udb
     */
    describeUDBInstanceBackupURL(request?: models.DescribeUDBInstanceBackupURLRequest): Promise<models.DescribeUDBInstanceBackupURLResponse> {
        const args = {Action: "DescribeUDBInstanceBackupURL", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeUDBInstanceBackupURLResponse)
    }
    
        
    /**
     * DescribeUDBInstanceBinlog - 
     *
     * See also: https://docs.ucloud.cn/api/udb-api/udb
     */
    describeUDBInstanceBinlog(request?: models.DescribeUDBInstanceBinlogRequest): Promise<models.DescribeUDBInstanceBinlogResponse> {
        const args = {Action: "DescribeUDBInstanceBinlog", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeUDBInstanceBinlogResponse)
    }
    
        
    /**
     * DescribeUDBInstanceBinlogBackupState - 
     *
     * See also: https://docs.ucloud.cn/api/udb-api/udb
     */
    describeUDBInstanceBinlogBackupState(request?: models.DescribeUDBInstanceBinlogBackupStateRequest): Promise<models.DescribeUDBInstanceBinlogBackupStateResponse> {
        const args = {Action: "DescribeUDBInstanceBinlogBackupState", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeUDBInstanceBinlogBackupStateResponse)
    }
    
        
    /**
     * DescribeUDBInstanceLog - 
     *
     * See also: https://docs.ucloud.cn/api/udb-api/udb
     */
    describeUDBInstanceLog(request?: models.DescribeUDBInstanceLogRequest): Promise<models.DescribeUDBInstanceLogResponse> {
        const args = {Action: "DescribeUDBInstanceLog", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeUDBInstanceLogResponse)
    }
    
        
    /**
     * DescribeUDBInstancePrice - 
     *
     * See also: https://docs.ucloud.cn/api/udb-api/udb
     */
    describeUDBInstancePrice(request?: models.DescribeUDBInstancePriceRequest): Promise<models.DescribeUDBInstancePriceResponse> {
        const args = {Action: "DescribeUDBInstancePrice", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeUDBInstancePriceResponse)
    }
    
        
    /**
     * DescribeUDBInstanceState - 
     *
     * See also: https://docs.ucloud.cn/api/udb-api/udb
     */
    describeUDBInstanceState(request?: models.DescribeUDBInstanceStateRequest): Promise<models.DescribeUDBInstanceStateResponse> {
        const args = {Action: "DescribeUDBInstanceState", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeUDBInstanceStateResponse)
    }
    
        
    /**
     * DescribeUDBInstanceUpgradePrice - 
     *
     * See also: https://docs.ucloud.cn/api/udb-api/udb
     */
    describeUDBInstanceUpgradePrice(request?: models.DescribeUDBInstanceUpgradePriceRequest): Promise<models.DescribeUDBInstanceUpgradePriceResponse> {
        const args = {Action: "DescribeUDBInstanceUpgradePrice", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeUDBInstanceUpgradePriceResponse)
    }
    
        
    /**
     * DescribeUDBLogBackupURL - 
     *
     * See also: https://docs.ucloud.cn/api/udb-api/udb
     */
    describeUDBLogBackupURL(request?: models.DescribeUDBLogBackupURLRequest): Promise<models.DescribeUDBLogBackupURLResponse> {
        const args = {Action: "DescribeUDBLogBackupURL", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeUDBLogBackupURLResponse)
    }
    
        
    /**
     * DescribeUDBLogPackage - 
     *
     * See also: https://docs.ucloud.cn/api/udb-api/udb
     */
    describeUDBLogPackage(request?: models.DescribeUDBLogPackageRequest): Promise<models.DescribeUDBLogPackageResponse> {
        const args = {Action: "DescribeUDBLogPackage", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeUDBLogPackageResponse)
    }
    
        
    /**
     * DescribeUDBParamGroup - 
     *
     * See also: https://docs.ucloud.cn/api/udb-api/udb
     */
    describeUDBParamGroup(request?: models.DescribeUDBParamGroupRequest): Promise<models.DescribeUDBParamGroupResponse> {
        const args = {Action: "DescribeUDBParamGroup", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeUDBParamGroupResponse)
    }
    
        
    /**
     * DescribeUDBSplittingInfo - 
     *
     * See also: https://docs.ucloud.cn/api/udb-api/udb
     */
    describeUDBSplittingInfo(request?: models.DescribeUDBSplittingInfoRequest): Promise<models.DescribeUDBSplittingInfoResponse> {
        const args = {Action: "DescribeUDBSplittingInfo", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeUDBSplittingInfoResponse)
    }
    
        
    /**
     * DescribeUDBType - 
     *
     * See also: https://docs.ucloud.cn/api/udb-api/udb
     */
    describeUDBType(request?: models.DescribeUDBTypeRequest): Promise<models.DescribeUDBTypeResponse> {
        const args = {Action: "DescribeUDBType", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeUDBTypeResponse)
    }
    
        
    /**
     * DisableUDBRWSplitting - 
     *
     * See also: https://docs.ucloud.cn/api/udb-api/udb
     */
    disableUDBRWSplitting(request?: models.DisableUDBRWSplittingRequest): Promise<models.DisableUDBRWSplittingResponse> {
        const args = {Action: "DisableUDBRWSplitting", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DisableUDBRWSplittingResponse)
    }
    
        
    /**
     * EditUDBBackupBlacklist - 
     *
     * See also: https://docs.ucloud.cn/api/udb-api/udb
     */
    editUDBBackupBlacklist(request?: models.EditUDBBackupBlacklistRequest): Promise<models.EditUDBBackupBlacklistResponse> {
        const args = {Action: "EditUDBBackupBlacklist", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.EditUDBBackupBlacklistResponse)
    }
    
        
    /**
     * EnableUDBRWSplitting - 
     *
     * See also: https://docs.ucloud.cn/api/udb-api/udb
     */
    enableUDBRWSplitting(request?: models.EnableUDBRWSplittingRequest): Promise<models.EnableUDBRWSplittingResponse> {
        const args = {Action: "EnableUDBRWSplitting", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.EnableUDBRWSplittingResponse)
    }
    
        
    /**
     * ExtractUDBParamGroup - 
     *
     * See also: https://docs.ucloud.cn/api/udb-api/udb
     */
    extractUDBParamGroup(request?: models.ExtractUDBParamGroupRequest): Promise<models.ExtractUDBParamGroupResponse> {
        const args = {Action: "ExtractUDBParamGroup", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.ExtractUDBParamGroupResponse)
    }
    
        
    /**
     * FetchUDBInstanceEarliestRecoverTime - 
     *
     * See also: https://docs.ucloud.cn/api/udb-api/udb
     */
    fetchUDBInstanceEarliestRecoverTime(request?: models.FetchUDBInstanceEarliestRecoverTimeRequest): Promise<models.FetchUDBInstanceEarliestRecoverTimeResponse> {
        const args = {Action: "FetchUDBInstanceEarliestRecoverTime", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.FetchUDBInstanceEarliestRecoverTimeResponse)
    }
    
        
    /**
     * GetUDBClientConnNum - 
     *
     * See also: https://docs.ucloud.cn/api/udb-api/udb
     */
    getUDBClientConnNum(request?: models.GetUDBClientConnNumRequest): Promise<models.GetUDBClientConnNumResponse> {
        const args = {Action: "GetUDBClientConnNum", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.GetUDBClientConnNumResponse)
    }
    
        
    /**
     * ModifyUDBInstanceName - 
     *
     * See also: https://docs.ucloud.cn/api/udb-api/udb
     */
    modifyUDBInstanceName(request?: models.ModifyUDBInstanceNameRequest): Promise<models.ModifyUDBInstanceNameResponse> {
        const args = {Action: "ModifyUDBInstanceName", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.ModifyUDBInstanceNameResponse)
    }
    
        
    /**
     * ModifyUDBInstancePassword - 
     *
     * See also: https://docs.ucloud.cn/api/udb-api/udb
     */
    modifyUDBInstancePassword(request?: models.ModifyUDBInstancePasswordRequest): Promise<models.ModifyUDBInstancePasswordResponse> {
        const args = {Action: "ModifyUDBInstancePassword", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.ModifyUDBInstancePasswordResponse)
    }
    
        
    /**
     * PromoteUDBInstanceToHA - 
     *
     * See also: https://docs.ucloud.cn/api/udb-api/udb
     */
    promoteUDBInstanceToHA(request?: models.PromoteUDBInstanceToHARequest): Promise<models.PromoteUDBInstanceToHAResponse> {
        const args = {Action: "PromoteUDBInstanceToHA", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.PromoteUDBInstanceToHAResponse)
    }
    
        
    /**
     * PromoteUDBSlave - 
     *
     * See also: https://docs.ucloud.cn/api/udb-api/udb
     */
    promoteUDBSlave(request?: models.PromoteUDBSlaveRequest): Promise<models.PromoteUDBSlaveResponse> {
        const args = {Action: "PromoteUDBSlave", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.PromoteUDBSlaveResponse)
    }
    
        
    /**
     * ResizeUDBInstance - 
     *
     * See also: https://docs.ucloud.cn/api/udb-api/udb
     */
    resizeUDBInstance(request?: models.ResizeUDBInstanceRequest): Promise<models.ResizeUDBInstanceResponse> {
        const args = {Action: "ResizeUDBInstance", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.ResizeUDBInstanceResponse)
    }
    
        
    /**
     * RestartRWSplitting - 
     *
     * See also: https://docs.ucloud.cn/api/udb-api/udb
     */
    restartRWSplitting(request?: models.RestartRWSplittingRequest): Promise<models.RestartRWSplittingResponse> {
        const args = {Action: "RestartRWSplitting", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.RestartRWSplittingResponse)
    }
    
        
    /**
     * RestartUDBInstance - 
     *
     * See also: https://docs.ucloud.cn/api/udb-api/udb
     */
    restartUDBInstance(request?: models.RestartUDBInstanceRequest): Promise<models.RestartUDBInstanceResponse> {
        const args = {Action: "RestartUDBInstance", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.RestartUDBInstanceResponse)
    }
    
        
    /**
     * SetUDBRWSplitting - 
     *
     * See also: https://docs.ucloud.cn/api/udb-api/udb
     */
    setUDBRWSplitting(request?: models.SetUDBRWSplittingRequest): Promise<models.SetUDBRWSplittingResponse> {
        const args = {Action: "SetUDBRWSplitting", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.SetUDBRWSplittingResponse)
    }
    
        
    /**
     * StartUDBInstance - 
     *
     * See also: https://docs.ucloud.cn/api/udb-api/udb
     */
    startUDBInstance(request?: models.StartUDBInstanceRequest): Promise<models.StartUDBInstanceResponse> {
        const args = {Action: "StartUDBInstance", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.StartUDBInstanceResponse)
    }
    
        
    /**
     * StopUDBInstance - 
     *
     * See also: https://docs.ucloud.cn/api/udb-api/udb
     */
    stopUDBInstance(request?: models.StopUDBInstanceRequest): Promise<models.StopUDBInstanceResponse> {
        const args = {Action: "StopUDBInstance", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.StopUDBInstanceResponse)
    }
    
        
    /**
     * SwitchUDBHAToSentinel - 
     *
     * See also: https://docs.ucloud.cn/api/udb-api/udb
     */
    switchUDBHAToSentinel(request?: models.SwitchUDBHAToSentinelRequest): Promise<models.SwitchUDBHAToSentinelResponse> {
        const args = {Action: "SwitchUDBHAToSentinel", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.SwitchUDBHAToSentinelResponse)
    }
    
        
    /**
     * SwitchUDBInstanceToHA - 
     *
     * See also: https://docs.ucloud.cn/api/udb-api/udb
     */
    switchUDBInstanceToHA(request?: models.SwitchUDBInstanceToHARequest): Promise<models.SwitchUDBInstanceToHAResponse> {
        const args = {Action: "SwitchUDBInstanceToHA", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.SwitchUDBInstanceToHAResponse)
    }
    
        
    /**
     * UpdateUDBInstanceBackupStrategy - 
     *
     * See also: https://docs.ucloud.cn/api/udb-api/udb
     */
    updateUDBInstanceBackupStrategy(request?: models.UpdateUDBInstanceBackupStrategyRequest): Promise<models.UpdateUDBInstanceBackupStrategyResponse> {
        const args = {Action: "UpdateUDBInstanceBackupStrategy", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.UpdateUDBInstanceBackupStrategyResponse)
    }
    
        
    /**
     * UpdateUDBInstanceSlaveBackupSwitch - 
     *
     * See also: https://docs.ucloud.cn/api/udb-api/udb
     */
    updateUDBInstanceSlaveBackupSwitch(request?: models.UpdateUDBInstanceSlaveBackupSwitchRequest): Promise<models.UpdateUDBInstanceSlaveBackupSwitchResponse> {
        const args = {Action: "UpdateUDBInstanceSlaveBackupSwitch", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.UpdateUDBInstanceSlaveBackupSwitchResponse)
    }
    
        
    /**
     * UpdateUDBParamGroup - 
     *
     * See also: https://docs.ucloud.cn/api/udb-api/udb
     */
    updateUDBParamGroup(request?: models.UpdateUDBParamGroupRequest): Promise<models.UpdateUDBParamGroupResponse> {
        const args = {Action: "UpdateUDBParamGroup", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.UpdateUDBParamGroupResponse)
    }
    
        
    /**
     * UpgradeUDBInstanceToHA - 
     *
     * See also: https://docs.ucloud.cn/api/udb-api/udb
     */
    upgradeUDBInstanceToHA(request?: models.UpgradeUDBInstanceToHARequest): Promise<models.UpgradeUDBInstanceToHAResponse> {
        const args = {Action: "UpgradeUDBInstanceToHA", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.UpgradeUDBInstanceToHAResponse)
    }
    
        
    /**
     * UploadUDBParamGroup - 
     *
     * See also: https://docs.ucloud.cn/api/udb-api/udb
     */
    uploadUDBParamGroup(request?: models.UploadUDBParamGroupRequest): Promise<models.UploadUDBParamGroupResponse> {
        const args = {Action: "UploadUDBParamGroup", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.UploadUDBParamGroupResponse)
    }
    
}
