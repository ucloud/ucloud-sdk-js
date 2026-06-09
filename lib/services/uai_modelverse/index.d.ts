import Client from '../../core/client';
import { ConfigOptions } from '../../core/config';
import { CredentialOptions } from '../../core/credential';
/**
 * This client is used to call actions of **uai_modelverse** service
 */
export default class UAIModelverseClient extends Client {
    constructor({ config, credential, }: {
        config: ConfigOptions;
        credential: CredentialOptions;
    });
    /**
     * CreateUMInferAPIKey - 创建apikey
     *
     * See also: https://docs.ucloud.cn/api/uai-modelverse-api/create_um_infer_api_key
     */
    createUMInferAPIKey(request?: CreateUMInferAPIKeyRequest): Promise<CreateUMInferAPIKeyResponse>;
    /**
     * DeleteUMInferAPIKey - 删除apikey
     *
     * See also: https://docs.ucloud.cn/api/uai-modelverse-api/delete_um_infer_api_key
     */
    deleteUMInferAPIKey(request?: DeleteUMInferAPIKeyRequest): Promise<DeleteUMInferAPIKeyResponse>;
    /**
     * DownloadListPaidOrders - 生成已完成（已支付）订单明细 Excel 文件并返回 US3 预签名下载链接；查询条件与 ListPaidOrders 完全一致，StartTime/EndTime 必填；取数范围是 [StartTime, EndTime)，即取开始计费时间大于等于StartTime且小于EndTime的数据
     *
     * See also: https://docs.ucloud.cn/api/uai-modelverse-api/download_list_paid_orders
     */
    downloadListPaidOrders(request?: DownloadListPaidOrdersRequest): Promise<DownloadListPaidOrdersResponse>;
    /**
     * DownloadListUnpaidOrders - 生成欠费（未支付）订单明细 Excel 文件并返回 US3 预签名下载链接；查询条件与 ListUnpaidOrders 完全一致，StartTime/EndTime 必填
     *
     * See also: https://docs.ucloud.cn/api/uai-modelverse-api/download_list_unpaid_orders
     */
    downloadListUnpaidOrders(request?: DownloadListUnpaidOrdersRequest): Promise<DownloadListUnpaidOrdersResponse>;
    /**
     * DownloadOrderSummary - 生成订单汇总 Excel 文件（包含已完成订单和欠费订单两个 sheet），返回 US3 预签名下载链接；StartTime/EndTime 必填
     *
     * See also: https://docs.ucloud.cn/api/uai-modelverse-api/download_order_summary
     */
    downloadOrderSummary(request?: DownloadOrderSummaryRequest): Promise<DownloadOrderSummaryResponse>;
    /**
     * GetFilterOptions - 查询可用于订单筛选的资源、模型、地域等选项列表
     *
     * See also: https://docs.ucloud.cn/api/uai-modelverse-api/get_filter_options
     */
    getFilterOptions(request?: GetFilterOptionsRequest): Promise<GetFilterOptionsResponse>;
    /**
     * GetOrderAmount - 查询指定条件下订单的金额汇总及数量统计
     *
     * See also: https://docs.ucloud.cn/api/uai-modelverse-api/get_order_amount
     */
    getOrderAmount(request?: GetOrderAmountRequest): Promise<GetOrderAmountResponse>;
    /**
     * GetUMInferAPIModel - 获取该apikey能调用api的模型列表
     *
     * See also: https://docs.ucloud.cn/api/uai-modelverse-api/get_um_infer_api_model
     */
    getUMInferAPIModel(request?: GetUMInferAPIModelRequest): Promise<GetUMInferAPIModelResponse>;
    /**
     * GetUMInferTokenUsage - 获取某个key下的某个模型的token使用量
     *
     * See also: https://docs.ucloud.cn/api/uai-modelverse-api/get_um_infer_token_usage
     */
    getUMInferTokenUsage(request?: GetUMInferTokenUsageRequest): Promise<GetUMInferTokenUsageResponse>;
    /**
     * ListPaidOrderSummary - 按指定维度汇总查询已完成（已支付）订单的统计数据
     *
     * See also: https://docs.ucloud.cn/api/uai-modelverse-api/list_paid_order_summary
     */
    listPaidOrderSummary(request?: ListPaidOrderSummaryRequest): Promise<ListPaidOrderSummaryResponse>;
    /**
     * ListPaidOrders - 查询已完成（已支付）的订单明细列表，StartTime/EndTime 必填；取数范围是 [StartTime, EndTime)，即取开始计费时间大于等于StartTime且小于EndTime的数据
     *
     * See also: https://docs.ucloud.cn/api/uai-modelverse-api/list_paid_orders
     */
    listPaidOrders(request?: ListPaidOrdersRequest): Promise<ListPaidOrdersResponse>;
    /**
     * ListUFSquareModel - 查询模型广场数据
     *
     * See also: https://docs.ucloud.cn/api/uai-modelverse-api/list_uf_square_model
     */
    listUFSquareModel(request?: ListUFSquareModelRequest): Promise<ListUFSquareModelResponse>;
    /**
     * ListUMInferAPIKey - 列表查询apikey
     *
     * See also: https://docs.ucloud.cn/api/uai-modelverse-api/list_um_infer_api_key
     */
    listUMInferAPIKey(request?: ListUMInferAPIKeyRequest): Promise<ListUMInferAPIKeyResponse>;
    /**
     * ListUnpaidOrderSummary - 按指定维度汇总查询欠费订单的统计数据
     *
     * See also: https://docs.ucloud.cn/api/uai-modelverse-api/list_unpaid_order_summary
     */
    listUnpaidOrderSummary(request?: ListUnpaidOrderSummaryRequest): Promise<ListUnpaidOrderSummaryResponse>;
    /**
     * ListUnpaidOrders - 查询当前欠费（未支付）的订单明细列表
     *
     * See also: https://docs.ucloud.cn/api/uai-modelverse-api/list_unpaid_orders
     */
    listUnpaidOrders(request?: ListUnpaidOrdersRequest): Promise<ListUnpaidOrdersResponse>;
    /**
     * UpdateUMInferAPIKey - 更新apikey
     *
     * See also: https://docs.ucloud.cn/api/uai-modelverse-api/update_um_infer_api_key
     */
    updateUMInferAPIKey(request?: UpdateUMInferAPIKeyRequest): Promise<UpdateUMInferAPIKeyResponse>;
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
 * GetUMInferAPIModel - 获取该apikey能调用api的模型列表
 */
export interface GetUMInferAPIModelRequest {
    /**
     * apikey 的id
     */
    KeyId?: string;
    /**
     * 模型类型，1: 文本生成，2: 图片生成。
     */
    ModelType?: number;
    /**
     * 模型广场的id，用来跳转体验中心
     */
    SquareId?: string;
}
/**
 * GetUMInferAPIModel - 获取该apikey能调用api的模型列表
 */
export interface GetUMInferAPIModelResponse {
    /**
     * 模型名称的字符串列表
     */
    Data: {
        /**
         * 使用OpenAI接口调用时，填入的 model值
         */
        ServedModelName?: string;
        /**
         * id
         */
        Id?: string;
        /**
         * 名称
         */
        Name?: string;
        /**
         * 描述
         */
        SimpleDescribe?: string;
        /**
         * 语言
         */
        Language?: string[];
        /**
         * 图标链接
         */
        Icon?: string;
        /**
         * 模型价格
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
             * 币种
             */
            Currency?: string;
        };
        /**
         * 创建时间
         */
        CreateAt?: number;
        /**
         * 更新时间
         */
        UpdateAt?: number;
    }[];
}
/**
 * GetUMInferTokenUsage - 获取某个key下的某个模型的token使用量
 */
