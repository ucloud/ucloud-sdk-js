import Client from '../../core/client';
import { ConfigOptions } from '../../core/config';
import { CredentialOptions } from '../../core/credential';
/**
 * This client is used to call actions of **ulb** service
 */
export default class ULBClient extends Client {
    constructor({ config, credential, }: {
        config: ConfigOptions;
        credential: CredentialOptions;
    });
    /**
     * AllocateBackend - 添加ULB后端资源实例
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/allocate_backend
     */
    allocateBackend(request?: AllocateBackendRequest): Promise<AllocateBackendResponse>;
    /**
     * BindSSL - 将SSL证书绑定到VServer
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/bind_ssl
     */
    bindSSL(request?: BindSSLRequest): Promise<BindSSLResponse>;
    /**
     * CreatePolicy - 创建VServer内容转发策略
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/create_policy
     */
    createPolicy(request?: CreatePolicyRequest): Promise<CreatePolicyResponse>;
    /**
     * CreateSSL - 创建SSL证书，可以把整个 Pem 证书内容传过来，或者把证书、私钥、CA证书分别传过来
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/create_ssl
     */
    createSSL(request?: CreateSSLRequest): Promise<CreateSSLResponse>;
    /**
     * CreateULB - 创建负载均衡实例，可以选择内网或者外网
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/create_ulb
     */
    createULB(request?: CreateULBRequest): Promise<CreateULBResponse>;
    /**
     * CreateVServer - 创建VServer实例，定义监听的协议和端口以及负载均衡算法
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/create_vserver
     */
    createVServer(request?: CreateVServerRequest): Promise<CreateVServerResponse>;
    /**
     * DeletePolicy - 删除内容转发策略
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/delete_policy
     */
    deletePolicy(request?: DeletePolicyRequest): Promise<DeletePolicyResponse>;
    /**
     * DeleteSSL - 删除SSL证书
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/delete_ssl
     */
    deleteSSL(request?: DeleteSSLRequest): Promise<DeleteSSLResponse>;
    /**
     * DeleteULB - 删除负载均衡实例
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/delete_ulb
     */
    deleteULB(request?: DeleteULBRequest): Promise<DeleteULBResponse>;
    /**
     * DeleteVServer - 删除VServer实例
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/delete_vserver
     */
    deleteVServer(request?: DeleteVServerRequest): Promise<DeleteVServerResponse>;
    /**
     * DescribeSSL - 获取SSL证书信息
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/describe_ssl
     */
    describeSSL(request?: DescribeSSLRequest): Promise<DescribeSSLResponse>;
    /**
     * DescribeULB - 获取ULB详细信息
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/describe_ulb
     */
    describeULB(request?: DescribeULBRequest): Promise<DescribeULBResponse>;
    /**
     * DescribeULBSimple - 获取ULB信息
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/describe_ulb_simple
     */
    describeULBSimple(request?: DescribeULBSimpleRequest): Promise<DescribeULBSimpleResponse>;
    /**
     * DescribeVServer - 获取ULB下的VServer的详细信息
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/describe_vserver
     */
    describeVServer(request?: DescribeVServerRequest): Promise<DescribeVServerResponse>;
    /**
     * ReleaseBackend - 从VServer释放后端资源实例
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/release_backend
     */
    releaseBackend(request?: ReleaseBackendRequest): Promise<ReleaseBackendResponse>;
    /**
     * UnbindSSL - 从VServer解绑SSL证书
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/unbind_ssl
     */
    unbindSSL(request?: UnbindSSLRequest): Promise<UnbindSSLResponse>;
    /**
     * UpdateBackendAttribute - 更新ULB后端资源实例(服务节点)属性
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/update_backend_attribute
     */
    updateBackendAttribute(request?: UpdateBackendAttributeRequest): Promise<UpdateBackendAttributeResponse>;
    /**
     * UpdatePolicy - 更新内容转发规则，包括转发规则后的服务节点
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/update_policy
     */
    updatePolicy(request?: UpdatePolicyRequest): Promise<UpdatePolicyResponse>;
    /**
     * UpdateSSLAttribute - 更新修改SSL的属性，如：修改SSLName
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/update_ssl_attribute
     */
    updateSSLAttribute(request?: UpdateSSLAttributeRequest): Promise<UpdateSSLAttributeResponse>;
    /**
     * UpdateULBAttribute - 更新ULB名字业务组备注等属性字段
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/update_ulb_attribute
     */
    updateULBAttribute(request?: UpdateULBAttributeRequest): Promise<UpdateULBAttributeResponse>;
    /**
     * UpdateVServerAttribute - 更新VServer实例属性
     *
     * See also: https://docs.ucloud.cn/api/ulb-api/update_vserver_attribute
     */
    updateVServerAttribute(request?: UpdateVServerAttributeRequest): Promise<UpdateVServerAttributeResponse>;
}
/**
 * AllocateBackend - 添加ULB后端资源实例
 */
export interface AllocateBackendRequest {
    /**
     * 负载均衡实例的ID
     */
    ULBId: string;
    /**
     * VServer实例的ID
     */
    VServerId: string;
    /**
     * 所添加的后端资源的类型，枚举值：UHost -> 云主机；UNI -> 虚拟网卡；UPM -> 物理云主机； UDHost -> 私有专区主机；UDocker -> 容器；UHybrid->混合云主机；CUBE->Cube，USDP->智能大数据平台；默认值为UHost。报文转发模式不支持UDocker、UHybrid、CUBE
     */
    ResourceType: string;
    /**
     * 所添加的后端资源的资源ID
     */
    ResourceId: string;
    /**
     * 所添加的后端服务器的资源实例IP，当ResourceType 为 UHybrid 时有效，且必填
     */
    ResourceIP?: string;
    /**
     * 所添加的后端服务器所在的vpc，当ResourceType 为 UHybrid 时有效，且必填
     */
    VPCId?: string;
    /**
     * 所添加的后端服务器所在的子网，当ResourceType 为 UHybrid 时有效，且必填
     */
    SubnetId?: string;
    /**
     * 所添加的后端资源服务端口，取值范围[1-65535]，默认80
     */
    Port?: number;
    /**
     * 所添加的后端RS权重（在加权轮询算法下有效），取值范围[1-100]，默认为1
     */
    Weight?: number;
    /**
     * 后端实例状态开关，枚举值： 1：启用； 0：禁用 默认为启用
     */
    Enabled?: number;
    /**
     * rs是否为backup，默认为00：普通rs1：backup的rs
     */
    IsBackup?: number;
}
/**
 * AllocateBackend - 添加ULB后端资源实例
 */
