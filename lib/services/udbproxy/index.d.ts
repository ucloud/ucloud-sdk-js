import Client from '../../core/client';
import { ConfigOptions } from '../../core/config';
import { CredentialOptions } from '../../core/credential';
/**
 * This client is used to call actions of **udbproxy** service
 */
export default class UDBProxyClient extends Client {
    constructor({ config, credential, }: {
        config: ConfigOptions;
        credential: CredentialOptions;
    });
    /**
     * DescribeUDBProxy - 获取UDB代理服务详细信息
     *
     * See also: https://docs.ucloud.cn/api/udbproxy-api/describe_udb_proxy
     */
    describeUDBProxy(request?: DescribeUDBProxyRequest): Promise<DescribeUDBProxyResponse>;
    /**
     * ListUDBProxyClient - 查询代理客户端连接IP信息(实时）
     *
     * See also: https://docs.ucloud.cn/api/udbproxy-api/list_udb_proxy_client
     */
    listUDBProxyClient(request?: ListUDBProxyClientRequest): Promise<ListUDBProxyClientResponse>;
    /**
     * ListUDBProxyInstanceByDB - 查询DB启用代理数据
     *
     * See also: https://docs.ucloud.cn/api/udbproxy-api/list_udb_proxy_instance_by_db
     */
    listUDBProxyInstanceByDB(request?: ListUDBProxyInstanceByDBRequest): Promise<ListUDBProxyInstanceByDBResponse>;
}
/**
 * DescribeUDBProxy - 获取UDB代理服务详细信息
 */
export interface DescribeUDBProxyRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * 读写分离ID
     */
    UDBProxyID: string;
}
/**
 * DescribeUDBProxy - 获取UDB代理服务详细信息
 */
export interface DescribeUDBProxyResponse {
    /**
     * UDBProxy实例ID
     */
    UDBProxyID: string;
    /**
     * UDB代理服务IP
     */
    UDBProxyIP: string;
    /**
     * UDB代理服务端口
     */
    UDBProxyPort: number;
    /**
     * 状态
     */
    State: string;
    /**
     * 创建时间
     */
    CreateTime: number;
    /**
     * 修改时间
     */
    ModifyTime: number;
    /**
     * 读权重模式:1-主节点模式;2-节点均衡模式;3-从节点均衡(排除主节点);5-用户自定义模式
     */
    ReadWeightMode: number;
    /**
     * cpu核数
     */
    CPUCores: number;
    /**
     * 内存
     */
    Memory: number;
    /**
     * 集群实例节点数
     */
    NodeCount: number;
    /**
     * 可用区id
     */
    ZoneId: number;
    /**
     * 名称
     */
    Name: string;
    /**
     * UDB代理服务最大连接数
     */
    MaxConnection: number;
    /**
     * 延迟阈值(单位s)
     */
    DelayThreshold: number;
    /**
     * UDB集群数据
     */
    UDBReplicas: {
        /**
         * 数据库ID
         */
        ID: string;
        /**
         * 数据库IP
         */
        IP: string;
        /**
         * 数据库服务端口
         */
        Port: number;
        /**
         * 读权重
         */
        ReadWeight: number;
        /**
         * 状态
         */
        State: string;
        /**
         * 角色[master-主库，slave-从库]
         */
        Role: string;
        /**
         * 创建时间
         */
        CreateTime: number;
        /**
         * 修改时间
         */
        ModifyTime: number;
        /**
         * 是否加入代理服务(true:加入，false:未加入)
         */
        JoinState: boolean;
        /**
         * 数据库名称
         */
        Name: string;
    }[];
    /**
     * 集群实例服务节点数据
     */
    Nodes: {
        /**
         * 服务节点id
         */
        ID: string;
        /**
         * 服务节点状态
         */
        State: string;
    }[];
    /**
     * sql限流数量
     */
    SQLLimitCount?: number;
    /**
     * sql路由数量
     */
    SQLRouterCount?: number;
    /**
     * 实例版本
     */
    InstanceVersion?: string;
    /**
     * 是否启用事务拆分(1：启用事务拆分，2:关闭事务拆分)
     */
    EnableTransSplit?: number;
    /**
     * 代理实例的内网域名及其开关状态，含域名地址、域名开关、域名数据源指向
     */
    PrivateDomainInfo?: {
        /**
         * 实例的内网域名地址，形如 xxx.ucloudcs.com；未开通内网域名时为空字符串
         */
        PrivateDomain?: string;
        /**
         * 内网域名是否已开启：1 已开启，2 已关闭；未开通内网域名时返回 2
         */
        EnablePrivateDomain?: number;
        /**
         * 内网域名指向的数据源：1 指向主库（可直连数据库），2 指向代理（经 UDBProxy访问）；未开通时返回 2
         */
        EnableConnectToDB?: number;
    };
}
/**
 * ListUDBProxyClient - 查询代理客户端连接IP信息(实时）
 */
