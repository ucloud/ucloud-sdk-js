import Client from '../../core/client';
import { ConfigOptions } from '../../core/config';
import { CredentialOptions } from '../../core/credential';
/**
 * This client is used to call actions of **uec** service
 */
export default class UECClient extends Client {
    constructor({ config, credential, }: {
        config: ConfigOptions;
        credential: CredentialOptions;
    });
    /**
     * BindUEcFirewall - 绑定防火墙，应用防火墙规则
     *
     * See also: https://docs.ucloud.cn/api/uec-api/bind_u_ec_firewall
     */
    bindUEcFirewall(request?: BindUEcFirewallRequest): Promise<BindUEcFirewallResponse>;
    /**
     * CreateUEcCustomImage - 从指定虚拟机，生成自定义镜像。
     *
     * See also: https://docs.ucloud.cn/api/uec-api/create_u_ec_custom_image
     */
    createUEcCustomImage(request?: CreateUEcCustomImageRequest): Promise<CreateUEcCustomImageResponse>;
    /**
     * CreateUEcFirewall - 创建外网防火墙
     *
     * See also: https://docs.ucloud.cn/api/uec-api/create_u_ec_firewall
     */
    createUEcFirewall(request?: CreateUEcFirewallRequest): Promise<CreateUEcFirewallResponse>;
    /**
     * CreateUEcHolder - 创建容器组
     *
     * See also: https://docs.ucloud.cn/api/uec-api/create_u_ec_holder
     */
    createUEcHolder(request?: CreateUEcHolderRequest): Promise<CreateUEcHolderResponse>;
    /**
     * CreateUEcSubnet - 创建子网
     *
     * See also: https://docs.ucloud.cn/api/uec-api/create_u_ec_subnet
     */
    createUEcSubnet(request?: CreateUEcSubnetRequest): Promise<CreateUEcSubnetResponse>;
    /**
     * CreateUEcVHost - 创建虚拟机v2.0
     *
     * See also: https://docs.ucloud.cn/api/uec-api/create_u_ec_v_host
     */
    createUEcVHost(request?: CreateUEcVHostRequest): Promise<CreateUEcVHostResponse>;
    /**
     * DeleteUEcCustomImage - 删除UEDN客户自定义镜像
     *
     * See also: https://docs.ucloud.cn/api/uec-api/delete_u_ec_custom_image
     */
    deleteUEcCustomImage(request?: DeleteUEcCustomImageRequest): Promise<DeleteUEcCustomImageResponse>;
    /**
     * DeleteUEcHolder - 删除容器组
     *
     * See also: https://docs.ucloud.cn/api/uec-api/delete_u_ec_holder
     */
    deleteUEcHolder(request?: DeleteUEcHolderRequest): Promise<DeleteUEcHolderResponse>;
    /**
     * DeleteUEcSubnet - 删除子网
     *
     * See also: https://docs.ucloud.cn/api/uec-api/delete_u_ec_subnet
     */
    deleteUEcSubnet(request?: DeleteUEcSubnetRequest): Promise<DeleteUEcSubnetResponse>;
    /**
     * DeleteUEcVHost - 删除vhost虚拟机 v2.0
     *
     * See also: https://docs.ucloud.cn/api/uec-api/delete_u_ec_v_host
     */
    deleteUEcVHost(request?: DeleteUEcVHostRequest): Promise<DeleteUEcVHostResponse>;
    /**
     * DescribeUEcFirewall - 获取防火墙信息
     *
     * See also: https://docs.ucloud.cn/api/uec-api/describe_u_ec_firewall
     */
    describeUEcFirewall(request?: DescribeUEcFirewallRequest): Promise<DescribeUEcFirewallResponse>;
    /**
     * DescribeUEcFirewallResource - 防火墙绑定的资源列表
     *
     * See also: https://docs.ucloud.cn/api/uec-api/describe_u_ec_firewall_resource
     */
    describeUEcFirewallResource(request?: DescribeUEcFirewallResourceRequest): Promise<DescribeUEcFirewallResourceResponse>;
    /**
     * DescribeUEcHolder - 获得容器组信息
     *
     * See also: https://docs.ucloud.cn/api/uec-api/describe_u_ec_holder
     */
    describeUEcHolder(request?: DescribeUEcHolderRequest): Promise<DescribeUEcHolderResponse>;
    /**
     * DescribeUEcHolderIDC - 获取容器组机房信息
     *
     * See also: https://docs.ucloud.cn/api/uec-api/describe_u_ec_holder_idc
     */
    describeUEcHolderIDC(request?: DescribeUEcHolderIDCRequest): Promise<DescribeUEcHolderIDCResponse>;
    /**
     * DescribeUEcIDC - 获取IDC机房列表
     *
     * See also: https://docs.ucloud.cn/api/uec-api/describe_u_ec_idc
     */
    describeUEcIDC(request?: DescribeUEcIDCRequest): Promise<DescribeUEcIDCResponse>;
    /**
     * DescribeUEcSubnet - 获取子网列表
     *
     * See also: https://docs.ucloud.cn/api/uec-api/describe_u_ec_subnet
     */
    describeUEcSubnet(request?: DescribeUEcSubnetRequest): Promise<DescribeUEcSubnetResponse>;
    /**
     * DescribeUEcVHost - 获取虚拟机列表 2.0
     *
     * See also: https://docs.ucloud.cn/api/uec-api/describe_u_ec_v_host
     */
    describeUEcVHost(request?: DescribeUEcVHostRequest): Promise<DescribeUEcVHostResponse>;
    /**
     * DescribeUEcVHostISP - 获取虚拟机运营商信息
     *
     * See also: https://docs.ucloud.cn/api/uec-api/describe_u_ec_v_host_isp
     */
    describeUEcVHostISP(request?: DescribeUEcVHostISPRequest): Promise<DescribeUEcVHostISPResponse>;
    /**
     * GetUEcHolderLog - 获取单个容器日志
     *
     * See also: https://docs.ucloud.cn/api/uec-api/get_u_ec_holder_log
     */
    getUEcHolderLog(request?: GetUEcHolderLogRequest): Promise<GetUEcHolderLogResponse>;
    /**
     * GetUEcHolderMetrics - 获取容器（CPU利用率，带宽，内存）数据
     *
     * See also: https://docs.ucloud.cn/api/uec-api/get_u_ec_holder_metrics
     */
    getUEcHolderMetrics(request?: GetUEcHolderMetricsRequest): Promise<GetUEcHolderMetricsResponse>;
    /**
     * GetUEcIDCCutInfo - 获取机房割接信息
     *
     * See also: https://docs.ucloud.cn/api/uec-api/get_u_ec_idc_cut_info
     */
    getUEcIDCCutInfo(request?: GetUEcIDCCutInfoRequest): Promise<GetUEcIDCCutInfoResponse>;
    /**
     * GetUEcIDCVHostData - 获取机房虚拟机监控数据
     *
     * See also: https://docs.ucloud.cn/api/uec-api/get_u_ec_idcv_host_data
     */
    getUEcIDCVHostData(request?: GetUEcIDCVHostDataRequest): Promise<GetUEcIDCVHostDataResponse>;
    /**
     * GetUEcImage - uec2.0
     *
     * See also: https://docs.ucloud.cn/api/uec-api/get_u_ec_image
     */
    getUEcImage(request?: GetUEcImageRequest): Promise<GetUEcImageResponse>;
    /**
     * GetUEcPodPrice - 获得容器组价格
     *
     * See also: https://docs.ucloud.cn/api/uec-api/get_u_ec_pod_price
     */
    getUEcPodPrice(request?: GetUEcPodPriceRequest): Promise<GetUEcPodPriceResponse>;
    /**
     * GetUEcUpgradePrice - 获取虚拟机调整差价
     *
     * See also: https://docs.ucloud.cn/api/uec-api/get_u_ec_upgrade_price
     */
    getUEcUpgradePrice(request?: GetUEcUpgradePriceRequest): Promise<GetUEcUpgradePriceResponse>;
    /**
     * GetUEcVHostData - 获取虚拟机监控数据
     *
     * See also: https://docs.ucloud.cn/api/uec-api/get_u_ec_v_host_data
     */
    getUEcVHostData(request?: GetUEcVHostDataRequest): Promise<GetUEcVHostDataResponse>;
    /**
     * GetUEcVHostPrice - 获取虚拟机价格
     *
     * See also: https://docs.ucloud.cn/api/uec-api/get_u_ec_v_host_price
     */
    getUEcVHostPrice(request?: GetUEcVHostPriceRequest): Promise<GetUEcVHostPriceResponse>;
    /**
     * ImportUEcCustomImage - 导入自定义镜像
     *
     * See also: https://docs.ucloud.cn/api/uec-api/import_u_ec_custom_image
     */
    importUEcCustomImage(request?: ImportUEcCustomImageRequest): Promise<ImportUEcCustomImageResponse>;
    /**
     * LoginUEcDocker - 登录容器
     *
     * See also: https://docs.ucloud.cn/api/uec-api/login_u_ec_docker
     */
    loginUEcDocker(request?: LoginUEcDockerRequest): Promise<LoginUEcDockerResponse>;
    /**
     * ModifyUEcBandwidth - 修改节点带宽限制
     *
     * See also: https://docs.ucloud.cn/api/uec-api/modify_u_ec_bandwidth
     */
    modifyUEcBandwidth(request?: ModifyUEcBandwidthRequest): Promise<ModifyUEcBandwidthResponse>;
    /**
     * ModifyUEcHolderName - 修改容器组名称
     *
     * See also: https://docs.ucloud.cn/api/uec-api/modify_u_ec_holder_name
     */
    modifyUEcHolderName(request?: ModifyUEcHolderNameRequest): Promise<ModifyUEcHolderNameResponse>;
    /**
     * ModifyUEcImageName - 修改镜像名称
     *
     * See also: https://docs.ucloud.cn/api/uec-api/modify_u_ec_image_name
     */
    modifyUEcImageName(request?: ModifyUEcImageNameRequest): Promise<ModifyUEcImageNameResponse>;
    /**
     * PoweroffUEcVHost - 虚拟机断电
     *
     * See also: https://docs.ucloud.cn/api/uec-api/poweroff_u_ec_v_host
     */
    poweroffUEcVHost(request?: PoweroffUEcVHostRequest): Promise<PoweroffUEcVHostResponse>;
    /**
     * ReinstallUEcVHost - 虚拟机重装系统
     *
     * See also: https://docs.ucloud.cn/api/uec-api/reinstall_u_ec_v_host
     */
    reinstallUEcVHost(request?: ReinstallUEcVHostRequest): Promise<ReinstallUEcVHostResponse>;
    /**
     * RestartUEcHolder - 重启容器组
     *
     * See also: https://docs.ucloud.cn/api/uec-api/restart_u_ec_holder
     */
    restartUEcHolder(request?: RestartUEcHolderRequest): Promise<RestartUEcHolderResponse>;
    /**
     * RestartUEcVHost - 重启虚拟机v2.0
     *
     * See also: https://docs.ucloud.cn/api/uec-api/restart_u_ec_v_host
     */
    restartUEcVHost(request?: RestartUEcVHostRequest): Promise<RestartUEcVHostResponse>;
    /**
     * StartUEcVHost - 启动UEC虚拟机
     *
     * See also: https://docs.ucloud.cn/api/uec-api/start_u_ec_v_host
     */
    startUEcVHost(request?: StartUEcVHostRequest): Promise<StartUEcVHostResponse>;
    /**
     * StopUEcVHost - 停止UEC虚拟机
     *
     * See also: https://docs.ucloud.cn/api/uec-api/stop_u_ec_v_host
     */
    stopUEcVHost(request?: StopUEcVHostRequest): Promise<StopUEcVHostResponse>;
    /**
     * UnBindUEcFirewall - 解绑防火墙
     *
     * See also: https://docs.ucloud.cn/api/uec-api/un_bind_u_ec_firewall
     */
    unBindUEcFirewall(request?: UnBindUEcFirewallRequest): Promise<UnBindUEcFirewallResponse>;
    /**
     * UpdateUEcFirewall - 更新防火墙信息，新增和删除规则
     *
     * See also: https://docs.ucloud.cn/api/uec-api/update_u_ec_firewall
     */
    updateUEcFirewall(request?: UpdateUEcFirewallRequest): Promise<UpdateUEcFirewallResponse>;
    /**
     * UpdateUEcFirewallAttribute - 更新防火墙名称及描述
     *
     * See also: https://docs.ucloud.cn/api/uec-api/update_u_ec_firewall_attribute
     */
    updateUEcFirewallAttribute(request?: UpdateUEcFirewallAttributeRequest): Promise<UpdateUEcFirewallAttributeResponse>;
    /**
     * UpdateUEcSubnet - 更新子网信息
     *
     * See also: https://docs.ucloud.cn/api/uec-api/update_u_ec_subnet
     */
    updateUEcSubnet(request?: UpdateUEcSubnetRequest): Promise<UpdateUEcSubnetResponse>;
}
/**
 * BindUEcFirewall - 绑定防火墙，应用防火墙规则
 */
