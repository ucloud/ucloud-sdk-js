import Client from '../../core/client';
import Request from '../../core/request';
import { ConfigOptions } from '../../core/config';
import { CredentialOptions } from '../../core/credential';

/**
 * This client is used to call actions of **ukafka** service
 */
export default class UKafkaClient extends Client {
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
   * AddUKafkaInstanceNode - 给实例添加节点
   *
   * See also: https://docs.ucloud.cn/api/ukafka-api/add_ukafka_instance_node
   */
  addUKafkaInstanceNode(
    request?: AddUKafkaInstanceNodeRequest
  ): Promise<AddUKafkaInstanceNodeResponse> {
    const args = { Action: 'AddUKafkaInstanceNode', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as AddUKafkaInstanceNodeResponse
    );
  }

  /**
   * CreateUKafkaInstance - 创建实例接口。\\ 创建实例前需要按以下步骤准备必要参数：\\ 1.获取Region（地域）和 Zone（可用区），访问链接：https://docs.ucloud.cn/api/summary/regionlist 可以获取所有支持的地域和可用区；\\ 2.获取FrameworkVersion，访问链接：https://docs.ucloud.cn/api/ukafka-api/list_ukafka_framework_version，响应字段的FrameworkVersions[N].Version是支持的 Kafka 版本；\\ 3.ChargeType付费类型，可用值：Dynamic为按小时付费，Month为按月付费，Year为按年付费；\\ 4.获取NodeType机型详情，访问链接：https://docs.ucloud.cn/api/ukafka-api/get_ukafka_node_type，响应字段的NodeTypeSet[N].NodeTypeName是支持的所有机型；\\ 5.获取DiskSize磁盘大小范围 ，访问链接：https://docs.ucloud.cn/api/ukafka-api/get_ukafka_node_type，该接口响应字段的NodeTypeSet[N].MinDiskSize和NodeTypeSet[N].MaxDiskSize是磁盘大小的取值范围；\\ 6.InstanceName，自定义输入实例名称，只能包含中英文、数字以及- _ .
   *
   * See also: https://docs.ucloud.cn/api/ukafka-api/create_ukafka_instance
   */
  createUKafkaInstance(
    request?: CreateUKafkaInstanceRequest
  ): Promise<CreateUKafkaInstanceResponse> {
    const args = { Action: 'CreateUKafkaInstance', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as CreateUKafkaInstanceResponse
    );
  }

  /**
   * DeleteUKafkaInstance - 删除实例
   *
   * See also: https://docs.ucloud.cn/api/ukafka-api/delete_ukafka_instance
   */
  deleteUKafkaInstance(
    request?: DeleteUKafkaInstanceRequest
  ): Promise<DeleteUKafkaInstanceResponse> {
    const args = { Action: 'DeleteUKafkaInstance', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DeleteUKafkaInstanceResponse
    );
  }

  /**
   * DescribeUKafkaConsumer - 获取 Kafka 消费组信息
   *
   * See also: https://docs.ucloud.cn/api/ukafka-api/describe_ukafka_consumer
   */
  describeUKafkaConsumer(
    request?: DescribeUKafkaConsumerRequest
  ): Promise<DescribeUKafkaConsumerResponse> {
    const args = { Action: 'DescribeUKafkaConsumer', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DescribeUKafkaConsumerResponse
    );
  }

  /**
   * DescribeUKafkaInstance - 获取整个实例的信息。实例ID，可以通过ListUKafkaInstance 接口的ClusterSet. ClusterInstanceId 获取
   *
   * See also: https://docs.ucloud.cn/api/ukafka-api/describe_ukafka_instance
   */
  describeUKafkaInstance(
    request?: DescribeUKafkaInstanceRequest
  ): Promise<DescribeUKafkaInstanceResponse> {
    const args = { Action: 'DescribeUKafkaInstance', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DescribeUKafkaInstanceResponse
    );
  }

