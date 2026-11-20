"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("../../core/client"));
const request_1 = __importDefault(require("../../core/request"));
/**
 * This client is used to call actions of **udbproxy** service
 */
class UDBProxyClient extends client_1.default {
    constructor({ config, credential, }) {
        super({ config, credential });
    }
    /**
     * DescribeUDBProxy - 获取UDB代理服务详细信息
     *
     * See also: https://docs.ucloud.cn/api/udbproxy-api/describe_udb_proxy
     */
    describeUDBProxy(request) {
        const args = Object.assign({ Action: 'DescribeUDBProxy' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ListUDBProxyClient - 查询代理客户端连接IP信息(实时）
     *
     * See also: https://docs.ucloud.cn/api/udbproxy-api/list_udb_proxy_client
     */
    listUDBProxyClient(request) {
        const args = Object.assign({ Action: 'ListUDBProxyClient' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ListUDBProxyInstanceByDB - 查询DB启用代理数据
     *
     * See also: https://docs.ucloud.cn/api/udbproxy-api/list_udb_proxy_instance_by_db
     */
    listUDBProxyInstanceByDB(request) {
        const args = Object.assign({ Action: 'ListUDBProxyInstanceByDB' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
}
exports.default = UDBProxyClient;