export interface ListUDBProxyClientRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * 代理ID
     */
    UDBProxyID: string;
}
/**
 * ListUDBProxyClient - 查询代理客户端连接IP信息(实时）
 */
export interface ListUDBProxyClientResponse {
    /**
     * 代理ID
     */
    UDBProxyID: string;
    /**
     * 代理节点客户端IP连接信息
     */
    NodeClientInfos: {
        /**
         * 客户端IP连接信息
         */
        Records?: {
            /**
             * 当前连接DB进程ID
             */
            ID?: number;
            /**
             * 启动这个线程的用户
             */
            User?: string;
            /**
             * 代理连接DB地址
             */
            Host?: string;
            /**
             * 当前执行的命令是在哪一个数据库上。如果没有指定数据库，则该值为 NULL
             */
            DB?: string;
            /**
             * 显示当前连接的执行的命令
             */
            Command?: string;
            /**
             * 表示该线程处于当前状态的时间
             */
            Time?: number;
            /**
             * 线程的状态，和 Command 对应
             */
            State?: string;
            /**
             * 一般记录的是线程执行的语句
             */
            Info?: string;
            /**
             * 客户端来源IP地址
             */
            ClientHost?: string;
            /**
             * 数据库资源ID
             */
            DBID?: string;
            /**
             * 数据库角色(主库/从库)
             */
            Role?: string;
        }[];
        /**
         * 代理节点ID
         */
        ID?: string;
        /**
         * 代理节点IP
         */
        IP?: string;
    }[];
}
/**
 * ListUDBProxyInstanceByDB - 查询DB启用代理数据
 */
export interface ListUDBProxyInstanceByDBRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * 数据库DB资源ID
     */
    DBID: string;
}
/**
 * ListUDBProxyInstanceByDB - 查询DB启用代理数据
 */
export interface ListUDBProxyInstanceByDBResponse {
    /**
     * 代理列表数据
     */
    UDBProxyBaseItems: {
        /**
         * 读权重模式:1-主节点模式;2-节点均衡模式;3-从节点均衡(排除主节点);5-用户自定义模式
         */
        ReadWeightMode: number;
        /**
         * 创建时间
         */
        CreateTime: number;
        /**
         * 代理ID
         */
        ID?: string;
        /**
         * 代理IP
         */
        IP?: string;
        /**
         * 代理端口
         */
        Port?: number;
        /**
         * 状态
         */
        State?: string;
        /**
         * 可用区ID
         */
        ZoneID?: number;
        /**
         * 代理节点数
         */
        NodeCount?: number;
        /**
         * 单个代理节点CPU核数
         */
        CPUCores?: number;
        /**
         * 单个代理内存
         */
        Memory?: number;
        /**
         * 代理名称
         */
        Name?: string;
        /**
         * 实例版本
         */
        InstanceVersion?: string;
        /**
         * 加入代理DB信息
         */
        BaseDBDataArr?: {
            /**
             * 数据库ID
             */
            ID?: string;
            /**
             * 数据库名称
             */
            Name?: string;
            /**
             * 权重
             */
            ReadWeight?: number;
        }[];
    }[];
}
