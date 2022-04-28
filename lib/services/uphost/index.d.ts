import Client from '../../core/client';
import { ConfigOptions } from '../../core/config';
import { CredentialOptions } from '../../core/credential';
/**
 * This client is used to call actions of **uphost** service
 */
export default class UPHostClient extends Client {
    constructor({ config, credential, }: {
        config: ConfigOptions;
        credential: CredentialOptions;
    });
    /**
     * CreatePHost - 指定数据中心，根据资源使用量创建指定数量的UPHost物理云主机实例。
     *
     * See also: https://docs.ucloud.cn/api/uphost-api/create_phost
     */
    createPHost(request?: CreatePHostRequest): Promise<CreatePHostResponse>;
    /**
     * CreatePHostImage - 创建裸金属2.0用户自定义镜像
     *
     * See also: https://docs.ucloud.cn/api/uphost-api/create_phost_image
     */
    createPHostImage(request?: CreatePHostImageRequest): Promise<CreatePHostImageResponse>;
    /**
     * DescribeBaremetalMachineType - 获取裸金属机型的详细描述信息
     *
     * See also: https://docs.ucloud.cn/api/uphost-api/describe_baremetal_machine_type
     */
    describeBaremetalMachineType(request?: DescribeBaremetalMachineTypeRequest): Promise<DescribeBaremetalMachineTypeResponse>;
    /**
     * DescribePHost - 获取物理机详细信息
     *
     * See also: https://docs.ucloud.cn/api/uphost-api/describe_phost
     */
    describePHost(request?: DescribePHostRequest): Promise<DescribePHostResponse>;
    /**
     * DescribePHostImage - 获取物理云主机镜像列表
     *
     * See also: https://docs.ucloud.cn/api/uphost-api/describe_phost_image
     */
    describePHostImage(request?: DescribePHostImageRequest): Promise<DescribePHostImageResponse>;
    /**
     * DescribePHostMachineType - 获取物理云机型的详细描述信息
     *
     * See also: https://docs.ucloud.cn/api/uphost-api/describe_phost_machine_type
     */
    describePHostMachineType(request?: DescribePHostMachineTypeRequest): Promise<DescribePHostMachineTypeResponse>;
    /**
     * DescribePHostTags - 获取物理机tag列表（业务组）
     *
     * See also: https://docs.ucloud.cn/api/uphost-api/describe_phost_tags
     */
    describePHostTags(request?: DescribePHostTagsRequest): Promise<DescribePHostTagsResponse>;
    /**
     * GetPHostDiskUpgradePrice - 获取物理云裸金属挂载磁盘的升级价格
     *
     * See also: https://docs.ucloud.cn/api/uphost-api/get_phost_disk_upgrade_price
     */
    getPHostDiskUpgradePrice(request?: GetPHostDiskUpgradePriceRequest): Promise<GetPHostDiskUpgradePriceResponse>;
    /**
     * GetPHostPrice - 获取物理机价格列表
     *
     * See also: https://docs.ucloud.cn/api/uphost-api/get_phost_price
     */
    getPHostPrice(request?: GetPHostPriceRequest): Promise<GetPHostPriceResponse>;
    /**
     * ModifyPHostImageInfo - 修改自定义镜像名称和备注
     *
     * See also: https://docs.ucloud.cn/api/uphost-api/modify_phost_image_info
     */
    modifyPHostImageInfo(request?: ModifyPHostImageInfoRequest): Promise<ModifyPHostImageInfoResponse>;
    /**
     * ModifyPHostInfo - 更改物理机信息
     *
     * See also: https://docs.ucloud.cn/api/uphost-api/modify_phost_info
     */
    modifyPHostInfo(request?: ModifyPHostInfoRequest): Promise<ModifyPHostInfoResponse>;
    /**
     * PoweroffPHost - 断电物理云主机
     *
     * See also: https://docs.ucloud.cn/api/uphost-api/poweroff_phost
     */
    poweroffPHost(request?: PoweroffPHostRequest): Promise<PoweroffPHostResponse>;
    /**
     * RebootPHost - 重启物理机
     *
     * See also: https://docs.ucloud.cn/api/uphost-api/reboot_phost
     */
    rebootPHost(request?: RebootPHostRequest): Promise<RebootPHostResponse>;
    /**
     * ReinstallPHost - 重装物理机操作系统
     *
     * See also: https://docs.ucloud.cn/api/uphost-api/reinstall_phost
     */
    reinstallPHost(request?: ReinstallPHostRequest): Promise<ReinstallPHostResponse>;
    /**
     * ResetPHostPassword - 重置裸金属实例的管理员密码
     *
     * See also: https://docs.ucloud.cn/api/uphost-api/reset_phost_password
     */
    resetPHostPassword(request?: ResetPHostPasswordRequest): Promise<ResetPHostPasswordResponse>;
    /**
     * ResizePHostAttachedDisk - 修改裸金属物理云已经挂载的云盘容量大小
     *
     * See also: https://docs.ucloud.cn/api/uphost-api/resize_phost_attached_disk
     */
    resizePHostAttachedDisk(request?: ResizePHostAttachedDiskRequest): Promise<ResizePHostAttachedDiskResponse>;
    /**
     * StartPHost - 启动物理机
     *
     * See also: https://docs.ucloud.cn/api/uphost-api/start_phost
     */
    startPHost(request?: StartPHostRequest): Promise<StartPHostResponse>;
    /**
     * StopPHost - 关闭物理机
     *
     * See also: https://docs.ucloud.cn/api/uphost-api/stop_phost
     */
    stopPHost(request?: StopPHostRequest): Promise<StopPHostResponse>;
    /**
     * TerminatePHost - 删除物理云主机
     *
     * See also: https://docs.ucloud.cn/api/uphost-api/terminate_phost
     */
    terminatePHost(request?: TerminatePHostRequest): Promise<TerminatePHostResponse>;
    /**
     * TerminatePHostImage - 删除裸金属2.0用户自定义镜像
     *
     * See also: https://docs.ucloud.cn/api/uphost-api/terminate_phost_image
     */
    terminatePHostImage(request?: TerminatePHostImageRequest): Promise<TerminatePHostImageResponse>;
}
/**
 * CreatePHost - 指定数据中心，根据资源使用量创建指定数量的UPHost物理云主机实例。
 */
