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
     * UpdateExportLine - 修改加速线路
     *
     * See also: https://docs.ucloud.cn/api/uwsc-api/update_export_line
     */
    updateExportLine(request) {
        const args = Object.assign({ Action: 'UpdateExportLine' }, (request || {}));
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
