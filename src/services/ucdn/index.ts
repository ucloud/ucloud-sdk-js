import Client from '../../core/client';
import Request from '../../core/request';
import { ConfigOptions } from '../../core/config';
import { CredentialOptions } from '../../core/credential';

/**
 * This client is used to call actions of **ucdn** service
 */
export default class UCDNClient extends Client {
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
   * AddCertificate - 添加证书
   *
   * See also: https://docs.ucloud.cn/api/ucdn-api/add_certificate
   */
  addCertificate(
    request?: AddCertificateRequest
  ): Promise<AddCertificateResponse> {
    const args = { Action: 'AddCertificate', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as AddCertificateResponse
    );
  }

  /**
   * ControlUcdnDomainCacheAccess - 封禁解封缓存访问
   *
   * See also: https://docs.ucloud.cn/api/ucdn-api/control_ucdn_domain_cache_access
   */
  controlUcdnDomainCacheAccess(
    request?: ControlUcdnDomainCacheAccessRequest
  ): Promise<ControlUcdnDomainCacheAccessResponse> {
    const args = { Action: 'ControlUcdnDomainCacheAccess', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as ControlUcdnDomainCacheAccessResponse
    );
  }

  /**
   * DeleteCertificate - 删除证书
   *
   * See also: https://docs.ucloud.cn/api/ucdn-api/delete_certificate
   */
  deleteCertificate(
    request?: DeleteCertificateRequest
  ): Promise<DeleteCertificateResponse> {
    const args = { Action: 'DeleteCertificate', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DeleteCertificateResponse
    );
  }

  /**
   * DescribeNewUcdnPrefetchCacheTask - 获取预取任务状态
   *
   * See also: https://docs.ucloud.cn/api/ucdn-api/describe_new_ucdn_prefetch_cache_task
   */
  describeNewUcdnPrefetchCacheTask(
    request?: DescribeNewUcdnPrefetchCacheTaskRequest
  ): Promise<DescribeNewUcdnPrefetchCacheTaskResponse> {
    const args = {
      Action: 'DescribeNewUcdnPrefetchCacheTask',
      ...(request || {}),
    };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DescribeNewUcdnPrefetchCacheTaskResponse
    );
  }

  /**
   * DescribeNewUcdnRefreshCacheTask - 获取域名刷新任务状态
   *
   * See also: https://docs.ucloud.cn/api/ucdn-api/describe_new_ucdn_refresh_cache_task
   */
  describeNewUcdnRefreshCacheTask(
    request?: DescribeNewUcdnRefreshCacheTaskRequest
  ): Promise<DescribeNewUcdnRefreshCacheTaskResponse> {
    const args = {
      Action: 'DescribeNewUcdnRefreshCacheTask',
      ...(request || {}),
    };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DescribeNewUcdnRefreshCacheTaskResponse
    );
  }

  /**
   * GetCertificateV2 - 获取证书列表(新)
   *
   * See also: https://docs.ucloud.cn/api/ucdn-api/get_certificate_v2
   */
  getCertificateV2(
    request?: GetCertificateV2Request
  ): Promise<GetCertificateV2Response> {
    const args = { Action: 'GetCertificateV2', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as GetCertificateV2Response
    );
  }

  /**
   * GetNewUcdnDomainHitRate - 获取域名命中率
   *
   * See also: https://docs.ucloud.cn/api/ucdn-api/get_new_ucdn_domain_hit_rate
   */
  getNewUcdnDomainHitRate(
    request?: GetNewUcdnDomainHitRateRequest
  ): Promise<GetNewUcdnDomainHitRateResponse> {
    const args = { Action: 'GetNewUcdnDomainHitRate', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as GetNewUcdnDomainHitRateResponse
    );
  }

  /**
   * GetNewUcdnLogRefererStatistics - 获取热点referer统计
   *
   * See also: https://docs.ucloud.cn/api/ucdn-api/get_new_ucdn_log_referer_statistics
   */
  getNewUcdnLogRefererStatistics(
    request?: GetNewUcdnLogRefererStatisticsRequest
  ): Promise<GetNewUcdnLogRefererStatisticsResponse> {
    const args = {
      Action: 'GetNewUcdnLogRefererStatistics',
      ...(request || {}),
    };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as GetNewUcdnLogRefererStatisticsResponse
    );
  }

  /**
   * GetNewUcdnLogUrlStatistics - 获取日志url统计
   *
   * See also: https://docs.ucloud.cn/api/ucdn-api/get_new_ucdn_log_url_statistics
   */
  getNewUcdnLogUrlStatistics(
    request?: GetNewUcdnLogUrlStatisticsRequest
  ): Promise<GetNewUcdnLogUrlStatisticsResponse> {
    const args = { Action: 'GetNewUcdnLogUrlStatistics', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as GetNewUcdnLogUrlStatisticsResponse
    );
  }

  /**
   * GetUcdnDomain95BandwidthV2 - 获取域名九五峰值带宽数据
   *
   * See also: https://docs.ucloud.cn/api/ucdn-api/get_ucdn_domain95_bandwidth_v2
   */
  getUcdnDomain95BandwidthV2(
    request?: GetUcdnDomain95BandwidthV2Request
  ): Promise<GetUcdnDomain95BandwidthV2Response> {
    const args = { Action: 'GetUcdnDomain95BandwidthV2', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as GetUcdnDomain95BandwidthV2Response
    );
  }

  /**
   * GetUcdnDomainBandwidthV2 - 获取域名带宽数据(新)
   *
   * See also: https://docs.ucloud.cn/api/ucdn-api/get_ucdn_domain_bandwidth_v2
   */
  getUcdnDomainBandwidthV2(
    request?: GetUcdnDomainBandwidthV2Request
  ): Promise<GetUcdnDomainBandwidthV2Response> {
    const args = { Action: 'GetUcdnDomainBandwidthV2', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as GetUcdnDomainBandwidthV2Response
    );
  }

  /**
   * GetUcdnDomainConfig - 批量获取加速域名配置
   *
   * See also: https://docs.ucloud.cn/api/ucdn-api/get_ucdn_domain_config
   */
  getUcdnDomainConfig(
    request?: GetUcdnDomainConfigRequest
  ): Promise<GetUcdnDomainConfigResponse> {
    const args = { Action: 'GetUcdnDomainConfig', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as GetUcdnDomainConfigResponse
    );
  }

  /**
   * GetUcdnDomainHitRate - 获取域名命中率
   *
   * See also: https://docs.ucloud.cn/api/ucdn-api/get_ucdn_domain_hit_rate
   */
  getUcdnDomainHitRate(
    request?: GetUcdnDomainHitRateRequest
  ): Promise<GetUcdnDomainHitRateResponse> {
    const args = { Action: 'GetUcdnDomainHitRate', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as GetUcdnDomainHitRateResponse
    );
  }

  /**
   * GetUcdnDomainHttpCodeV2 - 获取域名状态码信息
   *
   * See also: https://docs.ucloud.cn/api/ucdn-api/get_ucdn_domain_http_code_v2
   */
  getUcdnDomainHttpCodeV2(
    request?: GetUcdnDomainHttpCodeV2Request
  ): Promise<GetUcdnDomainHttpCodeV2Response> {
    const args = { Action: 'GetUcdnDomainHttpCodeV2', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as GetUcdnDomainHttpCodeV2Response
    );
  }

  /**
   * GetUcdnDomainInfoList - 获取域名基本信息
   *
   * See also: https://docs.ucloud.cn/api/ucdn-api/get_ucdn_domain_info_list
   */
  getUcdnDomainInfoList(
    request?: GetUcdnDomainInfoListRequest
  ): Promise<GetUcdnDomainInfoListResponse> {
    const args = { Action: 'GetUcdnDomainInfoList', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as GetUcdnDomainInfoListResponse
    );
  }

  /**
   * GetUcdnDomainLog - 获取加速域名原始日志
   *
   * See also: https://docs.ucloud.cn/api/ucdn-api/get_ucdn_domain_log
   */
  getUcdnDomainLog(
    request?: GetUcdnDomainLogRequest
  ): Promise<GetUcdnDomainLogResponse> {
    const args = { Action: 'GetUcdnDomainLog', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as GetUcdnDomainLogResponse
    );
  }

  /**
   * GetUcdnDomainLogV2 - 获取域名5分钟日志
   *
   * See also: https://docs.ucloud.cn/api/ucdn-api/get_ucdn_domain_log_v2
   */
  getUcdnDomainLogV2(
    request?: GetUcdnDomainLogV2Request
  ): Promise<GetUcdnDomainLogV2Response> {
    const args = { Action: 'GetUcdnDomainLogV2', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as GetUcdnDomainLogV2Response
    );
  }

  /**
   * GetUcdnDomainOriginHttpCode - 获取域名源站状态码监控
   *
   * See also: https://docs.ucloud.cn/api/ucdn-api/get_ucdn_domain_origin_http_code
   */
  getUcdnDomainOriginHttpCode(
    request?: GetUcdnDomainOriginHttpCodeRequest
  ): Promise<GetUcdnDomainOriginHttpCodeResponse> {
    const args = { Action: 'GetUcdnDomainOriginHttpCode', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as GetUcdnDomainOriginHttpCodeResponse
    );
  }

  /**
   * GetUcdnDomainOriginHttpCodeDetail - 获取域名源站详细状态码监控
   *
   * See also: https://docs.ucloud.cn/api/ucdn-api/get_ucdn_domain_origin_http_code_detail
   */
  getUcdnDomainOriginHttpCodeDetail(
    request?: GetUcdnDomainOriginHttpCodeDetailRequest
  ): Promise<GetUcdnDomainOriginHttpCodeDetailResponse> {
    const args = {
      Action: 'GetUcdnDomainOriginHttpCodeDetail',
      ...(request || {}),
    };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as GetUcdnDomainOriginHttpCodeDetailResponse
    );
  }

  /**
   * GetUcdnDomainOriginRequestNum - 获取域名回源请求数
   *
   * See also: https://docs.ucloud.cn/api/ucdn-api/get_ucdn_domain_origin_request_num
   */
  getUcdnDomainOriginRequestNum(
    request?: GetUcdnDomainOriginRequestNumRequest
  ): Promise<GetUcdnDomainOriginRequestNumResponse> {
    const args = {
      Action: 'GetUcdnDomainOriginRequestNum',
      ...(request || {}),
    };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as GetUcdnDomainOriginRequestNumResponse
    );
  }

  /**
   * GetUcdnDomainPrefetchEnable - 获取域名预取开启状态
   *
   * See also: https://docs.ucloud.cn/api/ucdn-api/get_ucdn_domain_prefetch_enable
   */
  getUcdnDomainPrefetchEnable(
    request?: GetUcdnDomainPrefetchEnableRequest
  ): Promise<GetUcdnDomainPrefetchEnableResponse> {
    const args = { Action: 'GetUcdnDomainPrefetchEnable', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as GetUcdnDomainPrefetchEnableResponse
    );
  }

  /**
   * GetUcdnDomainRequestNumV3 - 获取域名请求数
   *
   * See also: https://docs.ucloud.cn/api/ucdn-api/get_ucdn_domain_request_num_v3
   */
  getUcdnDomainRequestNumV3(
    request?: GetUcdnDomainRequestNumV3Request
  ): Promise<GetUcdnDomainRequestNumV3Response> {
    const args = { Action: 'GetUcdnDomainRequestNumV3', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as GetUcdnDomainRequestNumV3Response
    );
  }

  /**
   * GetUcdnPassBandwidthV2 - 获取回源带宽数据（cdn回客户源站部分）
   *
   * See also: https://docs.ucloud.cn/api/ucdn-api/get_ucdn_pass_bandwidth_v2
   */
  getUcdnPassBandwidthV2(
    request?: GetUcdnPassBandwidthV2Request
  ): Promise<GetUcdnPassBandwidthV2Response> {
    const args = { Action: 'GetUcdnPassBandwidthV2', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as GetUcdnPassBandwidthV2Response
    );
  }

  /**
   * GetUcdnProIspBandwidthV2 - 按省份运营商获取域名带宽数据
   *
   * See also: https://docs.ucloud.cn/api/ucdn-api/get_ucdn_pro_isp_bandwidth_v2
   */
  getUcdnProIspBandwidthV2(
    request?: GetUcdnProIspBandwidthV2Request
  ): Promise<GetUcdnProIspBandwidthV2Response> {
    const args = { Action: 'GetUcdnProIspBandwidthV2', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as GetUcdnProIspBandwidthV2Response
    );
  }

  /**
   * GetUcdnProIspRequestNumV2 - 按省份运营商获取域名请求数
   *
   * See also: https://docs.ucloud.cn/api/ucdn-api/get_ucdn_pro_isp_request_num_v2
   */
  getUcdnProIspRequestNumV2(
    request?: GetUcdnProIspRequestNumV2Request
  ): Promise<GetUcdnProIspRequestNumV2Response> {
    const args = { Action: 'GetUcdnProIspRequestNumV2', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as GetUcdnProIspRequestNumV2Response
    );
  }

  /**
   * GetUcdnTrafficV2 - 获取流量信息
   *
   * See also: https://docs.ucloud.cn/api/ucdn-api/get_ucdn_traffic_v2
   */
  getUcdnTrafficV2(
    request?: GetUcdnTrafficV2Request
  ): Promise<GetUcdnTrafficV2Response> {
    const args = { Action: 'GetUcdnTrafficV2', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as GetUcdnTrafficV2Response
    );
  }

  /**
   * PrefetchNewUcdnDomainCache - 提交预取任务
   *
   * See also: https://docs.ucloud.cn/api/ucdn-api/prefetch_new_ucdn_domain_cache
   */
  prefetchNewUcdnDomainCache(
    request?: PrefetchNewUcdnDomainCacheRequest
  ): Promise<PrefetchNewUcdnDomainCacheResponse> {
    const args = { Action: 'PrefetchNewUcdnDomainCache', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as PrefetchNewUcdnDomainCacheResponse
    );
  }

  /**
   * QueryIpLocation - 查询IP信息
   *
   * See also: https://docs.ucloud.cn/api/ucdn-api/query_ip_location
   */
  queryIpLocation(
    request?: QueryIpLocationRequest
  ): Promise<QueryIpLocationResponse> {
    const args = { Action: 'QueryIpLocation', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as QueryIpLocationResponse
    );
  }

  /**
   * RefreshNewUcdnDomainCache - 刷新缓存
   *
   * See also: https://docs.ucloud.cn/api/ucdn-api/refresh_new_ucdn_domain_cache
   */
  refreshNewUcdnDomainCache(
    request?: RefreshNewUcdnDomainCacheRequest
  ): Promise<RefreshNewUcdnDomainCacheResponse> {
    const args = { Action: 'RefreshNewUcdnDomainCache', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as RefreshNewUcdnDomainCacheResponse
    );
  }

  /**
   * SwitchUcdnChargeType - 切换账号计费方式
   *
   * See also: https://docs.ucloud.cn/api/ucdn-api/switch_ucdn_charge_type
   */
  switchUcdnChargeType(
    request?: SwitchUcdnChargeTypeRequest
  ): Promise<SwitchUcdnChargeTypeResponse> {
    const args = { Action: 'SwitchUcdnChargeType', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as SwitchUcdnChargeTypeResponse
    );
  }
}

