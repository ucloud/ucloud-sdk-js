import Client from '../../core/client';
import { ConfigOptions } from '../../core/config';
import { CredentialOptions } from '../../core/credential';
/**
 * This client is used to call actions of **uhost** service
 */
export default class UHostClient extends Client {
    constructor({ config, credential, }: {
        config: ConfigOptions;
        credential: CredentialOptions;
    });
    /**
     * CopyCustomImage - 复制自制镜像
     *
     * See also: https://docs.ucloud.cn/api/uhost-api/copy_custom_image
     */
    copyCustomImage(request?: CopyCustomImageRequest): Promise<CopyCustomImageResponse>;
    /**
     * CreateCustomImage - 从指定UHost实例，生成自定义镜像。
     *
     * See also: https://docs.ucloud.cn/api/uhost-api/create_custom_image
     */
    createCustomImage(request?: CreateCustomImageRequest): Promise<CreateCustomImageResponse>;
    /**
     * CreateIsolationGroup - 创建硬件隔离组，组内机器严格隔离在不同宿主机上。
     *
     * See also: https://docs.ucloud.cn/api/uhost-api/create_isolation_group
     */
    createIsolationGroup(request?: CreateIsolationGroupRequest): Promise<CreateIsolationGroupResponse>;
    /**
     * CreateUHostInstance - 创建UHost实例。
     *
     * See also: https://docs.ucloud.cn/api/uhost-api/create_uhost_instance
     */
    createUHostInstance(request?: CreateUHostInstanceRequest): Promise<CreateUHostInstanceResponse>;
    /**
     * CreateUHostKeyPair - 创建主机密钥对信息
     *
     * See also: https://docs.ucloud.cn/api/uhost-api/create_uhost_key_pair
     */
    createUHostKeyPair(request?: CreateUHostKeyPairRequest): Promise<CreateUHostKeyPairResponse>;
    /**
     * DeleteIsolationGroup - 删除硬件隔离组。
     *
     * See also: https://docs.ucloud.cn/api/uhost-api/delete_isolation_group
     */
    deleteIsolationGroup(request?: DeleteIsolationGroupRequest): Promise<DeleteIsolationGroupResponse>;
    /**
     * DeleteUHostKeyPairs - 删除一对或者多对密钥对。
     *
     * See also: https://docs.ucloud.cn/api/uhost-api/delete_uhost_key_pairs
     */
    deleteUHostKeyPairs(request?: DeleteUHostKeyPairsRequest): Promise<DeleteUHostKeyPairsResponse>;
    /**
     * DescribeAvailableInstanceTypes - DescribeAvailableInstanceTypes
     *
     * See also: https://docs.ucloud.cn/api/uhost-api/describe_available_instance_types
     */
    describeAvailableInstanceTypes(request?: DescribeAvailableInstanceTypesRequest): Promise<DescribeAvailableInstanceTypesResponse>;
    /**
     * DescribeImage - 获取指定数据中心镜像列表，用户可通过指定操作系统类型，镜像Id进行过滤。
     *
     * See also: https://docs.ucloud.cn/api/uhost-api/describe_image
     */
    describeImage(request?: DescribeImageRequest): Promise<DescribeImageResponse>;
    /**
     * DescribeIsolationGroup - 查询硬件隔离组列表。
     *
     * See also: https://docs.ucloud.cn/api/uhost-api/describe_isolation_group
     */
    describeIsolationGroup(request?: DescribeIsolationGroupRequest): Promise<DescribeIsolationGroupResponse>;
    /**
     * DescribeUHostInstance - 获取主机或主机列表信息，并可根据数据中心，主机ID等参数进行过滤。
     *
     * See also: https://docs.ucloud.cn/api/uhost-api/describe_uhost_instance
     */
    describeUHostInstance(request?: DescribeUHostInstanceRequest): Promise<DescribeUHostInstanceResponse>;
    /**
     * DescribeUHostKeyPairs - 查询一个或多个密钥对。
     *
     * See also: https://docs.ucloud.cn/api/uhost-api/describe_uhost_key_pairs
     */
    describeUHostKeyPairs(request?: DescribeUHostKeyPairsRequest): Promise<DescribeUHostKeyPairsResponse>;
    /**
     * DescribeUHostTags - 获取指定数据中心的业务组列表。
     *
     * See also: https://docs.ucloud.cn/api/uhost-api/describe_uhost_tags
     */
    describeUHostTags(request?: DescribeUHostTagsRequest): Promise<DescribeUHostTagsResponse>;
    /**
     * GetAttachedDiskUpgradePrice - 获取挂载磁盘的升级价格
     *
     * See also: https://docs.ucloud.cn/api/uhost-api/get_attached_disk_upgrade_price
     */
    getAttachedDiskUpgradePrice(request?: GetAttachedDiskUpgradePriceRequest): Promise<GetAttachedDiskUpgradePriceResponse>;
    /**
     * GetUHostInstancePrice - 根据UHost实例配置，获取UHost实例的价格。
     *
     * See also: https://docs.ucloud.cn/api/uhost-api/get_uhost_instance_price
     */
    getUHostInstancePrice(request?: GetUHostInstancePriceRequest): Promise<GetUHostInstancePriceResponse>;
    /**
     * GetUHostInstanceVncInfo - 获取指定UHost实例的管理VNC配置详细信息。
     *
     * See also: https://docs.ucloud.cn/api/uhost-api/get_uhost_instance_vnc_info
     */
    getUHostInstanceVncInfo(request?: GetUHostInstanceVncInfoRequest): Promise<GetUHostInstanceVncInfoResponse>;
    /**
     * GetUHostUpgradePrice - 获取UHost实例升级配置的价格。可选配置范围请参考[[api:uhost-api:uhost_type|云主机机型说明]]。
     *
     * See also: https://docs.ucloud.cn/api/uhost-api/get_uhost_upgrade_price
     */
    getUHostUpgradePrice(request?: GetUHostUpgradePriceRequest): Promise<GetUHostUpgradePriceResponse>;
    /**
     * ImportCustomImage - 把UFile的镜像文件导入到UHost，生成自定义镜像
     *
     * See also: https://docs.ucloud.cn/api/uhost-api/import_custom_image
     */
    importCustomImage(request?: ImportCustomImageRequest): Promise<ImportCustomImageResponse>;
    /**
     * ImportUHostKeyPairs - 导入密钥对后，仅保管公钥部分，需自行妥善保存密钥对的私钥部分。
     *
     * See also: https://docs.ucloud.cn/api/uhost-api/import_uhost_key_pairs
     */
    importUHostKeyPairs(request?: ImportUHostKeyPairsRequest): Promise<ImportUHostKeyPairsResponse>;
    /**
     * LeaveIsolationGroup - 移除硬件隔离组中的主机
     *
     * See also: https://docs.ucloud.cn/api/uhost-api/leave_isolation_group
     */
    leaveIsolationGroup(request?: LeaveIsolationGroupRequest): Promise<LeaveIsolationGroupResponse>;
    /**
     * ModifyUHostIP - 修改云主机内网 IP 地址
     *
     * See also: https://docs.ucloud.cn/api/uhost-api/modify_uhost_ip
     */
    modifyUHostIP(request?: ModifyUHostIPRequest): Promise<ModifyUHostIPResponse>;
    /**
     * ModifyUHostInstanceName - 修改指定UHost实例名称，需要给出数据中心，UHostId，及新的实例名称。
     *
     * See also: https://docs.ucloud.cn/api/uhost-api/modify_uhost_instance_name
     */
    modifyUHostInstanceName(request?: ModifyUHostInstanceNameRequest): Promise<ModifyUHostInstanceNameResponse>;
    /**
     * ModifyUHostInstanceRemark - 修改指定UHost实例备注信息。
     *
     * See also: https://docs.ucloud.cn/api/uhost-api/modify_uhost_instance_remark
     */
    modifyUHostInstanceRemark(request?: ModifyUHostInstanceRemarkRequest): Promise<ModifyUHostInstanceRemarkResponse>;
    /**
     * ModifyUHostInstanceTag - 修改指定UHost实例业务组标识。
     *
     * See also: https://docs.ucloud.cn/api/uhost-api/modify_uhost_instance_tag
     */
    modifyUHostInstanceTag(request?: ModifyUHostInstanceTagRequest): Promise<ModifyUHostInstanceTagResponse>;
    /**
     * PoweroffUHostInstance - 直接关闭UHost实例电源，无需等待实例正常关闭。
     *
     * See also: https://docs.ucloud.cn/api/uhost-api/poweroff_uhost_instance
     */
    poweroffUHostInstance(request?: PoweroffUHostInstanceRequest): Promise<PoweroffUHostInstanceResponse>;
    /**
     * RebootUHostInstance - 重新启动UHost实例，需要指定数据中心及UHostID两个参数的值。
     *
     * See also: https://docs.ucloud.cn/api/uhost-api/reboot_uhost_instance
     */
    rebootUHostInstance(request?: RebootUHostInstanceRequest): Promise<RebootUHostInstanceResponse>;
    /**
     * ReinstallUHostInstance - 重新安装指定UHost实例的操作系统
     *
     * See also: https://docs.ucloud.cn/api/uhost-api/reinstall_uhost_instance
     */
    reinstallUHostInstance(request?: ReinstallUHostInstanceRequest): Promise<ReinstallUHostInstanceResponse>;
    /**
     * ResetUHostInstancePassword - 重置UHost实例的管理员密码。
     *
     * See also: https://docs.ucloud.cn/api/uhost-api/reset_uhost_instance_password
     */
    resetUHostInstancePassword(request?: ResetUHostInstancePasswordRequest): Promise<ResetUHostInstancePasswordResponse>;
    /**
     * ResizeAttachedDisk - 修改挂载的磁盘大小，包含系统盘和数据盘
     *
     * See also: https://docs.ucloud.cn/api/uhost-api/resize_attached_disk
     */
    resizeAttachedDisk(request?: ResizeAttachedDiskRequest): Promise<ResizeAttachedDiskResponse>;
    /**
     * ResizeUHostInstance - 修改指定UHost实例的资源配置，如CPU核心数，内存容量大小，网络增强等。可选配置范围请参考[[api:uhost-api:uhost_type|云主机机型说明]]。
     *
     * See also: https://docs.ucloud.cn/api/uhost-api/resize_uhost_instance
     */
    resizeUHostInstance(request?: ResizeUHostInstanceRequest): Promise<ResizeUHostInstanceResponse>;
    /**
     * StartUHostInstance - 启动处于关闭状态的UHost实例，需要指定数据中心及UHostID两个参数的值。
     *
     * See also: https://docs.ucloud.cn/api/uhost-api/start_uhost_instance
     */
    startUHostInstance(request?: StartUHostInstanceRequest): Promise<StartUHostInstanceResponse>;
    /**
     * StopUHostInstance - 指停止处于运行状态的UHost实例，需指定数据中心及UhostID。
     *
     * See also: https://docs.ucloud.cn/api/uhost-api/stop_uhost_instance
     */
    stopUHostInstance(request?: StopUHostInstanceRequest): Promise<StopUHostInstanceResponse>;
    /**
     * TerminateCustomImage - 删除用户自定义镜像
     *
     * See also: https://docs.ucloud.cn/api/uhost-api/terminate_custom_image
     */
    terminateCustomImage(request?: TerminateCustomImageRequest): Promise<TerminateCustomImageResponse>;
    /**
     * TerminateUHostInstance - 删除指定数据中心的UHost实例。
     *
     * See also: https://docs.ucloud.cn/api/uhost-api/terminate_uhost_instance
     */
    terminateUHostInstance(request?: TerminateUHostInstanceRequest): Promise<TerminateUHostInstanceResponse>;
    /**
     * UpgradeToArkUHostInstance - 普通升级为方舟机型
     *
     * See also: https://docs.ucloud.cn/api/uhost-api/upgrade_to_ark_uhost_instance
     */
    upgradeToArkUHostInstance(request?: UpgradeToArkUHostInstanceRequest): Promise<UpgradeToArkUHostInstanceResponse>;
}
/**
 * CopyCustomImage - 复制自制镜像
 */
