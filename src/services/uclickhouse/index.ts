import Client from '../../core/client';
import Request from '../../core/request';
import { ConfigOptions } from '../../core/config';
import { CredentialOptions } from '../../core/credential';

/**
 * This client is used to call actions of **uclickhouse** service
 */
export default class UClickhouseClient extends Client {
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
   * CreateUClickhouseCluster - 创建UClickhouse集群
   *
   * See also: https://docs.ucloud.cn/api/uclickhouse-api/create_u_clickhouse_cluster
   */
  createUClickhouseCluster(
    request?: CreateUClickhouseClusterRequest
  ): Promise<CreateUClickhouseClusterResponse> {
    const args = { Action: 'CreateUClickhouseCluster', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as CreateUClickhouseClusterResponse
    );
  }

  /**
   * DescribeUClickhouseCluster - 获取集群信息
   *
   * See also: https://docs.ucloud.cn/api/uclickhouse-api/describe_u_clickhouse_cluster
   */
  describeUClickhouseCluster(
    request?: DescribeUClickhouseClusterRequest
  ): Promise<DescribeUClickhouseClusterResponse> {
    const args = { Action: 'DescribeUClickhouseCluster', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DescribeUClickhouseClusterResponse
    );
  }

  /**
   * DestroyUClickhouseCluster - 删除CK集群
   *
   * See also: https://docs.ucloud.cn/api/uclickhouse-api/destroy_u_clickhouse_cluster
   */
  destroyUClickhouseCluster(
    request?: DestroyUClickhouseClusterRequest
  ): Promise<DestroyUClickhouseClusterResponse> {
    const args = { Action: 'DestroyUClickhouseCluster', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DestroyUClickhouseClusterResponse
    );
  }

  /**
   * ExpandUClickhouseCluster - 集群水平扩容
   *
   * See also: https://docs.ucloud.cn/api/uclickhouse-api/expand_u_clickhouse_cluster
   */
  expandUClickhouseCluster(
    request?: ExpandUClickhouseClusterRequest
  ): Promise<ExpandUClickhouseClusterResponse> {
    const args = { Action: 'ExpandUClickhouseCluster', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as ExpandUClickhouseClusterResponse
    );
  }

  /**
   * GetUClickhouseClusterCreateOption - 获取Clickhouse的创建配置项
   *
   * See also: https://docs.ucloud.cn/api/uclickhouse-api/get_u_clickhouse_cluster_create_option
   */
  getUClickhouseClusterCreateOption(
    request?: GetUClickhouseClusterCreateOptionRequest
  ): Promise<GetUClickhouseClusterCreateOptionResponse> {
    const args = {
      Action: 'GetUClickhouseClusterCreateOption',
      ...(request || {}),
    };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as GetUClickhouseClusterCreateOptionResponse
    );
  }

  /**
   * ListUClickhouseCluster - 获取UClickhouse集群列表
   *
   * See also: https://docs.ucloud.cn/api/uclickhouse-api/list_u_clickhouse_cluster
   */
  listUClickhouseCluster(
    request?: ListUClickhouseClusterRequest
  ): Promise<ListUClickhouseClusterResponse> {
    const args = { Action: 'ListUClickhouseCluster', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as ListUClickhouseClusterResponse
    );
  }

  /**
   * ResizeUClickhouseCluster - 集群改配
   *
   * See also: https://docs.ucloud.cn/api/uclickhouse-api/resize_u_clickhouse_cluster
   */
  resizeUClickhouseCluster(
    request?: ResizeUClickhouseClusterRequest
  ): Promise<ResizeUClickhouseClusterResponse> {
    const args = { Action: 'ResizeUClickhouseCluster', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as ResizeUClickhouseClusterResponse
    );
  }

  /**
   * RestartUClickhouseClusterService - 重启集群的UClickhouse服务
   *
   * See also: https://docs.ucloud.cn/api/uclickhouse-api/restart_u_clickhouse_cluster_service
   */
  restartUClickhouseClusterService(
    request?: RestartUClickhouseClusterServiceRequest
  ): Promise<RestartUClickhouseClusterServiceResponse> {
    const args = {
      Action: 'RestartUClickhouseClusterService',
      ...(request || {}),
    };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as RestartUClickhouseClusterServiceResponse
    );
  }
}

