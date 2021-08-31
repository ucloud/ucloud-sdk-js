# 请求中间件

了解如何拦截 SDK 发起的请求，并统一添加额外的逻辑。

UCloud SDK 为请求提供了请求中间件的特性。

该特性允许在 请求/响应 的生命周期中添加自定义的逻辑。

例如，Client 级别的中间件，可以拦截参数/响应字典:

```php
client.useMiddleware({
  request: function (ctx: Context) {
    ctx.config.logger.info(ctx.request.toObject());
    return ctx.request;
  },
  response: function (ctx: Context) {
    ctx.config.logger.info(ctx.response.toObject());
    return ctx.response;
  },
  error: function (ctx: Context) {
    ctx.config.logger.error(ctx.exception?.message);
  },
})
```
