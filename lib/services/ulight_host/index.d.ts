import Client from '../../core/client';
import { ConfigOptions } from '../../core/config';
import { CredentialOptions } from '../../core/credential';
/**
 * This client is used to call actions of **ulight_host** service
 */
export default class ULightHostClient extends Client {
    constructor({ config, credential, }: {
        config: ConfigOptions;
        credential: CredentialOptions;
    });
    /**
     * CheckULHostResourceCapacity - 检查轻量应用云主机资源余量
     *
     * See also: https://docs.ucloud.cn/api/ulighthost-api/check_ul_host_resource_capacity
     */
    checkULHostResourceCapacity(request?: CheckULHostResourceCapacityRequest): Promise<CheckULHostResourceCapacityResponse>;
    /**
     * CreateULHostInstance - 创建轻量应用云主机
     *
     * See also: https://docs.ucloud.cn/api/ulighthost-api/create_ul_host_instance
     */
    createULHostInstance(request?: CreateULHostInstanceRequest): Promise<CreateULHostInstanceResponse>;
    /**
     * DescribeULHostBundles - 获取轻量应用云主机套餐列表
     *
     * See also: https://docs.ucloud.cn/api/ulighthost-api/describe_ul_host_bundles
     */
    describeULHostBundles(request?: DescribeULHostBundlesRequest): Promise<DescribeULHostBundlesResponse>;
    /**
     * DescribeULHostImage - 获取指定数据中心镜像列表
     *
     * See also: https://docs.ucloud.cn/api/ulighthost-api/describe_ul_host_image
     */
    describeULHostImage(request?: DescribeULHostImageRequest): Promise<DescribeULHostImageResponse>;
    /**
     * DescribeULHostInstance - 获取轻量应用云主机列表
     *
     * See also: https://docs.ucloud.cn/api/ulighthost-api/describe_ul_host_instance
     */
    describeULHostInstance(request?: DescribeULHostInstanceRequest): Promise<DescribeULHostInstanceResponse>;
    /**
     * GetULHostInstancePrice - 获取轻量应用云主机套餐价格
     *
     * See also: https://docs.ucloud.cn/api/ulighthost-api/get_ul_host_instance_price
     */
    getULHostInstancePrice(request?: GetULHostInstancePriceRequest): Promise<GetULHostInstancePriceResponse>;
    /**
     * GetULHostRenewPrice - 获取主机续费价格
     *
     * See also: https://docs.ucloud.cn/api/ulighthost-api/get_ul_host_renew_price
     */
    getULHostRenewPrice(request?: GetULHostRenewPriceRequest): Promise<GetULHostRenewPriceResponse>;
    /**
     * ModifyULHostAttribute - 修改指定ULHost实例属性信息，包含名称和备注
     *
     * See also: https://docs.ucloud.cn/api/ulighthost-api/modify_ul_host_attribute
     */
    modifyULHostAttribute(request?: ModifyULHostAttributeRequest): Promise<ModifyULHostAttributeResponse>;
    /**
     * PoweroffULHostInstance - 直接关闭UHost实例电源，无需等待实例正常关闭。
     *
     * See also: https://docs.ucloud.cn/api/ulighthost-api/poweroff_ul_host_instance
     */
    poweroffULHostInstance(request?: PoweroffULHostInstanceRequest): Promise<PoweroffULHostInstanceResponse>;
    /**
     * RebootULHostInstance - 重新启动UHost实例。
     *
     * See also: https://docs.ucloud.cn/api/ulighthost-api/reboot_ul_host_instance
     */
    rebootULHostInstance(request?: RebootULHostInstanceRequest): Promise<RebootULHostInstanceResponse>;
    /**
     * ReinstallULHostInstance - 重装轻量应用云主机
     *
     * See also: https://docs.ucloud.cn/api/ulighthost-api/reinstall_ul_host_instance
     */
    reinstallULHostInstance(request?: ReinstallULHostInstanceRequest): Promise<ReinstallULHostInstanceResponse>;
    /**
     * ResetULHostInstancePassword - 重置轻量应用云主机管理员密码。
     *
     * See also: https://docs.ucloud.cn/api/ulighthost-api/reset_ul_host_instance_password
     */
    resetULHostInstancePassword(request?: ResetULHostInstancePasswordRequest): Promise<ResetULHostInstancePasswordResponse>;
    /**
     * StartULHostInstance - 启动处于关闭状态的UHost实例。
     *
     * See also: https://docs.ucloud.cn/api/ulighthost-api/start_ul_host_instance
     */
    startULHostInstance(request?: StartULHostInstanceRequest): Promise<StartULHostInstanceResponse>;
    /**
     * StopULHostInstance - 指停止处于运行状态的ULHost实例
     *
     * See also: https://docs.ucloud.cn/api/ulighthost-api/stop_ul_host_instance
     */
    stopULHostInstance(request?: StopULHostInstanceRequest): Promise<StopULHostInstanceResponse>;
    /**
     * TerminateULHostInstance - 删除指定数据中心的ULHost实例。
     *
     * See also: https://docs.ucloud.cn/api/ulighthost-api/terminate_ul_host_instance
     */
    terminateULHostInstance(request?: TerminateULHostInstanceRequest): Promise<TerminateULHostInstanceResponse>;
}
/**
 * CheckULHostResourceCapacity - 检查轻量应用云主机资源余量
 */
