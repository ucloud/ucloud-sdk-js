import Client from '../../core/client';
import Request from '../../core/request';
import { ConfigOptions } from '../../core/config';
import { CredentialOptions } from '../../core/credential';

/**
 * This client is used to call actions of **uai_modelverse** service
 */
export default class UAIModelverseClient extends Client {
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
   * CreateUMInferAPIKey - 创建apikey
   *
   * See also: https://docs.ucloud.cn/api/uai-modelverse-api/create_um_infer_api_key
   */
  createUMInferAPIKey(
    request?: CreateUMInferAPIKeyRequest
  ): Promise<CreateUMInferAPIKeyResponse> {
    const args = { Action: 'CreateUMInferAPIKey', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as CreateUMInferAPIKeyResponse
    );
  }

  /**
   * DeleteUMInferAPIKey - 删除apikey
   *
   * See also: https://docs.ucloud.cn/api/uai-modelverse-api/delete_um_infer_api_key
   */
  deleteUMInferAPIKey(
    request?: DeleteUMInferAPIKeyRequest
  ): Promise<DeleteUMInferAPIKeyResponse> {
    const args = { Action: 'DeleteUMInferAPIKey', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DeleteUMInferAPIKeyResponse
    );
  }

  /**
   * DownloadListPaidOrders - 生成已完成（已支付）订单明细 Excel 文件并返回 US3 预签名下载链接；查询条件与 ListPaidOrders 完全一致，StartTime/EndTime 必填；取数范围是 [StartTime, EndTime)，即取开始计费时间大于等于StartTime且小于EndTime的数据
   *
   * See also: https://docs.ucloud.cn/api/uai-modelverse-api/download_list_paid_orders
   */
  downloadListPaidOrders(
    request?: DownloadListPaidOrdersRequest
  ): Promise<DownloadListPaidOrdersResponse> {
    const args = { Action: 'DownloadListPaidOrders', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DownloadListPaidOrdersResponse
    );
  }

  /**
   * DownloadListUnpaidOrders - 生成欠费（未支付）订单明细 Excel 文件并返回 US3 预签名下载链接；查询条件与 ListUnpaidOrders 完全一致，StartTime/EndTime 必填
   *
   * See also: https://docs.ucloud.cn/api/uai-modelverse-api/download_list_unpaid_orders
   */
  downloadListUnpaidOrders(
    request?: DownloadListUnpaidOrdersRequest
  ): Promise<DownloadListUnpaidOrdersResponse> {
    const args = { Action: 'DownloadListUnpaidOrders', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DownloadListUnpaidOrdersResponse
    );
  }

  /**
   * DownloadOrderSummary - 生成订单汇总 Excel 文件（包含已完成订单和欠费订单两个 sheet），返回 US3 预签名下载链接；StartTime/EndTime 必填
   *
   * See also: https://docs.ucloud.cn/api/uai-modelverse-api/download_order_summary
   */
  downloadOrderSummary(
    request?: DownloadOrderSummaryRequest
  ): Promise<DownloadOrderSummaryResponse> {
    const args = { Action: 'DownloadOrderSummary', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DownloadOrderSummaryResponse
    );
  }

  /**
   * DownloadUMInferRequestLog - 导出推理请求日志。单次导出时间范围最长 30 天，最多导出 2000 万条日志；同一 TopOrganizationID 同一时间仅允许 1 个导出任务在执行，已有任务执行中时请稍后重试。
   *
   * See also: https://docs.ucloud.cn/api/uai-modelverse-api/download_um_infer_request_log
   */
  downloadUMInferRequestLog(
    request?: DownloadUMInferRequestLogRequest
  ): Promise<DownloadUMInferRequestLogResponse> {
    const args = { Action: 'DownloadUMInferRequestLog', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DownloadUMInferRequestLogResponse
    );
  }

  /**
   * GetFilterOptions - 查询可用于订单筛选的资源、模型、地域等选项列表
   *
   * See also: https://docs.ucloud.cn/api/uai-modelverse-api/get_filter_options
   */
  getFilterOptions(
    request?: GetFilterOptionsRequest
  ): Promise<GetFilterOptionsResponse> {
    const args = { Action: 'GetFilterOptions', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as GetFilterOptionsResponse
    );
  }

  /**
   * GetOrderAmount - 查询指定条件下订单的金额汇总及数量统计
   *
   * See also: https://docs.ucloud.cn/api/uai-modelverse-api/get_order_amount
   */
  getOrderAmount(
    request?: GetOrderAmountRequest
  ): Promise<GetOrderAmountResponse> {
    const args = { Action: 'GetOrderAmount', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as GetOrderAmountResponse
    );
  }

  /**
   * GetUFSquareModelDetail - 获取广场模型详情
   *
   * See also: https://docs.ucloud.cn/api/uai-modelverse-api/get_uf_square_model_detail
   */
  getUFSquareModelDetail(
    request?: GetUFSquareModelDetailRequest
  ): Promise<GetUFSquareModelDetailResponse> {
    const args = { Action: 'GetUFSquareModelDetail', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as GetUFSquareModelDetailResponse
    );
  }

  /**
   * GetUFSquareModelPrices - 批量查询模型价格
   *
   * See also: https://docs.ucloud.cn/api/uai-modelverse-api/get_uf_square_model_prices
   */
  getUFSquareModelPrices(
    request?: GetUFSquareModelPricesRequest
  ): Promise<GetUFSquareModelPricesResponse> {
    const args = { Action: 'GetUFSquareModelPrices', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as GetUFSquareModelPricesResponse
    );
  }

  /**
   * GetUMInferRequestLogDetail - 原始日志详情
   *
   * See also: https://docs.ucloud.cn/api/uai-modelverse-api/get_um_infer_request_log_detail
   */
  getUMInferRequestLogDetail(
    request?: GetUMInferRequestLogDetailRequest
  ): Promise<GetUMInferRequestLogDetailResponse> {
    const args = { Action: 'GetUMInferRequestLogDetail', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as GetUMInferRequestLogDetailResponse
    );
  }

  /**
   * ListPaidOrderSummary - 按指定维度汇总查询已完成（已支付）订单的统计数据
   *
   * See also: https://docs.ucloud.cn/api/uai-modelverse-api/list_paid_order_summary
   */
  listPaidOrderSummary(
    request?: ListPaidOrderSummaryRequest
  ): Promise<ListPaidOrderSummaryResponse> {
    const args = { Action: 'ListPaidOrderSummary', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as ListPaidOrderSummaryResponse
    );
  }

  /**
   * ListPaidOrders - 查询已完成（已支付）的订单明细列表，StartTime/EndTime 必填；取数范围是 [StartTime, EndTime)，即取开始计费时间大于等于StartTime且小于EndTime的数据
   *
   * See also: https://docs.ucloud.cn/api/uai-modelverse-api/list_paid_orders
   */
  listPaidOrders(
    request?: ListPaidOrdersRequest
  ): Promise<ListPaidOrdersResponse> {
    const args = { Action: 'ListPaidOrders', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as ListPaidOrdersResponse
    );
  }

  /**
   * ListUFSquareModel - 查询模型广场数据
   *
   * See also: https://docs.ucloud.cn/api/uai-modelverse-api/list_uf_square_model
   */
  listUFSquareModel(
    request?: ListUFSquareModelRequest
  ): Promise<ListUFSquareModelResponse> {
    const args = { Action: 'ListUFSquareModel', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as ListUFSquareModelResponse
    );
  }

