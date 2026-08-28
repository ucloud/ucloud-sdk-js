import Client from '../../core/client';
import Request from '../../core/request';
import { ConfigOptions } from '../../core/config';
import { CredentialOptions } from '../../core/credential';

/**
 * This client is used to call actions of **uk8s** service
 */
export default class UK8SClient extends Client {
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
   * AddUK8SExistingUHost - 将预先创建好的云主机加入到UK8S集群，需要注意的是，该云主机依然会执行重装系统的操作。
   *
   * See also: https://docs.ucloud.cn/api/uk8s-api/add_uk8s_existing_uhost
   */
  addUK8SExistingUHost(
    request?: AddUK8SExistingUHostRequest
  ): Promise<AddUK8SExistingUHostResponse> {
    const args = { Action: 'AddUK8SExistingUHost', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as AddUK8SExistingUHostResponse
    );
  }

  /**
   * AddUK8SNodeGroup - 添加UK8S节点池
   *
   * See also: https://docs.ucloud.cn/api/uk8s-api/add_uk8s_node_group
   */
  addUK8SNodeGroup(
    request?: AddUK8SNodeGroupRequest
  ): Promise<AddUK8SNodeGroupResponse> {
    const args = { Action: 'AddUK8SNodeGroup', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as AddUK8SNodeGroupResponse
    );
  }

  /**
   * AddUK8SPHostNode - 为UK8S集群添加一台或多台物理云主机类型的节点。
   *
   * See also: https://docs.ucloud.cn/api/uk8s-api/add_uk8s_phost_node
   */
  addUK8SPHostNode(
    request?: AddUK8SPHostNodeRequest
  ): Promise<AddUK8SPHostNodeResponse> {
    const args = { Action: 'AddUK8SPHostNode', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as AddUK8SPHostNodeResponse
    );
  }

  /**
   * AddUK8SUHostNode - 为UK8S集群添加一台Node节点，机型类型为云主机
   *
   * See also: https://docs.ucloud.cn/api/uk8s-api/add_uk8s_uhost_node
   */
  addUK8SUHostNode(
    request?: AddUK8SUHostNodeRequest
  ): Promise<AddUK8SUHostNodeResponse> {
    const args = { Action: 'AddUK8SUHostNode', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as AddUK8SUHostNodeResponse
    );
  }

  /**
   * CreateUK8SClusterV2 - 创建UK8S集群
   *
   * See also: https://docs.ucloud.cn/api/uk8s-api/create_uk8s_cluster_v2
   */
  createUK8SClusterV2(
    request?: CreateUK8SClusterV2Request
  ): Promise<CreateUK8SClusterV2Response> {
    const args = { Action: 'CreateUK8SClusterV2', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as CreateUK8SClusterV2Response
    );
  }

  /**
   * CreateUK8SULSConfig - 创建 LogConfig 自定义资源，用于声明式地定义日志采集规则
   *
   * See also: https://docs.ucloud.cn/api/uk8s-api/create_uk8s_uls_config
   */
  createUK8SULSConfig(
    request?: CreateUK8SULSConfigRequest
  ): Promise<CreateUK8SULSConfigResponse> {
    const args = { Action: 'CreateUK8SULSConfig', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as CreateUK8SULSConfigResponse
    );
  }

  /**
   * DelUK8SCluster - 删除UK8S集群
   *
   * See also: https://docs.ucloud.cn/api/uk8s-api/del_uk8s_cluster
   */
  delUK8SCluster(
    request?: DelUK8SClusterRequest
  ): Promise<DelUK8SClusterResponse> {
    const args = { Action: 'DelUK8SCluster', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DelUK8SClusterResponse
    );
  }

  /**
   * DelUK8SClusterNodeV2 - 删除集群中的Node节点，删除前务必先将其中的Pod驱逐。
   *
   * See also: https://docs.ucloud.cn/api/uk8s-api/del_uk8s_cluster_node_v2
   */
  delUK8SClusterNodeV2(
    request?: DelUK8SClusterNodeV2Request
  ): Promise<DelUK8SClusterNodeV2Response> {
    const args = { Action: 'DelUK8SClusterNodeV2', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DelUK8SClusterNodeV2Response
    );
  }

  /**
   * DeleteUK8SULSConfig - 删除指定UK8S集群的日志采集规则。
   *
   * See also: https://docs.ucloud.cn/api/uk8s-api/delete_uk8s_uls_config
   */
  deleteUK8SULSConfig(
    request?: DeleteUK8SULSConfigRequest
  ): Promise<DeleteUK8SULSConfigResponse> {
    const args = { Action: 'DeleteUK8SULSConfig', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DeleteUK8SULSConfigResponse
    );
  }

  /**
   * DescribeUK8SCluster - 获取集群信息
   *
   * See also: https://docs.ucloud.cn/api/uk8s-api/describe_uk8s_cluster
   */
  describeUK8SCluster(
    request?: DescribeUK8SClusterRequest
  ): Promise<DescribeUK8SClusterResponse> {
    const args = { Action: 'DescribeUK8SCluster', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DescribeUK8SClusterResponse
    );
  }

  /**
   * DescribeUK8SImage - 获取UK8S支持的Node节点操作系统，可基于该操作系统制定自定义镜像
   *
   * See also: https://docs.ucloud.cn/api/uk8s-api/describe_uk8s_image
   */
  describeUK8SImage(
    request?: DescribeUK8SImageRequest
  ): Promise<DescribeUK8SImageResponse> {
    const args = { Action: 'DescribeUK8SImage', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DescribeUK8SImageResponse
    );
  }

  /**
   * DescribeUK8SNode - 用于获取 UK8S 节点详情
   *
   * See also: https://docs.ucloud.cn/api/uk8s-api/describe_uk8s_node
   */
  describeUK8SNode(
    request?: DescribeUK8SNodeRequest
  ): Promise<DescribeUK8SNodeResponse> {
    const args = { Action: 'DescribeUK8SNode', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DescribeUK8SNodeResponse
    );
  }

  /**
   * GetClusterConfig - 获取集群配置文件，管理集群的凭证
   *
   * See also: https://docs.ucloud.cn/api/uk8s-api/get_cluster_config
   */
  getClusterConfig(
    request?: GetClusterConfigRequest
  ): Promise<GetClusterConfigResponse> {
    const args = { Action: 'GetClusterConfig', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as GetClusterConfigResponse
    );
  }

  /**
   * GetUK8SVersions - 获取支持创建的UK8S集群版本、Containerd版本
   *
   * See also: https://docs.ucloud.cn/api/uk8s-api/get_uk8s_versions
   */
  getUK8SVersions(
    request?: GetUK8SVersionsRequest
  ): Promise<GetUK8SVersionsResponse> {
    const args = { Action: 'GetUK8SVersions', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as GetUK8SVersionsResponse
    );
  }

  /**
   * ListUK8SClusterNodeV2 - 获取UK8S集群节点信息
   *
   * See also: https://docs.ucloud.cn/api/uk8s-api/list_uk8s_cluster_node_v2
   */
  listUK8SClusterNodeV2(
    request?: ListUK8SClusterNodeV2Request
  ): Promise<ListUK8SClusterNodeV2Response> {
    const args = { Action: 'ListUK8SClusterNodeV2', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as ListUK8SClusterNodeV2Response
    );
  }

  /**
   * ListUK8SClusterV2 - 获取UK8S集群列表信息
   *
   * See also: https://docs.ucloud.cn/api/uk8s-api/list_uk8s_cluster_v2
   */
  listUK8SClusterV2(
    request?: ListUK8SClusterV2Request
  ): Promise<ListUK8SClusterV2Response> {
    const args = { Action: 'ListUK8SClusterV2', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as ListUK8SClusterV2Response
    );
  }

  /**
   * ListUK8SNodeGroup - 列出UK8S节点池
   *
   * See also: https://docs.ucloud.cn/api/uk8s-api/list_uk8s_node_group
   */
  listUK8SNodeGroup(
    request?: ListUK8SNodeGroupRequest
  ): Promise<ListUK8SNodeGroupResponse> {
    const args = { Action: 'ListUK8SNodeGroup', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as ListUK8SNodeGroupResponse
    );
  }

  /**
   * ListUK8SULSConfig - 查询 UK8S 的 ULSConfig
   *
   * See also: https://docs.ucloud.cn/api/uk8s-api/list_uk8s_uls_config
   */
  listUK8SULSConfig(
    request?: ListUK8SULSConfigRequest
  ): Promise<ListUK8SULSConfigResponse> {
    const args = { Action: 'ListUK8SULSConfig', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as ListUK8SULSConfigResponse
    );
  }

  /**
   * RemoveUK8SNodeGroup - 删除UK8S节点池
   *
   * See also: https://docs.ucloud.cn/api/uk8s-api/remove_uk8s_node_group
   */
  removeUK8SNodeGroup(
    request?: RemoveUK8SNodeGroupRequest
  ): Promise<RemoveUK8SNodeGroupResponse> {
    const args = { Action: 'RemoveUK8SNodeGroup', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as RemoveUK8SNodeGroupResponse
    );
  }

  /**
   * UpdateUK8SULSConfig - 更新指定UK8S集群的日志采集规则。
   *
   * See also: https://docs.ucloud.cn/api/uk8s-api/update_uk8s_uls_config
   */
  updateUK8SULSConfig(
    request?: UpdateUK8SULSConfigRequest
  ): Promise<UpdateUK8SULSConfigResponse> {
    const args = { Action: 'UpdateUK8SULSConfig', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as UpdateUK8SULSConfigResponse
    );
  }
}

/**
 * AddUK8SExistingUHost - 将预先创建好的云主机加入到UK8S集群，需要注意的是，该云主机依然会执行重装系统的操作。
 */
export interface AddUK8SExistingUHostRequest {
  /**
   * 可用区。参见 [可用区列表](../summary/regionlist.html)
   */
  Zone?: string;
  /**
   * Node节点密码。请遵照[[api:uhost-api:specification|字段规范]]设定密码。密码需使用base64进行编码，如下：# echo -n Password1 | base64
   */
  Password: string;
  /**
   * UK8S集群ID。 可从UK8S控制台获取。
   */
  ClusterId: string;
  /**
   * 云主机Id，为了保证节点正常运行，该主机配置不得低于2C4G。
   */
  UHostId: string;
  /**
   * 默认110，生产环境建议小于等于110。
   */
  MaxPods?: number;
  /**
   * Node节点标签。key=value形式,多组用”,“隔开，最多5组。 如env=pro,type=game
   */
  Labels?: string;
  /**
   * 该云主机所属子网Id。
   */
  SubnetId?: string;
  /**
   * 镜像 Id，不填时后台程序会自动选用一个可用的镜像 Id，支持用户自定义镜像，自定义镜像必须基于基础镜像制作。
   */
  ImageId?: string;
  /**
   * 用于标示添加完节点后是否将节点临时禁用. 传入 "true" 表示禁用,传入其它或不传表示不禁用
   */
  DisableSchedule?: boolean;
  /**
   * 用户自定义数据。当镜像支持Cloud-init Feature时可填写此字段。注意：1、总数据量大小不超过 16K；2、使用base64编码。
   */
  UserData?: string;
  /**
   * 用户自定义Shell脚本。与UserData的区别在于InitScript在节点初始化完毕后才执行，UserData则是云主机初始化时执行。
   */
  InitScript?: string;
}

