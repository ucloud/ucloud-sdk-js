"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("../../core/client"));
const request_1 = __importDefault(require("../../core/request"));
/**
 * This client is used to call actions of **uhost** service
 */
class UHostClient extends client_1.default {
    constructor({ config, credential, }) {
        super({ config, credential });
    }
    /**
     * CopyCustomImage - 复制自制镜像
     *
     * See also: https://docs.ucloud.cn/api/uhost-api/copy_custom_image
     */
    copyCustomImage(request) {
        const args = Object.assign({ Action: 'CopyCustomImage' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateCustomImage - 从指定UHost实例，生成自定义镜像。
     *
     * See also: https://docs.ucloud.cn/api/uhost-api/create_custom_image
     */
    createCustomImage(request) {
        const args = Object.assign({ Action: 'CreateCustomImage' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateIsolationGroup - 创建硬件隔离组，组内机器严格隔离在不同宿主机上。
     *
     * See also: https://docs.ucloud.cn/api/uhost-api/create_isolation_group
     */
    createIsolationGroup(request) {
        const args = Object.assign({ Action: 'CreateIsolationGroup' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateUHostInstance - 创建UHost实例。
     *
     * See also: https://docs.ucloud.cn/api/uhost-api/create_uhost_instance
     */
    createUHostInstance(request) {
        const args = Object.assign({ Action: 'CreateUHostInstance' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateUHostKeyPair - 创建主机密钥对信息
     *
     * See also: https://docs.ucloud.cn/api/uhost-api/create_uhost_key_pair
     */
    createUHostKeyPair(request) {
        const args = Object.assign({ Action: 'CreateUHostKeyPair' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteIsolationGroup - 删除硬件隔离组。
     *
     * See also: https://docs.ucloud.cn/api/uhost-api/delete_isolation_group
     */
    deleteIsolationGroup(request) {
        const args = Object.assign({ Action: 'DeleteIsolationGroup' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteUHostKeyPairs - 删除一对或者多对密钥对。
     *
     * See also: https://docs.ucloud.cn/api/uhost-api/delete_uhost_key_pairs
     */
    deleteUHostKeyPairs(request) {
        const args = Object.assign({ Action: 'DeleteUHostKeyPairs' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeAvailableInstanceTypes - DescribeAvailableInstanceTypes
     *
     * See also: https://docs.ucloud.cn/api/uhost-api/describe_available_instance_types
     */
    describeAvailableInstanceTypes(request) {
        const args = Object.assign({ Action: 'DescribeAvailableInstanceTypes' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeImage - 获取指定数据中心镜像列表，用户可通过指定操作系统类型，镜像Id进行过滤。
     *
     * See also: https://docs.ucloud.cn/api/uhost-api/describe_image
     */
    describeImage(request) {
        const args = Object.assign({ Action: 'DescribeImage' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeIsolationGroup - 查询硬件隔离组列表。
     *
     * See also: https://docs.ucloud.cn/api/uhost-api/describe_isolation_group
     */
    describeIsolationGroup(request) {
        const args = Object.assign({ Action: 'DescribeIsolationGroup' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUHostInstance - 获取主机或主机列表信息，并可根据数据中心，主机ID等参数进行过滤。
     *
     * See also: https://docs.ucloud.cn/api/uhost-api/describe_uhost_instance
     */
    describeUHostInstance(request) {
        const args = Object.assign({ Action: 'DescribeUHostInstance' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUHostKeyPairs - 查询一个或多个密钥对。
     *
     * See also: https://docs.ucloud.cn/api/uhost-api/describe_uhost_key_pairs
     */
    describeUHostKeyPairs(request) {
        const args = Object.assign({ Action: 'DescribeUHostKeyPairs' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUHostTags - 获取指定数据中心的业务组列表。
     *
     * See also: https://docs.ucloud.cn/api/uhost-api/describe_uhost_tags
     */
    describeUHostTags(request) {
        const args = Object.assign({ Action: 'DescribeUHostTags' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetAttachedDiskUpgradePrice - 获取挂载磁盘的升级价格
     *
     * See also: https://docs.ucloud.cn/api/uhost-api/get_attached_disk_upgrade_price
     */
    getAttachedDiskUpgradePrice(request) {
        const args = Object.assign({ Action: 'GetAttachedDiskUpgradePrice' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUHostInstancePrice - 根据UHost实例配置，获取UHost实例的价格。
     *
     * See also: https://docs.ucloud.cn/api/uhost-api/get_uhost_instance_price
     */
    getUHostInstancePrice(request) {
        const args = Object.assign({ Action: 'GetUHostInstancePrice' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUHostInstanceVncInfo - 获取指定UHost实例的管理VNC配置详细信息。
     *
     * See also: https://docs.ucloud.cn/api/uhost-api/get_uhost_instance_vnc_info
     */
    getUHostInstanceVncInfo(request) {
        const args = Object.assign({ Action: 'GetUHostInstanceVncInfo' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUHostUpgradePrice - 获取UHost实例升级配置的价格。可选配置范围请参考[[api:uhost-api:uhost_type|云主机机型说明]]。
     *
     * See also: https://docs.ucloud.cn/api/uhost-api/get_uhost_upgrade_price
     */
    getUHostUpgradePrice(request) {
        const args = Object.assign({ Action: 'GetUHostUpgradePrice' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ImportCustomImage - 把UFile的镜像文件导入到UHost，生成自定义镜像
     *
     * See also: https://docs.ucloud.cn/api/uhost-api/import_custom_image
     */
    importCustomImage(request) {
        const args = Object.assign({ Action: 'ImportCustomImage' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ImportUHostKeyPairs - 导入密钥对后，仅保管公钥部分，需自行妥善保存密钥对的私钥部分。
     *
     * See also: https://docs.ucloud.cn/api/uhost-api/import_uhost_key_pairs
     */
    importUHostKeyPairs(request) {
        const args = Object.assign({ Action: 'ImportUHostKeyPairs' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * LeaveIsolationGroup - 移除硬件隔离组中的主机
     *
     * See also: https://docs.ucloud.cn/api/uhost-api/leave_isolation_group
     */
    leaveIsolationGroup(request) {
        const args = Object.assign({ Action: 'LeaveIsolationGroup' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ModifyUHostIP - 修改云主机内网 IP 地址
     *
     * See also: https://docs.ucloud.cn/api/uhost-api/modify_uhost_ip
     */
    modifyUHostIP(request) {
        const args = Object.assign({ Action: 'ModifyUHostIP' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ModifyUHostInstanceName - 修改指定UHost实例名称，需要给出数据中心，UHostId，及新的实例名称。
     *
     * See also: https://docs.ucloud.cn/api/uhost-api/modify_uhost_instance_name
     */
    modifyUHostInstanceName(request) {
        const args = Object.assign({ Action: 'ModifyUHostInstanceName' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ModifyUHostInstanceRemark - 修改指定UHost实例备注信息。
     *
     * See also: https://docs.ucloud.cn/api/uhost-api/modify_uhost_instance_remark
     */
    modifyUHostInstanceRemark(request) {
        const args = Object.assign({ Action: 'ModifyUHostInstanceRemark' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ModifyUHostInstanceTag - 修改指定UHost实例业务组标识。
     *
     * See also: https://docs.ucloud.cn/api/uhost-api/modify_uhost_instance_tag
     */
    modifyUHostInstanceTag(request) {
        const args = Object.assign({ Action: 'ModifyUHostInstanceTag' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * PoweroffUHostInstance - 直接关闭UHost实例电源，无需等待实例正常关闭。
     *
     * See also: https://docs.ucloud.cn/api/uhost-api/poweroff_uhost_instance
     */
    poweroffUHostInstance(request) {
        const args = Object.assign({ Action: 'PoweroffUHostInstance' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * RebootUHostInstance - 重新启动UHost实例，需要指定数据中心及UHostID两个参数的值。
     *
     * See also: https://docs.ucloud.cn/api/uhost-api/reboot_uhost_instance
     */
    rebootUHostInstance(request) {
        const args = Object.assign({ Action: 'RebootUHostInstance' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ReinstallUHostInstance - 重新安装指定UHost实例的操作系统
     *
     * See also: https://docs.ucloud.cn/api/uhost-api/reinstall_uhost_instance
     */
    reinstallUHostInstance(request) {
        const args = Object.assign({ Action: 'ReinstallUHostInstance' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ResetUHostInstancePassword - 重置UHost实例的管理员密码。
     *
     * See also: https://docs.ucloud.cn/api/uhost-api/reset_uhost_instance_password
     */
    resetUHostInstancePassword(request) {
        const args = Object.assign({ Action: 'ResetUHostInstancePassword' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ResizeAttachedDisk - 修改挂载的磁盘大小，包含系统盘和数据盘
     *
     * See also: https://docs.ucloud.cn/api/uhost-api/resize_attached_disk
     */
    resizeAttachedDisk(request) {
        const args = Object.assign({ Action: 'ResizeAttachedDisk' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ResizeUHostInstance - 修改指定UHost实例的资源配置，如CPU核心数，内存容量大小，网络增强等。可选配置范围请参考[[api:uhost-api:uhost_type|云主机机型说明]]。
     *
     * See also: https://docs.ucloud.cn/api/uhost-api/resize_uhost_instance
     */
    resizeUHostInstance(request) {
        const args = Object.assign({ Action: 'ResizeUHostInstance' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * StartUHostInstance - 启动处于关闭状态的UHost实例，需要指定数据中心及UHostID两个参数的值。
     *
     * See also: https://docs.ucloud.cn/api/uhost-api/start_uhost_instance
     */
    startUHostInstance(request) {
        const args = Object.assign({ Action: 'StartUHostInstance' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * StopUHostInstance - 指停止处于运行状态的UHost实例，需指定数据中心及UhostID。
     *
     * See also: https://docs.ucloud.cn/api/uhost-api/stop_uhost_instance
     */
    stopUHostInstance(request) {
        const args = Object.assign({ Action: 'StopUHostInstance' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * TerminateCustomImage - 删除用户自定义镜像
     *
     * See also: https://docs.ucloud.cn/api/uhost-api/terminate_custom_image
     */
    terminateCustomImage(request) {
        const args = Object.assign({ Action: 'TerminateCustomImage' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * TerminateUHostInstance - 删除指定数据中心的UHost实例。
     *
     * See also: https://docs.ucloud.cn/api/uhost-api/terminate_uhost_instance
     */
    terminateUHostInstance(request) {
        const args = Object.assign({ Action: 'TerminateUHostInstance' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpgradeToArkUHostInstance - 普通升级为方舟机型
     *
     * See also: https://docs.ucloud.cn/api/uhost-api/upgrade_to_ark_uhost_instance
     */
    upgradeToArkUHostInstance(request) {
        const args = Object.assign({ Action: 'UpgradeToArkUHostInstance' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
}
exports.default = UHostClient;
