"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("../../core/client"));
const request_1 = __importDefault(require("../../core/request"));
/**
 * This client is used to call actions of **ulogservice** service
 */
class ULogServiceClient extends client_1.default {
    constructor({ config, credential, }) {
        super({ config, credential });
    }
    /**
     * BindULogServiceGroupToCollectConf - 日志主题采集配置绑定机器组
     *
     * See also: https://docs.ucloud.cn/api/ulogservice-api/bind_u_log_service_group_to_collect_conf
     */
    bindULogServiceGroupToCollectConf(request) {
        const args = Object.assign({ Action: 'BindULogServiceGroupToCollectConf' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateULogServiceCollectConf - 创建日志主题采集配置
     *
     * See also: https://docs.ucloud.cn/api/ulogservice-api/create_u_log_service_collect_conf
     */
    createULogServiceCollectConf(request) {
        const args = Object.assign({ Action: 'CreateULogServiceCollectConf' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateULogServiceLogSet - 创建日志集
     *
     * See also: https://docs.ucloud.cn/api/ulogservice-api/create_u_log_service_log_set
     */
    createULogServiceLogSet(request) {
        const args = Object.assign({ Action: 'CreateULogServiceLogSet' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateULogServiceMachineGroup - 创建机器组
     *
     * See also: https://docs.ucloud.cn/api/ulogservice-api/create_u_log_service_machine_group
     */
    createULogServiceMachineGroup(request) {
        const args = Object.assign({ Action: 'CreateULogServiceMachineGroup' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateULogServiceTopic - 创建ULogService主题
     *
     * See also: https://docs.ucloud.cn/api/ulogservice-api/create_u_log_service_topic
     */
    createULogServiceTopic(request) {
        const args = Object.assign({ Action: 'CreateULogServiceTopic' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteULogServiceCollectConf - 删除日志主题采集配置
     *
     * See also: https://docs.ucloud.cn/api/ulogservice-api/delete_u_log_service_collect_conf
     */
    deleteULogServiceCollectConf(request) {
        const args = Object.assign({ Action: 'DeleteULogServiceCollectConf' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteULogServiceLogSet - 删除日志集
     *
     * See also: https://docs.ucloud.cn/api/ulogservice-api/delete_u_log_service_log_set
     */
    deleteULogServiceLogSet(request) {
        const args = Object.assign({ Action: 'DeleteULogServiceLogSet' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteULogServiceMachineGroup - 删除机器组
     *
     * See also: https://docs.ucloud.cn/api/ulogservice-api/delete_u_log_service_machine_group
     */
    deleteULogServiceMachineGroup(request) {
        const args = Object.assign({ Action: 'DeleteULogServiceMachineGroup' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteULogServiceTopic - 删除ULogService主题
     *
     * See also: https://docs.ucloud.cn/api/ulogservice-api/delete_u_log_service_topic
     */
    deleteULogServiceTopic(request) {
        const args = Object.assign({ Action: 'DeleteULogServiceTopic' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeULogServiceMachineGroup - 查询日志采集机器组
     *
     * See also: https://docs.ucloud.cn/api/ulogservice-api/describe_u_log_service_machine_group
     */
    describeULogServiceMachineGroup(request) {
        const args = Object.assign({ Action: 'DescribeULogServiceMachineGroup' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetULogServiceTopicField - 获取ULogService主题索引字段
     *
     * See also: https://docs.ucloud.cn/api/ulogservice-api/get_u_log_service_topic_field
     */
    getULogServiceTopicField(request) {
        const args = Object.assign({ Action: 'GetULogServiceTopicField' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ListULogServiceCollectConf - 查询日志主题采集配置列表
     *
     * See also: https://docs.ucloud.cn/api/ulogservice-api/list_u_log_service_collect_conf
     */
    listULogServiceCollectConf(request) {
        const args = Object.assign({ Action: 'ListULogServiceCollectConf' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ListULogServiceLogSet - 查询日志集列表
     *
     * See also: https://docs.ucloud.cn/api/ulogservice-api/list_u_log_service_log_set
     */
    listULogServiceLogSet(request) {
        const args = Object.assign({ Action: 'ListULogServiceLogSet' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ListULogServiceMachineGroup - 查看机器组列表
     *
     * See also: https://docs.ucloud.cn/api/ulogservice-api/list_u_log_service_machine_group
     */
    listULogServiceMachineGroup(request) {
        const args = Object.assign({ Action: 'ListULogServiceMachineGroup' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ListULogServiceTopic - 获取ULogService主题
     *
     * See also: https://docs.ucloud.cn/api/ulogservice-api/list_u_log_service_topic
     */
    listULogServiceTopic(request) {
        const args = Object.assign({ Action: 'ListULogServiceTopic' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * QueryULogServiceLog - 查询ULogService日志
     *
     * See also: https://docs.ucloud.cn/api/ulogservice-api/query_u_log_service_log
     */
    queryULogServiceLog(request) {
        const args = Object.assign({ Action: 'QueryULogServiceLog' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateULogServiceCollectConf - 修改日志主题采集配置
     *
     * See also: https://docs.ucloud.cn/api/ulogservice-api/update_u_log_service_collect_conf
     */
    updateULogServiceCollectConf(request) {
        const args = Object.assign({ Action: 'UpdateULogServiceCollectConf' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateULogServiceMachineGroup - 更新日志机器组
     *
     * See also: https://docs.ucloud.cn/api/ulogservice-api/update_u_log_service_machine_group
     */
    updateULogServiceMachineGroup(request) {
        const args = Object.assign({ Action: 'UpdateULogServiceMachineGroup' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateULogServiceTopicField - 更新ULogService主题索引字段
     *
     * See also: https://docs.ucloud.cn/api/ulogservice-api/update_u_log_service_topic_field
     */
    updateULogServiceTopicField(request) {
        const args = Object.assign({ Action: 'UpdateULogServiceTopicField' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
}
exports.default = ULogServiceClient;