export interface AllocateBackendResponse {
    /**
     * 所添加的后端资源在ULB中的对象ID，（为ULB系统中使用，与资源自身ID无关），可用于 UpdateBackendAttribute/UpdateBackendAttributeBatch/ReleaseBackend
     */
    BackendId?: string;
}
/**
 * BindSSL - 将SSL证书绑定到VServer
 */
export interface BindSSLRequest {
    /**
     * 所绑定ULB实例ID
     */
    ULBId: string;
    /**
     * 所绑定VServer实例ID
     */
    VServerId: string;
    /**
     * SSL证书的Id
     */
    SSLId: string;
}
/**
 * BindSSL - 将SSL证书绑定到VServer
 */
export interface BindSSLResponse {
}
/**
 * CreatePolicy - 创建VServer内容转发策略
 */
export interface CreatePolicyRequest {
    /**
     * 需要添加内容转发策略的负载均衡实例ID
     */
    ULBId: string;
    /**
     * 需要添加内容转发策略的VServer实例ID
     */
    VServerId: string;
    /**
     * 内容转发策略应用的后端资源实例的ID，来源于 AllocateBackend 返回的 BackendId
     */
    BackendId: string[];
    /**
     * 内容转发匹配字段
     */
    Match: string;
    /**
     * 内容转发匹配字段的类型
     */
    Type?: string;
    /**
     * 策略优先级，1-9999
     */
    PolicyPriority?: number;
}
/**
 * CreatePolicy - 创建VServer内容转发策略
 */
export interface CreatePolicyResponse {
    /**
     * 内容转发策略ID
     */
    PolicyId?: string;
}
/**
 * CreateSSL - 创建SSL证书，可以把整个 Pem 证书内容传过来，或者把证书、私钥、CA证书分别传过来
 */
export interface CreateSSLRequest {
    /**
     * SSL证书的名字，默认值为空
     */
    SSLName: string;
    /**
     * 所添加的SSL证书类型，目前只支持Pem格式
     */
    SSLType?: string;
    /**
     * SSL证书的完整内容，包括用户证书、加密证书的私钥、CA证书
     */
    SSLContent?: string;
    /**
     * 用户的证书
     */
    UserCert?: string;
    /**
     * 加密证书的私钥
     */
    PrivateKey?: string;
    /**
     * CA证书
     */
    CaCert?: string;
}
/**
 * CreateSSL - 创建SSL证书，可以把整个 Pem 证书内容传过来，或者把证书、私钥、CA证书分别传过来
 */
export interface CreateSSLResponse {
    /**
     * SSL证书的Id
     */
    SSLId?: string;
}
/**
 * CreateULB - 创建负载均衡实例，可以选择内网或者外网
 */
export interface CreateULBRequest {
    /**
     * 负载均衡的名字，默认值为“ULB”
     */
    ULBName?: string;
    /**
     * 业务组
     */
    Tag?: string;
    /**
     * 备注
     */
    Remark?: string;
    /**
     * 创建的ULB是否为外网模式，默认即为外网模式
     */
    OuterMode?: string;
    /**
     * 创建的ULB是否为内网模式
     */
    InnerMode?: string;
    /**
     * 付费方式, 枚举值为: Year, 按年付费; Month, 按月付费; Dynamic, 按时付费
     */
    ChargeType?: string;
    /**
     * ULB所在的VPC的ID, 如果不传则使用默认的VPC
     */
    VPCId?: string;
    /**
     * ULB 所属的子网ID，如果不传则随机选择一个。
     */
    SubnetId?: string;
    /**
     * ULB 所属的业务组ID，如果不传则使用默认的业务组
     */
    BusinessId?: string;
    /**
     * 防火墙ID，如果不传，则默认不绑定防火墙
     */
    FirewallId?: string;
    /**
     * ULB 监听器类型，外网ULB默认RequestProxy，内网ULB默认PacketsTransmit。枚举值：RequestProxy，请求代理； PacketsTransmit ，报文转发。
     */
    ListenType?: string;
}
/**
 * CreateULB - 创建负载均衡实例，可以选择内网或者外网
 */
export interface CreateULBResponse {
    /**
     * 负载均衡实例的Id
     */
    ULBId?: string;
    /**
     * IPv6地址Id
     */
    IPv6AddressId?: string;
}
/**
 * CreateVServer - 创建VServer实例，定义监听的协议和端口以及负载均衡算法
 */