export interface CreatePHostRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * ImageId，可以通过接口 [DescribePHostImage](api/uphost-api/describe_phost_image.html)获取
     */
    ImageId: string;
    /**
     * 密码（密码需使用base64进行编码）
     */
    Password: string;
    /**
     * 物理机类型，默认为：db-2(基础型-SAS-V3)
     */
    Type?: string;
    /**
     * 物理机名称，默认为phost
     */
    Name?: string;
    /**
     * 物理机备注，默认为空
     */
    Remark?: string;
    /**
     * 业务组，默认为default
     */
    Tag?: string;
    /**
     * 计费模式，枚举值为：year, 按年付费； month,按月付费；默认为按月付费
     */
    ChargeType?: string;
    /**
     * 购买时长，1-10个月或1-10年；默认值为1。月付时，此参数传0，代表购买至月末，1代表整月。
     */
    Quantity?: string;
    /**
     * 防火墙ID，默认：Web推荐防火墙。如何查询SecurityGroupId请参见 [DescribeFirewall](api/unet-api/describe_firewall.html)。
     */
    SecurityGroupId?: string;
    /**
     * Raid配置，默认Raid10  支持:Raid0、Raid1、Raid5、Raid10，NoRaid
     */
    Raid?: string;
    /**
     * VPC ID，不填为默认，VPC2.0下需要填写此字段。
     */
    VPCId?: string;
    /**
     * 子网ID，不填为默认，VPC2.0下需要填写此字段。
     */
    SubnetId?: string;
    /**
     * 网络环境，可选千兆：1G ，万兆：10G， 默认1G。智能网卡可以选择25G。
     */
    Cluster?: string;
    /**
     *
     */
    Disks?: {
        /**
         * 裸金属机型参数->是否是系统盘。枚举值： True，是系统盘。 False，是数据盘（默认）。Disks数组中有且只能有一块盘是系统盘。
         */
        IsBoot?: string;
        /**
         * 裸金属机型参数->磁盘类型：枚举值：CLOUD_RSSD
         */
        Type?: string;
        /**
         * 裸金属机型参数->磁盘大小，单位GB，必须是10GB的整数倍。系统盘20-500GB，数据盘单块盘20-32000GB。
         */
        Size?: number;
        /**
         * 裸金属机型参数->云盘代金券id。不适用于系统盘。请通过DescribeCoupon接口查询，或登录用户中心查看
         */
        CouponId?: string;
    }[];
    /**
     * 指定内网ip创建
     */
    VpcIp?: string;
    /**
     * 代金券
     */
    CouponId?: string;
}
/**
 * CreatePHost - 指定数据中心，根据资源使用量创建指定数量的UPHost物理云主机实例。
 */
