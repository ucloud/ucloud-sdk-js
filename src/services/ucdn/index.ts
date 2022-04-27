import Client from "../../core/client";
import Request from "../../core/request";
import {ConfigOptions} from "../../core/config";
import {CredentialOptions} from "../../core/credential";

import * as models from './models';

/**
 * This client is used to call actions of **UCDN** service
 */
export default class UcdnClient extends Client {
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
     * AddCertificate - 
     *
     * See also: https://docs.ucloud.cn/api/ucdn-api/ucdn
     */
    addCertificate(request?: models.AddCertificateRequest): Promise<models.AddCertificateResponse> {
        const args = {Action: "AddCertificate", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.AddCertificateResponse)
    }
    
        
    /**
     * ControlUcdnDomainCacheAccess - 
     *
     * See also: https://docs.ucloud.cn/api/ucdn-api/ucdn
     */
    controlUcdnDomainCacheAccess(request?: models.ControlUcdnDomainCacheAccessRequest): Promise<models.ControlUcdnDomainCacheAccessResponse> {
        const args = {Action: "ControlUcdnDomainCacheAccess", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.ControlUcdnDomainCacheAccessResponse)
    }
    
        
    /**
     * DeleteCertificate - 
     *
     * See also: https://docs.ucloud.cn/api/ucdn-api/ucdn
     */
    deleteCertificate(request?: models.DeleteCertificateRequest): Promise<models.DeleteCertificateResponse> {
        const args = {Action: "DeleteCertificate", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DeleteCertificateResponse)
    }
    
        
    /**
     * DescribeNewUcdnPrefetchCacheTask - 
     *
     * See also: https://docs.ucloud.cn/api/ucdn-api/ucdn
     */
    describeNewUcdnPrefetchCacheTask(request?: models.DescribeNewUcdnPrefetchCacheTaskRequest): Promise<models.DescribeNewUcdnPrefetchCacheTaskResponse> {
        const args = {Action: "DescribeNewUcdnPrefetchCacheTask", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeNewUcdnPrefetchCacheTaskResponse)
    }
    
        
    /**
     * DescribeNewUcdnRefreshCacheTask - 
     *
     * See also: https://docs.ucloud.cn/api/ucdn-api/ucdn
     */
    describeNewUcdnRefreshCacheTask(request?: models.DescribeNewUcdnRefreshCacheTaskRequest): Promise<models.DescribeNewUcdnRefreshCacheTaskResponse> {
        const args = {Action: "DescribeNewUcdnRefreshCacheTask", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeNewUcdnRefreshCacheTaskResponse)
    }
    
        
    /**
     * GetCertificateV2 - 
     *
     * See also: https://docs.ucloud.cn/api/ucdn-api/ucdn
     */
    getCertificateV2(request?: models.GetCertificateV2Request): Promise<models.GetCertificateV2Response> {
        const args = {Action: "GetCertificateV2", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.GetCertificateV2Response)
    }
    
        
    /**
     * GetNewUcdnDomainHitRate - 
     *
     * See also: https://docs.ucloud.cn/api/ucdn-api/ucdn
     */
    getNewUcdnDomainHitRate(request?: models.GetNewUcdnDomainHitRateRequest): Promise<models.GetNewUcdnDomainHitRateResponse> {
        const args = {Action: "GetNewUcdnDomainHitRate", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.GetNewUcdnDomainHitRateResponse)
    }
    
        
    /**
     * GetNewUcdnLogRefererStatistics - 
     *
     * See also: https://docs.ucloud.cn/api/ucdn-api/ucdn
     */
    getNewUcdnLogRefererStatistics(request?: models.GetNewUcdnLogRefererStatisticsRequest): Promise<models.GetNewUcdnLogRefererStatisticsResponse> {
        const args = {Action: "GetNewUcdnLogRefererStatistics", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.GetNewUcdnLogRefererStatisticsResponse)
    }
    
        
    /**
     * GetNewUcdnLogUrlStatistics - 
     *
     * See also: https://docs.ucloud.cn/api/ucdn-api/ucdn
     */
    getNewUcdnLogUrlStatistics(request?: models.GetNewUcdnLogUrlStatisticsRequest): Promise<models.GetNewUcdnLogUrlStatisticsResponse> {
        const args = {Action: "GetNewUcdnLogUrlStatistics", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.GetNewUcdnLogUrlStatisticsResponse)
    }
    
        
    /**
     * GetUcdnDomain95BandwidthV2 - 
     *
     * See also: https://docs.ucloud.cn/api/ucdn-api/ucdn
     */
    getUcdnDomain95BandwidthV2(request?: models.GetUcdnDomain95BandwidthV2Request): Promise<models.GetUcdnDomain95BandwidthV2Response> {
        const args = {Action: "GetUcdnDomain95BandwidthV2", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.GetUcdnDomain95BandwidthV2Response)
    }
    
        
    /**
     * GetUcdnDomainBandwidthV2 - 
     *
     * See also: https://docs.ucloud.cn/api/ucdn-api/ucdn
     */
    getUcdnDomainBandwidthV2(request?: models.GetUcdnDomainBandwidthV2Request): Promise<models.GetUcdnDomainBandwidthV2Response> {
        const args = {Action: "GetUcdnDomainBandwidthV2", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.GetUcdnDomainBandwidthV2Response)
    }
    
        
    /**
     * GetUcdnDomainConfig - 
     *
     * See also: https://docs.ucloud.cn/api/ucdn-api/ucdn
     */
    getUcdnDomainConfig(request?: models.GetUcdnDomainConfigRequest): Promise<models.GetUcdnDomainConfigResponse> {
        const args = {Action: "GetUcdnDomainConfig", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.GetUcdnDomainConfigResponse)
    }
    
        
    /**
     * GetUcdnDomainHitRate - 
     *
     * See also: https://docs.ucloud.cn/api/ucdn-api/ucdn
     */
    getUcdnDomainHitRate(request?: models.GetUcdnDomainHitRateRequest): Promise<models.GetUcdnDomainHitRateResponse> {
        const args = {Action: "GetUcdnDomainHitRate", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.GetUcdnDomainHitRateResponse)
    }
    
        
    /**
     * GetUcdnDomainHttpCodeV2 - 
     *
     * See also: https://docs.ucloud.cn/api/ucdn-api/ucdn
     */
    getUcdnDomainHttpCodeV2(request?: models.GetUcdnDomainHttpCodeV2Request): Promise<models.GetUcdnDomainHttpCodeV2Response> {
        const args = {Action: "GetUcdnDomainHttpCodeV2", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.GetUcdnDomainHttpCodeV2Response)
    }
    
        
    /**
     * GetUcdnDomainInfoList - 
     *
     * See also: https://docs.ucloud.cn/api/ucdn-api/ucdn
     */
    getUcdnDomainInfoList(request?: models.GetUcdnDomainInfoListRequest): Promise<models.GetUcdnDomainInfoListResponse> {
        const args = {Action: "GetUcdnDomainInfoList", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.GetUcdnDomainInfoListResponse)
    }
    
        
    /**
     * GetUcdnDomainLog - 
     *
     * See also: https://docs.ucloud.cn/api/ucdn-api/ucdn
     */
    getUcdnDomainLog(request?: models.GetUcdnDomainLogRequest): Promise<models.GetUcdnDomainLogResponse> {
        const args = {Action: "GetUcdnDomainLog", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.GetUcdnDomainLogResponse)
    }
    
        
    /**
     * GetUcdnDomainLogV2 - 
     *
     * See also: https://docs.ucloud.cn/api/ucdn-api/ucdn
     */
    getUcdnDomainLogV2(request?: models.GetUcdnDomainLogV2Request): Promise<models.GetUcdnDomainLogV2Response> {
        const args = {Action: "GetUcdnDomainLogV2", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.GetUcdnDomainLogV2Response)
    }
    
        
    /**
     * GetUcdnDomainOriginHttpCode - 
     *
     * See also: https://docs.ucloud.cn/api/ucdn-api/ucdn
     */
    getUcdnDomainOriginHttpCode(request?: models.GetUcdnDomainOriginHttpCodeRequest): Promise<models.GetUcdnDomainOriginHttpCodeResponse> {
        const args = {Action: "GetUcdnDomainOriginHttpCode", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.GetUcdnDomainOriginHttpCodeResponse)
    }
    
        
    /**
     * GetUcdnDomainOriginHttpCodeDetail - 
     *
     * See also: https://docs.ucloud.cn/api/ucdn-api/ucdn
     */
    getUcdnDomainOriginHttpCodeDetail(request?: models.GetUcdnDomainOriginHttpCodeDetailRequest): Promise<models.GetUcdnDomainOriginHttpCodeDetailResponse> {
        const args = {Action: "GetUcdnDomainOriginHttpCodeDetail", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.GetUcdnDomainOriginHttpCodeDetailResponse)
    }
    
        
    /**
     * GetUcdnDomainOriginRequestNum - 
     *
     * See also: https://docs.ucloud.cn/api/ucdn-api/ucdn
     */
    getUcdnDomainOriginRequestNum(request?: models.GetUcdnDomainOriginRequestNumRequest): Promise<models.GetUcdnDomainOriginRequestNumResponse> {
        const args = {Action: "GetUcdnDomainOriginRequestNum", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.GetUcdnDomainOriginRequestNumResponse)
    }
    
        
    /**
     * GetUcdnDomainPrefetchEnable - 
     *
     * See also: https://docs.ucloud.cn/api/ucdn-api/ucdn
     */
    getUcdnDomainPrefetchEnable(request?: models.GetUcdnDomainPrefetchEnableRequest): Promise<models.GetUcdnDomainPrefetchEnableResponse> {
        const args = {Action: "GetUcdnDomainPrefetchEnable", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.GetUcdnDomainPrefetchEnableResponse)
    }
    
        
    /**
     * GetUcdnDomainRequestNumV3 - 
     *
     * See also: https://docs.ucloud.cn/api/ucdn-api/ucdn
     */
    getUcdnDomainRequestNumV3(request?: models.GetUcdnDomainRequestNumV3Request): Promise<models.GetUcdnDomainRequestNumV3Response> {
        const args = {Action: "GetUcdnDomainRequestNumV3", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.GetUcdnDomainRequestNumV3Response)
    }
    
        
    /**
     * GetUcdnPassBandwidthV2 - 
     *
     * See also: https://docs.ucloud.cn/api/ucdn-api/ucdn
     */
    getUcdnPassBandwidthV2(request?: models.GetUcdnPassBandwidthV2Request): Promise<models.GetUcdnPassBandwidthV2Response> {
        const args = {Action: "GetUcdnPassBandwidthV2", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.GetUcdnPassBandwidthV2Response)
    }
    
        
    /**
     * GetUcdnProIspBandwidthV2 - 
     *
     * See also: https://docs.ucloud.cn/api/ucdn-api/ucdn
     */
    getUcdnProIspBandwidthV2(request?: models.GetUcdnProIspBandwidthV2Request): Promise<models.GetUcdnProIspBandwidthV2Response> {
        const args = {Action: "GetUcdnProIspBandwidthV2", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.GetUcdnProIspBandwidthV2Response)
    }
    
        
    /**
     * GetUcdnProIspRequestNumV2 - 
     *
     * See also: https://docs.ucloud.cn/api/ucdn-api/ucdn
     */
    getUcdnProIspRequestNumV2(request?: models.GetUcdnProIspRequestNumV2Request): Promise<models.GetUcdnProIspRequestNumV2Response> {
        const args = {Action: "GetUcdnProIspRequestNumV2", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.GetUcdnProIspRequestNumV2Response)
    }
    
        
    /**
     * GetUcdnTrafficV2 - 
     *
     * See also: https://docs.ucloud.cn/api/ucdn-api/ucdn
     */
    getUcdnTrafficV2(request?: models.GetUcdnTrafficV2Request): Promise<models.GetUcdnTrafficV2Response> {
        const args = {Action: "GetUcdnTrafficV2", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.GetUcdnTrafficV2Response)
    }
    
        
    /**
     * PrefetchNewUcdnDomainCache - 
     *
     * See also: https://docs.ucloud.cn/api/ucdn-api/ucdn
     */
    prefetchNewUcdnDomainCache(request?: models.PrefetchNewUcdnDomainCacheRequest): Promise<models.PrefetchNewUcdnDomainCacheResponse> {
        const args = {Action: "PrefetchNewUcdnDomainCache", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.PrefetchNewUcdnDomainCacheResponse)
    }
    
        
    /**
     * QueryIpLocation - 
     *
     * See also: https://docs.ucloud.cn/api/ucdn-api/ucdn
     */
    queryIpLocation(request?: models.QueryIpLocationRequest): Promise<models.QueryIpLocationResponse> {
        const args = {Action: "QueryIpLocation", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.QueryIpLocationResponse)
    }
    
        
    /**
     * RefreshNewUcdnDomainCache - 
     *
     * See also: https://docs.ucloud.cn/api/ucdn-api/ucdn
     */
    refreshNewUcdnDomainCache(request?: models.RefreshNewUcdnDomainCacheRequest): Promise<models.RefreshNewUcdnDomainCacheResponse> {
        const args = {Action: "RefreshNewUcdnDomainCache", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.RefreshNewUcdnDomainCacheResponse)
    }
    
        
    /**
     * SwitchUcdnChargeType - 
     *
     * See also: https://docs.ucloud.cn/api/ucdn-api/ucdn
     */
    switchUcdnChargeType(request?: models.SwitchUcdnChargeTypeRequest): Promise<models.SwitchUcdnChargeTypeResponse> {
        const args = {Action: "SwitchUcdnChargeType", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.SwitchUcdnChargeTypeResponse)
    }
    
}
