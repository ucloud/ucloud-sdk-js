"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const BaseClient = require('../core/client').default;
const UAIModelverseClient = require('./uai_modelverse').default;
class Client extends BaseClient {
    constructor({ config, credential, }) {
        super({ config, credential });
    }
    uai_modelverse() {
        return new UAIModelverseClient({
            config: this.config,
            credential: this.credential,
        });
    }
}
exports.Client = Client;
module.exports = {
    Client: Client,
};
