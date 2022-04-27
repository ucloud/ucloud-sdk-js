


    
/**
 * DescribeUDiskUpgradePriceResponse - 
 */
export interface DescribeUDiskUpgradePriceResponse {
    /**
     * 价格
     */
    Price?:number
    /**
     * 用户折后价 (对应计费CustomPrice)
     */
    OriginalPrice?:number
}
    
/**
 * CloneUDiskUDataArkResponse - 
 */
export interface CloneUDiskUDataArkResponse {
    /**
     * 创建UDisk Id
     */
    UDiskId:string[]
}
    
/**
 * RenameUDiskRequest - 
 */
export interface RenameUDiskRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
     */
    Zone:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * 重命名的UDisk的Id
     */
    UDiskId:string
    /**
     * 重命名UDisk的name
     */
    UDiskName:string
}
    
/**
 * RecoverUDiskResponse - 
 */
export interface RecoverUDiskResponse {
}
    
/**
 * RecycleUDiskSet - 
 */
export interface RecycleUDiskSet {
    /**
     * 磁盘id
     */
    UDiskId:string
    /**
     * 创建时间
     */
    CreateTime:number
    /**
     * 过期时间
     */
    ExpiredTime:number
    /**
     * 销毁倒计时
     */
    CountdownTime:number
    /**
     * 磁盘名称
     */
    Name:string
    /**
     * 磁盘容量
     */
    Size:number
    /**
     * 业务组
     */
    Tag?:string
    /**
     * 可用区
     */
    Zone:string
}
    
/**
 * UDiskDataSet - 
 */
export interface UDiskDataSet {
    /**
     * 可用区
     */
    Zone?:string
    /**
     * UDisk实例Id
     */
    UDiskId?:string
    /**
     * 实例名称
     */
    Name?:string
    /**
     * 容量单位GB
     */
    Size?:number
    /**
     * 状态:Available(可用),Attaching(挂载中), InUse(已挂载), Detaching(卸载中), Initializating(分配中), Failed(创建失败),Cloning(克隆中),Restoring(恢复中),RestoreFailed(恢复失败),
     */
    Status?:string
    /**
     * 创建时间
     */
    CreateTime?:number
    /**
     * 过期时间
     */
    ExpiredTime?:number
    /**
     * 挂载的UHost的Id。【即将废弃，建议使用HostId】
     */
    UHostId?:string
    /**
     * 挂载的UHost的Name。【即将废弃，建议使用HostName】
     */
    UHostName?:string
    /**
     * 挂载的UHost的IP。【即将废弃，建议使用HostIP】
     */
    UHostIP?:string
    /**
     * 挂载的Host的Id
     */
    HostId?:string
    /**
     * 挂载的Host的Name
     */
    HostName?:string
    /**
     * 挂载的Host的IP
     */
    HostIP?:string
    /**
     * 挂载的设备名称
     */
    DeviceName?:string
    /**
     * Year,Month,Dynamic,Trial,Postpay
     */
    ChargeType?:string
    /**
     * 业务组名称
     */
    Tag?:string
    /**
     * 资源是否过期，过期:"Yes", 未过期:"No"
     */
    IsExpire?:string
    /**
     * 是否支持数据方舟，支持:"2.0", 不支持:"1.0"
     */
    Version?:string
    /**
     * 是否开启数据方舟，开启:"Yes", 不支持:"No"
     */
    UDataArkMode?:string
    /**
     * 该盘快照个数
     */
    SnapshotCount?:number
    /**
     * 该盘快照上限
     */
    SnapshotLimit?:number
    /**
     * 请求中的ProtocolVersion字段为1时，需结合IsBoot确定具体磁盘类型:普通数据盘：DiskType:"CLOUD_NORMAL",IsBoot:"False"； 普通系统盘：DiskType:"CLOUD_NORMAL",IsBoot:"True"；SSD数据盘：DiskType:"CLOUD_SSD",IsBoot:"False"；SSD系统盘：DiskType:"CLOUD_SSD",IsBoot:"True"；RSSD数据盘：DiskType:"CLOUD_RSSD",IsBoot:"False"；RSSD系统盘：DiskType:"CLOUD_RSSD",IsBoot:"True"；高效数据盘：DiskType:"CLOUD_EFFICIENCY",IsBoot:"False"；高效系统盘：DiskType:"CLOUD_EFFICIENCY",IsBoot:"True"。请求中的ProtocolVersion字段为0或没有该字段时，云硬盘类型参照如下:普通数据盘：DataDisk；普通系统盘：SystemDisk；SSD数据盘：SSDDataDisk；SSD系统盘：SSDSystemDisk；RSSD数据盘：RSSDDataDisk；RSSD系统盘：RSSDSystemDisk；高效数据盘：EfficiencyDataDisk；高效系统盘：EfficiencySystemDisk。
     */
    DiskType?:string
    /**
     * 是否支持克隆，1支持 ，0不支持
     */
    CloneEnable?:number
    /**
     * 是否支持快照，1支持 ，0不支持
     */
    SnapEnable?:number
    /**
     * 是否支持开启方舟，1支持 ，0不支持
     */
    ArkSwitchEnable?:number
    /**
     * 是否是加密盘，是:"Yes", 否:"No"
     */
    UKmsMode?:string
    /**
     * 该盘的cmk id
     */
    CmkId?:string
    /**
     * 该盘的密文密钥
     */
    DataKey?:string
    /**
     * 该盘cmk的状态, Enabled(正常)，Disabled(失效)，Deleted(删除)，NoCmkId(非加密盘)
     */
    CmkIdStatus?:string
    /**
     * cmk id 别名
     */
    CmkIdAlias?:string
    /**
     * 是否是系统盘，是："True", 否："False"
     */
    IsBoot?:string
    /**
     * 该盘的备份方式。快照服务："SnapshotService"；数据方舟："UDataArk"；无备份方式：""
     */
    BackupMode?:string
    /**
     * RDMA集群id，仅RSSD返回该值；其他类型云盘返回""。当云盘的此值与快杰云主机的RdmaClusterId相同时，RSSD可以挂载到这台云主机。
     */
    RdmaClusterId?:string
}
    
