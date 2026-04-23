import Client from '../../core/client';
import Request from '../../core/request';
import { ConfigOptions } from '../../core/config';
import { CredentialOptions } from '../../core/credential';

/**
 * This client is used to call actions of **uhadoop** service
 */
export default class UHadoopClient extends Client {
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
   * AddUHadoopInstanceNode - 给已有集群添加一定数量的节点
   *
   * See also: https://docs.ucloud.cn/api/uhadoop-api/add_uhadoop_instance_node
   */
  addUHadoopInstanceNode(
    request?: AddUHadoopInstanceNodeRequest
  ): Promise<AddUHadoopInstanceNodeResponse> {
    const args = { Action: 'AddUHadoopInstanceNode', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as AddUHadoopInstanceNodeResponse
    );
  }

  /**
   * CreateUHadoopInstance - 新建一个uhadoop集群
   *
   * See also: https://docs.ucloud.cn/api/uhadoop-api/create_uhadoop_instance
   */
  createUHadoopInstance(
    request?: CreateUHadoopInstanceRequest
  ): Promise<CreateUHadoopInstanceResponse> {
    const args = { Action: 'CreateUHadoopInstance', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as CreateUHadoopInstanceResponse
    );
  }

  /**
   * DeleteUHadoopInstance - 删除掉一个uhadoop集群
   *
   * See also: https://docs.ucloud.cn/api/uhadoop-api/delete_uhadoop_instance
   */
  deleteUHadoopInstance(
    request?: DeleteUHadoopInstanceRequest
  ): Promise<DeleteUHadoopInstanceResponse> {
    const args = { Action: 'DeleteUHadoopInstance', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DeleteUHadoopInstanceResponse
    );
  }

  /**
   * DescribeUHadoopInstance - 描述集群
   *
   * See also: https://docs.ucloud.cn/api/uhadoop-api/describe_uhadoop_instance
   */
  describeUHadoopInstance(
    request?: DescribeUHadoopInstanceRequest
  ): Promise<DescribeUHadoopInstanceResponse> {
    const args = { Action: 'DescribeUHadoopInstance', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DescribeUHadoopInstanceResponse
    );
  }

  /**
   * GetUHadoopNodeType - 获取节点类型信息
   *
   * See also: https://docs.ucloud.cn/api/uhadoop-api/get_uhadoop_node_type
   */
  getUHadoopNodeType(
    request?: GetUHadoopNodeTypeRequest
  ): Promise<GetUHadoopNodeTypeResponse> {
    const args = { Action: 'GetUHadoopNodeType', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as GetUHadoopNodeTypeResponse
    );
  }

  /**
   * ListUHadoopFrameworkApp - 列举可选app
   *
   * See also: https://docs.ucloud.cn/api/uhadoop-api/list_uhadoop_framework_app
   */
  listUHadoopFrameworkApp(
    request?: ListUHadoopFrameworkAppRequest
  ): Promise<ListUHadoopFrameworkAppResponse> {
    const args = { Action: 'ListUHadoopFrameworkApp', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as ListUHadoopFrameworkAppResponse
    );
  }

