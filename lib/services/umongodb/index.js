"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("../../core/client"));
const request_1 = __importDefault(require("../../core/request"));
/**
 * This client is used to call actions of **umongodb** service
 */
class UMongoDBClient extends client_1.default {
    constructor({ config, credential, }) {
        super({ config, credential });
    }
    /**
     * BackupUMongoDBCluster - 备份集群数据库
     *
     * See also: https://docs.ucloud.cn/api/umongodb-api/backup_umon_go_db_cluster
     */
    backupUMongoDBCluster(request) {
        const args = Object.assign({ Action: 'BackupUMongoDBCluster' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * BackupUMongoDBLog - 日志打包
     *
     * See also: https://docs.ucloud.cn/api/umongodb-api/backup_umon_go_db_log
     */
    backupUMongoDBLog(request) {
        const args = Object.assign({ Action: 'BackupUMongoDBLog' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateUMongoDBConfigTemplate - 创建配置模板
     *
     * See also: https://docs.ucloud.cn/api/umongodb-api/create_umon_go_db_config_template
     */
    createUMongoDBConfigTemplate(request) {
        const args = Object.assign({ Action: 'CreateUMongoDBConfigTemplate' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateUMongoDBReplSet - 创建一个Mongodb副本集群
     *
     * See also: https://docs.ucloud.cn/api/umongodb-api/create_umon_go_db_repl_set
     */
    createUMongoDBReplSet(request) {
        const args = Object.assign({ Action: 'CreateUMongoDBReplSet' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateUMongoDBShardedCluster - 创建一个Mongodb分片集群
     *
     * See also: https://docs.ucloud.cn/api/umongodb-api/create_umon_go_db_sharded_cluster
     */
    createUMongoDBShardedCluster(request) {
        const args = Object.assign({ Action: 'CreateUMongoDBShardedCluster' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUMongoDBBackupURL - 获取实例备份下载链接
     *
     * See also: https://docs.ucloud.cn/api/umongodb-api/describe_umon_go_db_backup_url
     */
    describeUMongoDBBackupURL(request) {
        const args = Object.assign({ Action: 'DescribeUMongoDBBackupURL' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUMongoDBInstance - 描述MongoDB实例
     *
     * See also: https://docs.ucloud.cn/api/umongodb-api/describe_umon_go_db_instance
     */
    describeUMongoDBInstance(request) {
        const args = Object.assign({ Action: 'DescribeUMongoDBInstance' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUMongoDBBackupParam - 获取实例备份策略
     *
     * See also: https://docs.ucloud.cn/api/umongodb-api/get_umon_go_db_backup_param
     */
    getUMongoDBBackupParam(request) {
        const args = Object.assign({ Action: 'GetUMongoDBBackupParam' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUMongoDBCfgTempItem - 获取配置模板内容
     *
     * See also: https://docs.ucloud.cn/api/umongodb-api/get_umon_go_db_cfg_temp_item
     */
    getUMongoDBCfgTempItem(request) {
        const args = Object.assign({ Action: 'GetUMongoDBCfgTempItem' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUMongoDBLog - 查询某一段时间内集群节点的错误日志或慢查询日志
     *
     * See also: https://docs.ucloud.cn/api/umongodb-api/get_umon_go_db_log
     */
    getUMongoDBLog(request) {
        const args = Object.assign({ Action: 'GetUMongoDBLog' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUMongoDBRecoverTimeRange - 获取UMongoDB可回档时间范围
     *
     * See also: https://docs.ucloud.cn/api/umongodb-api/get_umon_go_db_recover_time_range
     */
    getUMongoDBRecoverTimeRange(request) {
        const args = Object.assign({ Action: 'GetUMongoDBRecoverTimeRange' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ListUMongoDBBackup - 拉取实例备份列表
     *
     * See also: https://docs.ucloud.cn/api/umongodb-api/list_umon_go_db_backup
     */
    listUMongoDBBackup(request) {
        const args = Object.assign({ Action: 'ListUMongoDBBackup' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ListUMongoDBConfigTemplate - 拉取配置模板
     *
     * See also: https://docs.ucloud.cn/api/umongodb-api/list_umon_go_db_config_template
     */
    listUMongoDBConfigTemplate(request) {
        const args = Object.assign({ Action: 'ListUMongoDBConfigTemplate' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ListUMongoDBInstances - 获取副本集/分片集群列表
     *
     * See also: https://docs.ucloud.cn/api/umongodb-api/list_umon_go_db_instances
     */
    listUMongoDBInstances(request) {
        const args = Object.assign({ Action: 'ListUMongoDBInstances' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ListUMongoDBLogPackage - 日志打包列表
     *
     * See also: https://docs.ucloud.cn/api/umongodb-api/list_umon_go_db_log_package
     */
    listUMongoDBLogPackage(request) {
        const args = Object.assign({ Action: 'ListUMongoDBLogPackage' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ListUMongoDBMachineSpec - 获取UMongoDB支持机器类型列表
     *
     * See also: https://docs.ucloud.cn/api/umongodb-api/list_umon_go_db_machine_spec
     */
    listUMongoDBMachineSpec(request) {
        const args = Object.assign({ Action: 'ListUMongoDBMachineSpec' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ListUMongoDBMachineType - 获取UmongDB支持机器类型列表
     *
     * See also: https://docs.ucloud.cn/api/umongodb-api/list_umon_go_db_machine_type
     */
    listUMongoDBMachineType(request) {
        const args = Object.assign({ Action: 'ListUMongoDBMachineType' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ListUMongoDBVersion - 获取UMongoDB支持版本列表
     *
     * See also: https://docs.ucloud.cn/api/umongodb-api/list_umon_go_db_version
     */
    listUMongoDBVersion(request) {
        const args = Object.assign({ Action: 'ListUMongoDBVersion' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ModifyUMongoDBAdminPassword - 修改MongoDB集群root密码
     *
     * See also: https://docs.ucloud.cn/api/umongodb-api/modify_umon_go_db_admin_password
     */
    modifyUMongoDBAdminPassword(request) {
        const args = Object.assign({ Action: 'ModifyUMongoDBAdminPassword' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ModifyUMongoDBAttribute - 修改MongoDB集群名称
     *
     * See also: https://docs.ucloud.cn/api/umongodb-api/modify_umon_go_db_attribute
     */
    modifyUMongoDBAttribute(request) {
        const args = Object.assign({ Action: 'ModifyUMongoDBAttribute' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ModifyUMongoDBBackupParam - 修改实例备份策略
     *
     * See also: https://docs.ucloud.cn/api/umongodb-api/modify_umon_go_db_backup_param
     */
    modifyUMongoDBBackupParam(request) {
        const args = Object.assign({ Action: 'ModifyUMongoDBBackupParam' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ResizeUMongoDBInstance - 集群配置升降级
     *
     * See also: https://docs.ucloud.cn/api/umongodb-api/resize_umon_go_db_instance
     */
    resizeUMongoDBInstance(request) {
        const args = Object.assign({ Action: 'ResizeUMongoDBInstance' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * RestartUMongoDBCluster - 重启集群
     *
     * See also: https://docs.ucloud.cn/api/umongodb-api/restart_umon_go_db_cluster
     */
    restartUMongoDBCluster(request) {
        const args = Object.assign({ Action: 'RestartUMongoDBCluster' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * StartUMongoDBCluster - 启动集群
     *
     * See also: https://docs.ucloud.cn/api/umongodb-api/start_umon_go_db_cluster
     */
    startUMongoDBCluster(request) {
        const args = Object.assign({ Action: 'StartUMongoDBCluster' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * StopUMongoDBCluster - 停止集群
     *
     * See also: https://docs.ucloud.cn/api/umongodb-api/stop_umon_go_db_cluster
     */
    stopUMongoDBCluster(request) {
        const args = Object.assign({ Action: 'StopUMongoDBCluster' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
}
exports.default = UMongoDBClient;