  /**
   * GetUKafkaNodeType - 获取节点机型配置
   *
   * See also: https://docs.ucloud.cn/api/ukafka-api/get_ukafka_node_type
   */
  getUKafkaNodeType(
    request?: GetUKafkaNodeTypeRequest
  ): Promise<GetUKafkaNodeTypeResponse> {
    const args = { Action: 'GetUKafkaNodeType', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as GetUKafkaNodeTypeResponse
    );
  }

  /**
   * IsUKafkaTopicNameExist - 检查一个topic名称是否已经在集群中了。实例ID，可以通过ListUKafkaInstance 接口的ClusterSet. ClusterInstanceId 获取
   *
   * See also: https://docs.ucloud.cn/api/ukafka-api/is_ukafka_topic_name_exist
   */
  isUKafkaTopicNameExist(
    request?: IsUKafkaTopicNameExistRequest
  ): Promise<IsUKafkaTopicNameExistResponse> {
    const args = { Action: 'IsUKafkaTopicNameExist', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as IsUKafkaTopicNameExistResponse
    );
  }

  /**
   * ListUKafkaConsumers - 列出 Kafka 消费组
   *
   * See also: https://docs.ucloud.cn/api/ukafka-api/list_ukafka_consumers
   */
  listUKafkaConsumers(
    request?: ListUKafkaConsumersRequest
  ): Promise<ListUKafkaConsumersResponse> {
    const args = { Action: 'ListUKafkaConsumers', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as ListUKafkaConsumersResponse
    );
  }

  /**
   * ListUKafkaFrameworkVersion - 列举ukafka框架版本
   *
   * See also: https://docs.ucloud.cn/api/ukafka-api/list_ukafka_framework_version
   */
  listUKafkaFrameworkVersion(
    request?: ListUKafkaFrameworkVersionRequest
  ): Promise<ListUKafkaFrameworkVersionResponse> {
    const args = { Action: 'ListUKafkaFrameworkVersion', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as ListUKafkaFrameworkVersionResponse
    );
  }

  /**
   * ListUKafkaInstance - 获取实例列表信息
   *
   * See also: https://docs.ucloud.cn/api/ukafka-api/list_ukafka_instance
   */
  listUKafkaInstance(
    request?: ListUKafkaInstanceRequest
  ): Promise<ListUKafkaInstanceResponse> {
    const args = { Action: 'ListUKafkaInstance', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as ListUKafkaInstanceResponse
    );
  }

  /**
   * ListUKafkaTopics - 获取 kafka 实例 topic  列表信息。实例ID，可以通过ListUKafkaInstance 接口的ClusterSet. ClusterInstanceId 获取
   *
   * See also: https://docs.ucloud.cn/api/ukafka-api/list_ukafka_topics
   */
  listUKafkaTopics(
    request?: ListUKafkaTopicsRequest
  ): Promise<ListUKafkaTopicsResponse> {
    const args = { Action: 'ListUKafkaTopics', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as ListUKafkaTopicsResponse
    );
  }

  /**
   * ModifyUKafkaInstanceType - 规格升降级，仅升级CPU 和内存
   *
   * See also: https://docs.ucloud.cn/api/ukafka-api/modify_ukafka_instance_type
   */
  modifyUKafkaInstanceType(
    request?: ModifyUKafkaInstanceTypeRequest
  ): Promise<ModifyUKafkaInstanceTypeResponse> {
    const args = { Action: 'ModifyUKafkaInstanceType', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as ModifyUKafkaInstanceTypeResponse
    );
  }

  /**
   * ResizeUKafkaDisk - 磁盘扩容
   *
   * See also: https://docs.ucloud.cn/api/ukafka-api/resize_ukafka_disk
   */
  resizeUKafkaDisk(
    request?: ResizeUKafkaDiskRequest
  ): Promise<ResizeUKafkaDiskResponse> {
    const args = { Action: 'ResizeUKafkaDisk', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as ResizeUKafkaDiskResponse
    );
  }
}

/**
 * AddUKafkaInstanceNode - 给实例添加节点
 */