  /**
   * ListUFSquareModelFiltersAuth - 登录状态下获取模型广场过滤器中内容
   *
   * See also: https://docs.ucloud.cn/api/uai-modelverse-api/list_uf_square_model_filters_auth
   */
  listUFSquareModelFiltersAuth(
    request?: ListUFSquareModelFiltersAuthRequest
  ): Promise<ListUFSquareModelFiltersAuthResponse> {
    const args = { Action: 'ListUFSquareModelFiltersAuth', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as ListUFSquareModelFiltersAuthResponse
    );
  }

  /**
   * ListUMInferAPIKey - 列表查询apikey
   *
   * See also: https://docs.ucloud.cn/api/uai-modelverse-api/list_um_infer_api_key
   */
  listUMInferAPIKey(
    request?: ListUMInferAPIKeyRequest
  ): Promise<ListUMInferAPIKeyResponse> {
    const args = { Action: 'ListUMInferAPIKey', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as ListUMInferAPIKeyResponse
    );
  }

  /**
   * ListUMInferRequestLogs - 日志明细列表
   *
   * See also: https://docs.ucloud.cn/api/uai-modelverse-api/list_um_infer_request_logs
   */
  listUMInferRequestLogs(
    request?: ListUMInferRequestLogsRequest
  ): Promise<ListUMInferRequestLogsResponse> {
    const args = { Action: 'ListUMInferRequestLogs', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as ListUMInferRequestLogsResponse
    );
  }

  /**
   * ListUnpaidOrderSummary - 按指定维度汇总查询欠费订单的统计数据
   *
   * See also: https://docs.ucloud.cn/api/uai-modelverse-api/list_unpaid_order_summary
   */
  listUnpaidOrderSummary(
    request?: ListUnpaidOrderSummaryRequest
  ): Promise<ListUnpaidOrderSummaryResponse> {
    const args = { Action: 'ListUnpaidOrderSummary', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as ListUnpaidOrderSummaryResponse
    );
  }

  /**
   * ListUnpaidOrders - 查询当前欠费（未支付）的订单明细列表
   *
   * See also: https://docs.ucloud.cn/api/uai-modelverse-api/list_unpaid_orders
   */
  listUnpaidOrders(
    request?: ListUnpaidOrdersRequest
  ): Promise<ListUnpaidOrdersResponse> {
    const args = { Action: 'ListUnpaidOrders', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as ListUnpaidOrdersResponse
    );
  }

  /**
   * StartPayUnpaidOrders - 批量支付欠费订单，指定 OrderNos 支付，最多 50 个
   *
   * See also: https://docs.ucloud.cn/api/uai-modelverse-api/start_pay_unpaid_orders
   */
  startPayUnpaidOrders(
    request?: StartPayUnpaidOrdersRequest
  ): Promise<StartPayUnpaidOrdersResponse> {
    const args = { Action: 'StartPayUnpaidOrders', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as StartPayUnpaidOrdersResponse
    );
  }

  /**
   * UpdateUMInferAPIKey - 更新apikey
   *
   * See also: https://docs.ucloud.cn/api/uai-modelverse-api/update_um_infer_api_key
   */
  updateUMInferAPIKey(
    request?: UpdateUMInferAPIKeyRequest
  ): Promise<UpdateUMInferAPIKeyResponse> {
    const args = { Action: 'UpdateUMInferAPIKey', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as UpdateUMInferAPIKeyResponse
    );
  }
}

/**
 * CreateUMInferAPIKey - 创建apikey
 */
export interface CreateUMInferAPIKeyRequest {
  /**
   * apikey名称
   */
  Name: string;
  /**
   * 是否modelverse可用 0: 启用 1: 禁用
   */
  ModelverseDisabled?: number;
  /**
   * 是否沙盒可用 0: 启用 1: 禁用(astraflow 沙盒控制未上线，暂时无效)
   */
  SandBoxDisabled?: number;
  /**
   * 日限额，单位随用户所在渠道。126渠道单位为美元
   */
  DailyLimitAmount?: string;
  /**
   * 月限额，单位随用户所在渠道。126渠道单位为美元
   */
  MonthlyLimitAmount?: string;
  /**
   * 全部模型访问开关，开启不受 GrantedModels 参数控制，关闭只能访问 GrantedModels 中添加模型
   */
  GrantAllModels?: boolean;
  /**
   * 授权模型，内容为数组格式。当 GrantAllModels 为false时 当前key只可访问数组中模型。例：["deepseek-ai/DeepSeek-V3.2-Think"]
   */
  GrantedModels?: string;
  /**
   * ip白名单，换行分割的多组ip。支持IPv4和网段,输入后回车生效,最多100个, 示例:﻿192.168.1.1192.168.1.10-192.168.1.100192.168.1.10/24
   */
  IPWhitelist?: string;
}

/**
 * CreateUMInferAPIKey - 创建apikey
 */
export interface CreateUMInferAPIKeyResponse {
  /**
   * apikey
   */
  Data?: {
    /**
     * ip白名单，换行分割的多组ip。支持IPv4和网段,输入后回车生效,最多100个, 示例: ﻿ 192.168.1.1 192.168.1.10-192.168.1.100 192.168.1.10/24
     */
    IPWhitelist: string;
    /**
     * 资源ID
     */
    KeyId?: string;
    /**
     * 名称
     */
    Name?: string;
    /**
     * 渠道id
     */
    ChannelId?: number;
    /**
     * 公司id
     */
    TopOrganizationId?: number;
    /**
     * 项目id
     */
    OrganizationId?: number;
    /**
     * 状态，1 正常
     */
    Status?: number;
    /**
     * 创建时间
     */
    CreateTime?: number;
    /**
     * 密钥值
     */
    Key?: string;
    /**
     * 过期时间的unix时间戳，-1 用不过期
     */
    ExpireTime?: number;
    /**
     * 是否modelverse可用 0: 启用 1: 禁用
     */
    ModelverseDisabled?: number;
    /**
     * 是否沙盒可用 0: 启用 1: 禁用(astraflow 沙盒控制未上线，暂时无效)
     */
    SandBoxDisabled?: number;
    /**
     * 日限额，单位随用户所在渠道。126渠道单位为美元
     */
    DailyLimitAmount?: string;
    /**
     * 日已使用额，单位随用户所在渠道。126渠道单位为美元
     */
    DailyUsedAmount?: string;
    /**
     * 月限额，单位随用户所在渠道。126渠道单位为美元
     */
    MonthlyLimitAmount?: string;
    /**
     * 月已使用额，单位随用户所在渠道。126渠道单位为美元
     */
    MonthlyUsedAmount?: string;
    /**
     * 全部模型访问开关，开启不受 GrantedModels 参数控制，关闭只能访问 GrantedModels 中添加模型
     */
    GrantAllModels?: boolean;
    /**
     * 授权的模型，英文逗号分隔，all表示所有模型都有权限
     */
    GrantedModels?: string[];
  };
  /**
   * 总条数
   */
  TotalCount?: number;
}

/**
 * DeleteUMInferAPIKey - 删除apikey
 */
export interface DeleteUMInferAPIKeyRequest {
  /**
   * 要删除的apikey id
   */
  KeyId: string;
}

/**
 * DeleteUMInferAPIKey - 删除apikey
 */
export interface DeleteUMInferAPIKeyResponse {
  /**
   * apikey 的资源ID
   */
  UminferID?: string;
}

/**
 * DownloadListPaidOrders - 生成已完成（已支付）订单明细 Excel 文件并返回 US3 预签名下载链接；查询条件与 ListPaidOrders 完全一致，StartTime/EndTime 必填；取数范围是 [StartTime, EndTime)，即取开始计费时间大于等于StartTime且小于EndTime的数据
 */
