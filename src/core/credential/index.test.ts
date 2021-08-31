import Credential from './index';

describe('credential', () => {
  const cred = new Credential({
    publicKey: 'ucloudsomeone@example.com1296235120854146120',
    privateKey: '46f09bb9fab4f12dfc160dae12273d5332b5debe',
  });

  const args = {
    Action: 'DescribeUHostInstance',
    Region: 'cn-bj2',
    Limit: 10,
    Foo: null,
  };

  test('test generate signature', () => {
    expect(cred.verifyAc(args)).toEqual(
      'cba5cf5ec4d4233d206b1b54951e3787350a642f'
    );
  });

  test('test attach signature to args', () => {
    expect(cred.sign(args)).toEqual({
      PublicKey: cred.publicKey,
      Signature: 'cba5cf5ec4d4233d206b1b54951e3787350a642f',
      ...args,
    });
  });
});
