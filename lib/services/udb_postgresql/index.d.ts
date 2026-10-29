import Client from '../../core/client';
import { ConfigOptions } from '../../core/config';
import { CredentialOptions } from '../../core/credential';
/**
 * This client is used to call actions of **udb_postgresql** service
 */
export default class UDBPostgreSQLClient extends Client {
    constructor({ config, credential, }: {
        config: ConfigOptions;
        credential: CredentialOptions;
    });
    /**
     * BackupUPgSQL - 创建备份服务
     *
     * See also: https://docs.ucloud.cn/api/udbpostgresql-api/backup_u_pg_sql
     */
    backupUPgSQL(request?: BackupUPgSQLRequest): Promise<BackupUPgSQLResponse>;
    /**
     * BackupUPgSQLLog - 备份日志包
     *
     * See also: https://docs.ucloud.cn/api/udbpostgresql-api/backup_u_pg_sql_log
     */
    backupUPgSQLLog(request?: BackupUPgSQLLogRequest): Promise<BackupUPgSQLLogResponse>;
    /**
     * CreateUPgSQLInstance - 创建PG云数据库
     *
     * See also: https://docs.ucloud.cn/api/udbpostgresql-api/create_u_pg_sql_instance
     */
    createUPgSQLInstance(request?: CreateUPgSQLInstanceRequest): Promise<CreateUPgSQLInstanceResponse>;
    /**
     * CreateUPgSQLParamTemplate - 创建PG参数模板
     *
     * See also: https://docs.ucloud.cn/api/udbpostgresql-api/create_u_pg_sql_param_template
     */
    createUPgSQLParamTemplate(request?: CreateUPgSQLParamTemplateRequest): Promise<CreateUPgSQLParamTemplateResponse>;
    /**
     * CreateUPgSQLReadonly - 创建PG从库
     *
     * See also: https://docs.ucloud.cn/api/udbpostgresql-api/create_u_pg_sql_readonly
     */
    createUPgSQLReadonly(request?: CreateUPgSQLReadonlyRequest): Promise<CreateUPgSQLReadonlyResponse>;
    /**
     * DeleteUPgSQLInstance - 删除PG实例
     *
     * See also: https://docs.ucloud.cn/api/udbpostgresql-api/delete_u_pg_sql_instance
     */
    deleteUPgSQLInstance(request?: DeleteUPgSQLInstanceRequest): Promise<DeleteUPgSQLInstanceResponse>;
    /**
     * DeleteUPgSQLParamTemplate - 删除参数模板
     *
     * See also: https://docs.ucloud.cn/api/udbpostgresql-api/delete_u_pg_sql_param_template
     */
    deleteUPgSQLParamTemplate(request?: DeleteUPgSQLParamTemplateRequest): Promise<DeleteUPgSQLParamTemplateResponse>;
    /**
     * DownloadUPgSQLParamTemplate - 下载参数模板信息
     *
     * See also: https://docs.ucloud.cn/api/udbpostgresql-api/download_u_pg_sql_param_template
     */
    downloadUPgSQLParamTemplate(request?: DownloadUPgSQLParamTemplateRequest): Promise<DownloadUPgSQLParamTemplateResponse>;
    /**
     * GetUPgSQLBackupStrategy - 获取备份策略
     *
     * See also: https://docs.ucloud.cn/api/udbpostgresql-api/get_u_pg_sql_backup_strategy
     */
    getUPgSQLBackupStrategy(request?: GetUPgSQLBackupStrategyRequest): Promise<GetUPgSQLBackupStrategyResponse>;
    /**
     * GetUPgSQLBackupURL - 获取备份下载地址
     *
     * See also: https://docs.ucloud.cn/api/udbpostgresql-api/get_u_pg_sql_backup_url
     */
    getUPgSQLBackupURL(request?: GetUPgSQLBackupURLRequest): Promise<GetUPgSQLBackupURLResponse>;
    /**
     * GetUPgSQLInstance - 获取PG云数据库实例描述
     *
     * See also: https://docs.ucloud.cn/api/udbpostgresql-api/get_u_pg_sql_instance
     */
    getUPgSQLInstance(request?: GetUPgSQLInstanceRequest): Promise<GetUPgSQLInstanceResponse>;
    /**
     * GetUPgSQLInstanceLog - 可以查询DB的错误日志和满查询日志
     *
     * See also: https://docs.ucloud.cn/api/udbpostgresql-api/get_u_pg_sql_instance_log
     */
    getUPgSQLInstanceLog(request?: GetUPgSQLInstanceLogRequest): Promise<GetUPgSQLInstanceLogResponse>;
    /**
     * GetUPgSQLInstanceParam - 获取实例参数信息
     *
     * See also: https://docs.ucloud.cn/api/udbpostgresql-api/get_u_pg_sql_instance_param
     */
    getUPgSQLInstanceParam(request?: GetUPgSQLInstanceParamRequest): Promise<GetUPgSQLInstanceParamResponse>;
    /**
     * GetUPgSQLInstancePrice - 获取创建PG云数据库价格
     *
     * See also: https://docs.ucloud.cn/api/udbpostgresql-api/get_u_pg_sql_instance_price
     */
    getUPgSQLInstancePrice(request?: GetUPgSQLInstancePriceRequest): Promise<GetUPgSQLInstancePriceResponse>;
    /**
     * GetUPgSQLParamTemplate - 获取模板信息
     *
     * See also: https://docs.ucloud.cn/api/udbpostgresql-api/get_u_pg_sql_param_template
     */
    getUPgSQLParamTemplate(request?: GetUPgSQLParamTemplateRequest): Promise<GetUPgSQLParamTemplateResponse>;
    /**
     * GetUPgSQLUpgradePrice -  获取 PG 云数据库升降级价格
     *
     * See also: https://docs.ucloud.cn/api/udbpostgresql-api/get_u_pg_sql_upgrade_price
     */
    getUPgSQLUpgradePrice(request?: GetUPgSQLUpgradePriceRequest): Promise<GetUPgSQLUpgradePriceResponse>;
    /**
     * ListUPgSQLBackup - 获取备份列表
     *
     * See also: https://docs.ucloud.cn/api/udbpostgresql-api/list_u_pg_sql_backup
     */
    listUPgSQLBackup(request?: ListUPgSQLBackupRequest): Promise<ListUPgSQLBackupResponse>;
    /**
     * ListUPgSQLInstance - 获取PG云数据库列表
     *
     * See also: https://docs.ucloud.cn/api/udbpostgresql-api/list_u_pg_sql_instance
     */
    listUPgSQLInstance(request?: ListUPgSQLInstanceRequest): Promise<ListUPgSQLInstanceResponse>;
    /**
     * ListUPgSQLLog - 获取数据库日志
     *
     * See also: https://docs.ucloud.cn/api/udbpostgresql-api/list_u_pg_sql_log
     */
    listUPgSQLLog(request?: ListUPgSQLLogRequest): Promise<ListUPgSQLLogResponse>;
    /**
     * ListUPgSQLMachineType - 获取UPgSQL支持机器类型列表
     *
     * See also: https://docs.ucloud.cn/api/udbpostgresql-api/list_u_pg_sql_machine_type
     */
    listUPgSQLMachineType(request?: ListUPgSQLMachineTypeRequest): Promise<ListUPgSQLMachineTypeResponse>;
    /**
     * ListUPgSQLParamTemplate - 获取可用参数模板列表
     *
     * See also: https://docs.ucloud.cn/api/udbpostgresql-api/list_u_pg_sql_param_template
     */
    listUPgSQLParamTemplate(request?: ListUPgSQLParamTemplateRequest): Promise<ListUPgSQLParamTemplateResponse>;
    /**
     * ListUPgSQLVersion - 获取UPgSQL支持版本列表
     *
     * See also: https://docs.ucloud.cn/api/udbpostgresql-api/list_u_pg_sql_version
     */
    listUPgSQLVersion(request?: ListUPgSQLVersionRequest): Promise<ListUPgSQLVersionResponse>;
    /**
     * RestartUPgSQLInstance - 重启PG实例
     *
     * See also: https://docs.ucloud.cn/api/udbpostgresql-api/restart_u_pg_sql_instance
     */
    restartUPgSQLInstance(request?: RestartUPgSQLInstanceRequest): Promise<RestartUPgSQLInstanceResponse>;
    /**
     * StartUPgSQLInstance - 启动 PG实例
     *
     * See also: https://docs.ucloud.cn/api/udbpostgresql-api/start_u_pg_sql_instance
     */
    startUPgSQLInstance(request?: StartUPgSQLInstanceRequest): Promise<StartUPgSQLInstanceResponse>;
    /**
     * StopUPgSQLCreatingReadonly - 停止创建从库
     *
     * See also: https://docs.ucloud.cn/api/udbpostgresql-api/stop_u_pg_sql_creating_readonly
     */
    stopUPgSQLCreatingReadonly(request?: StopUPgSQLCreatingReadonlyRequest): Promise<StopUPgSQLCreatingReadonlyResponse>;
    /**
     * StopUPgSQLInstance - 关闭PG实例
     *
     * See also: https://docs.ucloud.cn/api/udbpostgresql-api/stop_u_pg_sql_instance
     */
    stopUPgSQLInstance(request?: StopUPgSQLInstanceRequest): Promise<StopUPgSQLInstanceResponse>;
    /**
     * UpdateUPgSQLAttribute - 更新数据库属性
     *
     * See also: https://docs.ucloud.cn/api/udbpostgresql-api/update_u_pg_sql_attribute
     */
    updateUPgSQLAttribute(request?: UpdateUPgSQLAttributeRequest): Promise<UpdateUPgSQLAttributeResponse>;
    /**
     * UpdateUPgSQLBackupStrategy - 修改备份策略
     *
     * See also: https://docs.ucloud.cn/api/udbpostgresql-api/update_u_pg_sql_backup_strategy
     */
    updateUPgSQLBackupStrategy(request?: UpdateUPgSQLBackupStrategyRequest): Promise<UpdateUPgSQLBackupStrategyResponse>;
    /**
     * UpdateUPgSQLPassword - 更新数据库用户密码
     *
     * See also: https://docs.ucloud.cn/api/udbpostgresql-api/update_u_pg_sql_password
     */
    updateUPgSQLPassword(request?: UpdateUPgSQLPasswordRequest): Promise<UpdateUPgSQLPasswordResponse>;
    /**
     * UpgradeUPgSQLInstance - 硬件规格升降级
     *
     * See also: https://docs.ucloud.cn/api/udbpostgresql-api/upgrade_u_pg_sql_instance
     */
    upgradeUPgSQLInstance(request?: UpgradeUPgSQLInstanceRequest): Promise<UpgradeUPgSQLInstanceResponse>;
    /**
     * UploadUPgSQLParamTemplate - 上传参数模板
     *
     * See also: https://docs.ucloud.cn/api/udbpostgresql-api/upload_u_pg_sql_param_template
     */
    uploadUPgSQLParamTemplate(request?: UploadUPgSQLParamTemplateRequest): Promise<UploadUPgSQLParamTemplateResponse>;
}
/**
 * BackupUPgSQL - 创建备份服务
 */
