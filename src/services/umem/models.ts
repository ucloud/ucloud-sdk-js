


    
/**
 * RemoveUDRedisDataRequest - 
 */
export interface RemoveUDRedisDataRequest {
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
     * 实例id
     */
    SpaceId:string
}
    
/**
 * RestartUMemcacheGroupResponse - 
 */
export interface RestartUMemcacheGroupResponse {
}
    
/**
 * URedisConfigSet - 
 */
export interface URedisConfigSet {
    /**
     * Zone
     */
    Zone?:string
    /**
     * 配置ID
     */
    ConfigId?:string
    /**
     * 配置名称
     */
    Name?:string
    /**
     * 配置描述
     */
    Description?:string
    /**
     * 配置对应的Redis版本
     */
    Version?:string
    /**
     * 置是否可以修改
     */
    IsModify?:string
    /**
     * 配置所处的状态
     */
    State?:string
    /**
     * 创建时间 (UNIX时间戳)
     */
    CreateTime?:number
    /**
     * 修改时间 (UNIX时间戳)
     */
    ModifyTime?:number
    /**
     * 是否是跨机房URedis(默认false)
     */
    RegionFlag?:boolean
}
    
/**
 * ModifyURedisGroupPasswordResponse - 
 */
export interface ModifyURedisGroupPasswordResponse {
}
    
/**
 * UMemPriceSet - 
 */
export interface UMemPriceSet {
    /**
     * Year， Month， Dynamic，Trial
     */
    ChargeType?:string
    /**
     * 现价
     */
    Price?:number
    /**
     * 原价
     */
    OriginalPrice?:number
}
    
/**
 * UMemcachePriceSet - 
 */
export interface UMemcachePriceSet {
    /**
     * 计费模式，Year, Month, Dynamic
     */
    ChargeType?:string
    /**
     * 总价格
     */
    Price?:number
    /**
     * 产品列表价
     */
    ListPrice?:number
    /**
     * 原价
     */
    OriginalPrice?:number
}
    
/**
 * DeleteURedisGroupRequest - 
 */
export interface DeleteURedisGroupRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * 组ID
     */
    GroupId:string
}
    
/**
 * DeleteUMemcacheGroupResponse - 
 */
export interface DeleteUMemcacheGroupResponse {
}
    
/**
 * FlushallURedisGroupResponse - 
 */
export interface FlushallURedisGroupResponse {
}
    
/**
 * ModifyUMemSpaceNameRequest - 
 */
export interface ModifyUMemSpaceNameRequest {
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
     * UMem内存空间ID
     */
    SpaceId:string
    /**
     * 新的名称,长度(6<=size<=63)
     */
    Name:string
}
    
/**
 * GetUMemSpaceStateRequest - 
 */
export interface GetUMemSpaceStateRequest {
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
     * 内存空间ID
     */
    SpaceId:string
}
    
/**
 * DescribeURedisUpgradePriceRequest - 
 */
export interface DescribeURedisUpgradePriceRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
     */
    Zone?:string
    /**
     * 购买uredis大小,单位:GB,范围是[1-32]
     */
    Size:number
    /**
     * 要升级的空间的GroupId,请参考DescribeURedisGroup接口
     */
    GroupId:string
}
    
/**
 * DescribeUMemSpaceResponse - 
 */
export interface DescribeUMemSpaceResponse {
    /**
     * JSON 格式的UMem内存空间实例列表, 详细参见 UMemSpaceSet
     */
    DataSet?:
            UMemSpaceSet[]
    /**
     * 根据过滤条件得到的总数
     */
    TotalCount?:number
}
    
/**
 * ResizeURedisGroupResponse - 
 */
export interface ResizeURedisGroupResponse {
}
    
/**
 * RestartURedisGroupRequest - 
 */
export interface RestartURedisGroupRequest {
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
     * 资源ID
     */
    GroupId:string
}
    
/**
 * CreateURedisBackupResponse - 
 */
export interface CreateURedisBackupResponse {
    /**
     * 备份id
     */
    BackupId:string
}
    
/**
 * CheckURedisAllowanceResponse - 
 */
export interface CheckURedisAllowanceResponse {
    /**
     * 创建实例资源时，表示可创建的数量；扩容资源时，返回1表示可以扩容，0表示可用区资源不足不能扩容
     */
    Count:number
}
    
/**
 * CreateUMemcacheGroupResponse - 
 */
export interface CreateUMemcacheGroupResponse {
    /**
     * 创建的组ID
     */
    GroupId?:string
}
    
/**
 * DescribeURedisPriceRequest - 
 */
export interface DescribeURedisPriceRequest {
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
     * 量大小,单位:GB  取值范围[1-32]
     */
    Size:number
    /**
     * 计费模式，Year， Month， Dynamic；如果不指定，则一次性获取三种计费
     */
    ChargeType?:string
    /**
     * 计费模式为Dynamic时，购买的时长, 默认为1
     */
    Quantity?:number
    /**
     * 是否是跨机房URedis(默认false)
     */
    RegionFlag?:boolean
    /**
     * 产品类型：MS_Redis（标准主备版），S_Redis（从库），默认为MS_Redis
     */
    ProductType?:string
}
    
/**
 * DescribeUMemBlockInfoRequest - 
 */
