import Config, { ConfigOptions } from './config';
import Credential, { CredentialOptions } from './credential';
import Request from './request';
import Response from './response';
import { MiddlewareOptions } from './middleware';
import { Transport } from './transport';
export default class Client {
    config: Config;
    credential: Credential;
    middlewares: MiddlewareOptions[];
    transport: Transport;
    constructor({ config, credential, }: {
        config: ConfigOptions;
        credential: CredentialOptions;
    });
    useMiddleware(options: MiddlewareOptions): void;
    withTransport(transport: Transport): void;
    invoke(req: Request): Promise<Response>;
}
