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
     * AllocateBackend - 添加ULB后端资源实例
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/allocate_backend
     */
    allocateBackend(request) {
        const args = Object.assign({ Action: 'AllocateBackend' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * BindSSL - 将SSL证书绑定到VServer
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/bind_ssl
     */
    bindSSL(request) {
        const args = Object.assign({ Action: 'BindSSL' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreatePolicy - 创建VServer内容转发策略
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/create_policy
     */
    createPolicy(request) {
        const args = Object.assign({ Action: 'CreatePolicy' }, (request || {}));
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
     * CreateULB - 创建负载均衡实例，可以选择内网或者外网
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/create_ulb
     */
    createULB(request) {
        const args = Object.assign({ Action: 'CreateULB' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateVServer - 创建VServer实例，定义监听的协议和端口以及负载均衡算法
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/create_vserver
     */
    createVServer(request) {
        const args = Object.assign({ Action: 'CreateVServer' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeletePolicy - 删除内容转发策略
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/delete_policy
     */
    deletePolicy(request) {
        const args = Object.assign({ Action: 'DeletePolicy' }, (request || {}));
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
     * DeleteULB - 删除负载均衡实例
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/delete_ulb
     */
    deleteULB(request) {
        const args = Object.assign({ Action: 'DeleteULB' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteVServer - 删除VServer实例
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/delete_vserver
     */
    deleteVServer(request) {
        const args = Object.assign({ Action: 'DeleteVServer' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeSSL - 获取SSL证书信息
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/describe_ssl
     */
    describeSSL(request) {
        const args = Object.assign({ Action: 'DescribeSSL' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeULB - 获取ULB详细信息
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/describe_ulb
     */
    describeULB(request) {
        const args = Object.assign({ Action: 'DescribeULB' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeULBSimple - 获取ULB信息
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/describe_ulb_simple
     */
    describeULBSimple(request) {
        const args = Object.assign({ Action: 'DescribeULBSimple' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeVServer - 获取ULB下的VServer的详细信息
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/describe_vserver
     */
    describeVServer(request) {
        const args = Object.assign({ Action: 'DescribeVServer' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ReleaseBackend - 从VServer释放后端资源实例
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/release_backend
     */
    releaseBackend(request) {
        const args = Object.assign({ Action: 'ReleaseBackend' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UnbindSSL - 从VServer解绑SSL证书
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/unbind_ssl
     */
    unbindSSL(request) {
        const args = Object.assign({ Action: 'UnbindSSL' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateBackendAttribute - 更新ULB后端资源实例(服务节点)属性
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/update_backend_attribute
     */
    updateBackendAttribute(request) {
        const args = Object.assign({ Action: 'UpdateBackendAttribute' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdatePolicy - 更新内容转发规则，包括转发规则后的服务节点
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/update_policy
     */
    updatePolicy(request) {
        const args = Object.assign({ Action: 'UpdatePolicy' }, (request || {}));
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
     * UpdateULBAttribute - 更新ULB名字业务组备注等属性字段
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/update_ulb_attribute
     */
    updateULBAttribute(request) {
        const args = Object.assign({ Action: 'UpdateULBAttribute' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateVServerAttribute - 更新VServer实例属性
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/update_vserver_attribute
     */
    updateVServerAttribute(request) {
        const args = Object.assign({ Action: 'UpdateVServerAttribute' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
}
exports.default = ULBClient;
