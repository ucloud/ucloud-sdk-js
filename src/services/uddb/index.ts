import Client from '../../core/client';
import Request from '../../core/request';
import { ConfigOptions } from '../../core/config';
import { CredentialOptions } from '../../core/credential';

/**
 * This client is used to call actions of **uddb** service
 */
export default class UDDBClient extends Client {
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
   * ChangeUDDBInstanceName - 修改分布式数据库中间件名称
   *
   * See also: https://docs.ucloud.cn/api/uddb-api/change_uddb_instance_name
   */
  changeUDDBInstanceName(
    request?: ChangeUDDBInstanceNameRequest
  ): Promise<ChangeUDDBInstanceNameResponse> {
    const args = { Action: 'ChangeUDDBInstanceName', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as ChangeUDDBInstanceNameResponse
    );
  }

  /**
     * ChangeUDDBSlaveCount - 改变分布式数据库数据节点的只读实例个数
每一个UDDB的数据节点负责处理所有的写入请求。与此同时，每一个数据节点可以配置若干个该节点的只读实例。当主节点的数据写入完毕后，只读实例把这次的写入操作进行更新，从而和数据节点保持一致。
只读实例可以使得数据由多份复制，在数据节点和只读实例之间，可以做请求的读写分离, 也就是说, 主节点写入数据之后, 数据的读操作可以由数据只读实例进行分担, 这样减少主节点的压力, 增加性能
当改变了数据节点的只读实例个数之后，对于现有的和以后的每一个数据节点都采用这个配置。如果UDDB实例有现有的数据节点, 那么它会根据新配置的参数，自动创建或删除数据节点的只读实例
如下状态的UDDB实例可以进行这个操作:
Running: 系统正常运行中
当请求返回成功之后，UDDB实例的状态变成"ChangingSlaveCount"; 如果返回失败, UDDB实例状态保持不变 当UDDB更改数据分区的只读实例个数成功之后, UDDB实例的状态变成"Running"(正常运行中); 如果更改过程中出现异常, 状态变成"Abnormal"(异常运行中)或者"Error"(运行错误)
     *
     * See also: https://docs.ucloud.cn/api/uddb-api/change_uddb_slave_count
     */
  changeUDDBSlaveCount(
    request?: ChangeUDDBSlaveCountRequest
  ): Promise<ChangeUDDBSlaveCountResponse> {
    const args = { Action: 'ChangeUDDBSlaveCount', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as ChangeUDDBSlaveCountResponse
    );
  }

  /**
   * CreateUDDBInstance - 创建创建分布式数据库UDDB实例, 简称UDDB实例。
   *
   * See also: https://docs.ucloud.cn/api/uddb-api/create_uddb_instance
   */
  createUDDBInstance(
    request?: CreateUDDBInstanceRequest
  ): Promise<CreateUDDBInstanceResponse> {
    const args = { Action: 'CreateUDDBInstance', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as CreateUDDBInstanceResponse
    );
  }

  /**
     * DeleteUDDBInstance - 删除UDDB实例。
如下状态的UDDB实例可以进行这个操作:
InitFail: 初始化失败
Shutoff: 已关闭
当请求返回成功之后，UDDB实例就已经被删除, 列表上看不到对应的UDDB实例
     *
     * See also: https://docs.ucloud.cn/api/uddb-api/delete_uddb_instance
     */
  deleteUDDBInstance(
    request?: DeleteUDDBInstanceRequest
  ): Promise<DeleteUDDBInstanceResponse> {
    const args = { Action: 'DeleteUDDBInstance', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DeleteUDDBInstanceResponse
    );
  }

  /**
   * DescribeUDDBInstance - 获取分布式数据库UDDB的详细信息
   *
   * See also: https://docs.ucloud.cn/api/uddb-api/describe_uddb_instance
   */
  describeUDDBInstance(
    request?: DescribeUDDBInstanceRequest
  ): Promise<DescribeUDDBInstanceResponse> {
    const args = { Action: 'DescribeUDDBInstance', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DescribeUDDBInstanceResponse
    );
  }

  /**
   * DescribeUDDBInstancePrice - 获取分布式数据库UDDB价格
   *
   * See also: https://docs.ucloud.cn/api/uddb-api/describe_uddb_instance_price
   */
  describeUDDBInstancePrice(
    request?: DescribeUDDBInstancePriceRequest
  ): Promise<DescribeUDDBInstancePriceResponse> {
    const args = { Action: 'DescribeUDDBInstancePrice', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DescribeUDDBInstancePriceResponse
    );
  }

