


    
/**
 * RemoveUFSVolumeResponse - 
 */
export interface RemoveUFSVolumeResponse {
}
    
/**
 * ExtendUFSVolumeResponse - 
 */
export interface ExtendUFSVolumeResponse {
}
    
/**
 * ExtendUFSVolumeRequest - 
 */
export interface ExtendUFSVolumeRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * 文件系统ID
     */
    VolumeId:string
    /**
     * 文件系统大小，单位为GB，最大不超过20T，香港容量型必须为100的整数倍，Size最小为500GB，北京，上海，广州的容量型必须为1024的整数倍，Size最小为1024GB。性能型文件系统Size最小为100GB
     */
    Size:number
}
    
/**
 * UpdateUFSVolumeInfoResponse - 
 */
export interface UpdateUFSVolumeInfoResponse {
}
    
/**
 * DescribeUFSVolume2Response - 
 */
export interface DescribeUFSVolume2Response {
    /**
     * 文件系统总数
     */
    TotalCount:number
    /**
     * 文件系统详细信息列表
     */
    DataSet:
            UFSVolumeInfo2[]
}
    
/**
 * UFSVolumeInfo2 - 
 */
export interface UFSVolumeInfo2 {
    /**
     * 文件系统名称
     */
    VolumeName:string
    /**
     * 文件系统ID
     */
    VolumeId:string
    /**
     * 当前文件系统已创建的挂载点数目
     */
    TotalMountPointNum:number
    /**
     * 文件系统允许创建的最大挂载点数目
     */
    MaxMountPointNum:number
    /**
     * 文件系统存储类型，枚举值，Basic表示容量型，Advanced表示性能型
     */
    StorageType:string
    /**
     * 文件系统协议，枚举值，NFSv3表示NFS V3协议，NFSv4表示NFS V4协议
     */
    ProtocolType:string
    /**
     * 文件系统备注信息
     */
    Remark?:string
    /**
     * 文件系统所属业务组
     */
    Tag?:string
    /**
     * 文件系统创建时间（unix时间戳）
     */
    CreateTime?:number
    /**
     * 文件系统过期时间（unix时间戳）
     */
    ExpiredTime?:number
    /**
     * 文件系统大小，单位GB
     */
    Size?:number
    /**
     * 文件系统当前使用容量，单位GB
     */
    UsedSize?:number
    /**
     * 是否过期
     */
    IsExpired?:string
}
    
/**
 * RemoveUFSVolumeMountPointRequest - 
 */
export interface RemoveUFSVolumeMountPointRequest {
    /**
     * 地域。 参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * 文件系统ID
     */
    VolumeId:string
    /**
     * Vpc ID
     */
    VpcId:string
    /**
     * Subnet ID
     */
    SubnetId:string
}
    
/**
 * DescribeUFSVolumePriceResponse - 
 */
export interface DescribeUFSVolumePriceResponse {
    /**
     * ufs 价格信息
     */
    DataSet?:
            UFSPriceDataSet[]
}
    
/**
 * AddUFSVolumeMountPointResponse - 
 */
export interface AddUFSVolumeMountPointResponse {
}
    
/**
 * DescribeUFSVolume2Request - 
 */
export interface DescribeUFSVolume2Request {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * 文件系统ID
     */
    VolumeId?:string
    /**
     * 文件列表起始
     */
    Offset?:number
    /**
     * 文件列表长度
     */
    Limit?:number
}
    
/**
 * UpdateUFSVolumeInfoRequest - 
 */
export interface UpdateUFSVolumeInfoRequest {
    /**
     * 地域。 参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * 文件系统ID
     */
    VolumeId:string
    /**
     * 文件系统名称（文件系统名称／备注至少传入其中一个）
     */
    VolumeName?:string
    /**
     * 文件系统备注（文件系统名称／备注至少传入其中一个）
     */
    Remark?:string
}
    
/**
 * MountPointInfo - 
 */