export interface BindUEcFirewallRequest {
    /**
     * 防火墙Id
     */
    FirewallId: string;
    /**
     * 虚拟机资源Id或容器组资源id
     */
    ResourceId: string;
}
/**
 * BindUEcFirewall - 绑定防火墙，应用防火墙规则
 */
export interface BindUEcFirewallResponse {
}
/**
 * CreateUEcCustomImage - 从指定虚拟机，生成自定义镜像。
 */
export interface CreateUEcCustomImageRequest {
    /**
     * 虚拟机实例ID
     */
    NodeId: string;
    /**
     * 镜像名称
     */
    ImageName: string;
    /**
     * 镜像描述
     */
    ImageDescription?: string;
}
/**
 * CreateUEcCustomImage - 从指定虚拟机，生成自定义镜像。
 */
export interface CreateUEcCustomImageResponse {
    /**
     * 镜像ID
     */
    ImageId: string;
}
/**
 * CreateUEcFirewall - 创建外网防火墙
 */
export interface CreateUEcFirewallRequest {
    /**
     * 防火墙名称
     */
    Name: string;
    /**
     *
     */
    Rule?: {
        /**
         * 协议，可选值：TCP，UDP，ICMP
         */
        ProtocolType: string;
        /**
         * 端口，范围用"-"符号分隔，如：1-65535
         */
        Port: string;
        /**
         * 源ip
         */
        SrcIp: string;
        /**
         * ACCEPT（接受）和DROP（拒绝）
         */
        Action: string;
        /**
         * 优先级：HIGH（高），MEDIUM（中），LOW（低）
         */
        Priority: string;
        /**
         * 备注
         */
        Remark?: string;
    }[];
    /**
     * 描述
     */
    Remark?: string;
}
/**
 * CreateUEcFirewall - 创建外网防火墙
 */
