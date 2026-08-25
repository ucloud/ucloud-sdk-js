"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const BaseClient = require('../core/client').default;
const CloudWatchClient = require('./cloudwatch').default;
const CubeClient = require('./cube').default;
const IPSecVPNClient = require('./ipsecvpn').default;
const PathXClient = require('./pathx').default;
const SandboxClient = require('./sandbox').default;
const UAccountClient = require('./uaccount').default;
const UAIModelverseClient = require('./uai_modelverse').default;
const UBillClient = require('./ubill').default;
const UCDNClient = require('./ucdn').default;
const UClickhouseClient = require('./uclickhouse').default;
const UDBClient = require('./udb').default;
const UDDBClient = require('./uddb').default;
const UDiskClient = require('./udisk').default;
const UDNSClient = require('./udns').default;
const UDPNClient = require('./udpn').default;
const UECClient = require('./uec').default;
const UESClient = require('./ues').default;
const UFileClient = require('./ufile').default;
const UFSClient = require('./ufs').default;
const UGNClient = require('./ugn').default;
const UHadoopClient = require('./uhadoop').default;
const UHostClient = require('./uhost').default;
const UK8SClient = require('./uk8s').default;
const UKafkaClient = require('./ukafka').default;
const UKMSClient = require('./ukms').default;
const ULBClient = require('./ulb').default;
const ULightHostClient = require('./ulight_host').default;
const UMemClient = require('./umem').default;
const UMongoDBClient = require('./umongodb').default;
const UNetClient = require('./unet').default;
const UPhoneClient = require('./uphone').default;
const UPHostClient = require('./uphost').default;
const USMSClient = require('./usms').default;
const UVMSClient = require('./uvms').default;
const UWSCClient = require('./uwsc').default;
const VPCClient = require('./vpc').default;
class Client extends BaseClient {
    constructor({ config, credential, }) {
        super({ config, credential });
    }
    cloudwatch() {
        return new CloudWatchClient({
            config: this.config,
            credential: this.credential,
        });
    }
    cube() {
        return new CubeClient({
            config: this.config,
            credential: this.credential,
        });
    }
    ipsecvpn() {
        return new IPSecVPNClient({
            config: this.config,
            credential: this.credential,
        });
    }
    pathx() {
        return new PathXClient({
            config: this.config,
            credential: this.credential,
        });
    }
    sandbox() {
        return new SandboxClient({
            config: this.config,
            credential: this.credential,
        });
    }
    uaccount() {
        return new UAccountClient({
            config: this.config,
            credential: this.credential,
        });
    }
    uai_modelverse() {
        return new UAIModelverseClient({
            config: this.config,
            credential: this.credential,
        });
    }
    ubill() {
        return new UBillClient({
            config: this.config,
            credential: this.credential,
        });
    }
    ucdn() {
        return new UCDNClient({
            config: this.config,
            credential: this.credential,
        });
    }
    uclickhouse() {
        return new UClickhouseClient({
            config: this.config,
            credential: this.credential,
        });
    }
    udb() {
        return new UDBClient({
            config: this.config,
            credential: this.credential,
        });
    }
    uddb() {
        return new UDDBClient({
            config: this.config,
            credential: this.credential,
        });
    }
    udisk() {
        return new UDiskClient({
            config: this.config,
            credential: this.credential,
        });
    }
    udns() {
        return new UDNSClient({
            config: this.config,
            credential: this.credential,
        });
    }
    udpn() {
        return new UDPNClient({
            config: this.config,
            credential: this.credential,
        });
    }
    uec() {
        return new UECClient({
            config: this.config,
            credential: this.credential,
        });
    }
    ues() {
        return new UESClient({
            config: this.config,
            credential: this.credential,
        });
    }
    ufile() {
        return new UFileClient({
            config: this.config,
            credential: this.credential,
        });
    }
    ufs() {
        return new UFSClient({
            config: this.config,
            credential: this.credential,
        });
    }
    ugn() {
        return new UGNClient({
            config: this.config,
            credential: this.credential,
        });
    }
    uhadoop() {
        return new UHadoopClient({
            config: this.config,
            credential: this.credential,
        });
    }
    uhost() {
        return new UHostClient({
            config: this.config,
            credential: this.credential,
        });
    }
    uk8s() {
        return new UK8SClient({
            config: this.config,
            credential: this.credential,
        });
    }
    ukafka() {
        return new UKafkaClient({
            config: this.config,
            credential: this.credential,
        });
    }
    ukms() {
        return new UKMSClient({
            config: this.config,
            credential: this.credential,
        });
    }
    ulb() {
        return new ULBClient({
            config: this.config,
            credential: this.credential,
        });
    }
    ulight_host() {
        return new ULightHostClient({
            config: this.config,
            credential: this.credential,
        });
    }
    umem() {
        return new UMemClient({
            config: this.config,
            credential: this.credential,
        });
    }
    umongodb() {
        return new UMongoDBClient({
            config: this.config,
            credential: this.credential,
        });
    }
    unet() {
        return new UNetClient({
            config: this.config,
            credential: this.credential,
        });
    }
    uphone() {
        return new UPhoneClient({
            config: this.config,
            credential: this.credential,
        });
    }
    uphost() {
        return new UPHostClient({
            config: this.config,
            credential: this.credential,
        });
    }
    usms() {
        return new USMSClient({
            config: this.config,
            credential: this.credential,
        });
    }
    uvms() {
        return new UVMSClient({
            config: this.config,
            credential: this.credential,
        });
    }
    uwsc() {
        return new UWSCClient({
            config: this.config,
            credential: this.credential,
        });
    }
    vpc() {
        return new VPCClient({
            config: this.config,
            credential: this.credential,
        });
    }
}
exports.Client = Client;
module.exports = {
    Client: Client,
};