export interface BackupUPgSQLRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * DB实例Id
     */
    InstanceID: string;
    /**
     * 备份名称
     */
    BackupName: string;
    /**
     * 使用的备份方式(物理备份，逻辑备份)
     */
    BackupMethod: number;
    /**
     * 备份黑名单列表，以“ ;” 分隔。
     */
    Blacklist: string;
}
/**
 * BackupUPgSQL - 创建备份服务
 */
export interface BackupUPgSQLResponse {
    /**
     * 返回的备份ID
     */
    BackupID: string;
}
/**
 * BackupUPgSQLLog - 备份日志包
 */
export interface BackupUPgSQLLogRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * 备份导出文件名称
     */
    BackupName: string;
    /**
     * 资源ID
     */
    InstanceID: string;
    /**
     * 日志类型:slowlog(慢日志),errorlog(错误日志),不区分大小写
     */
    LogType: string;
    /**
     * 日志开始时间
     */
    BeginTime: number;
    /**
     * 日志结束时间
     */
    EndTime: number;
}
/**
 * BackupUPgSQLLog - 备份日志包
 */
export interface BackupUPgSQLLogResponse {
}
/**
 * CreateUPgSQLInstance - 创建PG云数据库
 */
export interface CreateUPgSQLInstanceRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * 实例名称，至少6位
     */
    Name: string;
    /**
     * PostgreSQL的版本，pg10.4:postgresql-10.4，pg13.4:postgresql-13.4
     */
    DBVersion: string;
    /**
     * DB实例使用的配置参数组id
     */
    ParamGroupID: number;
    /**
     * 管理员密码
     */
    AdminPassword: string;
    /**
     * 端口默认为5432
     */
    Port: number;
    /**
     * 磁盘空间(GB)
     */
    DiskSpace: string;
    /**
     * 机器配置类型，2核4G的机器:o.pgsql2m.medium
     */
    MachineType: string;
    /**
     * 子网ID
     */
    SubnetID: string;
    /**
     * VPC的ID
     */
    VPCID: string;
    /**
     * UDB实例模式类型, 可选值如下: "Normal": 普通版UDB实例 "HA": 高可用版UDB实例 默认是"Normal"
     */
    InstanceMode?: string;
}
/**
 * CreateUPgSQLInstance - 创建PG云数据库
 */