/**
 * CreateUClickhouseCluster - 创建UClickhouse集群
 */
export interface CreateUClickhouseClusterRequest {
  /**
   * 集群机型，可通过GetUClickhouseClusterCreateOption接口获取具体值
   */
  ClickhouseMachineTypeId: string;
  /**
   * 数据盘类型，可通过GetUClickhouseClusterCreateOption接口获取具体值
   */
  DataDiskType: string;
  /**
   * Clickhouse版本，可通过GetUClickhouseClusterCreateOption接口获取具体版本
   */
  ClickhouseVersion: string;
  /**
   * VPC ID
   */
  VPCId: string;
  /**
   * 子网ID
   */
  SubnetId: string;
  /**
   * 集群管理员密码，密码规则：1.密码长度限8-32个字符2.不能包含[A-Z],[a-z],[0-9]和[@#%^*+=_;:,?!&()-]之外的字符3.需要同时包含两项或以上（大写字母/小写字母/数字/特殊符号）
   */
  AdminPassword: string;
  /**
   * 分片数量，若传递，则至少1个分片,默认值为1
   */
  ShardCount?: number;
  /**
   * 副本数量，取值为1或2，1为单副本（非高可用），2为双副本（高可用），默认值为高可用（即为2）
   */
  ReplicateCount?: number;
  /**
   * 数据盘大小，最小100，步长为50，默认值为100，单位GB
   */
  DataDiskSize?: number;
  /**
   * 付费类型，枚举值：Year（年付），Month（月付），Dynamic（时付），默认值为Month,月付
   */
  ChargeType?: string;
  /**
   * 购买时长，默认值为1。月付时，此参数传0，代表购买至月末
   */
  Quantity?: number;
  /**
   * 备份任务ID，从备份恢复时，该字段必传，此值为备份任务ID，可以从原集群备份任务列表（ListUClickhouseBackups）获取
   */
  BackupId?: string;
  /**
   * 实例名称名称规则：1.长度为1-50位的字符2.不能包含_,中文,[A-Z],[a-z],[0-9]之外的非法字符，集群名称默认为clickhouse
   */
  ClusterName?: string;
  /**
   * 是否Zookeeper高可用，true为zookeeper高可用，false为非高可用，默认为true，高可用
   */
  IsZookeeperHA?: boolean;
  /**
   * 是否开启安全组，true为开启，false为不开启，默认为false，不开启安全组
   */
  IsSecGroup?: string;
  /**
   * 是否多可用区，默认为false
   */
  IsMultiZone?: string;
  /**
   * Zookeeper机型ID，IsZookeeperHA为true时，必传，可通过GetUClickhouseClusterCreateOption接口获取具体值
   */
  ZookeeperMachineTypeId?: string;
  /**
   * Zookeeper数据盘类型，IsZookeeperHA为true时，必传，可通过GetUClickhouseClusterCreateOption接口获取具体值
   */
  ZookeeperDataDiskType?: string;
  /**
   * Zookeeper数据盘大小，IsZookeeperHA为true时，必传，最小100，步长为50
   */
  ZookeeperDataDiskSize?: string;
  /**
   * 安全组ID，IsSecGroup为true时，必传
   */
  SecGroupIds?: string;
  /**
   * 【数组】可用区名称，IsMultiZone为true时，必传，可通过ListUClickhouseAvailableZone获取支持的可用区
   */
  MultiZones?: string[];
  /**
   *
   */
  Labels?: {
    /**
     * 标签的key
     */
    Key?: string;
    /**
     * 标签的value
     */
    Value?: string;
  }[];
}