/**
 * SetUDiskUDataArkModeRequest - 
 */
export interface SetUDiskUDataArkModeRequest {
    /**
     * 地域。 参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Region:string
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * 需要设置数据方舟的UDisk的Id
     */
    UDiskId:string
    /**
     * 【开启数据方舟入口已关闭】是否开启数据方舟。Yes：开启，No：不开启，默认值：No
     */
    UDataArkMode?:string
    /**
     * 使用的代金券id
     */
    CouponId?:string
}
    
/**
 * DeleteUDiskSnapshotRequest - 
 */
export interface DeleteUDiskSnapshotRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
     */
    Zone:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * 快照Id(填写后不能填写UDisk Id)
     */
    SnapshotId?:string
    /**
     * UDisk Id,删除该盘所创建出来的所有快照(填写后不能填写SnapshotId)
     */
    UDiskId?:string
}
    
/**
 * CloneUDiskSnapshotResponse - 
 */
export interface CloneUDiskSnapshotResponse {
    /**
     * 创建UDisk Id
     */
    UDiskId?:string[]
}
    
/**
 * DeleteUDiskResponse - 
 */
export interface DeleteUDiskResponse {
}
    
/**
 * RestoreUDiskResponse - 
 */
export interface RestoreUDiskResponse {
}
    
/**
 * ResizeUDiskResponse - 
 */
export interface ResizeUDiskResponse {
}
    
/**
 * CreateUDiskSnapshotResponse - 
 */
export interface CreateUDiskSnapshotResponse {
    /**
     * 快照Id
     */
    SnapshotId:string[]
}
    
/**
 * RestoreUDiskRequest - 
 */
export interface RestoreUDiskRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
     */
    Zone:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * 需要恢复的盘ID
     */
    UDiskId:string
    /**
     * 从指定的快照恢复
     */
    SnapshotId?:string
    /**
     * 指定从方舟恢复的备份时间点
     */
    SnapshotTime?:number
}
    
/**
 * DescribeUDiskSnapshotRequest - 
 */
