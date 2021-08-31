import Client from '../../core/client';
import Request from '../../core/request';
import { ConfigOptions } from '../../core/config';
import { CredentialOptions } from '../../core/credential';

/**
 * This client is used to call actions of **pathx** service
 */
export default class PathXClient extends Client {
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
   * BindPathXSSL - 绑定PathX SSL证书
   *
   * See also: https://docs.ucloud.cn/api/pathx-api/bind_path_xssl
   */
  bindPathXSSL(request?: BindPathXSSLRequest): Promise<BindPathXSSLResponse> {
    const args = { Action: 'BindPathXSSL', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as BindPathXSSLResponse
    );
  }

  /**
   * CreateGlobalSSHInstance - 创建GlobalSSH实例
   *
   * See also: https://docs.ucloud.cn/api/pathx-api/create_global_ssh_instance
   */
  createGlobalSSHInstance(
    request?: CreateGlobalSSHInstanceRequest
  ): Promise<CreateGlobalSSHInstanceResponse> {
    const args = { Action: 'CreateGlobalSSHInstance', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as CreateGlobalSSHInstanceResponse
    );
  }

  /**
   * CreatePathXSSL - 创建SSL证书，可以把整个 Pem 证书内容传到SSLContent，或者把证书、私钥、CA证书分别传过来
   *
   * See also: https://docs.ucloud.cn/api/pathx-api/create_path_xssl
   */
  createPathXSSL(
    request?: CreatePathXSSLRequest
  ): Promise<CreatePathXSSLResponse> {
    const args = { Action: 'CreatePathXSSL', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as CreatePathXSSLResponse
    );
  }

  /**
   * CreateUGAForwarder - 创建加速实例转发器，支持HTTPS接入HTTPS回源、HTTPS接入HTTP回源、HTTP接入HTTP回源、TCP接入TCP回源、UDP接入UDP回源、 支持WSS接入WSS回源、WSS接入WS回源、WS接入WS回源
   *
   * See also: https://docs.ucloud.cn/api/pathx-api/create_uga_forwarder
   */
  createUGAForwarder(
    request?: CreateUGAForwarderRequest
  ): Promise<CreateUGAForwarderResponse> {
    const args = { Action: 'CreateUGAForwarder', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as CreateUGAForwarderResponse
    );
  }

  /**
   * CreateUGAInstance - 创建全球加速配置项
   *
   * See also: https://docs.ucloud.cn/api/pathx-api/create_uga_instance
   */
  createUGAInstance(
    request?: CreateUGAInstanceRequest
  ): Promise<CreateUGAInstanceResponse> {
    const args = { Action: 'CreateUGAInstance', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as CreateUGAInstanceResponse
    );
  }

  /**
   * CreateUPath - 创建UPath
   *
   * See also: https://docs.ucloud.cn/api/pathx-api/create_upath
   */
  createUPath(request?: CreateUPathRequest): Promise<CreateUPathResponse> {
    const args = { Action: 'CreateUPath', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as CreateUPathResponse
    );
  }

  /**
   * DeleteGlobalSSHInstance - 删除GlobalSSH实例
   *
   * See also: https://docs.ucloud.cn/api/pathx-api/delete_global_ssh_instance
   */
  deleteGlobalSSHInstance(
    request?: DeleteGlobalSSHInstanceRequest
  ): Promise<DeleteGlobalSSHInstanceResponse> {
    const args = { Action: 'DeleteGlobalSSHInstance', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DeleteGlobalSSHInstanceResponse
    );
  }

  /**
   * DeletePathXSSL - 删除PathX SSL证书
   *
   * See also: https://docs.ucloud.cn/api/pathx-api/delete_path_xssl
   */
  deletePathXSSL(
    request?: DeletePathXSSLRequest
  ): Promise<DeletePathXSSLResponse> {
    const args = { Action: 'DeletePathXSSL', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DeletePathXSSLResponse
    );
  }

  /**
   * DeleteUGAForwarder - 删除加速实例转发器 按接入端口删除
   *
   * See also: https://docs.ucloud.cn/api/pathx-api/delete_uga_forwarder
   */
  deleteUGAForwarder(
    request?: DeleteUGAForwarderRequest
  ): Promise<DeleteUGAForwarderResponse> {
    const args = { Action: 'DeleteUGAForwarder', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DeleteUGAForwarderResponse
    );
  }

  /**
   * DeleteUGAInstance - 删除全球加速服务加速配置
   *
   * See also: https://docs.ucloud.cn/api/pathx-api/delete_uga_instance
   */
  deleteUGAInstance(
    request?: DeleteUGAInstanceRequest
  ): Promise<DeleteUGAInstanceResponse> {
    const args = { Action: 'DeleteUGAInstance', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DeleteUGAInstanceResponse
    );
  }

  /**
   * DeleteUPath - 删除UPath
   *
   * See also: https://docs.ucloud.cn/api/pathx-api/delete_upath
   */
  deleteUPath(request?: DeleteUPathRequest): Promise<DeleteUPathResponse> {
    const args = { Action: 'DeleteUPath', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DeleteUPathResponse
    );
  }

  /**
   * DescribeGlobalSSHInstance - 获取GlobalSSH实例列表（传实例ID获取单个实例信息，不传获取项目下全部实例）
   *
   * See also: https://docs.ucloud.cn/api/pathx-api/describe_global_ssh_instance
   */
  describeGlobalSSHInstance(
    request?: DescribeGlobalSSHInstanceRequest
  ): Promise<DescribeGlobalSSHInstanceResponse> {
    const args = { Action: 'DescribeGlobalSSHInstance', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DescribeGlobalSSHInstanceResponse
    );
  }

