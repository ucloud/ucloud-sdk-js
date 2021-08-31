import { DefaultLogger, LogLevel } from './index';

describe('request', () => {
  test('test encode request', () => {
    let logger = new DefaultLogger(100 as LogLevel);
    logger.debug('debug');
    logger.info('info');
    logger.error('error');

    logger = new DefaultLogger(-1 as LogLevel);
    logger.debug('debug');
    logger.info('info');
    logger.error('error');

    logger.log(-1, 'asd');
  });
});