/**
 * AddCertificate - 添加证书
 */
export interface AddCertificateRequest {
  /**
   * 证书名称
   */
  CertName: string;
  /**
   * 用户证书
   */
  UserCert: string;
  /**
   * 用户私钥
   */
  PrivateKey: string;
  /**
   * Ca证书，默认为空
   */
  CaCert?: string;
}

/**
 * AddCertificate - 添加证书
 */
export interface AddCertificateResponse {}

/**
 * ControlUcdnDomainCacheAccess - 封禁解封缓存访问
 */
export interface ControlUcdnDomainCacheAccessRequest {
  /**
   * 待封禁的Url，一次封禁多个Url时最多一次30条，只能对表示文件的Url进行操作
   */
  UrlList: string[];
  /**
   * forbid=封禁   unforbid=解封  其他值非法
   */
  Type: string;
}

/**
 * ControlUcdnDomainCacheAccess - 封禁解封缓存访问
 */
export interface ControlUcdnDomainCacheAccessResponse {}

/**
 * DeleteCertificate - 删除证书
 */
export interface DeleteCertificateRequest {
  /**
   * 证书名称
   */
  CertName: string;
}

/**
 * DeleteCertificate - 删除证书
 */
export interface DeleteCertificateResponse {}

/**
 * DescribeNewUcdnPrefetchCacheTask - 获取预取任务状态
 */
export interface DescribeNewUcdnPrefetchCacheTaskRequest {
  /**
   * 提交任务时返回的任务ID
   */
  TaskId?: string[];
  /**
   * 查询的起始时间，格式为Unix Timestamp。如果有EndTime，BeginTime必须赋值
   */
  BeginTime?: number;
  /**
   * 查询的结束时间，格式为Unix Timestamp。EndTime默认为当前时间，BeginTime默认为当前时间前一天时间。
   */
  EndTime?: number;
  /**
   * 需要获取的内容预热的状态，枚举值：success：成功；wait：等待处理；process：正在处理；failure：失败； unknow：未知，默认选择所有状态
   */
  Status?: string;
  /**
   * 数据偏移量，默认为0，自然数
   */
  Offset?: number;
  /**
   * 返回数据长度,默认全部，自然数
   */
  Limit?: number;
}

/**
 * DescribeNewUcdnPrefetchCacheTask - 获取预取任务状态
 */
export interface DescribeNewUcdnPrefetchCacheTaskResponse {
  /**
   * 预热任务的总数
   */
  TotalCount?: number;
  /**
   * 预热任务信息，参考TaskInfo
   */
  TaskList?: {
    /**
     * 提交任务时返回的任务ID
     */
    TaskId?: string;
    /**
     * 任务url的信息列表，参考UrlProgressInfo
     */
    UrlLists?: {
      /**
       * 刷新的单条url
       */
      Url?: string;
      /**
       * 刷新任务创建的时间。格式为Unix Timestamp
       */
      CreateTime?: number;
      /**
       * 任务完成时间。格式为Unix Timestamp
       */
      FinishTime?: number;
      /**
       * 刷新任务的当前状态，枚举值：success：成功；wait：排队中；process：处理中；failure：失败； unknow：未知
       */
      Status?: string;
      /**
       * 刷新进度，单位%
       */
      Progress?: number;
    }[];
    /**
     * 刷新任务创建的时间。格式为Unix Timestamp
     */
    CreateTime?: number;
    /**
     * 刷新任务的当前状态，枚举值：success：成功；wait：排队中；process：处理中；failure：失败； unknow：未知
     */
    Status?: string;
  }[];
}

/**
 * DescribeNewUcdnRefreshCacheTask - 获取域名刷新任务状态
 */
export interface DescribeNewUcdnRefreshCacheTaskRequest {
  /**
   * 提交任务时返回的任务ID
   */
  TaskId?: string[];
  /**
   * 查询的起始时间，格式为Unix Timestamp。如果有EndTime，BeginTime必须赋值
   */
  BeginTime?: number;
  /**
   * 查询的结束时间，格式为Unix Timestamp。EndTime默认为当前时间，BeginTime默认为当前时间前一天时间。
   */
  EndTime?: number;
  /**
   * 需要获取的内容刷新的状态，枚举值：success：成功；wait：等待处理；process：正在处理；failure：失败； unknow：未知，默认选择所有状态
   */
  Status?: string;
  /**
   * 数据偏移量，默认为0，自然数
   */
  Offset?: number;
  /**
   * 返回数据长度,默认全部，自然数
   */
  Limit?: number;
}

/**
 * DescribeNewUcdnRefreshCacheTask - 获取域名刷新任务状态
 */