  /**
   * ListUHadoopFrameworkAppByUseCase - 按使用场景列出uhadoop的框架和框架中的应用
   *
   * See also: https://docs.ucloud.cn/api/uhadoop-api/list_uhadoop_framework_app_by_use_case
   */
  listUHadoopFrameworkAppByUseCase(
    request?: ListUHadoopFrameworkAppByUseCaseRequest
  ): Promise<ListUHadoopFrameworkAppByUseCaseResponse> {
    const args = {
      Action: 'ListUHadoopFrameworkAppByUseCase',
      ...(request || {}),
    };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as ListUHadoopFrameworkAppByUseCaseResponse
    );
  }

  /**
   * ListUHadoopInstance - 列出用户所有的uhadoop集群
   *
   * See also: https://docs.ucloud.cn/api/uhadoop-api/list_uhadoop_instance
   */
  listUHadoopInstance(
    request?: ListUHadoopInstanceRequest
  ): Promise<ListUHadoopInstanceResponse> {
    const args = { Action: 'ListUHadoopInstance', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as ListUHadoopInstanceResponse
    );
  }

  /**
   * RestartUHadoopService - 重启集群服务（包含start|stop|restart）
   *
   * See also: https://docs.ucloud.cn/api/uhadoop-api/restart_uhadoop_service
   */
  restartUHadoopService(
    request?: RestartUHadoopServiceRequest
  ): Promise<RestartUHadoopServiceResponse> {
    const args = { Action: 'RestartUHadoopService', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as RestartUHadoopServiceResponse
    );
  }

  /**
   * UpgradeUHadoopNode - 升级uhadoop节点
   *
   * See also: https://docs.ucloud.cn/api/uhadoop-api/upgrade_uhadoop_node
   */
  upgradeUHadoopNode(
    request?: UpgradeUHadoopNodeRequest
  ): Promise<UpgradeUHadoopNodeResponse> {
    const args = { Action: 'UpgradeUHadoopNode', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as UpgradeUHadoopNodeResponse
    );
  }

  /**
   * UpgradeUHadoopNodeDisk - 扩容集群节点磁盘
   *
   * See also: https://docs.ucloud.cn/api/uhadoop-api/upgrade_uhadoop_node_disk
   */
  upgradeUHadoopNodeDisk(
    request?: UpgradeUHadoopNodeDiskRequest
  ): Promise<UpgradeUHadoopNodeDiskResponse> {
    const args = { Action: 'UpgradeUHadoopNodeDisk', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as UpgradeUHadoopNodeDiskResponse
    );
  }
}

/**
 * AddUHadoopInstanceNode - 给已有集群添加一定数量的节点
 */
export interface AddUHadoopInstanceNodeRequest {
  /**
   * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
   */
  Zone?: string;
  /**
   * 节点的角色，值为task|core|client之一
   */
  NodeRole: string;
  /**
   * 机型，如：o.hadoop2m.medium，可从GetUHadoopNodeType接口获取
   */
  NodeType: string;
  /**
   * 实例ID
   */
  InstanceId: string;
  /**
   * 数据盘数量，非裸金属机型时必填
   */
  DataDiskNum?: string;
  /**
   * 密码,NodeRole为client时必填
   */
  Password?: string;
  /**
   * 系统盘容量,非裸金属机型必填
   */
  BootDiskSize?: string;
  /**
   * 系统盘类型，非裸金属机型必填，例如：CLOUD_RSSD
   */
  BootDiskType?: string;
  /**
   * 数据盘容量，非裸金属机型必填
   */
  DataDiskSize?: string;
  /**
   * 数据盘类型，非裸金属机型必填，例如：CLOUD_RSSD
   */
  DataDiskType?: string;
  /**
   * 节点数量,默认为1
   */
  NodeCount?: number;
}

/**
 * AddUHadoopInstanceNode - 给已有集群添加一定数量的节点
 */
export interface AddUHadoopInstanceNodeResponse {}

/**
 * CreateUHadoopInstance - 新建一个uhadoop集群
 */
