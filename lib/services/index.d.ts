import { ConfigOptions } from '../core/config';
import { CredentialOptions } from '../core/credential';
declare const BaseClient: any;
export declare class Client extends BaseClient {
    constructor({ config, credential, }: {
        config: ConfigOptions;
        credential: CredentialOptions;
    });
    uai_modelverse(): any;
}
export {};
