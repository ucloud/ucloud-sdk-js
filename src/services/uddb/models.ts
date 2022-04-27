


    
/**
 * DescribeUDDBInstanceUpgradePriceRequest - 
 */
export interface DescribeUDDBInstanceUpgradePriceRequest {
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
    ProjectId:string
    /**
     * UDDB实例ID
     */
    UDDBId:string
    /**
     * UDDB路由节点的版本。分为三种： Trival(免费版)： 2中间件节点； QPS：1.5WFeelFree(标准版)： 固定为4中间件节点，后续将根据业务请求量自动扩展，最多扩展到12个节点，QPS为3w - 10w；EnjoyAlone(物理机版)：专享物理机，节点数让客户可选
     */
    RouterVersion:string
    /**
     * 其他版本：该参数可不填；专享版：物理机节点的个数。一台物理机有2个节点
     */
    RouterNodeNum:number
    /**
     * 新的数据节点个数 取值必须>0.
     */
    DataNodeCount?:number
    /**
     * 新的数据节点的内存配置, 单位：MB 具体数值参考UDB的内存取值.
     */
    DataNodeMemory?:number
    /**
     * 新的数据节点的磁盘大小配置. 单位: GB 具体数值参考UDB的磁盘大小取值.
     */
    DataNodeDiskSpace?:number
    /**
     * 每个数据节点的只读实例个数, 取值必须>=0.
     */
    DataNodeSlaveCount?:number
    /**
     * 存储节点的高可用模式， 分为高可用UDB（HA）和普通UDB（Normal），如果不填， 则默认为HA
     */
    InstanceMode?:string
    /**
     * 存储节点和只读实例的磁盘类型。分为：SSD磁盘（SATA_SSD）或普通磁盘(Normal)。 如果不填，则默认为SATA_SSD
     */
    InstanceType?:string
}
    
/**
 * DescribeUDDBInstancePriceRequest - 
 */
export interface DescribeUDDBInstancePriceRequest {
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
    ProjectId:string
    /**
     * UDDB路由节点的版本。分为三种： Trival(免费版)： 2中间件节点； QPS：1.5WFeelFree(标准版)： 固定为4中间件节点，后续将根据业务请求量自动扩展，最多扩展到12个节点，QPS为3w - 10w；EnjoyAlone(物理机版)：专享物理机，节点数让客户可选
     */
    RouterVersion:string
    /**
     * 其他版本：该参数可不填；专享版：物理机节点个数。一台物理机有2个节点
     */
    RouterNodeNum:number
    /**
     * 初始的数据节点个数 取值必须>0.
     */
    DataNodeCount:number
    /**
     * 新的数据节点的内存配置, 单位：MB 具体数值参考UDB的内存取值.
     */
    DataNodeMemory:string
    /**
     * 新的数据节点的磁盘大小配置. 单位: GB 具体数值参考UDB的磁盘大小取值.
     */
    DataNodeDiskSpace:number
    /**
     * 付费类型，可选值如下: Year: 按年付费 Month: 按月付费 Dynamic: 按需付费(单位: 小时) Trial: 免费试用 默认值为: Dynamic
     */
    ChargeType?:string
    /**
     * 购买时长，默认值1
     */
    Quantity?:number
    /**
     * 每个数据节点的只读实例个数, 取值必须>=0. 默认取值为0.
     */
    DataNodeSlaveCount?:number
    /**
     * 存储节点的高可用模式， 分为高可用UDB（HA）和普通UDB（Normal），如果不填， 则默认为HA
     */
    InstanceMode?:string
    /**
     * 存储节点和只读实例的磁盘类型。分为：SSD磁盘（SATA_SSD）或普通磁盘(Normal)。 如果不填，则默认为SATA_SSD
     */
    InstanceType?:string
}
    
/**
 * UpgradeUDDBInstanceResponse - 
 */
export interface UpgradeUDDBInstanceResponse {
}
    
/**
 * ChangeUDDBInstanceNameRequest - 
 */
export interface ChangeUDDBInstanceNameRequest {
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
    ProjectId:string
    /**
     * UDDB实例Id
     */
    UDDBId:string
    /**
     * 名称
     */
    NewName:string
}
    
/**
 * PriceInfo - 
 */