export interface DescribeUMemBlockInfoRequest {
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
     * UMem内存资源ID
     */
    SpaceId:string
    /**
     * 分页显示的起始偏移, 默认值为0
     */
    Offset:number
    /**
     * 分页显示的条目数, 默认值为10
     */
    Limit:number
}
    
/**
 * ISolationURedisGroupRequest - 
 */
export interface ISolationURedisGroupRequest {
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
     * 组的ID
     */
    GroupId:string
    /**
     * UNBind(关闭)或Bind(打开)
     */
    TransformType:string
    /**
     * 跨机房URedis，slave所在可用区（必须和Zone在同一Region，且不可相同）
     */
    SlaveZone?:string
}
    
/**
 * DescribeUMemBlockInfoResponse - 
 */
export interface DescribeUMemBlockInfoResponse {
    /**
     * 分布式redis 分片信息
     */
    DataSet?:
            UMemBlockInfo[]
}
    
/**
 * DescribeUDRedisSlowlogResponse - 
 */
export interface DescribeUDRedisSlowlogResponse {
    /**
     * 总条目数
     */
    TotalCount:number
    /**
     * 条目数据
     */
    DataSet:
            UDRedisSlowlogSet[]
}
    
/**
 * UDRedisSlowlogSet - 
 */
export interface UDRedisSlowlogSet {
    /**
     * 查询发生的时间
     */
    StartTime?:number
    /**
     * 查询消耗的时间
     */
    SpendTime?:number
    /**
     * 查询命令
     */
    Command?:string
    /**
     * 分片id
     */
    BlockId?:string
}
    
/**
 * DescribeUMemPriceResponse - 
 */
export interface DescribeUMemPriceResponse {
    /**
     * 价格 参数见 UMemPriceSet
     */
    DataSet?:
            UMemPriceSet[]
}
    
/**
 * CreateURedisGroupRequest - 
 */
export interface CreateURedisGroupRequest {
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
     * 请求创建组的名称 (范围[6-63],只能包含英文、数字以及符号-和_)
     */
    Name:string
    /**
     * 是否开启高可用,enable或disable
     */
    HighAvailability:string
    /**
     * 每个节点的内存大小,单位GB,默认1GB,目前仅支持1/2/4/8/16/32,六种
     */
    Size?:number
    /**
     * 是否自动备份,enable或disable，默认disable
     */
    AutoBackup?:string
    /**
     * 自动备份开始时间,范围[0-23],默认3点
     */
    BackupTime?:number
    /**
     * 配置ID,目前支持 3.0版本配置ID:"03f58ca9-b64d-4bdd-abc7-c6b9a46fd801",3.2版本配置ID:"3e45ac48-f8a2-a9q2-261d-l342dab130gf", 4.0版本配置ID:"6c9298a3-9d7f-428c-b1d0-e87ab3b8a1ea",默认版本3.0,从备份创建为必传项
     */
    ConfigId?:string
    /**
     * Redis版本信息(详见DescribeURedisVersion返回结果),默认版本3.0
     */
    Version?:string
    /**
     * 计费模式，Year , Month, Dynamic 默认: Month
     */
    ChargeType?:string
    /**
     * 购买时长，默认为1
     */
    Quantity?:number
    /**
     * 业务组名称
     */
    Tag?:string
    /**
     * 初始化密码,需要 base64 编码
     */
    Password?:string
    /**
     * 有此项代表从备份中创建，无代表正常创建
     */
    BackupId?:string
    /**
     * 跨机房URedis，slave所在可用区（必须和Zone在同一Region，且不可相同）
     */
    SlaveZone?:string
    /**
     * Master Redis Group的ID，创建只读Slave时，必须填写
     */
    MasterGroupId?:string
    /**
     * 是否创建使用ipv6 资源， 默认为false， 或者不填， 创建ipv6为true
     */
    EnableIpV6?:boolean
    /**
     * 子网ID
     */
    SubnetId?:string
    /**
     * VPC的ID
     */
    VPCId?:string
    /**
     * 代金券ID
     */
    CouponId?:string
}
    
/**
 * DescribeUMemSpaceRequest - 
 */
export interface DescribeUMemSpaceRequest {
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
     * 数据偏移量, 默认为0
     */
    Offset?:number
    /**
     * 返回数据长度, 默认为20
     */
    Limit?:number
    /**
     * 内存空间ID (无ID，则获取所有)
     */
    SpaceId?:string
    /**
     * 协议类型: memcache, redis
     */
    Protocol?:string
}
    
/**
 * UMemDataSet - 
 */
