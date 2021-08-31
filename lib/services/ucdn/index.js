"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("../../core/client"));
const request_1 = __importDefault(require("../../core/request"));
/**
 * This client is used to call actions of **ucdn** service
 */
class UCDNClient extends client_1.default {
    constructor({ config, credential, }) {
        super({ config, credential });
    }
    /**
     * DescribeNewUcdnPrefetchCacheTask - 获取预取任务状态
     *
     * See also: https://docs.ucloud.cn/api/ucdn-api/describe_new_ucdn_prefetch_cache_task
     */
    describeNewUcdnPrefetchCacheTask(request) {
        const args = Object.assign({ Action: 'DescribeNewUcdnPrefetchCacheTask' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeNewUcdnRefreshCacheTask - 获取域名刷新任务状态
     *
     * See also: https://docs.ucloud.cn/api/ucdn-api/describe_new_ucdn_refresh_cache_task
     */
    describeNewUcdnRefreshCacheTask(request) {
        const args = Object.assign({ Action: 'DescribeNewUcdnRefreshCacheTask' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetNewUcdnDomainBandwidth - 获取域名带宽数据
     *
     * See also: https://docs.ucloud.cn/api/ucdn-api/get_new_ucdn_domain_bandwidth
     */
    getNewUcdnDomainBandwidth(request) {
        const args = Object.assign({ Action: 'GetNewUcdnDomainBandwidth' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetNewUcdnDomainHitRate - 获取域名命中率
     *
     * See also: https://docs.ucloud.cn/api/ucdn-api/get_new_ucdn_domain_hit_rate
     */
    getNewUcdnDomainHitRate(request) {
        const args = Object.assign({ Action: 'GetNewUcdnDomainHitRate' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetNewUcdnDomainHttpCode - 获取域名状态码监控
     *
     * See also: https://docs.ucloud.cn/api/ucdn-api/get_new_ucdn_domain_http_code
     */
    getNewUcdnDomainHttpCode(request) {
        const args = Object.assign({ Action: 'GetNewUcdnDomainHttpCode' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetNewUcdnDomainHttpCodeV2 - 获取域名详细状态码监控
     *
     * See also: https://docs.ucloud.cn/api/ucdn-api/get_new_ucdn_domain_http_code_v2
     */
    getNewUcdnDomainHttpCodeV2(request) {
        const args = Object.assign({ Action: 'GetNewUcdnDomainHttpCodeV2' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUcdnDomain95BandwidthV2 - 获取域名九五峰值带宽数据
     *
     * See also: https://docs.ucloud.cn/api/ucdn-api/get_ucdn_domain95_bandwidth_v2
     */
    getUcdnDomain95BandwidthV2(request) {
        const args = Object.assign({ Action: 'GetUcdnDomain95BandwidthV2' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUcdnDomainBandwidthV2 - 获取域名带宽数据(新)
     *
     * See also: https://docs.ucloud.cn/api/ucdn-api/get_ucdn_domain_bandwidth_v2
     */
    getUcdnDomainBandwidthV2(request) {
        const args = Object.assign({ Action: 'GetUcdnDomainBandwidthV2' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUcdnDomainConfig - 批量获取加速域名配置
     *
     * See also: https://docs.ucloud.cn/api/ucdn-api/get_ucdn_domain_config
     */
    getUcdnDomainConfig(request) {
        const args = Object.assign({ Action: 'GetUcdnDomainConfig' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUcdnDomainHitRate - 获取域名命中率
     *
     * See also: https://docs.ucloud.cn/api/ucdn-api/get_ucdn_domain_hit_rate
     */
    getUcdnDomainHitRate(request) {
        const args = Object.assign({ Action: 'GetUcdnDomainHitRate' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUcdnDomainHttpCodeV2 - 获取域名状态码信息
     *
     * See also: https://docs.ucloud.cn/api/ucdn-api/get_ucdn_domain_http_code_v2
     */
    getUcdnDomainHttpCodeV2(request) {
        const args = Object.assign({ Action: 'GetUcdnDomainHttpCodeV2' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUcdnDomainInfoList - 获取域名基本信息
     *
     * See also: https://docs.ucloud.cn/api/ucdn-api/get_ucdn_domain_info_list
     */
    getUcdnDomainInfoList(request) {
        const args = Object.assign({ Action: 'GetUcdnDomainInfoList' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUcdnDomainLog - 获取加速域名原始日志
     *
     * See also: https://docs.ucloud.cn/api/ucdn-api/get_ucdn_domain_log
     */
    getUcdnDomainLog(request) {
        const args = Object.assign({ Action: 'GetUcdnDomainLog' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUcdnDomainOriginRequestNum - 获取域名回源请求数
     *
     * See also: https://docs.ucloud.cn/api/ucdn-api/get_ucdn_domain_origin_request_num
     */
    getUcdnDomainOriginRequestNum(request) {
        const args = Object.assign({ Action: 'GetUcdnDomainOriginRequestNum' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUcdnDomainPrefetchEnable - 获取域名预取开启状态
     *
     * See also: https://docs.ucloud.cn/api/ucdn-api/get_ucdn_domain_prefetch_enable
     */
    getUcdnDomainPrefetchEnable(request) {
        const args = Object.assign({ Action: 'GetUcdnDomainPrefetchEnable' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUcdnDomainRequestNumV2 - 获取域名请求数
     *
     * See also: https://docs.ucloud.cn/api/ucdn-api/get_ucdn_domain_request_num_v2
     */
    getUcdnDomainRequestNumV2(request) {
        const args = Object.assign({ Action: 'GetUcdnDomainRequestNumV2' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUcdnDomainRequestNumV3 - 获取域名请求数
     *
     * See also: https://docs.ucloud.cn/api/ucdn-api/get_ucdn_domain_request_num_v3
     */
    getUcdnDomainRequestNumV3(request) {
        const args = Object.assign({ Action: 'GetUcdnDomainRequestNumV3' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUcdnDomainTraffic - 获取加速域名流量使用信息
     *
     * See also: https://docs.ucloud.cn/api/ucdn-api/get_ucdn_domain_traffic
     */
    getUcdnDomainTraffic(request) {
        const args = Object.assign({ Action: 'GetUcdnDomainTraffic' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUcdnPassBandwidth - 获取回源带宽数据（cdn回客户源站部分）
     *
     * See also: https://docs.ucloud.cn/api/ucdn-api/get_ucdn_pass_bandwidth
     */
    getUcdnPassBandwidth(request) {
        const args = Object.assign({ Action: 'GetUcdnPassBandwidth' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUcdnPassBandwidthV2 - 获取回源带宽数据（cdn回客户源站部分）
     *
     * See also: https://docs.ucloud.cn/api/ucdn-api/get_ucdn_pass_bandwidth_v2
     */
    getUcdnPassBandwidthV2(request) {
        const args = Object.assign({ Action: 'GetUcdnPassBandwidthV2' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUcdnProIspBandwidthV2 - 按省份运营商获取域名带宽数据
     *
     * See also: https://docs.ucloud.cn/api/ucdn-api/get_ucdn_pro_isp_bandwidth_v2
     */
    getUcdnProIspBandwidthV2(request) {
        const args = Object.assign({ Action: 'GetUcdnProIspBandwidthV2' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUcdnProIspRequestNumV2 - 按省份运营商获取域名请求数
     *
     * See also: https://docs.ucloud.cn/api/ucdn-api/get_ucdn_pro_isp_request_num_v2
     */
    getUcdnProIspRequestNumV2(request) {
        const args = Object.assign({ Action: 'GetUcdnProIspRequestNumV2' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUcdnTraffic - 获取流量信息
     *
     * See also: https://docs.ucloud.cn/api/ucdn-api/get_ucdn_traffic
     */
    getUcdnTraffic(request) {
        const args = Object.assign({ Action: 'GetUcdnTraffic' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUcdnTrafficV2 - 获取流量信息
     *
     * See also: https://docs.ucloud.cn/api/ucdn-api/get_ucdn_traffic_v2
     */
    getUcdnTrafficV2(request) {
        const args = Object.assign({ Action: 'GetUcdnTrafficV2' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * PrefetchNewUcdnDomainCache - 提交预取任务
     *
     * See also: https://docs.ucloud.cn/api/ucdn-api/prefetch_new_ucdn_domain_cache
     */
    prefetchNewUcdnDomainCache(request) {
        const args = Object.assign({ Action: 'PrefetchNewUcdnDomainCache' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * RefreshNewUcdnDomainCache - 刷新缓存
     *
     * See also: https://docs.ucloud.cn/api/ucdn-api/refresh_new_ucdn_domain_cache
     */
    refreshNewUcdnDomainCache(request) {
        const args = Object.assign({ Action: 'RefreshNewUcdnDomainCache' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * SwitchUcdnChargeType - 切换账号计费方式
     *
     * See also: https://docs.ucloud.cn/api/ucdn-api/switch_ucdn_charge_type
     */
    switchUcdnChargeType(request) {
        const args = Object.assign({ Action: 'SwitchUcdnChargeType' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
}
exports.default = UCDNClient;
