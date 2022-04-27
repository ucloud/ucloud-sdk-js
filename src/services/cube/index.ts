import Client from "../../core/client";
import Request from "../../core/request";
import {ConfigOptions} from "../../core/config";
import {CredentialOptions} from "../../core/credential";

import * as models from './models';

/**
 * This client is used to call actions of **Cube** service
 */
export default class CubeClient extends Client {
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
     * CreateCubeDeployment - 
     *
     * See also: https://docs.ucloud.cn/api/cube-api/cube
     */
    createCubeDeployment(request?: models.CreateCubeDeploymentRequest): Promise<models.CreateCubeDeploymentResponse> {
        const args = {Action: "CreateCubeDeployment", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.CreateCubeDeploymentResponse)
    }
    
        
    /**
     * CreateCubePod - 
     *
     * See also: https://docs.ucloud.cn/api/cube-api/cube
     */
    createCubePod(request?: models.CreateCubePodRequest): Promise<models.CreateCubePodResponse> {
        const args = {Action: "CreateCubePod", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.CreateCubePodResponse)
    }
    
        
    /**
     * DeleteCubeDeployment - 
     *
     * See also: https://docs.ucloud.cn/api/cube-api/cube
     */
    deleteCubeDeployment(request?: models.DeleteCubeDeploymentRequest): Promise<models.DeleteCubeDeploymentResponse> {
        const args = {Action: "DeleteCubeDeployment", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DeleteCubeDeploymentResponse)
    }
    
        
    /**
     * DeleteCubePod - 
     *
     * See also: https://docs.ucloud.cn/api/cube-api/cube
     */
    deleteCubePod(request?: models.DeleteCubePodRequest): Promise<models.DeleteCubePodResponse> {
        const args = {Action: "DeleteCubePod", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DeleteCubePodResponse)
    }
    
        
    /**
     * GetCubeDeployment - 
     *
     * See also: https://docs.ucloud.cn/api/cube-api/cube
     */
    getCubeDeployment(request?: models.GetCubeDeploymentRequest): Promise<models.GetCubeDeploymentResponse> {
        const args = {Action: "GetCubeDeployment", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.GetCubeDeploymentResponse)
    }
    
        
    /**
     * GetCubeExecToken - 
     *
     * See also: https://docs.ucloud.cn/api/cube-api/cube
     */
    getCubeExecToken(request?: models.GetCubeExecTokenRequest): Promise<models.GetCubeExecTokenResponse> {
        const args = {Action: "GetCubeExecToken", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.GetCubeExecTokenResponse)
    }
    
        
    /**
     * GetCubeExtendInfo - 
     *
     * See also: https://docs.ucloud.cn/api/cube-api/cube
     */
    getCubeExtendInfo(request?: models.GetCubeExtendInfoRequest): Promise<models.GetCubeExtendInfoResponse> {
        const args = {Action: "GetCubeExtendInfo", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.GetCubeExtendInfoResponse)
    }
    
        
    /**
     * GetCubeMetrics - 
     *
     * See also: https://docs.ucloud.cn/api/cube-api/cube
     */
    getCubeMetrics(request?: models.GetCubeMetricsRequest): Promise<models.GetCubeMetricsResponse> {
        const args = {Action: "GetCubeMetrics", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.GetCubeMetricsResponse)
    }
    
        
    /**
     * GetCubePod - 
     *
     * See also: https://docs.ucloud.cn/api/cube-api/cube
     */
    getCubePod(request?: models.GetCubePodRequest): Promise<models.GetCubePodResponse> {
        const args = {Action: "GetCubePod", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.GetCubePodResponse)
    }
    
        
    /**
     * GetCubePrice - 
     *
     * See also: https://docs.ucloud.cn/api/cube-api/cube
     */
    getCubePrice(request?: models.GetCubePriceRequest): Promise<models.GetCubePriceResponse> {
        const args = {Action: "GetCubePrice", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.GetCubePriceResponse)
    }
    
        
    /**
     * GetCubeToken - 
     *
     * See also: https://docs.ucloud.cn/api/cube-api/cube
     */
    getCubeToken(request?: models.GetCubeTokenRequest): Promise<models.GetCubeTokenResponse> {
        const args = {Action: "GetCubeToken", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.GetCubeTokenResponse)
    }
    
        
    /**
     * ListCubeDeployment - 
     *
     * See also: https://docs.ucloud.cn/api/cube-api/cube
     */
    listCubeDeployment(request?: models.ListCubeDeploymentRequest): Promise<models.ListCubeDeploymentResponse> {
        const args = {Action: "ListCubeDeployment", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.ListCubeDeploymentResponse)
    }
    
        
    /**
     * ListCubePod - 
     *
     * See also: https://docs.ucloud.cn/api/cube-api/cube
     */
    listCubePod(request?: models.ListCubePodRequest): Promise<models.ListCubePodResponse> {
        const args = {Action: "ListCubePod", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.ListCubePodResponse)
    }
    
        
    /**
     * ModifyCubeExtendInfo - 
     *
     * See also: https://docs.ucloud.cn/api/cube-api/cube
     */
    modifyCubeExtendInfo(request?: models.ModifyCubeExtendInfoRequest): Promise<models.ModifyCubeExtendInfoResponse> {
        const args = {Action: "ModifyCubeExtendInfo", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.ModifyCubeExtendInfoResponse)
    }
    
        
    /**
     * ModifyCubeTag - 
     *
     * See also: https://docs.ucloud.cn/api/cube-api/cube
     */
    modifyCubeTag(request?: models.ModifyCubeTagRequest): Promise<models.ModifyCubeTagResponse> {
        const args = {Action: "ModifyCubeTag", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.ModifyCubeTagResponse)
    }
    
        
    /**
     * RebootCubePod - 
     *
     * See also: https://docs.ucloud.cn/api/cube-api/cube
     */
    rebootCubePod(request?: models.RebootCubePodRequest): Promise<models.RebootCubePodResponse> {
        const args = {Action: "RebootCubePod", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.RebootCubePodResponse)
    }
    
        
    /**
     * RenewCubePod - 
     *
     * See also: https://docs.ucloud.cn/api/cube-api/cube
     */
    renewCubePod(request?: models.RenewCubePodRequest): Promise<models.RenewCubePodResponse> {
        const args = {Action: "RenewCubePod", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.RenewCubePodResponse)
    }
    
        
    /**
     * UpdateCubeDeployment - 
     *
     * See also: https://docs.ucloud.cn/api/cube-api/cube
     */
    updateCubeDeployment(request?: models.UpdateCubeDeploymentRequest): Promise<models.UpdateCubeDeploymentResponse> {
        const args = {Action: "UpdateCubeDeployment", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.UpdateCubeDeploymentResponse)
    }
    
}
