"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("../../core/client"));
const request_1 = __importDefault(require("../../core/request"));
/**
 * This client is used to call actions of **uec** service
 */
class UECClient extends client_1.default {
    constructor({ config, credential, }) {
        super({ config, credential });
    }
    /**
     * BindUEcFirewall - 绑定防火墙，应用防火墙规则
     *
     * See also: https://docs.ucloud.cn/api/uec-api/bind_u_ec_firewall
     */
    bindUEcFirewall(request) {
        const args = Object.assign({ Action: 'BindUEcFirewall' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateUEcFirewall - 创建外网防火墙
     *
     * See also: https://docs.ucloud.cn/api/uec-api/create_u_ec_firewall
     */
    createUEcFirewall(request) {
        const args = Object.assign({ Action: 'CreateUEcFirewall' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateUEcHolder - 创建容器组
     *
     * See also: https://docs.ucloud.cn/api/uec-api/create_u_ec_holder
     */
    createUEcHolder(request) {
        const args = Object.assign({ Action: 'CreateUEcHolder' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateUEcSubnet - 创建子网
     *
     * See also: https://docs.ucloud.cn/api/uec-api/create_u_ec_subnet
     */
    createUEcSubnet(request) {
        const args = Object.assign({ Action: 'CreateUEcSubnet' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateUEcVHost - 创建虚拟机v2.0
     *
     * See also: https://docs.ucloud.cn/api/uec-api/create_u_ec_v_host
     */
    createUEcVHost(request) {
        const args = Object.assign({ Action: 'CreateUEcVHost' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteUEcCustomImage - 删除UEDN客户自定义镜像
     *
     * See also: https://docs.ucloud.cn/api/uec-api/delete_u_ec_custom_image
     */
    deleteUEcCustomImage(request) {
        const args = Object.assign({ Action: 'DeleteUEcCustomImage' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteUEcHolder - 删除容器组
     *
     * See also: https://docs.ucloud.cn/api/uec-api/delete_u_ec_holder
     */
    deleteUEcHolder(request) {
        const args = Object.assign({ Action: 'DeleteUEcHolder' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteUEcSubnet - 删除子网
     *
     * See also: https://docs.ucloud.cn/api/uec-api/delete_u_ec_subnet
     */
    deleteUEcSubnet(request) {
        const args = Object.assign({ Action: 'DeleteUEcSubnet' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteUEcVHost - 删除vhost虚拟机 v2.0
     *
     * See also: https://docs.ucloud.cn/api/uec-api/delete_u_ec_v_host
     */
    deleteUEcVHost(request) {
        const args = Object.assign({ Action: 'DeleteUEcVHost' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUEcFirewall - 获取防火墙信息
     *
     * See also: https://docs.ucloud.cn/api/uec-api/describe_u_ec_firewall
     */
    describeUEcFirewall(request) {
        const args = Object.assign({ Action: 'DescribeUEcFirewall' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUEcFirewallResource - 防火墙绑定的资源列表
     *
     * See also: https://docs.ucloud.cn/api/uec-api/describe_u_ec_firewall_resource
     */
    describeUEcFirewallResource(request) {
        const args = Object.assign({ Action: 'DescribeUEcFirewallResource' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUEcHolder - 获得容器组信息
     *
     * See also: https://docs.ucloud.cn/api/uec-api/describe_u_ec_holder
     */
    describeUEcHolder(request) {
        const args = Object.assign({ Action: 'DescribeUEcHolder' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUEcHolderIDC - 获取容器组机房信息
     *
     * See also: https://docs.ucloud.cn/api/uec-api/describe_u_ec_holder_idc
     */
    describeUEcHolderIDC(request) {
        const args = Object.assign({ Action: 'DescribeUEcHolderIDC' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUEcIDC - 获取IDC机房列表
     *
     * See also: https://docs.ucloud.cn/api/uec-api/describe_u_ec_idc
     */
    describeUEcIDC(request) {
        const args = Object.assign({ Action: 'DescribeUEcIDC' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUEcSubnet - 获取子网列表
     *
     * See also: https://docs.ucloud.cn/api/uec-api/describe_u_ec_subnet
     */
    describeUEcSubnet(request) {
        const args = Object.assign({ Action: 'DescribeUEcSubnet' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUEcVHost - 获取虚拟机列表 2.0
     *
     * See also: https://docs.ucloud.cn/api/uec-api/describe_u_ec_v_host
     */
    describeUEcVHost(request) {
        const args = Object.assign({ Action: 'DescribeUEcVHost' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUEcVHostISP - 获取虚拟机运营商信息
     *
     * See also: https://docs.ucloud.cn/api/uec-api/describe_u_ec_v_host_isp
     */
    describeUEcVHostISP(request) {
        const args = Object.assign({ Action: 'DescribeUEcVHostISP' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUEcHolderLog - 获取单个容器日志
     *
     * See also: https://docs.ucloud.cn/api/uec-api/get_u_ec_holder_log
     */
    getUEcHolderLog(request) {
        const args = Object.assign({ Action: 'GetUEcHolderLog' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUEcHolderMetrics - 获取容器（CPU利用率，带宽，内存）数据
     *
     * See also: https://docs.ucloud.cn/api/uec-api/get_u_ec_holder_metrics
     */
    getUEcHolderMetrics(request) {
        const args = Object.assign({ Action: 'GetUEcHolderMetrics' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUEcIDCCutInfo - 获取机房割接信息
     *
     * See also: https://docs.ucloud.cn/api/uec-api/get_u_ec_idc_cut_info
     */
    getUEcIDCCutInfo(request) {
        const args = Object.assign({ Action: 'GetUEcIDCCutInfo' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUEcIDCVHostData - 获取机房虚拟机监控数据
     *
     * See also: https://docs.ucloud.cn/api/uec-api/get_u_ec_idcv_host_data
     */
    getUEcIDCVHostData(request) {
        const args = Object.assign({ Action: 'GetUEcIDCVHostData' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUEcImage - uec2.0
     *
     * See also: https://docs.ucloud.cn/api/uec-api/get_u_ec_image
     */
    getUEcImage(request) {
        const args = Object.assign({ Action: 'GetUEcImage' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUEcPodPrice - 获得容器组价格
     *
     * See also: https://docs.ucloud.cn/api/uec-api/get_u_ec_pod_price
     */
    getUEcPodPrice(request) {
        const args = Object.assign({ Action: 'GetUEcPodPrice' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUEcUpgradePrice - 获取虚拟机调整差价
     *
     * See also: https://docs.ucloud.cn/api/uec-api/get_u_ec_upgrade_price
     */
    getUEcUpgradePrice(request) {
        const args = Object.assign({ Action: 'GetUEcUpgradePrice' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUEcVHostData - 获取虚拟机监控数据
     *
     * See also: https://docs.ucloud.cn/api/uec-api/get_u_ec_v_host_data
     */
    getUEcVHostData(request) {
        const args = Object.assign({ Action: 'GetUEcVHostData' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUEcVHostPrice - 获取虚拟机价格
     *
     * See also: https://docs.ucloud.cn/api/uec-api/get_u_ec_v_host_price
     */
    getUEcVHostPrice(request) {
        const args = Object.assign({ Action: 'GetUEcVHostPrice' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ImportUEcCustomImage - 导入自定义镜像
     *
     * See also: https://docs.ucloud.cn/api/uec-api/import_u_ec_custom_image
     */
    importUEcCustomImage(request) {
        const args = Object.assign({ Action: 'ImportUEcCustomImage' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * LoginUEcDocker - 登录容器
     *
     * See also: https://docs.ucloud.cn/api/uec-api/login_u_ec_docker
     */
    loginUEcDocker(request) {
        const args = Object.assign({ Action: 'LoginUEcDocker' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ModifyUEcBandwidth - 修改节点带宽限制
     *
     * See also: https://docs.ucloud.cn/api/uec-api/modify_u_ec_bandwidth
     */
    modifyUEcBandwidth(request) {
        const args = Object.assign({ Action: 'ModifyUEcBandwidth' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ModifyUEcHolderName - 修改容器组名称
     *
     * See also: https://docs.ucloud.cn/api/uec-api/modify_u_ec_holder_name
     */
    modifyUEcHolderName(request) {
        const args = Object.assign({ Action: 'ModifyUEcHolderName' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ModifyUEcImageName - 修改镜像名称
     *
     * See also: https://docs.ucloud.cn/api/uec-api/modify_u_ec_image_name
     */
    modifyUEcImageName(request) {
        const args = Object.assign({ Action: 'ModifyUEcImageName' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * PoweroffUEcVHost - 虚拟机断电
     *
     * See also: https://docs.ucloud.cn/api/uec-api/poweroff_u_ec_v_host
     */
    poweroffUEcVHost(request) {
        const args = Object.assign({ Action: 'PoweroffUEcVHost' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ReinstallUEcVHost - 虚拟机重装系统
     *
     * See also: https://docs.ucloud.cn/api/uec-api/reinstall_u_ec_v_host
     */
    reinstallUEcVHost(request) {
        const args = Object.assign({ Action: 'ReinstallUEcVHost' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * RestartUEcHolder - 重启容器组
     *
     * See also: https://docs.ucloud.cn/api/uec-api/restart_u_ec_holder
     */
    restartUEcHolder(request) {
        const args = Object.assign({ Action: 'RestartUEcHolder' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * RestartUEcVHost - 重启虚拟机v2.0
     *
     * See also: https://docs.ucloud.cn/api/uec-api/restart_u_ec_v_host
     */
    restartUEcVHost(request) {
        const args = Object.assign({ Action: 'RestartUEcVHost' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * StartUEcVHost - 启动UEC虚拟机
     *
     * See also: https://docs.ucloud.cn/api/uec-api/start_u_ec_v_host
     */
    startUEcVHost(request) {
        const args = Object.assign({ Action: 'StartUEcVHost' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * StopUEcVHost - 停止UEC虚拟机
     *
     * See also: https://docs.ucloud.cn/api/uec-api/stop_u_ec_v_host
     */
    stopUEcVHost(request) {
        const args = Object.assign({ Action: 'StopUEcVHost' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UnBindUEcFirewall - 解绑防火墙
     *
     * See also: https://docs.ucloud.cn/api/uec-api/un_bind_u_ec_firewall
     */
    unBindUEcFirewall(request) {
        const args = Object.assign({ Action: 'UnBindUEcFirewall' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateUEcFirewall - 更新防火墙信息，新增和删除规则
     *
     * See also: https://docs.ucloud.cn/api/uec-api/update_u_ec_firewall
     */
    updateUEcFirewall(request) {
        const args = Object.assign({ Action: 'UpdateUEcFirewall' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateUEcFirewallAttribute - 更新防火墙名称及描述
     *
     * See also: https://docs.ucloud.cn/api/uec-api/update_u_ec_firewall_attribute
     */
    updateUEcFirewallAttribute(request) {
        const args = Object.assign({ Action: 'UpdateUEcFirewallAttribute' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateUEcSubnet - 更新子网信息
     *
     * See also: https://docs.ucloud.cn/api/uec-api/update_u_ec_subnet
     */
    updateUEcSubnet(request) {
        const args = Object.assign({ Action: 'UpdateUEcSubnet' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
}
exports.default = UECClient;