export interface UMemDataSet {
    /**
     * 实例所在可用区，或者master redis所在可用区，参见 [可用区列表](../summary/regionlist.html)
     */
    Zone?:string
    /**
     * 是否拥有只读Slave“Yes” 包含“No” 不包含
     */
    OwnSlave:string
    /**
     * UMEM实例列表 UMemSlaveDataSet 如果没有slave，则没有该字段
     */
    DataSet?:
            UMemSlaveDataSet[]
    /**
     * 表示实例是主库还是从库,master,slave仅主备redis返回该项参数
     */
    Role?:string
    /**
     * 主备redis和分布式redis运维时间0  //0点1  //1点以此类推单机版memcache不返回该项
     */
    RewriteTime?:number
    /**
     * vpc
     */
    VPCId?:string
    /**
     * 子网
     */
    SubnetId?:string
    /**
     * 资源ID
     */
    ResourceId?:string
    /**
     * 资源名称
     */
    Name?:string
    /**
     * 创建时间
     */
    CreateTime?:number
    /**
     * 到期时间
     */
    ExpireTime?:number
    /**
     * 空间类型:single(无热备),double(热备)
     */
    Type?:string
    /**
     * 协议类型: memcache, redis
     */
    Protocol?:string
    /**
     * 容量单位GB
     */
    Size?:number
    /**
     * 使用量单位MB
     */
    UsedSize?:number
    /**
     * 实例状态                                  Starting                  // 创建中       Creating                  // 初始化中     CreateFail                // 创建失败     Fail                      // 创建失败     Deleting                  // 删除中       DeleteFail                // 删除失败     Running                   // 运行         Resizing                  // 容量调整中   ResizeFail                // 容量调整失败 Configing                 // 配置中       ConfigFail                // 配置失败Restarting                // 重启中SetPasswordFail    //设置密码失败
     */
    State?:string
    /**
     * 计费模式，Year, Month, Dynamic, Trial
     */
    ChargeType?:string
    /**
     * IP端口信息请，参见UMemSpaceAddressSet
     */
    Address?:
            UMemSpaceAddressSet[]
    /**
     * 业务组名称
     */
    Tag?:string
    /**
     * distributed: 分布式版Redis,或者分布式Memcache；single：主备版Redis,或者单机Memcache；performance：高性能版
     */
    ResourceType?:string
    /**
     * 节点的配置ID
     */
    ConfigId?:string
    /**
     * 是否需要自动备份,enable,disable
     */
    AutoBackup?:string
    /**
     * 自动备份开始时间,单位小时计,范围[0-23]
     */
    BackupTime?:number
    /**
     * 是否开启高可用,enable,disable
     */
    HighAvailability?:string
    /**
     * Redis版本信息
     */
    Version?:string
    /**
     * 跨机房URedis，slave redis所在可用区，参见 [可用区列表](../summary/regionlist.html)
     */
    SlaveZone?:string
}
    
/**
 * DescribeUDRedisProxyInfoResponse - 
 */
export interface DescribeUDRedisProxyInfoResponse {
    /**
     * 代理数据集
     */
    DataSet:
            UDRedisProxyInfo[]
}
    
/**
 * DescribeURedisBackupResponse - 
 */
export interface DescribeURedisBackupResponse {
    /**
     * 用户名下总的备份个数
     */
    TotalCount?:number
    /**
     * 备份列表 参见 URedisBackupSet
     */
    DataSet?:
            URedisBackupSet[]
}
    
/**
 * UpdateURedisBackupStrategyRequest - 
 */
export interface UpdateURedisBackupStrategyRequest {
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
     * 组的ID
     */
    GroupId:string
    /**
     * 备份时间，默认为0
     */
    BackupTime:string
    /**
     * 是否打开默认备份功能。enable(打开)，disable(关闭)，默认enable
     */
    AutoBackup?:string
    /**
     * 跨机房URedis，slave所在可用区（必须和Zone在同一Region，且不可相同）
     */
    SlaveZone?:string
}
    
/**
 * DescribeURedisConfigRequest - 
 */
export interface DescribeURedisConfigRequest {
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
     * 是否是跨机房URedis(默认false)
     */
    RegionFlag:boolean
    /**
     * Redis版本号
     */
    Version?:string
    /**
     * 配置文件ID
     */
    ConfigId?:string
    /**
     * 页显示的起始偏移, 默认值为0
     */
    Offset?:number
    /**
     * 页显示的条目数, 默认值为10
     */
    Limit?:number
}
    
/**
 * DescribeURedisSlowlogRequest - 
 */
export interface DescribeURedisSlowlogRequest {
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
     * 资源ID
     */
    GroupId:string
    /**
     * 分页显示的条目数，默认为10
     */
    Limit?:number
}
    
/**
 * ModifyURedisGroupNameResponse - 
 */
export interface ModifyURedisGroupNameResponse {
}
    
/**
 * GetUMemSpaceStateResponse - 
 */
export interface GetUMemSpaceStateResponse {
    /**
     * Starting:创建中 Running:运行中 Fail:失败
     */
    State?:string
}
    
/**
 * DescribeURedisVersionResponse - 
 */
export interface DescribeURedisVersionResponse {
    /**
     * 组列表 参见 URedisVersionSet
     */
    DataSet?:
            URedisVersionSet[]
    /**
     * 总版本个数
     */
    TotalCount?:number
}
    
/**
 * CheckUDredisSpaceAllowanceRequest - 
 */
export interface CheckUDredisSpaceAllowanceRequest {
    /**
     * 地域。 参见 [地域和可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Region:string
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone:string
    /**
     * 创建实例的容量大小,，扩容时的分片目标容量大小
     */
    Size:number
    /**
     * 创建实例的数量，[1-10]
     */
    Count:string
    /**
     * 资源ID，扩缩容时的必传参数
     */
    GroupId?:string
}
    
/**
 * ModifyURedisGroupNameRequest - 
 */
export interface ModifyURedisGroupNameRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * 组的ID
     */
    GroupId:string
    /**
     * Redis组名称 (范围[6-63],只能包含英文、数字以及符号-和_)
     */
    Name:string
}
    
/**
 * DescribeUMemPriceRequest - 
 */
