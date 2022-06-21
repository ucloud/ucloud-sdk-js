import Client from '../../core/client';
import Request from '../../core/request';
import { ConfigOptions } from '../../core/config';
import { CredentialOptions } from '../../core/credential';

/**
 * This client is used to call actions of **unet** service
 */
export default class UNetClient extends Client {
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
   * AllocateEIP - 根据提供信息, 申请弹性IP
   *
   * See also: https://docs.ucloud.cn/api/unet-api/allocate_eip
   */
  allocateEIP(request?: AllocateEIPRequest): Promise<AllocateEIPResponse> {
    const args = { Action: 'AllocateEIP', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as AllocateEIPResponse
    );
  }

  /**
   * AllocateShareBandwidth - 开通共享带宽
   *
   * See also: https://docs.ucloud.cn/api/unet-api/allocate_share_bandwidth
   */
  allocateShareBandwidth(
    request?: AllocateShareBandwidthRequest
  ): Promise<AllocateShareBandwidthResponse> {
    const args = { Action: 'AllocateShareBandwidth', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as AllocateShareBandwidthResponse
    );
  }

  /**
   * AssociateEIPWithShareBandwidth - 将EIP加入共享带宽
   *
   * See also: https://docs.ucloud.cn/api/unet-api/associate_eip_with_share_bandwidth
   */
  associateEIPWithShareBandwidth(
    request?: AssociateEIPWithShareBandwidthRequest
  ): Promise<AssociateEIPWithShareBandwidthResponse> {
    const args = {
      Action: 'AssociateEIPWithShareBandwidth',
      ...(request || {}),
    };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as AssociateEIPWithShareBandwidthResponse
    );
  }

  /**
   * BindEIP - 将尚未使用的弹性IP绑定到指定的资源
   *
   * See also: https://docs.ucloud.cn/api/unet-api/bind_eip
   */
  bindEIP(request?: BindEIPRequest): Promise<BindEIPResponse> {
    const args = { Action: 'BindEIP', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as BindEIPResponse
    );
  }

  /**
   * CreateBandwidthPackage - 为非共享带宽模式下, 已绑定资源实例的带宽计费弹性IP附加临时带宽包
   *
   * See also: https://docs.ucloud.cn/api/unet-api/create_bandwidth_package
   */
  createBandwidthPackage(
    request?: CreateBandwidthPackageRequest
  ): Promise<CreateBandwidthPackageResponse> {
    const args = { Action: 'CreateBandwidthPackage', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as CreateBandwidthPackageResponse
    );
  }

  /**
   * CreateFirewall - 创建防火墙
   *
   * See also: https://docs.ucloud.cn/api/unet-api/create_firewall
   */
  createFirewall(
    request?: CreateFirewallRequest
  ): Promise<CreateFirewallResponse> {
    const args = { Action: 'CreateFirewall', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as CreateFirewallResponse
    );
  }

  /**
   * DeleteBandwidthPackage - 删除弹性IP上已附加带宽包
   *
   * See also: https://docs.ucloud.cn/api/unet-api/delete_bandwidth_package
   */
  deleteBandwidthPackage(
    request?: DeleteBandwidthPackageRequest
  ): Promise<DeleteBandwidthPackageResponse> {
    const args = { Action: 'DeleteBandwidthPackage', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DeleteBandwidthPackageResponse
    );
  }

  /**
   * DeleteFirewall - 删除防火墙
   *
   * See also: https://docs.ucloud.cn/api/unet-api/delete_firewall
   */
  deleteFirewall(
    request?: DeleteFirewallRequest
  ): Promise<DeleteFirewallResponse> {
    const args = { Action: 'DeleteFirewall', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DeleteFirewallResponse
    );
  }

  /**
   * DescribeBandwidthPackage - 获取某地域下的带宽包信息
   *
   * See also: https://docs.ucloud.cn/api/unet-api/describe_bandwidth_package
   */
  describeBandwidthPackage(
    request?: DescribeBandwidthPackageRequest
  ): Promise<DescribeBandwidthPackageResponse> {
    const args = { Action: 'DescribeBandwidthPackage', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DescribeBandwidthPackageResponse
    );
  }

  /**
   * DescribeBandwidthUsage - 获取带宽用量信息
   *
   * See also: https://docs.ucloud.cn/api/unet-api/describe_bandwidth_usage
   */
  describeBandwidthUsage(
    request?: DescribeBandwidthUsageRequest
  ): Promise<DescribeBandwidthUsageResponse> {
    const args = { Action: 'DescribeBandwidthUsage', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DescribeBandwidthUsageResponse
    );
  }

  /**
   * DescribeEIP - 获取弹性IP信息
   *
   * See also: https://docs.ucloud.cn/api/unet-api/describe_eip
   */
  describeEIP(request?: DescribeEIPRequest): Promise<DescribeEIPResponse> {
    const args = { Action: 'DescribeEIP', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DescribeEIPResponse
    );
  }

  /**
   * DescribeFirewall - 获取防火墙组信息
   *
   * See also: https://docs.ucloud.cn/api/unet-api/describe_firewall
   */
  describeFirewall(
    request?: DescribeFirewallRequest
  ): Promise<DescribeFirewallResponse> {
    const args = { Action: 'DescribeFirewall', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DescribeFirewallResponse
    );
  }

  /**
   * DescribeFirewallResource - 获取防火墙组所绑定资源的外网IP
   *
   * See also: https://docs.ucloud.cn/api/unet-api/describe_firewall_resource
   */
  describeFirewallResource(
    request?: DescribeFirewallResourceRequest
  ): Promise<DescribeFirewallResourceResponse> {
    const args = { Action: 'DescribeFirewallResource', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DescribeFirewallResourceResponse
    );
  }

  /**
   * DescribeShareBandwidth - 获取共享带宽信息
   *
   * See also: https://docs.ucloud.cn/api/unet-api/describe_share_bandwidth
   */
  describeShareBandwidth(
    request?: DescribeShareBandwidthRequest
  ): Promise<DescribeShareBandwidthResponse> {
    const args = { Action: 'DescribeShareBandwidth', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DescribeShareBandwidthResponse
    );
  }

  /**
   * DescribeShareBandwidthPrice - 获取共享带宽价格
   *
   * See also: https://docs.ucloud.cn/api/unet-api/describe_share_bandwidth_price
   */
  describeShareBandwidthPrice(
    request?: DescribeShareBandwidthPriceRequest
  ): Promise<DescribeShareBandwidthPriceResponse> {
    const args = { Action: 'DescribeShareBandwidthPrice', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DescribeShareBandwidthPriceResponse
    );
  }

  /**
   * DescribeShareBandwidthUpdatePrice - 获取共享带宽升级价格
   *
   * See also: https://docs.ucloud.cn/api/unet-api/describe_share_bandwidth_update_price
   */
  describeShareBandwidthUpdatePrice(
    request?: DescribeShareBandwidthUpdatePriceRequest
  ): Promise<DescribeShareBandwidthUpdatePriceResponse> {
    const args = {
      Action: 'DescribeShareBandwidthUpdatePrice',
      ...(request || {}),
    };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DescribeShareBandwidthUpdatePriceResponse
    );
  }

  /**
   * DisassociateEIPWithShareBandwidth - 将EIP移出共享带宽
   *
   * See also: https://docs.ucloud.cn/api/unet-api/disassociate_eip_with_share_bandwidth
   */
  disassociateEIPWithShareBandwidth(
    request?: DisassociateEIPWithShareBandwidthRequest
  ): Promise<DisassociateEIPWithShareBandwidthResponse> {
    const args = {
      Action: 'DisassociateEIPWithShareBandwidth',
      ...(request || {}),
    };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DisassociateEIPWithShareBandwidthResponse
    );
  }

  /**
   * DisassociateFirewall - 解绑资源上的防火墙
   *
   * See also: https://docs.ucloud.cn/api/unet-api/disassociate_firewall
   */
  disassociateFirewall(
    request?: DisassociateFirewallRequest
  ): Promise<DisassociateFirewallResponse> {
    const args = { Action: 'DisassociateFirewall', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DisassociateFirewallResponse
    );
  }

  /**
   * GetEIPPayMode - 获取弹性IP计费模式
   *
   * See also: https://docs.ucloud.cn/api/unet-api/get_eip_pay_mode
   */
  getEIPPayMode(
    request?: GetEIPPayModeRequest
  ): Promise<GetEIPPayModeResponse> {
    const args = { Action: 'GetEIPPayMode', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as GetEIPPayModeResponse
    );
  }

  /**
   * GetEIPPrice - 获取弹性IP价格
   *
   * See also: https://docs.ucloud.cn/api/unet-api/get_eip_price
   */
  getEIPPrice(request?: GetEIPPriceRequest): Promise<GetEIPPriceResponse> {
    const args = { Action: 'GetEIPPrice', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as GetEIPPriceResponse
    );
  }

  /**
   * GetEIPUpgradePrice - 获取弹性IP带宽改动价格
   *
   * See also: https://docs.ucloud.cn/api/unet-api/get_eip_upgrade_price
   */
  getEIPUpgradePrice(
    request?: GetEIPUpgradePriceRequest
  ): Promise<GetEIPUpgradePriceResponse> {
    const args = { Action: 'GetEIPUpgradePrice', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as GetEIPUpgradePriceResponse
    );
  }

  /**
   * GetThroughputDailyBillingInfo - 获取流量计费EIP每日流量计费信息
   *
   * See also: https://docs.ucloud.cn/api/unet-api/get_throughput_daily_billing_info
   */
  getThroughputDailyBillingInfo(
    request?: GetThroughputDailyBillingInfoRequest
  ): Promise<GetThroughputDailyBillingInfoResponse> {
    const args = {
      Action: 'GetThroughputDailyBillingInfo',
      ...(request || {}),
    };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as GetThroughputDailyBillingInfoResponse
    );
  }

  /**
   * GrantFirewall - 将防火墙应用到资源上
   *
   * See also: https://docs.ucloud.cn/api/unet-api/grant_firewall
   */
  grantFirewall(
    request?: GrantFirewallRequest
  ): Promise<GrantFirewallResponse> {
    const args = { Action: 'GrantFirewall', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as GrantFirewallResponse
    );
  }

  /**
   * ModifyEIPBandwidth - 调整弹性IP的外网带宽
   *
   * See also: https://docs.ucloud.cn/api/unet-api/modify_eip_bandwidth
   */
  modifyEIPBandwidth(
    request?: ModifyEIPBandwidthRequest
  ): Promise<ModifyEIPBandwidthResponse> {
    const args = { Action: 'ModifyEIPBandwidth', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as ModifyEIPBandwidthResponse
    );
  }

  /**
   * ModifyEIPWeight - 修改弹性IP的外网出口权重
   *
   * See also: https://docs.ucloud.cn/api/unet-api/modify_eip_weight
   */
  modifyEIPWeight(
    request?: ModifyEIPWeightRequest
  ): Promise<ModifyEIPWeightResponse> {
    const args = { Action: 'ModifyEIPWeight', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as ModifyEIPWeightResponse
    );
  }

  /**
   * ReleaseEIP - 释放弹性IP资源, 所释放弹性IP必须为非绑定状态.
   *
   * See also: https://docs.ucloud.cn/api/unet-api/release_eip
   */
  releaseEIP(request?: ReleaseEIPRequest): Promise<ReleaseEIPResponse> {
    const args = { Action: 'ReleaseEIP', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as ReleaseEIPResponse
    );
  }

  /**
   * ReleaseShareBandwidth - 关闭共享带宽
   *
   * See also: https://docs.ucloud.cn/api/unet-api/release_share_bandwidth
   */
  releaseShareBandwidth(
    request?: ReleaseShareBandwidthRequest
  ): Promise<ReleaseShareBandwidthResponse> {
    const args = { Action: 'ReleaseShareBandwidth', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as ReleaseShareBandwidthResponse
    );
  }

  /**
   * ResizeShareBandwidth - 调整共享带宽的带宽值
   *
   * See also: https://docs.ucloud.cn/api/unet-api/resize_share_bandwidth
   */
  resizeShareBandwidth(
    request?: ResizeShareBandwidthRequest
  ): Promise<ResizeShareBandwidthResponse> {
    const args = { Action: 'ResizeShareBandwidth', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as ResizeShareBandwidthResponse
    );
  }

  /**
   * SetEIPPayMode - 设置弹性IP计费模式, 切换时会涉及付费/退费.
   *
   * See also: https://docs.ucloud.cn/api/unet-api/set_eip_pay_mode
   */
  setEIPPayMode(
    request?: SetEIPPayModeRequest
  ): Promise<SetEIPPayModeResponse> {
    const args = { Action: 'SetEIPPayMode', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as SetEIPPayModeResponse
    );
  }

  /**
   * UnBindEIP - 将弹性IP从资源上解绑
   *
   * See also: https://docs.ucloud.cn/api/unet-api/un_bind_eip
   */
  unBindEIP(request?: UnBindEIPRequest): Promise<UnBindEIPResponse> {
    const args = { Action: 'UnBindEIP', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as UnBindEIPResponse
    );
  }

  /**
   * UpdateEIPAttribute - 更新弹性IP名称，业务组，备注等属性字段
   *
   * See also: https://docs.ucloud.cn/api/unet-api/update_eip_attribute
   */
  updateEIPAttribute(
    request?: UpdateEIPAttributeRequest
  ): Promise<UpdateEIPAttributeResponse> {
    const args = { Action: 'UpdateEIPAttribute', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as UpdateEIPAttributeResponse
    );
  }

  /**
   * UpdateFirewall - 更新防火墙规则
   *
   * See also: https://docs.ucloud.cn/api/unet-api/update_firewall
   */
  updateFirewall(
    request?: UpdateFirewallRequest
  ): Promise<UpdateFirewallResponse> {
    const args = { Action: 'UpdateFirewall', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as UpdateFirewallResponse
    );
  }

  /**
   * UpdateFirewallAttribute - 更新防火墙规则
   *
   * See also: https://docs.ucloud.cn/api/unet-api/update_firewall_attribute
   */
  updateFirewallAttribute(
    request?: UpdateFirewallAttributeRequest
  ): Promise<UpdateFirewallAttributeResponse> {
    const args = { Action: 'UpdateFirewallAttribute', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as UpdateFirewallAttributeResponse
    );
  }
}