  /**
   * DescribeUDDBInstanceUpgradePrice - 升级UDDB时，获取升级后的价格
   *
   * See also: https://docs.ucloud.cn/api/uddb-api/describe_uddb_instance_upgrade_price
   */
  describeUDDBInstanceUpgradePrice(
    request?: DescribeUDDBInstanceUpgradePriceRequest
  ): Promise<DescribeUDDBInstanceUpgradePriceResponse> {
    const args = {
      Action: 'DescribeUDDBInstanceUpgradePrice',
      ...(request || {}),
    };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DescribeUDDBInstanceUpgradePriceResponse
    );
  }

  /**
     * RestartUDDBInstance - 重启UDDB实例，开始提供服务。

如下状态的UDDB实例可以进行这个操作:

Running: 正常运行中
Abnormal: 异常运行中
当请求返回成功之后，UDDB实例的状态变成"Starting"(启动中); 如果返回失败, UDDB实例状态保持不变 UDDB实例在重启过程中, 当UDDB实例启动成功之后, UDDB实例的状态变成"Running"(正常运行中); 如果启动过程中出现异常, 状态变成"Abnormal"(异常运行中), 或者"Shutoff"(已关闭
     *
     * See also: https://docs.ucloud.cn/api/uddb-api/restart_uddb_instance
     */
  restartUDDBInstance(
    request?: RestartUDDBInstanceRequest
  ): Promise<RestartUDDBInstanceResponse> {
    const args = { Action: 'RestartUDDBInstance', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as RestartUDDBInstanceResponse
    );
  }

  /**
     * StartUDDBInstance - 启动UDDB实例，开始提供服务。

如下状态的UDDB实例可以进行这个操作:

Shutoff: 已关闭
当请求返回成功之后，UDDB实例的状态变成"Starting"(启动中); 如果返回失败, UDDB实例状态保持不变 UDDB实例在启动过程中, 当UDDB实例启动成功之后, UDDB实例的状态变成"Running"(正常运行中); 如果启动过程中出现异常, 状态变成"Abnormal"(异常运行中), 或者"Shutoff"(已关闭)
     *
     * See also: https://docs.ucloud.cn/api/uddb-api/start_uddb_instance
     */
  startUDDBInstance(
    request?: StartUDDBInstanceRequest
  ): Promise<StartUDDBInstanceResponse> {
    const args = { Action: 'StartUDDBInstance', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as StartUDDBInstanceResponse
    );
  }

  /**
     * StopUDDBInstance - 关闭UDDB实例，停止提供服务。

如下状态的UDDB实例可以进行这个操作:

Running: 正常运行中
Abnormal: 异常运行中
当请求返回成功之后，UDDB实例的状态变成"Shutdown"(关闭中); 如果返回失败, UDDB实例状态保持不变 UDDB实例在关闭过程中, 当UDDB实例关闭成功之后, UDDB实例的状态变成"Shutoff"(已关闭); 如果关闭过程中出现异常, 根据UDDB实例的情况, 状态变成"Abnormal"(异常运行中), 或者"Running"(正常运行中)
     *
     * See also: https://docs.ucloud.cn/api/uddb-api/stop_uddb_instance
     */
  stopUDDBInstance(
    request?: StopUDDBInstanceRequest
  ): Promise<StopUDDBInstanceResponse> {
    const args = { Action: 'StopUDDBInstance', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as StopUDDBInstanceResponse
    );
  }

  /**
     * UpgradeUDDBDataNode - 升降级分布式数据库数据节点的配置, 提高/降低数据节点的数据容量和内存

所有数据节点以及其所挂载的只读实例的配置都受到影响

升降级数据节点的配置之后之后, 会按照数据节点新的磁盘和内存大小重新计费

如下状态的数据节点实例可以进行这个操作:

Shutoff: 已关闭
当请求返回成功之后，UDDB实例的状态变成"UpgradingDataNode"，相关数据节点的状态变成"Upgrading"; 如果返回失败, UDDB实例状态保持不变 当UDDB实例升级结束之后, UDDB实例的状态变成"Shutoff"
     *
     * See also: https://docs.ucloud.cn/api/uddb-api/upgrade_uddb_data_node
     */
  upgradeUDDBDataNode(
    request?: UpgradeUDDBDataNodeRequest
  ): Promise<UpgradeUDDBDataNodeResponse> {
    const args = { Action: 'UpgradeUDDBDataNode', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as UpgradeUDDBDataNodeResponse
    );
  }

  /**
     * UpgradeUDDBInstance - 升降级分布式数据库中间件的配置, 提高/降低请求处理的并发性

修改请求处理节点个数之后, 按照所有请求处理节点的总内存容量和CPU核数重新计费

如下状态的UDDB实例可以进行这个操作:

Running: 系统正常运行中
当请求返回成功之后，UDDB实例的状态变成"UpgradingUDDB"; 如果返回失败, UDDB实例状态保持不变 当UDDB实例升级成功之后, UDDB实例的状态变成"Running"; 如果更改过程中出现异常, 状态变成"Abnormal", 或者"Error"
     *
     * See also: https://docs.ucloud.cn/api/uddb-api/upgrade_uddb_instance
     */
  upgradeUDDBInstance(
    request?: UpgradeUDDBInstanceRequest
  ): Promise<UpgradeUDDBInstanceResponse> {
    const args = { Action: 'UpgradeUDDBInstance', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as UpgradeUDDBInstanceResponse
    );
  }
}

