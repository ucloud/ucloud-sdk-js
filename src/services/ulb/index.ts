import Client from '../../core/client';
import Request from '../../core/request';
import { ConfigOptions } from '../../core/config';
import { CredentialOptions } from '../../core/credential';

/**
 * This client is used to call actions of **ulb** service
 */
export default class ULBClient extends Client {
  constructor({
    config,
    credential,
  }: {
    config: ConfigOptions;
    credential: CredentialOptions;
  }) {
    super({ config, credential });
  }

  /**
   * AddSSLBinding - ALB的监听器绑定SSL证书
   *
   * See also: https://docs.ucloud.cn/api/ulb-api/add_ssl_binding
   */
  addSSLBinding(
    request?: AddSSLBindingRequest
  ): Promise<AddSSLBindingResponse> {
    const args = { Action: 'AddSSLBinding', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as AddSSLBindingResponse
    );
  }

  /**
   * AddTargets - 给应用型负载均衡监听器添加后端服务节点
   *
   * See also: https://docs.ucloud.cn/api/ulb-api/add_targets
   */
  addTargets(request?: AddTargetsRequest): Promise<AddTargetsResponse> {
    const args = { Action: 'AddTargets', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as AddTargetsResponse
    );
  }

  /**
   * AllocateBackend - 添加CLB后端资源实例
   *
   * See also: https://docs.ucloud.cn/api/ulb-api/allocate_backend
   */
  allocateBackend(
    request?: AllocateBackendRequest
  ): Promise<AllocateBackendResponse> {
    const args = { Action: 'AllocateBackend', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as AllocateBackendResponse
    );
  }

  /**
   * BindSSL - 将SSL证书绑定到传统型负载均衡VServer
   *
   * See also: https://docs.ucloud.cn/api/ulb-api/bind_ssl
   */
  bindSSL(request?: BindSSLRequest): Promise<BindSSLResponse> {
    const args = { Action: 'BindSSL', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as BindSSLResponse
    );
  }

  /**
   * CreateListener - 创建一个应用型负载均衡的监听器
   *
   * See also: https://docs.ucloud.cn/api/ulb-api/create_listener
   */
  createListener(
    request?: CreateListenerRequest
  ): Promise<CreateListenerResponse> {
    const args = { Action: 'CreateListener', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as CreateListenerResponse
    );
  }

  /**
   * CreateLoadBalancer - 创建一个应用型负载均衡实例
   *
   * See also: https://docs.ucloud.cn/api/ulb-api/create_load_balancer
   */
  createLoadBalancer(
    request?: CreateLoadBalancerRequest
  ): Promise<CreateLoadBalancerResponse> {
    const args = { Action: 'CreateLoadBalancer', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as CreateLoadBalancerResponse
    );
  }

  /**
   * CreatePolicy - 传统型负载均衡创建VServer内容转发策略
   *
   * See also: https://docs.ucloud.cn/api/ulb-api/create_policy
   */
  createPolicy(request?: CreatePolicyRequest): Promise<CreatePolicyResponse> {
    const args = { Action: 'CreatePolicy', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as CreatePolicyResponse
    );
  }

  /**
   * CreateRule - 给应用型负载均衡监听器创建一条转发规则
   *
   * See also: https://docs.ucloud.cn/api/ulb-api/create_rule
   */
  createRule(request?: CreateRuleRequest): Promise<CreateRuleResponse> {
    const args = { Action: 'CreateRule', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as CreateRuleResponse
    );
  }

  /**
   * CreateSSL - 创建SSL证书，可以把整个 Pem 证书内容传过来，或者把证书、私钥、CA证书分别传过来
   *
   * See also: https://docs.ucloud.cn/api/ulb-api/create_ssl
   */
  createSSL(request?: CreateSSLRequest): Promise<CreateSSLResponse> {
    const args = { Action: 'CreateSSL', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as CreateSSLResponse
    );
  }

  /**
   * CreateSecurityPolicy - 创建安全策略
   *
   * See also: https://docs.ucloud.cn/api/ulb-api/create_security_policy
   */
  createSecurityPolicy(
    request?: CreateSecurityPolicyRequest
  ): Promise<CreateSecurityPolicyResponse> {
    const args = { Action: 'CreateSecurityPolicy', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as CreateSecurityPolicyResponse
    );
  }

  /**
   * CreateULB - 创建传统型负载均衡负载均衡实例，可以选择内网或者外网
   *
   * See also: https://docs.ucloud.cn/api/ulb-api/create_ulb
   */
  createULB(request?: CreateULBRequest): Promise<CreateULBResponse> {
    const args = { Action: 'CreateULB', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as CreateULBResponse
    );
  }

  /**
   * CreateVServer - 创建CLB的VServer实例，定义监听的协议和端口以及负载均衡算法
   *
   * See also: https://docs.ucloud.cn/api/ulb-api/create_vserver
   */
  createVServer(
    request?: CreateVServerRequest
  ): Promise<CreateVServerResponse> {
    const args = { Action: 'CreateVServer', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as CreateVServerResponse
    );
  }

  /**
   * DeleteListener - 删除一个应用型负载均衡监听器
   *
   * See also: https://docs.ucloud.cn/api/ulb-api/delete_listener
   */
  deleteListener(
    request?: DeleteListenerRequest
  ): Promise<DeleteListenerResponse> {
    const args = { Action: 'DeleteListener', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DeleteListenerResponse
    );
  }

  /**
   * DeleteLoadBalancer - 删除一个应用型负载均衡实例
   *
   * See also: https://docs.ucloud.cn/api/ulb-api/delete_load_balancer
   */
  deleteLoadBalancer(
    request?: DeleteLoadBalancerRequest
  ): Promise<DeleteLoadBalancerResponse> {
    const args = { Action: 'DeleteLoadBalancer', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DeleteLoadBalancerResponse
    );
  }

  /**
   * DeletePolicy - 删除传统型负载均衡的内容转发策略
   *
   * See also: https://docs.ucloud.cn/api/ulb-api/delete_policy
   */
  deletePolicy(request?: DeletePolicyRequest): Promise<DeletePolicyResponse> {
    const args = { Action: 'DeletePolicy', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DeletePolicyResponse
    );
  }

  /**
   * DeleteRule - 删除应用型负载均衡监听器的一条转发规则
   *
   * See also: https://docs.ucloud.cn/api/ulb-api/delete_rule
   */
  deleteRule(request?: DeleteRuleRequest): Promise<DeleteRuleResponse> {
    const args = { Action: 'DeleteRule', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DeleteRuleResponse
    );
  }

  /**
   * DeleteSSL - 删除SSL证书
   *
   * See also: https://docs.ucloud.cn/api/ulb-api/delete_ssl
   */
  deleteSSL(request?: DeleteSSLRequest): Promise<DeleteSSLResponse> {
    const args = { Action: 'DeleteSSL', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DeleteSSLResponse
    );
  }

  /**
   * DeleteSSLBinding - 删除监听器绑定的扩展证书
   *
   * See also: https://docs.ucloud.cn/api/ulb-api/delete_ssl_binding
   */
  deleteSSLBinding(
    request?: DeleteSSLBindingRequest
  ): Promise<DeleteSSLBindingResponse> {
    const args = { Action: 'DeleteSSLBinding', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DeleteSSLBindingResponse
    );
  }

  /**
   * DeleteSecurityPolicy - 删除安全策略
   *
   * See also: https://docs.ucloud.cn/api/ulb-api/delete_security_policy
   */
  deleteSecurityPolicy(
    request?: DeleteSecurityPolicyRequest
  ): Promise<DeleteSecurityPolicyResponse> {
    const args = { Action: 'DeleteSecurityPolicy', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DeleteSecurityPolicyResponse
    );
  }

  /**
   * DeleteULB - 删除传统型负载均衡实例
   *
   * See also: https://docs.ucloud.cn/api/ulb-api/delete_ulb
   */
  deleteULB(request?: DeleteULBRequest): Promise<DeleteULBResponse> {
    const args = { Action: 'DeleteULB', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DeleteULBResponse
    );
  }

  /**
   * DeleteVServer - 删除CLB的VServer实例
   *
   * See also: https://docs.ucloud.cn/api/ulb-api/delete_vserver
   */
  deleteVServer(
    request?: DeleteVServerRequest
  ): Promise<DeleteVServerResponse> {
    const args = { Action: 'DeleteVServer', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DeleteVServerResponse
    );
  }

  /**
   * DescribeListeners - 描述一个指定的监听器或者一个应用型负载均衡实例下的所有监听器
   *
   * See also: https://docs.ucloud.cn/api/ulb-api/describe_listeners
   */
  describeListeners(
    request?: DescribeListenersRequest
  ): Promise<DescribeListenersResponse> {
    const args = { Action: 'DescribeListeners', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DescribeListenersResponse
    );
  }

  /**
   * DescribeLoadBalancers - 描述特定条件下的应用型负载均衡实例或者全部的应用型负载均衡实例
   *
   * See also: https://docs.ucloud.cn/api/ulb-api/describe_load_balancers
   */
  describeLoadBalancers(
    request?: DescribeLoadBalancersRequest
  ): Promise<DescribeLoadBalancersResponse> {
    const args = { Action: 'DescribeLoadBalancers', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DescribeLoadBalancersResponse
    );
  }

  /**
   * DescribeRules - 描述一条指定的转发规则或者一个应用型负载均衡监听器下的所有转发规则
   *
   * See also: https://docs.ucloud.cn/api/ulb-api/describe_rules
   */
  describeRules(
    request?: DescribeRulesRequest
  ): Promise<DescribeRulesResponse> {
    const args = { Action: 'DescribeRules', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DescribeRulesResponse
    );
  }

  /**
   * DescribeSSL - 获取SSL证书信息，仅能获取SSL证书与传统型负载均衡监听器的绑定关系
   *
   * See also: https://docs.ucloud.cn/api/ulb-api/describe_ssl
   */
  describeSSL(request?: DescribeSSLRequest): Promise<DescribeSSLResponse> {
    const args = { Action: 'DescribeSSL', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DescribeSSLResponse
    );
  }

  /**
   * DescribeSSLV2 - 获取SSL证书信息，该接口可以同时获取SSL与传统型和应用型负载均衡监听器的绑定关系
   *
   * See also: https://docs.ucloud.cn/api/ulb-api/describe_sslv2
   */
  describeSSLV2(
    request?: DescribeSSLV2Request
  ): Promise<DescribeSSLV2Response> {
    const args = { Action: 'DescribeSSLV2', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DescribeSSLV2Response
    );
  }

  /**
   * DescribeSecurityPolicies - 获取安全策略的信息，绑定关系仅能获取安全策略与传统型负载均衡监听器的绑定关系
   *
   * See also: https://docs.ucloud.cn/api/ulb-api/describe_security_policies
   */
  describeSecurityPolicies(
    request?: DescribeSecurityPoliciesRequest
  ): Promise<DescribeSecurityPoliciesResponse> {
    const args = { Action: 'DescribeSecurityPolicies', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DescribeSecurityPoliciesResponse
    );
  }

  /**
   * DescribeSecurityPoliciesV2 - 获取安全策略的信息，可以同时获取安全策略与传统型和应用性负载均衡监听器的绑定关系
   *
   * See also: https://docs.ucloud.cn/api/ulb-api/describe_security_policies_v2
   */
  describeSecurityPoliciesV2(
    request?: DescribeSecurityPoliciesV2Request
  ): Promise<DescribeSecurityPoliciesV2Response> {
    const args = { Action: 'DescribeSecurityPoliciesV2', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DescribeSecurityPoliciesV2Response
    );
  }

  /**
   * DescribeSupportCiphers - 返回安全策略所有支持的加密套件
   *
   * See also: https://docs.ucloud.cn/api/ulb-api/describe_support_ciphers
   */
  describeSupportCiphers(
    request?: DescribeSupportCiphersRequest
  ): Promise<DescribeSupportCiphersResponse> {
    const args = { Action: 'DescribeSupportCiphers', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DescribeSupportCiphersResponse
    );
  }

  /**
   * DescribeULB - 获取CLB详细信息
   *
   * See also: https://docs.ucloud.cn/api/ulb-api/describe_ulb
   */
  describeULB(request?: DescribeULBRequest): Promise<DescribeULBResponse> {
    const args = { Action: 'DescribeULB', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DescribeULBResponse
    );
  }

  /**
   * DescribeULBSimple - 获取CLB信息
   *
   * See also: https://docs.ucloud.cn/api/ulb-api/describe_ulb_simple
   */
  describeULBSimple(
    request?: DescribeULBSimpleRequest
  ): Promise<DescribeULBSimpleResponse> {
    const args = { Action: 'DescribeULBSimple', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DescribeULBSimpleResponse
    );
  }

  /**
   * DescribeVServer - 获取CLB下的VServer的详细信息
   *
   * See also: https://docs.ucloud.cn/api/ulb-api/describe_vserver
   */
  describeVServer(
    request?: DescribeVServerRequest
  ): Promise<DescribeVServerResponse> {
    const args = { Action: 'DescribeVServer', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DescribeVServerResponse
    );
  }

  /**
   * ReleaseBackend - 从CLB的VServer释放后端资源实例
   *
   * See also: https://docs.ucloud.cn/api/ulb-api/release_backend
   */
  releaseBackend(
    request?: ReleaseBackendRequest
  ): Promise<ReleaseBackendResponse> {
    const args = { Action: 'ReleaseBackend', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as ReleaseBackendResponse
    );
  }

  /**
   * RemoveTargets - 从应用型负载均衡监听器删除后端服务节点
   *
   * See also: https://docs.ucloud.cn/api/ulb-api/remove_targets
   */
  removeTargets(
    request?: RemoveTargetsRequest
  ): Promise<RemoveTargetsResponse> {
    const args = { Action: 'RemoveTargets', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as RemoveTargetsResponse
    );
  }

  /**
   * UnBindSecurityPolicy - 批量解绑安全策略，会同时解绑与传统型和应用型负载均衡监听器的绑定关系
   *
   * See also: https://docs.ucloud.cn/api/ulb-api/un_bind_security_policy
   */
  unBindSecurityPolicy(
    request?: UnBindSecurityPolicyRequest
  ): Promise<UnBindSecurityPolicyResponse> {
    const args = { Action: 'UnBindSecurityPolicy', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as UnBindSecurityPolicyResponse
    );
  }

  /**
   * UnbindSSL - 从CLB下的VServer解绑SSL证书
   *
   * See also: https://docs.ucloud.cn/api/ulb-api/unbind_ssl
   */
  unbindSSL(request?: UnbindSSLRequest): Promise<UnbindSSLResponse> {
    const args = { Action: 'UnbindSSL', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as UnbindSSLResponse
    );
  }

  /**
   * UpdateBackendAttribute - 更新CLB后端资源实例(服务节点)属性
   *
   * See also: https://docs.ucloud.cn/api/ulb-api/update_backend_attribute
   */
  updateBackendAttribute(
    request?: UpdateBackendAttributeRequest
  ): Promise<UpdateBackendAttributeResponse> {
    const args = { Action: 'UpdateBackendAttribute', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as UpdateBackendAttributeResponse
    );
  }

  /**
   * UpdateBackendBatch - 批量更新ULB后端资源实例(服务节点)属性
   *
   * See also: https://docs.ucloud.cn/api/ulb-api/update_backend_batch
   */
  updateBackendBatch(
    request?: UpdateBackendBatchRequest
  ): Promise<UpdateBackendBatchResponse> {
    const args = { Action: 'UpdateBackendBatch', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as UpdateBackendBatchResponse
    );
  }

  /**
   * UpdateListenerAttribute - 更新一个应用型负载均衡监听器的属性
   *
   * See also: https://docs.ucloud.cn/api/ulb-api/update_listener_attribute
   */
  updateListenerAttribute(
    request?: UpdateListenerAttributeRequest
  ): Promise<UpdateListenerAttributeResponse> {
    const args = { Action: 'UpdateListenerAttribute', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as UpdateListenerAttributeResponse
    );
  }

  /**
   * UpdateLoadBalancerAttribute - 更新一个应用型负载均衡实例的属性
   *
   * See also: https://docs.ucloud.cn/api/ulb-api/update_load_balancer_attribute
   */
  updateLoadBalancerAttribute(
    request?: UpdateLoadBalancerAttributeRequest
  ): Promise<UpdateLoadBalancerAttributeResponse> {
    const args = { Action: 'UpdateLoadBalancerAttribute', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as UpdateLoadBalancerAttributeResponse
    );
  }

  /**
   * UpdatePolicy - 更新传统型负载均衡内容转发规则，包括转发规则后的服务节点
   *
   * See also: https://docs.ucloud.cn/api/ulb-api/update_policy
   */
  updatePolicy(request?: UpdatePolicyRequest): Promise<UpdatePolicyResponse> {
    const args = { Action: 'UpdatePolicy', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as UpdatePolicyResponse
    );
  }

  /**
   * UpdateRuleAttribute - 更新应用型负载均衡监听器的一条转发规则的属性
   *
   * See also: https://docs.ucloud.cn/api/ulb-api/update_rule_attribute
   */
  updateRuleAttribute(
    request?: UpdateRuleAttributeRequest
  ): Promise<UpdateRuleAttributeResponse> {
    const args = { Action: 'UpdateRuleAttribute', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as UpdateRuleAttributeResponse
    );
  }

  /**
   * UpdateSSLAttribute - 更新修改SSL的属性，如：修改SSLName
   *
   * See also: https://docs.ucloud.cn/api/ulb-api/update_ssl_attribute
   */
  updateSSLAttribute(
    request?: UpdateSSLAttributeRequest
  ): Promise<UpdateSSLAttributeResponse> {
    const args = { Action: 'UpdateSSLAttribute', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as UpdateSSLAttributeResponse
    );
  }

  /**
   * UpdateSSLBinding - 将传统型或应用型负载均衡监听器绑定的证书更换为另一个证书，
   *
   * See also: https://docs.ucloud.cn/api/ulb-api/update_ssl_binding
   */
  updateSSLBinding(
    request?: UpdateSSLBindingRequest
  ): Promise<UpdateSSLBindingResponse> {
    const args = { Action: 'UpdateSSLBinding', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as UpdateSSLBindingResponse
    );
  }

  /**
   * UpdateSecurityPolicy - 更新安全策略
   *
   * See also: https://docs.ucloud.cn/api/ulb-api/update_security_policy
   */
  updateSecurityPolicy(
    request?: UpdateSecurityPolicyRequest
  ): Promise<UpdateSecurityPolicyResponse> {
    const args = { Action: 'UpdateSecurityPolicy', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as UpdateSecurityPolicyResponse
    );
  }