  /**
   * DescribePathXLineConfig - 获取全球加速线路信息
   *
   * See also: https://docs.ucloud.cn/api/pathx-api/describe_path_x_line_config
   */
  describePathXLineConfig(
    request?: DescribePathXLineConfigRequest
  ): Promise<DescribePathXLineConfigResponse> {
    const args = { Action: 'DescribePathXLineConfig', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DescribePathXLineConfigResponse
    );
  }

  /**
   * DescribePathXSSL - 获取SSL证书信息,支持分页，支持按证书名称 证书域名模糊搜索
   *
   * See also: https://docs.ucloud.cn/api/pathx-api/describe_path_xssl
   */
  describePathXSSL(
    request?: DescribePathXSSLRequest
  ): Promise<DescribePathXSSLResponse> {
    const args = { Action: 'DescribePathXSSL', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DescribePathXSSLResponse
    );
  }

  /**
   * DescribeUGAInstance - 获取全球加速服务加速配置信息，指定实例ID返回单个实例。未指定实例ID时 指定分页参数 则按创建时间降序 返回记录
   *
   * See also: https://docs.ucloud.cn/api/pathx-api/describe_uga_instance
   */
  describeUGAInstance(
    request?: DescribeUGAInstanceRequest
  ): Promise<DescribeUGAInstanceResponse> {
    const args = { Action: 'DescribeUGAInstance', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DescribeUGAInstanceResponse
    );
  }

  /**
   * DescribeUPath - 获取加速线路信息
   *
   * See also: https://docs.ucloud.cn/api/pathx-api/describe_upath
   */
  describeUPath(
    request?: DescribeUPathRequest
  ): Promise<DescribeUPathResponse> {
    const args = { Action: 'DescribeUPath', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DescribeUPathResponse
    );
  }

  /**
   * DescribeUPathTemplate - 查询UPath的监控模板
   *
   * See also: https://docs.ucloud.cn/api/pathx-api/describe_upath_template
   */
  describeUPathTemplate(
    request?: DescribeUPathTemplateRequest
  ): Promise<DescribeUPathTemplateResponse> {
    const args = { Action: 'DescribeUPathTemplate', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DescribeUPathTemplateResponse
    );
  }

  /**
   * GetGlobalSSHPrice - 获取GlobalSSH价格
   *
   * See also: https://docs.ucloud.cn/api/pathx-api/get_global_ssh_price
   */
  getGlobalSSHPrice(
    request?: GetGlobalSSHPriceRequest
  ): Promise<GetGlobalSSHPriceResponse> {
    const args = { Action: 'GetGlobalSSHPrice', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as GetGlobalSSHPriceResponse
    );
  }

  /**
   * GetGlobalSSHUpdatePrice - 获取GlobalSSH升级价格
   *
   * See also: https://docs.ucloud.cn/api/pathx-api/get_global_ssh_update_price
   */
  getGlobalSSHUpdatePrice(
    request?: GetGlobalSSHUpdatePriceRequest
  ): Promise<GetGlobalSSHUpdatePriceResponse> {
    const args = { Action: 'GetGlobalSSHUpdatePrice', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as GetGlobalSSHUpdatePriceResponse
    );
  }

  /**
   * GetPathXMetric - 获取全球加速监控信息
   *
   * See also: https://docs.ucloud.cn/api/pathx-api/get_path_x_metric
   */
  getPathXMetric(
    request?: GetPathXMetricRequest
  ): Promise<GetPathXMetricResponse> {
    const args = { Action: 'GetPathXMetric', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as GetPathXMetricResponse
    );
  }

  /**
   * ModifyGlobalSSHPort - 修改GlobalSSH端口
   *
   * See also: https://docs.ucloud.cn/api/pathx-api/modify_global_ssh_port
   */
  modifyGlobalSSHPort(
    request?: ModifyGlobalSSHPortRequest
  ): Promise<ModifyGlobalSSHPortResponse> {
    const args = { Action: 'ModifyGlobalSSHPort', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as ModifyGlobalSSHPortResponse
    );
  }

  /**
   * ModifyGlobalSSHType - 修改GlobalSSH实例类型，仅支持低版本升级到高版本，不支持高版本降级到低版本
   *
   * See also: https://docs.ucloud.cn/api/pathx-api/modify_global_ssh_type
   */
  modifyGlobalSSHType(
    request?: ModifyGlobalSSHTypeRequest
  ): Promise<ModifyGlobalSSHTypeResponse> {
    const args = { Action: 'ModifyGlobalSSHType', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as ModifyGlobalSSHTypeResponse
    );
  }

  /**
   * ModifyUPathBandwidth - 修改加速线路带宽
   *
   * See also: https://docs.ucloud.cn/api/pathx-api/modify_upath_bandwidth
   */
  modifyUPathBandwidth(
    request?: ModifyUPathBandwidthRequest
  ): Promise<ModifyUPathBandwidthResponse> {
    const args = { Action: 'ModifyUPathBandwidth', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as ModifyUPathBandwidthResponse
    );
  }

  /**
   * ModifyUPathTemplate - 修改UPath监控告警项
   *
   * See also: https://docs.ucloud.cn/api/pathx-api/modify_upath_template
   */
  modifyUPathTemplate(
    request?: ModifyUPathTemplateRequest
  ): Promise<ModifyUPathTemplateResponse> {
    const args = { Action: 'ModifyUPathTemplate', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as ModifyUPathTemplateResponse
    );
  }