/**
 * ChangeUDDBInstanceName - 修改分布式数据库中间件名称
 */
export interface ChangeUDDBInstanceNameRequest {
  /**
   * 可用区。参见 [可用区列表](../summary/regionlist.html)
   */
  Zone: string;
  /**
   * UDDB实例Id
   */
  UDDBId: string;
  /**
   * 名称
   */
  NewName: string;
}

/**
 * ChangeUDDBInstanceName - 修改分布式数据库中间件名称
 */
export interface ChangeUDDBInstanceNameResponse {}

/**
 * ChangeUDDBSlaveCount - 改变分布式数据库数据节点的只读实例个数
每一个UDDB的数据节点负责处理所有的写入请求。与此同时，每一个数据节点可以配置若干个该节点的只读实例。当主节点的数据写入完毕后，只读实例把这次的写入操作进行更新，从而和数据节点保持一致。
只读实例可以使得数据由多份复制，在数据节点和只读实例之间，可以做请求的读写分离, 也就是说, 主节点写入数据之后, 数据的读操作可以由数据只读实例进行分担, 这样减少主节点的压力, 增加性能
当改变了数据节点的只读实例个数之后，对于现有的和以后的每一个数据节点都采用这个配置。如果UDDB实例有现有的数据节点, 那么它会根据新配置的参数，自动创建或删除数据节点的只读实例
如下状态的UDDB实例可以进行这个操作:
Running: 系统正常运行中
当请求返回成功之后，UDDB实例的状态变成"ChangingSlaveCount"; 如果返回失败, UDDB实例状态保持不变 当UDDB更改数据分区的只读实例个数成功之后, UDDB实例的状态变成"Running"(正常运行中); 如果更改过程中出现异常, 状态变成"Abnormal"(异常运行中)或者"Error"(运行错误)
 */
export interface ChangeUDDBSlaveCountRequest {
  /**
   * 可用区。参见 [可用区列表](../summary/regionlist.html)
   */
  Zone: string;
  /**
   * UDDB资源id
   */
  UDDBId: string;
  /**
   * 每个数据节点的只读实例个数, 取值必须>=0
   */
  SlaveCount: string;
}

/**
 * ChangeUDDBSlaveCount - 改变分布式数据库数据节点的只读实例个数
每一个UDDB的数据节点负责处理所有的写入请求。与此同时，每一个数据节点可以配置若干个该节点的只读实例。当主节点的数据写入完毕后，只读实例把这次的写入操作进行更新，从而和数据节点保持一致。
只读实例可以使得数据由多份复制，在数据节点和只读实例之间，可以做请求的读写分离, 也就是说, 主节点写入数据之后, 数据的读操作可以由数据只读实例进行分担, 这样减少主节点的压力, 增加性能
当改变了数据节点的只读实例个数之后，对于现有的和以后的每一个数据节点都采用这个配置。如果UDDB实例有现有的数据节点, 那么它会根据新配置的参数，自动创建或删除数据节点的只读实例
如下状态的UDDB实例可以进行这个操作:
Running: 系统正常运行中
当请求返回成功之后，UDDB实例的状态变成"ChangingSlaveCount"; 如果返回失败, UDDB实例状态保持不变 当UDDB更改数据分区的只读实例个数成功之后, UDDB实例的状态变成"Running"(正常运行中); 如果更改过程中出现异常, 状态变成"Abnormal"(异常运行中)或者"Error"(运行错误)
 */
export interface ChangeUDDBSlaveCountResponse {}

