"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("../../core/client"));
const request_1 = __importDefault(require("../../core/request"));
/**
 * This client is used to call actions of **cube** service
 */
class CubeClient extends client_1.default {
    constructor({ config, credential, }) {
        super({ config, credential });
    }
    /**
     * CreateCubeDeployment - 创建Cube的Deployment
     *
     * See also: https://docs.ucloud.cn/api/cube-api/create_cube_deployment
     */
    createCubeDeployment(request) {
        const args = Object.assign({ Action: 'CreateCubeDeployment' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateCubePod - 创建Pod
     *
     * See also: https://docs.ucloud.cn/api/cube-api/create_cube_pod
     */
    createCubePod(request) {
        const args = Object.assign({ Action: 'CreateCubePod' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteCubeDeployment - 删除Cube的Deployment
     *
     * See also: https://docs.ucloud.cn/api/cube-api/delete_cube_deployment
     */
    deleteCubeDeployment(request) {
        const args = Object.assign({ Action: 'DeleteCubeDeployment' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteCubePod - 删除Pod
     *
     * See also: https://docs.ucloud.cn/api/cube-api/delete_cube_pod
     */
    deleteCubePod(request) {
        const args = Object.assign({ Action: 'DeleteCubePod' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetCubeDeployment - 获取Deployment的详细信息
     *
     * See also: https://docs.ucloud.cn/api/cube-api/get_cube_deployment
     */
    getCubeDeployment(request) {
        const args = Object.assign({ Action: 'GetCubeDeployment' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetCubeExtendInfo - 获取Cube的额外信息
     *
     * See also: https://docs.ucloud.cn/api/cube-api/get_cube_extend_info
     */
    getCubeExtendInfo(request) {
        const args = Object.assign({ Action: 'GetCubeExtendInfo' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetCubeMetrics - 获取Cube实例（Pod，PodX，Deploy等）监控数据时间序列
     *
     * See also: https://docs.ucloud.cn/api/cube-api/get_cube_metrics
     */
    getCubeMetrics(request) {
        const args = Object.assign({ Action: 'GetCubeMetrics' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetCubePod - 获取Pod的详细信息
     *
     * See also: https://docs.ucloud.cn/api/cube-api/get_cube_pod
     */
    getCubePod(request) {
        const args = Object.assign({ Action: 'GetCubePod' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetCubePrice - 获取cube的价格
     *
     * See also: https://docs.ucloud.cn/api/cube-api/get_cube_price
     */
    getCubePrice(request) {
        const args = Object.assign({ Action: 'GetCubePrice' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ListCubePod - 获取Pods列表
     *
     * See also: https://docs.ucloud.cn/api/cube-api/list_cube_pod
     */
    listCubePod(request) {
        const args = Object.assign({ Action: 'ListCubePod' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ModifyCubeExtendInfo - 修改Cube额外信息
     *
     * See also: https://docs.ucloud.cn/api/cube-api/modify_cube_extend_info
     */
    modifyCubeExtendInfo(request) {
        const args = Object.assign({ Action: 'ModifyCubeExtendInfo' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ModifyCubeTag - 修改业务组名字
     *
     * See also: https://docs.ucloud.cn/api/cube-api/modify_cube_tag
     */
    modifyCubeTag(request) {
        const args = Object.assign({ Action: 'ModifyCubeTag' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * RenewCubePod - 更新Pod
     *
     * See also: https://docs.ucloud.cn/api/cube-api/renew_cube_pod
     */
    renewCubePod(request) {
        const args = Object.assign({ Action: 'RenewCubePod' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateCubeDeployment - 更新Deployment
     *
     * See also: https://docs.ucloud.cn/api/cube-api/update_cube_deployment
     */
    updateCubeDeployment(request) {
        const args = Object.assign({ Action: 'UpdateCubeDeployment' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
}
exports.default = CubeClient;