export interface DownloadListPaidOrdersRequest {
  /**
   * 查询开始时间（Unix 时间戳，秒级），必填
   */
  StartTime: number;
  /**
   * 查询结束时间（Unix 时间戳，秒级），必填；必须大于 StartTime
   */
  EndTime: number;
  /**
   * 资源ID列表（可选）
   */
  ResourceIds?: string[];
  /**
   * 模型ID列表（可选）
   */
  ModelIds?: string[];
  /**
   * 计费单位列表（多选，可选）
   */
  PricingUnits?: number[];
  /**
   * 计费单元（SKU）列表（可选）
   */
  PricingSkus?: string[];
  /**
   * 订单类型数组（多选，可选）
   */
  OrderTypes?: number[];
  /**
   * 组织ID列表（可选）
   */
  OrganizationIds?: number[];
  /**
   * 地域列表（可选），参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
   */
  Regions?: string[];
  /**
   * 产品类型列表（可选），枚举值：`modelverse`、`sandbox`
   */
  ProductCodes?: string[];
}

/**
 * DownloadListPaidOrders - 生成已完成（已支付）订单明细 Excel 文件并返回 US3 预签名下载链接；查询条件与 ListPaidOrders 完全一致，StartTime/EndTime 必填；取数范围是 [StartTime, EndTime)，即取开始计费时间大于等于StartTime且小于EndTime的数据
 */
export interface DownloadListPaidOrdersResponse {
  /**
   * 下载文件信息
   */
  Data?: {
    /**
     * 文件下载链接（US3 预签名 URL，请在有效期内立即下载）
     */
    DownloadURL?: string;
    /**
     * 文件名
     */
    FileName?: string;
    /**
     * 文件大小（字节）
     */
    FileSize?: number;
  };
}

/**
 * DownloadListUnpaidOrders - 生成欠费（未支付）订单明细 Excel 文件并返回 US3 预签名下载链接；查询条件与 ListUnpaidOrders 完全一致，StartTime/EndTime 必填
 */
export interface DownloadListUnpaidOrdersRequest {
  /**
   * 查询开始时间（Unix 时间戳，秒级），必填
   */
  StartTime: number;
  /**
   * 查询结束时间（Unix 时间戳，秒级），必填；必须大于 StartTime
   */
  EndTime: number;
  /**
   * 资源ID列表（可选）
   */
  ResourceIds?: string[];
  /**
   * 模型ID列表（可选）
   */
  ModelIds?: string[];
  /**
   * 计费单位列表（多选，可选）
   */
  PricingUnits?: number[];
  /**
   * 订单类型数组（多选，可选）
   */
  OrderTypes?: number[];
  /**
   * 组织ID列表（可选）
   */
  OrganizationIds?: number[];
  /**
   * 计费单元（SKU）列表（可选）
   */
  PricingSkus?: string[];
  /**
   * 产品类型列表（可选），枚举值：`modelverse`、`sandbox`
   */
  ProductCodes?: string[];
  /**
   * 地域列表（可选），参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
   */
  Regions?: string[];
}

/**
 * DownloadListUnpaidOrders - 生成欠费（未支付）订单明细 Excel 文件并返回 US3 预签名下载链接；查询条件与 ListUnpaidOrders 完全一致，StartTime/EndTime 必填
 */
export interface DownloadListUnpaidOrdersResponse {
  /**
   * 下载文件信息
   */
  Data: {
    /**
     * 文件下载链接（US3 预签名 URL，请在有效期内立即下载）
     */
    DownloadURL?: string;
    /**
     * 文件名
     */
    FileName?: string;
    /**
     * 文件大小（字节）
     */
    FileSize?: number;
  };
}

/**
 * DownloadOrderSummary - 生成订单汇总 Excel 文件（包含已完成订单和欠费订单两个 sheet），返回 US3 预签名下载链接；StartTime/EndTime 必填
 */
export interface DownloadOrderSummaryRequest {
  /**
   * 查询开始时间（Unix 时间戳，秒级），必填
   */
  StartTime: number;
  /**
   * 查询结束时间（Unix 时间戳，秒级），必填；必须大于 StartTime
   */
  EndTime: number;
  /**
   * 资源ID列表（可选）
   */
  ResourceIds?: string[];
  /**
   * 模型ID列表（可选）
   */
  ModelIds?: string[];
  /**
   * 计费单位列表（多选，可选）
   */
  PricingUnits?: number[];
  /**
   * 订单类型数组（多选，可选）
   */
  OrderTypes?: number[];
  /**
   * 计费类型数组（多选，可选）
   */
  ChargeTypes?: number[];
  /**
   * 组织ID列表（可选）
   */
  OrganizationIds?: number[];
  /**
   * 地域列表（可选），参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
   */
  Regions?: string[];
  /**
   * 计费单元（SKU）列表（可选）
   */
  PricingSkus?: string[];
  /**
   * 产品类型列表（可选），枚举值：`modelverse`、`sandbox`
   */
  ProductCodes?: string[];
}

/**
 * DownloadOrderSummary - 生成订单汇总 Excel 文件（包含已完成订单和欠费订单两个 sheet），返回 US3 预签名下载链接；StartTime/EndTime 必填
 */
export interface DownloadOrderSummaryResponse {
  /**
   * 下载文件信息
   */
  Data: {
    /**
     * 文件下载链接（US3 预签名 URL，请在有效期内立即下载）
     */
    DownloadURL?: string;
    /**
     * 文件名
     */
    FileName?: string;
    /**
     * 文件大小（字节）
     */
    FileSize?: number;
  };
}

/**
 * DownloadUMInferRequestLog - 导出推理请求日志。单次导出时间范围最长 30 天，最多导出 2000 万条日志；同一 TopOrganizationID 同一时间仅允许 1 个导出任务在执行，已有任务执行中时请稍后重试。
 */
export interface DownloadUMInferRequestLogRequest {
  /**
   * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
   */
  Zone: string;
  /**
   * 导出开始时间，Unix 毫秒时间戳
   */
  StartTime: number;
  /**
   * 导出结束时间，Unix 毫秒时间戳，最长支持 30 天范围
   */
  EndTime: number;
  /**
   * 接收导出结果的邮箱地址
   */
  Email: string;
  /**
   * 模型名称列表，用于过滤
   */
  ModelNames?: string[];
  /**
   * API Key ID 列表，用于过滤
   */
  ApiKeyIds?: string[];
  /**
   * 请求 ID，用于精确过滤
   */
  RequestId?: string;
}

/**
 * DownloadUMInferRequestLog - 导出推理请求日志。单次导出时间范围最长 30 天，最多导出 2000 万条日志；同一 TopOrganizationID 同一时间仅允许 1 个导出任务在执行，已有任务执行中时请稍后重试。
 */
export interface DownloadUMInferRequestLogResponse {
  /**
   * 导出任务 ID
   */
  TaskId?: string;
  /**
   * 本次导出查询命中的日志行数
   */
  TotalCount?: number;
}

/**
 * GetFilterOptions - 查询可用于订单筛选的资源、模型、地域等选项列表
 */
export interface GetFilterOptionsRequest {
  /**
   * 产品类型（单选，可选），枚举值：`modelverse`、`sandbox`；为空时返回所有产品下的选项
   */
  ProductCode?: string;
}

/**
 * GetFilterOptions - 查询可用于订单筛选的资源、模型、地域等选项列表
 */