  /**
   * UpdateTargetsAttribute - 更新应用型负载均衡监听器后端服务节点的属性
   *
   * See also: https://docs.ucloud.cn/api/ulb-api/update_targets_attribute
   */
  updateTargetsAttribute(
    request?: UpdateTargetsAttributeRequest
  ): Promise<UpdateTargetsAttributeResponse> {
    const args = { Action: 'UpdateTargetsAttribute', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as UpdateTargetsAttributeResponse
    );
  }

  /**
   * UpdateULBAttribute - 更新CLB名字业务组备注等属性字段
   *
   * See also: https://docs.ucloud.cn/api/ulb-api/update_ulb_attribute
   */
  updateULBAttribute(
    request?: UpdateULBAttributeRequest
  ): Promise<UpdateULBAttributeResponse> {
    const args = { Action: 'UpdateULBAttribute', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as UpdateULBAttributeResponse
    );
  }

  /**
   * UpdateVServerAttribute - 更新传统型负载均衡VServer实例属性
   *
   * See also: https://docs.ucloud.cn/api/ulb-api/update_vserver_attribute
   */
  updateVServerAttribute(
    request?: UpdateVServerAttributeRequest
  ): Promise<UpdateVServerAttributeResponse> {
    const args = { Action: 'UpdateVServerAttribute', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as UpdateVServerAttributeResponse
    );
  }
}

/**
 * AddSSLBinding - ALB的监听器绑定SSL证书
 */
export interface AddSSLBindingRequest {
  /**
   * 负载均衡实例的ID
   */
  LoadBalancerId: string;
  /**
   * 监听器的ID
   */
  ListenerId: string;
  /**
   * SSLId的数组
   */
  SSLIds: string[];
}

/**
 * AddSSLBinding - ALB的监听器绑定SSL证书
 */
export interface AddSSLBindingResponse {}

/**
 * AddTargets - 给应用型负载均衡监听器添加后端服务节点
 */
export interface AddTargetsRequest {
  /**
   * 负载均衡实例的ID
   */
  LoadBalancerId: string;
  /**
   * 监听器的ID
   */
  ListenerId: string;
  /**
   *
   */
  Targets?: {
    /**
     * 服务节点的类型。限定枚举值："UHost" / "UNI"/"UPM"/"IP"，默认值："UHost"；非IP类型，如果该资源有多个IP，将只能添加主IP；非IP类型，展示时，会显示相关资源信息，IP类型只展示IP信息。在相关资源被删除时，非IP类型会把相关资源从lb中剔除，IP类型不保证这个逻辑
     */
    ResourceType?: string;
    /**
     * 服务节点的资源ID。在非IP类型时，必传
     */
    ResourceId?: string;
    /**
     * 服务节点的VPC资源ID。在IP类型时，必传
     */
    VPCId?: string;
    /**
     * 服务节点的子网资源ID。在IP类型时，必传
     */
    SubnetId?: string;
    /**
     * 服务节点的IP。在IP类型时，必传
     */
    ResourceIP?: string;
    /**
     * 服务节点的端口。限定取值：[1-65535]，默认值80
     */
    Port?: number;
    /**
     * 服务节点的权重。限定取值：[1-100]，默认值1；仅在加权轮询算法时有效
     */
    Weight?: number;
    /**
     * 服务节点是否启用。默认值true
     */
    Enabled?: boolean;
    /**
     * 服务节点是否为备节点。默认值false
     */
    IsBackup?: boolean;
  }[];
}

/**
 * AddTargets - 给应用型负载均衡监听器添加后端服务节点
 */
export interface AddTargetsResponse {
  /**
   * 服务节点信息
   */
  Targets?: {
    /**
     * 服务节点的类型。限定枚举值：UHost -> 云主机，UNI -> 虚拟网卡，UPM -> 物理云主机，IP ->  IP类型； 默认值："UHost"； 非IP类型，如果该资源有多个IP，将只能添加主IP； 非IP类型，展示时，会显示相关资源信息，IP类型只展示IP信息。 在相关资源被删除时，非IP类型会把相关资源从lb中剔除，IP类型不保证这个逻辑
     */
    ResourceType?: string;
    /**
     * 服务节点的资源ID。在非IP类型时，必传
     */
    ResourceId?: string;
    /**
     * 服务节点的VPC资源ID。在IP类型时，必传
     */
    VPCId?: string;
    /**
     * 服务节点的子网资源ID。在IP类型时，必传
     */
    SubnetId?: string;
    /**
     * 服务节点的IP。在IP类型时，必传
     */
    ResourceIP?: string;
    /**
     * 服务节点的端口。限定取值：[1-65535]； 默认值：80
     */
    Port?: number;
    /**
     * 服务节点的权重。限定取值：[1-100]； 仅在加权轮询算法时有效； 默认值：1
     */
    Weight?: number;
    /**
     * 服务节点是否启用。 默认值：true
     */
    Enabled?: boolean;
    /**
     * 服务节点是否为备节点。 默认值：false
     */
    IsBackup?: boolean;
    /**
     * 服务节点的标识ID。
     */
    Id?: string;
    /**
     * 服务节点的健康检查状态。限定枚举值：Healthy -> 健康，Unhealthy -> 不健康
     */
    State?: string;
  }[];
}

/**
 * AllocateBackend - 添加CLB后端资源实例
 */
export interface AllocateBackendRequest {
  /**
   * 传统型负载均衡实例的ID
   */
  ULBId: string;
  /**
   * VServer实例的ID
   */
  VServerId: string;
  /**
   * 所添加的后端资源的类型，枚举值：UHost -> 云主机；UNI -> 虚拟网卡；UPM -> 物理云主机；UHybrid->混合云主机；CUBE->Cube， IP->IP类型；默认值为UHost。报文转发模式不支持UHybrid、CUBE、IP
   */
  ResourceType: string;
  /**
   * 所添加的后端资源的资源ID；与ResourceIP二选一必填
   */
  ResourceId?: string;
  /**
   * 所添加的后端服务器的资源实例IP，当ResourceType 为 UHybrid 或 IP时有效，且必填；与ResourceId二选一必填
   */
  ResourceIP?: string;
  /**
   * 所添加的后端服务器所在的vpc，当ResourceType 为 UHybrid 或 IP 时有效，且必填
   */
  VPCId?: string;
  /**
   * 所添加的后端服务器所在的子网，当ResourceType 为 UHybrid 或 IP 时有效，且必填
   */
  SubnetId?: string;
  /**
   * 所添加的后端资源服务端口，取值范围[1-65535]，默认80
   */
  Port?: number;
  /**
   * 所添加的后端RS权重（在加权轮询算法下有效），取值范围[1-100]，默认为1
   */
  Weight?: number;
  /**
   * 后端实例状态开关，枚举值： 1：启用； 0：禁用 默认为启用
   */
  Enabled?: number;
  /**
   * rs是否为backup，默认为00：普通rs1：backup的rs
   */
  IsBackup?: number;
}

/**
 * AllocateBackend - 添加CLB后端资源实例
 */
export interface AllocateBackendResponse {
  /**
   * 所添加的后端资源在CLB中的对象ID，（为CLB系统中使用，与资源自身ID无关），可用于 UpdateBackendAttribute/UpdateBackendAttributeBatch/ReleaseBackend
   */
  BackendId?: string;
}

/**
 * BindSSL - 将SSL证书绑定到传统型负载均衡VServer
 */
export interface BindSSLRequest {
  /**
   * 所绑定CLB实例ID
   */
  ULBId: string;
  /**
   * 所绑定VServer实例ID
   */
  VServerId: string;
  /**
   * SSL证书的Id
   */
  SSLId: string;
}

/**
 * BindSSL - 将SSL证书绑定到传统型负载均衡VServer
 */
export interface BindSSLResponse {}

/**
 * CreateListener - 创建一个应用型负载均衡的监听器
 */
export interface CreateListenerRequest {
  /**
   * 负载均衡实例的ID
   */
  LoadBalancerId: string;
  /**
   * 监听器的名称。限定字符长度：[1-255]；限定特殊字符，仅支持：“-”，“_”，“.”；默认值：listener
   */
  Name?: string;
  /**
   * 监听器的备注信息。限定字符长度：[0-255]
   */
  Remark?: string;
  /**
   * 监听器的监听端口。应用型限定取值：[1-65535]，默认值80
   */
  ListenerPort?: number;
  /**
   * 监听协议。应用型限定取值：“HTTP”/"HTTPS"，默认值“HTTP”
   */
  ListenerProtocol?: string;
  /**
   * （应用型专用）服务器默认证书ID。仅HTTPS监听支持，且必填；暂时只支持最大长度为1
   */
  Certificates?: string[];
  /**
   * （应用型专用）安全策略组ID。仅HTTPS监听支持绑定；默认值“Default”，表示绑定原生策略
   */
  SecurityPolicyId?: string;
  /**
   * 连接空闲超时时间。单位：秒。应用型限定取值：[1-86400]；默认值60
   */
  IdleTimeout?: number;
  /**
   * 负载均衡算法。应用型限定取值："Roundrobin"/"Source"/"WeightRoundrobin"/" Leastconn"/"Backup"，默认值"Roundrobin"
   */
  Scheduler?: string;
  /**
   *
   */
  StickinessConfig?: {
    /**
     * 是否开启会话保持功能。应用型负载均衡实例基于Cookie实现；默认值为：false
     */
    Enabled?: boolean;
    /**
     * （应用型专用）Cookie处理方式。限定枚举值："ServerInsert" / "UserDefined"；默认值为：“ServerInsert”
     */
    Type?: string;
    /**
     * （应用型专用）自定义Cookie。当StickinessType取值"UserDefined"时有效；限定字符长度：[0-255]
     */
    CookieName?: string;
  };
  /**
   *
   */
  HealthCheckConfig?: {
    /**
     * 是否开启健康检查功能。暂时不支持关闭。默认值为：true
     */
    Enabled?: boolean;
    /**
     * 健康检查方式。应用型限定取值：“Port”/"HTTP/GRPC"，默认值：“Port”
     */
    Type?: string;
    /**
     * （应用型专用）HTTP检查域名
     */
    Domain?: string;
    /**
     * （应用型专用）HTTP检查路径
     */
    Path?: string;
    /**
     * （应用型专用）HTTP检查方法。只支持GET和HEAD。
     */
    Method?: string;
    /**
     * （应用型专用）GRPC检查响应码
     */
    ResponseCode?: string;
  };
  /**
   * （应用型专用）是否开启数据压缩功能。目前只支持使用gzip对特定文件类型进行压缩。默认值为：false
   */
  CompressionEnabled?: boolean;
  /**
   * （应用型专用）是否开启HTTP/2特性。仅HTTPS监听支持开启；默认值为：false
   */
  HTTP2Enabled?: boolean;
  /**
   * （应用型专用）是否开启HTTP重定向到HTTPS。仅HTTP监听支持开启；默认值为：false
   */
  RedirectEnabled?: boolean;
  /**
   * （应用型专用）重定向端口。限定取值：[1-65535]，默认值443
   */
  RedirectPort?: number;
}

/**
 * CreateListener - 创建一个应用型负载均衡的监听器
 */
export interface CreateListenerResponse {
  /**
   * 监听器的ID
   */
  ListenerId: string;
}

/**
 * CreateLoadBalancer - 创建一个应用型负载均衡实例
 */
export interface CreateLoadBalancerRequest {
  /**
   * 负载均衡实例所属的VPC资源ID
   */
  VPCId: string;
  /**
   * 负载均衡实例所属的子网资源ID。负载均衡实例的内网VIP和SNAT场景的源IP限定在该子网内；指定子网不影响添加后端服务节点时的范围，依旧是整个VPC下支持的资源
   */
  SubnetId: string;
  /**
   * 负载均衡实例的类型。限定枚举值："Application" / "Network"，默认值："Application"
   */
  Type?: string;
  /**
   * 负载均衡实例的名称。默认值：lb；特殊字符仅支持：“-”，“_”，“.”；限定字符长度：[1-255]
   */
  Name?: string;
  /**
   * 负载均衡实例所属的业务组ID。默认值为“Default”； 传空则为Default业务组
   */
  Tag?: string;
  /**
   * 负载均衡实例的备注信息。限定字符长度：[0-255]
   */
  Remark?: string;
  /**
   * 负载均衡实例的IP协议。限定枚举值："IPv4" / "IPv6"/"DualStack"，默认值为：“IPv4”
   */
  IPVersion?: string;
  /**
   * 付费模式。限定枚举值："Year" / "Month"/"Day"/"Dynamic"，默认值为：“Month”
   */
  ChargeType?: string;
  /**
   * 购买的时长, 默认: 1; 0-> 购买至月末(0只在月付费有效，其余付费模式传0，实际收费按一个周期计费)
   */
  Quantity?: number;
  /**
   *
   */
  SecGroups?: {
    /**
     * 安全组id
     */
    SecGroupId?: string;
    /**
     * 安全组优先级
     */
    Priority?: number;
  }[];
  /**
   *
   */
  LabelInfos?: {
    /**
     * 标签键
     */
    Key?: string;
    /**
     * 标签值
     */
    Value?: string;
  }[];
  /**
   * 代金券code
   */
  CouponId?: string;
}

/**
 * CreateLoadBalancer - 创建一个应用型负载均衡实例
 */
export interface CreateLoadBalancerResponse {
  /**
   * 负载均衡实例的ID
   */
  LoadBalancerId?: string;
}

/**
 * CreatePolicy - 传统型负载均衡创建VServer内容转发策略
 */
export interface CreatePolicyRequest {
  /**
   * 需要添加内容转发策略的传统型负载均衡实例ID
   */
  ULBId: string;
  /**
   * 需要添加内容转发策略的传统型负载均衡VServer实例ID
   */
  VServerId: string;
  /**
   * 内容转发策略应用的传统型负载均衡后端资源实例的ID，来源于 AllocateBackend 返回的 BackendId
   */
  BackendId: string[];
  /**
   * 内容转发匹配字段
   */
  Match: string;
  /**
   * 内容转发规则中域名的匹配方式，默认与原本一致。枚举值：Regular，正则；Wildcard，泛域名
   */
  DomainMatchMode?: string;
  /**
   * 内容转发匹配字段的类型
   */
  Type?: string;
  /**
   * 策略优先级，1-9999；只针对路径规则生效
   */
  PolicyPriority?: number;
}

/**
 * CreatePolicy - 传统型负载均衡创建VServer内容转发策略
 */
export interface CreatePolicyResponse {
  /**
   * 内容转发策略ID
   */
  PolicyId?: string;
}

/**
 * CreateRule - 给应用型负载均衡监听器创建一条转发规则
 */
export interface CreateRuleRequest {
  /**
   * 负载均衡实例的ID
   */
  LoadBalancerId: string;
  /**
   * 监听器的ID
   */
  ListenerId: string;
  /**
   *
   */
  RuleConditions?: {
    /**
     * 匹配条件类型。限定枚举值："Host"/"Path"
     */
    Type: string;
    /**
     *
     */
    HostConfig?: {
      /**
       * 匹配方式。限定枚举值："Regular"/"Wildcard"，默认值："Regular"
       */
      MatchMode?: string;
      /**
       * 取值。暂时只支持数组长度为1；取值需符合相关匹配方式的条件；域名匹配时必填
       */
      Values?: string[];
    };
    /**
     *
     */
    PathConfig?: {
      /**
       * 取值。暂时只支持数组长度为1；取值需符合相关条件；路径匹配时必填
       */
      Values?: string[];
    };
  }[];
  /**
   *
   */
  RuleActions?: {
    /**
     * 动作类型。限定枚举值："Forward"、"InsertHeader"、"Cors"、"FixedResponse"、"RemoveHeader"。只会处理 Type 对应的结构体。
     */
    Type: string;
    /**
     *
     */
    ForwardConfig?: {
      /**
       *
       */
      Targets?: {
        /**
         * 转发的后端服务节点的标识ID。限定在监听器的服务节点池里；数组长度可以是0；转发服务节点配置的数组长度不为0时，Id必填
         */
        Id?: string;
        /**
         * 转发的后端服务节点的权重。仅监听器负载均衡算法是加权轮询是有效
         */
        Weight?: number;
      }[];
    };
    /**
     * 转发规则动作执行的顺序，取值为1~1000，按值从小到大执行动作。值不能为空，不能重复。Forward、FixedResponse 类型的动作不判断 Order，最后一个执行
     */
    Order?: number;
    /**
     *
     */
    InsertHeaderConfig?: {
      /**
       * 插入的 header 字段名称，长度为 1~40 个字符，支持大小写字母 a~z、数字、下划线（_）和短划线（-）。头字段名称不能重复用于InsertHeader中。header 字段不能使用以下(此处判断大小写不敏感)x-real-ip、x-forwarded-for、x-forwarded-proto、x-forwarded-srcport、ucloud-alb-trace、connection、upgrade、content-length、transfer-encoding、keep-alive、te、host、cookie、remoteip、authority
       */
      Key?: string;
      /**
       * 头字段内容类型。取值：UserDefined：用户指定。ReferenceHeader：引用用户请求头中的某一个字段。SystemDefined：系统定义。
       */
      ValueType?: string;
      /**
       * 插入的 header 字段内容。ValueType 取值为 SystemDefined 时取值如下：ClientSrcPort：客户端端口。ClientSrcIp：客户端 IP 地址。Protocol：客户端请求的协议（HTTP 或 HTTPS)。RuleID：客户端请求命中的转发规则ID。ALBID：ALB ID。ALBPort：ALB 端口。ValueType 取值为 UserDefined 时：可以自定义头字段内容，限制长度为 1~128 个字符，只支持 ASCII 码值ch >= 32 && ch < 127范围内、不包括 $ 的可打印字符。ValueType 取值为 ReferenceHeader 时：可以引用请求头字段中的某一个字段，限制长度限制为 1~128 个字符，支持小写字母 a~z、数字、短划线（-）和下划线（_）。
       */
      Value?: string;
    };
    /**
     *
     */
    RemoveHeaderConfig?: {
      /**
       * 删除的 header 字段名称，目前只能删除以下几个默认配置的字段X-Real-IP、X-Forwarded-For、X-Forwarded-Proto、X-Forwarded-SrcPort
       */
      Key?: string;
    };
    /**
     *
     */
    CorsConfig?: {
      /**
       * 允许的访问来源列表。支持只配置一个元素*，或配置一个或多个值。单个值必须以http://或者https://开头，后边加一个正确的域名或一级泛域名。（例：http://*.test.abc.example.com）单个值可以不加端口，也可以指定端口，端口范围：1~65535。最多支持5个值
       */
      AllowOrigin?: string[];
      /**
       * 允许跨域的 Header 列表。支持配置为*或配置一个或多个 value 值。单个 value 值只允许包含大小写字母、数字，不能以下划线（_）和短划线（-）开头或结尾，最大长度限制为 32 个字符。最多支持20个值
       */
      AllowHeaders?: string[];
      /**
       * 允许暴露的 Header 列表。支持配置为*或配置一个或多个 value 值。单个 value 值只允许包含大小写字母、数字，不能以下划线（_）和短划线（-）开头或结尾，最大长度限制为 32 个字符。最多支持20个值
       */
      ExposeHeaders?: string[];
      /**
       * 选择跨域访问时允许的 HTTP 方法。取值：GET。POST。PUT。DELETE。HEAD。OPTIONS。PATCH。
       */
      AllowMethods?: string[];
      /**
       * 是否允许携带凭证信息。取值：on：是。off：否。
       */
      AllowCredentials?: string;
      /**
       * 预检请求在浏览器的最大缓存时间，单位：秒。取值范围：-1~172800。
       */
      MaxAge?: number;
    };
    /**
     *
     */
    FixedResponseConfig?: {
      /**
       * 返回的 HTTP 响应码，仅支持 2xx、4xx、5xx 数字，x 为任意数字。
       */
      HttpCode?: number;
      /**
       * 返回的固定内容。最大支持存储 1 KB，只支持 ASCII 码值ch >= 32 && ch < 127范围内、不包括 $ 的可打印字符。
       */
      Content?: string;
    };
    /**
     *
     */
    ProxyBufferingConfig?: {
      /**
       * 关闭缓存
       */
      CloseProxyBuffering?: boolean;
    };
    /**
     *
     */
    BackendConnectionConfig?: {
      /**
       * 开启长连接
       */
      EnablePersistentConnection?: boolean;
    };
  }[];
  /**
   * 当转发的服务节点为空时，规则是否忽略。默认值true
   */
  Pass?: boolean;
}

