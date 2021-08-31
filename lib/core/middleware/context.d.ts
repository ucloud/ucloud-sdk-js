import Credential from '../credential';
import Config from '../config';
import Request from '../request';
import Response from '../response';
import { UCloudError } from '../exception';
export declare class Context {
    credential: Credential;
    config: Config;
    request: Request;
    response?: Response;
    exception?: UCloudError;
    constructor({ credential, config, request, response, exception, }: {
        credential: Credential;
        config: Config;
        request: Request;
        response?: Response;
        exception?: UCloudError;
    });
}