export interface CreateVServerRequest {
    /**
     * 负载均衡实例ID
     */
    ULBId: string;
    /**
     * VServer实例名称，默认为"VServer"
     */
    VServerName?: string;
    /**
     * 监听器类型，枚举值，RequestProxy ，请求代理；PacketsTransmit ，报文转发。默认为RequestProxy
     */
    ListenType?: string;
    /**
     * VServer实例的协议，请求代理模式下有 HTTP、HTTPS、TCP，报文转发下有 TCP，UDP。默认为“HTTP"
     */
    Protocol?: string;
    /**
     * VServer后端端口，取值范围[1-65535]；默认值为80
     */
    FrontendPort?: number;
    /**
     * VServer负载均衡模式，枚举值：Roundrobin -> 轮询;Source -> 源地址；ConsistentHash -> 一致性哈希；SourcePort -> 源地址（计算端口）；ConsistentHashPort -> 一致性哈希（计算端口）; WeightRoundrobin -> 加权轮询; Leastconn -> 最小连接数;Backup ->主备模式。ConsistentHash，SourcePort，ConsistentHashPort 只在报文转发中使用；Leastconn只在请求代理中使用；Roundrobin、Source和WeightRoundrobin,Backup在请求代理和报文转发中使用。默认为："Roundrobin"
     */
    Method?: string;
    /**
     * VServer会话保持方式，默认关闭会话保持。枚举值：None -> 关闭；ServerInsert -> 自动生成KEY；UserDefined -> 用户自定义KEY。
     */
    PersistenceType?: string;
    /**
     * 根据PersistenceType确认； None和ServerInsert： 此字段无意义； UserDefined：此字段传入自定义会话保持String
     */
    PersistenceInfo?: string;
    /**
     * ListenType为RequestProxy时表示空闲连接的回收时间，单位：秒，取值范围：时(0，86400]，默认值为60；ListenType为PacketsTransmit时表示连接保持的时间，单位：秒，取值范围：[60，900]，0 表示禁用连接保持
     */
    ClientTimeout?: number;
    /**
     * 健康检查类型，枚举值：Port -> 端口检查；Path -> 路径检查；Ping -> Ping探测；Customize -> UDP检查请求代理型默认值为Port，其中TCP协议仅支持Port，其他协议支持Port和Path;报文转发型TCP协议仅支持Port，UDP协议支持Ping、Port和Customize，默认值为Ping
     */
    MonitorType?: string;
    /**
     * 根据MonitorType确认； 当MonitorType为Path时，此字段有意义，代表HTTP检查域名
     */
    Domain?: string;
    /**
     * 根据MonitorType确认； 当MonitorType为Path时，此字段有意义，代表HTTP检查路径
     */
    Path?: string;
    /**
     * 根据MonitorType确认； 当MonitorType为Customize时，此字段有意义，代表UDP检查发出的请求报文
     */
    RequestMsg?: string;
    /**
     * 根据MonitorType确认； 当MonitorType为Customize时，此字段有意义，代表UDP检查请求应收到的响应报文
     */
    ResponseMsg?: string;
}
/**
 * CreateVServer - 创建VServer实例，定义监听的协议和端口以及负载均衡算法
 */
export interface CreateVServerResponse {
    /**
     * VServer实例的Id
     */
    VServerId?: string;
}
/**
 * DeletePolicy - 删除内容转发策略
 */
export interface DeletePolicyRequest {
    /**
     * 内容转发策略ID
     */
    PolicyId: string;
    /**
     * VServer 资源ID
     */
    VServerId?: string;
}
/**
 * DeletePolicy - 删除内容转发策略
 */
export interface DeletePolicyResponse {
}
/**
 * DeleteSSL - 删除SSL证书
 */
export interface DeleteSSLRequest {
    /**
     * SSL证书的ID
     */
    SSLId: string;
}
/**
 * DeleteSSL - 删除SSL证书
 */
export interface DeleteSSLResponse {
}
/**
 * DeleteULB - 删除负载均衡实例
 */
export interface DeleteULBRequest {
    /**
     * 负载均衡实例的ID
     */
    ULBId: string;
    /**
     * 删除ulb时是否释放绑定的EIP，false标识只解绑EIP，true表示会释放绑定的EIP，默认是false。Anycast IP 此参数无效
     */
    ReleaseEip?: boolean;
}
/**
 * DeleteULB - 删除负载均衡实例
 */
export interface DeleteULBResponse {
}
/**
 * DeleteVServer - 删除VServer实例
 */
export interface DeleteVServerRequest {
    /**
     * 负载均衡实例的ID
     */
    ULBId: string;
    /**
     * VServer实例的ID
     */
    VServerId: string;
}
/**
 * DeleteVServer - 删除VServer实例
 */
export interface DeleteVServerResponse {
}
/**
 * DescribeSSL - 获取SSL证书信息
 */
export interface DescribeSSLRequest {
    /**
     * SSL证书的Id
     */
    SSLId?: string;
    /**
     * 数据分页值，默认为20
     */
    Limit?: number;
    /**
     * 数据偏移量，默认值为0
     */
    Offset?: number;
}
/**
 * DescribeSSL - 获取SSL证书信息
 */
export interface DescribeSSLResponse {
    /**
     * 满足条件的SSL证书总数
     */
    TotalCount?: number;
    /**
     * SSL证书详细信息，具体结构见 ULBSSLSet
     */
    DataSet?: {
        /**
         * SSL证书的Id
         */
        SSLId?: string;
        /**
         * SSL证书的名字
         */
        SSLName?: string;
        /**
         * SSL证书类型，暂时只有 Pem 一种类型
         */
        SSLType?: string;
        /**
         * SSL证书的内容
         */
        SSLContent?: string;
        /**
         * SSL证书的创建时间
         */
        CreateTime?: number;
        /**
         * SSL证书的HASH值
         */
        HashValue?: string;
        /**
         * SSL证书绑定到的对象
         */
        BindedTargetSet?: {
            /**
             * SSL证书绑定到的VServer的资源ID
             */
            VServerId?: string;
            /**
             * 对应的VServer的名字
             */
            VServerName?: string;
            /**
             * VServer 所属的ULB实例的资源ID
             */
            ULBId?: string;
            /**
             * ULB实例的名称
             */
            ULBName?: string;
        }[];
    }[];
}
/**
 * DescribeULB - 获取ULB详细信息
 */
export interface DescribeULBRequest {
    /**
     * 数据偏移量，默认为0
     */
    Offset?: number;
    /**
     * 数据分页值，默认为20
     */
    Limit?: number;
    /**
     * 负载均衡实例的Id。 若指定则返回指定的负载均衡实例的信息； 若不指定则返回当前数据中心中所有的负载均衡实例的信息
     */
    ULBId?: string;
    /**
     * ULB所属的VPC
     */
    VPCId?: string;
    /**
     * ULB所属的子网ID
     */
    SubnetId?: string;
    /**
     * ULB所属的业务组ID
     */
    BusinessId?: string;
}
/**
 * DescribeULB - 获取ULB详细信息
 */
