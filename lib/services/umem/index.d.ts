import Client from '../../core/client';
import { ConfigOptions } from '../../core/config';
import { CredentialOptions } from '../../core/credential';
/**
 * This client is used to call actions of **umem** service
 */
export default class UMemClient extends Client {
    constructor({ config, credential, }: {
        config: ConfigOptions;
        credential: CredentialOptions;
    });
    /**
     * CheckUDredisSpaceAllowance - 检查高性能UMem剩余资源，以及分片扩容前的资源预检查
     *
     * See also: https://docs.ucloud.cn/api/umem-api/check_udredis_space_allowance
     */
    checkUDredisSpaceAllowance(request?: CheckUDredisSpaceAllowanceRequest): Promise<CheckUDredisSpaceAllowanceResponse>;
    /**
     * CheckURedisAllowance - 检查主备Redis的资源是否足够创建新实例，以及主备Redis的扩容资源预检查
     *
     * See also: https://docs.ucloud.cn/api/umem-api/check_uredis_allowance
     */
    checkURedisAllowance(request?: CheckURedisAllowanceRequest): Promise<CheckURedisAllowanceResponse>;
    /**
     * CreateScanHotBigKeys - 创建执行扫大key和热key的任务
     *
     * See also: https://docs.ucloud.cn/api/umem-api/create_scan_hot_big_keys
     */
    createScanHotBigKeys(request?: CreateScanHotBigKeysRequest): Promise<CreateScanHotBigKeysResponse>;
    /**
     * CreateUDRedisUhproxy - 添加分布式Redis代理
     *
     * See also: https://docs.ucloud.cn/api/umem-api/create_ud_redis_uhproxy
     */
    createUDRedisUhproxy(request?: CreateUDRedisUhproxyRequest): Promise<CreateUDRedisUhproxyResponse>;
    /**
     * CreateUMemBackup - 创建分布式redis备份
     *
     * See also: https://docs.ucloud.cn/api/umem-api/create_umem_backup
     */
    createUMemBackup(request?: CreateUMemBackupRequest): Promise<CreateUMemBackupResponse>;
    /**
     * CreateUMemSpace - 创建UMem内存空间
     *
     * See also: https://docs.ucloud.cn/api/umem-api/create_umem_space
     */
    createUMemSpace(request?: CreateUMemSpaceRequest): Promise<CreateUMemSpaceResponse>;
    /**
     * CreateUMemcacheGroup - 创建单机Memcache
     *
     * See also: https://docs.ucloud.cn/api/umem-api/create_umem_cache_group
     */
    createUMemcacheGroup(request?: CreateUMemcacheGroupRequest): Promise<CreateUMemcacheGroupResponse>;
    /**
     * CreateURedisBackup - 创建主备Redis备份
     *
     * See also: https://docs.ucloud.cn/api/umem-api/create_uredis_backup
     */
    createURedisBackup(request?: CreateURedisBackupRequest): Promise<CreateURedisBackupResponse>;
    /**
     * CreateURedisGroup - 创建主备redis
     *
     * See also: https://docs.ucloud.cn/api/umem-api/create_uredis_group
     */
    createURedisGroup(request?: CreateURedisGroupRequest): Promise<CreateURedisGroupResponse>;
    /**
     * DeleteUDRedisProxy - 删除分布式Redis代理
     *
     * See also: https://docs.ucloud.cn/api/umem-api/delete_ud_redis_proxy
     */
    deleteUDRedisProxy(request?: DeleteUDRedisProxyRequest): Promise<DeleteUDRedisProxyResponse>;
    /**
     * DeleteUMemSpace - 删除UMem内存空间
     *
     * See also: https://docs.ucloud.cn/api/umem-api/delete_umem_space
     */
    deleteUMemSpace(request?: DeleteUMemSpaceRequest): Promise<DeleteUMemSpaceResponse>;
    /**
     * DeleteUMemcacheGroup - 删除单机Memcache
     *
     * See also: https://docs.ucloud.cn/api/umem-api/delete_umem_cache_group
     */
    deleteUMemcacheGroup(request?: DeleteUMemcacheGroupRequest): Promise<DeleteUMemcacheGroupResponse>;
    /**
     * DeleteURedisGroup - 删除主备redis
     *
     * See also: https://docs.ucloud.cn/api/umem-api/delete_uredis_group
     */
    deleteURedisGroup(request?: DeleteURedisGroupRequest): Promise<DeleteURedisGroupResponse>;
    /**
     * DescribeUDRedisProxyClientList - 查询分布式代理客户端连接信息
     *
     * See also: https://docs.ucloud.cn/api/umem-api/describe_ud_redis_proxy_client_list
     */
    describeUDRedisProxyClientList(request?: DescribeUDRedisProxyClientListRequest): Promise<DescribeUDRedisProxyClientListResponse>;
    /**
     * DescribeUDRedisProxyInfo - 拉取udredis所有的代理信息
     *
     * See also: https://docs.ucloud.cn/api/umem-api/describe_ud_redis_proxy_info
     */
    describeUDRedisProxyInfo(request?: DescribeUDRedisProxyInfoRequest): Promise<DescribeUDRedisProxyInfoResponse>;
    /**
     * DescribeUDRedisSlowlog - 查询UDRedis慢日志
     *
     * See also: https://docs.ucloud.cn/api/umem-api/describe_ud_redis_slowlog
     */
    describeUDRedisSlowlog(request?: DescribeUDRedisSlowlogRequest): Promise<DescribeUDRedisSlowlogResponse>;
    /**
     * DescribeUMem - 获取UMem列表
     *
     * See also: https://docs.ucloud.cn/api/umem-api/describe_umem
     */
    describeUMem(request?: DescribeUMemRequest): Promise<DescribeUMemResponse>;
    /**
     * DescribeUMemBackup - 查询分布式redis备份
     *
     * See also: https://docs.ucloud.cn/api/umem-api/describe_umem_backup
     */
    describeUMemBackup(request?: DescribeUMemBackupRequest): Promise<DescribeUMemBackupResponse>;
    /**
     * DescribeUMemBackupURL - 获取分布式redis 备份下载链接
     *
     * See also: https://docs.ucloud.cn/api/umem-api/describe_umem_backup_url
     */
    describeUMemBackupURL(request?: DescribeUMemBackupURLRequest): Promise<DescribeUMemBackupURLResponse>;
    /**
     * DescribeUMemBlockInfo - 拉取UDRedis分片信息
     *
     * See also: https://docs.ucloud.cn/api/umem-api/describe_umem_block_info
     */
    describeUMemBlockInfo(request?: DescribeUMemBlockInfoRequest): Promise<DescribeUMemBlockInfoResponse>;
    /**
     * DescribeUMemPrice - 获取UMem实例价格信息
     *
     * See also: https://docs.ucloud.cn/api/umem-api/describe_umem_price
     */
    describeUMemPrice(request?: DescribeUMemPriceRequest): Promise<DescribeUMemPriceResponse>;
    /**
     * DescribeUMemSpace - 获取UMem内存空间列表（已废弃，建议是使用DescribeUMem接口）
     *
     * See also: https://docs.ucloud.cn/api/umem-api/describe_umem_space
     */
    describeUMemSpace(request?: DescribeUMemSpaceRequest): Promise<DescribeUMemSpaceResponse>;
    /**
     * DescribeUMemUpgradePrice - 获取UMem升级价格信息
     *
     * See also: https://docs.ucloud.cn/api/umem-api/describe_umem_upgrade_price
     */
    describeUMemUpgradePrice(request?: DescribeUMemUpgradePriceRequest): Promise<DescribeUMemUpgradePriceResponse>;
    /**
     * DescribeUMemcacheGroup - 显示Memcache
     *
     * See also: https://docs.ucloud.cn/api/umem-api/describe_umem_cache_group
     */
    describeUMemcacheGroup(request?: DescribeUMemcacheGroupRequest): Promise<DescribeUMemcacheGroupResponse>;
    /**
     * DescribeUMemcachePrice - 获取umemcache组价格信息
     *
     * See also: https://docs.ucloud.cn/api/umem-api/describe_umem_cache_price
     */
    describeUMemcachePrice(request?: DescribeUMemcachePriceRequest): Promise<DescribeUMemcachePriceResponse>;
    /**
     * DescribeUMemcacheUpgradePrice - 获取umemcache升级价格信息
     *
     * See also: https://docs.ucloud.cn/api/umem-api/describe_umem_cache_upgrade_price
     */
    describeUMemcacheUpgradePrice(request?: DescribeUMemcacheUpgradePriceRequest): Promise<DescribeUMemcacheUpgradePriceResponse>;
    /**
     * DescribeURedisBackup - 查询主备redis备份
     *
     * See also: https://docs.ucloud.cn/api/umem-api/describe_uredis_backup
     */
    describeURedisBackup(request?: DescribeURedisBackupRequest): Promise<DescribeURedisBackupResponse>;
    /**
     * DescribeURedisBackupURL - 获取主备Redis备份下载链接
     *
     * See also: https://docs.ucloud.cn/api/umem-api/describe_uredis_backup_url
     */
    describeURedisBackupURL(request?: DescribeURedisBackupURLRequest): Promise<DescribeURedisBackupURLResponse>;
    /**
     * DescribeURedisConfig - 查询主备Redis所有配置文件
     *
     * See also: https://docs.ucloud.cn/api/umem-api/describe_uredis_config
     */
    describeURedisConfig(request?: DescribeURedisConfigRequest): Promise<DescribeURedisConfigResponse>;
    /**
     * DescribeURedisGroup - 查询主备Redis(已废弃，建议使用DescribeUMem)
     *
     * See also: https://docs.ucloud.cn/api/umem-api/describe_uredis_group
     */
    describeURedisGroup(request?: DescribeURedisGroupRequest): Promise<DescribeURedisGroupResponse>;
    /**
     * DescribeURedisPrice - 获取URedis价格信息
     *
     * See also: https://docs.ucloud.cn/api/umem-api/describe_uredis_price
     */
    describeURedisPrice(request?: DescribeURedisPriceRequest): Promise<DescribeURedisPriceResponse>;
    /**
     * DescribeURedisSlowlog - 查询URedis慢日志
     *
     * See also: https://docs.ucloud.cn/api/umem-api/describe_uredis_slowlog
     */
    describeURedisSlowlog(request?: DescribeURedisSlowlogRequest): Promise<DescribeURedisSlowlogResponse>;
    /**
     * DescribeURedisUpgradePrice - 获取uredis升级价格信息
     *
     * See also: https://docs.ucloud.cn/api/umem-api/describe_uredis_upgrade_price
     */
    describeURedisUpgradePrice(request?: DescribeURedisUpgradePriceRequest): Promise<DescribeURedisUpgradePriceResponse>;
    /**
     * DescribeURedisVersion - 获取主Redis可用版本
     *
     * See also: https://docs.ucloud.cn/api/umem-api/describe_uredis_version
     */
    describeURedisVersion(request?: DescribeURedisVersionRequest): Promise<DescribeURedisVersionResponse>;
    /**
     * FlushallURedisGroup - 清除主备redis数据
     *
     * See also: https://docs.ucloud.cn/api/umem-api/flushall_uredis_group
     */
    flushallURedisGroup(request?: FlushallURedisGroupRequest): Promise<FlushallURedisGroupResponse>;
    /**
     * GetUMemSpaceState - 获取UMem内存空间列表
     *
     * See also: https://docs.ucloud.cn/api/umem-api/get_umem_space_state
     */
    getUMemSpaceState(request?: GetUMemSpaceStateRequest): Promise<GetUMemSpaceStateResponse>;
    /**
     * ISolationURedisGroup - 打开/关闭URedis
     *
     * See also: https://docs.ucloud.cn/api/umem-api/i_solation_uredis_group
     */
    iSolationURedisGroup(request?: ISolationURedisGroupRequest): Promise<ISolationURedisGroupResponse>;
    /**
     * ModifyUMemPassword - 更改分布式redis密码
     *
     * See also: https://docs.ucloud.cn/api/umem-api/modify_umem_password
     */
    modifyUMemPassword(request?: ModifyUMemPasswordRequest): Promise<ModifyUMemPasswordResponse>;
    /**
     * ModifyUMemSpaceName - 修改UMem内存空间名称
     *
     * See also: https://docs.ucloud.cn/api/umem-api/modify_umem_space_name
     */
    modifyUMemSpaceName(request?: ModifyUMemSpaceNameRequest): Promise<ModifyUMemSpaceNameResponse>;
    /**
     * ModifyURedisConfig - 修改主备Redis配置文件参数
     *
     * See also: https://docs.ucloud.cn/api/umem-api/modify_uredis_config
     */
    modifyURedisConfig(request?: ModifyURedisConfigRequest): Promise<ModifyURedisConfigResponse>;
    /**
     * ModifyURedisGroupName - 修改主备redis名称
     *
     * See also: https://docs.ucloud.cn/api/umem-api/modify_uredis_group_name
     */
    modifyURedisGroupName(request?: ModifyURedisGroupNameRequest): Promise<ModifyURedisGroupNameResponse>;
    /**
     * ModifyURedisGroupPassword - 修改主备密码/重置密码
     *
     * See also: https://docs.ucloud.cn/api/umem-api/modify_uredis_group_password
     */
    modifyURedisGroupPassword(request?: ModifyURedisGroupPasswordRequest): Promise<ModifyURedisGroupPasswordResponse>;
    /**
     * RegisterUMemDefrag - 动态开关redis碎片整理选项
     *
     * See also: https://docs.ucloud.cn/api/umem-api/register_umem_defrag
     */
    registerUMemDefrag(request?: RegisterUMemDefragRequest): Promise<RegisterUMemDefragResponse>;
    /**
     * RemoveUDRedisData - 清除udredis实例数据
     *
     * See also: https://docs.ucloud.cn/api/umem-api/remove_ud_redis_data
     */
    removeUDRedisData(request?: RemoveUDRedisDataRequest): Promise<RemoveUDRedisDataResponse>;
    /**
     * ResizeUDRedisBlockSize - 更改udredis分片容量
     *
     * See also: https://docs.ucloud.cn/api/umem-api/resize_ud_redis_block_size
     */
    resizeUDRedisBlockSize(request?: ResizeUDRedisBlockSizeRequest): Promise<ResizeUDRedisBlockSizeResponse>;
    /**
     * ResizeUMemSpace - 调整内存空间容量，只支持存量老分布式产品，不支持高性能分布式。（已废弃，不建议使用）
     *
     * See also: https://docs.ucloud.cn/api/umem-api/resize_umem_space
     */
    resizeUMemSpace(request?: ResizeUMemSpaceRequest): Promise<ResizeUMemSpaceResponse>;
    /**
     * ResizeUMemcacheGroup - 调整memcache实例的容量
     *
     * See also: https://docs.ucloud.cn/api/umem-api/resize_umem_cache_group
     */
    resizeUMemcacheGroup(request?: ResizeUMemcacheGroupRequest): Promise<ResizeUMemcacheGroupResponse>;
    /**
     * ResizeURedisGroup - 通过调用CheckURedisAllowance接口，检查资源情况，根据不同情形来调整主备redis容量，其中主要包括可用区资源不足无法扩容，主备所在宿主机资源不足需要迁移完成扩容（需要主从切换，会闪断及负载升高），以及直接扩容（业务无感知）
     *
     * See also: https://docs.ucloud.cn/api/umem-api/resize_uredis_group
     */
    resizeURedisGroup(request?: ResizeURedisGroupRequest): Promise<ResizeURedisGroupResponse>;
    /**
     * ResizeUhproxy - 分布式Redis代理规格调整
     *
     * See also: https://docs.ucloud.cn/api/umem-api/resize_uhproxy
     */
    resizeUhproxy(request?: ResizeUhproxyRequest): Promise<ResizeUhproxyResponse>;
    /**
     * RestartUMemcacheGroup - 重启单机Memcache
     *
     * See also: https://docs.ucloud.cn/api/umem-api/restart_umem_cache_group
     */
    restartUMemcacheGroup(request?: RestartUMemcacheGroupRequest): Promise<RestartUMemcacheGroupResponse>;
    /**
     * RestartURedisGroup - 重启主备实例
     *
     * See also: https://docs.ucloud.cn/api/umem-api/restart_uredis_group
     */
    restartURedisGroup(request?: RestartURedisGroupRequest): Promise<RestartURedisGroupResponse>;
    /**
     * UpdateURedisBackupStrategy - URedisBackupStrategy
     *
     * See also: https://docs.ucloud.cn/api/umem-api/update_uredis_backup_strategy
     */
    updateURedisBackupStrategy(request?: UpdateURedisBackupStrategyRequest): Promise<UpdateURedisBackupStrategyResponse>;
    /**
     * UpdateURedisRewriteTime - 修改主备redis重写时间
     *
     * See also: https://docs.ucloud.cn/api/umem-api/update_uredis_rewrite_time
     */
    updateURedisRewriteTime(request?: UpdateURedisRewriteTimeRequest): Promise<UpdateURedisRewriteTimeResponse>;
}
/**
 * CheckUDredisSpaceAllowance - 检查高性能UMem剩余资源，以及分片扩容前的资源预检查
 */
export interface CheckUDredisSpaceAllowanceRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * 创建实例的容量大小,，扩容时的分片目标容量大小
     */
    Size: number;
    /**
     * 创建实例的数量，[1-10]
     */
    Count: string;
    /**
     * 资源ID，扩缩容时的必传参数
     */
    GroupId?: string;
}
/**
 * CheckUDredisSpaceAllowance - 检查高性能UMem剩余资源，以及分片扩容前的资源预检查
 */
export interface CheckUDredisSpaceAllowanceResponse {
    /**
     * 创建实例资源时，表示可创建的数量；扩容资源时，返回1表示可以扩容，0表示可用区资源不足不能扩容
     */
    Count: number;
}
/**
 * CheckURedisAllowance - 检查主备Redis的资源是否足够创建新实例，以及主备Redis的扩容资源预检查
 */
export interface CheckURedisAllowanceRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * 创建实例的容量大小, 单位:GB 目前仅支持1/2/4/8/16/32六种规格；扩缩容时，表示实例的目标资源大小
     */
    Size: number;
    /**
     * 创建实例的数量，[1-10]
     */
    Count: number;
    /**
     *
     */
    Protocol?: string;
    /**
     * 是否是跨机房URedis(默认false)
     */
    RegionFlag?: boolean;
    /**
     * 资源ID，扩容实例资源时的必传参数
     */
    GroupId?: string;
}
/**
 * CheckURedisAllowance - 检查主备Redis的资源是否足够创建新实例，以及主备Redis的扩容资源预检查
 */
export interface CheckURedisAllowanceResponse {
    /**
     * 创建实例资源时，表示可创建的数量；扩容资源时，返回1表示可以扩容，0表示可用区资源不足不能扩容
     */
    Count: number;
}
/**
 * CreateScanHotBigKeys - 创建执行扫大key和热key的任务
 */
export interface CreateScanHotBigKeysRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * 资源id
     */
    GroupId: string;
    /**
     * 任务类型。"ScanBigKeys"：扫大key，"ScanHotKeys"：扫热key
     */
    Type: string;
    /**
     * 分布式资源ID
     */
    SpaceId?: string;
    /**
     * 是否要重试任务，如果是的话，TaskId必填
     */
    IsRetry?: boolean;
    /**
     * 要重试的任务id
     */
    TaskId?: string;
}
/**
 * CreateScanHotBigKeys - 创建执行扫大key和热key的任务
 */
export interface CreateScanHotBigKeysResponse {
}
/**
 * CreateUDRedisUhproxy - 添加分布式Redis代理
 */
export interface CreateUDRedisUhproxyRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * UMem内存空间ID
     */
    SpaceId: string;
    /**
     * 代理核数
     */
    CPU: number;
    /**
     * 代理端口, 默认为 6379
     */
    Port?: number;
    /**
     * 代理个数
     */
    ProxyCnt?: number;
    /**
     * 使用的代金券id
     */
    CouponId?: string;
}
/**
 * CreateUDRedisUhproxy - 添加分布式Redis代理
 */
export interface CreateUDRedisUhproxyResponse {
    /**
     * 代理资源id
     */
    ResourceId: string;
}
/**
 * CreateUMemBackup - 创建分布式redis备份
 */
export interface CreateUMemBackupRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * 资源id
     */
    SpaceId: string;
    /**
     * 请求创建备份的名称 (范围[6-63],只能包含英文、数字以及符号-和_)
     */
    BackupName: string;
}
/**
 * CreateUMemBackup - 创建分布式redis备份
 */
export interface CreateUMemBackupResponse {
    /**
     * 备份Id
     */
    BackupId?: string;
}
/**
 * CreateUMemSpace - 创建UMem内存空间
 */
export interface CreateUMemSpaceRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * 内存大小, 单位:GB, 范围[1~1024]
     */
    Size: number;
    /**
     * 空间名称,长度(6<=size<=63)
     */
    Name: string;
    /**
     * 协议:memcache, redis (默认redis).注意:redis无single类型
     */
    Protocol?: string;
    /**
     * 空间类型:single(无热备),double(热备)(默认: double)
     */
    Type?: string;
    /**
     * Year , Month, Dynamic 默认: Month
     */
    ChargeType?: string;
    /**
     * 购买时长 默认: 1
     */
    Quantity?: number;
    /**
     * VPC的ID
     */
    VPCId?: string;
    /**
     * 子网ID
     */
    SubnetId?: string;
    /**
     * 业务组名称
     */
    Tag?: string;
    /**
     * URedis密码。请遵照[[api:uhost-api:specification|字段规范]]设定密码。密码需使用base64进行编码，举例如下：# echo -n Password1 | base64UGFzc3dvcmQx。
     */
    Password?: string;
    /**
     * 跨机房UDRedis，slave所在可用区（必须和Zone在同一Region，且不可相同）
     */
    SlaveZone?: string;
    /**
     * 分片个数
     */
    BlockCnt?: number;
    /**
     * "RWMode"：表示创建读写分离版本;其他为创建普通版本
     */
    ClusterMode?: string;
    /**
     * 分布式分片版本（默认版本是4.0，其他版本见DescribeUDRedisBlockVersion）
     */
    Version?: string;
    /**
     * 是否创建性能增强性。默认为false，或者不填，填true为性能增强型。
     */
    HighPerformance?: boolean;
    /**
     * 分布式代理CPU核数，不填或者传0时默认不创建代理
     */
    ProxySize?: number;
    /**
     * 是否创建负载均衡型分布式代理，true时表示创建负载均衡型代理
     */
    UlbMode?: boolean;
    /**
     * 分片端口, 默认为 6379
     */
    Port?: number;
    /**
     * 代理端口, 默认为 6379
     */
    ProxyPort?: number;
    /**
     * 备份ID，选择从该备份新建集群
     */
    BackupId?: string;
    /**
     * 集群ID，选择某个备份创建时，需要填写源集群ID
     */
    SpaceId?: string;
    /**
     * 如果是通过回档创建，该实例ID不为空
     */
    RollbackSpaceId?: string;
    /**
     * 要回档的时间戳
     */
    RollbackTime?: number;
    /**
     * 使用的代金券id
     */
    CouponId?: string;
}
/**
 * CreateUMemSpace - 创建UMem内存空间
 */
export interface CreateUMemSpaceResponse {
    /**
     * 创建内存空间ID列表
     */
    SpaceId?: string;
}
/**
 * CreateUMemcacheGroup - 创建单机Memcache
 */
export interface CreateUMemcacheGroupRequest {
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
     */
    Zone?: string;
    /**
     * 请求创建组的名称 范围[6-60]
     */
    Name: string;
    /**
     * 每个节点的内存大小,单位GB,默认1GB 目前仅支持1/2/4/8/16/32这几档
     */
    Size?: number;
    /**
     * 配置ID,目前仅支持默认配置id 默认配置id:"9a891891-c245-4b66-bce8-67e59430d67c"
     */
    ConfigId?: string;
    /**
     * Memcache版本信息,默认为1.4.31
     */
    Version?: string;
    /**
     * 计费模式，Year , Month, Dynamic 默认: Month
     */
    ChargeType?: string;
    /**
     * 购买时长，默认为1
     */
    Quantity?: number;
    /**
     * 业务组 默认：Default
     */
    Tag?: string;
    /**
     *
     */
    Protocol?: string;
    /**
     * 代金券ID
     */
    CouponId?: string;
}
/**
 * CreateUMemcacheGroup - 创建单机Memcache
 */
export interface CreateUMemcacheGroupResponse {
    /**
     * 创建的组ID
     */
    GroupId?: string;
}
/**
 * CreateURedisBackup - 创建主备Redis备份
 */
export interface CreateURedisBackupRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone?: string;
    /**
     * 资源id
     */
    GroupId: string;
    /**
     * 请求创建组的名称 (范围[6-63],只能包含英文、数字以及符号-和_)
     */
    BackupName: string;
    /**
     * 跨机房URedis，slave所在可用区（必须和Zone在同一Region，且不可相同）
     */
    SlaveZone?: string;
}
/**
 * CreateURedisBackup - 创建主备Redis备份
 */
export interface CreateURedisBackupResponse {
    /**
     * 备份id
     */
    BackupId: string;
}
/**
 * CreateURedisGroup - 创建主备redis
 */
export interface CreateURedisGroupRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * 请求创建组的名称 (范围[6-63],只能包含英文、数字以及符号-和_)
     */
    Name: string;
    /**
     * 是否开启高可用,enable或disable
     */
    HighAvailability: string;
    /**
     * 每个节点的内存大小,单位GB,默认1GB,目前仅支持1/2/4/8/16/32,六种
     */
    Size?: number;
    /**
     * 是否自动备份,enable或disable，默认disable
     */
    AutoBackup?: string;
    /**
     * 自动备份开始时间,范围[0-23],默认3点
     */
    BackupTime?: number;
    /**
     * 配置ID,目前支持 4.0版本配置ID:"6c9298a3-9d7f-428c-b1d0-e87ab3b8a1ea", 5.0版本配置ID:"3cdeeb90-dcbf-46e8-95cd-a05d8860a22c",6.0版本配置ID:"1d990520-aac8-4e0f-9384-f58611e8eb28",7.0版本配置ID:"48dcf534-db41-11ec-a1a6-52670028d520",默认版本4.0,从备份创建为必传项
     */
    ConfigId?: string;
    /**
     * Redis版本信息(详见DescribeURedisVersion返回结果),默认版本4.0
     */
    Version?: string;
    /**
     * 计费模式，Year , Month, Dynamic 默认: Month
     */
    ChargeType?: string;
    /**
     * 购买时长，默认为1
     */
    Quantity?: number;
    /**
     * 业务组名称
     */
    Tag?: string;
    /**
     * 初始化密码,需要 base64 编码
     */
    Password?: string;
    /**
     * 有此项代表从备份中创建，无代表正常创建
     */
    BackupId?: string;
    /**
     * 跨机房URedis，slave所在可用区（必须和Zone在同一Region，且不可相同）
     */
    SlaveZone?: string;
    /**
     * Master Redis Group的ID，创建只读Slave时，必须填写
     */
    MasterGroupId?: string;
    /**
     * 【即将下线,请勿使用】是否创建使用ipv6 资源， 默认为false， 或者不填， 创建ipv6为true
     */
    EnableIpV6?: boolean;
    /**
     * 子网ID
     */
    SubnetId?: string;
    /**
     * VPC的ID
     */
    VPCId?: string;
    /**
     * 是否创建高性能Redis， 默认为false， 或者不填， 创建高性能为true
     */
    HighPerformance?: boolean;
    /**
     * 端口
     */
    Port?: number;
    /**
     * 如果是通过回档创建实例，需要传回档实例的GroupId
     */
    RollbackGroupId?: string;
    /**
     * 回档的AOF文件ID
     */
    AOFID?: string;
    /**
     * 回档时间点
     */
    RollbackTime?: number;
    /**
     * 代金券ID
     */
    CouponId?: string;
}
/**
 * CreateURedisGroup - 创建主备redis
 */
export interface CreateURedisGroupResponse {
    /**
     * 创建的组ID
     */
    GroupId?: string;
}
/**
 * DeleteUDRedisProxy - 删除分布式Redis代理
 */
export interface DeleteUDRedisProxyRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * 分布式Redis资源ID
     */
    SpaceId: string;
    /**
     * 代理id
     */
    ProxyId: string;
}
/**
 * DeleteUDRedisProxy - 删除分布式Redis代理
 */
export interface DeleteUDRedisProxyResponse {
}
/**
 * DeleteUMemSpace - 删除UMem内存空间
 */
export interface DeleteUMemSpaceRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * UMem内存空间ID
     */
    SpaceId: string;
}
/**
 * DeleteUMemSpace - 删除UMem内存空间
 */
export interface DeleteUMemSpaceResponse {
}
/**
 * DeleteUMemcacheGroup - 删除单机Memcache
 */
export interface DeleteUMemcacheGroupRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone?: string;
    /**
     * 组ID
     */
    GroupId: string;
}
/**
 * DeleteUMemcacheGroup - 删除单机Memcache
 */
export interface DeleteUMemcacheGroupResponse {
}
/**
 * DeleteURedisGroup - 删除主备redis
 */
export interface DeleteURedisGroupRequest {
    /**
     * 组ID
     */
    GroupId: string;
}
/**
 * DeleteURedisGroup - 删除主备redis
 */
