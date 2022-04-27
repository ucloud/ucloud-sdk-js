import Client from '../../core/client';
import Request from '../../core/request';
import { ConfigOptions } from '../../core/config';
import { CredentialOptions } from '../../core/credential';

/**
 * This client is used to call actions of **ipsecvpn** service
 */
export default class IPSecVPNClient extends Client {
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
   * CreateRemoteVPNGateway - 创建客户VPN网关
   *
   * See also: https://docs.ucloud.cn/api/ipsecvpn-api/create_remote_vpn_gateway
   */
  createRemoteVPNGateway(
    request?: CreateRemoteVPNGatewayRequest
  ): Promise<CreateRemoteVPNGatewayResponse> {
    const args = { Action: 'CreateRemoteVPNGateway', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as CreateRemoteVPNGatewayResponse
    );
  }

  /**
   * CreateVPNGateway - 创建VPN网关
   *
   * See also: https://docs.ucloud.cn/api/ipsecvpn-api/create_vpn_gateway
   */
  createVPNGateway(
    request?: CreateVPNGatewayRequest
  ): Promise<CreateVPNGatewayResponse> {
    const args = { Action: 'CreateVPNGateway', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as CreateVPNGatewayResponse
    );
  }

  /**
   * CreateVPNTunnel - 创建VPN隧道
   *
   * See also: https://docs.ucloud.cn/api/ipsecvpn-api/create_vpn_tunnel
   */
  createVPNTunnel(
    request?: CreateVPNTunnelRequest
  ): Promise<CreateVPNTunnelResponse> {
    const args = { Action: 'CreateVPNTunnel', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as CreateVPNTunnelResponse
    );
  }

  /**
   * DeleteRemoteVPNGateway - 删除客户VPN网关
   *
   * See also: https://docs.ucloud.cn/api/ipsecvpn-api/delete_remote_vpn_gateway
   */
  deleteRemoteVPNGateway(
    request?: DeleteRemoteVPNGatewayRequest
  ): Promise<DeleteRemoteVPNGatewayResponse> {
    const args = { Action: 'DeleteRemoteVPNGateway', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DeleteRemoteVPNGatewayResponse
    );
  }

  /**
   * DeleteVPNGateway - 删除VPN网关
   *
   * See also: https://docs.ucloud.cn/api/ipsecvpn-api/delete_vpn_gateway
   */
  deleteVPNGateway(
    request?: DeleteVPNGatewayRequest
  ): Promise<DeleteVPNGatewayResponse> {
    const args = { Action: 'DeleteVPNGateway', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DeleteVPNGatewayResponse
    );
  }

  /**
   * DeleteVPNTunnel - 删除VPN隧道
   *
   * See also: https://docs.ucloud.cn/api/ipsecvpn-api/delete_vpn_tunnel
   */
  deleteVPNTunnel(
    request?: DeleteVPNTunnelRequest
  ): Promise<DeleteVPNTunnelResponse> {
    const args = { Action: 'DeleteVPNTunnel', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DeleteVPNTunnelResponse
    );
  }

  /**
   * DescribeRemoteVPNGateway - 获取客户VPN网关信息
   *
   * See also: https://docs.ucloud.cn/api/ipsecvpn-api/describe_remote_vpn_gateway
   */
  describeRemoteVPNGateway(
    request?: DescribeRemoteVPNGatewayRequest
  ): Promise<DescribeRemoteVPNGatewayResponse> {
    const args = { Action: 'DescribeRemoteVPNGateway', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DescribeRemoteVPNGatewayResponse
    );
  }

  /**
   * DescribeVPNGateway - 获取VPN网关信息
   *
   * See also: https://docs.ucloud.cn/api/ipsecvpn-api/describe_vpn_gateway
   */
  describeVPNGateway(
    request?: DescribeVPNGatewayRequest
  ): Promise<DescribeVPNGatewayResponse> {
    const args = { Action: 'DescribeVPNGateway', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DescribeVPNGatewayResponse
    );
  }

  /**
   * DescribeVPNTunnel - 获取VPN隧道信息
   *
   * See also: https://docs.ucloud.cn/api/ipsecvpn-api/describe_vpn_tunnel
   */
  describeVPNTunnel(
    request?: DescribeVPNTunnelRequest
  ): Promise<DescribeVPNTunnelResponse> {
    const args = { Action: 'DescribeVPNTunnel', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DescribeVPNTunnelResponse
    );
  }

