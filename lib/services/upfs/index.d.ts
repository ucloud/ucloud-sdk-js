import Client from '../../core/client';
import { ConfigOptions } from '../../core/config';
import { CredentialOptions } from '../../core/credential';
/**
 * This client is used to call actions of **upfs** service
 */
export default class UPFSClient extends Client {
    constructor({ config, credential, }: {
        config: ConfigOptions;
        credential: CredentialOptions;
    });
    /**
     * CreateUPFSVolume - 创建UPFS文件系统
     *
     * See also: https://docs.ucloud.cn/api/upfs-api/create_upfs_volume
     */
    createUPFSVolume(request?: CreateUPFSVolumeRequest): Promise<CreateUPFSVolumeResponse>;
    /**
     * DescribeUPFSVolume - 获取UPFS文件系统列表
     *
     * See also: https://docs.ucloud.cn/api/upfs-api/describe_upfs_volume
     */
    describeUPFSVolume(request?: DescribeUPFSVolumeRequest): Promise<DescribeUPFSVolumeResponse>;
    /**
     * DescribeUPFSVolumePrice - 获取UPFS文件系统价格
     *
     * See also: https://docs.ucloud.cn/api/upfs-api/describe_upfs_volume_price
     */
    describeUPFSVolumePrice(request?: DescribeUPFSVolumePriceRequest): Promise<DescribeUPFSVolumePriceResponse>;
    /**
     * DescribeUPFSVolumeUpgradePrice - UPFS文件系统扩容价格
     *
     * See also: https://docs.ucloud.cn/api/upfs-api/describe_upfs_volume_upgrade_price
     */
    describeUPFSVolumeUpgradePrice(request?: DescribeUPFSVolumeUpgradePriceRequest): Promise<DescribeUPFSVolumeUpgradePriceResponse>;
    /**
     * ExtendUPFSVolume - UPFS文件系统扩容
     *
     * See also: https://docs.ucloud.cn/api/upfs-api/extend_upfs_volume
     */
    extendUPFSVolume(request?: ExtendUPFSVolumeRequest): Promise<ExtendUPFSVolumeResponse>;
    /**
     * RemoveUPFSVolume - 删除UPFS文件系统
     *
     * See also: https://docs.ucloud.cn/api/upfs-api/remove_upfs_volume
     */
    removeUPFSVolume(request?: RemoveUPFSVolumeRequest): Promise<RemoveUPFSVolumeResponse>;
    /**
     * UpdateUPFSVolumeInfo - 更改UPFS文件系统相关信息（名称／备注）
     *
     * See also: https://docs.ucloud.cn/api/upfs-api/update_upfs_volume_info
     */
    updateUPFSVolumeInfo(request?: UpdateUPFSVolumeInfoRequest): Promise<UpdateUPFSVolumeInfoResponse>;
}
/**
 * CreateUPFSVolume - 创建UPFS文件系统
 */
export interface CreateUPFSVolumeRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * 文件系统大小，单位为GB，必须为100的整数倍，Size最小为500GB
     */
    Size: number;
    /**
     * 文件系统协议，目前仅支持POSIX
     */
    ProtocolType: string;
    /**
     * 文件系统名称
     */
    VolumeName?: string;
    /**
     * 备注
     */
    Remark?: string;
    /**
     * 文件系统所属业务组
     */
    Tag?: string;
    /**
     * 计费模式，枚举值为： Year，按年付费； Month，按月付费
     */
    ChargeType?: string;
    /**
     * 购买时长 默认: 1
     */
    Quantity?: number;
    /**
     * 使用的代金券id
     */
    CouponId?: string;
}
/**
 * CreateUPFSVolume - 创建UPFS文件系统
 */
export interface CreateUPFSVolumeResponse {
    /**
     * UPFS文件系统名称
     */
    VolumeName: string;
    /**
     * UPFS文件系统ID
     */
    VolumeId: string;
}
/**
 * DescribeUPFSVolume - 获取UPFS文件系统列表
 */
export interface DescribeUPFSVolumeRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * 文件系统ID
     */
    VolumeId?: string;
    /**
     * 文件列表起始
     */
    Offset?: number;
    /**
     * 文件列表长度
     */
    Limit?: number;
}
/**
 * DescribeUPFSVolume - 获取UPFS文件系统列表
 */