  /**
   * UGABindUPath - UGA绑定UPath
   *
   * See also: https://docs.ucloud.cn/api/pathx-api/uga_bind_upath
   */
  uGABindUPath(request?: UGABindUPathRequest): Promise<UGABindUPathResponse> {
    const args = { Action: 'UGABindUPath', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as UGABindUPathResponse
    );
  }

  /**
   * UGAUnBindUPath - UGA与UPath解绑
   *
   * See also: https://docs.ucloud.cn/api/pathx-api/uga_un_bind_upath
   */
  uGAUnBindUPath(
    request?: UGAUnBindUPathRequest
  ): Promise<UGAUnBindUPathResponse> {
    const args = { Action: 'UGAUnBindUPath', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as UGAUnBindUPathResponse
    );
  }

  /**
   * UnBindPathXSSL - 解绑PathX SSL 证书
   *
   * See also: https://docs.ucloud.cn/api/pathx-api/un_bind_path_xssl
   */
  unBindPathXSSL(
    request?: UnBindPathXSSLRequest
  ): Promise<UnBindPathXSSLResponse> {
    const args = { Action: 'UnBindPathXSSL', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as UnBindPathXSSLResponse
    );
  }
}

/**
 * BindPathXSSL - 绑定PathX SSL证书
 */
export interface BindPathXSSLRequest {
  /**
   * 证书ID，如果没有指定证书ID也没有申请免费证书，HTTPS接入无法正常工作
   */
  SSLId: string;
  /**
   * UGA实例ID
   */
  UGAId: string;
  /**
   * 绑定SSL证书的HTTPS端口。Port.0 Port.1对应多个Port。如果Port不存在则不会绑定
   */
  Port: number[];
}

/**
 * BindPathXSSL - 绑定PathX SSL证书
 */
export interface BindPathXSSLResponse {}

/**
 * CreateGlobalSSHInstance - 创建GlobalSSH实例
 */
export interface CreateGlobalSSHInstanceRequest {
  /**
   * 填写支持SSH访问IP的地区名称，如“洛杉矶”，“新加坡”，“香港”，“东京”，“华盛顿”，“法兰克福”。Area和AreaCode两者必填一个
   */
  Area: string;
  /**
   * 被SSH访问的源站IP，仅支持IPv4地址。
   */
  TargetIP: string;
  /**
   * 源站服务器监听的SSH端口，可取范围[1-65535]，不能使用80，443,  65123端口。如果InstanceType=Free，取值范围缩小为[22,3389],linux系统选择22，windows系统自动选3389。
   */
  Port: number;
  /**
   * AreaCode, 区域航空港国际通用代码。Area和AreaCode两者必填一个
   */
  AreaCode: string;
  /**
   * 备注信息
   */
  Remark?: string;
  /**
   * 支付方式，如按月、按年、按时
   */
  ChargeType?: string;
  /**
   * 购买数量
   */
  Quantity?: number;
  /**
   * 枚举值：["Enterprise","Basic","Free"], 分别代表企业版，基础版，免费版
   */
  InstanceType?: string;
  /**
   * Ultimate版本带宽包大小,枚举值：[0,20,40]。单位MB
   */
  BandwidthPackage?: number;
  /**
   * InstanceType等于Basic时可以在["cn-bj2","cn-sh2","cn-gd"]中选择1个作为转发机房，Free版本固定为cn-bj2,其他付费版默认配置三个转发机房
   */
  ForwardRegion?: string;
  /**
   * 使用代金券可冲抵部分费用
   */
  CouponId?: string;
}

/**
 * CreateGlobalSSHInstance - 创建GlobalSSH实例
 */
export interface CreateGlobalSSHInstanceResponse {
  /**
   * 实例ID，资源唯一标识
   */
  InstanceId: string;
  /**
   * 加速域名，访问该域名可就近接入
   */
  AcceleratingDomain?: string;
}

/**
 * CreatePathXSSL - 创建SSL证书，可以把整个 Pem 证书内容传到SSLContent，或者把证书、私钥、CA证书分别传过来
 */
export interface CreatePathXSSLRequest {
  /**
   * SSL证书的名字
   */
  SSLName: string;
  /**
   * 所添加的SSL证书类型，目前只支持Pem格式
   */
  SSLType?: string;
  /**
   * SSL证书的完整内容，私钥不可使用密码，包括加密证书的私钥、用户证书或CA证书等
   */
  SSLContent?: string;
  /**
   * 用户自签证书内容
   */
  UserCert?: string;
  /**
   * 加密证书的私钥，不可使用密码保护，开启密码保护后，重启服务需要输入密码
   */
  PrivateKey?: string;
  /**
   * CA颁发证书内容
   */
  CACert?: string;
}

/**
 * CreatePathXSSL - 创建SSL证书，可以把整个 Pem 证书内容传到SSLContent，或者把证书、私钥、CA证书分别传过来
 */
export interface CreatePathXSSLResponse {
  /**
   * SSL证书的Id
   */
  SSLId: string;
}

/**
 * CreateUGAForwarder - 创建加速实例转发器，支持HTTPS接入HTTPS回源、HTTPS接入HTTP回源、HTTP接入HTTP回源、TCP接入TCP回源、UDP接入UDP回源、 支持WSS接入WSS回源、WSS接入WS回源、WS接入WS回源
 */
