import Client from '../../core/client';
import Request from '../../core/request';
import { ConfigOptions } from '../../core/config';
import { CredentialOptions } from '../../core/credential';

/**
 * This client is used to call actions of **umongodb** service
 */
export default class UMongoDBClient extends Client {
  constructor({
    config,
    credential,
  }: {
    config: ConfigOptions;
    credential: CredentialOptions;
  }) {
    super({ config, credential });
  }

  /**
   * BackupUMongoDBCluster - 备份集群数据库
   *
   * See also: https://docs.ucloud.cn/api/umongodb-api/backup_umon_go_db_cluster
   */
  backupUMongoDBCluster(
    request?: BackupUMongoDBClusterRequest
  ): Promise<BackupUMongoDBClusterResponse> {
    const args = { Action: 'BackupUMongoDBCluster', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as BackupUMongoDBClusterResponse
    );
  }

  /**
   * BackupUMongoDBLog - 日志打包
   *
   * See also: https://docs.ucloud.cn/api/umongodb-api/backup_umon_go_db_log
   */
  backupUMongoDBLog(
    request?: BackupUMongoDBLogRequest
  ): Promise<BackupUMongoDBLogResponse> {
    const args = { Action: 'BackupUMongoDBLog', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as BackupUMongoDBLogResponse
    );
  }

  /**
   * CreateUMongoDBConfigTemplate - 创建配置模板
   *
   * See also: https://docs.ucloud.cn/api/umongodb-api/create_umon_go_db_config_template
   */
  createUMongoDBConfigTemplate(
    request?: CreateUMongoDBConfigTemplateRequest
  ): Promise<CreateUMongoDBConfigTemplateResponse> {
    const args = { Action: 'CreateUMongoDBConfigTemplate', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as CreateUMongoDBConfigTemplateResponse
    );
  }

  /**
   * CreateUMongoDBReplSet - 创建一个Mongodb副本集群
   *
   * See also: https://docs.ucloud.cn/api/umongodb-api/create_umon_go_db_repl_set
   */
  createUMongoDBReplSet(
    request?: CreateUMongoDBReplSetRequest
  ): Promise<CreateUMongoDBReplSetResponse> {
    const args = { Action: 'CreateUMongoDBReplSet', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as CreateUMongoDBReplSetResponse
    );
  }

  /**
   * CreateUMongoDBShardedCluster - 创建一个Mongodb分片集群
   *
   * See also: https://docs.ucloud.cn/api/umongodb-api/create_umon_go_db_sharded_cluster
   */
  createUMongoDBShardedCluster(
    request?: CreateUMongoDBShardedClusterRequest
  ): Promise<CreateUMongoDBShardedClusterResponse> {
    const args = { Action: 'CreateUMongoDBShardedCluster', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as CreateUMongoDBShardedClusterResponse
    );
  }

  /**
   * DescribeUMongoDBBackupURL - 获取实例备份下载链接
   *
   * See also: https://docs.ucloud.cn/api/umongodb-api/describe_umon_go_db_backup_url
   */
  describeUMongoDBBackupURL(
    request?: DescribeUMongoDBBackupURLRequest
  ): Promise<DescribeUMongoDBBackupURLResponse> {
    const args = { Action: 'DescribeUMongoDBBackupURL', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DescribeUMongoDBBackupURLResponse
    );
  }

  /**
   * DescribeUMongoDBInstance - 描述MongoDB实例
   *
   * See also: https://docs.ucloud.cn/api/umongodb-api/describe_umon_go_db_instance
   */
  describeUMongoDBInstance(
    request?: DescribeUMongoDBInstanceRequest
  ): Promise<DescribeUMongoDBInstanceResponse> {
    const args = { Action: 'DescribeUMongoDBInstance', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DescribeUMongoDBInstanceResponse
    );
  }

  /**
   * GetUMongoDBBackupParam - 获取实例备份策略
   *
   * See also: https://docs.ucloud.cn/api/umongodb-api/get_umon_go_db_backup_param
   */
  getUMongoDBBackupParam(
    request?: GetUMongoDBBackupParamRequest
  ): Promise<GetUMongoDBBackupParamResponse> {
    const args = { Action: 'GetUMongoDBBackupParam', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as GetUMongoDBBackupParamResponse
    );
  }

  /**
   * GetUMongoDBCfgTempItem - 获取配置模板内容
   *
   * See also: https://docs.ucloud.cn/api/umongodb-api/get_umon_go_db_cfg_temp_item
   */
  getUMongoDBCfgTempItem(
    request?: GetUMongoDBCfgTempItemRequest
  ): Promise<GetUMongoDBCfgTempItemResponse> {
    const args = { Action: 'GetUMongoDBCfgTempItem', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as GetUMongoDBCfgTempItemResponse
    );
  }

  /**
   * GetUMongoDBLog - 查询某一段时间内集群节点的错误日志或慢查询日志
   *
   * See also: https://docs.ucloud.cn/api/umongodb-api/get_umon_go_db_log
   */
  getUMongoDBLog(
    request?: GetUMongoDBLogRequest
  ): Promise<GetUMongoDBLogResponse> {
    const args = { Action: 'GetUMongoDBLog', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as GetUMongoDBLogResponse
    );
  }

  /**
   * GetUMongoDBRecoverTimeRange - 获取UMongoDB可回档时间范围
   *
   * See also: https://docs.ucloud.cn/api/umongodb-api/get_umon_go_db_recover_time_range
   */
  getUMongoDBRecoverTimeRange(
    request?: GetUMongoDBRecoverTimeRangeRequest
  ): Promise<GetUMongoDBRecoverTimeRangeResponse> {
    const args = { Action: 'GetUMongoDBRecoverTimeRange', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as GetUMongoDBRecoverTimeRangeResponse
    );
  }

  /**
   * ListUMongoDBBackup - 拉取实例备份列表
   *
   * See also: https://docs.ucloud.cn/api/umongodb-api/list_umon_go_db_backup
   */
  listUMongoDBBackup(
    request?: ListUMongoDBBackupRequest
  ): Promise<ListUMongoDBBackupResponse> {
    const args = { Action: 'ListUMongoDBBackup', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as ListUMongoDBBackupResponse
    );
  }

