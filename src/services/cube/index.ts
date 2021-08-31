import Client from '../../core/client';
import Request from '../../core/request';
import { ConfigOptions } from '../../core/config';
import { CredentialOptions } from '../../core/credential';

/**
 * This client is used to call actions of **cube** service
 */
export default class CubeClient extends Client {
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
   * CreateCubeDeployment - 创建Cube的Deployment
   *
   * See also: https://docs.ucloud.cn/api/cube-api/create_cube_deployment
   */
  createCubeDeployment(
    request?: CreateCubeDeploymentRequest
  ): Promise<CreateCubeDeploymentResponse> {
    const args = { Action: 'CreateCubeDeployment', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as CreateCubeDeploymentResponse
    );
  }

  /**
   * CreateCubePod - 创建Pod
   *
   * See also: https://docs.ucloud.cn/api/cube-api/create_cube_pod
   */
  createCubePod(
    request?: CreateCubePodRequest
  ): Promise<CreateCubePodResponse> {
    const args = { Action: 'CreateCubePod', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as CreateCubePodResponse
    );
  }

  /**
   * DeleteCubeDeployment - 删除Cube的Deployment
   *
   * See also: https://docs.ucloud.cn/api/cube-api/delete_cube_deployment
   */
  deleteCubeDeployment(
    request?: DeleteCubeDeploymentRequest
  ): Promise<DeleteCubeDeploymentResponse> {
    const args = { Action: 'DeleteCubeDeployment', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DeleteCubeDeploymentResponse
    );
  }

  /**
   * DeleteCubePod - 删除Pod
   *
   * See also: https://docs.ucloud.cn/api/cube-api/delete_cube_pod
   */
  deleteCubePod(
    request?: DeleteCubePodRequest
  ): Promise<DeleteCubePodResponse> {
    const args = { Action: 'DeleteCubePod', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DeleteCubePodResponse
    );
  }

  /**
   * GetCubeDeployment - 获取Deployment的详细信息
   *
   * See also: https://docs.ucloud.cn/api/cube-api/get_cube_deployment
   */
  getCubeDeployment(
    request?: GetCubeDeploymentRequest
  ): Promise<GetCubeDeploymentResponse> {
    const args = { Action: 'GetCubeDeployment', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as GetCubeDeploymentResponse
    );
  }

  /**
   * GetCubeExtendInfo - 获取Cube的额外信息
   *
   * See also: https://docs.ucloud.cn/api/cube-api/get_cube_extend_info
   */
  getCubeExtendInfo(
    request?: GetCubeExtendInfoRequest
  ): Promise<GetCubeExtendInfoResponse> {
    const args = { Action: 'GetCubeExtendInfo', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as GetCubeExtendInfoResponse
    );
  }

  /**
   * GetCubeMetrics - 获取Cube实例（Pod，PodX，Deploy等）监控数据时间序列
   *
   * See also: https://docs.ucloud.cn/api/cube-api/get_cube_metrics
   */
  getCubeMetrics(
    request?: GetCubeMetricsRequest
  ): Promise<GetCubeMetricsResponse> {
    const args = { Action: 'GetCubeMetrics', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as GetCubeMetricsResponse
    );
  }

  /**
   * GetCubePod - 获取Pod的详细信息
   *
   * See also: https://docs.ucloud.cn/api/cube-api/get_cube_pod
   */
  getCubePod(request?: GetCubePodRequest): Promise<GetCubePodResponse> {
    const args = { Action: 'GetCubePod', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as GetCubePodResponse
    );
  }

  /**
   * GetCubePrice - 获取cube的价格
   *
   * See also: https://docs.ucloud.cn/api/cube-api/get_cube_price
   */
  getCubePrice(request?: GetCubePriceRequest): Promise<GetCubePriceResponse> {
    const args = { Action: 'GetCubePrice', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as GetCubePriceResponse
    );
  }

  /**
   * ListCubePod - 获取Pods列表
   *
   * See also: https://docs.ucloud.cn/api/cube-api/list_cube_pod
   */
  listCubePod(request?: ListCubePodRequest): Promise<ListCubePodResponse> {
    const args = { Action: 'ListCubePod', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as ListCubePodResponse
    );
  }

  /**
   * ModifyCubeExtendInfo - 修改Cube额外信息
   *
   * See also: https://docs.ucloud.cn/api/cube-api/modify_cube_extend_info
   */
  modifyCubeExtendInfo(
    request?: ModifyCubeExtendInfoRequest
  ): Promise<ModifyCubeExtendInfoResponse> {
    const args = { Action: 'ModifyCubeExtendInfo', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as ModifyCubeExtendInfoResponse
    );
  }