export interface CreateUHadoopInstanceRequest {
  /**
   * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
   */
  Zone: string;
  /**
   * 集群机器的登录密码
   */
  Password: string;
  /**
   * 版本,例如：3.2.1-udh3.0,通过ListUHadoopFrameworkApp接口获取
   */
  FrameworkVersion: string;
  /**
   * 节点配置，里面包括NodeType（机型），NodeRole（节点类别，值为其中之一：master|core|task），Count（数量），DataDiskType（数据盘类别），DataDiskSize（数据盘大小），DataDiskNum（数据盘数量），BootDiskType（系统盘类型），BootDiskSize（系统盘大小），通过GetUHadoopNodeType接口获取，示例为：InstanceGroupConfigs.0.NodeType=o.hadoop2m.xlargeInstanceGroupConfigs.0.NodeRole=masterInstanceGroupConfigs.0.Count=2InstanceGroupConfigs.0.DataDiskType=CLOUD_RSSDInstanceGroupConfigs.0.DataDiskSize=100InstanceGroupConfigs.0.DataDiskNum=1InstanceGroupConfigs.0.BootDiskType=CLOUD_RSSDInstanceGroupConfigs.0.BootDiskSize=50InstanceGroupConfigs.1.NodeType=o.hadoop2m.xlargeInstanceGroupConfigs.1.NodeRole=coreInstanceGroupConfigs.1.Count=3InstanceGroupConfigs.1.DataDiskType=CLOUD_RSSDInstanceGroupConfigs.1.DataDiskSize=200InstanceGroupConfigs.1.DataDiskNum=1InstanceGroupConfigs.1.BootDiskType=CLOUD_RSSDInstanceGroupConfigs.1.BootDiskSize=50
   */
  InstanceGroupConfigs: string[];
  /**
   * VPCId
   */
  VPCId: string;
  /**
   * 子网ID
   */
  SubnetId: string;
  /**
   * 集群需要安装的组件，格式：组件#版本通过ListUHadoopFrameworkApp接口获取，例如：Spark#3.3.0
   */
  AppConfig: string[];
  /**
   * 框架，值为'Hadoop'|'HDFS'|'MR'|'StarRocks'之一,框架，例如Hadoop|MR|HDFS|StarRocks Hadoop框架包含存储与计算服务 MR集群包含计算服务 HDFS只包含存储服务,StarRocks为StarRocks集群
   */
  Framework: string;
  /**
   * 支付类别，默认：Month
   */
  ChargeType?: string;
  /**
   * 数量，默认1
   */
  Quantity?: number;
  /**
   * 工作组ID，默认Default
   */
  BusinessId?: string;
  /**
   * Framework为‘MR’时，存储集群ID
   */
  StorgeClusterId?: string;
  /**
   * 目前只支持传‘udb’
   */
  StandAloneMetaStore?: string;
  /**
   * 是否开启安全组
   */
  IsSecurityEnabled?: string;
  /**
   * 安全组ID，字符串数组，IsSecurityEnabled为true时生效
   */
  SecGroupIds?: string;
  /**
   * US3 bucket名称，仅支持框架为StarRocks存算分离时传入
   */
  US3Bucket?: string;
  /**
   * US3 配置公钥，仅支持框架为StarRocks存算分离时传入
   */
  US3AccessKey?: string;
  /**
   * US3 配置私钥，仅支持框架为StarRocks存算分离时传入
   */
  US3SecretKey?: string;
  /**
   * US3 Token名称，仅支持框架为StarRocks存算分离时传入
   */
  US3TokenName?: string;
  /**
   * 实例名称，默认为实例ID
   */
  InstanceName?: string;
}

/**
 * CreateUHadoopInstance - 新建一个uhadoop集群
 */
export interface CreateUHadoopInstanceResponse {
  /**
   * 实例ID
   */
  InstanceId?: string;
}

/**
 * DeleteUHadoopInstance - 删除掉一个uhadoop集群
 */
export interface DeleteUHadoopInstanceRequest {
  /**
   * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
   */
  Zone: string;
  /**
   * 实例ID
   */
  InstanceId: string;
  /**
   * 是否释放绑定的EIP。true: 解绑EIP后，并释放；其他值或不填：解绑EIP。
   */
  ReleaseEIP?: boolean;
}

/**
 * DeleteUHadoopInstance - 删除掉一个uhadoop集群
 */
export interface DeleteUHadoopInstanceResponse {}

/**
 * DescribeUHadoopInstance - 描述集群
 */
export interface DescribeUHadoopInstanceRequest {
  /**
   * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
   */
  Zone?: string;
  /**
   * 实例ID
   */
  InstanceId: string;
  /**
   * VPCID
   */
  VPCId?: string;
  /**
   * 子网ID
   */
  SubnetId?: string;
}

/**
 * DescribeUHadoopInstance - 描述集群
 */
