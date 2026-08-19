"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("../../core/client"));
const request_1 = __importDefault(require("../../core/request"));
/**
 * This client is used to call actions of **uwsc** service
 */
class UWSCClient extends client_1.default {
    constructor({ config, credential, }) {
        super({ config, credential });
    }
    /**
     * AddExportLineRules - 添加加速规则
     *
     * See also: https://docs.ucloud.cn/api/uwsc-api/add_export_line_rules
     */
    addExportLineRules(request) {
        const args = Object.assign({ Action: 'AddExportLineRules' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * BindCPE - 绑定 CPE
     *
     * See also: https://docs.ucloud.cn/api/uwsc-api/bind_cpe
     */
    bindCPE(request) {
        const args = Object.assign({ Action: 'BindCPE' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateCEGateway - 创建CE客户网关
     *
     * See also: https://docs.ucloud.cn/api/uwsc-api/create_ce_gateway
     */
    createCEGateway(request) {
        const args = Object.assign({ Action: 'CreateCEGateway' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateCETunnel - 创建隧道
     *
     * See also: https://docs.ucloud.cn/api/uwsc-api/create_ce_tunnel
     */
    createCETunnel(request) {
        const args = Object.assign({ Action: 'CreateCETunnel' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateCPE - 创建 CPE
     *
     * See also: https://docs.ucloud.cn/api/uwsc-api/create_cpe
     */
    createCPE(request) {
        const args = Object.assign({ Action: 'CreateCPE' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateExportLine - 创建加速线路
     *
     * See also: https://docs.ucloud.cn/api/uwsc-api/create_export_line
     */
    createExportLine(request) {
        const args = Object.assign({ Action: 'CreateExportLine' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreatePOPGW - 创建UWAN虚拟路由器
     *
     * See also: https://docs.ucloud.cn/api/uwsc-api/create_popgw
     */
    createPOPGW(request) {
        const args = Object.assign({ Action: 'CreatePOPGW' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteCEGateway - 删除CE网关
     *
     * See also: https://docs.ucloud.cn/api/uwsc-api/delete_ce_gateway
     */
    deleteCEGateway(request) {
        const args = Object.assign({ Action: 'DeleteCEGateway' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteCETunnel - 删除隧道
     *
     * See also: https://docs.ucloud.cn/api/uwsc-api/delete_ce_tunnel
     */
    deleteCETunnel(request) {
        const args = Object.assign({ Action: 'DeleteCETunnel' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteExportLine - 删除加速线路
     *
     * See also: https://docs.ucloud.cn/api/uwsc-api/delete_export_line
     */
    deleteExportLine(request) {
        const args = Object.assign({ Action: 'DeleteExportLine' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteExportLineRules - 删除加速规则
     *
     * See also: https://docs.ucloud.cn/api/uwsc-api/delete_export_line_rules
     */
    deleteExportLineRules(request) {
        const args = Object.assign({ Action: 'DeleteExportLineRules' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeletePOPGW - 删除UWAN虚拟路由器
     *
     * See also: https://docs.ucloud.cn/api/uwsc-api/delete_popgw
     */
    deletePOPGW(request) {
        const args = Object.assign({ Action: 'DeletePOPGW' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeCEGateway - 查询CE网关，优先级 Region > PopGwId > VPNId
     *
     * See also: https://docs.ucloud.cn/api/uwsc-api/describe_ce_gateway
     */
    describeCEGateway(request) {
        const args = Object.assign({ Action: 'DescribeCEGateway' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeCETunnel - 查询隧道
     *
     * See also: https://docs.ucloud.cn/api/uwsc-api/describe_ce_tunnel
     */
    describeCETunnel(request) {
        const args = Object.assign({ Action: 'DescribeCETunnel' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeCPE - 查询 CPE 信息
     *
     * See also: https://docs.ucloud.cn/api/uwsc-api/describe_cpe
     */
    describeCPE(request) {
        const args = Object.assign({ Action: 'DescribeCPE' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeExportLine - 查询CPE绑定的加速线路信息
     *
     * See also: https://docs.ucloud.cn/api/uwsc-api/describe_export_line
     */
    describeExportLine(request) {
        const args = Object.assign({ Action: 'DescribeExportLine' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeExportLineRules - 查询白名单
     *
     * See also: https://docs.ucloud.cn/api/uwsc-api/describe_export_line_rules
     */
    describeExportLineRules(request) {
        const args = Object.assign({ Action: 'DescribeExportLineRules' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribePOPGW - 查询UWAN虚拟路由器
     *
     * See also: https://docs.ucloud.cn/api/uwsc-api/describe_popgw
     */
    describePOPGW(request) {
        const args = Object.assign({ Action: 'DescribePOPGW' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ListAvailableRegion - 获取可用地域
     *
     * See also: https://docs.ucloud.cn/api/uwsc-api/list_available_region
     */
    listAvailableRegion(request) {
        const args = Object.assign({ Action: 'ListAvailableRegion' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateBWPackage - 更新UWSC带宽包
     *
     * See also: https://docs.ucloud.cn/api/uwsc-api/update_bw_package
     */
    updateBWPackage(request) {
        const args = Object.assign({ Action: 'UpdateBWPackage' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateCEGateway - 更新CE网关
     *
     * See also: https://docs.ucloud.cn/api/uwsc-api/update_ce_gateway
     */
    updateCEGateway(request) {
        const args = Object.assign({ Action: 'UpdateCEGateway' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateCETunnel - 更新隧道配置
     *
     * See also: https://docs.ucloud.cn/api/uwsc-api/update_ce_tunnel
     */
    updateCETunnel(request) {
        const args = Object.assign({ Action: 'UpdateCETunnel' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateCETunnelAttribute - 更新隧道属性
     *
     * See also: https://docs.ucloud.cn/api/uwsc-api/update_ce_tunnel_attribute
     */
    updateCETunnelAttribute(request) {
        const args = Object.assign({ Action: 'UpdateCETunnelAttribute' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateExportLine - 修改加速线路
     *
     * See also: https://docs.ucloud.cn/api/uwsc-api/update_export_line
     */
    updateExportLine(request) {
        const args = Object.assign({ Action: 'UpdateExportLine' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdatePOPGWAttribute - 更新UWAN虚拟路由器属性
     *
     * See also: https://docs.ucloud.cn/api/uwsc-api/update_popgw_attribute
     */
    updatePOPGWAttribute(request) {
        const args = Object.assign({ Action: 'UpdatePOPGWAttribute' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpgradeExportLine - 升级加速线路
     *
     * See also: https://docs.ucloud.cn/api/uwsc-api/upgrade_export_line
     */
    upgradeExportLine(request) {
        const args = Object.assign({ Action: 'UpgradeExportLine' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
}
exports.default = UWSCClient;