  /**
   * GetVPNGatewayPrice - 获取VPN价格
   *
   * See also: https://docs.ucloud.cn/api/ipsecvpn-api/get_vpn_gateway_price
   */
  getVPNGatewayPrice(
    request?: GetVPNGatewayPriceRequest
  ): Promise<GetVPNGatewayPriceResponse> {
    const args = { Action: 'GetVPNGatewayPrice', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as GetVPNGatewayPriceResponse
    );
  }

  /**
   * GetVPNGatewayUpgradePrice - 获取VPN网关规格改动价格
   *
   * See also: https://docs.ucloud.cn/api/ipsecvpn-api/get_vpn_gateway_upgrade_price
   */
  getVPNGatewayUpgradePrice(
    request?: GetVPNGatewayUpgradePriceRequest
  ): Promise<GetVPNGatewayUpgradePriceResponse> {
    const args = { Action: 'GetVPNGatewayUpgradePrice', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as GetVPNGatewayUpgradePriceResponse
    );
  }

  /**
   * UpdateVPNGateway - 更改VPN网关规格
   *
   * See also: https://docs.ucloud.cn/api/ipsecvpn-api/update_vpn_gateway
   */
  updateVPNGateway(
    request?: UpdateVPNGatewayRequest
  ): Promise<UpdateVPNGatewayResponse> {
    const args = { Action: 'UpdateVPNGateway', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as UpdateVPNGatewayResponse
    );
  }

  /**
   * UpdateVPNTunnelAttribute - 更新VPN隧道属性
   *
   * See also: https://docs.ucloud.cn/api/ipsecvpn-api/update_vpn_tunnel_attribute
   */
  updateVPNTunnelAttribute(
    request?: UpdateVPNTunnelAttributeRequest
  ): Promise<UpdateVPNTunnelAttributeResponse> {
    const args = { Action: 'UpdateVPNTunnelAttribute', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as UpdateVPNTunnelAttributeResponse
    );
  }
}

/**
 * CreateRemoteVPNGateway - 创建客户VPN网关
 */
export interface CreateRemoteVPNGatewayRequest {
  /**
   * 客户VPN网关名称
   */
  RemoteVPNGatewayName: string;
  /**
   * 客户VPN网关地址
   */
  RemoteVPNGatewayAddr: string;
  /**
   * 业务组名称，默认为 "Default"
   */
  Tag?: string;
  /**
   * 备注，默认为空
   */
  Remark?: string;
}

/**
 * CreateRemoteVPNGateway - 创建客户VPN网关
 */
export interface CreateRemoteVPNGatewayResponse {
  /**
   * 新建客户VPN网关的资源ID
   */
  RemoteVPNGatewayId?: string;
}

/**
 * CreateVPNGateway - 创建VPN网关
 */
export interface CreateVPNGatewayRequest {
  /**
   * 新建VPN网关名称
   */
  VPNGatewayName: string;
  /**
   * 新建VPN网关所属VPC的资源ID
   */
  VPCId: string;
  /**
   * 购买的VPN网关规格，枚举值为: Standard, 标准型; Enhanced, 增强型
   */
  Grade: string;
  /**
   * 备注，默认为空
   */
  Remark?: string;
  /**
   * 业务组名称，默认为 "Default"
   */
  Tag?: string;
  /**
   * 购买时长, 默认: 1
   */
  Quantity?: number;
  /**
   * 付费方式, 枚举值为: Year, 按年付费; Month, 按月付费；Dynamic, 按需付费(需开启权限)；Trial, 试用(需开启权限)；默认为按月付费
   */
  ChargeType?: string;
  /**
   * 业务组ID
   */
  BusinessId?: string;
  /**
   * 若要绑定EIP，在此填上EIP的资源ID
   */
  EIPId?: string;
  /**
   * 代金券ID, 默认不使用
   */
  CouponId?: string;
}

/**
 * CreateVPNGateway - 创建VPN网关
 */
export interface CreateVPNGatewayResponse {
  /**
   * 新建VPN网关的资源ID
   */
  VPNGatewayId?: string;
}

/**
 * CreateVPNTunnel - 创建VPN隧道
 */
