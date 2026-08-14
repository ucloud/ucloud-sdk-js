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
     * AddCORSRule - 添加跨域规则
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/add_cors_rule
     */
    addCORSRule(request) {
        const args = Object.assign({ Action: 'AddCORSRule' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * AddUFileSSLCert - 给指定域名添加证书
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/add_ufile_ssl_cert
     */
    addUFileSSLCert(request) {
        const args = Object.assign({ Action: 'AddUFileSSLCert' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * BindBucketDomain - 绑定自定义域名
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/bind_bucket_domain
     */
    bindBucketDomain(request) {
        const args = Object.assign({ Action: 'BindBucketDomain' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * BuyUFilePkg - 购买流量包或存储包
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/buy_ufile_pkg
     */
    buyUFilePkg(request) {
        const args = Object.assign({ Action: 'BuyUFilePkg' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
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
     * CreateUFileLifeCycle - 创建生命周期管理
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/create_ufile_life_cycle
     */
    createUFileLifeCycle(request) {
        const args = Object.assign({ Action: 'CreateUFileLifeCycle' }, (request || {}));
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
     * CreateUdsRule - 针对对象存储的文件，进行自动触发解压。
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/create_uds_rule
     */
    createUdsRule(request) {
        const args = Object.assign({ Action: 'CreateUdsRule' }, (request || {}));
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
     * DeleteCORSRule - 删除跨域规则
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/delete_cors_rule
     */
    deleteCORSRule(request) {
        const args = Object.assign({ Action: 'DeleteCORSRule' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteUFileLifeCycle - 删除生命周期管理
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/delete_ufile_life_cycle
     */
    deleteUFileLifeCycle(request) {
        const args = Object.assign({ Action: 'DeleteUFileLifeCycle' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteUFilePkg - 删除资源包(退费)
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/delete_ufile_pkg
     */
    deleteUFilePkg(request) {
        const args = Object.assign({ Action: 'DeleteUFilePkg' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteUFileSSLCert - 删除指定域名添加证书
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/delete_ufile_ssl_cert
     */
    deleteUFileSSLCert(request) {
        const args = Object.assign({ Action: 'DeleteUFileSSLCert' }, (request || {}));
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
     * DescribeCORSRule - 获取跨域规则信息
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/describe_cors_rule
     */
    describeCORSRule(request) {
        const args = Object.assign({ Action: 'DescribeCORSRule' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUFileAvailablePkg - 查询可购买的资源包列表
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/describe_ufile_available_pkg
     */
    describeUFileAvailablePkg(request) {
        const args = Object.assign({ Action: 'DescribeUFileAvailablePkg' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUFileLifeCycle - 获取生命周期信息
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/describe_ufile_life_cycle
     */
    describeUFileLifeCycle(request) {
        const args = Object.assign({ Action: 'DescribeUFileLifeCycle' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUFilePkg - 查询已购买的资源包列表
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/describe_ufile_pkg
     */
    describeUFilePkg(request) {
        const args = Object.assign({ Action: 'DescribeUFilePkg' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUFilePkgUsage - 查询资源包使用明细
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/describe_ufile_pkg_usage
     */
    describeUFilePkgUsage(request) {
        const args = Object.assign({ Action: 'DescribeUFilePkgUsage' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUFileReferer - 对象存储防盗链列表
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/describe_ufile_referer
     */
    describeUFileReferer(request) {
        const args = Object.assign({ Action: 'DescribeUFileReferer' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUFileSSLCert - 查询指定存储桶所有证书
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/describe_ufile_ssl_cert
     */
    describeUFileSSLCert(request) {
        const args = Object.assign({ Action: 'DescribeUFileSSLCert' }, (request || {}));
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
     * DescribeUdsRule - 针对解压缩规则进行查询
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/describe_uds_rule
     */
    describeUdsRule(request) {
        const args = Object.assign({ Action: 'DescribeUdsRule' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetBucketQuota - 获取bucket配额
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/get_bucket_quota
     */
    getBucketQuota(request) {
        const args = Object.assign({ Action: 'GetBucketQuota' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetBucketStaticPageRule - 获取bucket静态网页配置
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/get_bucket_static_page_rule
     */
    getBucketStaticPageRule(request) {
        const args = Object.assign({ Action: 'GetBucketStaticPageRule' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetProjectRegionQuota - 获取项目地域配额
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/get_project_region_quota
     */
    getProjectRegionQuota(request) {
        const args = Object.assign({ Action: 'GetProjectRegionQuota' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUFileDailyBill - 获取bucket每日账单
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/get_ufile_daily_bill
     */
    getUFileDailyBill(request) {
        const args = Object.assign({ Action: 'GetUFileDailyBill' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUFileDailyReport - 查看日消费报表
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/get_ufile_daily_report
     */
    getUFileDailyReport(request) {
        const args = Object.assign({ Action: 'GetUFileDailyReport' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUFileMonthlyBill - 获取bucket月度账单
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/get_ufile_monthly_bill
     */
    getUFileMonthlyBill(request) {
        const args = Object.assign({ Action: 'GetUFileMonthlyBill' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUFilePkgPrice - 获取对资源进行新购、续费、升级等操作的价格
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/get_ufile_pkg_price
     */
    getUFilePkgPrice(request) {
        const args = Object.assign({ Action: 'GetUFilePkgPrice' }, (request || {}));
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
     * RenewUFilePkg - 资源包续费
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/renew_ufile_pkg
     */
    renewUFilePkg(request) {
        const args = Object.assign({ Action: 'RenewUFilePkg' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * SetBucketQuota - 设置bucket配额
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/set_bucket_quota
     */
    setBucketQuota(request) {
        const args = Object.assign({ Action: 'SetBucketQuota' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * SetProjectRegionQuota - 设置项目地域配额
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/set_project_region_quota
     */
    setProjectRegionQuota(request) {
        const args = Object.assign({ Action: 'SetProjectRegionQuota' }, (request || {}));
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
     * UpdateBucketStaticPageRule - 修改bucket静态网页配置
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/update_bucket_static_page_rule
     */
    updateBucketStaticPageRule(request) {
        const args = Object.assign({ Action: 'UpdateBucketStaticPageRule' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateCORSRule - 更新跨域规则
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/update_cors_rule
     */
    updateCORSRule(request) {
        const args = Object.assign({ Action: 'UpdateCORSRule' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateUFileLifeCycle - 更新生命周期管理
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/update_ufile_life_cycle
     */
    updateUFileLifeCycle(request) {
        const args = Object.assign({ Action: 'UpdateUFileLifeCycle' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateUFileSSLCert - 更新指定域名证书
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/update_ufile_ssl_cert
     */
    updateUFileSSLCert(request) {
        const args = Object.assign({ Action: 'UpdateUFileSSLCert' }, (request || {}));
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
    /**
     * UpdateUdsRule - 针对对象存储的文件，进行自动触发解压。
     *
     * See also: https://docs.ucloud.cn/api/ufile-api/update_uds_rule
     */
    updateUdsRule(request) {
        const args = Object.assign({ Action: 'UpdateUdsRule' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
}
exports.default = UFileClient;