export interface CreatePHostResponse {
    /**
     * PHost的资源ID数组
     */
    PHostId?: string[];
}
/**
 * CreatePHostImage - 创建裸金属2.0用户自定义镜像
 */
export interface CreatePHostImageRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * UPHost实例ID
     */
    PHostId: string;
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
 * CreatePHostImage - 创建裸金属2.0用户自定义镜像
 */
export interface CreatePHostImageResponse {
    /**
     * 镜像ID
     */
    ImageId: string;
}
/**
 * DescribeBaremetalMachineType - 获取裸金属机型的详细描述信息
 */
export interface DescribeBaremetalMachineTypeRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * 具体机型。若不填写，则返回全部机型
     */
    Type?: string;
}
/**
 * DescribeBaremetalMachineType - 获取裸金属机型的详细描述信息
 */
export interface DescribeBaremetalMachineTypeResponse {
    /**
     * 机型列表，模型：PHostCloudMachineTypeSet
     */
    MachineTypes?: {
        /**
         * 物理云主机机型别名，全网唯一。
         */
        Type: string;
        /**
         * CPU信息
         */
        CPU?: {
            /**
             * CPU型号
             */
            Model?: string;
            /**
             * CPU主频
             */
            Frequence?: number;
            /**
             * CPU个数
             */
            Count?: number;
            /**
             * CPU核数
             */
            CoreCount?: number;
        };
        /**
         * 内存大小，单位MB
         */
        Memory?: number;
        /**
         * 其他组件信息
         */
        Components?: {
            /**
             * 组件名称
             */
            Name?: string;
            /**
             * 组件数量
             */
            Count?: number;
        };
        /**
         * 集群库存信息
         */
        Clusters?: {
            /**
             * 集群名。枚举值：千兆网络集群：1G；万兆网络集群：10G；智能网卡网络：25G；
             */
            Name?: string;
            /**
             * 库存状态。枚举值：有库存：Available；无库存：SoldOut
             */
            StockStatus?: string;
        }[];
    }[];
}
/**
 * DescribePHost - 获取物理机详细信息
 */
export interface DescribePHostRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone?: string;
    /**
     * PHost资源ID，若为空，则返回当前Region所有PHost。
     */
    PHostId?: string[];
    /**
     * 数据偏移量，默认为0
     */
    Offset?: number;
    /**
     * 返回数据长度，默认为20
     */
    Limit?: number;
    /**
     * 要挂载的云盘id，过滤返回能被UDiskId挂载的云主机。目前主要针对rssd云盘使用
     */
    UDiskIdForAttachment?: string;
    /**
     * ULB使用参数，获取同VPC下机器信息。
     */
    VPCId?: string;
}
/**
 * DescribePHost - 获取物理机详细信息
 */
