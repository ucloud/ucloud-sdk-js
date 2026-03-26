import Client from '../../core/client';
import Request from '../../core/request';
import { ConfigOptions } from '../../core/config';
import { CredentialOptions } from '../../core/credential';

/**
 * This client is used to call actions of **udns** service
 */
export default class UDNSClient extends Client {
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
   * AssociateUDNSZoneVPC - 绑定域名与VPC
   *
   * See also: https://docs.ucloud.cn/api/udns-api/associate_udns_zone_vpc
   */
  associateUDNSZoneVPC(
    request?: AssociateUDNSZoneVPCRequest
  ): Promise<AssociateUDNSZoneVPCResponse> {
    const args = { Action: 'AssociateUDNSZoneVPC', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as AssociateUDNSZoneVPCResponse
    );
  }

  /**
   * CreateUDNSRecord - 创建域名记录
   *
   * See also: https://docs.ucloud.cn/api/udns-api/create_udns_record
   */
  createUDNSRecord(
    request?: CreateUDNSRecordRequest
  ): Promise<CreateUDNSRecordResponse> {
    const args = { Action: 'CreateUDNSRecord', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as CreateUDNSRecordResponse
    );
  }

  /**
   * CreateUDNSZone - 创建域名
   *
   * See also: https://docs.ucloud.cn/api/udns-api/create_udns_zone
   */
  createUDNSZone(
    request?: CreateUDNSZoneRequest
  ): Promise<CreateUDNSZoneResponse> {
    const args = { Action: 'CreateUDNSZone', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as CreateUDNSZoneResponse
    );
  }

  /**
   * DeleteUDNSRecord - 删除域名记录
   *
   * See also: https://docs.ucloud.cn/api/udns-api/delete_udns_record
   */
  deleteUDNSRecord(
    request?: DeleteUDNSRecordRequest
  ): Promise<DeleteUDNSRecordResponse> {
    const args = { Action: 'DeleteUDNSRecord', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DeleteUDNSRecordResponse
    );
  }

  /**
   * DescribeUDNSDomain - zone下所有域名的rr记录
   *
   * See also: https://docs.ucloud.cn/api/udns-api/describe_udns_domain
   */
  describeUDNSDomain(
    request?: DescribeUDNSDomainRequest
  ): Promise<DescribeUDNSDomainResponse> {
    const args = { Action: 'DescribeUDNSDomain', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DescribeUDNSDomainResponse
    );
  }

  /**
   * DescribeUDNSRecord - 获取域名记录
   *
   * See also: https://docs.ucloud.cn/api/udns-api/describe_udns_record
   */
  describeUDNSRecord(
    request?: DescribeUDNSRecordRequest
  ): Promise<DescribeUDNSRecordResponse> {
    const args = { Action: 'DescribeUDNSRecord', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DescribeUDNSRecordResponse
    );
  }

  /**
   * DescribeUDNSZone - 获取域名信息
   *
   * See also: https://docs.ucloud.cn/api/udns-api/describe_udns_zone
   */
  describeUDNSZone(
    request?: DescribeUDNSZoneRequest
  ): Promise<DescribeUDNSZoneResponse> {
    const args = { Action: 'DescribeUDNSZone', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DescribeUDNSZoneResponse
    );
  }

  /**
   * DisassociateUDNSZoneVPC - 解绑域名和VPC
   *
   * See also: https://docs.ucloud.cn/api/udns-api/disassociate_udns_zone_vpc
   */
  disassociateUDNSZoneVPC(
    request?: DisassociateUDNSZoneVPCRequest
  ): Promise<DisassociateUDNSZoneVPCResponse> {
    const args = { Action: 'DisassociateUDNSZoneVPC', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DisassociateUDNSZoneVPCResponse
    );
  }

  /**
   * ModifyUDNSRecord - 修改域名记录
   *
   * See also: https://docs.ucloud.cn/api/udns-api/modify_udns_record
   */
  modifyUDNSRecord(
    request?: ModifyUDNSRecordRequest
  ): Promise<ModifyUDNSRecordResponse> {
    const args = { Action: 'ModifyUDNSRecord', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as ModifyUDNSRecordResponse
    );
  }

  /**
   * ModifyUDNSZone - 修改域名备注/递归查询状态
   *
   * See also: https://docs.ucloud.cn/api/udns-api/modify_udns_zone
   */
  modifyUDNSZone(
    request?: ModifyUDNSZoneRequest
  ): Promise<ModifyUDNSZoneResponse> {
    const args = { Action: 'ModifyUDNSZone', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as ModifyUDNSZoneResponse
    );
  }
}

/**
 * AssociateUDNSZoneVPC - 绑定域名与VPC
 */
export interface AssociateUDNSZoneVPCRequest {
  /**
   * 域名资源ID
   */
  DNSZoneId: string;
  /**
   * VPC所属项目ID
   */
  VPCProjectId: string;
  /**
   * VPC资源ID
   */
  VPCId: string;
}

