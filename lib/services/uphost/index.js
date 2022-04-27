"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("../../core/client"));
const request_1 = __importDefault(require("../../core/request"));
/**
 * This client is used to call actions of **uphost** service
 */
class UPHostClient extends client_1.default {
    constructor({ config, credential, }) {
        super({ config, credential });
    }
    /**
     * CreatePHost - 指定数据中心，根据资源使用量创建指定数量的UPHost物理云主机实例。
     *
     * See also: https://docs.ucloud.cn/api/uphost-api/create_phost
     */
    createPHost(request) {
        const args = Object.assign({ Action: 'CreatePHost' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreatePHostImage - 创建裸金属2.0用户自定义镜像
     *
     * See also: https://docs.ucloud.cn/api/uphost-api/create_phost_image
     */
    createPHostImage(request) {
        const args = Object.assign({ Action: 'CreatePHostImage' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeBaremetalMachineType - 获取裸金属机型的详细描述信息
     *
     * See also: https://docs.ucloud.cn/api/uphost-api/describe_baremetal_machine_type
     */
    describeBaremetalMachineType(request) {
        const args = Object.assign({ Action: 'DescribeBaremetalMachineType' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribePHost - 获取物理机详细信息
     *
     * See also: https://docs.ucloud.cn/api/uphost-api/describe_phost
     */
    describePHost(request) {
        const args = Object.assign({ Action: 'DescribePHost' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribePHostImage - 获取物理云主机镜像列表
     *
     * See also: https://docs.ucloud.cn/api/uphost-api/describe_phost_image
     */
    describePHostImage(request) {
        const args = Object.assign({ Action: 'DescribePHostImage' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribePHostMachineType - 获取物理云机型的详细描述信息
     *
     * See also: https://docs.ucloud.cn/api/uphost-api/describe_phost_machine_type
     */
    describePHostMachineType(request) {
        const args = Object.assign({ Action: 'DescribePHostMachineType' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribePHostTags - 获取物理机tag列表（业务组）
     *
     * See also: https://docs.ucloud.cn/api/uphost-api/describe_phost_tags
     */
    describePHostTags(request) {
        const args = Object.assign({ Action: 'DescribePHostTags' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetPHostDiskUpgradePrice - 获取物理云裸金属挂载磁盘的升级价格
     *
     * See also: https://docs.ucloud.cn/api/uphost-api/get_phost_disk_upgrade_price
     */
    getPHostDiskUpgradePrice(request) {
        const args = Object.assign({ Action: 'GetPHostDiskUpgradePrice' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetPHostPrice - 获取物理机价格列表
     *
     * See also: https://docs.ucloud.cn/api/uphost-api/get_phost_price
     */
    getPHostPrice(request) {
        const args = Object.assign({ Action: 'GetPHostPrice' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ModifyPHostImageInfo - 修改自定义镜像名称和备注
     *
     * See also: https://docs.ucloud.cn/api/uphost-api/modify_phost_image_info
     */
    modifyPHostImageInfo(request) {
        const args = Object.assign({ Action: 'ModifyPHostImageInfo' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ModifyPHostInfo - 更改物理机信息
     *
     * See also: https://docs.ucloud.cn/api/uphost-api/modify_phost_info
     */
    modifyPHostInfo(request) {
        const args = Object.assign({ Action: 'ModifyPHostInfo' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * PoweroffPHost - 断电物理云主机
     *
     * See also: https://docs.ucloud.cn/api/uphost-api/poweroff_phost
     */
    poweroffPHost(request) {
        const args = Object.assign({ Action: 'PoweroffPHost' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * RebootPHost - 重启物理机
     *
     * See also: https://docs.ucloud.cn/api/uphost-api/reboot_phost
     */
    rebootPHost(request) {
        const args = Object.assign({ Action: 'RebootPHost' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ReinstallPHost - 重装物理机操作系统
     *
     * See also: https://docs.ucloud.cn/api/uphost-api/reinstall_phost
     */
    reinstallPHost(request) {
        const args = Object.assign({ Action: 'ReinstallPHost' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ResetPHostPassword - 重置裸金属实例的管理员密码
     *
     * See also: https://docs.ucloud.cn/api/uphost-api/reset_phost_password
     */
    resetPHostPassword(request) {
        const args = Object.assign({ Action: 'ResetPHostPassword' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ResizePHostAttachedDisk - 修改裸金属物理云已经挂载的云盘容量大小
     *
     * See also: https://docs.ucloud.cn/api/uphost-api/resize_phost_attached_disk
     */
    resizePHostAttachedDisk(request) {
        const args = Object.assign({ Action: 'ResizePHostAttachedDisk' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * StartPHost - 启动物理机
     *
     * See also: https://docs.ucloud.cn/api/uphost-api/start_phost
     */
    startPHost(request) {
        const args = Object.assign({ Action: 'StartPHost' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * StopPHost - 关闭物理机
     *
     * See also: https://docs.ucloud.cn/api/uphost-api/stop_phost
     */
    stopPHost(request) {
        const args = Object.assign({ Action: 'StopPHost' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * TerminatePHost - 删除物理云主机
     *
     * See also: https://docs.ucloud.cn/api/uphost-api/terminate_phost
     */
    terminatePHost(request) {
        const args = Object.assign({ Action: 'TerminatePHost' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * TerminatePHostImage - 删除裸金属2.0用户自定义镜像
     *
     * See also: https://docs.ucloud.cn/api/uphost-api/terminate_phost_image
     */
    terminatePHostImage(request) {
        const args = Object.assign({ Action: 'TerminatePHostImage' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
}
exports.default = UPHostClient;