export interface DescribeUHadoopInstanceResponse {
  /**
   * 集群信息
   */
  ClusterSet?: {
    /**
     * 可用区
     */
    Zone: string;
    /**
     * 集群Tag
     */
    Tag: string;
    /**
     * 实例ID
     */
    InstanceId: string;
    /**
     * 实例名称
     */
    InstanceName: string;
    /**
     * 框架，值为'Hadoop'|'HDFS'|'MR'|'StarRocks'之一,框架，例如Hadoop|MR|HDFS|StarRocks Hadoop框架包含存储与计算服务 MR集群包含计算服务 HDFS只包含存储服务,StarRocks为StarRocks集群
     */
    Framework: string;
    /**
     * VPC ID
     */
    VPCId: string;
    /**
     * 子网ID
     */
    SubnetId: string;
    /**
     * 业务组ID
     */
    BusinessId: string;
    /**
     * Uhadoop版本，值为 uhadoop 3.0|uhadoop 2.2|uhadoop 3.1
     */
    ReleaseVersion: string;
    /**
     * Hadoop版本，值为 hadoop3.2.1-udh3.0|hadoop3.3.4-udh3.1|hadoop2.8.5-udh2.2
     */
    HadoopVersion: string;
    /**
     * 创建时间
     */
    CreateTime: string;
    /**
     * 付费类型
     */
    ChargeType: string;
    /**
     * 到期时间
     */
    ExpireTime: string;
    /**
     * 状态，值为以下其中之一，Running(运行中)|Creating(创建中)|CreateFailed(创建失败)|Deploying(部署中)|Updating(变更中)
     */
    State: string;
    /**
     * Master节点数量
     */
    MasterCount: string;
    /**
     * core节点数量
     */
    CoreCount: string;
    /**
     * Task节点数量
     */
    TaskCount: string;
    /**
     * 运行时间
     */
    RunningTime?: string;
    /**
     * 组件集合
     */
    AppConfigSet?: string;
    /**
     * 组件数量
     */
    AppConfigCount?: string;
    /**
     * 是否开启安全组
     */
    IsOpenSecGroup?: string;
    /**
     * 节点集合
     */
    NodeSet?: string;
    /**
     * 节点数量
     */
    NodeCount?: string;
  }[];
}

/**
 * GetUHadoopNodeType - 获取节点类型信息
 */
export interface GetUHadoopNodeTypeRequest {
  /**
   * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
   */
  Zone: string;
  /**
   * 框架版本，例如3.2.1-udh3.0，通过ListUHadoopFrameworkApp接口获取
   */
  FrameworkVersion?: string;
  /**
   * 角色，master|core|task
   */
  NodeRole?: string;
  /**
   * 机型名称
   */
  NodeType?: string;
  /**
   * 框架，例如Hadoop|MR|HDFS|StarRocks，Hadoop框架包含存储与计算服务，MR集群包含计算服务，HDFS只包含存储服务，StarRocks为StarRocks集群
   */
  Framework?: string;
}

/**
 * GetUHadoopNodeType - 获取节点类型信息
 */
export interface GetUHadoopNodeTypeResponse {
  /**
   * 类型信息
   */
  InstanceTypeSet: {
    /**
     * 机型名称
     */
    NodeType: string;
    /**
     * 机型种类，可选Outstanding(快杰机型)|General(普通机型)|BareMetal(裸金属机型)|GPU(GPU机型)四种类型
     */
    HostType: string;
    /**
     * 可用的节点类型，值为core|task|master之一
     */
    SuitableRole: string[];
    /**
     * cpu大小
     */
    CPU: string;
    /**
     * cpu内存比
     */
    CPUToMemoryRatio: string;
    /**
     * 内存大小
     */
    Memory: string;
    /**
     * 磁盘信息
     */
    DiskSet: {
      /**
       * 总磁盘大小
       */
      Size: number;
      /**
       * 磁盘角色，分Data数据盘和Boot系统盘
       */
      Type: string;
      /**
       * 可支持的磁盘类型
       */
      DiskType: string[];
      /**
       * 单块盘大小
       */
      SingleDiskSize?: number;
      /**
       * 磁盘数量
       */
      DiskNum?: number;
      /**
       * 最大磁盘数量
       */
      DiskMaxNum?: string;
      /**
       * 最大单块盘容量，单位GB
       */
      DiskMaxSize?: string;
      /**
       * 最小磁盘数量
       */
      DiskMinNum?: string;
      /**
       * 最小单块盘容量，单位GB
       */
      DiskMinSize?: string;
    }[];
    /**
     * 是否可用,该机型是否支持创建
     */
    IsUsable: string;
    /**
     * 是否支持开启安全组
     */
    IsOpenSecgroup?: string;
    /**
     * GPU型号
     */
    GpuType?: string;
    /**
     * GPU数量
     */
    GpuCount?: number;
  }[];
  /**
   * 当前可用区是否支持元数据库使用UDB
   */
  MetaDataUDBUsable?: boolean;
  /**
   * 机型可支持的节点类型
   */
  HostTypeSupportNodeType?: string;
}

