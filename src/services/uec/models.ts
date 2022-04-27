


    
/**
 * LoginUEcDockerResponse - 
 */
export interface LoginUEcDockerResponse {
    /**
     * 返回的token
     */
    SessionId:string
    /**
     * 登录地址
     */
    Link?:string
    /**
     * 登录端口
     */
    LinkPort?:number
}
    
/**
 * CreateUEcHolderRequest - 
 */
export interface CreateUEcHolderRequest {
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * 机房id
     */
    IdcId:string
    /**
     * 容器组Cpu总核数
     */
    CpuCore:number
    /**
     * 容器组总内存，单位MB
     */
    MemSize:number
    /**
     * 子网ID
     */
    SubnetId:string
    /**
     * 容器组名称（默认default）
     */
    Name?:string
    /**
     * 机型（normal-经济型，hf-标准型，默认normal）
     */
    ProductType?:string
    /**
     * 重启策略（0总是，1失败是，2永不，默认0）
     */
    RestartStrategy?:number
    /**
     * 绑定外网ip（yes-绑定，no-不绑定，默认no）
     */
    ElasticIp?:string
    /**
     * 外网绑定的带宽（单位M，默认0，只有当ElasticIp为yes时，默认1）
     */
    Bandwidth?:number
    /**
     * 防火墙ID
     */
    FirewallId?:string
    /**
     * 付费方式（2按月、3按年。默认2，默认月付）
     */
    ChargeType?:number
    /**
     * 月数或者年数（默认值：1，当为按月计费时，0表示计费到月底，默认值为0）
     */
    ChargeQuantity?:number
    /**
     * 
     */
    Pack?:
            CreateUEcHolderRequestPack[]
    /**
     * 
     */
    Image?:
            CreateUEcHolderRequestImage[]
    /**
     * 
     */
    Storage?:
            CreateUEcHolderRequestStorage[]
}
    
/**
 * MonitorInfo - 
 */
export interface MonitorInfo {
    /**
     * 时间戳
     */
    TimeStamp:number
    /**
     * 值
     */
    Value:number
}
    
/**
 * UnBindUEcFirewallResponse - 
 */
export interface UnBindUEcFirewallResponse {
}
    
/**
 * DescribeUEcHolderRequest - 
 */
export interface DescribeUEcHolderRequest {
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * 容器组资源id
     */
    HolderId?:string[]
    /**
     * 返回数据长度，默认为20，非负整数
     */
    Limit?:number
    /**
     * 列表起始位置偏移量，默认为0。非负整数
     */
    Offset?:number
}
    
/**
 * ImageInfo - 
 */
export interface ImageInfo {
    /**
     * 镜像ID
     */
    ImageId?:string
    /**
     * 镜像名称
     */
    ImageName?:string
    /**
     * 镜像类型：1标准镜像，2行业镜像，3自定义镜像
     */
    ImageType?:number
    /**
     * 系统类型：unix, windows
     */
    OcType?:string
    /**
     * 镜像描述
     */
    ImageDesc?:string
    /**
     * 镜像状态：镜像状态 1可用，2不可用，3制作中
     */
    State?:number
    /**
     * 镜像大小，单位GB
     */
    ImageSize?:number
    /**
     * 镜像创建时间戳
     */
    CreateTime?:number
    /**
     * 部署详情列表
     */
    DeployInfoList?:
            DeployImageInfo[]
    /**
     * 是否支持Gpu(1-支持,0-不支持)
     */
    Gpu?:number
}
    
/**
 * UnBindUEcFirewallRequest - 
 */
export interface UnBindUEcFirewallRequest {
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * 防火墙Id
     */
    FirewallId:string
    /**
     * 节点Id或容器组资源id
     */
    ResourceId:string
}
    
/**
 * CfgDictList - 
 */
export interface CfgDictList {
    /**
     * 名称
     */
    Name?:string
    /**
     * 挂载路径
     */
    MountPath?:string
    /**
     * 资源id
     */
    ResourceId?:string
}
    
/**
 * DescribeUEcVHostRequest - 
 */
export interface DescribeUEcVHostRequest {
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * Idc机房id。默认全部机房
     */
    IdcId?:string[]
    /**
     * 节点id，创建节点时生成的id。默认全部节点
     */
    NodeId?:string[]
    /**
     * 数据偏移量，默认0，非负整数
     */
    Offset?:number
    /**
     * 返回数据长度， 默认20，非负整数
     */
    Limit?:number
}
    
/**
 * HolderList - 
 */
