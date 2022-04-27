import Client from "../../core/client";
import Request from "../../core/request";
import {ConfigOptions} from "../../core/config";
import {CredentialOptions} from "../../core/credential";

import * as models from './models';

/**
 * This client is used to call actions of **ULB** service
 */
export default class UlbClient extends Client {
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
     * AllocateBackend - 
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/ulb
     */
    allocateBackend(request?: models.AllocateBackendRequest): Promise<models.AllocateBackendResponse> {
        const args = {Action: "AllocateBackend", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.AllocateBackendResponse)
    }
    
        
    /**
     * BindSSL - 
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/ulb
     */
    bindSSL(request?: models.BindSSLRequest): Promise<models.BindSSLResponse> {
        const args = {Action: "BindSSL", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.BindSSLResponse)
    }
    
        
    /**
     * CreatePolicy - 
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/ulb
     */
    createPolicy(request?: models.CreatePolicyRequest): Promise<models.CreatePolicyResponse> {
        const args = {Action: "CreatePolicy", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.CreatePolicyResponse)
    }
    
        
    /**
     * CreateSSL - 
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/ulb
     */
    createSSL(request?: models.CreateSSLRequest): Promise<models.CreateSSLResponse> {
        const args = {Action: "CreateSSL", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.CreateSSLResponse)
    }
    
        
    /**
     * CreateULB - 
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/ulb
     */
    createULB(request?: models.CreateULBRequest): Promise<models.CreateULBResponse> {
        const args = {Action: "CreateULB", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.CreateULBResponse)
    }
    
        
    /**
     * CreateVServer - 
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/ulb
     */
    createVServer(request?: models.CreateVServerRequest): Promise<models.CreateVServerResponse> {
        const args = {Action: "CreateVServer", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.CreateVServerResponse)
    }
    
        
    /**
     * DeletePolicy - 
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/ulb
     */
    deletePolicy(request?: models.DeletePolicyRequest): Promise<models.DeletePolicyResponse> {
        const args = {Action: "DeletePolicy", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DeletePolicyResponse)
    }
    
        
    /**
     * DeleteSSL - 
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/ulb
     */
    deleteSSL(request?: models.DeleteSSLRequest): Promise<models.DeleteSSLResponse> {
        const args = {Action: "DeleteSSL", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DeleteSSLResponse)
    }
    
        
    /**
     * DeleteULB - 
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/ulb
     */
    deleteULB(request?: models.DeleteULBRequest): Promise<models.DeleteULBResponse> {
        const args = {Action: "DeleteULB", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DeleteULBResponse)
    }
    
        
    /**
     * DeleteVServer - 
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/ulb
     */
    deleteVServer(request?: models.DeleteVServerRequest): Promise<models.DeleteVServerResponse> {
        const args = {Action: "DeleteVServer", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DeleteVServerResponse)
    }
    
        
    /**
     * DescribeSSL - 
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/ulb
     */
    describeSSL(request?: models.DescribeSSLRequest): Promise<models.DescribeSSLResponse> {
        const args = {Action: "DescribeSSL", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeSSLResponse)
    }
    
        
    /**
     * DescribeULB - 
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/ulb
     */
    describeULB(request?: models.DescribeULBRequest): Promise<models.DescribeULBResponse> {
        const args = {Action: "DescribeULB", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeULBResponse)
    }
    
        
    /**
     * DescribeULBSimple - 
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/ulb
     */
    describeULBSimple(request?: models.DescribeULBSimpleRequest): Promise<models.DescribeULBSimpleResponse> {
        const args = {Action: "DescribeULBSimple", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeULBSimpleResponse)
    }
    
        
    /**
     * DescribeVServer - 
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/ulb
     */
    describeVServer(request?: models.DescribeVServerRequest): Promise<models.DescribeVServerResponse> {
        const args = {Action: "DescribeVServer", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeVServerResponse)
    }
    
        
    /**
     * ReleaseBackend - 
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/ulb
     */
    releaseBackend(request?: models.ReleaseBackendRequest): Promise<models.ReleaseBackendResponse> {
        const args = {Action: "ReleaseBackend", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.ReleaseBackendResponse)
    }
    
        
    /**
     * UnbindSSL - 
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/ulb
     */
    unbindSSL(request?: models.UnbindSSLRequest): Promise<models.UnbindSSLResponse> {
        const args = {Action: "UnbindSSL", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.UnbindSSLResponse)
    }
    
        
    /**
     * UpdateBackendAttribute - 
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/ulb
     */
    updateBackendAttribute(request?: models.UpdateBackendAttributeRequest): Promise<models.UpdateBackendAttributeResponse> {
        const args = {Action: "UpdateBackendAttribute", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.UpdateBackendAttributeResponse)
    }
    
        
    /**
     * UpdatePolicy - 
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/ulb
     */
    updatePolicy(request?: models.UpdatePolicyRequest): Promise<models.UpdatePolicyResponse> {
        const args = {Action: "UpdatePolicy", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.UpdatePolicyResponse)
    }
    
        
    /**
     * UpdateSSLAttribute - 
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/ulb
     */
    updateSSLAttribute(request?: models.UpdateSSLAttributeRequest): Promise<models.UpdateSSLAttributeResponse> {
        const args = {Action: "UpdateSSLAttribute", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.UpdateSSLAttributeResponse)
    }
    
        
    /**
     * UpdateULBAttribute - 
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/ulb
     */
    updateULBAttribute(request?: models.UpdateULBAttributeRequest): Promise<models.UpdateULBAttributeResponse> {
        const args = {Action: "UpdateULBAttribute", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.UpdateULBAttributeResponse)
    }
    
        
    /**
     * UpdateVServerAttribute - 
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/ulb
     */
    updateVServerAttribute(request?: models.UpdateVServerAttributeRequest): Promise<models.UpdateVServerAttributeResponse> {
        const args = {Action: "UpdateVServerAttribute", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.UpdateVServerAttributeResponse)
    }
    
}