/**
 * CreateRule - 给应用型负载均衡监听器创建一条转发规则
 */
export interface CreateRuleResponse {
  /**
   * 转发规则的ID
   */
  RuleId: string;
}

/**
 * CreateSSL - 创建SSL证书，可以把整个 Pem 证书内容传过来，或者把证书、私钥、CA证书分别传过来
 */
export interface CreateSSLRequest {
  /**
   * SSL证书的名字，默认值不为空
   */
  SSLName: string;
  /**
   * 所添加的SSL证书类型，目前只支持Pem格式
   */
  SSLType?: string;
  /**
   * SSL证书的完整内容，包括用户证书、加密证书的私钥、CA证书
   */
  SSLContent?: string;
  /**
   * 用户的证书
   */
  UserCert?: string;
  /**
   * 加密证书的私钥
   */
  PrivateKey?: string;
  /**
   * CA证书
   */
  CaCert?: string;
  /**
   * USSL证书的ID
   */
  USSLId?: string;
}

/**
 * CreateSSL - 创建SSL证书，可以把整个 Pem 证书内容传过来，或者把证书、私钥、CA证书分别传过来
 */
export interface CreateSSLResponse {
  /**
   * SSL证书的Id
   */
  SSLId?: string;
}

/**
 * CreateSecurityPolicy - 创建安全策略
 */
export interface CreateSecurityPolicyRequest {
  /**
   * TLS版本
   */
  TLSVersion: string;
  /**
   * 加密套件
   */
  SSLCiphers: string[];
  /**
   * 安全策略名称
   */
  SecurityPolicyName: string;
}

/**
 * CreateSecurityPolicy - 创建安全策略
 */
export interface CreateSecurityPolicyResponse {
  /**
   * 安全策略ID
   */
  SecurityPolicyId: string;
}

/**
 * CreateULB - 创建传统型负载均衡负载均衡实例，可以选择内网或者外网
 */
export interface CreateULBRequest {
  /**
   * 负载均衡的名字，默认值为“ULB”
   */
  ULBName?: string;
  /**
   * 业务组
   */
  Tag?: string;
  /**
   * 备注
   */
  Remark?: string;
  /**
   * 创建的CLB是否为外网模式，默认即为外网模式
   */
  OuterMode?: string;
  /**
   * 创建的CLB是否为内网模式
   */
  InnerMode?: string;
  /**
   * 付费方式, 枚举值为: Year, 按年付费; Month, 按月付费; Dynamic, 按时付费
   */
  ChargeType?: string;
  /**
   * CLB所在的VPC的ID。 如果不传则使用默认的VPC，若不传且无默认VPC则接口报错
   */
  VPCId?: string;
  /**
   * CLB 所属的子网ID，如果不传则随机选择一个。
   */
  SubnetId?: string;
  /**
   * CLB 所属的业务组ID，如果不传则使用默认的业务组
   */
  BusinessId?: string;
  /**
   * 防火墙ID，如果不传，则默认不绑定防火墙
   */
  FirewallId?: string;
  /**
   * CLB 监听器类型，外网CLB默认RequestProxy，内网ULB默认PacketsTransmit。枚举值：RequestProxy，请求代理； PacketsTransmit ，报文转发。
   */
  ListenType?: string;
}

/**
 * CreateULB - 创建传统型负载均衡负载均衡实例，可以选择内网或者外网
 */
export interface CreateULBResponse {
  /**
   * 传统型负载均衡实例的Id
   */
  ULBId?: string;
  /**
   * IPv6地址Id
   */
  IPv6AddressId?: string;
}

/**
 * CreateVServer - 创建CLB的VServer实例，定义监听的协议和端口以及负载均衡算法
 */
export interface CreateVServerRequest {
  /**
   * 传统型负载均衡实例ID
   */
  ULBId: string;
  /**
   * VServer实例名称，默认为"VServer"
   */
  VServerName?: string;
  /**
   * 监听器类型，枚举值，RequestProxy ，请求代理；PacketsTransmit ，报文转发。默认为RequestProxy
   */
  ListenType?: string;
  /**
   * VServer实例的协议，请求代理模式下有 HTTP、HTTPS、TCP，报文转发下有 TCP，UDP。默认为“HTTP"
   */
  Protocol?: string;
  /**
   * VServer后端端口，取值范围[1-65535]；默认值为80
   */
  FrontendPort?: number;
  /**
   * VServer负载均衡模式，枚举值：Roundrobin -> 轮询;Source -> 源地址；ConsistentHash -> 一致性哈希；SourcePort -> 源地址（计算端口）；ConsistentHashPort -> 一致性哈希（计算端口）; WeightRoundrobin -> 加权轮询; Leastconn -> 最小连接数;Backup ->主备模式。ConsistentHash，SourcePort，ConsistentHashPort 只在报文转发中使用；Leastconn只在请求代理中使用；Roundrobin、Source和WeightRoundrobin,Backup在请求代理和报文转发中使用。默认为："Roundrobin"
   */
  Method?: string;
  /**
   * VServer会话保持方式，默认关闭会话保持。枚举值：None -> 关闭；ServerInsert -> 自动生成KEY；UserDefined -> 用户自定义KEY。
   */
  PersistenceType?: string;
  /**
   * 根据PersistenceType确认； None和ServerInsert： 此字段无意义； UserDefined：此字段传入自定义会话保持String
   */
  PersistenceInfo?: string;
  /**
   * ListenType为RequestProxy时表示空闲连接的回收时间，单位：秒，取值范围：时(0，86400]，默认值为60；ListenType为PacketsTransmit时表示连接保持的时间，单位：秒，取值范围：[60，900]，0 表示禁用连接保持
   */
  ClientTimeout?: number;
  /**
   * 健康检查类型，枚举值：Port -> 端口检查；Path -> 路径检查；Ping -> Ping探测；Customize -> UDP检查请求代理型默认值为Port，其中TCP协议仅支持Port，其他协议支持Port和Path;报文转发型TCP协议仅支持Port，UDP协议支持Ping、Port和Customize，默认值为Ping
   */
  MonitorType?: string;
  /**
   * 根据MonitorType确认； 当MonitorType为Path时，此字段有意义，代表HTTP检查域名
   */
  Domain?: string;
  /**
   * 根据MonitorType确认； 当MonitorType为Path时，此字段有意义，代表HTTP检查路径
   */
  Path?: string;
  /**
   * 根据MonitorType确认； 当MonitorType为Customize时，此字段有意义，代表UDP检查发出的请求报文
   */
  RequestMsg?: string;
  /**
   * 根据MonitorType确认； 当MonitorType为Customize时，此字段有意义，代表UDP检查请求应收到的响应报文
   */
  ResponseMsg?: string;
  /**
   * 安全策略组ID，默认值'Default'
   */
  SecurityPolicyId?: string;
  /**
   * 0:关闭 1:开启，用于数据压缩功能
   */
  EnableCompression?: number;
  /**
   * 重定向端口，取值范围[0-65535]；默认值为0，代表关闭；仅HTTP协议支持开启重定向功能
   */
  ForwardPort?: number;
  /**
   * 0:关闭 1:开启，用于开启http2功能；默认值为0
   */
  EnableHTTP2?: number;
}

/**
 * CreateVServer - 创建CLB的VServer实例，定义监听的协议和端口以及负载均衡算法
 */
export interface CreateVServerResponse {
  /**
   * VServer实例的Id
   */
  VServerId?: string;
}

/**
 * DeleteListener - 删除一个应用型负载均衡监听器
 */
export interface DeleteListenerRequest {
  /**
   * 应用型负载均衡实例的ID
   */
  LoadBalancerId: string;
  /**
   * 应用型负载均衡监听器的ID
   */
  ListenerId: string;
  /**
   * 是否关闭相关监听器的重定向功能。默认为false，即有其他监听器重定向到本监听器，则删除失败。为true时，会先关闭相关监听器的重定向功能，再删除本监听器。默认值为：false
   */
  RelatedRedirectDisabled: boolean;
}

/**
 * DeleteListener - 删除一个应用型负载均衡监听器
 */
export interface DeleteListenerResponse {}

/**
 * DeleteLoadBalancer - 删除一个应用型负载均衡实例
 */
export interface DeleteLoadBalancerRequest {
  /**
   * 应用型负载均衡实例的ID
   */
  LoadBalancerId: string;
}

/**
 * DeleteLoadBalancer - 删除一个应用型负载均衡实例
 */
export interface DeleteLoadBalancerResponse {}

/**
 * DeletePolicy - 删除传统型负载均衡的内容转发策略
 */
export interface DeletePolicyRequest {
  /**
   * CLB的内容转发策略ID
   */
  PolicyId: string;
  /**
   * CLB的VServer 资源ID
   */
  VServerId?: string;
}

/**
 * DeletePolicy - 删除传统型负载均衡的内容转发策略
 */
export interface DeletePolicyResponse {}

/**
 * DeleteRule - 删除应用型负载均衡监听器的一条转发规则
 */
export interface DeleteRuleRequest {
  /**
   * 应用型负载均衡实例的ID
   */
  LoadBalancerId: string;
  /**
   * 应用型负载均衡监听器的ID
   */
  ListenerId: string;
  /**
   * 应用型负载均衡的转发规则的ID
   */
  RuleId: string;
}

/**
 * DeleteRule - 删除应用型负载均衡监听器的一条转发规则
 */
export interface DeleteRuleResponse {}

/**
 * DeleteSSL - 删除SSL证书
 */
export interface DeleteSSLRequest {
  /**
   * SSL证书的ID
   */
  SSLId: string;
}

/**
 * DeleteSSL - 删除SSL证书
 */
export interface DeleteSSLResponse {}

/**
 * DeleteSSLBinding - 删除监听器绑定的扩展证书
 */
export interface DeleteSSLBindingRequest {
  /**
   * 负载均衡实例的ID
   */
  LoadBalancerId: string;
  /**
   * 监听器的ID
   */
  ListenerId: string;
  /**
   * SSLId的数组
   */
  SSLIds: string[];
}

/**
 * DeleteSSLBinding - 删除监听器绑定的扩展证书
 */
export interface DeleteSSLBindingResponse {}

/**
 * DeleteSecurityPolicy - 删除安全策略
 */
export interface DeleteSecurityPolicyRequest {
  /**
   * 安全策略ID
   */
  SecurityPolicyId: string;
}

/**
 * DeleteSecurityPolicy - 删除安全策略
 */
export interface DeleteSecurityPolicyResponse {}

/**
 * DeleteULB - 删除传统型负载均衡实例
 */
export interface DeleteULBRequest {
  /**
   * 传统型负载均衡实例的ID
   */
  ULBId: string;
  /**
   * 删除clb时是否释放绑定的EIP，false标识只解绑EIP，true表示会释放绑定的EIP，默认是false。Anycast IP 此参数无效
   */
  ReleaseEip?: boolean;
}

/**
 * DeleteULB - 删除传统型负载均衡实例
 */
export interface DeleteULBResponse {}

/**
 * DeleteVServer - 删除CLB的VServer实例
 */
export interface DeleteVServerRequest {
  /**
   * 传统型负载均衡实例的ID
   */
  ULBId: string;
  /**
   * CLB下的VServer实例的ID
   */
  VServerId: string;
}

/**
 * DeleteVServer - 删除CLB的VServer实例
 */
export interface DeleteVServerResponse {}

/**
 * DescribeListeners - 描述一个指定的监听器或者一个应用型负载均衡实例下的所有监听器
 */
export interface DescribeListenersRequest {
  /**
   * 应用型负载均衡监听器的ID。若指定ListenerId，则忽略LoadBalancerId。ListenId和LoadBalancerId必选其一
   */
  ListenerId?: string;
  /**
   * 应用型负载均衡实例的ID。未指定ListenId，则描述指定的LoadBalancerId下的所有监听器。
   */
  LoadBalancerId?: string;
  /**
   * 数据偏移量，默认为0
   */
  Offset?: number;
  /**
   * 数据分页值，默认为100
   */
  Limit?: number;
}

/**
 * DescribeListeners - 描述一个指定的监听器或者一个应用型负载均衡实例下的所有监听器
 */