  /**
   * ListUMongoDBConfigTemplate - 拉取配置模板
   *
   * See also: https://docs.ucloud.cn/api/umongodb-api/list_umon_go_db_config_template
   */
  listUMongoDBConfigTemplate(
    request?: ListUMongoDBConfigTemplateRequest
  ): Promise<ListUMongoDBConfigTemplateResponse> {
    const args = { Action: 'ListUMongoDBConfigTemplate', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as ListUMongoDBConfigTemplateResponse
    );
  }

  /**
   * ListUMongoDBInstances - 获取副本集/分片集群列表
   *
   * See also: https://docs.ucloud.cn/api/umongodb-api/list_umon_go_db_instances
   */
  listUMongoDBInstances(
    request?: ListUMongoDBInstancesRequest
  ): Promise<ListUMongoDBInstancesResponse> {
    const args = { Action: 'ListUMongoDBInstances', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as ListUMongoDBInstancesResponse
    );
  }

  /**
   * ListUMongoDBLogPackage - 日志打包列表
   *
   * See also: https://docs.ucloud.cn/api/umongodb-api/list_umon_go_db_log_package
   */
  listUMongoDBLogPackage(
    request?: ListUMongoDBLogPackageRequest
  ): Promise<ListUMongoDBLogPackageResponse> {
    const args = { Action: 'ListUMongoDBLogPackage', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as ListUMongoDBLogPackageResponse
    );
  }

  /**
   * ListUMongoDBMachineSpec - 获取UMongoDB支持机器类型列表
   *
   * See also: https://docs.ucloud.cn/api/umongodb-api/list_umon_go_db_machine_spec
   */
  listUMongoDBMachineSpec(
    request?: ListUMongoDBMachineSpecRequest
  ): Promise<ListUMongoDBMachineSpecResponse> {
    const args = { Action: 'ListUMongoDBMachineSpec', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as ListUMongoDBMachineSpecResponse
    );
  }

  /**
   * ListUMongoDBMachineType - 获取UmongDB支持机器类型列表
   *
   * See also: https://docs.ucloud.cn/api/umongodb-api/list_umon_go_db_machine_type
   */
  listUMongoDBMachineType(
    request?: ListUMongoDBMachineTypeRequest
  ): Promise<ListUMongoDBMachineTypeResponse> {
    const args = { Action: 'ListUMongoDBMachineType', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as ListUMongoDBMachineTypeResponse
    );
  }

  /**
   * ListUMongoDBVersion - 获取UMongoDB支持版本列表
   *
   * See also: https://docs.ucloud.cn/api/umongodb-api/list_umon_go_db_version
   */
  listUMongoDBVersion(
    request?: ListUMongoDBVersionRequest
  ): Promise<ListUMongoDBVersionResponse> {
    const args = { Action: 'ListUMongoDBVersion', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as ListUMongoDBVersionResponse
    );
  }

  /**
   * ModifyUMongoDBAdminPassword - 修改MongoDB集群root密码
   *
   * See also: https://docs.ucloud.cn/api/umongodb-api/modify_umon_go_db_admin_password
   */
  modifyUMongoDBAdminPassword(
    request?: ModifyUMongoDBAdminPasswordRequest
  ): Promise<ModifyUMongoDBAdminPasswordResponse> {
    const args = { Action: 'ModifyUMongoDBAdminPassword', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as ModifyUMongoDBAdminPasswordResponse
    );
  }

  /**
   * ModifyUMongoDBAttribute - 修改MongoDB集群名称
   *
   * See also: https://docs.ucloud.cn/api/umongodb-api/modify_umon_go_db_attribute
   */
  modifyUMongoDBAttribute(
    request?: ModifyUMongoDBAttributeRequest
  ): Promise<ModifyUMongoDBAttributeResponse> {
    const args = { Action: 'ModifyUMongoDBAttribute', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as ModifyUMongoDBAttributeResponse
    );
  }

  /**
   * ModifyUMongoDBBackupParam - 修改实例备份策略
   *
   * See also: https://docs.ucloud.cn/api/umongodb-api/modify_umon_go_db_backup_param
   */
  modifyUMongoDBBackupParam(
    request?: ModifyUMongoDBBackupParamRequest
  ): Promise<ModifyUMongoDBBackupParamResponse> {
    const args = { Action: 'ModifyUMongoDBBackupParam', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as ModifyUMongoDBBackupParamResponse
    );
  }

  /**
   * ResizeUMongoDBInstance - 集群配置升降级
   *
   * See also: https://docs.ucloud.cn/api/umongodb-api/resize_umon_go_db_instance
   */
  resizeUMongoDBInstance(
    request?: ResizeUMongoDBInstanceRequest
  ): Promise<ResizeUMongoDBInstanceResponse> {
    const args = { Action: 'ResizeUMongoDBInstance', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as ResizeUMongoDBInstanceResponse
    );
  }

  /**
   * RestartUMongoDBCluster - 重启集群
   *
   * See also: https://docs.ucloud.cn/api/umongodb-api/restart_umon_go_db_cluster
   */
  restartUMongoDBCluster(
    request?: RestartUMongoDBClusterRequest
  ): Promise<RestartUMongoDBClusterResponse> {
    const args = { Action: 'RestartUMongoDBCluster', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as RestartUMongoDBClusterResponse
    );
  }

  /**
   * StartUMongoDBCluster - 启动集群
   *
   * See also: https://docs.ucloud.cn/api/umongodb-api/start_umon_go_db_cluster
   */
  startUMongoDBCluster(
    request?: StartUMongoDBClusterRequest
  ): Promise<StartUMongoDBClusterResponse> {
    const args = { Action: 'StartUMongoDBCluster', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as StartUMongoDBClusterResponse
    );
  }

  /**
   * StopUMongoDBCluster - 停止集群
   *
   * See also: https://docs.ucloud.cn/api/umongodb-api/stop_umon_go_db_cluster
   */
  stopUMongoDBCluster(
    request?: StopUMongoDBClusterRequest
  ): Promise<StopUMongoDBClusterResponse> {
    const args = { Action: 'StopUMongoDBCluster', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as StopUMongoDBClusterResponse
    );
  }
}

/**
 * BackupUMongoDBCluster - 备份集群数据库
 */