export interface DescribePHostResponse {
    /**
     * 满足条件的PHost总数
     */
    TotalCount?: number;
    /**
     * PHost资源列表，参见 PHostSet
     */
    PHostSet?: {
        /**
         * 可用区，参见 [可用区列表](../summary/regionlist.html)
         */
        Zone?: string;
        /**
         * PHost资源ID
         */
        PHostId?: string;
        /**
         * 物理机序列号
         */
        SN?: string;
        /**
         * 物理云主机状态。枚举值：\\ > 初始化:Initializing; \\ > 启动中：Starting； \\ > 运行中：Running；\\ > 关机中：Stopping； \\ > 安装失败：InstallFailed； \\ > 重启中：Rebooting；\\ > 关机：Stopped； \\ > 迁移中(裸金属云盘)：Migrating
         */
        PMStatus?: string;
        /**
         * 物理机名称
         */
        Name?: string;
        /**
         * 物理机备注
         */
        Remark?: string;
        /**
         * 业务组
         */
        Tag?: string;
        /**
         * 镜像名称
         */
        ImageName?: string;
        /**
         * 操作系统名称
         */
        OSname?: string;
        /**
         * 创建时间
         */
        CreateTime?: number;
        /**
         * 到期时间
         */
        ExpireTime?: number;
        /**
         * 计费模式，枚举值为： Year，按年付费； Month，按月付费；默认为月付
         */
        ChargeType?: string;
        /**
         * 电源状态，on 或 off
         */
        PowerState?: string;
        /**
         * 物理机类型，参见DescribePHostMachineType返回值
         */
        PHostType?: string;
        /**
         * 内存大小，单位：MB
         */
        Memory?: number;
        /**
         * CPU信息，见 PHostCPUSet
         */
        CPUSet?: {
            /**
             * CPU型号
             */
            Model?: string;
            /**
             * CPU主频
             */
            Frequence?: number;
            /**
             * CPU个数
             */
            Count?: number;
            /**
             * CPU核数
             */
            CoreCount?: number;
        };
        /**
         * 磁盘信息，见 PHostDescDiskSet
         */
        DiskSet?: {
            /**
             * 单盘大小，单位GB
             */
            Space?: number;
            /**
             * 磁盘数量
             */
            Count?: number;
            /**
             * 磁盘属性
             */
            Type?: string;
            /**
             * 磁盘名称，sys/data
             */
            Name?: string;
            /**
             * 磁盘IO性能，单位MB/s（待废弃）
             */
            IOCap?: number;
            /**
             * 裸金属机型参数：磁盘盘符
             */
            Drive?: string;
            /**
             * 裸金属机型参数：磁盘ID
             */
            DiskId?: string;
            /**
             * 裸金属机型参数：是否是启动盘。True/False
             */
            IsBoot?: string;
        }[];
        /**
         * IP信息，见 PHostIPSet
         */
        IPSet?: {
            /**
             *  国际: Internation， BGP: BGP， 内网: Private
             */
            OperatorName?: string;
            /**
             * IP资源ID(内网IP无资源ID)（待废弃）
             */
            IPId?: string;
            /**
             * IP地址，
             */
            IPAddr?: string;
            /**
             * MAC地址
             */
            MACAddr?: string;
            /**
             * IP对应带宽，单位Mb，内网IP不显示带宽信息
             */
            Bandwidth?: number;
            /**
             * 子网ID
             */
            SubnetId?: string;
            /**
             * VPC ID
             */
            VPCId?: string;
        }[];
        /**
         * 网络环境。枚举值：千兆：1G ，万兆：10G
         */
        Cluster?: string;
        /**
         * 自动续费
         */
        AutoRenew?: string;
        /**
         * 是否支持紧急登录
         */
        IsSupportKVM?: string;
        /**
         * 操作系统类型
         */
        OSType?: string;
        /**
         * 组件信息（暂不支持）
         */
        Components?: string;
        /**
         * 是否支持Raid。枚举值：Yes：支持；No：不支持。
         */
        RaidSupported?: string;
        /**
         * 物理云产品类型，枚举值：LocalDisk=>代表传统本地盘机型， CloudDisk=>云盘裸金属机型
         */
        PhostClass?: string;
    }[];
}
/**
 * DescribePHostImage - 获取物理云主机镜像列表
 */
export interface DescribePHostImageRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * 镜像类别，枚举值，Base是基础镜像；Custom是自制镜像。
     */
    ImageType?: string;
    /**
     * 镜像ID
     */
    ImageId?: string[];
    /**
     * 数据偏移量，默认为0
     */
    Offset?: number;
    /**
     * 返回数据长度，默认为20
     */
    Limit?: number;
    /**
     * 机器型号，只支持当前zone的展示机型
     */
    MachineType?: string;
}
/**
 * DescribePHostImage - 获取物理云主机镜像列表
 */