export interface DescribeULBResponse {
    /**
     * 满足条件的ULB总数
     */
    TotalCount?: number;
    /**
     * ULB列表，每项参数详见 ULBSet
     */
    DataSet?: {
        /**
         * 负载均衡的资源ID
         */
        ULBId?: string;
        /**
         * 负载均衡的资源名称
         */
        Name?: string;
        /**
         * 负载均衡的业务组名称
         */
        Tag?: string;
        /**
         * 负载均衡的备注
         */
        Remark?: string;
        /**
         * 带宽类型，枚举值为： 0，非共享带宽； 1，共享带宽
         */
        BandwidthType?: number;
        /**
         * 带宽
         */
        Bandwidth?: number;
        /**
         * ULB的创建时间，格式为Unix Timestamp
         */
        CreateTime?: number;
        /**
         * ULB的详细信息列表，具体结构见下方 ULBIPSet
         */
        IPSet?: {
            /**
             * 弹性IP的运营商信息，枚举值为：  Bgp：BGP IP International：国际IP
             */
            OperatorName?: string;
            /**
             * 弹性IP地址
             */
            EIP?: string;
            /**
             * 弹性IP的ID
             */
            EIPId?: string;
            /**
             * 弹性IP的带宽类型，枚举值：1 表示是共享带宽，0 普通带宽类型（暂未对外开放）
             */
            BandwidthType?: number;
            /**
             * 弹性IP的带宽值（暂未对外开放）
             */
            Bandwidth?: number;
        }[];
        /**
         * 负载均衡实例中存在的VServer实例列表，具体结构见下方 ULBVServerSet
         */
        VServerSet?: {
            /**
             * 健康检查类型，枚举值：Port -> 端口检查；Path -> 路径检查；Ping -> Ping探测， Customize -> UDP检查请求代理型默认值为Port，其中TCP协议仅支持Port，其他协议支持Port和Path; 报文转发型TCP协议仅支持Port，UDP协议支持Ping、Port和Customize
             */
            MonitorType: string;
            /**
             * 负载均衡实例的Id
             */
            ULBId?: string;
            /**
             * 根据MonitorType确认； 当MonitorType为Port时，此字段无意义。当MonitorType为Path时，代表HTTP检查域名
             */
            Domain?: string;
            /**
             * 根据MonitorType确认； 当MonitorType为Port时，此字段无意义。当MonitorType为Path时，代表HTTP检查路径
             */
            Path?: string;
            /**
             * 根据MonitorType确认； 当MonitorType为Customize时，此字段有意义，代表UDP检查发出的请求报文
             */
            RequestMsg?: string;
            /**
             * 根据MonitorType确认； 当MonitorType为Customize时，此字段有意义，代表UDP检查请求应收到的响应报文
             */
            ResponseMsg?: string;
            /**
             * VServer实例的Id
             */
            VServerId?: string;
            /**
             * VServer实例的名字
             */
            VServerName?: string;
            /**
             * VServer实例的协议。 枚举值为：HTTP，TCP，UDP，HTTPS。
             */
            Protocol?: string;
            /**
             * VServer服务端口
             */
            FrontendPort?: number;
            /**
             * VServer负载均衡的模式，枚举值：Roundrobin -> 轮询;Source -> 源地址；ConsistentHash -> 一致性哈希；SourcePort -> 源地址（计算端口）；ConsistentHashPort -> 一致性哈希（计算端口）。
             */
            Method?: string;
            /**
             * VServer会话保持方式。枚举值为： None -> 关闭会话保持； ServerInsert -> 自动生成； UserDefined -> 用户自定义。
             */
            PersistenceType?: string;
            /**
             * 根据PersistenceType确定： None或ServerInsert，此字段为空； UserDefined，此字段展示用户自定义会话string。
             */
            PersistenceInfo?: string;
            /**
             * 空闲连接的回收时间，单位：秒。
             */
            ClientTimeout?: number;
            /**
             * VServer的运行状态。枚举值： 0 -> rs全部运行正常;1 -> rs全部运行异常；2 -> rs部分运行异常。
             */
            Status?: number;
            /**
             * VServer绑定的SSL证书信息，具体结构见下方 ULBSSLSet。
             */
            SSLSet?: {
                /**
                 * SSL证书的Id
                 */
                SSLId?: string;
                /**
                 * SSL证书的名字
                 */
                SSLName?: string;
                /**
                 * SSL证书类型，暂时只有 Pem 一种类型
                 */
                SSLType?: string;
                /**
                 * SSL证书的内容
                 */
                SSLContent?: string;
                /**
                 * SSL证书的创建时间
                 */
                CreateTime?: number;
                /**
                 * SSL证书的HASH值
                 */
                HashValue?: string;
                /**
                 * SSL证书绑定到的对象
                 */
                BindedTargetSet?: {
                    /**
                     * SSL证书绑定到的VServer的资源ID
                     */
                    VServerId?: string;
                    /**
                     * 对应的VServer的名字
                     */
                    VServerName?: string;
                    /**
                     * VServer 所属的ULB实例的资源ID
                     */
                    ULBId?: string;
                    /**
                     * ULB实例的名称
                     */
                    ULBName?: string;
                }[];
            }[];
            /**
             * 后端资源信息列表，具体结构见下方 ULBBackendSet
             */
            BackendSet?: {
                /**
                 * 后端资源实例的Id
                 */
                BackendId?: string;
                /**
                 * 资源实例的类型
                 */
                ResourceType?: string;
                /**
                 * 资源实例的资源Id
                 */
                ResourceId?: string;
                /**
                 * 资源实例的资源名称
                 */
                ResourceName?: string;
                /**
                 * 资源绑定的虚拟网卡实例的类型
                 */
                SubResourceType?: string;
                /**
                 * 资源绑定的虚拟网卡实例的资源Id
                 */
                SubResourceId?: string;
                /**
                 * 资源绑定的虚拟网卡实例的资源名称
                 */
                SubResourceName?: string;
                /**
                 * 后端提供服务的内网IP
                 */
                PrivateIP?: string;
                /**
                 * 后端提供服务的端口
                 */
                Port?: number;
                /**
                 * 后端提供服务的实例启用与否，枚举值：0 禁用 1 启用
                 */
                Enabled?: number;
                /**
                 * 后端提供服务的实例运行状态，枚举值：0健康检查健康状态 1 健康检查异常
                 */
                Status?: number;
                /**
                 * 后端提供服务的资源所在的子网的ID
                 */
                SubnetId?: string;
                /**
                 * 是否为backup，只有当vserver的Backup属性为1时才会有此字段，说明：0：主rs1：备rs
                 */
                IsBackup?: number;
            }[];
            /**
             * 监听器类型，枚举值为: RequestProxy -> 请求代理；PacketsTransmit -> 报文转发
             */
            ListenType?: string;
            /**
             * 内容转发信息列表，具体结构见下方 ULBPolicySet
             */
            PolicySet?: {
                /**
                 * 内容转发规则中域名的匹配方式。枚举值：Regular，正则；Wildcard，泛域名
                 */
                DomainMatchMode?: string;
                /**
                 * 内容转发Id，默认内容转发类型下为空。
                 */
                PolicyId?: string;
                /**
                 * 内容类型，枚举值：Custom -> 客户自定义；Default -> 默认内容转发
                 */
                PolicyType?: string;
                /**
                 * 内容转发匹配字段的类型，枚举值：Domain -> 域名；Path -> 路径； 默认内容转发类型下为空
                 */
                Type?: string;
                /**
                 * 内容转发匹配字段;默认内容转发类型下为空。
                 */
                Match?: string;
                /**
                 * 内容转发优先级，范围[1,9999]，数字越大优先级越高。默认内容转发规则下为0。
                 */
                PolicyPriority?: number;
                /**
                 * 所属VServerId
                 */
                VServerId?: string;
                /**
                 * 默认内容转发类型下返回当前rs总数
                 */
                TotalCount?: number;
                /**
                 * 内容转发下rs的详细信息，参考PolicyBackendSet
                 */
                BackendSet?: {
                    /**
                     * 所添加的后端资源在ULB中的对象ID，（为ULB系统中使用，与资源自身ID无关
                     */
                    BackendId?: string;
                    /**
                     * 所添加的后端资源的类型，枚举值：UHost -> 云主机；UPM -> 物理云主机； UDHost -> 私有专区主机；UDocker -> 容器；UHybrid->混合云主机；CUBE->Cube；UNI -> 虚拟网卡
                     */
                    ResourceType?: string;
                    /**
                     * 后端资源的实例名称
                     */
                    ResourceName?: string;
                    /**
                     * 如果资源绑定了弹性网卡，则展示弹性网卡的资源ID
                     */
                    SubResourceId?: string;
                    /**
                     * 如果资源绑定了弹性网卡，则展示弹性网卡的资源名称
                     */
                    SubResourceName?: string;
                    /**
                     * "UNI"或者为空
                     */
                    SubResourceType?: string;
                    /**
                     * 后端资源的对象ID
                     */
                    ObjectId?: string;
                    /**
                     * 所添加的后端资源服务端口
                     */
                    Port?: number;
                    /**
                     * 后端资源的内网IP
                     */
                    PrivateIP?: string;
                }[];
            }[];
        }[];
        /**
         * ULB 的类型
         */
        ULBType?: string;
        /**
         * ULB ip类型，枚举值：IPv6 / IPv4 （内部测试，暂未对外开放）
         */
        IPVersion?: string;
        /**
         * ULB 监听器类型，枚举值：RequestProxy，请求代理； PacketsTransmit ，报文转发；Comprehensive，兼容型；Pending，未定型
         */
        ListenType?: string;
        /**
         * ULB所在的VPC的ID
         */
        VPCId?: string;
        /**
         * ULB 为 InnerMode 时，ULB 所属的子网ID，默认为空
         */
        SubnetId?: string;
        /**
         * ULB 所属的业务组ID
         */
        BusinessId?: string;
        /**
         * ULB的内网IP，当ULBType为OuterMode时，该值为空
         */
        PrivateIP?: string;
        /**
         * 防火墙信息，具体结构见下方 FirewallSet
         */
        FirewallSet?: {
            /**
             * 防火墙名称
             */
            FirewallName?: string;
            /**
             * 防火墙ID
             */
            FirewallId?: string;
        }[];
        /**
         * ULB是否开启日志功能。0，关闭；1，开启
         */
        EnableLog?: number;
        /**
         * 日志功能相关信息，仅当EnableLog为true时会返回，具体结构见下方 LoggerSet
         */
        LogSet?: {
            /**
             * ulb日志上传的bucket
             */
            BucketName?: string;
            /**
             * 上传到bucket使用的token的tokenid
             */
            TokenID?: string;
            /**
             * bucket的token名称
             */
            TokenName?: string;
        };
    }[];
}
/**
 * DescribeULBSimple - 获取ULB信息
 */