export interface HolderList {
    /**
     * 容器组资源id
     */
    ResourceId?:string
    /**
     * 容器组名称
     */
    HolderName?:string
    /**
     * 容器组子网id
     */
    SubnetId?:string
    /**
     * 容器组内网ip
     */
    InnerIp?:string
    /**
     * 容器组外网ip集合（详情参考IpList）
     */
    IpList?:
            IpList[]
    /**
     * 容器组运行状态0：初始化；1：拉取镜像；2：启动中；3：运行中；4：错误；5：正在重启；6：正在删除；7：已经删除；8：容器运行错误；9：启动失败；99：异常
     */
    State?:number
    /**
     * 创建时间
     */
    CreateTime?:number
    /**
     * 过期时间
     */
    ExpireTime?:number
    /**
     * 线路类型（运营商类型： 0-其它, 1-一线城市单线,2-二线城市单线, 3-全国教育网, 4-全国三通）
     */
    Type?:number
    /**
     * 机房id
     */
    IdcId?:string
    /**
     * 机房名称
     */
    OcName?:string
    /**
     * 省份名称
     */
    Province?:string
    /**
     * 城市名称
     */
    City?:string
    /**
     * 0：总是；1：失败是；2：永不
     */
    RestartStrategy?:number
    /**
     * 容器数量
     */
    DockerCount?:number
    /**
     * 容器信息（详情参考DockerInfo）
     */
    DockerInfo?:
            DockerInfo[]
    /**
     * 机器类型（normal经济型，hf标准型）
     */
    ProductType?:string
    /**
     * 外网绑定的带宽
     */
    NetLimit?:number
    /**
     * 外网防火墙id
     */
    FirewallId?:string
    /**
     * 存储卷信息（详情参考StorVolumeInfo）
     */
    StorVolumeInfo?:
            StorVolumeInfo[]
    /**
     * 存储卷数量
     */
    StorVolumeCount?:number
    /**
     * 容器组镜像密钥列表（详情参考ImageList）
     */
    ImageList?:
            ImageList[]
}
    
/**
 * SubnetInfo - 
 */
export interface SubnetInfo {
    /**
     * 子网ID
     */
    SubnetId:string
    /**
     * 子网名称
     */
    SubnetName:string
    /**
     * 机房ID
     */
    IdcId:string
    /**
     * 子网cidr
     */
    CIDR:string
    /**
     * 创建时间
     */
    CreateTime:number
    /**
     * 备注
     */
    Comment:string
    /**
     * 总ip数
     */
    TotalIpCnt:number
    /**
     * 可用ip数
     */
    AvailableIPCnt:number
}
    
/**
 * DescribeUEcHolderIDCRequest - 
 */
export interface DescribeUEcHolderIDCRequest {
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * 容器组Cpu核数
     */
    Cpu:number
    /**
     * 容器组内存大小（单位MB）
     */
    Memory:number
    /**
     * Idc机房id。默认全部机房
     */
    IdcId?:string[]
    /**
     * 0-其它, 1-一线城市单线,2-二线城市单线, 3-全国教育网, 4-全国三通
     */
    Type?:number
    /**
     * 产品类型，normal标准型，hf高性能型
     */
    ProductType?:string
}
    
/**
 * GetUEcUpgradePriceResponse - 
 */
export interface GetUEcUpgradePriceResponse {
    /**
     * 规格调整差价
     */
    Price?:number
}
    
/**
 * NodeList - 
 */
export interface NodeList {
    /**
     * 虚拟机资源id
     */
    NodeId?:string
}
    
/**
 * UpdateUEcSubnetResponse - 
 */
export interface UpdateUEcSubnetResponse {
}
    
/**
 * GetUEcHolderLogRequest - 
 */
export interface GetUEcHolderLogRequest {
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * 容器名称
     */
    PackName:string
    /**
     * 容器组资源id
     */
    ResourceId:string
}
    
/**
 * DeleteUEcCustomImageResponse - 
 */
export interface DeleteUEcCustomImageResponse {
    /**
     * 镜像ID
     */
    ImageId:number
}
    
/**
 * DeleteUEcCustomImageRequest - 
 */
export interface DeleteUEcCustomImageRequest {
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * 镜像ID
     */
    ImageId:string
    /**
     * 机房ID，带机房ID表示只删除指定机房镜像
     */
    IdcId?:string
}
    
/**
 * PoweroffUEcVHostResponse - 
 */
export interface PoweroffUEcVHostResponse {
}
    
/**
 * StopUEcVHostResponse - 
 */
export interface StopUEcVHostResponse {
}
    
/**
 * ReinstallUEcVHostRequest - 
 */
export interface ReinstallUEcVHostRequest {
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * 虚拟机资源ID
     */
    NodeId:string
    /**
     * 镜像ID
     */
    ImageId:string
    /**
     * 是否保留数据盘数据， 0-不保留，1-保留，默认为1
     */
    KeepData?:number
    /**
     * 节点密码
     */
    Password?:string
    /**
     * 系统盘大小，单位GB
     */
    SysDiskSize?:number
}
    
/**
 * DeployImageInfo - 
 */
export interface DeployImageInfo {
    /**
     * 机房ID
     */
    IdcId?:string
    /**
     * 镜像状态 1-可用, 2-不可用, 3-获取中, 4-转换中, 5-部署中
     */
    State?:number
}
    
/**
 * IdcInfo - 
 */
export interface IdcInfo {
    /**
     * 机房ID
     */
    IdcId?:string
    /**
     * 机房名称
     */
    Name?:string
    /**
     * 运营商
     */
    Isp?:string
    /**
     * 省份
     */
    Province?:string
    /**
     * 城市
     */
    City?:string
    /**
     * 运营商类型：0-其它, 1-一线城市单线,2-二线城市单线, 3-全国教育网, 4-全国三通
     */
    Type?:number
    /**
     * 机房可创建节点最大数量
     */
    MaxNodeCnt?:number
}
    
/**
 * GetUEcHolderMetricsResponse - 
 */
export interface GetUEcHolderMetricsResponse {
    /**
     * 获得的监控数据（详情参考MetricisDataSet）
     */
    DataSets:
        MetricisDataSet
}
    
