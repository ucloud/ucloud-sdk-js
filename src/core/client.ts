import Config, { ConfigOptions } from './config';
import Credential, { CredentialOptions } from './credential';
import Request from './request';
import Response from './response';
import { Context, MiddlewareOptions } from './middleware';
import { Transport } from './transport';
import { VERSION } from '../version';
import { EXC_TYPE_TRANSPORT, UCloudError } from './exception';
import {
  credentialMiddleware,
  defaultsMiddleware,
  logMiddleware,
} from './middlewares';

export default class Client {
  config: Config;

  credential: Credential;

  middlewares: MiddlewareOptions[];

  transport: Transport;

  constructor({
    config,
    credential,
  }: {
    config: ConfigOptions;
    credential: CredentialOptions;
  }) {
    this.config = new Config(config);
    this.credential = new Credential(credential);
    this.middlewares = [
      defaultsMiddleware,
      credentialMiddleware,
      logMiddleware,
    ];

    let ua = `JS-SDK/${VERSION}`;
    if (!!config.userAgent) {
      ua += config.userAgent;
    }
    this.transport = new Transport({
      baseUrl: this.config.baseUrl,
      userAgent: ua,
    });
  }

  useMiddleware(options: MiddlewareOptions) {
    this.middlewares.push(options);
  }

  withTransport(transport: Transport) {
    this.transport = transport;
  }

  async invoke(req: Request): Promise<Response> {
    const ctx = new Context({
      config: this.config,
      credential: this.credential,
      request: req,
    });

    // resolve request
    this.middlewares.forEach((middleware) => {
      if (!middleware.request) {
        return;
      }
      ctx.request = middleware.request(ctx);
    });

    // do invoking
    let resp;
    const maxRetries = this.config.maxRetries || 3;
    for (let k = 0; k <= maxRetries; k++) {
      try {
        resp = await this.transport.invoke(ctx.request);
        break; // success, stop retrying
      } catch (e) {
        ctx.exception = e;
        this.middlewares.forEach((middleware) => {
          if (!middleware.error) {
            return;
          }
          middleware.error(ctx);
        });
        if (k == maxRetries) {
          throw e;
        }
      }
    }

    // resolve response
    ctx.response = resp;
    this.middlewares.forEach((middleware) => {
      if (!middleware.response) {
        return;
      }
      ctx.response = middleware.response(ctx);
    });

    if (!resp) {
      throw new UCloudError({
        typ: EXC_TYPE_TRANSPORT,
        retCode: -1,
        message: 'invalid response',
        requestId: '',
      });
    }
    return resp;
  }
}
