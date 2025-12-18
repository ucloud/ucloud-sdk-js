import { ConfigOptions } from '../core/config';
import { CredentialOptions } from '../core/credential';
const BaseClient = require('../core/client').default;

const ULightHostClient = require('./ulight_host').default;

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

  ulight_host() {
    return new ULightHostClient({
      config: this.config,
      credential: this.credential,
    });
  }
}

module.exports = {
  Client: Client,
};