export interface CreateUEcFirewallResponse {
    /**
     * 防火墙Id
     */
    FirewallId: string;
}
/**
 * CreateUEcHolder - 创建容器组
 */
export interface CreateUEcHolderRequest {
    /**
     * 机房id
     */
    IdcId: string;
    /**
     * 容器组Cpu总核数
     */
    CpuCore: number;
    /**
     * 容器组总内存，单位MB
     */
    MemSize: number;
    /**
     * 子网ID
     */
    SubnetId: string;
    /**
     * 容器组名称（默认default）
     */
    Name?: string;
    /**
     * 机型（normal-经济型，hf-标准型，默认normal）
     */
    ProductType?: string;
    /**
     * 重启策略（0总是，1失败是，2永不，默认0）
     */
    RestartStrategy?: number;
    /**
     * 绑定外网ip（yes-绑定，no-不绑定，默认no）
     */
    ElasticIp?: string;
    /**
     * 外网绑定的带宽（单位M，默认0，只有当ElasticIp为yes时，默认1）
     */
    Bandwidth?: number;
    /**
     * 防火墙ID
     */
    FirewallId?: string;
    /**
     * 付费方式（2按月、3按年。默认2，默认月付）
     */
    ChargeType?: number;
    /**
     * 月数或者年数（默认值：1，当为按月计费时，0表示计费到月底，默认值为0）
     */
    ChargeQuantity?: number;
    /**
     *
     */
    Pack?: {
        /**
         * 容器名称
         */
        Name?: string;
        /**
         * 容器Cpu核数
         */
        CpuCore?: number;
        /**
         * 容器内存，单位MB
         */
        MemSize?: number;
        /**
         * 容器镜像名称
         */
        ImageName?: string;
        /**
         * 容器工作目录
         */
        WorkDir?: string;
        /**
         * 开启容器的命令
         */
        Cmd?: string;
        /**
         * 容器参数（多个用；隔开）
         */
        Args?: string;
        /**
         * 容器环境变量（多个用；隔开,如：key1:value1;key2:value2）
         */
        Environment?: string;
        /**
         * 容器配置字典（多个用；隔开，如：/data1:resId1;/data2:resId2）
         */
        ConfigDict?: string;
    }[];
    /**
     *
     */
    Image?: {
        /**
         * 镜像用户名和密码（如镜像名：密码）
         */
        Message?: string;
        /**
         * 镜像仓库地址
         */
        StoreAddress?: string;
    }[];
    /**
     *
     */
    Storage?: {
        /**
         * 存储卷挂载路径
         */
        Path?: string;
        /**
         * 存储卷资源id
         */
        ResourceId?: string;
    }[];
}
/**
 * CreateUEcHolder - 创建容器组
 */
export interface CreateUEcHolderResponse {
    /**
     * 容器组资源id
     */
    ResourceId?: string;
}
/**
 * CreateUEcSubnet - 创建子网
 */
export interface CreateUEcSubnetRequest {
    /**
     * 机房ID
     */
    IdcId: string;
    /**
     * 子网cidr
     */
    CIDR: string;
    /**
     * 子网名称
     */
    SubnetName?: string;
    /**
     * 备注
     */
    Comment?: string;
}
/**
 * CreateUEcSubnet - 创建子网
 */
export interface CreateUEcSubnetResponse {
    /**
     * 子网ID
     */
    SubnetId: string;
}
/**
 * CreateUEcVHost - 创建虚拟机v2.0
 */
export interface CreateUEcVHostRequest {
    /**
     * 机房id
     */
    IdcId: string;
    /**
     * cpu核心数
     */
    CpuCore: number;
    /**
     * 内存大小，单位GB
     */
    MemSize: number;
    /**
     * 数据盘大小，单位GB
     */
    DiskSize: number;
    /**
     * 镜像ID
     */
    ImageId: string;
    /**
     * 节点带宽限制，单位Mbs
     */
    NetLimit: number;
    /**
     * 节点名称
     */
    NodeName?: string;
    /**
     * 系统盘大小，单位GB， 默认20GB
     */
    SysDiskSize?: number;
    /**
     * 账户名，默认root
     */
    AccountName?: string;
    /**
     * 密码
     */
    PassWord?: string;
    /**
     * 创建节点数量，默认1
     */
    NodeCount?: number;
    /**
     * 付费方式，1按时，2按月，3按年，默认2
     */
    ChargeType?: number;
    /**
     * 月数或者年数，0计费到月底， 默认0
     */
    ChargeQuantity?: number;
    /**
     * 子网ID
     */
    SubnetId?: string;
    /**
     * 产品类型：normal（经济型），hf（标准型）,g(Gpu型)
     */
    ProductType?: string;
    /**
     * 外网防护墙规则组，默认
     */
    FirewallId?: string;
    /**
     * 运营商（1-电信，2-联通，4移动）
     */
    Isp?: number[];
    /**
     * 是否需要外网ip（no-否）
     */
    IsNeedOuterIp?: string;
    /**
     * Gpu卡核心数。仅Gpu机型支持此字段
     */
    Gpu?: number;
    /**
     * Gpu类型，枚举值["T4S"],ProductType为G时必填
     */
    GpuType?: string;
}
/**
 * CreateUEcVHost - 创建虚拟机v2.0
 */
export interface CreateUEcVHostResponse {
    /**
     * 节点id（详情参考NodeList）
     */
    NodeList: {
        /**
         * 虚拟机资源id
         */
        NodeId?: string;
    }[];
}
/**
 * DeleteUEcCustomImage - 删除UEDN客户自定义镜像
 */
export interface DeleteUEcCustomImageRequest {
    /**
     * 镜像ID
     */
    ImageId: string;
    /**
     * 机房ID，带机房ID表示只删除指定机房镜像
     */
    IdcId?: string;
}
/**
 * DeleteUEcCustomImage - 删除UEDN客户自定义镜像
 */
export interface DeleteUEcCustomImageResponse {
    /**
     * 镜像ID
     */
    ImageId: number;
}
/**
 * DeleteUEcHolder - 删除容器组
 */
export interface DeleteUEcHolderRequest {
    /**
     * 容器组资源id，n为0，1，2...
     */
    HolderId: string[];
}
/**
 * DeleteUEcHolder - 删除容器组
 */
export interface DeleteUEcHolderResponse {
}
/**
 * DeleteUEcSubnet - 删除子网
 */
export interface DeleteUEcSubnetRequest {
    /**
     * 子网ID
     */
    SubnetId: string;
}
/**
 * DeleteUEcSubnet - 删除子网
 */
export interface DeleteUEcSubnetResponse {
}
/**
 * DeleteUEcVHost - 删除vhost虚拟机 v2.0
 */
export interface DeleteUEcVHostRequest {
    /**
     * 节点id
     */
    NodeId: string[];
}
/**
 * DeleteUEcVHost - 删除vhost虚拟机 v2.0
 */
