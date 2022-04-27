import Client from "../../core/client";
import Request from "../../core/request";
import {ConfigOptions} from "../../core/config";
import {CredentialOptions} from "../../core/credential";

import * as models from './models';

/**
 * This client is used to call actions of **UK8S** service
 */
export default class Uk8sClient extends Client {
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
     * AddUK8SExistingUHost - 
     *
     * See also: https://docs.ucloud.cn/api/uk8_s-api/uk8_s
     */
    addUK8SExistingUHost(request?: models.AddUK8SExistingUHostRequest): Promise<models.AddUK8SExistingUHostResponse> {
        const args = {Action: "AddUK8SExistingUHost", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.AddUK8SExistingUHostResponse)
    }
    
        
    /**
     * AddUK8SNodeGroup - 
     *
     * See also: https://docs.ucloud.cn/api/uk8_s-api/uk8_s
     */
    addUK8SNodeGroup(request?: models.AddUK8SNodeGroupRequest): Promise<models.AddUK8SNodeGroupResponse> {
        const args = {Action: "AddUK8SNodeGroup", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.AddUK8SNodeGroupResponse)
    }
    
        
    /**
     * AddUK8SPHostNode - 
     *
     * See also: https://docs.ucloud.cn/api/uk8_s-api/uk8_s
     */
    addUK8SPHostNode(request?: models.AddUK8SPHostNodeRequest): Promise<models.AddUK8SPHostNodeResponse> {
        const args = {Action: "AddUK8SPHostNode", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.AddUK8SPHostNodeResponse)
    }
    
        
    /**
     * AddUK8SUHostNode - 
     *
     * See also: https://docs.ucloud.cn/api/uk8_s-api/uk8_s
     */
    addUK8SUHostNode(request?: models.AddUK8SUHostNodeRequest): Promise<models.AddUK8SUHostNodeResponse> {
        const args = {Action: "AddUK8SUHostNode", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.AddUK8SUHostNodeResponse)
    }
    
        
    /**
     * CreateUK8SClusterV2 - 
     *
     * See also: https://docs.ucloud.cn/api/uk8_s-api/uk8_s
     */
    createUK8SClusterV2(request?: models.CreateUK8SClusterV2Request): Promise<models.CreateUK8SClusterV2Response> {
        const args = {Action: "CreateUK8SClusterV2", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.CreateUK8SClusterV2Response)
    }
    
        
    /**
     * DelUK8SCluster - 
     *
     * See also: https://docs.ucloud.cn/api/uk8_s-api/uk8_s
     */
    delUK8SCluster(request?: models.DelUK8SClusterRequest): Promise<models.DelUK8SClusterResponse> {
        const args = {Action: "DelUK8SCluster", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DelUK8SClusterResponse)
    }
    
        
    /**
     * DelUK8SClusterNodeV2 - 
     *
     * See also: https://docs.ucloud.cn/api/uk8_s-api/uk8_s
     */
    delUK8SClusterNodeV2(request?: models.DelUK8SClusterNodeV2Request): Promise<models.DelUK8SClusterNodeV2Response> {
        const args = {Action: "DelUK8SClusterNodeV2", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DelUK8SClusterNodeV2Response)
    }
    
        
    /**
     * DescribeUK8SCluster - 
     *
     * See also: https://docs.ucloud.cn/api/uk8_s-api/uk8_s
     */
    describeUK8SCluster(request?: models.DescribeUK8SClusterRequest): Promise<models.DescribeUK8SClusterResponse> {
        const args = {Action: "DescribeUK8SCluster", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeUK8SClusterResponse)
    }
    
        
    /**
     * DescribeUK8SImage - 
     *
     * See also: https://docs.ucloud.cn/api/uk8_s-api/uk8_s
     */
    describeUK8SImage(request?: models.DescribeUK8SImageRequest): Promise<models.DescribeUK8SImageResponse> {
        const args = {Action: "DescribeUK8SImage", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeUK8SImageResponse)
    }
    
        
    /**
     * DescribeUK8SNode - 
     *
     * See also: https://docs.ucloud.cn/api/uk8_s-api/uk8_s
     */
    describeUK8SNode(request?: models.DescribeUK8SNodeRequest): Promise<models.DescribeUK8SNodeResponse> {
        const args = {Action: "DescribeUK8SNode", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeUK8SNodeResponse)
    }
    
        
    /**
     * ListUK8SClusterNodeV2 - 
     *
     * See also: https://docs.ucloud.cn/api/uk8_s-api/uk8_s
     */
    listUK8SClusterNodeV2(request?: models.ListUK8SClusterNodeV2Request): Promise<models.ListUK8SClusterNodeV2Response> {
        const args = {Action: "ListUK8SClusterNodeV2", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.ListUK8SClusterNodeV2Response)
    }
    
        
    /**
     * ListUK8SClusterV2 - 
     *
     * See also: https://docs.ucloud.cn/api/uk8_s-api/uk8_s
     */
    listUK8SClusterV2(request?: models.ListUK8SClusterV2Request): Promise<models.ListUK8SClusterV2Response> {
        const args = {Action: "ListUK8SClusterV2", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.ListUK8SClusterV2Response)
    }
    
        
    /**
     * ListUK8SNodeGroup - 
     *
     * See also: https://docs.ucloud.cn/api/uk8_s-api/uk8_s
     */
    listUK8SNodeGroup(request?: models.ListUK8SNodeGroupRequest): Promise<models.ListUK8SNodeGroupResponse> {
        const args = {Action: "ListUK8SNodeGroup", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.ListUK8SNodeGroupResponse)
    }
    
        
    /**
     * RemoveUK8SNodeGroup - 
     *
     * See also: https://docs.ucloud.cn/api/uk8_s-api/uk8_s
     */
    removeUK8SNodeGroup(request?: models.RemoveUK8SNodeGroupRequest): Promise<models.RemoveUK8SNodeGroupResponse> {
        const args = {Action: "RemoveUK8SNodeGroup", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.RemoveUK8SNodeGroupResponse)
    }
    
}
