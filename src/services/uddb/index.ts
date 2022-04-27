import Client from "../../core/client";
import Request from "../../core/request";
import {ConfigOptions} from "../../core/config";
import {CredentialOptions} from "../../core/credential";

import * as models from './models';

/**
 * This client is used to call actions of **UDDB** service
 */
export default class UddbClient extends Client {
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
     * ChangeUDDBInstanceName - 
     *
     * See also: https://docs.ucloud.cn/api/uddb-api/uddb
     */
    changeUDDBInstanceName(request?: models.ChangeUDDBInstanceNameRequest): Promise<models.ChangeUDDBInstanceNameResponse> {
        const args = {Action: "ChangeUDDBInstanceName", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.ChangeUDDBInstanceNameResponse)
    }
    
        
    /**
     * ChangeUDDBSlaveCount - 
     *
     * See also: https://docs.ucloud.cn/api/uddb-api/uddb
     */
    changeUDDBSlaveCount(request?: models.ChangeUDDBSlaveCountRequest): Promise<models.ChangeUDDBSlaveCountResponse> {
        const args = {Action: "ChangeUDDBSlaveCount", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.ChangeUDDBSlaveCountResponse)
    }
    
        
    /**
     * CreateUDDBInstance - 
     *
     * See also: https://docs.ucloud.cn/api/uddb-api/uddb
     */
    createUDDBInstance(request?: models.CreateUDDBInstanceRequest): Promise<models.CreateUDDBInstanceResponse> {
        const args = {Action: "CreateUDDBInstance", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.CreateUDDBInstanceResponse)
    }
    
        
    /**
     * DeleteUDDBInstance - 
     *
     * See also: https://docs.ucloud.cn/api/uddb-api/uddb
     */
    deleteUDDBInstance(request?: models.DeleteUDDBInstanceRequest): Promise<models.DeleteUDDBInstanceResponse> {
        const args = {Action: "DeleteUDDBInstance", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DeleteUDDBInstanceResponse)
    }
    
        
    /**
     * DescribeUDDBInstance - 
     *
     * See also: https://docs.ucloud.cn/api/uddb-api/uddb
     */
    describeUDDBInstance(request?: models.DescribeUDDBInstanceRequest): Promise<models.DescribeUDDBInstanceResponse> {
        const args = {Action: "DescribeUDDBInstance", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeUDDBInstanceResponse)
    }
    
        
    /**
     * DescribeUDDBInstancePrice - 
     *
     * See also: https://docs.ucloud.cn/api/uddb-api/uddb
     */
    describeUDDBInstancePrice(request?: models.DescribeUDDBInstancePriceRequest): Promise<models.DescribeUDDBInstancePriceResponse> {
        const args = {Action: "DescribeUDDBInstancePrice", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeUDDBInstancePriceResponse)
    }
    
        
    /**
     * DescribeUDDBInstanceUpgradePrice - 
     *
     * See also: https://docs.ucloud.cn/api/uddb-api/uddb
     */
    describeUDDBInstanceUpgradePrice(request?: models.DescribeUDDBInstanceUpgradePriceRequest): Promise<models.DescribeUDDBInstanceUpgradePriceResponse> {
        const args = {Action: "DescribeUDDBInstanceUpgradePrice", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeUDDBInstanceUpgradePriceResponse)
    }
    
        
    /**
     * RestartUDDBInstance - 
     *
     * See also: https://docs.ucloud.cn/api/uddb-api/uddb
     */
    restartUDDBInstance(request?: models.RestartUDDBInstanceRequest): Promise<models.RestartUDDBInstanceResponse> {
        const args = {Action: "RestartUDDBInstance", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.RestartUDDBInstanceResponse)
    }
    
        
    /**
     * StartUDDBInstance - 
     *
     * See also: https://docs.ucloud.cn/api/uddb-api/uddb
     */
    startUDDBInstance(request?: models.StartUDDBInstanceRequest): Promise<models.StartUDDBInstanceResponse> {
        const args = {Action: "StartUDDBInstance", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.StartUDDBInstanceResponse)
    }
    
        
    /**
     * StopUDDBInstance - 
     *
     * See also: https://docs.ucloud.cn/api/uddb-api/uddb
     */
    stopUDDBInstance(request?: models.StopUDDBInstanceRequest): Promise<models.StopUDDBInstanceResponse> {
        const args = {Action: "StopUDDBInstance", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.StopUDDBInstanceResponse)
    }
    
        
    /**
     * UpgradeUDDBDataNode - 
     *
     * See also: https://docs.ucloud.cn/api/uddb-api/uddb
     */
    upgradeUDDBDataNode(request?: models.UpgradeUDDBDataNodeRequest): Promise<models.UpgradeUDDBDataNodeResponse> {
        const args = {Action: "UpgradeUDDBDataNode", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.UpgradeUDDBDataNodeResponse)
    }
    
        
    /**
     * UpgradeUDDBInstance - 
     *
     * See also: https://docs.ucloud.cn/api/uddb-api/uddb
     */
    upgradeUDDBInstance(request?: models.UpgradeUDDBInstanceRequest): Promise<models.UpgradeUDDBInstanceResponse> {
        const args = {Action: "UpgradeUDDBInstance", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.UpgradeUDDBInstanceResponse)
    }
    
}
