export { Context } from './context';

export type MiddlewareOptions = {
  request?: Function;
  response?: Function;
  error?: Function;
};
