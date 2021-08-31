export const EXC_TYPE_RET_CODE = 'RetCode';

export const EXC_TYPE_TRANSPORT = 'Transport';

export const EXC_TYPE_UNKNOWN = 'Unknown';

export class UCloudError extends Error {
  typ: string;

  retCode?: number;

  requestId?: string;

  constructor({
    typ,
    message,
    retCode,
    requestId,
  }: {
    typ: string;
    message: string;
    retCode?: number;
    requestId?: string;
  }) {
    super(message);
    this.typ = typ;
    this.retCode = retCode;
    this.requestId = requestId;
  }
}