export interface CreateUPgSQLInstanceResponse {
    /**
     * 资源ID
     */
    InstanceID?: string;
}
/**
 * CreateUPgSQLParamTemplate - 创建PG参数模板
 */
export interface CreateUPgSQLParamTemplateRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * 模板名称
     */
    GroupName: string;
    /**
     * 基准模板
     */
    SrcGroupID: number;
    /**
     * 什么版本,以及类型的DB
     */
    DBVersion: string;
    /**
     * 描述信息
     */
    Description?: string;
}
/**
 * CreateUPgSQLParamTemplate - 创建PG参数模板
 */
export interface CreateUPgSQLParamTemplateResponse {
    /**
     * 创建的模板ID
     */
    GroupID: number;
}
/**
 * CreateUPgSQLReadonly - 创建PG从库
 */
export interface CreateUPgSQLReadonlyRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * Db名称
     */
    Name: string;
    /**
     * DB端口
     */
    Port: number;
    /**
     * 磁盘空间
     */
    DiskSpace: number;
    /**
     * 机器配置类型，2核4G的机器:o.pgsql2m.medium
     */
    MachineType: string;
    /**
     * 同步的源库
     */
    SrcInstanceID: string;
    /**
     * 子网ID
     */
    SubnetID?: string;
    /**
     * VPCID
     */
    VPCID?: string;
    /**
     *
     */
    Labels?: {
        /**
         * 用户资源标签的键值
         */
        Key?: string;
        /**
         * 用户资源标签值
         */
        Value?: string;
    }[];
    /**
     *
     */
    SecGroupId?: {
        /**
         * 安全组id
         */
        Id?: string;
        /**
         * 安全组优先级
         */
        Priority?: number;
    }[];
}
/**
 * CreateUPgSQLReadonly - 创建PG从库
 */