export interface CopyCustomImageRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone?: string;
    /**
     * 源镜像Id, 参见 DescribeImage
     */
    SourceImageId: string;
    /**
     * 目标项目Id, 参见 GetProjectList
     */
    TargetProjectId: string;
    /**
     * 目标地域，不跨地域不用填
     */
    TargetRegion?: string;
    /**
     * 目标镜像名称
     */
    TargetImageName?: string;
    /**
     * 目标镜像描述
     */
    TargetImageDescription?: string;
}
/**
 * CopyCustomImage - 复制自制镜像
 */
export interface CopyCustomImageResponse {
    /**
     * 目标镜像Id
     */
    TargetImageId?: string;
}
/**
 * CreateCustomImage - 从指定UHost实例，生成自定义镜像。
 */
export interface CreateCustomImageRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone?: string;
    /**
     * UHost实例ID 参见 [DescribeUHostInstance](describe_uhost_instance.html)
     */
    UHostId: string;
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
 * CreateCustomImage - 从指定UHost实例，生成自定义镜像。
 */
export interface CreateCustomImageResponse {
    /**
     * 镜像Id
     */
    ImageId?: string;
}
/**
 * CreateIsolationGroup - 创建硬件隔离组，组内机器严格隔离在不同宿主机上。
 */
export interface CreateIsolationGroupRequest {
    /**
     * 硬件隔离组名称。请遵照[[api:uhost-api:specification|字段规范]]设定隔离组名称。
     */
    GroupName: string;
    /**
     * 备注。请遵照[[api:uhost-api:specification|字段规范]]设定隔离组备注。
     */
    Remark?: string;
}
/**
 * CreateIsolationGroup - 创建硬件隔离组，组内机器严格隔离在不同宿主机上。
 */
export interface CreateIsolationGroupResponse {
    /**
     * 硬件隔离组id
     */
    GroupId: string;
}
/**
 * CreateUHostInstance - 创建UHost实例。
 */