export interface AddUKafkaInstanceNodeRequest {
  /**
   * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
   */
  Zone: string;
  /**
   * 实例ID
   */
  InstanceId: string;
  /**
   * 机型，支持的机型可通过GetUKafkaNodeType 接口返回的InstanceTypeSet[].InstanceTypeName
   */
  NodeType: string;
  /**
   * 新添加节点数量
   */
  NodeCount: string;
}

/**
 * AddUKafkaInstanceNode - 给实例添加节点
 */
export interface AddUKafkaInstanceNodeResponse {}

/**
 * CreateUKafkaInstance - 创建实例接口。\\ 创建实例前需要按以下步骤准备必要参数：\\ 1.获取Region（地域）和 Zone（可用区），访问链接：https://docs.ucloud.cn/api/summary/regionlist 可以获取所有支持的地域和可用区；\\ 2.获取FrameworkVersion，访问链接：https://docs.ucloud.cn/api/ukafka-api/list_ukafka_framework_version，响应字段的FrameworkVersions[N].Version是支持的 Kafka 版本；\\ 3.ChargeType付费类型，可用值：Dynamic为按小时付费，Month为按月付费，Year为按年付费；\\ 4.获取NodeType机型详情，访问链接：https://docs.ucloud.cn/api/ukafka-api/get_ukafka_node_type，响应字段的NodeTypeSet[N].NodeTypeName是支持的所有机型；\\ 5.获取DiskSize磁盘大小范围 ，访问链接：https://docs.ucloud.cn/api/ukafka-api/get_ukafka_node_type，该接口响应字段的NodeTypeSet[N].MinDiskSize和NodeTypeSet[N].MaxDiskSize是磁盘大小的取值范围；\\ 6.InstanceName，自定义输入实例名称，只能包含中英文、数字以及- _ .
 */
export interface CreateUKafkaInstanceRequest {
  /**
   * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
   */
  Zone: string;
  /**
   * kafka版本，支持的版本可通过ListUKafkaFrameworkVersion 接口返回字段的FrameworkVersions获取
   */
  FrameworkVersion: string;
  /**
   * VPCID
   */
  VPCId: string;
  /**
   * 子网 ID
   */
  SubnetId: string;
  /**
   * 付费方式
   */
  ChargeType: string;
  /**
   * 机型，支持的机型可通过GetUKafkaNodeType 接口返回的InstanceTypeSet[].InstanceTypeName
   */
  NodeType: string;
  /**
   * 数据盘大小。支持范围根据GetUKafkaNodeType 接口返回的InstanceTypeSet[].MaxDiskSize 和MinDiskSize获取
   */
  DiskSize: number;
  /**
   * 实例名，可自定义。只能包含中英文、数字以及- _ .
   */
  InstanceName: string;
  /**
   * 业务组，默认Default
   */
  BusinessId?: string;
  /**
   * 实例数量，默认 1
   */
  Quantity?: string;
  /**
   * 实例节点数量。默认 3 节点
   */
  NodeCount?: number;
  /**
   * kafka 日志保存时间，支持范围[1,240]。默认 72 小时
   */
  LogRetentionHours?: string;
  /**
   * 磁盘管理方式,支持值：NONE、CLEAN。默认值：NONE
   */
  DiskControllerType?: string;
  /**
   * 磁盘清理阈值，支持范围[70,90]。DiskControllerType 为CLEAN 时必填。默认值 90
   */
  DiskThreshold?: string;
  /**
   * 是否开启安全组，支持"true","false"，默认 false
   */
  IsSecurityEnabled?: string;
}

