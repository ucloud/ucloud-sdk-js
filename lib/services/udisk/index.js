"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("../../core/client"));
const request_1 = __importDefault(require("../../core/request"));
/**
 * This client is used to call actions of **udisk** service
 */
class UDiskClient extends client_1.default {
    constructor({ config, credential, }) {
        super({ config, credential });
    }
    /**
     * AttachUDisk - 将一个可用的UDisk挂载到某台主机上，当UDisk挂载成功后，还需要在主机内部进行文件系统操作
     *
     * See also: https://docs.ucloud.cn/api/udisk-api/attach_udisk
     */
    attachUDisk(request) {
        const args = Object.assign({ Action: 'AttachUDisk' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CloneUDisk - 从UDisk创建UDisk克隆
     *
     * See also: https://docs.ucloud.cn/api/udisk-api/clone_udisk
     */
    cloneUDisk(request) {
        const args = Object.assign({ Action: 'CloneUDisk' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CloneUDiskSnapshot - 从快照创建UDisk克隆
     *
     * See also: https://docs.ucloud.cn/api/udisk-api/clone_udisk_snapshot
     */
    cloneUDiskSnapshot(request) {
        const args = Object.assign({ Action: 'CloneUDiskSnapshot' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CloneUDiskUDataArk - 从数据方舟的备份创建UDisk
     *
     * See also: https://docs.ucloud.cn/api/udisk-api/clone_udisk_udataark
     */
    cloneUDiskUDataArk(request) {
        const args = Object.assign({ Action: 'CloneUDiskUDataArk' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateAttachUDisk - 创建并挂载UDisk磁盘
     *
     * See also: https://docs.ucloud.cn/api/udisk-api/create_attach_udisk
     */
    createAttachUDisk(request) {
        const args = Object.assign({ Action: 'CreateAttachUDisk' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateUDisk - 创建UDisk磁盘
     *
     * See also: https://docs.ucloud.cn/api/udisk-api/create_udisk
     */
    createUDisk(request) {
        const args = Object.assign({ Action: 'CreateUDisk' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateUDiskSnapshot - 创建snapshot快照
     *
     * See also: https://docs.ucloud.cn/api/udisk-api/create_udisk_snapshot
     */
    createUDiskSnapshot(request) {
        const args = Object.assign({ Action: 'CreateUDiskSnapshot' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteUDisk - 删除UDisk
     *
     * See also: https://docs.ucloud.cn/api/udisk-api/delete_udisk
     */
    deleteUDisk(request) {
        const args = Object.assign({ Action: 'DeleteUDisk' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteUDiskSnapshot - 删除Snapshot
     *
     * See also: https://docs.ucloud.cn/api/udisk-api/delete_udisk_snapshot
     */
    deleteUDiskSnapshot(request) {
        const args = Object.assign({ Action: 'DeleteUDiskSnapshot' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeRecycleUDisk - 拉取回收站中云硬盘列表
     *
     * See also: https://docs.ucloud.cn/api/udisk-api/describe_recycle_udisk
     */
    describeRecycleUDisk(request) {
        const args = Object.assign({ Action: 'DescribeRecycleUDisk' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUDisk - 获取UDisk实例
     *
     * See also: https://docs.ucloud.cn/api/udisk-api/describe_udisk
     */
    describeUDisk(request) {
        const args = Object.assign({ Action: 'DescribeUDisk' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUDiskPrice - 获取UDisk实例价格信息
     *
     * See also: https://docs.ucloud.cn/api/udisk-api/describe_udisk_price
     */
    describeUDiskPrice(request) {
        const args = Object.assign({ Action: 'DescribeUDiskPrice' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUDiskSnapshot - 获取UDisk快照
     *
     * See also: https://docs.ucloud.cn/api/udisk-api/describe_udisk_snapshot
     */
    describeUDiskSnapshot(request) {
        const args = Object.assign({ Action: 'DescribeUDiskSnapshot' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUDiskUpgradePrice - 获取UDisk升级价格信息
     *
     * See also: https://docs.ucloud.cn/api/udisk-api/describe_udisk_upgrade_price
     */
    describeUDiskUpgradePrice(request) {
        const args = Object.assign({ Action: 'DescribeUDiskUpgradePrice' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DetachUDisk - 卸载某个已经挂载在指定UHost实例上的UDisk
     *
     * See also: https://docs.ucloud.cn/api/udisk-api/detach_udisk
     */
    detachUDisk(request) {
        const args = Object.assign({ Action: 'DetachUDisk' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * RecoverUDisk - 从回收站中恢复云硬盘
     *
     * See also: https://docs.ucloud.cn/api/udisk-api/recover_udisk
     */
    recoverUDisk(request) {
        const args = Object.assign({ Action: 'RecoverUDisk' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * RenameUDisk - 重命名UDisk
     *
     * See also: https://docs.ucloud.cn/api/udisk-api/rename_udisk
     */
    renameUDisk(request) {
        const args = Object.assign({ Action: 'RenameUDisk' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ResizeUDisk - 调整UDisk容量
     *
     * See also: https://docs.ucloud.cn/api/udisk-api/resize_udisk
     */
    resizeUDisk(request) {
        const args = Object.assign({ Action: 'ResizeUDisk' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * RestoreUDisk - 从备份恢复数据至UDisk
     *
     * See also: https://docs.ucloud.cn/api/udisk-api/restore_udisk
     */
    restoreUDisk(request) {
        const args = Object.assign({ Action: 'RestoreUDisk' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * SetUDiskUDataArkMode - 设置UDisk数据方舟的状态
     *
     * See also: https://docs.ucloud.cn/api/udisk-api/set_udisk_udataark_mode
     */
    setUDiskUDataArkMode(request) {
        const args = Object.assign({ Action: 'SetUDiskUDataArkMode' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
}
exports.default = UDiskClient;