export interface DescribeNewUcdnRefreshCacheTaskResponse {
  /**
   * 刷新任务的总数
   */
  TotalCount?: number;
  /**
   * 刷新任务信息，参考TaskInfo
   */
  TaskList?: {
    /**
     * 提交任务时返回的任务ID
     */
    TaskId?: string;
    /**
     * 任务url的信息列表，参考UrlProgressInfo
     */
    UrlLists?: {
      /**
       * 刷新的单条url
       */
      Url?: string;
      /**
       * 刷新任务创建的时间。格式为Unix Timestamp
       */
      CreateTime?: number;
      /**
       * 任务完成时间。格式为Unix Timestamp
       */
      FinishTime?: number;
      /**
       * 刷新任务的当前状态，枚举值：success：成功；wait：排队中；process：处理中；failure：失败； unknow：未知
       */
      Status?: string;
      /**
       * 刷新进度，单位%
       */
      Progress?: number;
    }[];
    /**
     * 刷新任务创建的时间。格式为Unix Timestamp
     */
    CreateTime?: number;
    /**
     * 刷新任务的当前状态，枚举值：success：成功；wait：排队中；process：处理中；failure：失败； unknow：未知
     */
    Status?: string;
  }[];
}

/**
 * GetCertificateV2 - 获取证书列表(新)
 */
export interface GetCertificateV2Request {
  /**
   * 偏移，默认为0，非负整数
   */
  Offset?: number;
  /**
   * 长度，默认为全部，非负整数
   */
  Limit?: number;
}

/**
 * GetCertificateV2 - 获取证书列表(新)
 */
export interface GetCertificateV2Response {
  /**
   * 证书数量
   */
  TotalCount: number;
  /**
   * 证书信息列表
   */
  CertList: {
    /**
     * 证书名
     */
    CertName: string;
    /**
     * 通用名
     */
    CommonName: string;
    /**
     * dns名称
     */
    DnsName: string;
    /**
     * 证书开始时间
     */
    BeginTime: number;
    /**
     * 证书获取时间
     */
    EndTime: number;
    /**
     * 已配置域名个数
     */
    DomainCount: number;
    /**
     * 证书内容
     */
    UserCert: string;
    /**
     * ca证内容
     */
    CaCert: string;
    /**
     * 已配置的域名列表
     */
    Domains?: string[];
  }[];
}

/**
 * GetNewUcdnDomainHitRate - 获取域名命中率
 */
export interface GetNewUcdnDomainHitRateRequest {
  /**
   * 时间粒度（0表示按照5分钟粒度，1表示按照1小时粒度，2表示按照一天的粒度）默认5分钟
   */
  Type?: number;
  /**
   * 域名id，创建域名时生成的id。默认全部域名
   */
  DomainId?: string[];
  /**
   * 查询带宽区域 cn代表国内 abroad代表海外，只支持国内
   */
  Areacode?: string;
  /**
   * 查询的起始时间，格式为Unix Timestamp。如果有EndTime，BeginTime必须赋值。如没有赋值，则返回缺少参 数错误，如果没有EndTime，BeginTime也可以不赋值，EndTime默认当前时间，BeginTime 默认前一天的当前时间。
   */
  BeginTime?: number;
  /**
   * 查询的结束时间，格式为Unix Timestamp。EndTime默认为当前时间，BeginTime默认为当前时间前一天时间。
   */
  EndTime?: number;
}

/**
 * GetNewUcdnDomainHitRate - 获取域名命中率
 */
export interface GetNewUcdnDomainHitRateResponse {
  /**
   * 请求数实例表。
   */
  HitRateList?: {
    /**
     * 带宽获取的时间点。格式：时间戳
     */
    Time?: number;
    /**
     * 总流量命中率，单位%
     */
    FlowHitRate?: number;
    /**
     * 请求数命中率，单位%
     */
    RequestHitRate?: number;
  }[];
}

/**
 * GetNewUcdnLogRefererStatistics - 获取热点referer统计
 */
export interface GetNewUcdnLogRefererStatisticsRequest {
  /**
   * 域名id，创建域名时生成的id
   */
  DomainId?: string;
  /**
   * 查询带宽区域 cn代表国内 abroad代表海外 ；目前只支持国内
   */
  Areacode?: string;
  /**
   * 查询带宽的起始时间，格式：时间戳
   */
  BeginTime?: number;
  /**
   * 查询统计日志的结束时间，格式：时间戳。最大时间间隔30天
   */
  EndTime?: number;
  /**
   * 0表示按流量降序排列，1表示按照下载次数降序排列，默认为0
   */
  OrderBy?: number;
  /**
   * 返回的结果数量限制，默认1000
   */
  Limit?: number;
}

/**
 * GetNewUcdnLogRefererStatistics - 获取热点referer统计
 */
export interface GetNewUcdnLogRefererStatisticsResponse {
  /**
   * 按天统计实例
   */
  RefererStatistics?: {
    /**
     * 日期
     */
    Date?: string;
    /**
     * Referer实例表
     */
    RefererList?: {
      /**
       * 客户端请求的referer
       */
      Referer?: string;
      /**
       * 次数
       */
      RequestTimes?: number;
      /**
       * 次数占比，单位%
       */
      Percent?: number;
    }[];
  }[];
}

/**
 * GetNewUcdnLogUrlStatistics - 获取日志url统计
 */
export interface GetNewUcdnLogUrlStatisticsRequest {
  /**
   * 域名Id
   */
  DomainId: string;
  /**
   * 查询带宽区域 cn代表国内 abroad代表海外 只支持国内
   */
  Areacode?: string;
  /**
   * 查询带宽的起始时间，格式：时间戳。BeginTime和EndTime必须同时赋值
   */
  BeginTime?: number;
  /**
   * 查询统计日志的结束时间，格式：时间戳,最多可拉取30天
   */
  EndTime?: number;
  /**
   * 0表示按流量降序排列，1表示按照下载次数降序排列，默认为0
   */
  OrderBy?: number;
  /**
   * 返回的结果数量限制，默认1000
   */
  Limit?: number;
}

/**
 * GetNewUcdnLogUrlStatistics - 获取日志url统计
 */
export interface GetNewUcdnLogUrlStatisticsResponse {
  /**
   * 按天统计实例。
   */
  UrlStatisticsList?: {
    /**
     *
     */
    UrlList?: {
      /**
       * 下载链接的url
       */
      Url?: string;
      /**
       * 流量（单位为G）
       */
      Traffic?: number;
      /**
       * 下载次数
       */
      DownloadTimes?: number;
      /**
       * 流量占比，单位%
       */
      Percent?: number;
    }[];
    /**
     * 日期
     */
    Date?: string;
  }[];
}

/**
 * GetUcdnDomain95BandwidthV2 - 获取域名九五峰值带宽数据
 */
export interface GetUcdnDomain95BandwidthV2Request {
  /**
   * 查询的起始日期，格式为Unix Timestamp
   */
  BeginTime: number;
  /**
   * 查询的结束日期，格式为Unix Timestamp
   */
  EndTime: number;
  /**
   * 域名id，创建域名时生成的id。默认全部域名
   */
  DomainId?: string[];
  /**
   * 查询带宽区域 cn代表国内 abroad代表海外 不填默认为全部区域
   */
  Areacode?: string;
}

/**
 * GetUcdnDomain95BandwidthV2 - 获取域名九五峰值带宽数据
 */
export interface GetUcdnDomain95BandwidthV2Response {
  /**
   * 查询时间期间的95带宽时间点  Unix时间戳
   */
  Time: number;
  /**
   * 查询期间的CDN的95带宽值，单位Mbps
   */
  CdnBandwidth?: number;
}

/**
 * GetUcdnDomainBandwidthV2 - 获取域名带宽数据(新)
 */
export interface GetUcdnDomainBandwidthV2Request {
  /**
   * 时间粒度（0表示按照5分钟粒度，1表示按照1小时粒度，2表示按照一天的粒度，3表示按照1分钟粒度）
   */
  Type?: number;
  /**
   * 域名id，创建域名时生成的id。默认全部域名
   */
  DomainId?: string[];
  /**
   * 查询带宽区域 cn代表国内 abroad代表海外 不填默认为全部区域
   */
  Areacode?: string;
  /**
   * 查询的起始时间，格式为Unix Timestamp。如果有EndTime，BeginTime必须赋值。如没有赋值，则返回缺少参 数错误，如果没有EndTime，BeginTime也可以不赋值，EndTime默认当前时间，BeginTime 默认前一天的当前时间。
   */
  BeginTime?: number;
  /**
   * 查询的结束时间，格式为Unix Timestamp。EndTime默认为当前时间，BeginTime默认为当前时间前一天时间。
   */
  EndTime?: number;
  /**
   * 协议，http、https  不传则查所有协议的带宽
   */
  Protocol?: string;
  /**
   * 原始带宽，不为0则获取原始带宽，默认为0
   */
  Primeval?: number;
}

/**
 * GetUcdnDomainBandwidthV2 - 获取域名带宽数据(新)
 */
export interface GetUcdnDomainBandwidthV2Response {
  /**
   * 带宽信息列表，参见BandwidthTrafficInfo
   */
  BandwidthTrafficList?: {
    /**
     * 带宽获取的时间点。格式：时间戳
     */
    Time: number;
    /**
     * 返回值返回指定时间区间内CDN的带宽峰值，单位Mbps（如果请求参数Type为0，则Value是五分钟粒度的带宽值，如果Type为1，则Value是1小时的带宽峰值，如果Type为2，则Value是一天内的带宽峰值）
     */
    CdnBandwidth: number;
    /**
     * 对应时间粒度的流量，单位字节
     */
    Traffic: number;
  }[];
}

/**
 * GetUcdnDomainConfig - 批量获取加速域名配置
 */
export interface GetUcdnDomainConfigRequest {
  /**
   * 数据偏移量，默认0，非负整数
   */
  Offset?: number;
  /**
   * 返回数据长度， 默认全部，非负整数
   */
  Limit?: number;
  /**
   * 域名id，创建域名时生成的id。默认获取账号下的所有域名信息,n为自然数,从DomainId.0开始。
   */
  DomainId?: string[];
  /**
   * 产品类型ucdn，可不填，默认为ucdn
   */
  ChannelType?: string;
}

/**
 * GetUcdnDomainConfig - 批量获取加速域名配置
 */
