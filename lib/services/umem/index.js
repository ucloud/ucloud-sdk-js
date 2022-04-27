"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("../../core/client"));
const request_1 = __importDefault(require("../../core/request"));
/**
 * This client is used to call actions of **umem** service
 */
class UMemClient extends client_1.default {
    constructor({ config, credential, }) {
        super({ config, credential });
    }
    /**
     * CheckUDredisSpaceAllowance - 检查高性能UMem剩余资源，以及分片扩容前的资源预检查
     *
     * See also: https://docs.ucloud.cn/api/umem-api/check_udredis_space_allowance
     */
    checkUDredisSpaceAllowance(request) {
        const args = Object.assign({ Action: 'CheckUDredisSpaceAllowance' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CheckURedisAllowance - 检查主备Redis的资源是否足够创建新实例，以及主备Redis的扩容资源预检查
     *
     * See also: https://docs.ucloud.cn/api/umem-api/check_uredis_allowance
     */
    checkURedisAllowance(request) {
        const args = Object.assign({ Action: 'CheckURedisAllowance' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateUMemBackup - 创建分布式redis备份
     *
     * See also: https://docs.ucloud.cn/api/umem-api/create_umem_backup
     */
    createUMemBackup(request) {
        const args = Object.assign({ Action: 'CreateUMemBackup' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateUMemSpace - 创建UMem内存空间
     *
     * See also: https://docs.ucloud.cn/api/umem-api/create_umem_space
     */
    createUMemSpace(request) {
        const args = Object.assign({ Action: 'CreateUMemSpace' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateUMemcacheGroup - 创建单机Memcache
     *
     * See also: https://docs.ucloud.cn/api/umem-api/create_umem_cache_group
     */
    createUMemcacheGroup(request) {
        const args = Object.assign({ Action: 'CreateUMemcacheGroup' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateURedisBackup - 创建主备Redis备份
     *
     * See also: https://docs.ucloud.cn/api/umem-api/create_uredis_backup
     */
    createURedisBackup(request) {
        const args = Object.assign({ Action: 'CreateURedisBackup' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateURedisGroup - 创建主备redis
     *
     * See also: https://docs.ucloud.cn/api/umem-api/create_uredis_group
     */
    createURedisGroup(request) {
        const args = Object.assign({ Action: 'CreateURedisGroup' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteUMemSpace - 删除UMem内存空间
     *
     * See also: https://docs.ucloud.cn/api/umem-api/delete_umem_space
     */
    deleteUMemSpace(request) {
        const args = Object.assign({ Action: 'DeleteUMemSpace' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteUMemcacheGroup - 删除单机Memcache
     *
     * See also: https://docs.ucloud.cn/api/umem-api/delete_umem_cache_group
     */
    deleteUMemcacheGroup(request) {
        const args = Object.assign({ Action: 'DeleteUMemcacheGroup' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteURedisGroup - 删除主备redis
     *
     * See also: https://docs.ucloud.cn/api/umem-api/delete_uredis_group
     */
    deleteURedisGroup(request) {
        const args = Object.assign({ Action: 'DeleteURedisGroup' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUDRedisProxyInfo - 拉取udredis所有的代理信息
     *
     * See also: https://docs.ucloud.cn/api/umem-api/describe_ud_redis_proxy_info
     */
    describeUDRedisProxyInfo(request) {
        const args = Object.assign({ Action: 'DescribeUDRedisProxyInfo' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUDRedisSlowlog - 查询UDRedis慢日志
     *
     * See also: https://docs.ucloud.cn/api/umem-api/describe_ud_redis_slowlog
     */
    describeUDRedisSlowlog(request) {
        const args = Object.assign({ Action: 'DescribeUDRedisSlowlog' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUMem - 获取UMem列表
     *
     * See also: https://docs.ucloud.cn/api/umem-api/describe_umem
     */
    describeUMem(request) {
        const args = Object.assign({ Action: 'DescribeUMem' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUMemBackup - 查询分布式redis备份
     *
     * See also: https://docs.ucloud.cn/api/umem-api/describe_umem_backup
     */
    describeUMemBackup(request) {
        const args = Object.assign({ Action: 'DescribeUMemBackup' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUMemBackupURL - 获取分布式redis 备份下载链接
     *
     * See also: https://docs.ucloud.cn/api/umem-api/describe_umem_backup_url
     */
    describeUMemBackupURL(request) {
        const args = Object.assign({ Action: 'DescribeUMemBackupURL' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUMemBlockInfo - 拉取UDRedis分片信息
     *
     * See also: https://docs.ucloud.cn/api/umem-api/describe_umem_block_info
     */
    describeUMemBlockInfo(request) {
        const args = Object.assign({ Action: 'DescribeUMemBlockInfo' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUMemPrice - 获取UMem实例价格信息
     *
     * See also: https://docs.ucloud.cn/api/umem-api/describe_umem_price
     */
    describeUMemPrice(request) {
        const args = Object.assign({ Action: 'DescribeUMemPrice' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUMemSpace - 获取UMem内存空间列表
     *
     * See also: https://docs.ucloud.cn/api/umem-api/describe_umem_space
     */
    describeUMemSpace(request) {
        const args = Object.assign({ Action: 'DescribeUMemSpace' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUMemUpgradePrice - 获取UMem升级价格信息
     *
     * See also: https://docs.ucloud.cn/api/umem-api/describe_umem_upgrade_price
     */
    describeUMemUpgradePrice(request) {
        const args = Object.assign({ Action: 'DescribeUMemUpgradePrice' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUMemcacheGroup - 显示Memcache
     *
     * See also: https://docs.ucloud.cn/api/umem-api/describe_umem_cache_group
     */
    describeUMemcacheGroup(request) {
        const args = Object.assign({ Action: 'DescribeUMemcacheGroup' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUMemcachePrice - 获取umemcache组价格信息
     *
     * See also: https://docs.ucloud.cn/api/umem-api/describe_umem_cache_price
     */
    describeUMemcachePrice(request) {
        const args = Object.assign({ Action: 'DescribeUMemcachePrice' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUMemcacheUpgradePrice - 获取umemcache升级价格信息
     *
     * See also: https://docs.ucloud.cn/api/umem-api/describe_umem_cache_upgrade_price
     */
    describeUMemcacheUpgradePrice(request) {
        const args = Object.assign({ Action: 'DescribeUMemcacheUpgradePrice' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeURedisBackup - 查询主备redis备份
     *
     * See also: https://docs.ucloud.cn/api/umem-api/describe_uredis_backup
     */
    describeURedisBackup(request) {
        const args = Object.assign({ Action: 'DescribeURedisBackup' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeURedisBackupURL - 获取主备Redis备份下载链接
     *
     * See also: https://docs.ucloud.cn/api/umem-api/describe_uredis_backup_url
     */
    describeURedisBackupURL(request) {
        const args = Object.assign({ Action: 'DescribeURedisBackupURL' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeURedisConfig - 查询主备Redis所有配置文件
     *
     * See also: https://docs.ucloud.cn/api/umem-api/describe_uredis_config
     */
    describeURedisConfig(request) {
        const args = Object.assign({ Action: 'DescribeURedisConfig' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeURedisGroup - 查询主备Redis
     *
     * See also: https://docs.ucloud.cn/api/umem-api/describe_uredis_group
     */
    describeURedisGroup(request) {
        const args = Object.assign({ Action: 'DescribeURedisGroup' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeURedisPrice - 取uredis价格信息
     *
     * See also: https://docs.ucloud.cn/api/umem-api/describe_uredis_price
     */
    describeURedisPrice(request) {
        const args = Object.assign({ Action: 'DescribeURedisPrice' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeURedisSlowlog - 查询URedis慢日志
     *
     * See also: https://docs.ucloud.cn/api/umem-api/describe_uredis_slowlog
     */
    describeURedisSlowlog(request) {
        const args = Object.assign({ Action: 'DescribeURedisSlowlog' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeURedisUpgradePrice - 获取uredis升级价格信息
     *
     * See also: https://docs.ucloud.cn/api/umem-api/describe_uredis_upgrade_price
     */
    describeURedisUpgradePrice(request) {
        const args = Object.assign({ Action: 'DescribeURedisUpgradePrice' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeURedisVersion - 获取主Redis可用版本
     *
     * See also: https://docs.ucloud.cn/api/umem-api/describe_uredis_version
     */
    describeURedisVersion(request) {
        const args = Object.assign({ Action: 'DescribeURedisVersion' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * FlushallURedisGroup - 清除主备redis数据
     *
     * See also: https://docs.ucloud.cn/api/umem-api/flushall_uredis_group
     */
    flushallURedisGroup(request) {
        const args = Object.assign({ Action: 'FlushallURedisGroup' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUMemSpaceState - 获取UMem内存空间列表
     *
     * See also: https://docs.ucloud.cn/api/umem-api/get_umem_space_state
     */
    getUMemSpaceState(request) {
        const args = Object.assign({ Action: 'GetUMemSpaceState' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ISolationURedisGroup - 打开/关闭URedis
     *
     * See also: https://docs.ucloud.cn/api/umem-api/i_solation_uredis_group
     */
    iSolationURedisGroup(request) {
        const args = Object.assign({ Action: 'ISolationURedisGroup' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ModifyUMemSpaceName - 修改UMem内存空间名称
     *
     * See also: https://docs.ucloud.cn/api/umem-api/modify_umem_space_name
     */
    modifyUMemSpaceName(request) {
        const args = Object.assign({ Action: 'ModifyUMemSpaceName' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ModifyURedisGroupName - 修改主备redis名称
     *
     * See also: https://docs.ucloud.cn/api/umem-api/modify_uredis_group_name
     */
    modifyURedisGroupName(request) {
        const args = Object.assign({ Action: 'ModifyURedisGroupName' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ModifyURedisGroupPassword - 修改主备密码/重置密码
     *
     * See also: https://docs.ucloud.cn/api/umem-api/modify_uredis_group_password
     */
    modifyURedisGroupPassword(request) {
        const args = Object.assign({ Action: 'ModifyURedisGroupPassword' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * RemoveUDRedisData - 清除udredis实例数据
     *
     * See also: https://docs.ucloud.cn/api/umem-api/remove_ud_redis_data
     */
    removeUDRedisData(request) {
        const args = Object.assign({ Action: 'RemoveUDRedisData' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ResizeUMemSpace - 调整内存空间容量
     *
     * See also: https://docs.ucloud.cn/api/umem-api/resize_umem_space
     */
    resizeUMemSpace(request) {
        const args = Object.assign({ Action: 'ResizeUMemSpace' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ResizeURedisGroup - 通过调用CheckURedisAllowance接口，检查资源情况，根据不同情形来调整主备redis容量，其中主要包括可用区资源不足无法扩容，主备所在宿主机资源不足需要迁移完成扩容（需要主从切换，会闪断及负载升高），以及直接扩容（业务无感知）
     *
     * See also: https://docs.ucloud.cn/api/umem-api/resize_uredis_group
     */
    resizeURedisGroup(request) {
        const args = Object.assign({ Action: 'ResizeURedisGroup' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * RestartUMemcacheGroup - 重启单机Memcache
     *
     * See also: https://docs.ucloud.cn/api/umem-api/restart_umem_cache_group
     */
    restartUMemcacheGroup(request) {
        const args = Object.assign({ Action: 'RestartUMemcacheGroup' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * RestartURedisGroup - 重启主备实例
     *
     * See also: https://docs.ucloud.cn/api/umem-api/restart_uredis_group
     */
    restartURedisGroup(request) {
        const args = Object.assign({ Action: 'RestartURedisGroup' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateURedisBackupStrategy - URedisBackupStrategy
     *
     * See also: https://docs.ucloud.cn/api/umem-api/update_uredis_backup_strategy
     */
    updateURedisBackupStrategy(request) {
        const args = Object.assign({ Action: 'UpdateURedisBackupStrategy' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
}
exports.default = UMemClient;
