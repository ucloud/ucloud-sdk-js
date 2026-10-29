"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("../../core/client"));
const request_1 = __importDefault(require("../../core/request"));
/**
 * This client is used to call actions of **udb_postgresql** service
 */
class UDBPostgreSQLClient extends client_1.default {
    constructor({ config, credential, }) {
        super({ config, credential });
    }
    /**
     * BackupUPgSQL - 创建备份服务
     *
     * See also: https://docs.ucloud.cn/api/udbpostgresql-api/backup_u_pg_sql
     */
    backupUPgSQL(request) {
        const args = Object.assign({ Action: 'BackupUPgSQL' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * BackupUPgSQLLog - 备份日志包
     *
     * See also: https://docs.ucloud.cn/api/udbpostgresql-api/backup_u_pg_sql_log
     */
    backupUPgSQLLog(request) {
        const args = Object.assign({ Action: 'BackupUPgSQLLog' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateUPgSQLInstance - 创建PG云数据库
     *
     * See also: https://docs.ucloud.cn/api/udbpostgresql-api/create_u_pg_sql_instance
     */
    createUPgSQLInstance(request) {
        const args = Object.assign({ Action: 'CreateUPgSQLInstance' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateUPgSQLParamTemplate - 创建PG参数模板
     *
     * See also: https://docs.ucloud.cn/api/udbpostgresql-api/create_u_pg_sql_param_template
     */
    createUPgSQLParamTemplate(request) {
        const args = Object.assign({ Action: 'CreateUPgSQLParamTemplate' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateUPgSQLReadonly - 创建PG从库
     *
     * See also: https://docs.ucloud.cn/api/udbpostgresql-api/create_u_pg_sql_readonly
     */
    createUPgSQLReadonly(request) {
        const args = Object.assign({ Action: 'CreateUPgSQLReadonly' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteUPgSQLInstance - 删除PG实例
     *
     * See also: https://docs.ucloud.cn/api/udbpostgresql-api/delete_u_pg_sql_instance
     */
    deleteUPgSQLInstance(request) {
        const args = Object.assign({ Action: 'DeleteUPgSQLInstance' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteUPgSQLParamTemplate - 删除参数模板
     *
     * See also: https://docs.ucloud.cn/api/udbpostgresql-api/delete_u_pg_sql_param_template
     */
    deleteUPgSQLParamTemplate(request) {
        const args = Object.assign({ Action: 'DeleteUPgSQLParamTemplate' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DownloadUPgSQLParamTemplate - 下载参数模板信息
     *
     * See also: https://docs.ucloud.cn/api/udbpostgresql-api/download_u_pg_sql_param_template
     */
    downloadUPgSQLParamTemplate(request) {
        const args = Object.assign({ Action: 'DownloadUPgSQLParamTemplate' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUPgSQLBackupStrategy - 获取备份策略
     *
     * See also: https://docs.ucloud.cn/api/udbpostgresql-api/get_u_pg_sql_backup_strategy
     */
    getUPgSQLBackupStrategy(request) {
        const args = Object.assign({ Action: 'GetUPgSQLBackupStrategy' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUPgSQLBackupURL - 获取备份下载地址
     *
     * See also: https://docs.ucloud.cn/api/udbpostgresql-api/get_u_pg_sql_backup_url
     */
    getUPgSQLBackupURL(request) {
        const args = Object.assign({ Action: 'GetUPgSQLBackupURL' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUPgSQLInstance - 获取PG云数据库实例描述
     *
     * See also: https://docs.ucloud.cn/api/udbpostgresql-api/get_u_pg_sql_instance
     */
    getUPgSQLInstance(request) {
        const args = Object.assign({ Action: 'GetUPgSQLInstance' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUPgSQLInstanceLog - 可以查询DB的错误日志和满查询日志
     *
     * See also: https://docs.ucloud.cn/api/udbpostgresql-api/get_u_pg_sql_instance_log
     */
    getUPgSQLInstanceLog(request) {
        const args = Object.assign({ Action: 'GetUPgSQLInstanceLog' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUPgSQLInstanceParam - 获取实例参数信息
     *
     * See also: https://docs.ucloud.cn/api/udbpostgresql-api/get_u_pg_sql_instance_param
     */
    getUPgSQLInstanceParam(request) {
        const args = Object.assign({ Action: 'GetUPgSQLInstanceParam' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUPgSQLInstancePrice - 获取创建PG云数据库价格
     *
     * See also: https://docs.ucloud.cn/api/udbpostgresql-api/get_u_pg_sql_instance_price
     */
    getUPgSQLInstancePrice(request) {
        const args = Object.assign({ Action: 'GetUPgSQLInstancePrice' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUPgSQLParamTemplate - 获取模板信息
     *
     * See also: https://docs.ucloud.cn/api/udbpostgresql-api/get_u_pg_sql_param_template
     */
    getUPgSQLParamTemplate(request) {
        const args = Object.assign({ Action: 'GetUPgSQLParamTemplate' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUPgSQLUpgradePrice -  获取 PG 云数据库升降级价格
     *
     * See also: https://docs.ucloud.cn/api/udbpostgresql-api/get_u_pg_sql_upgrade_price
     */
    getUPgSQLUpgradePrice(request) {
        const args = Object.assign({ Action: 'GetUPgSQLUpgradePrice' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ListUPgSQLBackup - 获取备份列表
     *
     * See also: https://docs.ucloud.cn/api/udbpostgresql-api/list_u_pg_sql_backup
     */
    listUPgSQLBackup(request) {
        const args = Object.assign({ Action: 'ListUPgSQLBackup' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ListUPgSQLInstance - 获取PG云数据库列表
     *
     * See also: https://docs.ucloud.cn/api/udbpostgresql-api/list_u_pg_sql_instance
     */
    listUPgSQLInstance(request) {
        const args = Object.assign({ Action: 'ListUPgSQLInstance' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ListUPgSQLLog - 获取数据库日志
     *
     * See also: https://docs.ucloud.cn/api/udbpostgresql-api/list_u_pg_sql_log
     */
    listUPgSQLLog(request) {
        const args = Object.assign({ Action: 'ListUPgSQLLog' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ListUPgSQLMachineType - 获取UPgSQL支持机器类型列表
     *
     * See also: https://docs.ucloud.cn/api/udbpostgresql-api/list_u_pg_sql_machine_type
     */
    listUPgSQLMachineType(request) {
        const args = Object.assign({ Action: 'ListUPgSQLMachineType' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ListUPgSQLParamTemplate - 获取可用参数模板列表
     *
     * See also: https://docs.ucloud.cn/api/udbpostgresql-api/list_u_pg_sql_param_template
     */
    listUPgSQLParamTemplate(request) {
        const args = Object.assign({ Action: 'ListUPgSQLParamTemplate' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ListUPgSQLVersion - 获取UPgSQL支持版本列表
     *
     * See also: https://docs.ucloud.cn/api/udbpostgresql-api/list_u_pg_sql_version
     */
    listUPgSQLVersion(request) {
        const args = Object.assign({ Action: 'ListUPgSQLVersion' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * RestartUPgSQLInstance - 重启PG实例
     *
     * See also: https://docs.ucloud.cn/api/udbpostgresql-api/restart_u_pg_sql_instance
     */
    restartUPgSQLInstance(request) {
        const args = Object.assign({ Action: 'RestartUPgSQLInstance' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * StartUPgSQLInstance - 启动 PG实例
     *
     * See also: https://docs.ucloud.cn/api/udbpostgresql-api/start_u_pg_sql_instance
     */
    startUPgSQLInstance(request) {
        const args = Object.assign({ Action: 'StartUPgSQLInstance' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * StopUPgSQLCreatingReadonly - 停止创建从库
     *
     * See also: https://docs.ucloud.cn/api/udbpostgresql-api/stop_u_pg_sql_creating_readonly
     */
    stopUPgSQLCreatingReadonly(request) {
        const args = Object.assign({ Action: 'StopUPgSQLCreatingReadonly' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * StopUPgSQLInstance - 关闭PG实例
     *
     * See also: https://docs.ucloud.cn/api/udbpostgresql-api/stop_u_pg_sql_instance
     */
    stopUPgSQLInstance(request) {
        const args = Object.assign({ Action: 'StopUPgSQLInstance' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateUPgSQLAttribute - 更新数据库属性
     *
     * See also: https://docs.ucloud.cn/api/udbpostgresql-api/update_u_pg_sql_attribute
     */
    updateUPgSQLAttribute(request) {
        const args = Object.assign({ Action: 'UpdateUPgSQLAttribute' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateUPgSQLBackupStrategy - 修改备份策略
     *
     * See also: https://docs.ucloud.cn/api/udbpostgresql-api/update_u_pg_sql_backup_strategy
     */
    updateUPgSQLBackupStrategy(request) {
        const args = Object.assign({ Action: 'UpdateUPgSQLBackupStrategy' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateUPgSQLPassword - 更新数据库用户密码
     *
     * See also: https://docs.ucloud.cn/api/udbpostgresql-api/update_u_pg_sql_password
     */
    updateUPgSQLPassword(request) {
        const args = Object.assign({ Action: 'UpdateUPgSQLPassword' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpgradeUPgSQLInstance - 硬件规格升降级
     *
     * See also: https://docs.ucloud.cn/api/udbpostgresql-api/upgrade_u_pg_sql_instance
     */
    upgradeUPgSQLInstance(request) {
        const args = Object.assign({ Action: 'UpgradeUPgSQLInstance' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UploadUPgSQLParamTemplate - 上传参数模板
     *
     * See also: https://docs.ucloud.cn/api/udbpostgresql-api/upload_u_pg_sql_param_template
     */
    uploadUPgSQLParamTemplate(request) {
        const args = Object.assign({ Action: 'UploadUPgSQLParamTemplate' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
}
exports.default = UDBPostgreSQLClient;