export interface PriceInfo {
    /**
     * 中间件路由节点费用
     */
    MiddlewarePrice?:number
    /**
     * 存储节点费用
     */
    DataNodePrice?:number
    /**
     * 只读实例费用
     */
    DataNodeSlavePrice?:number
}
    
/**
 * ChangeUDDBInstanceNameResponse - 
 */
export interface ChangeUDDBInstanceNameResponse {
}
    
/**
 * CreateUDDBInstanceRequest - 
 */
export interface CreateUDDBInstanceRequest {
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
    ProjectId:string
    /**
     * UDDB的数据库版本，支持版本如下：mysql-5.6 mysql-5.7. 如果不填，则默认为mysql-5.6
     */
    DBTypeId:string
    /**
     * 实例名称，至少6位
     */
    Name:string
    /**
     * 管理员密码, 密码需要使用base64加密
     */
    AdminPassword:string
    /**
     * UDDB路由节点的版本。分为三种： Trival(免费版)： 2中间件节点； QPS：1.5W FellFree(标准版)： 固定为4中间件节点，后续将根据业务请求量自动扩展，最多扩展到12个节点，QPS为3w - 10w； EnjoyAlone(物理机版)：专享物理机，节点数让客户可选
     */
    RouterVersion:string
    /**
     * 其他版本：该参数可不填；专享版：物理机台数
     */
    RouterNodeNum:number
    /**
     * 初始的数据节点个数 取值必须>0.
     */
    DataNodeCount:number
    /**
     * 新的数据节点的内存配置, 单位：MB 具体数值参考UDB的内存取值.
     */
    DataNodeMemory:number
    /**
     * 新的数据节点的磁盘大小配置. 单位: GB 具体数值参考UDB的磁盘大小取值.
     */
    DataNodeDiskSpace:number
    /**
     * 存储节点的高可用模式， 分为高可用UDB（HA）和普通UDB（Normal），如果不填， 则默认为HA
     */
    InstanceMode?:string
    /**
     * 存储节点和只读实例的磁盘类型。分为：SSD磁盘（SATA_SSD）或普通磁盘(Normal)。 如果不填，则默认为SATA_SSD
     */
    InstanceType?:string
    /**
     * 付费类型，可选值如下:Year: 按年付费 Month: 按月付费 Dynamic: 按需付费(单位: 小时) Trial: 免费试用  默认值为: Dynamic
     */
    ChargeType?:string
    /**
     * 购买时长，默认值1
     */
    Quantity?:number
    /**
     * 管理员帐户名，默认root
     */
    AdminUser?:string
    /**
     * 端口号，mysql默认端口为3306
     */
    Port?:number
    /**
     * 每个数据节点的只读实例个数, 取值必须>=0. 默认取值为0.
     */
    DataNodeSlaveCount?:number
    /**
     * VPC的ID
     */
    VPCId?:string
    /**
     * 子网ID
     */
    SubnetId?:string
    /**
     * 使用的代金券id
     */
    CouponId?:string
}
    
/**
 * DataNodeInfo - 
 */
export interface DataNodeInfo {
    /**
     * 数据节点ID
     */
    Id?:string
    /**
     * 数据节点的内存配置, 单位：MB
     */
    Memory?:number
    /**
     * 数据节点的磁盘大小配置. 单位: GB
     */
    DiskSpace?:number
    /**
     * 数据节点的只读实例个数.
     */
    SlaveCount?:number
    /**
     * 数据分片状态, 状态列表如下: Init: 初始化中 Fail: 安装失败 Starting: 启动中 Running: 系统正常运行中 Shutdown: 关闭中 Shutoff: 已关闭 Deleted: 已删除 Upgrading: 系统升级中
     */
    State?:string
    /**
     * 只读实例信息列表
     */
    SlaveInfos?:
            SlaveInfo[]
    /**
     * 最近一次数据迁移任务id
     */
    LastTransTaskId?:string
    /**
     * 节点的创建时间
     */
    CreateTime?:string
}
    
/**
 * ChangeUDDBSlaveCountRequest - 
 */
export interface ChangeUDDBSlaveCountRequest {
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
    ProjectId:string
    /**
     * UDDB资源id
     */
    UDDBId:string
    /**
     * 每个数据节点的只读实例个数, 取值必须>=0
     */
    SlaveCount:string
}
    