/**
 * ModifyUEcHolderNameRequest - 
 */
export interface ModifyUEcHolderNameRequest {
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * 容器组资源id
     */
    ResourceId:string
    /**
     * 容器组名称
     */
    Name:string
}
    
/**
 * ModifyUEcHolderNameResponse - 
 */
export interface ModifyUEcHolderNameResponse {
}
    
/**
 * ModifyUEcImageNameRequest - 
 */
export interface ModifyUEcImageNameRequest {
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * 镜像ID
     */
    ImageId:string
    /**
     * 镜像名称
     */
    ImageName:string
    /**
     * 镜像描述
     */
    ImageDesc?:string
}
    
/**
 * GetUEcHolderLogResponse - 
 */
export interface GetUEcHolderLogResponse {
    /**
     * 返回的日志数据
     */
    Data?:string
}
    
/**
 * StorVolumeInfo - 
 */
export interface StorVolumeInfo {
    /**
     * 名称
     */
    Name?:string
    /**
     * 资源id
     */
    ResourceId?:string
    /**
     * 挂载点
     */
    MountPoint?:string
    /**
     * 容量（单位GB）
     */
    DiskSize?:number
}
    
/**
 * PoweroffUEcVHostRequest - 
 */
export interface PoweroffUEcVHostRequest {
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * 虚拟机资源ID
     */
    NodeId:string[]
}
    
/**
 * DescribeUEcFirewallResourceResponse - 
 */
export interface DescribeUEcFirewallResourceResponse {
    /**
     * 资源列表，详情参见ResourceInfo
     */
    ResourceSet:
            ResourceInfo[]
    /**
     * 资源总数
     */
    TotalCount:number
}
    
/**
 * NodeIspList - 
 */
export interface NodeIspList {
    /**
     * 省份
     */
    Province?:string
    /**
     * 城市
     */
    City?:string
    /**
     * 线路类型
     */
    LineType?:string
    /**
     * 机房运营商名称
     */
    IspName?:string
    /**
     * 机房名称
     */
    IdcName?:string
}
    
/**
 * GetUEcVHostDataRequest - 
 */
export interface GetUEcVHostDataRequest {
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * 节点id
     */
    NodeId:string
    /**
     * 0CPU使用率, 1内存使用率, 2 网卡出流量, 3网卡入流量, 4网卡出包量, 5网卡入包量, 6磁盘读流量, 7磁盘写流量, 8磁盘读次数, 9磁盘写次数
     */
    Type:number[]
    /**
     * 查询起始时间
     */
    BeginTime?:number
    /**
     * 查询结束时间
     */
    EndTime?:number
}
    
/**
 * GetUEcPodPriceResponse - 
 */
export interface GetUEcPodPriceResponse {
    /**
     * 容器组价格
     */
    HolderPrice:number
    /**
     * IP和带宽价格
     */
    IpPrice:number
}
    
/**
 * StartUEcVHostResponse - 
 */
export interface StartUEcVHostResponse {
}
    
/**
 * DescribeUEcFirewallRequest - 
 */
export interface DescribeUEcFirewallRequest {
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * 防火墙ID，默认为返回所有防火墙
     */
    FirewallId?:string
    /**
     * 绑定防火墙组的虚拟机资源ID
     */
    ResourceId?:string
    /**
     * 返回数据长度，默认为20
     */
    Limit?:number
    /**
     * 列表起始位置偏移量，默认为0
     */
    Offset?:number
}
    
/**
 * CreateUEcVHostResponse - 
 */
export interface CreateUEcVHostResponse {
    /**
     * 节点id（详情参考NodeList）
     */
    NodeList:
            NodeList[]
}
    
/**
 * CreateUEcFirewallRequestRule - 
 */
export interface CreateUEcFirewallRequestRule {
    /**
     * 协议，可选值：TCP，UDP，ICMP
     */
    ProtocolType:string
    /**
     * 端口，范围用"-"符号分隔，如：1-65535
     */
    Port:string
    /**
     * 源ip
     */
    SrcIp:string
    /**
     * ACCEPT（接受）和DROP（拒绝）
     */
    Action:string
    /**
     * 优先级：HIGH（高），MEDIUM（中），LOW（低）
     */
    Priority:string
    /**
     * 备注
     */
    Remark?:string
}
    
/**
 * UpdateUEcFirewallResponse - 
 */
export interface UpdateUEcFirewallResponse {
}
    
/**
 * DeleteUEcSubnetRequest - 
 */
export interface DeleteUEcSubnetRequest {
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * 子网ID
     */
    SubnetId:string
}
    
/**
 * DescribeUEcSubnetRequest - 
 */
export interface DescribeUEcSubnetRequest {
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * 机房ID
     */
    IdcId?:string
    /**
     * 子网ID
     */
    SubnetId?:string
}
    
/**
 * DescribeUEcVHostISPResponse - 
 */
export interface DescribeUEcVHostISPResponse {
    /**
     * 节点运营商列表
     */
    NodeIspList:
            NodeIspList[]
}
    
/**
 * GetUEcUpgradePriceRequest - 
 */
export interface GetUEcUpgradePriceRequest {
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * 虚拟机资源ID
     */
    NodeId:string
    /**
     * cpu核心数
     */
    CpuCore?:number
    /**
     * 内存大小，单位GB
     */
    MemSize?:number
    /**
     * 系统盘大小，单位GB
     */
    SysDiskSize?:number
    /**
     * 数据盘大小，单位GB
     */
    DiskSize?:number
    /**
     * 节点带宽限制，单位Mbs
     */
    NetLimit?:number
}
    