export interface BackupUMongoDBClusterRequest {
  /**
   * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
   */
  Zone: string;
  /**
   * 实例ID
   */
  ClusterId: string;
  /**
   * 备份名称
   */
  BackupName: string;
}

/**
 * BackupUMongoDBCluster - 备份集群数据库
 */
export interface BackupUMongoDBClusterResponse {
  /**
   * 备份ID
   */
  BackupId: string;
  /**
   * 实例ID
   */
  ClusterId: string;
}

/**
 * BackupUMongoDBLog - 日志打包
 */
export interface BackupUMongoDBLogRequest {
  /**
   * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
   */
  Zone: string;
  /**
   * 日志包名称
   */
  Name: string;
  /**
   * 集群id
   */
  ClusterId: string;
  /**
   * 节点id, 慢日志 mongos 节点不可选
   */
  NodeId: string;
  /**
   * 日志开始时间,最早为7x24小时前
   */
  Begin: number;
  /**
   * 日志结束时间,时间区间不能超过24小时
   */
  End: number;
  /**
   * 日志类型:SlowLog,ErrorLog
   */
  LogType: string;
}

/**
 * BackupUMongoDBLog - 日志打包
 */
export interface BackupUMongoDBLogResponse {}

/**
 * CreateUMongoDBConfigTemplate - 创建配置模板
 */
export interface CreateUMongoDBConfigTemplateRequest {
  /**
   * 模板名称
   */
  TemplateName: string;
  /**
   * 集群类型
   */
  ClusterType: string;
  /**
   * mongo版本
   */
  MongodbVersion: string;
  /**
   * 基础模板
   */
  BaseTemplateId: string;
  /**
   * 模板描述
   */
  Description?: string;
}

/**
 * CreateUMongoDBConfigTemplate - 创建配置模板
 */
export interface CreateUMongoDBConfigTemplateResponse {
  /**
   * 模板Id
   */
  TemplateId: string;
}

/**
 * CreateUMongoDBReplSet - 创建一个Mongodb副本集群
 */
export interface CreateUMongoDBReplSetRequest {
  /**
   * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
   */
  Zone: string;
  /**
   * 副本集实例名称，至少6位
   */
  Name: string;
  /**
   * 副本集的Mongodb的版本，例如MongoDB 3.6, MongoDB 4.2
   */
  DBVersion: string;
  /**
   * 管理员密码
   */
  AdminPassword: string;
  /**
   * 磁盘空间 (GB)：取值范围 20~32000，仅支持 10 的整数倍
   */
  DiskSpace: number;
  /**
   * 机型配置,如 o.mongo2m.medium
   */
  MachineTypeId: string;
  /**
   * 副本集节点数量：仅支持 3、5、7 奇数节点
   */
  NodeCount: number;
  /**
   * mongo服务端口
   */
  ListenPort?: number;
  /**
   * 子网ID
   */
  SubnetId?: string;
  /**
   * VPC的ID
   */
  VPCId?: string;
  /**
   * 实例所在的业务组名称
   */
  Tag?: string;
  /**
   * 付费方式：Year， Month， Dynamic，Trial，默认: Month
   */
  ChargeType?: string;
  /**
   * 购买时长，默认值1
   */
  Quantity?: number;
  /**
   * 跨可用区列表
   */
  CrossZones?: string[];
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
     * 安全组 ID。至多可以同时绑定5个安全组。
     */
    Id?: string;
    /**
     * 安全组优先级。取值范围[1, 5]
     */
    Priority?: number;
  }[];
}

/**
 * CreateUMongoDBReplSet - 创建一个Mongodb副本集群
 */
export interface CreateUMongoDBReplSetResponse {}

/**
 * CreateUMongoDBShardedCluster - 创建一个Mongodb分片集群
 */
export interface CreateUMongoDBShardedClusterRequest {
  /**
   * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
   */
  Zone: string;
  /**
   * 副本集实例名称，至少6位
   */
  Name: string;
  /**
   * 副本集的Mongodb的版本，例如MongoDB 3.6, MongoDB 4.2
   */
  DBVersion: string;
  /**
   * 管理员密码
   */
  AdminPassword: string;
  /**
   * Mongos节点数量
   */
  MongosNodeCount: number;
  /**
   * 分片数量
   */
  ShardCount: number;
  /**
   * 每个分片中节点数量
   */
  NodeCount: number;
  /**
   * 数据节点磁盘空间(GB):取值范围 20~32000，仅支持 10 的整数倍
   */
  DiskSpace: number;
  /**
   * 数据节点机型配置,如 o.mongo2m.medium
   */
  MachineTypeId: string;
  /**
   * 子网ID
   */
  SubnetId?: string;
  /**
   * VPC的ID
   */
  VPCId?: string;
  /**
   * 实例所在的业务组名称
   */
  Tag?: string;
  /**
   * 付费方式：Year， Month， Dynamic，Trial，默认: Month
   */
  ChargeType?: string;
  /**
   * 购买时长，默认值1
   */
  Quantity?: number;
  /**
   * mongo服务端口
   */
  ListenPort?: number;
  /**
   * 参数配置模版id
   */
  TemplateId?: string;
  /**
   * Mongos节点机型配置
   */
  MongosMachineTypeId?: string;
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
     * 安全组 ID。至多可以同时绑定5个安全组。
     */
    Id?: string;
    /**
     * 安全组优先级。取值范围[1, 5]
     */
    Priority?: number;
  }[];
}

/**
 * CreateUMongoDBShardedCluster - 创建一个Mongodb分片集群
 */
export interface CreateUMongoDBShardedClusterResponse {}

/**
 * DescribeUMongoDBBackupURL - 获取实例备份下载链接
 */
export interface DescribeUMongoDBBackupURLRequest {
  /**
   * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
   */
  Zone?: string;
  /**
   * 集群ID
   */
  ClusterId: string;
  /**
   * 文件备份ID
   */
  BackupId?: string;
  /**
   * 打包ID
   */
  PackageId?: number;
  /**
   * 备份链接过期时间（单位秒）
   */
  ValidTime?: number;
  /**
   * 类型:如 oplog
   */
  Category?: string;
}