/**
 * AddUK8SExistingUHost - 将预先创建好的云主机加入到UK8S集群，需要注意的是，该云主机依然会执行重装系统的操作。
 */
export interface AddUK8SExistingUHostResponse {}

/**
 * AddUK8SNodeGroup - 添加UK8S节点池
 */
export interface AddUK8SNodeGroupRequest {
  /**
   * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
   */
  Zone?: string;
  /**
   * 节点池名字
   */
  NodeGroupName: string;
  /**
   * 集群ID
   */
  ClusterId: string;
  /**
   * 镜像ID
   */
  ImageId?: string;
  /**
   * 云主机机型。枚举值["N", "C", "G", "O", "OS"]。参考[[api:uhost-api:uhost_type|云主机机型说明]]。
   */
  MachineType?: string;
  /**
   * 最低cpu平台，枚举值["Intel/Auto", "Intel/IvyBridge", "Intel/Haswell", "Intel/Broadwell", "Intel/Skylake", "Intel/Cascadelake"；"Intel/CascadelakeR"; “Amd/Epyc2”,"Amd/Auto"],默认值是"Intel/Auto"
   */
  MinimalCpuPlatform?: string;
  /**
   * GPU卡核心数。仅GPU机型支持此字段（可选范围与MachineType+GpuType相关）
   */
  CPU?: number;
  /**
   * 内存大小。单位：MB
   */
  Mem?: number;
  /**
   * GPU类型
   */
  GpuType?: string;
  /**
   * GPU卡核心数
   */
  GPU?: number;
  /**
   * 磁盘类型
   */
  BootDiskType?: string;
  /**
   * 数据磁盘大小
   */
  DataDiskSize?: number;
  /**
   * 磁盘类型
   */
  DataDiskType?: string;
  /**
   * 业务组
   */
  Tag?: string;
  /**
   * 计费模式
   */
  ChargeType?: string;
  /**
   * 系统盘大小，单位GB。默认40。范围：[40, 500]。注意SSD本地盘无法调整。
   */
  BootDiskSize?: number;
  /**
   * 子网 ID。默认为集群创建时填写的子网ID，也可以填写集群同VPC内的子网ID。
   */
  SubnetId?: string;
}

/**
 * AddUK8SNodeGroup - 添加UK8S节点池
 */
export interface AddUK8SNodeGroupResponse {
  /**
   * 节点池ID
   */
  NodeGroupId: string;
}

/**
 * AddUK8SPHostNode - 为UK8S集群添加一台或多台物理云主机类型的节点。
 */
export interface AddUK8SPHostNodeRequest {
  /**
   * 可用区。参见 [可用区列表](../summary/regionlist.html)
   */
  Zone: string;
  /**
   * UK8S集群ID。 可从UK8S控制台获取。
   */
  ClusterId: string;
  /**
   * 最大创建Node节点数量，取值范围是[1,10]。
   */
  Count: number;
  /**
   * Node节点密码。请遵照[[api:uhost-api:specification|字段规范]]设定密码。密码需使用base64进行编码，如下：# echo -n Password1 | base64
   */
  Password: string;
  /**
   * 计费模式。枚举值为： \\ > Year，按年付费； \\ > Month，按月付费；\\ 默认为月付
   */
  ChargeType: string;
  /**
   * 购买时长。默认: 1。月付时，此参数传0，代表了购买至月末。
   */
  Quantity?: number;
  /**
   * Node节点标签。key=value形式,多组用”,“隔开，最多5组。 如env=pro,type=game
   */
  Labels?: string;
  /**
   * 默认110，生产环境建议小于等于110。
   */
  MaxPods?: number;
  /**
   * 物理机类型，默认为：db-2(基础型-SAS-V3)
   */
  Type?: string;
  /**
   * Raid配置，默认Raid10 支持:Raid0、Raid1、Raid5、Raid10，NoRaid
   */
  Raid?: string;
  /**
   * 网络环境，可选千兆：1G ，万兆：10G， 默认1G。
   */
  NIC?: string;
  /**
   * 子网 ID。默认为集群创建时填写的子网ID，也可以填写集群同VPC内的子网ID。
   */
  SubnetId?: string;
  /**
   * 镜像 Id，不填时后台程序会自动选用一个可用的镜像 Id，支持用户自定义镜像，自定义镜像必须基于基础镜像制作。
   */
  ImageId?: string;
  /**
   * 用于标示添加完节点后是否将节点临时禁用. 传入 "true" 表示禁用,传入其它或不传表示不禁用
   */
  DisableSchedule?: boolean;
  /**
   * 用户自定义Shell脚本。与UserData的区别在于InitScript在节点初始化完毕后才执行。
   */
  InitScript?: string;
}

/**
 * AddUK8SPHostNode - 为UK8S集群添加一台或多台物理云主机类型的节点。
 */
export interface AddUK8SPHostNodeResponse {}

/**
 * AddUK8SUHostNode - 为UK8S集群添加一台Node节点，机型类型为云主机
 */
export interface AddUK8SUHostNodeRequest {
  /**
   * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
   */
  Zone: string;
  /**
   * UK8S集群ID。 可从UK8S控制台获取。
   */
  ClusterId: string;
  /**
   * 虚拟CPU核数。可选参数：2-64（具体机型与CPU的对应关系参照控制台）。默认值: 4。
   */
  CPU: number;
  /**
   * 创建Node节点数量，取值范围是[1,50]。
   */
  Count: number;
  /**
   * 内存大小。单位：MB。范围 ：[4096, 262144]，取值为1024的倍数（可选范围参考控制台）。默认值：8192
   */
  Mem: number;
  /**
   * 计费模式。枚举值为： \\ > Year，按年付费； \\ > Month，按月付费；\\ > Dynamic，按小时预付费 \\ > Postpay，按小时后付费（支持关机不收费，目前仅部分可用区支持，请联系您的客户经理） \\ 默认为月付
   */
  ChargeType: string;
  /**
   * Node节点密码。请遵照[[api:uhost-api:specification|字段规范]]设定密码。密码需使用base64进行编码，如下：# echo -n Password1 | base64
   */
  Password?: string;
  /**
   * 磁盘类型。请参考[[api:uhost-api:disk_type|磁盘类型]]。默认为SSD云盘
   */
  BootDiskType?: string;
  /**
   * 系统盘大小，单位GB。默认40。范围：[40, 500]。注意SSD本地盘无法调整。
   */
  BootDiskSize?: number;
  /**
   * 磁盘类型。请参考[[api:uhost-api:disk_type|磁盘类型]]。默认为SSD云盘
   */
  DataDiskType?: string;
  /**
   * 数据磁盘大小，单位GB。默认0。范围 ：[20, 1000]
   */
  DataDiskSize?: number;
  /**
   * 购买时长。默认: 1。按小时购买(Dynamic)时无需此参数。 月付时，此参数传0，代表了购买至月末。
   */
  Quantity?: number;
  /**
   * 云主机机型。枚举值["N", "C", "G", "O", "OS"]。参考[[api:uhost-api:uhost_type|云主机机型说明]]。
   */
  MachineType?: string;
  /**
   * GPU类型，枚举值["K80", "P40", "V100",]，MachineType为G时必填
   */
  GpuType?: string;
  /**
   * GPU卡核心数。仅GPU机型支持此字段（可选范围与MachineType+GpuType相关）
   */
  GPU?: number;
  /**
   * Node节点标签。key=value形式,多组用”,“隔开，最多5组。 如env=pro,type=game
   */
  Labels?: string;
  /**
   * 默认110，生产环境建议小于等于110。
   */
  MaxPods?: number;
  /**
   * 硬件隔离组id。可通过DescribeIsolationGroup获取。
   */
  IsolationGroup?: string;
  /**
   * 镜像 Id，不填时后台程序会自动选用一个可用的镜像 Id，支持用户自定义镜像，自定义镜像必须基于基础镜像制作。
   */
  ImageId?: string;
  /**
   * 子网 ID。默认为集群创建时填写的子网ID，也可以填写集群同VPC内的子网ID。
   */
  SubnetId?: string;
  /**
   * 用于标示添加完节点后是否将节点临时禁用. 传入 "true" 表示禁用,传入其它或不传表示不禁用
   */
  DisableSchedule?: boolean;
  /**
   * 用户自定义数据。当镜像支持Cloud-init Feature时可填写此字段。注意：1、总数据量大小不超过 16K；2、使用base64编码。
   */
  UserData?: string;
  /**
   * 用户自定义Shell脚本。与UserData的区别在于InitScript在节点初始化完毕后才执行，UserData则是云主机初始化时执行。
   */
  InitScript?: string;
  /**
   * 最低cpu平台，枚举值["Intel/Auto", "Intel/IvyBridge", "Intel/Haswell", "Intel/Broadwell", "Intel/Skylake", "Intel/Cascadelake"；"Intel/CascadelakeR"; “Amd/Epyc2”,"Amd/Auto"],默认值是"Intel/Auto"
   */
  MinimalCpuPlatform?: string;
  /**
   * Node节点污点，形式为key=value:effect，多组taints用”,“隔开,最多支持五组。
   */
  Taints?: string;
  /**
   * 业务组
   */
  Tag?: string;
  /**
   * 节点池id
   */
  NodeGroupId?: string;
  /**
   * 主机安全模式。Firewall：防火墙；SecGroup：安全组；默认值：Firewall。
   */
  SecurityMode?: string;
  /**
   * 自定义主机名前缀。完整的自定义主机名为{NamePrefix}-{NodeIP}。
   */
  NamePrefix?: string;
  /**
   * 网络增强特性。枚举值：Normal，不开启; Super，开启网络增强1.0； Ultra，开启网络增强2.0；Extreme，开启网络增强3.0; Infiniband, 开启网络增强4.0（详情参考主机官网文档）
   */
  NetCapability?: string;
  /**
   * 弹性网卡特性。开启了弹性网卡权限位，此特性才生效，默认 false 未开启，true 开启。
   */
  UNIFeature?: boolean;
  /**
   *
   */
  NetworkInterface?: {
    /**
     *
     */
    EIP?: {
      /**
       * 【若绑定EIP，此参数必填】弹性IP的外网带宽, 单位为Mbps. 共享带宽模式下非必传, 非共享带宽模式必须指定非0Mbps带宽. 各地域非共享带宽的带宽范围如下： 流量计费[1-300]，带宽计费[1-800]
       */
      Bandwidth?: number;
      /**
       * 弹性IP的计费模式. 枚举值: "Traffic", 流量计费; "Bandwidth", 带宽计费; "ShareBandwidth",共享带宽模式. "Free":免费带宽模式,默认为 "Bandwidth"
       */
      PayMode?: string;
      /**
       * 绑定的共享带宽Id，仅当PayMode为ShareBandwidth时有效
       */
      ShareBandwidthId?: string;
      /**
       * 【若绑定EIP，此参数必填】弹性IP的线路。枚举值: 国际: International，BGP: Bgp。各地域允许的线路参数如下: cn-sh1: Bgp cn-sh2: Bgp cn-gd: Bgp cn-bj1: Bgp cn-bj2: Bgp hk: International us-ca: International th-bkk: International kr-seoul:International us-ws:International ge-fra:International sg:International tw-kh:International.其他海外线路均为 International
       */
      OperatorName?: string;
      /**
       * 当前EIP代金券id。请通过DescribeCoupon接口查询，或登录用户中心查看。
       */
      CouponId?: string;
    };
  }[];
  /**
   * 防火墙ID，默认：Web推荐防火墙。如何查询SecurityGroupId请参见 [DescribeFirewall](api/unet-api/describe_firewall.html)。
   */
  SecurityGroupId?: string;
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
    Priority?: string;
    /**
     * 安全组名称。
     */
    Name?: string;
  }[];
  /**
   * 主机规格族
   */
  UHostFamily?: string;
  /**
   *
   */
  UserLabels?: {
    /**
     * UK8S用户资源标签的键值
     */
    Key?: string;
    /**
     * UK8S用户资源标签的值
     */
    Value?: string;
  }[];
  /**
   *
   */
  KubeletConfiguration?: {
    /**
     * 全量KubeletConfiguration.XXX定义参考AddUK8SNodeGroup接口: https://uxiao.ucloudadmin.com/#/api-manager/api/detail/UK8S/AddUK8SNodeGroup
     */
    ContainerLogMaxFiles?: string;
  };
}