/**
 * AllocateEIP - 根据提供信息, 申请弹性IP
 */
export interface AllocateEIPRequest {
  /**
   * 弹性IP线路，枚举值：国际线路， International；BGP线路：Bgp；精品BGP：BGPPro。使用BGP线路的地域：北京二、上海金融云、上海二、广州等，其他地域均使用国际线路。使用BGPPro线路的地域：香港
   */
  OperatorName: string;
  /**
   * 弹性IP的外网带宽, 单位为Mbps. 共享带宽模式必须指定0M带宽, 非共享带宽模式必须指定非0Mbps带宽. 各地域非共享带宽的带宽范围如下： 流量计费[1-300]，带宽计费[1-10000]
   */
  Bandwidth: number;
  /**
   * 业务组名称, 默认为 "Default"
   */
  Tag?: string;
  /**
   * 付费方式, 枚举值为: Year, 按年付费; Month, 按月付费; Dynamic, 按时付费，默认为按月付费。
   */
  ChargeType?: string;
  /**
   * 购买的时长, 默认: 1
   */
  Quantity?: number;
  /**
   * 弹性IP的计费模式. 枚举值: "Traffic", 流量计费; "Bandwidth", 带宽计费; "ShareBandwidth",共享带宽模式. 默认为 "Bandwidth".“PostAccurateBandwidth”：带宽后付费模式
   */
  PayMode?: string;
  /**
   * 绑定的共享带宽Id,仅当PayMode为ShareBandwidth时有效
   */
  ShareBandwidthId?: string;
  /**
   * 弹性IP的名称, 默认为 "EIP"
   */
  Name?: string;
  /**
   * 购买EIP数量，默认值为1
   */
  Count?: number;
  /**
   * 弹性IP的备注, 默认为空
   */
  Remark?: string;
  /**
   * 代金券ID, 默认不使用
   */
  CouponId?: string;
}