/**
 * CreateUKafkaInstance - 创建实例接口。\\ 创建实例前需要按以下步骤准备必要参数：\\ 1.获取Region（地域）和 Zone（可用区），访问链接：https://docs.ucloud.cn/api/summary/regionlist 可以获取所有支持的地域和可用区；\\ 2.获取FrameworkVersion，访问链接：https://docs.ucloud.cn/api/ukafka-api/list_ukafka_framework_version，响应字段的FrameworkVersions[N].Version是支持的 Kafka 版本；\\ 3.ChargeType付费类型，可用值：Dynamic为按小时付费，Month为按月付费，Year为按年付费；\\ 4.获取NodeType机型详情，访问链接：https://docs.ucloud.cn/api/ukafka-api/get_ukafka_node_type，响应字段的NodeTypeSet[N].NodeTypeName是支持的所有机型；\\ 5.获取DiskSize磁盘大小范围 ，访问链接：https://docs.ucloud.cn/api/ukafka-api/get_ukafka_node_type，该接口响应字段的NodeTypeSet[N].MinDiskSize和NodeTypeSet[N].MaxDiskSize是磁盘大小的取值范围；\\ 6.InstanceName，自定义输入实例名称，只能包含中英文、数字以及- _ .
 */
export interface CreateUKafkaInstanceResponse {
  /**
   * 实例资源 ID
   */
  InstanceId: string;
}

/**
 * DeleteUKafkaInstance - 删除实例
 */
export interface DeleteUKafkaInstanceRequest {
  /**
   * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
   */
  Zone: string;
  /**
   * 实例ID
   */
  InstanceId: string;
}

/**
 * DeleteUKafkaInstance - 删除实例
 */
export interface DeleteUKafkaInstanceResponse {}

/**
 * DescribeUKafkaConsumer - 获取 Kafka 消费组信息
 */
export interface DescribeUKafkaConsumerRequest {
  /**
   * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
   */
  Zone: string;
  /**
   * 实例 ID
   */
  ClusterInstanceId: string;
  /**
   * 消费组组名
   */
  ConsumerGroup: string;
  /**
   * 消费者组类型（同消费者组列表返回的类型值）
   */
  Type: string;
}

/**
 * DescribeUKafkaConsumer - 获取 Kafka 消费组信息
 */
export interface DescribeUKafkaConsumerResponse {
  /**
   * 消费者组组名
   */
  GroupName?: string;
  /**
   * 消费者组类型
   */
  Type?: string;
  /**
   * 消费者组所订阅 topic 信息
   */
  Topics?: string[];
}

/**
 * DescribeUKafkaInstance - 获取整个实例的信息。实例ID，可以通过ListUKafkaInstance 接口的ClusterSet. ClusterInstanceId 获取
 */
export interface DescribeUKafkaInstanceRequest {
  /**
   * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
   */
  Zone: string;
  /**
   * 实例ID，可以通过ListUKafkaInstance 接口的ClusterSet. ClusterInstanceId 获取
   */
  ClusterInstanceId: string;
}

/**
 * DescribeUKafkaInstance - 获取整个实例的信息。实例ID，可以通过ListUKafkaInstance 接口的ClusterSet. ClusterInstanceId 获取
 */