export interface DescribeUMemPriceRequest {
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
    ProjectId:string
    /**
     * 购买umem大小,单位:GB,范围[1~1024]
     */
    Size:number
    /**
     * 空间类型:single(无热备),double(热备)(默认: double)
     */
    Type:string
    /**
     * Year， Month， Dynamic 如果不指定，则一次性获取三种计费
     */
    ChargeType?:string
    /**
     * 购买UMem的时长，默认值为1
     */
    Quantity?:number
}
    
/**
 * DescribeUMemBackupURLResponse - 
 */
export interface DescribeUMemBackupURLResponse {
    /**
     * 备份url，每个分片一个下载URL
     */
    BackupURL:string[]
}
    
/**
 * CreateURedisGroupResponse - 
 */
export interface CreateURedisGroupResponse {
    /**
     * 创建的组ID
     */
    GroupId?:string
}
    
/**
 * CreateUMemcacheGroupRequest - 
 */
export interface CreateUMemcacheGroupRequest {
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
     * 请求创建组的名称 范围[6-60]
     */
    Name:string
    /**
     * 每个节点的内存大小,单位GB,默认1GB 目前仅支持1/2/4/8/16/32这几档
     */
    Size?:number
    /**
     * 配置ID,目前仅支持默认配置id 默认配置id:"9a891891-c245-4b66-bce8-67e59430d67c"
     */
    ConfigId?:string
    /**
     * Memcache版本信息,默认为1.4.31
     */
    Version?:string
    /**
     * 计费模式，Year , Month, Dynamic 默认: Month
     */
    ChargeType?:string
    /**
     * 购买时长，默认为1
     */
    Quantity?:number
    /**
     * 业务组 默认：Default
     */
    Tag?:string
    /**
     * 
     */
    Protocol?:string
    /**
     * 代金券ID
     */
    CouponId?:string
}
    
/**
 * UMemBlockInfo - 
 */
export interface UMemBlockInfo {
    /**
     * 分片id
     */
    BlockId:string
    /**
     * 分片端口
     */
    BlockPort:number
    /**
     * 容量单位GB
     */
    BlockSize:number
    /**
     * 实例状态 Starting // 创建中 Creating // 初始化中 CreateFail // 创建失败 Fail // 创建失败 Deleting // 删除中 DeleteFail // 删除失败 Running // 运行 Resizing // 容量调整中 ResizeFail // 容量调整失败 Configing // 配置中 ConfigFail // 配置失败Restarting // 重启中 SetPasswordFail //设置密码失败
     */
    BlockState:string
    /**
     * 分片维护的键槽起始值
     */
    BlockSlotBegin:number
    /**
     * 分片维护的键槽结束值
     */
    BlockSlotEnd:number
    /**
     * 分片ip
     */
    BlockVip?:string
    /**
     * 使用量单位MB
     */
    BlockUsedSize?:number
}
    
/**
 * CreateUMemBackupResponse - 
 */
export interface CreateUMemBackupResponse {
    /**
     * 备份Id
     */
    BackupId?:string
}
    
/**
 * ResizeURedisGroupRequest - 
 */
export interface ResizeURedisGroupRequest {
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
     * 组ID
     */
    GroupId:string
    /**
     * 内存大小, 单位:GB (需要大于原size,且小于等于32) 目前仅支持1/2/4/8/16/32 G 六种容量规格
     */
    Size:number
    /**
     * 
     */
    ChargeType?:string
    /**
     * 空间类型:single(无热备),double(热备)(默认: double)
     */
    Type?:string
    /**
     * 代金券ID 请参考DescribeCoupon接口
     */
    CouponId?:number
}
    
/**
 * DescribeUMemBackupRequest - 
 */
export interface DescribeUMemBackupRequest {
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
     * 资源id
     */
    SpaceId:string
    /**
     * 分页显示的起始偏移, 默认值为0
     */
    Offset?:number
    /**
     * 分页显示的条目数, 默认值为10
     */
    Limit?:number
}
    
/**
 * UMemSpaceSet - 
 */
export interface UMemSpaceSet {
    /**
     * 可用区，参见[可用区列表](../summary/regionlist.html)
     */
    Zone?:string
    /**
     * 
     */
    Tag:string
    /**
     * 运维时间0   //0点1   //1点依次类推
     */
    RewriteTime:number
    /**
     * 内存空间ID
     */
    SpaceId?:string
    /**
     * 
     */
    SubnetId?:string
    /**
     * 
     */
    VPCId?:string
    /**
     * 内存空间名称
     */
    Name?:string
    /**
     * 创建时间
     */
    CreateTime?:number
    /**
     * 到期时间
     */
    ExpireTime?:number
    /**
     * 空间类型:single(无热备),double(热备)
     */
    Type?:string
    /**
     * 协议类型: memcache, redis
     */
    Protocol?:string
    /**
     * 容量单位GB
     */
    Size?:number
    /**
     * 使用量单位MB
     */
    UsedSize?:number
    /**
     * Starting:创建中 Running:运行中 Fail:失败
     */
    State?:string
    /**
     * Year, Month, Dynamic, Trial
     */
    ChargeType?:string
    /**
     * IP端口信息请参见 UMemSpaceAddressSet
     */
    Address?:
            UMemSpaceAddressSet[]
}
    
/**
 * UMemBackupSet - 
 */
export interface UMemBackupSet {
    /**
     * 备份名称
     */
    BackupName:string
    /**
     * 创建时间
     */
    CreateTime:number
    /**
     * Starting:备份中 Done:完成
     */
    State:string
    /**
     * 空间的备份ID
     */
    BackupId:string
    /**
     * 备份类型: auto(自动) ,manual(手动)
     */
    BackupType:string
    /**
     * 本次备份，分片的数量
     */
    BlockCount:number
}
    