/**
 * AddUK8SUHostNode - 为UK8S集群添加一台Node节点，机型类型为云主机
 */
export interface AddUK8SUHostNodeResponse {
  /**
   * Node实例Id集合
   */
  NodeIds?: string[];
}

/**
 * CreateUK8SClusterV2 - 创建UK8S集群
 */
export interface CreateUK8SClusterV2Request {
  /**
   * 集群Node及Pod所属VPC
   */
  VPCId: string;
  /**
   * 集群Node及Pod所属子网
   */
  SubnetId: string;
  /**
   * Service 网段，用于分配ClusterIP，如172.17.0.0/16。该网段不能与集群所属VPC网段重叠。
   */
  ServiceCIDR: string;
  /**
   * 集群名称
   */
  ClusterName: string;
  /**
   * 集群节点密码，包括Master和Node。密码需包含最少一个大写字母，请使用base64进行编码，举例如下：# echo -n Password1 | base64
   */
  Password: string;
  /**
   *
   */
  Master?: {
    /**
     * Master节点所属可用区，需要设置 Master.0.Zone、 Master.1.Zone、Master.2.Zone 三个 Master 节点的可用区。 三个节点可部署在不同可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
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
      Priority?: string;
      /**
       * 安全组名称。
       */
      Name?: string;
    }[];
  }[];
  /**
   * Master节点的云主机机型（V2.0），如["N", "C", "O", "OS"]，具体请参照云主机机型。
   */
  MasterMachineType: string;
  /**
   * Master节点的虚拟CPU核数。可选参数：2-64（具体机型与CPU的对应关系参照控制台）。
   */
  MasterCPU: number;
  /**
   * Master节点的内存大小。单位：MB。范围 ：[4096, 262144]，取值为1024的倍数（可选范围参考控制台）。
   */
  MasterMem: number;
  /**
   *
   */
  Nodes?: {
    /**
     * 一组Nodes节点所属可用区，可创建多组Nodes节点，如一组是CPU Nodes节点，另一组是GPU Nodes节点。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * 一组Nodes节点云主机机型，如["N", "C", "O", "OS"]，具体请参照云主机机型。
     */
    MachineType: string;
    /**
     * 一组Node节点的虚拟CPU核数。单位：核，范围：[2, 64]，可选范围参考控制台。
     */
    CPU: number;
    /**
     * 一组Node节点的内存大小。单位：MB,范围 ：[4096, 262144]，取值为1024的倍数，可选范围参考控制台。
     */
    Mem: number;
    /**
     * 一组Node节点的数量，范围：[1,10]。
     */
    Count: number;
    /**
     * 一组Node节点的隔离组Id，归属于同一隔离组的虚拟机节点将落在不同的物理机上，单个隔离组最多只能容纳8个节点。参见DescribeIsolationGroup。
     */
    IsolationGroup?: string;
    /**
     * Node节点上可运行最大节点数，默认为110。
     */
    MaxPods?: number;
    /**
     * Node节点标签，形式为key=value，多组Labels用”,“隔开,最多支持五组。
     */
    Labels?: string;
    /**
     * 一组Node节点的系统盘类型，请参考[[api:uhost-api:disk_type|磁盘类型]]。默认为SSD云盘
     */
    BootDiskType?: string;
    /**
     * Node节点的系统盘大小，单位GB，默认为40。范围：[40, 500]。注意SSD本地盘无法调整。
     */
    BootDiskSIze?: number;
    /**
     * 一组Node节点的数据盘类型，请参考[[api:uhost-api:disk_type|磁盘类型]]。默认为SSD云盘
     */
    DataDiskType?: string;
    /**
     * 一组Node节点的GPU类型，枚举值["K80", "P40", "V100"]，最新值参考Console。
     */
    GpuType?: string;
    /**
     * 一组Node节点的GPU卡核心数，仅GPU机型支持此字段。
     */
    GPU?: number;
    /**
     * 数据磁盘大小，单位GB。默认0。范围 ：[20, 1000]
     */
    DataDiskSize?: number;
    /**
     * Node节点的最低cpu平台，不选则随机。枚举值["Intel/Auto", "Intel/IvyBridge", "Intel/Haswell", "Intel/Broadwell", "Intel/Skylake", "Intel/Cascadelake"。
     */
    MinimalCpuPlatform?: string;
    /**
     * Node节点污点，形式为key=value:effect，多组taints用”,“隔开,最多支持五组。
     */
    Taints?: string;
    /**
     * 主机安全模式。Firewall：防火墙；SecGroup：安全组；默认值：Firewall。
     */
    SecurityMode?: string;
    /**
     * 一组Node的自定义主机名前缀。 完整的自定义主机名为{NamePrefix}-{NodeIP}。
     */
    NamePrefix?: string;
    /**
     * Node节点的镜像 ID，不填则使用ImageId参数。支持用户自定义镜像。
     */
    ImageId?: string;
    /**
     * 弹性网卡特性。开启了弹性网卡权限位，此特性才生效，默认 false 未开启，true 开启。
     */
    UNIFeature?: string;
    /**
     *
     */
    NetworkInterface?: {
      /**
       *
       */
      EIP?: {
        /**
         * 【若绑定EIP，此参数必填】弹性IP的外网带宽, 单位为Mbps. 共享带宽模式下非必传, 非共享带宽模式必须指定非0Mbps带宽. 各地域非共享带宽的带宽范围如下： 流量计费[1-300]，带宽计费[1-800]
         */
        Bandwidth?: number;
        /**
         * 弹性IP的计费模式. 枚举值: "Traffic", 流量计费; "Bandwidth", 带宽计费; "ShareBandwidth",共享带宽模式. "Free":免费带宽模式,默认为 "Bandwidth"
         */
        PayMode?: string;
        /**
         * 绑定的共享带宽Id，仅当PayMode为ShareBandwidth时有效
         */
        ShareBandwidthId?: string;
        /**
         * 【若绑定EIP，此参数必填】弹性IP的线路。枚举值: 国际: International BGP: Bgp 各地域允许的线路参数如下: cn-sh1: Bgp cn-sh2: Bgp cn-gd: Bgp cn-bj1: Bgp cn-bj2: Bgp hk: International us-ca: International th-bkk: International kr-seoul:International us-ws:International ge-fra:International sg:International tw-kh:International.其他海外线路均为 International
         */
        OperatorName?: string;
        /**
         * 当前EIP代金券id。请通过DescribeCoupon接口查询，或登录用户中心查看。
         */
        CouponId?: string;
      };
    }[];
    /**
     * 防火墙ID，默认：Web推荐防火墙。如何查询SecurityGroupId请参见 [DescribeFirewall](api/unet-api/describe_firewall.html)。
     */
    SecurityGroupId?: string;
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
      Priority?: string;
      /**
       * 安全组名称。
       */
      Name?: string;
    }[];
  }[];
  /**
   * Master节点系统盘类型。请参考[[api:uhost-api:disk_type|磁盘类型]]。默认为SSD云盘
   */
  MasterBootDiskType?: string;
  /**
   * Master节点系统盘大小，单位GB，默认为40。范围：[40, 500]。注意SSD本地盘无法调整。
   */
  MasterBootDiskSize?: number;
  /**
   * Master节点数据盘类型。请参考[[api:uhost-api:disk_type|磁盘类型]]。默认为SSD云盘
   */
  MasterDataDiskType?: string;
  /**
   * Master节点的数据盘大小，单位GB，默认为0。范围 ：[20, 1000]
   */
  MasterDataDiskSize?: number;
  /**
   * 集群所有节点的付费模式。枚举值为： Year，按年付费； Month，按月付费； Dynamic，按小时付费（需开启权限），默认按月。
   */
  ChargeType?: string;
  /**
   * k8s集群的版本，版本信息请参考UK8S集群创建页，不指定的话默认为当前支持的最高版本。
   */
  K8sVersion?: string;
  /**
   * 购买时长。默认为1。按小时购买(Dynamic)时无需此参数。 月付时，此参数传0，代表了购买至月末。
   */
  Quantity?: number;
  /**
   * 是否允许外网访问apiserver，开启：Yes 不开启：No。默认为No。
   */
  ExternalApiServer?: string;
  /**
   * 【无效，已删除】当前将自动为Master节点创建隔离组，确保Master节点归属于不同物理机。
   */
  MasterIsolationGroup?: string;
  /**
   *
   */
  KubeProxy?: {
    /**
     * 集群kube-proxy模式。支持iptables和ipvs，默认为iptables。
     */
    Mode?: string;
  };
  /**
   * Master节点和Node节点的镜像 ID，不填则随机选择可用的基础镜像。支持用户自定义镜像。
   */
  ImageId?: string;
  /**
   * 用户自定义数据。注意：1、总数据量大小不超多16K；2、使用base64编码。
   */
  UserData?: string;
  /**
   * 用户自定义脚本，与UserData不同，自定义脚本将在集群安装完毕后执行。注意：1、总数据量大小不超多16K；2、使用base64编码。
   */
  InitScript?: string;
  /**
   * Master节点的最低cpu平台，不选则随机。枚举值["Intel/Auto", "Intel/IvyBridge", "Intel/Haswell", "Intel/Broadwell", "Intel/Skylake", "Intel/Cascadelake"。
   */
  MasterMinimalCpuPlatform?: string;
  /**
   * 创建集群的时候定义clusterdomain
   */
  ClusterDomain?: string;
  /**
   * 业务组
   */
  Tag?: string;
  /**
   * Master节点的镜像 ID，不填则使用ImageId参数。支持用户自定义镜像。
   */
  MasterImageId?: string;
  /**
   * master lb 类型默认ulb，可选ulb nlb
   */
  LbClass?: string;
  /**
   * LbClass为nlb的时候支持的源ip转发模式，目前只支持Toa,为空则不开源ip功能 枚举："",Toa
   */
  ForwardSrcIPMethod?: string;
  /**
   * UK8S用户标签，key=value形式,多组用”,“隔开，最多5组。 如env=pro,type=game
   */
  UserLabels?: string;
}

/**
 * CreateUK8SClusterV2 - 创建UK8S集群
 */
export interface CreateUK8SClusterV2Response {
  /**
   * 集群ID
   */
  ClusterId: string;
}

/**
 * CreateUK8SULSConfig - 创建 LogConfig 自定义资源，用于声明式地定义日志采集规则
 */