  /**
   * ModifyCubeTag - 修改业务组名字
   *
   * See also: https://docs.ucloud.cn/api/cube-api/modify_cube_tag
   */
  modifyCubeTag(
    request?: ModifyCubeTagRequest
  ): Promise<ModifyCubeTagResponse> {
    const args = { Action: 'ModifyCubeTag', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as ModifyCubeTagResponse
    );
  }

  /**
   * RenewCubePod - 更新Pod
   *
   * See also: https://docs.ucloud.cn/api/cube-api/renew_cube_pod
   */
  renewCubePod(request?: RenewCubePodRequest): Promise<RenewCubePodResponse> {
    const args = { Action: 'RenewCubePod', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as RenewCubePodResponse
    );
  }

  /**
   * UpdateCubeDeployment - 更新Deployment
   *
   * See also: https://docs.ucloud.cn/api/cube-api/update_cube_deployment
   */
  updateCubeDeployment(
    request?: UpdateCubeDeploymentRequest
  ): Promise<UpdateCubeDeploymentResponse> {
    const args = { Action: 'UpdateCubeDeployment', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as UpdateCubeDeploymentResponse
    );
  }
}

/**
 * CreateCubeDeployment - 创建Cube的Deployment
 */
export interface CreateCubeDeploymentRequest {
  /**
   * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
   */
  Zone: string;
  /**
   * VPCId
   */
  VPCId: string;
  /**
   * 子网Id
   */
  SubnetId: string;
  /**
   * base64编码的Deployment的yaml。大小不超过16KB
   */
  Deployment: string;
  /**
   * Deployment名称
   */
  Name?: string;
  /**
   * 计费模式。枚举值为： \\ > Year，按年付费； \\ > Month，按月付费；\\ > Postpay， \\ 后付费；默认为后付费
   */
  ChargeType?: string;
  /**
   * Cpu平台（V6：Intel、A2：AMD），默认V6。支持的地域（北京2B、北京2E、上海2A、广东、香港 、东京）目前北京2E仅有A2，其余地域仅有V6
   */
  CpuPlatform?: string;
  /**
   * base64编码的kubeconfig。大小不超过16KB
   */
  KubeConfig?: string;
  /**
   * 购买时长。默认:值 1。 月付时，此参数传0，代表购买至月末。
   */
  Quantity?: number;
  /**
   * 业务组。默认：Default（Default即为未分组）
   */
  Tag?: string;
}

/**
 * CreateCubeDeployment - 创建Cube的Deployment
 */
export interface CreateCubeDeploymentResponse {
  /**
   * 控制器ID
   */
  DeploymentId: string;
  /**
   * 经过base64编码的Deployment的yaml
   */
  Deployment?: string;
}

/**
 * CreateCubePod - 创建Pod
 */
export interface CreateCubePodRequest {
  /**
   * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
   */
  Zone: string;
  /**
   * VPCId
   */
  VPCId: string;
  /**
   * 子网Id
   */
  SubnetId: string;
  /**
   * base64编码的Pod的yaml。大小不超过16KB
   */
  Pod: string;
  /**
   * pod所在组
   */
  Group?: string;
  /**
   * pod的名字
   */
  Name?: string;
  /**
   * 业务组。默认：Default（Default即为未分组）
   */
  Tag?: string;
  /**
   * Cpu平台（V6：Intel、A2：AMD、Auto），默认Auto。支持的地域（北京2B、北京2E、上海2A、广东、香港 、东京）目前北京2E仅有A2，其余地域仅有V6
   */
  CpuPlatform?: string;
  /**
   * 计费模式。枚举值为： \\ > Year，按年付费； \\ > Month，按月付费；\\ > Postpay， \\ 后付费；默认为后付费
   */
  ChargeType?: string;
  /**
   * 购买时长。默认:值 1。 月付时，此参数传0，代表购买至月末。
   */
  Quantity?: number;
  /**
   * base64编码的kubeconfig。大小不超过16KB
   */
  KubeConfig?: string;
  /**
   * 代金券ID。请通过DescribeCoupon接口查询，或登录用户中心查看
   */
  CouponId?: string;
}

/**
 * CreateCubePod - 创建Pod
 */
export interface CreateCubePodResponse {
  /**
   * base64编码的yaml
   */
  Pod: string;
  /**
   * cube的资源Id
   */
  CubeId?: string;
}