/**
 * DescribeUMongoDBBackupURL - 获取实例备份下载链接
 */
export interface DescribeUMongoDBBackupURLResponse {
  /**
   * 备份文件公网地址
   */
  InternetAddress: string;
  /**
   * 备份文件内网地址
   */
  IntranetAddress: string;
}

/**
 * DescribeUMongoDBInstance - 描述MongoDB实例
 */
export interface DescribeUMongoDBInstanceRequest {
  /**
   * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
   */
  Zone?: string;
  /**
   * 实例资源ID
   */
  ClusterId: string;
  /**
   * 集群类型，ReplicaSet：副本集，SharedCluster：分片集群
   */
  ClusterType?: string;
}

/**
 * DescribeUMongoDBInstance - 描述MongoDB实例
 */
export interface DescribeUMongoDBInstanceResponse {
  /**
   * 副本集信息
   */
  ClusterInfo?: {
    /**
     * 可用区
     */
    Zone?: string;
    /**
     *
     */
    ZoneId?: number;
    /**
     * 集群类型，ReplicaSet :副本集，SharedCluster：分片集
     */
    ClusterType?: string;
    /**
     * 集群ID
     */
    ClusterId?: string;
    /**
     * 实例名称
     */
    InstanceName?: string;
    /**
     * 副本集/分片集群状态标记 Initing：初始化中，InitFailed：安装失败，Starting：启动中，StartFailed：启动失败，Running：运行，Stopping：关闭中，Stopped：已关闭, StopFailed：关闭失败，Deleting：删除中，Deleted：已删除，DeleteFailed：删除失败，Restarting：重启中，RestartFailed：重启失败,Upgrading: 升降级中，UpgradeFailed: 升降级失败,Switching:主备切换中，UpdatingSSL：修改SSL中，UpdateSSLFail：修改SSL失败
     */
    State?: string;
    /**
     * 副本集的Mongodb的版本
     */
    DBVersion?: string;
    /**
     * 磁盘空间(GB), 默认根据配置机型
     */
    DiskSpace?: number;
    /**
     * 计算规格
     */
    MachineTypeId?: string;
    /**
     * DB实例创建时间
     */
    CreateTime?: number;
    /**
     * ConfigSrv信息
     */
    ConfigReplicaInfo?: {
      /**
       * 副本集ID
       */
      ReplicaId?: string;
      /**
       * 集群ID
       */
      ClusterId?: string;
      /**
       * 副本类型,ConfigRepl或者DataRepl
       */
      ReplicaType?: string;
      /**
       * 副本集/分片集群状态标记 Initing：初始化中，InitFailed：安装失败，Starting：启动中，StartFailed：启动失败，Running：运行，Stopping：关闭中，Stopped：已关闭, StopFailed：关闭失败，Deleting：删除中，Deleted：已删除，DeleteFailed：删除失败，Restarting：重启中，RestartFailed：重启失败。
       */
      State?: string;
      /**
       * 机器类型
       */
      MachineType?: string;
      /**
       * 机器类型Id
       */
      MachineTypeId?: string;
      /**
       * 隔离组ID
       */
      IsolationGroupId?: string;
      /**
       * 副本集下的节点信息
       */
      NodeInfos?: {
        /**
         * 可用区
         */
        Zone?: string;
        /**
         * 可用区ID
         */
        ZoneId?: number;
        /**
         * 节点ID
         */
        NodeId?: string;
        /**
         * 节点角色，Primary/Secondary/Arbiter/Startup等等
         */
        NodeRole?: string;
        /**
         * 节点类型
         */
        NodeType?: string;
        /**
         * 副本集/分片集群状态标记 Initing：初始化中，InitFailed：安装失败，Starting：启动中，StartFailed：启动失败，Running：运行，Stopping：关闭中，Stopped：已关闭, StopFailed：关闭失败，Deleting：删除中，Deleted：已删除，DeleteFailed：删除失败，Restarting：重启中，RestartFailed：重启失败。
         */
        State?: string;
        /**
         * 副本集的Mongodb的版本
         */
        DBVersion?: string;
        /**
         * 节点所属副本集ID
         */
        ClusterId?: string;
        /**
         * 虚拟节点ID
         */
        VirtualClusterId?: string;
        /**
         * 机型信息
         */
        MachineType?: string;
        /**
         * 机型信息ID
         */
        MachineTypeId?: string;
        /**
         * DB实例创建时间
         */
        CreateTime?: number;
        /**
         * 数据盘信息
         */
        DataDisk?: {
          /**
           * 磁盘id
           */
          DiskId?: string;
          /**
           * 磁盘容量单位GB
           */
          DiskSize?: number;
        };
        /**
         * 系统盘信息
         */
        SysDisk?: {
          /**
           * 磁盘id
           */
          DiskId?: string;
          /**
           * 磁盘容量单位GB
           */
          DiskSize?: number;
        };
      }[];
      /**
       * 副本集下的节点数量
       */
      NodeCount?: number;
      /**
       * 副本集创建时间
       */
      CreateTime?: number;
      /**
       * 副本集删除时间
       */
      DeleteTime?: number;
      /**
       * 副本集修改时间
       */
      ModifyTime?: number;
    };
    /**
     * 数据副本信息
     */
    DataReplicaInfos?: {
      /**
       * 副本集ID
       */
      ReplicaId?: string;
      /**
       * 集群ID
       */
      ClusterId?: string;
      /**
       * 副本类型,ConfigRepl或者DataRepl
       */
      ReplicaType?: string;
      /**
       * 副本集/分片集群状态标记 Initing：初始化中，InitFailed：安装失败，Starting：启动中，StartFailed：启动失败，Running：运行，Stopping：关闭中，Stopped：已关闭, StopFailed：关闭失败，Deleting：删除中，Deleted：已删除，DeleteFailed：删除失败，Restarting：重启中，RestartFailed：重启失败。
       */
      State?: string;
      /**
       * 机器类型
       */
      MachineType?: string;
      /**
       * 机器类型Id
       */
      MachineTypeId?: string;
      /**
       * 隔离组ID
       */
      IsolationGroupId?: string;
      /**
       * 副本集下的节点信息
       */
      NodeInfos?: {
        /**
         * 可用区
         */
        Zone?: string;
        /**
         * 可用区ID
         */
        ZoneId?: number;
        /**
         * 节点ID
         */
        NodeId?: string;
        /**
         * 节点角色，Primary/Secondary/Arbiter/Startup等等
         */
        NodeRole?: string;
        /**
         * 节点类型
         */
        NodeType?: string;
        /**
         * 副本集/分片集群状态标记 Initing：初始化中，InitFailed：安装失败，Starting：启动中，StartFailed：启动失败，Running：运行，Stopping：关闭中，Stopped：已关闭, StopFailed：关闭失败，Deleting：删除中，Deleted：已删除，DeleteFailed：删除失败，Restarting：重启中，RestartFailed：重启失败。
         */
        State?: string;
        /**
         * 副本集的Mongodb的版本
         */
        DBVersion?: string;
        /**
         * 节点所属副本集ID
         */
        ClusterId?: string;
        /**
         * 虚拟节点ID
         */
        VirtualClusterId?: string;
        /**
         * 机型信息
         */
        MachineType?: string;
        /**
         * 机型信息ID
         */
        MachineTypeId?: string;
        /**
         * DB实例创建时间
         */
        CreateTime?: number;
        /**
         * 数据盘信息
         */
        DataDisk?: {
          /**
           * 磁盘id
           */
          DiskId?: string;
          /**
           * 磁盘容量单位GB
           */
          DiskSize?: number;
        };
        /**
         * 系统盘信息
         */
        SysDisk?: {
          /**
           * 磁盘id
           */
          DiskId?: string;
          /**
           * 磁盘容量单位GB
           */
          DiskSize?: number;
        };
      }[];
      /**
       * 副本集下的节点数量
       */
      NodeCount?: number;
      /**
       * 副本集创建时间
       */
      CreateTime?: number;
      /**
       * 副本集删除时间
       */
      DeleteTime?: number;
      /**
       * 副本集修改时间
       */
      ModifyTime?: number;
    }[];
    /**
     * Mongos节点信息
     */
    MongosInfo?: {
      /**
       * 可用区
       */
      Zone?: string;
      /**
       * 可用区ID
       */
      ZoneId?: number;
      /**
       * 节点ID
       */
      NodeId?: string;
      /**
       * 节点角色，Primary/Secondary/Arbiter/Startup等等
       */
      NodeRole?: string;
      /**
       * 节点类型
       */
      NodeType?: string;
      /**
       * 副本集/分片集群状态标记 Initing：初始化中，InitFailed：安装失败，Starting：启动中，StartFailed：启动失败，Running：运行，Stopping：关闭中，Stopped：已关闭, StopFailed：关闭失败，Deleting：删除中，Deleted：已删除，DeleteFailed：删除失败，Restarting：重启中，RestartFailed：重启失败。
       */
      State?: string;
      /**
       * 副本集的Mongodb的版本
       */
      DBVersion?: string;
      /**
       * 节点所属副本集ID
       */
      ClusterId?: string;
      /**
       * 虚拟节点ID
       */
      VirtualClusterId?: string;
      /**
       * 机型信息
       */
      MachineType?: string;
      /**
       * 机型信息ID
       */
      MachineTypeId?: string;
      /**
       * DB实例创建时间
       */
      CreateTime?: number;
      /**
       * 数据盘信息
       */
      DataDisk?: {
        /**
         * 磁盘id
         */
        DiskId?: string;
        /**
         * 磁盘容量单位GB
         */
        DiskSize?: number;
      };
      /**
       * 系统盘信息
       */
      SysDisk?: {
        /**
         * 磁盘id
         */
        DiskId?: string;
        /**
         * 磁盘容量单位GB
         */
        DiskSize?: number;
      };
    }[];
    /**
     * 副本集的访问地址
     */
    ConnectURL?: string;
    /**
     * DB实例删除时间
     */
    DeleteTime?: number;
    /**
     * 子网ID
     */
    SubnetId?: string;
    /**
     * VPC的ID
     */
    VPCId?: string;
    /**
     * 分片数量，分片集有效
     */
    ShardCount?: number;
    /**
     * 每分片节点数量，分片集有效
     */
    ShardNodeCount?: number;
    /**
     * Mongos节点数量，分片集有效
     */
    MongosCount?: number;
    /**
     * Config配置集群节点数量，分片集有效
     */
    ConfigNodeCount?: number;
    /**
     * Config配置集群节点配置，分片集有效
     */
    ConfigMachineType?: string;
    /**
     * 实例业务组
     */
    Tag?: string;
    /**
     * 数据节点计算规格
     */
    DataComputeType?: {
      /**
       * 机器类型ID o.mongo2m.medium，o.mongo2m.xlarge
       */
      MachineTypeId: string;
      /**
       * 配置简称  2C4G
       */
      Description: string;
      /**
       * cpu核数
       */
      Cpu: number;
      /**
       * 内存用量(GB)
       */
      Memory: number;
      /**
       * 机器类型，N/O
       */
      UHhostMachineType?: string;
      /**
       * 配置分组，2m , 4m
       */
      Group?: string;
    };
    /**
     * 配置节点计算规格
     */
    ConfigComputeType?: {
      /**
       * 机器类型ID o.mongo2m.medium，o.mongo2m.xlarge
       */
      MachineTypeId: string;
      /**
       * 配置简称  2C4G
       */
      Description: string;
      /**
       * cpu核数
       */
      Cpu: number;
      /**
       * 内存用量(GB)
       */
      Memory: number;
      /**
       * 机器类型，N/O
       */
      UHhostMachineType?: string;
      /**
       * 配置分组，2m , 4m
       */
      Group?: string;
    };
    /**
     * 路由节点计算规格
     */
    MongosComputeType?: {
      /**
       * 机器类型ID o.mongo2m.medium，o.mongo2m.xlarge
       */
      MachineTypeId: string;
      /**
       * 配置简称  2C4G
       */
      Description: string;
      /**
       * cpu核数
       */
      Cpu: number;
      /**
       * 内存用量(GB)
       */
      Memory: number;
      /**
       * 机器类型，N/O
       */
      UHhostMachineType?: string;
      /**
       * 配置分组，2m , 4m
       */
      Group?: string;
    };
    /**
     * 跨用区列表
     */
    CrossZones?: string[];
    /**
     * 是否开启了SSL；1->未开启 2->开启
     */
    EnableSSL?: number;
    /**
     * SSL到期时间
     */
    SSLExpirationTime?: number;
  };
}