/**
 * DeleteUEcVHostResponse - 
 */
export interface DeleteUEcVHostResponse {
}
    
/**
 * GetUEcImageRequest - 
 */
export interface GetUEcImageRequest {
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * 镜像类型：1标准镜像，2行业镜像，3自定义镜像
     */
    ImageType?:string
    /**
     * 数据偏移量，默认0，非负整数
     */
    Offset?:number
    /**
     * 返回数据长度， 默认20，非负整数
     */
    Limit?:number
}
    
/**
 * DescribeUEcVHostResponse - 
 */
export interface DescribeUEcVHostResponse {
    /**
     * 满足条件的节点总数
     */
    TotalCount?:number
    /**
     * 节点列表
     */
    NodeList?:
            NodeInfo[]
}
    
/**
 * DataSet - 
 */
export interface DataSet {
    /**
     * cpu使用率
     */
    CPUUtilization?:
            MonitorInfo[]
    /**
     * 内存使用率
     */
    MemUtilization?:
            MonitorInfo[]
    /**
     * 网卡出带宽
     */
    NICOut?:
            MonitorInfo[]
    /**
     * 网卡入带宽
     */
    NICIn?:
            MonitorInfo[]
    /**
     * 网卡出包量
     */
    NetPacketOut?:
            MonitorInfo[]
    /**
     * 网卡入包量
     */
    NetPacketIn?:
            MonitorInfo[]
    /**
     * 磁盘读取量
     */
    IORead?:
            MonitorInfo[]
    /**
     * 磁盘写入量
     */
    IOWrite?:
            MonitorInfo[]
    /**
     * 磁盘读取次数
     */
    DiskReadOps?:
            MonitorInfo[]
    /**
     * 磁盘写入次数
     */
    DiskWriteOps?:
            MonitorInfo[]
}
    
/**
 * DescribeUEcSubnetResponse - 
 */
export interface DescribeUEcSubnetResponse {
    /**
     * 子网信息列表
     */
    SubnetList?:
            SubnetInfo[]
}
    
/**
 * IpList - 
 */
export interface IpList {
    /**
     * 外网ip
     */
    Ip?:string
    /**
     * 运营商
     */
    Isp?:string
}
    
/**
 * UpdateUEcFirewallRequest - 
 */
export interface UpdateUEcFirewallRequest {
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * 防火墙Id
     */
    FirewallId:string
    /**
     * 
     */
    Rule?:
            UpdateUEcFirewallRequestRule[]
}
    
/**
 * DescribeUEcFirewallResponse - 
 */
export interface DescribeUEcFirewallResponse {
    /**
     * 防火墙组详细信息，参见 FirewallInfo
     */
    FirewallSet?:
            FirewallInfo[]
    /**
     * 满足条件的节点总数
     */
    TotalCount?:number
}
    
/**
 * DescribeUEcVHostISPRequest - 
 */
export interface DescribeUEcVHostISPRequest {
    /**
     * 运营商名称
     */
    IspName?:string
    /**
     * 省份
     */
    Province?:string
    /**
     * 城市
     */
    City?:string
}
    
/**
 * ModifyUEcBandwidthRequest - 
 */
export interface ModifyUEcBandwidthRequest {
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * 节点Id
     */
    NodeId:string
    /**
     * 节点带宽限制，单位Mbs
     */
    NetLimit:string
}
    
/**
 * GetUEcVHostDataResponse - 
 */
export interface GetUEcVHostDataResponse {
    /**
     * 带宽数据实例集合
     */
    DataSets?:
        DataSet
}
    
/**
 * RestartUEcVHostResponse - 
 */
export interface RestartUEcVHostResponse {
}
    
/**
 * CreateUEcHolderRequestImage - 
 */
export interface CreateUEcHolderRequestImage {
    /**
     * 镜像用户名和密码（如镜像名：密码）
     */
    Message?:string
    /**
     * 镜像仓库地址
     */
    StoreAddress?:string
}
    
/**
 * ImportUEcCustomImageResponse - 
 */
export interface ImportUEcCustomImageResponse {
    /**
     * 镜像Id
     */
    ImageId:string
}
    
/**
 * RestartUEcVHostRequest - 
 */
export interface RestartUEcVHostRequest {
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * 节点id
     */
    NodeId:string[]
}
    
/**
 * CreateUEcHolderRequestPack - 
 */
export interface CreateUEcHolderRequestPack {
    /**
     * 容器名称
     */
    Name?:string
    /**
     * 容器Cpu核数
     */
    CpuCore?:number
    /**
     * 容器内存，单位MB
     */
    MemSize?:number
    /**
     * 容器镜像名称
     */
    ImageName?:string
    /**
     * 容器工作目录
     */
    WorkDir?:string
    /**
     * 开启容器的命令
     */
    Cmd?:string
    /**
     * 容器参数（多个用；隔开）
     */
    Args?:string
    /**
     * 容器环境变量（多个用；隔开,如：key1:value1;key2:value2）
     */
    Environment?:string
    /**
     * 容器配置字典（多个用；隔开，如：/data1:resId1;/data2:resId2）
     */
    ConfigDict?:string
}
    