export interface DescribeUKafkaInstanceResponse {
  /**
   * 实例信息列表
   */
  ClusterSet: {
    /**
     * 所属可用区
     */
    Zone?: string;
    /**
     * 是否开启自动续费
     */
    AutoRenew?: string;
    /**
     * 业务组 ID
     */
    BusinessId?: string;
    /**
     * 付费类型
     */
    ChargeType?: string;
    /**
     * 实例id
     */
    ClusterInstanceId?: string;
    /**
     * 实例名称
     */
    ClusterInstanceName?: string;
    /**
     * 实例创建时间
     */
    CreateTime?: number;
    /**
     * 实例过期时间
     */
    ExpireTime?: number;
    /**
     * 实例框架
     */
    Framework?: string;
    /**
     * 实例框架版本
     */
    FrameworkVersion?: string;
    /**
     * 网络 id（已废弃）
     */
    NetworkId?: string;
    /**
     * 实例备注
     */
    Remark?: string;
    /**
     * 实例运行时间
     */
    RunningTime?: number;
    /**
     * 实例当前状态,实例状态："Running"| "Abnormal"| "Creating"| "Deleting"| "CreateFailed"| "DeleteFailed"| "Unavailable"| "Deleted"| "Updating"| "Deploying"| "Migrating"| "ExpandFailed"
     */
    State?: string;
    /**
     * 所属子网 id
     */
    SubnetId?: string;
    /**
     * 实例标记
     */
    Tag?: string;
    /**
     * 实例节点个数
     */
    UHostCount?: number;
    /**
     * 节点信息列表
     */
    UHostSet?: {
      /**
       * broker 访问端点
       */
      Endpoints: {
        /**
         * PLAINTEXT 协议访问信息
         */
        PlainText: {
          /**
           * 访问协议
           */
          Protocal?: string;
          /**
           * 访问地址
           */
          Addr?: string;
        };
        /**
         * SASL_PLAINTEXT 协议访问信息
         */
        SaslPlainText?: {
          /**
           * 访问协议
           */
          Protocal?: string;
          /**
           * 访问地址
           */
          Addr?: string;
        };
      };
      /**
       * broker id
       */
      BrokerId?: string;
      /**
       * broker 关联topic 信息
       */
      BrokerInfo?: {
        /**
         * topic 在 broker 上分布的 partition 数量
         */
        PartitionOnBroker?: string;
        /**
         * topic 在 broker上 partition 列表
         */
        Partitions?: string;
        /**
         * Topic 副本数
         */
        Replication?: number;
        /**
         * topic 名称
         */
        TopicName?: string;
        /**
         * partition 数量
         */
        TotalPartitions?: number;
      }[];
      /**
       * broker 创建信息
       */
      CreateTime?: string;
      /**
       * broker 域名
       */
      DomainName?: string;
      /**
       * broker 过期时间
       */
      ExpireTime?: number;
      /**
       * broker IP 信息
       */
      IPSet?: {
        /**
         * IP地址
         */
        IP?: string;
        /**
         * IP类型
         */
        Type?: string;
      }[];
      /**
       * broker 机型信息
       */
      InstanceGroupType?: string;
      /**
       * kafka 服务端口
       */
      KafkaPort?: number;
      /**
       * broker 备注信息
       */
      Remark?: string;
      /**
       * broker 注册资源信息
       */
      ResourceId?: string;
      /**
       * 安全组 id
       */
      SecurityGroupId?: string;
      /**
       * broker 当前状态
       */
      State?: string;
      /**
       * broker 节点配置
       */
      UHostConfig?: {
        /**
         * 节点数据盘类型
         */
        DiskType?: string;
        /**
         * 节点系统盘大小（单位G)【删除】
         */
        BootDiskSize?: number;
        /**
         * 节点 CPU 核心数
         */
        CPU?: number;
        /**
         * 节点数据盘大小（单位G)
         */
        DataDiskSize?: number;
        /**
         * 节点内存(单位MB)
         */
        Memory?: number;
        /**
         * 节点内部系统名称【删除】
         */
        OS?: string;
      };
      /**
       * 节点 id
       */
      UHostId?: string;
      /**
       * 节点名称
       */
      UHostName?: string;
      /**
       * 节点类型
       */
      UHostRole?: string;
      /**
       * 节点是否部署 zookeeper
       */
      ZooKeeper?: string;
      /**
       * zookeeper 服务端口
       */
      ZooKeeperPort?: number;
    }[];
    /**
     * 所属 VPC id
     */
    VPCId?: string;
    /**
     * 可用节点个数
     */
    ValidBrokerNum?: number;
    /**
     * 是否开启安全组
     */
    IsOpenSecgroup?: string;
  }[];
}

/**
 * GetUKafkaNodeType - 获取节点机型配置
 */
export interface GetUKafkaNodeTypeRequest {
  /**
   * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
   */
  Zone: string;
  /**
   * 传参时返回指定机型信息，参数为空时返回所有机型信息
   */
  NodeType?: string;
}

/**
 * GetUKafkaNodeType - 获取节点机型配置
 */
