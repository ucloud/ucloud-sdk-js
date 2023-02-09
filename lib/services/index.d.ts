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
export declare class Client extends BaseClient {
    constructor({ config, credential, }: {
        config: ConfigOptions;
        credential: CredentialOptions;
    });
    cube(): CubeClient;
    ipsecvpn(): IPSecVPNClient;
    pathx(): PathXClient;
    uaccount(): UAccountClient;
    ubill(): UBillClient;
    ucdn(): UCDNClient;
    udb(): UDBClient;
    uddb(): UDDBClient;
    udisk(): UDiskClient;
    udpn(): UDPNClient;
    uec(): UECClient;
    ufile(): UFileClient;
    ufs(): UFSClient;
    uhost(): UHostClient;
    uk8s(): UK8SClient;
    ulb(): ULBClient;
    umem(): UMemClient;
    unet(): UNetClient;
    uphone(): UPhoneClient;
    uphost(): UPHostClient;
    usms(): USMSClient;
    uvms(): UVMSClient;
    vpc(): VPCClient;
}