/**
 * RestartUDDBInstanceRequest - 
 */
export interface RestartUDDBInstanceRequest {
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
    ProjectId:string
    /**
     * UDDB实例ID
     */
    UDDBId:string
}
    
/**
 * StartUDDBInstanceRequest - 
 */
export interface StartUDDBInstanceRequest {
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
    ProjectId:string
    /**
     * UDDB实例ID
     */
    UDDBId:string
}
    
/**
 * UpgradeUDDBDataNodeResponse - 
 */
export interface UpgradeUDDBDataNodeResponse {
}
    
/**
 * PriceDetailInfo - 
 */
export interface PriceDetailInfo {
    /**
     * 中间件路由节点费用
     */
    MiddlewarePrice?:number
    /**
     * 存储节点费用
     */
    DataNodePrice?:number
    /**
     * 只读实例费用
     */
    DataNodeSlavePrice?:number
}
    
/**
 * DescribeUDDBInstanceResponse - 
 */
export interface DescribeUDDBInstanceResponse {
    /**
     * UDDB实例信息列表, 参见DataSetUDDB项定义
     */
    DataSet?:
            DataSetUDDB[]
}
    
/**
 * CreateUDDBInstanceResponse - 
 */
export interface CreateUDDBInstanceResponse {
    /**
     * UDDB实例ID
     */
    UDDBId?:string
}
    
/**
 * DeleteUDDBInstanceResponse - 
 */
export interface DeleteUDDBInstanceResponse {
}
    
/**
 * DescribeUDDBInstancePriceResponse - 
 */
export interface DescribeUDDBInstancePriceResponse {
    /**
     * 价格明细, 参考PriceDetailInfo对象定义
     */
    PriceInfo?:
        PriceDetailInfo
}
    
/**
 * StartUDDBInstanceResponse - 
 */
export interface StartUDDBInstanceResponse {
}
    
/**
 * StopUDDBInstanceResponse - 
 */
export interface StopUDDBInstanceResponse {
}
    
/**
 * SlaveInfo - 
 */
export interface SlaveInfo {
    /**
     * 只读实例ID
     */
    Id?:string
    /**
     * 对应数据节点的ID
     */
    DataNodeId?:string
    /**
     * 只读实例状态, 状态列表如下: Init: 初始化中 Fail: 安装失败 Starting: 启动中 Running: 系统正常运行中 Shutdown: 关闭中 Shutoff: 已关闭 Deleted: 已删除 Upgrading: 系统升级中
     */
    State?:string
}
    
/**
 * UpgradeUDDBInstanceRequest - 
 */
export interface UpgradeUDDBInstanceRequest {
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
    ProjectId:string
    /**
     * UDDB实例ID
     */
    UDDBId:string
    /**
     * UDDB路由节点的版本。分为三种： Trival(免费版)： 2中间件节点； QPS：1.5W FellFree(标准版)： 固定为4中间件节点，后续将根据业务请求量自动扩展，最多扩展到12个节点，QPS为3w - 10w； EnjoyAlone(物理机版)：专享物理机，节点数让客户可选
     */
    RouterVersion:string
    /**
     * 其他版本：该参数可不填；专享版：物理机台数
     */
    RouterNodeNum:number
    /**
     * 使用的代金券id
     */
    CouponId?:string
}
    
/**
 * UpgradeUDDBDataNodeRequest - 
 */
export interface UpgradeUDDBDataNodeRequest {
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
    ProjectId:string
    /**
     * UDDB实例ID
     */
    UDDBId:string
    /**
     * 新的数据节点的内存配置, 单位：MB 具体数值参考UDB的内存取值
     */
    DataNodeMemory:number
    /**
     * 新的数据节点的磁盘大小配置. 单位: GB 具体数值参考UDB的磁盘大小取值.
     */
    DataNodeDiskSpace:number
    /**
     * 使用的代金券id
     */
    CouponId?:string
}
    
/**
 * RestartUDDBInstanceResponse - 
 */
export interface RestartUDDBInstanceResponse {
}
    
/**
 * ChangeUDDBSlaveCountResponse - 
 */
export interface ChangeUDDBSlaveCountResponse {
}
    