export interface GetUcdnDomainConfigResponse {
  /**
   * 获取的域名信息，具体参考下面DomainConfig
   */
  DomainList: {
    /**
     * 查询带宽区域 cn代表国内 abroad代表海外 all表示全部区域
     */
    AreaCode: string;
    /**
     * 加速域名的业务类型，web代表网站，stream代表视频 ，download 代表下载
     */
    CdnType: string;
    /**
     * 创建的加速域名的当前的状态。check代表审核中，checkSuccess代表审核通过，checkFail代表审核失败，enable代表加速中，disable代表停止加速，delete代表删除加速enableing代表正在开启加速，disableing代表正在停止加速中，deleteing代表删除中
     */
    Status: string;
    /**
     * cdn域名。创建加速域名生成的cdn域名，用于设置CNAME记录
     */
    Cname: string;
    /**
     * 域名创建的时间。格式：时间戳
     */
    CreateTime: number;
    /**
     * 测试url。用于域名创建加速时的测试
     */
    TestUrl: string;
    /**
     * 国内https状态 enableing-开启中 fail-开启失败 enable-启用 disable-未启用
     */
    HttpsStatusCn: string;
    /**
     * 国外https状态 enableing-开启中  fail-开启失败 enable-启用 disable-未启用
     */
    HttpsStatusAbroad: string;
    /**
     * 国内证书名称
     */
    CertNameCn: string;
    /**
     * 国外证书名称
     */
    CertNameAbroad: string;
    /**
     * 业务组：Default
     */
    Tag: string;
    /**
     * 域名Id
     */
    DomainId?: string;
    /**
     * 域名
     */
    Domain?: string;
    /**
     * 源站配置 参考OriginConf
     */
    OriginConf?: {
      /**
       * 源站ip即cdn服务器回源访问的ip地址。多个源站ip，可以这样表述，如：["1.1.1.1","2.2.2.2"]
       */
      OriginIpList?: string[];
      /**
       * 回源Http请求头部Host，默认是加速域名
       */
      OriginHost?: string;
      /**
       * 回源端口
       */
      OriginPort?: number;
      /**
       * 1如果为false表示BackupOriginIp为空，表示没有备份源站，忽略BackupOriginIp，BackupOriginHost字段2如果为true表示BackupOriginIp.n必须至少有一个备份源站地址
       */
      BackupOriginEnable?: boolean;
      /**
       * 备份源站ip即cdn服务器回源访问的ip地址。多个源站ip，可以这样表述，如：["1.1.1.1","2.2.2.2"]
       */
      BackupOriginIpList?: string[];
      /**
       * 备份回源Http请求头部Host，默认是加速域名
       */
      BackupOriginHost?: string;
      /**
       * 主源响应的回源错误码（如：404|500），默认空字符串
       */
      OriginErrorCode?: string;
      /**
       * 回主源的回源失败数，默认1
       */
      OriginErrorNum?: number;
      /**
       * 源站协议http，http|https   默认http
       */
      OriginProtocol?: string;
      /**
       * 跟随301跳转  0=不跟随 1=跟随
       */
      OriginFollow301?: number;
    };
    /**
     * 访问控制配置 参考AccessControlConf
     */
    AccessControlConf?: {
      /**
       * ip黑名单，多个ip，可表示为：IpBlackList.0=1.1.1.1，IpBlackList.1=2.2.2.2
       */
      IpBlackList?: string[];
      /**
       * refer配置
       */
      ReferConf?: {
        /**
         * Refer防盗链配置  0白名单，1黑名单
         */
        ReferType?: number;
        /**
         * ReferType为白名单时（删除），NullRefer为0代表不允许NULL refer访问，为1代表允许Null refer访问
         */
        NullRefer?: number;
        /**
         * Refer防盗链规则列表，支持正则表达式
         */
        ReferList?: string[];
      };
    };
    /**
     * 缓存配置 参考CacheAllConfig
     */
    CacheConf?: {
      /**
       * 缓存Host，不同的域名可以配置为同一个CacheHost来实现缓存共享，默认为加速域名
       */
      CacheHost?: string;
      /**
       * 缓存配置列表，参见CacheConf
       */
      CacheList?: {
        /**
         * 路径模式，支持正则
         */
        PathPattern: string;
        /**
         * 缓存时间
         */
        CacheTTL: number;
        /**
         * 缓存时间的单位。sec（秒），min（分钟），hour（小时），day（天）。上限1年。
         */
        CacheUnit: string;
        /**
         * 是否缓存，true为缓存，flase为不缓存。为flase的情况下，CacheTTL和CacheUnit强制不生效
         */
        CacheBehavior: boolean;
        /**
         * 状态码模式，非200，206状态码，多个状态码用竖线(|)分隔，该属性仅仅在状态码缓存配置列表中返回
         */
        HttpCodePattern?: string;
        /**
         * 缓存规则描述
         */
        Description?: string;
        /**
         * 是否优先遵循源站头部缓存策略，false为不优先遵循源站，true为优先遵循源站缓存头部。默认为0
         */
        FollowOriginRule?: boolean;
      }[];
      /**
       * 状态码缓存配置列表，参见CacheConf
       */
      HttpCodeCacheList?: {
        /**
         * 路径模式，支持正则
         */
        PathPattern: string;
        /**
         * 缓存时间
         */
        CacheTTL: number;
        /**
         * 缓存时间的单位。sec（秒），min（分钟），hour（小时），day（天）。上限1年。
         */
        CacheUnit: string;
        /**
         * 是否缓存，true为缓存，flase为不缓存。为flase的情况下，CacheTTL和CacheUnit强制不生效
         */
        CacheBehavior: boolean;
        /**
         * 状态码模式，非200，206状态码，多个状态码用竖线(|)分隔，该属性仅仅在状态码缓存配置列表中返回
         */
        HttpCodePattern?: string;
        /**
         * 缓存规则描述
         */
        Description?: string;
        /**
         * 是否优先遵循源站头部缓存策略，false为不优先遵循源站，true为优先遵循源站缓存头部。默认为0
         */
        FollowOriginRule?: boolean;
      }[];
      /**
       * 忽略参数缓存配置列表，参见CacheKeyInfo
       */
      CacheKeyList?: {
        /**
         * 是否忽略
         */
        Ignore?: boolean;
        /**
         * 路径模式，支持正则
         */
        PathPattern?: string;
        /**
         * 自定义变量,以$符号开头，多个变量用加号(+)连接，$querystring表示所有变量
         */
        QueryString?: string;
      }[];
    };
    /**
     * 高级配置 参考AdvancedConf
     */
    AdvancedConf?: {
      /**
       * 客户端响应http头列表
       */
      HttpClientHeader?: string[];
      /**
       * 源站http头列表
       */
      HttpOriginHeader?: string[];
      /**
       * http转https回源 true是，false否
       */
      Http2Https?: boolean;
    };
  }[];
}

/**
 * GetUcdnDomainHitRate - 获取域名命中率
 */
export interface GetUcdnDomainHitRateRequest {
  /**
   * 时间粒度（0表示按照5分钟粒度，1表示按照1小时粒度，2表示按照一天的粒度，3表示按照一分钟的粒度）默认5分钟
   */
  Type: number;
  /**
   * 域名id，创建域名时生成的id。默认全部域名
   */
  DomainId?: string[];
  /**
   * 查询带宽区域 cn代表国内 abroad代表海外，只支持国内
   */
  Areacode?: string;
  /**
   * 查询的起始时间，格式为Unix Timestamp。如果有EndTime，BeginTime必须赋值。如没有赋值，则返回缺少参 数错误，如果没有EndTime，BeginTime也可以不赋值，EndTime默认当前时间，BeginTime 默认前一天的当前时间。
   */
  BeginTime?: number;
  /**
   * 查询的结束时间，格式为Unix Timestamp。EndTime默认为当前时间，BeginTime默认为当前时间前一天时间。
   */
  EndTime?: number;
  /**
   * 命中类型：0=整体命中  1=边缘命中  默认是0
   */
  HitType?: number;
}

/**
 * GetUcdnDomainHitRate - 获取域名命中率
 */
export interface GetUcdnDomainHitRateResponse {
  /**
   * 请求数实例表。
   */
  HitRateList?: {
    /**
     * 带宽获取的时间点。格式：时间戳
     */
    Time?: number;
    /**
     * 总流量命中率，单位%
     */
    FlowHitRate?: number;
    /**
     * 请求数命中率，单位%
     */
    RequestHitRate?: number;
  }[];
}

/**
 * GetUcdnDomainHttpCodeV2 - 获取域名状态码信息
 */
export interface GetUcdnDomainHttpCodeV2Request {
  /**
   * 时间粒度（0表示按照5分钟粒度，1表示按照1小时粒度，2表示按照一天的粒度，3表示1分钟粒度）
   */
  Type: number;
  /**
   * 域名id，创建域名时生成的id。默认全部域名
   */
  DomainId?: string[];
  /**
   * 查询带宽区域 cn代表国内 abroad代表海外，只支持国内
   */
  Areacode?: string;
  /**
   * 查询的起始时间，格式为Unix Timestamp。如果有EndTime，BeginTime必须赋值。如没有赋值，则返回缺少参 数错误，如果没有EndTime，BeginTime也可以不赋值，EndTime默认当前时间，BeginTime 默认前一天的当前时间。
   */
  BeginTime?: number;
  /**
   * 查询的结束时间，格式为Unix Timestamp。EndTime默认为当前时间，BeginTime默认为当前时间前一天时间。
   */
  EndTime?: number;
  /**
   * 指定获取的状态码是边缘还是上层    edge 表示边缘  layer 表示上层
   */
  Layer?: string;
}

/**
 * GetUcdnDomainHttpCodeV2 - 获取域名状态码信息
 */