/**
 * AllocateEIP - 根据提供信息, 申请弹性IP
 */
export interface AllocateEIPResponse {
  /**
   * 申请到的EIP资源详情 参见 UnetAllocateEIPSet
   */
  EIPSet?: {
    /**
     * 申请到的EIP资源ID
     */
    EIPId?: string;
    /**
     * 申请到的IPv4地址.
     */
    EIPAddr?: {
      /**
       * 运营商信息如: 电信: Telecom, 联通: Unicom, 国际: International, Duplet: 双线IP（电信+联通), BGP: Bgp
       */
      OperatorName?: string;
      /**
       * IP地址
       */
      IP?: string;
    }[];
  }[];
}

/**
 * AllocateShareBandwidth - 开通共享带宽
 */
export interface AllocateShareBandwidthRequest {
  /**
   * 共享带宽名字
   */
  Name: string;
  /**
   * 付费方式:Year 按年,Month 按月,Dynamic 按时;
   */
  ChargeType: string;
  /**
   * 共享带宽值
   */
  ShareBandwidth: number;
  /**
   * 购买时长
   */
  Quantity?: number;
  /**
   * 共享带宽类型，IPv4或者IPv6，不传默认IPv4
   */
  IPVersion?: string;
}

/**
 * AllocateShareBandwidth - 开通共享带宽
 */
export interface AllocateShareBandwidthResponse {
  /**
   * 共享带宽资源Id
   */
  ShareBandwidthId?: string;
}

/**
 * AssociateEIPWithShareBandwidth - 将EIP加入共享带宽
 */
export interface AssociateEIPWithShareBandwidthRequest {
  /**
   * 要加入共享带宽的EIP的资源Id
   */
  EIPIds: string[];
  /**
   * 共享带宽ID
   */
  ShareBandwidthId: string;
  /**
   * 共享带宽类型，IPv4或者IPv6，不传默认IPv4
   */
  IPVersion?: string;
}

/**
 * AssociateEIPWithShareBandwidth - 将EIP加入共享带宽
 */
export interface AssociateEIPWithShareBandwidthResponse {}

/**
 * BindEIP - 将尚未使用的弹性IP绑定到指定的资源
 */