/**
 * GetUMongoDBBackupParam - 获取实例备份策略
 */
export interface GetUMongoDBBackupParamRequest {
  /**
   * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
   */
  Zone: string;
  /**
   * 实例ID
   */
  ClusterId: string;
}

/**
 * GetUMongoDBBackupParam - 获取实例备份策略
 */
export interface GetUMongoDBBackupParamResponse {
  /**
   * 备份策略信息
   */
  DataSet: {
    /**
     * 实例ID
     */
    ClusterId: string;
    /**
     * 自动备份预期周几 (1-7 表示 周一到周末，多个数据用','分割，eg: 3,7)
     */
    AutoBackupToggleWeek?: string;
    /**
     * 自动备份预期时间范围 (24小时制，精确到分钟，00:00~23:59)
     */
    AutoBackupToggleTime?: string;
    /**
     * 自动备份保存份数
     */
    AutoBackupCopies?: number;
    /**
     * 手动备份保存份数
     */
    ManualBackupCopies?: number;
    /**
     * 是否禁用(false:未禁用;true:禁用)
     */
    Disabled?: boolean;
  };
}

/**
 * GetUMongoDBCfgTempItem - 获取配置模板内容
 */
export interface GetUMongoDBCfgTempItemRequest {
  /**
   * 配置模板Id
   */
  TemplateId: string;
}

