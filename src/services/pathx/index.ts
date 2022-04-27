import Client from "../../core/client";
import Request from "../../core/request";
import {ConfigOptions} from "../../core/config";
import {CredentialOptions} from "../../core/credential";

import * as models from './models';

/**
 * This client is used to call actions of **PathX** service
 */
export default class PathxClient extends Client {
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
     * BindPathXSSL - 
     *
     * See also: https://docs.ucloud.cn/api/path_x-api/path_x
     */
    bindPathXSSL(request?: models.BindPathXSSLRequest): Promise<models.BindPathXSSLResponse> {
        const args = {Action: "BindPathXSSL", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.BindPathXSSLResponse)
    }
    
        
    /**
     * CreateGlobalSSHInstance - 
     *
     * See also: https://docs.ucloud.cn/api/path_x-api/path_x
     */
    createGlobalSSHInstance(request?: models.CreateGlobalSSHInstanceRequest): Promise<models.CreateGlobalSSHInstanceResponse> {
        const args = {Action: "CreateGlobalSSHInstance", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.CreateGlobalSSHInstanceResponse)
    }
    
        
    /**
     * CreatePathXSSL - 
     *
     * See also: https://docs.ucloud.cn/api/path_x-api/path_x
     */
    createPathXSSL(request?: models.CreatePathXSSLRequest): Promise<models.CreatePathXSSLResponse> {
        const args = {Action: "CreatePathXSSL", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.CreatePathXSSLResponse)
    }
    
        
    /**
     * CreateUGA3Instance - 
     *
     * See also: https://docs.ucloud.cn/api/path_x-api/path_x
     */
    createUGA3Instance(request?: models.CreateUGA3InstanceRequest): Promise<models.CreateUGA3InstanceResponse> {
        const args = {Action: "CreateUGA3Instance", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.CreateUGA3InstanceResponse)
    }
    
        
    /**
     * CreateUGA3Port - 
     *
     * See also: https://docs.ucloud.cn/api/path_x-api/path_x
     */
    createUGA3Port(request?: models.CreateUGA3PortRequest): Promise<models.CreateUGA3PortResponse> {
        const args = {Action: "CreateUGA3Port", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.CreateUGA3PortResponse)
    }
    
        
    /**
     * CreateUGAForwarder - 
     *
     * See also: https://docs.ucloud.cn/api/path_x-api/path_x
     */
    createUGAForwarder(request?: models.CreateUGAForwarderRequest): Promise<models.CreateUGAForwarderResponse> {
        const args = {Action: "CreateUGAForwarder", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.CreateUGAForwarderResponse)
    }
    
        
    /**
     * CreateUGAInstance - 
     *
     * See also: https://docs.ucloud.cn/api/path_x-api/path_x
     */
    createUGAInstance(request?: models.CreateUGAInstanceRequest): Promise<models.CreateUGAInstanceResponse> {
        const args = {Action: "CreateUGAInstance", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.CreateUGAInstanceResponse)
    }
    
        
    /**
     * CreateUPath - 
     *
     * See also: https://docs.ucloud.cn/api/path_x-api/path_x
     */
    createUPath(request?: models.CreateUPathRequest): Promise<models.CreateUPathResponse> {
        const args = {Action: "CreateUPath", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.CreateUPathResponse)
    }
    
        
    /**
     * DeleteGlobalSSHInstance - 
     *
     * See also: https://docs.ucloud.cn/api/path_x-api/path_x
     */
    deleteGlobalSSHInstance(request?: models.DeleteGlobalSSHInstanceRequest): Promise<models.DeleteGlobalSSHInstanceResponse> {
        const args = {Action: "DeleteGlobalSSHInstance", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DeleteGlobalSSHInstanceResponse)
    }
    
        
    /**
     * DeletePathXSSL - 
     *
     * See also: https://docs.ucloud.cn/api/path_x-api/path_x
     */
    deletePathXSSL(request?: models.DeletePathXSSLRequest): Promise<models.DeletePathXSSLResponse> {
        const args = {Action: "DeletePathXSSL", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DeletePathXSSLResponse)
    }
    
        
    /**
     * DeleteUGA3Instance - 
     *
     * See also: https://docs.ucloud.cn/api/path_x-api/path_x
     */
    deleteUGA3Instance(request?: models.DeleteUGA3InstanceRequest): Promise<models.DeleteUGA3InstanceResponse> {
        const args = {Action: "DeleteUGA3Instance", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DeleteUGA3InstanceResponse)
    }
    
        
    /**
     * DeleteUGA3Port - 
     *
     * See also: https://docs.ucloud.cn/api/path_x-api/path_x
     */
    deleteUGA3Port(request?: models.DeleteUGA3PortRequest): Promise<models.DeleteUGA3PortResponse> {
        const args = {Action: "DeleteUGA3Port", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DeleteUGA3PortResponse)
    }
    
        
    /**
     * DeleteUGAForwarder - 
     *
     * See also: https://docs.ucloud.cn/api/path_x-api/path_x
     */
    deleteUGAForwarder(request?: models.DeleteUGAForwarderRequest): Promise<models.DeleteUGAForwarderResponse> {
        const args = {Action: "DeleteUGAForwarder", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DeleteUGAForwarderResponse)
    }
    
        
    /**
     * DeleteUGAInstance - 
     *
     * See also: https://docs.ucloud.cn/api/path_x-api/path_x
     */
    deleteUGAInstance(request?: models.DeleteUGAInstanceRequest): Promise<models.DeleteUGAInstanceResponse> {
        const args = {Action: "DeleteUGAInstance", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DeleteUGAInstanceResponse)
    }
    
        
    /**
     * DeleteUPath - 
     *
     * See also: https://docs.ucloud.cn/api/path_x-api/path_x
     */
    deleteUPath(request?: models.DeleteUPathRequest): Promise<models.DeleteUPathResponse> {
        const args = {Action: "DeleteUPath", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DeleteUPathResponse)
    }
    
        
    /**
     * DescribeGlobalSSHInstance - 
     *
     * See also: https://docs.ucloud.cn/api/path_x-api/path_x
     */
    describeGlobalSSHInstance(request?: models.DescribeGlobalSSHInstanceRequest): Promise<models.DescribeGlobalSSHInstanceResponse> {
        const args = {Action: "DescribeGlobalSSHInstance", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeGlobalSSHInstanceResponse)
    }
    
        
    /**
     * DescribePathXLineConfig - 
     *
     * See also: https://docs.ucloud.cn/api/path_x-api/path_x
     */
    describePathXLineConfig(request?: models.DescribePathXLineConfigRequest): Promise<models.DescribePathXLineConfigResponse> {
        const args = {Action: "DescribePathXLineConfig", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribePathXLineConfigResponse)
    }
    
        
    /**
     * DescribePathXSSL - 
     *
     * See also: https://docs.ucloud.cn/api/path_x-api/path_x
     */
    describePathXSSL(request?: models.DescribePathXSSLRequest): Promise<models.DescribePathXSSLResponse> {
        const args = {Action: "DescribePathXSSL", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribePathXSSLResponse)
    }
    
        
    /**
     * DescribeUGA3Area - 
     *
     * See also: https://docs.ucloud.cn/api/path_x-api/path_x
     */
    describeUGA3Area(request?: models.DescribeUGA3AreaRequest): Promise<models.DescribeUGA3AreaResponse> {
        const args = {Action: "DescribeUGA3Area", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeUGA3AreaResponse)
    }
    
        
    /**
     * DescribeUGA3Instance - 
     *
     * See also: https://docs.ucloud.cn/api/path_x-api/path_x
     */
    describeUGA3Instance(request?: models.DescribeUGA3InstanceRequest): Promise<models.DescribeUGA3InstanceResponse> {
        const args = {Action: "DescribeUGA3Instance", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeUGA3InstanceResponse)
    }
    
        
    /**
     * DescribeUGA3Optimization - 
     *
     * See also: https://docs.ucloud.cn/api/path_x-api/path_x
     */
    describeUGA3Optimization(request?: models.DescribeUGA3OptimizationRequest): Promise<models.DescribeUGA3OptimizationResponse> {
        const args = {Action: "DescribeUGA3Optimization", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeUGA3OptimizationResponse)
    }
    
        
    /**
     * DescribeUGAInstance - 
     *
     * See also: https://docs.ucloud.cn/api/path_x-api/path_x
     */
    describeUGAInstance(request?: models.DescribeUGAInstanceRequest): Promise<models.DescribeUGAInstanceResponse> {
        const args = {Action: "DescribeUGAInstance", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeUGAInstanceResponse)
    }
    
        
    /**
     * DescribeUPath - 
     *
     * See also: https://docs.ucloud.cn/api/path_x-api/path_x
     */
    describeUPath(request?: models.DescribeUPathRequest): Promise<models.DescribeUPathResponse> {
        const args = {Action: "DescribeUPath", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeUPathResponse)
    }
    
        
    /**
     * DescribeUPathTemplate - 
     *
     * See also: https://docs.ucloud.cn/api/path_x-api/path_x
     */
    describeUPathTemplate(request?: models.DescribeUPathTemplateRequest): Promise<models.DescribeUPathTemplateResponse> {
        const args = {Action: "DescribeUPathTemplate", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeUPathTemplateResponse)
    }
    
        
    /**
     * GetGlobalSSHPrice - 
     *
     * See also: https://docs.ucloud.cn/api/path_x-api/path_x
     */
    getGlobalSSHPrice(request?: models.GetGlobalSSHPriceRequest): Promise<models.GetGlobalSSHPriceResponse> {
        const args = {Action: "GetGlobalSSHPrice", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.GetGlobalSSHPriceResponse)
    }
    
        
    /**
     * GetGlobalSSHUpdatePrice - 
     *
     * See also: https://docs.ucloud.cn/api/path_x-api/path_x
     */
    getGlobalSSHUpdatePrice(request?: models.GetGlobalSSHUpdatePriceRequest): Promise<models.GetGlobalSSHUpdatePriceResponse> {
        const args = {Action: "GetGlobalSSHUpdatePrice", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.GetGlobalSSHUpdatePriceResponse)
    }
    
        
    /**
     * GetPathXMetric - 
     *
     * See also: https://docs.ucloud.cn/api/path_x-api/path_x
     */
    getPathXMetric(request?: models.GetPathXMetricRequest): Promise<models.GetPathXMetricResponse> {
        const args = {Action: "GetPathXMetric", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.GetPathXMetricResponse)
    }
    
        
    /**
     * GetUGA3Metric - 
     *
     * See also: https://docs.ucloud.cn/api/path_x-api/path_x
     */
    getUGA3Metric(request?: models.GetUGA3MetricRequest): Promise<models.GetUGA3MetricResponse> {
        const args = {Action: "GetUGA3Metric", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.GetUGA3MetricResponse)
    }
    
        
    /**
     * GetUGA3Price - 
     *
     * See also: https://docs.ucloud.cn/api/path_x-api/path_x
     */
    getUGA3Price(request?: models.GetUGA3PriceRequest): Promise<models.GetUGA3PriceResponse> {
        const args = {Action: "GetUGA3Price", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.GetUGA3PriceResponse)
    }
    
        
    /**
     * GetUGA3UpdatePrice - 
     *
     * See also: https://docs.ucloud.cn/api/path_x-api/path_x
     */
    getUGA3UpdatePrice(request?: models.GetUGA3UpdatePriceRequest): Promise<models.GetUGA3UpdatePriceResponse> {
        const args = {Action: "GetUGA3UpdatePrice", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.GetUGA3UpdatePriceResponse)
    }
    
        
    /**
     * ModifyGlobalSSHPort - 
     *
     * See also: https://docs.ucloud.cn/api/path_x-api/path_x
     */
    modifyGlobalSSHPort(request?: models.ModifyGlobalSSHPortRequest): Promise<models.ModifyGlobalSSHPortResponse> {
        const args = {Action: "ModifyGlobalSSHPort", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.ModifyGlobalSSHPortResponse)
    }
    
        
    /**
     * ModifyGlobalSSHRemark - 
     *
     * See also: https://docs.ucloud.cn/api/path_x-api/path_x
     */
    modifyGlobalSSHRemark(request?: models.ModifyGlobalSSHRemarkRequest): Promise<models.ModifyGlobalSSHRemarkResponse> {
        const args = {Action: "ModifyGlobalSSHRemark", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.ModifyGlobalSSHRemarkResponse)
    }
    
        
    /**
     * ModifyGlobalSSHType - 
     *
     * See also: https://docs.ucloud.cn/api/path_x-api/path_x
     */
    modifyGlobalSSHType(request?: models.ModifyGlobalSSHTypeRequest): Promise<models.ModifyGlobalSSHTypeResponse> {
        const args = {Action: "ModifyGlobalSSHType", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.ModifyGlobalSSHTypeResponse)
    }
    
        
    /**
     * ModifyUGA3Bandwidth - 
     *
     * See also: https://docs.ucloud.cn/api/path_x-api/path_x
     */
    modifyUGA3Bandwidth(request?: models.ModifyUGA3BandwidthRequest): Promise<models.ModifyUGA3BandwidthResponse> {
        const args = {Action: "ModifyUGA3Bandwidth", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.ModifyUGA3BandwidthResponse)
    }
    
        
    /**
     * ModifyUGA3Instance - 
     *
     * See also: https://docs.ucloud.cn/api/path_x-api/path_x
     */
    modifyUGA3Instance(request?: models.ModifyUGA3InstanceRequest): Promise<models.ModifyUGA3InstanceResponse> {
        const args = {Action: "ModifyUGA3Instance", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.ModifyUGA3InstanceResponse)
    }
    
        
    /**
     * ModifyUGA3OriginInfo - 
     *
     * See also: https://docs.ucloud.cn/api/path_x-api/path_x
     */
    modifyUGA3OriginInfo(request?: models.ModifyUGA3OriginInfoRequest): Promise<models.ModifyUGA3OriginInfoResponse> {
        const args = {Action: "ModifyUGA3OriginInfo", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.ModifyUGA3OriginInfoResponse)
    }
    
        
    /**
     * ModifyUGA3Port - 
     *
     * See also: https://docs.ucloud.cn/api/path_x-api/path_x
     */
    modifyUGA3Port(request?: models.ModifyUGA3PortRequest): Promise<models.ModifyUGA3PortResponse> {
        const args = {Action: "ModifyUGA3Port", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.ModifyUGA3PortResponse)
    }
    
        
    /**
     * ModifyUPathBandwidth - 
     *
     * See also: https://docs.ucloud.cn/api/path_x-api/path_x
     */
    modifyUPathBandwidth(request?: models.ModifyUPathBandwidthRequest): Promise<models.ModifyUPathBandwidthResponse> {
        const args = {Action: "ModifyUPathBandwidth", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.ModifyUPathBandwidthResponse)
    }
    
        
    /**
     * ModifyUPathTemplate - 
     *
     * See also: https://docs.ucloud.cn/api/path_x-api/path_x
     */
    modifyUPathTemplate(request?: models.ModifyUPathTemplateRequest): Promise<models.ModifyUPathTemplateResponse> {
        const args = {Action: "ModifyUPathTemplate", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.ModifyUPathTemplateResponse)
    }
    
        
    /**
     * UGABindUPath - 
     *
     * See also: https://docs.ucloud.cn/api/path_x-api/path_x
     */
    uGABindUPath(request?: models.UGABindUPathRequest): Promise<models.UGABindUPathResponse> {
        const args = {Action: "UGABindUPath", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.UGABindUPathResponse)
    }
    
        
    /**
     * UGAUnBindUPath - 
     *
     * See also: https://docs.ucloud.cn/api/path_x-api/path_x
     */
    uGAUnBindUPath(request?: models.UGAUnBindUPathRequest): Promise<models.UGAUnBindUPathResponse> {
        const args = {Action: "UGAUnBindUPath", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.UGAUnBindUPathResponse)
    }
    
        
    /**
     * UnBindPathXSSL - 
     *
     * See also: https://docs.ucloud.cn/api/path_x-api/path_x
     */
    unBindPathXSSL(request?: models.UnBindPathXSSLRequest): Promise<models.UnBindPathXSSLResponse> {
        const args = {Action: "UnBindPathXSSL", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.UnBindPathXSSLResponse)
    }
    
        
    /**
     * UpdatePathXWhitelist - 
     *
     * See also: https://docs.ucloud.cn/api/path_x-api/path_x
     */
    updatePathXWhitelist(request?: models.UpdatePathXWhitelistRequest): Promise<models.UpdatePathXWhitelistResponse> {
        const args = {Action: "UpdatePathXWhitelist", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.UpdatePathXWhitelistResponse)
    }
    
}