export interface DeleteUEcVHostResponse {
}
/**
 * DescribeUEcFirewall - 获取防火墙信息
 */
export interface DescribeUEcFirewallRequest {
    /**
     * 防火墙ID，默认为返回所有防火墙
     */
    FirewallId?: string;
    /**
     * 绑定防火墙组的虚拟机资源ID
     */
    ResourceId?: string;
    /**
     * 返回数据长度，默认为20
     */
    Limit?: number;
    /**
     * 列表起始位置偏移量，默认为0
     */
    Offset?: number;
}
/**
 * DescribeUEcFirewall - 获取防火墙信息
 */
export interface DescribeUEcFirewallResponse {
    /**
     * 防火墙组详细信息，参见 FirewallInfo
     */
    FirewallSet?: {
        /**
         * 防火墙Id
         */
        FirewallId: string;
        /**
         * 防火墙名称
         */
        Name: string;
        /**
         * 创建时间
         */
        CreateTime: number;
        /**
         * 防火墙规则组，详情参见RuleInfo
         */
        Rule: {
            /**
             * 协议，可选值：TCP，UDP，ICMP
             */
            ProtocolType: string;
            /**
             * 端口，范围用"-"符号分隔，如：1-65535
             */
            Port: string;
            /**
             * 源ip
             */
            SrcIp: string;
            /**
             * ACCEPT（接受）和DROP（拒绝）
             */
            Action: string;
            /**
             * 优先级：HIGH（高），MEDIUM（中），LOW（低）
             */
            Priority: string;
            /**
             * 备注
             */
            Remark: string;
        }[];
        /**
         * 防火墙绑定资源数量
         */
        ResourceCount: number;
        /**
         * 防火墙组类型，枚举值为： "user defined", 用户自定义防火墙； "recommend web", 默认Web防火墙； "recommend non web", 默认非Web防火墙
         */
        Type: string;
        /**
         * 描述
         */
        Remark?: string;
    }[];
    /**
     * 满足条件的节点总数
     */
    TotalCount?: number;
}
/**
 * DescribeUEcFirewallResource - 防火墙绑定的资源列表
 */
export interface DescribeUEcFirewallResourceRequest {
    /**
     * 防火墙Id
     */
    FirewallId: string;
}
/**
 * DescribeUEcFirewallResource - 防火墙绑定的资源列表
 */
export interface DescribeUEcFirewallResourceResponse {
    /**
     * 资源列表，详情参见ResourceInfo
     */
    ResourceSet: {
        /**
         * 资源Id
         */
        ResourceId: string;
        /**
         * 节点公网Ip列表
         */
        PublicIpList: string[];
        /**
         * 节点名称
         */
        Name: string;
        /**
         * 节点状态，1部署中，2待启动，3启动中，4运行中，5正在停止，6已停止，7正在更新，8正在重启，9正在删除， 10已经删除,11异常
         */
        State: number;
        /**
         * 节点备注
         */
        Remark?: string;
    }[];
    /**
     * 资源总数
     */
    TotalCount: number;
}
/**
 * DescribeUEcHolder - 获得容器组信息
 */
export interface DescribeUEcHolderRequest {
    /**
     * 容器组资源id
     */
    HolderId?: string[];
    /**
     * 返回数据长度，默认为20，非负整数
     */
    Limit?: number;
    /**
     * 列表起始位置偏移量，默认为0。非负整数
     */
    Offset?: number;
}
/**
 * DescribeUEcHolder - 获得容器组信息
 */
export interface DescribeUEcHolderResponse {
    /**
     * 容器组列表（详情参考HolderList）
     */
    HolderList: {
        /**
         * 容器组资源id
         */
        ResourceId?: string;
        /**
         * 容器组名称
         */
        HolderName?: string;
        /**
         * 容器组子网id
         */
        SubnetId?: string;
        /**
         * 容器组内网ip
         */
        InnerIp?: string;
        /**
         * 容器组外网ip集合（详情参考IpList）
         */
        IpList?: {
            /**
             * 外网ip
             */
            Ip?: string;
            /**
             * 运营商
             */
            Isp?: string;
        }[];
        /**
         * 容器组运行状态0：初始化；1：拉取镜像；2：启动中；3：运行中；4：错误；5：正在重启；6：正在删除；7：已经删除；8：容器运行错误；9：启动失败；99：异常
         */
        State?: number;
        /**
         * 创建时间
         */
        CreateTime?: number;
        /**
         * 过期时间
         */
        ExpireTime?: number;
        /**
         * 线路类型（运营商类型： 0-其它, 1-一线城市单线,2-二线城市单线, 3-全国教育网, 4-全国三通）
         */
        Type?: number;
        /**
         * 机房id
         */
        IdcId?: string;
        /**
         * 机房名称
         */
        OcName?: string;
        /**
         * 省份名称
         */
        Province?: string;
        /**
         * 城市名称
         */
        City?: string;
        /**
         * 0：总是；1：失败是；2：永不
         */
        RestartStrategy?: number;
        /**
         * 容器数量
         */
        DockerCount?: number;
        /**
         * 容器信息（详情参考DockerInfo）
         */
        DockerInfo?: {
            /**
             * CPU核数（/核）精度0.1核
             */
            CpuCores?: number;
            /**
             * 内存大小（Gi）
             */
            MemSize?: number;
            /**
             * 容器名称
             */
            Name?: string;
            /**
             * 容器状态，0：初始化；1：拉取镜像；2：拉取镜像失败；3：启动中；4：运行中；5：正在停止；6：已停止；7：已删除；8：镜像拉取成功；9：启动失败；99：异常
             */
            State?: number;
            /**
             * 镜像名称
             */
            ImageName?: string;
            /**
             * 工作目录
             */
            WorkDir?: string;
            /**
             * 命令
             */
            Command?: string;
            /**
             * 参数
             */
            Args?: string;
            /**
             * 环境变量（详情参考EnvList）
             */
            EnvList?: {
                /**
                 * 环境变量key值
                 */
                Key?: string;
                /**
                 * 环境变量Value值
                 */
                Value?: string;
            }[];
            /**
             * 容器配置字典（详情参考CfgDictList）
             */
            CfgDictList?: {
                /**
                 * 名称
                 */
                Name?: string;
                /**
                 * 挂载路径
                 */
                MountPath?: string;
                /**
                 * 资源id
                 */
                ResourceId?: string;
            }[];
        }[];
        /**
         * 机器类型（normal经济型，hf标准型）
         */
        ProductType?: string;
        /**
         * 外网绑定的带宽
         */
        NetLimit?: number;
        /**
         * 外网防火墙id
         */
        FirewallId?: string;
        /**
         * 存储卷信息（详情参考StorVolumeInfo）
         */
        StorVolumeInfo?: {
            /**
             * 名称
             */
            Name?: string;
            /**
             * 资源id
             */
            ResourceId?: string;
            /**
             * 挂载点
             */
            MountPoint?: string;
            /**
             * 容量（单位GB）
             */
            DiskSize?: number;
        }[];
        /**
         * 存储卷数量
         */
        StorVolumeCount?: number;
        /**
         * 容器组镜像密钥列表（详情参考ImageList）
         */
        ImageList?: {
            /**
             * 仓库地址
             */
            StoreAddr?: string;
            /**
             * 用户名称
             */
            UserName?: string;
            /**
             * 镜像密钥
             */
            ImageKey?: string;
        }[];
    }[];
    /**
     * 满足条件的容器组总数
     */
    TotalCount: number;
}
/**
 * DescribeUEcHolderIDC - 获取容器组机房信息
 */