export interface CheckULHostResourceCapacityRequest {
    /**
     * 镜像ID。 请通过 [DescribeImage](describe_image.html)获取
     */
    ImageId: string;
    /**
     * 套餐ID。如："ulh.c1m1s40b30t800"
     */
    BundleId: string;
    /**
     * 轻量应用主机名称。默认：套餐ID。请遵照[[api:uhost-api:specification|字段规范]]设定实例名称。
     */
    Name?: string;
    /**
     * 计费模式。枚举值： \\ > Year，按年付费； \\ > Month，按月付费；\\ > ThirtyDay，30天期付费，跨境电商相关套餐使用此计费方式；默认：Month
     */
    ChargeType?: string;
    /**
     * 购买时长。默认：1。不支持购买到月末
     */
    Quantity?: number;
    /**
     * VPC ID。默认为当前地域的默认VPC。
     */
    VPCId?: string;
    /**
     * 子网 ID。默认为当前地域的默认子网。
     */
    SubnetId?: string;
    /**
     * 防火墙ID，默认：Web推荐防火墙。如何查询SecurityGroupId请参见 [DescribeFirewall](api/unet-api/describe_firewall.html)。
     */
    SecurityGroupId?: string;
    /**
     * 主机代金券ID。请通过DescribeCoupon接口查询，或登录用户中心查看
     */
    CouponId?: string;
}
/**
 * CheckULHostResourceCapacity - 检查轻量应用云主机资源余量
 */
export interface CheckULHostResourceCapacityResponse {
    /**
     * 资源是否充足
     */
    ResourceEnough: boolean;
}
/**
 * CreateULHostInstance - 创建轻量应用云主机
 */
export interface CreateULHostInstanceRequest {
    /**
     * 镜像ID。 请通过 [DescribeImage](describe_image.html)获取
     */
    ImageId: string;
    /**
     * 套餐ID。如："ulh.c1m1s40b30t800"
     */
    BundleId: string;
    /**
     * ULHost密码。请遵照[[api:uhost-api:specification|字段规范]]设定密码。密码需使用base64进行编码，举例如下：# echo -n Password1 | base64
     */
    Password: string;
    /**
     * 轻量应用主机名称。默认：套餐ID。请遵照[[api:uhost-api:specification|字段规范]]设定实例名称。
     */
    Name?: string;
    /**
     * 计费模式。枚举值： \\ > Year，按年付费； \\ > Month，按月付费；\\ > ThirtyDay，30天期付费，跨境电商相关套餐使用此计费方式；默认：Month
     */
    ChargeType?: string;
    /**
     * 购买时长。默认：1。不支持购买到月末
     */
    Quantity?: number;
    /**
     * VPC ID。默认为当前地域的默认VPC。
     */
    VPCId?: string;
    /**
     * 子网 ID。默认为当前地域的默认子网。
     */
    SubnetId?: string;
    /**
     * 防火墙ID，默认：Web推荐防火墙。如何查询SecurityGroupId请参见 [DescribeFirewall](api/unet-api/describe_firewall.html)。
     */
    SecurityGroupId?: string;
    /**
     * 主机代金券ID。请通过DescribeCoupon接口查询，或登录用户中心查看
     */
    CouponId?: string;
}
/**
 * CreateULHostInstance - 创建轻量应用云主机
 */
