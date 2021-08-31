import Request from "./core/request";
import Client from "./core/client";
import {Transport} from "./core/transport";
import {AxiosRequestConfig} from "axios";
import Response from "./core/response";
import {Context} from "./core/middleware";

describe('invoke', () => {
    const tests = [{
        request: {
            Action: "GetRegion",
        },
        response: {
            RetCOde: 0,
            DataSet: []
        },
        hasError: false
    }, {
        request: {
            Action: "GetRegion",
        },
        response: {
            RetCOde: 0,
            DataSet: []
        },
        config: {
            logger: null
        },
        hasError: false
    }, {
        request: {
            Action: "NotFound",
        },
        response: {
            RetCode: 161,
            Message: "Action [NotFound] not found"
        },
        hasError: true
    }, {
        request: {
            Action: "NotFound",
        },
        response: {
            RetCode: 161,
            Message: "Action [NotFound] not found"
        },
        config: {
            logger: null
        },
        hasError: true
    }, {
        request: {
            Action: "Invalid",
        },
        response: {
            RetCode: 0,
            DataSet: []
        },
        config: {
            maxRetries: -1,
        },
        hasError: true
    }, {
        request: {
            Action: "Get",
        },
        transportError: "some transport error",
        hasError: true
    }];

    tests.forEach((tt, index) => {
        test(`test client invoking - ${index}`, async () => {
            const client = new Client({
                config: {
                    region: 'cn-bj2',
                    projectId: process.env.UCLOUD_PROJECT_ID || '',
                    userAgent: "UnitTest",
                    ...(tt.config || {})
                },
                credential: {
                    publicKey: process.env.UCLOUD_PUBLIC_KEY || '',
                    privateKey: process.env.UCLOUD_PRIVATE_KEY || '',
                }
            });
            client.useMiddleware({
                response: function (ctx: Context) {

                }
            });

            const transport = new Transport({
                baseUrl: "https://api.ucloud.cn",
                userAgent: "JS-SDK-UnitTest",
                options: {
                    adapter: async (config: AxiosRequestConfig) => {
                        if (tt.transportError) {
                            throw tt.transportError;
                        }
                        return {
                            data: tt.response,
                            status: 200,
                            statusText: 'OK',
                            headers: {'content-type': 'application/json'},
                            config: config,
                            request: null
                        };
                    }
                }
            });
            client.withTransport(transport);

            let req = new Request(tt.request);
            let resp: Response | null = null;
            try {
                resp = await client.invoke(req);
            } catch (e) {
                expect(true).toEqual(tt.hasError);
                return;
            }
            expect(resp.toObject()).toEqual(tt.response);
            expect(false).toEqual(tt.hasError);
        });
    })
});