/**
 * DeleteUEcHolderResponse - 
 */
export interface DeleteUEcHolderResponse {
}
    
/**
 * ImageList - 
 */
export interface ImageList {
    /**
     * 仓库地址
     */
    StoreAddr?:string
    /**
     * 用户名称
     */
    UserName?:string
    /**
     * 镜像密钥
     */
    ImageKey?:string
}
    
/**
 * GetUEcVHostPriceRequest - 
 */
export interface GetUEcVHostPriceRequest {
    /**
     * 机房Id
     */
    IdcId:string
    /**
     * 节点数量，默认1
     */
    NodeCount?:number
    /**
     * CPU核数
     */
    CpuCore?:number
    /**
     * 内存大小，单位GB
     */
    MemSize?:number
    /**
     * 系统盘大小，单位GB
     */
    SysDiskSize?:number
    /**
     * 数据盘大小，单位GB
     */
    DiskSize?:number
    /**
     * 网络带宽限速，单位Mbs
     */
    NetLimit?:number
    /**
     * 付费方式，1按时，2按月，3按年，默认2
     */
    ChargeType?:number
    /**
     * 月数或者年数，0计费到月底， 默认0
     */
    ChargeQuantity?:number
    /**
     * 产品类型：normal（经济型），hf（标准型），g(Gpu型),默认normal
     */
    ProductType?:string
    /**
     * 外网IP的数量，默认1
     */
    IpCount?:number
    /**
     * Gpu卡核心数。仅Gpu机型支持此字段
     */
    Gpu?:number
    /**
     * Gpu类型，枚举值["T4"],ProductType为g时必填
     */
    GpuType?:string
}
    
/**
 * GetUEcIDCVHostDataResponse - 
 */
export interface GetUEcIDCVHostDataResponse {
    /**
     * 监控数据集合
     */
    DataSets:
        DataSet
}
    
/**
 * LoginUEcDockerRequest - 
 */
export interface LoginUEcDockerRequest {
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * 容器组资源id
     */
    ResourceId:string
    /**
     * 容器名称
     */
    Name:string
}
    
/**
 * IDCCutInfo - 
 */
export interface IDCCutInfo {
    /**
     * 机房名称
     */
    IDCName?:string
    /**
     * 省份
     */
    Province?:string
    /**
     * 城市
     */
    City?:string
    /**
     * 割接开始时间
     */
    StartTime?:number
    /**
     * 割接结束时间
     */
    EndTime?:number
    /**
     * 割接类型（中断、抖动、断电）
     */
    CutType?:string
    /**
     * 受影响的资源信息列表
     */
    ResourceSet?:
            ResourceSet[]
}
    
/**
 * GetUEcPodPriceRequest - 
 */
export interface GetUEcPodPriceRequest {
    /**
     * 机房id
     */
    IdcId:string
    /**
     * 容器组总Cpu核心数
     */
    CpuCore?:number
    /**
     * 容器组总内存大小（单位M）
     */
    MemSize?:number
    /**
     * 支付类型（2按月，3按年，默认2）
     */
    ChargeType?:number
    /**
     * 月数或年数（默认值：1，当支付类型为按月时，默认值为0）
     */
    ChargeQuantity?:number
    /**
     * 产品类型（normal：标准型，hf：高性能型，默认：normal）
     */
    ProductType?:string
    /**
     * 是否绑定外网IP（yes：是，no：否，默认：no）
     */
    ElasticIp?:string
    /**
     * 绑定的带宽，默认0，当绑定外网IP时默认1（单位M）
     */
    Bandwidth?:number
}
    
/**
 * GetUEcHolderMetricsRequest - 
 */
export interface GetUEcHolderMetricsRequest {
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * 容器名称
     */
    PackName:string
    /**
     * n为0 CPU利用率, 1内存使用率, 2网卡出带宽, 3网卡入带宽, 4网卡出包数, 5网卡入包数
     */
    Type:string[]
    /**
     * 容器组资源id
     */
    ResourceId:string
    /**
     * 开始时间
     */
    StartTime?:number
    /**
     * 结束时间
     */
    EndTime?:number
}
    
/**
 * GetUEcIDCCutInfoRequest - 
 */
export interface GetUEcIDCCutInfoRequest {
}
    
/**
 * DeleteUEcSubnetResponse - 
 */
export interface DeleteUEcSubnetResponse {
}
    
/**
 * NodeInfo - 
 */
export interface NodeInfo {
    /**
     * 节点名称
     */
    NodeName?:string
    /**
     * 节点ID
     */
    NodeId?:string
    /**
     * Cpu核数
     */
    CoreNum?:number
    /**
     * 节点内存大小，单位GB
     */
    MemSize?:number
    /**
     * 系统盘大小， 单位GB
     */
    SysDiskSize?:number
    /**
     * 数据盘大小， 单位GB
     */
    DiskSize?:number
    /**
     * 节点状态，1部署中，2待启动，3启动中，4运行中，5正在停止，6已停止，7正在更新，8正在重启，9正在删除， 10已经删除,11异常
     */
    State?:number
    /**
     * 节点带宽限制， 单位Mbs
     */
    NetLimit?:number
    /**
     * 机房ID
     */
    IdcId?:string
    /**
     * 机房名称
     */
    OcName?:string
    /**
     * 省份
     */
    Province?:string
    /**
     * 城市
     */
    City?:string
    /**
     * 运营商类型： 0-其它, 1-一线城市单线,2-二线城市单线, 3-全国教育网, 4-全国三通
     */
    Type?:number
    /**
     * 付费类型：1按时, 2按月,3按年
     */
    ChargeType?:number
    /**
     * 创建时间
     */
    CreateTime?:number
    /**
     * 过期时间
     */
    ExpiredTime?:number
    /**
     * 镜像名称
     */
    ImageName?:string
    /**
     * 外网ip集合（详情参考NodeIpList）
     */
    NodeIpList?:
            NodeIpList[]
    /**
     * 防火墙Id
     */
    FirewallId?:string
    /**
     * 机器类型(normal-经济型,hf-标准型,g-GPU型)
     */
    ProductType?:string
    /**
     * 内网ip列表
     */
    InnerIps?:string[]
}
    