/**
 * DataSetUDDB - 
 */
export interface DataSetUDDB {
    /**
     * UDDB实例对应的可用区
     */
    Zone?:string
    /**
     * UDDB实例ID
     */
    UDDBId?:string
    /**
     * UDDB实例名称
     */
    Name?:string
    /**
     * UDDB的数据库版本
     */
    DBTypeId?:string
    /**
     * 管理员帐户名，默认root
     */
    AdminUser?:string
    /**
     * UDDB实例访问的虚IP
     */
    VirtualIP?:string
    /**
     * UDDB实例访问的端口号
     */
    Port?:number
    /**
     * UDDB状态, 状态列表如下: Init: 初始化中 InitFail: 初始化失败 Starting: 启动中 Running: 系统正常运行中 Abnormal: 系统运行中, 有异常, 还能提供服务 Error: 系统运行中, 但不能正常提供服务 Shutdown: 关闭中 Shutoff: 已关闭 Deleted: 已删除 UpgradingUDDB: 升降级UDDB配置中 UpgradingDataNode: 升降级UDDB节点配置中 ChangingSlaveCount: 改变只读实例数量中 ScalingOutUDDB: 水平扩展中
     */
    State?:string
    /**
     * UDDB实例创建时间，采用UTC计时时间戳
     */
    CreateTime?:number
    /**
     * UDDB实例过期时间，采用UTC计时时间戳
     */
    ExpiredTime?:number
    /**
     * 付费类型，可选值如下: Year: 按年付费 Month: 按月付费 Dynamic: 按需付费(单位: 小时) Trial: 免费试用
     */
    ChargeType?:string
    /**
     * UDDB路由节点的版本。分为三种： Trival(免费版)： 2中间件节点； QPS：1.5W FellFree(标准版)： 固定为4中间件节点，后续将根据业务请求量自动扩展，最多扩展到12个节点，QPS为3w - 10w； EnjoyAlone(物理机版)：专享物理机，节点数让客户可选
     */
    RouterVersion?:string
    /**
     * 各版本下的节点个数。体验版： 固定为2节点； 畅享版：固定为4节点（后续可通过管理API调整）；专享版：物理机台数
     */
    RouterNodeNum?:number
    /**
     * 参考QPS。 免费版： 15000； 畅享版： 30000 - 100000 （根据节点数而定）； 专享版： 节点数 * 10w qps
     */
    RefQps?:number
    /**
     * 数据节点个数
     */
    DataNodeCount?:number
    /**
     * 数据节点的内存配置, 单位：MB
     */
    DataNodeMemory?:number
    /**
     * 数据节点的磁盘大小配置. 单位: GB
     */
    DataNodeDiskSpace?:number
    /**
     * 每个数据节点的只读实例个数.
     */
    DataNodeSlaveCount?:number
    /**
     * UDDB实例的数据节点的信息列表
     */
    DataNodeList?:
            DataNodeInfo[]
    /**
     * 存储节点的高可用模式， 分为高可用UDB（HA）和普通UDB（Normal），如果不填， 则默认为HA
     */
    InstanceMode?:string
    /**
     * 存储节点和只读实例的磁盘类型。分为：SSD磁盘（SATA_SSD）或普通磁盘(Normal)。 如果不填，则默认为SATA_SSD
     */
    InstanceType?:string
}
    
/**
 * DeleteUDDBInstanceRequest - 
 */
export interface DeleteUDDBInstanceRequest {
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
    ProjectId:string
    /**
     * UDDB实例ID
     */
    UDDBId:string
}
    
/**
 * StopUDDBInstanceRequest - 
 */
export interface StopUDDBInstanceRequest {
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
    ProjectId:string
    /**
     * UDDB实例ID
     */
    UDDBId:string
}
    
/**
 * DescribeUDDBInstanceRequest - 
 */
export interface DescribeUDDBInstanceRequest {
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
    ProjectId:string
    /**
     * UDDB实例ID
     */
    UDDBId:string
}
    
/**
 * DescribeUDDBInstanceUpgradePriceResponse - 
 */
export interface DescribeUDDBInstanceUpgradePriceResponse {
    /**
     * 价格明细, 参考PriceInfo对象定义
     */
    PriceInfo?:
        PriceInfo
}