export interface CreateULHostInstanceResponse {
    /**
     * 实例ID
     */
    ULHostId: string;
}
/**
 * DescribeULHostBundles - 获取轻量应用云主机套餐列表
 */
export interface DescribeULHostBundlesRequest {
}
/**
 * DescribeULHostBundles - 获取轻量应用云主机套餐列表
 */
export interface DescribeULHostBundlesResponse {
    /**
     * 套餐列表
     */
    Bundles: {
        /**
         * 套餐ID。
         */
        BundleId?: string;
        /**
         * CPU核数。
         */
        CPU?: number;
        /**
         * 内存大小。单位：MB。
         */
        Memory?: number;
        /**
         * 系统盘大小。单位：GB。
         */
        SysDiskSpace?: number;
        /**
         * 外网带宽。单位：Mbps。
         */
        Bandwidth?: number;
        /**
         * 流量包大小。单位：GB。
         */
        TrafficPacket?: number;
    }[];
}
/**
 * DescribeULHostImage - 获取指定数据中心镜像列表
 */
export interface DescribeULHostImageRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone?: string;
    /**
     * 镜像类型。标准镜像：Base，应用镜像：App， 自定义镜像：Custom，默认返回所有类型
     */
    ImageType?: string;
    /**
     * 使用场景，当ImageType为"App"时生效。- Normal 常规专区- CrossBorder 跨境专区默认返回所有
     */
    Scene?: string;
    /**
     * 操作系统类型：Linux， Windows 默认返回所有类型
     */
    OsType?: string;
    /**
     * 镜像Id
     */
    ImageId?: string;
    /**
     * 镜像Id列表
     */
    ImageIds?: string[];
    /**
     * 业务组Id。默认：Default
     */
    Tag?: string;
    /**
     * 列表起始位置偏移量，默认为0
     */
    Offset?: number;
    /**
     * 返回数据长度，默认为20
     */
    Limit?: number;
}
/**
 * DescribeULHostImage - 获取指定数据中心镜像列表
 */