/**
 * AssociateUDNSZoneVPC - 绑定域名与VPC
 */
export interface AssociateUDNSZoneVPCResponse {}

/**
 * CreateUDNSRecord - 创建域名记录
 */
export interface CreateUDNSRecordRequest {
  /**
   * 域名资源ID
   */
  DNSZoneId: string;
  /**
   * 主机记录
   */
  Name: string;
  /**
   * 记录类型。枚举值，“A”,"CNAME","MX","AAAA","SRV","PTR","TXT"。
   */
  Type: string;
  /**
   * 数值组，支持逗号分割。格式为：Value|权重|IsEnabled，其中权重支持1-10，IsEnabled为枚举值（1为启用，0为禁用）。输入格式示例：192.168.1.1|1|1,192.168.1.2|10|0。
   */
  Value: string;
  /**
   * 值类型。枚举值，“Normal”，标准；“Multivalue”，多值返回。仅在值为“Multivalue”时，Value的权重生效。
   */
  ValueType: string;
  /**
   * TTL值，范围为5-600，单位为秒。默认为5
   */
  TTL?: number;
  /**
   * 记录的备注信息
   */
  Remark?: string;
}

/**
 * CreateUDNSRecord - 创建域名记录
 */
export interface CreateUDNSRecordResponse {
  /**
   * 域名记录的资源ID
   */
  DNSRecordId: string;
}

/**
 * CreateUDNSZone - 创建域名
 */
export interface CreateUDNSZoneRequest {
  /**
   * 域名字符串
   */
  DNSZoneName: string;
  /**
   * 域名类型。枚举值，“private”，内网DNS；“public”，公网DNS，暂只支持private。
   */
  Type: string;
  /**
   * 所属业务组名称
   */
  Tag?: string;
  /**
   * 备注
   */
  Remark?: string;
  /**
   * 是否支持迭代。枚举值,"enable",支持迭代; "disable",不支持迭代
   */
  IsRecursionEnabled?: string;
  /**
   * 购买时长，默认为1
   */
  Quantity?: number;
  /**
   * 付费方式, 枚举值为: Year, 按年付费; Month, 按月付费; Dynamic, 按需付费，默认为按月付费
   */
  ChargeType?: string;
  /**
   * 代金券ID，默认不使用
   */
  CouponId?: string;
}

/**
 * CreateUDNSZone - 创建域名
 */
export interface CreateUDNSZoneResponse {
  /**
   * 域名资源ID
   */
  DNSZoneId: string;
}

/**
 * DeleteUDNSRecord - 删除域名记录
 */
export interface DeleteUDNSRecordRequest {
  /**
   * 域名资源ID
   */
  DNSZoneId: string;
  /**
   * 域名记录资源ID
   */
  RecordIds: string[];
}

/**
 * DeleteUDNSRecord - 删除域名记录
 */
export interface DeleteUDNSRecordResponse {}

/**
 * DescribeUDNSDomain - zone下所有域名的rr记录
 */
export interface DescribeUDNSDomainRequest {
  /**
   * zone名称
   */
  DNSZoneName: string;
  /**
   * VPI资源ID
   */
  VPCId: string;
  /**
   * 查询数量偏移
   */
  Offset?: number;
  /**
   * 返回数量
   */
  Limit?: number;
}

/**
 * DescribeUDNSDomain - zone下所有域名的rr记录
 */
export interface DescribeUDNSDomainResponse {
  /**
   * 查询记录
   */
  RecordInfos: {
    /**
     * 域名记录资源ID
     */
    RecordId: string;
    /**
     * 主机记录
     */
    Name: string;
    /**
     * 记录类型
     */
    Type: string;
    /**
     * 数值组
     */
    ValueSet: {
      /**
       * 主机记录
       */
      Data: string;
      /**
       * 权重
       */
      Weight: number;
      /**
       * 是否启用
       */
      IsEnabled: number;
    }[];
    /**
     * 记录策略，标准或随机应答
     */
    ValueType: string;
    /**
     * TTL值，单位为秒
     */
    TTL: number;
    /**
     * 记录备注信息
     */
    Remark: string;
  }[];
  /**
   * 总条数
   */
  TotalCount: number;
}

/**
 * DescribeUDNSRecord - 获取域名记录
 */
export interface DescribeUDNSRecordRequest {
  /**
   * 域名资源ID
   */
  DNSZoneId: string;
  /**
   * 域名记录资源ID
   */
  RecordIds?: string[];
  /**
   * 数据分页值, 默认为20
   */
  Limit?: number;
  /**
   * 数据偏移量, 默认为0
   */
  Offset?: number;
  /**
   * 模糊查询记录
   */
  Query?: string;
  /**
   * 排序字段，只支持host update_time
   */
  SortKey?: string;
  /**
   * 排序方式，支持asc desc
   */
  SortDir?: string;
}

/**
 * DescribeUDNSRecord - 获取域名记录
 */