export interface GetFilterOptionsResponse {
  /**
   * 资源选项列表
   */
  ResourceIds: {
    /**
     * 显示名称
     */
    Name?: string;
    /**
     * 值
     */
    Value?: string;
  }[];
  /**
   * 模型选项列表
   */
  Models?: {
    /**
     * 显示名称
     */
    Name?: string;
    /**
     * 值
     */
    Value?: string;
  }[];
  /**
   * 账单维度选项列表
   */
  Dimensions?: {
    /**
     * 显示名称
     */
    Name?: string;
    /**
     * 值
     */
    Value?: string;
  }[];
  /**
   * 计费单位选项列表
   */
  PricingUnits?: {
    /**
     * 显示名称
     */
    Name?: string;
    /**
     * 值
     */
    Value?: number;
  }[];
  /**
   * 地域选项列表
   */
  Regions?: {
    /**
     * 显示名称
     */
    Name?: string;
    /**
     * 值
     */
    Value?: string;
  }[];
  /**
   * 产品类型选项列表
   */
  ProductCodes?: {
    /**
     * 显示名称
     */
    Name?: string;
    /**
     * 值
     */
    Value?: string;
  }[];
  /**
   * 项目选项列表
   */
  Projects?: {
    /**
     * 显示名称
     */
    Name?: string;
    /**
     * 值
     */
    Value?: number;
  }[];
  /**
   * 计费 SKU 选项列表
   */
  PricingSKUs?: {
    /**
     * 显示名称
     */
    Name?: string;
    /**
     * 值
     */
    Value?: string;
  }[];
  /**
   * 订单类型选项列表
   */
  OrderTypes?: {
    /**
     * 显示名称
     */
    Name?: string;
    /**
     * 值
     */
    Value?: number;
  }[];
}

/**
 * GetOrderAmount - 查询指定条件下订单的金额汇总及数量统计
 */
export interface GetOrderAmountRequest {
  /**
   * 查询开始时间（Unix 时间戳，秒级）。需与 `EndTime` 同时提供，最大查询跨度 366 天
   */
  StartTime: number;
  /**
   * 查询结束时间（Unix 时间戳，秒级）。需与 `StartTime` 同时提供
   */
  EndTime: number;
  /**
   * 资源ID列表（可选）
   */
  ResourceIds?: string[];
  /**
   * 模型ID列表（可选）
   */
  ModelIds?: string[];
  /**
   * 计费单位列表（可选）
   */
  PricingUnits?: number[];
  /**
   * 计费单元（SKU）列表（可选）
   */
  PricingSkus?: string[];
  /**
   * 产品类型列表（可选），枚举值：`modelverse`、`sandbox`
   */
  ProductCodes?: string[];
  /**
   * 订单类型列表（可选）
   */
  OrderTypes?: number[];
  /**
   * 地域列表（可选），参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
   */
  Regions?: string[];
  /**
   * 组织ID列表（可选）
   */
  OrganizationIds?: string[];
}

/**
 * GetOrderAmount - 查询指定条件下订单的金额汇总及数量统计
 */
export interface GetOrderAmountResponse {
  /**
   * 订单总额（所有订单的总金额）
   */
  TotalOrderAmount: string;
  /**
   * 已支付金额
   */
  PaidAmount?: string;
  /**
   * 待支付金额
   */
  UnpaidAmount?: string;
  /**
   * 现金账户总金额
   */
  CashAmount?: string;
  /**
   * 赠金账户总金额
   */
  BonusAmount?: string;
  /**
   * 代金券抵扣总额
   */
  CouponAmount?: string;
  /**
   * 星力卡抵扣总金额
   */
  StarCardAmount?: string;
  /**
   * 订单总数
   */
  OrderCount?: number;
  /**
   * 已支付订单数
   */
  PaidCount?: number;
  /**
   * 待支付订单数量
   */
  UnpaidCount?: number;
}

/**
 * GetUFSquareModelDetail - 获取广场模型详情
 */
export interface GetUFSquareModelDetailRequest {
  /**
   * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
   */
  Zone: string;
  /**
   * 主键
   */
  Id: string;
}

/**
 * GetUFSquareModelDetail - 获取广场模型详情
 */
export interface GetUFSquareModelDetailResponse {
  /**
   * 模型
   */
  SquareModel: {
    /**
     * 制造商
     */
    Manufacturer?: string;
    /**
     * 主键
     */
    Id?: string;
    /**
     * 名称
     */
    Name?: string;
    /**
     * 简要描述
     */
    SimpleDescribe?: string;
    /**
     * 详细描述
     */
    Describe?: string;
    /**
     * 语言
     */
    Language?: string[];
    /**
     * 模型长度
     */
    MaxModelLen?: number;
    /**
     * 模型类型
     */
    ModelType?: string;
    /**
     * HuggingFace 更新时间
     */
    HfUpdateTime?: number;
    /**
     * 创建时间
     */
    CreateAt?: number;
    /**
     * 更新时间
     */
    UpdateAt?: number;
    /**
     * 模型能力
     */
    SupportedCapabilities?: string[];
    /**
     * 图标
     */
    Icon?: string;
    /**
     * 定价策略
     */
    Pricing?: {
      /**
       * 输出定价
       */
      Completion?: number;
      /**
       * 提示词定价
       */
      Prompt?: number;
      /**
       * 生图定价
       */
      Image?: number;
      /**
       * 生视频定价
       */
      Video?: string;
      /**
       * 币种
       */
      Currency?: string;
      /**
       * 单位（中文），如“次” “百万”
       */
      Unit?: string;
      /**
       * 单位（English），如“Time” “Million”
       */
      UnitEn?: string;
    };
    /**
     * 价格阶梯（有序数组）
     */
    Tiers?: {
      /**
       * 该档位下的收费列表（有序数组）
       */
      Rates: {
        /**
         * 收费项描述英文描述
         */
        ChargeItemDescriptionEn: string;
        /**
         * 货币单位
         */
        Currency: string;
        /**
         * 计价单位
         */
        Unit: string;
        /**
         * 计价单位英文
         */
        UnitEn: string;
        /**
         * 收费项：input/output/thinking/tool...
         */
        ChargeItem?: string;
        /**
         * 收费项描述
         */
        ChargeItemDescription?: string;
        /**
         * 价格
         */
        Price?: string;
      }[];
      /**
       * 档位描述（例如 "标准上下文 32k"）
       */
      DescriptionEn: string;
      /**
       * 档位/条件（例如 "32k"、"128k"）
       */
      Condition?: string;
      /**
       * 档位描述（例如 "标准上下文 32k"）
       */
      Description?: string;
    }[];
  };
}

/**
 * GetUFSquareModelPrices - 批量查询模型价格
 */
export interface GetUFSquareModelPricesRequest {
  /**
   * 模型名称模糊搜索（例：deepseek-r1）
   */
  Keyword?: string;
  /**
   * 列表起始位置偏移量，默认为0
   */
  Offset?: number;
  /**
   * 返回数据长度，默认为20
   */
  Limit?: number;
}

/**
 * GetUFSquareModelPrices - 批量查询模型价格
 */
export interface GetUFSquareModelPricesResponse {
  /**
   * 匹配模型的价格信息
   */
  Models: {
    /**
     * 制造商
     */
    Manufacturer: string;
    /**
     * 模型名称
     */
    ModelName?: string;
    /**
     * ModelId
     */
    ModelId?: string;
    /**
     * 价格阶梯（有序数组）
     */
    Tiers?: {
      /**
       * 该档位下的收费列表（有序数组）
       */
      Rates: {
        /**
         * 收费项描述英文描述
         */
        ChargeItemDescriptionEn: string;
        /**
         * 货币单位
         */
        Currency: string;
        /**
         * 计价单位
         */
        Unit: string;
        /**
         * 计价单位英文
         */
        UnitEn: string;
        /**
         * 收费项：input/output/thinking/tool...
         */
        ChargeItem?: string;
        /**
         * 收费项描述
         */
        ChargeItemDescription?: string;
        /**
         * 价格
         */
        Price?: string;
      }[];
      /**
       * 档位描述（例如 "标准上下文 32k"）
       */
      DescriptionEn: string;
      /**
       * 档位/条件（例如 "32k"、"128k"）
       */
      Condition?: string;
      /**
       * 档位描述（例如 "标准上下文 32k"）
       */
      Description?: string;
    }[];
  }[];
  /**
   * 总条数用于翻页
   */
  TotalCount?: number;
}