export interface DescribeULHostImageResponse {
    /**
     * 满足条件的镜像总数
     */
    TotalCount?: number;
    /**
     * 镜像列表详见 UHostImageSet
     */
    ImageSet?: {
        /**
         * 可用区，参见 [可用区列表](../summary/regionlist.html)
         */
        Zone?: string;
        /**
         * 镜像ID
         */
        ImageId?: string;
        /**
         * 镜像名称
         */
        ImageName?: string;
        /**
         * 用于控制台显示的名称
         */
        DisplayName?: string;
        /**
         * 业务组
         */
        Tag?: string;
        /**
         * 操作系统类型：Linux，Windows
         */
        OsType?: string;
        /**
         * 操作系统名称
         */
        OsName?: string;
        /**
         * 镜像类型 标准镜像：Base， 行业镜像：Business，自定义镜像：Custom
         */
        ImageType?: string;
        /**
         * 特殊状态标识，目前包含NetEnhnced（网络增强1.0）, NetEnhanced_Ultra（网络增强2.0）, NetEnhanced_Extreme（网络增强3.0）, HotPlug(热升级), GPU（GPU镜像）,CloudInit, IPv6（支持IPv6网络）,RssdAttachable（支持RSSD云盘）,Vgpu_AMD（支持AMD的vgpu）,Vgpu_NVIDIA（支持NVIDIA的vgpu）,Aarch64_Type（支持arm64架构）
         */
        Features?: string[];
        /**
         * 集成软件名称（仅行业镜像将返回这个值）
         */
        IntegratedSoftware?: string;
        /**
         * 镜像状态， 可用：Available，制作中：Making， 不可用：Unavailable，复制中：Copying
         */
        State?: string;
        /**
         * 镜像描述
         */
        ImageDescription?: string;
        /**
         * 创建时间，格式为Unix时间戳
         */
        CreateTime?: number;
        /**
         * 镜像大小
         */
        ImageSize?: number;
        /**
         * 默认值为空'''。当CentOS 7.3/7.4/7.5等镜像会标记为“Broadwell”
         */
        MinimalCPU?: string;
        /**
         * 系统EOL的时间，格式：YYYY/MM/DD
         */
        MaintainEol?: string;
        /**
         * 场景分类，目前包含Featured（精选），PreInstalledDrivers（预装驱动），AIPainting（AI绘画），AIModels（AI模型），HPC（高性能计算）
         */
        SceneCategories?: string[];
        /**
         * 应用镜像图标url
         */
        ImageLogoLink?: string;
    }[];
}
/**
 * DescribeULHostInstance - 获取轻量应用云主机列表
 */
export interface DescribeULHostInstanceRequest {
    /**
     * 【数组】轻量应用云主机ID。
     */
    ULHostIds?: string[];
    /**
     * 列表起始位置偏移量，默认为0
     */
    Offset?: number;
    /**
     * 返回数据长度，默认为20，最大100
     */
    Limit?: number;
}
/**
 * DescribeULHostInstance - 获取轻量应用云主机列表
 */
export interface DescribeULHostInstanceResponse {
    /**
     * 实例列表
     */
    ULHostInstanceSets: {
        /**
         * 可用区。
         */
        Zone?: string;
        /**
         * 实例Id。
         */
        ULHostId?: string;
        /**
         * 实例名称。默认套餐Id
         */
        Name?: string;
        /**
         * 业务组。
         */
        Tag?: string;
        /**
         * 备注。
         */
        Remark?: string;
        /**
         * 镜像Id。
         */
        ImageId?: string;
        /**
         * 镜像名称。
         */
        ImageName?: string;
        /**
         * 【数组】镜像包含的应用列表。
         */
        Apps?: string[];
        /**
         * CPU核数。
         */
        CPU?: number;
        /**
         * 内存。单位：MB
         */
        Memory?: number;
        /**
         * 实例状态。枚举值：\\ >初始化: Initializing; \\ >启动中: Starting; \\> 运行中: Running; \\> 关机中: Stopping; \\ >关机: Stopped \\ >安装失败: Install Fail; \\ >重启中: Rebooting; \\ > 未知(空字符串，获取状态超时或出错)：""
         */
        State?: string;
        /**
         * 计费模式。枚举值：Month/Year
         */
        ChargeType?: string;
        /**
         * IP信息
         */
        IPSet?: {
            /**
             * IPv4/IPv6；
             */
            IPMode: string;
            /**
             * 内网 Private 类型下，表示是否为默认网卡。true: 是默认网卡；其他值：不是。
             */
            Default?: string;
            /**
             * 内网 Private 类型下，当前网卡的Mac。
             */
            Mac?: string;
            /**
             * 当前EIP的权重。权重最大的为当前的出口IP。
             */
            Weight?: number;
            /**
             * 国际: Internation，BGP: Bgp，内网: Private
             */
            Type?: string;
            /**
             * 外网IP资源ID 。(内网IP无对应的资源ID)
             */
            IPId?: string;
            /**
             * IP地址
             */
            IP?: string;
            /**
             * IP对应的带宽, 单位: Mb  (内网IP不显示带宽信息)
             */
            Bandwidth?: number;
            /**
             * IP地址对应的VPC ID。（北京一不支持，字段返回为空）
             */
            VPCId?: string;
            /**
             * IP地址对应的子网 ID。（北京一不支持，字段返回为空）
             */
            SubnetId?: string;
            /**
             * 弹性网卡为默认网卡时，返回对应的 ID 值
             */
            NetworkInterfaceId?: string;
        }[];
        /**
         * 磁盘信息
         */
        DiskSet?: {
            /**
             * 磁盘Id
             */
            DiskId?: string;
            /**
             * 磁盘类型。如："CLOUD_RSSD"、"CLOUD_SSD"
             */
            DiskType?: string;
            /**
             * 磁盘类型。系统盘："Boot"；数据盘："Data"
             */
            Type?: string;
            /**
             * 磁盘大小。单位：GB
             */
            Size?: number;
            /**
             * 是否为系统盘。是："True"；否："False"
             */
            IsBoot?: string;
            /**
             * 磁盘盘符。系统盘："vda"
             */
            Drive?: string;
        }[];
        /**
         * 流量包详情信息
         */
        EIPExclusiveUTPInfo?: {
            /**
             * 当前周期总流量
             */
            TotalSize?: number;
            /**
             * 当前周期剩余流量
             */
            AvailableSize?: number;
            /**
             * 当前周期已使用流量
             */
            UsedSize?: number;
            /**
             * 当前周期超出限额的流量
             */
            ExcessSize?: number;
            /**
             * 上次重置时间
             */
            LastResetTime?: number;
            /**
             * 下次重置时间
             */
            NextResetTime?: number;
            /**
             * 创建时间
             */
            CreateTime?: number;
        };
        /**
         * 是否自动续费。枚举值：Yes/No
         */
        AutoRenew?: string;
        /**
         * 是否过期。枚举值：Yes/No
         */
        IsExpire?: string;
        /**
         * 过期时间。Unix时间戳
         */
        ExpireTime?: number;
        /**
         * 创建时间。Unix时间戳
         */
        CreateTime?: number;
    }[];
}
/**
 * GetULHostInstancePrice - 获取轻量应用云主机套餐价格
 */
