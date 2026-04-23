"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("../../core/client"));
const request_1 = __importDefault(require("../../core/request"));
/**
 * This client is used to call actions of **uhadoop** service
 */
class UHadoopClient extends client_1.default {
    constructor({ config, credential, }) {
        super({ config, credential });
    }
    /**
     * AddUHadoopInstanceNode - 给已有集群添加一定数量的节点
     *
     * See also: https://docs.ucloud.cn/api/uhadoop-api/add_uhadoop_instance_node
     */
    addUHadoopInstanceNode(request) {
        const args = Object.assign({ Action: 'AddUHadoopInstanceNode' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateUHadoopInstance - 新建一个uhadoop集群
     *
     * See also: https://docs.ucloud.cn/api/uhadoop-api/create_uhadoop_instance
     */
    createUHadoopInstance(request) {
        const args = Object.assign({ Action: 'CreateUHadoopInstance' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteUHadoopInstance - 删除掉一个uhadoop集群
     *
     * See also: https://docs.ucloud.cn/api/uhadoop-api/delete_uhadoop_instance
     */
    deleteUHadoopInstance(request) {
        const args = Object.assign({ Action: 'DeleteUHadoopInstance' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUHadoopInstance - 描述集群
     *
     * See also: https://docs.ucloud.cn/api/uhadoop-api/describe_uhadoop_instance
     */
    describeUHadoopInstance(request) {
        const args = Object.assign({ Action: 'DescribeUHadoopInstance' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUHadoopNodeType - 获取节点类型信息
     *
     * See also: https://docs.ucloud.cn/api/uhadoop-api/get_uhadoop_node_type
     */
    getUHadoopNodeType(request) {
        const args = Object.assign({ Action: 'GetUHadoopNodeType' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ListUHadoopFrameworkApp - 列举可选app
     *
     * See also: https://docs.ucloud.cn/api/uhadoop-api/list_uhadoop_framework_app
     */
    listUHadoopFrameworkApp(request) {
        const args = Object.assign({ Action: 'ListUHadoopFrameworkApp' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ListUHadoopInstance - 列出用户所有的uhadoop集群
     *
     * See also: https://docs.ucloud.cn/api/uhadoop-api/list_uhadoop_instance
     */
    listUHadoopInstance(request) {
        const args = Object.assign({ Action: 'ListUHadoopInstance' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * RestartUHadoopService - 重启集群服务（包含start|stop|restart）
     *
     * See also: https://docs.ucloud.cn/api/uhadoop-api/restart_uhadoop_service
     */
    restartUHadoopService(request) {
        const args = Object.assign({ Action: 'RestartUHadoopService' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpgradeUHadoopNode - 升级uhadoop节点
     *
     * See also: https://docs.ucloud.cn/api/uhadoop-api/upgrade_uhadoop_node
     */
    upgradeUHadoopNode(request) {
        const args = Object.assign({ Action: 'UpgradeUHadoopNode' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpgradeUHadoopNodeDisk - 扩容集群节点磁盘
     *
     * See also: https://docs.ucloud.cn/api/uhadoop-api/upgrade_uhadoop_node_disk
     */
    upgradeUHadoopNodeDisk(request) {
        const args = Object.assign({ Action: 'UpgradeUHadoopNodeDisk' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
}
exports.default = UHadoopClient;