export interface DescribeUEcHolderIDCRequest {
    /**
     * 容器组Cpu核数
     */
    Cpu: number;
    /**
     * 容器组内存大小（单位MB）
     */
    Memory: number;
    /**
     * Idc机房id。默认全部机房
     */
    IdcId?: string[];
    /**
     * 0-其它, 1-一线城市单线,2-二线城市单线, 3-全国教育网, 4-全国三通
     */
    Type?: number;
    /**
     * 产品类型，normal标准型，hf高性能型
     */
    ProductType?: string;
}
/**
 * DescribeUEcHolderIDC - 获取容器组机房信息
 */
export interface DescribeUEcHolderIDCResponse {
    /**
     * 机房列表，具体参考下面IdcInfo
     */
    IdcList: {
        /**
         * 机房ID
         */
        IdcId?: string;
        /**
         * 机房名称
         */
        Name?: string;
        /**
         * 运营商
         */
        Isp?: string;
        /**
         * 省份
         */
        Province?: string;
        /**
         * 城市
         */
        City?: string;
        /**
         * 运营商类型：0-其它, 1-一线城市单线,2-二线城市单线, 3-全国教育网, 4-全国三通
         */
        Type?: number;
        /**
         * 机房可创建节点最大数量
         */
        MaxNodeCnt?: number;
    }[];
}
/**
 * DescribeUEcIDC - 获取IDC机房列表
 */
export interface DescribeUEcIDCRequest {
    /**
     * 节点cpu核数
     */
    Cpu: number;
    /**
     * 节点内存大小， 单位GB
     */
    Memory: number;
    /**
     * Idc机房id。默认全部机房
     */
    IdcId?: string[];
    /**
     * 0-其它, 1-一线城市单线,2-二线城市单线, 3-全国教育网, 4-全国三通
     */
    Type?: number;
    /**
     * 产品类型：normal（经济型），hf（标准型）,g(GPU型)
     */
    ProductType?: string;
    /**
     * Gpu卡核心数
     */
    Gpu?: number;
}
/**
 * DescribeUEcIDC - 获取IDC机房列表
 */
export interface DescribeUEcIDCResponse {
    /**
     * 获取的机房信息，具体参考下面IdcInfo
     */
    IdcList?: {
        /**
         * 机房ID
         */
        IdcId?: string;
        /**
         * 机房名称
         */
        Name?: string;
        /**
         * 运营商
         */
        Isp?: string;
        /**
         * 省份
         */
        Province?: string;
        /**
         * 城市
         */
        City?: string;
        /**
         * 运营商类型：0-其它, 1-一线城市单线,2-二线城市单线, 3-全国教育网, 4-全国三通
         */
        Type?: number;
        /**
         * 机房可创建节点最大数量
         */
        MaxNodeCnt?: number;
    }[];
}
/**
 * DescribeUEcSubnet - 获取子网列表
 */
export interface DescribeUEcSubnetRequest {
    /**
     * 机房ID
     */
    IdcId?: string;
    /**
     * 子网ID
     */
    SubnetId?: string;
}
/**
 * DescribeUEcSubnet - 获取子网列表
 */
export interface DescribeUEcSubnetResponse {
    /**
     * 子网信息列表
     */
    SubnetList?: {
        /**
         * 子网ID
         */
        SubnetId: string;
        /**
         * 子网名称
         */
        SubnetName: string;
        /**
         * 机房ID
         */
        IdcId: string;
        /**
         * 子网cidr
         */
        CIDR: string;
        /**
         * 创建时间
         */
        CreateTime: number;
        /**
         * 备注
         */
        Comment: string;
        /**
         * 总ip数
         */
        TotalIpCnt: number;
        /**
         * 可用ip数
         */
        AvailableIPCnt: number;
    }[];
}
/**
 * DescribeUEcVHost - 获取虚拟机列表 2.0
 */
export interface DescribeUEcVHostRequest {
    /**
     * Idc机房id。默认全部机房
     */
    IdcId?: string[];
    /**
     * 节点id，创建节点时生成的id。默认全部节点
     */
    NodeId?: string[];
    /**
     * 数据偏移量，默认0，非负整数
     */
    Offset?: number;
    /**
     * 返回数据长度， 默认20，非负整数
     */
    Limit?: number;
}
/**
 * DescribeUEcVHost - 获取虚拟机列表 2.0
 */
export interface DescribeUEcVHostResponse {
    /**
     * 满足条件的节点总数
     */
    TotalCount?: number;
    /**
     * 节点列表
     */
    NodeList?: {
        /**
         * 节点名称
         */
        NodeName?: string;
        /**
         * 节点ID
         */
        NodeId?: string;
        /**
         * Cpu核数
         */
        CoreNum?: number;
        /**
         * 节点内存大小，单位GB
         */
        MemSize?: number;
        /**
         * 系统盘大小， 单位GB
         */
        SysDiskSize?: number;
        /**
         * 数据盘大小， 单位GB
         */
        DiskSize?: number;
        /**
         * 节点状态，1部署中，2待启动，3启动中，4运行中，5正在停止，6已停止，7正在更新，8正在重启，9正在删除， 10已经删除,11异常
         */
        State?: number;
        /**
         * 节点带宽限制， 单位Mbs
         */
        NetLimit?: number;
        /**
         * 机房ID
         */
        IdcId?: string;
        /**
         * 机房名称
         */
        OcName?: string;
        /**
         * 省份
         */
        Province?: string;
        /**
         * 城市
         */
        City?: string;
        /**
         * 运营商类型： 0-其它, 1-一线城市单线,2-二线城市单线, 3-全国教育网, 4-全国三通
         */
        Type?: number;
        /**
         * 付费类型：1按时, 2按月,3按年
         */
        ChargeType?: number;
        /**
         * 创建时间
         */
        CreateTime?: number;
        /**
         * 过期时间
         */
        ExpiredTime?: number;
        /**
         * 镜像名称
         */
        ImageName?: string;
        /**
         * 外网ip集合（详情参考NodeIpList）
         */
        NodeIpList?: {
            /**
             * 外网ip
             */
            Ip?: string;
            /**
             * 运营商
             */
            Isp?: string;
            /**
             * 运营商名称
             */
            IspName?: string;
        }[];
        /**
         * 防火墙Id
         */
        FirewallId?: string;
        /**
         * 机器类型(normal-经济型,hf-标准型,g-GPU型)
         */
        ProductType?: string;
        /**
         * 内网ip列表
         */
        InnerIps?: string[];
    }[];
}
/**
 * DescribeUEcVHostISP - 获取虚拟机运营商信息
 */
export interface DescribeUEcVHostISPRequest {
    /**
     * 运营商名称
     */
    IspName?: string;
    /**
     * 省份
     */
    Province?: string;
    /**
     * 城市
     */
    City?: string;
}
/**
 * DescribeUEcVHostISP - 获取虚拟机运营商信息
 */