/**
 * GetUMongoDBCfgTempItem - 获取配置模板内容
 */
export interface GetUMongoDBCfgTempItemResponse {
  /**
   * 配置模板项
   */
  DataSet: {
    /**
     * itemId
     */
    ItemId?: string;
    /**
     * 模板ID
     */
    TemplateId?: string;
    /**
     * 配置名称
     */
    ConfigName?: string;
    /**
     * 配置值
     */
    ConfigValue?: string;
    /**
     * 创建时间
     */
    CreateTime?: number;
    /**
     * 修改时间
     */
    ModifyTime?: number;
    /**
     * 配置选项
     */
    ConfigOption?: {
      /**
       * mongo版本
       */
      MongodbVersion?: string;
      /**
       * 配置选项名
       */
      OptionName?: string;
      /**
       * 配置选项类型 string,int,bool
       */
      OptionValueType?: string;
      /**
       * 配置选项值范围
       */
      OptionValues?: string;
      /**
       * 默认值
       */
      OptionDefaultValue?: string;
      /**
       * 是否为默认选项
       */
      IsDefaultOption?: boolean;
      /**
       * 是否可修改
       */
      EnableModify?: boolean;
      /**
       * 是否前端展示
       */
      EnableDisplay?: boolean;
      /**
       * 是否需重启
       */
      ForceRestart?: boolean;
      /**
       * 选项值格式
       */
      OptionFormatType?: string;
      /**
       * 允许应用类型
       */
      AllowedApplyType?: string;
      /**
       * 描述
       */
      Description?: string;
    };
    /**
     * 节点类型: DataNode:数据节点 | ConfigSrvNode:配置节点 | MongosNode:路由节点
     */
    NodeType?: string;
  }[];
}

/**
 * GetUMongoDBLog - 查询某一段时间内集群节点的错误日志或慢查询日志
 */
export interface GetUMongoDBLogRequest {
  /**
   * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
   */
  Zone?: string;
  /**
   * 集群id
   */
  ClusterId: string;
  /**
   * 节点id, 慢日志 mongos 节点不可选
   */
  NodeId: string;
  /**
   * 查询的日志开始的时间戳（Unix Timestamp）。对于实时查询，这个参数应该是上次轮询请求时的时间戳，后台会返回从该值到当前时间的日志内容
   */
  Begin: number;
  /**
   * 日志类型:SlowLog,ErrorLog
   */
  LogType: string;
  /**
   * 查询日志的结束时间戳(Unix Timestamp），对于实时查询不传该值，与BeginTime的差值不超过24小时：(EndTime-BeginTime) < 24*60*60
   */
  End?: number;
}

/**
 * GetUMongoDBLog - 查询某一段时间内集群节点的错误日志或慢查询日志
 */
export interface GetUMongoDBLogResponse {
  /**
   * 查询到的日志内容，一段纯文本
   */
  Log: string;
  /**
   * 支持的最大行数
   */
  MaxLine?: number;
  /**
   * 是否已被截断
   */
  IsTruncate?: boolean;
}

/**
 * GetUMongoDBRecoverTimeRange - 获取UMongoDB可回档时间范围
 */
export interface GetUMongoDBRecoverTimeRangeRequest {
  /**
   * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
   */
  Zone: string;
  /**
   * 集群id
   */
  ClusterId: string;
}

/**
 * GetUMongoDBRecoverTimeRange - 获取UMongoDB可回档时间范围
 */
export interface GetUMongoDBRecoverTimeRangeResponse {
  /**
   * 最早可回档时间点
   */
  EarliestTime: number;
  /**
   * 最晚可回档时间点
   */
  LatestTime: number;
}

/**
 * ListUMongoDBBackup - 拉取实例备份列表
 */
export interface ListUMongoDBBackupRequest {
  /**
   * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
   */
  Zone: string;
  /**
   * 实例ID
   */
  ClusterId: string;
}

/**
 * ListUMongoDBBackup - 拉取实例备份列表
 */
export interface ListUMongoDBBackupResponse {
  /**
   * 备份列表
   */
  DataSet: {
    /**
     * 可用区
     */
    Zone?: string;
    /**
     * 备份ID
     */
    BackupId: string;
    /**
     * 备份名称
     */
    BackupName?: string;
    /**
     * 实例ID
     */
    ClusterId?: string;
    /**
     * 备份状态
     */
    State?: string;
    /**
     * 备份数据大小
     */
    BackupSize?: number;
    /**
     * 备份类型
     */
    BackupType?: string;
    /**
     * 备份开始时间
     */
    StartTime?: number;
    /**
     * 备份结束时间
     */
    EndTime?: number;
    /**
     * 虚拟节点id
     */
    VirtualClusterId?: string;
    /**
     * 副本类型,ConfigRepl或者DataRepl
     */
    ReplicaType?: string;
    /**
     * 批次id
     */
    BatchId?: string;
    /**
     * 磁盘大小
     */
    DiskSize?: number;
  }[];
}