export interface CreateUK8SULSConfigRequest {
  /**
   * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
   */
  Zone: string;
  /**
   * 日志服务中用于接收日志的目标 Topic ID。
   */
  TopicID: string;
  /**
   * UK8S 集群ID。
   */
  ClusterId: string;
  /**
   * 要创建的日志的采集规则的名称，不能重复。总长度不能超过 253个字符。字符类型：只能包含小写字母（a-z）、数字（0-9）、破折号（-）和点（.）。开头和结尾字符：必须以小写字母或数字开头，并且也必须以小写字母或数字结尾。不允许以 - 或 . 开头或结尾。连续特殊字符：不能连续出现点（.）或破折号（-）。
   */
  Name: string;
  /**
   *
   */
  ExtractRule?: {
    /**
     * 日志解析类型，决定了如何结构化日志。可选值: multi_line_delimiter：多行分隔符，delimiter:分隔符，full_regex:完全正则，multi_line_full_regex:多行完全正则，minimal_list:单行全文日志,multi_line:多行全文日志
     */
    LogType: string;
    /**
     * 采集策略。可选值: full (全量采集存量日志), increment (从当前时间点增量采集)。默认为 full。
     */
    CollectPolicy?: string;
    /**
     * 日志原文的编码格式。可选值: utf-8, gbk。默认为 utf-8。
     */
    Encode?: string;
    /**
     * 当LogType 为分隔符、正则、多行正则时可用
     */
    Keys?: string[];
    /**
     * 当 LogType 为delimiter 时可选，接收 "space"、"tab"、"|"、";"、","。
     */
    Delimiter?: string;
    /**
     * 行首正则表达式。当 logType 为多行模式 (如 multi_line 或 multi_line_full_regex) 时，用于标识一条新日志的开始。
     */
    BeginningRegex?: string;
    /**
     * 日志提取正则表达式。当 logType 为正则模式 (如 full_regex,multi_line_full_regex) 时，用于从日志中提取字段。
     */
    LogRegex?: string;
    /**
     *
     */
    ExtractRule?: {
      /**
       * Base64 编码的日志提取正则表达式。
       */
      LogRegexBase64?: string;
    };
    /**
     * 当日志为 json 或正则提取时，指定包含日志时间的字段名 (Key)。
     */
    TimeKey?: string;
    /**
     * timeKey 对应的时间格式。
     */
    TimeFormat?: string;
    /**
     * 是否上传解析失败的日志。true 表示上传，false 表示丢弃。默认为 false。
     */
    UnMatchUpload?: string;
    /**
     * 没有设置默认值；UnMatchUpload="true" 时强制要求填写
     */
    UnMatchKey?: string;
    /**
     * Base64 编码的分隔符，优先级高于 Delimiter
     */
    DelimiterBase64?: string;
    /**
     * Base64 编码的行首正则，优先级高于 BeginningRegex
     */
    BeginningRegexBase64?: string;
  };
  /**
   *
   */
  InputDetail?: {
    /**
     * 日志输入类型。支持 container_file 和 container_stdout
     */
    Type: string;
    /**
     *
     */
    Metadata?: {
      /**
       * 指定具体要采集元数据的容器名。如果留空，则不采集容器的元数据,可选字段：container_name,namespace,pod_name,pod_ip,pod_uid,container_id,image_name。Pod Label 元数据通过指定 InputDetail.Metadata.Labels字段。
       */
      Container?: string;
      /**
       * 定义要采集哪些 Pod 的标签 (Labels)。可选值: * (采集所有标签), "app,version" (仅采集 app 和 version), "" (不采集任何标签)。
       */
      Labels?: string;
    };
    /**
     *
     */
    FilePaths?: {
      /**
       * 定义采集路径
       */
      Path?: string;
      /**
       * 定义采集路径的文件名
       */
      File?: string;
    }[];
    /**
     * all、stdout、stderr，默认 all (用于 InputDetail.Type = container_stdout)
     */
    Stream?: string;
  };
  /**
   *
   */
  MatchRule?: {
    /**
     * 容器名称匹配操作符。支持：in(包含)，notin(不包含)
     */
    ContainerOperator?: string;
    /**
     * 要匹配的容器名称，*表示所有容器，用逗号分隔
     */
    Container?: string;
    /**
     *
     */
    Workloads?: {
      /**
       * 按工作负载匹配时，工作负载所在的命名空间。
       */
      Namespace?: string;
      /**
       * 按工作负载匹配时，工作负载的类型，例如 deployment, statefulset, daemonset,job, cronjob。
       */
      Type?: string;
      /**
       * 按工作负载匹配时，工作负载的名称。
       */
      Name?: string;
    }[];
    /**
     *
     */
    PodLabels?: {
      /**
       * 指定/排除命名空间, 可选值: in/notin
       */
      NamespaceOperator?: string;
      /**
       * 命名空间名称
       */
      Namespace?: string;
      /**
       *
       */
      Labels?: {
        /**
         * 按 Pod 标签匹配时，要匹配的标签的 Key。
         */
        Key?: string;
        /**
         * 按 Pod 标签匹配时，标签值的匹配操作符。可选值: in, notin。
         */
        ValueOperator?: string;
        /**
         * 按 Pod 标签匹配时，要匹配的标签的值。
         */
        Value?: string;
      }[];
    };
  };
}

/**
 * CreateUK8SULSConfig - 创建 LogConfig 自定义资源，用于声明式地定义日志采集规则
 */
export interface CreateUK8SULSConfigResponse {}

/**
 * DelUK8SCluster - 删除UK8S集群
 */
export interface DelUK8SClusterRequest {
  /**
   * 集群id
   */
  ClusterId: string;
  /**
   * 是否删除节点挂载的数据盘。枚举值[true:删除，false: 不删除]，默认不删除
   */
  ReleaseUDisk?: boolean;
}

/**
 * DelUK8SCluster - 删除UK8S集群
 */
export interface DelUK8SClusterResponse {}

/**
 * DelUK8SClusterNodeV2 - 删除集群中的Node节点，删除前务必先将其中的Pod驱逐。
 */
export interface DelUK8SClusterNodeV2Request {
  /**
   * UK8S集群ID。 可从UK8S控制台获取。
   */
  ClusterId: string;
  /**
   * Node在UK8S处的唯一标示，如uk8s-reewqe5-sdasadsda。**非云主机或物理云主机资源Id**
   */
  NodeId: string;
  /**
   * 删除节点时是否释放数据盘。 枚举值[true:释放，false: 不释放]，默认为true。
   */
  ReleaseDataUDisk?: boolean;
}

/**
 * DelUK8SClusterNodeV2 - 删除集群中的Node节点，删除前务必先将其中的Pod驱逐。
 */
export interface DelUK8SClusterNodeV2Response {}

/**
 * DeleteUK8SULSConfig - 删除指定UK8S集群的日志采集规则。
 */
export interface DeleteUK8SULSConfigRequest {
  /**
   * 可用区。参见可用区列表。
   */
  Zone: string;
  /**
   * 要操作的 UK8S 集群的 ID。
   */
  ClusterId: string;
  /**
   * 要删除的日志的采集规则的名称。
   */
  Name: string;
}

/**
 * DeleteUK8SULSConfig - 删除指定UK8S集群的日志采集规则。
 */
export interface DeleteUK8SULSConfigResponse {}

/**
 * DescribeUK8SCluster - 获取集群信息
 */
export interface DescribeUK8SClusterRequest {
  /**
   * k8s集群ID
   */
  ClusterId: string;
}

/**
 * DescribeUK8SCluster - 获取集群信息
 */
