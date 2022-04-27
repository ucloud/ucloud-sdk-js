import Client from "../../core/client";
import Request from "../../core/request";
import {ConfigOptions} from "../../core/config";
import {CredentialOptions} from "../../core/credential";

import * as models from './models';

/**
 * This client is used to call actions of **UFile** service
 */
export default class UfileClient extends Client {
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
     * CreateBucket - 
     *
     * See also: https://docs.ucloud.cn/api/u_file-api/u_file
     */
    createBucket(request?: models.CreateBucketRequest): Promise<models.CreateBucketResponse> {
        const args = {Action: "CreateBucket", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.CreateBucketResponse)
    }
    
        
    /**
     * CreateUFileLifeCycle - 
     *
     * See also: https://docs.ucloud.cn/api/u_file-api/u_file
     */
    createUFileLifeCycle(request?: models.CreateUFileLifeCycleRequest): Promise<models.CreateUFileLifeCycleResponse> {
        const args = {Action: "CreateUFileLifeCycle", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.CreateUFileLifeCycleResponse)
    }
    
        
    /**
     * CreateUFileToken - 
     *
     * See also: https://docs.ucloud.cn/api/u_file-api/u_file
     */
    createUFileToken(request?: models.CreateUFileTokenRequest): Promise<models.CreateUFileTokenResponse> {
        const args = {Action: "CreateUFileToken", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.CreateUFileTokenResponse)
    }
    
        
    /**
     * DeleteBucket - 
     *
     * See also: https://docs.ucloud.cn/api/u_file-api/u_file
     */
    deleteBucket(request?: models.DeleteBucketRequest): Promise<models.DeleteBucketResponse> {
        const args = {Action: "DeleteBucket", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DeleteBucketResponse)
    }
    
        
    /**
     * DeleteUFileLifeCycle - 
     *
     * See also: https://docs.ucloud.cn/api/u_file-api/u_file
     */
    deleteUFileLifeCycle(request?: models.DeleteUFileLifeCycleRequest): Promise<models.DeleteUFileLifeCycleResponse> {
        const args = {Action: "DeleteUFileLifeCycle", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DeleteUFileLifeCycleResponse)
    }
    
        
    /**
     * DeleteUFileToken - 
     *
     * See also: https://docs.ucloud.cn/api/u_file-api/u_file
     */
    deleteUFileToken(request?: models.DeleteUFileTokenRequest): Promise<models.DeleteUFileTokenResponse> {
        const args = {Action: "DeleteUFileToken", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DeleteUFileTokenResponse)
    }
    
        
    /**
     * DescribeBucket - 
     *
     * See also: https://docs.ucloud.cn/api/u_file-api/u_file
     */
    describeBucket(request?: models.DescribeBucketRequest): Promise<models.DescribeBucketResponse> {
        const args = {Action: "DescribeBucket", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeBucketResponse)
    }
    
        
    /**
     * DescribeUFileLifeCycle - 
     *
     * See also: https://docs.ucloud.cn/api/u_file-api/u_file
     */
    describeUFileLifeCycle(request?: models.DescribeUFileLifeCycleRequest): Promise<models.DescribeUFileLifeCycleResponse> {
        const args = {Action: "DescribeUFileLifeCycle", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeUFileLifeCycleResponse)
    }
    
        
    /**
     * DescribeUFileToken - 
     *
     * See also: https://docs.ucloud.cn/api/u_file-api/u_file
     */
    describeUFileToken(request?: models.DescribeUFileTokenRequest): Promise<models.DescribeUFileTokenResponse> {
        const args = {Action: "DescribeUFileToken", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeUFileTokenResponse)
    }
    
        
    /**
     * GetUFileDailyReport - 
     *
     * See also: https://docs.ucloud.cn/api/u_file-api/u_file
     */
    getUFileDailyReport(request?: models.GetUFileDailyReportRequest): Promise<models.GetUFileDailyReportResponse> {
        const args = {Action: "GetUFileDailyReport", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.GetUFileDailyReportResponse)
    }
    
        
    /**
     * GetUFileQuota - 
     *
     * See also: https://docs.ucloud.cn/api/u_file-api/u_file
     */
    getUFileQuota(request?: models.GetUFileQuotaRequest): Promise<models.GetUFileQuotaResponse> {
        const args = {Action: "GetUFileQuota", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.GetUFileQuotaResponse)
    }
    
        
    /**
     * GetUFileQuotaInfo - 
     *
     * See also: https://docs.ucloud.cn/api/u_file-api/u_file
     */
    getUFileQuotaInfo(request?: models.GetUFileQuotaInfoRequest): Promise<models.GetUFileQuotaInfoResponse> {
        const args = {Action: "GetUFileQuotaInfo", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.GetUFileQuotaInfoResponse)
    }
    
        
    /**
     * GetUFileQuotaPrice - 
     *
     * See also: https://docs.ucloud.cn/api/u_file-api/u_file
     */
    getUFileQuotaPrice(request?: models.GetUFileQuotaPriceRequest): Promise<models.GetUFileQuotaPriceResponse> {
        const args = {Action: "GetUFileQuotaPrice", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.GetUFileQuotaPriceResponse)
    }
    
        
    /**
     * GetUFileReport - 
     *
     * See also: https://docs.ucloud.cn/api/u_file-api/u_file
     */
    getUFileReport(request?: models.GetUFileReportRequest): Promise<models.GetUFileReportResponse> {
        const args = {Action: "GetUFileReport", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.GetUFileReportResponse)
    }
    
        
    /**
     * SetUFileReferer - 
     *
     * See also: https://docs.ucloud.cn/api/u_file-api/u_file
     */
    setUFileReferer(request?: models.SetUFileRefererRequest): Promise<models.SetUFileRefererResponse> {
        const args = {Action: "SetUFileReferer", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.SetUFileRefererResponse)
    }
    
        
    /**
     * UpdateBucket - 
     *
     * See also: https://docs.ucloud.cn/api/u_file-api/u_file
     */
    updateBucket(request?: models.UpdateBucketRequest): Promise<models.UpdateBucketResponse> {
        const args = {Action: "UpdateBucket", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.UpdateBucketResponse)
    }
    
        
    /**
     * UpdateUFileLifeCycle - 
     *
     * See also: https://docs.ucloud.cn/api/u_file-api/u_file
     */
    updateUFileLifeCycle(request?: models.UpdateUFileLifeCycleRequest): Promise<models.UpdateUFileLifeCycleResponse> {
        const args = {Action: "UpdateUFileLifeCycle", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.UpdateUFileLifeCycleResponse)
    }
    
        
    /**
     * UpdateUFileToken - 
     *
     * See also: https://docs.ucloud.cn/api/u_file-api/u_file
     */
    updateUFileToken(request?: models.UpdateUFileTokenRequest): Promise<models.UpdateUFileTokenResponse> {
        const args = {Action: "UpdateUFileToken", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.UpdateUFileTokenResponse)
    }
    
}
