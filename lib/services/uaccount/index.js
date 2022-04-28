"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("../../core/client"));
const request_1 = __importDefault(require("../../core/request"));
/**
 * This client is used to call actions of **uaccount** service
 */
class UAccountClient extends client_1.default {
    constructor({ config, credential, }) {
        super({ config, credential });
    }
    /**
     * AddMemberToProject - 添加成员到项目
     *
     * See also: https://docs.ucloud.cn/api/uaccount-api/add_member_to_project
     */
    addMemberToProject(request) {
        const args = Object.assign({ Action: 'AddMemberToProject' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * FreezeMember - 冻结成员
     *
     * See also: https://docs.ucloud.cn/api/uaccount-api/freeze_member
     */
    freezeMember(request) {
        const args = Object.assign({ Action: 'FreezeMember' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetNetworkMask - 查询登录与API调用的网络掩码
     *
     * See also: https://docs.ucloud.cn/api/uaccount-api/get_network_mask
     */
    getNetworkMask(request) {
        const args = Object.assign({ Action: 'GetNetworkMask' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetProjectList - 获取项目列表
     *
     * See also: https://docs.ucloud.cn/api/uaccount-api/get_project_list
     */
    getProjectList(request) {
        const args = Object.assign({ Action: 'GetProjectList' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetRegion - 获取用户在各数据中心的权限等信息
     *
     * See also: https://docs.ucloud.cn/api/uaccount-api/get_region
     */
    getRegion(request) {
        const args = Object.assign({ Action: 'GetRegion' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * InviteSubaccount - 邀请子帐号成员
     *
     * See also: https://docs.ucloud.cn/api/uaccount-api/invite_subaccount
     */
    inviteSubaccount(request) {
        const args = Object.assign({ Action: 'InviteSubaccount' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * RemoveMemberFromProject - 从项目中移除成员
     *
     * See also: https://docs.ucloud.cn/api/uaccount-api/remove_member_from_project
     */
    removeMemberFromProject(request) {
        const args = Object.assign({ Action: 'RemoveMemberFromProject' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * SetNetworkMask - 设置登录与API调用的网络掩码
     *
     * See also: https://docs.ucloud.cn/api/uaccount-api/set_network_mask
     */
    setNetworkMask(request) {
        const args = Object.assign({ Action: 'SetNetworkMask' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
}
exports.default = UAccountClient;
