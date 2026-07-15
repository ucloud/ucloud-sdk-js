"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("../../core/client"));
const request_1 = __importDefault(require("../../core/request"));
/**
 * This client is used to call actions of **ugn** service
 */
class UGNClient extends client_1.default {
    constructor({ config, credential, }) {
        super({ config, credential });
    }
    /**
     * AddRoutePolicy - 新增路由策略
     *
     * See also: https://docs.ucloud.cn/api/ugn-api/add_route_policy
     */
    addRoutePolicy(request) {
        const args = Object.assign({ Action: 'AddRoutePolicy' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * AttachUGNNetworks - 批量关联网络实例
     *
     * See also: https://docs.ucloud.cn/api/ugn-api/attach_ugn_networks
     */
    attachUGNNetworks(request) {
        const args = Object.assign({ Action: 'AttachUGNNetworks' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateSimpleUGNBwPackage - 云联网简洁版创建带宽包
     *
     * See also: https://docs.ucloud.cn/api/ugn-api/create_simple_ugn_bw_package
     */
    createSimpleUGNBwPackage(request) {
        const args = Object.assign({ Action: 'CreateSimpleUGNBwPackage' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateUGN - 创建云联网
     *
     * See also: https://docs.ucloud.cn/api/ugn-api/create_ugn
     */
    createUGN(request) {
        const args = Object.assign({ Action: 'CreateUGN' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DelUGN - 删除云联网，仅云联网内无带宽包或网络实例时才可以被删除
     *
     * See also: https://docs.ucloud.cn/api/ugn-api/del_ugn
     */
    delUGN(request) {
        const args = Object.assign({ Action: 'DelUGN' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteRoutePolicy - 删除路由策略
     *
     * See also: https://docs.ucloud.cn/api/ugn-api/delete_route_policy
     */
    deleteRoutePolicy(request) {
        const args = Object.assign({ Action: 'DeleteRoutePolicy' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteUGNBwPackage - 删除带宽包，互通地域仅保留默认带宽包
     *
     * See also: https://docs.ucloud.cn/api/ugn-api/delete_ugn_bw_package
     */
    deleteUGNBwPackage(request) {
        const args = Object.assign({ Action: 'DeleteUGNBwPackage' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeSimpleUGN - 获取简洁版UGN详情
     *
     * See also: https://docs.ucloud.cn/api/ugn-api/describe_simple_ugn
     */
    describeSimpleUGN(request) {
        const args = Object.assign({ Action: 'DescribeSimpleUGN' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DetachUGNNetworks - 批量解除关联网络实例
     *
     * See also: https://docs.ucloud.cn/api/ugn-api/detach_ugn_networks
     */
    detachUGNNetworks(request) {
        const args = Object.assign({ Action: 'DetachUGNNetworks' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * EnableRoutePolicy - 启用\停用路由策略
     *
     * See also: https://docs.ucloud.cn/api/ugn-api/enable_route_policy
     */
    enableRoutePolicy(request) {
        const args = Object.assign({ Action: 'EnableRoutePolicy' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetSimpleBuyBwPrice - 获取简洁版带宽包价格
     *
     * See also: https://docs.ucloud.cn/api/ugn-api/get_simple_buy_bw_price
     */
    getSimpleBuyBwPrice(request) {
        const args = Object.assign({ Action: 'GetSimpleBuyBwPrice' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetSimpleUGNBwPackages - 获取指定云联网内的带宽包
     *
     * See also: https://docs.ucloud.cn/api/ugn-api/get_simple_ugn_bw_packages
     */
    getSimpleUGNBwPackages(request) {
        const args = Object.assign({ Action: 'GetSimpleUGNBwPackages' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetSwitchableBillingModes - 获取带宽包可以切换的计费类型
     *
     * See also: https://docs.ucloud.cn/api/ugn-api/get_switchable_billing_modes
     */
    getSwitchableBillingModes(request) {
        const args = Object.assign({ Action: 'GetSwitchableBillingModes' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUGNRouteTable - 获取云联网路由表
     *
     * See also: https://docs.ucloud.cn/api/ugn-api/get_ugn_route_table
     */
    getUGNRouteTable(request) {
        const args = Object.assign({ Action: 'GetUGNRouteTable' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ListSimpleBwPackage - 获取当前项目下的带宽包列表
     *
     * See also: https://docs.ucloud.cn/api/ugn-api/list_simple_bw_package
     */
    listSimpleBwPackage(request) {
        const args = Object.assign({ Action: 'ListSimpleBwPackage' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ListUGN - 获取当前项目下所有云联网资源
     *
     * See also: https://docs.ucloud.cn/api/ugn-api/list_ugn
     */
    listUGN(request) {
        const args = Object.assign({ Action: 'ListUGN' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ListUGNRegions - 获取UGN的可加入地域列表
     *
     * See also: https://docs.ucloud.cn/api/ugn-api/list_ugn_regions
     */
    listUGNRegions(request) {
        const args = Object.assign({ Action: 'ListUGNRegions' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ModifyUGNBandwidth - 修改云联网带宽大小
     *
     * See also: https://docs.ucloud.cn/api/ugn-api/modify_ugn_bandwidth
     */
    modifyUGNBandwidth(request) {
        const args = Object.assign({ Action: 'ModifyUGNBandwidth' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * SendUGNApplyNetwork - 跨账号网络实例申请加入 UGN
     *
     * See also: https://docs.ucloud.cn/api/ugn-api/send_ugn_apply_network
     */
    sendUGNApplyNetwork(request) {
        const args = Object.assign({ Action: 'SendUGNApplyNetwork' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateRoutePolicy - 修改路由策略
     *
     * See also: https://docs.ucloud.cn/api/ugn-api/update_route_policy
     */
    updateRoutePolicy(request) {
        const args = Object.assign({ Action: 'UpdateRoutePolicy' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
}
exports.default = UGNClient;