export interface DescribePHostImageResponse {
    /**
     * 满足条件的镜像总数
     */
    TotalCount?: number;
    /**
     * 镜像列表 PHostImageSet
     */
    ImageSet?: {
        /**
         * 镜像ID
         */
        ImageId?: string;
        /**
         * 镜像名称
         */
        ImageName?: string;
        /**
         * 操作系统名称
         */
        OsName?: string;
        /**
         * 操作系统类型
         */
        OsType?: string;
        /**
         * 支持的机型
         */
        Support?: string[];
        /**
         * 当前版本
         */
        Version?: string;
        /**
         * 枚举值：Base=>基础镜像，Custom=>自制镜像。
         */
        ImageType?: string;
        /**
         * 裸金属2.0参数。镜像创建时间。
         */
        CreateTime?: number;
        /**
         * 裸金属2.0参数。镜像当前状态。
         */
        State?: string;
        /**
         * 裸金属2.0参数。镜像大小。
         */
        ImageSize?: number;
        /**
         * 镜像描述
         */
        ImageDescription?: string;
    }[];
}
/**
 * DescribePHostMachineType - 获取物理云机型的详细描述信息
 */
export interface DescribePHostMachineTypeRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * 具体机型。若不填写，则返回全部机型
     */
    Type?: string;
}
/**
 * DescribePHostMachineType - 获取物理云机型的详细描述信息
 */
export interface DescribePHostMachineTypeResponse {
    /**
     * 机型列表，模型：PHostMachineTypeSet
     */
    MachineTypes: {
        /**
         * 物理云主机机型别名，全网唯一。
         */
        Type: string;
        /**
         * CPU信息
         */
        CPU?: {
            /**
             * CPU型号
             */
            Model?: string;
            /**
             * CPU主频
             */
            Frequence?: number;
            /**
             * CPU个数
             */
            Count?: number;
            /**
             * CPU核数
             */
            CoreCount?: number;
        };
        /**
         * 内存大小，单位MB
         */
        Memory?: number;
        /**
         * 磁盘信息
         */
        Disks?: {
            /**
             * 单盘大小，单位GB
             */
            Space?: number;
            /**
             * 磁盘数量
             */
            Count?: number;
            /**
             * 磁盘属性
             */
            Type?: string;
            /**
             * 磁盘名称，sys/data
             */
            Name?: string;
            /**
             * 磁盘IO性能，单位MB/s（待废弃）
             */
            IOCap?: number;
        }[];
        /**
         * 其他组件信息
         */
        Components?: {
            /**
             * 组件名称
             */
            Name?: string;
            /**
             * 组件数量
             */
            Count?: number;
        };
        /**
         * 集群库存信息
         */
        Clusters?: {
            /**
             * 集群名。枚举值：千兆网络集群：1G；万兆网络集群：10G；智能网卡网络：25G；
             */
            Name?: string;
            /**
             * 库存状态。枚举值：有库存：Available；无库存：SoldOut
             */
            StockStatus?: string;
        }[];
        /**
         * 是否支持Raid。枚举值：支持：YES；不支持：NO
         */
        RaidSupported?: string;
    }[];
}
/**
 * DescribePHostTags - 获取物理机tag列表（业务组）
 */
export interface DescribePHostTagsRequest {
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
     */
    Zone?: string;
}
/**
 * DescribePHostTags - 获取物理机tag列表（业务组）
 */