export interface BindEIPRequest {
  /**
   * 弹性IP的资源Id
   */
  EIPId: string;
  /**
   * 弹性IP请求绑定的资源类型, 枚举值为: uhost: 云主机; ulb, 负载均衡器 upm: 物理机; hadoophost: 大数据集群;fortresshost：堡垒机；udockhost：容器；udhost：私有专区主机；natgw：natgw；udb：udb；vpngw：ipsec vpn；ucdr：云灾备；dbaudit：数据库审计；uni：虚拟网卡；cube，Cube容器。如果EIP为普通带宽计费，且带宽值高于2G，则只允许绑定在快杰型云主机和ULB
   */
  ResourceType: string;
  /**
   * 弹性IP请求绑定的资源ID
   */
  ResourceId: string;
  /**
   * EIP与内网IP进行绑定时需要传入UNI下未绑定过EIP的内网IP
   */
  PrivateIP?: string;
}

/**
 * BindEIP - 将尚未使用的弹性IP绑定到指定的资源
 */
export interface BindEIPResponse {}

/**
 * CreateBandwidthPackage - 为非共享带宽模式下, 已绑定资源实例的带宽计费弹性IP附加临时带宽包
 */
export interface CreateBandwidthPackageRequest {
  /**
   * 带宽大小(单位Mbps), 取值范围[2,800] (最大值受地域限制)
   */
  Bandwidth: number;
  /**
   * 所绑定弹性IP的资源ID
   */
  EIPId: string;
  /**
   * 带宽包有效时长, 取值范围为大于0的整数, 即该带宽包在EnableTime到 EnableTime+TimeRange时间段内生效
   */
  TimeRange: number;
  /**
   * 生效时间, 格式为 Unix timestamp, 默认为立即开通
   */
  EnableTime?: number;
  /**
   * 代金券ID
   */
  CouponId?: string;
}

/**
 * CreateBandwidthPackage - 为非共享带宽模式下, 已绑定资源实例的带宽计费弹性IP附加临时带宽包
 */
export interface CreateBandwidthPackageResponse {
  /**
   * 所创建带宽包的资源ID
   */
  BandwidthPackageId?: string;
}

/**
 * CreateFirewall - 创建防火墙
 */
export interface CreateFirewallRequest {
  /**
   * 防火墙规则，例如：TCP|22|192.168.1.1/22|DROP|LOW|禁用22端口，第一个参数代表协议：第二个参数代表端口号，第三个参数为ip，第四个参数为ACCEPT（接受）和DROP（拒绝），第五个参数优先级：HIGH（高），MEDIUM（中），LOW（低），第六个参数为该条规则的自定义备注,bj1不支持添加备注
   */
  Rule: string[];
  /**
   * 防火墙名称
   */
  Name: string;
  /**
   * 防火墙业务组，默认为Default
   */
  Tag?: string;
  /**
   * 防火墙描述，默认为空
   */
  Remark?: string;
}

/**
 * CreateFirewall - 创建防火墙
 */
export interface CreateFirewallResponse {
  /**
   * 防火墙ID
   */
  FWId?: string;
}

/**
 * DeleteBandwidthPackage - 删除弹性IP上已附加带宽包
 */
export interface DeleteBandwidthPackageRequest {
  /**
   * 带宽包资源ID
   */
  BandwidthPackageId: string;
}

/**
 * DeleteBandwidthPackage - 删除弹性IP上已附加带宽包
 */
export interface DeleteBandwidthPackageResponse {}

/**
 * DeleteFirewall - 删除防火墙
 */
export interface DeleteFirewallRequest {
  /**
   * 防火墙资源ID
   */
  FWId: string;
}

/**
 * DeleteFirewall - 删除防火墙
 */
export interface DeleteFirewallResponse {}

/**
 * DescribeBandwidthPackage - 获取某地域下的带宽包信息
 */
export interface DescribeBandwidthPackageRequest {
  /**
   * 返回数据分页值, 取值范围为 [0,10000000] 之间的整数, 默认为20
   */
  Limit?: number;
  /**
   * 返回数据偏移量, 默认为0
   */
  Offset?: number;
}

/**
 * DescribeBandwidthPackage - 获取某地域下的带宽包信息
 */
export interface DescribeBandwidthPackageResponse {
  /**
   * 满足条件的带宽包总数
   */
  TotalCount?: number;
  /**
   * 带宽包详细信息, 参见 UnetBandwidthPackageSet
   */
  DataSets?: {
    /**
     * 带宽包的资源ID
     */
    BandwidthPackageId?: string;
    /**
     * 生效时间, 格式为 Unix Timestamp
     */
    EnableTime?: number;
    /**
     * 失效时间, 格式为 Unix Timestamp
     */
    DisableTime?: number;
    /**
     * 创建时间, 格式为 Unix Timestamp
     */
    CreateTime?: number;
    /**
     * 带宽包的临时带宽值, 单位Mbps
     */
    Bandwidth?: number;
    /**
     * 带宽包所绑定弹性IP的资源ID
     */
    EIPId?: string;
    /**
     * 带宽包所绑定弹性IP的详细信息,只有当EIPId对应双线IP时, EIPAddr的长度为2, 其他情况, EIPAddr长度均为1.参见 EIPAddrSet
     */
    EIPAddr?: {
      /**
       * 运营商信息, 枚举值为:  BGP: BGP; International: 国际.
       */
      OperatorName?: string;
      /**
       * 弹性IP地址
       */
      IP?: string;
    }[];
  }[];
}

/**
 * DescribeBandwidthUsage - 获取带宽用量信息
 */
export interface DescribeBandwidthUsageRequest {
  /**
   * 返回数据分页值, 取值范围为 [0,10000000] 之间的整数, 默认为20
   */
  Limit?: number;
  /**
   * 返回数据偏移量, 默认为0
   */
  OffSet?: number;
  /**
   * 弹性IP的资源Id. 如果为空, 则返回当前 Region中符合条件的所有EIP的带宽用量, n为自然数
   */
  EIPIds?: string[];
}

/**
 * DescribeBandwidthUsage - 获取带宽用量信息
 */
export interface DescribeBandwidthUsageResponse {
  /**
   * EIPSet中的元素个数
   */
  TotalCount?: number;
  /**
   * 单个弹性IP的带宽用量详细信息, 详见 UnetBandwidthUsageEIPSet, 如没有弹性IP资源则没有该返回值。
   */
  EIPSet?: {
    /**
     * 最近5分钟带宽用量, 单位Mbps
     */
    CurBandwidth?: number;
    /**
     * 弹性IP资源ID
     */
    EIPId?: string;
  }[];
}

/**
 * DescribeEIP - 获取弹性IP信息
 */
