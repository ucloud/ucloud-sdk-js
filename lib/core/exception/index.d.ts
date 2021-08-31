export declare const EXC_TYPE_RET_CODE = "RetCode";
export declare const EXC_TYPE_TRANSPORT = "Transport";
export declare const EXC_TYPE_UNKNOWN = "Unknown";
export declare class UCloudError extends Error {
    typ: string;
    retCode?: number;
    requestId?: string;
    constructor({ typ, message, retCode, requestId, }: {
        typ: string;
        message: string;
        retCode?: number;
        requestId?: string;
    });
}