export interface GetUKafkaNodeTypeResponse {
  /**
   * 机型信息列表
   */
  NodeTypeSet: {
    /**
     * 机型磁盘类型信息
     */
    DiskSet?: {
      /**
       * 磁盘类型。Boot 表示系统盘，Data 表示数据盘
       */
      Type: string;
      /**
       * 磁盘大小
       */
      Size: string;
    };
    /**
     * CPU核心数
     */
    CPU?: number;
    /**
     * 磁盘类型。RSSD 表示固态云盘，SSD 表示本地固态盘，COMMON 表示本地 SATA 盘
     */
    DiskType?: string;
    /**
     * 机型名称
     */
    NodeTypeName?: string;
    /**
     * 内存大小（单位 MB）
     */
    Memory?: string;
    /**
     * 机型最大支持磁盘大小
     */
    MaxDiskSize?: number;
    /**
     * 机型最小支持磁盘大小
     */
    MinDiskSize?: number;
    /**
     * 该机型是否支持安全组
     */
    IsOpenSecGroup?: boolean;
  }[];
}

/**
 * IsUKafkaTopicNameExist - 检查一个topic名称是否已经在集群中了。实例ID，可以通过ListUKafkaInstance 接口的ClusterSet. ClusterInstanceId 获取
 */
export interface IsUKafkaTopicNameExistRequest {
  /**
   * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
   */
  Zone: string;
  /**
   * 实例ID，可以通过ListUKafkaInstance 接口的ClusterSet. ClusterInstanceId 获取
   */
  ClusterInstanceId: string;
  /**
   * 待检查的topic名称
   */
  TopicName: string;
}

/**
 * IsUKafkaTopicNameExist - 检查一个topic名称是否已经在集群中了。实例ID，可以通过ListUKafkaInstance 接口的ClusterSet. ClusterInstanceId 获取
 */
export interface IsUKafkaTopicNameExistResponse {
  /**
   * 是否已经存在
   */
  IsExist: string;
}

/**
 * ListUKafkaConsumers - 列出 Kafka 消费组
 */
export interface ListUKafkaConsumersRequest {
  /**
   * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
   */
  Zone: string;
  /**
   * 实例ID，可以通过ListUKafkaInstance 接口的ClusterSet. ClusterInstanceId 获取
   */
  ClusterInstanceId: string;
}

/**
 * ListUKafkaConsumers - 列出 Kafka 消费组
 */
export interface ListUKafkaConsumersResponse {
  /**
   * 消费者组列表
   */
  Groups?: {
    /**
     * 消费者组组名
     */
    GroupName?: string;
    /**
     * 消费者组类型
     */
    Type?: string;
    /**
     * 订阅 Topic 数量
     */
    NumOfTopics?: number;
    /**
     * 消费者组资源ID
     */
    GroupId?: string;
  }[];
}

/**
 * ListUKafkaFrameworkVersion - 列举ukafka框架版本
 */
export interface ListUKafkaFrameworkVersionRequest {
  /**
   * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
   */
  Zone: string;
}

/**
 * ListUKafkaFrameworkVersion - 列举ukafka框架版本
 */
export interface ListUKafkaFrameworkVersionResponse {
  /**
   * kafka版本
   */
  FrameworkVersions: {
    /**
     * kafka版本
     */
    Version?: string;
    /**
     * kafka 版本标签。recommend 表示推荐版本，beta 表示公测版本
     */
    Label?: string;
  }[];
}

/**
 * ListUKafkaInstance - 获取实例列表信息
 */
export interface ListUKafkaInstanceRequest {
  /**
   * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
   */
  Zone: string;
  /**
   * 默认为60
   */
  Limit?: string;
  /**
   * 默认为0
   */
  Offset?: string;
  /**
   * VPCId
   */
  VPCId?: string;
  /**
   * SubnetId
   */
  SubnetId?: string;
  /**
   * 业务组 ID
   */
  BusinessId?: string;
}

/**
 * ListUKafkaInstance - 获取实例列表信息
 */