/**
 * CreateUMemSpaceResponse - 
 */
export interface CreateUMemSpaceResponse {
    /**
     * 创建内存空间ID列表
     */
    SpaceId?:string
}
    
/**
 * DescribeUMemResponse - 
 */
export interface DescribeUMemResponse {
    /**
     * 根据过滤条件得到的总数
     */
    TotalCount?:number
    /**
     * UMem实例列表, 详细参见UMemDataSet
     */
    DataSet?:
            UMemDataSet[]
}
    
/**
 * DescribeUMemcacheUpgradePriceResponse - 
 */
export interface DescribeUMemcacheUpgradePriceResponse {
    /**
     * 价格，单位：元
     */
    Price?:number
}
    
/**
 * DescribeURedisConfigResponse - 
 */
export interface DescribeURedisConfigResponse {
    /**
     * 根据过滤条件得到的总数
     */
    TotalCount?:number
    /**
     * 配置文件列表 参见 URedisConfigSet
     */
    DataSet?:
            URedisConfigSet[]
}
    
/**
 * DescribeUMemBackupResponse - 
 */
export interface DescribeUMemBackupResponse {
    /**
     * 分布式redis 备份，数组的每个元素为每个分片的备份
     */
    DataSet?:
            UMemBackupSet[]
}
    
/**
 * UpdateURedisBackupStrategyResponse - 
 */
export interface UpdateURedisBackupStrategyResponse {
}
    
/**
 * CheckUDredisSpaceAllowanceResponse - 
 */
export interface CheckUDredisSpaceAllowanceResponse {
    /**
     * 创建实例资源时，表示可创建的数量；扩容资源时，返回1表示可以扩容，0表示可用区资源不足不能扩容
     */
    Count:number
}
    
/**
 * UMemcacheGroupSet - 
 */
export interface UMemcacheGroupSet {
    /**
     * 组ID
     */
    GroupId?:string
    /**
     * 组名称
     */
    Name?:string
    /**
     * 节点的配置ID
     */
    ConfigId?:string
    /**
     * 节点的虚拟IP地址
     */
    VirtualIP?:string
    /**
     * 节点分配的服务端口
     */
    Port?:number
    /**
     * 容量单位GB
     */
    Size?:number
    /**
     * 使用量单位MB
     */
    UsedSize?:number
    /**
     * Memcache版本信息,默认为1.4.31
     */
    Version?:string
    /**
     * 状态标记 Creating // 初始化中 CreateFail // 创建失败 Deleting // 删除中 DeleteFail // 删除失败 Running // 运行 Resizing // 容量调整中 ResizeFail // 容量调整失败 Configing // 配置中 ConfigFail // 配置失败Restarting // 重启中
     */
    State?:string
    /**
     * 创建时间 (UNIX时间戳)
     */
    CreateTime?:number
    /**
     * 修改时间 (UNIX时间戳)
     */
    ModifyTime?:number
    /**
     * 过期时间 (UNIX时间戳)
     */
    ExpireTime?:number
    /**
     * 计费类型:Year,Month,Dynamic 默认Dynamic
     */
    ChargeType?:string
    /**
     * 业务组名称
     */
    Tag?:string
}
    
/**
 * DescribeUMemcachePriceResponse - 
 */
export interface DescribeUMemcachePriceResponse {
    /**
     * 价格列表, 参见 UMemcachePriceSet
     */
    DataSet?:
            UMemcachePriceSet[]
}
    
/**
 * CheckURedisAllowanceRequest - 
 */
export interface CheckURedisAllowanceRequest {
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
     * 创建实例的容量大小, 单位:GB 目前仅支持1/2/4/8/16/32六种规格；扩缩容时，表示实例的目标资源大小
     */
    Size:number
    /**
     * 创建实例的数量，[1-10]
     */
    Count:number
    /**
     * 
     */
    Protocol?:string
    /**
     * 是否是跨机房URedis(默认false)
     */
    RegionFlag?:boolean
    /**
     * 资源ID，扩容实例资源时的必传参数
     */
    GroupId?:string
}
    
/**
 * UMemSlaveDataSet - 
 */
export interface UMemSlaveDataSet {
    /**
     * 实例所在可用区，或者master redis所在可用区，参见 [可用区列表](../summary/regionlist.html)
     */
    Zone?:string
    /**
     * 子网
     */
    SubnetId:string
    /**
     * vpc
     */
    VPCId:string
    /**
     * 
     */
    VirtualIP:string
    /**
     * 主备Redis返回运维时间 0//0点 1 //1点 以此类推
     */
    RewriteTime?:number
    /**
     * 主实例id
     */
    MasterGroupId?:string
    /**
     * 资源id
     */
    GroupId?:string
    /**
     * 端口
     */
    Port?:number
    /**
     * 实力大小
     */
    MemorySize?:number
    /**
     * 资源名称
     */
    GroupName?:string
    /**
     * 表示实例是主库还是从库,master,slave
     */
    Role?:string
    /**
     * 修改时间
     */
    ModifyTime?:number
    /**
     * 资源名称
     */
    Name?:string
    /**
     * 创建时间
     */
    CreateTime?:number
    /**
     * 到期时间
     */
    ExpireTime?:number
    /**
     * 容量单位GB
     */
    Size?:number
    /**
     * 使用量单位MB
     */
    UsedSize?:number
    /**
     * 实例状态                                  Starting                  // 创建中       Creating                  // 初始化中     CreateFail                // 创建失败     Fail                      // 创建失败     Deleting                  // 删除中       DeleteFail                // 删除失败     Running                   // 运行         Resizing                  // 容量调整中   ResizeFail                // 容量调整失败 Configing                 // 配置中       ConfigFail                // 配置失败Restarting                // 重启中SetPasswordFail  //设置密码失败
     */
    State?:string
    /**
     * 计费模式，Year, Month, Dynamic, Trial
     */
    ChargeType?:string
    /**
     * 业务组名称
     */
    Tag?:string
    /**
     * distributed: 分布式版Redis,或者分布式Memcache；single：主备版Redis,或者单机Memcache；performance：高性能版
     */
    ResourceType?:string
    /**
     * 节点的配置ID
     */
    ConfigId?:string
    /**
     * Redis版本信息
     */
    Version?:string
}
    
