import Client from "../../core/client";
import Request from "../../core/request";
import {ConfigOptions} from "../../core/config";
import {CredentialOptions} from "../../core/credential";

import * as models from './models';

/**
 * This client is used to call actions of **IPSecVPN** service
 */
export default class IpsecvpnClient extends Client {
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
     * CreateRemoteVPNGateway - 
     *
     * See also: https://docs.ucloud.cn/api/ip_sec_vpn-api/ip_sec_vpn
     */
    createRemoteVPNGateway(request?: models.CreateRemoteVPNGatewayRequest): Promise<models.CreateRemoteVPNGatewayResponse> {
        const args = {Action: "CreateRemoteVPNGateway", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.CreateRemoteVPNGatewayResponse)
    }
    
        
    /**
     * CreateVPNGateway - 
     *
     * See also: https://docs.ucloud.cn/api/ip_sec_vpn-api/ip_sec_vpn
     */
    createVPNGateway(request?: models.CreateVPNGatewayRequest): Promise<models.CreateVPNGatewayResponse> {
        const args = {Action: "CreateVPNGateway", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.CreateVPNGatewayResponse)
    }
    
        
    /**
     * CreateVPNTunnel - 
     *
     * See also: https://docs.ucloud.cn/api/ip_sec_vpn-api/ip_sec_vpn
     */
    createVPNTunnel(request?: models.CreateVPNTunnelRequest): Promise<models.CreateVPNTunnelResponse> {
        const args = {Action: "CreateVPNTunnel", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.CreateVPNTunnelResponse)
    }
    
        
    /**
     * DeleteRemoteVPNGateway - 
     *
     * See also: https://docs.ucloud.cn/api/ip_sec_vpn-api/ip_sec_vpn
     */
    deleteRemoteVPNGateway(request?: models.DeleteRemoteVPNGatewayRequest): Promise<models.DeleteRemoteVPNGatewayResponse> {
        const args = {Action: "DeleteRemoteVPNGateway", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DeleteRemoteVPNGatewayResponse)
    }
    
        
    /**
     * DeleteVPNGateway - 
     *
     * See also: https://docs.ucloud.cn/api/ip_sec_vpn-api/ip_sec_vpn
     */
    deleteVPNGateway(request?: models.DeleteVPNGatewayRequest): Promise<models.DeleteVPNGatewayResponse> {
        const args = {Action: "DeleteVPNGateway", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DeleteVPNGatewayResponse)
    }
    
        
    /**
     * DeleteVPNTunnel - 
     *
     * See also: https://docs.ucloud.cn/api/ip_sec_vpn-api/ip_sec_vpn
     */
    deleteVPNTunnel(request?: models.DeleteVPNTunnelRequest): Promise<models.DeleteVPNTunnelResponse> {
        const args = {Action: "DeleteVPNTunnel", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DeleteVPNTunnelResponse)
    }
    
        
    /**
     * DescribeRemoteVPNGateway - 
     *
     * See also: https://docs.ucloud.cn/api/ip_sec_vpn-api/ip_sec_vpn
     */
    describeRemoteVPNGateway(request?: models.DescribeRemoteVPNGatewayRequest): Promise<models.DescribeRemoteVPNGatewayResponse> {
        const args = {Action: "DescribeRemoteVPNGateway", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeRemoteVPNGatewayResponse)
    }
    
        
    /**
     * DescribeVPNGateway - 
     *
     * See also: https://docs.ucloud.cn/api/ip_sec_vpn-api/ip_sec_vpn
     */
    describeVPNGateway(request?: models.DescribeVPNGatewayRequest): Promise<models.DescribeVPNGatewayResponse> {
        const args = {Action: "DescribeVPNGateway", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeVPNGatewayResponse)
    }
    
        
    /**
     * DescribeVPNTunnel - 
     *
     * See also: https://docs.ucloud.cn/api/ip_sec_vpn-api/ip_sec_vpn
     */
    describeVPNTunnel(request?: models.DescribeVPNTunnelRequest): Promise<models.DescribeVPNTunnelResponse> {
        const args = {Action: "DescribeVPNTunnel", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DescribeVPNTunnelResponse)
    }
    
        
    /**
     * GetVPNGatewayPrice - 
     *
     * See also: https://docs.ucloud.cn/api/ip_sec_vpn-api/ip_sec_vpn
     */
    getVPNGatewayPrice(request?: models.GetVPNGatewayPriceRequest): Promise<models.GetVPNGatewayPriceResponse> {
        const args = {Action: "GetVPNGatewayPrice", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.GetVPNGatewayPriceResponse)
    }
    
        
    /**
     * GetVPNGatewayUpgradePrice - 
     *
     * See also: https://docs.ucloud.cn/api/ip_sec_vpn-api/ip_sec_vpn
     */
    getVPNGatewayUpgradePrice(request?: models.GetVPNGatewayUpgradePriceRequest): Promise<models.GetVPNGatewayUpgradePriceResponse> {
        const args = {Action: "GetVPNGatewayUpgradePrice", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.GetVPNGatewayUpgradePriceResponse)
    }
    
        
    /**
     * UpdateVPNGateway - 
     *
     * See also: https://docs.ucloud.cn/api/ip_sec_vpn-api/ip_sec_vpn
     */
    updateVPNGateway(request?: models.UpdateVPNGatewayRequest): Promise<models.UpdateVPNGatewayResponse> {
        const args = {Action: "UpdateVPNGateway", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.UpdateVPNGatewayResponse)
    }
    
        
    /**
     * UpdateVPNTunnelAttribute - 
     *
     * See also: https://docs.ucloud.cn/api/ip_sec_vpn-api/ip_sec_vpn
     */
    updateVPNTunnelAttribute(request?: models.UpdateVPNTunnelAttributeRequest): Promise<models.UpdateVPNTunnelAttributeResponse> {
        const args = {Action: "UpdateVPNTunnelAttribute", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.UpdateVPNTunnelAttributeResponse)
    }
    
}
