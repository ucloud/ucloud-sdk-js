"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("../../core/client"));
const request_1 = __importDefault(require("../../core/request"));
/**
 * This client is used to call actions of **pathx** service
 */
class PathXClient extends client_1.default {
    constructor({ config, credential, }) {
        super({ config, credential });
    }
    /**
     * BindPathXSSL - 绑定PathX SSL证书
     *
     * See also: https://docs.ucloud.cn/api/pathx-api/bind_path_xssl
     */
    bindPathXSSL(request) {
        const args = Object.assign({ Action: 'BindPathXSSL' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateGlobalSSHInstance - 创建GlobalSSH实例
     *
     * See also: https://docs.ucloud.cn/api/pathx-api/create_global_ssh_instance
     */
    createGlobalSSHInstance(request) {
        const args = Object.assign({ Action: 'CreateGlobalSSHInstance' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreatePathXSSL - 创建SSL证书，可以把整个 Pem 证书内容传到SSLContent，或者把证书、私钥、CA证书分别传过来
     *
     * See also: https://docs.ucloud.cn/api/pathx-api/create_path_xssl
     */
    createPathXSSL(request) {
        const args = Object.assign({ Action: 'CreatePathXSSL' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateUGA3Instance - 创建全球统一接入加速配置项
     *
     * See also: https://docs.ucloud.cn/api/pathx-api/create_uga3_instance
     */
    createUGA3Instance(request) {
        const args = Object.assign({ Action: 'CreateUGA3Instance' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateUGA3Port - 创建统一接入加速实例端口，目前仅支持四层TCP端口
     *
     * See also: https://docs.ucloud.cn/api/pathx-api/create_uga3_port
     */
    createUGA3Port(request) {
        const args = Object.assign({ Action: 'CreateUGA3Port' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateUGAForwarder - 创建加速实例转发器，支持HTTPS接入HTTPS回源、HTTPS接入HTTP回源、HTTP接入HTTP回源、TCP接入TCP回源、UDP接入UDP回源、 支持WSS接入WSS回源、WSS接入WS回源、WS接入WS回源
     *
     * See also: https://docs.ucloud.cn/api/pathx-api/create_uga_forwarder
     */
    createUGAForwarder(request) {
        const args = Object.assign({ Action: 'CreateUGAForwarder' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateUGAInstance - 创建全球加速配置项
     *
     * See also: https://docs.ucloud.cn/api/pathx-api/create_uga_instance
     */
    createUGAInstance(request) {
        const args = Object.assign({ Action: 'CreateUGAInstance' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateUPath - 创建UPath
     *
     * See also: https://docs.ucloud.cn/api/pathx-api/create_upath
     */
    createUPath(request) {
        const args = Object.assign({ Action: 'CreateUPath' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteGlobalSSHInstance - 删除GlobalSSH实例
     *
     * See also: https://docs.ucloud.cn/api/pathx-api/delete_global_ssh_instance
     */
    deleteGlobalSSHInstance(request) {
        const args = Object.assign({ Action: 'DeleteGlobalSSHInstance' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeletePathXSSL - 删除PathX SSL证书
     *
     * See also: https://docs.ucloud.cn/api/pathx-api/delete_path_xssl
     */
    deletePathXSSL(request) {
        const args = Object.assign({ Action: 'DeletePathXSSL' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteUGA3Instance - 删除全球统一接入转发实例
     *
     * See also: https://docs.ucloud.cn/api/pathx-api/delete_uga3_instance
     */
    deleteUGA3Instance(request) {
        const args = Object.assign({ Action: 'DeleteUGA3Instance' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteUGA3Port - 删除统一接入加速实例转发器 按接入端口删除
     *
     * See also: https://docs.ucloud.cn/api/pathx-api/delete_uga3_port
     */
    deleteUGA3Port(request) {
        const args = Object.assign({ Action: 'DeleteUGA3Port' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteUGAForwarder - 删除加速实例转发器 按接入端口删除
     *
     * See also: https://docs.ucloud.cn/api/pathx-api/delete_uga_forwarder
     */
    deleteUGAForwarder(request) {
        const args = Object.assign({ Action: 'DeleteUGAForwarder' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteUGAInstance - 删除全球加速服务加速配置
     *
     * See also: https://docs.ucloud.cn/api/pathx-api/delete_uga_instance
     */
    deleteUGAInstance(request) {
        const args = Object.assign({ Action: 'DeleteUGAInstance' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteUPath - 删除UPath
     *
     * See also: https://docs.ucloud.cn/api/pathx-api/delete_upath
     */
    deleteUPath(request) {
        const args = Object.assign({ Action: 'DeleteUPath' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeGlobalSSHInstance - 获取GlobalSSH实例列表（传实例ID获取单个实例信息，不传获取项目下全部实例）
     *
     * See also: https://docs.ucloud.cn/api/pathx-api/describe_global_ssh_instance
     */
    describeGlobalSSHInstance(request) {
        const args = Object.assign({ Action: 'DescribeGlobalSSHInstance' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribePathXLineConfig - 获取全球加速线路信息
     *
     * See also: https://docs.ucloud.cn/api/pathx-api/describe_path_x_line_config
     */
    describePathXLineConfig(request) {
        const args = Object.assign({ Action: 'DescribePathXLineConfig' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribePathXSSL - 获取SSL证书信息,支持分页，支持按证书名称 证书域名模糊搜索
     *
     * See also: https://docs.ucloud.cn/api/pathx-api/describe_path_xssl
     */
    describePathXSSL(request) {
        const args = Object.assign({ Action: 'DescribePathXSSL' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUGA3Area - 获取全球接入源站可选列表
     *
     * See also: https://docs.ucloud.cn/api/pathx-api/describe_uga3_area
     */
    describeUGA3Area(request) {
        const args = Object.assign({ Action: 'DescribeUGA3Area' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUGA3Instance - 获取全球统一接入加速服务加速配置信息，指定实例ID返回单个实例。未指定实例ID时 指定分页参数 则按创建时间降序 返回记录
     *
     * See also: https://docs.ucloud.cn/api/pathx-api/describe_uga3_instance
     */
    describeUGA3Instance(request) {
        const args = Object.assign({ Action: 'DescribeUGA3Instance' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUGA3Optimization - 获取全球接入UGA3线路加速化情况
     *
     * See also: https://docs.ucloud.cn/api/pathx-api/describe_uga3_optimization
     */
    describeUGA3Optimization(request) {
        const args = Object.assign({ Action: 'DescribeUGA3Optimization' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUGAInstance - 获取全球加速服务加速配置信息，指定实例ID返回单个实例。未指定实例ID时 指定分页参数 则按创建时间降序 返回记录
     *
     * See also: https://docs.ucloud.cn/api/pathx-api/describe_uga_instance
     */
    describeUGAInstance(request) {
        const args = Object.assign({ Action: 'DescribeUGAInstance' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUPath - 获取加速线路信息
     *
     * See also: https://docs.ucloud.cn/api/pathx-api/describe_upath
     */
    describeUPath(request) {
        const args = Object.assign({ Action: 'DescribeUPath' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUPathTemplate - 查询UPath的监控模板
     *
     * See also: https://docs.ucloud.cn/api/pathx-api/describe_upath_template
     */
    describeUPathTemplate(request) {
        const args = Object.assign({ Action: 'DescribeUPathTemplate' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetGlobalSSHPrice - 获取GlobalSSH价格
     *
     * See also: https://docs.ucloud.cn/api/pathx-api/get_global_ssh_price
     */
    getGlobalSSHPrice(request) {
        const args = Object.assign({ Action: 'GetGlobalSSHPrice' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetGlobalSSHUpdatePrice - 获取GlobalSSH升级价格
     *
     * See also: https://docs.ucloud.cn/api/pathx-api/get_global_ssh_update_price
     */
    getGlobalSSHUpdatePrice(request) {
        const args = Object.assign({ Action: 'GetGlobalSSHUpdatePrice' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetPathXMetric - 获取全球加速监控信息
     *
     * See also: https://docs.ucloud.cn/api/pathx-api/get_path_x_metric
     */
    getPathXMetric(request) {
        const args = Object.assign({ Action: 'GetPathXMetric' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUGA3Metric - 获取全地域加速监控信息
     *
     * See also: https://docs.ucloud.cn/api/pathx-api/get_uga3_metric
     */
    getUGA3Metric(request) {
        const args = Object.assign({ Action: 'GetUGA3Metric' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUGA3Price - 获取全球统一接入转发实例价格
     *
     * See also: https://docs.ucloud.cn/api/pathx-api/get_uga3_price
     */
    getUGA3Price(request) {
        const args = Object.assign({ Action: 'GetUGA3Price' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUGA3UpdatePrice - 全球统一接入获取实例更新价格（增加、删退）
     *
     * See also: https://docs.ucloud.cn/api/pathx-api/get_uga3_update_price
     */
    getUGA3UpdatePrice(request) {
        const args = Object.assign({ Action: 'GetUGA3UpdatePrice' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ModifyGlobalSSHPort - 修改GlobalSSH端口
     *
     * See also: https://docs.ucloud.cn/api/pathx-api/modify_global_ssh_port
     */
    modifyGlobalSSHPort(request) {
        const args = Object.assign({ Action: 'ModifyGlobalSSHPort' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ModifyGlobalSSHRemark - 修改GlobalSSH备注
     *
     * See also: https://docs.ucloud.cn/api/pathx-api/modify_global_ssh_remark
     */
    modifyGlobalSSHRemark(request) {
        const args = Object.assign({ Action: 'ModifyGlobalSSHRemark' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ModifyGlobalSSHType - 修改GlobalSSH实例类型，仅支持低版本升级到高版本，不支持高版本降级到低版本
     *
     * See also: https://docs.ucloud.cn/api/pathx-api/modify_global_ssh_type
     */
    modifyGlobalSSHType(request) {
        const args = Object.assign({ Action: 'ModifyGlobalSSHType' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ModifyUGA3Bandwidth - 修改统一接入加速配置带宽
     *
     * See also: https://docs.ucloud.cn/api/pathx-api/modify_uga3_bandwidth
     */
    modifyUGA3Bandwidth(request) {
        const args = Object.assign({ Action: 'ModifyUGA3Bandwidth' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ModifyUGA3Instance - 修改统一接入加速配置属性，如Name，ReMark
     *
     * See also: https://docs.ucloud.cn/api/pathx-api/modify_uga3_instance
     */
    modifyUGA3Instance(request) {
        const args = Object.assign({ Action: 'ModifyUGA3Instance' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ModifyUGA3OriginInfo - Domain， IPList注意：修改Domain或IPList时， 请确保源站服务端口已经开启且外网防火墙允许pathx出口ip访问。
     *
     * See also: https://docs.ucloud.cn/api/pathx-api/modify_uga3_origin_info
     */
    modifyUGA3OriginInfo(request) {
        const args = Object.assign({ Action: 'ModifyUGA3OriginInfo' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ModifyUGA3Port - 修改统一接入加速实例端口,目前仅支持四层TCP端口
     *
     * See also: https://docs.ucloud.cn/api/pathx-api/modify_uga3_port
     */
    modifyUGA3Port(request) {
        const args = Object.assign({ Action: 'ModifyUGA3Port' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ModifyUPathBandwidth - 修改加速线路带宽
     *
     * See also: https://docs.ucloud.cn/api/pathx-api/modify_upath_bandwidth
     */
    modifyUPathBandwidth(request) {
        const args = Object.assign({ Action: 'ModifyUPathBandwidth' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ModifyUPathTemplate - 修改UPath监控告警项
     *
     * See also: https://docs.ucloud.cn/api/pathx-api/modify_upath_template
     */
    modifyUPathTemplate(request) {
        const args = Object.assign({ Action: 'ModifyUPathTemplate' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UGABindUPath - UGA绑定UPath
     *
     * See also: https://docs.ucloud.cn/api/pathx-api/uga_bind_upath
     */
    uGABindUPath(request) {
        const args = Object.assign({ Action: 'UGABindUPath' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UGAUnBindUPath - UGA与UPath解绑
     *
     * See also: https://docs.ucloud.cn/api/pathx-api/uga_un_bind_upath
     */
    uGAUnBindUPath(request) {
        const args = Object.assign({ Action: 'UGAUnBindUPath' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UnBindPathXSSL - 解绑PathX SSL 证书
     *
     * See also: https://docs.ucloud.cn/api/pathx-api/un_bind_path_xssl
     */
    unBindPathXSSL(request) {
        const args = Object.assign({ Action: 'UnBindPathXSSL' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdatePathXWhitelist - 更新入口白名单,仅限GlobalSSH 实例使用。其他uga-实例不生效
     *
     * See also: https://docs.ucloud.cn/api/pathx-api/update_path_x_whitelist
     */
    updatePathXWhitelist(request) {
        const args = Object.assign({ Action: 'UpdatePathXWhitelist' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
}
exports.default = PathXClient;
