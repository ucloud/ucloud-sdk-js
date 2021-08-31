import Request from '../request';
import Response from '../response';
export declare class Transport {
    baseUrl?: string;
    userAgent?: string;
    options?: object;
    constructor({ baseUrl, userAgent, options, }: {
        baseUrl?: string;
        userAgent?: string;
        options?: object;
    });
    invoke(req: Request): Promise<Response>;
}