/**
 * DescribeURedisVersionRequest - 
 */
export interface DescribeURedisVersionRequest {
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
}
    
/**
 * URedisGroupSet - 
 */
export interface URedisGroupSet {
    /**
     * 实例所在可用区，或者master redis所在可用区，参见 [可用区列表](../summary/regionlist.html)
     */
    Zone?:string
    /**
     * 返回运维时间 0 //0点 1 //1点 以此类推
     */
    RewriteTime:number
    /**
     * 实例类型
     */
    Role:string
    /**
     * vpcid
     */
    VPCId?:string
    /**
     * subnetid
     */
    SubnetId?:string
    /**
     * 组ID
     */
    GroupId?:string
    /**
     * 组名称
     */
    Name?:string
    /**
     * 空间类型:single(无热备),double(热备)
     */
    Type?:string
    /**
     * 协议
     */
    Protocol?:string
    /**
     * 容量单位GB
     */
    MemorySize?:number
    /**
     * 组名称
     */
    GroupName?:string
    /**
     * 节点的配置ID
     */
    ConfigId?:string
    /**
     * 节点的虚拟IP地址
     */
    VirtualIP?:string
    /**
     * 节点分配的服务端口
     */
    Port?:number
    /**
     * 容量单位GB
     */
    Size?:number
    /**
     * 使用量单位MB
     */
    UsedSize?:number
    /**
     * 是否需要自动备份,enable,disable
     */
    AutoBackup?:string
    /**
     * 组自动备份开始时间,单位小时计,范围[0-23]
     */
    BackupTime?:number
    /**
     * 是否开启高可用,enable,disable
     */
    HighAvailability?:string
    /**
     * Redis版本信息
     */
    Version?:string
    /**
     * 过期时间 (UNIX时间戳)
     */
    ExpireTime?:number
    /**
     * 计费类型:Year,Month,Dynamic 默认Dynamic
     */
    ChargeType?:string
    /**
     * 状态标记 Creating // 初始化中 CreateFail // 创建失败 Deleting // 删除中 DeleteFail // 删除失败 Running // 运行 Resizing // 容量调整中 ResizeFail // 容量调整失败 Configing // 配置中 ConfigFail // 配置失败
     */
    State?:string
    /**
     * 创建时间 (UNIX时间戳)
     */
    CreateTime?:number
    /**
     * 修改时间 (UNIX时间戳)
     */
    ModifyTime?:number
    /**
     * 业务组名称
     */
    Tag?:string
    /**
     * 跨机房URedis，slave redis所在可用区，参见 [可用区列表](../summary/regionlist.html)
     */
    SlaveZone?:string
}
    
/**
 * RemoveUDRedisDataResponse - 
 */
export interface RemoveUDRedisDataResponse {
}
    
/**
 * DescribeURedisGroupRequest - 
 */
export interface DescribeURedisGroupRequest {
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
     * 组的ID,如果指定则获取描述，否则为列表操 作,需指定Offset/Limit
     */
    GroupId?:string
    /**
     * 分页显示的起始偏移, 默认值为0
     */
    Offset?:number
    /**
     * 分页显示的条目数, 默认值为20
     */
    Limit?:number
}
    
/**
 * DescribeURedisBackupRequest - 
 */
export interface DescribeURedisBackupRequest {
    /**
     * 地域。 参见 [地域和可用区列表](../summary/regionlist.html)
     */
    Region:string
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](../summary/get_project_list.html)
     */
    ProjectId?:string
    /**
     * 分页显示的起始偏移, 默认值为0
     */
    Offset?:number
    /**
     * 分页显示的条目数, 默认值为10
     */
    Limit?:number
    /**
     * 组的ID
     */
    GroupId?:string
}
    
/**
 * DescribeURedisBackupURLResponse - 
 */
export interface DescribeURedisBackupURLResponse {
    /**
     * 备份文件公网的地址
     */
    BackupURL?:string
    /**
     * 备份文件公网的地址
     */
    BackupPath?:string
}
    
/**
 * URedisPriceSet - 
 */
export interface URedisPriceSet {
    /**
     * 原价
     */
    OriginalPrice:number
    /**
     * Year， Month， Dynamic，Trial
     */
    ChargeType?:string
    /**
     * 产品列表价
     */
    ListPrice?:number
    /**
     * 总价格
     */
    Price?:number
}
    