export interface CreateUPgSQLReadonlyResponse {
    /**
     * 资源ID
     */
    InstanceID?: string;
}
/**
 * DeleteUPgSQLInstance - 删除PG实例
 */
export interface DeleteUPgSQLInstanceRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * 实例ID
     */
    InstanceID: string;
}
/**
 * DeleteUPgSQLInstance - 删除PG实例
 */
export interface DeleteUPgSQLInstanceResponse {
}
/**
 * DeleteUPgSQLParamTemplate - 删除参数模板
 */
export interface DeleteUPgSQLParamTemplateRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * 模板ID
     */
    GroupID: number;
}
/**
 * DeleteUPgSQLParamTemplate - 删除参数模板
 */
export interface DeleteUPgSQLParamTemplateResponse {
}
/**
 * DownloadUPgSQLParamTemplate - 下载参数模板信息
 */
export interface DownloadUPgSQLParamTemplateRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * 参数模板id
     */
    GroupID: number;
}
/**
 * DownloadUPgSQLParamTemplate - 下载参数模板信息
 */
export interface DownloadUPgSQLParamTemplateResponse {
    /**
     * base64编码过的
     */
    Content: string;
}
/**
 * GetUPgSQLBackupStrategy - 获取备份策略
 */
export interface GetUPgSQLBackupStrategyRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * DB实例Id
     */
    InstanceID: string;
}
/**
 * GetUPgSQLBackupStrategy - 获取备份策略
 */
export interface GetUPgSQLBackupStrategyResponse {
    /**
     * 自动备份预计开始时间范围
     */
    BackupTimeRange: string;
    /**
     * 自动备份预期星期几(1~7)开始
     */
    BackupWeek: string;
    /**
     * 默认的备份方式
     */
    BackupMethod: string;
}
/**
 * GetUPgSQLBackupURL - 获取备份下载地址
 */
export interface GetUPgSQLBackupURLRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * DB实例Id
     */
    InstanceID: string;
    /**
     * 备份Id
     */
    BackupID: string;
}
/**
 * GetUPgSQLBackupURL - 获取备份下载地址
 */
export interface GetUPgSQLBackupURLResponse {
    /**
     * DB实例备份文件公网的地址
     */
    BackupPath: string;
    /**
     * DB实例备份文件内网的地址
     */
    InnerBackupPath: string;
}
/**
 * GetUPgSQLInstance - 获取PG云数据库实例描述
 */
export interface GetUPgSQLInstanceRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone?: string;
    /**
     * 资源ID
     */
    InstanceID: string;
}
/**
 * GetUPgSQLInstance - 获取PG云数据库实例描述
 */
