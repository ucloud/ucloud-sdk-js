# 错误处理

了解如何处理不同类型的 SDK 异常，包括参数错误，RetCode 不为 0 的业务异常等。

```javascript
try {
    resp = await client.uhost().describeImage();
} catch (e) {
    console.log(e.typ);
    console.log(e.retCode);
    console.log(e.requestId);
    throw e;
}
```