/**
 * GetUEcImageResponse - 
 */
export interface GetUEcImageResponse {
    /**
     * 获取的镜像信息，具体参考下面ImageInfo
     */
    ImageList?:
            ImageInfo[]
    /**
     * 镜像总数
     */
    TotalCount?:number
}
    
/**
 * ModifyUEcImageNameResponse - 
 */
export interface ModifyUEcImageNameResponse {
}
    
/**
 * RestartUEcHolderRequest - 
 */
export interface RestartUEcHolderRequest {
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * 容器组资源id，n为0，1，2...
     */
    ResourceId:string[]
}
    
/**
 * UpdateUEcFirewallAttributeResponse - 
 */
export interface UpdateUEcFirewallAttributeResponse {
}
    
/**
 * GetUEcIDCVHostDataRequest - 
 */
export interface GetUEcIDCVHostDataRequest {
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * 节点资源id；n为0，1，2...
     */
    NodeId:string[]
    /**
     * 监控数据类型；n为0,1,2,3,4...,9
     */
    Type:string[]
    /**
     * 开始时间戳
     */
    BeginTime?:number
    /**
     * 结束时间戳
     */
    EndTime?:number
}
    
/**
 * ResourceSet - 
 */
export interface ResourceSet {
    /**
     * 节点id
     */
    NodeId?:string
    /**
     * 机器外网ip集合
     */
    OuterIps?:string[]
}
    
/**
 * ImportUEcCustomImageRequest - 
 */
export interface ImportUEcCustomImageRequest {
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * 镜像需要导入机房，默认分发到所有机房
     */
    IdcId?:string[]
    /**
     * 镜像Id，不传参表示新导入镜像，传参表示已有镜像分发到指定机房
     */
    ImageId?:string
    /**
     * 镜像名称，不带镜像ID时必填
     */
    ImageName?:string
    /**
     * UFile镜像文件下载地址，不带镜像ID时必填
     */
    UFileUrl?:string
    /**
     * 操作系统平台，linux、windows(当前版本暂不支持windows)，不带镜像ID时必填
     */
    OsType?:string
    /**
     * 镜像格式，可选RAW、qcow2， 不带镜像ID时必填
     */
    Format?:string
    /**
     * 镜像描述
     */
    ImageDesc?:string
}
    
/**
 * NodeIpList - 
 */
export interface NodeIpList {
    /**
     * 外网ip
     */
    Ip?:string
    /**
     * 运营商
     */
    Isp?:string
    /**
     * 运营商名称
     */
    IspName?:string
}
    
/**
 * CreateUEcCustomImageRequest - 
 */
export interface CreateUEcCustomImageRequest {
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * 虚拟机实例ID
     */
    NodeId:string
    /**
     * 镜像名称
     */
    ImageName:string
    /**
     * 镜像描述
     */
    ImageDescription?:string
}
    
/**
 * FirewallInfo - 
 */
export interface FirewallInfo {
    /**
     * 防火墙Id
     */
    FirewallId:string
    /**
     * 防火墙名称
     */
    Name:string
    /**
     * 创建时间
     */
    CreateTime:number
    /**
     * 防火墙规则组，详情参见RuleInfo
     */
    Rule:
            RuleInfo[]
    /**
     * 防火墙绑定资源数量
     */
    ResourceCount:number
    /**
     * 防火墙组类型，枚举值为： "user defined", 用户自定义防火墙； "recommend web", 默认Web防火墙； "recommend non web", 默认非Web防火墙
     */
    Type:string
    /**
     * 描述
     */
    Remark?:string
}
    
/**
 * DescribeUEcIDCRequest - 
 */
export interface DescribeUEcIDCRequest {
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * 节点cpu核数
     */
    Cpu:number
    /**
     * 节点内存大小， 单位GB
     */
    Memory:number
    /**
     * Idc机房id。默认全部机房
     */
    IdcId?:string[]
    /**
     * 0-其它, 1-一线城市单线,2-二线城市单线, 3-全国教育网, 4-全国三通
     */
    Type?:number
    /**
     * 产品类型：normal（经济型），hf（标准型）,g(GPU型)
     */
    ProductType?:string
    /**
     * Gpu卡核心数
     */
    Gpu?:number
}
    
/**
 * UpdateUEcSubnetRequest - 
 */
export interface UpdateUEcSubnetRequest {
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * 子网ID
     */
    SubnetId:string
    /**
     * 子网名称
     */
    SubnetName?:string
    /**
     * 备注
     */
    Comment?:string
}
    
