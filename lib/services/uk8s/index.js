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
     * AddUK8SAutoScalingGroupV2 - 创建绑定已有节点池的自动伸缩组。当前请求校验仍要求提供 CPU、Mem、MachineType 和 Zone。
     *
     * See also: https://docs.ucloud.cn/api/uk8s-api/add_uk8s_auto_scaling_group_v2
     */
    addUK8SAutoScalingGroupV2(request) {
        const args = Object.assign({ Action: 'AddUK8SAutoScalingGroupV2' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
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
     * CreateUK8SULSConfig - 创建 LogConfig 自定义资源，用于声明式地定义日志采集规则
     *
     * See also: https://docs.ucloud.cn/api/uk8s-api/create_uk8s_uls_config
     */
    createUK8SULSConfig(request) {
        const args = Object.assign({ Action: 'CreateUK8SULSConfig' }, (request || {}));
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
     * DeleteUK8SAutoScalingGroup - 删除伸缩组
     *
     * See also: https://docs.ucloud.cn/api/uk8s-api/delete_uk8s_auto_scaling_group
     */
    deleteUK8SAutoScalingGroup(request) {
        const args = Object.assign({ Action: 'DeleteUK8SAutoScalingGroup' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteUK8SULSConfig - 删除指定UK8S集群的日志采集规则。
     *
     * See also: https://docs.ucloud.cn/api/uk8s-api/delete_uk8s_uls_config
     */
    deleteUK8SULSConfig(request) {
        const args = Object.assign({ Action: 'DeleteUK8SULSConfig' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUK8SAutoscalerGroup - 获取autoscaler与auto scaling group信息
     *
     * See also: https://docs.ucloud.cn/api/uk8s-api/describe_uk8s_autoscaler_group
     */
    describeUK8SAutoscalerGroup(request) {
        const args = Object.assign({ Action: 'DescribeUK8SAutoscalerGroup' }, (request || {}));
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
     * EnableUK8SAutoscaler - 开启/关闭伸缩器
     *
     * See also: https://docs.ucloud.cn/api/uk8s-api/enable_uk8s_autoscaler
     */
    enableUK8SAutoscaler(request) {
        const args = Object.assign({ Action: 'EnableUK8SAutoscaler' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetClusterConfig - 获取集群配置文件，管理集群的凭证
     *
     * See also: https://docs.ucloud.cn/api/uk8s-api/get_cluster_config
     */
    getClusterConfig(request) {
        const args = Object.assign({ Action: 'GetClusterConfig' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUK8SAvailableInstanceTypes - 获取uk8s节点可用机型
     *
     * See also: https://docs.ucloud.cn/api/uk8s-api/get_uk8s_available_instance_types
     */
    getUK8SAvailableInstanceTypes(request) {
        const args = Object.assign({ Action: 'GetUK8SAvailableInstanceTypes' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUK8SCNINodeInfo - 获取 UK8S 集群各节点的 CNI 版本、状态及版本同步情况。
     *
     * See also: https://docs.ucloud.cn/api/uk8s-api/get_uk8s_cni_node_info
     */
    getUK8SCNINodeInfo(request) {
        const args = Object.assign({ Action: 'GetUK8SCNINodeInfo' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUK8SIpamdStatus - 查询 ipamd 插件的安装状态、版本、CNI 初始化模式及模式切换能力。
     *
     * See also: https://docs.ucloud.cn/api/uk8s-api/get_uk8s_ipamd_status
     */
    getUK8SIpamdStatus(request) {
        const args = Object.assign({ Action: 'GetUK8SIpamdStatus' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUK8SLoadBalancerController - 获取 uk8s  LoadBalancerController 信息
     *
     * See also: https://docs.ucloud.cn/api/uk8s-api/get_uk8s_load_balancer_controller
     */
    getUK8SLoadBalancerController(request) {
        const args = Object.assign({ Action: 'GetUK8SLoadBalancerController' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUK8SNodeGroup - 列出某个UK8S节点池
     *
     * See also: https://docs.ucloud.cn/api/uk8s-api/get_uk8s_node_group
     */
    getUK8SNodeGroup(request) {
        const args = Object.assign({ Action: 'GetUK8SNodeGroup' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUK8SPluginInfo - 查询集群插件信息
     *
     * See also: https://docs.ucloud.cn/api/uk8s-api/get_uk8s_plugin_info
     */
    getUK8SPluginInfo(request) {
        const args = Object.assign({ Action: 'GetUK8SPluginInfo' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUK8SVersions - 获取支持创建的UK8S集群版本、Containerd版本
     *
     * See also: https://docs.ucloud.cn/api/uk8s-api/get_uk8s_versions
     */
    getUK8SVersions(request) {
        const args = Object.assign({ Action: 'GetUK8SVersions' }, (request || {}));
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
     * ListUK8SULSConfig - 查询 UK8S 的 ULSConfig
     *
     * See also: https://docs.ucloud.cn/api/uk8s-api/list_uk8s_uls_config
     */
    listUK8SULSConfig(request) {
        const args = Object.assign({ Action: 'ListUK8SULSConfig' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ModifyUK8SClusterName - 修改k8s集群名称
     *
     * See also: https://docs.ucloud.cn/api/uk8s-api/modify_uk8s_cluster_name
     */
    modifyUK8SClusterName(request) {
        const args = Object.assign({ Action: 'ModifyUK8SClusterName' }, (request || {}));
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
    /**
     * UpdateUK8SAutoScalingGroupV2 - 更新伸缩组的名称、节点数上下限和优先级。节点规格等配置请通过关联节点池修改。
     *
     * See also: https://docs.ucloud.cn/api/uk8s-api/update_uk8s_auto_scaling_group_v2
     */
    updateUK8SAutoScalingGroupV2(request) {
        const args = Object.assign({ Action: 'UpdateUK8SAutoScalingGroupV2' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateUK8SAutoscaler - 更新集群级缩容阈值和等待时间。调用前必须关闭 cluster-autoscaler；修改后重新开启，使新配置生效。
     *
     * See also: https://docs.ucloud.cn/api/uk8s-api/update_uk8s_autoscaler
     */
    updateUK8SAutoscaler(request) {
        const args = Object.assign({ Action: 'UpdateUK8SAutoscaler' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateUK8SNodeGroup - 修改UK8S节点池
     *
     * See also: https://docs.ucloud.cn/api/uk8s-api/update_uk8s_node_group
     */
    updateUK8SNodeGroup(request) {
        const args = Object.assign({ Action: 'UpdateUK8SNodeGroup' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateUK8SULSConfig - 更新指定UK8S集群的日志采集规则。
     *
     * See also: https://docs.ucloud.cn/api/uk8s-api/update_uk8s_uls_config
     */
    updateUK8SULSConfig(request) {
        const args = Object.assign({ Action: 'UpdateUK8SULSConfig' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
}
exports.default = UK8SClient;