export interface GetULHostInstancePriceRequest {
    /**
     * 套餐ID
     */
    BundleId: string;
    /**
     * 获取指定计费模式的价格。枚举值：\\ > Year，按年付费； \\ > Month。未指定时，返回所有计费模式价格
     */
    ChargeType?: string;
    /**
     * 购买台数，范围[1,5]。默认：1
     */
    Count?: number;
    /**
     * 购买时长。默认: 1。不支持购买到月末
     */
    Quantity?: number;
}
/**
 * GetULHostInstancePrice - 获取轻量应用云主机套餐价格
 */
export interface GetULHostInstancePriceResponse {
    /**
     * 价格
     */
    PriceSet: {
        /**
         * 计费模式
         */
        ChargeType?: string;
        /**
         * 价格
         */
        Price?: number;
        /**
         * 原价
         */
        OriginalPrice?: number;
    }[];
}
/**
 * GetULHostRenewPrice - 获取主机续费价格
 */
export interface GetULHostRenewPriceRequest {
    /**
     * ULHost实例ID
     */
    ULHostId: string;
    /**
     * 计费类型。支持：Year/Month；默认：Month
     */
    ChargeType?: string;
}
/**
 * GetULHostRenewPrice - 获取主机续费价格
 */
export interface GetULHostRenewPriceResponse {
    /**
     * 价格
     */
    PriceSet: {
        /**
         * 计费模式
         */
        ChargeType?: string;
        /**
         * 价格
         */
        Price?: number;
        /**
         * 原价
         */
        OriginalPrice?: number;
    }[];
}
/**
 * ModifyULHostAttribute - 修改指定ULHost实例属性信息，包含名称和备注
 */
export interface ModifyULHostAttributeRequest {
    /**
     * ULHost实例Id
     */
    ULHostId: string;
    /**
     * 名称。和Remark至少选择一个进行修改
     */
    Name?: string;
    /**
     * 备注。和Name至少选择一个进行修改
     */
    Remark?: string;
}
/**
 * ModifyULHostAttribute - 修改指定ULHost实例属性信息，包含名称和备注
 */