export interface CreateUGAForwarderRequest {
  /**
   * 加速配置实例ID
   */
  UGAId: string;
  /**
   * HTTP接入HTTP回源转发，接入端口。禁用65123端口
   */
  HTTPHTTP?: number[];
  /**
   * HTTP接入HTTP回源转发，源站监听端口
   */
  HTTPHTTPRS?: number[];
  /**
   * HTTPS接入HTTP回源转发，接入端口。禁用65123端口
   */
  HTTPSHTTP?: number[];
  /**
   * HTTPS接入HTTP回源转发，回源端口
   */
  HTTPSHTTPRS?: number[];
  /**
   * HTTPS接入HTTPS回源转发，接入端口。禁用65123端口
   */
  HTTPSHTTPS?: number[];
  /**
   * HTTPS接入HTTPS回源转发，源站监听端口
   */
  HTTPSHTTPSRS?: number[];
  /**
   * TCP接入端口
   */
  TCP?: number[];
  /**
   * TCP回源端口
   */
  TCPRS?: number[];
  /**
   * UDP接入端口
   */
  UDP?: number[];
  /**
   * UDP回源端口
   */
  UDPRS?: number[];
}

/**
 * CreateUGAForwarder - 创建加速实例转发器，支持HTTPS接入HTTPS回源、HTTPS接入HTTP回源、HTTP接入HTTP回源、TCP接入TCP回源、UDP接入UDP回源、 支持WSS接入WSS回源、WSS接入WS回源、WS接入WS回源
 */
export interface CreateUGAForwarderResponse {}

/**
 * CreateUGAInstance - 创建全球加速配置项
 */
export interface CreateUGAInstanceRequest {
  /**
   * 加速配置实例名称
   */
  Name: string;
  /**
   * 加速源IP，多个IP用英文半角逗号(,)隔开；IPList和Domain二选一必填
   */
  IPList?: string;
  /**
   * 加速源域名，IPList和Domain二选一必填
   */
  Domain?: string;
  /**
   * TCP端口号，已废弃。请使用 CreateUGAForwarder API 创建端口
   */
  TCP?: string[];
  /**
   * UDP端口号，已废弃。请使用 CreateUGAForwarder API 创建端口
   */
  UDP?: string[];
}

/**
 * CreateUGAInstance - 创建全球加速配置项
 */
export interface CreateUGAInstanceResponse {
  /**
   * 加速配置ID
   */
  UGAId: string;
  /**
   * 加速域名 用户可把业务域名CName到此域名上。注意：未绑定线路情况时 加速域名解析不出IP。
   */
  CName?: string;
}

/**
 * CreateUPath - 创建UPath
 */
export interface CreateUPathRequest {
  /**
   * UPath名字
   */
  Name: string;
  /**
   * 选择的线路
   */
  LineId: string;
  /**
   * 线路带宽，最小1Mbps,最大带宽由 DescribePathXLineConfig 接口获得。如需更大带宽，请联系产品团队。
   */
  Bandwidth: number;
  /**
   * 计费模式，默认为Month 按月收费,可选范围['Month','Year','Dynamic']
   */
  ChargeType?: string;
  /**
   * 购买周期，ChargeType为Month时，Quantity默认为0代表购买到月底，按时和按年付费该参数必须大于0
   */
  Quantity?: number;
  /**
   * 是否开启后付费, 默认为false
   */
  PostPaid?: boolean;
  /**
   * 代金券Id
   */
  CouponId?: string;
}

/**
 * CreateUPath - 创建UPath
 */
export interface CreateUPathResponse {
  /**
   * 加速线路实例Id
   */
  UPathId: string;
}

/**
 * DeleteGlobalSSHInstance - 删除GlobalSSH实例
 */
export interface DeleteGlobalSSHInstanceRequest {
  /**
   * 实例Id,资源的唯一标识
   */
  InstanceId: string;
}

/**
 * DeleteGlobalSSHInstance - 删除GlobalSSH实例
 */
export interface DeleteGlobalSSHInstanceResponse {}

/**
 * DeletePathXSSL - 删除PathX SSL证书
 */
export interface DeletePathXSSLRequest {
  /**
   * SSL证书的ID
   */
  SSLId: string;
}

/**
 * DeletePathXSSL - 删除PathX SSL证书
 */
export interface DeletePathXSSLResponse {}

/**
 * DeleteUGAForwarder - 删除加速实例转发器 按接入端口删除
 */
export interface DeleteUGAForwarderRequest {
  /**
   * 加速配置实例ID
   */
  UGAId: string;
  /**
   * HTTP接入HTTP回源，接入端口。禁用65123端口
   */
  HTTPHTTP?: number[];
  /**
   * HTTPS接入HTTP回源， 接入端口。禁用65123端口
   */
  HTTPSHTTP?: number[];
  /**
   * HTTPS接入HTTPS回源， 接入端口。禁用65123端口
   */
  HTTPSHTTPS?: number[];
  /**
   * TCP接入端口
   */
  TCP?: number[];
  /**
   * UDP接入端口
   */
  UDP?: number[];
}

/**
 * DeleteUGAForwarder - 删除加速实例转发器 按接入端口删除
 */
export interface DeleteUGAForwarderResponse {}

/**
 * DeleteUGAInstance - 删除全球加速服务加速配置
 */
export interface DeleteUGAInstanceRequest {
  /**
   * 加速配置实例ID
   */
  UGAId: string;
}

/**
 * DeleteUGAInstance - 删除全球加速服务加速配置
 */
export interface DeleteUGAInstanceResponse {}