/**
 * DescribeURedisGroupResponse - 
 */
export interface DescribeURedisGroupResponse {
    /**
     * 组的总的节点个数
     */
    TotalCount?:number
    /**
     * 组列表 参见 URedisGroupSet
     */
    DataSet?:
            URedisGroupSet[]
}
    
/**
 * URedisBackupSet - 
 */
export interface URedisBackupSet {
    /**
     * 备份ID
     */
    BackupId?:string
    /**
     * 可用区，参见[可用区列表](../summary/regionlist.html)
     */
    Zone?:string
    /**
     * 对应的实例ID
     */
    GroupId?:string
    /**
     * 组名称
     */
    GroupName?:string
    /**
     * 备份的名称
     */
    BackupName?:string
    /**
     * 备份时间 (UNIX时间戳)
     */
    BackupTime?:number
    /**
     * 备份文件大小, 以字节为单位
     */
    BackupSize?:number
    /**
     * 备份类型: Manual 手动 Auto 自动
     */
    BackupType?:string
    /**
     * 备份的状态: Backuping 备份中 Success 备份成功 Error 备份失败 Expired 备份过期
     */
    State?:string
}
    
/**
 * URedisVersionSet - 
 */
export interface URedisVersionSet {
    /**
     * Redis版本
     */
    Version?:string
}
    
/**
 * DeleteUMemcacheGroupRequest - 
 */
export interface DeleteUMemcacheGroupRequest {
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
     * 组ID
     */
    GroupId:string
}
    
/**
 * DeleteUMemSpaceResponse - 
 */
export interface DeleteUMemSpaceResponse {
}
    
/**
 * DescribeUMemcacheUpgradePriceRequest - 
 */
export interface DescribeUMemcacheUpgradePriceRequest {
    /**
     * 购买umemcache大小,单位:GB
     */
    Size:number
    /**
     * 需要升级的空间的GroupId,请参考DescribeUMemcacheGroup接口
     */
    GroupId:string
}
    
/**
 * DescribeURedisUpgradePriceResponse - 
 */
export interface DescribeURedisUpgradePriceResponse {
    /**
     * 扩容差价，单位: 元，保留小数点后两位有效数字
     */
    Price?:number
}
    
/**
 * FlushallURedisGroupRequest - 
 */
export interface FlushallURedisGroupRequest {
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
     * 组的ID
     */
    GroupId:string
    /**
     * FlushDb或FlushAll
     */
    FlushType:string
    /**
     * 清空的db，FlushType为FlushDb，此项为必传项
     */
    DbNum?:number
    /**
     * company_id
     */
    TopOrganizationId?:number
    /**
     * OrganizationId
     */
    OrganizationId?:number
    /**
     * 跨机房URedis，slave所在可用区（必须和Zone在同一Region，且不可相同）
     */
    SlaveZone?:string
}
    
/**
 * UMemSpaceAddressSet - 
 */
export interface UMemSpaceAddressSet {
    /**
     * UMem实例访问IP
     */
    IP?:string
    /**
     * UMem实例访问Port
     */
    Port?:number
}
    
/**
 * DescribeURedisBackupURLRequest - 
 */
export interface DescribeURedisBackupURLRequest {
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
     * 备份ID
     */
    BackupId:string
    /**
     * 是否是跨机房URedis(默认false)
     */
    RegionFlag?:boolean
    /**
     * 实例名称
     */
    GroupId?:string
    /**
     * 跨机房URedis，slave所在可用区（必须和Zone在同一Region，且不可相同）
     */
    SlaveZone?:string
}
    
/**
 * DescribeUMemRequest - 
 */
export interface DescribeUMemRequest {
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
     * 协议类型: memcache, redis
     */
    Protocol:string
    /**
     * 分页显示的起始偏移, 默认值为0
     */
    Offset?:number
    /**
     * 分页显示的条目数, 默认值为20
     */
    Limit?:number
    /**
     * 资源ID
     */
    ResourceId?:string
}
    
/**
 * DescribeUDRedisSlowlogRequest - 
 */
export interface DescribeUDRedisSlowlogRequest {
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
     *  实例id
     */
    InstanceId:string
    /**
     * 分页显示的条目数，默认为10
     */
    Limit?:number
}
    
/**
 * DescribeUMemcachePriceRequest - 
 */
export interface DescribeUMemcachePriceRequest {
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
     * 容量大小,单位:GB 取值范围[1-32]
     */
    Size:number
    /**
     * 计费模式，Year， Month， Dynamic，默认: Dynamic 默认: 获取所有计费模式的价格
     */
    ChargeType?:string
    /**
     * 购买umemcache的时长，默认值为1
     */
    Quantity?:number
    /**
     * 空间类型:single(无热备),double(热备)(默认: double)
     */
    Type?:string
}
    
/**
 * DescribeURedisPriceResponse - 
 */
export interface DescribeURedisPriceResponse {
    /**
     * 价格 参数见 UMemPriceSet
     */
    DataSet?:
            URedisPriceSet[]
}
    
/**
 * ResizeUMemSpaceResponse - 
 */
export interface ResizeUMemSpaceResponse {
}
    
/**
 * ISolationURedisGroupResponse - 
 */
export interface ISolationURedisGroupResponse {
}
    
/**
 * CreateUMemBackupRequest - 
 */
