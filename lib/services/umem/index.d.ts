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
     * DescribeUDRedisSlowlog - 查询UDRedis慢日志
     *
     * See also: https://docs.ucloud.cn/api/umem-api/describe_ud_redis_slowlog
     */
    describeUDRedisSlowlog(request?: DescribeUDRedisSlowlogRequest): Promise<DescribeUDRedisSlowlogResponse>;
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
     * DescribeUMemSpace - 获取UMem内存空间列表
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
     * DescribeURedisGroup - 查询主备Redis
     *
     * See also: https://docs.ucloud.cn/api/umem-api/describe_uredis_group
     */
    describeURedisGroup(request?: DescribeURedisGroupRequest): Promise<DescribeURedisGroupResponse>;
    /**
     * DescribeURedisPrice - 取uredis价格信息
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
     * ModifyUMemSpaceName - 修改UMem内存空间名称
     *
     * See also: https://docs.ucloud.cn/api/umem-api/modify_umem_space_name
     */
    modifyUMemSpaceName(request?: ModifyUMemSpaceNameRequest): Promise<ModifyUMemSpaceNameResponse>;
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
     * RemoveUDRedisData - 清除udredis实例数据
     *
     * See also: https://docs.ucloud.cn/api/umem-api/remove_ud_redis_data
     */
    removeUDRedisData(request?: RemoveUDRedisDataRequest): Promise<RemoveUDRedisDataResponse>;
    /**
     * ResizeUMemSpace - 调整内存空间容量
     *
     * See also: https://docs.ucloud.cn/api/umem-api/resize_umem_space
     */
    resizeUMemSpace(request?: ResizeUMemSpaceRequest): Promise<ResizeUMemSpaceResponse>;
    /**
     * ResizeURedisGroup - 通过调用CheckURedisAllowance接口，检查资源情况，根据不同情形来调整主备redis容量，其中主要包括可用区资源不足无法扩容，主备所在宿主机资源不足需要迁移完成扩容（需要主从切换，会闪断及负载升高），以及直接扩容（业务无感知）
     *
     * See also: https://docs.ucloud.cn/api/umem-api/resize_uredis_group
     */
    resizeURedisGroup(request?: ResizeURedisGroupRequest): Promise<ResizeURedisGroupResponse>;
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
 * CreateUMemBackup - 创建分布式redis备份
 */
export interface CreateUMemBackupRequest {
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
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
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
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
     * Year , Month, Dynamic, Trial 默认: Month
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
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
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
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
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
     * 配置ID,目前支持 3.0版本配置ID:"03f58ca9-b64d-4bdd-abc7-c6b9a46fd801",3.2版本配置ID:"3e45ac48-f8a2-a9q2-261d-l342dab130gf", 4.0版本配置ID:"6c9298a3-9d7f-428c-b1d0-e87ab3b8a1ea",默认版本3.0,从备份创建为必传项
     */
    ConfigId?: string;
    /**
     * Redis版本信息(详见DescribeURedisVersion返回结果),默认版本3.0
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
     * 是否创建使用ipv6 资源， 默认为false， 或者不填， 创建ipv6为true
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
 * DeleteUMemSpace - 删除UMem内存空间
 */
export interface DeleteUMemSpaceRequest {
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
     */
    Zone?: string;
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
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
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
 * DescribeUDRedisSlowlog - 查询UDRedis慢日志
 */
export interface DescribeUDRedisSlowlogRequest {
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
     */
    Zone: string;
    /**
     *  实例id
     */
    InstanceId: string;
    /**
     * 分页显示的条目数，默认为10
     */
    Limit?: number;
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
    }[];
}
/**
 * DescribeUMemBackup - 查询分布式redis备份
 */
export interface DescribeUMemBackupRequest {
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
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
    }[];
}
/**
 * DescribeUMemBackupURL - 获取分布式redis 备份下载链接
 */
export interface DescribeUMemBackupURLRequest {
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
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
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
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
         * 分片ip
         */
        BlockVip: string;
        /**
         * 分片端口
         */
        BlockPort: number;
        /**
         * 容量单位GB
         */
        BlockSize: number;
        /**
         * 使用量单位MB
         */
        BlockUsedSize: number;
        /**
         * 实例状态 Starting // 创建中 Creating // 初始化中 CreateFail // 创建失败 Fail // 创建失败 Deleting // 删除中 DeleteFail // 删除失败 Running // 运行 Resizing // 容量调整中 ResizeFail // 容量调整失败 Configing // 配置中 ConfigFail // 配置失败Restarting // 重启中 SetPasswordFail //设置密码失败
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
    }[];
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
 * DescribeUMemSpace - 获取UMem内存空间列表
 */
export interface DescribeUMemSpaceRequest {
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
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
 * DescribeUMemSpace - 获取UMem内存空间列表
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
         *
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
         *
         */
        SubnetId?: string;
        /**
         *
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
             * UMem实例访问IP
             */
            IP?: string;
            /**
             * UMem实例访问Port
             */
            Port?: number;
        }[];
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
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
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
     * 价格，单位：元
     */
    Price?: number;
}
/**
 * DescribeURedisBackup - 查询主备redis备份
 */