export interface DescribeULBSimpleRequest {
    /**
     * 数据偏移量，默认为0
     */
    Offset?: number;
    /**
     * 数据分页值，默认为10000
     */
    Limit?: number;
    /**
     * 负载均衡实例的Id。 若指定则返回指定的负载均衡实例的信息； 若不指定则返回当前数据中心中所有的负载均衡实例的信息
     */
    ULBId?: string;
    /**
     * ULB所属的VPC
     */
    VPCId?: string;
    /**
     * ULB所属的子网ID
     */
    SubnetId?: string;
    /**
     * ULB所属的业务组ID
     */
    BusinessId?: string;
}
/**
 * DescribeULBSimple - 获取ULB信息
 */
export interface DescribeULBSimpleResponse {
    /**
     * 满足条件的ULB总数
     */
    TotalCount: number;
    /**
     * ULB列表，每项参数详见 ULBSimpleSet
     */
    DataSet: {
        /**
         * ULB 监听器类型，枚举值：RequestProxy，请求代理； PacketsTransmit ，报文转发；Comprehensive，兼容型；Pending，未定型
         */
        ListenType: string;
        /**
         * ULB提供服务的IP类型。枚举值，“IPv4”,"IPv6"。默认为“IPv4”
         */
        IPVersion: string;
        /**
         * 负载均衡的资源ID
         */
        ULBId?: string;
        /**
         * 负载均衡的资源名称
         */
        Name?: string;
        /**
         * 负载均衡的业务组名称
         */
        Tag?: string;
        /**
         * 负载均衡的备注
         */
        Remark?: string;
        /**
         * ULB的创建时间，格式为Unix Timestamp
         */
        CreateTime?: number;
        /**
         * ULB所在的VPC的ID
         */
        VPCId?: string;
        /**
         * ULB 为 InnerMode 时，ULB 所属的子网ID
         */
        SubnetId?: string;
        /**
         * ULB 所属的业务组ID
         */
        BusinessId?: string;
        /**
         * ULB的内网IP，当ULBType为OuterMode时，该值为空
         */
        PrivateIP?: string;
        /**
         * 带宽类型，枚举值为： 0，非共享带宽； 1，共享带宽
         */
        BandwidthType?: number;
        /**
         * 带宽
         */
        Bandwidth?: number;
        /**
         * ULB的详细信息列表，具体结构见下方 ULBIPSet
         */
        IPSet?: {
            /**
             * 弹性IP的运营商信息，枚举值为：  Bgp：BGP IP International：国际IP
             */
            OperatorName?: string;
            /**
             * 弹性IP地址
             */
            EIP?: string;
            /**
             * 弹性IP的ID
             */
            EIPId?: string;
            /**
             * 弹性IP的带宽类型，枚举值：1 表示是共享带宽，0 普通带宽类型（暂未对外开放）
             */
            BandwidthType?: number;
            /**
             * 弹性IP的带宽值（暂未对外开放）
             */
            Bandwidth?: number;
        }[];
        /**
         * ulb下vserver数量
         */
        VServerCount?: number;
        /**
         * ULB 的类型（InnerMode or OuterMode）
         */
        ULBType?: string;
        /**
         * 防火墙信息，具体结构见下方 FirewallSet
         */
        FirewallSet?: {
            /**
             * 防火墙名称
             */
            FirewallName?: string;
            /**
             * 防火墙ID
             */
            FirewallId?: string;
        }[];
        /**
         * ULB是否开启日志功能。0，关闭；1，开启
         */
        EnableLog?: number;
        /**
         * 日志功能相关信息，仅当EnableLog为true时会返回，具体结构见下方 LoggerSet
         */
        LogSet?: {
            /**
             * ulb日志上传的bucket
             */
            BucketName?: string;
            /**
             * 上传到bucket使用的token的tokenid
             */
            TokenID?: string;
            /**
             * bucket的token名称
             */
            TokenName?: string;
        };
    }[];
}
/**
 * DescribeVServer - 获取ULB下的VServer的详细信息
 */
