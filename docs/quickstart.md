# 快速开始

## 安装

使用 `npm` 安装（推荐）：

```bash
$ npm install @ucloud/ucloud-sdk-js
```

> 注意：内测阶段，未注册到官方仓库，只能采用源码安装，npm registry 方式暂时不可用。

```bash
git clone https://git.ucloudadmin.com/ucloud-sdk/ucloud-sdk-nodejs.git
cd ucloud-sdk-nodejs && npm install
cd examples/uhost && node index.js
```

## 初次使用

目前，SDK 使用 PublicKey/PrivateKey 作为唯一的鉴权方式，该公私钥可以从以下途径获取：

- [UAPI 密钥管理](https://console.ucloud.cn/uapi/apikey)

下面提供一个简单的示例：

```javascript
const {Client} = require("ucloud-sdk-js/lib/services");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function main() {
    // Build client
    const client = new Client({
        config: {
            region: 'cn-bj2',
            projectId: process.env.UCLOUD_PROJECT_ID || '',
        },
        credential: {
            publicKey: process.env.UCLOUD_PUBLIC_KEY || '',
            privateKey: process.env.UCLOUD_PRIVATE_KEY || '',
        }
    });
    const zone = "cn-bj2-05";

    let resp = null;

    // Describe Image
    try {
        resp = await client.uhost().describeImage();
    } catch (e) {
        throw e;
    }
    const image = resp["ImageSet"][0];

    // Create Instance
    try {
        resp = await client.uhost().createUHostInstance({
            Name: "sdk-js-example",
            Zone: zone,
            ImageId: image["ImageId"],
            LoginMode: "Password",
            Password: new Buffer("UCloud1234!").toString('base64'),
            CPU: 1,
            Memory: 1024,
            Disks: [{
                Size: image["ImageSize"],
                Type: "CLOUD_SSD",
                IsBoot: "true",
            }],
        });
    } catch (e) {
        throw e;
    }
}

main().catch(e => { console.error(e) })
```

将上述代码中 client 相关配置，以及主机的 image id 等，替换成自己的配置，即可创建一台云主机。

在该示例中，使用 SDK 完成了一个创建云主机的请求。至此，已经涵盖了 SDK 的基本核心用法，可以构建自己的脚本啦！

SDK 中的每一个 api 调用都有详细的注释文档，
可以通过 Editor/IDE 跳转到具体的方法中查看（也可以 [查看接口文档](https://docs.ucloud.cn/api/summary/README) ），
并根据 IDE 自动补全和报错信息继续探索 SDK 的用法。

如果需要了解这段代码提及但未完全覆盖的使用技巧，请参考：

- [通用配置](configure.md)，了解如何配置 SDK，如日志、重试、服务访问端点（公有云、专有云）等
- [错误处理](error.md)，了解如何处理不同类型的 SDK 异常，包括参数错误，RetCode 不为 0 的业务异常等
- [类型系统](typesystem.md)，了解 SDK 如何校验参数，并规范化 API 的返回值。
- [请求中间件](middleware.md)，了解如何拦截 SDK 发起的请求，并统一添加额外的逻辑。
- [泛化调用](generic.md)，如何调用 SDK 尚未支持的 API（不建议使用此类 API，因为没有兼容性保证）

## 获取更多示例

### 基于场景的示例

SDK 提供了部分基于场景的示例，并提供了对应的资源销毁逻辑，可以点击以下链接查看源码：

- [批量创建云主机](../examples/uhost)
- [创建基于负载均衡器的两层架构](../examples/two-tier)