export interface DescribeUDiskSnapshotRequest {
    /**
     * 地域。 参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Region:string
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone?:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * 数据偏移量, 默认为0
     */
    Offset?:number
    /**
     * 返回数据长度, 默认为20
     */
    Limit?:number
    /**
     * UDiskId,返回该盘所做快照.(必须同时传Zone)
     */
    UDiskId?:string
    /**
     * 快照id，SnapshotId , UDiskId 同时传SnapshotId优先
     */
    SnapshotId?:string
}
    
/**
 * DescribeUDiskRequest - 
 */
export interface DescribeUDiskRequest {
    /**
     * 地域。 参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Region:string
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone?:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * UDisk Id(留空返回全部)
     */
    UDiskId?:string
    /**
     * 数据偏移量, 默认为0
     */
    Offset?:number
    /**
     * 返回数据长度, 默认为20
     */
    Limit?:number
    /**
     * ProtocolVersion字段为1时，需结合IsBoot确定具体磁盘类型:普通数据盘：DiskType:"CLOUD_NORMAL",IsBoot:"False"；普通系统盘：DiskType:"CLOUD_NORMAL",IsBoot:"True"；SSD数据盘：DiskType:"CLOUD_SSD",IsBoot:"False"；SSD系统盘：DiskType:"CLOUD_SSD",IsBoot:"True"；RSSD数据盘：DiskType:"CLOUD_RSSD",IsBoot:"False"；RSSD系统盘：DiskType:"CLOUD_RSSD",IsBoot:"True"；高效数据盘：DiskType:"CLOUD_EFFICIENCY",IsBoot:"False"；高效系统盘：DiskType:"CLOUD_EFFICIENCY",IsBoot:"True"；为空拉取所有。ProtocolVersion字段为0或没有该字段时，可设为以下几个值:普通数据盘：DataDisk；普通系统盘：SystemDisk；SSD数据盘：SSDDataDisk；SSD系统盘：SSDSystemDisk；RSSD数据盘：RSSDDataDisk；RSSD系统盘：RSSDSystemDisk：高效数据盘：EfficiencyDataDisk；高效系统盘：EfficiencySystemDisk；为空拉取所有。
     */
    DiskType?:string
    /**
     * 请求协议版本，建议升级为1，为1时DiskType与UHost磁盘类型定义一致；默认为0
     */
    ProtocolVersion?:number
    /**
     * ProtocolVersion字段为1且DiskType不为空时，必须设置，设置规则请参照DiskType；ProtocolVersion字段为1且DiskType为空时，该字段无效。ProtocolVersion字段为0或没有该字段时，该字段无效。
     */
    IsBoot?:string
    /**
     * 是否忽略计费信息。Yes：忽略，No：不忽略，默认值（No）。（如不关心账单信息，建议选填“Yes”，可降低请求延时）
     */
    IgnoreUBillInfo?:string
    /**
     * 是否忽略快照服务信息。Yes：忽略，No：不忽略，默认值（No）。（如不关心快照服务信息，建议选填“Yes”，可降低请求延时）
     */
    IgnoreBackupMode?:string
    /**
     * 是否只返回云盘基础信息（只包含云盘及关联主机的资源信息）。Yes：是，No：否，默认值（No）。（如仅需要基础信息，建议选填“Yes”，可降低请求延时）
     */
    UDiskBasicInfo?:string
    /**
     * 根据传入的UHostIdForAttachment，筛选出能被挂载在该主机上的云盘【本字段即将废弃，建议使用HostIdForAttachment】
     */
    UHostIdForAttachment?:string
    /**
     * 根据传入的HostIdForAttachment，筛选出能被挂载在该主机上的云盘。目前主要针对RSSD云盘。
     */
    HostIdForAttachment?:string
    /**
     * 根据传入的HostId，返回与该主机关联的云盘信息。
     */
    HostId?:string
    /**
     * 宿主产品类型，可筛选挂载在该类型宿主上的云盘。可选值：uhost, uphost。为空拉取所有。（当HostIdForAttachment字段不为空时，该字段可以不填，若HostIdForAttachment与该字段宿主类型冲突，则以HostIdForAttachment字段为准。）
     */
    HostProduct?:string
}
    