/**
 * CreateUDDBInstance - 创建创建分布式数据库UDDB实例, 简称UDDB实例。
 */
export interface CreateUDDBInstanceRequest {
  /**
   * 可用区。参见 [可用区列表](../summary/regionlist.html)
   */
  Zone: string;
  /**
   * UDDB的数据库版本，支持版本如下：mysql-5.6 mysql-5.7. 如果不填，则默认为mysql-5.6
   */
  DBTypeId: string;
  /**
   * 实例名称，至少6位
   */
  Name: string;
  /**
   * 管理员密码, 密码需要使用base64加密
   */
  AdminPassword: string;
  /**
   * UDDB路由节点的版本。分为三种： Trival(免费版)： 2中间件节点； QPS：1.5W FellFree(标准版)： 固定为4中间件节点，后续将根据业务请求量自动扩展，最多扩展到12个节点，QPS为3w - 10w； EnjoyAlone(物理机版)：专享物理机，节点数让客户可选
   */
  RouterVersion: string;
  /**
   * 其他版本：该参数可不填；专享版：物理机台数
   */
  RouterNodeNum: number;
  /**
   * 初始的数据节点个数 取值必须>0.
   */
  DataNodeCount: number;
  /**
   * 新的数据节点的内存配置, 单位：MB 具体数值参考UDB的内存取值.
   */
  DataNodeMemory: number;
  /**
   * 新的数据节点的磁盘大小配置. 单位: GB 具体数值参考UDB的磁盘大小取值.
   */
  DataNodeDiskSpace: number;
  /**
   * 存储节点的高可用模式， 分为高可用UDB（HA）和普通UDB（Normal），如果不填， 则默认为HA
   */
  InstanceMode?: string;
  /**
   * 存储节点和只读实例的磁盘类型。分为：SSD磁盘（SATA_SSD）或普通磁盘(Normal)。 如果不填，则默认为SATA_SSD
   */
  InstanceType?: string;
  /**
   * 付费类型，可选值如下:Year: 按年付费 Month: 按月付费 Dynamic: 按需付费(单位: 小时) Trial: 免费试用  默认值为: Dynamic
   */
  ChargeType?: string;
  /**
   * 购买时长，默认值1
   */
  Quantity?: number;
  /**
   * 管理员帐户名，默认root
   */
  AdminUser?: string;
  /**
   * 端口号，mysql默认端口为3306
   */
  Port?: number;
  /**
   * 每个数据节点的只读实例个数, 取值必须>=0. 默认取值为0.
   */
  DataNodeSlaveCount?: number;
  /**
   * VPC的ID
   */
  VPCId?: string;
  /**
   * 子网ID
   */
  SubnetId?: string;
  /**
   * 使用的代金券id
   */
  CouponId?: string;
}

/**
 * CreateUDDBInstance - 创建创建分布式数据库UDDB实例, 简称UDDB实例。
 */
export interface CreateUDDBInstanceResponse {
  /**
   * UDDB实例ID
   */
  UDDBId?: string;
}

/**
 * DeleteUDDBInstance - 删除UDDB实例。
如下状态的UDDB实例可以进行这个操作:
InitFail: 初始化失败
Shutoff: 已关闭
当请求返回成功之后，UDDB实例就已经被删除, 列表上看不到对应的UDDB实例
 */
export interface DeleteUDDBInstanceRequest {
  /**
   * 可用区。参见 [可用区列表](../summary/regionlist.html)
   */
  Zone: string;
  /**
   * UDDB实例ID
   */
  UDDBId: string;
}

/**
 * DeleteUDDBInstance - 删除UDDB实例。
如下状态的UDDB实例可以进行这个操作:
InitFail: 初始化失败
Shutoff: 已关闭
当请求返回成功之后，UDDB实例就已经被删除, 列表上看不到对应的UDDB实例
 */
export interface DeleteUDDBInstanceResponse {}

/**
 * DescribeUDDBInstance - 获取分布式数据库UDDB的详细信息
 */
export interface DescribeUDDBInstanceRequest {
  /**
   * 可用区。参见 [可用区列表](../summary/regionlist.html)
   */
  Zone: string;
  /**
   * UDDB实例ID
   */
  UDDBId: string;
}

/**
 * DescribeUDDBInstance - 获取分布式数据库UDDB的详细信息
 */