export interface DeleteURedisGroupResponse {
}
/**
 * DescribeUDRedisProxyClientList - 查询分布式代理客户端连接信息
 */
export interface DescribeUDRedisProxyClientListRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * 分布式Redis集群id
     */
    SpaceId: string;
    /**
     * 分布式Redis代理Id
     */
    ProxyId: string;
}
/**
 * DescribeUDRedisProxyClientList - 查询分布式代理客户端连接信息
 */
export interface DescribeUDRedisProxyClientListResponse {
    /**
     * 连接数
     */
    Count: number;
    /**
     * 代理连接信息
     */
    ProxyClientList: {
        /**
         * 客户端Ip
         */
        Ip: string;
        /**
         * 该客户端Ip连接数量
         */
        ConnCnt: number;
    }[];
    /**
     * 连接获取时间
     */
    Time?: number;
}
/**
 * DescribeUDRedisProxyInfo - 拉取udredis所有的代理信息
 */
export interface DescribeUDRedisProxyInfoRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * udredis实例id
     */
    SpaceId: string;
}
/**
 * DescribeUDRedisProxyInfo - 拉取udredis所有的代理信息
 */
export interface DescribeUDRedisProxyInfoResponse {
    /**
     * 代理数据集
     */
    DataSet: {
        /**
         * 代理资源id
         */
        ResourceId: string;
        /**
         * 代理id
         */
        ProxyId: string;
        /**
         * 代理ip
         */
        Vip: string;
        /**
         * 代理状态 [PROXY_CREATING:创建中, PROXY_NORMAL:正常运行, PROXY_FAILED:创建失败, PROXY_CLOSED:关闭, PROXY_INIT_RESIZE:初始化核数调整, PROXY_WAIT_RESIZE:等待核数调整, PROXY_RESIZING:核数调整中, PROXY_RESIZE_ERROR:核数调整失败]
         */
        State: string;
        /**
         * 代理CPU核数
         */
        CPU: number;
        /**
         * 0 : 物理机版分布式代理, 1: NVME(或SSD)版分布式代理
         */
        ProxyType: number;
        /**
         * 开启外网状态下的外网IP，否则为空
         */
        PublicIp?: string;
        /**
         * 代理是否支持设置为只读
         */
        SupportReadOnly?: boolean;
        /**
         * 代理是否为只读
         */
        ReadOnly?: boolean;
        /**
         * 读写分离策略, "Custom": 用户自定义节点权重， "Uniform": 包括主节点在内的所有节点平均读请求， "ReadOnly": 读请求均分至只读节点
         */
        ReadMode?: string;
    }[];
}
/**
 * DescribeUDRedisSlowlog - 查询UDRedis慢日志
 */
export interface DescribeUDRedisSlowlogRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     *  实例id
     */
    InstanceId: string;
    /**
     * 代理Id
     */
    ProxyId?: string;
    /**
     * 分页显示的条目数，默认为10
     */
    Limit?: number;
    /**
     * 分布式资源Id
     */
    SpaceId?: string;
}
/**
 * DescribeUDRedisSlowlog - 查询UDRedis慢日志
 */
export interface DescribeUDRedisSlowlogResponse {
    /**
     * 总条目数
     */
    TotalCount: number;
    /**
     * 条目数据
     */
    DataSet: {
        /**
         * 查询发生的时间
         */
        StartTime?: number;
        /**
         * 查询消耗的时间
         */
        SpendTime?: number;
        /**
         * 查询命令
         */
        Command?: string;
        /**
         * 分片id
         */
        BlockId?: string;
        /**
         * 慢日志的的客户信息
         */
        Client?: string;
    }[];
}
/**
 * DescribeUMem - 获取UMem列表
 */
export interface DescribeUMemRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone?: string;
    /**
     * 协议类型: memcache, redis
     */
    Protocol: string;
    /**
     * 分页显示的起始偏移, 默认值为0
     */
    Offset?: number;
    /**
     * 分页显示的条目数, 默认值为20
     */
    Limit?: number;
    /**
     * 资源ID
     */
    ResourceId?: string;
}
/**
 * DescribeUMem - 获取UMem列表
 */
export interface DescribeUMemResponse {
    /**
     * 根据过滤条件得到的总数
     */
    TotalCount?: number;
    /**
     * UMem实例列表, 详细参见UMemDataSet
     */
    DataSet?: {
        /**
         * 实例所在可用区，或者master redis所在可用区，参见 [可用区列表](../summary/regionlist.html)
         */
        Zone?: string;
        /**
         * 是否拥有只读Slave“Yes” 包含“No” 不包含
         */
        OwnSlave?: string;
        /**
         * UMEM实例列表 UMemSlaveDataSet 如果没有slave，则没有该字段
         */
        DataSet?: {
            /**
             * 实例所在可用区，或者master redis所在可用区，参见 [可用区列表](../summary/regionlist.html)
             */
            Zone?: string;
            /**
             * 子网
             */
            SubnetId: string;
            /**
             * vpc
             */
            VPCId: string;
            /**
             *
             */
            VirtualIP: string;
            /**
             * 主备Redis返回运维时间 0//0点 1 //1点 以此类推
             */
            RewriteTime?: number;
            /**
             * 主实例id
             */
            MasterGroupId?: string;
            /**
             * 资源id
             */
            GroupId?: string;
            /**
             * 端口
             */
            Port?: number;
            /**
             * 实力大小
             */
            MemorySize?: number;
            /**
             * 资源名称
             */
            GroupName?: string;
            /**
             * 表示实例是主库还是从库,master,slave
             */
            Role?: string;
            /**
             * 修改时间
             */
            ModifyTime?: number;
            /**
             * 资源名称
             */
            Name?: string;
            /**
             * 创建时间
             */
            CreateTime?: number;
            /**
             * 到期时间
             */
            ExpireTime?: number;
            /**
             * 容量单位GB
             */
            Size?: number;
            /**
             * 使用量单位MB
             */
            UsedSize?: number;
            /**
             * 实例状态                                  Starting                  // 创建中       Creating                  // 初始化中     CreateFail                // 创建失败     Fail                      // 创建失败     Deleting                  // 删除中       DeleteFail                // 删除失败     Running                   // 运行         Resizing                  // 容量调整中   ResizeFail                // 容量调整失败 Configing                 // 配置中       ConfigFail                // 配置失败Restarting                // 重启中SetPasswordFail  //设置密码失败
             */
            State?: string;
            /**
             * 计费模式，Year, Month, Dynamic, Trial
             */
            ChargeType?: string;
            /**
             * 业务组名称
             */
            Tag?: string;
            /**
             * distributed: 分布式版Redis,或者分布式Memcache；single：主备版Redis,或者单机Memcache；performance：高性能版
             */
            ResourceType?: string;
            /**
             * 节点的配置ID
             */
            ConfigId?: string;
            /**
             * Redis版本信息
             */
            Version?: string;
            /**
             * 是否是默认配置文件；true表示默认；false表示非默认
             */
            DefaultConfigId?: string;
            /**
             * 实例是否设置密码
             */
            HasPassword?: boolean;
            /**
             * 实例是否有加入到自治中心
             */
            UDACEnable?: boolean;
        }[];
        /**
         * 表示实例是主库还是从库,master,slave仅主备redis返回该项参数
         */
        Role?: string;
        /**
         * 主备redis和分布式redis运维时间0  //0点1  //1点以此类推单机版memcache不返回该项
         */
        RewriteTime?: number;
        /**
         * vpc
         */
        VPCId?: string;
        /**
         * 子网
         */
        SubnetId?: string;
        /**
         * 资源ID
         */
        ResourceId?: string;
        /**
         * 资源名称
         */
        Name?: string;
        /**
         * 创建时间
         */
        CreateTime?: number;
        /**
         * 到期时间
         */
        ExpireTime?: number;
        /**
         * 空间类型:single(无热备),double(热备)
         */
        Type?: string;
        /**
         * 协议类型: memcache, redis
         */
        Protocol?: string;
        /**
         * 容量单位GB
         */
        Size?: number;
        /**
         * 使用量单位MB
         */
        UsedSize?: number;
        /**
         * 实例状态Starting                     // 创建中Creating                    // 初始化中Deleting                    // 删除中CreateFail                 // 创建失败DeleteFail                 // 删除失败Resizing                   // 容量调整中ResizeFail                // 容量调整失败Disasting                 // 容灾中Running                   // 运行SetPassword           // 设置密码SetPasswordFail     // 设置密码失败ISolation                  // 关闭Replicating              // 同步中ReplicateDone        //  数据同步完成ExecTimeout           // 待重试SlaveRecovering     // 备库恢复中ReplicateFail           // 同步失败DelayUpgrade         // 待扩容迁移 VersionUpgrading   // 升级中VersionUpgradeFail // 升级失败UpgradeMemInit     // 任务初始化ClusterUpgrading    // 规格调整中SSLSwitching         // 修改TLS中SSLSwitchFail        // 修改TLS失败
         */
        State?: string;
        /**
         * 计费模式，Year, Month, Dynamic, Trial
         */
        ChargeType?: string;
        /**
         * IP端口信息请，参见UMemSpaceAddressSet
         */
        Address?: {
            /**
             * UMem实例内网访问IP
             */
            IP?: string;
            /**
             * UMem实例内网访问域名地址，未开启状态下返回为空
             */
            PrivateDomain?: string;
            /**
             * 开启外网状态下外网IP，否则为空
             */
            PublicIp?: string;
            /**
             * UMem实例访问Port
             */
            Port?: number;
        }[];
        /**
         * 业务组名称
         */
        Tag?: string;
        /**
         * distributed: 分布式版Redis,或者分布式Memcache；single：主备版Redis,或者单机Memcache；performance：高性能版
         */
        ResourceType?: string;
        /**
         * 节点的配置ID
         */
        ConfigId?: string;
        /**
         * 是否需要自动备份,enable,disable
         */
        AutoBackup?: string;
        /**
         * 自动备份开始时间,单位小时计,范围[0-23]
         */
        BackupTime?: number;
        /**
         * 是否开启高可用,enable,disable
         */
        HighAvailability?: string;
        /**
         * Redis版本信息
         */
        Version?: string;
        /**
         * 跨机房URedis，slave redis所在可用区，参见 [可用区列表](../summary/regionlist.html)
         */
        SlaveZone?: string;
        /**
         * URedis是否开启读写分离
         */
        ProxyName?: string;
        /**
         * 判断后端是否快杰资源（非快杰:  0或者1   快杰:  2或者3）
         */
        ProductType?: number;
        /**
         * 是否是默认配置文件，true表示默认；false表示非默认
         */
        DefaultConfigId?: string;
        /**
         * 是否是高性能Redis，true表示是；false表示否
         */
        IsHighPerformance?: boolean;
        /**
         * 实例是否支持回档
         */
        SupportAofRollback?: boolean;
        /**
         * 实例是否开启了回档
         */
        AofRollbackEnable?: boolean;
        /**
         * 是否是读写分离
         */
        IsRWMode?: boolean;
        /**
         * SSL版本
         */
        SSLVersion?: string;
        /**
         * 实例是否开启SSL
         */
        SSLEnable?: boolean;
        /**
         * 证书过期时间
         */
        SSLCertExpireTime?: number;
        /**
         * 安全策略。1:内网隔离，2:加密通信，3:内网隔离+加密通信
         */
        SecPolicy?: number;
        /**
         * 实例是否设置密码
         */
        HasPassword?: boolean;
        /**
         * 实例是否有加入到自治中心
         */
        UDACEnable?: boolean;
    }[];
}
/**
 * DescribeUMemBackup - 查询分布式redis备份
 */