export interface CreateUMemBackupRequest {
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
     * 资源id
     */
    SpaceId:string
    /**
     * 请求创建备份的名称 (范围[6-63],只能包含英文、数字以及符号-和_)
     */
    BackupName:string
}
    
/**
 * ModifyUMemSpaceNameResponse - 
 */
export interface ModifyUMemSpaceNameResponse {
}
    
/**
 * DescribeUDRedisProxyInfoRequest - 
 */
export interface DescribeUDRedisProxyInfoRequest {
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
     * udredis实例id
     */
    SpaceId:string
}
    
/**
 * DescribeUMemcacheGroupRequest - 
 */
export interface DescribeUMemcacheGroupRequest {
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
     * 组的ID,如果指定则获取描述，否则为列表操 作,需指定Offset/Limit
     */
    GroupId?:string
    /**
     * 分页显示的起始偏移, 默认值为0
     */
    Offset?:number
    /**
     * 分页显示的条目数, 默认值为20
     */
    Limit?:number
}
    
/**
 * DescribeUMemBackupURLRequest - 
 */
export interface DescribeUMemBackupURLRequest {
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
     * 资源id
     */
    SpaceId:string
    /**
     * 备份Id
     */
    BackupId:string
    /**
     * 分片id
     */
    BlockId?:string
}
    
/**
 * DeleteURedisGroupResponse - 
 */
export interface DeleteURedisGroupResponse {
}
    
/**
 * RestartUMemcacheGroupRequest - 
 */
export interface RestartUMemcacheGroupRequest {
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
     * 组的ID
     */
    GroupId:string
}
    
/**
 * ResizeUMemSpaceRequest - 
 */
export interface ResizeUMemSpaceRequest {
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
     * UMem 内存空间Id
     */
    SpaceId:string
    /**
     * 内存大小, 单位:GB (需要大于原size,<= 1024)
     */
    Size:number
    /**
     * 使用的代金券Id
     */
    CouponId?:string
}
    
/**
 * RestartURedisGroupResponse - 
 */
export interface RestartURedisGroupResponse {
}
    
/**
 * ModifyURedisGroupPasswordRequest - 
 */
export interface ModifyURedisGroupPasswordRequest {
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
     * 组的ID
     */
    GroupId:string
    /**
     * 新密码字符串，要求长度为6~36个字符,且只能包含英文、数字以及-和下划线；并且需要base64加密；如要取消密码，此值为空字符串，
     */
    Password:string
}
    
/**
 * DescribeURedisSlowlogResponse - 
 */
export interface DescribeURedisSlowlogResponse {
    /**
     * 总条目数
     */
    TotalCount:number
    /**
     * 条目数据
     */
    DataSet?:
            URedisSlowlogSet[]
}
    
/**
 * CreateURedisBackupRequest - 
 */
export interface CreateURedisBackupRequest {
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
     * 资源id
     */
    GroupId:string
    /**
     * 请求创建组的名称 (范围[6-63],只能包含英文、数字以及符号-和_)
     */
    BackupName:string
    /**
     * 跨机房URedis，slave所在可用区（必须和Zone在同一Region，且不可相同）
     */
    SlaveZone?:string
}
    
/**
 * DescribeUMemUpgradePriceResponse - 
 */
export interface DescribeUMemUpgradePriceResponse {
    /**
     * 价格
     */
    Price?:number
    /**
     * 原价
     */
    OriginalPrice?:number
}
    
/**
 * CreateUMemSpaceRequest - 
 */
export interface CreateUMemSpaceRequest {
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
     * 内存大小, 单位:GB, 范围[1~1024]
     */
    Size:number
    /**
     * 空间名称,长度(6<=size<=63)
     */
    Name:string
    /**
     * 协议:memcache, redis (默认redis).注意:redis无single类型
     */
    Protocol?:string
    /**
     * 空间类型:single(无热备),double(热备)(默认: double)
     */
    Type?:string
    /**
     * Year , Month, Dynamic, Trial 默认: Month
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
 * URedisSlowlogSet - 
 */
export interface URedisSlowlogSet {
    /**
     * 查询发生的时间
     */
    StartTime?:number
    /**
     * 查询消耗的时间
     */
    SpendTime?:number
    /**
     * 查询命令
     */
    Command?:string
}
    
/**
 * DescribeUMemUpgradePriceRequest - 
 */
export interface DescribeUMemUpgradePriceRequest {
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
     * 购买UMem大小,单位:GB
     */
    Size:number
    /**
     * 空间类型:single(无热备),double(热备)(默认: double)
     */
    Type:string
    /**
     * 需要升级的空间的SpaceId
     */
    SpaceId:string
}
    
/**
 * UDRedisProxyInfo - 
 */
export interface UDRedisProxyInfo {
    /**
     * 代理资源id
     */
    ResourceId:string
    /**
     * 代理id
     */
    ProxyId:string
    /**
     * 代理ip
     */
    Vip:string
    /**
     * 代理状态
     */
    State:string
}
    
/**
 * DescribeUMemcacheGroupResponse - 
 */
export interface DescribeUMemcacheGroupResponse {
    /**
     * 组的总的节点个数
     */
    TotalCount?:number
    /**
     * 组列表,参见 UMemcacheGroupSet
     */
    DataSet?:
            UMemcacheGroupSet[]
}
    
/**
 * DeleteUMemSpaceRequest - 
 */
export interface DeleteUMemSpaceRequest {
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
     * UMem内存空间ID
     */
    SpaceId:string
}
