"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("../../core/client"));
const request_1 = __importDefault(require("../../core/request"));
/**
 * This client is used to call actions of **sandbox** service
 */
class SandboxClient extends client_1.default {
    constructor({ config, credential, }) {
        super({ config, credential });
    }
    /**
     * CheckSandboxCustomDomain - 检查自定义域名
     *
     * See also: https://docs.ucloud.cn/api/sandbox-api/check_sandbox_custom_domain
     */
    checkSandboxCustomDomain(request) {
        const args = Object.assign({ Action: 'CheckSandboxCustomDomain' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateSandboxSite - 创建站点空间
     *
     * See also: https://docs.ucloud.cn/api/sandbox-api/create_sandbox_site
     */
    createSandboxSite(request) {
        const args = Object.assign({ Action: 'CreateSandboxSite' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteSandboxSite - 删除站点空间
     *
     * See also: https://docs.ucloud.cn/api/sandbox-api/delete_sandbox_site
     */
    deleteSandboxSite(request) {
        const args = Object.assign({ Action: 'DeleteSandboxSite' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetSandboxSite - 获取沙箱站点
     *
     * See also: https://docs.ucloud.cn/api/sandbox-api/get_sandbox_site
     */
    getSandboxSite(request) {
        const args = Object.assign({ Action: 'GetSandboxSite' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ListSandboxSites - 列出站点空间
     *
     * See also: https://docs.ucloud.cn/api/sandbox-api/list_sandbox_sites
     */
    listSandboxSites(request) {
        const args = Object.assign({ Action: 'ListSandboxSites' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateSandboxSite - 更新站点空间
     *
     * See also: https://docs.ucloud.cn/api/sandbox-api/update_sandbox_site
     */
    updateSandboxSite(request) {
        const args = Object.assign({ Action: 'UpdateSandboxSite' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateSandboxSiteCustomDomain - 更新沙箱站点自定义域名
     *
     * See also: https://docs.ucloud.cn/api/sandbox-api/update_sandbox_site_custom_domain
     */
    updateSandboxSiteCustomDomain(request) {
        const args = Object.assign({ Action: 'UpdateSandboxSiteCustomDomain' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
}
exports.default = SandboxClient;