export interface DescribeUK8SClusterResponse {
  /**
   * 资源名字
   */
  ClusterName: string;
  /**
   * 集群ID
   */
  ClusterId: string;
  /**
   * 所属VPC
   */
  VPCId: string;
  /**
   * 所属子网
   */
  SubnetId: string;
  /**
   * Pod网段
   */
  PodCIDR: string;
  /**
   * 服务网段
   */
  ServiceCIDR: string;
  /**
   * Master 节点数量
   */
  MasterCount: number;
  /**
   * Master节点配置信息，具体参考UhostInfo。托管版不返回该信息
   */
  MasterList?: {
    /**
     * 所在机房
     */
    Zone: string;
    /**
     * 主机名称
     */
    Name: string;
    /**
     * Cpu数量
     */
    CPU: number;
    /**
     * 内存
     */
    Memory: number;
    /**
     * 节点IP信息
     */
    IPSet: {
      /**
       * 国际: Internation，BGP: Bgp，内网: Private
       */
      Type?: string;
      /**
       * IP资源ID (内网IP无对应的资源ID)
       */
      IPId?: string;
      /**
       * IP地址
       */
      IP?: string;
      /**
       * IP对应的带宽, 单位: Mb (内网IP不显示带宽信息)
       */
      Bandwidth?: number;
      /**
       * 是否默认的弹性网卡的信息。true: 是默认弹性网卡；其他值：不是。
       */
      Default?: string;
      /**
       * IP 地址分配模式
       */
      IPMode?: string;
      /**
       * IP 所属的 VPC Id
       */
      VPCId?: string;
      /**
       * IP 所在的 子网 Id
       */
      SubnetId?: string;
      /**
       * 网卡的 MAC 地址
       */
      Mac?: string;
      /**
       * 虚拟网卡 Id
       */
      NetworkInterfaceId?: string;
    }[];
    /**
     * 节点磁盘信息
     */
    DiskSet: {
      /**
       * 磁盘类型。系统盘: Boot，数据盘: Data,网络盘：Udisk
       */
      Type?: string;
      /**
       * 磁盘长ID
       */
      DiskId?: string;
      /**
       * UDisk名字（仅当磁盘是UDisk时返回）
       */
      Name?: string;
      /**
       * 磁盘盘符
       */
      Drive?: string;
      /**
       * 磁盘大小，单位: GB
       */
      Size?: number;
      /**
       * 备份方案，枚举类型：BASIC_SNAPSHOT,普通快照；DATAARK,方舟。无快照则不返回该字段。
       */
      BackupType?: string;
      /**
       * 当前主机的IOPS值
       */
      IOPS?: number;
      /**
       * Yes: 加密 No: 非加密
       */
      Encrypted?: string;
      /**
       * LOCAL_NOMAL| CLOUD_NORMAL| LOCAL_SSD| CLOUD_SSD|EXCLUSIVE_LOCAL_DISK
       */
      DiskType?: string;
      /**
       * True| False
       */
      IsBoot?: string;
    }[];
    /**
     * 主机ID
     */
    NodeId: string;
    /**
     * 镜像信息
     */
    OsName: string;
    /**
     * 创建时间
     */
    CreateTime: number;
    /**
     * 到期时间
     */
    ExpireTime: number;
    /**
     * 主机状态
     */
    State: string;
    /**
     * 节点类型：uhost表示云主机;uphost表示物理云主机
     */
    NodeType: string;
    /**
     * GPU 数量
     */
    GPU: number;
    /**
     * GPU 型号
     */
    GpuType: string;
    /**
     * 基础镜像名称
     */
    BasicImageName: string;
    /**
     * 操作系统类型
     */
    OsType: string;
    /**
     * 节点总磁盘空间
     */
    TotalDiskSpace: number;
    /**
     * 主机机型类别
     */
    MachineType: string;
    /**
     * 节点关联的安全组列表
     */
    SecGroupId: {
      /**
       * 安全组名称
       */
      Id?: string;
      /**
       * 安全组id
       */
      Name?: string;
      /**
       * 安全组优先级
       */
      Priority?: string;
    }[];
  }[];
  /**
   * Node节点配置信息,具体参考UhostInfo
   */
  NodeList?: {
    /**
     * 所在机房
     */
    Zone: string;
    /**
     * 主机名称
     */
    Name: string;
    /**
     * Cpu数量
     */
    CPU: number;
    /**
     * 内存
     */
    Memory: number;
    /**
     * 节点IP信息
     */
    IPSet: {
      /**
       * 国际: Internation，BGP: Bgp，内网: Private
       */
      Type?: string;
      /**
       * IP资源ID (内网IP无对应的资源ID)
       */
      IPId?: string;
      /**
       * IP地址
       */
      IP?: string;
      /**
       * IP对应的带宽, 单位: Mb (内网IP不显示带宽信息)
       */
      Bandwidth?: number;
      /**
       * 是否默认的弹性网卡的信息。true: 是默认弹性网卡；其他值：不是。
       */
      Default?: string;
      /**
       * IP 地址分配模式
       */
      IPMode?: string;
      /**
       * IP 所属的 VPC Id
       */
      VPCId?: string;
      /**
       * IP 所在的 子网 Id
       */
      SubnetId?: string;
      /**
       * 网卡的 MAC 地址
       */
      Mac?: string;
      /**
       * 虚拟网卡 Id
       */
      NetworkInterfaceId?: string;
    }[];
    /**
     * 节点磁盘信息
     */
    DiskSet: {
      /**
       * 磁盘类型。系统盘: Boot，数据盘: Data,网络盘：Udisk
       */
      Type?: string;
      /**
       * 磁盘长ID
       */
      DiskId?: string;
      /**
       * UDisk名字（仅当磁盘是UDisk时返回）
       */
      Name?: string;
      /**
       * 磁盘盘符
       */
      Drive?: string;
      /**
       * 磁盘大小，单位: GB
       */
      Size?: number;
      /**
       * 备份方案，枚举类型：BASIC_SNAPSHOT,普通快照；DATAARK,方舟。无快照则不返回该字段。
       */
      BackupType?: string;
      /**
       * 当前主机的IOPS值
       */
      IOPS?: number;
      /**
       * Yes: 加密 No: 非加密
       */
      Encrypted?: string;
      /**
       * LOCAL_NOMAL| CLOUD_NORMAL| LOCAL_SSD| CLOUD_SSD|EXCLUSIVE_LOCAL_DISK
       */
      DiskType?: string;
      /**
       * True| False
       */
      IsBoot?: string;
    }[];
    /**
     * 主机ID
     */
    NodeId: string;
    /**
     * 镜像信息
     */
    OsName: string;
    /**
     * 创建时间
     */
    CreateTime: number;
    /**
     * 到期时间
     */
    ExpireTime: number;
    /**
     * 主机状态
     */
    State: string;
    /**
     * 节点类型：uhost表示云主机;uphost表示物理云主机
     */
    NodeType: string;
    /**
     * GPU 数量
     */
    GPU: number;
    /**
     * GPU 型号
     */
    GpuType: string;
    /**
     * 基础镜像名称
     */
    BasicImageName: string;
    /**
     * 操作系统类型
     */
    OsType: string;
    /**
     * 节点总磁盘空间
     */
    TotalDiskSpace: number;
    /**
     * 主机机型类别
     */
    MachineType: string;
    /**
     * 节点关联的安全组列表
     */
    SecGroupId: {
      /**
       * 安全组名称
       */
      Id?: string;
      /**
       * 安全组id
       */
      Name?: string;
      /**
       * 安全组优先级
       */
      Priority?: string;
    }[];
  }[];
  /**
   * 创建时间
   */
  CreateTime?: number;
  /**
   * Node节点数量
   */
  NodeCount?: number;
  /**
   * 集群apiserver地址
   */
  ApiServer?: string;
  /**
   * 状态
   */
  Status?: string;
  /**
   * 集群外部apiserver地址
   */
  ExternalApiServer?: string;
  /**
   * kube-proxy配置
   */
  KubeProxy?: {
    /**
     * KubeProxy模式，枚举值为[ipvs,iptables]
     */
    Mode?: string;
  };
  /**
   * K8S版本
   */
  Version?: string;
  /**
   * 自定义或者默认的clusterdomain
   */
  ClusterDomain?: string;
  /**
   * 集群etcd服务证书
   */
  EtcdCert?: string;
  /**
   * 集群etcd服务密钥
   */
  EtcdKey?: string;
  /**
   * 集群CA根证书
   */
  CACert?: string;
  /**
   * Master配置预警：Normal正常；Warning 需要升级；Error    需要紧急升级；
   */
  MasterResourceStatus?: string;
  /**
   * CNI模式，可选值VPC/Calico
   */
  CNIMode?: string;
  /**
   * 集群的监控类型：no无监控；cloudwatch统一监控平台；prometheus内置监控
   */
  MonitorType?: string;
  /**
   * 集群的节点伸缩(CA)配置
   */
  Autoscaler?: {
    /**
     * 缩容触发延时
     */
    ScaleDownUnneededTime: string;
    /**
     * CPU缩容阈值
     */
    ScaleDownUtilizationThreshold: string;
    /**
     * 静默时间
     */
    ScaleDownDelayAfterAdd: string;
    /**
     * 打开/关闭
     */
    Enabled: number;
    /**
     * 伸缩器版本
     */
    Version: string;
    /**
     *
     */
    UpdateTime: number;
    /**
     * GPU缩容阈值
     */
    ScaleDownGpuUtilizationThreshold: string;
  };
  /**
   * 是否开启了授权管理功能
   */
  EnableUserAuth?: boolean;
  /**
   * Pod是否使用独立子网
   */
  DedicatedPodSubnet?: boolean;
  /**
   * Pod使用的独立子网列表
   */
  PodSubnetIds?: string[];
  /**
   * 删除保护开关。0表示不开启，1表示开启。默认不开启
   */
  DeleteProtection?: number;
  /**
   * Pod独立子网内的ip使用的安全组
   */
  PodSubnetSecGroups?: string[];
  /**
   * 节点网段
   */
  NodeCIDR?: string;
  /**
   * 外部 API Server 负载均衡实例 ID
   */
  ExternalUlb?: string;
  /**
   * 内部 API Server 负载均衡实例 ID
   */
  InternalUlb?: string;
  /**
   * 更新时间
   */
  UpdateTime?: number;
  /**
   * 负载均衡类型
   */
  LbClass?: string;
  /**
   * 容器运行时名称
   */
  RuntimeName?: string;
  /**
   * 容器运行时版本
   */
  RuntimeVersion?: string;
  /**
   * 集群版本
   */
  ClusterType?: string;
  /**
   * API Server 回环客户端证书
   */
  LoopbackClientCert?: {
    /**
     * 证书到期时间
     */
    ExpireTime?: number;
    /**
     * 证书是否进入过期告警状态
     */
    Warn?: boolean;
  };
}

/**
 * DescribeUK8SImage - 获取UK8S支持的Node节点操作系统，可基于该操作系统制定自定义镜像
 */
export interface DescribeUK8SImageRequest {
  /**
   * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
   */
  Zone?: string;
  /**
   * 产品类型，可选值uhost、uphost，不填则返回所有
   */
  ProductType?: string;
  /**
   * 适用机型，如O、G、OPRO等，默认为O
   */
  MachineType?: string;
  /**
   * 适用GPU类型，如1080Ti、4090、V100、A800等，MachineType为G时必须提供
   */
  GPUType?: string;
  /**
   * k8s集群版本，如1.28.15
   */
  K8sVersion?: string;
}

/**
 * DescribeUK8SImage - 获取UK8S支持的Node节点操作系统，可基于该操作系统制定自定义镜像
 */
export interface DescribeUK8SImageResponse {
  /**
   * 虚拟机可用镜像集合, 详见ImageInfo 数组
   */
  ImageSet?: {
    /**
     * 可用区 Id
     */
    ZoneId: number;
    /**
     * 镜像 Id
     */
    ImageId: string;
    /**
     * 镜像名称
     */
    ImageName: string;
    /**
     * 该镜像是否支持GPU机型，枚举值[true:不支持，false:支持]。
     */
    NotSupportGPU: boolean;
    /**
     * OS 类型
     */
    OsType: string;
    /**
     * OS 名称
     */
    OsName: string;
    /**
     * 镜像支持的特性
     */
    Features?: string[];
    /**
     * 镜像大小
     */
    ImageSize?: number;
    /**
     * 集成软件名称, 如NV驱动版本、cuda版本
     */
    IntegratedSoftware?: string;
    /**
     * 支持的GPU机型
     */
    SupportedGPUTypes?: string[];
  }[];
  /**
   * 裸金属可用镜像集合, 详见ImageInfo 数组
   */
  PHostImageSet?: {
    /**
     * 可用区 Id
     */
    ZoneId: number;
    /**
     * 镜像 Id
     */
    ImageId: string;
    /**
     * 镜像名称
     */
    ImageName: string;
    /**
     * 该镜像是否支持GPU机型，枚举值[true:不支持，false:支持]。
     */
    NotSupportGPU: boolean;
    /**
     * OS 类型
     */
    OsType: string;
    /**
     * OS 名称
     */
    OsName: string;
    /**
     * 镜像支持的特性
     */
    Features?: string[];
    /**
     * 镜像大小
     */
    ImageSize?: number;
    /**
     * 集成软件名称, 如NV驱动版本、cuda版本
     */
    IntegratedSoftware?: string;
    /**
     * 支持的GPU机型
     */
    SupportedGPUTypes?: string[];
  }[];
  /**
   * 虚拟机自制可用镜像集合, 详见ImageInfo 数组
   */
  CustomImageSet?: {
    /**
     * 可用区 Id
     */
    ZoneId: number;
    /**
     * 镜像 Id
     */
    ImageId: string;
    /**
     * 镜像名称
     */
    ImageName: string;
    /**
     * 该镜像是否支持GPU机型，枚举值[true:不支持，false:支持]。
     */
    NotSupportGPU: boolean;
    /**
     * OS 类型
     */
    OsType: string;
    /**
     * OS 名称
     */
    OsName: string;
    /**
     * 镜像支持的特性
     */
    Features?: string[];
    /**
     * 镜像大小
     */
    ImageSize?: number;
    /**
     * 集成软件名称, 如NV驱动版本、cuda版本
     */
    IntegratedSoftware?: string;
    /**
     * 支持的GPU机型
     */
    SupportedGPUTypes?: string[];
  }[];
  /**
   * 裸金属自制可用镜像集合, 详见ImageInfo 数组
   */
  CustomPHostImageSet?: {
    /**
     * 可用区 Id
     */
    ZoneId: number;
    /**
     * 镜像 Id
     */
    ImageId: string;
    /**
     * 镜像名称
     */
    ImageName: string;
    /**
     * 该镜像是否支持GPU机型，枚举值[true:不支持，false:支持]。
     */
    NotSupportGPU: boolean;
    /**
     * OS 类型
     */
    OsType: string;
    /**
     * OS 名称
     */
    OsName: string;
    /**
     * 镜像支持的特性
     */
    Features?: string[];
    /**
     * 镜像大小
     */
    ImageSize?: number;
    /**
     * 集成软件名称, 如NV驱动版本、cuda版本
     */
    IntegratedSoftware?: string;
    /**
     * 支持的GPU机型
     */
    SupportedGPUTypes?: string[];
  }[];
}

/**
 * DescribeUK8SNode - 用于获取 UK8S 节点详情
 */