/**
 * ListUMongoDBConfigTemplate - 拉取配置模板
 */
export interface ListUMongoDBConfigTemplateRequest {}

/**
 * ListUMongoDBConfigTemplate - 拉取配置模板
 */
export interface ListUMongoDBConfigTemplateResponse {
  /**
   * 配置模板列表
   */
  DataSet: {
    /**
     * 模板ID
     */
    TemplateId?: string;
    /**
     * 模板名称
     */
    TemplateName?: string;
    /**
     * mongo版本
     */
    MongodbVersion?: string;
    /**
     * 集群类型
     */
    ClusterType?: string;
    /**
     * 模板类型 UsersTemplate DefaultTemplate
     */
    TemplateType?: string;
    /**
     * 创建时间
     */
    CreateTime?: number;
    /**
     * 修改时间
     */
    ModifyTime?: number;
    /**
     * 删除时间
     */
    DeleteTime?: number;
    /**
     * 模板描述
     */
    Description?: string;
  }[];
}

/**
 * ListUMongoDBInstances - 获取副本集/分片集群列表
 */
export interface ListUMongoDBInstancesRequest {
  /**
   * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
   */
  Zone?: string;
  /**
   * 集群ID
   */
  ClusterId?: string;
}

/**
 * ListUMongoDBInstances - 获取副本集/分片集群列表
 */
export interface ListUMongoDBInstancesResponse {
  /**
   * 副本集ID
   */
  DataSet?: {
    /**
     * 可用区
     */
    Zone: string;
    /**
     * 副本集/分片集群ID
     */
    ClusterId: string;
    /**
     * 副本集/分片集群实例名称
     */
    Name: string;
    /**
     * 副本集/分片集群的Mongodb的版本，包括MongoDB-3.6, MongoDB-4.2
     */
    DBVersion: string;
    /**
     * 副本集/分片集群的访问地址
     */
    ConnectURL: string;
    /**
     * 副本集/分片集群的创建时间
     */
    CreateTime: number;
    /**
     * 集群类型，ReplicaSet :副本集，SharedCluster：分片集
     */
    ClusterType: string;
    /**
     * 副本集/分片集群状态标记 Initing：初始化中，InitFailed：安装失败，Starting：启动中，StartFailed：启动失败，Running：运行，Stopping：关闭中，Stopped：已关闭, StopFailed：关闭失败，Deleting：删除中，Deleted：已删除，DeleteFailed：删除失败，Restarting：重启中，RestartFailed：重启失败,Upgrading: 升降级中，UpgradeFailed: 升降级失败,Switching:主备切换中
     */
    State: string;
    /**
     * 副本集/分片集IPv6访问地址
     */
    IPv6ConnectURL?: string;
    /**
     * DB实例过期时间，采用UTC计时时间戳
     */
    ExpiredTime?: number;
    /**
     * 数据节点计算规格
     */
    DataComputeType?: {
      /**
       * 机器类型ID o.mongo2m.medium，o.mongo2m.xlarge
       */
      MachineTypeId: string;
      /**
       * 配置简称  2C4G
       */
      Description: string;
      /**
       * cpu核数
       */
      Cpu: number;
      /**
       * 内存用量(GB)
       */
      Memory: number;
      /**
       * 机器类型，N/O
       */
      UHhostMachineType?: string;
      /**
       * 配置分组，2m , 4m
       */
      Group?: string;
    };
    /**
     * VPC的ID
     */
    VPCId?: string;
    /**
     * 子网ID
     */
    SubnetId?: string;
    /**
     * 数据节点磁盘空间(GB)
     */
    DiskSpace?: number;
    /**
     * 业务组
     */
    Tag?: string;
    /**
     * 跨可用区列表
     */
    CrossZones?: string[];
  }[];
}

/**
 * ListUMongoDBLogPackage - 日志打包列表
 */
export interface ListUMongoDBLogPackageRequest {
  /**
   * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
   */
  Zone: string;
  /**
   * 集群id
   */
  ClusterId: string;
  /**
   * 节点id
   */
  NodeId?: string;
}

/**
 * ListUMongoDBLogPackage - 日志打包列表
 */
export interface ListUMongoDBLogPackageResponse {
  /**
   * 列表
   */
  DataSet: {
    /**
     * id
     */
    Id?: number;
    /**
     * 名称
     */
    Name?: string;
    /**
     * Package_Running,Package_Success,Package_Failed,Package_Deleting,Package_Deleted,Package_DeleteFailed
     */
    State?: string;
    /**
     * 大小,单位字节
     */
    Size?: number;
    /**
     * SlowLog,ErrorLog
     */
    PackageType?: string;
    /**
     * 集群id
     */
    ClusterId?: string;
    /**
     * 节点id
     */
    NodeId?: string;
    /**
     * 角色
     */
    Role?: string;
    /**
     * 开始时间
     */
    Begin?: number;
    /**
     * 结束时间
     */
    End?: number;
    /**
     * 创建时间
     */
    CreateTime?: number;
    /**
     * 完成时间
     */
    FinishTime?: number;
  }[];
}

/**
 * ListUMongoDBMachineSpec - 获取UMongoDB支持机器类型列表
 */
export interface ListUMongoDBMachineSpecRequest {
  /**
   * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
   */
  Zone: string;
  /**
   * 机型,如O
   */
  ClassType?: string;
  /**
   * 磁盘类型，如CLOUD_RSSD
   */
  DiskType?: string;
}

/**
 * ListUMongoDBMachineSpec - 获取UMongoDB支持机器类型列表
 */
