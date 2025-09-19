import { ConfigOptions } from '../core/config';
import { CredentialOptions } from '../core/credential';
const BaseClient = require('../core/client').default;

const UAIModelverseClient = require('./uai_modelverse').default;

export class Client extends BaseClient {
  constructor({
    config,
    credential,
  }: {
    config: ConfigOptions;
    credential: CredentialOptions;
  }) {
    super({ config, credential });
  }

  uai_modelverse() {
    return new UAIModelverseClient({
      config: this.config,
      credential: this.credential,
    });
  }
}

module.exports = {
  Client: Client,
};