export interface GetUcdnDomainHttpCodeV2Response {
  /**
   * 状态码实例表。详细见HttpCodeInfoV2
   */
  HttpCodeDetail?: {
    /**
     * 带宽获取的时间点。格式：时间戳
     */
    Time?: number;
    /**
     * 1xx信息，参考HttpCodeV2Detail结构
     */
    Http1XX?: {
      /**
       * 时间
       */
      Time?: number;
      /**
       * 当前分组的总状态码数
       */
      Total?: number;
      /**
       * http100数量
       */
      Http100?: number;
      /**
       * http101数量
       */
      Http101?: number;
      /**
       * http102数量
       */
      Http102?: number;
      /**
       * http200数量
       */
      Http200?: number;
      /**
       * http201数量
       */
      Http201?: number;
      /**
       * http202数量
       */
      Http202?: number;
      /**
       * http203数量
       */
      Http203?: number;
      /**
       * http204数量
       */
      Http204?: number;
      /**
       * http205数量
       */
      Http205?: number;
      /**
       * http206数量
       */
      Http206?: number;
      /**
       * http207数量
       */
      Http207?: number;
      /**
       * http300数量
       */
      Http300?: number;
      /**
       * http301数量
       */
      Http301?: number;
      /**
       * http302数量
       */
      Http302?: number;
      /**
       * http303数量
       */
      Http303?: number;
      /**
       * http304数量
       */
      Http304?: number;
      /**
       * http305数量
       */
      Http305?: number;
      /**
       * http306数量
       */
      Http306?: number;
      /**
       * http307数量
       */
      Http307?: number;
      /**
       * http400数量
       */
      Http400?: number;
      /**
       * http401数量
       */
      Http401?: number;
      /**
       * http402数量
       */
      Http402?: number;
      /**
       * http403数量
       */
      Http403?: number;
      /**
       * http404数量
       */
      Http404?: number;
      /**
       * http405数量
       */
      Http405?: number;
      /**
       * http406数量
       */
      Http406?: number;
      /**
       * http407数量
       */
      Http407?: number;
      /**
       * http408数量
       */
      Http408?: number;
      /**
       * http409数量
       */
      Http409?: number;
      /**
       * http410数量
       */
      Http410?: number;
      /**
       * http411数量
       */
      Http411?: number;
      /**
       * http412数量
       */
      Http412?: number;
      /**
       * http413数量
       */
      Http413?: number;
      /**
       * http414数量
       */
      Http414?: number;
      /**
       * http415数量
       */
      Http415?: number;
      /**
       * http416数量
       */
      Http416?: number;
      /**
       * http417数量
       */
      Http417?: number;
      /**
       * http418数量
       */
      Http418?: number;
      /**
       * http421数量
       */
      Http421?: number;
      /**
       * http422数量
       */
      Http422?: number;
      /**
       * http423数量
       */
      Http423?: number;
      /**
       * http424数量
       */
      Http424?: number;
      /**
       * http425数量
       */
      Http425?: number;
      /**
       * http426数量
       */
      Http426?: number;
      /**
       * http449数量
       */
      Http449?: number;
      /**
       * http451数量
       */
      Http451?: number;
      /**
       * http500数量
       */
      Http500?: number;
      /**
       * http501数量
       */
      Http501?: number;
      /**
       * http502数量
       */
      Http502?: number;
      /**
       * http503数量
       */
      Http503?: number;
      /**
       * http504数量
       */
      Http504?: number;
      /**
       * http505数量
       */
      Http505?: number;
      /**
       * http506数量
       */
      Http506?: number;
      /**
       * http507数量
       */
      Http507?: number;
      /**
       * http509数量
       */
      Http509?: number;
      /**
       * http510数量
       */
      Http510?: number;
    };
    /**
     * 2xx信息，参考HttpCodeV2Detail结构
     */
    Http2XX?: {
      /**
       * 时间
       */
      Time?: number;
      /**
       * 当前分组的总状态码数
       */
      Total?: number;
      /**
       * http100数量
       */
      Http100?: number;
      /**
       * http101数量
       */
      Http101?: number;
      /**
       * http102数量
       */
      Http102?: number;
      /**
       * http200数量
       */
      Http200?: number;
      /**
       * http201数量
       */
      Http201?: number;
      /**
       * http202数量
       */
      Http202?: number;
      /**
       * http203数量
       */
      Http203?: number;
      /**
       * http204数量
       */
      Http204?: number;
      /**
       * http205数量
       */
      Http205?: number;
      /**
       * http206数量
       */
      Http206?: number;
      /**
       * http207数量
       */
      Http207?: number;
      /**
       * http300数量
       */
      Http300?: number;
      /**
       * http301数量
       */
      Http301?: number;
      /**
       * http302数量
       */
      Http302?: number;
      /**
       * http303数量
       */
      Http303?: number;
      /**
       * http304数量
       */
      Http304?: number;
      /**
       * http305数量
       */
      Http305?: number;
      /**
       * http306数量
       */
      Http306?: number;
      /**
       * http307数量
       */
      Http307?: number;
      /**
       * http400数量
       */
      Http400?: number;
      /**
       * http401数量
       */
      Http401?: number;
      /**
       * http402数量
       */
      Http402?: number;
      /**
       * http403数量
       */
      Http403?: number;
      /**
       * http404数量
       */
      Http404?: number;
      /**
       * http405数量
       */
      Http405?: number;
      /**
       * http406数量
       */
      Http406?: number;
      /**
       * http407数量
       */
      Http407?: number;
      /**
       * http408数量
       */
      Http408?: number;
      /**
       * http409数量
       */
      Http409?: number;
      /**
       * http410数量
       */
      Http410?: number;
      /**
       * http411数量
       */
      Http411?: number;
      /**
       * http412数量
       */
      Http412?: number;
      /**
       * http413数量
       */
      Http413?: number;
      /**
       * http414数量
       */
      Http414?: number;
      /**
       * http415数量
       */
      Http415?: number;
      /**
       * http416数量
       */
      Http416?: number;
      /**
       * http417数量
       */
      Http417?: number;
      /**
       * http418数量
       */
      Http418?: number;
      /**
       * http421数量
       */
      Http421?: number;
      /**
       * http422数量
       */
      Http422?: number;
      /**
       * http423数量
       */
      Http423?: number;
      /**
       * http424数量
       */
      Http424?: number;
      /**
       * http425数量
       */
      Http425?: number;
      /**
       * http426数量
       */
      Http426?: number;
      /**
       * http449数量
       */
      Http449?: number;
      /**
       * http451数量
       */
      Http451?: number;
      /**
       * http500数量
       */
      Http500?: number;
      /**
       * http501数量
       */
      Http501?: number;
      /**
       * http502数量
       */
      Http502?: number;
      /**
       * http503数量
       */
      Http503?: number;
      /**
       * http504数量
       */
      Http504?: number;
      /**
       * http505数量
       */
      Http505?: number;
      /**
       * http506数量
       */
      Http506?: number;
      /**
       * http507数量
       */
      Http507?: number;
      /**
       * http509数量
       */
      Http509?: number;
      /**
       * http510数量
       */
      Http510?: number;
    };
    /**
     * 3xx信息，参考HttpCodeV2Detail结构
     */
    Http3XX?: {
      /**
       * 时间
       */
      Time?: number;
      /**
       * 当前分组的总状态码数
       */
      Total?: number;
      /**
       * http100数量
       */
      Http100?: number;
      /**
       * http101数量
       */
      Http101?: number;
      /**
       * http102数量
       */
      Http102?: number;
      /**
       * http200数量
       */
      Http200?: number;
      /**
       * http201数量
       */
      Http201?: number;
      /**
       * http202数量
       */
      Http202?: number;
      /**
       * http203数量
       */
      Http203?: number;
      /**
       * http204数量
       */
      Http204?: number;
      /**
       * http205数量
       */
      Http205?: number;
      /**
       * http206数量
       */
      Http206?: number;
      /**
       * http207数量
       */
      Http207?: number;
      /**
       * http300数量
       */
      Http300?: number;
      /**
       * http301数量
       */
      Http301?: number;
      /**
       * http302数量
       */
      Http302?: number;
      /**
       * http303数量
       */
      Http303?: number;
      /**
       * http304数量
       */
      Http304?: number;
      /**
       * http305数量
       */
      Http305?: number;
      /**
       * http306数量
       */
      Http306?: number;
      /**
       * http307数量
       */
      Http307?: number;
      /**
       * http400数量
       */
      Http400?: number;
      /**
       * http401数量
       */
      Http401?: number;
      /**
       * http402数量
       */
      Http402?: number;
      /**
       * http403数量
       */
      Http403?: number;
      /**
       * http404数量
       */
      Http404?: number;
      /**
       * http405数量
       */
      Http405?: number;
      /**
       * http406数量
       */
      Http406?: number;
      /**
       * http407数量
       */
      Http407?: number;
      /**
       * http408数量
       */
      Http408?: number;
      /**
       * http409数量
       */
      Http409?: number;
      /**
       * http410数量
       */
      Http410?: number;
      /**
       * http411数量
       */
      Http411?: number;
      /**
       * http412数量
       */
      Http412?: number;
      /**
       * http413数量
       */
      Http413?: number;
      /**
       * http414数量
       */
      Http414?: number;
      /**
       * http415数量
       */
      Http415?: number;
      /**
       * http416数量
       */
      Http416?: number;
      /**
       * http417数量
       */
      Http417?: number;
      /**
       * http418数量
       */
      Http418?: number;
      /**
       * http421数量
       */
      Http421?: number;
      /**
       * http422数量
       */
      Http422?: number;
      /**
       * http423数量
       */
      Http423?: number;
      /**
       * http424数量
       */
      Http424?: number;
      /**
       * http425数量
       */
      Http425?: number;
      /**
       * http426数量
       */
      Http426?: number;
      /**
       * http449数量
       */
      Http449?: number;
      /**
       * http451数量
       */
      Http451?: number;
      /**
       * http500数量
       */
      Http500?: number;
      /**
       * http501数量
       */
      Http501?: number;
      /**
       * http502数量
       */
      Http502?: number;
      /**
       * http503数量
       */
      Http503?: number;
      /**
       * http504数量
       */
      Http504?: number;
      /**
       * http505数量
       */
      Http505?: number;
      /**
       * http506数量
       */
      Http506?: number;
      /**
       * http507数量
       */
      Http507?: number;
      /**
       * http509数量
       */
      Http509?: number;
      /**
       * http510数量
       */
      Http510?: number;
    };
    /**
     * 4xx信息，参考HttpCodeV2Detail结构
     */
    Http4XX?: {
      /**
       * 时间
       */
      Time?: number;
      /**
       * 当前分组的总状态码数
       */
      Total?: number;
      /**
       * http100数量
       */
      Http100?: number;
      /**
       * http101数量
       */
      Http101?: number;
      /**
       * http102数量
       */
      Http102?: number;
      /**
       * http200数量
       */
      Http200?: number;
      /**
       * http201数量
       */
      Http201?: number;
      /**
       * http202数量
       */
      Http202?: number;
      /**
       * http203数量
       */
      Http203?: number;
      /**
       * http204数量
       */
      Http204?: number;
      /**
       * http205数量
       */
      Http205?: number;
      /**
       * http206数量
       */
      Http206?: number;
      /**
       * http207数量
       */
      Http207?: number;
      /**
       * http300数量
       */
      Http300?: number;
      /**
       * http301数量
       */
      Http301?: number;
      /**
       * http302数量
       */
      Http302?: number;
      /**
       * http303数量
       */
      Http303?: number;
      /**
       * http304数量
       */
      Http304?: number;
      /**
       * http305数量
       */
      Http305?: number;
      /**
       * http306数量
       */
      Http306?: number;
      /**
       * http307数量
       */
      Http307?: number;
      /**
       * http400数量
       */
      Http400?: number;
      /**
       * http401数量
       */
      Http401?: number;
      /**
       * http402数量
       */
      Http402?: number;
      /**
       * http403数量
       */
      Http403?: number;
      /**
       * http404数量
       */
      Http404?: number;
      /**
       * http405数量
       */
      Http405?: number;
      /**
       * http406数量
       */
      Http406?: number;
      /**
       * http407数量
       */
      Http407?: number;
      /**
       * http408数量
       */
      Http408?: number;
      /**
       * http409数量
       */
      Http409?: number;
      /**
       * http410数量
       */
      Http410?: number;
      /**
       * http411数量
       */
      Http411?: number;
      /**
       * http412数量
       */
      Http412?: number;
      /**
       * http413数量
       */
      Http413?: number;
      /**
       * http414数量
       */
      Http414?: number;
      /**
       * http415数量
       */
      Http415?: number;
      /**
       * http416数量
       */
      Http416?: number;
      /**
       * http417数量
       */
      Http417?: number;
      /**
       * http418数量
       */
      Http418?: number;
      /**
       * http421数量
       */
      Http421?: number;
      /**
       * http422数量
       */
      Http422?: number;
      /**
       * http423数量
       */
      Http423?: number;
      /**
       * http424数量
       */
      Http424?: number;
      /**
       * http425数量
       */
      Http425?: number;
      /**
       * http426数量
       */
      Http426?: number;
      /**
       * http449数量
       */
      Http449?: number;
      /**
       * http451数量
       */
      Http451?: number;
      /**
       * http500数量
       */
      Http500?: number;
      /**
       * http501数量
       */
      Http501?: number;
      /**
       * http502数量
       */
      Http502?: number;
      /**
       * http503数量
       */
      Http503?: number;
      /**
       * http504数量
       */
      Http504?: number;
      /**
       * http505数量
       */
      Http505?: number;
      /**
       * http506数量
       */
      Http506?: number;
      /**
       * http507数量
       */
      Http507?: number;
      /**
       * http509数量
       */
      Http509?: number;
      /**
       * http510数量
       */
      Http510?: number;
    };
    /**
     * 5xx信息，参考HttpCodeV2Detail结构
     */
    Http5XX?: {
      /**
       * 时间
       */
      Time?: number;
      /**
       * 当前分组的总状态码数
       */
      Total?: number;
      /**
       * http100数量
       */
      Http100?: number;
      /**
       * http101数量
       */
      Http101?: number;
      /**
       * http102数量
       */
      Http102?: number;
      /**
       * http200数量
       */
      Http200?: number;
      /**
       * http201数量
       */
      Http201?: number;
      /**
       * http202数量
       */
      Http202?: number;
      /**
       * http203数量
       */
      Http203?: number;
      /**
       * http204数量
       */
      Http204?: number;
      /**
       * http205数量
       */
      Http205?: number;
      /**
       * http206数量
       */
      Http206?: number;
      /**
       * http207数量
       */
      Http207?: number;
      /**
       * http300数量
       */
      Http300?: number;
      /**
       * http301数量
       */
      Http301?: number;
      /**
       * http302数量
       */
      Http302?: number;
      /**
       * http303数量
       */
      Http303?: number;
      /**
       * http304数量
       */
      Http304?: number;
      /**
       * http305数量
       */
      Http305?: number;
      /**
       * http306数量
       */
      Http306?: number;
      /**
       * http307数量
       */
      Http307?: number;
      /**
       * http400数量
       */
      Http400?: number;
      /**
       * http401数量
       */
      Http401?: number;
      /**
       * http402数量
       */
      Http402?: number;
      /**
       * http403数量
       */
      Http403?: number;
      /**
       * http404数量
       */
      Http404?: number;
      /**
       * http405数量
       */
      Http405?: number;
      /**
       * http406数量
       */
      Http406?: number;
      /**
       * http407数量
       */
      Http407?: number;
      /**
       * http408数量
       */
      Http408?: number;
      /**
       * http409数量
       */
      Http409?: number;
      /**
       * http410数量
       */
      Http410?: number;
      /**
       * http411数量
       */
      Http411?: number;
      /**
       * http412数量
       */
      Http412?: number;
      /**
       * http413数量
       */
      Http413?: number;
      /**
       * http414数量
       */
      Http414?: number;
      /**
       * http415数量
       */
      Http415?: number;
      /**
       * http416数量
       */
      Http416?: number;
      /**
       * http417数量
       */
      Http417?: number;
      /**
       * http418数量
       */
      Http418?: number;
      /**
       * http421数量
       */
      Http421?: number;
      /**
       * http422数量
       */
      Http422?: number;
      /**
       * http423数量
       */
      Http423?: number;
      /**
       * http424数量
       */
      Http424?: number;
      /**
       * http425数量
       */
      Http425?: number;
      /**
       * http426数量
       */
      Http426?: number;
      /**
       * http449数量
       */
      Http449?: number;
      /**
       * http451数量
       */
      Http451?: number;
      /**
       * http500数量
       */
      Http500?: number;
      /**
       * http501数量
       */
      Http501?: number;
      /**
       * http502数量
       */
      Http502?: number;
      /**
       * http503数量
       */
      Http503?: number;
      /**
       * http504数量
       */
      Http504?: number;
      /**
       * http505数量
       */
      Http505?: number;
      /**
       * http506数量
       */
      Http506?: number;
      /**
       * http507数量
       */
      Http507?: number;
      /**
       * http509数量
       */
      Http509?: number;
      /**
       * http510数量
       */
      Http510?: number;
    };
    /**
     * 6xx信息，参考HttpCodeV2Detail结构
     */
    Http6XX?: {
      /**
       * 时间
       */
      Time?: number;
      /**
       * 当前分组的总状态码数
       */
      Total?: number;
      /**
       * http100数量
       */
      Http100?: number;
      /**
       * http101数量
       */
      Http101?: number;
      /**
       * http102数量
       */
      Http102?: number;
      /**
       * http200数量
       */
      Http200?: number;
      /**
       * http201数量
       */
      Http201?: number;
      /**
       * http202数量
       */
      Http202?: number;
      /**
       * http203数量
       */
      Http203?: number;
      /**
       * http204数量
       */
      Http204?: number;
      /**
       * http205数量
       */
      Http205?: number;
      /**
       * http206数量
       */
      Http206?: number;
      /**
       * http207数量
       */
      Http207?: number;
      /**
       * http300数量
       */
      Http300?: number;
      /**
       * http301数量
       */
      Http301?: number;
      /**
       * http302数量
       */
      Http302?: number;
      /**
       * http303数量
       */
      Http303?: number;
      /**
       * http304数量
       */
      Http304?: number;
      /**
       * http305数量
       */
      Http305?: number;
      /**
       * http306数量
       */
      Http306?: number;
      /**
       * http307数量
       */
      Http307?: number;
      /**
       * http400数量
       */
      Http400?: number;
      /**
       * http401数量
       */
      Http401?: number;
      /**
       * http402数量
       */
      Http402?: number;
      /**
       * http403数量
       */
      Http403?: number;
      /**
       * http404数量
       */
      Http404?: number;
      /**
       * http405数量
       */
      Http405?: number;
      /**
       * http406数量
       */
      Http406?: number;
      /**
       * http407数量
       */
      Http407?: number;
      /**
       * http408数量
       */
      Http408?: number;
      /**
       * http409数量
       */
      Http409?: number;
      /**
       * http410数量
       */
      Http410?: number;
      /**
       * http411数量
       */
      Http411?: number;
      /**
       * http412数量
       */
      Http412?: number;
      /**
       * http413数量
       */
      Http413?: number;
      /**
       * http414数量
       */
      Http414?: number;
      /**
       * http415数量
       */
      Http415?: number;
      /**
       * http416数量
       */
      Http416?: number;
      /**
       * http417数量
       */
      Http417?: number;
      /**
       * http418数量
       */
      Http418?: number;
      /**
       * http421数量
       */
      Http421?: number;
      /**
       * http422数量
       */
      Http422?: number;
      /**
       * http423数量
       */
      Http423?: number;
      /**
       * http424数量
       */
      Http424?: number;
      /**
       * http425数量
       */
      Http425?: number;
      /**
       * http426数量
       */
      Http426?: number;
      /**
       * http449数量
       */
      Http449?: number;
      /**
       * http451数量
       */
      Http451?: number;
      /**
       * http500数量
       */
      Http500?: number;
      /**
       * http501数量
       */
      Http501?: number;
      /**
       * http502数量
       */
      Http502?: number;
      /**
       * http503数量
       */
      Http503?: number;
      /**
       * http504数量
       */
      Http504?: number;
      /**
       * http505数量
       */
      Http505?: number;
      /**
       * http506数量
       */
      Http506?: number;
      /**
       * http507数量
       */
      Http507?: number;
      /**
       * http509数量
       */
      Http509?: number;
      /**
       * http510数量
       */
      Http510?: number;
    };
  }[];
}