/**
 * GetUMInferRequestLogDetail - 原始日志详情
 */
export interface GetUMInferRequestLogDetailRequest {
  /**
   * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
   */
  Zone: string;
  /**
   * 请求 ID
   */
  RequestId: string;
}

/**
 * GetUMInferRequestLogDetail - 原始日志详情
 */
export interface GetUMInferRequestLogDetailResponse {
  /**
   * 请求日志详情
   */
  Data: {
    /**
     * 请求 ID
     */
    RequestId?: string;
    /**
     * 顶级组织 ID
     */
    TopOrganizationId?: string;
    /**
     * 组织 ID
     */
    OrganizationId?: string;
    /**
     * 客户端 IP
     */
    ClientIp?: string;
    /**
     * 业务地域
     */
    Region?: string;
    /**
     * 请求开始时间，Unix 毫秒时间戳
     */
    StartTime?: number;
    /**
     * 请求开始时间，可读格式
     */
    StartTimeReadable?: string;
    /**
     * 模型名称
     */
    ModelName?: string;
    /**
     * 是否流式请求
     */
    IsStream?: boolean;
    /**
     * API Key ID
     */
    ApiKeyId?: string;
    /**
     * HTTP 状态码
     */
    HttpStatusCode?: number;
    /**
     * 错误码
     */
    ErrorCode?: string;
    /**
     * 错误信息
     */
    ErrorMessage?: string;
    /**
     * 请求是否成功
     */
    IsSuccess?: boolean;
    /**
     * 请求总延迟，单位毫秒
     */
    Latency?: number;
    /**
     * 首 Token 延迟，单位毫秒
     */
    FirstTokenLatency?: number;
    /**
     * 输出 Token 吞吐
     */
    OutputTokenThroughput?: number;
    /**
     * 模型返回的 usage 原文 JSON
     */
    Usage?: string;
    /**
     * 请求原文，本期返回为空
     */
    Request?: string;
    /**
     * 响应原文，本期返回为空
     */
    Response?: string;
    /**
     * 扩展信息，本期返回为空
     */
    Extras?: string;
  };
}

/**
 * ListPaidOrderSummary - 按指定维度汇总查询已完成（已支付）订单的统计数据
 */
export interface ListPaidOrderSummaryRequest {
  /**
   * 查询开始时间（Unix 时间戳，秒级），必填
   */
  StartTime: number;
  /**
   * 查询结束时间（Unix 时间戳，秒级），必填；必须大于 StartTime
   */
  EndTime: number;
  /**
   * 资源ID数组（多选，可选）
   */
  ResourceIds?: string[];
  /**
   * 模型ID数组（多选，可选)
   */
  ModelIds?: string[];
  /**
   * 计费单位数组（多选，可选）
   */
  PricingUnits?: number[];
  /**
   * 订单类型数组（多选，可选）
   */
  OrderTypes?: number[];
  /**
   * 计费类型数组（多选，可选）
   */
  ChargeTypes?: number[];
  /**
   * 计费单元（SKU）列表（可选）
   */
  PricingSkus?: string[];
  /**
   * 产品类型列表（多选，可选），枚举值：`modelverse`、`sandbox`
   */
  ProductCodes?: string[];
  /**
   * 地域列表（多选，可选），参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
   */
  Regions?: string[];
  /**
   * 组织ID列表（可选）
   */
  OrganizationIds?: number[];
}

/**
 * ListPaidOrderSummary - 按指定维度汇总查询已完成（已支付）订单的统计数据
 */
export interface ListPaidOrderSummaryResponse {
  /**
   * 已完成订单汇总列表
   */
  Summaries: {
    /**
     * 资源ID
     */
    ResourceId?: string;
    /**
     * 计费单元（SKU）名称
     */
    PricingSKU?: string;
    /**
     * 模型ID
     */
    ModelID?: string;
    /**
     * 模型名称
     */
    ModelName?: string;
    /**
     * 计费单位（计量单元）
     */
    PricingUnit?: number;
    /**
     * 计费单位名称
     */
    PricingUnitName?: string;
    /**
     * 订单类型
     */
    OrderType?: number;
    /**
     * 订单类型显示名
     */
    OrderTypeDisplay?: string;
    /**
     * 计费类型
     */
    ChargeType?: number;
    /**
     * 订单状态（2=已支付; 3=已撤销）
     */
    Status?: number;
    /**
     * 订单状态显示名
     */
    StatusDisplay?: string;
    /**
     * 列表价（原单价）
     */
    ListPrice?: string;
    /**
     * 折后单价
     */
    DiscountPrice?: string;
    /**
     * 总用量（原始值）
     */
    SumQuantity?: number;
    /**
     * 总用量显示（格式化后的字符串，千token和百万token会进行转换）
     */
    SumQuantityDisplay?: string;
    /**
     * 总订单金额（格式化后的字符串）
     */
    SumOrderPrice?: string;
    /**
     * 总原价（格式化后的字符串）
     */
    SumOriginalPrice?: string;
    /**
     * 总现金账户扣款（仅已完成订单返回）
     */
    SumCashAccount?: string;
    /**
     * 总星力卡抵扣金额（仅已完成订单返回）
     */
    SumStarCardAccount?: string;
    /**
     * 总赠金账户扣款（仅已完成订单返回）
     */
    SumBonusAccount?: string;
    /**
     * 总代金券抵扣（仅已完成订单返回）
     */
    SumCoupon?: string;
  }[];
}

/**
 * ListPaidOrders - 查询已完成（已支付）的订单明细列表，StartTime/EndTime 必填；取数范围是 [StartTime, EndTime)，即取开始计费时间大于等于StartTime且小于EndTime的数据
 */
export interface ListPaidOrdersRequest {
  /**
   * 查询开始时间（Unix 时间戳，秒级）。与 `EndTime` 同时提供时启用自定义周期查询；EndTime 必须大于 StartTime
   */
  StartTime: number;
  /**
   * 查询结束时间（Unix 时间戳，秒级）。需与 `StartTime` 同时提供
   */
  EndTime: number;
  /**
   * 页码，从1开始
   */
  Page: number;
  /**
   * 每页数量（最小10，最大100）
   */
  PageSize: number;
  /**
   * 资源ID数组（多选，可选）
   */
  ResourceIds?: string[];
  /**
   * 模型ID数组（多选，可选）
   */
  ModelIds?: string[];
  /**
   * 计费单位数组（多选，可选）
   */
  PricingUnits?: number[];
  /**
   * 订单类型数组（多选，可选）
   */
  OrderTypes?: number[];
  /**
   * 计费 SKU 列表（可选）
   */
  PricingSkus?: string[];
  /**
   * 产品类型列表（多选，可选），枚举值：`modelverse`、`sandbox`
   */
  ProductCodes?: string[];
  /**
   * 地域列表（多选，可选），参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
   */
  Regions?: string[];
  /**
   * 组织ID列表（可选）
   */
  OrganizationIds?: number[];
}

/**
 * ListPaidOrders - 查询已完成（已支付）的订单明细列表，StartTime/EndTime 必填；取数范围是 [StartTime, EndTime)，即取开始计费时间大于等于StartTime且小于EndTime的数据
 */
