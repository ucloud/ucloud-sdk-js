"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("../../core/client"));
const request_1 = __importDefault(require("../../core/request"));
/**
 * This client is used to call actions of **unet** service
 */
class UNetClient extends client_1.default {
    constructor({ config, credential, }) {
        super({ config, credential });
    }
    /**
     * AllocateEIP - 根据提供信息, 申请弹性IP
     *
     * See also: https://docs.ucloud.cn/api/unet-api/allocate_eip
     */
    allocateEIP(request) {
        const args = Object.assign({ Action: 'AllocateEIP' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * AllocateShareBandwidth - 开通共享带宽
     *
     * See also: https://docs.ucloud.cn/api/unet-api/allocate_share_bandwidth
     */
    allocateShareBandwidth(request) {
        const args = Object.assign({ Action: 'AllocateShareBandwidth' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * AssociateEIPWithShareBandwidth - 将EIP加入共享带宽
     *
     * See also: https://docs.ucloud.cn/api/unet-api/associate_eip_with_share_bandwidth
     */
    associateEIPWithShareBandwidth(request) {
        const args = Object.assign({ Action: 'AssociateEIPWithShareBandwidth' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * BindEIP - 将尚未使用的弹性IP绑定到指定的资源
     *
     * See also: https://docs.ucloud.cn/api/unet-api/bind_eip
     */
    bindEIP(request) {
        const args = Object.assign({ Action: 'BindEIP' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateBandwidthPackage - 为非共享带宽模式下, 已绑定资源实例的带宽计费弹性IP附加临时带宽包
     *
     * See also: https://docs.ucloud.cn/api/unet-api/create_bandwidth_package
     */
    createBandwidthPackage(request) {
        const args = Object.assign({ Action: 'CreateBandwidthPackage' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateFirewall - 创建防火墙
     *
     * See also: https://docs.ucloud.cn/api/unet-api/create_firewall
     */
    createFirewall(request) {
        const args = Object.assign({ Action: 'CreateFirewall' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteBandwidthPackage - 删除弹性IP上已附加带宽包
     *
     * See also: https://docs.ucloud.cn/api/unet-api/delete_bandwidth_package
     */
    deleteBandwidthPackage(request) {
        const args = Object.assign({ Action: 'DeleteBandwidthPackage' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteFirewall - 删除防火墙
     *
     * See also: https://docs.ucloud.cn/api/unet-api/delete_firewall
     */
    deleteFirewall(request) {
        const args = Object.assign({ Action: 'DeleteFirewall' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeBandwidthPackage - 获取某地域下的带宽包信息
     *
     * See also: https://docs.ucloud.cn/api/unet-api/describe_bandwidth_package
     */
    describeBandwidthPackage(request) {
        const args = Object.assign({ Action: 'DescribeBandwidthPackage' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeBandwidthUsage - 获取带宽用量信息
     *
     * See also: https://docs.ucloud.cn/api/unet-api/describe_bandwidth_usage
     */
    describeBandwidthUsage(request) {
        const args = Object.assign({ Action: 'DescribeBandwidthUsage' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeEIP - 获取弹性IP信息
     *
     * See also: https://docs.ucloud.cn/api/unet-api/describe_eip
     */
    describeEIP(request) {
        const args = Object.assign({ Action: 'DescribeEIP' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeFirewall - 获取防火墙组信息
     *
     * See also: https://docs.ucloud.cn/api/unet-api/describe_firewall
     */
    describeFirewall(request) {
        const args = Object.assign({ Action: 'DescribeFirewall' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeFirewallResource - 获取防火墙组所绑定资源的外网IP
     *
     * See also: https://docs.ucloud.cn/api/unet-api/describe_firewall_resource
     */
    describeFirewallResource(request) {
        const args = Object.assign({ Action: 'DescribeFirewallResource' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeShareBandwidth - 获取共享带宽信息
     *
     * See also: https://docs.ucloud.cn/api/unet-api/describe_share_bandwidth
     */
    describeShareBandwidth(request) {
        const args = Object.assign({ Action: 'DescribeShareBandwidth' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DisassociateEIPWithShareBandwidth - 将EIP移出共享带宽
     *
     * See also: https://docs.ucloud.cn/api/unet-api/disassociate_eip_with_share_bandwidth
     */
    disassociateEIPWithShareBandwidth(request) {
        const args = Object.assign({ Action: 'DisassociateEIPWithShareBandwidth' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetEIPPayMode - 获取弹性IP计费模式
     *
     * See also: https://docs.ucloud.cn/api/unet-api/get_eip_pay_mode
     */
    getEIPPayMode(request) {
        const args = Object.assign({ Action: 'GetEIPPayMode' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetEIPPrice - 获取弹性IP价格
     *
     * See also: https://docs.ucloud.cn/api/unet-api/get_eip_price
     */
    getEIPPrice(request) {
        const args = Object.assign({ Action: 'GetEIPPrice' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetEIPUpgradePrice - 获取弹性IP带宽改动价格
     *
     * See also: https://docs.ucloud.cn/api/unet-api/get_eip_upgrade_price
     */
    getEIPUpgradePrice(request) {
        const args = Object.assign({ Action: 'GetEIPUpgradePrice' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GrantFirewall - 将防火墙应用到资源上
     *
     * See also: https://docs.ucloud.cn/api/unet-api/grant_firewall
     */
    grantFirewall(request) {
        const args = Object.assign({ Action: 'GrantFirewall' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ModifyEIPBandwidth - 调整弹性IP的外网带宽
     *
     * See also: https://docs.ucloud.cn/api/unet-api/modify_eip_bandwidth
     */
    modifyEIPBandwidth(request) {
        const args = Object.assign({ Action: 'ModifyEIPBandwidth' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ModifyEIPWeight - 修改弹性IP的外网出口权重
     *
     * See also: https://docs.ucloud.cn/api/unet-api/modify_eip_weight
     */
    modifyEIPWeight(request) {
        const args = Object.assign({ Action: 'ModifyEIPWeight' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ReleaseEIP - 释放弹性IP资源, 所释放弹性IP必须为非绑定状态.
     *
     * See also: https://docs.ucloud.cn/api/unet-api/release_eip
     */
    releaseEIP(request) {
        const args = Object.assign({ Action: 'ReleaseEIP' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ReleaseShareBandwidth - 关闭共享带宽
     *
     * See also: https://docs.ucloud.cn/api/unet-api/release_share_bandwidth
     */
    releaseShareBandwidth(request) {
        const args = Object.assign({ Action: 'ReleaseShareBandwidth' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ResizeShareBandwidth - 调整共享带宽的带宽值
     *
     * See also: https://docs.ucloud.cn/api/unet-api/resize_share_bandwidth
     */
    resizeShareBandwidth(request) {
        const args = Object.assign({ Action: 'ResizeShareBandwidth' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * SetEIPPayMode - 设置弹性IP计费模式, 切换时会涉及付费/退费.
     *
     * See also: https://docs.ucloud.cn/api/unet-api/set_eip_pay_mode
     */
    setEIPPayMode(request) {
        const args = Object.assign({ Action: 'SetEIPPayMode' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UnBindEIP - 将弹性IP从资源上解绑
     *
     * See also: https://docs.ucloud.cn/api/unet-api/un_bind_eip
     */
    unBindEIP(request) {
        const args = Object.assign({ Action: 'UnBindEIP' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateEIPAttribute - 更新弹性IP名称，业务组，备注等属性字段
     *
     * See also: https://docs.ucloud.cn/api/unet-api/update_eip_attribute
     */
    updateEIPAttribute(request) {
        const args = Object.assign({ Action: 'UpdateEIPAttribute' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateFirewall - 更新防火墙规则
     *
     * See also: https://docs.ucloud.cn/api/unet-api/update_firewall
     */
    updateFirewall(request) {
        const args = Object.assign({ Action: 'UpdateFirewall' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateFirewallAttribute - 更新防火墙规则
     *
     * See also: https://docs.ucloud.cn/api/unet-api/update_firewall_attribute
     */
    updateFirewallAttribute(request) {
        const args = Object.assign({ Action: 'UpdateFirewallAttribute' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
}
exports.default = UNetClient;
