import { Logger } from '../logger';
export declare type ConfigOptions = {
    region?: string;
    projectId?: string;
    baseUrl?: string;
    userAgent?: string;
    timeout?: number;
    maxRetries?: number;
    logger?: Logger | null;
};
export default class Config {
    /**
     * Region is the region of backend service.
     * See also <https://docs.ucloud.cn/api/summary/regionlist> ...
     */
    region?: string;
    /**
     * ProjectId is the unique identify of project, used for organize resources,
     * Most of resources should belong to a project.
     * Sub-Account must have an project id.
     * See also <https://docs.ucloud.cn/api/summary/get_project_list> ...
     */
    projectId?: string;
    /**
     * BaseUrl is the url of backend api.
     * See also <doc link> ...
     */
    baseUrl?: string;
    /**
     * UserAgent is an attribute for sdk client, used for distinguish who is using sdk.
     * See also https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent
     * It will be appended to the end of sdk user-agent.
     * eg. "Terraform/0.10.1" -> "GO/1.9.1 GO-SDK/0.1.0 Terraform/0.10.1"
     * NOTE: it will conflict with the User-Agent of HTTPHeaders
     */
    userAgent?: string;
    /**
     * Timeout is timeout for every request.
     */
    timeout?: number;
    /**
     * MaxRetries is the number of max retry times.
     * Set MaxRetries more than 0 to enable auto-retry for network and service availability problem
     * if auto-retry is enabled, it will enable default retry policy using exponential backoff.
     */
    maxRetries?: number;
    /**
     * Logger
     */
    logger?: Logger | null;
    constructor({ region, projectId, baseUrl, userAgent, timeout, maxRetries, logger, }: ConfigOptions);
}