/**
 * CreateUClickhouseCluster - 创建UClickhouse集群
 */
export interface CreateUClickhouseClusterResponse {
  /**
   * 返回数据
   */
  Data: {
    /**
     * 集群ID
     */
    ClusterId: string;
  };
}

/**
 * DescribeUClickhouseCluster - 获取集群信息
 */
export interface DescribeUClickhouseClusterRequest {
  /**
   * 集群ID
   */
  ClusterId: string;
}

/**
 * DescribeUClickhouseCluster - 获取集群信息
 */
export interface DescribeUClickhouseClusterResponse {
  /**
   * 返回数据
   */
  Data: {
    /**
     * Zookeeper节点列表，为空时，说明该集群没有zookeeper集群
     */
    ZookeeperNodes: {
      /**
       * 可用区名称
       */
      Zone: string;
      /**
       * 节点ID
       */
      NodeId: string;
      /**
       * 集群ID
       */
      ClusterId: string;
      /**
       * 节点名称
       */
      NodeName: string;
      /**
       * CPU
       */
      CPU: number;
      /**
       * 内存
       */
      Memory: number;
      /**
       * 系统盘大小
       */
      SysDiskSize: number;
      /**
       * 系统盘类型
       */
      SysDiskType: string;
      /**
       * 数据盘大小
       */
      DataDiskSize: number;
      /**
       * 数据盘类型
       */
      DataDiskType: string;
      /**
       * 创建时间
       */
      CreateTimestamp: number;
      /**
       * 机型
       */
      MachineType: string;
      /**
       * zookeeper的myid
       */
      ZookeeperMyId: string;
      /**
       * 服务状态：RUNNING（运行中）、STARTING（启动中）、STOPPED（已停止）、RESTARTING（重启中）
       */
      ServiceStatus: string;
      /**
       * 资源ID
       */
      ResourceId: string;
    }[];
    /**
     * Clickhouse节点列表
     */
    ClickhouseNodes: {
      /**
       * 可用区名称
       */
      Zone: string;
      /**
       * 节点ID
       */
      NodeId: string;
      /**
       * 集群ID
       */
      ClusterId: string;
      /**
       * 节点名称
       */
      NodeName: string;
      /**
       * CPU大小
       */
      CPU: number;
      /**
       * 内存，GB
       */
      Memory: number;
      /**
       * 系统盘大小,GB
       */
      SysDiskSize: number;
      /**
       * 系统盘类型
       */
      SysDiskType: string;
      /**
       * 数据盘大小,GB
       */
      DataDiskSize: number;
      /**
       * 数据盘类型
       */
      DataDiskType: string;
      /**
       * ipv4
       */
      IPv4: string;
      /**
       * 创建时间
       */
      CreateTimestamp: number;
      /**
       * 机型
       */
      MachineType: string;
      /**
       * 分片组
       */
      ShardGroup: string;
      /**
       * 服务状态：RUNNING（运行中）、STARTING（启动中）、STOPPED（已停止）、RESTARTING（重启中）
       */
      ServiceStatus: string;
      /**
       * 资源ID
       */
      ResourceId: string;
    }[];
    /**
     * 支付信息
     */
    Payment: {
      /**
       * 创建时间
       */
      CreateTimestamp: number;
      /**
       * 过期时间
       */
      ExpireTimestamp: number;
      /**
       * 支付类型
       */
      ChargeType: string;
      /**
       * 价格
       */
      Price: number;
      /**
       * 原始价格
       */
      OriginalPrice: number;
      /**
       * 资源ID
       */
      ResourceId: string;
    };
    /**
     * 集群信息
     */
    Cluster: {
      /**
       * 集群ID
       */
      ClusterId: string;
      /**
       * 公司ID
       */
      TopOrganizationId: number;
      /**
       * 项目ID
       */
      OrganizationId: number;
      /**
       * 集群名称
       */
      ClusterName: string;
      /**
       * VPCID
       */
      VPCId: string;
      /**
       * 子网ID
       */
      SubnetId: string;
      /**
       * 集群版本
       */
      ClickhouseVersion: string;
      /**
       * Zookeeper版本
       */
      ZookeeperVersion: string;
      /**
       * 机型
       */
      MachineType: string;
      /**
       * 集群状态：CREATING（创建中）、RUNNING（运行中）、RESIZING（变配中）、RESTARTING（重启中）、UPGRADING（升级中）、DESTROYING（销毁中）、DESTROYED（已删除）、CREATE_FAILED（创建失败）、RESTART_FAILED（重启失败）、DESTROY_FAILED（删除失败）、RESIZE_FAILED（变配失败）、BACKUP_RESTORING（备份恢复中）、BACKUP_RESTORE_FAILED（备份恢复失败）、EXPANDING（扩容中）、EXPAND_FAILED（扩容失败）
       */
      Status: string;
      /**
       * 分片数
       */
      ShardCount: number;
      /**
       * 副本数
       */
      ReplicateCount: number;
      /**
       * 集群创建时间
       */
      CreateTimestamp: number;
      /**
       * Clickhouse机型ID
       */
      ClickhouseMachineTypeId: string;
      /**
       * Clickhouse机型名称
       */
      ClickhouseMachineTypeName: string;
      /**
       * 地域ID
       */
      RegionId: number;
      /**
       * Zookeeper机型ID
       */
      ZookeeperMachineTypeId: string;
      /**
       * Zookeeper机型名称
       */
      ZookeeperMachineTypeName: string;
      /**
       * Clickhouse数据盘类型
       */
      ClickhouseDataDiskType: string;
      /**
       * Clickhouse数据盘大小
       */
      ClickhouseDataDiskSize: number;
      /**
       * Zookeeper数据盘类型
       */
      ZookeeperDataDiskType: string;
      /**
       * Zookeeper数据盘大小
       */
      ZookeeperDataDiskSize: number;
      /**
       * Clickhouse节点CPU
       */
      ClickhouseNodeCPU: number;
      /**
       * Clickhouse内存
       */
      ClickhouseNodeMemory: number;
      /**
       * Zookeeper节点CPU
       */
      ZookeeperNodeCPU: number;
      /**
       * Zookeeper节点内存
       */
      ZookeeperNodeMemory: number;
      /**
       * Zookeeper是否高可用
       */
      IsZookeeperHA: string;
      /**
       * 实例是否开启安全组
       */
      IsSecgroup: string;
      /**
       * 实例是否开启备份
       */
      IsBackup: string;
      /**
       * 实例是否开启冷热分层
       */
      IsTieredStorage: string;
      /**
       * 实例所在可用区
       */
      MultiZones: string[];
      /**
       * 实例过期时间
       */
      ExpireTimestamp: number;
    };
  };
}