/**
 * DeleteUPath - 删除UPath
 */
export interface DeleteUPathRequest {
  /**
   * 加速线路实例ID
   */
  UPathId: string;
}

/**
 * DeleteUPath - 删除UPath
 */
export interface DeleteUPathResponse {}

/**
 * DescribeGlobalSSHInstance - 获取GlobalSSH实例列表（传实例ID获取单个实例信息，不传获取项目下全部实例）
 */
export interface DescribeGlobalSSHInstanceRequest {
  /**
   * 实例ID，资源唯一标识
   */
  InstanceId?: string;
}

/**
 * DescribeGlobalSSHInstance - 获取GlobalSSH实例列表（传实例ID获取单个实例信息，不传获取项目下全部实例）
 */
export interface DescribeGlobalSSHInstanceResponse {
  /**
   * GlobalSSH实例列表，实例的属性参考GlobalSSHInfo模型
   */
  InstanceSet?: {
    /**
     * 实例ID，资源唯一标识
     */
    InstanceId: string;
    /**
     * 枚举值：["Enterprise","Basic","Free","Welfare"], 分别代表企业版，基础版本，免费版本，较早的公测免费版
     */
    InstanceType: string;
    /**
     * GlobalSSH分配的加速域名。
     */
    AcceleratingDomain: string;
    /**
     * 被SSH访问的IP所在地区
     */
    Area: string;
    /**
     * 被SSH访问的源站 IPv4地址。
     */
    TargetIP: string;
    /**
     * 备注信息
     */
    Remark: string;
    /**
     * 源站服务器监听的SSH端口，windows系统为RDP端口
     */
    Port: number;
    /**
     * InstanceType等于Free时，由系统自动分配，不等于源站Port值。InstanceType不等于Free时，与源站Port值相同。
     */
    GlobalSSHPort: number;
    /**
     * 支付周期，如Month,Year,Dynamic等
     */
    ChargeType: string;
    /**
     * 资源创建时间戳
     */
    CreateTime: number;
    /**
     * 资源过期时间戳
     */
    ExpireTime: number;
    /**
     * 是否过期
     */
    Expire: boolean;
    /**
     * globalssh Ultimate带宽包大小
     */
    BandwidthPackage?: number;
    /**
     * InstanceType为Basic版本时，需要展示具体分配的转发机房
     */
    ForwardRegion?: string;
  }[];
}

/**
 * DescribePathXLineConfig - 获取全球加速线路信息
 */
export interface DescribePathXLineConfigRequest {}

/**
 * DescribePathXLineConfig - 获取全球加速线路信息
 */
export interface DescribePathXLineConfigResponse {
  /**
   * UGAA线路列表,参考UGAALine字段定义
   */
  LineSet?: {
    /**
     * 线路源
     */
    LineFrom: string;
    /**
     * 线路目的
     */
    LineTo: string;
    /**
     * 线路源中文名称
     */
    LineFromName: string;
    /**
     * 线路目的中文名称
     */
    LineToName: string;
    /**
     * 线路可售最大带宽
     */
    MaxBandwidth: number;
    /**
     * 线路计费Id
     */
    LineId?: string;
    /**
     * 子线路信息
     */
    LineDetail?: {
      /**
       * 线路源
       */
      LineFrom: string;
      /**
       * 线路目的
       */
      LineTo: string;
      /**
       * 线路计费Id
       */
      LineId?: string;
      /**
       * 线路源中文名称
       */
      LineFromName: string;
      /**
       * 线路目的中文名称
       */
      LineToName: string;
    }[];
  }[];
}

/**
 * DescribePathXSSL - 获取SSL证书信息,支持分页，支持按证书名称 证书域名模糊搜索
 */
export interface DescribePathXSSLRequest {
  /**
   * SSL证书的Id，不传分页获取证书列表
   */
  SSLId?: string;
  /**
   * 不为空则按证书名称、证书域名模糊搜索 分页返回结果
   */
  SearchValue?: string;
  /**
   * 最大返回条数，默认100，最大400
   */
  Limit?: number;
  /**
   * 偏移值 默认为0
   */
  Offset?: number;
}

/**
 * DescribePathXSSL - 获取SSL证书信息,支持分页，支持按证书名称 证书域名模糊搜索
 */
export interface DescribePathXSSLResponse {
  /**
   * SSL证书详细信息，具体结构见 PathXSSLSet
   */
  DataSet?: {
    /**
     * SSL证书的Id
     */
    SSLId?: string;
    /**
     * SSL证书的名字
     */
    SSLName?: string;
    /**
     * 证书域名
     */
    SubjectName?: string;
    /**
     * 证书过期时间 时间戳
     */
    ExpireTime?: number;
    /**
     * 证书来源，0：用户上传 1: 免费颁发
     */
    SourceType?: number;
    /**
     * SSL证书（用户证书、私钥、ca证书合并）内容md5值
     */
    SSLMD5?: string;
    /**
     * SSL证书的创建时间 时间戳
     */
    CreateTime?: number;
    /**
     * SSL证书绑定的对象
     */
    SSLBindedTargetSet?: {
      /**
       * SSL证书绑定到的实例ID
       */
      ResourceId: string;
      /**
       * SSL证书绑定到的实例名称
       */
      ResourceName?: string;
    }[];
    /**
     * SSL证书内容
     */
    SSLContent?: string;
  }[];
  /**
   * 符合条件的证书总数
   */
  TotalCount?: number;
}

