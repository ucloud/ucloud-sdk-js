"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("../../core/client"));
const request_1 = __importDefault(require("../../core/request"));
/**
 * This client is used to call actions of **ulb** service
 */
class ULBClient extends client_1.default {
    constructor({ config, credential, }) {
        super({ config, credential });
    }
    /**
     * AddSSLBinding - ALB的监听器绑定SSL证书
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/add_ssl_binding
     */
    addSSLBinding(request) {
        const args = Object.assign({ Action: 'AddSSLBinding' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * AddTargets - 给应用型负载均衡监听器添加后端服务节点
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/add_targets
     */
    addTargets(request) {
        const args = Object.assign({ Action: 'AddTargets' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * AllocateBackend - 添加CLB后端资源实例
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/allocate_backend
     */
    allocateBackend(request) {
        const args = Object.assign({ Action: 'AllocateBackend' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * BindSSL - 将SSL证书绑定到传统型负载均衡VServer
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/bind_ssl
     */
    bindSSL(request) {
        const args = Object.assign({ Action: 'BindSSL' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateListener - 创建一个应用型负载均衡的监听器
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/create_listener
     */
    createListener(request) {
        const args = Object.assign({ Action: 'CreateListener' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateLoadBalancer - 创建一个应用型负载均衡实例
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/create_load_balancer
     */
    createLoadBalancer(request) {
        const args = Object.assign({ Action: 'CreateLoadBalancer' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreatePolicy - 传统型负载均衡创建VServer内容转发策略
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/create_policy
     */
    createPolicy(request) {
        const args = Object.assign({ Action: 'CreatePolicy' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateRule - 给应用型负载均衡监听器创建一条转发规则
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/create_rule
     */
    createRule(request) {
        const args = Object.assign({ Action: 'CreateRule' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateSSL - 创建SSL证书，可以把整个 Pem 证书内容传过来，或者把证书、私钥、CA证书分别传过来
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/create_ssl
     */
    createSSL(request) {
        const args = Object.assign({ Action: 'CreateSSL' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateSecurityPolicy - 创建安全策略
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/create_security_policy
     */
    createSecurityPolicy(request) {
        const args = Object.assign({ Action: 'CreateSecurityPolicy' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateULB - 创建传统型负载均衡负载均衡实例，可以选择内网或者外网
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/create_ulb
     */
    createULB(request) {
        const args = Object.assign({ Action: 'CreateULB' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateVServer - 创建CLB的VServer实例，定义监听的协议和端口以及负载均衡算法
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/create_vserver
     */
    createVServer(request) {
        const args = Object.assign({ Action: 'CreateVServer' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteListener - 删除一个应用型负载均衡监听器
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/delete_listener
     */
    deleteListener(request) {
        const args = Object.assign({ Action: 'DeleteListener' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteLoadBalancer - 删除一个应用型负载均衡实例
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/delete_load_balancer
     */
    deleteLoadBalancer(request) {
        const args = Object.assign({ Action: 'DeleteLoadBalancer' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeletePolicy - 删除传统型负载均衡的内容转发策略
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/delete_policy
     */
    deletePolicy(request) {
        const args = Object.assign({ Action: 'DeletePolicy' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteRule - 删除应用型负载均衡监听器的一条转发规则
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/delete_rule
     */
    deleteRule(request) {
        const args = Object.assign({ Action: 'DeleteRule' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteSSL - 删除SSL证书
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/delete_ssl
     */
    deleteSSL(request) {
        const args = Object.assign({ Action: 'DeleteSSL' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteSSLBinding - 删除监听器绑定的扩展证书
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/delete_ssl_binding
     */
    deleteSSLBinding(request) {
        const args = Object.assign({ Action: 'DeleteSSLBinding' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteSecurityPolicy - 删除安全策略
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/delete_security_policy
     */
    deleteSecurityPolicy(request) {
        const args = Object.assign({ Action: 'DeleteSecurityPolicy' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteULB - 删除传统型负载均衡实例
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/delete_ulb
     */
    deleteULB(request) {
        const args = Object.assign({ Action: 'DeleteULB' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteVServer - 删除CLB的VServer实例
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/delete_vserver
     */
    deleteVServer(request) {
        const args = Object.assign({ Action: 'DeleteVServer' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeListeners - 描述一个指定的监听器或者一个应用型负载均衡实例下的所有监听器
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/describe_listeners
     */
    describeListeners(request) {
        const args = Object.assign({ Action: 'DescribeListeners' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeLoadBalancers - 描述特定条件下的应用型负载均衡实例或者全部的应用型负载均衡实例
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/describe_load_balancers
     */
    describeLoadBalancers(request) {
        const args = Object.assign({ Action: 'DescribeLoadBalancers' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeRules - 描述一条指定的转发规则或者一个应用型负载均衡监听器下的所有转发规则
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/describe_rules
     */
    describeRules(request) {
        const args = Object.assign({ Action: 'DescribeRules' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeSSL - 获取SSL证书信息，仅能获取SSL证书与传统型负载均衡监听器的绑定关系
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/describe_ssl
     */
    describeSSL(request) {
        const args = Object.assign({ Action: 'DescribeSSL' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeSSLV2 - 获取SSL证书信息，该接口可以同时获取SSL与传统型和应用型负载均衡监听器的绑定关系
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/describe_sslv2
     */
    describeSSLV2(request) {
        const args = Object.assign({ Action: 'DescribeSSLV2' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeSecurityPolicies - 获取安全策略的信息，绑定关系仅能获取安全策略与传统型负载均衡监听器的绑定关系
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/describe_security_policies
     */
    describeSecurityPolicies(request) {
        const args = Object.assign({ Action: 'DescribeSecurityPolicies' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeSecurityPoliciesV2 - 获取安全策略的信息，可以同时获取安全策略与传统型和应用性负载均衡监听器的绑定关系
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/describe_security_policies_v2
     */
    describeSecurityPoliciesV2(request) {
        const args = Object.assign({ Action: 'DescribeSecurityPoliciesV2' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeSupportCiphers - 返回安全策略所有支持的加密套件
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/describe_support_ciphers
     */
    describeSupportCiphers(request) {
        const args = Object.assign({ Action: 'DescribeSupportCiphers' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeULB - 获取CLB详细信息
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/describe_ulb
     */
    describeULB(request) {
        const args = Object.assign({ Action: 'DescribeULB' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeULBSimple - 获取CLB信息
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/describe_ulb_simple
     */
    describeULBSimple(request) {
        const args = Object.assign({ Action: 'DescribeULBSimple' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeVServer - 获取CLB下的VServer的详细信息
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/describe_vserver
     */
    describeVServer(request) {
        const args = Object.assign({ Action: 'DescribeVServer' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ReleaseBackend - 从CLB的VServer释放后端资源实例
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/release_backend
     */
    releaseBackend(request) {
        const args = Object.assign({ Action: 'ReleaseBackend' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * RemoveTargets - 从应用型负载均衡监听器删除后端服务节点
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/remove_targets
     */
    removeTargets(request) {
        const args = Object.assign({ Action: 'RemoveTargets' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UnBindSecurityPolicy - 批量解绑安全策略，会同时解绑与传统型和应用型负载均衡监听器的绑定关系
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/un_bind_security_policy
     */
    unBindSecurityPolicy(request) {
        const args = Object.assign({ Action: 'UnBindSecurityPolicy' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UnbindSSL - 从CLB下的VServer解绑SSL证书
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/unbind_ssl
     */
    unbindSSL(request) {
        const args = Object.assign({ Action: 'UnbindSSL' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateBackendAttribute - 更新CLB后端资源实例(服务节点)属性
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/update_backend_attribute
     */
    updateBackendAttribute(request) {
        const args = Object.assign({ Action: 'UpdateBackendAttribute' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateBackendBatch - 批量更新ULB后端资源实例(服务节点)属性
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/update_backend_batch
     */
    updateBackendBatch(request) {
        const args = Object.assign({ Action: 'UpdateBackendBatch' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateListenerAttribute - 更新一个应用型负载均衡监听器的属性
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/update_listener_attribute
     */
    updateListenerAttribute(request) {
        const args = Object.assign({ Action: 'UpdateListenerAttribute' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateLoadBalancerAttribute - 更新一个应用型负载均衡实例的属性
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/update_load_balancer_attribute
     */
    updateLoadBalancerAttribute(request) {
        const args = Object.assign({ Action: 'UpdateLoadBalancerAttribute' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdatePolicy - 更新传统型负载均衡内容转发规则，包括转发规则后的服务节点
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/update_policy
     */
    updatePolicy(request) {
        const args = Object.assign({ Action: 'UpdatePolicy' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateRuleAttribute - 更新应用型负载均衡监听器的一条转发规则的属性
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/update_rule_attribute
     */
    updateRuleAttribute(request) {
        const args = Object.assign({ Action: 'UpdateRuleAttribute' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateSSLAttribute - 更新修改SSL的属性，如：修改SSLName
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/update_ssl_attribute
     */
    updateSSLAttribute(request) {
        const args = Object.assign({ Action: 'UpdateSSLAttribute' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateSSLBinding - 将传统型或应用型负载均衡监听器绑定的证书更换为另一个证书，
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/update_ssl_binding
     */
    updateSSLBinding(request) {
        const args = Object.assign({ Action: 'UpdateSSLBinding' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateSecurityPolicy - 更新安全策略
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/update_security_policy
     */
    updateSecurityPolicy(request) {
        const args = Object.assign({ Action: 'UpdateSecurityPolicy' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateTargetsAttribute - 更新应用型负载均衡监听器后端服务节点的属性
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/update_targets_attribute
     */
    updateTargetsAttribute(request) {
        const args = Object.assign({ Action: 'UpdateTargetsAttribute' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateULBAttribute - 更新CLB名字业务组备注等属性字段
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/update_ulb_attribute
     */
    updateULBAttribute(request) {
        const args = Object.assign({ Action: 'UpdateULBAttribute' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateVServerAttribute - 更新传统型负载均衡VServer实例属性
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/update_vserver_attribute
     */
    updateVServerAttribute(request) {
        const args = Object.assign({ Action: 'UpdateVServerAttribute' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
}
exports.default = ULBClient;