export interface ListUMongoDBMachineSpecResponse {
  /**
   * 规格列表
   */
  DataSet: {
    /**
     * 规格类型;O | N
     */
    ClassType?: string;
    /**
     * 磁盘类型;CLOUD_RSSD | CLOUD_SSD | LOCAL_SSD
     */
    DiskType?: string[];
    /**
     * 计算规格列表
     */
    ComputeType?: {
      /**
       * 机器类型ID o.mongo2m.medium，o.mongo2m.xlarge
       */
      MachineTypeId: string;
      /**
       * 配置简称  2C4G
       */
      Description: string;
      /**
       * cpu核数
       */
      Cpu: number;
      /**
       * 内存用量(GB)
       */
      Memory: number;
      /**
       * 机器类型，N/O
       */
      UHhostMachineType?: string;
      /**
       * 配置分组，2m , 4m
       */
      Group?: string;
    }[];
    /**
     * 默认规格
     */
    DefaultMachineType?: {
      /**
       * 机器类型ID o.mongo2m.medium，o.mongo2m.xlarge
       */
      MachineTypeId: string;
      /**
       * 配置简称  2C4G
       */
      Description: string;
      /**
       * cpu核数
       */
      Cpu: number;
      /**
       * 内存用量(GB)
       */
      Memory: number;
      /**
       * 机器类型，N/O
       */
      UHhostMachineType?: string;
      /**
       * 配置分组，2m , 4m
       */
      Group?: string;
    };
  }[];
}

/**
 * ListUMongoDBMachineType - 获取UmongDB支持机器类型列表
 */
export interface ListUMongoDBMachineTypeRequest {
  /**
   * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
   */
  Zone: string;
}

/**
 * ListUMongoDBMachineType - 获取UmongDB支持机器类型列表
 */
export interface ListUMongoDBMachineTypeResponse {
  /**
   *
   */
  DataSet: {
    /**
     * 机器类型ID o.mongo2m.medium，o.mongo2m.xlarge
     */
    MachineTypeId: string;
    /**
     * 配置简称  2C4G
     */
    Description: string;
    /**
     * cpu核数
     */
    Cpu: number;
    /**
     * 内存用量(GB)
     */
    Memory: number;
    /**
     * 机器类型，N/O
     */
    UHhostMachineType?: string;
    /**
     * 配置分组，2m , 4m
     */
    Group?: string;
  }[];
}

/**
 * ListUMongoDBVersion - 获取UMongoDB支持版本列表
 */
export interface ListUMongoDBVersionRequest {
  /**
   * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
   */
  Zone: string;
}

/**
 * ListUMongoDBVersion - 获取UMongoDB支持版本列表
 */
export interface ListUMongoDBVersionResponse {
  /**
   *
   */
  DataSet: {
    /**
     * MongoDB版本
     */
    DBVersion?: string;
  }[];
}

/**
 * ModifyUMongoDBAdminPassword - 修改MongoDB集群root密码
 */
export interface ModifyUMongoDBAdminPasswordRequest {
  /**
   * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
   */
  Zone: string;
  /**
   * 集群ID
   */
  ClusterId: string;
  /**
   * 集群新密码(密码格式使用BASE64编码)
   */
  Password: string;
}

/**
 * ModifyUMongoDBAdminPassword - 修改MongoDB集群root密码
 */
export interface ModifyUMongoDBAdminPasswordResponse {}

/**
 * ModifyUMongoDBAttribute - 修改MongoDB集群名称
 */
export interface ModifyUMongoDBAttributeRequest {
  /**
   * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
   */
  Zone: string;
  /**
   * 集群id
   */
  ClusterId: string;
  /**
   * 集群新名称(输入长度为6~63位名称)
   */
  Name?: string;
  /**
   * 集群备注(Name和RemarkName必传其一)
   */
  RemarkName?: string;
}

/**
 * ModifyUMongoDBAttribute - 修改MongoDB集群名称
 */
export interface ModifyUMongoDBAttributeResponse {}

/**
 * ModifyUMongoDBBackupParam - 修改实例备份策略
 */
export interface ModifyUMongoDBBackupParamRequest {
  /**
   * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
   */
  Zone: string;
  /**
   * 实例ID
   */
  ClusterId: string;
  /**
   * 自动备份预期星期几(1～7),默认 3,7 (周三，周日)
   */
  AutoBackupToggleWeek?: string;
  /**
   * 自动备份预期开始时间范围(00:00~23:59),默认 5:00~6:00
   */
  AutoBackupToggleTime?: string;
  /**
   * 是否禁用,true:禁用;false:开启
   */
  Disabled?: boolean;
}

/**
 * ModifyUMongoDBBackupParam - 修改实例备份策略
 */
export interface ModifyUMongoDBBackupParamResponse {}

/**
 * ResizeUMongoDBInstance - 集群配置升降级
 */
export interface ResizeUMongoDBInstanceRequest {
  /**
   * 集群资源ID
   */
  ClusterId: string;
  /**
   * 集群数据节点磁盘配置
   */
  DiskSpace?: number;
  /**
   * 集群数据节点机型配置
   */
  MachineTypeId?: string;
  /**
   * 集群Mongos节点机型配置
   */
  MongosMachineTypeId?: string;
}

/**
 * ResizeUMongoDBInstance - 集群配置升降级
 */
export interface ResizeUMongoDBInstanceResponse {}

/**
 * RestartUMongoDBCluster - 重启集群
 */
export interface RestartUMongoDBClusterRequest {
  /**
   * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
   */
  Zone: string;
  /**
   * 集群ID
   */
  ClusterId: string;
}

/**
 * RestartUMongoDBCluster - 重启集群
 */
export interface RestartUMongoDBClusterResponse {
  /**
   * 集群ID
   */
  ClusterId: string;
}

/**
 * StartUMongoDBCluster - 启动集群
 */
export interface StartUMongoDBClusterRequest {
  /**
   * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
   */
  Zone: string;
  /**
   * 集群ID
   */
  ClusterId: string;
}

/**
 * StartUMongoDBCluster - 启动集群
 */
export interface StartUMongoDBClusterResponse {
  /**
   * 集群ID
   */
  ClusterId: string;
}

/**
 * StopUMongoDBCluster - 停止集群
 */
export interface StopUMongoDBClusterRequest {
  /**
   * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
   */
  Zone: string;
  /**
   * 集群ID
   */
  ClusterId: string;
}

/**
 * StopUMongoDBCluster - 停止集群
 */
export interface StopUMongoDBClusterResponse {
  /**
   * 集群ID
   */
  ClusterId: string;
}