export interface DescribeUMemBackupRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * 资源id
     */
    SpaceId: string;
    /**
     * 分页显示的起始偏移, 默认值为0
     */
    Offset?: number;
    /**
     * 分页显示的条目数, 默认值为10
     */
    Limit?: number;
}
/**
 * DescribeUMemBackup - 查询分布式redis备份
 */
export interface DescribeUMemBackupResponse {
    /**
     * 分布式redis 备份，数组的每个元素为每个分片的备份
     */
    DataSet?: {
        /**
         * 备份名称
         */
        BackupName: string;
        /**
         * 创建时间
         */
        CreateTime: number;
        /**
         * Starting:备份中 Done:完成
         */
        State: string;
        /**
         * 空间的备份ID
         */
        BackupId: string;
        /**
         * 备份类型: auto(自动) ,manual(手动)
         */
        BackupType: string;
        /**
         * 本次备份，分片的数量
         */
        BlockCount: number;
        /**
         * 备份大小
         */
        BlockSize?: number;
    }[];
    /**
     * 备份总数
     */
    TotalCount?: number;
}
/**
 * DescribeUMemBackupURL - 获取分布式redis 备份下载链接
 */
export interface DescribeUMemBackupURLRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * 资源id
     */
    SpaceId: string;
    /**
     * 备份Id
     */
    BackupId: string;
    /**
     * 分片id
     */
    BlockId?: string;
}
/**
 * DescribeUMemBackupURL - 获取分布式redis 备份下载链接
 */
export interface DescribeUMemBackupURLResponse {
    /**
     * 备份url，每个分片一个下载URL
     */
    BackupURL: string[];
}
/**
 * DescribeUMemBlockInfo - 拉取UDRedis分片信息
 */
export interface DescribeUMemBlockInfoRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * UMem内存资源ID
     */
    SpaceId: string;
    /**
     * 分页显示的起始偏移, 默认值为0
     */
    Offset: number;
    /**
     * 分页显示的条目数, 默认值为10
     */
    Limit: number;
}
/**
 * DescribeUMemBlockInfo - 拉取UDRedis分片信息
 */
export interface DescribeUMemBlockInfoResponse {
    /**
     * 分布式redis 分片信息
     */
    DataSet?: {
        /**
         * 分片id
         */
        BlockId: string;
        /**
         * 分片端口
         */
        BlockPort: number;
        /**
         * 容量单位GB
         */
        BlockSize: number;
        /**
         * 实例状态 Starting // 创建中 Creating // 初始化中 CreateFail // 创建失败 Fail // 创建失败 Deleting // 删除中 DeleteFail // 删除失败 Running // 运行 Resizing // 容量调整中 ResizeFail // 容量调整失败 Configing // 配置中 ConfigFail // 配置失败Restarting // 重启中 SetPasswordFail //设置密码失败UpgradeMemInit  //任务初始化
         */
        BlockState: string;
        /**
         * 分片维护的键槽起始值
         */
        BlockSlotBegin: number;
        /**
         * 分片维护的键槽结束值
         */
        BlockSlotEnd: number;
        /**
         * 分片ip
         */
        BlockVip?: string;
        /**
         * 使用量单位MB
         */
        BlockUsedSize?: number;
        /**
         * 分片类型，master 或者 slave
         */
        BlockType?: string;
        /**
         * 分片读权重
         */
        BlockReadWeight?: number;
        /**
         * 分片名称
         */
        BlockName?: string;
    }[];
    /**
     * 集群读写分离策略。 枚举值[ "Custom": 用户自定义节点权重， "Uniform": 包括主节点在内的所有节点平均读请求， "ReadOnly": 读请求均分至只读节点]
     */
    ReadMode?: string;
}
/**
 * DescribeUMemPrice - 获取UMem实例价格信息
 */
export interface DescribeUMemPriceRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * 购买umem大小,单位:GB,范围[1~1024]
     */
    Size: number;
    /**
     * 空间类型:single(无热备),double(热备)(默认: double)
     */
    Type: string;
    /**
     * Year， Month， Dynamic 如果不指定，则一次性获取三种计费
     */
    ChargeType?: string;
    /**
     * 购买UMem的时长，默认值为1
     */
    Quantity?: number;
    /**
     * 实例类型是否为性能增强型。默认为false，或者不填，true为性能增强型。
     */
    HighPerformance?: boolean;
    /**
     * umem 分片个数
     */
    BlockCnt?: number;
    /**
     * umem 代理CPU核心数
     */
    ProxySize?: number;
    /**
     * umem分布式代理类型，默认false，true为负载均衡型代理
     */
    UlbMode?: string;
    /**
     * 数据库类型，RWMode为读写分离
     */
    ClusterMode?: string;
    /**
     * umem 代理个数
     */
    ProxyCnt?: number;
}
/**
 * DescribeUMemPrice - 获取UMem实例价格信息
 */
export interface DescribeUMemPriceResponse {
    /**
     * 价格 参数见 UMemPriceSet
     */
    DataSet?: {
        /**
         * Year， Month， Dynamic，Trial
         */
        ChargeType?: string;
        /**
         * 现价
         */
        Price?: number;
        /**
         * 原价
         */
        OriginalPrice?: number;
    }[];
}
/**
 * DescribeUMemSpace - 获取UMem内存空间列表（已废弃，建议是使用DescribeUMem接口）
 */
export interface DescribeUMemSpaceRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone?: string;
    /**
     * 数据偏移量, 默认为0
     */
    Offset?: number;
    /**
     * 返回数据长度, 默认为20
     */
    Limit?: number;
    /**
     * 内存空间ID (无ID，则获取所有)
     */
    SpaceId?: string;
    /**
     * 协议类型: memcache, redis
     */
    Protocol?: string;
}
/**
 * DescribeUMemSpace - 获取UMem内存空间列表（已废弃，建议是使用DescribeUMem接口）
 */
export interface DescribeUMemSpaceResponse {
    /**
     * JSON 格式的UMem内存空间实例列表, 详细参见 UMemSpaceSet
     */
    DataSet?: {
        /**
         * 可用区，参见[可用区列表](../summary/regionlist.html)
         */
        Zone?: string;
        /**
         * 实例tag
         */
        Tag: string;
        /**
         * 运维时间0   //0点1   //1点依次类推
         */
        RewriteTime: number;
        /**
         * 内存空间ID
         */
        SpaceId?: string;
        /**
         * 子网ID
         */
        SubnetId?: string;
        /**
         * VPC ID
         */
        VPCId?: string;
        /**
         * 内存空间名称
         */
        Name?: string;
        /**
         * 创建时间
         */
        CreateTime?: number;
        /**
         * 到期时间
         */
        ExpireTime?: number;
        /**
         * 空间类型:single(无热备),double(热备)
         */
        Type?: string;
        /**
         * 协议类型: memcache, redis
         */
        Protocol?: string;
        /**
         * 容量单位GB
         */
        Size?: number;
        /**
         * 使用量单位MB
         */
        UsedSize?: number;
        /**
         * Starting:创建中 Running:运行中 Fail:失败
         */
        State?: string;
        /**
         * Year, Month, Dynamic, Trial
         */
        ChargeType?: string;
        /**
         * IP端口信息请参见 UMemSpaceAddressSet
         */
        Address?: {
            /**
             * UMem实例内网访问IP
             */
            IP?: string;
            /**
             * UMem实例内网访问域名地址，未开启状态下返回为空
             */
            PrivateDomain?: string;
            /**
             * 开启外网状态下外网IP，否则为空
             */
            PublicIp?: string;
            /**
             * UMem实例访问Port
             */
            Port?: number;
        }[];
        /**
         * 实例是否支持回档
         */
        SupportAofRollback?: boolean;
        /**
         * 实例是否开启了回档
         */
        AofRollbackEnable?: boolean;
    }[];
    /**
     * 根据过滤条件得到的总数
     */
    TotalCount?: number;
}
/**
 * DescribeUMemUpgradePrice - 获取UMem升级价格信息
 */
export interface DescribeUMemUpgradePriceRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone?: string;
    /**
     * 购买UMem大小,单位:GB
     */
    Size: number;
    /**
     * 空间类型:single(无热备),double(热备)(默认: double)
     */
    Type: string;
    /**
     * 需要升级的空间的SpaceId
     */
    SpaceId: string;
    /**
     * 是否为性能增强型。默认为false，或者不填，true为性能增强型。
     */
    HighPerformance?: string;
    /**
     * 如果是拆分按钮查询价格就填 true, 否则就填 false,默认为 false
     */
    IsSplit?: string;
    /**
     * 进行容量调整分片的分片ID(性能增强型不需要传入)
     */
    BlockIds?: string[];
    /**
     * 进行容量调整的分片的目标容量,单位 GB(性能增强型不需要传入)
     */
    BlockSize?: number[];
    /**
     *  代理id
     */
    ProxyId?: string;
    /**
     * 代理升级后CPU核数
     */
    NewCPU?: number;
    /**
     * 新增读写分离节点容量大小
     */
    ReplicaSize?: number;
}
/**
 * DescribeUMemUpgradePrice - 获取UMem升级价格信息
 */
export interface DescribeUMemUpgradePriceResponse {
    /**
     * 价格
     */
    Price?: number;
    /**
     * 原价
     */
    OriginalPrice?: number;
}
/**
 * DescribeUMemcacheGroup - 显示Memcache
 */
export interface DescribeUMemcacheGroupRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone?: string;
    /**
     * 组的ID,如果指定则获取描述，否则为列表操 作,需指定Offset/Limit
     */
    GroupId?: string;
    /**
     * 分页显示的起始偏移, 默认值为0
     */
    Offset?: number;
    /**
     * 分页显示的条目数, 默认值为20
     */
    Limit?: number;
}
/**
 * DescribeUMemcacheGroup - 显示Memcache
 */
export interface DescribeUMemcacheGroupResponse {
    /**
     * 组的总的节点个数
     */
    TotalCount?: number;
    /**
     * 组列表,参见 UMemcacheGroupSet
     */
    DataSet?: {
        /**
         * 组ID
         */
        GroupId?: string;
        /**
         * 组名称
         */
        Name?: string;
        /**
         * 节点的配置ID
         */
        ConfigId?: string;
        /**
         * 节点的虚拟IP地址
         */
        VirtualIP?: string;
        /**
         * 节点分配的服务端口
         */
        Port?: number;
        /**
         * 容量单位GB
         */
        Size?: number;
        /**
         * 使用量单位MB
         */
        UsedSize?: number;
        /**
         * Memcache版本信息,默认为1.4.31
         */
        Version?: string;
        /**
         * 状态标记 Creating // 初始化中 CreateFail // 创建失败 Deleting // 删除中 DeleteFail // 删除失败 Running // 运行 Resizing // 容量调整中 ResizeFail // 容量调整失败 Configing // 配置中 ConfigFail // 配置失败Restarting // 重启中
         */
        State?: string;
        /**
         * 创建时间 (UNIX时间戳)
         */
        CreateTime?: number;
        /**
         * 修改时间 (UNIX时间戳)
         */
        ModifyTime?: number;
        /**
         * 过期时间 (UNIX时间戳)
         */
        ExpireTime?: number;
        /**
         * 计费类型:Year,Month,Dynamic 默认Dynamic
         */
        ChargeType?: string;
        /**
         * 业务组名称
         */
        Tag?: string;
    }[];
}
/**
 * DescribeUMemcachePrice - 获取umemcache组价格信息
 */
export interface DescribeUMemcachePriceRequest {
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
     */
    Zone: string;
    /**
     * 容量大小,单位:GB 取值范围[1-32]
     */
    Size: number;
    /**
     * 计费模式，Year， Month， Dynamic，默认: Dynamic 默认: 获取所有计费模式的价格
     */
    ChargeType?: string;
    /**
     * 购买umemcache的时长，默认值为1
     */
    Quantity?: number;
    /**
     * 空间类型:single(无热备),double(热备)(默认: double)
     */
    Type?: string;
}
/**
 * DescribeUMemcachePrice - 获取umemcache组价格信息
 */
export interface DescribeUMemcachePriceResponse {
    /**
     * 价格列表, 参见 UMemcachePriceSet
     */
    DataSet?: {
        /**
         * 计费模式，Year, Month, Dynamic
         */
        ChargeType?: string;
        /**
         * 总价格
         */
        Price?: number;
        /**
         * 产品列表价
         */
        ListPrice?: number;
        /**
         * 原价
         */
        OriginalPrice?: number;
    }[];
}
/**
 * DescribeUMemcacheUpgradePrice - 获取umemcache升级价格信息
 */
export interface DescribeUMemcacheUpgradePriceRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone?: string;
    /**
     * 购买umemcache大小,单位:GB
     */
    Size: number;
    /**
     * 需要升级的空间的GroupId,请参考DescribeUMemcacheGroup接口
     */
    GroupId: string;
}
/**
 * DescribeUMemcacheUpgradePrice - 获取umemcache升级价格信息
 */
export interface DescribeUMemcacheUpgradePriceResponse {
    /**
     * 价格
     */
    Price?: number;
    /**
     * 原价
     */
    OriginalPrice?: number;
    /**
     * 列表价格
     */
    ListPrice?: number;
}
/**
 * DescribeURedisBackup - 查询主备redis备份
 */
export interface DescribeURedisBackupRequest {
    /**
     * 组的ID，如果不传RegionType,GroupId为必传项
     */
    GroupId?: string;
    /**
     * 分页显示的起始偏移, 默认值为0
     */
    Offset?: number;
    /**
     * 分页显示的条目数, 默认值为10
     */
    Limit?: number;
    /**
     * 跨机房URedis，slave所在可用区（必须和Zone在同一Region，且不可相同）
     */
    SlaveZone?: string;
    /**
     * 用于区分跨可用备份以及普通备份。默认为normal。跨可用则分为(source, target)
     */
    RegionType?: string;
    /**
     * 备份Id，若传入，则只返回该BackupId的备份信息
     */
    BackupId?: string;
}
/**
 * DescribeURedisBackup - 查询主备redis备份
 */
export interface DescribeURedisBackupResponse {
    /**
     * 用户名下总的备份个数
     */
    TotalCount?: number;
    /**
     * 备份列表 参见 URedisBackupSet
     */
    DataSet?: {
        /**
         * 可用区，参见[可用区列表](../summary/regionlist.html)
         */
        Zone?: string;
        /**
         * 备份ID
         */
        BackupId?: string;
        /**
         * 对应的实例ID
         */
        GroupId?: string;
        /**
         * 组名称
         */
        GroupName?: string;
        /**
         * 备份的名称
         */
        BackupName?: string;
        /**
         * 备份时间 (UNIX时间戳)
         */
        BackupTime?: number;
        /**
         * 备份文件大小, 以字节为单位
         */
        BackupSize?: number;
        /**
         * 备份类型: Manual 手动 Auto 自动
         */
        BackupType?: string;
        /**
         * 备份的状态: Backuping 备份中 Success 备份成功 Error 备份失败 Expired 备份过期
         */
        State?: string;
        /**
         * 跨地域备份源地域
         */
        SrcRegionName?: string;
        /**
         * 跨地域备份目标地域
         */
        DstRegionName?: string;
        /**
         * 源实例容量大小
         */
        MemorySize?: number;
        /**
         * 源实例Redis版本
         */
        RedisVersion?: string;
    }[];
}
/**
 * DescribeURedisBackupURL - 获取主备Redis备份下载链接
 */
export interface DescribeURedisBackupURLRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone?: string;
    /**
     * 备份ID
     */
    BackupId: string;
    /**
     * 是否是跨机房URedis(默认false)
     */
    RegionFlag?: boolean;
    /**
     * 实例ID
     */
    GroupId?: string;
    /**
     * 跨机房URedis，slave所在可用区（必须和Zone在同一Region，且不可相同）
     */
    SlaveZone?: string;
    /**
     * 默认为false,true时代表查询跨地域备份URL
     */
    IsCrossRegion?: boolean;
}
/**
 * DescribeURedisBackupURL - 获取主备Redis备份下载链接
 */
export interface DescribeURedisBackupURLResponse {
    /**
     * [即将下线,请使用BackupPath]
     */
    BackupURL?: string;
    /**
     * 备份文件公网的地址
     */
    BackupPath?: string;
}
/**
 * DescribeURedisConfig - 查询主备Redis所有配置文件
 */
export interface DescribeURedisConfigRequest {
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
     */
    Zone: string;
    /**
     * 是否是跨机房URedis(默认false)
     */
    RegionFlag: boolean;
    /**
     * Redis版本号
     */
    Version?: string;
    /**
     * 配置文件ID
     */
    ConfigId?: string;
    /**
     * 页显示的起始偏移, 默认值为0
     */
    Offset?: number;
    /**
     * 页显示的条目数, 默认值为10
     */
    Limit?: number;
}
/**
 * DescribeURedisConfig - 查询主备Redis所有配置文件
 */
export interface DescribeURedisConfigResponse {
    /**
     * 根据过滤条件得到的总数
     */
    TotalCount?: number;
    /**
     * 配置文件列表 参见 URedisConfigSet
     */
    DataSet?: {
        /**
         * Zone
         */
        Zone?: string;
        /**
         * 配置ID
         */
        ConfigId?: string;
        /**
         * 配置名称
         */
        Name?: string;
        /**
         * 配置描述
         */
        Description?: string;
        /**
         * 配置对应的Redis版本
         */
        Version?: string;
        /**
         * 置是否可以修改
         */
        IsModify?: string;
        /**
         * 配置所处的状态
         */
        State?: string;
        /**
         * 创建时间 (UNIX时间戳)
         */
        CreateTime?: number;
        /**
         * 修改时间 (UNIX时间戳)
         */
        ModifyTime?: number;
        /**
         * 是否是跨机房URedis(默认false)
         */
        RegionFlag?: boolean;
    }[];
}
/**
 * DescribeURedisGroup - 查询主备Redis(已废弃，建议使用DescribeUMem)
 */