export interface DescribeUDDBInstanceResponse {
  /**
   * UDDB实例信息列表, 参见DataSetUDDB项定义
   */
  DataSet?: {
    /**
     * UDDB实例对应的可用区
     */
    Zone?: string;
    /**
     * UDDB实例ID
     */
    UDDBId?: string;
    /**
     * UDDB实例名称
     */
    Name?: string;
    /**
     * UDDB的数据库版本
     */
    DBTypeId?: string;
    /**
     * 管理员帐户名，默认root
     */
    AdminUser?: string;
    /**
     * UDDB实例访问的虚IP
     */
    VirtualIP?: string;
    /**
     * UDDB实例访问的端口号
     */
    Port?: number;
    /**
     * UDDB状态, 状态列表如下: Init: 初始化中 InitFail: 初始化失败 Starting: 启动中 Running: 系统正常运行中 Abnormal: 系统运行中, 有异常, 还能提供服务 Error: 系统运行中, 但不能正常提供服务 Shutdown: 关闭中 Shutoff: 已关闭 Deleted: 已删除 UpgradingUDDB: 升降级UDDB配置中 UpgradingDataNode: 升降级UDDB节点配置中 ChangingSlaveCount: 改变只读实例数量中 ScalingOutUDDB: 水平扩展中
     */
    State?: string;
    /**
     * UDDB实例创建时间，采用UTC计时时间戳
     */
    CreateTime?: number;
    /**
     * UDDB实例过期时间，采用UTC计时时间戳
     */
    ExpiredTime?: number;
    /**
     * 付费类型，可选值如下: Year: 按年付费 Month: 按月付费 Dynamic: 按需付费(单位: 小时) Trial: 免费试用
     */
    ChargeType?: string;
    /**
     * UDDB路由节点的版本。分为三种： Trival(免费版)： 2中间件节点； QPS：1.5W FellFree(标准版)： 固定为4中间件节点，后续将根据业务请求量自动扩展，最多扩展到12个节点，QPS为3w - 10w； EnjoyAlone(物理机版)：专享物理机，节点数让客户可选
     */
    RouterVersion?: string;
    /**
     * 各版本下的节点个数。体验版： 固定为2节点； 畅享版：固定为4节点（后续可通过管理API调整）；专享版：物理机台数
     */
    RouterNodeNum?: number;
    /**
     * 参考QPS。 免费版： 15000； 畅享版： 30000 - 100000 （根据节点数而定）； 专享版： 节点数 * 10w qps
     */
    RefQps?: number;
    /**
     * 数据节点个数
     */
    DataNodeCount?: number;
    /**
     * 数据节点的内存配置, 单位：MB
     */
    DataNodeMemory?: number;
    /**
     * 数据节点的磁盘大小配置. 单位: GB
     */
    DataNodeDiskSpace?: number;
    /**
     * 每个数据节点的只读实例个数.
     */
    DataNodeSlaveCount?: number;
    /**
     * UDDB实例的数据节点的信息列表
     */
    DataNodeList?: {
      /**
       * 数据节点ID
       */
      Id?: string;
      /**
       * 数据节点的内存配置, 单位：MB
       */
      Memory?: number;
      /**
       * 数据节点的磁盘大小配置. 单位: GB
       */
      DiskSpace?: number;
      /**
       * 数据节点的只读实例个数.
       */
      SlaveCount?: number;
      /**
       * 数据分片状态, 状态列表如下: Init: 初始化中 Fail: 安装失败 Starting: 启动中 Running: 系统正常运行中 Shutdown: 关闭中 Shutoff: 已关闭 Deleted: 已删除 Upgrading: 系统升级中
       */
      State?: string;
      /**
       * 只读实例信息列表
       */
      SlaveInfos?: {
        /**
         * 只读实例ID
         */
        Id?: string;
        /**
         * 对应数据节点的ID
         */
        DataNodeId?: string;
        /**
         * 只读实例状态, 状态列表如下: Init: 初始化中 Fail: 安装失败 Starting: 启动中 Running: 系统正常运行中 Shutdown: 关闭中 Shutoff: 已关闭 Deleted: 已删除 Upgrading: 系统升级中
         */
        State?: string;
      }[];
      /**
       * 最近一次数据迁移任务id
       */
      LastTransTaskId?: string;
      /**
       * 节点的创建时间
       */
      CreateTime?: string;
    }[];
    /**
     * 存储节点的高可用模式， 分为高可用UDB（HA）和普通UDB（Normal），如果不填， 则默认为HA
     */
    InstanceMode?: string;
    /**
     * 存储节点和只读实例的磁盘类型。分为：SSD磁盘（SATA_SSD）或普通磁盘(Normal)。 如果不填，则默认为SATA_SSD
     */
    InstanceType?: string;
  }[];
}

