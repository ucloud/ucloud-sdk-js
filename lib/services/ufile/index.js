"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("../../core/client"));
const request_1 = __importDefault(require("../../core/request"));
/**
 * This client is used to call actions of **ufile** service
 */
class UFileClient extends client_1.default {
    constructor({ config, credential, }) {
        super({ config, credential });
    }
    /**
     * CreateBucket - 创建Bucket
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/create_bucket
     */
    createBucket(request) {
        const args = Object.assign({ Action: 'CreateBucket' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateUFileToken - 创建US3令牌
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/create_ufile_token
     */
    createUFileToken(request) {
        const args = Object.assign({ Action: 'CreateUFileToken' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteBucket - 删除Bucket
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/delete_bucket
     */
    deleteBucket(request) {
        const args = Object.assign({ Action: 'DeleteBucket' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteUFileToken - 删除令牌
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/delete_ufile_token
     */
    deleteUFileToken(request) {
        const args = Object.assign({ Action: 'DeleteUFileToken' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeBucket - 获取Bucket的描述信息
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/describe_bucket
     */
    describeBucket(request) {
        const args = Object.assign({ Action: 'DescribeBucket' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUFileToken - 获取令牌信息
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/describe_ufile_token
     */
    describeUFileToken(request) {
        const args = Object.assign({ Action: 'DescribeUFileToken' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUFileQuota - 查看配额状态
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/get_ufile_quota
     */
    getUFileQuota(request) {
        const args = Object.assign({ Action: 'GetUFileQuota' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUFileQuotaInfo - 获取配额信息
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/get_ufile_quota_info
     */
    getUFileQuotaInfo(request) {
        const args = Object.assign({ Action: 'GetUFileQuotaInfo' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUFileQuotaPrice - 根据US3的购买配额，查询需要支付的价格。
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/get_ufile_quota_price
     */
    getUFileQuotaPrice(request) {
        const args = Object.assign({ Action: 'GetUFileQuotaPrice' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUFileReport - 查看配额使用报表
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/get_ufile_report
     */
    getUFileReport(request) {
        const args = Object.assign({ Action: 'GetUFileReport' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * SetUFileReferer - 设置对象存储防盗链
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/set_ufile_referer
     */
    setUFileReferer(request) {
        const args = Object.assign({ Action: 'SetUFileReferer' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateBucket - 更改Bucket的属性
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/update_bucket
     */
    updateBucket(request) {
        const args = Object.assign({ Action: 'UpdateBucket' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateUFileToken - 更新令牌的操作权限，可操作key的前缀，可操作bucket和令牌超时时间点
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/update_ufile_token
     */
    updateUFileToken(request) {
        const args = Object.assign({ Action: 'UpdateUFileToken' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
}
exports.default = UFileClient;