export interface DescribeUEcVHostISPResponse {
    /**
     * 节点运营商列表
     */
    NodeIspList: {
        /**
         * 省份
         */
        Province?: string;
        /**
         * 城市
         */
        City?: string;
        /**
         * 线路类型
         */
        LineType?: string;
        /**
         * 机房运营商名称
         */
        IspName?: string;
        /**
         * 机房名称
         */
        IdcName?: string;
    }[];
}
/**
 * GetUEcHolderLog - 获取单个容器日志
 */
export interface GetUEcHolderLogRequest {
    /**
     * 容器名称
     */
    PackName: string;
    /**
     * 容器组资源id
     */
    ResourceId: string;
}
/**
 * GetUEcHolderLog - 获取单个容器日志
 */
export interface GetUEcHolderLogResponse {
    /**
     * 返回的日志数据
     */
    Data?: string;
}
/**
 * GetUEcHolderMetrics - 获取容器（CPU利用率，带宽，内存）数据
 */
export interface GetUEcHolderMetricsRequest {
    /**
     * 容器名称
     */
    PackName: string;
    /**
     * n为0 CPU利用率, 1内存使用率, 2网卡出带宽, 3网卡入带宽, 4网卡出包数, 5网卡入包数
     */
    Type: string[];
    /**
     * 容器组资源id
     */
    ResourceId: string;
    /**
     * 开始时间
     */
    StartTime?: number;
    /**
     * 结束时间
     */
    EndTime?: number;
}
/**
 * GetUEcHolderMetrics - 获取容器（CPU利用率，带宽，内存）数据
 */
export interface GetUEcHolderMetricsResponse {
    /**
     * 获得的监控数据（详情参考MetricisDataSet）
     */
    DataSets: {
        /**
         * cpu利用率（详情参考MonitorInfo）
         */
        CPUUtilization?: {
            /**
             * 时间戳
             */
            TimeStamp: number;
            /**
             * 值
             */
            Value: number;
        }[];
        /**
         * 内存使用率（详情参考MonitorInfo）
         */
        MemUtilization?: {
            /**
             * 时间戳
             */
            TimeStamp: number;
            /**
             * 值
             */
            Value: number;
        }[];
        /**
         * 网卡出包数（详情参考MonitorInfo）
         */
        NetPacketOut?: {
            /**
             * 时间戳
             */
            TimeStamp: number;
            /**
             * 值
             */
            Value: number;
        }[];
        /**
         * 网卡入包数（详情参考MonitorInfo）
         */
        NetPacketIn?: {
            /**
             * 时间戳
             */
            TimeStamp: number;
            /**
             * 值
             */
            Value: number;
        }[];
        /**
         * 网卡出带宽（详情参考MonitorInfo）
         */
        NICOut?: {
            /**
             * 时间戳
             */
            TimeStamp: number;
            /**
             * 值
             */
            Value: number;
        }[];
        /**
         * 网卡入带宽（详情参考MonitorInfo）
         */
        NICIn?: {
            /**
             * 时间戳
             */
            TimeStamp: number;
            /**
             * 值
             */
            Value: number;
        }[];
    };
}
/**
 * GetUEcIDCCutInfo - 获取机房割接信息
 */
export interface GetUEcIDCCutInfoRequest {
}
/**
 * GetUEcIDCCutInfo - 获取机房割接信息
 */
export interface GetUEcIDCCutInfoResponse {
    /**
     * 机房割接信息
     */
    IDCCutInfo: {
        /**
         * 机房名称
         */
        IDCName?: string;
        /**
         * 省份
         */
        Province?: string;
        /**
         * 城市
         */
        City?: string;
        /**
         * 割接开始时间
         */
        StartTime?: number;
        /**
         * 割接结束时间
         */
        EndTime?: number;
        /**
         * 割接类型（中断、抖动、断电）
         */
        CutType?: string;
        /**
         * 受影响的资源信息列表
         */
        ResourceSet?: {
            /**
             * 节点id
             */
            NodeId?: string;
            /**
             * 机器外网ip集合
             */
            OuterIps?: string[];
        }[];
    }[];
    /**
     * 满足条件的机房总数
     */
    TotalCount?: number;
}
/**
 * GetUEcIDCVHostData - 获取机房虚拟机监控数据
 */
export interface GetUEcIDCVHostDataRequest {
    /**
     * 节点资源id；n为0，1，2...
     */
    NodeId: string[];
    /**
     * 监控数据类型；n为0,1,2,3,4...,9
     */
    Type: string[];
    /**
     * 开始时间戳
     */
    BeginTime?: number;
    /**
     * 结束时间戳
     */
    EndTime?: number;
}
/**
 * GetUEcIDCVHostData - 获取机房虚拟机监控数据
 */
export interface GetUEcIDCVHostDataResponse {
    /**
     * 监控数据集合
     */
    DataSets: {
        /**
         * cpu使用率
         */
        CPUUtilization?: {
            /**
             * 时间戳
             */
            TimeStamp: number;
            /**
             * 值
             */
            Value: number;
        }[];
        /**
         * 内存使用率
         */
        MemUtilization?: {
            /**
             * 时间戳
             */
            TimeStamp: number;
            /**
             * 值
             */
            Value: number;
        }[];
        /**
         * 网卡出带宽
         */
        NICOut?: {
            /**
             * 时间戳
             */
            TimeStamp: number;
            /**
             * 值
             */
            Value: number;
        }[];
        /**
         * 网卡入带宽
         */
        NICIn?: {
            /**
             * 时间戳
             */
            TimeStamp: number;
            /**
             * 值
             */
            Value: number;
        }[];
        /**
         * 网卡出包量
         */
        NetPacketOut?: {
            /**
             * 时间戳
             */
            TimeStamp: number;
            /**
             * 值
             */
            Value: number;
        }[];
        /**
         * 网卡入包量
         */
        NetPacketIn?: {
            /**
             * 时间戳
             */
            TimeStamp: number;
            /**
             * 值
             */
            Value: number;
        }[];
        /**
         * 磁盘读取量
         */
        IORead?: {
            /**
             * 时间戳
             */
            TimeStamp: number;
            /**
             * 值
             */
            Value: number;
        }[];
        /**
         * 磁盘写入量
         */
        IOWrite?: {
            /**
             * 时间戳
             */
            TimeStamp: number;
            /**
             * 值
             */
            Value: number;
        }[];
        /**
         * 磁盘读取次数
         */
        DiskReadOps?: {
            /**
             * 时间戳
             */
            TimeStamp: number;
            /**
             * 值
             */
            Value: number;
        }[];
        /**
         * 磁盘写入次数
         */
        DiskWriteOps?: {
            /**
             * 时间戳
             */
            TimeStamp: number;
            /**
             * 值
             */
            Value: number;
        }[];
    };
}
/**
 * GetUEcImage - uec2.0
 */
export interface GetUEcImageRequest {
    /**
     * 镜像类型：1标准镜像，2行业镜像，3自定义镜像
     */
    ImageType?: string;
    /**
     * 数据偏移量，默认0，非负整数
     */
    Offset?: number;
    /**
     * 返回数据长度， 默认20，非负整数
     */
    Limit?: number;
}
/**
 * GetUEcImage - uec2.0
 */