/**
 * DescribeUDDBInstancePrice - 获取分布式数据库UDDB价格
 */
export interface DescribeUDDBInstancePriceRequest {
  /**
   * 可用区。参见 [可用区列表](../summary/regionlist.html)
   */
  Zone: string;
  /**
   * UDDB路由节点的版本。分为三种： Trival(免费版)： 2中间件节点； QPS：1.5WFeelFree(标准版)： 固定为4中间件节点，后续将根据业务请求量自动扩展，最多扩展到12个节点，QPS为3w - 10w；EnjoyAlone(物理机版)：专享物理机，节点数让客户可选
   */
  RouterVersion: string;
  /**
   * 其他版本：该参数可不填；专享版：物理机节点个数。一台物理机有2个节点
   */
  RouterNodeNum: number;
  /**
   * 初始的数据节点个数 取值必须>0.
   */
  DataNodeCount: number;
  /**
   * 新的数据节点的内存配置, 单位：MB 具体数值参考UDB的内存取值.
   */
  DataNodeMemory: string;
  /**
   * 新的数据节点的磁盘大小配置. 单位: GB 具体数值参考UDB的磁盘大小取值.
   */
  DataNodeDiskSpace: number;
  /**
   * 付费类型，可选值如下: Year: 按年付费 Month: 按月付费 Dynamic: 按需付费(单位: 小时) Trial: 免费试用 默认值为: Dynamic
   */
  ChargeType?: string;
  /**
   * 购买时长，默认值1
   */
  Quantity?: number;
  /**
   * 每个数据节点的只读实例个数, 取值必须>=0. 默认取值为0.
   */
  DataNodeSlaveCount?: number;
  /**
   * 存储节点的高可用模式， 分为高可用UDB（HA）和普通UDB（Normal），如果不填， 则默认为HA
   */
  InstanceMode?: string;
  /**
   * 存储节点和只读实例的磁盘类型。分为：SSD磁盘（SATA_SSD）或普通磁盘(Normal)。 如果不填，则默认为SATA_SSD
   */
  InstanceType?: string;
}

/**
 * DescribeUDDBInstancePrice - 获取分布式数据库UDDB价格
 */
export interface DescribeUDDBInstancePriceResponse {
  /**
   * 价格明细, 参考PriceDetailInfo对象定义
   */
  PriceInfo?: {
    /**
     * 中间件路由节点费用
     */
    MiddlewarePrice?: number;
    /**
     * 存储节点费用
     */
    DataNodePrice?: number;
    /**
     * 只读实例费用
     */
    DataNodeSlavePrice?: number;
  };
}

/**
 * DescribeUDDBInstanceUpgradePrice - 升级UDDB时，获取升级后的价格
 */
export interface DescribeUDDBInstanceUpgradePriceRequest {
  /**
   * 可用区。参见 [可用区列表](../summary/regionlist.html)
   */
  Zone: string;
  /**
   * UDDB实例ID
   */
  UDDBId: string;
  /**
   * UDDB路由节点的版本。分为三种： Trival(免费版)： 2中间件节点； QPS：1.5WFeelFree(标准版)： 固定为4中间件节点，后续将根据业务请求量自动扩展，最多扩展到12个节点，QPS为3w - 10w；EnjoyAlone(物理机版)：专享物理机，节点数让客户可选
   */
  RouterVersion: string;
  /**
   * 其他版本：该参数可不填；专享版：物理机节点的个数。一台物理机有2个节点
   */
  RouterNodeNum: number;
  /**
   * 新的数据节点个数 取值必须>0.
   */
  DataNodeCount?: number;
  /**
   * 新的数据节点的内存配置, 单位：MB 具体数值参考UDB的内存取值.
   */
  DataNodeMemory?: number;
  /**
   * 新的数据节点的磁盘大小配置. 单位: GB 具体数值参考UDB的磁盘大小取值.
   */
  DataNodeDiskSpace?: number;
  /**
   * 每个数据节点的只读实例个数, 取值必须>=0.
   */
  DataNodeSlaveCount?: number;
  /**
   * 存储节点的高可用模式， 分为高可用UDB（HA）和普通UDB（Normal），如果不填， 则默认为HA
   */
  InstanceMode?: string;
  /**
   * 存储节点和只读实例的磁盘类型。分为：SSD磁盘（SATA_SSD）或普通磁盘(Normal)。 如果不填，则默认为SATA_SSD
   */
  InstanceType?: string;
}