export interface ListPaidOrdersResponse {
  /**
   * 当前页码
   */
  Page: number;
  /**
   * 每页数量
   */
  PageSize?: number;
  /**
   * 总记录数
   */
  Total?: number;
  /**
   * 订单列表
   */
  Orders?: {
    /**
     * 地域
     */
    Region?: string;
    /**
     * 产品类型
     */
    ProductCode?: string;
    /**
     * 产品类型显示名
     */
    ProductCodeDisplay?: string;
    /**
     * 星力卡抵扣金额
     */
    StarCardAccount?: string;
    /**
     * 订单号
     */
    OrderNo?: string;
    /**
     * 公司id
     */
    CompanyID?: number;
    /**
     * 项目ID
     */
    OrganizationID?: number;
    /**
     * 项目名称
     */
    OrganizationName?: string;
    /**
     * 用户邮箱
     */
    UserEmail?: string;
    /**
     * 计费类型
     */
    ChargeType?: number;
    /**
     * 计费类型显示名
     */
    ChargeTypeDisplay?: string;
    /**
     * 渠道
     */
    Channel?: number;
    /**
     * 币种（如：CNY、USD）
     */
    Currency?: string;
    /**
     * 币种显示名
     */
    CurrencyDisplay?: string;
    /**
     * 资源ID
     */
    ResourceID?: string;
    /**
     * 模型ID
     */
    ModelID?: string;
    /**
     * 模型名称
     */
    ModelName?: string;
    /**
     * 订单类型
     */
    OrderType?: number;
    /**
     * 订单类型显示名
     */
    OrderTypeDisplay?: string;
    /**
     * 计费单元（SKU）名称
     */
    PricingSKU?: string;
    /**
     * 用量
     */
    Quantity?: number;
    /**
     * 用量显示（含单位）
     */
    QuantityDisplay?: string;
    /**
     * 计费单位（计量单元）
     */
    PricingUnit?: number;
    /**
     * 计费单位显示名（如：千Token、张、秒）
     */
    PricingUnitDisplay?: string;
    /**
     * 列表价（原单价）
     */
    ListPrice?: string;
    /**
     * 折后价（折后单价）
     */
    DiscountPrice?: string;
    /**
     * 订单总额
     */
    OrderTotalPrice?: string;
    /**
     * 原价
     */
    OriginalPrice?: string;
    /**
     * 订单状态
     */
    Status?: number;
    /**
     * 订单状态显示名
     */
    StatusDisplay?: string;
    /**
     * 开始计费时间（Unix 时间戳，秒级）
     */
    StartTime?: number;
    /**
     * 结束计费时间（Unix 时间戳，秒级）
     */
    EndTime?: number;
    /**
     * 支付完成时间（Unix 时间戳，秒级）
     */
    PaidTime?: number;
    /**
     * 现金账户扣款金额
     */
    CashAccount?: string;
    /**
     * 赠金账户扣款金额
     */
    BonusAccount?: string;
    /**
     * 代金券抵扣金额
     */
    Coupon?: string;
    /**
     * 欠费订单号
     */
    UnpaidOrderNo?: string;
    /**
     * 地域显示名
     */
    RegionDisplay?: string;
  }[];
}

/**
 * ListUFSquareModel - 查询模型广场数据
 */
export interface ListUFSquareModelRequest {
  /**
   * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
   */
  Zone?: string;
  /**
   * 模型类型
   */
  ModelType?: string;
  /**
   * 关键字
   */
  Keyword?: string;
  /**
   * 偏移量
   */
  Offset?: number;
  /**
   * 每页数量
   */
  Limit?: number;
  /**
   * 排序字段
   */
  OrderBy?: string;
  /**
   * 排序顺序，默认倒序
   */
  Order?: string;
  /**
   * 上下文长度，数组类型，可选值 [0,4096,16384,32768,131072,256000,262144,1048576]
   */
  MaxModelLen?: number[];
  /**
   * 语言，数组类型，可选值 ["chinese", "english"]
   */
  Language?: string[];
}

/**
 * ListUFSquareModel - 查询模型广场数据
 */
export interface ListUFSquareModelResponse {
  /**
   * 总数
   */
  TotalCount: number;
  /**
   * 广场模型
   */
  SquareModels: {
    /**
     * 制造商
     */
    Manufacturer?: string;
    /**
     * 主键
     */
    Id?: string;
    /**
     * 名称
     */
    Name?: string;
    /**
     * 简要描述
     */
    SimpleDescribe?: string;
    /**
     * 详细描述
     */
    Describe?: string;
    /**
     * 语言
     */
    Language?: string[];
    /**
     * 模型长度
     */
    MaxModelLen?: number;
    /**
     * 模型类型
     */
    ModelType?: string;
    /**
     * HuggingFace 更新时间
     */
    HfUpdateTime?: number;
    /**
     * 创建时间
     */
    CreateAt?: number;
    /**
     * 更新时间
     */
    UpdateAt?: number;
    /**
     * 模型能力
     */
    SupportedCapabilities?: string[];
    /**
     * 图标
     */
    Icon?: string;
    /**
     * 定价策略
     */
    Pricing?: {
      /**
       * 输出定价
       */
      Completion?: number;
      /**
       * 提示词定价
       */
      Prompt?: number;
      /**
       * 生图定价
       */
      Image?: number;
      /**
       * 生视频定价
       */
      Video?: string;
      /**
       * 币种
       */
      Currency?: string;
      /**
       * 单位（中文），如“次” “百万”
       */
      Unit?: string;
      /**
       * 单位（English），如“Time” “Million”
       */
      UnitEn?: string;
    };
    /**
     * 价格阶梯（有序数组）
     */
    Tiers?: {
      /**
       * 该档位下的收费列表（有序数组）
       */
      Rates: {
        /**
         * 收费项描述英文描述
         */
        ChargeItemDescriptionEn: string;
        /**
         * 货币单位
         */
        Currency: string;
        /**
         * 计价单位
         */
        Unit: string;
        /**
         * 计价单位英文
         */
        UnitEn: string;
        /**
         * 收费项：input/output/thinking/tool...
         */
        ChargeItem?: string;
        /**
         * 收费项描述
         */
        ChargeItemDescription?: string;
        /**
         * 价格
         */
        Price?: string;
      }[];
      /**
       * 档位描述（例如 "标准上下文 32k"）
       */
      DescriptionEn: string;
      /**
       * 档位/条件（例如 "32k"、"128k"）
       */
      Condition?: string;
      /**
       * 档位描述（例如 "标准上下文 32k"）
       */
      Description?: string;
    }[];
  }[];
}

/**
 * ListUFSquareModelFiltersAuth - 登录状态下获取模型广场过滤器中内容
 */
export interface ListUFSquareModelFiltersAuthRequest {
  /**
   * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
   */
  Zone: string;
}

/**
 * ListUFSquareModelFiltersAuth - 登录状态下获取模型广场过滤器中内容
 */
export interface ListUFSquareModelFiltersAuthResponse {}

/**
 * ListUMInferAPIKey - 列表查询apikey
 */
export interface ListUMInferAPIKeyRequest {
  /**
   * 列表起始位置偏移量，默认为0
   */
  Offset?: number;
  /**
   * 返回数据长度，默认为20，最大100
   */
  Limit?: number;
  /**
   * 是否modelverse可用 0: 启用 1: 禁用
   */
  ModelverseDisabled?: number;
  /**
   * 是否沙盒可用 0: 启用 1: 禁用(astraflow 沙盒控制未上线，暂时无效)
   */
  SandBoxDisabled?: number;
}

/**
 * ListUMInferAPIKey - 列表查询apikey
 */