export interface GetUEcImageResponse {
    /**
     * 获取的镜像信息，具体参考下面ImageInfo
     */
    ImageList?: {
        /**
         * 镜像ID
         */
        ImageId?: string;
        /**
         * 镜像名称
         */
        ImageName?: string;
        /**
         * 镜像类型：1标准镜像，2行业镜像，3自定义镜像
         */
        ImageType?: number;
        /**
         * 系统类型：unix, windows
         */
        OcType?: string;
        /**
         * 镜像描述
         */
        ImageDesc?: string;
        /**
         * 镜像状态：镜像状态 1可用，2不可用，3制作中
         */
        State?: number;
        /**
         * 镜像大小，单位GB
         */
        ImageSize?: number;
        /**
         * 镜像创建时间戳
         */
        CreateTime?: number;
        /**
         * 部署详情列表
         */
        DeployInfoList?: {
            /**
             * 机房ID
             */
            IdcId?: string;
            /**
             * 镜像状态 1-可用, 2-不可用, 3-获取中, 4-转换中, 5-部署中
             */
            State?: number;
        }[];
        /**
         * 是否支持Gpu(1-支持,0-不支持)
         */
        Gpu?: number;
    }[];
    /**
     * 镜像总数
     */
    TotalCount?: number;
}
/**
 * GetUEcPodPrice - 获得容器组价格
 */
export interface GetUEcPodPriceRequest {
    /**
     * 机房id
     */
    IdcId: string;
    /**
     * 容器组总Cpu核心数
     */
    CpuCore?: number;
    /**
     * 容器组总内存大小（单位M）
     */
    MemSize?: number;
    /**
     * 支付类型（2按月，3按年，默认2）
     */
    ChargeType?: number;
    /**
     * 月数或年数（默认值：1，当支付类型为按月时，默认值为0）
     */
    ChargeQuantity?: number;
    /**
     * 产品类型（normal：标准型，hf：高性能型，默认：normal）
     */
    ProductType?: string;
    /**
     * 是否绑定外网IP（yes：是，no：否，默认：no）
     */
    ElasticIp?: string;
    /**
     * 绑定的带宽，默认0，当绑定外网IP时默认1（单位M）
     */
    Bandwidth?: number;
}
/**
 * GetUEcPodPrice - 获得容器组价格
 */
export interface GetUEcPodPriceResponse {
    /**
     * 容器组价格
     */
    HolderPrice: number;
    /**
     * IP和带宽价格
     */
    IpPrice: number;
}
/**
 * GetUEcUpgradePrice - 获取虚拟机调整差价
 */
export interface GetUEcUpgradePriceRequest {
    /**
     * 虚拟机资源ID
     */
    NodeId: string;
    /**
     * cpu核心数
     */
    CpuCore?: number;
    /**
     * 内存大小，单位GB
     */
    MemSize?: number;
    /**
     * 系统盘大小，单位GB
     */
    SysDiskSize?: number;
    /**
     * 数据盘大小，单位GB
     */
    DiskSize?: number;
    /**
     * 节点带宽限制，单位Mbs
     */
    NetLimit?: number;
}
/**
 * GetUEcUpgradePrice - 获取虚拟机调整差价
 */
export interface GetUEcUpgradePriceResponse {
    /**
     * 规格调整差价
     */
    Price?: number;
}
/**
 * GetUEcVHostData - 获取虚拟机监控数据
 */
export interface GetUEcVHostDataRequest {
    /**
     * 节点id
     */
    NodeId: string;
    /**
     * 0CPU使用率, 1内存使用率, 2 网卡出流量, 3网卡入流量, 4网卡出包量, 5网卡入包量, 6磁盘读流量, 7磁盘写流量, 8磁盘读次数, 9磁盘写次数
     */
    Type: number[];
    /**
     * 查询起始时间
     */
    BeginTime?: number;
    /**
     * 查询结束时间
     */
    EndTime?: number;
}
/**
 * GetUEcVHostData - 获取虚拟机监控数据
 */
export interface GetUEcVHostDataResponse {
    /**
     * 带宽数据实例集合
     */
    DataSets?: {
        /**
         * cpu使用率
         */
        CPUUtilization?: {
            /**
             * 时间戳
             */
            TimeStamp: number;
            /**
             * 值
             */
            Value: number;
        }[];
        /**
         * 内存使用率
         */
        MemUtilization?: {
            /**
             * 时间戳
             */
            TimeStamp: number;
            /**
             * 值
             */
            Value: number;
        }[];
        /**
         * 网卡出带宽
         */
        NICOut?: {
            /**
             * 时间戳
             */
            TimeStamp: number;
            /**
             * 值
             */
            Value: number;
        }[];
        /**
         * 网卡入带宽
         */
        NICIn?: {
            /**
             * 时间戳
             */
            TimeStamp: number;
            /**
             * 值
             */
            Value: number;
        }[];
        /**
         * 网卡出包量
         */
        NetPacketOut?: {
            /**
             * 时间戳
             */
            TimeStamp: number;
            /**
             * 值
             */
            Value: number;
        }[];
        /**
         * 网卡入包量
         */
        NetPacketIn?: {
            /**
             * 时间戳
             */
            TimeStamp: number;
            /**
             * 值
             */
            Value: number;
        }[];
        /**
         * 磁盘读取量
         */
        IORead?: {
            /**
             * 时间戳
             */
            TimeStamp: number;
            /**
             * 值
             */
            Value: number;
        }[];
        /**
         * 磁盘写入量
         */
        IOWrite?: {
            /**
             * 时间戳
             */
            TimeStamp: number;
            /**
             * 值
             */
            Value: number;
        }[];
        /**
         * 磁盘读取次数
         */
        DiskReadOps?: {
            /**
             * 时间戳
             */
            TimeStamp: number;
            /**
             * 值
             */
            Value: number;
        }[];
        /**
         * 磁盘写入次数
         */
        DiskWriteOps?: {
            /**
             * 时间戳
             */
            TimeStamp: number;
            /**
             * 值
             */
            Value: number;
        }[];
    };
}
/**
 * GetUEcVHostPrice - 获取虚拟机价格
 */
export interface GetUEcVHostPriceRequest {
    /**
     * 机房Id
     */
    IdcId: string;
    /**
     * 节点数量，默认1
     */
    NodeCount?: number;
    /**
     * CPU核数
     */
    CpuCore?: number;
    /**
     * 内存大小，单位GB
     */
    MemSize?: number;
    /**
     * 系统盘大小，单位GB
     */
    SysDiskSize?: number;
    /**
     * 数据盘大小，单位GB
     */
    DiskSize?: number;
    /**
     * 网络带宽限速，单位Mbs
     */
    NetLimit?: number;
    /**
     * 付费方式，1按时，2按月，3按年，默认2
     */
    ChargeType?: number;
    /**
     * 月数或者年数，0计费到月底， 默认0
     */
    ChargeQuantity?: number;
    /**
     * 产品类型：normal（经济型），hf（标准型），g(Gpu型),默认normal
     */
    ProductType?: string;
    /**
     * 外网IP的数量，默认1
     */
    IpCount?: number;
    /**
     * Gpu卡核心数。仅Gpu机型支持此字段
     */
    Gpu?: number;
    /**
     * Gpu类型，枚举值["T4"],ProductType为g时必填
     */
    GpuType?: string;
}
/**
 * GetUEcVHostPrice - 获取虚拟机价格
 */
export interface GetUEcVHostPriceResponse {
    /**
     * 节点价格
     */
    NodePrice?: number;
    /**
     * Ip和带宽价格
     */
    IpPrice?: number;
}
/**
 * ImportUEcCustomImage - 导入自定义镜像
 */