/**
 * ListUHadoopFrameworkApp - 列举可选app
 */
export interface ListUHadoopFrameworkAppRequest {
  /**
   * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
   */
  Zone: string;
  /**
   * 框架，值为'Hadoop'|'HDFS'|'MR'|'StarRocks'之一,框架，例如Hadoop|MR|HDFS|StarRocks Hadoop框架包含存储与计算服务 MR集群包含计算服务 HDFS只包含存储服务,StarRocks为StarRocks集群
   */
  Framework: string;
  /**
   * 实例ID,可选。传的话，过滤出适合此集群的app信息。
   */
  InstanceId?: string;
}

/**
 * ListUHadoopFrameworkApp - 列举可选app
 */
export interface ListUHadoopFrameworkAppResponse {
  /**
   * 应用配置详情
   */
  AppConfigSet?: {
    /**
     * 需要安装的应用如：Hive,HBase, Spark,Hue,Pig等其他组件
     */
    AppName?: string;
    /**
     * 应用的版本号(0.13.1,0.98.6 等等)
     */
    AppVersion?: string;
    /**
     * 应用的状态(运行中)'Running'｜(已停止)'Stopped'｜(启动中)'Starting'｜(停止中)'Stopping'|(启动失败)'StartFailed'|(停止失败)'StopFailed'|(安装中)'Installing'|(安装失败)'InstallFailed'|(未安装)'NotInstalled',
     */
    AppStatus?: string;
  }[];
}

/**
 * ListUHadoopFrameworkAppByUseCase - 按使用场景列出uhadoop的框架和框架中的应用
 */
export interface ListUHadoopFrameworkAppByUseCaseRequest {
  /**
   * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
   */
  Zone: string;
}

/**
 * ListUHadoopFrameworkAppByUseCase - 按使用场景列出uhadoop的框架和框架中的应用
 */
export interface ListUHadoopFrameworkAppByUseCaseResponse {
  /**
   * 使用场景的app版本信息
   */
  AppConfigSet?: {
    /**
     * UHadoop版本，值为 uhadoop 3.0|uhadoop 2.2|uhadoop 3.1
     */
    ReleaseVersion?: string;
    /**
     * Hadoop版本，值为 hadoop3.2.1-udh3.0|hadoop3.3.4-udh3.1 |hadoop2.8.5-udh2.2
     */
    HadoopVersion?: string;
    /**
     * 框架，值为'Hadoop'|'HDFS'|'MR'|'StarRocks'之一,框架，例如Hadoop|MR|HDFS|StarRocks Hadoop框架包含存储与计算服务 MR集群包含计算服务 HDFS只包含存储服务,StarRocks为StarRocks集群
     */
    Framework?: string;
    /**
     * 框架版本
     */
    FrameworkVersion?: string;
    /**
     * 框架示例
     */
    UseCases?: {
      /**
       * 集群种类
       */
      Case?: string;
      /**
       * 依赖的组件
       */
      MustHas?: string;
      /**
       * 组件版本
       */
      AppVersion?: string;
    }[];
  }[];
}

/**
 * ListUHadoopInstance - 列出用户所有的uhadoop集群
 */
export interface ListUHadoopInstanceRequest {
  /**
   * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
   */
  Zone?: string;
  /**
   * 获取列表的长度限制，默认值为60
   */
  Limit?: number;
  /**
   * 获取列表的偏移，默认值为0
   */
  Offset?: number;
}

/**
 * ListUHadoopInstance - 列出用户所有的uhadoop集群
 */