export interface DescribeListenersResponse {
  /**
   * 满足条件的负载均衡监听器总数
   */
  TotalCount?: number;
  /**
   * 负载均衡监听器信息
   */
  Listeners?: {
    /**
     * 监听器的ID
     */
    ListenerId?: string;
    /**
     * 监听器的名称
     */
    Name?: string;
    /**
     * 监听器的备注信息
     */
    Remark?: string;
    /**
     * 监听器的监听端口
     */
    ListenerPort?: number;
    /**
     * 监听协议。应用型限定取值： HTTP、HTTPS
     */
    ListenerProtocol?: string;
    /**
     * （应用型专用）服务器默认证书ID。仅HTTPS监听支持。具体接口详见 Certificate
     */
    Certificates?: {
      /**
       * 证书ID
       */
      SSLId?: string;
      /**
       * 是否为默认证书
       */
      IsDefault?: boolean;
    }[];
    /**
     * （应用型专用）安全策略组ID。仅HTTPS监听支持绑定；Default -> 原生策略
     */
    SecurityPolicyId?: string;
    /**
     * 连接空闲超时时间。单位：秒
     */
    IdleTimeout?: number;
    /**
     * 负载均衡算法。应用型限定取值：Roundrobin -> 轮询;Source -> 源地址； WeightRoundrobin -> 加权轮询; Leastconn -> 最小连接数；Backup ->主备模式
     */
    Scheduler?: string;
    /**
     * 会话保持相关配置。具体结构详见 StickinessConfigSet
     */
    StickinessConfig?: {
      /**
       * 是否开启会话保持功能。应用型负载均衡实例基于Cookie实现
       */
      Enabled?: boolean;
      /**
       * （应用型专用）Cookie处理方式。限定枚举值： ServerInsert -> 自动生成KEY；UserDefined -> 用户自定义KEY
       */
      Type?: string;
      /**
       * （应用型专用）自定义Cookie。当StickinessType取值"UserDefined"时有效
       */
      CookieName?: string;
    };
    /**
     * 健康检查相关配置。具体结构详见 HealthCheckConfigSet
     */
    HealthCheckConfig?: {
      /**
       * 是否开启健康检查功能。 默认值为：true
       */
      Enabled?: boolean;
      /**
       * 健康检查方式。应用型限定取值： Port -> 端口检查；HTTP -> HTTP检查；GRPC -> GRPC检测； 默认值：Port
       */
      Type?: string;
      /**
       * （应用型专用）HTTP检查域名。 当Type为HTTP/GRPC时，此字段有意义，代表HTTP检查域名
       */
      Domain?: string;
      /**
       * （应用型专用）HTTP检查路径。当Type为HTTP/GRPC时，此字段有意义，代表HTTP检查路径
       */
      Path?: string;
      /**
       * （应用型专用）HTTP检查方法。当Type为HTTP/GRPC时，此字段有意义，代表HTTP检查方法
       */
      Method?: string;
      /**
       * （应用型专用）检查预期状态码。HTTP时为2xx,3xx格式(逗号分隔)，GRPC时为数字码(逗号分隔)。
       */
      ResponseCode?: string;
      /**
       * （应用型专用）检查协议
       */
      HTTPVersion?: string;
      /**
       * （应用型专用）端口
       */
      Port?: number;
      /**
       * （应用型专用）超时时间，秒，必须小于Interval
       */
      TimeOut?: number;
      /**
       * （应用型专用）间隔时间，秒，必须大于TimeOut
       */
      Interval?: number;
      /**
       * （应用型专用）判定成功的连续次数
       */
      UpCounts?: number;
      /**
       * （应用型专用）判定失败的连续次数
       */
      DownCounts?: number;
    };
    /**
     * （应用型专用）是否开启数据压缩功能。目前只支持使用gzip对特定文件类型进行压缩
     */
    CompressionEnabled?: boolean;
    /**
     * （应用型专用）是否开启HTTP/2特性。仅HTTPS监听支持开启
     */
    HTTP2Enabled?: boolean;
    /**
     * （应用型专用）是否开启HTTP重定向到HTTPS。仅HTTP监听支持开启
     */
    RedirectEnabled?: boolean;
    /**
     * （应用型专用）重定向端口
     */
    RedirectPort?: number;
    /**
     * 添加的服务节点信息。具体结构详见 Target
     */
    Targets?: {
      /**
       * 服务节点的类型。限定枚举值：UHost -> 云主机，UNI -> 虚拟网卡，UPM -> 物理云主机，IP ->  IP类型； 默认值："UHost"； 非IP类型，如果该资源有多个IP，将只能添加主IP； 非IP类型，展示时，会显示相关资源信息，IP类型只展示IP信息。 在相关资源被删除时，非IP类型会把相关资源从lb中剔除，IP类型不保证这个逻辑
       */
      ResourceType?: string;
      /**
       * 服务节点的资源ID
       */
      ResourceId?: string;
      /**
       * 服务节点的资源名称
       */
      ResourceName?: string;
      /**
       * 服务节点的VPC资源ID
       */
      VPCId?: string;
      /**
       * 服务节点的子网资源ID
       */
      SubnetId?: string;
      /**
       * 服务节点的IP
       */
      ResourceIP?: string;
      /**
       * 服务节点的端口
       */
      Port?: number;
      /**
       * 服务节点的权重。仅在加权轮询算法时有效
       */
      Weight?: number;
      /**
       * 服务节点是否启用
       */
      Enabled?: boolean;
      /**
       * 服务节点是否为备节点
       */
      IsBackup?: boolean;
      /**
       * 服务节点的标识ID。为ALB/NLB中使用，与资源自身ID无关，可用于UpdateTargetsAttribute/RemoveTargets
       */
      Id?: string;
      /**
       * 服务节点的健康检查状态。限定枚举值：Healthy -> 健康，Unhealthy -> 不健康
       */
      State?: string;
    }[];
    /**
     * （应用型专用）转发规则信息
     */
    Rules?: {
      /**
       * 转发规则的ID
       */
      RuleId?: string;
      /**
       * 转发规则匹配条件。具体结构详见 RuleCondition
       */
      RuleConditions?: {
        /**
         * 匹配条件类型。限定枚举值：Host，Path
         */
        Type: string;
        /**
         * 域名相关配置。Type为Host时必填。具体结构详见 HostConfigSet
         */
        HostConfig?: {
          /**
           * 取值。暂时只支持数组长度为1； 取值需符合相关匹配方式的条件
           */
          Values: string[];
          /**
           * 匹配方式。限定枚举值：Regular-正则，Wildcard-泛域名； 默认值：Regular
           */
          MatchMode?: string;
        };
        /**
         * 路径相关配置。Type为Path时必填。具体结构详见 PathConfigSet
         */
        PathConfig?: {
          /**
           * 取值。暂时只支持数组长度为1； 取值需符合相关匹配方式的条件
           */
          Values: string[];
        };
      }[];
      /**
       * 转发动作。具体规则详见RuleAction
       */
      RuleActions?: {
        /**
         * 动作类型。限定枚举值：Forward、"InsertHeader"、"Cors"、"FixedResponse"、"RemoveHeader"
         */
        Type: string;
        /**
         * 转发服务节点相关配置，对应 type 值: "Forward"。具体结构详见 ForwardConfigSet
         */
        ForwardConfig?: {
          /**
           * 转发的后端服务节点。限定在监听器的服务节点池里；数组长度可以为0。具体结构详见 ForwardTargetSet
           */
          Targets: {
            /**
             * 服务节点的标识ID
             */
            Id: string;
            /**
             * 权重。仅监听器负载均衡算法是加权轮询是有效；取值范围[1-100]，默认值为1
             */
            Weight?: number;
          }[];
        };
        /**
         * 静态返回相关配置，对应 type 值: "FixedResponse"。具体结构详见 FixedResponseConfigSet
         */
        FixedResponseConfig?: {
          /**
           * 返回的 HTTP 响应码，仅支持 2xx、4xx、5xx 数字，x 为任意数字。
           */
          HttpCode: number;
          /**
           * 返回的固定内容。最大支持存储 1 KB，只支持 ASCII 码值ch >= 32 && ch < 127范围内、不包括 $ 的可打印字符。
           */
          Content?: string;
        };
        /**
         * 插入 header 相关配置，对应 type 值: "InsertHeader"。具体结构详见 InsertHeaderConfigSet
         */
        InsertHeaderConfig?: {
          /**
           * 插入的 header 字段名称，长度为 1~40 个字符，支持大小写字母 a~z、数字、下划线（_）和短划线（-）。头字段名称不能重复用于InsertHeader中。header 字段不能使用以下(此处判断大小写不敏感)x-real-ip、x-forwarded-for、x-forwarded-proto、x-forwarded-srcport、ucloud-alb-trace、connection、upgrade、content-length、transfer-encoding、keep-alive、te、host、cookie、remoteip、authority
           */
          Key: string;
          /**
           * 插入的 header 字段内容。ValueType 取值为 SystemDefined 时取值如下：ClientSrcPort：客户端端口。ClientSrcIp：客户端 IP 地址。Protocol：客户端请求的协议（HTTP 或 HTTPS)。RuleID：客户端请求命中的转发规则ID。ALBID：ALB ID。ALBPort：ALB 端口。ValueType 取值为 UserDefined 时：可以自定义头字段内容，限制长度为 1~128 个字符，只支持 ASCII 码值ch >= 32 && ch < 127范围内、不包括 $ 的可打印字符。ValueType 取值为 ReferenceHeader 时：可以引用请求头字段中的某一个字段，限制长度限制为 1~128 个字符，支持小写字母 a~z、数字、短划线（-）和下划线（_）。
           */
          Value: string;
          /**
           * 头字段内容类型。取值：UserDefined：用户指定。ReferenceHeader：引用用户请求头中的某一个字段。SystemDefined：系统定义。
           */
          ValueType: string;
        };
        /**
         * 跨域相关配置，对应 type 值: "Cors"。具体结构详见 CorsConfigSet
         */
        CorsConfig?: {
          /**
           * 允许的访问来源列表。支持只配置一个元素*，或配置一个或多个值。单个值必须以http://或者https://开头，后边加一个正确的域名或一级泛域名。（例：http://*.test.abc.example.com）单个值可以不加端口，也可以指定端口，端口范围：1~65535。最多支持5个值
           */
          AllowOrigin: string[];
          /**
           * 允许跨域的 Header 列表。支持配置为*或配置一个或多个 value 值。单个 value 值只允许包含大小写字母、数字，不能以下划线（_）和短划线（-）开头或结尾，最大长度限制为 32 个字符。最多支持20个值
           */
          AllowHeaders?: string[];
          /**
           * 允许暴露的 Header 列表。支持配置为*或配置一个或多个 value 值。单个 value 值只允许包含大小写字母、数字，不能以下划线（_）和短划线（-）开头或结尾，最大长度限制为 32 个字符。最多支持20个值
           */
          ExposeHeaders?: string[];
          /**
           * 选择跨域访问时允许的 HTTP 方法。取值：GETPOSTPUTDELETEHEADOPTIONSPATCH
           */
          AllowMethods?: string[];
          /**
           * 是否允许携带凭证信息。取值：on：是。off：否。
           */
          AllowCredentials?: string;
          /**
           * 预检请求在浏览器的最大缓存时间，单位：秒。取值范围：-1~172800。
           */
          MaxAge?: number;
        };
        /**
         * 删除 header 相关配置，对应 type 值: "RemoveHeader"。具体结构详见 RemoveHeaderConfigSet
         */
        RemoveHeaderConfig?: {
          /**
           * 	删除的 header 字段名称，目前只能删除以下几个默认配置的字段: X-Real-IP、X-Forwarded-For、X-Forwarded-Proto、X-Forwarded-SrcPort
           */
          Key: string;
        };
        /**
         * 转发规则动作执行的顺序，取值为1~1000，按值从小到大执行动作。值不能为空，不能重复。Forward、FixedResponse 类型的动作不判断 Order，最后一个执行
         */
        Order?: number;
        /**
         * 关闭缓存
         */
        ProxyBufferingConfig?: {
          /**
           * 关闭缓存
           */
          CloseProxyBuffering?: boolean;
        };
        /**
         * 开启长连接
         */
        BackendConnectionConfig?: {
          /**
           * 是否开启长连接
           */
          EnablePersistentConnection?: boolean;
        };
      }[];
      /**
       * 是否为默认转发规则
       */
      IsDefault?: boolean;
      /**
       * 当转发的服务节点为空时，规则是否忽略
       */
      Pass?: boolean;
    }[];
    /**
     * listener健康状态。限定枚举值：Healthy -> 健康，Unhealthy -> 不健康，PartialHealth -> 部分健康，None -> 无节点状态
     */
    State?: string;
    /**
     * 后端协议。应用型限定取值：“HTTP,HTTPS,GRPC"，默认值“HTTP”
     */
    TargetProtocol?: string;
  }[];
}

/**
 * DescribeLoadBalancers - 描述特定条件下的应用型负载均衡实例或者全部的应用型负载均衡实例
 */
export interface DescribeLoadBalancersRequest {
  /**
   * 负载均衡实例的类型。限定枚举值："Application" / "Network"，默认值："Application"
   */
  Type?: string;
  /**
   * 是否获取监听器和后端服务节点的详细信息。默认值：false
   */
  ShowDetail?: boolean;
  /**
   * 负载均衡实例的ID。必须是同一类型的实例，若指定了实例ID，将忽略除Type外的其他过滤条件
   */
  LoadBalancerIds?: string[];
  /**
   * 限定所在的VPC
   */
  VPCId?: string;
  /**
   * 限定所在的子网
   */
  SubnetId?: string;
  /**
   * 数据偏移量，默认为0
   */
  Offset?: string;
  /**
   * 数据分页值，默认为100
   */
  Limit?: string;
}

/**
 * DescribeLoadBalancers - 描述特定条件下的应用型负载均衡实例或者全部的应用型负载均衡实例
 */
export interface DescribeLoadBalancersResponse {
  /**
   * 满足条件的负载均衡实例总数
   */
  TotalCount: number;
  /**
   * 负载均衡实例信息
   */
  LoadBalancers: {
    /**
     * 负载均衡实例所属的VPC资源ID
     */
    VPCId?: string;
    /**
     * 负载均衡实例所属的子网资源ID。负载均衡实例的内网VIP和SNAT场景的源IP限定在该子网内；指定子网不影响添加后端服务节点时的范围，依旧是整个VPC下支持的资源
     */
    SubnetId?: string;
    /**
     * 负载均衡实例的ID
     */
    LoadBalancerId?: string;
    /**
     * 负载均衡实例的类型。限定枚举值：Application -> 应用型，Network -> 网络型
     */
    Type?: string;
    /**
     * 负载均衡实例的名称
     */
    Name?: string;
    /**
     * 负载均衡实例所属的业务组ID
     */
    Tag?: string;
    /**
     * 负载均衡实例的备注信息
     */
    Remark?: string;
    /**
     * 负载均衡实例支持的IP协议版本
     */
    IPVersion?: string;
    /**
     * 绑定的IP信息。具体结构详见 IPInfo
     */
    IPInfos?: {
      /**
       * IP地址
       */
      IP?: string;
      /**
       * 唯一标识ID
       */
      Id?: string;
      /**
       * IP协议版本
       */
      IPVersion?: string;
      /**
       * 外网IP的运营商信息。枚举值为：Telecom -> 电信，Unicom -> 联通，International -> 国际IP，Bgp -> BGP，Duplet -> 双线（电信+联通双线路），BGPPro -> 精品BGP，China-mobile -> 中国移动，Anycast -> AnycastEIP
       */
      OperatorName?: string;
      /**
       * 带宽类型。限定枚举值：1 -> 共享带宽，0 -> 普通带宽类型
       */
      BandwidthType?: number;
      /**
       * 带宽值。单位M
       */
      Bandwidth?: number;
      /**
       * 网络模式。 限定枚举值：Internet -> 互联网，Intranet -> 内联网
       */
      AddressType?: string;
    }[];
    /**
     * 应用型实例的代理IP或网络型FULLNAT模式下snat所用的IP
     */
    SnatIPs?: string[];
    /**
     * 防火墙信息
     */
    Firewall?: {
      /**
       * 防火墙名称
       */
      FirewallName?: string;
      /**
       * 防火墙ID
       */
      FirewallId?: string;
    };
    /**
     * （应用型专用）访问日志相关配置
     */
    AccessLogConfig?: {
      /**
       * （应用型专用）是否开启访问日志记录功能
       */
      Enabled?: boolean;
      /**
       * （应用型专用）用于存储访问日志的bucket
       */
      US3BucketName?: string;
      /**
       * （应用型专用）上传访问日志到bucket所需的token
       */
      US3TokenId?: string;
    };
    /**
     * 付费模式
     */
    ChargeType?: string;
    /**
     * 有效期（计费）。格式为Unix Timestamp
     */
    PurchaseValue?: number;
    /**
     * 负载均衡实例创建时间。格式为Unix Timestamp
     */
    CreateTime?: number;
    /**
     * 监听器信息。当ShowDetail为false时，为空
     */
    Listeners?: {
      /**
       * 监听器的ID
       */
      ListenerId?: string;
      /**
       * 监听器的名称
       */
      Name?: string;
      /**
       * 监听器的备注信息
       */
      Remark?: string;
      /**
       * 监听器的监听端口
       */
      ListenerPort?: number;
      /**
       * 监听协议。应用型限定取值： HTTP、HTTPS
       */
      ListenerProtocol?: string;
      /**
       * （应用型专用）服务器默认证书ID。仅HTTPS监听支持。具体接口详见 Certificate
       */
      Certificates?: {
        /**
         * 证书ID
         */
        SSLId?: string;
        /**
         * 是否为默认证书
         */
        IsDefault?: boolean;
      }[];
      /**
       * （应用型专用）安全策略组ID。仅HTTPS监听支持绑定；Default -> 原生策略
       */
      SecurityPolicyId?: string;
      /**
       * 连接空闲超时时间。单位：秒
       */
      IdleTimeout?: number;
      /**
       * 负载均衡算法。应用型限定取值：Roundrobin -> 轮询;Source -> 源地址； WeightRoundrobin -> 加权轮询; Leastconn -> 最小连接数；Backup ->主备模式
       */
      Scheduler?: string;
      /**
       * 会话保持相关配置。具体结构详见 StickinessConfigSet
       */
      StickinessConfig?: {
        /**
         * 是否开启会话保持功能。应用型负载均衡实例基于Cookie实现
         */
        Enabled?: boolean;
        /**
         * （应用型专用）Cookie处理方式。限定枚举值： ServerInsert -> 自动生成KEY；UserDefined -> 用户自定义KEY
         */
        Type?: string;
        /**
         * （应用型专用）自定义Cookie。当StickinessType取值"UserDefined"时有效
         */
        CookieName?: string;
      };
      /**
       * 健康检查相关配置。具体结构详见 HealthCheckConfigSet
       */
      HealthCheckConfig?: {
        /**
         * 是否开启健康检查功能。 默认值为：true
         */
        Enabled?: boolean;
        /**
         * 健康检查方式。应用型限定取值： Port -> 端口检查；HTTP -> HTTP检查；GRPC -> GRPC检测； 默认值：Port
         */
        Type?: string;
        /**
         * （应用型专用）HTTP检查域名。 当Type为HTTP/GRPC时，此字段有意义，代表HTTP检查域名
         */
        Domain?: string;
        /**
         * （应用型专用）HTTP检查路径。当Type为HTTP/GRPC时，此字段有意义，代表HTTP检查路径
         */
        Path?: string;
        /**
         * （应用型专用）HTTP检查方法。当Type为HTTP/GRPC时，此字段有意义，代表HTTP检查方法
         */
        Method?: string;
        /**
         * （应用型专用）检查预期状态码。HTTP时为2xx,3xx格式(逗号分隔)，GRPC时为数字码(逗号分隔)。
         */
        ResponseCode?: string;
        /**
         * （应用型专用）检查协议
         */
        HTTPVersion?: string;
        /**
         * （应用型专用）端口
         */
        Port?: number;
        /**
         * （应用型专用）超时时间，秒，必须小于Interval
         */
        TimeOut?: number;
        /**
         * （应用型专用）间隔时间，秒，必须大于TimeOut
         */
        Interval?: number;
        /**
         * （应用型专用）判定成功的连续次数
         */
        UpCounts?: number;
        /**
         * （应用型专用）判定失败的连续次数
         */
        DownCounts?: number;
      };
      /**
       * （应用型专用）是否开启数据压缩功能。目前只支持使用gzip对特定文件类型进行压缩
       */
      CompressionEnabled?: boolean;
      /**
       * （应用型专用）是否开启HTTP/2特性。仅HTTPS监听支持开启
       */
      HTTP2Enabled?: boolean;
      /**
       * （应用型专用）是否开启HTTP重定向到HTTPS。仅HTTP监听支持开启
       */
      RedirectEnabled?: boolean;
      /**
       * （应用型专用）重定向端口
       */
      RedirectPort?: number;
      /**
       * 添加的服务节点信息。具体结构详见 Target
       */
      Targets?: {
        /**
         * 服务节点的类型。限定枚举值：UHost -> 云主机，UNI -> 虚拟网卡，UPM -> 物理云主机，IP ->  IP类型； 默认值："UHost"； 非IP类型，如果该资源有多个IP，将只能添加主IP； 非IP类型，展示时，会显示相关资源信息，IP类型只展示IP信息。 在相关资源被删除时，非IP类型会把相关资源从lb中剔除，IP类型不保证这个逻辑
         */
        ResourceType?: string;
        /**
         * 服务节点的资源ID
         */
        ResourceId?: string;
        /**
         * 服务节点的资源名称
         */
        ResourceName?: string;
        /**
         * 服务节点的VPC资源ID
         */
        VPCId?: string;
        /**
         * 服务节点的子网资源ID
         */
        SubnetId?: string;
        /**
         * 服务节点的IP
         */
        ResourceIP?: string;
        /**
         * 服务节点的端口
         */
        Port?: number;
        /**
         * 服务节点的权重。仅在加权轮询算法时有效
         */
        Weight?: number;
        /**
         * 服务节点是否启用
         */
        Enabled?: boolean;
        /**
         * 服务节点是否为备节点
         */
        IsBackup?: boolean;
        /**
         * 服务节点的标识ID。为ALB/NLB中使用，与资源自身ID无关，可用于UpdateTargetsAttribute/RemoveTargets
         */
        Id?: string;
        /**
         * 服务节点的健康检查状态。限定枚举值：Healthy -> 健康，Unhealthy -> 不健康
         */
        State?: string;
      }[];
      /**
       * （应用型专用）转发规则信息
       */
      Rules?: {
        /**
         * 转发规则的ID
         */
        RuleId?: string;
        /**
         * 转发规则匹配条件。具体结构详见 RuleCondition
         */
        RuleConditions?: {
          /**
           * 匹配条件类型。限定枚举值：Host，Path
           */
          Type: string;
          /**
           * 域名相关配置。Type为Host时必填。具体结构详见 HostConfigSet
           */
          HostConfig?: {
            /**
             * 取值。暂时只支持数组长度为1； 取值需符合相关匹配方式的条件
             */
            Values: string[];
            /**
             * 匹配方式。限定枚举值：Regular-正则，Wildcard-泛域名； 默认值：Regular
             */
            MatchMode?: string;
          };
          /**
           * 路径相关配置。Type为Path时必填。具体结构详见 PathConfigSet
           */
          PathConfig?: {
            /**
             * 取值。暂时只支持数组长度为1； 取值需符合相关匹配方式的条件
             */
            Values: string[];
          };
        }[];
        /**
         * 转发动作。具体规则详见RuleAction
         */
        RuleActions?: {
          /**
           * 动作类型。限定枚举值：Forward、"InsertHeader"、"Cors"、"FixedResponse"、"RemoveHeader"
           */
          Type: string;
          /**
           * 转发服务节点相关配置，对应 type 值: "Forward"。具体结构详见 ForwardConfigSet
           */
          ForwardConfig?: {
            /**
             * 转发的后端服务节点。限定在监听器的服务节点池里；数组长度可以为0。具体结构详见 ForwardTargetSet
             */
            Targets: {
              /**
               * 服务节点的标识ID
               */
              Id: string;
              /**
               * 权重。仅监听器负载均衡算法是加权轮询是有效；取值范围[1-100]，默认值为1
               */
              Weight?: number;
            }[];
          };
          /**
           * 静态返回相关配置，对应 type 值: "FixedResponse"。具体结构详见 FixedResponseConfigSet
           */
          FixedResponseConfig?: {
            /**
             * 返回的 HTTP 响应码，仅支持 2xx、4xx、5xx 数字，x 为任意数字。
             */
            HttpCode: number;
            /**
             * 返回的固定内容。最大支持存储 1 KB，只支持 ASCII 码值ch >= 32 && ch < 127范围内、不包括 $ 的可打印字符。
             */
            Content?: string;
          };
          /**
           * 插入 header 相关配置，对应 type 值: "InsertHeader"。具体结构详见 InsertHeaderConfigSet
           */
          InsertHeaderConfig?: {
            /**
             * 插入的 header 字段名称，长度为 1~40 个字符，支持大小写字母 a~z、数字、下划线（_）和短划线（-）。头字段名称不能重复用于InsertHeader中。header 字段不能使用以下(此处判断大小写不敏感)x-real-ip、x-forwarded-for、x-forwarded-proto、x-forwarded-srcport、ucloud-alb-trace、connection、upgrade、content-length、transfer-encoding、keep-alive、te、host、cookie、remoteip、authority
             */
            Key: string;
            /**
             * 插入的 header 字段内容。ValueType 取值为 SystemDefined 时取值如下：ClientSrcPort：客户端端口。ClientSrcIp：客户端 IP 地址。Protocol：客户端请求的协议（HTTP 或 HTTPS)。RuleID：客户端请求命中的转发规则ID。ALBID：ALB ID。ALBPort：ALB 端口。ValueType 取值为 UserDefined 时：可以自定义头字段内容，限制长度为 1~128 个字符，只支持 ASCII 码值ch >= 32 && ch < 127范围内、不包括 $ 的可打印字符。ValueType 取值为 ReferenceHeader 时：可以引用请求头字段中的某一个字段，限制长度限制为 1~128 个字符，支持小写字母 a~z、数字、短划线（-）和下划线（_）。
             */
            Value: string;
            /**
             * 头字段内容类型。取值：UserDefined：用户指定。ReferenceHeader：引用用户请求头中的某一个字段。SystemDefined：系统定义。
             */
            ValueType: string;
          };
          /**
           * 跨域相关配置，对应 type 值: "Cors"。具体结构详见 CorsConfigSet
           */
          CorsConfig?: {
            /**
             * 允许的访问来源列表。支持只配置一个元素*，或配置一个或多个值。单个值必须以http://或者https://开头，后边加一个正确的域名或一级泛域名。（例：http://*.test.abc.example.com）单个值可以不加端口，也可以指定端口，端口范围：1~65535。最多支持5个值
             */
            AllowOrigin: string[];
            /**
             * 允许跨域的 Header 列表。支持配置为*或配置一个或多个 value 值。单个 value 值只允许包含大小写字母、数字，不能以下划线（_）和短划线（-）开头或结尾，最大长度限制为 32 个字符。最多支持20个值
             */
            AllowHeaders?: string[];
            /**
             * 允许暴露的 Header 列表。支持配置为*或配置一个或多个 value 值。单个 value 值只允许包含大小写字母、数字，不能以下划线（_）和短划线（-）开头或结尾，最大长度限制为 32 个字符。最多支持20个值
             */
            ExposeHeaders?: string[];
            /**
             * 选择跨域访问时允许的 HTTP 方法。取值：GETPOSTPUTDELETEHEADOPTIONSPATCH
             */
            AllowMethods?: string[];
            /**
             * 是否允许携带凭证信息。取值：on：是。off：否。
             */
            AllowCredentials?: string;
            /**
             * 预检请求在浏览器的最大缓存时间，单位：秒。取值范围：-1~172800。
             */
            MaxAge?: number;
          };
          /**
           * 删除 header 相关配置，对应 type 值: "RemoveHeader"。具体结构详见 RemoveHeaderConfigSet
           */
          RemoveHeaderConfig?: {
            /**
             * 	删除的 header 字段名称，目前只能删除以下几个默认配置的字段: X-Real-IP、X-Forwarded-For、X-Forwarded-Proto、X-Forwarded-SrcPort
             */
            Key: string;
          };
          /**
           * 转发规则动作执行的顺序，取值为1~1000，按值从小到大执行动作。值不能为空，不能重复。Forward、FixedResponse 类型的动作不判断 Order，最后一个执行
           */
          Order?: number;
          /**
           * 关闭缓存
           */
          ProxyBufferingConfig?: {
            /**
             * 关闭缓存
             */
            CloseProxyBuffering?: boolean;
          };
          /**
           * 开启长连接
           */
          BackendConnectionConfig?: {
            /**
             * 是否开启长连接
             */
            EnablePersistentConnection?: boolean;
          };
        }[];
        /**
         * 是否为默认转发规则
         */
        IsDefault?: boolean;
        /**
         * 当转发的服务节点为空时，规则是否忽略
         */
        Pass?: boolean;
      }[];
      /**
       * listener健康状态。限定枚举值：Healthy -> 健康，Unhealthy -> 不健康，PartialHealth -> 部分健康，None -> 无节点状态
       */
      State?: string;
      /**
       * 后端协议。应用型限定取值：“HTTP,HTTPS,GRPC"，默认值“HTTP”
       */
      TargetProtocol?: string;
    }[];
    /**
     * lb状态：Normal-正常；Arrears-欠费停服
     */
    Status?: string;
    /**
     * 是否开启自动续费
     */
    AutoRenewEnabled?: boolean;
    /**
     * 安全组信息
     */
    SecGroup?: {
      /**
       * 安全组id
       */
      SecgroupId?: string;
      /**
       * 安全组名称
       */
      Name?: string;
      /**
       * 安全组所属vpc id
       */
      VPCId?: string;
      /**
       * 优先级
       */
      Priority?: number;
    }[];
  }[];
}

