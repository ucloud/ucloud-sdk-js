import Client from "../../core/client";
import Request from "../../core/request";
import {ConfigOptions} from "../../core/config";
import {CredentialOptions} from "../../core/credential";

import * as models from './models';

/**
 * This client is used to call actions of **UFS** service
 */
export default class UfsClient extends Client {
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
     * AddUFSVolumeMountPoint - 
     *
     * See also: https://docs.ucloud.cn/api/ufs-api/ufs
     */
    addUFSVolumeMountPoint(request?: models.AddUFSVolumeMountPointRequest): Promise<models.AddUFSVolumeMountPointResponse> {
        const args = {Action: "AddUFSVolumeMountPoint", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.AddUFSVolumeMountPointResponse)
    }
    
        
    /**
     * CreateUFSVolume - 
     *
     * See also: https://docs.ucloud.cn/api/ufs-api/ufs
     */
    createUFSVolume(request?: models.CreateUFSVolumeRequest): Promise<models.CreateUFSVolumeResponse> {
        const args = {Action: "CreateUFSVolume", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.CreateUFSVolumeResponse)
    }
    
        
    /**
     * DescribeUFSVolume2 - 
     *
     * See also: https://docs.ucloud.cn/api/ufs-api/ufs
     */
    describeUFSVolume2(request?: models.DescribeUFSVolume2Request): Promise<models.DescribeUFSVolume2Response> {
        const args = {Action: "DescribeUFSVolume2", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeUFSVolume2Response)
    }
    
        
    /**
     * DescribeUFSVolumeMountpoint - 
     *
     * See also: https://docs.ucloud.cn/api/ufs-api/ufs
     */
    describeUFSVolumeMountpoint(request?: models.DescribeUFSVolumeMountpointRequest): Promise<models.DescribeUFSVolumeMountpointResponse> {
        const args = {Action: "DescribeUFSVolumeMountpoint", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeUFSVolumeMountpointResponse)
    }
    
        
    /**
     * DescribeUFSVolumePrice - 
     *
     * See also: https://docs.ucloud.cn/api/ufs-api/ufs
     */
    describeUFSVolumePrice(request?: models.DescribeUFSVolumePriceRequest): Promise<models.DescribeUFSVolumePriceResponse> {
        const args = {Action: "DescribeUFSVolumePrice", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeUFSVolumePriceResponse)
    }
    
        
    /**
     * ExtendUFSVolume - 
     *
     * See also: https://docs.ucloud.cn/api/ufs-api/ufs
     */
    extendUFSVolume(request?: models.ExtendUFSVolumeRequest): Promise<models.ExtendUFSVolumeResponse> {
        const args = {Action: "ExtendUFSVolume", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.ExtendUFSVolumeResponse)
    }
    
        
    /**
     * RemoveUFSVolume - 
     *
     * See also: https://docs.ucloud.cn/api/ufs-api/ufs
     */
    removeUFSVolume(request?: models.RemoveUFSVolumeRequest): Promise<models.RemoveUFSVolumeResponse> {
        const args = {Action: "RemoveUFSVolume", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.RemoveUFSVolumeResponse)
    }
    
        
    /**
     * RemoveUFSVolumeMountPoint - 
     *
     * See also: https://docs.ucloud.cn/api/ufs-api/ufs
     */
    removeUFSVolumeMountPoint(request?: models.RemoveUFSVolumeMountPointRequest): Promise<models.RemoveUFSVolumeMountPointResponse> {
        const args = {Action: "RemoveUFSVolumeMountPoint", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.RemoveUFSVolumeMountPointResponse)
    }
    
        
    /**
     * UpdateUFSVolumeInfo - 
     *
     * See also: https://docs.ucloud.cn/api/ufs-api/ufs
     */
    updateUFSVolumeInfo(request?: models.UpdateUFSVolumeInfoRequest): Promise<models.UpdateUFSVolumeInfoResponse> {
        const args = {Action: "UpdateUFSVolumeInfo", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.UpdateUFSVolumeInfoResponse)
    }
    
}
