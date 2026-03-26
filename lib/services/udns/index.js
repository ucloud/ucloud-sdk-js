"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("../../core/client"));
const request_1 = __importDefault(require("../../core/request"));
/**
 * This client is used to call actions of **udns** service
 */
class UDNSClient extends client_1.default {
    constructor({ config, credential, }) {
        super({ config, credential });
    }
    /**
     * AssociateUDNSZoneVPC - 绑定域名与VPC
     *
     * See also: https://docs.ucloud.cn/api/udns-api/associate_udns_zone_vpc
     */
    associateUDNSZoneVPC(request) {
        const args = Object.assign({ Action: 'AssociateUDNSZoneVPC' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateUDNSRecord - 创建域名记录
     *
     * See also: https://docs.ucloud.cn/api/udns-api/create_udns_record
     */
    createUDNSRecord(request) {
        const args = Object.assign({ Action: 'CreateUDNSRecord' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateUDNSZone - 创建域名
     *
     * See also: https://docs.ucloud.cn/api/udns-api/create_udns_zone
     */
    createUDNSZone(request) {
        const args = Object.assign({ Action: 'CreateUDNSZone' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteUDNSRecord - 删除域名记录
     *
     * See also: https://docs.ucloud.cn/api/udns-api/delete_udns_record
     */
    deleteUDNSRecord(request) {
        const args = Object.assign({ Action: 'DeleteUDNSRecord' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUDNSDomain - zone下所有域名的rr记录
     *
     * See also: https://docs.ucloud.cn/api/udns-api/describe_udns_domain
     */
    describeUDNSDomain(request) {
        const args = Object.assign({ Action: 'DescribeUDNSDomain' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUDNSRecord - 获取域名记录
     *
     * See also: https://docs.ucloud.cn/api/udns-api/describe_udns_record
     */
    describeUDNSRecord(request) {
        const args = Object.assign({ Action: 'DescribeUDNSRecord' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUDNSZone - 获取域名信息
     *
     * See also: https://docs.ucloud.cn/api/udns-api/describe_udns_zone
     */
    describeUDNSZone(request) {
        const args = Object.assign({ Action: 'DescribeUDNSZone' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DisassociateUDNSZoneVPC - 解绑域名和VPC
     *
     * See also: https://docs.ucloud.cn/api/udns-api/disassociate_udns_zone_vpc
     */
    disassociateUDNSZoneVPC(request) {
        const args = Object.assign({ Action: 'DisassociateUDNSZoneVPC' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ModifyUDNSRecord - 修改域名记录
     *
     * See also: https://docs.ucloud.cn/api/udns-api/modify_udns_record
     */
    modifyUDNSRecord(request) {
        const args = Object.assign({ Action: 'ModifyUDNSRecord' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ModifyUDNSZone - 修改域名备注/递归查询状态
     *
     * See also: https://docs.ucloud.cn/api/udns-api/modify_udns_zone
     */
    modifyUDNSZone(request) {
        const args = Object.assign({ Action: 'ModifyUDNSZone' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
}
exports.default = UDNSClient;