/**
 * DescribeRules - 描述一条指定的转发规则或者一个应用型负载均衡监听器下的所有转发规则
 */
export interface DescribeRulesRequest {
  /**
   * 应用型负载均衡实例的ID
   */
  LoadBalancerId: string;
  /**
   * 监听器的ID
   */
  ListenerId: string;
  /**
   * 应用型负载均衡转发规则的ID。指定RuleId，则只描述该规则
   */
  RuleId?: string;
}

/**
 * DescribeRules - 描述一条指定的转发规则或者一个应用型负载均衡监听器下的所有转发规则
 */
export interface DescribeRulesResponse {
  /**
   * 转发规则信息
   */
  Rules: {
    /**
     * 转发规则的ID
     */
    RuleId?: string;
    /**
     * 转发规则匹配条件。具体结构详见 RuleCondition
     */
    RuleConditions?: {
      /**
       * 匹配条件类型。限定枚举值：Host，Path
       */
      Type: string;
      /**
       * 域名相关配置。Type为Host时必填。具体结构详见 HostConfigSet
       */
      HostConfig?: {
        /**
         * 取值。暂时只支持数组长度为1； 取值需符合相关匹配方式的条件
         */
        Values: string[];
        /**
         * 匹配方式。限定枚举值：Regular-正则，Wildcard-泛域名； 默认值：Regular
         */
        MatchMode?: string;
      };
      /**
       * 路径相关配置。Type为Path时必填。具体结构详见 PathConfigSet
       */
      PathConfig?: {
        /**
         * 取值。暂时只支持数组长度为1； 取值需符合相关匹配方式的条件
         */
        Values: string[];
      };
    }[];
    /**
     * 转发动作。具体规则详见RuleAction
     */
    RuleActions?: {
      /**
       * 动作类型。限定枚举值：Forward、"InsertHeader"、"Cors"、"FixedResponse"、"RemoveHeader"
       */
      Type: string;
      /**
       * 转发服务节点相关配置，对应 type 值: "Forward"。具体结构详见 ForwardConfigSet
       */
      ForwardConfig?: {
        /**
         * 转发的后端服务节点。限定在监听器的服务节点池里；数组长度可以为0。具体结构详见 ForwardTargetSet
         */
        Targets: {
          /**
           * 服务节点的标识ID
           */
          Id: string;
          /**
           * 权重。仅监听器负载均衡算法是加权轮询是有效；取值范围[1-100]，默认值为1
           */
          Weight?: number;
        }[];
      };
      /**
       * 静态返回相关配置，对应 type 值: "FixedResponse"。具体结构详见 FixedResponseConfigSet
       */
      FixedResponseConfig?: {
        /**
         * 返回的 HTTP 响应码，仅支持 2xx、4xx、5xx 数字，x 为任意数字。
         */
        HttpCode: number;
        /**
         * 返回的固定内容。最大支持存储 1 KB，只支持 ASCII 码值ch >= 32 && ch < 127范围内、不包括 $ 的可打印字符。
         */
        Content?: string;
      };
      /**
       * 插入 header 相关配置，对应 type 值: "InsertHeader"。具体结构详见 InsertHeaderConfigSet
       */
      InsertHeaderConfig?: {
        /**
         * 插入的 header 字段名称，长度为 1~40 个字符，支持大小写字母 a~z、数字、下划线（_）和短划线（-）。头字段名称不能重复用于InsertHeader中。header 字段不能使用以下(此处判断大小写不敏感)x-real-ip、x-forwarded-for、x-forwarded-proto、x-forwarded-srcport、ucloud-alb-trace、connection、upgrade、content-length、transfer-encoding、keep-alive、te、host、cookie、remoteip、authority
         */
        Key: string;
        /**
         * 插入的 header 字段内容。ValueType 取值为 SystemDefined 时取值如下：ClientSrcPort：客户端端口。ClientSrcIp：客户端 IP 地址。Protocol：客户端请求的协议（HTTP 或 HTTPS)。RuleID：客户端请求命中的转发规则ID。ALBID：ALB ID。ALBPort：ALB 端口。ValueType 取值为 UserDefined 时：可以自定义头字段内容，限制长度为 1~128 个字符，只支持 ASCII 码值ch >= 32 && ch < 127范围内、不包括 $ 的可打印字符。ValueType 取值为 ReferenceHeader 时：可以引用请求头字段中的某一个字段，限制长度限制为 1~128 个字符，支持小写字母 a~z、数字、短划线（-）和下划线（_）。
         */
        Value: string;
        /**
         * 头字段内容类型。取值：UserDefined：用户指定。ReferenceHeader：引用用户请求头中的某一个字段。SystemDefined：系统定义。
         */
        ValueType: string;
      };
      /**
       * 跨域相关配置，对应 type 值: "Cors"。具体结构详见 CorsConfigSet
       */
      CorsConfig?: {
        /**
         * 允许的访问来源列表。支持只配置一个元素*，或配置一个或多个值。单个值必须以http://或者https://开头，后边加一个正确的域名或一级泛域名。（例：http://*.test.abc.example.com）单个值可以不加端口，也可以指定端口，端口范围：1~65535。最多支持5个值
         */
        AllowOrigin: string[];
        /**
         * 允许跨域的 Header 列表。支持配置为*或配置一个或多个 value 值。单个 value 值只允许包含大小写字母、数字，不能以下划线（_）和短划线（-）开头或结尾，最大长度限制为 32 个字符。最多支持20个值
         */
        AllowHeaders?: string[];
        /**
         * 允许暴露的 Header 列表。支持配置为*或配置一个或多个 value 值。单个 value 值只允许包含大小写字母、数字，不能以下划线（_）和短划线（-）开头或结尾，最大长度限制为 32 个字符。最多支持20个值
         */
        ExposeHeaders?: string[];
        /**
         * 选择跨域访问时允许的 HTTP 方法。取值：GETPOSTPUTDELETEHEADOPTIONSPATCH
         */
        AllowMethods?: string[];
        /**
         * 是否允许携带凭证信息。取值：on：是。off：否。
         */
        AllowCredentials?: string;
        /**
         * 预检请求在浏览器的最大缓存时间，单位：秒。取值范围：-1~172800。
         */
        MaxAge?: number;
      };
      /**
       * 删除 header 相关配置，对应 type 值: "RemoveHeader"。具体结构详见 RemoveHeaderConfigSet
       */
      RemoveHeaderConfig?: {
        /**
         * 	删除的 header 字段名称，目前只能删除以下几个默认配置的字段: X-Real-IP、X-Forwarded-For、X-Forwarded-Proto、X-Forwarded-SrcPort
         */
        Key: string;
      };
      /**
       * 转发规则动作执行的顺序，取值为1~1000，按值从小到大执行动作。值不能为空，不能重复。Forward、FixedResponse 类型的动作不判断 Order，最后一个执行
       */
      Order?: number;
      /**
       * 关闭缓存
       */
      ProxyBufferingConfig?: {
        /**
         * 关闭缓存
         */
        CloseProxyBuffering?: boolean;
      };
      /**
       * 开启长连接
       */
      BackendConnectionConfig?: {
        /**
         * 是否开启长连接
         */
        EnablePersistentConnection?: boolean;
      };
    }[];
    /**
     * 是否为默认转发规则
     */
    IsDefault?: boolean;
    /**
     * 当转发的服务节点为空时，规则是否忽略
     */
    Pass?: boolean;
  }[];
}

/**
 * DescribeSSL - 获取SSL证书信息，仅能获取SSL证书与传统型负载均衡监听器的绑定关系
 */
export interface DescribeSSLRequest {
  /**
   * SSL证书的Id
   */
  SSLId?: string;
  /**
   * 数据分页值，默认为20
   */
  Limit?: number;
  /**
   * 数据偏移量，默认值为0
   */
  Offset?: number;
}

/**
 * DescribeSSL - 获取SSL证书信息，仅能获取SSL证书与传统型负载均衡监听器的绑定关系
 */
export interface DescribeSSLResponse {
  /**
   * 满足条件的SSL证书总数
   */
  TotalCount?: number;
  /**
   * SSL证书详细信息，具体结构见 ULBSSLSet
   */
  DataSet?: {
    /**
     * SSL证书的Id
     */
    SSLId?: string;
    /**
     * SSL证书的名字
     */
    SSLName?: string;
    /**
     * SSL证书类型，暂时只有 Pem 一种类型
     */
    SSLType?: string;
    /**
     * SSL证书的内容
     */
    SSLContent?: string;
    /**
     * SSL证书的创建时间
     */
    CreateTime?: number;
    /**
     * SSL证书的HASH值
     */
    HashValue?: string;
    /**
     * SSL证书绑定到的对象
     */
    BindedTargetSet?: {
      /**
       * SSL证书绑定到的VServer的资源ID
       */
      VServerId?: string;
      /**
       * 对应的VServer的名字
       */
      VServerName?: string;
      /**
       * VServer 所属的ULB实例的资源ID
       */
      ULBId?: string;
      /**
       * ULB实例的名称
       */
      ULBName?: string;
    }[];
    /**
     * SSL证书来源，SSL证书来源，0代表证书来自于ULB平台，1代表证书来自于USSL平台
     */
    SSLSource?: number;
    /**
     * USSL证书平台的编号,只有当SSLSource为1时才出现
     */
    USSLId?: string;
    /**
     * SSL证书平台的域名，多域名时，不展示扩展域名
     */
    Domains?: string;
    /**
     * 证书颁发时间
     */
    NotBefore?: number;
    /**
     * 证书过期时间
     */
    NotAfter?: number;
  }[];
}

/**
 * DescribeSSLV2 - 获取SSL证书信息，该接口可以同时获取SSL与传统型和应用型负载均衡监听器的绑定关系
 */
export interface DescribeSSLV2Request {
  /**
   * SSL证书的Id
   */
  SSLId?: string;
  /**
   * 数据分页值，默认为20
   */
  Limit?: number;
  /**
   * 数据偏移量，默认值为0
   */
  Offset?: number;
}

/**
 * DescribeSSLV2 - 获取SSL证书信息，该接口可以同时获取SSL与传统型和应用型负载均衡监听器的绑定关系
 */
export interface DescribeSSLV2Response {
  /**
   * 满足条件的SSL证书总数
   */
  TotalCount?: number;
  /**
   * SSL证书详细信息，具体结构见SSLInfo
   */
  DataSet?: {
    /**
     * SSL证书的Id
     */
    SSLId?: string;
    /**
     * SSL证书的名字
     */
    SSLName?: string;
    /**
     * SSL证书类型，暂时只有 Pem 一种类型
     */
    SSLType?: string;
    /**
     * SSL证书的内容
     */
    SSLContent?: string;
    /**
     * SSL证书的创建时间
     */
    CreateTime?: number;
    /**
     * SSL证书的HASH值
     */
    HashValue?: string;
    /**
     * SSL绑定ULB和ALB的关系
     */
    Relations?: {
      /**
       * 负载均衡实例的ID
       */
      LoadBalancerId?: string;
      /**
       * 负载均衡实例的名称
       */
      LoadBalancerName?: string;
      /**
       * 监听器的ID
       */
      ListenerId?: string;
      /**
       * 监听器的名称
       */
      ListenerName?: string;
      /**
       * 是否为监听器默认SSL证书
       */
      IsDefault?: boolean;
    }[];
    /**
     * SSL证书来源，SSL证书来源，0代表证书来自于ULB平台，1代表证书来自于USSL平台
     */
    SSLSource?: number;
    /**
     * USSL证书平台的编号,只有当SSLSource为1时才出现
     */
    USSLId?: string;
    /**
     * SSL证书的域名
     */
    Domains?: string;
    /**
     * SSL证书的扩展域名
     */
    DNSNames?: string;
    /**
     * 证书颁发时间
     */
    NotBefore?: number;
    /**
     * 证书过期时间
     */
    NotAfter?: number;
  }[];
}