export interface DescribeEIPRequest {
  /**
   * 弹性IP的资源ID如果为空, 则返回当前 Region中符合条件的的所有EIP
   */
  EIPIds?: string[];
  /**
   * 数据偏移量, 默认为0
   */
  Offset?: number;
  /**
   * 数据分页值, 默认为20
   */
  Limit?: number;
  /**
   * IP地址，支持通过ip查询，如果ip与EIP都传，会取并集查询
   */
  IPs?: string[];
}

/**
 * DescribeEIP - 获取弹性IP信息
 */
export interface DescribeEIPResponse {
  /**
   * 满足条件的弹性IP总数
   */
  TotalCount?: number;
  /**
   * 未绑定的弹性IP总数
   */
  UnbindCount?: number;
  /**
   * 满足条件的弹性IP带宽总和, 单位Mbps
   */
  TotalBandwidth?: number;
  /**
   * 弹性IP列表, 每项参数详见 UnetEIPSet
   */
  EIPSet?: {
    /**
     * 弹性IP的资源ID
     */
    EIPId?: string;
    /**
     * 外网出口权重, 默认为50, 范围[0-100]
     */
    Weight?: number;
    /**
     * 带宽模式, 枚举值为: 0: 非共享带宽模式, 1: 共享带宽模式
     */
    BandwidthType?: number;
    /**
     * 弹性IP的带宽, 单位为Mbps, 当BandwidthType=1时, 该处显示为共享带宽值. 当BandwidthType=0时, 该处显示这个弹性IP的带宽.
     */
    Bandwidth?: number;
    /**
     * 弹性IP的资源绑定状态, 枚举值为: used: 已绑定, free: 未绑定, freeze: 已冻结
     */
    Status?: string;
    /**
     * 付费方式, 枚举值为: Year, 按年付费; Month, 按月付费; Dynamic, 按小时付费; Trial, 试用. 按小时付费和试用这两种付费模式需要开通权限.
     */
    ChargeType?: string;
    /**
     * 弹性IP的创建时间, 格式为Unix Timestamp
     */
    CreateTime?: number;
    /**
     * 弹性IP的到期时间, 格式为Unix Timestamp
     */
    ExpireTime?: number;
    /**
     * 弹性IP的详细信息列表, 具体结构见下方 UnetEIPResourceSet
     */
    Resource?: {
      /**
       * 已绑定的资源类型, 枚举值为: uhost, 云主机；natgw：NAT网关；ulb：负载均衡器；upm: 物理机; hadoophost: 大数据集群;fortresshost：堡垒机；udockhost：容器；udhost：私有专区主机；vpngw：IPSec VPN；ucdr：云灾备；dbaudit：数据库审计，uni：虚拟网卡。
       */
      ResourceType?: string;
      /**
       * 已绑定的资源名称
       */
      ResourceName?: string;
      /**
       * 已绑定资源的资源ID
       */
      ResourceID?: string;
      /**
       * 资源绑定的虚拟网卡的类型。uni，虚拟网卡。
       */
      SubResourceType?: string;
      /**
       * 资源绑定的虚拟网卡的名称
       */
      SubResourceName?: string;
      /**
       * 资源绑定的虚拟网卡的ID
       */
      SubResourceId?: string;
      /**
       * 弹性IP的资源ID
       */
      EIPId?: string;
    };
    /**
     * 弹性IP的详细信息列表, 具体结构见下方 UnetEIPAddrSet
     */
    EIPAddr?: {
      /**
       * 运营商信息如: 电信: Telecom, 联通: Unicom, 国际: International, Duplet: 双线IP（电信+联通), BGP: Bgp
       */
      OperatorName?: string;
      /**
       * IP地址
       */
      IP?: string;
    }[];
    /**
     * 弹性IP的名称,缺省值为 "EIP"
     */
    Name?: string;
    /**
     * 弹性IP的业务组标识, 缺省值为 "Default"
     */
    Tag?: string;
    /**
     * 弹性IP的备注, 缺省值为 ""
     */
    Remark?: string;
    /**
     * 弹性IP的计费模式, 枚举值为: "Bandwidth", 带宽计费; "Traffic", 流量计费; "ShareBandwidth",共享带宽模式. 默认为 "Bandwidth".
     */
    PayMode?: string;
    /**
     * 共享带宽信息 参见 ShareBandwidthSet
     */
    ShareBandwidthSet?: {
      /**
       * 共享带宽带宽值
       */
      ShareBandwidth?: number;
      /**
       * 共享带宽的资源名称
       */
      ShareBandwidthName?: string;
      /**
       * 共享带宽ID
       */
      ShareBandwidthId?: string;
    };
    /**
     * 弹性IP是否到期
     */
    Expire?: boolean;
  }[];
}

/**
 * DescribeFirewall - 获取防火墙组信息
 */
export interface DescribeFirewallRequest {
  /**
   * 防火墙ID，默认为返回所有防火墙
   */
  FWId?: string;
  /**
   * 绑定防火墙组的资源类型，默认为全部资源类型。枚举值为："unatgw"，NAT网关； "uhost"，云主机；“uni”，虚拟网卡； "upm"，物理云主机； "hadoophost"，hadoop节点； "fortresshost"，堡垒机； "udhost"，私有专区主机；"udockhost"，容器；"dbaudit"，数据库审计.
   */
  ResourceType?: string;
  /**
   * 绑定防火墙组的资源ID
   */
  ResourceId?: string;
  /**
   * 返回数据长度，默认为20，最大10000000
   */
  Limit?: number;
  /**
   * 列表起始位置偏移量，默认为0
   */
  Offset?: number;
}

/**
 * DescribeFirewall - 获取防火墙组信息
 */