export interface CreateUHostInstanceRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * 镜像ID。 请通过 [DescribeImage](describe_image.html)获取
     */
    ImageId: string;
    /**
     *
     */
    Disks?: {
        /**
         * 是否是系统盘。枚举值：\\ > True，是系统盘 \\ > False，是数据盘（默认）。Disks数组中有且只能有一块盘是系统盘。
         */
        IsBoot: string;
        /**
         * 磁盘类型。请参考[[api:uhost-api:disk_type|磁盘类型]]。
         */
        Type: string;
        /**
         * 磁盘大小，单位GB。请参考[[api:uhost-api:disk_type|磁盘类型]]。
         */
        Size: number;
        /**
         * 磁盘备份方案。枚举值：\\ > NONE，无备份 \\ > DATAARK，数据方舟 \\ > SNAPSHOT，快照 \\当前磁盘支持的备份模式参考 [[api:uhost-api:disk_type|磁盘类型]],默认值:NONE
         */
        BackupType?: string;
        /**
         * 【功能仅部分可用区开放，详询技术支持】磁盘是否加密。加密：true, 不加密: false加密必须传入对应的的KmsKeyId,默认值false
         */
        Encrypted?: boolean;
        /**
         * 【功能仅部分可用区开放，详询技术支持】kms key id。选择加密盘时必填。
         */
        KmsKeyId?: string;
        /**
         * 云盘代金券id。不适用于系统盘/本地盘。请通过DescribeCoupon接口查询，或登录用户中心查看
         */
        CouponId?: string;
        /**
         *
         */
        CustomBackup?: object;
    }[];
    /**
     * 主机登陆模式。密码（默认选项）: Password，密钥：KeyPair。
     */
    LoginMode: string;
    /**
     * UHost密码。请遵照[[api:uhost-api:specification|字段规范]]设定密码。密码需使用base64进行编码，举例如下：# echo -n Password1 | base64UGFzc3dvcmQx。
     */
    Password?: string;
    /**
     * UHost实例名称。默认：UHost。请遵照[[api:uhost-api:specification|字段规范]]设定实例名称。
     */
    Name?: string;
    /**
     * 业务组。默认：Default（Default即为未分组）。请遵照[[api:uhost-api:specification|字段规范]]设定业务组。
     */
    Tag?: string;
    /**
     * 计费模式。枚举值为： \\ > Year，按年付费； \\ > Month，按月付费；\\ > Dynamic，按小时预付费 \\ > Postpay，按小时后付费（支持关机不收费，目前仅部分可用区支持，请联系您的客户经理） \\Preemptive计费为抢占式实例(内测阶段) \\ 默认为月付
     */
    ChargeType?: string;
    /**
     * 购买时长。默认:值 1。按小时购买（Dynamic/Postpay）时无需此参数。 月付时，此参数传0，代表购买至月末。
     */
    Quantity?: number;
    /**
     * 【建议后续不再使用】云主机机型（V1.0），在本字段和字段MachineType中，仅需要其中1个字段即可。参考[[api:uhost-api:uhost_type|云主机机型说明]]。
     */
    UHostType?: string;
    /**
     * 虚拟CPU核数。可选参数：1-64（具体机型与CPU的对应关系参照控制台）。默认值: 4。
     */
    CPU?: number;
    /**
     * 内存大小。单位：MB。范围 ：[1024, 262144]，取值为1024的倍数（可选范围参考控制台）。默认值：8192
     */
    Memory?: number;
    /**
     * GPU类型，枚举值["K80", "P40", "V100", "T4", "T4S","2080Ti","2080Ti-4C","1080Ti", "T4/4", "MI100", "V100S"]，MachineType为G时必填
     */
    GpuType?: string;
    /**
     * GPU卡核心数。仅GPU机型支持此字段（可选范围与MachineType+GpuType相关）
     */
    GPU?: number;
    /**
     * 网络增强特性。枚举值：Normal，不开启;  Super，开启网络增强1.0； Ultra，开启网络增强2.0（详情参考官网文档）
     */
    NetCapability?: string;
    /**
     * 热升级特性。True为开启，False为未开启，默认False。
     */
    HotplugFeature?: boolean;
    /**
     * VPC ID。默认为当前地域的默认VPC。
     */
    VPCId?: string;
    /**
     * 子网 ID。默认为当前地域的默认子网。
     */
    SubnetId?: string;
    /**
     * 【数组】创建云主机时指定内网IP。若不传值，则随机分配当前子网下的IP。调用方式举例：PrivateIp.0=x.x.x.x。当前只支持一个内网IP。
     */
    PrivateIp?: string[];
    /**
     * 防火墙ID，默认：Web推荐防火墙。如何查询SecurityGroupId请参见 [DescribeFirewall](api/unet-api/describe_firewall.html)。
     */
    SecurityGroupId?: string;
    /**
     * 硬件隔离组id。可通过DescribeIsolationGroup获取。
     */
    IsolationGroup?: string;
    /**
     * 告警模板id，如果传了告警模板id，且告警模板id正确，则绑定告警模板。绑定告警模板失败只会在后台有日志，不会影响创建主机流程，也不会在前端报错。
     */
    AlarmTemplateId?: number;
    /**
     * 云主机机型（V2.0），在本字段和字段UHostType中，仅需要其中1个字段即可。枚举值["N", "C", "G", "O", "OS", "OM", "OPRO", "OMAX", "O.BM", "O.EPC"]。参考[[api:uhost-api:uhost_type|云主机机型说明]]。
     */
    MachineType?: string;
    /**
     * 最低cpu平台，枚举值["Intel/Auto", "Intel/IvyBridge", "Intel/Haswell", "Intel/Broadwell", "Intel/Skylake", "Intel/Cascadelake", "Intel/CascadelakeR", "Intel/IceLake", "Amd/Epyc2", "Amd/Auto"],默认值是"Intel/Auto"。
     */
    MinimalCpuPlatform?: string;
    /**
     * 本次最大创建主机数量，取值范围是[1,100]，默认值为1。
     */
    MaxCount?: number;
    /**
     *
     */
    NetworkInterface?: {
        /**
         *
         */
        EIP?: {
            /**
             * 【若绑定EIP，此参数必填】弹性IP的外网带宽, 单位为Mbps. 共享带宽模式必须指定0M带宽, 非共享带宽模式必须指定非0Mbps带宽. 各地域非共享带宽的带宽范围如下： 流量计费[1-300]，带宽计费[1-800]
             */
            Bandwidth?: number;
            /**
             * 弹性IP的计费模式. 枚举值: "Traffic", 流量计费; "Bandwidth", 带宽计费; "ShareBandwidth",共享带宽模式. "Free":免费带宽模式,默认为 "Bandwidth"
             */
            PayMode?: string;
            /**
             * 绑定的共享带宽Id，仅当PayMode为ShareBandwidth时有效
             */
            ShareBandwidthId?: string;
            /**
             * 【若绑定EIP，此参数必填】弹性IP的线路。枚举值: 国际: International BGP: Bgp 各地域允许的线路参数如下: cn-sh1: Bgp cn-sh2: Bgp cn-gd: Bgp cn-bj1: Bgp cn-bj2: Bgp hk: International us-ca: International th-bkk: International kr-seoul:International us-ws:International ge-fra:International sg:International tw-kh:International.其他海外线路均为 International
             */
            OperatorName?: string;
            /**
             * 当前EIP代金券id。请通过DescribeCoupon接口查询，或登录用户中心查看。
             */
            CouponId?: string;
        };
        /**
         *
         */
        IPv6?: object;
        /**
         * 申请并绑定一个教育网EIP。True为申请并绑定，False为不会申请绑定，默认False。当前只支持具有HPC特性的机型。
         */
        CreateCernetIp?: boolean;
    }[];
    /**
     * 用户自定义数据。当镜像支持Cloud-init Feature时可填写此字段。注意：1、总数据量大小不超过 16K；2、使用base64编码
     */
    UserData?: string;
    /**
     * 数据盘是否需要自动分区挂载。当镜像支持“Cloud-init”Feature时可填写此字段。取值 >“On” 自动挂载（默认值）> “Off” 不自动挂载。
     */
    AutoDataDiskInit?: string;
    /**
     *
     */
    Volumes?: object[];
    /**
     * KeypairId 密钥对ID，LoginMode为KeyPair时此项必须。
     */
    KeyPairId?: string;
    /**
     *
     */
    Features?: {
        /**
         * 弹性网卡特性。开启了弹性网卡权限位，此特性才生效，默认 false 未开启，true 开启，仅与 NetCapability Normal 兼容。
         */
        UNI?: boolean;
    };
    /**
     *
     */
    SecGroupId?: object[];
    /**
     * 主机代金券ID。请通过DescribeCoupon接口查询，或登录用户中心查看
     */
    CouponId?: string;
}
/**
 * CreateUHostInstance - 创建UHost实例。
 */
export interface CreateUHostInstanceResponse {
    /**
     * UHost实例Id集合
     */
    UHostIds?: string[];
    /**
     * 【批量创建不会返回】IP信息
     */
    IPs?: string[];
}
/**
 * CreateUHostKeyPair - 创建主机密钥对信息
 */
export interface CreateUHostKeyPairRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone?: string;
    /**
     * 密钥对名称。 由字母，数字，符号组成，长度为1-63位。
     */
    KeyPairName: string;
}
/**
 * CreateUHostKeyPair - 创建主机密钥对信息
 */
export interface CreateUHostKeyPairResponse {
    /**
     * 密钥信息
     */
    KeyPair: {
        /**
         * 项目ID。
         */
        ProjectId?: string;
        /**
         * 密钥对ID。
         */
        KeyPairId?: string;
        /**
         * 密钥对名称。 长度为1~63个英文或中文字符。
         */
        KeyPairName?: string;
        /**
         * 密钥对指纹。md5(ProjectId|KeyPairId|PublicKey)
         */
        KeyPairFingerPrint?: string;
        /**
         * 密钥对的私钥内容。只有创建接口才会返回。
         */
        PrivateKeyBody?: string;
        /**
         * 密钥对的创建时间，格式为Unix Timestamp。
         */
        CreateTime?: number;
    };
}
/**
 * DeleteIsolationGroup - 删除硬件隔离组。
 */
export interface DeleteIsolationGroupRequest {
    /**
     * 硬件隔离组id
     */
    GroupId: string;
}
/**
 * DeleteIsolationGroup - 删除硬件隔离组。
 */
export interface DeleteIsolationGroupResponse {
    /**
     * 硬件隔离组id
     */
    GroupId: string;
}
/**
 * DeleteUHostKeyPairs - 删除一对或者多对密钥对。
 */
export interface DeleteUHostKeyPairsRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone?: string;
    /**
     * 密钥对ID，最多支持 100 对。
     */
    KeyPairIds: string[];
}
/**
 * DeleteUHostKeyPairs - 删除一对或者多对密钥对。
 */
export interface DeleteUHostKeyPairsResponse {
}
/**
 * DescribeAvailableInstanceTypes - DescribeAvailableInstanceTypes
 */
export interface DescribeAvailableInstanceTypesRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
}
/**
 * DescribeAvailableInstanceTypes - DescribeAvailableInstanceTypes
 */
export interface DescribeAvailableInstanceTypesResponse {
    /**
     * AvailableInstanceTypes
     */
    AvailableInstanceTypes: {
        /**
         * 机型名称：快杰O型|O 、快杰共享型|OM 、快杰内存型|OMEM 、 快杰PRO型|OPRO、通用N型|N、高主频C型|C和GPU G型|G等
         */
        Name?: string;
        /**
         * 机型状态：可售|Normal 、 公测|Beta、售罄|Soldout、隐藏|Hidden
         */
        Status?: string;
        /**
         * 支持的CPU平台，并且按照Intel、AMD和Ampere分类返回
         */
        CpuPlatforms?: {
            /**
             * 返回Intel的CPU平台信息，例如：Intel: ['Intel/CascadeLake','Intel/CascadelakeR','Intel/IceLake']
             */
            Intel?: string[];
            /**
             * 返回AMD的CPU平台信息，例如：AMD: ['Amd/Epyc2']
             */
            Amd?: string[];
            /**
             * 返回Arm的CPU平台信息，例如：Ampere: ['Ampere/Altra']
             */
            Ampere?: string[];
        }[];
        /**
         * 磁盘信息。磁盘主要分类如下：云盘|cloudDisk、普通本地盘|normalLocalDisk和SSD本地盘|ssdLocalDisk。其中云盘主要包含普通云盘|CLOUD_NORMAL、SSD云盘|CLOUD_SSD和RSSD云盘|CLOUD_RSSD。普通本地盘只包含普通本地盘|LOCAL_NORMAL一种。SSD本地盘只包含SSD本地盘|LOCAL_SSD一种。MinimalSize为磁盘最小值，如果没有该字段，最小值取基础镜像Size值即可（linux为20G，windows为40G）。MaximalSize为磁盘最大值。InstantResize表示系统盘是否允许扩容，如果是本地盘，则不允许扩容，InstantResize为false。Features为磁盘可支持的服务：数据方舟|DATAARK，快照服务|SNAPSHOT，加密盘|Encrypted。
         */
        Disks?: {
            /**
             * 磁盘介质类别信息，磁盘主要分类如下：云盘|cloudDisk、普通本地盘|normalLocalDisk和SSD本地盘|ssdLocalDisk。
             */
            Name?: string;
            /**
             * 系统盘信息
             */
            BootDisk?: {
                /**
                 * 系统盘类别，包含普通云盘|CLOUD_NORMAL、SSD云盘|CLOUD_SSD和RSSD云盘|CLOUD_RSSD。普通本地盘只包含普通本地盘|LOCAL_NORMAL一种。SSD本地盘只包含SSD本地盘|LOCAL_SSD一种。
                 */
                Name?: string;
                /**
                 * 系统盘是否允许扩容，如果是本地盘，则不允许扩容，InstantResize为false。
                 */
                InstantResize?: boolean;
                /**
                 * MaximalSize为磁盘最大值
                 */
                MaximalSize?: number;
                /**
                 * 磁盘可支持的服务
                 */
                Features?: string[];
            }[];
            /**
             * 数据盘信息
             */
            DataDisk?: {
                /**
                 * 磁盘最小值，如果没有该字段，最小值取基础镜像Size值即可（linux为20G，windows为40G）。
                 */
                MinimalSize?: number;
                /**
                 * 数据盘类别，包含普通云盘|CLOUD_NORMAL、SSD云盘|CLOUD_SSD和RSSD云盘|CLOUD_RSSD。普通本地盘只包含普通本地盘|LOCAL_NORMAL一种。SSD本地盘只包含SSD本地盘|LOCAL_SSD一种。
                 */
                Name?: string;
                /**
                 * MaximalSize为磁盘最大值
                 */
                MaximalSize?: number;
                /**
                 * 数据盘可支持的服务
                 */
                Features?: string[];
            }[];
        }[];
        /**
         * GPU、CPU和内存信息。Gpu为GPU可支持的规格，Cpu和Memory分别为CPU和内存可支持的规格。如果非GPU机型，GPU为0。MinimalCpuPlatform代表含义这个CPU和内存规格只能在列出来的CPU平台支持。
         */
        MachineSizes?: {
            /**
             * Gpu为GPU可支持的规格即GPU颗数，非GPU机型，Gpu为0
             */
            Gpu?: number;
            /**
             * CPU和内存可支持的规格
             */
            Collection?: {
                /**
                 * CPU规格
                 */
                Cpu?: number;
                /**
                 * 内存规格
                 */
                Memory?: number[];
                /**
                 * CPU和内存规格只能在列出来的CPU平台支持
                 */
                MinimalCpuPlatform?: string[];
            }[];
        }[];
        /**
         * 	虚机可支持的特性。目前支持的特性网络增强|NetCapability、热升级|Hotplug。网络增强分为关闭|Normal、网络增强1.0|Super和网络增强2.0|Ultra。Name为可支持的特性名称，Modes为可以提供的模式类别等，RelatedToImageFeature为镜像上支持这个特性的标签。例如DescribeImage返回的字段Features包含HotPlug，说明该镜像支持热升级。MinimalCpuPlatform表示这个特性必须是列出来的CPU平台及以上的CPU才支持。
         */
        Features?: {
            /**
             * 可支持的特性名称。目前支持的特性网络增强|NetCapability、热升级|Hotplug
             */
            Name?: string;
            /**
             * 可以提供的模式类别
             */
            Modes?: {
                /**
                 * 模式|特性名称
                 */
                Name?: string;
                /**
                 * 为镜像上支持这个特性的标签。例如DescribeImage返回的字段Features包含HotPlug，说明该镜像支持热升级。
                 */
                RelatedToImageFeature?: string[];
                /**
                 * 这个特性必须是列出来的CPU平台及以上的CPU才支持
                 */
                MinimalCpuPlatform?: string[];
            }[];
        }[];
        /**
         * 区分是否是GPU机型：GPU机型|GPU，非GPU机型|Normal。
         */
        MachineClass?: string;
        /**
         * GPU的显存指标，value为值，单位是GB。
         */
        GraphicsMemory?: {
            /**
             * 值，单位是GB
             */
            Value?: number;
            /**
             * 交互展示参数，可忽略
             */
            Rate?: number;
        };
        /**
         * GPU的性能指标，value为值，单位是TFlops。
         */
        Performance?: {
            /**
             * 值，单位是TFlops
             */
            Value?: number;
            /**
             * 交互展示参数，可忽略
             */
            Rate?: number;
        };
    }[];
}
/**
 * DescribeImage - 获取指定数据中心镜像列表，用户可通过指定操作系统类型，镜像Id进行过滤。
 */
export interface DescribeImageRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone?: string;
    /**
     * 镜像类型。标准镜像：Base，镜像市场：Business， 自定义镜像：Custom，默认返回所有类型
     */
    ImageType?: string;
    /**
     * 操作系统类型：Linux， Windows 默认返回所有类型
     */
    OsType?: string;
    /**
     * 镜像Id
     */
    ImageId?: string;
    /**
     * 列表起始位置偏移量，默认为0
     */
    Offset?: number;
    /**
     * 返回数据长度，默认为20
     */
    Limit?: number;
    /**
     * 是否返回价格：1返回，0不返回；默认不返回
     */
    PriceSet?: number;
}
/**
 * DescribeImage - 获取指定数据中心镜像列表，用户可通过指定操作系统类型，镜像Id进行过滤。
 */