export interface GetUPgSQLInstanceResponse {
    /**
     * DataSet
     */
    DataSet: {
        /**
         * DB实例所在可用区
         */
        Zone?: string;
        /**
         * 备份所在可用区
         */
        BackupZone?: string;
        /**
         * DB实例id
         */
        InstanceID?: string;
        /**
         * 实例名称
         */
        Name?: string;
        /**
         * DB 版本
         */
        DBVersion?: string;
        /**
         * DB实例使用的配置参数组id
         */
        ParamGroupID?: number;
        /**
         * 管理员帐户名，默认root
         */
        AdminUser?: string;
        /**
         * DBip
         */
        IP?: string;
        /**
         * DB port
         */
        Port?: number;
        /**
         * VPC的ID
         */
        VPCID?: string;
        /**
         * 子网ID
         */
        SubnetID?: string;
        /**
         * 备注
         */
        Remark?: string;
        /**
         * 备份文件保留的数量，默认7次
         */
        BackupCount?: number;
        /**
         * 备份开始时间，单位小时计，默认3点
         */
        BackupBeginTime?: number;
        /**
         * 备份的时间段，范围[0,23]
         */
        BackupTimeRange?: number;
        /**
         * 用于设置备份策略的备份日期标记位。共7位,每一位为一周中一天的备份情况 0表示关闭当天备份,1表示打开当天备份。最右边的一位 为星期天的备份开关，其余从右到左依次为星期一到星期 六的备份配置开关，每周必须至少设置两天备份。 例如：1100000 表示打开星期六和星期五的自动备份功能
         */
        BackupDate?: string;
        /**
         * DB状态标记 Init：初始化中，Fail：安装失败，Starting：启动中，Running：运行，Shutdown：关闭中，Shutoff：已关闭，Delete：已删除，Upgrading：升级中，Promoting：提升为独库进行中，Recovering：恢复中，Recover fail：恢复失败
         */
        State?: string;
        /**
         * DB实例创建时间，采用UTC计时时间戳
         */
        CreateTime?: number;
        /**
         * DB实例修改时间，采用UTC计时时间戳
         */
        ModifyTime?: number;
        /**
         * DB实例过期时间，采用UTC计时时间戳
         */
        ExpiredTime?: number;
        /**
         * CPU限制(核)，默认根据配置机型
         */
        Cpu?: number;
        /**
         * 内存限制(MB)，默认根据配置机型
         */
        MemoryLimit?: number;
        /**
         * 磁盘空间(GB), 默认根据配置机型
         */
        DiskSpace?: number;
        /**
         * DB实例磁盘已使用空间，单位GB
         */
        DiskUsedSize?: number;
        /**
         * DB实例数据文件大小，单位GB
         */
        DataFileSize?: number;
        /**
         * DB实例系统文件大小，单位GB
         */
        SystemFileSize?: number;
        /**
         * DB实例日志文件大小，单位GB
         */
        LogFileSize?: number;
        /**
         * Normal/HA,普通/高可用
         */
        InstanceMode?: string;
        /**
         * 配置机型名称
         */
        MachineType?: string;
        /**
         * 安全组版本
         */
        SecGroupStatus?: number;
    };
}
/**
 * GetUPgSQLInstanceLog - 可以查询DB的错误日志和满查询日志
 */
export interface GetUPgSQLInstanceLogRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * 日志类型
     */
    LogType: string;
    /**
     * 公司ID
     */
    CompanyID: number;
    /**
     * 账户ID
     */
    AccountID: number;
    /**
     * 起始时间，需使用时间戳
     */
    BeginTime: number;
    /**
     * 实例资源ID
     */
    InstanceID: string;
    /**
     * 结束时间，需使用时间戳，结束时间需大于起始时间实时查询的时候不需要传
     */
    EndTime?: number;
}
/**
 * GetUPgSQLInstanceLog - 可以查询DB的错误日志和满查询日志
 */
export interface GetUPgSQLInstanceLogResponse {
    /**
     * 返回的日志信息
     */
    Log: string;
}
/**
 * GetUPgSQLInstanceParam - 获取实例参数信息
 */
export interface GetUPgSQLInstanceParamRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * 实例ID
     */
    InstanceID: string;
}
/**
 * GetUPgSQLInstanceParam - 获取实例参数信息
 */
export interface GetUPgSQLInstanceParamResponse {
    /**
     * 参数的键值对信息
     */
    Data: {
        /**
         * 参数Key
         */
        Key?: string;
        /**
         * 参数值
         */
        Value?: string;
        /**
         * 值类型
         */
        ValueType?: number;
        /**
         * 允许的值
         */
        AllowedVal?: string;
        /**
         * 允许类型
         */
        ApplyType?: number;
        /**
         * 是否可以修改
         */
        Modifiable?: boolean;
        /**
         * 参数格式类型
         */
        FormatType?: number;
    }[];
}
/**
 * GetUPgSQLInstancePrice - 获取创建PG云数据库价格
 */
export interface GetUPgSQLInstancePriceRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * 机器配置类型 参考2C4G机器：o.pgsql2m.medium
     */
    MachineType: string;
    /**
     * 磁盘空间(GB)
     */
    DiskSpace: number;
    /**
     * UDB实例模式类型, 可选值如下: "Normal": 普通版UDB实例 "HA": 高可用版UDB实例
     */
    InstanceMode: string;
    /**
     * 计费模式。枚举值为： Year，按年付费； Month，按月付费； Dynamic，按小时付费（需开启权限）。默认为月付
     */
    ChargeType?: string;
    /**
     * 购买时长。默认: 1。按小时购买(Dynamic)时无需此参数。 月付时，此参数传0，代表了购买至月末。
     */
    Quantity?: number;
}
/**
 * GetUPgSQLInstancePrice - 获取创建PG云数据库价格
 */