export interface DescribePHostTagsResponse {
    /**
     * Tag的个数
     */
    TotalCount?: number;
    /**
     * 具体参见 PHostTagSet
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
    }[];
}
/**
 * GetPHostDiskUpgradePrice - 获取物理云裸金属挂载磁盘的升级价格
 */
export interface GetPHostDiskUpgradePriceRequest {
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
     */
    Zone: string;
    /**
     * UPHost实例ID。
     */
    PHostId: string;
    /**
     * 磁盘大小，单位GB，必须是10GB的整数倍。系统盘20-500GB，数据盘单块盘20-32000GB。
     */
    DiskSpace: number;
    /**
     * 磁盘 ID。获取扩容价格必填（只能扩不能减）；重装时候不需要填（根据所选盘大小决定）
     */
    UDiskId?: string;
    /**
     * 是否重装价格获取。复用此接口。扩容只能增加云盘大小。重装不限制。枚举值：true/false
     */
    ReinstallTag?: boolean;
}
/**
 * GetPHostDiskUpgradePrice - 获取物理云裸金属挂载磁盘的升级价格
 */
export interface GetPHostDiskUpgradePriceResponse {
    /**
     * 升级差价。精度为小数点后2位。
     */
    Price: number;
    /**
     * 升价差价原价。精度为小数点后2位。
     */
    OriginalPrice?: number;
}
/**
 * GetPHostPrice - 获取物理机价格列表
 */
export interface GetPHostPriceRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone?: string;
    /**
     * 购买数量，范围[1-5]
     */
    Count: number;
    /**
     * 计费模式，枚举值为： Year/Month
     */
    ChargeType: string;
    /**
     * 购买时长，1-10个月或1-10年；默认值为1。月付时，此参数传0，代表购买至月末，1代表整月。
     */
    Quantity: number;
    /**
     * 网络环境，可选千兆：1G ；万兆：10G；25G网络：25G。
     */
    Cluster?: string;
    /**
     * 默认为：DB(数据库型)，可以通过接口 [DescribePHostMachineType](api/uphost-api/describe_phost_machine_type.html)获取
     */
    Type?: string;
    /**
     *
     */
    Disks?: {
        /**
         * 裸金属机型参数->枚举值：\\ > True，是系统盘 \\ > False，是数据盘（默认）。Disks数组中有且只能有一块盘是系统盘。
         */
        IsBoot?: string;
        /**
         * 裸金属机型参数->磁盘类型：枚举值：CLOUD_RSSD
         */
        Type?: string;
        /**
         * 裸金属机型参数->磁盘大小，单位GB，必须是10GB的整数倍。系统盘20-500GB。数据盘是20-32000G。
         */
        Size?: string;
    }[];
}
/**
 * GetPHostPrice - 获取物理机价格列表
 */
export interface GetPHostPriceResponse {
    /**
     * 价格列表 见 PHostPriceSet
     */
    PriceSet?: {
        /**
         * Year/Month
         */
        ChargeType?: string;
        /**
         * 价格, 单位:元, 保留小数点后两位有效数字
         */
        Price?: number;
        /**
         * 枚举值：phost=>为主机价格，如果是云盘包括了系统盘价格。cloudDisk=>所有数据盘价格，只是裸金属机型才返回此参数。
         */
        Product?: string;
        /**
         * 原价格, 单位:元, 保留小数点后两位有效数字
         */
        OriginalPrice?: number;
    }[];
}
/**
 * ModifyPHostImageInfo - 修改自定义镜像名称和备注
 */
export interface ModifyPHostImageInfoRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * 镜像ID
     */
    ImageId: string;
    /**
     * 镜像名称
     */
    Name?: string;
    /**
     * 备注
     */
    Remark?: string;
}
/**
 * ModifyPHostImageInfo - 修改自定义镜像名称和备注
 */
export interface ModifyPHostImageInfoResponse {
    /**
     * 镜像ID
     */
    ImageId?: string;
}
/**
 * ModifyPHostInfo - 更改物理机信息
 */
export interface ModifyPHostInfoRequest {
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
     */
    Zone?: string;
    /**
     * 物理机资源ID
     */
    PHostId: string;
    /**
     * 物理机名称，默认不更改
     */
    Name?: string;
    /**
     * 物理机备注，默认不更改
     */
    Remark?: string;
    /**
     * 业务组，默认不更改
     */
    Tag?: string;
}
/**
 * ModifyPHostInfo - 更改物理机信息
 */
export interface ModifyPHostInfoResponse {
    /**
     * PHost 的资源ID
     */
    PHostId?: string;
}
/**
 * PoweroffPHost - 断电物理云主机
 */
export interface PoweroffPHostRequest {
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
     */
    Zone?: string;
    /**
     * PHost资源ID
     */
    PHostId: string;
}
/**
 * PoweroffPHost - 断电物理云主机
 */
export interface PoweroffPHostResponse {
    /**
     * PHost 的资源ID
     */
    PHostId?: string;
}
/**
 * RebootPHost - 重启物理机
 */
export interface RebootPHostRequest {
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
     */
    Zone?: string;
    /**
     * PHost资源ID
     */
    PHostId: string;
}
/**
 * RebootPHost - 重启物理机
 */
export interface RebootPHostResponse {
    /**
     * PHost 的资源ID
     */
    PHostId?: string;
}
/**
 * ReinstallPHost - 重装物理机操作系统
 */