export interface ListUKafkaInstanceResponse {
  /**
   * 实例信息
   */
  ClusterSet: {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone?: string;
    /**
     * 实例id
     */
    ClusterInstanceId?: string;
    /**
     * 实例名称
     */
    ClusterInstanceName?: string;
    /**
     * 框架
     */
    Framework?: string;
    /**
     * Kafka 框架版本
     */
    FrameworkVersion?: string;
    /**
     * 实例备注
     */
    Remark?: string;
    /**
     * 实例创建时间戳
     */
    CreateTime?: number;
    /**
     * 实例运行时间
     */
    RunningTime?: number;
    /**
     * 实例过期时间
     */
    ExpireTime?: number;
    /**
     * 是否自动续费
     */
    AutoRenew?: string;
    /**
     * 付费类型
     */
    ChargeType?: string;
    /**
     * 实例节点个数
     */
    UHostCount?: number;
    /**
     * 冗余计数（已废弃）
     */
    RedundantCount?: number;
    /**
     * 实例当前状态,集群状态："Running"| "Abnormal"| "Creating"| "Deleting"| "CreateFailed"| "DeleteFailed"| "Unavailable"| "Deleted"| "Updating"| "Deploying"| "Migrating"| "ExpandFailed"
     */
    State?: string;
    /**
     * 实例标记
     */
    Tag?: string;
    /**
     * 实例机型
     */
    InstanceGroupType?: string;
    /**
     * 所属 VPC id
     */
    VPCId?: string;
    /**
     * 所属子网 id
     */
    SubnetId?: string;
    /**
     * 业务组 ID
     */
    BusinessId?: string;
    /**
     * 事件状态未读消息（已废弃）
     */
    NewMessage?: string;
  };
  /**
   * 总数
   */
  TotalCount: string;
}

/**
 * ListUKafkaTopics - 获取 kafka 实例 topic  列表信息。实例ID，可以通过ListUKafkaInstance 接口的ClusterSet. ClusterInstanceId 获取
 */
export interface ListUKafkaTopicsRequest {
  /**
   * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
   */
  Zone: string;
  /**
   * 实例ID，可以通过ListUKafkaInstance 接口的ClusterSet. ClusterInstanceId 获取
   */
  ClusterInstanceId: string;
}

/**
 * ListUKafkaTopics - 获取 kafka 实例 topic  列表信息。实例ID，可以通过ListUKafkaInstance 接口的ClusterSet. ClusterInstanceId 获取
 */
export interface ListUKafkaTopicsResponse {
  /**
   * topic 信息列表
   */
  TopicList: {
    /**
     * topic 名称
     */
    Topic?: string;
    /**
     * 分区数量
     */
    NumOfPartition?: number;
    /**
     * 占用 broker 数量
     */
    NumOfOccupyBroker?: number;
    /**
     * 副本数量
     */
    NumOfReplica?: number;
    /**
     * 落后副本占比
     */
    UnderReplicasPer?: number;
    /**
     * topic 状态
     */
    Status?: string;
  }[];
  /**
   * topic 列表长度
   */
  Length?: number;
}

/**
 * ModifyUKafkaInstanceType - 规格升降级，仅升级CPU 和内存
 */
export interface ModifyUKafkaInstanceTypeRequest {
  /**
   * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
   */
  Zone: string;
  /**
   * 实例ID
   */
  InstanceId: string;
  /**
   * 目标机型，支持的机型可通过GetUKafkaNodeType 接口返回的InstanceTypeSet[].InstanceTypeName。仅升级CPU 和内存
   */
  NodeType: string;
}

/**
 * ModifyUKafkaInstanceType - 规格升降级，仅升级CPU 和内存
 */
export interface ModifyUKafkaInstanceTypeResponse {}

/**
 * ResizeUKafkaDisk - 磁盘扩容
 */
export interface ResizeUKafkaDiskRequest {
  /**
   * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
   */
  Zone: string;
  /**
   * 实例ID
   */
  InstanceId: string;
  /**
   * 数据盘大小。支持范围根据GetUKafkaNodeType 接口返回的InstanceTypeSet[].MaxDiskSize 和MinDiskSize获取
   */
  DiskSize: number;
}

/**
 * ResizeUKafkaDisk - 磁盘扩容
 */
export interface ResizeUKafkaDiskResponse {}