/**
 * GetUcdnDomainInfoList - 获取域名基本信息
 */
export interface GetUcdnDomainInfoListRequest {
  /**
   * 分页的大小，不填默认每页20个
   */
  PageSize?: number;
  /**
   * 返回第几页，不填默认是第1页
   */
  PageIndex?: number;
}

/**
 * GetUcdnDomainInfoList - 获取域名基本信息
 */
export interface GetUcdnDomainInfoListResponse {
  /**
   * 账户下域名总个数
   */
  TotalCount: number;
  /**
   * 域名基本信息
   */
  DomainInfoList: {
    /**
     * 域名
     */
    Domain: string;
    /**
     * 域名的资源id
     */
    DomainId: string;
  }[];
}

/**
 * GetUcdnDomainLog - 获取加速域名原始日志
 */
export interface GetUcdnDomainLogRequest {
  /**
   * 域名ID，创建加速域名时生成。默认全部域名
   */
  DomainId?: string[];
  /**
   * 查询的起始时间，格式为Unix Timestamp。如果有EndTime，BeginTime必须赋值。
   */
  BeginTime?: number;
  /**
   * 查询的结束时间，格式为Unix Timestamp。EndTime默认为当前时间，BeginTime默认为当前时间前一天时间。
   */
  EndTime?: number;
  /**
   * 查询粒度  0=default(没有粒度) 1=按小时  2=按天
   */
  Type?: number;
}