/**
 * CreateUDiskResponse - 
 */
export interface CreateUDiskResponse {
    /**
     * UDisk实例Id
     */
    UDiskId?:string[]
}
    
/**
 * SetUDiskUDataArkModeResponse - 
 */
export interface SetUDiskUDataArkModeResponse {
}
    
/**
 * DetachUDiskResponse - 
 */
export interface DetachUDiskResponse {
    /**
     * 卸载的UHost实例ID。【即将废弃，建议使用HostId】
     */
    UHostId?:string
    /**
     * 卸载的UDisk实例ID
     */
    UDiskId?:string
    /**
     * 卸载的Host实例ID
     */
    HostId?:string
}
    
/**
 * UDiskPriceDataSet - 
 */
export interface UDiskPriceDataSet {
    /**
     * Year， Month， Dynamic，Trial
     */
    ChargeType?:string
    /**
     * 实际价格 (单位: 分)
     */
    Price?:number
    /**
     * "UDataArk","SnapshotService","UDisk","Total"
     */
    ChargeName?:string
    /**
     * 用户折后价(对应计费CustomPrice)
     */
    OriginalPrice?:number
    /**
     * 原价(对应计费OriginalPrice)
     */
    ListPrice?:number
}
    
/**
 * DescribeUDiskPriceRequest - 
 */
export interface DescribeUDiskPriceRequest {
    /**
     * 地域。 参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Region:string
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * 购买UDisk大小,单位:GB,普通数据盘：范围[1~8000]；SSD数据盘：范围[1~8000]；普通系统盘：范围[1~8000]；SSD系统盘：范围[1~4000]；RSSD数据盘：范围[1~32000]；RSSD系统盘：范围[1~4000]；高效数据盘：范围[1~32000]；高效系统盘：范围[1~500]。
     */
    Size:number
    /**
     * Year , Month, Dynamic，Postpay，Trial 默认: Month
     */
    ChargeType?:string
    /**
     * 购买UDisk的时长，默认值为1
     */
    Quantity?:number
    /**
     * 【开启数据方舟入口已关闭】是否开启数据方舟。Yes：开启，No：不开启，默认值：No
     */
    UDataArkMode?:string
    /**
     * 是否开启快照服务（开启快照服务，可免费开启数据方舟）。Yes：开启，No：不开启，默认值：No
     */
    SnapshotService?:string
    /**
     * UDisk 类型: DataDisk（普通数据盘），SSDDataDisk（SSD数据盘），RSSDDataDisk(RSSD数据盘)，EfficiencyDataDisk（高效数据盘），SystemDisk（普通系统盘），SSDSystemDisk（SSD系统盘），RSSDSystemDisk(RSSD系统盘)，EfficiencySystemDisk（高效系统盘），默认值（DataDisk）
     */
    DiskType?:string
    /**
     * 是否将快照服务(数据方舟)，云硬盘放入一张订单, 是："Yes",否："No"，默认是"No"
     */
    IsTotalPrice?:string
    /**
     * 云主机机型（V2.0），枚举值["N", "C", "G", "O", "OM"]。参考[[api:uhost-api:uhost_type|云主机机型说明]]。
     */
    MachineType?:string
}
    
/**
 * DescribeUDiskSnapshotResponse - 
 */
export interface DescribeUDiskSnapshotResponse {
    /**
     * JSON 格式的Snapshot列表, 详细参见 UDiskSnapshotSet
     */
    DataSet?:
            UDiskSnapshotSet[]
    /**
     * 根据过滤条件得到的总数
     */
    TotalCount?:number
}
    
/**
 * DetachUDiskRequest - 
 */
export interface DetachUDiskRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
     */
    Zone?:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * 需要卸载的UDisk实例ID
     */
    UDiskId:string
    /**
     * UHost实例ID。【UHostId和HostId必须选填一个，本字段即将废弃，建议使用HostId】
     */
    UHostId?:string
    /**
     * Host实例ID
     */
    HostId?:string
}
    
/**
 * DescribeRecycleUDiskRequest - 
 */
export interface DescribeRecycleUDiskRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
     */
    Zone:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * 返回数据长度, 默认为20
     */
    Limit?:number
    /**
     * 数据偏移量, 默认为0
     */
    Offset?:number
}
    
/**
 * AttachUDiskResponse - 
 */
export interface AttachUDiskResponse {
    /**
     * 挂载的UHost实例ID。【即将废弃，建议使用HostId】
     */
    UHostId?:string
    /**
     * 挂载的UDisk实例ID
     */
    UDiskId?:string
    /**
     * 挂载的设备名称
     */
    DeviceName?:string
    /**
     * 挂载的Host实例ID
     */
    HostId?:string
}
    
/**
 * CreateAttachUDiskRequest - 
 */
export interface CreateAttachUDiskRequest {
    /**
     * 地域。 参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Region:string
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * 购买UDisk大小,单位:GB,普通数据盘：范围[1~8000]；SSD数据盘：范围[1~8000]；RSSD数据盘：范围[1~32000]；高效数据盘：范围[1~32000]。
     */
    Size:number
    /**
     * 实例名称
     */
    Name:string
    /**
     * UHost实例ID。当创建云盘类型为RSSDDataDisk时，根据传入的UHostId，创建与虚机在同一PodId下的云盘。【UHostId和HostId必须选填一个，本字段即将废弃，建议使用HostId】
     */
    UHostId?:string
    /**
     * Year , Month, Dynamic, Postpay, Trial 。 Size小于等于2000时，默认为Dynamic；Size大于2000时，默认为Month。
     */
    ChargeType?:string
    /**
     * 购买时长 默认: 1
     */
    Quantity?:number
    /**
     * 【开启数据方舟入口已关闭】是否开启数据方舟。Yes：开启，No：不开启，默认值：No
     */
    UDataArkMode?:string
    /**
     * 是否开启快照服务（开启快照服务，可免费开启数据方舟）。Yes：开启，No：不开启，默认值：No
     */
    SnapshotService?:string
    /**
     * 业务组 默认：Default
     */
    Tag?:string
    /**
     * UDisk 类型: DataDisk（普通数据盘），SSDDataDisk（SSD数据盘），RSSDDataDisk（RSSD数据盘），EfficiencyDataDisk（高效数据盘），默认值（DataDisk）
     */
    DiskType?:string
    /**
     * 是否加密。Yes：加密，No：不加密，默认值（No）
     */
    UKmsMode?:string
    /**
     * 加密需要的cmk id，UKmsMode为Yes时，必填
     */
    CmkId?:string
    /**
     * 是否允许多点挂载（Yes: 允许多点挂载， No: 不允许多点挂载， 不填默认Yes ）
     */
    MultiAttach?:string
    /**
     * Host实例ID。当创建云盘类型为RSSDDataDisk时，根据传入的HostId，创建与虚机在同一PodId下的云盘。
     */
    HostId?:string
    /**
     * 使用的代金券id
     */
    CouponId?:string
}
    
/**
 * DescribeRecycleUDiskResponse - 
 */
export interface DescribeRecycleUDiskResponse {
    /**
     * 磁盘数量
     */
    TotalCount:number
    /**
     * 回收站磁盘列表
     */
    DataSet?:
            RecycleUDiskSet[]
}
    
/**
 * UDiskSnapshotSet - 
 */