export interface DescribeImageResponse {
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
         * 特殊状态标识， 目前包含NetEnhnced（网络增强1.0）, NetEnhanced_Ultra]（网络增强2.0）, HotPlug(热升级), CloudInit, IPv6
         */
        Features?: string[];
        /**
         * 行业镜像类型（仅行业镜像将返回这个值）
         */
        FuncType?: string;
        /**
         * 集成软件名称（仅行业镜像将返回这个值）
         */
        IntegratedSoftware?: string;
        /**
         * 供应商（仅行业镜像将返回这个值）
         */
        Vendor?: string;
        /**
         * 介绍链接（仅行业镜像将返回这个值）
         */
        Links?: string;
        /**
         * 镜像状态， 可用：Available，制作中：Making， 不可用：Unavailable
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
    }[];
}
/**
 * DescribeIsolationGroup - 查询硬件隔离组列表。
 */
export interface DescribeIsolationGroupRequest {
    /**
     * 待查的硬件隔离组id
     */
    GroupId?: string;
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
 * DescribeIsolationGroup - 查询硬件隔离组列表。
 */
export interface DescribeIsolationGroupResponse {
    /**
     * 硬件隔离组集合。参见数据结构IsolationGroup。
     */
    IsolationGroupSet?: {
        /**
         * 硬件隔离组名称
         */
        GroupName?: string;
        /**
         * 硬件隔离组id
         */
        GroupId?: string;
        /**
         * 每个可用区中的机器数量。参见数据结构SpreadInfo。
         */
        SpreadInfoSet?: {
            /**
             * 可用区信息
             */
            Zone?: string;
            /**
             * 当前地域所有可用区中硬件隔离组中云主机的数量，不超过7。
             */
            UHostCount?: number;
        }[];
        /**
         * 备注
         */
        Remark?: string;
    }[];
    /**
     * 硬件隔离组总数
     */
    TotalCount?: number;
}
/**
 * DescribeUHostInstance - 获取主机或主机列表信息，并可根据数据中心，主机ID等参数进行过滤。
 */
export interface DescribeUHostInstanceRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone?: string;
    /**
     * 【数组】UHost主机的资源ID，例如UHostIds.0代表希望获取信息 的主机1，UHostIds.1代表主机2。 如果不传入，则返回当前Region 所有符合条件的UHost实例。
     */
    UHostIds?: string[];
    /**
     * 要查询的业务组名称
     */
    Tag?: string;
    /**
     * 列表起始位置偏移量，默认为0
     */
    Offset?: number;
    /**
     * 返回数据长度，默认为20，最大100
     */
    Limit?: number;
    /**
     * 硬件隔离组id。通过硬件隔离组筛选主机。
     */
    IsolationGroup?: string;
    /**
     * vpc id。通过VPC筛选主机。北京一地域无效。
     */
    VPCId?: string;
    /**
     * 子网id。通过子网筛选主机。北京一地域无效。
     */
    SubnetId?: string;
    /**
     * 要挂载的云盘id，过滤返回能被UDiskId挂载的云主机。目前主要针对rssd云盘使用
     */
    UDiskIdForAttachment?: string;
}
/**
 * DescribeUHostInstance - 获取主机或主机列表信息，并可根据数据中心，主机ID等参数进行过滤。
 */
export interface DescribeUHostInstanceResponse {
    /**
     * UHostInstance总数
     */
    TotalCount: number;
    /**
     * 云主机实例列表，每项参数可见下面 UHostInstanceSet
     */
    UHostSet: {
        /**
         * 可用区。参见 [可用区列表](../summary/regionlist.html)
         */
        Zone?: string;
        /**
         * true:有ipv6特性；false，没有ipv6特性
         */
        IPv6Feature?: boolean;
        /**
         * UHost实例ID
         */
        UHostId?: string;
        /**
         * 【建议不再使用】云主机机型（旧）。参考[[api:uhost-api:uhost_type|云主机机型说明]]。
         */
        UHostType?: string;
        /**
         * 云主机机型（新）。参考[[api:uhost-api:uhost_type#主机概念20版本|云主机机型说明]]。
         */
        MachineType?: string;
        /**
         * 云主机CPU平台。参考[[api:uhost-api:uhost_type#主机概念20版本|云主机机型说明]]。
         */
        CpuPlatform?: string;
        /**
         * 【建议不再使用】主机磁盘类型。 枚举值为：\\ > LocalDisk，本地磁盘; \\ > UDisk 云盘。\\只要有一块磁盘为本地盘，即返回LocalDisk。
         */
        StorageType?: string;
        /**
         * 【建议不再使用】主机的系统盘ID。
         */
        ImageId?: string;
        /**
         * 基础镜像ID（指当前自定义镜像的来源镜像）
         */
        BasicImageId?: string;
        /**
         * 基础镜像名称（指当前自定义镜像的来源镜像）
         */
        BasicImageName?: string;
        /**
         * 业务组名称
         */
        Tag?: string;
        /**
         * 备注
         */
        Remark?: string;
        /**
         * UHost实例名称
         */
        Name?: string;
        /**
         * 实例状态，枚举值：\\ >初始化: Initializing; \\ >启动中: Starting; \\> 运行中: Running; \\> 关机中: Stopping; \\ >关机: Stopped \\ >安装失败: Install Fail; \\ >重启中: Rebooting; \\ > 未知(空字符串，获取状态超时或出错)：""
         */
        State?: string;
        /**
         * 创建时间，格式为Unix时间戳
         */
        CreateTime?: number;
        /**
         * 计费模式，枚举值为： Year，按年付费； Month，按月付费； Dynamic，按需付费（需开启权限）；Preemptive 为抢占式实例；
         */
        ChargeType?: string;
        /**
         * 到期时间，格式为Unix时间戳
         */
        ExpireTime?: number;
        /**
         * 虚拟CPU核数，单位: 个
         */
        CPU?: number;
        /**
         * 内存大小，单位: MB
         */
        Memory?: number;
        /**
         * 是否自动续费，自动续费：“Yes”，不自动续费：“No”
         */
        AutoRenew?: string;
        /**
         * 磁盘信息见 UHostDiskSet
         */
        DiskSet?: {
            /**
             * 磁盘类型。请参考[[api:uhost-api:disk_type|磁盘类型]]。
             */
            DiskType: string;
            /**
             * 是否是系统盘。枚举值：\\ > True，是系统盘 \\ > False，是数据盘（默认）。Disks数组中有且只能有一块盘是系统盘。
             */
            IsBoot: string;
            /**
             * "true": 加密盘 "false"：非加密盘
             */
            Encrypted?: string;
            /**
             * 【建议不再使用】磁盘类型。系统盘: Boot，数据盘: Data,网络盘：Udisk
             */
            Type?: string;
            /**
             * 磁盘ID
             */
            DiskId?: string;
            /**
             * UDisk名字（仅当磁盘是UDisk时返回）
             */
            Name?: string;
            /**
             * 磁盘盘符
             */
            Drive?: string;
            /**
             * 磁盘大小，单位: GB
             */
            Size?: number;
            /**
             * 备份方案。若开通了数据方舟，则为DATAARK
             */
            BackupType?: string;
        }[];
        /**
         * 详细信息见 UHostIPSet
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
         * 网络增强。Normal: 无；Super： 网络增强1.0； Ultra: 网络增强2.0
         */
        NetCapability?: string;
        /**
         * 【建议不再使用】网络状态。 连接：Connected， 断开：NotConnected
         */
        NetworkState?: string;
        /**
         * 【建议不再使用】数据方舟模式。枚举值：\\ > Yes: 开启方舟； \\ > no，未开启方舟
         */
        TimemachineFeature?: string;
        /**
         * true: 开启热升级； false，未开启热升级
         */
        HotplugFeature?: boolean;
        /**
         * 【建议不再使用】仅北京A的云主机会返回此字段。基础网络模式：Default；子网模式：Private
         */
        SubnetType?: string;
        /**
         * 创建主机的最初来源镜像的操作系统名称（若直接通过基础镜像创建，此处返回和BasicImageName一致）
         */
        OsName?: string;
        /**
         * 操作系统类别。返回"Linux"或者"Windows"
         */
        OsType?: string;
        /**
         * 【建议不再使用】主机系列：N2，表示系列2；N1，表示系列1
         */
        HostType?: string;
        /**
         * 主机的生命周期类型。目前仅支持Normal：普通；
         */
        LifeCycle?: string;
        /**
         * GPU个数
         */
        GPU?: number;
        /**
         * 系统盘状态 Normal表示初始化完成；Initializing表示在初始化。仍在初始化的系统盘无法制作镜像。
         */
        BootDiskState?: string;
        /**
         * 总的数据盘存储空间。
         */
        TotalDiskSpace?: number;
        /**
         * 隔离组id，不在隔离组则返回""
         */
        IsolationGroup?: string;
        /**
         * true，支持cloutinit方式初始化；false,不支持
         */
        CloudInitFeature?: boolean;
        /**
         * RDMA集群id，仅快杰云主机返回该值；其他类型云主机返回""。当云主机的此值与RSSD云盘的RdmaClusterId相同时，RSSD可以挂载到这台云主机。
         */
        RdmaClusterId?: string;
        /**
         * 仅抢占式实例返回，LowSpeed为低速模式，PowerOff为关机模式
         */
        RestrictMode?: string;
        /**
         * true: 开启 hpc 系列功能；false: 未开启
         */
        HpcFeature?: boolean;
        /**
         * 密钥信息见 UHostKeyPair
         */
        KeyPair?: {
            /**
             * 密钥对ID
             */
            KeyPairId?: string;
            /**
             * 主机密钥对状态，Normal 正常，Deleted 删除
             */
            KeyPairState?: string;
        };
    }[];
}
/**
 * DescribeUHostKeyPairs - 查询一个或多个密钥对。
 */
export interface DescribeUHostKeyPairsRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone?: string;
    /**
     * 密钥对名称。
     */
    KeyPairName?: string;
    /**
     * 密钥对的指纹。
     */
    KeyPairFingerPrint?: string;
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
 * DescribeUHostKeyPairs - 查询一个或多个密钥对。
 */
export interface DescribeUHostKeyPairsResponse {
    /**
     * 密钥对信息集合
     */
    KeyPairs: {
        /**
         * 项目ID。
         */
        ProjectId?: string;
        /**
         * 密钥对ID。
         */
        KeyPairId?: string;
        /**
         * 密钥对名称。 长度为1~63个英文或中文字符。
         */
        KeyPairName?: string;
        /**
         * 密钥对指纹。md5(ProjectId|KeyPairId|PublicKey)
         */
        KeyPairFingerPrint?: string;
        /**
         * 密钥对的创建时间，格式为Unix Timestamp。
         */
        CreateTime?: number;
    }[];
    /**
     * 密钥对总数
     */
    TotalCount: number;
}
/**
 * DescribeUHostTags - 获取指定数据中心的业务组列表。
 */
export interface DescribeUHostTagsRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone?: string;
}
/**
 * DescribeUHostTags - 获取指定数据中心的业务组列表。
 */
export interface DescribeUHostTagsResponse {
    /**
     * 已有主机的业务组总数
     */
    TotalCount?: number;
    /**
     * 业务组集合见 UHostTagSet
     */
    TagSet?: {
        /**
         * 业务组名称
         */
        Tag?: string;
        /**
         * 该业务组中包含的主机个数
         */
        TotalCount?: number;
        /**
         * 可用区
         */
        Zone?: string;
    }[];
}
/**
 * GetAttachedDiskUpgradePrice - 获取挂载磁盘的升级价格
 */
export interface GetAttachedDiskUpgradePriceRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone?: string;
    /**
     * 磁盘大小，单位GB，步长为10。取值范围需大于当前磁盘大小，最大值请参考[[api:uhost-api:disk_type|磁盘类型]]。
     */
    DiskSpace: number;
    /**
     * 磁盘ID。参见 [DescribeUHostInstance](describe_uhost_instance.html)返回值中的DiskSet。
     */
    DiskId: string;
    /**
     * UHost实例ID。 参见 [DescribeUHostInstance](describe_uhost_instance.html)。
     */
    UHostId: string;
    /**
     * 磁盘备份方案。枚举值：\\ > NONE，无备份 \\ > DATAARK，数据方舟 \\> SNAPSHOT(SNAPSHOT模式目前仅在上海C支持)，快照 \\ 当前磁盘支持的备份模式参考 [[api:uhost-api:disk_type|磁盘类型]]。默认值为当前的备份模式。
     */
    BackupMode?: string;
}
/**
 * GetAttachedDiskUpgradePrice - 获取挂载磁盘的升级价格
 */
export interface GetAttachedDiskUpgradePriceResponse {
    /**
     * 升级差价。精度为小数点后2位。
     */
    Price?: number;
}
/**
 * GetUHostInstancePrice - 根据UHost实例配置，获取UHost实例的价格。
 */
export interface GetUHostInstancePriceRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone?: string;
    /**
     * CPU核数。可选参数：1-64。可选范围参照控制台。默认值: 4
     */
    CPU: number;
    /**
     * 内存大小。单位：MB。范围 ：[1024, 262144]，取值为1024的倍数（可选范围参照好控制台）。默认值：8192
     */
    Memory: number;
    /**
     * 购买台数，范围[1,5]
     */
    Count: number;
    /**
     *
     */
    Disks?: {
        /**
         * 是否是系统盘。枚举值：\\ > True，是系统盘 \\ > False，是数据盘（默认）。Disks数组中有且只能有一块盘是系统盘。
         */
        IsBoot: string;
        /**
         * 磁盘大小，单位GB。请参考[[api:uhost-api:disk_type|磁盘类型]]。
         */
        Size: number;
        /**
         * 磁盘类型。请参考[[api:uhost-api:disk_type|磁盘类型]]。
         */
        Type: string;
        /**
         * 磁盘备份方案。枚举值：\\ > NONE，无备份 \\ > DATAARK，数据方舟 \\ > SNAPSHOT，快照\\ 当前磁盘支持的备份模式参考 [[api:uhost-api:disk_type|磁盘类型]]
         */
        BackupType?: string;
    }[];
    /**
     * 镜像Id，可通过 [DescribeImage](describe_image.html) 获取镜像ID， 如果镜像ID不传，系统盘大小必传
     */
    ImageId?: string;
    /**
     * GPU卡核心数。仅GPU机型支持此字段。
     */
    GPU?: number;
    /**
     * 计费模式。枚举值为： \\ > Year，按年付费； \\ > Month，按月付费；\\ > Dynamic，按小时付费 // >Preemptive 抢占式实例 \\ 如果不传某个枚举值，默认返回年付、月付、时付的价格组合集。
     */
    ChargeType?: string;
    /**
     * 网络增强。枚举值：Normal，不开启; Super，开启网络增强1.0。 默认值为Normal。
     */
    NetCapability?: string;
    /**
     * 【待废弃】云主机机型（V1版本概念）。参考[[api:uhost-api:uhost_type|云主机机型说明]]。
     */
    UHostType?: string;
    /**
     * 云主机机型（V2版本概念）。枚举值["N", "C", "G", "O", "OS", "OPRO", "OMAX", "O.BM"]。参考[[api:uhost-api:uhost_type|云主机机型说明]]。
     */
    MachineType?: string;
    /**
     * GPU类型，枚举值["K80", "P40", "V100", "T4","T4S","2080Ti","2080Ti-4C","1080Ti"]
     */
    GpuType?: string;
    /**
     * 购买时长。默认: 1。按小时购买(Dynamic)时无需此参数。 月付时，此参数传0，代表了购买至月末。
     */
    Quantity?: number;
    /**
     * 取值"Intel" "Amd"，默认值“Intel”
     */
    CpuPlatform?: string;
    /**
     *
     */
    Volumes?: object[];
    /**
     *
     */
    VirtualGpu?: object;
}
/**
 * GetUHostInstancePrice - 根据UHost实例配置，获取UHost实例的价格。
 */
export interface GetUHostInstancePriceResponse {
    /**
     * 价格列表 UHostPriceSet
     */
    PriceSet?: {
        /**
         * 计费类型。Year，Month，Dynamic
         */
        ChargeType: string;
        /**
         * 价格，单位: 元，保留小数点后两位有效数字
         */
        Price: number;
        /**
         * 限时优惠的折前原价（即列表价乘以商务折扣后的单价）。
         */
        OriginalPrice: number;
        /**
         * 产品列表价。
         */
        ListPrice?: number;
    }[];
}
/**
 * GetUHostInstanceVncInfo - 获取指定UHost实例的管理VNC配置详细信息。
 */
export interface GetUHostInstanceVncInfoRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone?: string;
    /**
     * UHost实例ID 参见 [DescribeUHostInstance](./describe_uhost_instance.html)
     */
    UHostId: string;
}
/**
 * GetUHostInstanceVncInfo - 获取指定UHost实例的管理VNC配置详细信息。
 */
export interface GetUHostInstanceVncInfoResponse {
    /**
     * UHost实例ID
     */
    UHostId?: string;
    /**
     * Vnc登录IP
     */
    VncIP?: string;
    /**
     * Vnc登录端口
     */
    VncPort?: number;
    /**
     * Vnc 登录密码
     */
    VncPassword?: string;
}
/**
 * GetUHostUpgradePrice - 获取UHost实例升级配置的价格。可选配置范围请参考[[api:uhost-api:uhost_type|云主机机型说明]]。
 */
export interface GetUHostUpgradePriceRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone?: string;
    /**
     * UHost实例ID。 参见 [DescribeUHostInstance](describe_uhost_instance.html)。
     */
    UHostId: string;
    /**
     * 虚拟CPU核数。可选参数：1-64（可选范围参考控制台）。默认值为当前实例的CPU核数。
     */
    CPU?: number;
    /**
     * 内存大小。单位：MB。范围 ：[1024, 262144]，取值为1024的倍数（可选范围参考控制台）。默认值为当前实例的内存大小。
     */
    Memory?: number;
    /**
     * 网卡升降级（1，表示升级，2表示降级，0表示不变）
     */
    NetCapValue?: number;
}
/**
 * GetUHostUpgradePrice - 获取UHost实例升级配置的价格。可选配置范围请参考[[api:uhost-api:uhost_type|云主机机型说明]]。
 */
export interface GetUHostUpgradePriceResponse {
    /**
     * 规格调整差价。精确到小数点后2位。
     */
    Price?: number;
    /**
     * 限时优惠的折前原价
     */
    OriginalPrice?: number;
}
/**
 * ImportCustomImage - 把UFile的镜像文件导入到UHost，生成自定义镜像
 */
export interface ImportCustomImageRequest {
    /**
     * 镜像名称
     */
    ImageName: string;
    /**
     * UFile私有空间地址
     */
    UFileUrl: string;
    /**
     * 操作系统平台，比如CentOS、Ubuntu、Windows、RedHat等，请参考控制台的镜像版本；若导入控制台上没有的操作系统，参数为Other
     */
    OsType: string;
    /**
     * 操作系统详细版本，请参考控制台的镜像版本；OsType为Other时，输入参数为Other
     */
    OsName: string;
    /**
     * 镜像格式，可选RAW、VHD、VMDK、qcow2
     */
    Format: string;
    /**
     * 是否授权。必须填true
     */
    Auth: boolean;
    /**
     * 镜像描述
     */
    ImageDescription?: string;
}
/**
 * ImportCustomImage - 把UFile的镜像文件导入到UHost，生成自定义镜像
 */
export interface ImportCustomImageResponse {
    /**
     * 镜像Id
     */
    ImageId?: string;
}
/**
 * ImportUHostKeyPairs - 导入密钥对后，仅保管公钥部分，需自行妥善保存密钥对的私钥部分。
 */
export interface ImportUHostKeyPairsRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone?: string;
    /**
     * 密钥对名称。由字母，数字，符号组成，长度为1-63位。
     */
    KeyPairName: string;
    /**
     * 密钥对的公钥内容。
     */
    PublicKeyBody: string;
}
/**
 * ImportUHostKeyPairs - 导入密钥对后，仅保管公钥部分，需自行妥善保存密钥对的私钥部分。
 */
export interface ImportUHostKeyPairsResponse {
    /**
     * 密钥对名称
     */
    KeyPairName: string;
    /**
     * 密钥对标识
     */
    KeyPairId?: string;
    /**
     * 密钥对指纹。根据RFC4716定义的公钥指纹格式，采用MD5信息摘要算法。算法处理的具体信息格式：`ProjectIdKeyPairId|PublicKeyBody`。
     */
    KeyPairFingerPrint?: string;
}
/**
 * LeaveIsolationGroup - 移除硬件隔离组中的主机
 */
export interface LeaveIsolationGroupRequest {
    /**
     * 可用区信息
     */
    Zone?: string;
    /**
     * 硬件隔离组id
     */
    GroupId: string;
    /**
     * 主机id
     */
    UHostId: string;
}
/**
 * LeaveIsolationGroup - 移除硬件隔离组中的主机
 */
export interface LeaveIsolationGroupResponse {
    /**
     * 主机id
     */
    UHostId: string;
}
/**
 * ModifyUHostIP - 修改云主机内网 IP 地址
 */
export interface ModifyUHostIPRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * 需要修改为的 IP 地址。新的IP地址和旧IP地址必须属于统一子网，且和主机内部的配置文件一致。
     */
    PresentIpAddress: string;
    /**
     * 指定云主机 ID。
     */
    UHostId: string;
    /**
     * 所需修改的原 IP 地址 ，当云主机只有一个IP地址时，此参数不必填写。
     */
    PreviousIpAddress?: string;
}
/**
 * ModifyUHostIP - 修改云主机内网 IP 地址
 */
export interface ModifyUHostIPResponse {
    /**
     * 目标云主机 ID
     */
    UHostId?: string;
}
/**
 * ModifyUHostInstanceName - 修改指定UHost实例名称，需要给出数据中心，UHostId，及新的实例名称。
 */
export interface ModifyUHostInstanceNameRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone?: string;
    /**
     * UHost实例ID 参见 [DescribeUHostInstance](describe_uhost_instance.html)
     */
    UHostId: string;
    /**
     * UHost实例名称
     */
    Name?: string;
}
/**
 * ModifyUHostInstanceName - 修改指定UHost实例名称，需要给出数据中心，UHostId，及新的实例名称。
 */
export interface ModifyUHostInstanceNameResponse {
    /**
     * UHost实例ID
     */
    UHostId?: string;
}
/**
 * ModifyUHostInstanceRemark - 修改指定UHost实例备注信息。
 */
export interface ModifyUHostInstanceRemarkRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone?: string;
    /**
     * UHost实例ID 参见 [DescribeUHostInstance](describe_uhost_instance.html)
     */
    UHostId: string;
    /**
     * 备注
     */
    Remark?: string;
}
/**
 * ModifyUHostInstanceRemark - 修改指定UHost实例备注信息。
 */
export interface ModifyUHostInstanceRemarkResponse {
    /**
     * UHost实例ID
     */
    UHostId?: string;
}
/**
 * ModifyUHostInstanceTag - 修改指定UHost实例业务组标识。
 */
export interface ModifyUHostInstanceTagRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone?: string;
    /**
     * UHost实例ID 参见 [DescribeUHostInstance](describe_uhost_instance.html)
     */
    UHostId: string;
    /**
     * 业务组名称
     */
    Tag?: string;
}
/**
 * ModifyUHostInstanceTag - 修改指定UHost实例业务组标识。
 */
export interface ModifyUHostInstanceTagResponse {
    /**
     * UHost实例ID
     */
    UHostId?: string;
}
/**
 * PoweroffUHostInstance - 直接关闭UHost实例电源，无需等待实例正常关闭。
 */
export interface PoweroffUHostInstanceRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone?: string;
    /**
     * UHost实例ID 参见 [DescribeUHostInstance](./describe_uhost_instance.html)
     */
    UHostId: string;
}
/**
 * PoweroffUHostInstance - 直接关闭UHost实例电源，无需等待实例正常关闭。
 */
export interface PoweroffUHostInstanceResponse {
    /**
     * UHost的实例ID
     */
    UHostId?: string;
}
/**
 * RebootUHostInstance - 重新启动UHost实例，需要指定数据中心及UHostID两个参数的值。
 */
export interface RebootUHostInstanceRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone?: string;
    /**
     * UHost实例ID 参见 [DescribeUHostInstance](describe_uhost_instance.html)
     */
    UHostId: string;
    /**
     * 加密盘密码
     */
    DiskPassword?: string;
}
/**
 * RebootUHostInstance - 重新启动UHost实例，需要指定数据中心及UHostID两个参数的值。
 */