export interface DescribeFirewallResponse {
  /**
   * 获取的防火墙组详细信息 参见 FirewallDataSet
   */
  DataSet?: {
    /**
     * 防火墙ID
     */
    FWId: string;
    /**
     * 安全组ID（即将废弃）
     */
    GroupId: string;
    /**
     * 防火墙名称
     */
    Name?: string;
    /**
     * 防火墙业务组
     */
    Tag?: string;
    /**
     * 防火墙备注
     */
    Remark?: string;
    /**
     * 防火墙绑定资源数量
     */
    ResourceCount?: number;
    /**
     * 防火墙组创建时间，格式为Unix Timestamp
     */
    CreateTime?: number;
    /**
     * 防火墙组类型，枚举值为： "user defined", 用户自定义防火墙； "recommend web", 默认Web防火墙； "recommend non web", 默认非Web防火墙
     */
    Type?: string;
    /**
     * 防火墙组中的规则列表，参见 FirewallRuleSet
     */
    Rule?: {
      /**
       * 源地址
       */
      SrcIP?: string;
      /**
       * 优先级
       */
      Priority?: string;
      /**
       * 协议类型
       */
      ProtocolType?: string;
      /**
       * 目标端口
       */
      DstPort?: string;
      /**
       * 防火墙动作
       */
      RuleAction?: string;
      /**
       * 防火墙规则备注
       */
      Remark?: string;
    }[];
  }[];
  /**
   * 防火墙资源数量
   */
  TotalCount?: number;
}

/**
 * DescribeFirewallResource - 获取防火墙组所绑定资源的外网IP
 */
export interface DescribeFirewallResourceRequest {
  /**
   * 防火墙ID
   */
  FWId: string;
  /**
   * 返回数据长度，默认为20，最大1000
   */
  Limit?: number;
  /**
   * 列表起始位置偏移量，默认为0
   */
  Offset?: number;
}

/**
 * DescribeFirewallResource - 获取防火墙组所绑定资源的外网IP
 */
export interface DescribeFirewallResourceResponse {
  /**
   * 资源列表，见 ResourceSet
   */
  ResourceSet?: {
    /**
     * 可用区
     */
    Zone?: number;
    /**
     * 资源绑定的虚拟网卡的名称
     */
    SubResourceName: string;
    /**
     * 资源绑定的虚拟网卡的ID
     */
    SubResourceId: string;
    /**
     * 资源绑定的虚拟网卡的类型，“uni”，虚拟网卡。
     */
    SubResourceType: string;
    /**
     * 名称
     */
    Name?: string;
    /**
     * 内网IP
     */
    PrivateIP?: string;
    /**
     * 备注
     */
    Remark?: string;
    /**
     * 绑定该防火墙的资源id
     */
    ResourceID?: string;
    /**
     * 绑定防火墙组的资源类型。"unatgw"，NAT网关； "uhost"，云主机； "upm"，物理云主机； "hadoophost"，hadoop节点； "fortresshost"，堡垒机； "udhost"，私有专区主机；"udockhost"，容器；"dbaudit"，数据库审计，“uni”，虚拟网卡。
     */
    ResourceType?: string;
    /**
     * 状态
     */
    Status?: number;
    /**
     * 业务组
     */
    Tag?: string;
  }[];
  /**
   * 绑定资源总数
   */
  TotalCount?: number;
}

/**
 * DescribeShareBandwidth - 获取共享带宽信息
 */
export interface DescribeShareBandwidthRequest {
  /**
   * 需要返回的共享带宽Id
   */
  ShareBandwidthIds?: string[];
}

/**
 * DescribeShareBandwidth - 获取共享带宽信息
 */
export interface DescribeShareBandwidthResponse {
  /**
   * 共享带宽信息组 参见 UnetShareBandwidthSet
   */
  DataSet?: {
    /**
     * 共享带宽类型
     */
    IPVersion: string;
    /**
     * 共享带宽值(预付费)/共享带宽峰值(后付费), 单位Mbps
     */
    ShareBandwidth?: number;
    /**
     * 共享带宽的资源ID
     */
    ShareBandwidthId?: string;
    /**
     * 付费方式, 预付费:Year 按年,Month 按月,Dynamic 按需;后付费:PostPay(按月)
     */
    ChargeType?: string;
    /**
     * 创建时间, 格式为Unix Timestamp
     */
    CreateTime?: number;
    /**
     * 过期时间, 格式为Unix Timestamp
     */
    ExpireTime?: number;
    /**
     * EIP信息,详情见 EIPSetData
     */
    EIPSet?: {
      /**
       * EIP带宽值
       */
      Bandwidth?: number;
      /**
       * EIP的IP信息，详情见EIPAddrSet
       */
      EIPAddr?: {
        /**
         * 运营商信息, 枚举值为:  BGP: BGP; International: 国际.
         */
        OperatorName?: string;
        /**
         * 弹性IP地址
         */
        IP?: string;
      }[];
      /**
       * EIP资源Id
       */
      EIPId?: string;
    }[];
    /**
     * 共享带宽名称
     */
    Name?: string;
  }[];
  /**
   * 符合条件的共享带宽总数，大于等于返回DataSet长度
   */
  TotalCount?: number;
}

/**
 * DescribeShareBandwidthPrice - 获取共享带宽价格
 */
export interface DescribeShareBandwidthPriceRequest {
  /**
   * 付费方式, 预付费:Year 按年,Month 按月,Dynamic 按需;
   */
  ChargeType: string;
  /**
   * 共享带宽值
   */
  ShareBandwidth: number;
  /**
   * 购买数量
   */
  Quantity?: number;
  /**
   * 香港地域支持：BGPPro和International。其他地域无需填写该字段
   */
  OperatorName?: string;
}

/**
 * DescribeShareBandwidthPrice - 获取共享带宽价格
 */
export interface DescribeShareBandwidthPriceResponse {
  /**
   * 共享带宽总价格
   */
  TotalPrice?: number;
}

/**
 * DescribeShareBandwidthUpdatePrice - 获取共享带宽升级价格
 */
export interface DescribeShareBandwidthUpdatePriceRequest {
  /**
   * 共享带宽Id
   */
  ShareBandwidthId: string;
  /**
   * 共享带宽值
   */
  ShareBandwidth: number;
}

/**
 * DescribeShareBandwidthUpdatePrice - 获取共享带宽升级价格
 */
export interface DescribeShareBandwidthUpdatePriceResponse {
  /**
   * 共享带宽升降级价格
   */
  Price: number;
}

/**
 * DisassociateEIPWithShareBandwidth - 将EIP移出共享带宽
 */