export interface DescribeVServerRequest {
    /**
     * 负载均衡实例的Id
     */
    ULBId?: string;
    /**
     * VServer实例的Id；若指定则返回指定的VServer实例的信息； 若不指定则返回当前负载均衡实例下所有VServer的信息
     */
    VServerId?: string;
    /**
     * 数据分页值
     */
    Limit?: number;
    /**
     * 数据偏移量
     */
    Offset?: number;
}
/**
 * DescribeVServer - 获取ULB下的VServer的详细信息
 */
export interface DescribeVServerResponse {
    /**
     * 满足条件的VServer总数
     */
    TotalCount?: number;
    /**
     * VServer列表，每项参数详见 ULBVServerSet
     */
    DataSet?: {
        /**
         * 健康检查类型，枚举值：Port -> 端口检查；Path -> 路径检查；Ping -> Ping探测， Customize -> UDP检查请求代理型默认值为Port，其中TCP协议仅支持Port，其他协议支持Port和Path; 报文转发型TCP协议仅支持Port，UDP协议支持Ping、Port和Customize
         */
        MonitorType: string;
        /**
         * 负载均衡实例的Id
         */
        ULBId?: string;
        /**
         * 根据MonitorType确认； 当MonitorType为Port时，此字段无意义。当MonitorType为Path时，代表HTTP检查域名
         */
        Domain?: string;
        /**
         * 根据MonitorType确认； 当MonitorType为Port时，此字段无意义。当MonitorType为Path时，代表HTTP检查路径
         */
        Path?: string;
        /**
         * 根据MonitorType确认； 当MonitorType为Customize时，此字段有意义，代表UDP检查发出的请求报文
         */
        RequestMsg?: string;
        /**
         * 根据MonitorType确认； 当MonitorType为Customize时，此字段有意义，代表UDP检查请求应收到的响应报文
         */
        ResponseMsg?: string;
        /**
         * VServer实例的Id
         */
        VServerId?: string;
        /**
         * VServer实例的名字
         */
        VServerName?: string;
        /**
         * VServer实例的协议。 枚举值为：HTTP，TCP，UDP，HTTPS。
         */
        Protocol?: string;
        /**
         * VServer服务端口
         */
        FrontendPort?: number;
        /**
         * VServer负载均衡的模式，枚举值：Roundrobin -> 轮询;Source -> 源地址；ConsistentHash -> 一致性哈希；SourcePort -> 源地址（计算端口）；ConsistentHashPort -> 一致性哈希（计算端口）。
         */
        Method?: string;
        /**
         * VServer会话保持方式。枚举值为： None -> 关闭会话保持； ServerInsert -> 自动生成； UserDefined -> 用户自定义。
         */
        PersistenceType?: string;
        /**
         * 根据PersistenceType确定： None或ServerInsert，此字段为空； UserDefined，此字段展示用户自定义会话string。
         */
        PersistenceInfo?: string;
        /**
         * 空闲连接的回收时间，单位：秒。
         */
        ClientTimeout?: number;
        /**
         * VServer的运行状态。枚举值： 0 -> rs全部运行正常;1 -> rs全部运行异常；2 -> rs部分运行异常。
         */
        Status?: number;
        /**
         * VServer绑定的SSL证书信息，具体结构见下方 ULBSSLSet。
         */
        SSLSet?: {
            /**
             * SSL证书的Id
             */
            SSLId?: string;
            /**
             * SSL证书的名字
             */
            SSLName?: string;
            /**
             * SSL证书类型，暂时只有 Pem 一种类型
             */
            SSLType?: string;
            /**
             * SSL证书的内容
             */
            SSLContent?: string;
            /**
             * SSL证书的创建时间
             */
            CreateTime?: number;
            /**
             * SSL证书的HASH值
             */
            HashValue?: string;
            /**
             * SSL证书绑定到的对象
             */
            BindedTargetSet?: {
                /**
                 * SSL证书绑定到的VServer的资源ID
                 */
                VServerId?: string;
                /**
                 * 对应的VServer的名字
                 */
                VServerName?: string;
                /**
                 * VServer 所属的ULB实例的资源ID
                 */
                ULBId?: string;
                /**
                 * ULB实例的名称
                 */
                ULBName?: string;
            }[];
        }[];
        /**
         * 后端资源信息列表，具体结构见下方 ULBBackendSet
         */
        BackendSet?: {
            /**
             * 后端资源实例的Id
             */
            BackendId?: string;
            /**
             * 资源实例的类型
             */
            ResourceType?: string;
            /**
             * 资源实例的资源Id
             */
            ResourceId?: string;
            /**
             * 资源实例的资源名称
             */
            ResourceName?: string;
            /**
             * 资源绑定的虚拟网卡实例的类型
             */
            SubResourceType?: string;
            /**
             * 资源绑定的虚拟网卡实例的资源Id
             */
            SubResourceId?: string;
            /**
             * 资源绑定的虚拟网卡实例的资源名称
             */
            SubResourceName?: string;
            /**
             * 后端提供服务的内网IP
             */
            PrivateIP?: string;
            /**
             * 后端提供服务的端口
             */
            Port?: number;
            /**
             * 后端提供服务的实例启用与否，枚举值：0 禁用 1 启用
             */
            Enabled?: number;
            /**
             * 后端提供服务的实例运行状态，枚举值：0健康检查健康状态 1 健康检查异常
             */
            Status?: number;
            /**
             * 后端提供服务的资源所在的子网的ID
             */
            SubnetId?: string;
            /**
             * 是否为backup，只有当vserver的Backup属性为1时才会有此字段，说明：0：主rs1：备rs
             */
            IsBackup?: number;
        }[];
        /**
         * 监听器类型，枚举值为: RequestProxy -> 请求代理；PacketsTransmit -> 报文转发
         */
        ListenType?: string;
        /**
         * 内容转发信息列表，具体结构见下方 ULBPolicySet
         */
        PolicySet?: {
            /**
             * 内容转发规则中域名的匹配方式。枚举值：Regular，正则；Wildcard，泛域名
             */
            DomainMatchMode?: string;
            /**
             * 内容转发Id，默认内容转发类型下为空。
             */
            PolicyId?: string;
            /**
             * 内容类型，枚举值：Custom -> 客户自定义；Default -> 默认内容转发
             */
            PolicyType?: string;
            /**
             * 内容转发匹配字段的类型，枚举值：Domain -> 域名；Path -> 路径； 默认内容转发类型下为空
             */
            Type?: string;
            /**
             * 内容转发匹配字段;默认内容转发类型下为空。
             */
            Match?: string;
            /**
             * 内容转发优先级，范围[1,9999]，数字越大优先级越高。默认内容转发规则下为0。
             */
            PolicyPriority?: number;
            /**
             * 所属VServerId
             */
            VServerId?: string;
            /**
             * 默认内容转发类型下返回当前rs总数
             */
            TotalCount?: number;
            /**
             * 内容转发下rs的详细信息，参考PolicyBackendSet
             */
            BackendSet?: {
                /**
                 * 所添加的后端资源在ULB中的对象ID，（为ULB系统中使用，与资源自身ID无关
                 */
                BackendId?: string;
                /**
                 * 所添加的后端资源的类型，枚举值：UHost -> 云主机；UPM -> 物理云主机； UDHost -> 私有专区主机；UDocker -> 容器；UHybrid->混合云主机；CUBE->Cube；UNI -> 虚拟网卡
                 */
                ResourceType?: string;
                /**
                 * 后端资源的实例名称
                 */
                ResourceName?: string;
                /**
                 * 如果资源绑定了弹性网卡，则展示弹性网卡的资源ID
                 */
                SubResourceId?: string;
                /**
                 * 如果资源绑定了弹性网卡，则展示弹性网卡的资源名称
                 */
                SubResourceName?: string;
                /**
                 * "UNI"或者为空
                 */
                SubResourceType?: string;
                /**
                 * 后端资源的对象ID
                 */
                ObjectId?: string;
                /**
                 * 所添加的后端资源服务端口
                 */
                Port?: number;
                /**
                 * 后端资源的内网IP
                 */
                PrivateIP?: string;
            }[];
        }[];
    }[];
}
/**
 * ReleaseBackend - 从VServer释放后端资源实例
 */
