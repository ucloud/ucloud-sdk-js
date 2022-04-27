import { ConfigOptions } from '../core/config';
import { CredentialOptions } from '../core/credential';
const BaseClient = require('../core/client').default;

const CubeClient = require('./cube').default;
const IPSecVPNClient = require('./ipsecvpn').default;
const PathXClient = require('./pathx').default;
const UAccountClient = require('./uaccount').default;
const UBillClient = require('./ubill').default;
const UCDNClient = require('./ucdn').default;
const UDBClient = require('./udb').default;
const UDDBClient = require('./uddb').default;
const UDiskClient = require('./udisk').default;
const UDPNClient = require('./udpn').default;
const UECClient = require('./uec').default;
const UFileClient = require('./ufile').default;
const UFSClient = require('./ufs').default;
const UHostClient = require('./uhost').default;
const UK8SClient = require('./uk8s').default;
const ULBClient = require('./ulb').default;
const UMemClient = require('./umem').default;
const UNetClient = require('./unet').default;
const UPHostClient = require('./uphost').default;
const USMSClient = require('./usms').default;
const VPCClient = require('./vpc').default;

class Client extends BaseClient {
  constructor({
    config,
    credential,
  }: {
    config: ConfigOptions;
    credential: CredentialOptions;
  }) {
    super({ config, credential });
  }

  cube() {
    return new CubeClient({ config: this.config, credential: this.credential });
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

  uaccount() {
    return new UAccountClient({
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
    return new UCDNClient({ config: this.config, credential: this.credential });
  }

  udb() {
    return new UDBClient({ config: this.config, credential: this.credential });
  }

  uddb() {
    return new UDDBClient({ config: this.config, credential: this.credential });
  }

  udisk() {
    return new UDiskClient({
      config: this.config,
      credential: this.credential,
    });
  }

  udpn() {
    return new UDPNClient({ config: this.config, credential: this.credential });
  }

  uec() {
    return new UECClient({ config: this.config, credential: this.credential });
  }

  ufile() {
    return new UFileClient({
      config: this.config,
      credential: this.credential,
    });
  }

  ufs() {
    return new UFSClient({ config: this.config, credential: this.credential });
  }

  uhost() {
    return new UHostClient({
      config: this.config,
      credential: this.credential,
    });
  }

  uk8s() {
    return new UK8SClient({ config: this.config, credential: this.credential });
  }

  ulb() {
    return new ULBClient({ config: this.config, credential: this.credential });
  }

  umem() {
    return new UMemClient({ config: this.config, credential: this.credential });
  }

  unet() {
    return new UNetClient({ config: this.config, credential: this.credential });
  }

  uphost() {
    return new UPHostClient({
      config: this.config,
      credential: this.credential,
    });
  }

  usms() {
    return new USMSClient({ config: this.config, credential: this.credential });
  }

  vpc() {
    return new VPCClient({ config: this.config, credential: this.credential });
  }
}

module.exports = {
  Client: Client,
};
