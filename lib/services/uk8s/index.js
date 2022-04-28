"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("../../core/client"));
const request_1 = __importDefault(require("../../core/request"));
/**
 * This client is used to call actions of **uk8s** service
 */
class UK8SClient extends client_1.default {
    constructor({ config, credential, }) {
        super({ config, credential });
    }
    /**
     * AddUK8SExistingUHost - 将预先创建好的云主机加入到UK8S集群，需要注意的是，该云主机依然会执行重装系统的操作。
     *
     * See also: https://docs.ucloud.cn/api/uk8s-api/add_uk8s_existing_uhost
     */
    addUK8SExistingUHost(request) {
        const args = Object.assign({ Action: 'AddUK8SExistingUHost' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * AddUK8SNodeGroup - 添加UK8S节点池
     *
     * See also: https://docs.ucloud.cn/api/uk8s-api/add_uk8s_node_group
     */
    addUK8SNodeGroup(request) {
        const args = Object.assign({ Action: 'AddUK8SNodeGroup' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * AddUK8SPHostNode - 为UK8S集群添加一台或多台物理云主机类型的节点。
     *
     * See also: https://docs.ucloud.cn/api/uk8s-api/add_uk8s_phost_node
     */
    addUK8SPHostNode(request) {
        const args = Object.assign({ Action: 'AddUK8SPHostNode' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * AddUK8SUHostNode - 为UK8S集群添加一台Node节点，机型类型为云主机
     *
     * See also: https://docs.ucloud.cn/api/uk8s-api/add_uk8s_uhost_node
     */
    addUK8SUHostNode(request) {
        const args = Object.assign({ Action: 'AddUK8SUHostNode' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateUK8SClusterV2 - 创建UK8S集群
     *
     * See also: https://docs.ucloud.cn/api/uk8s-api/create_uk8s_cluster_v2
     */
    createUK8SClusterV2(request) {
        const args = Object.assign({ Action: 'CreateUK8SClusterV2' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DelUK8SCluster - 删除UK8S集群
     *
     * See also: https://docs.ucloud.cn/api/uk8s-api/del_uk8s_cluster
     */
    delUK8SCluster(request) {
        const args = Object.assign({ Action: 'DelUK8SCluster' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DelUK8SClusterNodeV2 - 删除集群中的Node节点，删除前务必先将其中的Pod驱逐。
     *
     * See also: https://docs.ucloud.cn/api/uk8s-api/del_uk8s_cluster_node_v2
     */
    delUK8SClusterNodeV2(request) {
        const args = Object.assign({ Action: 'DelUK8SClusterNodeV2' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUK8SCluster - 获取集群信息
     *
     * See also: https://docs.ucloud.cn/api/uk8s-api/describe_uk8s_cluster
     */
    describeUK8SCluster(request) {
        const args = Object.assign({ Action: 'DescribeUK8SCluster' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUK8SImage - 获取UK8S支持的Node节点操作系统，可基于该操作系统制定自定义镜像
     *
     * See also: https://docs.ucloud.cn/api/uk8s-api/describe_uk8s_image
     */
    describeUK8SImage(request) {
        const args = Object.assign({ Action: 'DescribeUK8SImage' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUK8SNode - 用于获取 UK8S 节点详情
     *
     * See also: https://docs.ucloud.cn/api/uk8s-api/describe_uk8s_node
     */
    describeUK8SNode(request) {
        const args = Object.assign({ Action: 'DescribeUK8SNode' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ListUK8SClusterNodeV2 - 获取UK8S集群节点信息
     *
     * See also: https://docs.ucloud.cn/api/uk8s-api/list_uk8s_cluster_node_v2
     */
    listUK8SClusterNodeV2(request) {
        const args = Object.assign({ Action: 'ListUK8SClusterNodeV2' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ListUK8SClusterV2 - 获取UK8S集群列表信息
     *
     * See also: https://docs.ucloud.cn/api/uk8s-api/list_uk8s_cluster_v2
     */
    listUK8SClusterV2(request) {
        const args = Object.assign({ Action: 'ListUK8SClusterV2' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ListUK8SNodeGroup - 列出UK8S节点池
     *
     * See also: https://docs.ucloud.cn/api/uk8s-api/list_uk8s_node_group
     */
    listUK8SNodeGroup(request) {
        const args = Object.assign({ Action: 'ListUK8SNodeGroup' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * RemoveUK8SNodeGroup - 删除UK8S节点池
     *
     * See also: https://docs.ucloud.cn/api/uk8s-api/remove_uk8s_node_group
     */
    removeUK8SNodeGroup(request) {
        const args = Object.assign({ Action: 'RemoveUK8SNodeGroup' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
}
exports.default = UK8SClient;