/**
 * DescribeSecurityPolicies - 获取安全策略的信息，绑定关系仅能获取安全策略与传统型负载均衡监听器的绑定关系
 */
export interface DescribeSecurityPoliciesRequest {
  /**
   * 安全策略ID
   */
  SecurityPolicyId?: string;
  /**
   * 数据分页值
   */
  Limit?: number;
  /**
   * 数据偏移量
   */
  Offset?: number;
}

/**
 * DescribeSecurityPolicies - 获取安全策略的信息，绑定关系仅能获取安全策略与传统型负载均衡监听器的绑定关系
 */
export interface DescribeSecurityPoliciesResponse {
  /**
   * 	安全策略列表，每项参数详见SecurityPolicy
   */
  DataSet?: {
    /**
     * 安全策略ID
     */
    SecurityPolicyId: string;
    /**
     * 安全策略名称
     */
    SecurityPolicyName: string;
    /**
     * TLS最低版本
     */
    TLSVersion: string;
    /**
     * 加密套件
     */
    SSLCiphers: string[];
    /**
     * 安全策略类型 0：预定义 1：自定义
     */
    SecurityPolicyType: number;
    /**
     * 关联的监听
     */
    VServerSet: {
      /**
       * 绑定的VServerId
       */
      VServerId: string;
      /**
       * 绑定的VServer名称
       */
      VServerName: string;
      /**
       * VServer端口
       */
      Port: number;
      /**
       * ULB的ID
       */
      ULBId: string;
    }[];
  }[];
  /**
   * 满足条件的安全策略总数
   */
  TotalCount?: number;
}

/**
 * DescribeSecurityPoliciesV2 - 获取安全策略的信息，可以同时获取安全策略与传统型和应用性负载均衡监听器的绑定关系
 */
export interface DescribeSecurityPoliciesV2Request {
  /**
   * 安全策略ID
   */
  SecurityPolicyId?: string;
  /**
   * 数据分页值
   */
  Limit?: number;
  /**
   * 数据偏移量
   */
  Offset?: number;
}

/**
 * DescribeSecurityPoliciesV2 - 获取安全策略的信息，可以同时获取安全策略与传统型和应用性负载均衡监听器的绑定关系
 */
export interface DescribeSecurityPoliciesV2Response {
  /**
   * 	安全策略列表，每项参数详见SecurityPolicyInfo
   */
  DataSet?: {
    /**
     * 安全策略ID
     */
    SecurityPolicyId?: string;
    /**
     * 安全策略名称
     */
    SecurityPolicyName?: string;
    /**
     * TLS最低版本
     */
    TLSVersion?: string;
    /**
     * 加密套件
     */
    SSLCiphers?: string[];
    /**
     * 安全策略类型 0：预定义 1：自定义
     */
    SecurityPolicyType?: number;
    /**
     * 关联的监听
     */
    Relations?: {
      /**
       * 负载均衡实例的ID
       */
      LoadBalancerId?: string;
      /**
       * 监听器的ID
       */
      ListenerId?: string;
      /**
       * 监听器的名称
       */
      ListenerName?: string;
      /**
       * 监听端口
       */
      ListenerPort?: number;
    }[];
  }[];
  /**
   * 满足条件的安全策略总数
   */
  TotalCount?: number;
}

/**
 * DescribeSupportCiphers - 返回安全策略所有支持的加密套件
 */
export interface DescribeSupportCiphersRequest {}

/**
 * DescribeSupportCiphers - 返回安全策略所有支持的加密套件
 */
export interface DescribeSupportCiphersResponse {
  /**
   * 返回支持的TLS最低版本和加密套件，每项参数详见 TLSAndCiphers
   */
  DataSet?: {
    /**
     * TLS最低版本
     */
    TLSVersion?: string;
    /**
     * 加密套件
     */
    SSLCiphers?: string[];
  }[];
}

/**
 * DescribeULB - 获取CLB详细信息
 */
export interface DescribeULBRequest {
  /**
   * 数据偏移量，默认为0
   */
  Offset?: number;
  /**
   * 数据分页值，默认为20
   */
  Limit?: number;
  /**
   * 传统型负载均衡实例的Id。 若指定则返回指定的传统型负载均衡实例的信息； 若不指定则返回当前数据中心中所有的传统型负载均衡实例的信息
   */
  ULBId?: string;
  /**
   * CLB所属的VPC
   */
  VPCId?: string;
  /**
   * CLB所属的子网ID
   */
  SubnetId?: string;
  /**
   * CLB所属的业务组ID
   */
  BusinessId?: string;
}

/**
 * DescribeULB - 获取CLB详细信息
 */
export interface DescribeULBResponse {
  /**
   * 满足条件的CLB总数
   */
  TotalCount?: number;
  /**
   * CLB列表，每项参数详见 ULBSet
   */
  DataSet?: {
    /**
     * 负载均衡的资源ID
     */
    ULBId?: string;
    /**
     * 负载均衡的资源名称
     */
    Name?: string;
    /**
     * 负载均衡的业务组名称
     */
    Tag?: string;
    /**
     * 负载均衡的备注
     */
    Remark?: string;
    /**
     * 带宽类型，枚举值为： 0，非共享带宽； 1，共享带宽
     */
    BandwidthType?: number;
    /**
     * 带宽
     */
    Bandwidth?: number;
    /**
     * ULB的创建时间，格式为Unix Timestamp
     */
    CreateTime?: number;
    /**
     * ULB的详细信息列表，具体结构见下方 ULBIPSet
     */
    IPSet?: {
      /**
       * 弹性IP的运营商信息，枚举值为：  Bgp：BGP IP International：国际IP
       */
      OperatorName?: string;
      /**
       * 弹性IP地址
       */
      EIP?: string;
      /**
       * 弹性IP的ID
       */
      EIPId?: string;
      /**
       * 弹性IP的带宽类型，枚举值：1 表示是共享带宽，0 普通带宽类型（暂未对外开放）
       */
      BandwidthType?: number;
      /**
       * 弹性IP的带宽值（暂未对外开放）
       */
      Bandwidth?: number;
    }[];
    /**
     * 负载均衡实例中存在的VServer实例列表，具体结构见下方 ULBVServerSet
     */
    VServerSet?: {
      /**
       * 健康检查类型，枚举值：Port -> 端口检查；Path -> 路径检查；Ping -> Ping探测， Customize -> UDP检查请求代理型默认值为Port，其中TCP协议仅支持Port，其他协议支持Port和Path; 报文转发型TCP协议仅支持Port，UDP协议支持Ping、Port和Customize
       */
      MonitorType: string;
      /**
       * VServer会话保持方式。枚举值为： None -> 关闭会话保持； ServerInsert -> 自动生成； UserDefined -> 用户自定义。
       */
      PersistenceType: string;
      /**
       * 负载均衡实例的Id
       */
      ULBId?: string;
      /**
       * 根据MonitorType确认； 当MonitorType为Port时，此字段无意义。当MonitorType为Path时，代表HTTP检查域名
       */
      Domain?: string;
      /**
       * 根据MonitorType确认； 当MonitorType为Port时，此字段无意义。当MonitorType为Path时，代表HTTP检查路径
       */
      Path?: string;
      /**
       * 根据MonitorType确认； 当MonitorType为Customize时，此字段有意义，代表UDP检查发出的请求报文
       */
      RequestMsg?: string;
      /**
       * 根据MonitorType确认； 当MonitorType为Customize时，此字段有意义，代表UDP检查请求应收到的响应报文
       */
      ResponseMsg?: string;
      /**
       * VServer实例的Id
       */
      VServerId?: string;
      /**
       * VServer实例的名字
       */
      VServerName?: string;
      /**
       * VServer实例的协议。 枚举值为：HTTP，TCP，UDP，HTTPS。
       */
      Protocol?: string;
      /**
       * VServer服务端口
       */
      FrontendPort?: number;
      /**
       * VServer负载均衡的模式，枚举值：Roundrobin -> 轮询;Source -> 源地址；ConsistentHash -> 一致性哈希；SourcePort -> 源地址（计算端口）；ConsistentHashPort -> 一致性哈希（计算端口）。
       */
      Method?: string;
      /**
       * 根据PersistenceType确定： None或ServerInsert，此字段为空； UserDefined，此字段展示用户自定义会话string。
       */
      PersistenceInfo?: string;
      /**
       * 空闲连接的回收时间，单位：秒。
       */
      ClientTimeout?: number;
      /**
       * VServer的运行状态。枚举值： 0 -> rs全部运行正常;1 -> rs全部运行异常；2 -> rs部分运行异常。
       */
      Status?: number;
      /**
       * VServer绑定的SSL证书信息，具体结构见下方 ULBSSLSet。
       */
      SSLSet?: {
        /**
         * SSL证书的Id
         */
        SSLId?: string;
        /**
         * SSL证书的名字
         */
        SSLName?: string;
        /**
         * SSL证书类型，暂时只有 Pem 一种类型
         */
        SSLType?: string;
        /**
         * SSL证书的内容
         */
        SSLContent?: string;
        /**
         * SSL证书的创建时间
         */
        CreateTime?: number;
        /**
         * SSL证书的HASH值
         */
        HashValue?: string;
        /**
         * SSL证书绑定到的对象
         */
        BindedTargetSet?: {
          /**
           * SSL证书绑定到的VServer的资源ID
           */
          VServerId?: string;
          /**
           * 对应的VServer的名字
           */
          VServerName?: string;
          /**
           * VServer 所属的ULB实例的资源ID
           */
          ULBId?: string;
          /**
           * ULB实例的名称
           */
          ULBName?: string;
        }[];
        /**
         * SSL证书来源，SSL证书来源，0代表证书来自于ULB平台，1代表证书来自于USSL平台
         */
        SSLSource?: number;
        /**
         * USSL证书平台的编号,只有当SSLSource为1时才出现
         */
        USSLId?: string;
        /**
         * SSL证书平台的域名，多域名时，不展示扩展域名
         */
        Domains?: string;
        /**
         * 证书颁发时间
         */
        NotBefore?: number;
        /**
         * 证书过期时间
         */
        NotAfter?: number;
      }[];
      /**
       * 后端资源信息列表，具体结构见下方 ULBBackendSet
       */
      BackendSet?: {
        /**
         * 后端资源实例的Id
         */
        BackendId?: string;
        /**
         * 资源实例的类型
         */
        ResourceType?: string;
        /**
         * 资源实例的资源Id
         */
        ResourceId?: string;
        /**
         * 资源实例的资源名称
         */
        ResourceName?: string;
        /**
         * 资源绑定的虚拟网卡实例的类型
         */
        SubResourceType?: string;
        /**
         * 资源绑定的虚拟网卡实例的资源Id
         */
        SubResourceId?: string;
        /**
         * 资源绑定的虚拟网卡实例的资源名称
         */
        SubResourceName?: string;
        /**
         * 后端提供服务的内网IP
         */
        PrivateIP?: string;
        /**
         * 后端提供服务的端口
         */
        Port?: number;
        /**
         * 后端提供服务的实例启用与否，枚举值：0 禁用 1 启用
         */
        Enabled?: number;
        /**
         * 后端提供服务的实例运行状态，枚举值：0健康检查健康状态 1 健康检查异常
         */
        Status?: number;
        /**
         * 后端提供服务的资源所在的子网的ID
         */
        SubnetId?: string;
        /**
         * 是否为backup，只有当vserver的Backup属性为1时才会有此字段，说明：0：主rs1：备rs
         */
        IsBackup?: number;
        /**
         * 后端RS权重（在加权轮询算法下有效）
         */
        Weight?: number;
        /**
         * 后端服务器所在的VPC
         */
        VPCId?: string;
      }[];
      /**
       * 监听器类型，枚举值为: RequestProxy -> 请求代理；PacketsTransmit -> 报文转发
       */
      ListenType?: string;
      /**
       * 内容转发信息列表，具体结构见下方 ULBPolicySet
       */
      PolicySet?: {
        /**
         * 内容转发规则中域名的匹配方式。枚举值：Regular，正则；Wildcard，泛域名
         */
        DomainMatchMode?: string;
        /**
         * 内容转发Id，默认内容转发类型下为空。
         */
        PolicyId?: string;
        /**
         * 内容类型，枚举值：Custom -> 客户自定义；Default -> 默认内容转发
         */
        PolicyType?: string;
        /**
         * 内容转发匹配字段的类型，枚举值：Domain -> 域名；Path -> 路径； 默认内容转发类型下为空
         */
        Type?: string;
        /**
         * 内容转发匹配字段;默认内容转发类型下为空。
         */
        Match?: string;
        /**
         * 内容转发优先级，范围[1,9999]，数字越大优先级越高。默认内容转发规则下为0。
         */
        PolicyPriority?: number;
        /**
         * 所属VServerId
         */
        VServerId?: string;
        /**
         * 默认内容转发类型下返回当前rs总数
         */
        TotalCount?: number;
        /**
         * 内容转发下rs的详细信息，参考PolicyBackendSet
         */
        BackendSet?: {
          /**
           * 所添加的后端资源在ULB中的对象ID，（为ULB系统中使用，与资源自身ID无关
           */
          BackendId?: string;
          /**
           * 所添加的后端资源的类型，枚举值：UHost -> 云主机；UPM -> 物理云主机； UDHost -> 私有专区主机；UDocker -> 容器；UHybrid->混合云主机；CUBE->Cube；UNI -> 虚拟网卡
           */
          ResourceType?: string;
          /**
           * 后端资源的实例名称
           */
          ResourceName?: string;
          /**
           * 如果资源绑定了弹性网卡，则展示弹性网卡的资源ID
           */
          SubResourceId?: string;
          /**
           * 如果资源绑定了弹性网卡，则展示弹性网卡的资源名称
           */
          SubResourceName?: string;
          /**
           * "UNI"或者为空
           */
          SubResourceType?: string;
          /**
           * 后端资源的对象ID
           */
          ObjectId?: string;
          /**
           * 所添加的后端资源服务端口
           */
          Port?: number;
          /**
           * 后端资源的内网IP
           */
          PrivateIP?: string;
        }[];
      }[];
      /**
       * 数据压缩开关，0:关闭 1:开启
       */
      EnableCompression?: number;
      /**
       * VServer绑定的安全策略,具体结构见BindSecurityPolicy
       */
      SecurityPolicy?: {
        /**
         * 安全策略组ID
         */
        SecurityPolicyId?: string;
        /**
         * 安全策略组名称
         */
        SecurityPolicyName?: string;
        /**
         * TLS最低版本
         */
        TLSVersion?: string;
        /**
         * 加密套件
         */
        SSLCiphers?: string[];
        /**
         * 安全策略类型 0：预定义 1：自定义
         */
        SecurityPolicyType?: number;
      };
      /**
       * 重定向端口，取值范围[0-65535]；默认值为0，代表关闭；仅HTTP协议支持开启重定向功能
       */
      ForwardPort?: number;
      /**
       * 0:关闭 1:开启，用于开启http2功能；默认值为0
       */
      EnableHTTP2?: number;
    }[];
    /**
     * ULB 的类型
     */
    ULBType?: string;
    /**
     * ULB ip类型，枚举值：IPv6 / IPv4 （内部测试，暂未对外开放）
     */
    IPVersion?: string;
    /**
     * ULB后向代理IP，仅当有代理IP时返回否
     */
    SnatIps?: string[];
    /**
     * ULB 监听器类型，枚举值：RequestProxy，请求代理； PacketsTransmit ，报文转发；Comprehensive，兼容型；Pending，未定型
     */
    ListenType?: string;
    /**
     * ULB所在的VPC的ID
     */
    VPCId?: string;
    /**
     * ULB 为 InnerMode 时，ULB 所属的子网ID，默认为空
     */
    SubnetId?: string;
    /**
     * ULB 所属的业务组ID
     */
    BusinessId?: string;
    /**
     * ULB的内网IP，当ULBType为OuterMode时，该值为空
     */
    PrivateIP?: string;
    /**
     * 防火墙信息，具体结构见下方 FirewallSet
     */
    FirewallSet?: {
      /**
       * 防火墙名称
       */
      FirewallName?: string;
      /**
       * 防火墙ID
       */
      FirewallId?: string;
    }[];
    /**
     * ULB是否开启日志功能。0，关闭；1，开启
     */
    EnableLog?: number;
    /**
     * 日志功能相关信息，仅当EnableLog为true时会返回，具体结构见下方 LoggerSet
     */
    LogSet?: {
      /**
       * ulb日志上传的bucket
       */
      BucketName?: string;
      /**
       * 上传到bucket使用的token的tokenid
       */
      TokenID?: string;
      /**
       * bucket的token名称
       */
      TokenName?: string;
    };
  }[];
}

/**
 * DescribeULBSimple - 获取CLB信息
 */
export interface DescribeULBSimpleRequest {
  /**
   * 数据偏移量，默认为0
   */
  Offset?: number;
  /**
   * 数据分页值，默认为10000
   */
  Limit?: number;
  /**
   * 传统型负载均衡实例的Id。 若指定则返回指定的传统型负载均衡实例的信息； 若不指定则返回当前数据中心中所有的传统型负载均衡实例的信息
   */
  ULBId?: string;
  /**
   * CLB所属的VPC
   */
  VPCId?: string;
  /**
   * CLB所属的子网ID
   */
  SubnetId?: string;
  /**
   * CLB所属的业务组ID
   */
  BusinessId?: string;
}

/**
 * DescribeULBSimple - 获取CLB信息
 */
