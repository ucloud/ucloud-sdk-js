# 泛化调用

如何调用 SDK 尚未支持的 API ？可以使用泛化调用方式。

**NOTE** 如果没有必须使用的理由，不建议使用泛化方式调用 API，因为无法享受 OpenAPI 提供的兼容性保证。

## 调用方式

```javascript
const {Client} = require("../../lib/services");
const Request = require("../../lib/core/request").default;

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
    let resp = null;

    try {
        resp = await client.invoke(new Request({
            Action: "DescribeImage",
        }));
    } catch (e) {
        throw e;
    }
    const image = resp.toObject()["ImageSet"][0];
}

main().catch(e => { console.error(e) })
```