/**
 * StartUEcVHostRequest - 
 */
export interface StartUEcVHostRequest {
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * 虚拟机资源ID
     */
    NodeId:string[]
}
    
/**
 * CreateUEcCustomImageResponse - 
 */
export interface CreateUEcCustomImageResponse {
    /**
     * 镜像ID
     */
    ImageId:string
}
    
/**
 * ModifyUEcBandwidthResponse - 
 */
export interface ModifyUEcBandwidthResponse {
}
    
/**
 * ReinstallUEcVHostResponse - 
 */
export interface ReinstallUEcVHostResponse {
}
    
/**
 * DockerInfo - 
 */
export interface DockerInfo {
    /**
     * CPU核数（/核）精度0.1核
     */
    CpuCores?:number
    /**
     * 内存大小（Gi）
     */
    MemSize?:number
    /**
     * 容器名称
     */
    Name?:string
    /**
     * 容器状态，0：初始化；1：拉取镜像；2：拉取镜像失败；3：启动中；4：运行中；5：正在停止；6：已停止；7：已删除；8：镜像拉取成功；9：启动失败；99：异常 
     */
    State?:number
    /**
     * 镜像名称
     */
    ImageName?:string
    /**
     * 工作目录
     */
    WorkDir?:string
    /**
     * 命令
     */
    Command?:string
    /**
     * 参数
     */
    Args?:string
    /**
     * 环境变量（详情参考EnvList）
     */
    EnvList?:
            EnvList[]
    /**
     * 容器配置字典（详情参考CfgDictList）
     */
    CfgDictList?:
            CfgDictList[]
}
    
/**
 * ResourceInfo - 
 */
export interface ResourceInfo {
    /**
     * 资源Id
     */
    ResourceId:string
    /**
     * 节点公网Ip列表
     */
    PublicIpList:string[]
    /**
     * 节点名称
     */
    Name:string
    /**
     * 节点状态，1部署中，2待启动，3启动中，4运行中，5正在停止，6已停止，7正在更新，8正在重启，9正在删除， 10已经删除,11异常
     */
    State:number
    /**
     * 节点备注
     */
    Remark?:string
}
    
/**
 * StopUEcVHostRequest - 
 */
export interface StopUEcVHostRequest {
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * 虚拟机资源ID
     */
    NodeId:string[]
}
    
/**
 * CreateUEcFirewallRequest - 
 */
export interface CreateUEcFirewallRequest {
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * 防火墙名称
     */
    Name:string
    /**
     * 
     */
    Rule?:
            CreateUEcFirewallRequestRule[]
    /**
     * 描述
     */
    Remark?:string
}
    
/**
 * EnvList - 
 */
export interface EnvList {
    /**
     * 环境变量key值
     */
    Key?:string
    /**
     * 环境变量Value值
     */
    Value?:string
}
    
/**
 * CreateUEcSubnetRequest - 
 */
export interface CreateUEcSubnetRequest {
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * 机房ID
     */
    IdcId:string
    /**
     * 子网cidr
     */
    CIDR:string
    /**
     * 子网名称
     */
    SubnetName?:string
    /**
     * 备注
     */
    Comment?:string
}
    
/**
 * CreateUEcFirewallResponse - 
 */
export interface CreateUEcFirewallResponse {
    /**
     * 防火墙Id
     */
    FirewallId:string
}
    
/**
 * UpdateUEcFirewallAttributeRequest - 
 */
export interface UpdateUEcFirewallAttributeRequest {
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * 防火墙Id
     */
    FirewallId:string
    /**
     * 防火墙名称
     */
    Name?:string
    /**
     * 描述
     */
    Remark?:string
}
    
/**
 * DeleteUEcHolderRequest - 
 */
export interface DeleteUEcHolderRequest {
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * 容器组资源id，n为0，1，2...
     */
    HolderId:string[]
}
    
/**
 * CreateUEcVHostRequest - 
 */
export interface CreateUEcVHostRequest {
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * 机房id
     */
    IdcId:string
    /**
     * cpu核心数
     */
    CpuCore:number
    /**
     * 内存大小，单位GB
     */
    MemSize:number
    /**
     * 数据盘大小，单位GB
     */
    DiskSize:number
    /**
     * 镜像ID
     */
    ImageId:string
    /**
     * 节点带宽限制，单位Mbs
     */
    NetLimit:number
    /**
     * 节点名称
     */
    NodeName?:string
    /**
     * 系统盘大小，单位GB， 默认20GB
     */
    SysDiskSize?:number
    /**
     * 账户名，默认root
     */
    AccountName?:string
    /**
     * 密码
     */
    PassWord?:string
    /**
     * 创建节点数量，默认1
     */
    NodeCount?:number
    /**
     * 付费方式，1按时，2按月，3按年，默认2
     */
    ChargeType?:number
    /**
     * 月数或者年数，0计费到月底， 默认0
     */
    ChargeQuantity?:number
    /**
     * 子网ID
     */
    SubnetId?:string
    /**
     * 产品类型：normal（经济型），hf（标准型）,g(Gpu型)
     */
    ProductType?:string
    /**
     * 外网防护墙规则组，默认
     */
    FirewallId?:string
    /**
     * 运营商（1-电信，2-联通，4移动）
     */
    Isp?:number[]
    /**
     * 是否需要外网ip（no-否）
     */
    IsNeedOuterIp?:string
    /**
     * Gpu卡核心数。仅Gpu机型支持此字段
     */
    Gpu?:number
    /**
     * Gpu类型，枚举值["T4S"],ProductType为G时必填
     */
    GpuType?:string
}
    