export interface GetUMInferTokenUsageRequest {
    /**
     * apikey的id
     */
    KeyId: string;
    /**
     * 模型名称
     */
    Model: string;
    /**
     * 开始时间戳
     */
    StartTime: number;
    /**
     * 结束时间戳
     */
    EndTime: number;
}
/**
 * GetUMInferTokenUsage - 获取某个key下的某个模型的token使用量
 */
export interface GetUMInferTokenUsageResponse {
    /**
     * token使用详情
     */
    Data: {
        /**
         * 总token量
         */
        Total?: number;
        /**
         * 输出总token
         */
        InTotal?: number;
        /**
         * 输出总token
         */
        OutTotal?: number;
        /**
         * 生图总张数
         */
        ImageGenerationNum?: number;
        /**
         * 请求总次数
         */
        RequestTotal?: number;
        /**
         * 每个时间戳的token使用量
         */
        Usages?: {
            /**
             * 类型，in输入 out输出 total总  request_count 请求次数 image_generation 生图张数
             */
            Type?: string;
            /**
             * 数量
             */
            Count?: number;
            /**
             * unix时间戳
             */
            Timestamp?: number;
            /**
             * 模型名称
             */
            Model?: string;
        }[];
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
             * 币种
             */
            Currency?: string;
        };
    }[];
}
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