export interface ImportUEcCustomImageRequest {
    /**
     * 镜像需要导入机房，默认分发到所有机房
     */
    IdcId?: string[];
    /**
     * 镜像Id，不传参表示新导入镜像，传参表示已有镜像分发到指定机房
     */
    ImageId?: string;
    /**
     * 镜像名称，不带镜像ID时必填
     */
    ImageName?: string;
    /**
     * UFile镜像文件下载地址，不带镜像ID时必填
     */
    UFileUrl?: string;
    /**
     * 操作系统平台，linux、windows(当前版本暂不支持windows)，不带镜像ID时必填
     */
    OsType?: string;
    /**
     * 镜像格式，可选RAW、qcow2， 不带镜像ID时必填
     */
    Format?: string;
    /**
     * 镜像描述
     */
    ImageDesc?: string;
}
/**
 * ImportUEcCustomImage - 导入自定义镜像
 */
export interface ImportUEcCustomImageResponse {
    /**
     * 镜像Id
     */
    ImageId: string;
}
/**
 * LoginUEcDocker - 登录容器
 */
export interface LoginUEcDockerRequest {
    /**
     * 容器组资源id
     */
    ResourceId: string;
    /**
     * 容器名称
     */
    Name: string;
}
/**
 * LoginUEcDocker - 登录容器
 */
export interface LoginUEcDockerResponse {
    /**
     * 返回的token
     */
    SessionId: string;
    /**
     * 登录地址
     */
    Link?: string;
    /**
     * 登录端口
     */
    LinkPort?: number;
}
/**
 * ModifyUEcBandwidth - 修改节点带宽限制
 */
export interface ModifyUEcBandwidthRequest {
    /**
     * 节点Id
     */
    NodeId: string;
    /**
     * 节点带宽限制，单位Mbs
     */
    NetLimit: string;
}
/**
 * ModifyUEcBandwidth - 修改节点带宽限制
 */
export interface ModifyUEcBandwidthResponse {
}
/**
 * ModifyUEcHolderName - 修改容器组名称
 */
export interface ModifyUEcHolderNameRequest {
    /**
     * 容器组资源id
     */
    ResourceId: string;
    /**
     * 容器组名称
     */
    Name: string;
}
/**
 * ModifyUEcHolderName - 修改容器组名称
 */
export interface ModifyUEcHolderNameResponse {
}
/**
 * ModifyUEcImageName - 修改镜像名称
 */
export interface ModifyUEcImageNameRequest {
    /**
     * 镜像ID
     */
    ImageId: string;
    /**
     * 镜像名称
     */
    ImageName: string;
    /**
     * 镜像描述
     */
    ImageDesc?: string;
}
/**
 * ModifyUEcImageName - 修改镜像名称
 */
export interface ModifyUEcImageNameResponse {
}
/**
 * PoweroffUEcVHost - 虚拟机断电
 */
export interface PoweroffUEcVHostRequest {
    /**
     * 虚拟机资源ID
     */
    NodeId: string[];
}
/**
 * PoweroffUEcVHost - 虚拟机断电
 */
export interface PoweroffUEcVHostResponse {
}
/**
 * ReinstallUEcVHost - 虚拟机重装系统
 */
export interface ReinstallUEcVHostRequest {
    /**
     * 虚拟机资源ID
     */
    NodeId: string;
    /**
     * 镜像ID
     */
    ImageId: string;
    /**
     * 是否保留数据盘数据， 0-不保留，1-保留，默认为1
     */
    KeepData?: number;
    /**
     * 节点密码
     */
    Password?: string;
    /**
     * 系统盘大小，单位GB
     */
    SysDiskSize?: number;
}
/**
 * ReinstallUEcVHost - 虚拟机重装系统
 */
export interface ReinstallUEcVHostResponse {
}
/**
 * RestartUEcHolder - 重启容器组
 */
export interface RestartUEcHolderRequest {
    /**
     * 容器组资源id，n为0，1，2...
     */
    ResourceId: string[];
}
/**
 * RestartUEcHolder - 重启容器组
 */
export interface RestartUEcHolderResponse {
}
/**
 * RestartUEcVHost - 重启虚拟机v2.0
 */
export interface RestartUEcVHostRequest {
    /**
     * 节点id
     */
    NodeId: string[];
}
/**
 * RestartUEcVHost - 重启虚拟机v2.0
 */
export interface RestartUEcVHostResponse {
}
/**
 * StartUEcVHost - 启动UEC虚拟机
 */
export interface StartUEcVHostRequest {
    /**
     * 虚拟机资源ID
     */
    NodeId: string[];
}
/**
 * StartUEcVHost - 启动UEC虚拟机
 */
export interface StartUEcVHostResponse {
}
/**
 * StopUEcVHost - 停止UEC虚拟机
 */
export interface StopUEcVHostRequest {
    /**
     * 虚拟机资源ID
     */
    NodeId: string[];
}
/**
 * StopUEcVHost - 停止UEC虚拟机
 */
export interface StopUEcVHostResponse {
}
/**
 * UnBindUEcFirewall - 解绑防火墙
 */
export interface UnBindUEcFirewallRequest {
    /**
     * 防火墙Id
     */
    FirewallId: string;
    /**
     * 节点Id或容器组资源id
     */
    ResourceId: string;
}
/**
 * UnBindUEcFirewall - 解绑防火墙
 */
export interface UnBindUEcFirewallResponse {
}
/**
 * UpdateUEcFirewall - 更新防火墙信息，新增和删除规则
 */
export interface UpdateUEcFirewallRequest {
    /**
     * 防火墙Id
     */
    FirewallId: string;
    /**
     *
     */
    Rule?: {
        /**
         * 协议，可选值：TCP，UDP，ICMP
         */
        ProtocolType: string;
        /**
         * 端口，范围用"-"符号分隔，如：1-65535
         */
        Port: string;
        /**
         * 源ip
         */
        SrcIp: string;
        /**
         * ACCEPT（接受）和DROP（拒绝）
         */
        Action: string;
        /**
         * 	优先级：HIGH（高），MEDIUM（中），LOW（低）
         */
        Priority: string;
        /**
         * 备注
         */
        Remark: string;
    }[];
}
/**
 * UpdateUEcFirewall - 更新防火墙信息，新增和删除规则
 */
export interface UpdateUEcFirewallResponse {
}
/**
 * UpdateUEcFirewallAttribute - 更新防火墙名称及描述
 */
export interface UpdateUEcFirewallAttributeRequest {
    /**
     * 防火墙Id
     */
    FirewallId: string;
    /**
     * 防火墙名称
     */
    Name?: string;
    /**
     * 描述
     */
    Remark?: string;
}
/**
 * UpdateUEcFirewallAttribute - 更新防火墙名称及描述
 */
export interface UpdateUEcFirewallAttributeResponse {
}
/**
 * UpdateUEcSubnet - 更新子网信息
 */
export interface UpdateUEcSubnetRequest {
    /**
     * 子网ID
     */
    SubnetId: string;
    /**
     * 子网名称
     */
    SubnetName?: string;
    /**
     * 备注
     */
    Comment?: string;
}
/**
 * UpdateUEcSubnet - 更新子网信息
 */
export interface UpdateUEcSubnetResponse {
}