export interface ListUMInferAPIKeyResponse {
  /**
   * apikey
   */
  Data: {
    /**
     * ip白名单，换行分割的多组ip。支持IPv4和网段,输入后回车生效,最多100个, 示例: ﻿ 192.168.1.1 192.168.1.10-192.168.1.100 192.168.1.10/24
     */
    IPWhitelist: string;
    /**
     * 资源ID
     */
    KeyId?: string;
    /**
     * 名称
     */
    Name?: string;
    /**
     * 渠道id
     */
    ChannelId?: number;
    /**
     * 公司id
     */
    TopOrganizationId?: number;
    /**
     * 项目id
     */
    OrganizationId?: number;
    /**
     * 状态，1 正常
     */
    Status?: number;
    /**
     * 创建时间
     */
    CreateTime?: number;
    /**
     * 密钥值
     */
    Key?: string;
    /**
     * 过期时间的unix时间戳，-1 用不过期
     */
    ExpireTime?: number;
    /**
     * 是否modelverse可用 0: 启用 1: 禁用
     */
    ModelverseDisabled?: number;
    /**
     * 是否沙盒可用 0: 启用 1: 禁用(astraflow 沙盒控制未上线，暂时无效)
     */
    SandBoxDisabled?: number;
    /**
     * 日限额，单位随用户所在渠道。126渠道单位为美元
     */
    DailyLimitAmount?: string;
    /**
     * 日已使用额，单位随用户所在渠道。126渠道单位为美元
     */
    DailyUsedAmount?: string;
    /**
     * 月限额，单位随用户所在渠道。126渠道单位为美元
     */
    MonthlyLimitAmount?: string;
    /**
     * 月已使用额，单位随用户所在渠道。126渠道单位为美元
     */
    MonthlyUsedAmount?: string;
    /**
     * 全部模型访问开关，开启不受 GrantedModels 参数控制，关闭只能访问 GrantedModels 中添加模型
     */
    GrantAllModels?: boolean;
    /**
     * 授权的模型，英文逗号分隔，all表示所有模型都有权限
     */
    GrantedModels?: string[];
  }[];
}

/**
 * ListUMInferRequestLogs - 日志明细列表
 */
export interface ListUMInferRequestLogsRequest {
  /**
   * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
   */
  Zone: string;
  /**
   * 查询开始时间，Unix 毫秒时间戳
   */
  StartTime: number;
  /**
   * 查询结束时间，Unix 毫秒时间戳，必须大于等于 StartTime
   */
  EndTime: number;
  /**
   * 模型名称列表，用于过滤
   */
  ModelNames?: string[];
  /**
   * API Key ID 列表，用于过滤
   */
  ApiKeyIds?: string[];
  /**
   * 请求 ID，用于精确过滤
   */
  RequestId?: string;
  /**
   * 列表偏移量，默认 0
   */
  Offset?: number;
  /**
   * 返回数量，默认 20
   */
  Limit?: number;
}

/**
 * ListUMInferRequestLogs - 日志明细列表
 */
export interface ListUMInferRequestLogsResponse {
  /**
   * 日志明细列表返回数据
   */
  Data: {
    /**
     * 汇总信息
     */
    Summary?: {
      /**
       * 查询条件命中的总请求数
       */
      TotalRequests?: number;
      /**
       * 查询条件命中的失败请求数
       */
      FailedRequests?: number;
    };
    /**
     * 日志列表，数组元素为 RequestLogItem
     */
    Items?: {
      /**
       * 请求 ID
       */
      RequestId?: string;
      /**
       * 请求开始时间，Unix 毫秒时间戳
       */
      StartTime?: number;
      /**
       * 请求开始时间，可读格式
       */
      StartTimeReadable?: string;
      /**
       * 业务地域
       */
      Region?: string;
      /**
       * 模型名称
       */
      ModelName?: string;
      /**
       * API Key ID
       */
      ApiKeyId?: string;
      /**
       * API Key 名称
       */
      ApiKeyName?: string;
      /**
       * 请求总延迟，单位毫秒
       */
      Latency?: number;
      /**
       * 首 Token 延迟，单位毫秒
       */
      FirstTokenLatency?: number;
      /**
       * 输出 Token 吞吐
       */
      OutputTokenThroughput?: number;
      /**
       * HTTP 状态码
       */
      HttpStatusCode?: number;
      /**
       * 错误码
       */
      ErrorCode?: string;
      /**
       * 请求是否成功
       */
      IsSuccess?: boolean;
      /**
       * 总 Token 数
       */
      TotalTokens?: number;
      /**
       * 输入 Token 数
       */
      PromptTokens?: number;
      /**
       * 输出 Token 数
       */
      CompletionTokens?: number;
      /**
       * 缓存命中 Token 数
       */
      CacheHitTokens?: number;
      /**
       * 缓存写入 Token 数
       */
      CacheCreationTokens?: number;
      /**
       * 5 分钟缓存写入 Token 数
       */
      CacheCreation5mTokens?: number;
      /**
       * 1 小时缓存写入 Token 数
       */
      CacheCreation1hTokens?: number;
      /**
       * 是否存在推理日志
       */
      HasInferenceLog?: boolean;
    }[];
  };
}

/**
 * ListUnpaidOrderSummary - 按指定维度汇总查询欠费订单的统计数据
 */
export interface ListUnpaidOrderSummaryRequest {
  /**
   * 查询开始时间（Unix 时间戳，秒级），必填
   */
  StartTime: number;
  /**
   * 查询结束时间（Unix 时间戳，秒级），必填；必须大于 StartTime
   */
  EndTime: number;
  /**
   * Key数组（多选，可选）
   */
  ResourceIds?: string[];
  /**
   * 订单类型数组（多选，可选）
   */
  OrderTypes?: number;
  /**
   * 模型ID数组（多选，可选）
   */
  ModelIds?: string[];
  /**
   * 计费单元数组（多选，可选）
   */
  PricingUnits?: number[];
  /**
   * 计费类型数组（多选，可选）
   */
  ChargeTypes?: number[];
  /**
   * 计费单元（SKU）列表（可选）
   */
  PricingSkus?: string[];
  /**
   * 地域列表（多选，可选），参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
   */
  Regions?: string[];
  /**
   * 组织ID列表（可选）
   */
  OrganizationIds?: number[];
}

/**
 * ListUnpaidOrderSummary - 按指定维度汇总查询欠费订单的统计数据
 */
export interface ListUnpaidOrderSummaryResponse {
  /**
   * 欠费订单汇总列表
   */
  Summaries: {
    /**
     * 资源ID
     */
    ResourceId?: string;
    /**
     * 计费单元（SKU）名称
     */
    PricingSKU?: string;
    /**
     * 模型ID
     */
    ModelID?: string;
    /**
     * 模型名称
     */
    ModelName?: string;
    /**
     * 计费单位（计量单元）
     */
    PricingUnit?: number;
    /**
     * 计费单位名称
     */
    PricingUnitName?: string;
    /**
     * 订单类型
     */
    OrderType?: number;
    /**
     * 订单类型显示名
     */
    OrderTypeDisplay?: string;
    /**
     * 计费类型
     */
    ChargeType?: number;
    /**
     * 订单状态（2=已支付; 3=已撤销）
     */
    Status?: number;
    /**
     * 订单状态显示名
     */
    StatusDisplay?: string;
    /**
     * 列表价（原单价）
     */
    ListPrice?: string;
    /**
     * 折后单价
     */
    DiscountPrice?: string;
    /**
     * 总用量（原始值）
     */
    SumQuantity?: number;
    /**
     * 总用量显示（格式化后的字符串，千token和百万token会进行转换）
     */
    SumQuantityDisplay?: string;
    /**
     * 总订单金额（格式化后的字符串）
     */
    SumOrderPrice?: string;
    /**
     * 总原价（格式化后的字符串）
     */
    SumOriginalPrice?: string;
    /**
     * 总现金账户扣款（仅已完成订单返回）
     */
    SumCashAccount?: string;
    /**
     * 总星力卡抵扣金额（仅已完成订单返回）
     */
    SumStarCardAccount?: string;
    /**
     * 总赠金账户扣款（仅已完成订单返回）
     */
    SumBonusAccount?: string;
    /**
     * 总代金券抵扣（仅已完成订单返回）
     */
    SumCoupon?: string;
  }[];
}