export interface DescribeULBSimpleResponse {
  /**
   * 满足条件的CLB总数
   */
  TotalCount: number;
  /**
   * CLB列表，每项参数详见 ULBSimpleSet
   */
  DataSet: {
    /**
     * ULB 监听器类型，枚举值：RequestProxy，请求代理； PacketsTransmit ，报文转发；Comprehensive，兼容型；Pending，未定型
     */
    ListenType: string;
    /**
     * ULB提供服务的IP类型。枚举值，“IPv4”,"IPv6"。默认为“IPv4”
     */
    IPVersion: string;
    /**
     * ULB后向代理IP，仅当有代理IP时返回否
     */
    SnatIps?: string[];
    /**
     * 负载均衡的资源ID
     */
    ULBId?: string;
    /**
     * 负载均衡的资源名称
     */
    Name?: string;
    /**
     * 负载均衡的业务组名称
     */
    Tag?: string;
    /**
     * 负载均衡的备注
     */
    Remark?: string;
    /**
     * ULB的创建时间，格式为Unix Timestamp
     */
    CreateTime?: number;
    /**
     * ULB所在的VPC的ID
     */
    VPCId?: string;
    /**
     * ULB 为 InnerMode 时，ULB 所属的子网ID
     */
    SubnetId?: string;
    /**
     * ULB 所属的业务组ID
     */
    BusinessId?: string;
    /**
     * ULB的内网IP，当ULBType为OuterMode时，该值为空
     */
    PrivateIP?: string;
    /**
     * 带宽类型，枚举值为： 0，非共享带宽； 1，共享带宽
     */
    BandwidthType?: number;
    /**
     * 带宽
     */
    Bandwidth?: number;
    /**
     * ULB的详细信息列表，具体结构见下方 ULBIPSet
     */
    IPSet?: {
      /**
       * 弹性IP的运营商信息，枚举值为：  Bgp：BGP IP International：国际IP
       */
      OperatorName?: string;
      /**
       * 弹性IP地址
       */
      EIP?: string;
      /**
       * 弹性IP的ID
       */
      EIPId?: string;
      /**
       * 弹性IP的带宽类型，枚举值：1 表示是共享带宽，0 普通带宽类型（暂未对外开放）
       */
      BandwidthType?: number;
      /**
       * 弹性IP的带宽值（暂未对外开放）
       */
      Bandwidth?: number;
    }[];
    /**
     * ulb下vserver数量
     */
    VServerCount?: number;
    /**
     * ULB 的类型（InnerMode or OuterMode）
     */
    ULBType?: string;
    /**
     * 防火墙信息，具体结构见下方 FirewallSet
     */
    FirewallSet?: {
      /**
       * 防火墙名称
       */
      FirewallName?: string;
      /**
       * 防火墙ID
       */
      FirewallId?: string;
    }[];
    /**
     * ULB是否开启日志功能。0，关闭；1，开启
     */
    EnableLog?: number;
    /**
     * 日志功能相关信息，仅当EnableLog为true时会返回，具体结构见下方 LoggerSet
     */
    LogSet?: {
      /**
       * ulb日志上传的bucket
       */
      BucketName?: string;
      /**
       * 上传到bucket使用的token的tokenid
       */
      TokenID?: string;
      /**
       * bucket的token名称
       */
      TokenName?: string;
    };
    /**
     * WAF功能状态，枚举类型：Unavailable：无法创建WAF；NoWAF：未绑定WAF；Intranet：内网回源Waf；Extranet：外网回源Waf
     */
    WAFMode?: string;
  }[];
}

/**
 * DescribeVServer - 获取CLB下的VServer的详细信息
 */
export interface DescribeVServerRequest {
  /**
   * 传统型负载均衡实例的Id
   */
  ULBId?: string;
  /**
   * CLB下的VServer实例的Id；若指定则返回指定的VServer实例的信息； 若不指定则返回当前传统型负载均衡实例下所有VServer的信息
   */
  VServerId?: string;
  /**
   * 数据分页值
   */
  Limit?: number;
  /**
   * 数据偏移量
   */
  Offset?: number;
}

/**
 * DescribeVServer - 获取CLB下的VServer的详细信息
 */
export interface DescribeVServerResponse {
  /**
   * 满足条件的VServer总数
   */
  TotalCount?: number;
  /**
   * VServer列表，每项参数详见 ULBVServerSet
   */
  DataSet?: {
    /**
     * 健康检查类型，枚举值：Port -> 端口检查；Path -> 路径检查；Ping -> Ping探测， Customize -> UDP检查请求代理型默认值为Port，其中TCP协议仅支持Port，其他协议支持Port和Path; 报文转发型TCP协议仅支持Port，UDP协议支持Ping、Port和Customize
     */
    MonitorType: string;
    /**
     * VServer会话保持方式。枚举值为： None -> 关闭会话保持； ServerInsert -> 自动生成； UserDefined -> 用户自定义。
     */
    PersistenceType: string;
    /**
     * 负载均衡实例的Id
     */
    ULBId?: string;
    /**
     * 根据MonitorType确认； 当MonitorType为Port时，此字段无意义。当MonitorType为Path时，代表HTTP检查域名
     */
    Domain?: string;
    /**
     * 根据MonitorType确认； 当MonitorType为Port时，此字段无意义。当MonitorType为Path时，代表HTTP检查路径
     */
    Path?: string;
    /**
     * 根据MonitorType确认； 当MonitorType为Customize时，此字段有意义，代表UDP检查发出的请求报文
     */
    RequestMsg?: string;
    /**
     * 根据MonitorType确认； 当MonitorType为Customize时，此字段有意义，代表UDP检查请求应收到的响应报文
     */
    ResponseMsg?: string;
    /**
     * VServer实例的Id
     */
    VServerId?: string;
    /**
     * VServer实例的名字
     */
    VServerName?: string;
    /**
     * VServer实例的协议。 枚举值为：HTTP，TCP，UDP，HTTPS。
     */
    Protocol?: string;
    /**
     * VServer服务端口
     */
    FrontendPort?: number;
    /**
     * VServer负载均衡的模式，枚举值：Roundrobin -> 轮询;Source -> 源地址；ConsistentHash -> 一致性哈希；SourcePort -> 源地址（计算端口）；ConsistentHashPort -> 一致性哈希（计算端口）。
     */
    Method?: string;
    /**
     * 根据PersistenceType确定： None或ServerInsert，此字段为空； UserDefined，此字段展示用户自定义会话string。
     */
    PersistenceInfo?: string;
    /**
     * 空闲连接的回收时间，单位：秒。
     */
    ClientTimeout?: number;
    /**
     * VServer的运行状态。枚举值： 0 -> rs全部运行正常;1 -> rs全部运行异常；2 -> rs部分运行异常。
     */
    Status?: number;
    /**
     * VServer绑定的SSL证书信息，具体结构见下方 ULBSSLSet。
     */
    SSLSet?: {
      /**
       * SSL证书的Id
       */
      SSLId?: string;
      /**
       * SSL证书的名字
       */
      SSLName?: string;
      /**
       * SSL证书类型，暂时只有 Pem 一种类型
       */
      SSLType?: string;
      /**
       * SSL证书的内容
       */
      SSLContent?: string;
      /**
       * SSL证书的创建时间
       */
      CreateTime?: number;
      /**
       * SSL证书的HASH值
       */
      HashValue?: string;
      /**
       * SSL证书绑定到的对象
       */
      BindedTargetSet?: {
        /**
         * SSL证书绑定到的VServer的资源ID
         */
        VServerId?: string;
        /**
         * 对应的VServer的名字
         */
        VServerName?: string;
        /**
         * VServer 所属的ULB实例的资源ID
         */
        ULBId?: string;
        /**
         * ULB实例的名称
         */
        ULBName?: string;
      }[];
      /**
       * SSL证书来源，SSL证书来源，0代表证书来自于ULB平台，1代表证书来自于USSL平台
       */
      SSLSource?: number;
      /**
       * USSL证书平台的编号,只有当SSLSource为1时才出现
       */
      USSLId?: string;
      /**
       * SSL证书平台的域名，多域名时，不展示扩展域名
       */
      Domains?: string;
      /**
       * 证书颁发时间
       */
      NotBefore?: number;
      /**
       * 证书过期时间
       */
      NotAfter?: number;
    }[];
    /**
     * 后端资源信息列表，具体结构见下方 ULBBackendSet
     */
    BackendSet?: {
      /**
       * 后端资源实例的Id
       */
      BackendId?: string;
      /**
       * 资源实例的类型
       */
      ResourceType?: string;
      /**
       * 资源实例的资源Id
       */
      ResourceId?: string;
      /**
       * 资源实例的资源名称
       */
      ResourceName?: string;
      /**
       * 资源绑定的虚拟网卡实例的类型
       */
      SubResourceType?: string;
      /**
       * 资源绑定的虚拟网卡实例的资源Id
       */
      SubResourceId?: string;
      /**
       * 资源绑定的虚拟网卡实例的资源名称
       */
      SubResourceName?: string;
      /**
       * 后端提供服务的内网IP
       */
      PrivateIP?: string;
      /**
       * 后端提供服务的端口
       */
      Port?: number;
      /**
       * 后端提供服务的实例启用与否，枚举值：0 禁用 1 启用
       */
      Enabled?: number;
      /**
       * 后端提供服务的实例运行状态，枚举值：0健康检查健康状态 1 健康检查异常
       */
      Status?: number;
      /**
       * 后端提供服务的资源所在的子网的ID
       */
      SubnetId?: string;
      /**
       * 是否为backup，只有当vserver的Backup属性为1时才会有此字段，说明：0：主rs1：备rs
       */
      IsBackup?: number;
      /**
       * 后端RS权重（在加权轮询算法下有效）
       */
      Weight?: number;
      /**
       * 后端服务器所在的VPC
       */
      VPCId?: string;
    }[];
    /**
     * 监听器类型，枚举值为: RequestProxy -> 请求代理；PacketsTransmit -> 报文转发
     */
    ListenType?: string;
    /**
     * 内容转发信息列表，具体结构见下方 ULBPolicySet
     */
    PolicySet?: {
      /**
       * 内容转发规则中域名的匹配方式。枚举值：Regular，正则；Wildcard，泛域名
       */
      DomainMatchMode?: string;
      /**
       * 内容转发Id，默认内容转发类型下为空。
       */
      PolicyId?: string;
      /**
       * 内容类型，枚举值：Custom -> 客户自定义；Default -> 默认内容转发
       */
      PolicyType?: string;
      /**
       * 内容转发匹配字段的类型，枚举值：Domain -> 域名；Path -> 路径； 默认内容转发类型下为空
       */
      Type?: string;
      /**
       * 内容转发匹配字段;默认内容转发类型下为空。
       */
      Match?: string;
      /**
       * 内容转发优先级，范围[1,9999]，数字越大优先级越高。默认内容转发规则下为0。
       */
      PolicyPriority?: number;
      /**
       * 所属VServerId
       */
      VServerId?: string;
      /**
       * 默认内容转发类型下返回当前rs总数
       */
      TotalCount?: number;
      /**
       * 内容转发下rs的详细信息，参考PolicyBackendSet
       */
      BackendSet?: {
        /**
         * 所添加的后端资源在ULB中的对象ID，（为ULB系统中使用，与资源自身ID无关
         */
        BackendId?: string;
        /**
         * 所添加的后端资源的类型，枚举值：UHost -> 云主机；UPM -> 物理云主机； UDHost -> 私有专区主机；UDocker -> 容器；UHybrid->混合云主机；CUBE->Cube；UNI -> 虚拟网卡
         */
        ResourceType?: string;
        /**
         * 后端资源的实例名称
         */
        ResourceName?: string;
        /**
         * 如果资源绑定了弹性网卡，则展示弹性网卡的资源ID
         */
        SubResourceId?: string;
        /**
         * 如果资源绑定了弹性网卡，则展示弹性网卡的资源名称
         */
        SubResourceName?: string;
        /**
         * "UNI"或者为空
         */
        SubResourceType?: string;
        /**
         * 后端资源的对象ID
         */
        ObjectId?: string;
        /**
         * 所添加的后端资源服务端口
         */
        Port?: number;
        /**
         * 后端资源的内网IP
         */
        PrivateIP?: string;
      }[];
    }[];
    /**
     * 数据压缩开关，0:关闭 1:开启
     */
    EnableCompression?: number;
    /**
     * VServer绑定的安全策略,具体结构见BindSecurityPolicy
     */
    SecurityPolicy?: {
      /**
       * 安全策略组ID
       */
      SecurityPolicyId?: string;
      /**
       * 安全策略组名称
       */
      SecurityPolicyName?: string;
      /**
       * TLS最低版本
       */
      TLSVersion?: string;
      /**
       * 加密套件
       */
      SSLCiphers?: string[];
      /**
       * 安全策略类型 0：预定义 1：自定义
       */
      SecurityPolicyType?: number;
    };
    /**
     * 重定向端口，取值范围[0-65535]；默认值为0，代表关闭；仅HTTP协议支持开启重定向功能
     */
    ForwardPort?: number;
    /**
     * 0:关闭 1:开启，用于开启http2功能；默认值为0
     */
    EnableHTTP2?: number;
  }[];
}

/**
 * ReleaseBackend - 从CLB的VServer释放后端资源实例
 */
export interface ReleaseBackendRequest {
  /**
   * 传统型负载均衡实例的ID
   */
  ULBId: string;
  /**
   * 后端资源实例的ID(CLB后端ID，非资源自身ID)
   */
  BackendId: string;
}

/**
 * ReleaseBackend - 从CLB的VServer释放后端资源实例
 */
export interface ReleaseBackendResponse {}

/**
 * RemoveTargets - 从应用型负载均衡监听器删除后端服务节点
 */
export interface RemoveTargetsRequest {
  /**
   * 负载均衡实例的ID
   */
  LoadBalancerId: string;
  /**
   * 监听器的ID
   */
  ListenerId: string;
  /**
   * 服务节点的标识ID。不超过20个；
   */
  Ids: string[];
}

/**
 * RemoveTargets - 从应用型负载均衡监听器删除后端服务节点
 */
export interface RemoveTargetsResponse {}

/**
 * UnBindSecurityPolicy - 批量解绑安全策略，会同时解绑与传统型和应用型负载均衡监听器的绑定关系
 */
export interface UnBindSecurityPolicyRequest {
  /**
   * 安全策略ID
   */
  SecurityPolicyId: string;
}

/**
 * UnBindSecurityPolicy - 批量解绑安全策略，会同时解绑与传统型和应用型负载均衡监听器的绑定关系
 */
export interface UnBindSecurityPolicyResponse {}

/**
 * UnbindSSL - 从CLB下的VServer解绑SSL证书
 */
export interface UnbindSSLRequest {
  /**
   * 所绑定CLB实例ID
   */
  ULBId: string;
  /**
   * CLB所绑定VServer实例ID
   */
  VServerId: string;
  /**
   * SSL证书的Id
   */
  SSLId: string;
}

/**
 * UnbindSSL - 从CLB下的VServer解绑SSL证书
 */
export interface UnbindSSLResponse {}

/**
 * UpdateBackendAttribute - 更新CLB后端资源实例(服务节点)属性
 */
export interface UpdateBackendAttributeRequest {
  /**
   * 传统型负载均衡资源ID
   */
  ULBId: string;
  /**
   * 后端资源实例的ID(CLB后端ID，非资源自身ID)
   */
  BackendId: string;
  /**
   * 后端资源服务端口，取值范围[1-65535]
   */
  Port?: number;
  /**
   * 所添加的后端RS权重（在加权轮询算法下有效），取值范围[1-100]，默认为1
   */
  Weight?: number;
  /**
   * 后端实例状态开关
   */
  Enabled?: number;
  /**
   * 是否为backup0：主rs1：备rs默认为0
   */
  IsBackup?: number;
}

/**
 * UpdateBackendAttribute - 更新CLB后端资源实例(服务节点)属性
 */
export interface UpdateBackendAttributeResponse {}

/**
 * UpdateBackendBatch - 批量更新ULB后端资源实例(服务节点)属性
 */
export interface UpdateBackendBatchRequest {
  /**
   * 负载均衡资源ID
   */
  ULBId: string;
  /**
   *
   */
  Attributes?: {
    /**
     * 后端资源实例的ID(ULB后端ID，非资源自身ID)
     */
    BackendId: string;
    /**
     * 后端资源服务端口，取值范围[1-65535]
     */
    Port?: number;
    /**
     * 所添加的后端RS权重（在加权轮询算法下有效），取值范围[0-100]，默认为1
     */
    Weight?: number;
    /**
     * 后端实例状态开关
     */
    Enabled?: number;
    /**
     * 是否为backup 0：主rs 1：备rs 默认为0
     */
    IsBackup?: number;
  }[];
}

/**
 * UpdateBackendBatch - 批量更新ULB后端资源实例(服务节点)属性
 */
export interface UpdateBackendBatchResponse {
  /**
   * 返回ulb对每个rs的修改是否成功
   */
  BackendSet?: {
    /**
     * rs的资源ID
     */
    BackendId: string;
    /**
     * 修改rs返回的消息
     */
    SubMessage: string;
    /**
     * 修改rs的返回值
     */
    SubRetCode: number;
  }[];
}

/**
 * UpdateListenerAttribute - 更新一个应用型负载均衡监听器的属性
 */
export interface UpdateListenerAttributeRequest {
  /**
   * 负载均衡实例的ID
   */
  LoadBalancerId: string;
  /**
   * 监听器的ID
   */
  ListenerId: string;
  /**
   * 监听器的名称。限定字符长度：[1-255]；限定特殊字符，仅支持：-_.
   */
  Name?: string;
  /**
   * 监听器的备注信息。限定字符长度：[0-255]
   */
  Remark?: string;
  /**
   * （应用型专用）服务器默认证书ID。仅HTTPS监听支持
   */
  Certificates?: string[];
  /**
   * （应用型专用）安全策略组ID。仅HTTPS监听支持绑定。“Default”，表示绑定原生策略
   */
  SecurityPolicyId?: string;
  /**
   * 连接空闲超时时间。单位：秒。应用型限定取值：[1-86400]
   */
  IdleTimeout?: number;
  /**
   * 负载均衡算法。应用型限定取值："Roundrobin"/"Source"/"WeightRoundrobin"/" Leastconn"/"Backup"
   */
  Scheduler?: string;
  /**
   *
   */
  StickinessConfig?: {
    /**
     * 是否开启会话保持功能。应用型负载均衡实例基于Cookie实现，网络型负载均衡则基于源IP，保证在对应的空闲超时时间内，同一个源IP送到同一个服务节点。默认值为：false
     */
    Enabled?: boolean;
    /**
     * （应用型专用）Cookie处理方式。限定枚举值："ServerInsert" / "UserDefined"，不传值则不修改
     */
    Type?: string;
    /**
     * （应用型专用）自定义Cookie。当StickinessType取值"UserDefined"时有效；限定字符长度：[0-255]
     */
    CookieName?: string;
  };
  /**
   *
   */
  HealthCheckConfig?: {
    /**
     * 是否开启健康检查功能。暂时不支持关闭；默认值为：true
     */
    Enabled?: boolean;
    /**
     * 健康检查方式。应用型限定取值：“Port”/"HTTP"；默认值：“Port”
     */
    Type?: string;
    /**
     * （应用型专用）HTTP检查域名
     */
    Domain?: string;
    /**
     * （应用型专用）HTTP检查路径
     */
    Path?: string;
    /**
     * （应用型专用）HTTP检查方法。只支持GET和HEAD。
     */
    Method?: string;
    /**
     * （应用型专用）GRPC检查响应码
     */
    ResponseCode?: string;
  };
  /**
   * （应用型专用）是否开启数据压缩功能。目前只支持使用gzip对特定文件类型进行压缩
   */
  CompressionEnabled?: boolean;
  /**
   * （应用型专用）是否开启HTTP/2特性。仅HTTPS监听支持开启
   */
  HTTP2Enabled?: boolean;
  /**
   * （应用型专用）是否开启HTTP重定向到HTTPS。仅HTTP监听支持开启
   */
  RedirectEnabled?: boolean;
  /**
   * （应用型专用）重定向端口。限定取值：[1-65535]
   */
  RedirectPort?: number;
}

