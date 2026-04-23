import Client from '../../core/client';
import { ConfigOptions } from '../../core/config';
import { CredentialOptions } from '../../core/credential';
/**
 * This client is used to call actions of **ues** service
 */
export default class UESClient extends Client {
    constructor({ config, credential, }: {
        config: ConfigOptions;
        credential: CredentialOptions;
    });
    /**
     * CreateUESInstance - 创建实例
     *
     * See also: https://docs.ucloud.cn/api/ues-api/create_ues_instance
     */
    createUESInstance(request?: CreateUESInstanceRequest): Promise<CreateUESInstanceResponse>;
    /**
     * DeleteUESInstance - 删除实例
     *
     * See also: https://docs.ucloud.cn/api/ues-api/delete_ues_instance
     */
    deleteUESInstance(request?: DeleteUESInstanceRequest): Promise<DeleteUESInstanceResponse>;
    /**
     * DescribeUESInstanceV2 - 查询指定实例详细信息
     *
     * See also: https://docs.ucloud.cn/api/ues-api/describe_ues_instance_v2
     */
    describeUESInstanceV2(request?: DescribeUESInstanceV2Request): Promise<DescribeUESInstanceV2Response>;
    /**
     * ExpandUESInstance - 扩容实例节点
     *
     * See also: https://docs.ucloud.cn/api/ues-api/expand_ues_instance
     */
    expandUESInstance(request?: ExpandUESInstanceRequest): Promise<ExpandUESInstanceResponse>;
    /**
     * GetUESAppVersion - 获取服务应用版本列表
     *
     * See also: https://docs.ucloud.cn/api/ues-api/get_ues_app_version
     */
    getUESAppVersion(request?: GetUESAppVersionRequest): Promise<GetUESAppVersionResponse>;
    /**
     * GetUESDiskSizeLimitation - 获取磁盘容量限制
     *
     * See also: https://docs.ucloud.cn/api/ues-api/get_ues_disk_size_limitation
     */
    getUESDiskSizeLimitation(request?: GetUESDiskSizeLimitationRequest): Promise<GetUESDiskSizeLimitationResponse>;
    /**
     * GetUESNodeConf - 获取节点配置列表
     *
     * See also: https://docs.ucloud.cn/api/ues-api/get_ues_node_conf
     */
    getUESNodeConf(request?: GetUESNodeConfRequest): Promise<GetUESNodeConfResponse>;
    /**
     * ListUESInstance - 获取实例列表
     *
     * See also: https://docs.ucloud.cn/api/ues-api/list_ues_instance
     */
    listUESInstance(request?: ListUESInstanceRequest): Promise<ListUESInstanceResponse>;
    /**
     * ResizeUESInstance - 改配实例节点配置
     *
     * See also: https://docs.ucloud.cn/api/ues-api/resize_ues_instance
     */
    resizeUESInstance(request?: ResizeUESInstanceRequest): Promise<ResizeUESInstanceResponse>;
    /**
     * RestartUESInstance - 重启实例
     *
     * See also: https://docs.ucloud.cn/api/ues-api/restart_ues_instance
     */
    restartUESInstance(request?: RestartUESInstanceRequest): Promise<RestartUESInstanceResponse>;
}
/**
 * CreateUESInstance - 创建实例
 */
export interface CreateUESInstanceRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * 实例名称
     */
    InstanceName: string;
    /**
     * 节点配置标识, 支持的机型可通过GetUESNodeConf NodeConfList[].NodeConf
     */
    NodeConf: string;
    /**
     * VPCID标识
     */
    VPCId: string;
    /**
     * 子网ID标识
     */
    SubnetId: string;
    /**
     * Kibana节点配置, 支持的机型可通过GetUESNodeConf NodeConfList[].NodeConf
     */
    KibanaNodeConf: string;
    /**
     * Kibana节点磁盘类型
     */
    KibanaNodeDiskConf: string;
    /**
     * 应用服务版本号，支持的类型通过GetUESAppVersion AppVersionList[].AppVersion
     */
    AppVersion: string;
    /**
     * 磁盘类型
     */
    NodeDiskConf: string;
    /**
     * 节点个数，默认数目为3
     */
    NodeSize?: number;
    /**
     * 节点磁盘大小，默认为100G
     */
    NodeDiskSize?: number;
    /**
     * elasticsearch 服务用户名称，默认为elastic；OpenSearch 服务用户名称，固定为admin
     */
    ServiceUserName?: string;
    /**
     * 服务用户密码，默认为changeme
     */
    ServicePasswd?: string;
    /**
     * 应用名称，支持的类型通过GetUESAppVersion AppVersionList[].AppName, 默认为elasticsearch
     */
    AppName?: string;
    /**
     * 备注，默认为空
     */
    Remark?: string;
    /**
     * 计费类型，默认为Month
     */
    ChargeType?: string;
    /**
     * 计费长度，默认为1
     */
    Quantity?: number;
    /**
     * 主节点类型标示，支持的机型可通过GetUESNodeConf NodeConfList[].NodeConf, 默认为空
     */
    MasterConf?: string;
    /**
     * 业务组ID标识
     */
    BusinessId?: string;
    /**
     * Coordinating节点机型配置，, 支持的机型可通过GetUESNodeConf NodeConfList[].NodeConf,  默认为空
     */
    CoordinatingNodeConf?: string;
    /**
     * Coordinating节点数量
     */
    CoordinatingNodeSize?: number;
    /**
     * Coordinating节点磁盘类型
     */
    CoordinatingNodeDiskConf?: string;
    /**
     * 是否开启安全组，默认为false
     */
    IsSecGroup?: boolean;
    /**
     * 安全组ID，开启安全组必填，至多可以同时绑定5个安全组
     */
    SecGroupIds?: string[];
    /**
     * 是否为多可用区，默认为false
     */
    IsMultiZone?: boolean;
    /**
     * 多可用区名称，默认空数组 []
     */
    MultiZones?: string[];
}
/**
 * CreateUESInstance - 创建实例
 */