export interface GetUPgSQLInstancePriceResponse {
    /**
     * 价格列表
     */
    PriceSet?: {
        /**
         * 计费类型，Year，Month，Dynamic。
         */
        ChargeType: string;
        /**
         * 实际价格，单位：元，保留小数点后两位有效数字。
         */
        Price: number;
        /**
         * 购买原价，单位：元。
         */
        OriginalPrice: number;
    }[];
}
/**
 * GetUPgSQLParamTemplate - 获取模板信息
 */
export interface GetUPgSQLParamTemplateRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * 模板ID
     */
    GroupID: number;
}
/**
 * GetUPgSQLParamTemplate - 获取模板信息
 */
export interface GetUPgSQLParamTemplateResponse {
    /**
     * 参数列表
     */
    Data?: {
        /**
         * 参数Key
         */
        Key?: string;
        /**
         * 参数值
         */
        Value?: string;
        /**
         * 值类型
         */
        ValueType?: number;
        /**
         * 允许的值
         */
        AllowedVal?: string;
        /**
         * 允许类型
         */
        ApplyType?: number;
        /**
         * 是否可以修改
         */
        Modifiable?: boolean;
        /**
         * 参数格式类型
         */
        FormatType?: number;
    }[];
}
/**
 * GetUPgSQLUpgradePrice -  获取 PG 云数据库升降级价格
 */
export interface GetUPgSQLUpgradePriceRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * 资源ID
     */
    InstanceID: string;
    /**
     * 磁盘空间(GB)
     */
    DiskSpace: number;
    /**
     * 机器配置类型
     */
    MachineType: string;
    /**
     * UDB实例模式类型, 可选值如下: "normal": 普通版UDB实例 "ha": 高可用版UDB实例 默认是"normal"
     */
    InstanceMode?: string;
}
/**
 * GetUPgSQLUpgradePrice -  获取 PG 云数据库升降级价格
 */
export interface GetUPgSQLUpgradePriceResponse {
    /**
     * 规格调整差价。精确到小数点后2位。
     */
    Price: number;
    /**
     * 限时优惠的折前原价
     */
    OriginalPrice: number;
}
/**
 * ListUPgSQLBackup - 获取备份列表
 */
export interface ListUPgSQLBackupRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * DB实例Id
     */
    InstanceID: string;
    /**
     * 备份类型,默认值是0(0:表示全部,1:自动备份,2:手动备份
     */
    BackupType?: number;
    /**
     * 列表起始位置偏移量，默认为0
     */
    Offset?: number;
    /**
     * 返回数据长度，默认为20，最大100
     */
    Limit?: number;
}
/**
 * ListUPgSQLBackup - 获取备份列表
 */
export interface ListUPgSQLBackupResponse {
    /**
     * 备份信息列表.修参数
     */
    DataSet: {
        /**
         * 备份所在地域
         */
        Region?: string;
        /**
         * DB实例Id
         */
        InstanceID: string;
        /**
         * 备份id
         */
        BackupID: string;
        /**
         * 备份名称
         */
        BackupName?: string;
        /**
         * 备份时间(Unix时间戳)
         */
        BackupStartTime?: number;
        /**
         * 备份文件大小(字节)
         */
        BackupSize?: number;
        /**
         * 备份类型，手动或者自动
         */
        BackupType?: number;
        /**
         * 备份状态 (Backuping：备份中,Success:备份成功, Failed:备份失败, Expired:备份过期)
         */
        State?: string;
        /**
         * 备份完成时间(Unix时间戳)
         */
        BackupEndTime?: number;
    }[];
    /**
     * 总个数
     */
    TotalCount: number;
}
/**
 * ListUPgSQLInstance - 获取PG云数据库列表
 */
export interface ListUPgSQLInstanceRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone?: string;
}
/**
 * ListUPgSQLInstance - 获取PG云数据库列表
 */