/**
 * UpdateListenerAttribute - 更新一个应用型负载均衡监听器的属性
 */
export interface UpdateListenerAttributeResponse {}

/**
 * UpdateLoadBalancerAttribute - 更新一个应用型负载均衡实例的属性
 */
export interface UpdateLoadBalancerAttributeRequest {
  /**
   * 负载均衡实例的ID
   */
  LoadBalancerId: string;
  /**
   * 负载均衡实例的名称，不传则默认不修改
   */
  Name?: string;
  /**
   * 负载均衡实例所属的业务组ID，不传则默认不修改
   */
  Tag?: string;
  /**
   * 负载均衡实例的备注信息，不传则默认不修改，限定字符长度：[0-255]
   */
  Remark?: string;
  /**
   *
   */
  AccessLogConfig?: {
    /**
     * （应用型专用）是否开启访问日志记录功能
     */
    Enabled?: boolean;
    /**
     * （应用型专用）用于存储访问日志的bucket
     */
    US3BucketName?: string;
    /**
     * （应用型专用）上传访问日志到bucket所需的token
     */
    US3TokenId?: string;
  };
}

/**
 * UpdateLoadBalancerAttribute - 更新一个应用型负载均衡实例的属性
 */
export interface UpdateLoadBalancerAttributeResponse {}

/**
 * UpdatePolicy - 更新传统型负载均衡内容转发规则，包括转发规则后的服务节点
 */
export interface UpdatePolicyRequest {
  /**
   * 需要添加内容转发策略的传统型负载均衡实例ID
   */
  ULBId: string;
  /**
   * 需要添加内容转发策略的VServer实例ID，只支持请求代理模式下，HTTP或HTTPS协议的CLB下的VServer
   */
  VServerId: string;
  /**
   * 内容转发匹配字段
   */
  Match: string;
  /**
   * 策略优先级，1-9999；只针对路径规则生效
   */
  PolicyPriority?: number;
  /**
   * 内容转发规则中域名的匹配方式，默认与原本一致。枚举值：Regular，正则；Wildcard，泛域名
   */
  DomainMatchMode?: string;
  /**
   * 传统型负载均衡转发规则的ID，当Type为Default时，可以不传或为空
   */
  PolicyId?: string;
  /**
   * 内容转发策略应用的后端资源实例的ID（CLB的后端节点Id），来源于 AllocateBackend 返回的 BackendId，不传表示更新转发节点为空
   */
  BackendId?: string[];
  /**
   * 内容转发匹配字段的类型，枚举值：Domain -> 域名转发规则；Path -> 路径转发规则；Default -> 默认转发规则，不传默认值Domain
   */
  Type?: string;
}

/**
 * UpdatePolicy - 更新传统型负载均衡内容转发规则，包括转发规则后的服务节点
 */
export interface UpdatePolicyResponse {}

/**
 * UpdateRuleAttribute - 更新应用型负载均衡监听器的一条转发规则的属性
 */
export interface UpdateRuleAttributeRequest {
  /**
   * 负载均衡实例的ID
   */
  LoadBalancerId: string;
  /**
   * 监听器的ID
   */
  ListenerId: string;
  /**
   * 转发规则的ID
   */
  RuleId: string;
  /**
   *
   */
  RuleConditions?: {
    /**
     * 匹配条件类型。限定枚举值："Host"/"Path"；RuleConditions数组长度不为0时必填
     */
    Type?: string;
    /**
     *
     */
    HostConfig?: {
      /**
       * 匹配方式。限定枚举值："Regular"/"Wildcard"，默认值："Regular"
       */
      MatchMode?: string;
      /**
       * 取值。暂时只支持数组长度为1；取值需符合相关匹配方式的条件；修改域名匹配时必填
       */
      Values?: string[];
    };
    /**
     *
     */
    PathConfig?: {
      /**
       * 取值。暂时只支持数组长度为1；取值需符合相关条件；修改路径匹配时必填
       */
      Values?: string[];
    };
  }[];
  /**
   *
   */
  RuleActions?: {
    /**
     * 动作类型。限定枚举值："Forward"；RuleActions数组长度不为0时必填
     */
    Type?: string;
    /**
     *
     */
    ForwardConfig?: {
      /**
       *
       */
      Targets?: {
        /**
         * 转发的后端服务节点的标识ID。限定在监听器的服务节点池里；数组长度可以是0；转发服务节点配置的数组长度不为0时，Id必填
         */
        Id?: string;
        /**
         * 转发的后端服务节点的权重。仅监听器负载均衡算法是加权轮询是有效
         */
        Weight?: number;
      }[];
    };
    /**
     * 转发规则动作执行的顺序，取值为1~1000，按值从小到大执行动作。值不能为空，不能重复。Forward、FixedResponse 类型的动作不判断 Order，最后一个执行
     */
    Order?: number;
    /**
     *
     */
    InsertHeaderConfig?: {
      /**
       * 插入的 header 字段名称，长度为 1~40 个字符，支持大小写字母 a~z、数字、下划线（_）和短划线（-）。头字段名称不能重复用于InsertHeader中。header 字段不能使用以下(此处判断大小写不敏感)x-real-ip、x-forwarded-for、x-forwarded-proto、x-forwarded-srcport、ucloud-alb-trace、connection、upgrade、content-length、transfer-encoding、keep-alive、te、host、cookie、remoteip、authority
       */
      Key?: string;
      /**
       * 头字段内容类型。取值：UserDefined：用户指定。ReferenceHeader：引用用户请求头中的某一个字段。SystemDefined：系统定义。
       */
      ValueType?: string;
      /**
       * 插入的 header 字段内容。ValueType 取值为 SystemDefined 时取值如下：ClientSrcPort：客户端端口。ClientSrcIp：客户端 IP 地址。Protocol：客户端请求的协议（HTTP 或 HTTPS)。RuleID：客户端请求命中的转发规则ID。ALBID：ALB ID。ALBPort：ALB 端口。ValueType 取值为 UserDefined 时：可以自定义头字段内容，限制长度为 1~128 个字符，只支持 ASCII 码值ch >= 32 && ch < 127范围内、不包括 $ 的可打印字符。ValueType 取值为 ReferenceHeader 时：可以引用请求头字段中的某一个字段，限制长度限制为 1~128 个字符，支持小写字母 a~z、数字、短划线（-）和下划线（_）。
       */
      Value?: string;
    };
    /**
     *
     */
    RemoveHeaderConfig?: {
      /**
       * 删除的 header 字段名称，目前只能删除以下几个默认配置的字段X-Real-IP、X-Forwarded-For、X-Forwarded-Proto、X-Forwarded-SrcPort
       */
      Key?: string;
    };
    /**
     *
     */
    CorsConfig?: {
      /**
       * 允许的访问来源列表。支持只配置一个元素*，或配置一个或多个值。单个值必须以http://或者https://开头，后边加一个正确的域名或一级泛域名。（例：http://*.test.abc.example.com）单个值可以不加端口，也可以指定端口，端口范围：1~65535。最多支持5个值
       */
      AllowOrigin?: string[];
      /**
       * 允许跨域的 Header 列表。支持配置为*或配置一个或多个 value 值。单个 value 值只允许包含大小写字母、数字，不能以下划线（_）和短划线（-）开头或结尾，最大长度限制为 32 个字符。最多支持20个值
       */
      AllowHeaders?: string[];
      /**
       * 允许暴露的 Header 列表。支持配置为*或配置一个或多个 value 值。单个 value 值只允许包含大小写字母、数字，不能以下划线（_）和短划线（-）开头或结尾，最大长度限制为 32 个字符。最多支持20个值
       */
      ExposeHeaders?: string[];
      /**
       * 选择跨域访问时允许的 HTTP 方法。取值：GET。POST。PUT。DELETE。HEAD。OPTIONS。PATCH。
       */
      AllowMethods?: string[];
      /**
       * 是否允许携带凭证信息。取值：on：是。off：否。
       */
      AllowCredentials?: string;
      /**
       * 预检请求在浏览器的最大缓存时间，单位：秒。取值范围：-1~172800。
       */
      MaxAge?: number;
    };
    /**
     *
     */
    FixedResponseConfig?: {
      /**
       * 返回的 HTTP 响应码，仅支持 2xx、4xx、5xx 数字，x 为任意数字。
       */
      HttpCode?: number;
      /**
       * 返回的固定内容。最大支持存储 1 KB，只支持 ASCII 码值ch >= 32 && ch < 127范围内、不包括 $ 的可打印字符。
       */
      Content?: string;
    };
    /**
     *
     */
    ProxyBufferingConfig?: {
      /**
       * 关闭缓存
       */
      CloseProxyBuffering?: boolean;
    };
    /**
     *
     */
    BackendConnectionConfig?: {
      /**
       * 开启长连接
       */
      EnablePersistentConnection?: boolean;
    };
  }[];
  /**
   * 当转发的服务节点为空时，规则是否忽略。默认转发规则不可更改
   */
  Pass?: boolean;
}

/**
 * UpdateRuleAttribute - 更新应用型负载均衡监听器的一条转发规则的属性
 */
export interface UpdateRuleAttributeResponse {}

/**
 * UpdateSSLAttribute - 更新修改SSL的属性，如：修改SSLName
 */
export interface UpdateSSLAttributeRequest {
  /**
   * SSL的资源id
   */
  SSLId: string;
  /**
   * SSL实例名称，不允许传空
   */
  SSLName: string;
}

/**
 * UpdateSSLAttribute - 更新修改SSL的属性，如：修改SSLName
 */
export interface UpdateSSLAttributeResponse {}

/**
 * UpdateSSLBinding - 将传统型或应用型负载均衡监听器绑定的证书更换为另一个证书，
 */
export interface UpdateSSLBindingRequest {
  /**
   * 监听器实例绑定的旧的证书
   */
  OldSSLId: string;
  /**
   * 监听器实例需要绑定的新的证书
   */
  NewSSLId: string;
  /**
   * 所操作LB实例ID（仅LoadBalancerId传参时，将更换该LB所有原证书为OldSSLId的绑定关系；LoadBalancerId和ListenerId都不传参则将更新该项目下所有原证书为OldSSLId的绑定关系）（LB指CLB或ALB）
   */
  LoadBalancerId?: string;
  /**
   * 所操作监听器实例ID（仅ListenerId传参时，将更换该监听器所有原证书为OldSSLId的绑定关系；LoadBalancerId和ListenerId都不传参则将更新该项目下所有原证书为OldSSLId的绑定关系；若LoadBalancerId与ListenerId皆有传参，则会强校验ULB与Vsserver的所属关系，将更换该ulb下vserver所绑定的OldSSLId为NewSSLId）（监听器指VServer或Listener）
   */
  ListenerId?: string;
}

/**
 * UpdateSSLBinding - 将传统型或应用型负载均衡监听器绑定的证书更换为另一个证书，
 */
export interface UpdateSSLBindingResponse {}

/**
 * UpdateSecurityPolicy - 更新安全策略
 */
export interface UpdateSecurityPolicyRequest {
  /**
   * 安全策略ID
   */
  SecurityPolicyId: string;
  /**
   * 加密套件，TLS最低版本和加密套件必须全不为空或全为空
   */
  SSLCiphers?: string[];
  /**
   * TLS最低版本，TLS最低版本和加密套件必须全不为空或全为空
   */
  TLSVersion?: string;
  /**
   * 安全策略名称
   */
  SecurityPolicyName?: string;
}

/**
 * UpdateSecurityPolicy - 更新安全策略
 */
export interface UpdateSecurityPolicyResponse {}

/**
 * UpdateTargetsAttribute - 更新应用型负载均衡监听器后端服务节点的属性
 */
export interface UpdateTargetsAttributeRequest {
  /**
   * 负载均衡实例的ID
   */
  LoadBalancerId: string;
  /**
   * 监听器的ID
   */
  ListenerId: string;
  /**
   *
   */
  Targets?: {
    /**
     * 服务节点的标识ID。限定枚举值："UHost" / "UNI"/"UPM"/"IP"；要更新的Targets数组长度至少为1，不超过20个
     */
    Id?: string;
    /**
     * 服务节点的权重。限定取值：[1-100]，默认值1；仅在加权轮询算法时有效；要更新的Targets数组长度至少为1，不超过20个
     */
    Weight?: number;
    /**
     * 服务节点是否启用。默认值true；要更新的Targets数组长度至少为1，不超过20个
     */
    Enabled?: boolean;
    /**
     * 服务节点是否为备节点。默认值false；要更新的Targets数组长度至少为1，不超过20个
     */
    IsBackup?: boolean;
  }[];
}

/**
 * UpdateTargetsAttribute - 更新应用型负载均衡监听器后端服务节点的属性
 */
export interface UpdateTargetsAttributeResponse {}

/**
 * UpdateULBAttribute - 更新CLB名字业务组备注等属性字段
 */
export interface UpdateULBAttributeRequest {
  /**
   * CLB资源ID
   */
  ULBId: string;
  /**
   * 名字，不传则默认不修改
   */
  Name?: string;
  /**
   * 业务，不传则默认不修改
   */
  Tag?: string;
  /**
   * 备注，不传则默认不修改
   */
  Remark?: string;
  /**
   * 日志开关，1代表开启日志，0代表关闭日志，传1时必须同时传BucketName，TokenName与TokenId二选一
   */
  EnableLog?: number;
  /**
   * 设置用于存储ulb日志的bucket
   */
  BucketName?: string;
  /**
   * 用于指定上传到bucket所需的token，与TokenId选填其一即可
   */
  TokenName?: string;
  /**
   * 用于指定上传到bucket所需的token，与TokenName选填其一即可
   */
  TokenId?: string;
  /**
   * 是否开启WAF。枚举类型：Yes，No，默认值为No
   */
  IsWAFOn?: string;
}

/**
 * UpdateULBAttribute - 更新CLB名字业务组备注等属性字段
 */
export interface UpdateULBAttributeResponse {}

/**
 * UpdateVServerAttribute - 更新传统型负载均衡VServer实例属性
 */
export interface UpdateVServerAttributeRequest {
  /**
   * 传统型负载均衡实例ID
   */
  ULBId: string;
  /**
   * 传统型负载均衡VServer实例ID
   */
  VServerId: string;
  /**
   * VServer实例名称，若无此字段则不做修改
   */
  VServerName?: string;
  /**
   * VServer负载均衡模式，枚举值：Roundrobin -> 轮询;Source -> 源地址；ConsistentHash -> 一致性哈希；SourcePort -> 源地址（计算端口）；ConsistentHashPort -> 一致性哈希（计算端口）; WeightRoundrobin -> 加权轮询; Leastconn -> 最小连接数；Backup -> 主备模式。ConsistentHash，SourcePort，ConsistentHashPort 只在报文转发中使用；Leastconn只在请求代理中使用；Roundrobin、Source和WeightRoundrobin,Backup在请求代理和报文转发中使用。默认为："Roundrobin"
   */
  Method?: string;
  /**
   * VServer会话保持模式，若无此字段则不做修改。枚举值：None：关闭；ServerInsert：自动生成KEY；UserDefined：用户自定义KEY。
   */
  PersistenceType?: string;
  /**
   * 根据PersistenceType确定: None或ServerInsert, 此字段无意义; UserDefined, 则此字段传入用户自定义会话保持String. 若无此字段则不做修改
   */
  PersistenceInfo?: string;
  /**
   * 请求代理的VServer下表示空闲连接的回收时间，单位：秒，取值范围：时(0，86400]，默认值为60；报文转发的VServer下表示回话保持的时间，单位：秒，取值范围：[60，900]，0 表示禁用连接保持
   */
  ClientTimeout?: number;
  /**
   * 健康检查类型，枚举值：Port -> 端口检查；Path -> 路径检查；Ping -> Ping探测，Customize -> UDP检查请求代理型默认值为Port，其中TCP协议仅支持Port，其他协议支持Port和Path;报文转发型TCP协议仅支持Port，UDP协议支持Ping、Port和Customize，默认值为Ping
   */
  MonitorType?: string;
  /**
   * MonitorType 为 Path 时指定健康检查发送请求时HTTP HEADER 里的域名
   */
  Domain?: string;
  /**
   * MonitorType 为 Path 时指定健康检查发送请求时的路径，默认为 /
   */
  Path?: string;
  /**
   * 根据MonitorType确认； 当MonitorType为Customize时，此字段有意义，代表UDP检查发出的请求报文
   */
  RequestMsg?: string;
  /**
   * 根据MonitorType确认； 当MonitorType为Customize时，此字段有意义，代表UDP检查请求应收到的响应报文
   */
  ResponseMsg?: string;
  /**
   * 安全策略组ID
   */
  SecurityPolicyId?: string;
  /**
   * 0:关闭 1:开启，用于数据压缩功能
   */
  EnableCompression?: number;
  /**
   * 重定向端口，取值范围[0-65535]；默认值为0，代表关闭；仅HTTP协议支持开启重定向功能
   */
  ForwardPort?: number;
  /**
   * 0:关闭 1:开启，用于开启http2功能；默认值为0
   */
  EnableHTTP2?: number;
}

/**
 * UpdateVServerAttribute - 更新传统型负载均衡VServer实例属性
 */
export interface UpdateVServerAttributeResponse {}
