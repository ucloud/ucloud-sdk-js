"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("../../core/client"));
const request_1 = __importDefault(require("../../core/request"));
/**
 * This client is used to call actions of **uai_modelverse** service
 */
class UAIModelverseClient extends client_1.default {
    constructor({ config, credential, }) {
        super({ config, credential });
    }
    /**
     * CreateUMInferAPIKey - 创建apikey
     *
     * See also: https://docs.ucloud.cn/api/uai-modelverse-api/create_um_infer_api_key
     */
    createUMInferAPIKey(request) {
        const args = Object.assign({ Action: 'CreateUMInferAPIKey' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteUMInferAPIKey - 删除apikey
     *
     * See also: https://docs.ucloud.cn/api/uai-modelverse-api/delete_um_infer_api_key
     */
    deleteUMInferAPIKey(request) {
        const args = Object.assign({ Action: 'DeleteUMInferAPIKey' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUMInferAPIModel - 获取该apikey能调用api的模型列表
     *
     * See also: https://docs.ucloud.cn/api/uai-modelverse-api/get_um_infer_api_model
     */
    getUMInferAPIModel(request) {
        const args = Object.assign({ Action: 'GetUMInferAPIModel' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUMInferService - 获取模型服务
     *
     * See also: https://docs.ucloud.cn/api/uai-modelverse-api/get_um_infer_service
     */
    getUMInferService(request) {
        const args = Object.assign({ Action: 'GetUMInferService' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUMInferTokenUsage - 获取某个key下的某个模型的token使用量
     *
     * See also: https://docs.ucloud.cn/api/uai-modelverse-api/get_um_infer_token_usage
     */
    getUMInferTokenUsage(request) {
        const args = Object.assign({ Action: 'GetUMInferTokenUsage' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ListUFSquareModel - 查询模型广场数据
     *
     * See also: https://docs.ucloud.cn/api/uai-modelverse-api/list_uf_square_model
     */
    listUFSquareModel(request) {
        const args = Object.assign({ Action: 'ListUFSquareModel' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ListUFSquareModelLen - 获取模型广场上下文长度列表
     *
     * See also: https://docs.ucloud.cn/api/uai-modelverse-api/list_uf_square_model_len
     */
    listUFSquareModelLen(request) {
        const args = Object.assign({ Action: 'ListUFSquareModelLen' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ListUMInferAPIKey - 列表查询apikey
     *
     * See also: https://docs.ucloud.cn/api/uai-modelverse-api/list_um_infer_api_key
     */
    listUMInferAPIKey(request) {
        const args = Object.assign({ Action: 'ListUMInferAPIKey' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateUMInferAPIKey - 更新apikey
     *
     * See also: https://docs.ucloud.cn/api/uai-modelverse-api/update_um_infer_api_key
     */
    updateUMInferAPIKey(request) {
        const args = Object.assign({ Action: 'UpdateUMInferAPIKey' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
}
exports.default = UAIModelverseClient;
