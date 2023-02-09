"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const client_1 = __importDefault(require("../core/client"));
const cube_1 = __importDefault(require("./cube"));
const ipsecvpn_1 = __importDefault(require("./ipsecvpn"));
const pathx_1 = __importDefault(require("./pathx"));
const uaccount_1 = __importDefault(require("./uaccount"));
const ubill_1 = __importDefault(require("./ubill"));
const ucdn_1 = __importDefault(require("./ucdn"));
const udb_1 = __importDefault(require("./udb"));
const uddb_1 = __importDefault(require("./uddb"));
const udisk_1 = __importDefault(require("./udisk"));
const udpn_1 = __importDefault(require("./udpn"));
const uec_1 = __importDefault(require("./uec"));
const ufile_1 = __importDefault(require("./ufile"));
const ufs_1 = __importDefault(require("./ufs"));
const uhost_1 = __importDefault(require("./uhost"));
const uk8s_1 = __importDefault(require("./uk8s"));
const ulb_1 = __importDefault(require("./ulb"));
const umem_1 = __importDefault(require("./umem"));
const unet_1 = __importDefault(require("./unet"));
const uphone_1 = __importDefault(require("./uphone"));
const uphost_1 = __importDefault(require("./uphost"));
const usms_1 = __importDefault(require("./usms"));
const uvms_1 = __importDefault(require("./uvms"));
const vpc_1 = __importDefault(require("./vpc"));
class Client extends client_1.default {
    constructor({ config, credential, }) {
        super({ config, credential });
    }
    cube() {
        return new cube_1.default({ config: this.config, credential: this.credential });
    }
    ipsecvpn() {
        return new ipsecvpn_1.default({
            config: this.config,
            credential: this.credential,
        });
    }
    pathx() {
        return new pathx_1.default({
            config: this.config,
            credential: this.credential,
        });
    }
    uaccount() {
        return new uaccount_1.default({
            config: this.config,
            credential: this.credential,
        });
    }
    ubill() {
        return new ubill_1.default({
            config: this.config,
            credential: this.credential,
        });
    }
    ucdn() {
        return new ucdn_1.default({ config: this.config, credential: this.credential });
    }
    udb() {
        return new udb_1.default({ config: this.config, credential: this.credential });
    }
    uddb() {
        return new uddb_1.default({ config: this.config, credential: this.credential });
    }
    udisk() {
        return new udisk_1.default({
            config: this.config,
            credential: this.credential,
        });
    }
    udpn() {
        return new udpn_1.default({ config: this.config, credential: this.credential });
    }
    uec() {
        return new uec_1.default({ config: this.config, credential: this.credential });
    }
    ufile() {
        return new ufile_1.default({
            config: this.config,
            credential: this.credential,
        });
    }
    ufs() {
        return new ufs_1.default({ config: this.config, credential: this.credential });
    }
    uhost() {
        return new uhost_1.default({
            config: this.config,
            credential: this.credential,
        });
    }
    uk8s() {
        return new uk8s_1.default({ config: this.config, credential: this.credential });
    }
    ulb() {
        return new ulb_1.default({ config: this.config, credential: this.credential });
    }
    umem() {
        return new umem_1.default({ config: this.config, credential: this.credential });
    }
    unet() {
        return new unet_1.default({ config: this.config, credential: this.credential });
    }
    uphone() {
        return new uphone_1.default({
            config: this.config,
            credential: this.credential,
        });
    }
    uphost() {
        return new uphost_1.default({
            config: this.config,
            credential: this.credential,
        });
    }
    usms() {
        return new usms_1.default({ config: this.config, credential: this.credential });
    }
    uvms() {
        return new uvms_1.default({ config: this.config, credential: this.credential });
    }
    vpc() {
        return new vpc_1.default({ config: this.config, credential: this.credential });
    }
}
exports.Client = Client;
module.exports = {
    Client: Client,
};