/**
 * DeleteCubeDeployment - 删除Cube的Deployment
 */
export interface DeleteCubeDeploymentRequest {
  /**
   * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
   */
  Zone?: string;
  /**
   * 控制器Id
   */
  DeploymentId: string;
}

/**
 * DeleteCubeDeployment - 删除Cube的Deployment
 */
export interface DeleteCubeDeploymentResponse {}

/**
 * DeleteCubePod - 删除Pod
 */
export interface DeleteCubePodRequest {
  /**
   * 可用区。参见 [可用区列表](../summary/regionlist.html)
   */
  Zone?: string;
  /**
   * cubeid和uid任意一个（必须）
   */
  Uid?: string;
  /**
   * cubeid和uid任意一个（必须）
   */
  CubeId?: string;
  /**
   * 删除cube时是否释放绑定的EIP。默认为false。
   */
  ReleaseEIP?: boolean;
}

/**
 * DeleteCubePod - 删除Pod
 */
export interface DeleteCubePodResponse {}

/**
 * GetCubeDeployment - 获取Deployment的详细信息
 */
export interface GetCubeDeploymentRequest {
  /**
   * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
   */
  Zone?: string;
  /**
   * Deployment的Id
   */
  DeploymentId: string;
}

/**
 * GetCubeDeployment - 获取Deployment的详细信息
 */
export interface GetCubeDeploymentResponse {
  /**
   * 经过base64编码的Deployment的yaml
   */
  Deployment: string;
}

/**
 * GetCubeExtendInfo - 获取Cube的额外信息
 */
export interface GetCubeExtendInfoRequest {
  /**
   * 可用区。参见 [可用区列表](../summary/regionlist.html)
   */
  Zone?: string;
  /**
   * id列表以逗号(,)分割
   */
  CubeIds: string;
}

/**
 * GetCubeExtendInfo - 获取Cube的额外信息
 */
export interface GetCubeExtendInfoResponse {
  /**
   * CubeExtendInfo
   */
  ExtendInfo: {
    /**
     * Cube的Id
     */
    CubeId: string;
    /**
     * Cube的名称
     */
    Name?: string;
    /**
     * EIPSet
     */
    Eip?: {
      /**
       * EIP带宽值
       */
      Bandwidth?: number;
      /**
       * 带宽类型0标准普通带宽，1表示共享带宽
       */
      BandwidthType?: number;
      /**
       * EIP创建时间
       */
      CreateTime?: number;
      /**
       * EIP地址
       */
      EIPAddr?: {
        /**
         * IP地址
         */
        IP?: string;
        /**
         * 线路名称BGP或者internalation
         */
        OperatorName?: string;
      }[];
      /**
       * EIPId
       */
      EIPId?: string;
      /**
       * 付费模式，带宽付费或者流量付费
       */
      PayMode?: string;
      /**
       * EIP绑定对象的资源Id
       */
      Resource?: string;
      /**
       * EIP状态，表示使用中或者空闲
       */
      Status?: string;
      /**
       * EIP权重
       */
      Weight?: number;
    }[];
    /**
     * 资源有效期
     */
    Expiration?: number;
    /**
     * 业务组名称
     */
    Tag?: string;
  }[];
}

/**
 * GetCubeMetrics - 获取Cube实例（Pod，PodX，Deploy等）监控数据时间序列
 */
export interface GetCubeMetricsRequest {
  /**
   * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
   */
  Zone: string;
  /**
   * Cube实例资源ID
   */
  ResourceId: string;
  /**
   * 监控指标名称
   */
  MetricName: string[];
  /**
   * 开始时间
   */
  BeginTime: number;
  /**
   * 结束时间，必须大于开始时间
   */
  EndTime: number;
  /**
   * Pod内容器名称
   */
  ContainerName: string;
}

/**
 * GetCubeMetrics - 获取Cube实例（Pod，PodX，Deploy等）监控数据时间序列
 */
export interface GetCubeMetricsResponse {
  /**
   * 时间序列集合
   */
  DataSets?: {
    /**
     *
     */
    MetricName?: string;
    /**
     *
     */
    Values?: {
      /**
       *
       */
      Value: number;
      /**
       *
       */
      Timestamp?: number;
    }[];
  }[];
}

/**
 * GetCubePod - 获取Pod的详细信息
 */