export interface DescribeUK8SNodeRequest {
  /**
   * UK8S 集群 Id
   */
  ClusterId: string;
  /**
   * K8S 节点IP或者节点ID
   */
  Name: string;
}

/**
 * DescribeUK8SNode - 用于获取 UK8S 节点详情
 */
export interface DescribeUK8SNodeResponse {
  /**
   * 节点名称
   */
  Name: string;
  /**
   * 字符串数组，每一项是类似 "kubernetes.io/arch=amd64" 的标签
   */
  Labels: string[];
  /**
   * 字符串数组，每一项是类似 "node.alpha.kubernetes.io/ttl=0" 的注解
   */
  Annotations: string[];
  /**
   * 时间戳，单位是 秒
   */
  CreationTimestamp: number;
  /**
   * 字符串，如："UCloud://cn-sh2-02//uk8s-vsc0vgob-n-mpzxc"
   */
  ProviderID: string;
  /**
   * 内核版本，如："4.19.0-6.el7.ucloud.x86_64"
   */
  KernelVersion: string;
  /**
   * 操作系统类型，如："CentOS Linux 7 (Core)"
   */
  OSImage: string;
  /**
   * 容器运行时版本，如："docker://18.9.9"
   */
  ContainerRuntimeVersion: string;
  /**
   * kubelet 版本
   */
  KubeletVersion: string;
  /**
   * kubeproxy 版本
   */
  KubeProxyVersion: string;
  /**
   * 内部 IP 地址
   */
  InternalIP: string;
  /**
   * 主机名
   */
  Hostname: string;
  /**
   * 已分配到当前节点的 Pod 数量
   */
  AllocatedPodCount: number;
  /**
   * 节点允许的可分配 Pod 最大数量
   */
  PodCapacity: number;
  /**
   * 是否禁止调度
   */
  Unschedulable: boolean;
  /**
   * 节点 CPU 总量
   */
  CPUCapacity: string;
  /**
   * 节点内存总量
   */
  MemoryCapacity: string;
  /**
   * 节点上已分配 Pod 的内存请求量
   */
  MemoryRequests: string;
  /**
   * 节点上已分配 Pod 的内存请求量占内存总量的比例，如返回值为 "4.5"，则意味着请求量占总量的 4.5%
   */
  MemoryRequestsFraction: string;
  /**
   * 节点上已分配 Pod 的内存限制量
   */
  MemoryLimits: string;
  /**
   * 节点上已分配 Pod 的内存限制量占内存总量的比例，如返回值为 "18"，则意味着限制量占总量的 18%
   */
  MemoryLimitsFraction: string;
  /**
   * 节点上已分配 Pod 的 CPU 请求量
   */
  CPURequests: string;
  /**
   * 节点上已分配 Pod 的 CPU 请求量占 CPU 总量的比例
   */
  CPURequestsFraction: string;
  /**
   * 节点上已分配 Pod 的 CPU 限制值
   */
  CPULimits: string;
  /**
   * 节点上已分配 Pod 的 CPU 限制值占 CPU 总量的比例
   */
  CPULimitsFraction: string;
  /**
   * 节点状态数组
   */
  Conditions: {
    /**
     * Condition 类型，如 MemoryPressure、DiskPressure、PIDPressure、Ready
     */
    Type?: string;
    /**
     * 状态，False、True
     */
    Status?: string;
    /**
     * 最后一次上报状态的时间
     */
    LastProbeTime?: string;
    /**
     * 最后一次状态转变时间
     */
    LastTransitionTime?: string;
    /**
     * 状态变化的原因
     */
    Reason?: string;
    /**
     * 状态变化的描述信息
     */
    Message?: string;
  }[];
  /**
   * 节点上镜像名称数组
   */
  ContainerImages: string[];
  /**
   * 字符串数组，每一项是类似 "node-role.kubernetes.io/master:NoSchedule" 的污点
   */
  Taints?: string[];
}

/**
 * GetClusterConfig - 获取集群配置文件，管理集群的凭证
 */
export interface GetClusterConfigRequest {
  /**
   * 集群ID
   */
  ClusterId: string;
}

/**
 * GetClusterConfig - 获取集群配置文件，管理集群的凭证
 */
export interface GetClusterConfigResponse {
  /**
   * 配置信息
   */
  KubeConfig: string;
  /**
   * 开启公网apiserver的情况下，有数据返回。
   */
  ExternalKubeConfig?: string;
  /**
   * 用于标示 kubeconfig 是否可以进行替换更新
   */
  Updatable?: boolean;
}

/**
 * GetUK8SVersions - 获取支持创建的UK8S集群版本、Containerd版本
 */
export interface GetUK8SVersionsRequest {
  /**
   * 集群类型，可选值为[Dedicated]
   */
  Kind: string;
}

/**
 * GetUK8SVersions - 获取支持创建的UK8S集群版本、Containerd版本
 */
export interface GetUK8SVersionsResponse {
  /**
   * UK8S 版本信息列表。
   */
  Data?: {
    /**
     * K8S 版本
     */
    K8sVersion: string;
    /**
     * Containerd 版本
     */
    ContainerdVersion: string;
  }[];
}

/**
 * ListUK8SClusterNodeV2 - 获取UK8S集群节点信息
 */
export interface ListUK8SClusterNodeV2Request {
  /**
   * UK8S集群ID
   */
  ClusterId: string;
  /**
   * 可传一个或多个节点id  不传或为空则返回所有节点
   */
  NodeIds?: string;
}

/**
 * ListUK8SClusterNodeV2 - 获取UK8S集群节点信息
 */
export interface ListUK8SClusterNodeV2Response {
  /**
   * 节点详细信息，见NodeInfoV2。
   */
  NodeSet: {
    /**
     * Node所在可用区
     */
    Zone: string;
    /**
     * NodeId，Node在UK8S处的唯一标示，如uk8s-reewqe5-sdasadsda
     */
    NodeId: string;
    /**
     * node角色，枚举值为master、node
     */
    NodeRole: string;
    /**
     * Node的状态：枚举值：初始化："Initializing"；启动中："Starting"；运行："Running"；停止中："Stopping"；停止："Stopped"；待删除："ToBeDeleted"；删除中："Deleting"；异常："Error"；安装失败："Install Fail"；
     */
    NodeStatus: string;
    /**
     * Node节点的资源类型，枚举值为UHost或UPHost。
     */
    InstanceType: string;
    /**
     * 资源名称，初始值等于NodeId，用户可在UHost或UPHost处修改。
     */
    InstanceName: string;
    /**
     * 资源ID，如uhost-xxxx，或uphost-xxxxx。
     */
    InstanceId: string;
    /**
     * 机型类别，分别对应Uhost的MachineType或PHost的PHostType。
     */
    MachineType: string;
    /**
     * CPU平台
     */
    CPUPlatform: string;
    /**
     * 主机规格族
     */
    UHostFamily: string;
    /**
     * Node节点的操作系统类别，如Linux或Windows。
     */
    OsType: string;
    /**
     * Node节点的镜像名称。
     */
    OsName: string;
    /**
     * Node节点CPU核数，单位: 核。
     */
    CPU: number;
    /**
     * 内存大小，单位: MB。
     */
    Memory: number;
    /**
     * 节点IP信息，详细信息见 UHostIPSet。
     */
    IPSet: {
      /**
       * 国际: Internation，BGP: Bgp，内网: Private
       */
      Type?: string;
      /**
       * IP资源ID (内网IP无对应的资源ID)
       */
      IPId?: string;
      /**
       * IP地址
       */
      IP?: string;
      /**
       * IP对应的带宽, 单位: Mb (内网IP不显示带宽信息)
       */
      Bandwidth?: number;
      /**
       * IP地址对应的VPC ID
       */
      VPCId?: string;
      /**
       * IP地址对应的子网 ID
       */
      SubnetId?: string;
      /**
       * Mac地址
       */
      Mac?: string;
      /**
       * IP 协议类型
       */
      IPMode?: string;
      /**
       * 网络接口资源 ID
       */
      NetworkInterfaceId?: string;
    }[];
    /**
     * 节点创建时间
     */
    CreateTime: number;
    /**
     * 节点计费到期时间
     */
    ExpireTime: number;
    /**
     * 节点所属伸缩组ID，非伸缩组创建出来的节点，伸缩组ID为Default。
     */
    AsgId: string;
    /**
     * 是否允许Pod调度到该节点，枚举值为true或false。
     */
    Unschedulable: boolean;
    /**
     * kubeproxy信息，详细信息见KubeProxy。
     */
    KubeProxy: {
      /**
       * KubeProxy模式，枚举值为[ipvs,iptables]
       */
      Mode?: string;
    };
    /**
     * 加节点时判断是否没有资源，如果返回NORESOURCE则代表没有资源了
     */
    NodeLogInfo: string;
    /**
     * 节点标签
     */
    Labels: string[];
    /**
     * Kubelet版本
     */
    KubeletVersion: string;
    /**
     * pod最大可用
     */
    MaxPod: number;
    /**
     * 内存最大可用
     */
    MaxMemory: number;
    /**
     * CPU最大可用
     */
    MaxCPU: number;
    /**
     * 已申请的pod
     */
    RequestPod: number;
    /**
     * 已申请的Memory
     */
    RequestMemory: number;
    /**
     * 已申请的CPU
     */
    RequestCPU: number;
    /**
     * Runtime 版本
     */
    RuntimeVersion: string;
    /**
     * Runtime 名字
     */
    RuntimeName: string;
    /**
     * 已使用的CPU
     */
    UsedCPU: number;
    /**
     * 已使用的Memory
     */
    UsedMemory: number;
    /**
     * 系统盘大小
     */
    BootDiskSize: number;
    /**
     * 数据盘大小，如果有多块数据盘会汇总展示，不包括PVC
     */
    DataDiskSize: number;
    /**
     * 节点的GPU颗数。
     */
    GPU?: number;
    /**
     * 节点池id
     */
    NodeGroupId?: string;
    /**
     * 边缘机房id
     */
    IDCId?: string;
    /**
     * 边缘机房
     */
    IDCName?: string;
    /**
     * 节点主机备注信息
     */
    Remark?: string;
    /**
     * 节点GPU型号(如果为GPU机型)
     */
    GPUType?: string;
    /**
     * 是否启用了容器镜像加速
     */
    ImageAccelable?: boolean;
    /**
     * 节点所属业务组
     */
    Tag?: string;
    /**
     * Pod CIDR
     */
    PodCIDR?: string;
    /**
     * 节点所属节点池名称
     */
    NodeGroupName?: string;
  }[];
  /**
   * 满足条件的节点数量，包括Master。
   */
  TotalCount: number;
}

/**
 * ListUK8SClusterV2 - 获取UK8S集群列表信息
 */
export interface ListUK8SClusterV2Request {
  /**
   * 列表起始位置偏移量，默认为0。
   */
  Offset?: number;
  /**
   * 返回数据长度，默认为20。
   */
  Limit?: number;
  /**
   * UK8S集群ID
   */
  ClusterId?: string;
}

/**
 * ListUK8SClusterV2 - 获取UK8S集群列表信息
 */
