import { ConfigOptions } from '../core/config';
import { CredentialOptions } from '../core/credential';
declare const BaseClient: any;
export declare class Client extends BaseClient {
    constructor({ config, credential, }: {
        config: ConfigOptions;
        credential: CredentialOptions;
    });
    cube(): any;
    ipsecvpn(): any;
    pathx(): any;
    uaccount(): any;
    ubill(): any;
    ucdn(): any;
    udb(): any;
    uddb(): any;
    udisk(): any;
    udpn(): any;
    uec(): any;
    ufile(): any;
    ufs(): any;
    uhost(): any;
    uk8s(): any;
    ulb(): any;
    umem(): any;
    unet(): any;
    uphost(): any;
    usms(): any;
    uvms(): any;
    vpc(): any;
}
export {};