export interface CreateVPNTunnelRequest {
  /**
   * VPN隧道名称
   */
  VPNTunnelName: string;
  /**
   * VPN网关的资源ID
   */
  VPNGatewayId: string;
  /**
   * 客户VPN网关的资源ID
   */
  RemoteVPNGatewayId: string;
  /**
   * 预共享密钥
   */
  IKEPreSharedKey: string;
  /**
   * vpcId
   */
  VPCId: string;
  /**
   * ike版本，枚举值： "IKE V1"，"IKE V2"，默认v1
   */
  IKEVersion: string;
  /**
   * 指定VPN连接的本地子网的资源ID，最多可填写10个。
   */
  IPSecLocalSubnetIds: string[];
  /**
   * 指定VPN连接的客户网段，最多可填写20个。
   */
  IPSecRemoteSubnets: string[];
  /**
   * 业务组，默认为“Default”
   */
  Tag?: string;
  /**
   * 备注，默认为空
   */
  Remark?: string;
  /**
   * IKE协商过程中使用的加密算法，枚举值，"aes128", "aes192", "aes256", "aes512", "3des"。默认值为“aes128”
   */
  IKEEncryptionAlgorithm?: string;
  /**
   * IKE协商过程中使用的认证算法，"md5", "sha1", "sha2-256"。默认值为“sha1”
   */
  IKEAuthenticationAlgorithm?: string;
  /**
   * IKE协商过程中使用的模式，枚举值，主模式，“main”；野蛮模式，“aggressive”。IKEV1默认为主模式“main”，IKEV2时不使用该参数。
   */
  IKEExchangeMode?: string;
  /**
   * 本端标识。枚举值，自动识别，“auto”；IP地址或域名。默认为自动识别“auto”。IKEV2必填该参数
   */
  IKELocalId?: string;
  /**
   * 客户端标识。枚举值，自动识别，“auto”；IP地址或域名。默认为“自动识别“auto”。IKEV2必填该参数
   */
  IKERemoteId?: string;
  /**
   * IKE协商过程中使用的DH组，枚举值，"1", "2", "5", "14", "15", "16"。默认为“15”
   */
  IKEDhGroup?: string;
  /**
   * IKE中SA的生存时间，可填写范围为600-604800。默认为86400。
   */
  IKESALifetime?: string;
  /**
   * 使用的安全协议，枚举值，“esp”，“ah”。默认为“esp”
   */
  IPSecProtocol?: string;
  /**
   * IPSec隧道中使用的加密算法，枚举值，"aes128", "aes192", "aes256", "aes512", "3des"。默认值为“aes128”
   */
  IPSecEncryptionAlgorithm?: string;
  /**
   * IPSec隧道中使用的认证算法，枚举值，"md5", "sha1","sha2-256"。默认值为“sha1”
   */
  IPSecAuthenticationAlgorithm?: string;
  /**
   * IPSec中SA的生存时间，可填写范围为1200 - 604800。默认为3600
   */
  IPSecSALifetime?: string;
  /**
   * IPSec中SA的生存时间（以字节计）。可选为8000 – 20000000。默认使用SA生存时间，
   */
  IPSecSALifetimeBytes?: string;
  /**
   * IPSec的PFS是否开启，枚举值，，不开启，"disable"；数字表示DH组, "1", "2", "5", "14", "15", "16"。默认为“disable”。
   */
  IPSecPFSDhGroup?: string;
  /**
   * IPSec隧道关闭后的处理动作，枚举值：“none”，流量触发；“restart”，自动重联，默认为none
   */
  IPSecCloseAction?: string;
}

/**
 * CreateVPNTunnel - 创建VPN隧道
 */
export interface CreateVPNTunnelResponse {
  /**
   * VPN隧道的资源ID
   */
  VPNTunnelId?: string;
}

/**
 * DeleteRemoteVPNGateway - 删除客户VPN网关
 */
export interface DeleteRemoteVPNGatewayRequest {
  /**
   * 客户VPN网关的资源ID
   */
  RemoteVPNGatewayId: string;
}

/**
 * DeleteRemoteVPNGateway - 删除客户VPN网关
 */
export interface DeleteRemoteVPNGatewayResponse {}

/**
 * DeleteVPNGateway - 删除VPN网关
 */
export interface DeleteVPNGatewayRequest {
  /**
   * VPN网关的资源ID
   */
  VPNGatewayId: string;
  /**
   * 删除VPN时是否一并释放EIP。false，只解绑EIP不删除EIP；true，解绑并释放EIP。默认是false
   */
  ReleaseEip?: boolean;
}