export interface ReinstallPHostRequest {
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
     */
    Zone: string;
    /**
     * PHost资源ID
     */
    PHostId: string;
    /**
     * 密码
     */
    Password: string;
    /**
     * 镜像Id，参考镜像列表，默认使用原镜像
     */
    ImageId?: string;
    /**
     * 物理机名称，默认不更改
     */
    Name?: string;
    /**
     * 物理机备注，默认为不更改。
     */
    Remark?: string;
    /**
     * 业务组，默认不更改。
     */
    Tag?: string;
    /**
     * 是否保留数据盘，保留：Yes，不报留：No， 默认：Yes
     */
    ReserveDisk?: string;
    /**
     * 不保留数据盘重装，可选Raid
     */
    Raid?: string;
    /**
     * 裸金属机型参数->系统盘大小。 单位：GB， 范围[20,500]， 步长：10
     */
    BootDiskSpace?: number;
}
/**
 * ReinstallPHost - 重装物理机操作系统
 */
export interface ReinstallPHostResponse {
    /**
     * PHost 的资源ID
     */
    PHostId?: string;
}
/**
 * ResetPHostPassword - 重置裸金属实例的管理员密码
 */
export interface ResetPHostPasswordRequest {
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
     */
    Zone: string;
    /**
     * 裸金属实例ID
     */
    PHostId: string;
    /**
     * PHost新密码（密码格式使用BASE64编码）
     */
    Password: string;
}
/**
 * ResetPHostPassword - 重置裸金属实例的管理员密码
 */
export interface ResetPHostPasswordResponse {
    /**
     * 裸金属实例ID
     */
    PHostId: string;
}
/**
 * ResizePHostAttachedDisk - 修改裸金属物理云已经挂载的云盘容量大小
 */
export interface ResizePHostAttachedDiskRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * UPHost实例ID。
     */
    PHostId?: string;
    /**
     * 磁盘ID。
     */
    UDiskId?: string;
    /**
     * 裸金属机型参数->磁盘大小，单位GB，必须是10GB的整数倍。系统盘20-500GB，数据盘单块盘20-32000GB。
     */
    DiskSpace?: number;
}
/**
 * ResizePHostAttachedDisk - 修改裸金属物理云已经挂载的云盘容量大小
 */
export interface ResizePHostAttachedDiskResponse {
    /**
     * 改配成功的磁盘id
     */
    UDiskId?: string;
}
/**
 * StartPHost - 启动物理机
 */
export interface StartPHostRequest {
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
     */
    Zone?: string;
    /**
     * PHost资源ID
     */
    PHostId: string;
}
/**
 * StartPHost - 启动物理机
 */
export interface StartPHostResponse {
    /**
     * PHost 的资源ID
     */
    PHostId?: string;
}
/**
 * StopPHost - 关闭物理机
 */
export interface StopPHostRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone?: string;
    /**
     * PHost资源ID
     */
    PHostId: string;
}
/**
 * StopPHost - 关闭物理机
 */
export interface StopPHostResponse {
    /**
     * PHost 的资源ID
     */
    PHostId: string;
}
/**
 * TerminatePHost - 删除物理云主机
 */
export interface TerminatePHostRequest {
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
     */
    Zone?: string;
    /**
     * PHost资源ID
     */
    PHostId: string;
    /**
     * 是否释放绑定的EIP。true: 解绑EIP后，并释放；其他值或不填：解绑EIP。
     */
    ReleaseEIP?: boolean;
    /**
     * 裸金属机型参数->删除主机时是否同时删除挂载的数据盘。默认为false。
     */
    ReleaseUDisk?: boolean;
}
/**
 * TerminatePHost - 删除物理云主机
 */
export interface TerminatePHostResponse {
    /**
     * PHost 的资源ID
     */
    PHostId?: string;
}
/**
 * TerminatePHostImage - 删除裸金属2.0用户自定义镜像
 */
export interface TerminatePHostImageRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * 自制镜像ID
     */
    ImageId: string;
}
/**
 * TerminatePHostImage - 删除裸金属2.0用户自定义镜像
 */
export interface TerminatePHostImageResponse {
    /**
     * 自制镜像ID
     */
    ImageId: string;
}