export interface ListUK8SClusterV2Response {
  /**
   * 满足条件的集群数量
   */
  ClusterCount: number;
  /**
   * 集群信息，具体参考ClusterSet
   */
  ClusterSet?: {
    /**
     * 资源名字
     */
    ClusterName: string;
    /**
     * 集群ID
     */
    ClusterId: string;
    /**
     * 所属VPC
     */
    VPCId: string;
    /**
     * 所属子网
     */
    SubnetId: string;
    /**
     * Pod网段
     */
    PodCIDR: string;
    /**
     * 服务网段
     */
    ServiceCIDR: string;
    /**
     * CNI网络模式
     */
    CNIMode: string;
    /**
     * Master 节点数量
     */
    MasterCount: number;
    /**
     * 集群apiserver地址
     */
    ApiServer: string;
    /**
     * 集群版本
     */
    K8sVersion: string;
    /**
     * 删除保护开关。0表示不开启，1表示开启。默认不开启
     */
    DeleteProtection: number;
    /**
     * 容器运行时名称
     */
    RuntimeName: string;
    /**
     * 容器运行时版本号，docker 或 containerd 版本
     */
    RuntimeVersion: string;
    /**
     * 计费/管理形态，区分"专有版"和"托管版"两种售卖形态
     */
    ClusterType: string;
    /**
     * API Server 内部回环客户端证书
     */
    LoopbackClientCert: {
      /**
       * 证书到期时间
       */
      ExpireTime?: number;
      /**
       * 证书是否进入过期告警状态
       */
      Warn?: boolean;
    };
    /**
     * 创建集群时判断如果为NORESOURCE则为没资源，否则为空
     */
    ClusterLogInfo?: string;
    /**
     * 创建时间
     */
    CreateTime?: number;
    /**
     * Node节点数量
     */
    NodeCount?: number;
    /**
     * 集群外部apiserver地址
     */
    ExternalApiServer?: string;
    /**
     * 集群状态，枚举值：初始化："INITIALIZING"；启动中："STARTING"；创建失败："CREATEFAILED"；正常运行："RUNNING"；添加节点："ADDNODE"；删除节点："DELNODE"；删除中："DELETING"；删除失败："DELETEFAILED"；错误："ERROR"；升级插件："UPDATE_PLUGIN"；更新插件信息："UPDATE_PLUGIN_INFO"；异常："ABNORMAL"；升级集群中："UPGRADING"；容器运行时切换："CONVERTING"
     */
    Status?: string;
  }[];
  /**
   * 总数
   */
  TotalCount?: number;
}

/**
 * ListUK8SNodeGroup - 列出UK8S节点池
 */
export interface ListUK8SNodeGroupRequest {
  /**
   * 集群ID
   */
  ClusterId: string;
}

/**
 * ListUK8SNodeGroup - 列出UK8S节点池
 */
export interface ListUK8SNodeGroupResponse {
  /**
   * 节点池列表
   */
  NodeGroupList?: {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone?: string;
    /**
     * 节点池ID
     */
    NodeGroupId?: string;
    /**
     * 节点池名字
     */
    NodeGroupName?: string;
    /**
     * 自定义Uhost主机名前缀。完整的自定义Uhost主机名为{NodeNamePrefix}-{NodeIP}。
     */
    NodeNamePrefix?: string;
    /**
     * 镜像ID
     */
    ImageId?: string;
    /**
     * 机型
     */
    MachineType?: string;
    /**
     * cpu平台
     */
    MinimalCpuPlatform?: string;
    /**
     * 主机规格族
     */
    UHostFamily?: string;
    /**
     * 虚拟CPU核数
     */
    CPU?: number;
    /**
     * 内存大小
     */
    Mem?: number;
    /**
     * GPU类型
     */
    GpuType?: string;
    /**
     * GPU卡核心数
     */
    GPU?: number;
    /**
     * 系统盘类型
     */
    BootDiskType?: string;
    /**
     * 系统盘大小
     */
    BootDiskSize?: number;
    /**
     * 数据盘大小
     */
    DataDiskSize?: number;
    /**
     * 数据盘类型
     */
    DataDiskType?: string;
    /**
     * 业务组
     */
    Tag?: string;
    /**
     * 付费方式
     */
    ChargeType?: string;
    /**
     * 节点id列表
     */
    NodeList?: string[];
    /**
     * 子网 ID。默认为集群创建时填写的子网ID，也可以填写集群同VPC内的子网ID。
     */
    SubnetId?: string;
    /**
     * 硬件隔离组id。可通过DescribeIsolationGroup获取。
     */
    IsolationGroupId?: string;
    /**
     * int默认110，生产环境建议小于等于110。
     */
    MaxPods?: number;
    /**
     * 用户自定义数据。当镜像支持Cloud-init Feature时可填写此字段。注意：1、总数据量大小不超过 16K；2、使用base64编码。
     */
    UserData?: string;
    /**
     * 用户自定义Shell脚本。与UserData的区别在于InitScript在节点初始化完毕后才执行，UserData则是云主机初始化时执行。
     */
    InitScript?: string;
    /**
     * Node节点污点，形式为key=value:effect，多组taints用”,“隔开,最多支持五组。
     */
    Taints?: string;
    /**
     * Node节点标签。key=value形式,多组用”,“隔开，最多5组。 如env=pro,type=game
     */
    Labels?: string;
    /**
     * Node所属的安全组id（最多5个）
     */
    SecGroupId?: {
      /**
       * 安全组名称
       */
      Id?: string;
      /**
       * 安全组id
       */
      Name?: string;
      /**
       * 安全组优先级
       */
      Priority?: string;
    }[];
    /**
     * 主机安全模式。Firewall：防火墙；SecGroup：安全组；默认值：Firewall。
     */
    SecurityMode?: string;
    /**
     * 防火墙ID，默认：Web推荐防火墙。如何查询SecurityGroupId请参见 [DescribeFirewall](api/unet-api/describe_firewall.html)。
     */
    SecurityGroupId?: string;
    /**
     * Node节点网卡配置
     */
    NetworkInterface?: {
      /**
       * EIP
       */
      EIP?: {
        /**
         * 【若绑定EIP，此参数必填】弹性IP的外网带宽, 单位为Mbps. 共享带宽模式下非必传, 非共享带宽模式必须指定非0Mbps带宽. 各地域非共享带宽的带宽范围如下： 流量计费[1-300]，带宽计费[1-800]
         */
        Bandwidth?: number;
        /**
         * 弹性IP的计费模式. 枚举值: "Traffic", 流量计费; "Bandwidth", 带宽计费; "ShareBandwidth",共享带宽模式. "Free":免费带宽模式,默认为 "Bandwidth"
         */
        PayMode?: string;
        /**
         * 绑定的共享带宽Id，仅当PayMode为ShareBandwidth时有效
         */
        ShareBandwidthId?: string;
        /**
         * 【若绑定EIP，此参数必填】弹性IP的线路。枚举值: 国际: International，BGP: Bgp。 各地域允许的线路参数如下: cn-sh1: Bgp cn-sh2: Bgp cn-gd: Bgp cn-bj1: Bgp cn-bj2: Bgp hk: International us-ca: International th-bkk: International kr-seoul:International us-ws:International ge-fra:International sg:International tw-kh:International.其他海外线路均为 International
         */
        OperatorName?: string;
        /**
         * 当前EIP代金券id。请通过DescribeCoupon接口查询，或登录用户中心查看。
         */
        CouponId?: string;
      };
    }[];
    /**
     * KubeletConfiguration
     */
    KubeletConfiguration?: {
      /**
       * 最大日志文件数量
       */
      ContainerLogMaxFiles?: number;
      /**
       * 最大日志文件大小
       */
      ContainerLogMaxSize?: string;
      /**
       * 硬性驱逐条件，EvictionCondition类型
       */
      EvictionHard?: {
        /**
         * 内存相关驱逐条件或宽限时间。
         */
        MemoryAvailable?: string;
        /**
         * 镜像文件系统存储相关驱逐条件或宽限时间。
         */
        ImagefsAvailable?: string;
        /**
         * 节点存储余量相关驱逐条件或宽限时间。
         */
        NodefsAvailable?: string;
        /**
         * 节点剩余inodes驱逐条件或宽限时间。
         */
        NodefsInodesFree?: string;
      };
      /**
       * 软性驱逐条件，EvictionCondition类型
       */
      EvictionSoft?: {
        /**
         * 内存相关驱逐条件或宽限时间。
         */
        MemoryAvailable?: string;
        /**
         * 镜像文件系统存储相关驱逐条件或宽限时间。
         */
        ImagefsAvailable?: string;
        /**
         * 节点存储余量相关驱逐条件或宽限时间。
         */
        NodefsAvailable?: string;
        /**
         * 节点剩余inodes驱逐条件或宽限时间。
         */
        NodefsInodesFree?: string;
      };
      /**
       * 软性驱逐宽限时间，EvictionCondition类型
       */
      EvictionSoftGracePeriod?: {
        /**
         * 内存相关驱逐条件或宽限时间。
         */
        MemoryAvailable?: string;
        /**
         * 镜像文件系统存储相关驱逐条件或宽限时间。
         */
        ImagefsAvailable?: string;
        /**
         * 节点存储余量相关驱逐条件或宽限时间。
         */
        NodefsAvailable?: string;
        /**
         * 节点剩余inodes驱逐条件或宽限时间。
         */
        NodefsInodesFree?: string;
      };
      /**
       * 镜像垃圾收集阈值
       */
      ImageGCHighThresholdPercent?: number;
      /**
       * 停止镜像垃圾收集阈值
       */
      ImageGCLowThresholdPercent?: number;
      /**
       * kubelet预留资源，ReservedResource类型
       */
      KubeReserved?: {
        /**
         * CPU
         */
        CPU?: string;
        /**
         * 内存
         */
        Memory?: string;
        /**
         * 存储
         */
        EphemeralStorage?: string;
        /**
         * Pid
         */
        Pid?: string;
      };
      /**
       * 系统预留资源，ReservedResource类型
       */
      SystemReserved?: {
        /**
         * CPU
         */
        CPU?: string;
        /**
         * 内存
         */
        Memory?: string;
        /**
         * 存储
         */
        EphemeralStorage?: string;
        /**
         * Pid
         */
        Pid?: string;
      };
      /**
       * 最大Pod数量
       */
      MaxPods?: number;
    };
    /**
     * 镜像名称
     */
    ImageName?: string;
    /**
     * 镜像类型
     */
    ImageType?: string;
    /**
     * 操作系统类型
     */
    OsType?: string;
    /**
     * 操作系统名称
     */
    OsName?: string;
    /**
     * 网络配置
     */
    NetCapability?: string;
    /**
     * 是否启用 UNI 网络特性
     */
    UNIFeature?: boolean;
    /**
     * 磁盘列表
     */
    Disks?: {
      /**
       * 磁盘类型。系统盘: Boot，数据盘: Data,网络盘：Udisk
       */
      Type?: string;
      /**
       * 磁盘长ID
       */
      DiskId?: string;
      /**
       * UDisk名字（仅当磁盘是UDisk时返回）
       */
      Name?: string;
      /**
       * 磁盘盘符
       */
      Drive?: string;
      /**
       * 磁盘大小，单位: GB
       */
      Size?: number;
      /**
       * 备份方案，枚举类型：BASIC_SNAPSHOT,普通快照；DATAARK,方舟。无快照则不返回该字段。
       */
      BackupType?: string;
      /**
       * 当前主机的IOPS值
       */
      IOPS?: number;
      /**
       * Yes: 加密 No: 非加密
       */
      Encrypted?: string;
      /**
       * LOCAL_NOMAL| CLOUD_NORMAL| LOCAL_SSD| CLOUD_SSD|EXCLUSIVE_LOCAL_DISK
       */
      DiskType?: string;
      /**
       * True| False
       */
      IsBoot?: string;
    }[];
    /**
     * 节点池关联的弹性伸缩组ID
     */
    RelatedAsg?: string[];
    /**
     * 节点池创建时间
     */
    CreateTime?: number;
    /**
     * 节点池更新时间
     */
    UpdateTime?: number;
  }[];
}