/**
 * DeleteVPNGateway - 删除VPN网关
 */
export interface DeleteVPNGatewayResponse {}

/**
 * DeleteVPNTunnel - 删除VPN隧道
 */
export interface DeleteVPNTunnelRequest {
  /**
   * VPN隧道的资源ID
   */
  VPNTunnelId: string;
}

/**
 * DeleteVPNTunnel - 删除VPN隧道
 */
export interface DeleteVPNTunnelResponse {}

/**
 * DescribeRemoteVPNGateway - 获取客户VPN网关信息
 */
export interface DescribeRemoteVPNGatewayRequest {
  /**
   * 客户VPN网关的资源ID，例如RemoteVPNGatewayIds.0代表希望获取客户VPN网关1的信息，RemoteVPNGatewayIds.1代表客户VPN网关2，如果为空，则返回当前Region中所有客户VPN网关实例的信息
   */
  RemoteVPNGatewayIds?: string[];
  /**
   * 业务组名称，若指定则返回业务组下所有客户VPN网关信息
   */
  Tag?: string;
  /**
   * 数据偏移量, 默认为0
   */
  Offset?: number;
  /**
   * 数据分页值, 默认为20
   */
  Limit?: number;
}

/**
 * DescribeRemoteVPNGateway - 获取客户VPN网关信息
 */
export interface DescribeRemoteVPNGatewayResponse {
  /**
   * 符合条件的客户VPN网关总数
   */
  TotalCount?: number;
  /**
   * 客户VPN网关列表, 每项参数详见 RemoteVPNGatewayDataSet
   */
  DataSet?: {
    /**
     * 客户网关ID
     */
    RemoteVPNGatewayId?: string;
    /**
     * 客户网关名称
     */
    RemoteVPNGatewayName?: string;
    /**
     * 客户网关IP地址
     */
    RemoteVPNGatewayAddr?: string;
    /**
     * 用户组
     */
    Tag?: string;
    /**
     * 备注
     */
    Remark?: string;
    /**
     * 创建时间
     */
    CreateTime?: number;
    /**
     * 活跃的隧道数量
     */
    TunnelCount?: number;
  }[];
}

/**
 * DescribeVPNGateway - 获取VPN网关信息
 */
export interface DescribeVPNGatewayRequest {
  /**
   * VPN网关的资源ID，例如VPNGatewayIds.0代表希望获取VPN网关1的信息，VPNGatewayIds.1代表VPN网关2，如果为空，则返回当前Region中所有VPN网关的信息
   */
  VPNGatewayIds?: string[];
  /**
   * VPC的资源ID，返回指定的VPC下的所有VPN网关的信息。默认返回当前Region中所有VPN网关实例的信息
   */
  VPCId?: string;
  /**
   * 数据偏移量。默认为0
   */
  Offset?: number;
  /**
   * 业务组名称，若指定则返回指定的业务组下的所有VPN网关的信息。
   */
  Tag?: string;
  /**
   * 数据分页值。默认为20
   */
  Limit?: number;
}

/**
 * DescribeVPNGateway - 获取VPN网关信息
 */
export interface DescribeVPNGatewayResponse {
  /**
   * 满足条件的VPN网关总数
   */
  TotalCount?: number;
  /**
   * 获取的VPN网关信息列表，每项参数详见 VPNGatewayDataSet
   */
  DataSet?: {
    /**
     * 网关Id
     */
    VPNGatewayId?: string;
    /**
     * 网关名字
     */
    VPNGatewayName?: string;
    /**
     * 网关业务组
     */
    Tag?: string;
    /**
     * 网关备注
     */
    Remark?: string;
    /**
     * 所属VPCId
     */
    VPCId?: string;
    /**
     * 所属VPC名字
     */
    VPCName?: string;
    /**
     * 付费类型
     */
    ChargeType?: string;
    /**
     * 创建时间
     */
    CreateTime?: number;
    /**
     * 到期时间
     */
    ExpireTime?: number;
    /**
     * 是否自动续费
     */
    AutoRenew?: string;
    /**
     * 网关类型
     */
    Grade?: string;
    /**
     * 绑定EIP的IP地址
     */
    EIP?: string;
    /**
     * EIP类型
     */
    EIPType?: string;
    /**
     * EIPID
     */
    EIPId?: string;
  }[];
}

