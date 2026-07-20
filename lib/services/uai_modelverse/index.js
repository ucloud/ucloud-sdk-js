"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("../../core/client"));
const request_1 = __importDefault(require("../../core/request"));
/**
 * This client is used to call actions of **uai_modelverse** service
 */
class UAIModelverseClient extends client_1.default {
    constructor({ config, credential, }) {
        super({ config, credential });
    }
    /**
     * CreateUMInferAPIKey - 创建apikey
     *
     * See also: https://docs.ucloud.cn/api/uai-modelverse-api/create_um_infer_api_key
     */
    createUMInferAPIKey(request) {
        const args = Object.assign({ Action: 'CreateUMInferAPIKey' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteUMInferAPIKey - 删除apikey
     *
     * See also: https://docs.ucloud.cn/api/uai-modelverse-api/delete_um_infer_api_key
     */
    deleteUMInferAPIKey(request) {
        const args = Object.assign({ Action: 'DeleteUMInferAPIKey' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DownloadListPaidOrders - 生成已完成（已支付）订单明细 Excel 文件并返回 US3 预签名下载链接；查询条件与 ListPaidOrders 完全一致，StartTime/EndTime 必填；取数范围是 [StartTime, EndTime)，即取开始计费时间大于等于StartTime且小于EndTime的数据
     *
     * See also: https://docs.ucloud.cn/api/uai-modelverse-api/download_list_paid_orders
     */
    downloadListPaidOrders(request) {
        const args = Object.assign({ Action: 'DownloadListPaidOrders' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DownloadListUnpaidOrders - 生成欠费（未支付）订单明细 Excel 文件并返回 US3 预签名下载链接；查询条件与 ListUnpaidOrders 完全一致，StartTime/EndTime 必填
     *
     * See also: https://docs.ucloud.cn/api/uai-modelverse-api/download_list_unpaid_orders
     */
    downloadListUnpaidOrders(request) {
        const args = Object.assign({ Action: 'DownloadListUnpaidOrders' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DownloadOrderSummary - 生成订单汇总 Excel 文件（包含已完成订单和欠费订单两个 sheet），返回 US3 预签名下载链接；StartTime/EndTime 必填
     *
     * See also: https://docs.ucloud.cn/api/uai-modelverse-api/download_order_summary
     */
    downloadOrderSummary(request) {
        const args = Object.assign({ Action: 'DownloadOrderSummary' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DownloadUMInferRequestLog - 导出推理请求日志。单次导出时间范围最长 30 天，最多导出 2000 万条日志；同一 TopOrganizationID 同一时间仅允许 1 个导出任务在执行，已有任务执行中时请稍后重试。
     *
     * See also: https://docs.ucloud.cn/api/uai-modelverse-api/download_um_infer_request_log
     */
    downloadUMInferRequestLog(request) {
        const args = Object.assign({ Action: 'DownloadUMInferRequestLog' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetFilterOptions - 查询可用于订单筛选的资源、模型、地域等选项列表
     *
     * See also: https://docs.ucloud.cn/api/uai-modelverse-api/get_filter_options
     */
    getFilterOptions(request) {
        const args = Object.assign({ Action: 'GetFilterOptions' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetOrderAmount - 查询指定条件下订单的金额汇总及数量统计
     *
     * See also: https://docs.ucloud.cn/api/uai-modelverse-api/get_order_amount
     */
    getOrderAmount(request) {
        const args = Object.assign({ Action: 'GetOrderAmount' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUFSquareModelDetail - 获取广场模型详情
     *
     * See also: https://docs.ucloud.cn/api/uai-modelverse-api/get_uf_square_model_detail
     */
    getUFSquareModelDetail(request) {
        const args = Object.assign({ Action: 'GetUFSquareModelDetail' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUFSquareModelPrices - 批量查询模型价格
     *
     * See also: https://docs.ucloud.cn/api/uai-modelverse-api/get_uf_square_model_prices
     */
    getUFSquareModelPrices(request) {
        const args = Object.assign({ Action: 'GetUFSquareModelPrices' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUMInferRequestLogDetail - 原始日志详情
     *
     * See also: https://docs.ucloud.cn/api/uai-modelverse-api/get_um_infer_request_log_detail
     */
    getUMInferRequestLogDetail(request) {
        const args = Object.assign({ Action: 'GetUMInferRequestLogDetail' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ListPaidOrderSummary - 按指定维度汇总查询已完成（已支付）订单的统计数据
     *
     * See also: https://docs.ucloud.cn/api/uai-modelverse-api/list_paid_order_summary
     */
    listPaidOrderSummary(request) {
        const args = Object.assign({ Action: 'ListPaidOrderSummary' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ListPaidOrders - 查询已完成（已支付）的订单明细列表，StartTime/EndTime 必填；取数范围是 [StartTime, EndTime)，即取开始计费时间大于等于StartTime且小于EndTime的数据
     *
     * See also: https://docs.ucloud.cn/api/uai-modelverse-api/list_paid_orders
     */
    listPaidOrders(request) {
        const args = Object.assign({ Action: 'ListPaidOrders' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ListUFSquareModel - 查询模型广场数据
     *
     * See also: https://docs.ucloud.cn/api/uai-modelverse-api/list_uf_square_model
     */
    listUFSquareModel(request) {
        const args = Object.assign({ Action: 'ListUFSquareModel' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ListUFSquareModelFiltersAuth - 登录状态下获取模型广场过滤器中内容
     *
     * See also: https://docs.ucloud.cn/api/uai-modelverse-api/list_uf_square_model_filters_auth
     */
    listUFSquareModelFiltersAuth(request) {
        const args = Object.assign({ Action: 'ListUFSquareModelFiltersAuth' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ListUMInferAPIKey - 列表查询apikey
     *
     * See also: https://docs.ucloud.cn/api/uai-modelverse-api/list_um_infer_api_key
     */
    listUMInferAPIKey(request) {
        const args = Object.assign({ Action: 'ListUMInferAPIKey' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ListUMInferRequestLogs - 日志明细列表
     *
     * See also: https://docs.ucloud.cn/api/uai-modelverse-api/list_um_infer_request_logs
     */
    listUMInferRequestLogs(request) {
        const args = Object.assign({ Action: 'ListUMInferRequestLogs' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ListUnpaidOrderSummary - 按指定维度汇总查询欠费订单的统计数据
     *
     * See also: https://docs.ucloud.cn/api/uai-modelverse-api/list_unpaid_order_summary
     */
    listUnpaidOrderSummary(request) {
        const args = Object.assign({ Action: 'ListUnpaidOrderSummary' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ListUnpaidOrders - 查询当前欠费（未支付）的订单明细列表
     *
     * See also: https://docs.ucloud.cn/api/uai-modelverse-api/list_unpaid_orders
     */
    listUnpaidOrders(request) {
        const args = Object.assign({ Action: 'ListUnpaidOrders' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * StartPayUnpaidOrders - 批量支付欠费订单，指定 OrderNos 支付，最多 50 个
     *
     * See also: https://docs.ucloud.cn/api/uai-modelverse-api/start_pay_unpaid_orders
     */
    startPayUnpaidOrders(request) {
        const args = Object.assign({ Action: 'StartPayUnpaidOrders' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateUMInferAPIKey - 更新apikey
     *
     * See also: https://docs.ucloud.cn/api/uai-modelverse-api/update_um_infer_api_key
     */
    updateUMInferAPIKey(request) {
        const args = Object.assign({ Action: 'UpdateUMInferAPIKey' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
}
exports.default = UAIModelverseClient;
