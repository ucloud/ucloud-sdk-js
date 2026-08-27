"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("../../core/client"));
const request_1 = __importDefault(require("../../core/request"));
/**
 * This client is used to call actions of **upfs** service
 */
class UPFSClient extends client_1.default {
    constructor({ config, credential, }) {
        super({ config, credential });
    }
    /**
     * CreateUPFSVolume - 创建UPFS文件系统
     *
     * See also: https://docs.ucloud.cn/api/upfs-api/create_upfs_volume
     */
    createUPFSVolume(request) {
        const args = Object.assign({ Action: 'CreateUPFSVolume' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUPFSVolume - 获取UPFS文件系统列表
     *
     * See also: https://docs.ucloud.cn/api/upfs-api/describe_upfs_volume
     */
    describeUPFSVolume(request) {
        const args = Object.assign({ Action: 'DescribeUPFSVolume' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUPFSVolumePrice - 获取UPFS文件系统价格
     *
     * See also: https://docs.ucloud.cn/api/upfs-api/describe_upfs_volume_price
     */
    describeUPFSVolumePrice(request) {
        const args = Object.assign({ Action: 'DescribeUPFSVolumePrice' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUPFSVolumeUpgradePrice - UPFS文件系统扩容价格
     *
     * See also: https://docs.ucloud.cn/api/upfs-api/describe_upfs_volume_upgrade_price
     */
    describeUPFSVolumeUpgradePrice(request) {
        const args = Object.assign({ Action: 'DescribeUPFSVolumeUpgradePrice' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ExtendUPFSVolume - UPFS文件系统扩容
     *
     * See also: https://docs.ucloud.cn/api/upfs-api/extend_upfs_volume
     */
    extendUPFSVolume(request) {
        const args = Object.assign({ Action: 'ExtendUPFSVolume' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * RemoveUPFSVolume - 删除UPFS文件系统
     *
     * See also: https://docs.ucloud.cn/api/upfs-api/remove_upfs_volume
     */
    removeUPFSVolume(request) {
        const args = Object.assign({ Action: 'RemoveUPFSVolume' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateUPFSVolumeInfo - 更改UPFS文件系统相关信息（名称／备注）
     *
     * See also: https://docs.ucloud.cn/api/upfs-api/update_upfs_volume_info
     */
    updateUPFSVolumeInfo(request) {
        const args = Object.assign({ Action: 'UpdateUPFSVolumeInfo' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
}
exports.default = UPFSClient;