/**
 * ListUnpaidOrders - 查询当前欠费（未支付）的订单明细列表
 */
export interface ListUnpaidOrdersRequest {
  /**
   * 查询结束时间（Unix 时间戳，秒级）。需与 `StartTime` 同时提供
   */
  EndTime: number;
  /**
   * 查询开始时间（Unix 时间戳，秒级）。与 `EndTime` 同时提供时启用自定义周期查询；EndTime 必须大于 StartTime
   */
  StartTime: number;
  /**
   * 每页数量（最小10，最大100）
   */
  PageSize: number;
  /**
   * 页码,从1开始
   */
  Page: number;
  /**
   * key数组（多选，可选）
   */
  ResourceIds?: string[];
  /**
   * 模型ID数组（多选，可选）
   */
  ModelIds?: string[];
  /**
   * 计费单元数组（多选，可选）
   */
  PricingUnits?: number[];
  /**
   * 订单类型数组（多选，可选）
   */
  OrderTypes?: number[];
  /**
   * 地域列表（多选，可选），参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
   */
  Regions?: string[];
  /**
   * 计费 SKU 列表（可选）
   */
  PricingSkus?: string[];
  /**
   * 产品类型列表（多选，可选），枚举值：`modelverse`、`sandbox`
   */
  ProductCodes?: string[];
}

/**
 * ListUnpaidOrders - 查询当前欠费（未支付）的订单明细列表
 */
export interface ListUnpaidOrdersResponse {
  /**
   * 欠费订单明细列表
   */
  Orders: {
    /**
     * 地域代码
     */
    Region?: string;
    /**
     * 订单号
     */
    OrderNo?: string;
    /**
     * 来源订单号
     */
    SourceOrderNo?: string;
    /**
     * 公司id
     */
    CompanyID?: number;
    /**
     * 组织ID
     */
    OrganizationID?: number;
    /**
     * 组织名称
     */
    OrganizationName?: string;
    /**
     * 用户邮箱
     */
    UserEmail?: string;
    /**
     * 计费类型
     */
    ChargeType?: number;
    /**
     * 计价方式显示名
     */
    ChargeTypeDisplay?: string;
    /**
     * 渠道
     */
    Channel?: number;
    /**
     * 币种（如：CNY、USD）
     */
    Currency?: string;
    /**
     * 币种显示名
     */
    CurrencyDisplay?: string;
    /**
     * 模型key
     */
    ResourceID?: string;
    /**
     * 资源类型
     */
    ResourceType?: number;
    /**
     * 资源类型显示名
     */
    ResourceTypeDisplay?: string;
    /**
     * 模型ID
     */
    ModelID?: string;
    /**
     * 模型名称
     */
    ModelName?: string;
    /**
     * 订单类型
     */
    OrderType?: number;
    /**
     * 订单类型显示名
     */
    OrderTypeDisplay?: string;
    /**
     * 计费单元（SKU）名称
     */
    PricingSKU?: string;
    /**
     * 用量
     */
    Quantity?: number;
    /**
     * 用量显示（含单位）
     */
    QuantityDisplay?: string;
    /**
     * 计费单位（计量单元）
     */
    PricingUnit?: number;
    /**
     * 计费单位显示名（如：千Token、张、秒）
     */
    PricingUnitDisplay?: string;
    /**
     * 列表价（原单价）
     */
    ListPrice?: string;
    /**
     * 折后价（折后单价）
     */
    DiscountPrice?: string;
    /**
     * 订单总额
     */
    OrderTotalPrice?: string;
    /**
     * 原价
     */
    OriginalPrice?: string;
    /**
     * 订单状态
     */
    Status?: number;
    /**
     * 订单状态显示名
     */
    StatusDisplay?: string;
    /**
     * 创建订单时间（Unix 时间戳，秒级）
     */
    CreateTime?: string;
    /**
     * 开始计费时间（Unix 时间戳，秒级）
     */
    StartTime?: number;
    /**
     * 结束计费时间（Unix 时间戳，秒级）
     */
    EndTime?: number;
    /**
     * 订单支付时间（Unix 时间戳，秒级）
     */
    PaidTime?: number;
    /**
     * 撤销时间（Unix 时间戳，秒级）
     */
    RevocationTime?: string;
    /**
     * 地域显示名
     */
    RegionDisplay?: string;
    /**
     * 产品类型
     */
    ProductCode?: string;
    /**
     * 产品类型显示名
     */
    ProductCodeDisplay?: string;
  }[];
}

/**
 * StartPayUnpaidOrders - 批量支付欠费订单，指定 OrderNos 支付，最多 50 个
 */
export interface StartPayUnpaidOrdersRequest {
  /**
   * 欠费订单号列表，最多 50 个
   */
  OrderNos: string[];
}

/**
 * StartPayUnpaidOrders - 批量支付欠费订单，指定 OrderNos 支付，最多 50 个
 */
export interface StartPayUnpaidOrdersResponse {
  /**
   * 支付成功数量
   */
  SuccessCount: number;
  /**
   * 支付失败数量
   */
  FailureCount: number;
  /**
   * 支付结果
   */
  Results?: {
    /**
     * 订单号
     */
    OrderNo?: string;
    /**
     * 是否支付成功
     */
    Success?: boolean;
    /**
     * 失败原因（成功时为空）
     */
    Reason?: string;
  };
}

/**
 * UpdateUMInferAPIKey - 更新apikey
 */
export interface UpdateUMInferAPIKeyRequest {
  /**
   * apikey的id
   */
  KeyId: string;
  /**
   * 更新的名称
   */
  Name?: string;
  /**
   * 是否modelverse可用 0: 启用 1: 禁用
   */
  ModelverseDisabled?: number;
  /**
   * 是否沙盒可用 0: 启用 1: 禁用
   */
  SandBoxDisabled?: number;
  /**
   * 日限额，单位随用户所在渠道。126渠道单位为美元
   */
  DailyLimitAmount?: string;
  /**
   * 月限额，单位随用户所在渠道。126渠道单位为美元
   */
  MonthlyLimitAmount?: string;
  /**
   * 全部模型访问开关，开启不受 GrantedModels 参数控制，关闭只能访问 GrantedModels 中添加模型
   */
  GrantAllModels?: boolean;
  /**
   * 授权模型，内容为数组格式。当 GrantAllModels 为false时 当前key只可访问数组中模型。例：["deepseek-ai/DeepSeek-V3.2-Think"]
   */
  GrantedModels?: string;
  /**
   * ip白名单，换行分割的多组ip。支持IPv4和网段,输入后回车生效,最多100个, 示例: ﻿ 192.168.1.1 192.168.1.10-192.168.1.100 192.168.1.10/24
   */
  IPWhitelist?: string;
}

/**
 * UpdateUMInferAPIKey - 更新apikey
 */
export interface UpdateUMInferAPIKeyResponse {
  /**
   * apikey 的id
   */
  UminferID?: string;
}
