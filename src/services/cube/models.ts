


    
/**
 * RenewCubePodResponse - 
 */
export interface RenewCubePodResponse {
    /**
     * base64编码过的yaml，需要解码获取信息
     */
    Pod:string
}
    
/**
 * ListCubeDeploymentRequest - 
 */
export interface ListCubeDeploymentRequest {
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
     * 默认0
     */
    Offset:number
    /**
     * 默认20
     */
    Limit:number
}
    
/**
 * UpdateCubeDeploymentRequest - 
 */
export interface UpdateCubeDeploymentRequest {
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
     * Deployment的Id
     */
    DeploymentId:string
    /**
     * base64编码的Deployment的yaml。大小不超过16KB
     */
    Deployment:string
    /**
     * Deployment的name
     */
    Name?:string
}
    
/**
 * CreateCubePodRequest - 
 */
export interface CreateCubePodRequest {
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
     * VPCId
     */
    VPCId:string
    /**
     * 子网Id
     */
    SubnetId:string
    /**
     * base64编码的Pod的yaml。大小不超过16KB
     */
    Pod:string
    /**
     * pod所在组
     */
    Group?:string
    /**
     * pod的名字
     */
    Name?:string
    /**
     * 业务组。默认：Default（Default即为未分组）
     */
    Tag?:string
    /**
     * Cpu平台（V6：Intel、A2：AMD、Auto），默认Auto。支持的地域（北京2B、北京2E、上海2A、广东、香港 、东京）目前北京2E仅有A2，其余地域仅有V6
     */
    CpuPlatform?:string
    /**
     * 计费模式。枚举值为： \\ > Year，按年付费； \\ > Month，按月付费；\\ > Postpay， \\ 后付费；默认为后付费
     */
    ChargeType?:string
    /**
     * 购买时长。默认:值 1。 月付时，此参数传0，代表购买至月末。
     */
    Quantity?:number
    /**
     * base64编码的kubeconfig。大小不超过16KB
     */
    KubeConfig?:string
    /**
     * 代金券ID。请通过DescribeCoupon接口查询，或登录用户中心查看
     */
    CouponId?:string
}
    
/**
 * GetCubeMetricsRequest - 
 */
export interface GetCubeMetricsRequest {
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
     * Cube实例资源ID
     */
    ResourceId:string
    /**
     * 监控指标名称
     */
    MetricName:string[]
    /**
     * 开始时间
     */
    BeginTime:number
    /**
     * 结束时间，必须大于开始时间
     */
    EndTime:number
    /**
     * Pod内容器名称
     */
    ContainerName:string
}
    
/**
 * ListCubePodRequest - 
 */
export interface ListCubePodRequest {
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
     * VPC的Id
     */
    VPCId?:string
    /**
     * 子网Id
     */
    SubnetId?:string
    /**
     * 组名称
     */
    Group?:string
    /**
     * 默认0
     */
    Offset?:number
    /**
     * 默认20
     */
    Limit?:number
    /**
     * Deployment的Id
     */
    DeploymentId?:string
}
    
/**
 * EIPSet - 
 */
export interface EIPSet {
    /**
     * EIP带宽值
     */
    Bandwidth?:number
    /**
     * 带宽类型0标准普通带宽，1表示共享带宽
     */
    BandwidthType?:number
    /**
     * EIP创建时间
     */
    CreateTime?:number
    /**
     * EIP地址
     */
    EIPAddr?:
            EIPAddr[]
    /**
     * EIPId
     */
    EIPId?:string
    /**
     * 付费模式，带宽付费或者流量付费
     */
    PayMode?:string
    /**
     * EIP绑定对象的资源Id
     */
    Resource?:string
    /**
     * EIP状态，表示使用中或者空闲
     */
    Status?:string
    /**
     * EIP权重
     */
    Weight?:number
}
    
/**
 * RebootCubePodRequest - 
 */
export interface RebootCubePodRequest {
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
     * cube资源id（cube-xxxxxx）
     */
    CubeId:string
}
    
/**
 * ValueSet - 
 */
export interface ValueSet {
    /**
     * 
     */
    Value:number
    /**
     * 
     */
    Timestamp?:number
}
    
/**
 * GetCubeTokenRequest - 
 */
export interface GetCubeTokenRequest {
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
    ProjectId:string
    /**
     * 容器名称
     */
    ContainerName:string
    /**
     * CubeId 和 Uid 中必须填写任意一个。CubeId 是所有 Cube 资源的唯一 ID，如非在 UK8S 通过 Virtual Kubelet 插件创建的 Cube， 则必填 CubeId
     */
    CubeId?:string
    /**
     * CubeId 和 Uid 中必须填写任意一个。Uid 是在 UK8S 中通过 Virtual Kubelet 插件创建出的 Cube 的唯一标识
     */
    Uid?:string
}
    
