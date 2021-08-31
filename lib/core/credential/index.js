"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { createHash } = require('crypto');
class Credential {
    constructor({ publicKey, privateKey }) {
        this.publicKey = publicKey;
        this.privateKey = privateKey;
    }
    verifyAc(args) {
        const obj = Object.assign({}, args);
        obj['PublicKey'] = this.publicKey;
        // key sorting
        const keys = Object.keys(obj);
        keys.sort();
        // concat string
        let s = '';
        keys.forEach((key) => {
            const value = obj[key];
            if (value == null) {
                return;
            }
            s += key;
            s += value.toString();
        });
        s += this.privateKey;
        // hash by sha1
        let hash = createHash('sha1');
        hash.update(s);
        return hash.digest('hex');
    }
    sign(args) {
        const obj = Object.assign({}, args);
        obj['Signature'] = this.verifyAc(obj);
        obj['PublicKey'] = this.publicKey;
        return obj;
    }
}
exports.default = Credential;
