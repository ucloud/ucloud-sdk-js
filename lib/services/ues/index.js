"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("../../core/client"));
const request_1 = __importDefault(require("../../core/request"));
/**
 * This client is used to call actions of **ues** service
 */
class UESClient extends client_1.default {
    constructor({ config, credential, }) {
        super({ config, credential });
    }
    /**
     * CreateUESInstance - 创建实例
     *
     * See also: https://docs.ucloud.cn/api/ues-api/create_ues_instance
     */
    createUESInstance(request) {
        const args = Object.assign({ Action: 'CreateUESInstance' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteUESInstance - 删除实例
     *
     * See also: https://docs.ucloud.cn/api/ues-api/delete_ues_instance
     */
    deleteUESInstance(request) {
        const args = Object.assign({ Action: 'DeleteUESInstance' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUESInstanceV2 - 查询指定实例详细信息
     *
     * See also: https://docs.ucloud.cn/api/ues-api/describe_ues_instance_v2
     */
    describeUESInstanceV2(request) {
        const args = Object.assign({ Action: 'DescribeUESInstanceV2' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ExpandUESInstance - 扩容实例节点
     *
     * See also: https://docs.ucloud.cn/api/ues-api/expand_ues_instance
     */
    expandUESInstance(request) {
        const args = Object.assign({ Action: 'ExpandUESInstance' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUESAppVersion - 获取服务应用版本列表
     *
     * See also: https://docs.ucloud.cn/api/ues-api/get_ues_app_version
     */
    getUESAppVersion(request) {
        const args = Object.assign({ Action: 'GetUESAppVersion' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUESDiskSizeLimitation - 获取磁盘容量限制
     *
     * See also: https://docs.ucloud.cn/api/ues-api/get_ues_disk_size_limitation
     */
    getUESDiskSizeLimitation(request) {
        const args = Object.assign({ Action: 'GetUESDiskSizeLimitation' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUESNodeConf - 获取节点配置列表
     *
     * See also: https://docs.ucloud.cn/api/ues-api/get_ues_node_conf
     */
    getUESNodeConf(request) {
        const args = Object.assign({ Action: 'GetUESNodeConf' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ListUESInstance - 获取实例列表
     *
     * See also: https://docs.ucloud.cn/api/ues-api/list_ues_instance
     */
    listUESInstance(request) {
        const args = Object.assign({ Action: 'ListUESInstance' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ResizeUESInstance - 改配实例节点配置
     *
     * See also: https://docs.ucloud.cn/api/ues-api/resize_ues_instance
     */
    resizeUESInstance(request) {
        const args = Object.assign({ Action: 'ResizeUESInstance' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * RestartUESInstance - 重启实例
     *
     * See also: https://docs.ucloud.cn/api/ues-api/restart_ues_instance
     */
    restartUESInstance(request) {
        const args = Object.assign({ Action: 'RestartUESInstance' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
}
exports.default = UESClient;