export interface UDiskSnapshotSet {
    /**
     * 可用区
     */
    Zone:string
    /**
     * 快照Id
     */
    SnapshotId:string
    /**
     * 快照名称
     */
    Name:string
    /**
     * 快照的源UDisk的Id
     */
    UDiskId:string
    /**
     * 快照的源UDisk的Name
     */
    UDiskName:string
    /**
     * 创建时间
     */
    CreateTime:number
    /**
     * 容量单位GB
     */
    Size:number
    /**
     * 快照状态，Normal:正常,Failed:失败,Creating:制作中
     */
    Status:string
    /**
     * 磁盘类型，0：普通数据盘；1：普通系统盘；2：SSD数据盘；3：SSD系统盘；4：RSSD数据盘；5：RSSD系统盘。
     */
    DiskType:number
    /**
     * 过期时间
     */
    ExpiredTime?:number
    /**
     * 快照描述
     */
    Comment?:string
    /**
     * 对应磁盘是否处于可用状态
     */
    IsUDiskAvailable?:boolean
    /**
     * 快照版本
     */
    Version?:string
    /**
     * 对应磁盘制作快照时所挂载的主机
     */
    UHostId?:string
    /**
     * 是否是加密盘快照，是:"Yes", 否:"No"
     */
    UKmsMode?:string
    /**
     * 该快照的cmk id
     */
    CmkId?:string
    /**
     * 该快照的密文密钥
     */
    DataKey?:string
    /**
     * 该快照cmk的状态, Enabled(正常)，Disabled(失效)，Deleted(删除)，NoCmkId(非加密盘)
     */
    CmkIdStatus?:string
    /**
     * cmk id 别名
     */
    CmkIdAlias?:string
}
    
/**
 * CloneUDiskRequest - 
 */
export interface CloneUDiskRequest {
    /**
     * 地域。 参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Region:string
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * 实例名称
     */
    Name:string
    /**
     * 克隆父Disk的Id
     */
    SourceId:string
    /**
     * 【开启数据方舟入口已关闭】是否开启数据方舟。Yes：开启，No：不开启，默认值：No
     */
    UDataArkMode?:string
    /**
     * 是否开启快照服务（开启快照服务，可免费开启数据方舟）。Yes：开启，No：不开启，默认值：No
     */
    SnapshotService?:string
    /**
     * 购买时长 默认: 1
     */
    Quantity?:number
    /**
     * Disk注释
     */
    Comment?:string
    /**
     * Year , Month, Dynamic，Postpay，Trial 默认: Month
     */
    ChargeType?:string
    /**
     * 业务组 默认：Default
     */
    Tag?:string
    /**
     * RDMA集群id。指定RSSD云盘克隆到对应的RDMA集群。
     */
    RdmaClusterId?:string
    /**
     * Host实例ID。克隆出的云盘可直接挂载到该主机上。
     */
    HostId?:string
    /**
     * 使用的代金券id
     */
    CouponId?:string
}
    
/**
 * DescribeUDiskResponse - 
 */
export interface DescribeUDiskResponse {
    /**
     * JSON 格式的UDisk数据列表, 每项参数可见下面 UDiskDataSet
     */
    DataSet?:
            UDiskDataSet[]
    /**
     * 根据过滤条件得到的总数
     */
    TotalCount?:number
}
    
/**
 * DescribeUDiskPriceResponse - 
 */
export interface DescribeUDiskPriceResponse {
    /**
     * 价格参数列表，具体说明见 UDiskPriceDataSet
     */
    DataSet?:
            UDiskPriceDataSet[]
}
    
/**
 * AttachUDiskRequest - 
 */
export interface AttachUDiskRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
     */
    Zone?:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * 需要挂载的UDisk实例ID.
     */
    UDiskId:string
    /**
     * UHost实例ID。【UHostId和HostId必须选填一个，本字段即将废弃，建议使用HostId】
     */
    UHostId?:string
    /**
     * 是否允许多点挂载（Yes: 允许多点挂载， No: 不允许多点挂载， 不填默认Yes ）
     */
    MultiAttach?:string
    /**
     * Host实例ID
     */
    HostId?:string
}
    
/**
 * CreateUDiskSnapshotRequest - 
 */
export interface CreateUDiskSnapshotRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
     */
    Zone:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * 快照的UDisk的Id
     */
    UDiskId:string
    /**
     * 快照名称
     */
    Name:string
    /**
     * 购买时长 默认: 1  (已废弃)
     */
    Quantity?:number
    /**
     * Year , Month, Dynamic 默认: Dynamic  (已废弃)
     */
    ChargeType?:string
    /**
     * 快照描述
     */
    Comment?:string
}
    
/**
 * CloneUDiskUDataArkRequest - 
 */
