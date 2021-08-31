import Config from './index';

describe('config', () => {
  const cfg = new Config({});

  test('test generate signature', () => {
    Object.keys(cfg).map((k) => {
      expect(cfg.region).not.toBeNull();
      expect(cfg.projectId).not.toBeNull();
      expect(cfg.baseUrl).not.toBeNull();
      expect(cfg.userAgent).not.toBeNull();
      expect(cfg.timeout).not.toBeNull();
      expect(cfg.maxRetries).not.toBeNull();
      expect(cfg.logger).not.toBeNull();
    });
  });
});