/**
 * DescribeUGAInstance - 获取全球加速服务加速配置信息，指定实例ID返回单个实例。未指定实例ID时 指定分页参数 则按创建时间降序 返回记录
 */
export interface DescribeUGAInstanceRequest {
  /**
   * 加速配置实例ID，如果传了实例ID 则返回匹配实例ID的记录；如果没传则返回 ProjectId 下全部实例且符合分页要求
   */
  UGAId?: string;
  /**
   * 返回的最大条数，默认为100，最大值400
   */
  Limit?: number;
  /**
   * 偏移量，默认为0
   */
  Offset?: number;
}

/**
 * DescribeUGAInstance - 获取全球加速服务加速配置信息，指定实例ID返回单个实例。未指定实例ID时 指定分页参数 则按创建时间降序 返回记录
 */
export interface DescribeUGAInstanceResponse {
  /**
   * 全球加速实例信息列表
   */
  UGAList?: {
    /**
     * 加速配置实例ID
     */
    UGAId: string;
    /**
     * 加速域名，请在加速区域配置您的业务域名的CName记录值为加速域名
     */
    CName: string;
    /**
     * 加速配置名称
     */
    UGAName: string;
    /**
     * 源站IP列表，多个值由半角英文逗号相隔
     */
    IPList?: string[];
    /**
     * 源站域名
     */
    Domain?: string;
    /**
     * 源站所在区域，加速实例在绑定线路后会自动设置该值。console页面上通过该值过滤加速实例可以绑定的upath实例。注意：缺少该值会导致在console上无法修改线路
     */
    Location?: string;
    /**
     * 绑定的加速线路
     */
    UPathSet?: {
      /**
       * UPath名字
       */
      UPathName?: string;
      /**
       * UPath 实例ID
       */
      UPathId?: string;
      /**
       * 带宽 Mbps, 1~800Mbps
       */
      Bandwidth?: number;
      /**
       * 线路ID
       */
      LineId?: string;
      /**
       * 线路起点中文名字，加速区域
       */
      LineFromName?: string;
      /**
       * 线路对端中文名字，源站区域
       */
      LineToName?: string;
      /**
       * 线路起点英文代号，加速区域
       */
      LineFrom?: string;
      /**
       * 线路对端英文代号，源站区域
       */
      LineTo?: string;
    }[];
    /**
     * 端口配置信息（不再维护，建议使用ForwarderSet）
     */
    TaskSet?: {
      /**
       * 接入端口
       */
      Port: number;
      /**
       * 转发协议，枚举值["TCP"，"UDP"，"HTTPHTTP"，"HTTPSHTTP"，"HTTPSHTTPS"]。TCP和UDP代表四层转发，其余为七层转发
       */
      Protocol: string;
    }[];
    /**
     * UGA 4层转发器配置，记录接入或回源端口，接入或回源协议信息
     */
    L4ForwarderSet?: {
      /**
       * 接入端口
       */
      Port: number;
      /**
       * 转发协议，枚举值["TCP"，"UDP"，"HTTPHTTP"，"HTTPSHTTP"，"HTTPSHTTPS"]。TCP和UDP代表四层转发，其余为七层转发
       */
      Protocol: string;
      /**
       * RSPort，源站监听端口
       */
      RSPort: number;
    }[];
    /**
     * UGA 7层转发器配置，记录接入或回源端口，接入或回源协议信息 如绑定证书会返回证书ID
     */
    L7ForwarderSet?: {
      /**
       * 接入端口
       */
      Port: number;
      /**
       * 转发协议，枚举值["TCP"，"UDP"，"HTTPHTTP"，"HTTPSHTTP"，"HTTPSHTTPS"]。TCP和UDP代表四层转发，其余为七层转发
       */
      Protocol: string;
      /**
       * RSPort，源站监听端口
       */
      RSPort: number;
      /**
       * 证书ID
       */
      SSLId?: string;
      /**
       * 证书名称
       */
      SSLName?: string;
    }[];
    /**
     * 线路出口IP地址
     */
    OutPublicIpList?: {
      /**
       *  线路出口EIP
       */
      IP?: string;
      /**
       * 线路出口机房代号
       */
      Area?: string;
    }[];
  }[];
  /**
   * 符合条件的总数
   */
  TotalCount?: number;
}

/**
 * DescribeUPath - 获取加速线路信息
 */
export interface DescribeUPathRequest {
  /**
   * 如果不填参数 返回 ProjectId 下所有的线路资源，填此参数则返回upath实例ID匹配的线路
   */
  UPathId?: string;
}

/**
 * DescribeUPath - 获取加速线路信息
 */
export interface DescribeUPathResponse {
  /**
   * 线路信息数组
   */
  UPathSet: {
    /**
     * 是否为后付费实例
     */
    PostPaid?: boolean;
    /**
     * 计费模式，默认为Month 按月收费,可选范围['Month','Year','Dynamic']
     */
    ChargeType?: string;
    /**
     * UPath实例名字
     */
    Name?: string;
    /**
     * UPath加速线路实例ID
     */
    UPathId?: string;
    /**
     * 带宽，单位Mbps
     */
    Bandwidth?: number;
    /**
     * 选择的线路
     */
    LineId?: string;
    /**
     * 与该UPath绑定的UGA列表
     */
    UGAList?: {
      /**
       * 加速配置ID
       */
      UGAId?: string;
      /**
       * 源站IP列表，多个值由半角英文逗号相隔
       */
      IPList?: string[];
      /**
       * 源站域名
       */
      Domain?: string;
    }[];
    /**
     * UPath创建的时间，10位时间戳
     */
    CreateTime?: number;
    /**
     * UPath的过期时间，10位时间戳
     */
    ExpireTime?: number;
    /**
     * 线路入口名称
     */
    LineFromName?: string;
    /**
     * 线路出口名称
     */
    LineToName?: string;
    /**
     * 线路出口IP数组
     */
    OutPublicIpList?: {
      /**
       *  线路出口EIP
       */
      IP?: string;
      /**
       * 线路出口机房代号
       */
      Area?: string;
    }[];
  }[];
}