/**
 * DescribeVPNTunnel - 获取VPN隧道信息
 */
export interface DescribeVPNTunnelRequest {
  /**
   * VPN隧道的资源ID，例如VPNTunnelIds.0代表希望获取信息的VPN隧道1，VPNTunneIds.1代表VPN隧道2，如果为空，则返回当前Region中所有的VPN隧道实例
   */
  VPNTunnelIds?: string[];
  /**
   * 数据偏移量, 默认为0
   */
  Offset?: number;
  /**
   * 数据分页值, 默认为20
   */
  Limit?: number;
  /**
   * 业务组名称，若指定则返回指定的业务组下的所有VPN网关的信息
   */
  Tag?: string;
}

/**
 * DescribeVPNTunnel - 获取VPN隧道信息
 */
export interface DescribeVPNTunnelResponse {
  /**
   * VPN隧道总数
   */
  TotalCount?: number;
  /**
   * 获取的VPN隧道信息列表，每项参数详见 VPNTunnelDataSet
   */
  DataSet?: {
    /**
     * 隧道id
     */
    VPNTunnelId?: string;
    /**
     * 隧道名称
     */
    VPNTunnelName?: string;
    /**
     * 用户组
     */
    Tag?: string;
    /**
     * 备注
     */
    Remark?: string;
    /**
     * 所属VPN网关id
     */
    VPNGatewayId?: string;
    /**
     * 对端网关Id
     */
    RemoteVPNGatewayId?: string;
    /**
     * VPN网关名字
     */
    VPNGatewayName?: string;
    /**
     * 对端网关名字
     */
    RemoteVPNGatewayName?: string;
    /**
     * 所属VPCId
     */
    VPCId?: string;
    /**
     * 所属VOC名字
     */
    VPCName?: string;
    /**
     * 创建时间
     */
    CreateTime?: number;
    /**
     * IKE参数
     */
    IKEData?: {
      /**
       * IKE认证算法
       */
      IKEAuthenticationAlgorithm?: string;
      /**
       * IKEDH组
       */
      IKEDhGroup?: string;
      /**
       * IKE加密算法
       */
      IKEEncryptionAlgorithm?: string;
      /**
       * IKEv1协商模式
       */
      IKEExchangeMode?: string;
      /**
       * IKE本地ID标识
       */
      IKELocalId?: string;
      /**
       * IKE预共享秘钥
       */
      IKEPreSharedKey?: string;
      /**
       * IKE对端ID标识
       */
      IKERemoteId?: string;
      /**
       * IKE秘钥生存时间
       */
      IKESALifetime?: string;
      /**
       * IKE版本
       */
      IKEVersion?: string;
    };
    /**
     * IPSec参数
     */
    IPSecData?: {
      /**
       * IPSec通道中使用的认证算法
       */
      IPSecAuthenticationAlgorithm?: string;
      /**
       * IPSec通道中使用的加密算法
       */
      IPSecEncryptionAlgorithm?: string;
      /**
       * 指定VPN连接的本地子网，用逗号分隔
       */
      IPSecLocalSubnetIds?: string[];
      /**
       * 使用的安全协议，ESP或AH
       */
      IPSecProtocol?: string;
      /**
       * 指定VPN连接的客户网段，用逗号分隔
       */
      IPSecRemoteSubnets?: string[];
      /**
       * IPSec中SA的生存时间
       */
      IPSecSALifetime?: string;
      /**
       * IPSec中SA的生存时间（以字节计）
       */
      IPSecSALifetimeBytes?: string;
      /**
       * 是否开启PFS功能,Disable表示关闭，数字表示DH组
       */
      IPSecPFSDhGroup?: string;
    };
  }[];
}

/**
 * GetVPNGatewayPrice - 获取VPN价格
 */
export interface GetVPNGatewayPriceRequest {
  /**
   * VPN网关规格。枚举值，包括：标准型：Standard，增强型：Enhanced。
   */
  Grade: string;
  /**
   * 付费方式, 枚举值为: Year, 按年付费; Month, 按月付费; Dynamic, 按需付费(需开启权限); 默认为获取三种价格
   */
  ChargeType?: string;
  /**
   * 购买时长, 默认: 1
   */
  Quantity?: number;
}

