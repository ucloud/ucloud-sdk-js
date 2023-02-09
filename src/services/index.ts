import { ConfigOptions } from '../core/config';
import { CredentialOptions } from '../core/credential';

import BaseClient from '../core/client';
import CubeClient from './cube';
import IPSecVPNClient from './ipsecvpn';
import PathXClient from './pathx';
import UAccountClient from './uaccount';
import UBillClient from './ubill';
import UCDNClient from './ucdn';
import UDBClient from './udb';
import UDDBClient from './uddb';
import UDiskClient from './udisk';
import UDPNClient from './udpn';
import UECClient from './uec';
import UFileClient from './ufile';
import UFSClient from './ufs';
import UHostClient from './uhost';
import UK8SClient from './uk8s';
import ULBClient from './ulb';
import UMemClient from './umem';
import UNetClient from './unet';
import UPhoneClient from './uphone';
import UPHostClient from './uphost';
import USMSClient from './usms';
import UVMSClient from './uvms';
import VPCClient from './vpc';

export class Client extends BaseClient {
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

  uaccount(): UAccountClient {
    return new UAccountClient({
      config: this.config,
      credential: this.credential,
    });
  }

  ubill(): UBillClient {
    return new UBillClient({
      config: this.config,
      credential: this.credential,
    });
  }

  ucdn(): UCDNClient {
    return new UCDNClient({ config: this.config, credential: this.credential });
  }

  udb(): UDBClient {
    return new UDBClient({ config: this.config, credential: this.credential });
  }

  uddb(): UDDBClient {
    return new UDDBClient({ config: this.config, credential: this.credential });
  }

  udisk(): UDiskClient {
    return new UDiskClient({
      config: this.config,
      credential: this.credential,
    });
  }

  udpn(): UDPNClient {
    return new UDPNClient({ config: this.config, credential: this.credential });
  }

  uec(): UECClient {
    return new UECClient({ config: this.config, credential: this.credential });
  }

  ufile(): UFileClient {
    return new UFileClient({
      config: this.config,
      credential: this.credential,
    });
  }

  ufs(): UFSClient {
    return new UFSClient({ config: this.config, credential: this.credential });
  }

  uhost(): UHostClient {
    return new UHostClient({
      config: this.config,
      credential: this.credential,
    });
  }

  uk8s(): UK8SClient {
    return new UK8SClient({ config: this.config, credential: this.credential });
  }

  ulb(): ULBClient {
    return new ULBClient({ config: this.config, credential: this.credential });
  }

  umem(): UMemClient {
    return new UMemClient({ config: this.config, credential: this.credential });
  }

  unet(): UNetClient {
    return new UNetClient({ config: this.config, credential: this.credential });
  }

  uphone(): UPhoneClient {
    return new UPhoneClient({
      config: this.config,
      credential: this.credential,
    });
  }

  uphost(): UPHostClient {
    return new UPHostClient({
      config: this.config,
      credential: this.credential,
    });
  }

  usms(): USMSClient {
    return new USMSClient({ config: this.config, credential: this.credential });
  }

  uvms(): UVMSClient {
    return new UVMSClient({ config: this.config, credential: this.credential });
  }

  vpc() {
    return new VPCClient({ config: this.config, credential: this.credential });
  }
}

module.exports = {
  Client: Client,
};
