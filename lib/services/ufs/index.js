"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("../../core/client"));
const request_1 = __importDefault(require("../../core/request"));
/**
 * This client is used to call actions of **ufs** service
 */
class UFSClient extends client_1.default {
    constructor({ config, credential, }) {
        super({ config, credential });
    }
    /**
     * AddUFSVolumeMountPoint - 添加文件系统挂载点
     *
     * See also: https://docs.ucloud.cn/api/ufs-api/add_ufs_volume_mount_point
     */
    addUFSVolumeMountPoint(request) {
        const args = Object.assign({ Action: 'AddUFSVolumeMountPoint' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateUFSVolume - 创建文件系统
     *
     * See also: https://docs.ucloud.cn/api/ufs-api/create_ufs_volume
     */
    createUFSVolume(request) {
        const args = Object.assign({ Action: 'CreateUFSVolume' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUFSVolume2 - 获取文件系统列表
     *
     * See also: https://docs.ucloud.cn/api/ufs-api/describe_ufs_volume2
     */
    describeUFSVolume2(request) {
        const args = Object.assign({ Action: 'DescribeUFSVolume2' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUFSVolumeMountpoint - 获取文件系统挂载点信息
     *
     * See also: https://docs.ucloud.cn/api/ufs-api/describe_ufs_volume_mountpoint
     */
    describeUFSVolumeMountpoint(request) {
        const args = Object.assign({ Action: 'DescribeUFSVolumeMountpoint' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUFSVolumePrice - 获取文件系统价格
     *
     * See also: https://docs.ucloud.cn/api/ufs-api/describe_ufs_volume_price
     */
    describeUFSVolumePrice(request) {
        const args = Object.assign({ Action: 'DescribeUFSVolumePrice' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ExtendUFSVolume - 文件系统扩容
     *
     * See also: https://docs.ucloud.cn/api/ufs-api/extend_ufs_volume
     */
    extendUFSVolume(request) {
        const args = Object.assign({ Action: 'ExtendUFSVolume' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * RemoveUFSVolume - 删除UFS文件系统
     *
     * See also: https://docs.ucloud.cn/api/ufs-api/remove_ufs_volume
     */
    removeUFSVolume(request) {
        const args = Object.assign({ Action: 'RemoveUFSVolume' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * RemoveUFSVolumeMountPoint - 删除文件系统挂载点
     *
     * See also: https://docs.ucloud.cn/api/ufs-api/remove_ufs_volume_mount_point
     */
    removeUFSVolumeMountPoint(request) {
        const args = Object.assign({ Action: 'RemoveUFSVolumeMountPoint' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateUFSVolumeInfo - 更改文件系统相关信息（名称／备注）
     *
     * See also: https://docs.ucloud.cn/api/ufs-api/update_ufs_volume_info
     */
    updateUFSVolumeInfo(request) {
        const args = Object.assign({ Action: 'UpdateUFSVolumeInfo' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
}
exports.default = UFSClient;