/**
 * GetUcdnDomainLog - 获取加速域名原始日志
 */
export interface GetUcdnDomainLogResponse {
  /**
   * 获取日志的连接地址。具体参考下面LogSetList
   */
  LogSet?: {
    /**
     * 域名
     */
    Domain?: string;
    /**
     * 域名信息列表，参考LogSetInfo
     */
    Logs?: {
      /**
       * 日志时间UnixTime
       */
      Time?: number;
      /**
       * 国内日志url列表
       */
      CnLog?: string[];
      /**
       * 国外日志url列表
       */
      AbroadLog?: string[];
    }[];
  }[];
}

/**
 * GetUcdnDomainLogV2 - 获取域名5分钟日志
 */
export interface GetUcdnDomainLogV2Request {
  /**
   * 查询的起始时间，格式为Unix Timestamp
   */
  BeginTime: number;
  /**
   * 查询的结束时间，格式为Unix Timestamp
   */
  EndTime: number;
  /**
   * 域名id，创建域名时生成的id。默认全部域名
   */
  DomainId?: string[];
}

/**
 * GetUcdnDomainLogV2 - 获取域名5分钟日志
 */
export interface GetUcdnDomainLogV2Response {
  /**
   *
   */
  DomainLogSet: {
    /**
     * 域名
     */
    Domain?: string;
    /**
     * 日志信息列表
     */
    LogList?: {
      /**
       * Unix时间戳
       */
      LogTime: number;
      /**
       * 日志url地址
       */
      LogUrl: string;
    }[];
  }[];
}

/**
 * GetUcdnDomainOriginHttpCode - 获取域名源站状态码监控
 */
export interface GetUcdnDomainOriginHttpCodeRequest {
  /**
   * 时间粒度（0表示按照5分钟粒度，1表示按照1小时粒度，2表示按照一天的粒度，3表示按照1分钟粒度）
   */
  Type: number;
  /**
   * 域名id，创建域名时生成的id。默认全部域名
   */
  DomainId?: string[];
  /**
   * 查询带宽区域 cn代表国内 abroad代表海外，只支持国内
   */
  Areacode?: string;
  /**
   * 查询的起始时间，格式为Unix Timestamp。如果有EndTime，BeginTime必须赋值。如没有赋值，则返回缺少参 数错误，如果没有EndTime，BeginTime也可以不赋值，EndTime默认当前时间，BeginTime 默认前一天的当前时间。
   */
  BeginTime?: number;
  /**
   * 查询的结束时间，格式为Unix Timestamp。EndTime默认为当前时间，BeginTime默认为当前时间前一天时间。
   */
  EndTime?: number;
}

/**
 * GetUcdnDomainOriginHttpCode - 获取域名源站状态码监控
 */
export interface GetUcdnDomainOriginHttpCodeResponse {
  /**
   * 状态码实例表。详细见HttpCodeInfo
   */
  HttpCodeDetail?: {
    /**
     * 带宽获取的时间点。格式：时间戳
     */
    Time?: number;
    /**
     * 1xx数量
     */
    HttpOneXX?: number;
    /**
     * 2xx数量
     */
    HttpTwoXX?: number;
    /**
     * 3xx数量
     */
    HttpThreeXX?: number;
    /**
     * 4xx数量
     */
    HttpFourXX?: number;
    /**
     * 5xx数量
     */
    HttpFiveXX?: number;
  }[];
}

/**
 * GetUcdnDomainOriginHttpCodeDetail - 获取域名源站详细状态码监控
 */
export interface GetUcdnDomainOriginHttpCodeDetailRequest {
  /**
   * 时间粒度（0表示按照5分钟粒度，1表示按照1小时粒度，2表示按照一天粒度，3表示按照一分钟粒度）
   */
  Type: number;
  /**
   * 查询的起始时间，格式为Unix Timestamp。
   */
  BeginTime: number;
  /**
   * 查询的结束时间，格式为Unix Timestamp。
   */
  EndTime: number;
  /**
   * 域名id，创建域名时生成的id。默认全部域名
   */
  DomainId?: string[];
  /**
   * 查询带宽区域 cn代表国内 abroad代表海外，只支持国内
   */
  Areacode?: string;
}

/**
 * GetUcdnDomainOriginHttpCodeDetail - 获取域名源站详细状态码监控
 */
export interface GetUcdnDomainOriginHttpCodeDetailResponse {
  /**
   * 状态码详情
   */
  HttpCodeV2Detail?: {
    /**
     * 时间
     */
    Time?: number;
    /**
     * 当前分组的总状态码数
     */
    Total?: number;
    /**
     * http100数量
     */
    Http100?: number;
    /**
     * http101数量
     */
    Http101?: number;
    /**
     * http102数量
     */
    Http102?: number;
    /**
     * http200数量
     */
    Http200?: number;
    /**
     * http201数量
     */
    Http201?: number;
    /**
     * http202数量
     */
    Http202?: number;
    /**
     * http203数量
     */
    Http203?: number;
    /**
     * http204数量
     */
    Http204?: number;
    /**
     * http205数量
     */
    Http205?: number;
    /**
     * http206数量
     */
    Http206?: number;
    /**
     * http207数量
     */
    Http207?: number;
    /**
     * http300数量
     */
    Http300?: number;
    /**
     * http301数量
     */
    Http301?: number;
    /**
     * http302数量
     */
    Http302?: number;
    /**
     * http303数量
     */
    Http303?: number;
    /**
     * http304数量
     */
    Http304?: number;
    /**
     * http305数量
     */
    Http305?: number;
    /**
     * http306数量
     */
    Http306?: number;
    /**
     * http307数量
     */
    Http307?: number;
    /**
     * http400数量
     */
    Http400?: number;
    /**
     * http401数量
     */
    Http401?: number;
    /**
     * http402数量
     */
    Http402?: number;
    /**
     * http403数量
     */
    Http403?: number;
    /**
     * http404数量
     */
    Http404?: number;
    /**
     * http405数量
     */
    Http405?: number;
    /**
     * http406数量
     */
    Http406?: number;
    /**
     * http407数量
     */
    Http407?: number;
    /**
     * http408数量
     */
    Http408?: number;
    /**
     * http409数量
     */
    Http409?: number;
    /**
     * http410数量
     */
    Http410?: number;
    /**
     * http411数量
     */
    Http411?: number;
    /**
     * http412数量
     */
    Http412?: number;
    /**
     * http413数量
     */
    Http413?: number;
    /**
     * http414数量
     */
    Http414?: number;
    /**
     * http415数量
     */
    Http415?: number;
    /**
     * http416数量
     */
    Http416?: number;
    /**
     * http417数量
     */
    Http417?: number;
    /**
     * http418数量
     */
    Http418?: number;
    /**
     * http421数量
     */
    Http421?: number;
    /**
     * http422数量
     */
    Http422?: number;
    /**
     * http423数量
     */
    Http423?: number;
    /**
     * http424数量
     */
    Http424?: number;
    /**
     * http425数量
     */
    Http425?: number;
    /**
     * http426数量
     */
    Http426?: number;
    /**
     * http449数量
     */
    Http449?: number;
    /**
     * http451数量
     */
    Http451?: number;
    /**
     * http500数量
     */
    Http500?: number;
    /**
     * http501数量
     */
    Http501?: number;
    /**
     * http502数量
     */
    Http502?: number;
    /**
     * http503数量
     */
    Http503?: number;
    /**
     * http504数量
     */
    Http504?: number;
    /**
     * http505数量
     */
    Http505?: number;
    /**
     * http506数量
     */
    Http506?: number;
    /**
     * http507数量
     */
    Http507?: number;
    /**
     * http509数量
     */
    Http509?: number;
    /**
     * http510数量
     */
    Http510?: number;
  }[];
}

/**
 * GetUcdnDomainOriginRequestNum - 获取域名回源请求数
 */
export interface GetUcdnDomainOriginRequestNumRequest {
  /**
   * 时间粒度（0表示按照5分钟粒度，1表示按照1小时粒度，2表示按照一天的粒度, 3=按1分钟）
   */
  Type: number;
  /**
   * 查询的起始时间，格式为Unix Timestamp
   */
  BeginTime: number;
  /**
   * 查询的结束时间，格式为Unix Timestamp
   */
  EndTime: number;
  /**
   * 域名id，创建域名时生成的id。默认全部域名
   */
  DomainId?: string[];
  /**
   * 查询区域 cn代表国内 abroad代表海外，只支持国内
   */
  Areacode?: string;
}

/**
 * GetUcdnDomainOriginRequestNum - 获取域名回源请求数
 */