export interface ListUPgSQLInstanceResponse {
    /**
     * 数据库信息列表
     */
    DataSet: {
        /**
         * 可用区
         */
        Zone?: string;
        /**
         * 资源ID
         */
        InstanceID?: string;
        /**
         * 实例名称
         */
        Name?: string;
        /**
         * 实例的版本，包括postgresql-10.4,postgresql-13.4
         */
        DBVersion?: string;
        /**
         * normal/ha/readonly,普通/高可用/只读从库
         */
        InstanceMode?: string;
        /**
         * 实例状态标记 Initing：初始化中，InitFailed：安装失败，Starting：启动中， Running：运行，Stopping：关闭中，Stopped：已关闭,Deleted: 已删除，Upgrading: 升级中 ，Promoting：提升为主库进行中，Recovering：恢复中，RecoverFailed：恢复失败，StartFailed：启动失败，ShutdownFailed：关闭失败，Deleting：删除中，DeleteFailed：删除失败
         */
        State?: string;
        /**
         * 机器规格，格式为nCmG,n代表cpu核数，m代表内存大小(GB)
         */
        MachineType?: string;
        /**
         * VPC的ID
         */
        VPCID?: string;
        /**
         * 子网ID
         */
        SubnetID?: string;
        /**
         * DB实例创建时间，采用UTC计时时间戳
         */
        CreateTime?: number;
        /**
         * DB实例过期时间，采用UTC计时时间戳
         */
        ExpiredTime?: number;
        /**
         * DB实例ip
         */
        IP?: string;
        /**
         * 备注
         */
        Remark?: string;
        /**
         * 从库列表
         */
        DataSet?: {
            /**
             * 可用区
             */
            Zone?: string;
            /**
             * 资源ID
             */
            InstanceID?: string;
            /**
             * 实例名称
             */
            Name?: string;
            /**
             * 实例的版本，包括postgresql-10.4,postgresql-13.4
             */
            DBVersion?: string;
            /**
             * normal/ha/readonly,普通/高可用/只读从库
             */
            InstanceMode?: string;
            /**
             * 实例状态标记 Initing：初始化中，InitFailed：安装失败，Starting：启动中， Running：运行，Stopping：关闭中，Stopped：已关闭,Deleted: 已删除，Upgrading: 升级中 ，Promoting：提升为主库进行中，Recovering：恢复中，RecoverFailed：恢复失败，StartFailed：启动失败，ShutdownFailed：关闭失败，Deleting：删除中，DeleteFailed：删除失败
             */
            State?: string;
            /**
             * 机器规格，格式为nCmG,n代表cpu核数，m代表内存大小(GB)
             */
            MachineType?: string;
            /**
             * VPC的ID
             */
            VPCID?: string;
            /**
             * 子网ID
             */
            SubnetID?: string;
            /**
             * DB实例创建时间，采用UTC计时时间戳
             */
            CreateTime?: number;
            /**
             * DB实例过期时间，采用UTC计时时间戳
             */
            ExpiredTime?: number;
            /**
             * DB实例ip
             */
            IP?: string;
            /**
             * 备注
             */
            Remark?: string;
        }[];
    }[];
}
/**
 * ListUPgSQLLog - 获取数据库日志
 */
export interface ListUPgSQLLogRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * 查询的日志开始的时间戳
     */
    BeginTime: number;
    /**
     * 查询日志的结束时间戳
     */
    EndTime: number;
    /**
     * 资源ID
     */
    InstanceID: string;
}
/**
 * ListUPgSQLLog - 获取数据库日志
 */
export interface ListUPgSQLLogResponse {
    /**
     * 数据库日志信息列表
     */
    DataSet: {
        /**
         *
         */
        BeginTime?: number;
        /**
         *
         */
        EndTime?: number;
        /**
         *
         */
        Name?: string;
        /**
         *
         */
        Size?: number;
    }[];
}
/**
 * ListUPgSQLMachineType - 获取UPgSQL支持机器类型列表
 */
export interface ListUPgSQLMachineTypeRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
}
/**
 * ListUPgSQLMachineType - 获取UPgSQL支持机器类型列表
 */
export interface ListUPgSQLMachineTypeResponse {
    /**
     *
     */
    DataSet: {
        /**
         * 机器类型ID
         */
        ID?: string;
        /**
         * 格式为nCmG,n代表cpu核数，m代表内存大小(GB)
         */
        Description?: string;
        /**
         * cpu核数
         */
        Cpu?: number;
        /**
         * 内存用量(GB)
         */
        Memory?: number;
        /**
         * 机器类型，N/O
         */
        Os?: string;
    }[];
}
/**
 * ListUPgSQLParamTemplate - 获取可用参数模板列表
 */
export interface ListUPgSQLParamTemplateRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * 偏移量, 默认是0,100
     */
    Offset?: number;
    /**
     * 总数
     */
    Count?: number;
}
/**
 * ListUPgSQLParamTemplate - 获取可用参数模板列表
 */
export interface ListUPgSQLParamTemplateResponse {
    /**
     * 参数模板信息
     */
    Data: {
        /**
         * 参数模板ID
         */
        GroupID?: number;
        /**
         * 参数模板名称
         */
        GroupName?: string;
        /**
         * 应用的DB版本
         */
        DBVersion?: string;
        /**
         * 描述信息
         */
        Description?: string;
        /**
         * 是否可以修改
         */
        Modifiable?: boolean;
        /**
         * 模板组类型名称
         */
        ParamGroupTypeName?: string;
    }[];
}
/**
 * ListUPgSQLVersion - 获取UPgSQL支持版本列表
 */
export interface ListUPgSQLVersionRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
}
/**
 * ListUPgSQLVersion - 获取UPgSQL支持版本列表
 */
