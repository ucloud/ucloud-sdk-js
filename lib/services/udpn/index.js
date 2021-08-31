"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("../../core/client"));
const request_1 = __importDefault(require("../../core/request"));
/**
 * This client is used to call actions of **udpn** service
 */
class UDPNClient extends client_1.default {
    constructor({ config, credential, }) {
        super({ config, credential });
    }
    /**
     * AllocateUDPN - 分配一条 UDPN 专线
     *
     * See also: https://docs.ucloud.cn/api/udpn-api/allocate_udpn
     */
    allocateUDPN(request) {
        const args = Object.assign({ Action: 'AllocateUDPN' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUDPN - 描述 UDPN
     *
     * See also: https://docs.ucloud.cn/api/udpn-api/describe_udpn
     */
    describeUDPN(request) {
        const args = Object.assign({ Action: 'DescribeUDPN' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUDPNLineList - 获取当前支持的专线线路列表
     *
     * See also: https://docs.ucloud.cn/api/udpn-api/get_udpn_line_list
     */
    getUDPNLineList(request) {
        const args = Object.assign({ Action: 'GetUDPNLineList' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUDPNPrice - 获取 UDPN 价格
     *
     * See also: https://docs.ucloud.cn/api/udpn-api/get_udpn_price
     */
    getUDPNPrice(request) {
        const args = Object.assign({ Action: 'GetUDPNPrice' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUDPNUpgradePrice - 获取专线升级价格
     *
     * See also: https://docs.ucloud.cn/api/udpn-api/get_udpn_upgrade_price
     */
    getUDPNUpgradePrice(request) {
        const args = Object.assign({ Action: 'GetUDPNUpgradePrice' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ModifyUDPNBandwidth - 修改带宽值
     *
     * See also: https://docs.ucloud.cn/api/udpn-api/modify_udpn_bandwidth
     */
    modifyUDPNBandwidth(request) {
        const args = Object.assign({ Action: 'ModifyUDPNBandwidth' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ReleaseUDPN - 释放 UDPN
     *
     * See also: https://docs.ucloud.cn/api/udpn-api/release_udpn
     */
    releaseUDPN(request) {
        const args = Object.assign({ Action: 'ReleaseUDPN' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
}
exports.default = UDPNClient;