/**
 * DescribeUPathTemplate - 查询UPath的监控模板
 */
export interface DescribeUPathTemplateRequest {
  /**
   * 加速线路实例ID,格式 upath-xxxx
   */
  UPathId: string;
}

/**
 * DescribeUPathTemplate - 查询UPath的监控模板
 */
export interface DescribeUPathTemplateResponse {
  /**
   * 监控模板详情
   */
  DataSet: {
    /**
     * 收敛策略，可选范围 ['Exponential','Continuous','Once']，分别对应指数递增、连续告警、单次告警
     */
    AlarmStrategy: string;
    /**
     * 告警探测周期，单位秒
     */
    AlarmFrequency: number;
    /**
     * 比较策略，可选 ['GE','LE']  分别代表不小于和不大于
     */
    Compare: string;
    /**
     * 联系组ID
     */
    ContactGroupId: number;
    /**
     * 告警指标名称, 所有n的个数必须一致。目前仅允许以下四项：UpathNetworkOut:出向带宽，UpathNetworkIn:入向带宽，UpathNetworkOutUsage:出向带宽使用率，UpathNetworkInUsage:入向带宽使用率
     */
    MetricName: string;
    /**
     * 告警阈值，带宽使用率的阈值范围是[50,100]的正整数，带宽告警阈值为1000000的倍数, 如大于2Mbps则告警 阈值应该传 2000000
     */
    Threshold: number;
    /**
     * 告警触发周期（次数）
     */
    TriggerCount: number;
    /**
     * 告警模板策略ID
     */
    AlarmTemplateRuleId: number;
    /**
     * 资源类型
     */
    ResourceType?: string;
  }[];
}

/**
 * GetGlobalSSHPrice - 获取GlobalSSH价格
 */
export interface GetGlobalSSHPriceRequest {
  /**
   * 购买周期，如果ChargeType为Month，Quantity默认为0；其他情况必须为大于0的整数
   */
  Quantity?: number;
  /**
   * 计费类型：Dynamic，Month，Year
   */
  ChargeType?: string;
  /**
   * 版本类型。枚举值，Enterprise:企业版；Basic:基础版。可不填，默认为Basic。
   */
  InstanceType?: string;
}

/**
 * GetGlobalSSHPrice - 获取GlobalSSH价格
 */
export interface GetGlobalSSHPriceResponse {
  /**
   * 价格,返回单位为元
   */
  Price?: number;
}

/**
 * GetGlobalSSHUpdatePrice - 获取GlobalSSH升级价格
 */
export interface GetGlobalSSHUpdatePriceRequest {
  /**
   * 升级后的实例类型。枚举值，Enterprise:企业版；Basic:基础版。
   */
  InstanceType: string;
  /**
   * 实例ID，唯一资源标识。从免费版升级到付费版可不填，其他情况必填。
   */
  InstanceId?: string;
  /**
   * 购买周期，如果ChargeType为Month，Quantity可以不填默认为0；其他情况必须为正整数。
   */
  Quantity?: number;
  /**
   * 计费类型：Dynamic，Month，Year。从免费版升级到付费版必须传，其他情况不需要传
   */
  ChargeType?: string;
}

/**
 * GetGlobalSSHUpdatePrice - 获取GlobalSSH升级价格
 */
export interface GetGlobalSSHUpdatePriceResponse {
  /**
   * 价格,返回单位为元。正数表示付费升级，负数表示降级退费。
   */
  Price?: number;
}

/**
 * GetPathXMetric - 获取全球加速监控信息
 */
export interface GetPathXMetricRequest {
  /**
   * ResourceId，如upath ID  和 uga ID
   */
  ResourceId: string;
  /**
   * 查询起始时间，10位长度时间戳
   */
  BeginTime: number;
  /**
   * 查询结束时间，10位长度时间戳
   */
  EndTime: number;
  /**
   * 查询监控的指标项。目前仅允许以下四项：NetworkOut:出向带宽，NetworkIn:入向带宽，NetworkOutUsage:出向带宽使用率，NetworkInUsage:入向带宽使用率
   */
  MetricName: string[];
  /**
   * upath:加速线路,uga:加速实例
   */
  ResourceType: string;
  /**
   * 具体线路id，调用DescribePathXLineConfig接口获取线路列表
   */
  LineId: string;
}

/**
 * GetPathXMetric - 获取全球加速监控信息
 */
export interface GetPathXMetricResponse {
  /**
   * 监控数据结果集
   */
  DataSet?: {
    /**
     * 出向带宽
     */
    NetworkOut?: {
      /**
       * 时间戳
       */
      Timestamp?: number;
      /**
       * 监控点数值
       */
      Value?: number;
    }[];
    /**
     * 入向带宽
     */
    NetworkIn?: {
      /**
       * 时间戳
       */
      Timestamp?: number;
      /**
       * 监控点数值
       */
      Value?: number;
    }[];
    /**
     * 出向带宽使用率
     */
    NetworkOutUsage?: {
      /**
       * 时间戳
       */
      Timestamp?: number;
      /**
       * 监控点数值
       */
      Value?: number;
    }[];
    /**
     * 入向带宽使用率
     */
    NetworkInUsage?: {
      /**
       * 时间戳
       */
      Timestamp?: number;
      /**
       * 监控点数值
       */
      Value?: number;
    }[];
  };
}

