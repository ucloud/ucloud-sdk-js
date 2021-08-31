export default class Response {
    data: {
        [index: string]: any;
    };
    requestId?: string;
    constructor(data: object, requestId?: string);
    toObject(): object;
    getMessage(): string;
    getRetCode(): number;
    getRequestId(): string;
}
