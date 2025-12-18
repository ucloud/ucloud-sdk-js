import { ConfigOptions } from '../core/config';
import { CredentialOptions } from '../core/credential';
declare const BaseClient: any;
export declare class Client extends BaseClient {
    constructor({ config, credential, }: {
        config: ConfigOptions;
        credential: CredentialOptions;
    });
    ulight_host(): any;
}
export {};