export interface DescribeURedisGroupRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone?: string;
    /**
     * 组的ID,如果指定则获取描述，否则为列表操 作,需指定Offset/Limit
     */
    GroupId?: string;
    /**
     * 分页显示的起始偏移, 默认值为0
     */
    Offset?: number;
    /**
     * 分页显示的条目数, 默认值为20
     */
    Limit?: number;
}
/**
 * DescribeURedisGroup - 查询主备Redis(已废弃，建议使用DescribeUMem)
 */
export interface DescribeURedisGroupResponse {
    /**
     * 组的总的节点个数
     */
    TotalCount?: number;
    /**
     * 组列表 参见 URedisGroupSet
     */
    DataSet?: {
        /**
         * 实例所在可用区，或者master redis所在可用区，参见 [可用区列表](../summary/regionlist.html)
         */
        Zone?: string;
        /**
         * 返回运维时间 0 //0点 1 //1点 以此类推
         */
        RewriteTime: number;
        /**
         * 实例类型
         */
        Role: string;
        /**
         * vpcid
         */
        VPCId?: string;
        /**
         * subnetid
         */
        SubnetId?: string;
        /**
         * 组ID
         */
        GroupId?: string;
        /**
         * 组名称
         */
        Name?: string;
        /**
         * 空间类型:single(无热备),double(热备)
         */
        Type?: string;
        /**
         * 协议
         */
        Protocol?: string;
        /**
         * [即将下线,请使用Size] 容量单位GB
         */
        MemorySize?: number;
        /**
         * [即将下线,请使用Name] 组名称
         */
        GroupName?: string;
        /**
         * 节点的配置ID
         */
        ConfigId?: string;
        /**
         * 节点的虚拟IP地址
         */
        VirtualIP?: string;
        /**
         * 节点分配的服务端口
         */
        Port?: number;
        /**
         * 容量单位GB
         */
        Size?: number;
        /**
         * 使用量单位MB
         */
        UsedSize?: number;
        /**
         * 是否需要自动备份,enable,disable
         */
        AutoBackup?: string;
        /**
         * 组自动备份开始时间,单位小时计,范围[0-23]
         */
        BackupTime?: number;
        /**
         * 是否开启高可用,enable,disable
         */
        HighAvailability?: string;
        /**
         * Redis版本信息
         */
        Version?: string;
        /**
         * 过期时间 (UNIX时间戳)
         */
        ExpireTime?: number;
        /**
         * 计费类型:Year,Month,Dynamic 默认Dynamic
         */
        ChargeType?: string;
        /**
         * 状态标记 Creating // 初始化中 CreateFail // 创建失败 Deleting // 删除中 DeleteFail // 删除失败 Running // 运行 Resizing // 容量调整中 ResizeFail // 容量调整失败 Configing // 配置中 ConfigFail // 配置失败// 修改SSL中SSLSwitching //SSLSwitchFail修改SSL失败
         */
        State?: string;
        /**
         * 创建时间 (UNIX时间戳)
         */
        CreateTime?: number;
        /**
         * 修改时间 (UNIX时间戳)
         */
        ModifyTime?: number;
        /**
         * 业务组名称
         */
        Tag?: string;
        /**
         * 跨机房URedis，slave redis所在可用区，参见 [可用区列表](../summary/regionlist.html)
         */
        SlaveZone?: string;
        /**
         * 是否是高性能Redis， true表示是； false表示否
         */
        IsHighPerformance?: boolean;
        /**
         * SSL版本
         */
        SSLVersion?: string;
        /**
         * 实例是否开启SSL
         */
        SSLEnable?: boolean;
        /**
         * 证书过期时间
         */
        SSLCertExpireTime?: number;
        /**
         * 安全策略。1:内网隔离，2:加密通信，3:内网隔离+加密通信
         */
        SecPolicy?: number;
        /**
         * 实例是否有加入到自治中心
         */
        UDACEnable?: boolean;
    }[];
}
/**
 * DescribeURedisPrice - 获取URedis价格信息
 */
export interface DescribeURedisPriceRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * 量大小,单位:GB  取值范围[1-32]
     */
    Size: number;
    /**
     * 计费模式，Year， Month， Dynamic；如果不指定，则一次性获取三种计费
     */
    ChargeType?: string;
    /**
     * 计费模式为Dynamic时，购买的时长, 默认为1
     */
    Quantity?: number;
    /**
     * 是否是跨机房URedis(默认false)
     */
    RegionFlag?: boolean;
    /**
     * 产品类型：MS_Redis（标准主备版），S_Redis（从库），默认为MS_Redis
     */
    ProductType?: string;
    /**
     * 查询高性能Redis， 默认为false， 或者不填， 查询高性能为true
     */
    HighPerformance?: boolean;
}
/**
 * DescribeURedisPrice - 获取URedis价格信息
 */
export interface DescribeURedisPriceResponse {
    /**
     * 价格 参数见 UMemPriceSet
     */
    DataSet?: {
        /**
         * 原价
         */
        OriginalPrice: number;
        /**
         * Year， Month， Dynamic，Trial
         */
        ChargeType?: string;
        /**
         * 产品列表价
         */
        ListPrice?: number;
        /**
         * 总价格
         */
        Price?: number;
    }[];
}
/**
 * DescribeURedisSlowlog - 查询URedis慢日志
 */
export interface DescribeURedisSlowlogRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * 资源ID
     */
    GroupId: string;
    /**
     * 分页显示的条目数，默认为10
     */
    Limit?: number;
}
/**
 * DescribeURedisSlowlog - 查询URedis慢日志
 */
export interface DescribeURedisSlowlogResponse {
    /**
     * 总条目数
     */
    TotalCount: number;
    /**
     * 条目数据
     */
    DataSet?: {
        /**
         * 查询发生的时间
         */
        StartTime?: number;
        /**
         * 查询消耗的时间
         */
        SpendTime?: number;
        /**
         * 查询命令
         */
        Command?: string;
    }[];
}
/**
 * DescribeURedisUpgradePrice - 获取uredis升级价格信息
 */
export interface DescribeURedisUpgradePriceRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone?: string;
    /**
     * 购买uredis大小,单位:GB,范围是[1-32]
     */
    Size: number;
    /**
     * 要升级的空间的GroupId,请参考DescribeURedisGroup接口
     */
    GroupId: string;
    /**
     * 查询高性能Redis， 默认为false， 或者不填， 查询高性能为true
     */
    HighPerformance?: boolean;
    /**
     * 切换类型，执行类型切换时询价需要传入的参数。“HighPerformance”： 表示转换为性能加强型，“Normal”： 表示转换为普通主备版类型
     */
    ConvertType?: string;
}
/**
 * DescribeURedisUpgradePrice - 获取uredis升级价格信息
 */
export interface DescribeURedisUpgradePriceResponse {
    /**
     * 价格
     */
    Price?: number;
    /**
     * 原价
     */
    OriginalPrice?: number;
}
/**
 * DescribeURedisVersion - 获取主Redis可用版本
 */
export interface DescribeURedisVersionRequest {
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
     */
    Zone: string;
}
/**
 * DescribeURedisVersion - 获取主Redis可用版本
 */
export interface DescribeURedisVersionResponse {
    /**
     * 组列表 参见 URedisVersionSet
     */
    DataSet?: {
        /**
         * Redis版本
         */
        Version?: string;
    }[];
    /**
     * 总版本个数
     */
    TotalCount?: number;
}
/**
 * FlushallURedisGroup - 清除主备redis数据
 */
export interface FlushallURedisGroupRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * 组的ID
     */
    GroupId: string;
    /**
     * FlushDb或FlushAll
     */
    FlushType: string;
    /**
     * 清空的db，FlushType为FlushDb，此项为必传项
     */
    DbNum?: number;
    /**
     * company_id
     */
    TopOrganizationId?: number;
    /**
     * OrganizationId
     */
    OrganizationId?: number;
    /**
     * 跨机房URedis，slave所在可用区（必须和Zone在同一Region，且不可相同）
     */
    SlaveZone?: string;
}
/**
 * FlushallURedisGroup - 清除主备redis数据
 */
export interface FlushallURedisGroupResponse {
}
/**
 * GetUMemSpaceState - 获取UMem内存空间列表
 */
export interface GetUMemSpaceStateRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * 内存空间ID
     */
    SpaceId: string;
}
/**
 * GetUMemSpaceState - 获取UMem内存空间列表
 */
export interface GetUMemSpaceStateResponse {
    /**
     * Starting:创建中 Running:运行中 Fail:失败
     */
    State?: string[];
}
/**
 * ISolationURedisGroup - 打开/关闭URedis
 */
export interface ISolationURedisGroupRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * 组的ID
     */
    GroupId: string;
    /**
     * UNBind(关闭)或Bind(打开)
     */
    TransformType: string;
    /**
     * 跨机房URedis，slave所在可用区（必须和Zone在同一Region，且不可相同）
     */
    SlaveZone?: string;
}
/**
 * ISolationURedisGroup - 打开/关闭URedis
 */
export interface ISolationURedisGroupResponse {
}
/**
 * ModifyUMemPassword - 更改分布式redis密码
 */
export interface ModifyUMemPasswordRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * 资源id
     */
    SpaceId: string;
    /**
     * 新密码字符串，要求长度为6~36个字符,且只能包含英文、数字以及-和下划线；并且需要base64加密；如要取消密码，此值为空字符串
     */
    Password: string;
}
/**
 * ModifyUMemPassword - 更改分布式redis密码
 */
export interface ModifyUMemPasswordResponse {
}
/**
 * ModifyUMemSpaceName - 修改UMem内存空间名称
 */
export interface ModifyUMemSpaceNameRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * UMem内存空间ID
     */
    SpaceId: string;
    /**
     * 新的名称,长度(6<=size<=63)
     */
    Name: string;
}
/**
 * ModifyUMemSpaceName - 修改UMem内存空间名称
 */
export interface ModifyUMemSpaceNameResponse {
}
/**
 * ModifyURedisConfig - 修改主备Redis配置文件参数
 */
export interface ModifyURedisConfigRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * 配置文件的ID
     */
    ConfigId: string;
    /**
     * 参数名称
     */
    Key: string;
    /**
     * 对应参数的值
     */
    Value: string;
    /**
     * 如果实例使用默认配置创建，修改配置信息需要填写GroupId
     */
    GroupId?: string;
    /**
     * 是否是跨机房URedis(默认false)
     */
    RegionFlag?: boolean;
}
/**
 * ModifyURedisConfig - 修改主备Redis配置文件参数
 */
export interface ModifyURedisConfigResponse {
}
/**
 * ModifyURedisGroupName - 修改主备redis名称
 */
export interface ModifyURedisGroupNameRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone?: string;
    /**
     * 组的ID
     */
    GroupId: string;
    /**
     * Redis组名称 (范围[6-63],只能包含英文、数字以及符号-和_)
     */
    Name: string;
}
/**
 * ModifyURedisGroupName - 修改主备redis名称
 */
export interface ModifyURedisGroupNameResponse {
}
/**
 * ModifyURedisGroupPassword - 修改主备密码/重置密码
 */
export interface ModifyURedisGroupPasswordRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone?: string;
    /**
     * 组的ID
     */
    GroupId: string;
    /**
     * 新密码字符串，要求长度为6~36个字符,且只能包含英文、数字以及-和下划线；并且需要base64加密；如要取消密码，此值为空字符串，
     */
    Password: string;
}
/**
 * ModifyURedisGroupPassword - 修改主备密码/重置密码
 */
export interface ModifyURedisGroupPasswordResponse {
}
/**
 * RegisterUMemDefrag - 动态开关redis碎片整理选项
 */
export interface RegisterUMemDefragRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * 资源ID
     */
    ResourceId: string;
    /**
     * 开始时间戳
     */
    StartTime?: number;
    /**
     * 关闭时间戳
     */
    EndTime?: number;
    /**
     * 操作类型：“Once”： 表示单次执行， “Open”：表示开启策略“Close”:  表示关闭策略（分布式实例只支持Once）。
     */
    OperateType?: string;
    /**
     * 任务时间周期，单位为分钟。
     */
    FragTime?: number;
    /**
     * 碎片整理阈值，范围为 100-200（分布式实例该参数无效）。
     */
    FragSize?: number;
    /**
     * 开始整点数值（分布式实例该参数无效）。
     */
    StartHour?: number;
    /**
     * 开始分钟数（分布式实例该参数无效）。
     */
    StartMin?: number;
    /**
     * 结束整点数值（分布式实例该参数无效）。
     */
    EndHour?: number;
    /**
     * 结束分钟数（分布式实例该参数无效）。
     */
    EndMin?: number;
    /**
     * AND逻辑字段，表示 阈值和时间段都满足（分布式实例该参数无效）。
     */
    IsUnion?: boolean;
}
/**
 * RegisterUMemDefrag - 动态开关redis碎片整理选项
 */
export interface RegisterUMemDefragResponse {
}
/**
 * RemoveUDRedisData - 清除udredis实例数据
 */
export interface RemoveUDRedisDataRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * 实例id
     */
    SpaceId: string;
}
/**
 * RemoveUDRedisData - 清除udredis实例数据
 */
export interface RemoveUDRedisDataResponse {
}
/**
 * ResizeUDRedisBlockSize - 更改udredis分片容量
 */
export interface ResizeUDRedisBlockSizeRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * spaceid
     */
    SpaceId: string;
    /**
     * 分片id
     */
    BlockId: string;
    /**
     * 分片容量（单位GB）4/8/12/16/20
     */
    BlockSize: number;
    /**
     * 任务执行时间戳，时间戳需满足未来一天时间范围内。默认不传或者值为0时，即为立即执行
     */
    StartTime?: number;
    /**
     * 是否为性能增强型。默认为false，或者不填，true为性能增强型。
     */
    HighPerformance?: boolean;
}
/**
 * ResizeUDRedisBlockSize - 更改udredis分片容量
 */
export interface ResizeUDRedisBlockSizeResponse {
}
/**
 * ResizeUMemSpace - 调整内存空间容量，只支持存量老分布式产品，不支持高性能分布式。（已废弃，不建议使用）
 */
export interface ResizeUMemSpaceRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * UMem 内存空间Id
     */
    SpaceId: string;
    /**
     * 内存大小, 单位:GB (需要大于原size,<= 1024)
     */
    Size: number;
    /**
     * 空间类型:single(无热备),double(热备)(默认: double)
     */
    Type?: string;
    /**
     * 使用的代金券Id
     */
    CouponId?: string;
}
/**
 * ResizeUMemSpace - 调整内存空间容量，只支持存量老分布式产品，不支持高性能分布式。（已废弃，不建议使用）
 */
export interface ResizeUMemSpaceResponse {
}
/**
 * ResizeUMemcacheGroup - 调整memcache实例的容量
 */
export interface ResizeUMemcacheGroupRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone?: string;
    /**
     * umemcache资源ID
     */
    GroupId: string;
    /**
     * 内存大小, 单位:GB 目前支持1/2/4/8/16/32五种规格(暂时只支持扩容)
     */
    Size: number;
    /**
     * 代金券ID
     */
    CouponId?: number;
}
/**
 * ResizeUMemcacheGroup - 调整memcache实例的容量
 */
export interface ResizeUMemcacheGroupResponse {
}
/**
 * ResizeURedisGroup - 通过调用CheckURedisAllowance接口，检查资源情况，根据不同情形来调整主备redis容量，其中主要包括可用区资源不足无法扩容，主备所在宿主机资源不足需要迁移完成扩容（需要主从切换，会闪断及负载升高），以及直接扩容（业务无感知）
 */
export interface ResizeURedisGroupRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * 组ID
     */
    GroupId: string;
    /**
     * 内存大小, 单位:GB (需要大于原size,且小于等于32) 目前仅支持1/2/4/8/16/32 G 六种容量规格
     */
    Size: number;
    /**
     * 计费类型
     */
    ChargeType?: string;
    /**
     * 空间类型:single(无热备),double(热备)(默认: double)
     */
    Type?: string;
    /**
     * 任务执行时间戳，默认为0或者不传时，为立即执行，传入时间需满足未来一天范围
     */
    StartTime?: number;
    /**
     * 高性能Redis， 默认为false， 或者不填， 高性能为true
     */
    HighPerformance?: boolean;
    /**
     * 代金券ID 请参考DescribeCoupon接口
     */
    CouponId?: number;
}
/**
 * ResizeURedisGroup - 通过调用CheckURedisAllowance接口，检查资源情况，根据不同情形来调整主备redis容量，其中主要包括可用区资源不足无法扩容，主备所在宿主机资源不足需要迁移完成扩容（需要主从切换，会闪断及负载升高），以及直接扩容（业务无感知）
 */
export interface ResizeURedisGroupResponse {
}
/**
 * ResizeUhproxy - 分布式Redis代理规格调整
 */
export interface ResizeUhproxyRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * 分布式Redis资源ID
     */
    SpaceId: string;
    /**
     * 代理id
     */
    ProxyId: string;
    /**
     * 代理目标核数
     */
    NewCPU: number;
    /**
     * 使用的代金券id
     */
    CouponId?: string;
}
/**
 * ResizeUhproxy - 分布式Redis代理规格调整
 */
export interface ResizeUhproxyResponse {
}
/**
 * RestartUMemcacheGroup - 重启单机Memcache
 */
export interface RestartUMemcacheGroupRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone?: string;
    /**
     * 组的ID
     */
    GroupId: string;
}
/**
 * RestartUMemcacheGroup - 重启单机Memcache
 */
export interface RestartUMemcacheGroupResponse {
}
/**
 * RestartURedisGroup - 重启主备实例
 */
export interface RestartURedisGroupRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone?: string;
    /**
     * 资源ID
     */
    GroupId: string;
}
/**
 * RestartURedisGroup - 重启主备实例
 */
export interface RestartURedisGroupResponse {
}
/**
 * UpdateURedisBackupStrategy - URedisBackupStrategy
 */
export interface UpdateURedisBackupStrategyRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone?: string;
    /**
     * 组的ID
     */
    GroupId: string;
    /**
     * 备份时间，默认为0
     */
    BackupTime?: string;
    /**
     * 是否打开默认备份功能。enable(打开)，disable(关闭)，默认enable
     */
    AutoBackup?: string;
    /**
     * 跨机房URedis，slave所在可用区（必须和Zone在同一Region，且不可相同）
     */
    SlaveZone?: string;
    /**
     * 操作类型，不传默认为normal(即操控自动备份打开以及时间)，modify（修改跨地域备份策略）,close(关闭跨地域备份策略)
     */
    OperationType?: string;
    /**
     * 跨可用备份目标地域（当Operation为modify时必选）
     */
    DstRegion?: string;
    /**
     * 保存天数（当Operation为modify时必选）
     */
    SaveDays?: number;
}
/**
 * UpdateURedisBackupStrategy - URedisBackupStrategy
 */
export interface UpdateURedisBackupStrategyResponse {
}
/**
 * UpdateURedisRewriteTime - 修改主备redis重写时间
 */
export interface UpdateURedisRewriteTimeRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * 实例名称
     */
    GroupId: string;
    /**
     * 重写时间
     */
    RewriteTime: number;
    /**
     * 跨机房URedis，slave所在可用区（必须和Zone在同一Region，且不可相同）
     */
    SlaveZone?: string;
}
/**
 * UpdateURedisRewriteTime - 修改主备redis重写时间
 */
export interface UpdateURedisRewriteTimeResponse {
}
