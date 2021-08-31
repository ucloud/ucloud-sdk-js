declare type argsT = {
    [index: string]: any;
};
export declare type CredentialOptions = {
    publicKey: string;
    privateKey: string;
};
export default class Credential {
    publicKey: string;
    privateKey: string;
    constructor({ publicKey, privateKey }: CredentialOptions);
    verifyAc(args: argsT): any;
    sign(args: argsT): argsT;
}
export {};