/**
 * GetVPNGatewayPrice - 获取VPN价格
 */
export interface GetVPNGatewayPriceResponse {
  /**
   * 获取的VPN网关价格信息列表，每项参数详见 VPNGatewayPriceSet
   */
  PriceSet?: {
    /**
     * VPN网关付费方式
     */
    ChargeType?: string;
    /**
     * VPN网关价格, 单位"元"
     */
    Price?: number;
    /**
     * 资源有效期, 以Unix Timestamp表示
     */
    PurchaseValue?: number;
  }[];
}

/**
 * GetVPNGatewayUpgradePrice - 获取VPN网关规格改动价格
 */
export interface GetVPNGatewayUpgradePriceRequest {
  /**
   * VPN网关的资源ID
   */
  VPNGatewayId: string;
  /**
   * 更改的VPN网关规格，枚举值为: Standard, 标准型; Enhanced, 增强型。
   */
  Grade: string;
}

/**
 * GetVPNGatewayUpgradePrice - 获取VPN网关规格改动价格
 */
export interface GetVPNGatewayUpgradePriceResponse {
  /**
   * 调整规格后的VPN网关价格, 单位为"元", 如需退费此处为负值
   */
  Price?: number;
}

/**
 * UpdateVPNGateway - 更改VPN网关规格
 */
export interface UpdateVPNGatewayRequest {
  /**
   * VPN网关的资源ID
   */
  VPNGatewayId: string;
  /**
   * 网关规格。枚举值为: Standard, 标准型; Enhanced, 增强型。
   */
  Grade: string;
}

/**
 * UpdateVPNGateway - 更改VPN网关规格
 */
export interface UpdateVPNGatewayResponse {}

/**
 * UpdateVPNTunnelAttribute - 更新VPN隧道属性
 */
export interface UpdateVPNTunnelAttributeRequest {
  /**
   * VPN隧道的资源ID
   */
  VPNTunnelId: string;
  /**
   * 预共享密钥
   */
  IKEPreSharedKey?: string;
  /**
   * IKE协商过程中使用的加密算法
   */
  IKEEncryptionAlgorithm?: string;
  /**
   * IKE协商过程中使用的认证算法
   */
  IKEAuthenticationAlgorithm?: string;
  /**
   * IKE协商过程中使用的模式，可选“主动模式”与“野蛮模式”。IKEV2不使用该参数。
   */
  IKEExchangeMode?: string;
  /**
   * 本端标识。不填时默认使用之前的参数，结合IKEversion进行校验，IKEV2时不能为auto。
   */
  IKELocalId?: string;
  /**
   * 客户端标识。不填时默认使用之前的参数，结合IKEversion进行校验，IKEV2时不能为auto。
   */
  IKERemoteId?: string;
  /**
   * IKE协商过程中使用的DH组
   */
  IKEDhGroup?: string;
  /**
   * IKE中SA的生存时间
   */
  IKESALifetime?: string;
  /**
   * 使用的安全协议，ESP或AH
   */
  IPSecProtocol?: string;
  /**
   * 指定VPN连接的本地子网的id，用逗号分隔
   */
  IPSecLocalSubnetIds?: string[];
  /**
   * 指定VPN连接的客户网段，用逗号分隔
   */
  IPSecRemoteSubnets?: string[];
  /**
   * IPSec隧道中使用的加密算法
   */
  IPSecEncryptionAlgorithm?: string;
  /**
   * IPSec隧道中使用的认证算法
   */
  IPSecAuthenticationAlgorithm?: string;
  /**
   * IPSec中SA的生存时间
   */
  IPSecSALifetime?: string;
  /**
   * IPSec中SA的生存时间（以字节计）
   */
  IPSecSALifetimeBytes?: string;
  /**
   * IPSec中的PFS是否开启
   */
  IPSecPFSDhGroup?: string;
  /**
   * 枚举值："IKE V1","IKE V2"
   */
  IKEVersion?: string;
  /**
   * IPSec隧道关闭后的处理动作，默认与原本一致，若原本为空，必传。枚举值：“none”,不处理（推荐为none，流量会自动触发隧道重建）；“restart”重建
   */
  IPSecCloseAction?: string;
}

/**
 * UpdateVPNTunnelAttribute - 更新VPN隧道属性
 */
export interface UpdateVPNTunnelAttributeResponse {}