/**
 * DestroyUClickhouseCluster - 删除CK集群
 */
export interface DestroyUClickhouseClusterRequest {
  /**
   * 集群ID
   */
  ClusterId: string;
}

/**
 * DestroyUClickhouseCluster - 删除CK集群
 */
export interface DestroyUClickhouseClusterResponse {}

/**
 * ExpandUClickhouseCluster - 集群水平扩容
 */
export interface ExpandUClickhouseClusterRequest {
  /**
   * 集群ID
   */
  ClusterId: string;
  /**
   * 扩容后集群的节点数量，集群为高可用时，需要传入偶数个节点
   */
  TotalNodeCount: number;
  /**
   * 水平扩容时，选择某一个原节点的ID，用于同步表结构/用户信息。不传递时，表示不同步表结构/用户信息，仅水平扩容节点数量
   */
  SyncNodeId?: string;
}

/**
 * ExpandUClickhouseCluster - 集群水平扩容
 */
export interface ExpandUClickhouseClusterResponse {}

/**
 * GetUClickhouseClusterCreateOption - 获取Clickhouse的创建配置项
 */
export interface GetUClickhouseClusterCreateOptionRequest {}

/**
 * GetUClickhouseClusterCreateOption - 获取Clickhouse的创建配置项
 */
export interface GetUClickhouseClusterCreateOptionResponse {
  /**
   * 数据
   */
  Data: {
    /**
     * 支持的CK版本
     */
    ClickhouseVersions: {
      /**
       * 版本号
       */
      Version: string;
      /**
       * 版本名称
       */
      VersionName: string;
    }[];
    /**
     * 支持的CK机型
     */
    ClickhouseMachineTypes: {
      /**
       * CK机型名称
       */
      ClickhouseMachineTypeName: string;
      /**
       * CK机型可选项
       */
      ClickhouseMachineTypeOptions: {
        /**
         * Clickhouse机型ID
         */
        ClickhouseMachineTypeId: string;
        /**
         * 机型
         */
        MachineType: string;
        /**
         * CPU大小
         */
        CPU: number;
        /**
         * 内存大小，GB
         */
        Memory: number;
        /**
         * 数据盘列表
         */
        DataDisks: {
          /**
           * 磁盘类型
           */
          DiskType: string;
          /**
           * 最小值，GB
           */
          MinDiskSize: number;
          /**
           * 最大值，GB
           */
          MaxDiskSize: number;
          /**
           * 默认大小，GB
           */
          DefaultDataDiskSize: number;
          /**
           * 步长，GB
           */
          Step: number;
        }[];
        /**
         * 允许创建的节点个数
         */
        NodeCounts: number[];
      }[];
      /**
       * 机型是否支持安全组
       */
      IsSecgroupMachineType: string;
    }[];
    /**
     * 实例可创建的最大节点数量
     */
    MaxNodeCount: number;
    /**
     * 支持的Zookeeper机型
     */
    ZookeeperMachineTypes: {
      /**
       * CK机型名称
       */
      ClickhouseMachineTypeName: string;
      /**
       * CK机型可选项
       */
      ClickhouseMachineTypeOptions: {
        /**
         * Clickhouse机型ID
         */
        ClickhouseMachineTypeId: string;
        /**
         * 机型
         */
        MachineType: string;
        /**
         * CPU大小
         */
        CPU: number;
        /**
         * 内存大小，GB
         */
        Memory: number;
        /**
         * 数据盘列表
         */
        DataDisks: {
          /**
           * 磁盘类型
           */
          DiskType: string;
          /**
           * 最小值，GB
           */
          MinDiskSize: number;
          /**
           * 最大值，GB
           */
          MaxDiskSize: number;
          /**
           * 默认大小，GB
           */
          DefaultDataDiskSize: number;
          /**
           * 步长，GB
           */
          Step: number;
        }[];
        /**
         * 允许创建的节点个数
         */
        NodeCounts: number[];
      }[];
      /**
       * 机型是否支持安全组
       */
      IsSecgroupMachineType: string;
    }[];
  };
}