/**
 * ModifyGlobalSSHPort - 修改GlobalSSH端口
 */
export interface ModifyGlobalSSHPortRequest {
  /**
   * 实例ID,资源唯一标识。当前仅收费版GlobalSSH实例可以修改端口。
   */
  InstanceId: string;
  /**
   * 源站服务器监听的SSH端口号。收费版本端口范围[1,65535]且不能为80，443，65123端口。免费版不支持修改端口。
   */
  Port: number;
}

/**
 * ModifyGlobalSSHPort - 修改GlobalSSH端口
 */
export interface ModifyGlobalSSHPortResponse {}

/**
 * ModifyGlobalSSHType - 修改GlobalSSH实例类型，仅支持低版本升级到高版本，不支持高版本降级到低版本
 */
export interface ModifyGlobalSSHTypeRequest {
  /**
   * 实例ID,资源唯一标识
   */
  InstanceId: string;
  /**
   * 取值范围["Enterprise","Basic"]，分别对应企业版和基础版，表示升级后的实例类型。比如从Free版本升级为Basic版或Enterprise版，不可从收费版降级为免费版，或从企业版降级为基础版
   */
  InstanceType: string;
  /**
   * 支付方式，如按月、按年、按时
   */
  ChargeType?: string;
  /**
   * 购买时间，当ChargeType为Month，Quantity为0代表购买到月底
   */
  Quantity?: string;
  /**
   * 可抵扣费用的券，通常不使用
   */
  CouponId?: string;
}

/**
 * ModifyGlobalSSHType - 修改GlobalSSH实例类型，仅支持低版本升级到高版本，不支持高版本降级到低版本
 */
export interface ModifyGlobalSSHTypeResponse {}

/**
 * ModifyUPathBandwidth - 修改加速线路带宽
 */
export interface ModifyUPathBandwidthRequest {
  /**
   * UPath 加速线路实例Id
   */
  UPathId: string;
  /**
   * 线路带宽，单位Mbps。最小1Mbps,最大带宽由 DescribePathXLineConfig 接口获得。如需更大带宽，请联系产品团队。
   */
  Bandwidth: number;
}

/**
 * ModifyUPathBandwidth - 修改加速线路带宽
 */
export interface ModifyUPathBandwidthResponse {}

/**
 * ModifyUPathTemplate - 修改UPath监控告警项
 */
export interface ModifyUPathTemplateRequest {
  /**
   * 加速线路实例ID
   */
  UPathId: string;
  /**
   * 告警指标名称, 所有n的个数必须一致。目前仅允许以下四项：UpathNetworkOut:出向带宽，UpathNetworkIn:入向带宽，UpathNetworkOutUsage:出向带宽使用率，UpathNetworkInUsage:入向带宽使用率
   */
  MetricName?: string[];
  /**
   * 告警阈值，带宽使用率的阈值范围是[50,100]的正整数，带宽告警阈值为1000000的倍数, 如大于2Mbps则告警 阈值应该传 2000000
   */
  Threshold?: number[];
  /**
   * 告警探测周期，单位：秒
   */
  AlarmFrequency?: number[];
  /**
   * 告警组id
   */
  ContactGroupId?: number[];
  /**
   * 比较策略，可选 ['GE','LE']  分别代表不小于和不大于
   */
  Compare?: string[];
  /**
   * 收敛策略，可选范围 ['Exponential','Continuous','Once']，分别对应指数递增、连续告警、单次告警
   */
  AlarmStrategy?: string[];
  /**
   * 告警触发周期（次数）
   */
  TriggerCount?: number[];
}

/**
 * ModifyUPathTemplate - 修改UPath监控告警项
 */
export interface ModifyUPathTemplateResponse {}

/**
 * UGABindUPath - UGA绑定UPath
 */
export interface UGABindUPathRequest {
  /**
   * 加速配置实例ID，格式uga-xxxx
   */
  UGAId: string;
  /**
   * 加速线路实例ID，格式upath-xxx
   */
  UPathId: string;
  /**
   * 代金券
   */
  CouponId?: string;
}

/**
 * UGABindUPath - UGA绑定UPath
 */
export interface UGABindUPathResponse {}

/**
 * UGAUnBindUPath - UGA与UPath解绑
 */
export interface UGAUnBindUPathRequest {
  /**
   * 加速配置实例ID 格式uga-xxx
   */
  UGAId: string;
  /**
   * 加速线路实例ID 格式upath-xxx
   */
  UPathId: string;
}

/**
 * UGAUnBindUPath - UGA与UPath解绑
 */
export interface UGAUnBindUPathResponse {}

/**
 * UnBindPathXSSL - 解绑PathX SSL 证书
 */
export interface UnBindPathXSSLRequest {
  /**
   * UGA实例ID。
   */
  UGAId: string;
  /**
   * SSL证书ID。
   */
  SSLId: string;
  /**
   * 解绑SSL证书的HTTPS端口。Port.0 Port.1格式 端口错误则解绑失败。
   */
  Port: number[];
}

/**
 * UnBindPathXSSL - 解绑PathX SSL 证书
 */
export interface UnBindPathXSSLResponse {}
