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
     * AddCertificate - 添加证书
     *
     * See also: https://docs.ucloud.cn/api/ucdn-api/add_certificate
     */
    addCertificate(request) {
        const args = Object.assign({ Action: 'AddCertificate' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetCertificateBaseInfoList - 配置CDN获取证书列表
     */
    getCertificateBaseInfoList() {
        const args = { Action: 'GetCertificateBaseInfoList' };
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateUcdnDomainHttpsConfig - 配置CDN域名HTTPS
     */
    updateUcdnDomainHttpsConfig(request) {
        const args = Object.assign({ Action: 'UpdateUcdnDomainHttpsConfig' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ControlUcdnDomainCacheAccess - 封禁解封缓存访问
     *
     * See also: https://docs.ucloud.cn/api/ucdn-api/control_ucdn_domain_cache_access
     */
    controlUcdnDomainCacheAccess(request) {
        const args = Object.assign({ Action: 'ControlUcdnDomainCacheAccess' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteCertificate - 删除证书
     *
     * See also: https://docs.ucloud.cn/api/ucdn-api/delete_certificate
     */
    deleteCertificate(request) {
        const args = Object.assign({ Action: 'DeleteCertificate' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
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
     * GetCertificateV2 - 获取证书列表(新)
     *
     * See also: https://docs.ucloud.cn/api/ucdn-api/get_certificate_v2
     */
    getCertificateV2(request) {
        const args = Object.assign({ Action: 'GetCertificateV2' }, (request || {}));
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
     * GetNewUcdnLogRefererStatistics - 获取热点referer统计
     *
     * See also: https://docs.ucloud.cn/api/ucdn-api/get_new_ucdn_log_referer_statistics
     */
    getNewUcdnLogRefererStatistics(request) {
        const args = Object.assign({ Action: 'GetNewUcdnLogRefererStatistics' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetNewUcdnLogUrlStatistics - 获取日志url统计
     *
     * See also: https://docs.ucloud.cn/api/ucdn-api/get_new_ucdn_log_url_statistics
     */
    getNewUcdnLogUrlStatistics(request) {
        const args = Object.assign({ Action: 'GetNewUcdnLogUrlStatistics' }, (request || {}));
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
     * GetUcdnDomainLogV2 - 获取域名5分钟日志
     *
     * See also: https://docs.ucloud.cn/api/ucdn-api/get_ucdn_domain_log_v2
     */
    getUcdnDomainLogV2(request) {
        const args = Object.assign({ Action: 'GetUcdnDomainLogV2' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUcdnDomainOriginHttpCode - 获取域名源站状态码监控
     *
     * See also: https://docs.ucloud.cn/api/ucdn-api/get_ucdn_domain_origin_http_code
     */
    getUcdnDomainOriginHttpCode(request) {
        const args = Object.assign({ Action: 'GetUcdnDomainOriginHttpCode' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUcdnDomainOriginHttpCodeDetail - 获取域名源站详细状态码监控
     *
     * See also: https://docs.ucloud.cn/api/ucdn-api/get_ucdn_domain_origin_http_code_detail
     */
    getUcdnDomainOriginHttpCodeDetail(request) {
        const args = Object.assign({ Action: 'GetUcdnDomainOriginHttpCodeDetail' }, (request || {}));
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
     * GetUcdnDomainRequestNumV3 - 获取域名请求数
     *
     * See also: https://docs.ucloud.cn/api/ucdn-api/get_ucdn_domain_request_num_v3
     */
    getUcdnDomainRequestNumV3(request) {
        const args = Object.assign({ Action: 'GetUcdnDomainRequestNumV3' }, (request || {}));
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
     * QueryIpLocation - 查询IP信息
     *
     * See also: https://docs.ucloud.cn/api/ucdn-api/query_ip_location
     */
    queryIpLocation(request) {
        const args = Object.assign({ Action: 'QueryIpLocation' }, (request || {}));
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