export interface CloneUDiskUDataArkRequest {
    /**
     * 地域。 参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Region:string
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * 实例名称
     */
    Name:string
    /**
     * 需要克隆的源盘id
     */
    UDiskId:string
    /**
     * 指定从方舟克隆的备份时间点
     */
    SnapshotTime:number
    /**
     * Disk注释
     */
    Comment?:string
    /**
     * Year , Month, Dynamic，Postpay 默认: Dynamic
     */
    ChargeType?:string
    /**
     * 购买时长 默认: 1
     */
    Quantity?:number
    /**
     * 【开启数据方舟入口已关闭】是否开启数据方舟。Yes：开启，No：不开启，默认值：No
     */
    UDataArkMode?:string
    /**
     * 是否开启快照服务（开启快照服务，可免费开启数据方舟）。Yes：开启，No：不开启，默认值：No
     */
    SnapshotService?:string
    /**
     * 购买UDisk大小,单位:GB,范围[1~8000]。(UDisk大小设定对本地盘备份有效，对云盘备份无效)
     */
    Size?:number
    /**
     * 业务组 默认：Default
     */
    Tag?:string
    /**
     * RDMA集群id。指定RSSD云盘克隆到对应的RDMA集群。
     */
    RdmaClusterId?:string
    /**
     * Host实例ID。克隆出的云盘可直接挂载到该主机上。
     */
    HostId?:string
    /**
     * 使用的代金券id
     */
    CouponId?:string
}
    
/**
 * DeleteUDiskRequest - 
 */
export interface DeleteUDiskRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
     */
    Zone:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * 要删除的UDisk的Id
     */
    UDiskId:string
}
    
/**
 * ResizeUDiskRequest - 
 */
export interface ResizeUDiskRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
     */
    Zone:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * UDisk Id
     */
    UDiskId:string
    /**
     * 调整后大小, 单位:GB,普通数据盘：范围[1~8000]；SSD数据盘：范围[1~8000]；RSSD数据盘：范围[1~32000]。
     */
    Size:number
    /**
     * 云主机机型（V2.0），枚举值["N", "C", "G", "O", "OM"]。参考[[api:uhost-api:uhost_type|云主机机型说明]]。
     */
    MachineType?:string
    /**
     * 使用的代金券id
     */
    CouponId?:string
}
    
/**
 * DescribeUDiskUpgradePriceRequest - 
 */
export interface DescribeUDiskUpgradePriceRequest {
    /**
     * 地域。 参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Region:string
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * 购买UDisk大小,单位:GB,普通数据盘：范围[1~8000]；SSD数据盘：范围[1~8000]；普通系统盘：范围[1~8000]；SSD系统盘：范围[1~4000]；RSSD数据盘：范围[1~32000]；RSSD系统盘：范围[1~4000]；高效数据盘：范围[1~32000]；高效系统盘：范围[1~500]。
     */
    Size:number
    /**
     * 升级目标UDisk ID
     */
    SourceId:string
    /**
     * 【开启数据方舟入口已关闭】是否开启数据方舟。Yes：开启，No：不开启，默认值：No
     */
    UDataArkMode?:string
    /**
     * 是否开启快照服务（开启快照服务，可免费开启数据方舟）。Yes：开启，No：不开启，默认值：No。仅支持查询开启快照服务的价格。
     */
    SnapshotService?:string
    /**
     * 【已废弃】UDisk 类型: DataDisk（普通数据盘），SSDDataDisk（SSD数据盘），RSSDDataDisk(RSSD数据盘)，EfficiencyDataDisk（高效数据盘），SystemDisk（普通系统盘），SSDSystemDisk（SSD系统盘），RSSDSystemDisk(RSSD系统盘)，EfficiencySystemDisk（高效系统盘），默认值（DataDisk）
     */
    DiskType?:string
    /**
     * 【已废弃】云主机机型（V2.0），枚举值["N", "C", "G", "O", "OM"]。参考[[api:uhost-api:uhost_type|云主机机型说明]]。
     */
    MachineType?:string
}
    
/**
 * CreateAttachUDiskResponse - 
 */
export interface CreateAttachUDiskResponse {
    /**
     * 挂载的UDisk实例ID
     */
    UDiskId?:string
    /**
     * 挂载的UHost实例ID。【即将废弃，建议使用HostId】
     */
    UHostId?:string
    /**
     * 挂载的Host实例ID
     */
    HostId?:string
    /**
     * 挂载设备名称
     */
    DeviceName?:string
}
    
