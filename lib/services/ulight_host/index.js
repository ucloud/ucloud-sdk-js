"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("../../core/client"));
const request_1 = __importDefault(require("../../core/request"));
/**
 * This client is used to call actions of **ulight_host** service
 */
class ULightHostClient extends client_1.default {
    constructor({ config, credential, }) {
        super({ config, credential });
    }
    /**
     * CheckULHostResourceCapacity - 检查轻量应用云主机资源余量
     *
     * See also: https://docs.ucloud.cn/api/ulighthost-api/check_ul_host_resource_capacity
     */
    checkULHostResourceCapacity(request) {
        const args = Object.assign({ Action: 'CheckULHostResourceCapacity' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateULHostInstance - 创建轻量应用云主机
     *
     * See also: https://docs.ucloud.cn/api/ulighthost-api/create_ul_host_instance
     */
    createULHostInstance(request) {
        const args = Object.assign({ Action: 'CreateULHostInstance' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeULHostBundles - 获取轻量应用云主机套餐列表
     *
     * See also: https://docs.ucloud.cn/api/ulighthost-api/describe_ul_host_bundles
     */
    describeULHostBundles(request) {
        const args = Object.assign({ Action: 'DescribeULHostBundles' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeULHostImage - 获取指定数据中心镜像列表
     *
     * See also: https://docs.ucloud.cn/api/ulighthost-api/describe_ul_host_image
     */
    describeULHostImage(request) {
        const args = Object.assign({ Action: 'DescribeULHostImage' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeULHostInstance - 获取轻量应用云主机列表
     *
     * See also: https://docs.ucloud.cn/api/ulighthost-api/describe_ul_host_instance
     */
    describeULHostInstance(request) {
        const args = Object.assign({ Action: 'DescribeULHostInstance' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetULHostInstancePrice - 获取轻量应用云主机套餐价格
     *
     * See also: https://docs.ucloud.cn/api/ulighthost-api/get_ul_host_instance_price
     */
    getULHostInstancePrice(request) {
        const args = Object.assign({ Action: 'GetULHostInstancePrice' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetULHostRenewPrice - 获取主机续费价格
     *
     * See also: https://docs.ucloud.cn/api/ulighthost-api/get_ul_host_renew_price
     */
    getULHostRenewPrice(request) {
        const args = Object.assign({ Action: 'GetULHostRenewPrice' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ModifyULHostAttribute - 修改指定ULHost实例属性信息，包含名称和备注
     *
     * See also: https://docs.ucloud.cn/api/ulighthost-api/modify_ul_host_attribute
     */
    modifyULHostAttribute(request) {
        const args = Object.assign({ Action: 'ModifyULHostAttribute' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * PoweroffULHostInstance - 直接关闭UHost实例电源，无需等待实例正常关闭。
     *
     * See also: https://docs.ucloud.cn/api/ulighthost-api/poweroff_ul_host_instance
     */
    poweroffULHostInstance(request) {
        const args = Object.assign({ Action: 'PoweroffULHostInstance' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * RebootULHostInstance - 重新启动UHost实例。
     *
     * See also: https://docs.ucloud.cn/api/ulighthost-api/reboot_ul_host_instance
     */
    rebootULHostInstance(request) {
        const args = Object.assign({ Action: 'RebootULHostInstance' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ReinstallULHostInstance - 重装轻量应用云主机
     *
     * See also: https://docs.ucloud.cn/api/ulighthost-api/reinstall_ul_host_instance
     */
    reinstallULHostInstance(request) {
        const args = Object.assign({ Action: 'ReinstallULHostInstance' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ResetULHostInstancePassword - 重置轻量应用云主机管理员密码。
     *
     * See also: https://docs.ucloud.cn/api/ulighthost-api/reset_ul_host_instance_password
     */
    resetULHostInstancePassword(request) {
        const args = Object.assign({ Action: 'ResetULHostInstancePassword' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * StartULHostInstance - 启动处于关闭状态的UHost实例。
     *
     * See also: https://docs.ucloud.cn/api/ulighthost-api/start_ul_host_instance
     */
    startULHostInstance(request) {
        const args = Object.assign({ Action: 'StartULHostInstance' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * StopULHostInstance - 指停止处于运行状态的ULHost实例
     *
     * See also: https://docs.ucloud.cn/api/ulighthost-api/stop_ul_host_instance
     */
    stopULHostInstance(request) {
        const args = Object.assign({ Action: 'StopULHostInstance' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * TerminateULHostInstance - 删除指定数据中心的ULHost实例。
     *
     * See also: https://docs.ucloud.cn/api/ulighthost-api/terminate_ul_host_instance
     */
    terminateULHostInstance(request) {
        const args = Object.assign({ Action: 'TerminateULHostInstance' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
}
exports.default = ULightHostClient;
