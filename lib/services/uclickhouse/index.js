"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("../../core/client"));
const request_1 = __importDefault(require("../../core/request"));
/**
 * This client is used to call actions of **uclickhouse** service
 */
class UClickhouseClient extends client_1.default {
    constructor({ config, credential, }) {
        super({ config, credential });
    }
    /**
     * CreateUClickhouseCluster - 创建UClickhouse集群
     *
     * See also: https://docs.ucloud.cn/api/uclickhouse-api/create_u_clickhouse_cluster
     */
    createUClickhouseCluster(request) {
        const args = Object.assign({ Action: 'CreateUClickhouseCluster' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUClickhouseCluster - 获取集群信息
     *
     * See also: https://docs.ucloud.cn/api/uclickhouse-api/describe_u_clickhouse_cluster
     */
    describeUClickhouseCluster(request) {
        const args = Object.assign({ Action: 'DescribeUClickhouseCluster' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DestroyUClickhouseCluster - 删除CK集群
     *
     * See also: https://docs.ucloud.cn/api/uclickhouse-api/destroy_u_clickhouse_cluster
     */
    destroyUClickhouseCluster(request) {
        const args = Object.assign({ Action: 'DestroyUClickhouseCluster' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ExpandUClickhouseCluster - 集群水平扩容
     *
     * See also: https://docs.ucloud.cn/api/uclickhouse-api/expand_u_clickhouse_cluster
     */
    expandUClickhouseCluster(request) {
        const args = Object.assign({ Action: 'ExpandUClickhouseCluster' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUClickhouseClusterCreateOption - 获取Clickhouse的创建配置项
     *
     * See also: https://docs.ucloud.cn/api/uclickhouse-api/get_u_clickhouse_cluster_create_option
     */
    getUClickhouseClusterCreateOption(request) {
        const args = Object.assign({ Action: 'GetUClickhouseClusterCreateOption' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ListUClickhouseCluster - 获取UClickhouse集群列表
     *
     * See also: https://docs.ucloud.cn/api/uclickhouse-api/list_u_clickhouse_cluster
     */
    listUClickhouseCluster(request) {
        const args = Object.assign({ Action: 'ListUClickhouseCluster' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ResizeUClickhouseCluster - 集群改配
     *
     * See also: https://docs.ucloud.cn/api/uclickhouse-api/resize_u_clickhouse_cluster
     */
    resizeUClickhouseCluster(request) {
        const args = Object.assign({ Action: 'ResizeUClickhouseCluster' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * RestartUClickhouseClusterService - 重启集群的UClickhouse服务
     *
     * See also: https://docs.ucloud.cn/api/uclickhouse-api/restart_u_clickhouse_cluster_service
     */
    restartUClickhouseClusterService(request) {
        const args = Object.assign({ Action: 'RestartUClickhouseClusterService' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
}
exports.default = UClickhouseClient;
