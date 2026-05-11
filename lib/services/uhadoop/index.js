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
     * CreateUHadoopInstance - 创建实例接口。\\ 创建实例前需要按以下步骤准备必要参数：\\ 1.获取Region（地域）和 Zone（可用区），访问链接：https://docs.ucloud.cn/api/summary/regionlist 可以获取所有支持的地域和可用区；\\ 2.FrameworkVersion，访问链接：https://docs.ucloud.cn/api/uhadoop-api/list_uhadoop_framework_app_by_use_case，响应字段的AppConfigSet[N].FrameworkVersion是框架版本是支持的 UHadoop 版本；\\ 3.ChargeType付费类型，可用值：Dynamic为按小时付费，Month为按月付费，Year为按年付费；\\ 4.InstanceGroupConfigs需要获取NodeType机型详情，访问链接：https://docs.ucloud.cn/api/uhadoop-api/get_uhadoop_node_type，响应字段的InstanceTypeSet[N].NodeType是机型名称，响应字段的InstanceTypeSet[N].SuitableRole是机型可用的节点类型；\\ 5.获取DiskSize磁盘大小范围 ，访问链接：https://docs.ucloud.cn/api/uhadoop-api/get_uhadoop_node_type，该接口响应字段的InstanceTypeSet[N].DiskSet[N].DiskMinSize和InstanceTypeSet[N].DiskSet[N].DiskMaxSize是磁盘大小的取值范围；\\ 6.InstanceName，自定义输入实例名称，只能包含中英文、数字以及- _ ;\\7.Password,集群机器的登录密码,需要输入base64编码后的内容;\\8.AppConfigs 集群需要安装的组件，访问链接，https://docs.ucloud.cn/api/uhadoop-api/list_uhadoop_framework_app ，AppConfigSet[N].AppName是组件名称，AppConfigSet[N].AppVersion是组件版本
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
     * ListUHadoopFrameworkAppByUseCase - 按使用场景列出uhadoop的框架和框架中的应用
     *
     * See also: https://docs.ucloud.cn/api/uhadoop-api/list_uhadoop_framework_app_by_use_case
     */
    listUHadoopFrameworkAppByUseCase(request) {
        const args = Object.assign({ Action: 'ListUHadoopFrameworkAppByUseCase' }, (request || {}));
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