export interface DescribeURedisBackupRequest {
    /**
     * 分页显示的起始偏移, 默认值为0
     */
    Offset?: number;
    /**
     * 分页显示的条目数, 默认值为10
     */
    Limit?: number;
    /**
     * 组的ID
     */
    GroupId?: string;
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
         * 备份ID
         */
        BackupId?: string;
        /**
         * 可用区，参见[可用区列表](../summary/regionlist.html)
         */
        Zone?: string;
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
    }[];
}
/**
 * DescribeURedisBackupURL - 获取主备Redis备份下载链接
 */
export interface DescribeURedisBackupURLRequest {
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
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
     * 实例名称
     */
    GroupId?: string;
    /**
     * 跨机房URedis，slave所在可用区（必须和Zone在同一Region，且不可相同）
     */
    SlaveZone?: string;
}
/**
 * DescribeURedisBackupURL - 获取主备Redis备份下载链接
 */
export interface DescribeURedisBackupURLResponse {
    /**
     * 备份文件公网的地址
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
 * DescribeURedisGroup - 查询主备Redis
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
 * DescribeURedisGroup - 查询主备Redis
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
         * 容量单位GB
         */
        MemorySize?: number;
        /**
         * 组名称
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
         * 状态标记 Creating // 初始化中 CreateFail // 创建失败 Deleting // 删除中 DeleteFail // 删除失败 Running // 运行 Resizing // 容量调整中 ResizeFail // 容量调整失败 Configing // 配置中 ConfigFail // 配置失败
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
    }[];
}
/**
 * DescribeURedisPrice - 取uredis价格信息
 */
export interface DescribeURedisPriceRequest {
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
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
}
/**
 * DescribeURedisPrice - 取uredis价格信息
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
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
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
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
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
}
/**
 * DescribeURedisUpgradePrice - 获取uredis升级价格信息
 */
export interface DescribeURedisUpgradePriceResponse {
    /**
     * 扩容差价，单位: 元，保留小数点后两位有效数字
     */
    Price?: number;
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
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
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
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
     */
    Zone?: string;
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
    State?: string;
}
/**
 * ModifyUMemSpaceName - 修改UMem内存空间名称
 */
export interface ModifyUMemSpaceNameRequest {
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
     */
    Zone?: string;
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
 * ModifyURedisGroupName - 修改主备redis名称
 */
export interface ModifyURedisGroupNameRequest {
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
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
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
 * RemoveUDRedisData - 清除udredis实例数据
 */
export interface RemoveUDRedisDataRequest {
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
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
 * ResizeUMemSpace - 调整内存空间容量
 */
export interface ResizeUMemSpaceRequest {
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
     */
    Zone?: string;
    /**
     * UMem 内存空间Id
     */
    SpaceId: string;
    /**
     * 内存大小, 单位:GB (需要大于原size,<= 1024)
     */
    Size: number;
    /**
     * 使用的代金券Id
     */
    CouponId?: string;
}
/**
 * ResizeUMemSpace - 调整内存空间容量
 */
export interface ResizeUMemSpaceResponse {
}
/**
 * ResizeURedisGroup - 通过调用CheckURedisAllowance接口，检查资源情况，根据不同情形来调整主备redis容量，其中主要包括可用区资源不足无法扩容，主备所在宿主机资源不足需要迁移完成扩容（需要主从切换，会闪断及负载升高），以及直接扩容（业务无感知）
 */
export interface ResizeURedisGroupRequest {
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
     */
    Zone?: string;
    /**
     * 组ID
     */
    GroupId: string;
    /**
     * 内存大小, 单位:GB (需要大于原size,且小于等于32) 目前仅支持1/2/4/8/16/32 G 六种容量规格
     */
    Size: number;
    /**
     *
     */
    ChargeType?: string;
    /**
     * 空间类型:single(无热备),double(热备)(默认: double)
     */
    Type?: string;
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
 * RestartUMemcacheGroup - 重启单机Memcache
 */
export interface RestartUMemcacheGroupRequest {
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
     */
    Zone: string;
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
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
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
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
     */
    Zone?: string;
    /**
     * 组的ID
     */
    GroupId: string;
    /**
     * 备份时间，默认为0
     */
    BackupTime: string;
    /**
     * 是否打开默认备份功能。enable(打开)，disable(关闭)，默认enable
     */
    AutoBackup?: string;
    /**
     * 跨机房URedis，slave所在可用区（必须和Zone在同一Region，且不可相同）
     */
    SlaveZone?: string;
}
/**
 * UpdateURedisBackupStrategy - URedisBackupStrategy
 */
export interface UpdateURedisBackupStrategyResponse {
}
