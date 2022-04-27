import Client from "../../core/client";
import Request from "../../core/request";
import {ConfigOptions} from "../../core/config";
import {CredentialOptions} from "../../core/credential";

import * as models from './models';

/**
 * This client is used to call actions of **UDPN** service
 */
export default class UdpnClient extends Client {
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
     * AllocateUDPN - 
     *
     * See also: https://docs.ucloud.cn/api/udpn-api/udpn
     */
    allocateUDPN(request?: models.AllocateUDPNRequest): Promise<models.AllocateUDPNResponse> {
        const args = {Action: "AllocateUDPN", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.AllocateUDPNResponse)
    }
    
        
    /**
     * DescribeUDPN - 
     *
     * See also: https://docs.ucloud.cn/api/udpn-api/udpn
     */
    describeUDPN(request?: models.DescribeUDPNRequest): Promise<models.DescribeUDPNResponse> {
        const args = {Action: "DescribeUDPN", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeUDPNResponse)
    }
    
        
    /**
     * GetUDPNLineList - 
     *
     * See also: https://docs.ucloud.cn/api/udpn-api/udpn
     */
    getUDPNLineList(request?: models.GetUDPNLineListRequest): Promise<models.GetUDPNLineListResponse> {
        const args = {Action: "GetUDPNLineList", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.GetUDPNLineListResponse)
    }
    
        
    /**
     * GetUDPNPrice - 
     *
     * See also: https://docs.ucloud.cn/api/udpn-api/udpn
     */
    getUDPNPrice(request?: models.GetUDPNPriceRequest): Promise<models.GetUDPNPriceResponse> {
        const args = {Action: "GetUDPNPrice", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.GetUDPNPriceResponse)
    }
    
        
    /**
     * GetUDPNUpgradePrice - 
     *
     * See also: https://docs.ucloud.cn/api/udpn-api/udpn
     */
    getUDPNUpgradePrice(request?: models.GetUDPNUpgradePriceRequest): Promise<models.GetUDPNUpgradePriceResponse> {
        const args = {Action: "GetUDPNUpgradePrice", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.GetUDPNUpgradePriceResponse)
    }
    
        
    /**
     * ModifyUDPNBandwidth - 
     *
     * See also: https://docs.ucloud.cn/api/udpn-api/udpn
     */
    modifyUDPNBandwidth(request?: models.ModifyUDPNBandwidthRequest): Promise<models.ModifyUDPNBandwidthResponse> {
        const args = {Action: "ModifyUDPNBandwidth", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.ModifyUDPNBandwidthResponse)
    }
    
        
    /**
     * ReleaseUDPN - 
     *
     * See also: https://docs.ucloud.cn/api/udpn-api/udpn
     */
    releaseUDPN(request?: models.ReleaseUDPNRequest): Promise<models.ReleaseUDPNResponse> {
        const args = {Action: "ReleaseUDPN", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.ReleaseUDPNResponse)
    }
    
}