export interface RebootUHostInstanceResponse {
    /**
     * UHost实例ID
     */
    UHostId?: string;
}
/**
 * ReinstallUHostInstance - 重新安装指定UHost实例的操作系统
 */
export interface ReinstallUHostInstanceRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone?: string;
    /**
     * UHost实例资源ID 参见 [DescribeUHostInstance](describe_uhost_instance.html)
     */
    UHostId: string;
    /**
     * 如果重装UHost实例时LoginMode为Password，则必须填写，如果LoginMode为KeyPair，不需要填写 （密码格式使用BASE64编码；举例如下：# echo -n Password1 | base64UGFzc3dvcmQx。）
     */
    Password?: string;
    /**
     * 镜像Id，默认使用原镜像 参见 [DescribeImage](describe_image.html)
     */
    ImageId?: string;
    /**
     * 是否保留数据盘，保留：Yes，不报留：No， 默认：Yes；如果是从Windows重装为Linux或反之，则无法保留数据盘（该参数目前仅对本地数据盘起作用）
     */
    ReserveDisk?: string;
    /**
     * 系统盘大小。 单位：GB， 范围[20,100]， 步长：10
     */
    BootDiskSpace?: number;
    /**
     * cloudinit初始化使用。注意：1、总数据量大小不超多16K 2、使用base64编码
     */
    UserData?: string;
    /**
     * 数据盘是否需要自动分区挂载。当镜像支持Cloud-init Feature时可填写此字段。取值“On”（默认值）， “Off”
     */
    AutoDataDiskInit?: string;
    /**
     * 主机登陆模式。密码（默认选项）: Password，密钥 KeyPair。
     */
    LoginMode?: string;
    /**
     * KeypairId 密钥对ID，LoginMode为KeyPair时此项必须。
     */
    KeyPairId?: string;
}
/**
 * ReinstallUHostInstance - 重新安装指定UHost实例的操作系统
 */
export interface ReinstallUHostInstanceResponse {
    /**
     * UHost实例资源ID
     */
    UHostId?: string;
}
/**
 * ResetUHostInstancePassword - 重置UHost实例的管理员密码。
 */
export interface ResetUHostInstancePasswordRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone?: string;
    /**
     * UHost实例ID
     */
    UHostId: string;
    /**
     * UHost新密码（密码格式使用BASE64编码）
     */
    Password: string;
}
/**
 * ResetUHostInstancePassword - 重置UHost实例的管理员密码。
 */
export interface ResetUHostInstancePasswordResponse {
    /**
     * UHost实例ID
     */
    UHostId?: string;
}
/**
 * ResizeAttachedDisk - 修改挂载的磁盘大小，包含系统盘和数据盘
 */
export interface ResizeAttachedDiskRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * UHost实例ID。 参见 [DescribeUHostInstance](describe_uhost_instance.html)。
     */
    UHostId: string;
    /**
     * 磁盘大小，单位GB，步长为10。取值范围需大于当前磁盘大小，最大值请参考[[api:uhost-api:disk_type|磁盘类型]]。
     */
    DiskSpace: number;
    /**
     * 磁盘ID。参见 [DescribeUHostInstance](describe_uhost_instance.html)返回值中的DiskSet。
     */
    DiskId: string;
    /**
     * 用于测试磁盘是否支持在线扩容。DryRun=true,不会执行实际操作，只会返回操作的预期结果。DryRun = false ，正常执行扩容操作。
     */
    DryRun?: boolean;
}
/**
 * ResizeAttachedDisk - 修改挂载的磁盘大小，包含系统盘和数据盘
 */
export interface ResizeAttachedDiskResponse {
    /**
     * 改配成功的磁盘id
     */
    DiskId?: string;
    /**
     * 扩容后的状态。NeedRestart = true，必须关闭后启动实例才能使用扩容的磁盘空间。NeedRestart = false,磁盘扩容后无需重启操作。
     */
    NeedRestart?: boolean;
}
/**
 * ResizeUHostInstance - 修改指定UHost实例的资源配置，如CPU核心数，内存容量大小，网络增强等。可选配置范围请参考[[api:uhost-api:uhost_type|云主机机型说明]]。
 */
export interface ResizeUHostInstanceRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone?: string;
    /**
     * UHost实例ID 参见 [DescribeUHostInstance](describe_uhost_instance.html)
     */
    UHostId: string;
    /**
     * 虚拟CPU核数。可选参数：1-240（可选范围与UHostType相关）。默认值为当前实例的CPU核数
     */
    CPU?: number;
    /**
     * 内存大小。单位：MB。范围 ：[1024, 1966080]，取值为1024的倍数（可选范围与UHostType相关）。默认值为当前实例的内存大小。
     */
    Memory?: number;
    /**
     * 网卡升降级（1，表示升级，2表示降级，0表示不变）
     */
    NetCapValue?: number;
}
/**
 * ResizeUHostInstance - 修改指定UHost实例的资源配置，如CPU核心数，内存容量大小，网络增强等。可选配置范围请参考[[api:uhost-api:uhost_type|云主机机型说明]]。
 */
export interface ResizeUHostInstanceResponse {
    /**
     * UHost实例ID
     */
    UHostId?: string;
}
/**
 * StartUHostInstance - 启动处于关闭状态的UHost实例，需要指定数据中心及UHostID两个参数的值。
 */
export interface StartUHostInstanceRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone?: string;
    /**
     * UHost实例ID 参见 [DescribeUHostInstance](describe_uhost_instance.html)
     */
    UHostId: string;
    /**
     * 加密盘密码
     */
    DiskPassword?: string;
}
/**
 * StartUHostInstance - 启动处于关闭状态的UHost实例，需要指定数据中心及UHostID两个参数的值。
 */
export interface StartUHostInstanceResponse {
    /**
     * UHost实例ID
     */
    UHostId?: string;
}
/**
 * StopUHostInstance - 指停止处于运行状态的UHost实例，需指定数据中心及UhostID。
 */
export interface StopUHostInstanceRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone?: string;
    /**
     * UHost实例ID 参见 [DescribeUHostInstance](describe_uhost_instance.html)
     */
    UHostId: string;
}
/**
 * StopUHostInstance - 指停止处于运行状态的UHost实例，需指定数据中心及UhostID。
 */
export interface StopUHostInstanceResponse {
    /**
     * UHost实例ID
     */
    UHostId?: string;
}
/**
 * TerminateCustomImage - 删除用户自定义镜像
 */
export interface TerminateCustomImageRequest {
    /**
     * 自制镜像ID 参见 [DescribeImage](describe_image.html)
     */
    ImageId: string;
}
/**
 * TerminateCustomImage - 删除用户自定义镜像
 */
export interface TerminateCustomImageResponse {
    /**
     * 自制镜像Id
     */
    ImageId?: string;
}
/**
 * TerminateUHostInstance - 删除指定数据中心的UHost实例。
 */
export interface TerminateUHostInstanceRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone?: string;
    /**
     * UHost资源Id 参见 [DescribeUHostInstance](describe_uhost_instance.html)
     */
    UHostId: string;
    /**
     * 删除主机时是否释放绑定的EIP。默认为false。
     */
    ReleaseEIP?: boolean;
    /**
     * 删除主机时是否同时删除挂载的数据盘。默认为false。
     */
    ReleaseUDisk?: boolean;
}
/**
 * TerminateUHostInstance - 删除指定数据中心的UHost实例。
 */
export interface TerminateUHostInstanceResponse {
    /**
     * 用于判断主机删除时是否进入回收站。放入回收站:"Yes", 彻底删除：“No”。
     */
    InRecycle: string;
    /**
     * UHost 实例 Id
     */
    UHostId?: string;
}
/**
 * UpgradeToArkUHostInstance - 普通升级为方舟机型
 */
export interface UpgradeToArkUHostInstanceRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * UHost主机的资源ID，例如UHostIds.0代表希望升级的主机1，UHostIds.1代表主机2。
     */
    UHostIds: string[];
    /**
     * 代金券ID 请参考DescribeCoupon接口
     */
    CouponId?: string;
}
/**
 * UpgradeToArkUHostInstance - 普通升级为方舟机型
 */
export interface UpgradeToArkUHostInstanceResponse {
    /**
     * UHost主机的资源ID数组
     */
    UHostSet?: string[];
}