export interface DescribeUDNSRecordResponse {
  /**
   * 资源数量
   */
  TotalCount: number;
  /**
   * 域名记录详细信息
   */
  RecordInfos?: {
    /**
     * 域名记录资源ID
     */
    RecordId: string;
    /**
     * 主机记录
     */
    Name: string;
    /**
     * 记录类型
     */
    Type: string;
    /**
     * 数值组
     */
    ValueSet: {
      /**
       * 主机记录
       */
      Data: string;
      /**
       * 权重
       */
      Weight: number;
      /**
       * 是否启用
       */
      IsEnabled: number;
    }[];
    /**
     * 记录策略，标准或随机应答
     */
    ValueType: string;
    /**
     * TTL值，单位为秒
     */
    TTL: number;
    /**
     * 记录备注信息
     */
    Remark: string;
  }[];
}

/**
 * DescribeUDNSZone - 获取域名信息
 */
export interface DescribeUDNSZoneRequest {
  /**
   * 域名资源ID
   */
  DNSZoneIds?: string[];
  /**
   * 数据分页值, 默认为20
   */
  Limit?: number;
  /**
   * 数据偏移量, 默认为0
   */
  Offset?: number;
}

/**
 * DescribeUDNSZone - 获取域名信息
 */
export interface DescribeUDNSZoneResponse {
  /**
   * 符合查询条件的域名数量
   */
  TotalCount: number;
  /**
   * 域名资源信息
   */
  DNSZoneInfos?: {
    /**
     * 域名名称
     */
    DNSZoneName: string;
    /**
     * UDNS私有域名 Zone ID
     */
    DNSZoneId: string;
    /**
     * 业务组
     */
    Tag: string;
    /**
     * 备注
     */
    Remark: string;
    /**
     * 是否支持迭代。枚举值,"enable",支持迭代; "disable",不支持迭代
     */
    IsRecursionEnabled: string;
    /**
     * 创建时间
     */
    CreateTime: number;
    /**
     * 过期时间
     */
    ExpireTime: number;
    /**
     * 计费类型（Dynamic、Month、Year）
     */
    ChargeType: string;
    /**
     * 是否开启自动续费（Yes No）
     */
    IsAutoRenew: string;
    /**
     * 记录相关ID
     */
    RecordInfos?: string[];
    /**
     * 绑定的VPC信息
     */
    VPCInfos?: {
      /**
       * VPC ID
       */
      VPCId?: string;
      /**
       * VPC所属项目ID
       */
      VPCProjectId?: string;
      /**
       * VPC名称
       */
      Name?: string;
      /**
       * VPC地址空间
       */
      Network?: string[];
      /**
       * VPC类型：Normal 公有云 Hybrid 托管云
       */
      VPCType?: string;
    }[];
  }[];
}

/**
 * DisassociateUDNSZoneVPC - 解绑域名和VPC
 */
export interface DisassociateUDNSZoneVPCRequest {
  /**
   * 域名资源ID
   */
  DNSZoneId: string;
  /**
   * VPC所属项目ID
   */
  VPCProjectId: string;
  /**
   * VPC资源ID
   */
  VPCId: string;
}

/**
 * DisassociateUDNSZoneVPC - 解绑域名和VPC
 */
export interface DisassociateUDNSZoneVPCResponse {}

/**
 * ModifyUDNSRecord - 修改域名记录
 */
export interface ModifyUDNSRecordRequest {
  /**
   * 域名资源ID
   */
  DNSZoneId: string;
  /**
   * 域名记录资源ID
   */
  RecordId: string;
  /**
   * 数值组，支持逗号分割。格式为：Value|权重|Enable，其中权重支持1-10，Enable为枚举值（1为启用，0为禁用）。输入格式示例：192.168.1.1|1|1,192.168.1.2|10|0。
   */
  Value?: string;
  /**
   * 值类型。枚举值，“Normal”，标准；“Multivalue”，多值返回。仅在值为“Multivalue”时，Value的权重生效。
   */
  ValueType?: string;
  /**
   * TTL值，单位为秒
   */
  TTL?: number;
  /**
   * 记录的备注信息
   */
  Remark?: string;
  /**
   * 记录类型。枚举值，“A”,"CNAME","MX","AAAA","SRV","PTR","TXT"。
   */
  Type?: string;
}

/**
 * ModifyUDNSRecord - 修改域名记录
 */
export interface ModifyUDNSRecordResponse {}

/**
 * ModifyUDNSZone - 修改域名备注/递归查询状态
 */
export interface ModifyUDNSZoneRequest {
  /**
   * 域名资源ID
   */
  DNSZoneId: string;
  /**
   * 备注
   */
  Remark?: string;
  /**
   * 是否支持迭代。枚举值,"enable",支持迭代; "disable",不支持迭代
   */
  IsRecursionEnabled?: string;
}

/**
 * ModifyUDNSZone - 修改域名备注/递归查询状态
 */
export interface ModifyUDNSZoneResponse {}