export interface ListUPgSQLVersionResponse {
    /**
     * postgresql版本信息
     */
    DataSet: {
        /**
         * PgSQL版本
         */
        DBVersion?: string;
        /**
         * 2位二进制控制是否开放单点和高可用，前一位控制单点是否开放，后一位控制高可用，例如"01"代表只开放高可用，"10"代表只开放单点，"11"代表全开放
         */
        Available?: string;
    }[];
}
/**
 * RestartUPgSQLInstance - 重启PG实例
 */
export interface RestartUPgSQLInstanceRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * 实例ID
     */
    InstanceID: string;
    /**
     * 是否一并重启主机
     */
    RestartHost?: boolean;
    /**
     * 是否强制重启
     */
    ForceToRestart?: boolean;
}
/**
 * RestartUPgSQLInstance - 重启PG实例
 */
export interface RestartUPgSQLInstanceResponse {
}
/**
 * StartUPgSQLInstance - 启动 PG实例
 */
export interface StartUPgSQLInstanceRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * 实例ID
     */
    InstanceID: string;
}
/**
 * StartUPgSQLInstance - 启动 PG实例
 */
export interface StartUPgSQLInstanceResponse {
}
/**
 * StopUPgSQLCreatingReadonly - 停止创建从库
 */
export interface StopUPgSQLCreatingReadonlyRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * 停止创建从库
     */
    InstanceID: string;
}
/**
 * StopUPgSQLCreatingReadonly - 停止创建从库
 */
export interface StopUPgSQLCreatingReadonlyResponse {
}
/**
 * StopUPgSQLInstance - 关闭PG实例
 */
export interface StopUPgSQLInstanceRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * 实例ID
     */
    InstanceID: string;
    /**
     * 是否将主机一并关闭
     */
    StopHost?: boolean;
    /**
     * 是否强制关闭
     */
    ForceToStop?: boolean;
}
/**
 * StopUPgSQLInstance - 关闭PG实例
 */
export interface StopUPgSQLInstanceResponse {
}
/**
 * UpdateUPgSQLAttribute - 更新数据库属性
 */
export interface UpdateUPgSQLAttributeRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * DB实例Id
     */
    InstanceID: string;
    /**
     * 新的db名字(不能为空字符串)
     */
    Name?: string;
    /**
     * 新的备注信息
     */
    Remark?: string;
}
/**
 * UpdateUPgSQLAttribute - 更新数据库属性
 */
export interface UpdateUPgSQLAttributeResponse {
}
/**
 * UpdateUPgSQLBackupStrategy - 修改备份策略
 */
export interface UpdateUPgSQLBackupStrategyRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * DB实例Id
     */
    InstanceID: string;
    /**
     * 自动备份预计开始时间范围(00:00~23:59)，例如:(3:00~4:00)
     */
    BackupTimeRange?: string;
    /**
     * 自动备份预期星期几(1~7)开始。默认1,2,3,4,5,6,7(星期一到星期日)
     */
    BackupWeek?: string;
    /**
     * 选择默认的备份方式
     */
    BackupMethod?: string;
}
/**
 * UpdateUPgSQLBackupStrategy - 修改备份策略
 */
export interface UpdateUPgSQLBackupStrategyResponse {
}
/**
 * UpdateUPgSQLPassword - 更新数据库用户密码
 */
export interface UpdateUPgSQLPasswordRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * DB实例Id
     */
    InstanceID: string;
    /**
     * 新的db用户密码
     */
    Password: string;
    /**
     * 数据库用户的名称。默认是root
     */
    Name?: string;
}
/**
 * UpdateUPgSQLPassword - 更新数据库用户密码
 */
export interface UpdateUPgSQLPasswordResponse {
}
/**
 * UpgradeUPgSQLInstance - 硬件规格升降级
 */
export interface UpgradeUPgSQLInstanceRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * 资源ID
     */
    InstanceID: string;
    /**
     * 磁盘空间(GB)
     */
    DiskSpace: number;
    /**
     * 机器配置类型
     */
    MachineType: string;
    /**
     * 数据库类型（ha:高可用类型，normal：普通类型，readonly：从库）
     */
    InstanceMode: string;
}
/**
 * UpgradeUPgSQLInstance - 硬件规格升降级
 */
export interface UpgradeUPgSQLInstanceResponse {
}
/**
 * UploadUPgSQLParamTemplate - 上传参数模板
 */
export interface UploadUPgSQLParamTemplateRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * 模板名称
     */
    GroupName: string;
    /**
     * 应用的DB版本
     */
    DBVersion: string;
    /**
     * base64编码过的
     */
    Content: string;
    /**
     * 模板描述
     */
    Description?: string;
    /**
     * 版本
     */
    ParamGroupType?: string;
}
/**
 * UploadUPgSQLParamTemplate - 上传参数模板
 */
export interface UploadUPgSQLParamTemplateResponse {
    /**
     * 生成的模板ID
     */
    GroupID: number;
}