/**
 * ListUK8SULSConfig - 查询 UK8S 的 ULSConfig
 */
export interface ListUK8SULSConfigRequest {
  /**
   * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
   */
  Zone: string;
  /**
   * 日志服务中用于接收日志的目标 TopicId。
   */
  TopicID: string;
  /**
   * 集群 Id，如果不填，返回该账号该地域所有集群的 ULSConfig
   */
  ClusterId?: string;
}

/**
 * ListUK8SULSConfig - 查询 UK8S 的 ULSConfig
 */
export interface ListUK8SULSConfigResponse {
  /**
   * 日志服务配置,见 ClusterLogConfig
   */
  LogConfig: {
    /**
     * uk8s集群id
     */
    ClusterId: string;
    /**
     * 机器组
     */
    MachineGroup: string;
    /**
     * 定义日志的提取、解析和格式化规则。见 ULSExtractRule
     */
    ExtractRule?: {
      /**
       * 采集策略。可选值: full (全量采集存量日志), increment (从当前时间点增量采集)。默认为 full。
       */
      CollectPolicy?: string;
      /**
       * 日志原文的编码格式。可选值: utf-8, gbk。默认为 utf-8。
       */
      Encode?: string;
      /**
       * 日志解析类型，决定了如何结构化日志。
       */
      LogType?: string;
      /**
       * 当 LogType 为delimiter_log 时可选，可选字段 ' ',' ','|',';',','
       */
      Delimiter?: string;
      /**
       * 行首正则表达式。当 logType 为多行模式 (如 multiline_log 或 multiline_fullregex_log) 时，用于标识一条新日志的开始。
       */
      BeginningRegex?: string;
      /**
       * 日志提取正则表达式。当 logType 为正则模式 (如 fullregex_log 或 multiline_fullregex_log) 时，用于从日志中提取字段。
       */
      LogRegex?: string;
      /**
       * 指定时间字段。
       */
      TimeKey?: string;
      /**
       * timeKey 对应的时间格式。如： %Y-%m-%d %H:%M:%S
       */
      TimeFormat?: string;
      /**
       * 是否上传解析失败的日志。true 表示上传，false 表示丢弃。默认为 false。
       */
      UnMatchUpload?: string;
      /**
       * 如果 unMatchUpload 为 true，无法解析的日志原文将被存放在此字段指定的 Key 下。默认为 LogParseFailure。
       */
      UnMatchKey?: string;
    };
    /**
     * 定义日志的输入来源（例如容器文件）。见 ULSInputDetail
     */
    InputDetail?: {
      /**
       * 采集路径，数组。
       */
      FilePaths?: {
        /**
         * 定义采集路径
         */
        Path?: string;
        /**
         * 采集文件
         */
        File?: string;
      }[];
      /**
       * 日志输入类型。当前主要支持 container_file，表示采集容器标准输出或文件。
       */
      Type?: string;
      /**
       * 定义哪些容器相关的元数据需要附加到日志中。
       */
      InputMetadata?: {
        /**
         * 指定具体要采集元数据的容器名。如果留空，则不采集容器的元数据，可选字段：container_name,namespace,pod_name,pod_ip,pod_uid,container_id,image_name。Pod Label 元数据通过指定 InputDetail.Metadata.Labels 字段。
         */
        Container?: string;
        /**
         * 定义要采集哪些 Pod 的标签 (Labels)。可选值：*：采集所有标签。app,version：仅采集 app 和 version 这两个标签。""（空字符串）：不采集任何标签。
         */
        Labels?: string;
      };
    };
    /**
     * 定义此采集规则要匹配的目标 Pod 或工作负载。见 ULSMatchRule
     */
    MatchRule?: {
      /**
       * 容器名称匹配操作符。支持：in(包含)，notin(不包含)
       */
      ContainerOperator: string;
      /**
       * 要匹配的容器名称，*表示所有容器，用逗号分隔
       */
      Container: string;
      /**
       * 按工作负载进行匹配。
       */
      Workloads?: {
        /**
         * 工作负载所在的命名空间。
         */
        Namespace?: string;
        /**
         * 工作负载的类型，例如 deployment, statefulset, daemonset,cronjob,job。
         */
        Type?: string;
        /**
         * 工作负载的名称。
         */
        Name?: string;
      }[];
      /**
       * 按 Pod 的标签进行匹配，提供更灵活的选择。
       */
      PodLabels?: {
        /**
         * 命名空间名称的匹配操作符。可选值: in, notin。
         */
        NamespaceOperator?: string;
        /**
         * 要匹配的命名空间。namespaceOperator 存在时必需。
         */
        Namespace?: string;
        /**
         * 一个标签选择器数组，用于定义匹配的标签条件。
         */
        Labels?: {
          /**
           * 要匹配的标签的 Key。
           */
          Key?: string;
          /**
           * 标签值的匹配操作符。可选值: in, notin。
           */
          ValueOperator?: string;
          /**
           * 要匹配的标签的值。
           */
          Value?: string;
        }[];
      };
    };
    /**
     * 日志服务中用于接收日志的目标 Topic ID。
     */
    TopicID?: string;
    /**
     * 采集配置规则名称
     */
    Name?: string;
  }[];
}

/**
 * RemoveUK8SNodeGroup - 删除UK8S节点池
 */
export interface RemoveUK8SNodeGroupRequest {
  /**
   * 节点池Id
   */
  NodeGroupId: string;
  /**
   * 集群id
   */
  ClusterId: string;
}

/**
 * RemoveUK8SNodeGroup - 删除UK8S节点池
 */
export interface RemoveUK8SNodeGroupResponse {}

/**
 * UpdateUK8SULSConfig - 更新指定UK8S集群的日志采集规则。
 */
export interface UpdateUK8SULSConfigRequest {
  /**
   * 可用区。参见地域和可用区列表：https://docs.ucloud.cn/api/summary/regionlist
   */
  Zone: string;
  /**
   * 要修改的日志采集规则名称。名称长度不能超过253个字符，只能包含小写字母、数字、破折号和点，并且必须以字母或数字开头和结尾。
   */
  Name: string;
  /**
   * UK8S集群ID。
   */
  ClusterId: string;
  /**
   * 日志服务中用于接收日志的目标Topic ID。不填写时保持原Topic ID不变。
   */
  TopicID?: string;
  /**
   *
   */
  ExtractRule?: {
    /**
     * 采集策略。可选值：full（全量采集存量日志）、increment（从当前时间点增量采集）。默认为full。
     */
    CollectPolicy?: string;
    /**
     * 日志原文的编码格式。可选值：utf-8、gbk。默认为utf-8。
     */
    Encode?: string;
    /**
     * 日志解析类型。可选值：json、delimiter、full_regex、multi_line_full_regex、multi_line_delimiter、minimal_list、multi_line。
     */
    LogType: string;
    /**
     * 行首正则表达式。multi_line、multi_line_full_regex或multi_line_delimiter模式下，BeginningRegex和BeginningRegexBase64必须至少填写一个。
     */
    BeginningRegex?: string;
    /**
     * Base64编码的行首正则表达式。填写时优先于BeginningRegex。
     */
    BeginningRegexBase64?: string;
    /**
     * 日志提取正则表达式。full_regex或multi_line_full_regex模式下，LogRegex和LogRegexBase64必须至少填写一个。
     */
    LogRegex?: string;
    /**
     * Base64编码的日志提取正则表达式。填写时优先于LogRegex。
     */
    LogRegexBase64?: string;
    /**
     * 分隔符。delimiter或multi_line_delimiter模式下可用。可选值：space、tab、|、;、,。
     */
    Delimiter?: string;
    /**
     * Base64编码的分隔符。填写时优先于Delimiter。
     */
    DelimiterBase64?: string;
    /**
     * 包含日志时间的字段名。
     */
    TimeKey?: string;
    /**
     * TimeKey对应的时间格式。json、full_regex或multi_line_full_regex模式下，填写TimeKey时必须同时填写TimeFormat。
     */
    TimeFormat?: string;
    /**
     * 是否上传解析失败的日志。字符串true表示上传，false表示丢弃。默认为false。
     */
    UnMatchUpload?: string;
    /**
     * 存放无法解析的日志原文的Key。UnMatchUpload为true时必须填写。
     */
    UnMatchKey?: string;
    /**
     * 提取后的字段名。仅适用于delimiter、full_regex、multi_line_full_regex和multi_line_delimiter。
     */
    Keys?: string[];
  };
  /**
   *
   */
  InputDetail?: {
    /**
     * 日志输入类型。可选值：container_file、container_stdout。
     */
    Type: string;
    /**
     * 容器标准输出流类型。仅适用于container_stdout，可选值：all、stdout、stderr，默认为all。
     */
    Stream?: string;
    /**
     *
     */
    Metadata?: {
      /**
       * 要附加到日志中的容器元数据字段，多个字段使用逗号分隔。可选字段：container_name、namespace、pod_name、pod_ip、pod_uid、container_id、image_name。留空表示不采集容器元数据。
       */
      Container?: string;
      /**
       * 要采集的Pod标签。*表示采集所有标签，app,version表示仅采集指定标签，空字符串表示不采集标签。
       */
      Labels?: string;
    };
    /**
     *
     */
    FilePaths?: {
      /**
       * 日志采集路径。仅适用于container_file。
       */
      Path?: string;
      /**
       * 要采集的文件名。仅适用于container_file。
       */
      File?: string;
    }[];
  };
  /**
   *
   */
  MatchRule?: {
    /**
     * 要匹配的容器名称，*表示所有容器，多个名称使用逗号分隔。
     */
    Container?: string;
    /**
     * 容器名称匹配操作符。可选值：in、notin。填写该参数时必须同时填写MatchRule.Container。
     */
    ContainerOperator?: string;
    /**
     *
     */
    Workloads?: {
      /**
       * 按工作负载匹配时，工作负载所在的命名空间。Workloads和PodLabels不能同时设置。
       */
      Namespace?: string;
      /**
       * 工作负载类型。可选值：deployment、statefulset、daemonset、job、cronjob。
       */
      Type?: string;
      /**
       * 工作负载名称。
       */
      Name?: string;
    }[];
    /**
     *
     */
    PodLabels?: {
      /**
       * 按Pod标签匹配时，命名空间名称的匹配操作符。可选值：in、notin。填写该参数时必须同时填写MatchRule.PodLabels.Namespace。PodLabels和Workloads不能同时设置。
       */
      NamespaceOperator?: string;
      /**
       * 按Pod标签匹配时要匹配的命名空间。
       */
      Namespace?: string;
      /**
       *
       */
      Labels?: {
        /**
         * 按Pod标签匹配时，要匹配的标签Key。
         */
        Key?: string;
        /**
         * 标签值匹配操作符。可选值：in、notin。
         */
        ValueOperator?: string;
        /**
         * 要匹配的标签值。
         */
        Value?: string;
      }[];
    };
  };
}

/**
 * UpdateUK8SULSConfig - 更新指定UK8S集群的日志采集规则。
 */
export interface UpdateUK8SULSConfigResponse {}
