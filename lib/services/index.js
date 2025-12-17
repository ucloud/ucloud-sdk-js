"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const BaseClient = require('../core/client').default;
const ULightHostClient = require('./ulight_host').default;
class Client extends BaseClient {
    constructor({ config, credential, }) {
        super({ config, credential });
    }
    ulight_host() {
        return new ULightHostClient({
            config: this.config,
            credential: this.credential,
        });
    }
}
exports.Client = Client;
module.exports = {
    Client: Client,
};