export interface ReleaseBackendRequest {
    /**
     * 负载均衡实例的ID
     */
    ULBId: string;
    /**
     * 后端资源实例的ID(ULB后端ID，非资源自身ID)
     */
    BackendId: string;
}
/**
 * ReleaseBackend - 从VServer释放后端资源实例
 */
export interface ReleaseBackendResponse {
}
/**
 * UnbindSSL - 从VServer解绑SSL证书
 */
export interface UnbindSSLRequest {
    /**
     * 所绑定ULB实例ID
     */
    ULBId: string;
    /**
     * 所绑定VServer实例ID
     */
    VServerId: string;
    /**
     * SSL证书的Id
     */
    SSLId: string;
}
/**
 * UnbindSSL - 从VServer解绑SSL证书
 */
export interface UnbindSSLResponse {
}
/**
 * UpdateBackendAttribute - 更新ULB后端资源实例(服务节点)属性
 */
export interface UpdateBackendAttributeRequest {
    /**
     * 负载均衡资源ID
     */
    ULBId: string;
    /**
     * 后端资源实例的ID(ULB后端ID，非资源自身ID)
     */
    BackendId: string;
    /**
     * 后端资源服务端口，取值范围[1-65535]
     */
    Port?: number;
    /**
     * 所添加的后端RS权重（在加权轮询算法下有效），取值范围[0-100]，默认为1
     */
    Weight?: number;
    /**
     * 后端实例状态开关
     */
    Enabled?: number;
    /**
     * 是否为backup0：主rs1：备rs默认为0
     */
    IsBackup?: number;
}
/**
 * UpdateBackendAttribute - 更新ULB后端资源实例(服务节点)属性
 */
