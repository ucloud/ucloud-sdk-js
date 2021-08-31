declare type argsT = {
    [index: string]: any;
};
export default class Request {
    data: argsT;
    constructor(data: object, options?: object);
    toObject(): argsT;
    private encode;
}
export {};