export interface DisassociateEIPWithShareBandwidthRequest {
  /**
   * 共享带宽ID
   */
  ShareBandwidthId: string;
  /**
   * 移出共享带宽后，EIP的外网带宽, 单位为Mbps. 各地域带宽范围如下：  流量计费[1-200],带宽计费[1-800]
   */
  Bandwidth: number;
  /**
   * EIP的资源Id；默认移出该共享带宽下所有的EIP
   */
  EIPIds?: string[];
  /**
   * 移出共享带宽后，EIP的计费模式. 枚举值: "Traffic", 流量计费; "Bandwidth", 带宽计费;  默认为 "Bandwidth".
   */
  PayMode?: string;
  /**
   * 共享带宽类型，IPv4或者IPv6，不传默认IPv4
   */
  IPVersion?: string;
}

/**
 * DisassociateEIPWithShareBandwidth - 将EIP移出共享带宽
 */
export interface DisassociateEIPWithShareBandwidthResponse {}

/**
 * DisassociateFirewall - 解绑资源上的防火墙
 */
export interface DisassociateFirewallRequest {
  /**
   * 防火墙ID
   */
  FWId: string;
  /**
   * 需要解绑的资源ID
   */
  ResourceId: string;
  /**
   * 资源类型：ULB 表示负载均衡
   */
  ResourceType: string;
}

/**
 * DisassociateFirewall - 解绑资源上的防火墙
 */
export interface DisassociateFirewallResponse {}

/**
 * GetEIPPayMode - 获取弹性IP计费模式
 */
export interface GetEIPPayModeRequest {
  /**
   * 弹性IP的资源Id
   */
  EIPId: string[];
}

/**
 * GetEIPPayMode - 获取弹性IP计费模式
 */
export interface GetEIPPayModeResponse {
  /**
   * EIP的计费模式, 参见 EIPPayModeSet
   */
  EIPPayMode?: {
    /**
     * EIP的资源ID
     */
    EIPId?: string;
    /**
     * EIP的计费模式. 枚举值为：Bandwidth, 带宽计费;Traffic, 流量计费; "ShareBandwidth",共享带宽模式
     */
    EIPPayMode?: string;
  }[];
}

/**
 * GetEIPPrice - 获取弹性IP价格
 */
export interface GetEIPPriceRequest {
  /**
   * 弹性IP的线路如下: 国际: International BGP: Bgp 各地域允许的线路参数如下: cn-sh1: Bgp cn-sh2: Bgp cn-gd: Bgp cn-bj1: Bgp cn-bj2: Bgp hk: International us-ca: International th-bkk: International kr-seoul:International us-ws:International ge-fra:International sg:International tw-kh:International.其他海外线路均为 International,泉州为移动单线cn-qz:ChinaMobile
   */
  OperatorName: string;
  /**
   * 弹性IP的外网带宽, 单位为Mbps, 范围 [0-800]
   */
  Bandwidth: number;
  /**
   * 付费方式, 枚举值为: Year, 按年付费; Month, 按月付费; Dynamic, 按时付费; 默认为获取三种价格
   */
  ChargeType?: string;
  /**
   * 弹性IP计费方式r. 枚举值为: Traffic, 流量计费; Bandwidth, 带宽计费; "ShareBandwidth",共享带宽模式. 默认为Bandwidth
   */
  PayMode?: string;
  /**
   * 购买时长。默认: 1。按小时购买(Dynamic)时无需此参数。 月付时，此参数传0，代表了购买至月末
   */
  Quantity?: number;
}

/**
 * GetEIPPrice - 获取弹性IP价格
 */
export interface GetEIPPriceResponse {
  /**
   * 弹性IP价格详情 详情见 EIPPriceDetailSet
   */
  PriceSet?: {
    /**
     * 弹性IP付费方式
     */
    ChargeType?: string;
    /**
     * 购买弹性IP的实际价格, 单位"元"
     */
    Price?: number;
    /**
     * 弹性IP的原价，单位“元”
     */
    OriginalPrice?: number;
    /**
     * 资源有效期, 以Unix Timestamp表示
     */
    PurchaseValue?: number;
  }[];
}

/**
 * GetEIPUpgradePrice - 获取弹性IP带宽改动价格
 */
export interface GetEIPUpgradePriceRequest {
  /**
   * 弹性IP的资源ID
   */
  EIPId: string;
  /**
   * 弹性IP的外网带宽, 单位为Mbps, 范围 [1-800]
   */
  Bandwidth: number;
}

/**
 * GetEIPUpgradePrice - 获取弹性IP带宽改动价格
 */
export interface GetEIPUpgradePriceResponse {
  /**
   * 调整带宽后的EIP价格, 单位为"元", 如需退费此处为负值
   */
  Price?: number;
}

/**
 * GetThroughputDailyBillingInfo - 获取流量计费EIP每日流量计费信息
 */
export interface GetThroughputDailyBillingInfoRequest {
  /**
   * EIP的资源ID
   */
  EIPId: string;
  /**
   * 查询开始时间时间戳
   */
  StartTime: number;
  /**
   * 查询结束时间时间戳
   */
  EndTime: number;
}

/**
 * GetThroughputDailyBillingInfo - 获取流量计费EIP每日流量计费信息
 */
export interface GetThroughputDailyBillingInfoResponse {
  /**
   * EIP流量计费信息，详见模型ThroughputDailyBillingInfo
   */
  Stats?: {
    /**
     * 计费开始时间
     */
    StartTime?: number;
    /**
     * 计费结束时间
     */
    EndTime?: number;
    /**
     * 计费流量，单位“GB”
     */
    QuantityOut?: number;
    /**
     * 是否已计费，“Yes”或者“No”
     */
    BillingState?: string;
  }[];
  /**
   * 计费总流量
   */
  TotalOut?: number;
  /**
   * 资源ID
   */
  EIPId?: string;
}

/**
 * GrantFirewall - 将防火墙应用到资源上
 */
export interface GrantFirewallRequest {
  /**
   * 防火墙资源ID
   */
  FWId: string;
  /**
   * 绑定防火墙组的资源类型，默认为全部资源类型。枚举值为："unatgw"，NAT网关； "uhost"，云主机； "upm"，物理云主机； "hadoophost"，hadoop节点； "fortresshost"，堡垒机； "udhost"，私有专区主机；"udockhost"，容器；"dbaudit"，数据库审计，”uni“，虚拟网卡，“cube”，Cube容器实例。
   */
  ResourceType: string;
  /**
   * 所应用资源ID
   */
  ResourceId: string;
}

/**
 * GrantFirewall - 将防火墙应用到资源上
 */
export interface GrantFirewallResponse {}