/**
 * ModifyCubeExtendInfoRequest - 
 */
export interface ModifyCubeExtendInfoRequest {
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
     * cube的id
     */
    CubeId:string
    /**
     * 修改的名字，规则（^[a-zA-Z0-9-_.\u4e00-\u9fa5]{1,32}）
     */
    Name?:string
}
    
/**
 * GetCubePodRequest - 
 */
export interface GetCubePodRequest {
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
     * CubeId和Uid任意一个
     */
    CubeId?:string
    /**
     * CubeId和Uid任意一个
     */
    Uid?:string
}
    
/**
 * ModifyCubeTagRequest - 
 */
export interface ModifyCubeTagRequest {
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
     * CubeId
     */
    CubeId:string
    /**
     * 业务组名称
     */
    Tag:string
}
    
/**
 * DeleteCubeDeploymentResponse - 
 */
export interface DeleteCubeDeploymentResponse {
}
    
/**
 * GetCubePodResponse - 
 */
export interface GetCubePodResponse {
    /**
     * base64编码的pod的yaml
     */
    Pod:string
}
    
/**
 * CubeExtendInfo - 
 */
export interface CubeExtendInfo {
    /**
     * Cube的Id
     */
    CubeId:string
    /**
     * Cube的名称
     */
    Name?:string
    /**
     * EIPSet
     */
    Eip?:
            EIPSet[]
    /**
     * 资源有效期
     */
    Expiration?:number
    /**
     * 业务组名称
     */
    Tag?:string
}
    
/**
 * EIPAddr - 
 */
export interface EIPAddr {
    /**
     * IP地址
     */
    IP?:string
    /**
     * 线路名称BGP或者internalation
     */
    OperatorName?:string
}
    
/**
 * GetCubePriceResponse - 
 */
export interface GetCubePriceResponse {
    /**
     * 折扣后价格，单位为分
     */
    Price:number
    /**
     * 列表价格，单位为分
     */
    OriginalPrice:number
}
    
/**
 * UpdateCubeDeploymentResponse - 
 */
export interface UpdateCubeDeploymentResponse {
    /**
     * 经过base64编码的Deployment的yaml
     */
    Deployment?:string
}
    
/**
 * GetCubeDeploymentRequest - 
 */
export interface GetCubeDeploymentRequest {
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
     * Deployment的Id
     */
    DeploymentId:string
}
    
/**
 * GetCubeExecTokenResponse - 
 */
export interface GetCubeExecTokenResponse {
    /**
     * 有效时间5min
     */
    Token:string
    /**
     * terminal的登录连接地址，限单点登录，有效时间5min
     */
    TerminalUrl?:string
}
    
/**
 * ListCubeDeploymentResponse - 
 */
export interface ListCubeDeploymentResponse {
    /**
     * 
     */
    TotalCount:number
    /**
     * DeploymentInfo
     */
    Deployments:string[]
}
    
/**
 * RenewCubePodRequest - 
 */
export interface RenewCubePodRequest {
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
     * 容器Id
     */
    CubeId:string
    /**
     * base64编码的Pod的yaml
     */
    Pod:string
}
    
/**
 * MetricDataSet - 
 */
export interface MetricDataSet {
    /**
     * 
     */
    MetricName?:string
    /**
     * 
     */
    Values?:
            ValueSet[]
}
    
/**
 * ListCubePodResponse - 
 */
export interface ListCubePodResponse {
    /**
     * Pod列表，每条数据都做了base64编码
     */
    Pods:string[]
    /**
     * Cube的总数
     */
    TotalCount?:number
}
    
/**
 * GetCubeExecTokenRequest - 
 */
export interface GetCubeExecTokenRequest {
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
    ProjectId:string
    /**
     * 容器名称
     */
    ContainerName:string
    /**
     * CubeId 和 Uid 中必须填写任意一个。CubeId 是所有 Cube 资源的唯一 ID，如非在 UK8S 通过 Virtual Kubelet 插件创建的 Cube， 则必填 CubeId
     */
    CubeId?:string
    /**
     * CubeId 和 Uid 中必须填写任意一个。Uid 是在 UK8S 中通过 Virtual Kubelet 插件创建出的 Cube 的唯一标识
     */
    Uid?:string
}
    