/**
 * DescribeUDDBInstanceUpgradePrice - 升级UDDB时，获取升级后的价格
 */
export interface DescribeUDDBInstanceUpgradePriceResponse {
  /**
   * 价格明细, 参考PriceInfo对象定义
   */
  PriceInfo?: {
    /**
     * 中间件路由节点费用
     */
    MiddlewarePrice?: number;
    /**
     * 存储节点费用
     */
    DataNodePrice?: number;
    /**
     * 只读实例费用
     */
    DataNodeSlavePrice?: number;
  };
}

/**
 * RestartUDDBInstance - 重启UDDB实例，开始提供服务。

如下状态的UDDB实例可以进行这个操作:

Running: 正常运行中
Abnormal: 异常运行中
当请求返回成功之后，UDDB实例的状态变成"Starting"(启动中); 如果返回失败, UDDB实例状态保持不变 UDDB实例在重启过程中, 当UDDB实例启动成功之后, UDDB实例的状态变成"Running"(正常运行中); 如果启动过程中出现异常, 状态变成"Abnormal"(异常运行中), 或者"Shutoff"(已关闭
 */
export interface RestartUDDBInstanceRequest {
  /**
   * 可用区。参见 [可用区列表](../summary/regionlist.html)
   */
  Zone: string;
  /**
   * UDDB实例ID
   */
  UDDBId: string;
}

/**
 * RestartUDDBInstance - 重启UDDB实例，开始提供服务。

如下状态的UDDB实例可以进行这个操作:

Running: 正常运行中
Abnormal: 异常运行中
当请求返回成功之后，UDDB实例的状态变成"Starting"(启动中); 如果返回失败, UDDB实例状态保持不变 UDDB实例在重启过程中, 当UDDB实例启动成功之后, UDDB实例的状态变成"Running"(正常运行中); 如果启动过程中出现异常, 状态变成"Abnormal"(异常运行中), 或者"Shutoff"(已关闭
 */
export interface RestartUDDBInstanceResponse {}

/**
 * StartUDDBInstance - 启动UDDB实例，开始提供服务。

如下状态的UDDB实例可以进行这个操作:

Shutoff: 已关闭
当请求返回成功之后，UDDB实例的状态变成"Starting"(启动中); 如果返回失败, UDDB实例状态保持不变 UDDB实例在启动过程中, 当UDDB实例启动成功之后, UDDB实例的状态变成"Running"(正常运行中); 如果启动过程中出现异常, 状态变成"Abnormal"(异常运行中), 或者"Shutoff"(已关闭)
 */
export interface StartUDDBInstanceRequest {
  /**
   * 可用区。参见 [可用区列表](../summary/regionlist.html)
   */
  Zone: string;
  /**
   * UDDB实例ID
   */
  UDDBId: string;
}

/**
 * StartUDDBInstance - 启动UDDB实例，开始提供服务。

如下状态的UDDB实例可以进行这个操作:

Shutoff: 已关闭
当请求返回成功之后，UDDB实例的状态变成"Starting"(启动中); 如果返回失败, UDDB实例状态保持不变 UDDB实例在启动过程中, 当UDDB实例启动成功之后, UDDB实例的状态变成"Running"(正常运行中); 如果启动过程中出现异常, 状态变成"Abnormal"(异常运行中), 或者"Shutoff"(已关闭)
 */
export interface StartUDDBInstanceResponse {}

/**
 * StopUDDBInstance - 关闭UDDB实例，停止提供服务。

如下状态的UDDB实例可以进行这个操作:

Running: 正常运行中
Abnormal: 异常运行中
当请求返回成功之后，UDDB实例的状态变成"Shutdown"(关闭中); 如果返回失败, UDDB实例状态保持不变 UDDB实例在关闭过程中, 当UDDB实例关闭成功之后, UDDB实例的状态变成"Shutoff"(已关闭); 如果关闭过程中出现异常, 根据UDDB实例的情况, 状态变成"Abnormal"(异常运行中), 或者"Running"(正常运行中)
 */
export interface StopUDDBInstanceRequest {
  /**
   * 可用区。参见 [可用区列表](../summary/regionlist.html)
   */
  Zone: string;
  /**
   * UDDB实例ID
   */
  UDDBId: string;
}