export interface MountPointInfo {
    /**
     * 挂载点名称
     */
    MountPointName:string
    /**
     * Vpc ID
     */
    VpcId:string
    /**
     * Subnet ID
     */
    SubnetId:string
    /**
     * ${挂载点IP}:/
     */
    MountPointIp:string
    /**
     * 文件系统创建时间（unix时间戳）
     */
    CreateTime:number
    /**
     * Subnet ID + 网段的形式，方便前端展示
     */
    SubnetDescription:string
}
    
/**
 * AddUFSVolumeMountPointRequest - 
 */
export interface AddUFSVolumeMountPointRequest {
    /**
     * 地域。 参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * 文件系统ID
     */
    VolumeId:string
    /**
     * 挂载点名称
     */
    MountPointName:string
    /**
     * Vpc ID
     */
    VpcId:string
    /**
     * Subnet ID
     */
    SubnetId:string
}
    
/**
 * DescribeUFSVolumePriceRequest - 
 */
export interface DescribeUFSVolumePriceRequest {
    /**
     * 地域。 参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * 文件系统大小，单位为GB，新架构容量型最小容量为500GB，以100GB递增，最大不超过100TB。新架构性能型最小容量为100GB，以100GB递增，最大不超过20TB
     */
    Size:number
    /**
     * 文件存储类型，枚举值，Basic表示容量型产品，Advanced表示性能型产品
     */
    StorageType:string
    /**
     * 购买UFS的时长， 默认为1
     */
    Quantity?:number
    /**
     * Year， Month， Dynamic，Trial，默认: Dynamic
     */
    ChargeType?:string
    /**
     * 文件系统id，第一次创建文件系统时不需要传这个参数
     */
    VolumeId?:string
}
    
/**
 * DescribeUFSVolumeMountpointRequest - 
 */
export interface DescribeUFSVolumeMountpointRequest {
    /**
     * 地域。 参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * 文件系统ID
     */
    VolumeId:string
}
    
/**
 * RemoveUFSVolumeMountPointResponse - 
 */
export interface RemoveUFSVolumeMountPointResponse {
}
    
/**
 * RemoveUFSVolumeRequest - 
 */
export interface RemoveUFSVolumeRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * 文件系统ID
     */
    VolumeId:string
}
    
/**
 * CreateUFSVolumeRequest - 
 */
export interface CreateUFSVolumeRequest {
    /**
     * 地域。 参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * 文件系统大小，单位为GB，必须为100的整数倍，容量型Size最小为500GB，性能型文件系统Size最小为100GB
     */
    Size:number
    /**
     * 文件系统存储类型，Basic表示容量型，Advanced表示性能型
     */
    StorageType:string
    /**
     * 文件系统协议，目前仅支持NFSv4
     */
    ProtocolType:string
    /**
     * 文件系统名称
     */
    VolumeName?:string
    /**
     * 备注
     */
    Remark?:string
    /**
     * 文件系统所属业务组
     */
    Tag?:string
    /**
     * 计费模式，枚举值为： Year，按年付费； Month，按月付费； Dynamic，按需付费（需开启权限）； Trial，试用（需开启权限） 默认为Dynamic
     */
    ChargeType?:string
    /**
     * 购买时长 默认: 1
     */
    Quantity?:number
    /**
     * 使用的代金券id
     */
    CouponId?:string
}
    
/**
 * CreateUFSVolumeResponse - 
 */
export interface CreateUFSVolumeResponse {
    /**
     * 文件系统名称
     */
    VolumeName:string
    /**
     * 文件系统ID
     */
    VolumeId:string
    /**
     * 文件系统挂载点状态
     */
    VolumeStatus:string
}
    
/**
 * UFSPriceDataSet - 
 */
export interface UFSPriceDataSet {
    /**
     * Year， Month， Dynamic，Trial
     */
    ChargeType?:string
    /**
     * 价格 (单位: 分)
     */
    Price?:number
    /**
     * “UFS”
     */
    ChargeName?:string
}
    
/**
 * DescribeUFSVolumeMountpointResponse - 
 */
export interface DescribeUFSVolumeMountpointResponse {
    /**
     * 
     */
    DataSet:
            MountPointInfo[]
    /**
     * 目前的挂载点总数
     */
    TotalMountPointNum:number
    /**
     * 文件系统能创建的最大挂载点数目
     */
    MaxMountPointNum:number
}
