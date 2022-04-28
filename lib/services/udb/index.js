"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("../../core/client"));
const request_1 = __importDefault(require("../../core/request"));
/**
 * This client is used to call actions of **udb** service
 */
class UDBClient extends client_1.default {
    constructor({ config, credential, }) {
        super({ config, credential });
    }
    /**
     * BackupUDBInstance - 备份UDB实例
     *
     * See also: https://docs.ucloud.cn/api/udb-api/backup_udb_instance
     */
    backupUDBInstance(request) {
        const args = Object.assign({ Action: 'BackupUDBInstance' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * BackupUDBInstanceBinlog - 备份UDB指定时间段的binlog列表
     *
     * See also: https://docs.ucloud.cn/api/udb-api/backup_udb_instance_binlog
     */
    backupUDBInstanceBinlog(request) {
        const args = Object.assign({ Action: 'BackupUDBInstanceBinlog' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * BackupUDBInstanceErrorLog - 备份UDB指定时间段的errorlog
     *
     * See also: https://docs.ucloud.cn/api/udb-api/backup_udb_instance_error_log
     */
    backupUDBInstanceErrorLog(request) {
        const args = Object.assign({ Action: 'BackupUDBInstanceErrorLog' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * BackupUDBInstanceSlowLog - 备份UDB指定时间段的slowlog分析结果
     *
     * See also: https://docs.ucloud.cn/api/udb-api/backup_udb_instance_slow_log
     */
    backupUDBInstanceSlowLog(request) {
        const args = Object.assign({ Action: 'BackupUDBInstanceSlowLog' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ChangeUDBParamGroup - 修改配置文件
     *
     * See also: https://docs.ucloud.cn/api/udb-api/change_udb_param_group
     */
    changeUDBParamGroup(request) {
        const args = Object.assign({ Action: 'ChangeUDBParamGroup' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CheckRecoverUDBInstance - 核查db是否可以使用回档功能
     *
     * See also: https://docs.ucloud.cn/api/udb-api/check_recover_udb_instance
     */
    checkRecoverUDBInstance(request) {
        const args = Object.assign({ Action: 'CheckRecoverUDBInstance' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CheckUDBInstanceToHAAllowance - 核查db是否可以升级为高可用
     *
     * See also: https://docs.ucloud.cn/api/udb-api/check_udb_instance_to_ha_allowance
     */
    checkUDBInstanceToHAAllowance(request) {
        const args = Object.assign({ Action: 'CheckUDBInstanceToHAAllowance' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ClearUDBLog - 清除UDB实例的log
     *
     * See also: https://docs.ucloud.cn/api/udb-api/clear_udb_log
     */
    clearUDBLog(request) {
        const args = Object.assign({ Action: 'ClearUDBLog' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateMongoDBReplicaSet - 一键创建DB副本集
     *
     * See also: https://docs.ucloud.cn/api/udb-api/create_mongo_db_replica_set
     */
    createMongoDBReplicaSet(request) {
        const args = Object.assign({ Action: 'CreateMongoDBReplicaSet' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateUDBInstance - 创建UDB实例（包括创建mysql master节点、mongodb primary/configsvr节点和从备份恢复实例）
     *
     * See also: https://docs.ucloud.cn/api/udb-api/create_udb_instance
     */
    createUDBInstance(request) {
        const args = Object.assign({ Action: 'CreateUDBInstance' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateUDBInstanceByRecovery - 创建db，将新创建的db恢复到指定db某个指定时间点
     *
     * See also: https://docs.ucloud.cn/api/udb-api/create_udb_instance_by_recovery
     */
    createUDBInstanceByRecovery(request) {
        const args = Object.assign({ Action: 'CreateUDBInstanceByRecovery' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateUDBParamGroup - 从已有配置文件创建新配置文件
     *
     * See also: https://docs.ucloud.cn/api/udb-api/create_udb_param_group
     */
    createUDBParamGroup(request) {
        const args = Object.assign({ Action: 'CreateUDBParamGroup' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateUDBReplicationInstance - 创建MongoDB的副本节点（包括仲裁）
     *
     * See also: https://docs.ucloud.cn/api/udb-api/create_udb_replication_instance
     */
    createUDBReplicationInstance(request) {
        const args = Object.assign({ Action: 'CreateUDBReplicationInstance' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateUDBRouteInstance - 创建mongos实例
     *
     * See also: https://docs.ucloud.cn/api/udb-api/create_udb_route_instance
     */
    createUDBRouteInstance(request) {
        const args = Object.assign({ Action: 'CreateUDBRouteInstance' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateUDBSlave - 创建UDB实例的slave
     *
     * See also: https://docs.ucloud.cn/api/udb-api/create_udb_slave
     */
    createUDBSlave(request) {
        const args = Object.assign({ Action: 'CreateUDBSlave' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteUDBInstance - 删除UDB实例
     *
     * See also: https://docs.ucloud.cn/api/udb-api/delete_udb_instance
     */
    deleteUDBInstance(request) {
        const args = Object.assign({ Action: 'DeleteUDBInstance' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteUDBLogPackage - 删除UDB日志包
     *
     * See also: https://docs.ucloud.cn/api/udb-api/delete_udb_log_package
     */
    deleteUDBLogPackage(request) {
        const args = Object.assign({ Action: 'DeleteUDBLogPackage' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteUDBParamGroup - 删除配置参数组
     *
     * See also: https://docs.ucloud.cn/api/udb-api/delete_udb_param_group
     */
    deleteUDBParamGroup(request) {
        const args = Object.assign({ Action: 'DeleteUDBParamGroup' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUDBBackup - 列表UDB实例备份信息
     *
     * See also: https://docs.ucloud.cn/api/udb-api/describe_udb_backup
     */
    describeUDBBackup(request) {
        const args = Object.assign({ Action: 'DescribeUDBBackup' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUDBBackupBlacklist - 获取UDB实例的备份黑名单
     *
     * See also: https://docs.ucloud.cn/api/udb-api/describe_udb_backup_blacklist
     */
    describeUDBBackupBlacklist(request) {
        const args = Object.assign({ Action: 'DescribeUDBBackupBlacklist' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUDBBinlogBackupURL - 获取UDB的Binlog备份地址
     *
     * See also: https://docs.ucloud.cn/api/udb-api/describe_udb_binlog_backup_url
     */
    describeUDBBinlogBackupURL(request) {
        const args = Object.assign({ Action: 'DescribeUDBBinlogBackupURL' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUDBInstance - 获取UDB实例信息，支持两类操作：（1）指定DBId用于获取该db的信息；（2）指定ClassType、Offset、Limit用于列表操作，查询某一个类型db。
     *
     * See also: https://docs.ucloud.cn/api/udb-api/describe_udb_instance
     */
    describeUDBInstance(request) {
        const args = Object.assign({ Action: 'DescribeUDBInstance' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUDBInstanceBackupState - 获取UDB实例备份状态
     *
     * See also: https://docs.ucloud.cn/api/udb-api/describe_udb_instance_backup_state
     */
    describeUDBInstanceBackupState(request) {
        const args = Object.assign({ Action: 'DescribeUDBInstanceBackupState' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUDBInstanceBackupURL - 获取UDB备份下载地址
     *
     * See also: https://docs.ucloud.cn/api/udb-api/describe_udb_instance_backup_url
     */
    describeUDBInstanceBackupURL(request) {
        const args = Object.assign({ Action: 'DescribeUDBInstanceBackupURL' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUDBInstanceBinlog - 获取UDB指定时间段的binlog列表
     *
     * See also: https://docs.ucloud.cn/api/udb-api/describe_udb_instance_binlog
     */
    describeUDBInstanceBinlog(request) {
        const args = Object.assign({ Action: 'DescribeUDBInstanceBinlog' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUDBInstanceBinlogBackupState - 获取udb实例备份状态
     *
     * See also: https://docs.ucloud.cn/api/udb-api/describe_udb_instance_binlog_backup_state
     */
    describeUDBInstanceBinlogBackupState(request) {
        const args = Object.assign({ Action: 'DescribeUDBInstanceBinlogBackupState' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUDBInstanceLog - 查询某一段时间内UDB的错误日志或慢查询日志
     *
     * See also: https://docs.ucloud.cn/api/udb-api/describe_udb_instance_log
     */
    describeUDBInstanceLog(request) {
        const args = Object.assign({ Action: 'DescribeUDBInstanceLog' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUDBInstancePrice - 获取UDB实例价格信息
     *
     * See also: https://docs.ucloud.cn/api/udb-api/describe_udb_instance_price
     */
    describeUDBInstancePrice(request) {
        const args = Object.assign({ Action: 'DescribeUDBInstancePrice' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUDBInstanceState - 获取UDB实例状态
     *
     * See also: https://docs.ucloud.cn/api/udb-api/describe_udb_instance_state
     */
    describeUDBInstanceState(request) {
        const args = Object.assign({ Action: 'DescribeUDBInstanceState' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUDBInstanceUpgradePrice - 获取UDB实例升降级价格信息
     *
     * See also: https://docs.ucloud.cn/api/udb-api/describe_udb_instance_upgrade_price
     */
    describeUDBInstanceUpgradePrice(request) {
        const args = Object.assign({ Action: 'DescribeUDBInstanceUpgradePrice' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUDBLogBackupURL - 获取UDB的slowlog备份地址
     *
     * See also: https://docs.ucloud.cn/api/udb-api/describe_udb_log_backup_url
     */
    describeUDBLogBackupURL(request) {
        const args = Object.assign({ Action: 'DescribeUDBLogBackupURL' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUDBLogPackage - 列表UDB实例binlog或slowlog或errorlog备份信息
     *
     * See also: https://docs.ucloud.cn/api/udb-api/describe_udb_log_package
     */
    describeUDBLogPackage(request) {
        const args = Object.assign({ Action: 'DescribeUDBLogPackage' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUDBParamGroup - 获取参数组详细参数信息
     *
     * See also: https://docs.ucloud.cn/api/udb-api/describe_udb_param_group
     */
    describeUDBParamGroup(request) {
        const args = Object.assign({ Action: 'DescribeUDBParamGroup' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUDBSplittingInfo - 描述读写分离功能的详细信息
     *
     * See also: https://docs.ucloud.cn/api/udb-api/describe_udb_splitting_info
     */
    describeUDBSplittingInfo(request) {
        const args = Object.assign({ Action: 'DescribeUDBSplittingInfo' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUDBType - 获取UDB支持的类型信息
     *
     * See also: https://docs.ucloud.cn/api/udb-api/describe_udb_type
     */
    describeUDBType(request) {
        const args = Object.assign({ Action: 'DescribeUDBType' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DisableUDBRWSplitting - 关闭DB的读写分离功能
     *
     * See also: https://docs.ucloud.cn/api/udb-api/disable_udb_rw_splitting
     */
    disableUDBRWSplitting(request) {
        const args = Object.assign({ Action: 'DisableUDBRWSplitting' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * EditUDBBackupBlacklist - 编辑UDB实例的备份黑名单
     *
     * See also: https://docs.ucloud.cn/api/udb-api/edit_udb_backup_blacklist
     */
    editUDBBackupBlacklist(request) {
        const args = Object.assign({ Action: 'EditUDBBackupBlacklist' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * EnableUDBRWSplitting - 开启DB的读写分离功能
     *
     * See also: https://docs.ucloud.cn/api/udb-api/enable_udb_rw_splitting
     */
    enableUDBRWSplitting(request) {
        const args = Object.assign({ Action: 'EnableUDBRWSplitting' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ExtractUDBParamGroup - 获取配置文件内容
     *
     * See also: https://docs.ucloud.cn/api/udb-api/extract_udb_param_group
     */
    extractUDBParamGroup(request) {
        const args = Object.assign({ Action: 'ExtractUDBParamGroup' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * FetchUDBInstanceEarliestRecoverTime - 获取UDB最早可回档的时间点
     *
     * See also: https://docs.ucloud.cn/api/udb-api/fetch_udb_instance_earliest_recover_time
     */
    fetchUDBInstanceEarliestRecoverTime(request) {
        const args = Object.assign({ Action: 'FetchUDBInstanceEarliestRecoverTime' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUDBClientConnNum - 输入一个DBID，能够获取客户端来源IP以及对应的连接数
     *
     * See also: https://docs.ucloud.cn/api/udb-api/get_udb_client_conn_num
     */
    getUDBClientConnNum(request) {
        const args = Object.assign({ Action: 'GetUDBClientConnNum' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ModifyUDBInstanceName - 重命名UDB实例
     *
     * See also: https://docs.ucloud.cn/api/udb-api/modify_udb_instance_name
     */
    modifyUDBInstanceName(request) {
        const args = Object.assign({ Action: 'ModifyUDBInstanceName' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ModifyUDBInstancePassword - 修改DB实例的管理员密码
     *
     * See also: https://docs.ucloud.cn/api/udb-api/modify_udb_instance_password
     */
    modifyUDBInstancePassword(request) {
        const args = Object.assign({ Action: 'ModifyUDBInstancePassword' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * PromoteUDBInstanceToHA - 普通db升级为高可用(只针对mysql5.5及以上版本SSD机型的实例)  ，对于NVMe机型的单点升级高可用，虽然也能使用该操作再加上SwitchUDBInstanceToHA，但是更建议直接调用新的API接口（UpgradeUDBInstanceToHA）
     *
     * See also: https://docs.ucloud.cn/api/udb-api/promote_udb_instance_to_ha
     */
    promoteUDBInstanceToHA(request) {
        const args = Object.assign({ Action: 'PromoteUDBInstanceToHA' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * PromoteUDBSlave - 从库提升为独立库
     *
     * See also: https://docs.ucloud.cn/api/udb-api/promote_udb_slave
     */
    promoteUDBSlave(request) {
        const args = Object.assign({ Action: 'PromoteUDBSlave' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ResizeUDBInstance - 修改（升级和降级）UDB实例的配置，包括内存和磁盘的配置，对于内存升级无需关闭实例，其他场景需要事先关闭实例。两套参数可以配置升降机：1.配置UseSSD和SSDType  2.配置InstanceType，不需要配置InstanceMode。这两套第二套参数的优先级更高
     *
     * See also: https://docs.ucloud.cn/api/udb-api/resize_udb_instance
     */
    resizeUDBInstance(request) {
        const args = Object.assign({ Action: 'ResizeUDBInstance' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * RestartRWSplitting - 读写分离中间件重启，对应docker重启，但是ip不变
     *
     * See also: https://docs.ucloud.cn/api/udb-api/restart_rw_splitting
     */
    restartRWSplitting(request) {
        const args = Object.assign({ Action: 'RestartRWSplitting' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * RestartUDBInstance - 重启UDB实例
     *
     * See also: https://docs.ucloud.cn/api/udb-api/restart_udb_instance
     */
    restartUDBInstance(request) {
        const args = Object.assign({ Action: 'RestartUDBInstance' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * SetUDBRWSplitting - 设置读写分离的模式
     *
     * See also: https://docs.ucloud.cn/api/udb-api/set_udb_rw_splitting
     */
    setUDBRWSplitting(request) {
        const args = Object.assign({ Action: 'SetUDBRWSplitting' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * StartUDBInstance - 启动UDB实例
     *
     * See also: https://docs.ucloud.cn/api/udb-api/start_udb_instance
     */
    startUDBInstance(request) {
        const args = Object.assign({ Action: 'StartUDBInstance' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * StopUDBInstance - 关闭UDB实例
     *
     * See also: https://docs.ucloud.cn/api/udb-api/stop_udb_instance
     */
    stopUDBInstance(request) {
        const args = Object.assign({ Action: 'StopUDBInstance' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * SwitchUDBHAToSentinel - UDB高可用实例从HAProxy版本升级为Sentinel版本（不带HAProxy）升级耗时5-10秒
     *
     * See also: https://docs.ucloud.cn/api/udb-api/switch_udb_ha_to_sentinel
     */
    switchUDBHAToSentinel(request) {
        const args = Object.assign({ Action: 'SwitchUDBHAToSentinel' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * SwitchUDBInstanceToHA - 普通UDB切换为高可用(只针对mysql5.5及以上版本SSD机型的实例) ，原db状态为WaitForSwitch时，调用该api； 对于NVMe机型的单点升级高可用，虽然也能使用PromoteUDBInstanceToHA再加上该操作，但是更建议直接调用新的API接口（UpgradeUDBInstanceToHA）
     *
     * See also: https://docs.ucloud.cn/api/udb-api/switch_udb_instance_to_ha
     */
    switchUDBInstanceToHA(request) {
        const args = Object.assign({ Action: 'SwitchUDBInstanceToHA' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateUDBInstanceBackupStrategy - 修改UDB自动备份策略
     *
     * See also: https://docs.ucloud.cn/api/udb-api/update_udb_instance_backup_strategy
     */
    updateUDBInstanceBackupStrategy(request) {
        const args = Object.assign({ Action: 'UpdateUDBInstanceBackupStrategy' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateUDBInstanceSlaveBackupSwitch - 开启或者关闭UDB从库备份
     *
     * See also: https://docs.ucloud.cn/api/udb-api/update_udb_instance_slave_backup_switch
     */
    updateUDBInstanceSlaveBackupSwitch(request) {
        const args = Object.assign({ Action: 'UpdateUDBInstanceSlaveBackupSwitch' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateUDBParamGroup - 更新UDB配置参数项
     *
     * See also: https://docs.ucloud.cn/api/udb-api/update_udb_param_group
     */
    updateUDBParamGroup(request) {
        const args = Object.assign({ Action: 'UpdateUDBParamGroup' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpgradeUDBInstanceToHA - 快杰普通db升级为高可用(只针对mysql5.5及以上版本Nvme机型的实例)
     *
     * See also: https://docs.ucloud.cn/api/udb-api/upgrade_udb_instance_to_ha
     */
    upgradeUDBInstanceToHA(request) {
        const args = Object.assign({ Action: 'UpgradeUDBInstanceToHA' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UploadUDBParamGroup - 导入UDB配置
     *
     * See also: https://docs.ucloud.cn/api/udb-api/upload_udb_param_group
     */
    uploadUDBParamGroup(request) {
        const args = Object.assign({ Action: 'UploadUDBParamGroup' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
}
exports.default = UDBClient;