export interface CreateUESInstanceResponse {
    /**
     * 实例ID
     */
    InstanceId?: string;
}
/**
 * DeleteUESInstance - 删除实例
 */
export interface DeleteUESInstanceRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * 实例ID
     */
    InstanceId: string;
}
/**
 * DeleteUESInstance - 删除实例
 */
export interface DeleteUESInstanceResponse {
}
/**
 * DescribeUESInstanceV2 - 查询指定实例详细信息
 */
export interface DescribeUESInstanceV2Request {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * 集群实例ID
     */
    InstanceId: string;
}
/**
 * DescribeUESInstanceV2 - 查询指定实例详细信息
 */
export interface DescribeUESInstanceV2Response {
    /**
     * 返回结果
     */
    Result?: {
        /**
         *
         */
        RequestId?: string;
        /**
         *
         */
        ClusterInfo?: {
            /**
             * 地域
             */
            Region?: string;
            /**
             * 可用区
             */
            Zone?: string;
            /**
             * 服务集群ID标识
             */
            UESInstanceId: string;
            /**
             * 服务集群名称
             */
            UESInstanceName: string;
            /**
             * 服务版本号
             */
            ServiceVersion: string;
            /**
             * VPCID标识
             */
            VPCId: string;
            /**
             * 服务集群状态
             */
            State: string;
            /**
             * 项目组ID标识
             */
            BusinessId?: string;
            /**
             * 子网ID标识
             */
            SubnetId?: string;
            /**
             * Vip
             */
            Vip?: string;
        };
        /**
         *
         */
        NodeInfoList?: {
            /**
             * 节点ID
             */
            NodeId: string;
            /**
             * 节点名称
             */
            NodeName: string;
            /**
             * 节点类型
             */
            NodeRole: string;
            /**
             * 节点IP
             */
            NodeIP: string;
            /**
             * 节点配置标识
             */
            NodeConf: string;
            /**
             * 节点状态
             */
            NodeState: string;
            /**
             * 节点磁盘类型
             */
            DiskType: string;
            /**
             * 节点磁盘大小
             */
            DiskSize: number;
            /**
             * 节点内存大小
             */
            Memory: number;
            /**
             * 节点cpu数量
             */
            CPU: number;
        }[];
    };
}
/**
 * ExpandUESInstance - 扩容实例节点
 */
export interface ExpandUESInstanceRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * 实例ID
     */
    InstanceId: string;
    /**
     * 扩容后对应类型节点的数目
     */
    NodeCount: number;
    /**
     * 节点类型（compute、coordinating）
     */
    NodeRole: string;
}
/**
 * ExpandUESInstance - 扩容实例节点
 */
export interface ExpandUESInstanceResponse {
}
/**
 * GetUESAppVersion - 获取服务应用版本列表
 */
export interface GetUESAppVersionRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
}
/**
 * GetUESAppVersion - 获取服务应用版本列表
 */
export interface GetUESAppVersionResponse {
    /**
     * 服务应用版本个数
     */
    TotalCount: number;
    /**
     * 服务应用版本列表
     */
    AppVersionList: {
        /**
         * 应用名称，默认值为elasticsearch
         */
        AppName: string;
        /**
         * 应用版本号
         */
        AppVersion: string;
        /**
         * 是否支持多区部署，默认为false
         */
        IsMultiZone: boolean;
    }[];
}
/**
 * GetUESDiskSizeLimitation - 获取磁盘容量限制
 */
export interface GetUESDiskSizeLimitationRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
}
/**
 * GetUESDiskSizeLimitation - 获取磁盘容量限制
 */
export interface GetUESDiskSizeLimitationResponse {
    /**
     * 各磁盘类型容量限制列表
     */
    DiskSizeLimitationSet?: {
        /**
         * 数据盘类别，包含普通云盘|CLOUD_NORMAL、SSD云盘|CLOUD_SSD和RSSD云盘|CLOUD_RSSD。普通本地盘只包含普通本地盘|LOCAL_NORMAL一种。SSD本地盘只包含SSD本地盘|LOCAL_SSD一种。
         */
        DiskType?: string;
        /**
         * 最大值，单位GB
         */
        MaxSize?: number;
        /**
         * 最小值，单位GB
         */
        MinSize?: number;
    }[];
}
/**
 * GetUESNodeConf - 获取节点配置列表
 */
export interface GetUESNodeConfRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
}
/**
 * GetUESNodeConf - 获取节点配置列表
 */
export interface GetUESNodeConfResponse {
    /**
     * 所有节点配置信息的个数
     */
    TotalCount: number;
    /**
     * 服务节点配置信息列表
     */
    NodeConfList: {
        /**
         * 内存，单位为GB
         */
        Memory: number;
        /**
         * CPU数量
         */
        CPU: number;
        /**
         * 节点配置标识
         */
        NodeConf: string;
        /**
         * 磁盘类型[RSSD|SSD]
         */
        DiskType: string;
        /**
         * 磁盘大小，单位为GB
         */
        DiskSize: number;
        /**
         * 是否支持安全组[true|false]
         */
        IsSecGroup: boolean;
    }[];
}
/**
 * ListUESInstance - 获取实例列表
 */
export interface ListUESInstanceRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone?: string;
    /**
     * 数据偏移量, 默认为0
     */
    Offset?: number;
    /**
     * 返回数据长度, 默认为30
     */
    Limit?: number;
}
/**
 * ListUESInstance - 获取实例列表
 */
export interface ListUESInstanceResponse {
    /**
     * 实例信息列表
     */
    ClusterSet: {
        /**
         * 可用区
         */
        Zone: string;
        /**
         * 项目组ID标识
         */
        BusinessId: string;
        /**
         * 计费类型，默认为Month
         */
        ChargeType: string;
        /**
         * 创建时间
         */
        CreateTime: number;
        /**
         * 失效时间
         */
        ExpireTime: number;
        /**
         * 节点个数，默认为集群大小
         */
        NodeCount: number;
        /**
         * 实例运行时长
         */
        RunTime: number;
        /**
         * 应用服务版本号
         */
        AppVersion: string;
        /**
         * 实例状态
         */
        State: string;
        /**
         * 实例资源ID
         */
        InstanceId: string;
        /**
         * 实例名称
         */
        InstanceName: string;
        /**
         * 应用名称
         */
        AppName: string;
        /**
         * 服务集群ID标识（弃用）
         */
        UESInstanceId?: string;
        /**
         * 服务集群名称（弃用）
         */
        UESInstanceName?: string;
        /**
         * 服务版本号（弃用）
         */
        ServiceVersion?: string;
        /**
         * 子网ID标识
         */
        SubnetId?: string;
        /**
         * 业务组
         */
        Tag?: string;
        /**
         * VPCID标识
         */
        VPCId?: string;
        /**
         * VIP地址信息
         */
        Vip?: string;
        /**
         * 是否开启安全组
         */
        IsSecGroup?: boolean;
        /**
         * 多可用区
         */
        MultiZones?: string[];
        /**
         * 是否支持改配
         */
        Resizable?: boolean;
    }[];
    /**
     * 实例个数
     */
    TotalCount: number;
}
/**
 * ResizeUESInstance - 改配实例节点配置
 */
export interface ResizeUESInstanceRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * 实例ID
     */
    InstanceId: string;
    /**
     * 节点类型（compute、master、coordinating、kibana、dashboard）
     */
    NodeRole: string;
    /**
     * 改配节点类型，NodeDiskSize为0，基于NodeRole 进行改配
     */
    NodeConf?: string;
    /**
     * 改配节点磁盘大小，NodeConf 为空字符串，基于NodeRole 进行改配
     */
    NodeDiskSize?: number;
    /**
     * 进行改配操作是否强制检查集群健康状态，默认为false
     */
    ForceResizing?: boolean;
}
/**
 * ResizeUESInstance - 改配实例节点配置
 */
export interface ResizeUESInstanceResponse {
}
/**
 * RestartUESInstance - 重启实例
 */
export interface RestartUESInstanceRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * 实例ID
     */
    InstanceId: string;
}
/**
 * RestartUESInstance - 重启实例
 */
export interface RestartUESInstanceResponse {
}
