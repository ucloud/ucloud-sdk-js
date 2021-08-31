"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("../../core/client"));
const request_1 = __importDefault(require("../../core/request"));
/**
 * This client is used to call actions of **ipsecvpn** service
 */
class IPSecVPNClient extends client_1.default {
    constructor({ config, credential, }) {
        super({ config, credential });
    }
    /**
     * CreateRemoteVPNGateway - 创建客户VPN网关
     *
     * See also: https://docs.ucloud.cn/api/ipsecvpn-api/create_remote_vpn_gateway
     */
    createRemoteVPNGateway(request) {
        const args = Object.assign({ Action: 'CreateRemoteVPNGateway' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateVPNGateway - 创建VPN网关
     *
     * See also: https://docs.ucloud.cn/api/ipsecvpn-api/create_vpn_gateway
     */
    createVPNGateway(request) {
        const args = Object.assign({ Action: 'CreateVPNGateway' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateVPNTunnel - 创建VPN隧道
     *
     * See also: https://docs.ucloud.cn/api/ipsecvpn-api/create_vpn_tunnel
     */
    createVPNTunnel(request) {
        const args = Object.assign({ Action: 'CreateVPNTunnel' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteRemoteVPNGateway - 删除客户VPN网关
     *
     * See also: https://docs.ucloud.cn/api/ipsecvpn-api/delete_remote_vpn_gateway
     */
    deleteRemoteVPNGateway(request) {
        const args = Object.assign({ Action: 'DeleteRemoteVPNGateway' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteVPNGateway - 删除VPN网关
     *
     * See also: https://docs.ucloud.cn/api/ipsecvpn-api/delete_vpn_gateway
     */
    deleteVPNGateway(request) {
        const args = Object.assign({ Action: 'DeleteVPNGateway' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteVPNTunnel - 删除VPN隧道
     *
     * See also: https://docs.ucloud.cn/api/ipsecvpn-api/delete_vpn_tunnel
     */
    deleteVPNTunnel(request) {
        const args = Object.assign({ Action: 'DeleteVPNTunnel' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeRemoteVPNGateway - 获取客户VPN网关信息
     *
     * See also: https://docs.ucloud.cn/api/ipsecvpn-api/describe_remote_vpn_gateway
     */
    describeRemoteVPNGateway(request) {
        const args = Object.assign({ Action: 'DescribeRemoteVPNGateway' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeVPNGateway - 获取VPN网关信息
     *
     * See also: https://docs.ucloud.cn/api/ipsecvpn-api/describe_vpn_gateway
     */
    describeVPNGateway(request) {
        const args = Object.assign({ Action: 'DescribeVPNGateway' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeVPNTunnel - 获取VPN隧道信息
     *
     * See also: https://docs.ucloud.cn/api/ipsecvpn-api/describe_vpn_tunnel
     */
    describeVPNTunnel(request) {
        const args = Object.assign({ Action: 'DescribeVPNTunnel' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetVPNGatewayPrice - 获取VPN价格
     *
     * See also: https://docs.ucloud.cn/api/ipsecvpn-api/get_vpn_gateway_price
     */
    getVPNGatewayPrice(request) {
        const args = Object.assign({ Action: 'GetVPNGatewayPrice' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetVPNGatewayUpgradePrice - 获取VPN网关规格改动价格
     *
     * See also: https://docs.ucloud.cn/api/ipsecvpn-api/get_vpn_gateway_upgrade_price
     */
    getVPNGatewayUpgradePrice(request) {
        const args = Object.assign({ Action: 'GetVPNGatewayUpgradePrice' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateVPNGateway - 更改VPN网关规格
     *
     * See also: https://docs.ucloud.cn/api/ipsecvpn-api/update_vpn_gateway
     */
    updateVPNGateway(request) {
        const args = Object.assign({ Action: 'UpdateVPNGateway' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateVPNTunnelAttribute - 更新VPN隧道属性
     *
     * See also: https://docs.ucloud.cn/api/ipsecvpn-api/update_vpn_tunnel_attribute
     */
    updateVPNTunnelAttribute(request) {
        const args = Object.assign({ Action: 'UpdateVPNTunnelAttribute' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
}
exports.default = IPSecVPNClient;
