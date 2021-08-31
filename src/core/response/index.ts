export default class Response {
  data: { [index: string]: any };

  requestId?: string;

  constructor(data: object, requestId?: string) {
    this.data = data;
    this.requestId = requestId;
  }

  toObject(): object {
    return this.data;
  }

  getMessage(): string {
    return this.data['Message'] || '';
  }

  getRetCode(): number {
    return this.data['RetCode'] || 0;
  }

  getRequestId(): string {
    return this.requestId || '';
  }
}