export interface ListUHadoopInstanceResponse {
  /**
   * 集群信息集合
   */
  ClusterSet: {
    /**
     * 可用区
     */
    Zone: string;
    /**
     * 实例ID
     */
    InstanceId: string;
    /**
     * 实例名称
     */
    InstanceName: string;
    /**
     * 框架，值为'Hadoop'|'HDFS'|'MR'|'StarRocks'之一，Hadoop框架包含存储与计算服务，MR集群包含计算服务，HDFS只包含存储服务，StarRocks为StarRocks集群
     */
    Framework: string;
    /**
     * VPC ID
     */
    VPCId: string;
    /**
     * 子网ID
     */
    SubnetId: string;
    /**
     * 业务组ID
     */
    BusinessId: string;
    /**
     * 	Uhadoop版本，值为 uhadoop 3.0|uhadoop 2.2|uhadoop 3.1
     */
    ReleaseVersion: string;
    /**
     * Hadoop版本，值为 hadoop3.2.1-udh3.0|hadoop3.3.4-udh3.1 |hadoop2.8.5-udh2.2
     */
    HadoopVersion: string;
    /**
     * 创建时间
     */
    CreateTime: string;
    /**
     * 状态，值为以下其中之一，Running(运行中)|Creating(创建中)|CreateFailed(创建失败)|Deploying(部署中)|Updating(变更中)
     */
    State: string;
  }[];
  /**
   * 总数
   */
  TotalCount: number;
}

/**
 * RestartUHadoopService - 重启集群服务（包含start|stop|restart）
 */
export interface RestartUHadoopServiceRequest {
  /**
   * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
   */
  Zone: string;
  /**
   * 要操作的服务名。可通过ListUHadoopFrameworkApp接口获取
   */
  ServiceName: string;
  /**
   * 实例ID
   */
  InstanceId: string;
  /**
   * 应用版本，ApplicationVersion传参时，表示这次操作是整个应用所有服务。
   */
  ApplicationVersion?: string;
  /**
   * 只启动。值为false|true之一，默认false，当OnlyStart和OnlyStop同时置为true，则重启。
   */
  OnlyStart?: boolean;
  /**
   * 只停止。值为false|true之一，默认false。当OnlyStart和OnlyStop同时置为true，则重启。
   */
  OnlyStop?: boolean;
  /**
   * 要操作的NodeId数组。如果传入，则用于过滤操作哪些Node。
   */
  NodeId?: string[];
  /**
   * 要操作的NodeRole数组。如果传入，则用于过滤操作哪些Node。值为以下之一master|core|task
   */
  NodeRole?: string[];
}

/**
 * RestartUHadoopService - 重启集群服务（包含start|stop|restart）
 */
export interface RestartUHadoopServiceResponse {
  /**
   * 当前执行状态，running(操作运行中)|success(操作成功)|failed(操作失败)|killed(操作被终止)。
   */
  State?: string;
}

/**
 * UpgradeUHadoopNode - 升级uhadoop节点
 */
export interface UpgradeUHadoopNodeRequest {
  /**
   * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
   */
  Zone: string;
  /**
   * 节点角色，支持"master"|"core"|"task"
   */
  NodeRole: string;
  /**
   * 节点新机型，通过GetUHadoopNodeType接口获取
   */
  NodeType: string;
  /**
   * 实例ID
   */
  InstanceId: string;
  /**
   * 节点名称，当NodeRole不为master时必填
   */
  NodeNames?: string[];
}

/**
 * UpgradeUHadoopNode - 升级uhadoop节点
 */
export interface UpgradeUHadoopNodeResponse {}

/**
 * UpgradeUHadoopNodeDisk - 扩容集群节点磁盘
 */
export interface UpgradeUHadoopNodeDiskRequest {
  /**
   * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
   */
  Zone: string;
  /**
   * 节点角色，值为master|core|task之一
   */
  NodeRole: string;
  /**
   * 新的数据盘磁盘大小
   */
  DataDiskSize: number;
  /**
   * 实例ID
   */
  InstanceId: string;
  /**
   * 节点名称集合,当NodeRole不为master时必填
   */
  NodeNames?: string[];
  /**
   * 系统盘磁盘大小，仅支持云盘裸金属机型（系统盘和数据盘数值同时增加、只会处理系统盘参数）
   */
  BootDiskSize?: number;
}

/**
 * UpgradeUHadoopNodeDisk - 扩容集群节点磁盘
 */
export interface UpgradeUHadoopNodeDiskResponse {}