/**
 * ListUClickhouseCluster - 获取UClickhouse集群列表
 */
export interface ListUClickhouseClusterRequest {}

/**
 * ListUClickhouseCluster - 获取UClickhouse集群列表
 */
export interface ListUClickhouseClusterResponse {
  /**
   * 返回数据
   */
  Data: {
    /**
     * 集群列表
     */
    Clusters: {
      /**
       * 集群ID
       */
      ClusterId: string;
      /**
       * 公司ID
       */
      TopOrganizationId: number;
      /**
       * 项目ID
       */
      OrganizationId: number;
      /**
       * 集群名称
       */
      ClusterName: string;
      /**
       * VPCID
       */
      VPCId: string;
      /**
       * 子网ID
       */
      SubnetId: string;
      /**
       * 集群版本
       */
      ClickhouseVersion: string;
      /**
       * Zookeeper版本
       */
      ZookeeperVersion: string;
      /**
       * 机型
       */
      MachineType: string;
      /**
       * 集群状态：CREATING（创建中）、RUNNING（运行中）、RESIZING（变配中）、RESTARTING（重启中）、UPGRADING（升级中）、DESTROYING（销毁中）、DESTROYED（已删除）、CREATE_FAILED（创建失败）、RESTART_FAILED（重启失败）、DESTROY_FAILED（删除失败）、RESIZE_FAILED（变配失败）、BACKUP_RESTORING（备份恢复中）、BACKUP_RESTORE_FAILED（备份恢复失败）、EXPANDING（扩容中）、EXPAND_FAILED（扩容失败）
       */
      Status: string;
      /**
       * 分片数
       */
      ShardCount: number;
      /**
       * 副本数
       */
      ReplicateCount: number;
      /**
       * 集群创建时间
       */
      CreateTimestamp: number;
      /**
       * Clickhouse机型ID
       */
      ClickhouseMachineTypeId: string;
      /**
       * Clickhouse机型名称
       */
      ClickhouseMachineTypeName: string;
      /**
       * 地域ID
       */
      RegionId: number;
      /**
       * Zookeeper机型ID
       */
      ZookeeperMachineTypeId: string;
      /**
       * Zookeeper机型名称
       */
      ZookeeperMachineTypeName: string;
      /**
       * Clickhouse数据盘类型
       */
      ClickhouseDataDiskType: string;
      /**
       * Clickhouse数据盘大小
       */
      ClickhouseDataDiskSize: number;
      /**
       * Zookeeper数据盘类型
       */
      ZookeeperDataDiskType: string;
      /**
       * Zookeeper数据盘大小
       */
      ZookeeperDataDiskSize: number;
      /**
       * Clickhouse节点CPU
       */
      ClickhouseNodeCPU: number;
      /**
       * Clickhouse内存
       */
      ClickhouseNodeMemory: number;
      /**
       * Zookeeper节点CPU
       */
      ZookeeperNodeCPU: number;
      /**
       * Zookeeper节点内存
       */
      ZookeeperNodeMemory: number;
      /**
       * Zookeeper是否高可用
       */
      IsZookeeperHA: string;
      /**
       * 实例是否开启安全组
       */
      IsSecgroup: string;
      /**
       * 实例是否开启备份
       */
      IsBackup: string;
      /**
       * 实例是否开启冷热分层
       */
      IsTieredStorage: string;
      /**
       * 实例所在可用区
       */
      MultiZones: string[];
      /**
       * 实例过期时间
       */
      ExpireTimestamp: number;
    };
    /**
     * 集群总数
     */
    TotalCount: number;
  };
}

/**
 * ResizeUClickhouseCluster - 集群改配
 */
export interface ResizeUClickhouseClusterRequest {
  /**
   * 集群ID
   */
  ClusterId: string;
  /**
   * 目标机型ID，可通过GetUClickhouseClusterCreateOption接口获取具体值，与TargetDataDiskSize不能同时为空
   */
  TargetMachineTypeId?: string;
  /**
   * 目标磁盘大小，单位GB，只能扩容，与TargetMachineTypeId不能同时为空
   */
  TargetDataDiskSize?: number;
  /**
   * 是否为zookeeper节点，为true时表示升级zookeeper节点规格，为false时表示升级clickhouse节点规格，默认为false
   */
  IsZooKeeperNode?: boolean;
}

/**
 * ResizeUClickhouseCluster - 集群改配
 */
export interface ResizeUClickhouseClusterResponse {}

/**
 * RestartUClickhouseClusterService - 重启集群的UClickhouse服务
 */
export interface RestartUClickhouseClusterServiceRequest {
  /**
   * 集群ID
   */
  ClusterId: string;
}

/**
 * RestartUClickhouseClusterService - 重启集群的UClickhouse服务
 */
export interface RestartUClickhouseClusterServiceResponse {}
