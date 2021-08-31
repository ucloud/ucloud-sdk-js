import Request from './index';

describe('request', () => {
  test('test encode request', () => {
    const req = new Request({
      Name: 'foo',
      CPU: 1,
      Size: 42.0,
      Foo: null,
      UHostIds: ['uhost-xxx', 'uhost-yyy'],
      Led: { Enabled: true },
      NetworkInterface: [{ Bandwidth: 42 }],
    });
    expect(req.toObject()).toEqual({
      Name: 'foo',
      CPU: 1,
      Size: 42.0,
      'UHostIds.0': 'uhost-xxx',
      'UHostIds.1': 'uhost-yyy',
      'Led.Enabled': true,
      'NetworkInterface.0.Bandwidth': 42,
    });
  });
});