export interface ModifyULHostAttributeResponse {
    /**
     * ULHost实例Id
     */
    ULHostId: string;
}
/**
 * PoweroffULHostInstance - 直接关闭UHost实例电源，无需等待实例正常关闭。
 */
export interface PoweroffULHostInstanceRequest {
    /**
     * ULHost实例ID
     */
    ULHostId: string;
}
/**
 * PoweroffULHostInstance - 直接关闭UHost实例电源，无需等待实例正常关闭。
 */
export interface PoweroffULHostInstanceResponse {
    /**
     * ULHost实例ID
     */
    ULHostId: string;
}
/**
 * RebootULHostInstance - 重新启动UHost实例。
 */
export interface RebootULHostInstanceRequest {
    /**
     * ULHost实例ID
     */
    ULHostId: string;
}
/**
 * RebootULHostInstance - 重新启动UHost实例。
 */
export interface RebootULHostInstanceResponse {
    /**
     * ULHost实例ID
     */
    ULHostId?: string;
}
/**
 * ReinstallULHostInstance - 重装轻量应用云主机
 */
export interface ReinstallULHostInstanceRequest {
    /**
     * 镜像Id。暂不支持使用自定义镜像重装
     */
    ImageId: string;
    /**
     * 实例Id
     */
    ULHostId: string;
    /**
     * 登陆密码。密码需使用base64进行编码，举例如下：# echo -n Password1 | base64 UGFzc3dvcmQx
     */
    Password: string;
}
/**
 * ReinstallULHostInstance - 重装轻量应用云主机
 */
export interface ReinstallULHostInstanceResponse {
    /**
     * 实例Id
     */
    ULHostId: string;
}
/**
 * ResetULHostInstancePassword - 重置轻量应用云主机管理员密码。
 */
export interface ResetULHostInstancePasswordRequest {
    /**
     * ULHost实例ID
     */
    ULHostId: string;
    /**
     * ULHost新密码（密码格式使用BASE64编码）
     */
    Password: string;
}
/**
 * ResetULHostInstancePassword - 重置轻量应用云主机管理员密码。
 */
export interface ResetULHostInstancePasswordResponse {
    /**
     * ULHost实例ID
     */
    ULHostId: string;
}
/**
 * StartULHostInstance - 启动处于关闭状态的UHost实例。
 */
export interface StartULHostInstanceRequest {
    /**
     * ULHost实例ID
     */
    ULHostId: string;
}
/**
 * StartULHostInstance - 启动处于关闭状态的UHost实例。
 */
export interface StartULHostInstanceResponse {
    /**
     * ULHost实例ID
     */
    ULHostId?: string;
}
/**
 * StopULHostInstance - 指停止处于运行状态的ULHost实例
 */
export interface StopULHostInstanceRequest {
    /**
     * ULHost实例ID。
     */
    ULHostId: string;
}
/**
 * StopULHostInstance - 指停止处于运行状态的ULHost实例
 */
export interface StopULHostInstanceResponse {
    /**
     * ULHost实例ID
     */
    ULHostId?: string;
}
/**
 * TerminateULHostInstance - 删除指定数据中心的ULHost实例。
 */
export interface TerminateULHostInstanceRequest {
    /**
     * ULHost资源Id
     */
    ULHostId: string;
    /**
     * 删除主机时是否同时删除挂载的数据盘。默认为false。
     */
    ReleaseUDisk?: boolean;
}
/**
 * TerminateULHostInstance - 删除指定数据中心的ULHost实例。
 */
export interface TerminateULHostInstanceResponse {
    /**
     * 用于判断主机删除时是否进入回收站。放入回收站:"Yes", 彻底删除：“No”。
     */
    InRecycle: string;
    /**
     * ULHost 实例 Id
     */
    ULHostId?: string;
}