/**
 * DeleteUDiskSnapshotResponse - 
 */
export interface DeleteUDiskSnapshotResponse {
}
    
/**
 * CloneUDiskSnapshotRequest - 
 */
export interface CloneUDiskSnapshotRequest {
    /**
     * 地域。 参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Region:string
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * 实例名称
     */
    Name:string
    /**
     * 克隆父Snapshot的Id
     */
    SourceId:string
    /**
     * 购买UDisk大小,单位:GB,范围[1~8000]。(UDisk大小设定对本地盘快照有效，对云盘快照无效)
     */
    Size?:number
    /**
     * Disk注释
     */
    Comment?:string
    /**
     * Year , Month, Dynamic，Postpay 默认: Dynamic
     */
    ChargeType?:string
    /**
     * 购买时长 默认: 1
     */
    Quantity?:number
    /**
     * 【开启数据方舟入口已关闭】是否开启数据方舟。Yes：开启，No：不开启，默认值：No
     */
    UDataArkMode?:string
    /**
     * 是否开启快照服务（开启快照服务，可免费开启数据方舟）。Yes：开启，No：不开启，默认值：No
     */
    SnapshotService?:string
    /**
     * 业务组 默认：Default
     */
    Tag?:string
    /**
     * RDMA集群id。指定RSSD云盘克隆到对应的RDMA集群。
     */
    RdmaClusterId?:string
    /**
     * Host实例ID。克隆出的云盘可直接挂载到该主机上。
     */
    HostId?:string
    /**
     * 使用的代金券id
     */
    CouponId?:string
}
    
/**
 * CloneUDiskResponse - 
 */
export interface CloneUDiskResponse {
    /**
     * 创建UDisk Id
     */
    UDiskId?:string[]
}
    
/**
 * CreateUDiskRequest - 
 */
export interface CreateUDiskRequest {
    /**
     * 地域。 参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Region:string
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * 购买UDisk大小,单位:GB,普通数据盘：范围[1~8000]；SSD数据盘：范围[1~8000]；RSSD数据盘：范围[1~32000]；高效数据盘：范围[1~32000]。
     */
    Size:number
    /**
     * 实例名称
     */
    Name:string
    /**
     * Year , Month, Dynamic, Postpay, Trial 。默认为Dynamic。
     */
    ChargeType?:string
    /**
     * 购买时长 默认: 1
     */
    Quantity?:number
    /**
     * 【开启数据方舟入口已关闭】是否开启数据方舟。Yes：开启，No：不开启，默认值：No
     */
    UDataArkMode?:string
    /**
     * 是否开启快照服务（开启快照服务，可免费开启数据方舟）。Yes：开启，No：不开启，默认值：No
     */
    SnapshotService?:string
    /**
     * 业务组 默认：Default
     */
    Tag?:string
    /**
     * UDisk 类型: DataDisk（普通数据盘），SSDDataDisk（SSD数据盘），RSSDDataDisk（RSSD数据盘），EfficiencyDataDisk（高效数据盘），默认值（DataDisk）
     */
    DiskType?:string
    /**
     * 是否加密。Yes：加密，No：不加密，默认值（No）
     */
    UKmsMode?:string
    /**
     * 加密需要的cmk id，UKmsMode为Yes时，必填
     */
    CmkId?:string
    /**
     * RDMA集群id。DiskType为RSSDDataDisk可填，指定云盘创建到对应的RDMA集群。
     */
    RdmaClusterId?:string
    /**
     * 使用的代金券id
     */
    CouponId?:string
}
    
/**
 * RenameUDiskResponse - 
 */
export interface RenameUDiskResponse {
}
    
/**
 * RecoverUDiskRequest - 
 */
export interface RecoverUDiskRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
     */
    Zone:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * 云硬盘资源ID
     */
    UDiskId:string
    /**
     * Year , Month, Dynamic 默认: Dynamic
     */
    ChargeType?:string
    /**
     * 购买时长 默认: 1
     */
    Quantity?:number
}