export interface GetUcdnDomainOriginRequestNumResponse {
  /**
   * 请求数实例表。
   */
  RequestList?: {
    /**
     * 带宽获取的时间点。格式：时间戳
     */
    Time?: number;
    /**
     * 返回值返回指定时间区间内的cdn收到的请求次数之和
     */
    CdnRequest?: number;
  }[];
}

/**
 * GetUcdnDomainPrefetchEnable - 获取域名预取开启状态
 */
export interface GetUcdnDomainPrefetchEnableRequest {
  /**
   * 域名ID，创建加速域名时生成。
   */
  DomainId: string;
}

/**
 * GetUcdnDomainPrefetchEnable - 获取域名预取开启状态
 */
export interface GetUcdnDomainPrefetchEnableResponse {
  /**
   * 0表示该域名未开启预取，1表示该域名已开启预取
   */
  Enable?: number;
}

/**
 * GetUcdnDomainRequestNumV3 - 获取域名请求数
 */
export interface GetUcdnDomainRequestNumV3Request {
  /**
   * 时间粒度（0表示按照5分钟粒度，1表示按照1小时粒度，2表示按照一天的粒度, 3=按1分钟）
   */
  Type: number;
  /**
   * 查询的起始时间，格式为Unix Timestamp
   */
  BeginTime: number;
  /**
   * 查询的结束时间，格式为Unix Timestamp
   */
  EndTime: number;
  /**
   * 域名id，创建域名时生成的id。默认全部域名
   */
  DomainId?: string[];
  /**
   * 查询区域 cn代表国内 abroad代表海外，只支持国内
   */
  Areacode?: string;
  /**
   * 协议，http、https 不传则查所有协议的带宽
   */
  Protocol?: string;
}

/**
 * GetUcdnDomainRequestNumV3 - 获取域名请求数
 */
export interface GetUcdnDomainRequestNumV3Response {
  /**
   * 请求数实例表。
   */
  RequestList?: {
    /**
     * 带宽获取的时间点。格式：时间戳
     */
    Time?: number;
    /**
     * 返回值返回指定时间区间内的cdn收到的请求次数之和
     */
    CdnRequest?: number;
  }[];
}

/**
 * GetUcdnPassBandwidthV2 - 获取回源带宽数据（cdn回客户源站部分）
 */
export interface GetUcdnPassBandwidthV2Request {
  /**
   * 时间粒度（0表示按照5分钟粒度，1表示按照1小时粒度，2表示按照一天的粒度，3表示按照1分钟粒度）
   */
  Type: number;
  /**
   * 域名id，创建域名时生成的id。默认全部域名
   */
  DomainId?: string[];
  /**
   * 查询带宽区域 cn代表国内 abroad代表海外，只支持国内
   */
  Areacode?: string;
  /**
   * 查询的起始时间，格式为Unix Timestamp。如果有EndTime，BeginTime必须赋值。如没有赋值，则返回缺少参 数错误，如果没有EndTime，BeginTime也可以不赋值，EndTime默认当前时间，BeginTime 默认前一天的当前时间。
   */
  BeginTime?: number;
  /**
   * 查询的结束时间，格式为Unix Timestamp。EndTime默认为当前时间，BeginTime默认为当前时间前一天时间。
   */
  EndTime?: number;
}

/**
 * GetUcdnPassBandwidthV2 - 获取回源带宽数据（cdn回客户源站部分）
 */
export interface GetUcdnPassBandwidthV2Response {
  /**
   * 回源带宽数据
   */
  BandwidthList?: {
    /**
     * 宽获取的时间点。格式：时间戳
     */
    Time: number;
    /**
     * 返回值带宽值数据。
     */
    Bandwidth: number;
  }[];
}

/**
 * GetUcdnProIspBandwidthV2 - 按省份运营商获取域名带宽数据
 */
export interface GetUcdnProIspBandwidthV2Request {
  /**
   * 查询的起始日期，格式为Unix Timestamp
   */
  BeginTime: number;
  /**
   * 查询的结束日期，格式为Unix Timestamp
   */
  EndTime: number;
  /**
   * 时间粒度0 (按5分钟粒度)1 (按小时粒度)2(按天粒度)3(按分钟粒度）
   */
  Type: number;
  /**
   * 域名id，创建域名时生成的id。默认全部域名
   */
  DomainId?: string[];
  /**
   * 省份代码（省份拼音），可以传多个，不传则查询所有省份
   */
  Province?: string[];
  /**
   * 运营商代码（运营商拼音），一次只能查询一个运营商，不传递默认取所有运营商
   */
  Isp?: string;
}

/**
 * GetUcdnProIspBandwidthV2 - 按省份运营商获取域名带宽数据
 */
export interface GetUcdnProIspBandwidthV2Response {
  /**
   * 按省份的带宽流量实例表。具体参考下面BandwidthSet
   */
  BandwidthSet: {
    /**
     * 省份代码
     */
    Province: string;
    /**
     * 省份带宽流量实例表
     */
    BandwidthTrafficList: {
      /**
       * 带宽获取的时间点。格式：时间戳
       */
      Time?: number;
      /**
       * 返回值返回指定时间区间内CDN的带宽峰值，单位Mbps
       */
      CdnBandwidth?: number;
      /**
       * 对应时间粒度的流量，单位字节
       */
      Traffic?: number;
    }[];
  }[];
}

/**
 * GetUcdnProIspRequestNumV2 - 按省份运营商获取域名请求数
 */
export interface GetUcdnProIspRequestNumV2Request {
  /**
   * 查询的起始日期，格式为Unix Timestamp  忽略时间部分
   */
  BeginTime: number;
  /**
   * 查询的结束日期，格式为Unix Timestamp  忽略时间部分
   */
  EndTime: number;
  /**
   * 域名id，创建域名时生成的id。默认全部域名
   */
  DomainId?: string[];
  /**
   * 省份代码，可以传多个，不传则查询所有省份
   */
  Province?: string[];
  /**
   * 运营商代码，一次只能查询一个运营商，不传递默认取所有运营商
   */
  Isp?: string;
  /**
   * 时间粒度（0表示按照5分钟粒度，1表示按照1小时粒度，2表示按照一天粒度，3表示按照一分钟粒度）
   */
  Type?: number;
}

/**
 * GetUcdnProIspRequestNumV2 - 按省份运营商获取域名请求数
 */
export interface GetUcdnProIspRequestNumV2Response {
  /**
   * 按省份的请求数实例表。具体参考下面RequestList
   */
  RequestNumSet: {
    /**
     * 省份代码
     */
    Province: string;
    /**
     * 省份请求数实例表 ProIspRequestListV2
     */
    RequestList: {
      /**
       * 带宽获取的时间点。格式：时间戳
       */
      Time?: number;
      /**
       * 返回值返回指定时间区间内的请求数
       */
      CdnRequest?: number;
    }[];
  }[];
}

/**
 * GetUcdnTrafficV2 - 获取流量信息
 */
export interface GetUcdnTrafficV2Request {}

/**
 * GetUcdnTrafficV2 - 获取流量信息
 */
export interface GetUcdnTrafficV2Response {
  /**
   * 用户不同区域的流量信息, 具体结构参见TrafficSet部分
   */
  TrafficSet?: {
    /**
     * 购买流量的区域, cn: 国内; abroad: 国外
     */
    Areacode?: string;
    /**
     * Areacode区域内总购买流量, 单位GB
     */
    TrafficTotal?: number;
    /**
     * Areacode区域内总剩余流量, 单位GB
     */
    TrafficLeft?: number;
    /**
     * Areacode区域内总使用流量, 单位GB
     */
    TrafficUsed?: number;
  }[];
}

/**
 * PrefetchNewUcdnDomainCache - 提交预取任务
 */
export interface PrefetchNewUcdnDomainCacheRequest {
  /**
   * 预热URL列表，n从自然数0开始。UrlList.n字段必须以”http://域名/”开始。如刷新文件目录a下面img.png文件， 格式为http://abc.ucloud.cn/a/img.png。请正确提交需要刷新的域名
   */
  UrlList: string[];
}

/**
 * PrefetchNewUcdnDomainCache - 提交预取任务
 */
export interface PrefetchNewUcdnDomainCacheResponse {
  /**
   * 本次提交url对应的任务id
   */
  TaskId?: string;
}

/**
 * QueryIpLocation - 查询IP信息
 */
export interface QueryIpLocationRequest {
  /**
   * ip列表
   */
  Ip: string[];
}

/**
 * QueryIpLocation - 查询IP信息
 */
export interface QueryIpLocationResponse {
  /**
   * IP信息列表
   */
  Data: {
    /**
     * 客户端请求的ip
     */
    Ip?: string;
    /**
     * 地区
     */
    Area?: string;
    /**
     * 运营商
     */
    Isp?: string;
    /**
     * 城市
     */
    City?: string;
    /**
     * ip是否存在
     */
    Exist?: boolean;
  }[];
}

/**
 * RefreshNewUcdnDomainCache - 刷新缓存
 */
export interface RefreshNewUcdnDomainCacheRequest {
  /**
   * 刷新类型，file代表文件刷新，dir 代表路径刷新，m3u8带表m3u8刷新
   */
  Type: string;
  /**
   * 需要刷新的URL，n 从自然数0开始，刷新多个URL列表时，一次最多提交30个。必须以”http://域名/”开始。目录要以”/”结尾， 如刷新目录a下所有文件，格式为：http://abc.ucloud.cn/a/；如刷新文件目录a下面img.png文件， 格式为http://abc.ucloud.cn/a/img.png。请正确提交需要刷新的域名
   */
  UrlList: string[];
}

/**
 * RefreshNewUcdnDomainCache - 刷新缓存
 */
export interface RefreshNewUcdnDomainCacheResponse {
  /**
   * 本次提交url对应的任务id
   */
  TaskId?: string;
}

/**
 * SwitchUcdnChargeType - 切换账号计费方式
 */
export interface SwitchUcdnChargeTypeRequest {
  /**
   * 计费方式。traffic代表按流量包计费，bandwidth按带宽付费
   */
  ChargeType: string;
}

/**
 * SwitchUcdnChargeType - 切换账号计费方式
 */
export interface SwitchUcdnChargeTypeResponse {}