export interface GetCubePodRequest {
  /**
   * 可用区。参见 [可用区列表](../summary/regionlist.html)
   */
  Zone?: string;
  /**
   * CubeId和Uid任意一个
   */
  CubeId?: string;
  /**
   * CubeId和Uid任意一个
   */
  Uid?: string;
}

/**
 * GetCubePod - 获取Pod的详细信息
 */
export interface GetCubePodResponse {
  /**
   * base64编码的pod的yaml
   */
  Pod: string;
}

/**
 * GetCubePrice - 获取cube的价格
 */
export interface GetCubePriceRequest {
  /**
   * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
   */
  Zone: string;
  /**
   * 购买数量
   */
  Count: string;
  /**
   * CPU 配置，单位为毫核，例如如 1 核则须输入 1000
   */
  Cpu: string;
  /**
   * 内存配置，单位为 Mi，例如 1Gi 须输入 1024
   */
  Mem: string;
  /**
   * 计费模式。枚举值为： \\ > Year，按年付费； \\ > Month，按月付费；\\ > Dynamic，按小时预付费 \\ > Postpay，按秒后付费，默认为月付
   */
  ChargeType: string;
  /**
   * 购买时长。默认:值 1。按小时购买（Dynamic/Postpay）时无需此参数。 月付时，此参数传0，代表购买至月末。
   */
  Quantity: number;
}

/**
 * GetCubePrice - 获取cube的价格
 */
export interface GetCubePriceResponse {
  /**
   * 折扣后价格，单位为分
   */
  Price: number;
  /**
   * 列表价格，单位为分
   */
  OriginalPrice: number;
}

/**
 * ListCubePod - 获取Pods列表
 */
export interface ListCubePodRequest {
  /**
   * 可用区。参见 [可用区列表](../summary/regionlist.html)
   */
  Zone?: string;
  /**
   * VPC的Id
   */
  VPCId?: string;
  /**
   * 子网Id
   */
  SubnetId?: string;
  /**
   * 组名称
   */
  Group?: string;
  /**
   * 默认0
   */
  Offset?: number;
  /**
   * 默认20
   */
  Limit?: number;
}

/**
 * ListCubePod - 获取Pods列表
 */
export interface ListCubePodResponse {
  /**
   * Pod列表，每条数据都做了base64编码
   */
  Pods: string[];
  /**
   * Cube的总数
   */
  TotalCount?: number;
}

/**
 * ModifyCubeExtendInfo - 修改Cube额外信息
 */
export interface ModifyCubeExtendInfoRequest {
  /**
   * 可用区。参见 [可用区列表](../summary/regionlist.html)
   */
  Zone?: string;
  /**
   * cube的id
   */
  CubeId: string;
  /**
   * 修改的名字，规则（^[a-zA-Z0-9-_.\u4e00-\u9fa5]{1,32}）
   */
  Name?: string;
}

/**
 * ModifyCubeExtendInfo - 修改Cube额外信息
 */
export interface ModifyCubeExtendInfoResponse {}

/**
 * ModifyCubeTag - 修改业务组名字
 */
export interface ModifyCubeTagRequest {
  /**
   * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
   */
  Zone?: string;
  /**
   * CubeId
   */
  CubeId: string;
  /**
   * 业务组名称
   */
  Tag: string;
}

/**
 * ModifyCubeTag - 修改业务组名字
 */
export interface ModifyCubeTagResponse {
  /**
   * CubeId
   */
  CubeId: string;
}

/**
 * RenewCubePod - 更新Pod
 */
export interface RenewCubePodRequest {
  /**
   * 可用区。参见 [可用区列表](../summary/regionlist.html)
   */
  Zone?: string;
  /**
   * 容器Id
   */
  CubeId: string;
  /**
   * base64编码的Pod的yaml
   */
  Pod: string;
}

/**
 * RenewCubePod - 更新Pod
 */
export interface RenewCubePodResponse {
  /**
   * base64编码过的yaml，需要解码获取信息
   */
  Pod: string;
}

/**
 * UpdateCubeDeployment - 更新Deployment
 */
export interface UpdateCubeDeploymentRequest {
  /**
   * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
   */
  Zone?: string;
  /**
   * Deployment的Id
   */
  DeploymentId: string;
  /**
   * base64编码的Deployment的yaml。大小不超过16KB
   */
  Deployment: string;
  /**
   * Deployment的name
   */
  Name?: string;
}

/**
 * UpdateCubeDeployment - 更新Deployment
 */
export interface UpdateCubeDeploymentResponse {
  /**
   * 经过base64编码的Deployment的yaml
   */
  Deployment?: string;
}