export interface DescribeUPFSVolumeResponse {
    /**
     * UPFS文件系统总数
     */
    TotalCount: number;
    /**
     * UPFS文件系统详细信息列表
     */
    DataSet: {
        /**
         * 可用区名字
         */
        Zone?: string;
        /**
         * 文件系统名称
         */
        VolumeName?: string;
        /**
         * 文件系统ID
         */
        VolumeId?: string;
        /**
         * 文件系统协议类型
         */
        ProtocolType?: string;
        /**
         * 文件系统备注信息
         */
        Remark?: string;
        /**
         * 文件系统所属业务组
         */
        Tag?: string;
        /**
         * 文件系统创建时间（unix时间戳）
         */
        CreateTime?: number;
        /**
         * 文件系统过期时间（unix时间戳）
         */
        ExpiredTime?: number;
        /**
         * 文件系统大小，单位GB
         */
        Size?: number;
        /**
         * 是否过期
         */
        IsExpired?: string;
        /**
         * 计费类型
         */
        ChargeType?: string;
        /**
         * 文件系统挂载状态
         */
        MountStatus?: number;
        /**
         * 文件系统挂载地址
         */
        MountAddress?: string;
    }[];
}
/**
 * DescribeUPFSVolumePrice - 获取UPFS文件系统价格
 */
export interface DescribeUPFSVolumePriceRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * 文件系统大小，单位为GB，新架构容量型最小容量为500GB，以100GB递增，最大不超过100TB。
     */
    Size: number;
    /**
     * 购买UPFS的时长， 默认为1
     */
    Quantity?: number;
    /**
     * Year， Month默认: Month
     */
    ChargeType?: string;
    /**
     * UPFS文件系统id，第一次创建文件系统时不需要传这个参数
     */
    VolumeId?: string;
}
/**
 * DescribeUPFSVolumePrice - 获取UPFS文件系统价格
 */
export interface DescribeUPFSVolumePriceResponse {
    /**
     * upfs 价格信息
     */
    DataSet?: {
        /**
         * Year， Month
         */
        ChargeType?: string;
        /**
         * 价格 (单位: 分)
         */
        Price?: number;
        /**
         * 原价格 (单位: 分)
         */
        OriginalPrice?: number;
        /**
         * “upfs”
         */
        ChargeName?: string;
    }[];
}
/**
 * DescribeUPFSVolumeUpgradePrice - UPFS文件系统扩容价格
 */
export interface DescribeUPFSVolumeUpgradePriceRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * 文件系统ID
     */
    VolumeId: string;
    /**
     * 文件系统大小
     */
    Size: string;
}
/**
 * DescribeUPFSVolumeUpgradePrice - UPFS文件系统扩容价格
 */
export interface DescribeUPFSVolumeUpgradePriceResponse {
    /**
     * 价格（单位：分）
     */
    Price: number;
    /**
     * 原价格（单位：分）
     */
    OriginalPrice?: number;
}
/**
 * ExtendUPFSVolume - UPFS文件系统扩容
 */
export interface ExtendUPFSVolumeRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * 文件系统ID
     */
    VolumeId: string;
    /**
     * 文件系统大小，单位为GB，最小为6000GB，最大为10PB，必须为1000的整数倍
     */
    Size: number;
}
/**
 * ExtendUPFSVolume - UPFS文件系统扩容
 */
export interface ExtendUPFSVolumeResponse {
}
/**
 * RemoveUPFSVolume - 删除UPFS文件系统
 */
export interface RemoveUPFSVolumeRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * 文件系统ID
     */
    VolumeId: string;
}
/**
 * RemoveUPFSVolume - 删除UPFS文件系统
 */
export interface RemoveUPFSVolumeResponse {
}
/**
 * UpdateUPFSVolumeInfo - 更改UPFS文件系统相关信息（名称／备注）
 */
export interface UpdateUPFSVolumeInfoRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * UPFS文件系统ID
     */
    VolumeId: string;
    /**
     * UPFS文件系统名称（文件系统名称／备注至少传入其中一个）
     */
    VolumeName?: string;
    /**
     * UPFS文件系统备注（文件系统名称／备注至少传入其中一个）
     */
    Remark?: string;
}
/**
 * UpdateUPFSVolumeInfo - 更改UPFS文件系统相关信息（名称／备注）
 */
export interface UpdateUPFSVolumeInfoResponse {
}