export interface UpdateBackendAttributeResponse {
}
/**
 * UpdatePolicy - 更新内容转发规则，包括转发规则后的服务节点
 */
export interface UpdatePolicyRequest {
    /**
     * 需要添加内容转发策略的负载均衡实例ID
     */
    ULBId: string;
    /**
     * 需要添加内容转发策略的VServer实例ID，只支持请求代理模式下，HTTP或HTTPS协议的VServer
     */
    VServerId: string;
    /**
     * 内容转发匹配字段
     */
    Match: string;
    /**
     * 转发规则的ID，当Type为Default时，可以不传或为空
     */
    PolicyId?: string;
    /**
     * 内容转发策略应用的后端资源实例的ID，来源于 AllocateBackend 返回的 BackendId，不传表示更新转发节点为空
     */
    BackendId?: string[];
    /**
     * 内容转发匹配字段的类型，枚举值：Domain -> 域名转发规则；Path -> 路径转发规则；Default -> 默认转发规则，不传默认值Domain
     */
    Type?: string;
}
/**
 * UpdatePolicy - 更新内容转发规则，包括转发规则后的服务节点
 */
export interface UpdatePolicyResponse {
}
/**
 * UpdateSSLAttribute - 更新修改SSL的属性，如：修改SSLName
 */
export interface UpdateSSLAttributeRequest {
    /**
     * SSL的资源id
     */
    SSLId: string;
    /**
     * SSL实例名称，不允许传空
     */
    SSLName: string;
}
/**
 * UpdateSSLAttribute - 更新修改SSL的属性，如：修改SSLName
 */
export interface UpdateSSLAttributeResponse {
}
/**
 * UpdateULBAttribute - 更新ULB名字业务组备注等属性字段
 */
export interface UpdateULBAttributeRequest {
    /**
     * ULB资源ID
     */
    ULBId: string;
    /**
     * 名字
     */
    Name?: string;
    /**
     * 业务
     */
    Tag?: string;
    /**
     * 备注
     */
    Remark?: string;
}
/**
 * UpdateULBAttribute - 更新ULB名字业务组备注等属性字段
 */
export interface UpdateULBAttributeResponse {
}
/**
 * UpdateVServerAttribute - 更新VServer实例属性
 */
export interface UpdateVServerAttributeRequest {
    /**
     * 负载均衡实例ID
     */
    ULBId: string;
    /**
     * VServer实例ID
     */
    VServerId: string;
    /**
     * VServer实例名称，若无此字段则不做修改
     */
    VServerName?: string;
    /**
     * VServer负载均衡模式，枚举值：Roundrobin -> 轮询;Source -> 源地址；ConsistentHash -> 一致性哈希；SourcePort -> 源地址（计算端口）；ConsistentHashPort -> 一致性哈希（计算端口）; WeightRoundrobin -> 加权轮询; Leastconn -> 最小连接数；Backup -> 主备模式。ConsistentHash，SourcePort，ConsistentHashPort 只在报文转发中使用；Leastconn只在请求代理中使用；Roundrobin、Source和WeightRoundrobin,Backup在请求代理和报文转发中使用。默认为："Roundrobin"
     */
    Method?: string;
    /**
     * VServer会话保持模式，若无此字段则不做修改。枚举值：None：关闭；ServerInsert：自动生成KEY；UserDefined：用户自定义KEY。
     */
    PersistenceType?: string;
    /**
     * 根据PersistenceType确定: None或ServerInsert, 此字段无意义; UserDefined, 则此字段传入用户自定义会话保持String. 若无此字段则不做修改
     */
    PersistenceInfo?: string;
    /**
     * 请求代理的VServer下表示空闲连接的回收时间，单位：秒，取值范围：时(0，86400]，默认值为60；报文转发的VServer下表示回话保持的时间，单位：秒，取值范围：[60，900]，0 表示禁用连接保持
     */
    ClientTimeout?: number;
    /**
     * 健康检查类型，枚举值：Port -> 端口检查；Path -> 路径检查；Ping -> Ping探测，Customize -> UDP检查请求代理型默认值为Port，其中TCP协议仅支持Port，其他协议支持Port和Path;报文转发型TCP协议仅支持Port，UDP协议支持Ping、Port和Customize，默认值为Ping
     */
    MonitorType?: string;
    /**
     * MonitorType 为 Path 时指定健康检查发送请求时HTTP HEADER 里的域名
     */
    Domain?: string;
    /**
     * MonitorType 为 Path 时指定健康检查发送请求时的路径，默认为 /
     */
    Path?: string;
    /**
     * 根据MonitorType确认； 当MonitorType为Customize时，此字段有意义，代表UDP检查发出的请求报文
     */
    RequestMsg?: string;
    /**
     * 根据MonitorType确认； 当MonitorType为Customize时，此字段有意义，代表UDP检查请求应收到的响应报文
     */
    ResponseMsg?: string;
}
/**
 * UpdateVServerAttribute - 更新VServer实例属性
 */
export interface UpdateVServerAttributeResponse {
}
