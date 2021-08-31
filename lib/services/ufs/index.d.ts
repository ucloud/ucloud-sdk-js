import Client from '../../core/client';
import { ConfigOptions } from '../../core/config';
import { CredentialOptions } from '../../core/credential';
/**
 * This client is used to call actions of **ufs** service
 */
export default class UFSClient extends Client {
    constructor({ config, credential, }: {
        config: ConfigOptions;
        credential: CredentialOptions;
    });
    /**
     * CreateUFSVolume - 创建文件系统
     *
     * See also: https://docs.ucloud.cn/api/ufs-api/create_ufs_volume
     */
    createUFSVolume(request?: CreateUFSVolumeRequest): Promise<CreateUFSVolumeResponse>;
    /**
     * DescribeUFSVolume2 - 获取文件系统列表
     *
     * See also: https://docs.ucloud.cn/api/ufs-api/describe_ufs_volume2
     */
    describeUFSVolume2(request?: DescribeUFSVolume2Request): Promise<DescribeUFSVolume2Response>;
    /**
     * ExtendUFSVolume - 文件系统扩容
     *
     * See also: https://docs.ucloud.cn/api/ufs-api/extend_ufs_volume
     */
    extendUFSVolume(request?: ExtendUFSVolumeRequest): Promise<ExtendUFSVolumeResponse>;
    /**
     * RemoveUFSVolume - 删除UFS文件系统
     *
     * See also: https://docs.ucloud.cn/api/ufs-api/remove_ufs_volume
     */
    removeUFSVolume(request?: RemoveUFSVolumeRequest): Promise<RemoveUFSVolumeResponse>;
}
/**
 * CreateUFSVolume - 创建文件系统
 */
export interface CreateUFSVolumeRequest {
    /**
     * 文件系统大小，单位为GB，最大不超过20T，香港容量型必须为100的整数倍，Size最小为500GB，北京，上海，广州的容量型必须为1024的整数倍，Size最小为1024GB。性能型文件系统Size最小为100GB
     */
    Size: number;
    /**
     * 文件系统存储类型，枚举值，Basic表示容量型，Advanced表示性能型
     */
    StorageType: string;
    /**
     * 文件系统协议，枚举值，NFSv3表示NFS V3协议，NFSv4表示NFS V4协议
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
     * 计费模式，枚举值为： Year，按年付费； Month，按月付费； Dynamic，按需付费（需开启权限）； Trial，试用（需开启权限） 默认为Dynamic
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
 * CreateUFSVolume - 创建文件系统
 */
export interface CreateUFSVolumeResponse {
    /**
     * 文件系统名称
     */
    VolumeName: string;
    /**
     * 文件系统ID
     */
    VolumeId: string;
    /**
     * 文件系统挂载点状态
     */
    VolumeStatus: string;
}
/**
 * DescribeUFSVolume2 - 获取文件系统列表
 */
export interface DescribeUFSVolume2Request {
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
 * DescribeUFSVolume2 - 获取文件系统列表
 */
export interface DescribeUFSVolume2Response {
    /**
     * 文件系统总数
     */
    TotalCount: number;
    /**
     * 文件系统详细信息列表
     */
    DataSet: {
        /**
         * 文件系统名称
         */
        VolumeName: string;
        /**
         * 文件系统ID
         */
        VolumeId: string;
        /**
         * 当前文件系统已创建的挂载点数目
         */
        TotalMountPointNum: number;
        /**
         * 文件系统允许创建的最大挂载点数目
         */
        MaxMountPointNum: number;
        /**
         * 文件系统存储类型，枚举值，Basic表示容量型，Advanced表示性能型
         */
        StorageType: string;
        /**
         * 文件系统协议，枚举值，NFSv3表示NFS V3协议，NFSv4表示NFS V4协议
         */
        ProtocolType: string;
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
         * 文件系统当前使用容量，单位GB
         */
        UsedSize?: number;
        /**
         * 是否过期
         */
        IsExpired?: string;
    }[];
}
/**
 * ExtendUFSVolume - 文件系统扩容
 */
export interface ExtendUFSVolumeRequest {
    /**
     * 文件系统ID
     */
    VolumeId: string;
    /**
     * 文件系统大小，单位为GB，最大不超过20T，香港容量型必须为100的整数倍，Size最小为500GB，北京，上海，广州的容量型必须为1024的整数倍，Size最小为1024GB。性能型文件系统Size最小为100GB
     */
    Size: number;
}
/**
 * ExtendUFSVolume - 文件系统扩容
 */
export interface ExtendUFSVolumeResponse {
}
/**
 * RemoveUFSVolume - 删除UFS文件系统
 */
export interface RemoveUFSVolumeRequest {
    /**
     * 文件系统ID
     */
    VolumeId: string;
}
/**
 * RemoveUFSVolume - 删除UFS文件系统
 */
export interface RemoveUFSVolumeResponse {
}