/**
 * ModifyEIPBandwidth - 调整弹性IP的外网带宽
 */
export interface ModifyEIPBandwidthRequest {
  /**
   * 弹性IP的资源ID
   */
  EIPId: string;
  /**
   * 弹性IP的外网带宽, 单位为Mbps. 各地域的带宽值范围如下：流量计费[1-200],带宽计费[1-800]
   */
  Bandwidth: number;
}

/**
 * ModifyEIPBandwidth - 调整弹性IP的外网带宽
 */
export interface ModifyEIPBandwidthResponse {}

/**
 * ModifyEIPWeight - 修改弹性IP的外网出口权重
 */
export interface ModifyEIPWeightRequest {
  /**
   * 弹性IP的资源ID
   */
  EIPId: string;
  /**
   * 外网出口权重, 范围[0-100] 取值为0时, 该弹性IP不会被使用. 取值为100时, 同主机下只会使用这个弹性IP，其他弹性IP不会被使用 请勿将多个绑定在同一资源的弹性IP设置为相同权重
   */
  Weight: number;
}

/**
 * ModifyEIPWeight - 修改弹性IP的外网出口权重
 */
export interface ModifyEIPWeightResponse {}

/**
 * ReleaseEIP - 释放弹性IP资源, 所释放弹性IP必须为非绑定状态.
 */
export interface ReleaseEIPRequest {
  /**
   * 弹性IP的资源ID
   */
  EIPId: string;
}

/**
 * ReleaseEIP - 释放弹性IP资源, 所释放弹性IP必须为非绑定状态.
 */
export interface ReleaseEIPResponse {}

/**
 * ReleaseShareBandwidth - 关闭共享带宽
 */
export interface ReleaseShareBandwidthRequest {
  /**
   * 共享带宽ID
   */
  ShareBandwidthId: string;
  /**
   * 关闭共享带宽后，各EIP恢复为的带宽值
   */
  EIPBandwidth: number;
  /**
   * 默认为 Bandwidth 带宽计费
   */
  PayMode?: string;
}

/**
 * ReleaseShareBandwidth - 关闭共享带宽
 */
export interface ReleaseShareBandwidthResponse {}

/**
 * ResizeShareBandwidth - 调整共享带宽的带宽值
 */
export interface ResizeShareBandwidthRequest {
  /**
   * 带宽值，单位为Mb，范围 [20-5000] (最大值受地域限制)
   */
  ShareBandwidth: number;
  /**
   * 共享带宽的Id
   */
  ShareBandwidthId: string;
}

/**
 * ResizeShareBandwidth - 调整共享带宽的带宽值
 */
export interface ResizeShareBandwidthResponse {}

/**
 * SetEIPPayMode - 设置弹性IP计费模式, 切换时会涉及付费/退费.
 */
export interface SetEIPPayModeRequest {
  /**
   * 弹性IP的资源Id
   */
  EIPId: string;
  /**
   * 计费模式. 枚举值："Traffic", 流量计费模式; "Bandwidth", 带宽计费模式
   */
  PayMode: string;
  /**
   * 调整的目标带宽值, 单位Mbps. 各地域的带宽值范围如下: 流量计费[1-200],其余情况[1-800]
   */
  Bandwidth: number;
}

/**
 * SetEIPPayMode - 设置弹性IP计费模式, 切换时会涉及付费/退费.
 */
export interface SetEIPPayModeResponse {}

/**
 * UnBindEIP - 将弹性IP从资源上解绑
 */
export interface UnBindEIPRequest {
  /**
   * 弹性IP的资源Id
   */
  EIPId: string;
  /**
   * 弹性IP请求解绑的资源类型, 枚举值为: uhost: 云主机; ulb, 负载均衡器 upm: 物理机; hadoophost: 大数据集群;fortresshost：堡垒机；udockhost：容器；udhost：私有专区主机；natgw：NAT网关；udb：udb；vpngw：ipsec vpn；ucdr：云灾备；dbaudit：数据库审计；
   */
  ResourceType: string;
  /**
   * 弹性IP请求解绑的资源ID
   */
  ResourceId: string;
}

/**
 * UnBindEIP - 将弹性IP从资源上解绑
 */
export interface UnBindEIPResponse {}

/**
 * UpdateEIPAttribute - 更新弹性IP名称，业务组，备注等属性字段
 */
export interface UpdateEIPAttributeRequest {
  /**
   * EIP资源ID
   */
  EIPId: string;
  /**
   * 名字（Name Tag Remark都为空则报错）
   */
  Name?: string;
  /**
   * 业务
   */
  Tag?: string;
  /**
   * 备注
   */
  Remark?: string;
}

/**
 * UpdateEIPAttribute - 更新弹性IP名称，业务组，备注等属性字段
 */
export interface UpdateEIPAttributeResponse {}

/**
 * UpdateFirewall - 更新防火墙规则
 */
export interface UpdateFirewallRequest {
  /**
   * 防火墙资源ID
   */
  FWId: string;
  /**
   * 防火墙规则，例如：TCP|22|192.168.1.1/22|DROP|LOW|禁用22端口，第一个参数代表协议：第二个参数代表端口号，第三个参数为ip，第四个参数为ACCEPT（接受）和DROP（拒绝），第五个参数优先级：HIGH（高），MEDIUM（中），LOW（低），第六个参数为该条规则的自定义备注
   */
  Rule: string[];
}

/**
 * UpdateFirewall - 更新防火墙规则
 */
export interface UpdateFirewallResponse {
  /**
   * 防火墙id
   */
  FWId?: string;
}

/**
 * UpdateFirewallAttribute - 更新防火墙规则
 */
export interface UpdateFirewallAttributeRequest {
  /**
   * 防火墙资源ID
   */
  FWId: string;
  /**
   * 防火墙名称，默认为空，为空则不做修改。Name,Tag,Remark必须填写1个及以上
   */
  Name?: string;
  /**
   * 防火墙业务组，默认为空，为空则不做修改。Name,Tag,Remark必须填写1个及以上
   */
  Tag?: string;
  /**
   * 防火墙备注，默认为空，为空则不做修改。Name,Tag,Remark必须填写1个及以上
   */
  Remark?: string;
}

/**
 * UpdateFirewallAttribute - 更新防火墙规则
 */
export interface UpdateFirewallAttributeResponse {}