/**
 * DeleteCubePodRequest - 
 */
export interface DeleteCubePodRequest {
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
     * cubeid和uid任意一个（必须）
     */
    Uid?:string
    /**
     * cubeid和uid任意一个（必须）
     */
    CubeId?:string
    /**
     * 删除cube时是否释放绑定的EIP。默认为false。
     */
    ReleaseEIP?:boolean
}
    
/**
 * ModifyCubeExtendInfoResponse - 
 */
export interface ModifyCubeExtendInfoResponse {
}
    
/**
 * DeleteCubePodResponse - 
 */
export interface DeleteCubePodResponse {
}
    
/**
 * GetCubeExtendInfoResponse - 
 */
export interface GetCubeExtendInfoResponse {
    /**
     * CubeExtendInfo
     */
    ExtendInfo:
            CubeExtendInfo[]
}
    
/**
 * RebootCubePodResponse - 
 */
export interface RebootCubePodResponse {
}
    
/**
 * CreateCubeDeploymentResponse - 
 */
export interface CreateCubeDeploymentResponse {
    /**
     * 控制器ID
     */
    DeploymentId:string
    /**
     * 经过base64编码的Deployment的yaml
     */
    Deployment?:string
}
    
/**
 * GetCubeTokenResponse - 
 */
export interface GetCubeTokenResponse {
    /**
     * 有效时间5min
     */
    Token:string
}
    
/**
 * GetCubePriceRequest - 
 */
export interface GetCubePriceRequest {
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
     * 购买数量
     */
    Count:string
    /**
     * CPU 配置，单位为毫核，例如如 1 核则须输入 1000
     */
    Cpu:string
    /**
     * 内存配置，单位为 Mi，例如 1Gi 须输入 1024
     */
    Mem:string
    /**
     * 计费模式。枚举值为： \\ > Year，按年付费； \\ > Month，按月付费；\\ > Dynamic，按小时预付费 \\ > Postpay，按秒后付费，默认为月付
     */
    ChargeType:string
    /**
     * 购买时长。默认:值 1。按小时购买（Dynamic/Postpay）时无需此参数。 月付时，此参数传0，代表购买至月末。
     */
    Quantity:number
}
    
/**
 * GetCubeDeploymentResponse - 
 */
export interface GetCubeDeploymentResponse {
    /**
     * 经过base64编码的Deployment的yaml
     */
    Deployment:string
}
    
/**
 * DeleteCubeDeploymentRequest - 
 */
export interface DeleteCubeDeploymentRequest {
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
     * 控制器Id
     */
    DeploymentId:string
}
    
/**
 * CreateCubeDeploymentRequest - 
 */
export interface CreateCubeDeploymentRequest {
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
     * VPCId
     */
    VPCId:string
    /**
     * 子网Id
     */
    SubnetId:string
    /**
     * base64编码的Deployment的yaml。大小不超过16KB
     */
    Deployment:string
    /**
     * Deployment名称
     */
    Name?:string
    /**
     * 计费模式。枚举值为： \\ > Year，按年付费； \\ > Month，按月付费；\\ > Postpay， \\ 后付费；默认为后付费
     */
    ChargeType?:string
    /**
     * Cpu平台（V6：Intel、A2：AMD），默认V6。支持的地域（北京2B、北京2E、上海2A、广东、香港 、东京）目前北京2E仅有A2，其余地域仅有V6
     */
    CpuPlatform?:string
    /**
     * base64编码的kubeconfig。大小不超过16KB
     */
    KubeConfig?:string
    /**
     * 购买时长。默认:值 1。 月付时，此参数传0，代表购买至月末。
     */
    Quantity?:number
    /**
     * 业务组。默认：Default（Default即为未分组）
     */
    Tag?:string
}
    
/**
 * GetCubeMetricsResponse - 
 */
export interface GetCubeMetricsResponse {
    /**
     * 时间序列集合
     */
    DataSets?:
            MetricDataSet[]
}
    
/**
 * ModifyCubeTagResponse - 
 */
export interface ModifyCubeTagResponse {
    /**
     * CubeId
     */
    CubeId:string
}
    
/**
 * CreateCubePodResponse - 
 */
export interface CreateCubePodResponse {
    /**
     * base64编码的yaml
     */
    Pod:string
    /**
     * cube的资源Id
     */
    CubeId?:string
}
    
/**
 * GetCubeExtendInfoRequest - 
 */
export interface GetCubeExtendInfoRequest {
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
     * id列表以逗号(,)分割
     */
    CubeIds:string
}
