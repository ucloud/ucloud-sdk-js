"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("../../core/client"));
const request_1 = __importDefault(require("../../core/request"));
/**
 * This client is used to call actions of **cloudwatch** service
 */
class CloudWatchClient extends client_1.default {
    constructor({ config, credential, }) {
        super({ config, credential });
    }
    /**
     * BindAlertStrategy - 绑定告警策略
     *
     * See also: https://docs.ucloud.cn/api/cloudwatch-api/bind_alert_strategy
     */
    bindAlertStrategy(request) {
        const args = Object.assign({ Action: 'BindAlertStrategy' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateAlertStrategy - 创建告警策略
     *
     * See also: https://docs.ucloud.cn/api/cloudwatch-api/create_alert_strategy
     */
    createAlertStrategy(request) {
        const args = Object.assign({ Action: 'CreateAlertStrategy' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateAlertStrategyTemplate - 新建条件模板
     *
     * See also: https://docs.ucloud.cn/api/cloudwatch-api/create_alert_strategy_template
     */
    createAlertStrategyTemplate(request) {
        const args = Object.assign({ Action: 'CreateAlertStrategyTemplate' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteAlertStrategyTemplate - 删除告警条件模板
     *
     * See also: https://docs.ucloud.cn/api/cloudwatch-api/delete_alert_strategy_template
     */
    deleteAlertStrategyTemplate(request) {
        const args = Object.assign({ Action: 'DeleteAlertStrategyTemplate' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * EnableAlertStrategy - 是否启用告警策略
     *
     * See also: https://docs.ucloud.cn/api/cloudwatch-api/enable_alert_strategy
     */
    enableAlertStrategy(request) {
        const args = Object.assign({ Action: 'EnableAlertStrategy' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetMetricDataAggregationMethod - 获取指标数据聚合方式
     *
     * See also: https://docs.ucloud.cn/api/cloudwatch-api/get_metric_data_aggregation_method
     */
    getMetricDataAggregationMethod(request) {
        const args = Object.assign({ Action: 'GetMetricDataAggregationMethod' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetProductMetrics - 获取云产品关联的指标列表
     *
     * See also: https://docs.ucloud.cn/api/cloudwatch-api/get_product_metrics
     */
    getProductMetrics(request) {
        const args = Object.assign({ Action: 'GetProductMetrics' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ListAlertRecord - 获取时间段内的告警记录
     *
     * See also: https://docs.ucloud.cn/api/cloudwatch-api/list_alert_record
     */
    listAlertRecord(request) {
        const args = Object.assign({ Action: 'ListAlertRecord' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ListAlertStrategy - 获取告警策略列表
     *
     * See also: https://docs.ucloud.cn/api/cloudwatch-api/list_alert_strategy
     */
    listAlertStrategy(request) {
        const args = Object.assign({ Action: 'ListAlertStrategy' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ListAlertStrategyTemplate - 条件模板列表
     *
     * See also: https://docs.ucloud.cn/api/cloudwatch-api/list_alert_strategy_template
     */
    listAlertStrategyTemplate(request) {
        const args = Object.assign({ Action: 'ListAlertStrategyTemplate' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ListMonitorProduct - 获取监控对象类型列表
     *
     * See also: https://docs.ucloud.cn/api/cloudwatch-api/list_monitor_product
     */
    listMonitorProduct(request) {
        const args = Object.assign({ Action: 'ListMonitorProduct' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ModifyAlertStrategyRemark - 修改告警策略备注
     *
     * See also: https://docs.ucloud.cn/api/cloudwatch-api/modify_alert_strategy_remark
     */
    modifyAlertStrategyRemark(request) {
        const args = Object.assign({ Action: 'ModifyAlertStrategyRemark' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * QueryMetricDataSet - 查询监控指标数据集
     *
     * See also: https://docs.ucloud.cn/api/cloudwatch-api/query_metric_data_set
     */
    queryMetricDataSet(request) {
        const args = Object.assign({ Action: 'QueryMetricDataSet' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * QueryMetricDataSummary - 获取资源看图属性列表
     *
     * See also: https://docs.ucloud.cn/api/cloudwatch-api/query_metric_data_summary
     */
    queryMetricDataSummary(request) {
        const args = Object.assign({ Action: 'QueryMetricDataSummary' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UnBindAlertStrategy - 解绑告警策略
     *
     * See also: https://docs.ucloud.cn/api/cloudwatch-api/un_bind_alert_strategy
     */
    unBindAlertStrategy(request) {
        const args = Object.assign({ Action: 'UnBindAlertStrategy' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateAlertStrategy - 更新告警策略
     *
     * See also: https://docs.ucloud.cn/api/cloudwatch-api/update_alert_strategy
     */
    updateAlertStrategy(request) {
        const args = Object.assign({ Action: 'UpdateAlertStrategy' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateAlertStrategyTemplate - 编辑条件模板
     *
     * See also: https://docs.ucloud.cn/api/cloudwatch-api/update_alert_strategy_template
     */
    updateAlertStrategyTemplate(request) {
        const args = Object.assign({ Action: 'UpdateAlertStrategyTemplate' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
}
exports.default = CloudWatchClient;