/**
 * UpdateUEcFirewallRequestRule - 
 */
export interface UpdateUEcFirewallRequestRule {
    /**
     * 协议，可选值：TCP，UDP，ICMP
     */
    ProtocolType:string
    /**
     * 端口，范围用"-"符号分隔，如：1-65535
     */
    Port:string
    /**
     * 源ip
     */
    SrcIp:string
    /**
     * ACCEPT（接受）和DROP（拒绝）
     */
    Action:string
    /**
     * 	优先级：HIGH（高），MEDIUM（中），LOW（低）
     */
    Priority:string
    /**
     * 备注
     */
    Remark:string
}
    
/**
 * CreateUEcHolderResponse - 
 */
export interface CreateUEcHolderResponse {
    /**
     * 容器组资源id
     */
    ResourceId?:string
}
    
/**
 * GetUEcIDCCutInfoResponse - 
 */
export interface GetUEcIDCCutInfoResponse {
    /**
     * 机房割接信息
     */
    IDCCutInfo:
            IDCCutInfo[]
    /**
     * 满足条件的机房总数
     */
    TotalCount?:number
}
    
/**
 * RestartUEcHolderResponse - 
 */
export interface RestartUEcHolderResponse {
}
    
/**
 * DescribeUEcFirewallResourceRequest - 
 */
export interface DescribeUEcFirewallResourceRequest {
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * 防火墙Id
     */
    FirewallId:string
}
    
/**
 * CreateUEcSubnetResponse - 
 */
export interface CreateUEcSubnetResponse {
    /**
     * 子网ID
     */
    SubnetId:string
}
    
/**
 * BindUEcFirewallRequest - 
 */
export interface BindUEcFirewallRequest {
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * 防火墙Id
     */
    FirewallId:string
    /**
     * 虚拟机资源Id或容器组资源id
     */
    ResourceId:string
}
    
/**
 * DescribeUEcIDCResponse - 
 */
export interface DescribeUEcIDCResponse {
    /**
     * 获取的机房信息，具体参考下面IdcInfo
     */
    IdcList?:
            IdcInfo[]
}
    
/**
 * BindUEcFirewallResponse - 
 */
export interface BindUEcFirewallResponse {
}
    
/**
 * RuleInfo - 
 */
export interface RuleInfo {
    /**
     * 协议，可选值：TCP，UDP，ICMP
     */
    ProtocolType:string
    /**
     * 端口，范围用"-"符号分隔，如：1-65535
     */
    Port:string
    /**
     * 源ip
     */
    SrcIp:string
    /**
     * ACCEPT（接受）和DROP（拒绝）
     */
    Action:string
    /**
     * 优先级：HIGH（高），MEDIUM（中），LOW（低）
     */
    Priority:string
    /**
     * 备注
     */
    Remark:string
}
    
/**
 * DescribeUEcHolderResponse - 
 */
export interface DescribeUEcHolderResponse {
    /**
     * 容器组列表（详情参考HolderList）
     */
    HolderList:
            HolderList[]
    /**
     * 满足条件的容器组总数
     */
    TotalCount:number
}
    
/**
 * MetricisDataSet - 
 */
export interface MetricisDataSet {
    /**
     * cpu利用率（详情参考MonitorInfo）
     */
    CPUUtilization?:
            MonitorInfo[]
    /**
     * 内存使用率（详情参考MonitorInfo）
     */
    MemUtilization?:
            MonitorInfo[]
    /**
     * 网卡出包数（详情参考MonitorInfo）
     */
    NetPacketOut?:
            MonitorInfo[]
    /**
     * 网卡入包数（详情参考MonitorInfo）
     */
    NetPacketIn?:
            MonitorInfo[]
    /**
     * 网卡出带宽（详情参考MonitorInfo）
     */
    NICOut?:
            MonitorInfo[]
    /**
     * 网卡入带宽（详情参考MonitorInfo）
     */
    NICIn?:
            MonitorInfo[]
}
    
/**
 * GetUEcVHostPriceResponse - 
 */
export interface GetUEcVHostPriceResponse {
    /**
     * 节点价格
     */
    NodePrice?:number
    /**
     * Ip和带宽价格
     */
    IpPrice?:number
}
    
/**
 * CreateUEcHolderRequestStorage - 
 */
export interface CreateUEcHolderRequestStorage {
    /**
     * 存储卷挂载路径
     */
    Path?:string
    /**
     * 存储卷资源id
     */
    ResourceId?:string
}
    
/**
 * DeleteUEcVHostRequest - 
 */
export interface DeleteUEcVHostRequest {
    /**
     * 项目ID。不填写为默认项目，子帐号必须填写。 请参考[GetProjectList接口](https://docs.ucloud.cn/api/summary/get_project_list)
     */
    ProjectId?:string
    /**
     * 节点id
     */
    NodeId:string[]
}
    
/**
 * DescribeUEcHolderIDCResponse - 
 */
export interface DescribeUEcHolderIDCResponse {
    /**
     * 机房列表，具体参考下面IdcInfo
     */
    IdcList:
            IdcInfo[]
}