/**
 * StopUDDBInstance - 关闭UDDB实例，停止提供服务。

如下状态的UDDB实例可以进行这个操作:

Running: 正常运行中
Abnormal: 异常运行中
当请求返回成功之后，UDDB实例的状态变成"Shutdown"(关闭中); 如果返回失败, UDDB实例状态保持不变 UDDB实例在关闭过程中, 当UDDB实例关闭成功之后, UDDB实例的状态变成"Shutoff"(已关闭); 如果关闭过程中出现异常, 根据UDDB实例的情况, 状态变成"Abnormal"(异常运行中), 或者"Running"(正常运行中)
 */
export interface StopUDDBInstanceResponse {}

/**
 * UpgradeUDDBDataNode - 升降级分布式数据库数据节点的配置, 提高/降低数据节点的数据容量和内存

所有数据节点以及其所挂载的只读实例的配置都受到影响

升降级数据节点的配置之后之后, 会按照数据节点新的磁盘和内存大小重新计费

如下状态的数据节点实例可以进行这个操作:

Shutoff: 已关闭
当请求返回成功之后，UDDB实例的状态变成"UpgradingDataNode"，相关数据节点的状态变成"Upgrading"; 如果返回失败, UDDB实例状态保持不变 当UDDB实例升级结束之后, UDDB实例的状态变成"Shutoff"
 */
export interface UpgradeUDDBDataNodeRequest {
  /**
   * 可用区。参见 [可用区列表](../summary/regionlist.html)
   */
  Zone?: string;
  /**
   * UDDB实例ID
   */
  UDDBId: string;
  /**
   * 新的数据节点的内存配置, 单位：MB 具体数值参考UDB的内存取值
   */
  DataNodeMemory: number;
  /**
   * 新的数据节点的磁盘大小配置. 单位: GB 具体数值参考UDB的磁盘大小取值.
   */
  DataNodeDiskSpace: number;
  /**
   * 使用的代金券id
   */
  CouponId?: string;
}

/**
 * UpgradeUDDBDataNode - 升降级分布式数据库数据节点的配置, 提高/降低数据节点的数据容量和内存

所有数据节点以及其所挂载的只读实例的配置都受到影响

升降级数据节点的配置之后之后, 会按照数据节点新的磁盘和内存大小重新计费

如下状态的数据节点实例可以进行这个操作:

Shutoff: 已关闭
当请求返回成功之后，UDDB实例的状态变成"UpgradingDataNode"，相关数据节点的状态变成"Upgrading"; 如果返回失败, UDDB实例状态保持不变 当UDDB实例升级结束之后, UDDB实例的状态变成"Shutoff"
 */
export interface UpgradeUDDBDataNodeResponse {}

/**
 * UpgradeUDDBInstance - 升降级分布式数据库中间件的配置, 提高/降低请求处理的并发性

修改请求处理节点个数之后, 按照所有请求处理节点的总内存容量和CPU核数重新计费

如下状态的UDDB实例可以进行这个操作:

Running: 系统正常运行中
当请求返回成功之后，UDDB实例的状态变成"UpgradingUDDB"; 如果返回失败, UDDB实例状态保持不变 当UDDB实例升级成功之后, UDDB实例的状态变成"Running"; 如果更改过程中出现异常, 状态变成"Abnormal", 或者"Error"
 */
export interface UpgradeUDDBInstanceRequest {
  /**
   * 可用区。参见 [可用区列表](../summary/regionlist.html)
   */
  Zone?: string;
  /**
   * UDDB实例ID
   */
  UDDBId: string;
  /**
   * UDDB路由节点的版本。分为三种： Trival(免费版)： 2中间件节点； QPS：1.5W FellFree(标准版)： 固定为4中间件节点，后续将根据业务请求量自动扩展，最多扩展到12个节点，QPS为3w - 10w； EnjoyAlone(物理机版)：专享物理机，节点数让客户可选
   */
  RouterVersion: string;
  /**
   * 其他版本：该参数可不填；专享版：物理机台数
   */
  RouterNodeNum: number;
  /**
   * 使用的代金券id
   */
  CouponId?: string;
}

/**
 * UpgradeUDDBInstance - 升降级分布式数据库中间件的配置, 提高/降低请求处理的并发性

修改请求处理节点个数之后, 按照所有请求处理节点的总内存容量和CPU核数重新计费

如下状态的UDDB实例可以进行这个操作:

Running: 系统正常运行中
当请求返回成功之后，UDDB实例的状态变成"UpgradingUDDB"; 如果返回失败, UDDB实例状态保持不变 当UDDB实例升级成功之后, UDDB实例的状态变成"Running"; 如果更改过程中出现异常, 状态变成"Abnormal", 或者"Error"
 */
export interface UpgradeUDDBInstanceResponse {}
