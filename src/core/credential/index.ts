const { createHash } = require('crypto');

type argsT = { [index: string]: any };

export type CredentialOptions = {
  publicKey: string;
  privateKey: string;
};

export default class Credential {
  publicKey: string;

  privateKey: string;

  constructor({ publicKey, privateKey }: CredentialOptions) {
    this.publicKey = publicKey;
    this.privateKey = privateKey;
  }

  verifyAc(args: argsT) {
    const obj = { ...args };
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

  sign(args: argsT): argsT {
    const obj = { ...args };
    obj['Signature'] = this.verifyAc(obj);
    obj['PublicKey'] = this.publicKey;
    return obj;
  }
}
