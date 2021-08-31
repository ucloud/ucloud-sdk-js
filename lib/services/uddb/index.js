"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("../../core/client"));
const request_1 = __importDefault(require("../../core/request"));
/**
 * This client is used to call actions of **uddb** service
 */
class UDDBClient extends client_1.default {
    constructor({ config, credential, }) {
        super({ config, credential });
    }
    /**
     * ChangeUDDBInstanceName - 修改分布式数据库中间件名称
     *
     * See also: https://docs.ucloud.cn/api/uddb-api/change_uddb_instance_name
     */
    changeUDDBInstanceName(request) {
        const args = Object.assign({ Action: 'ChangeUDDBInstanceName' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
       * ChangeUDDBSlaveCount - 改变分布式数据库数据节点的只读实例个数
  每一个UDDB的数据节点负责处理所有的写入请求。与此同时，每一个数据节点可以配置若干个该节点的只读实例。当主节点的数据写入完毕后，只读实例把这次的写入操作进行更新，从而和数据节点保持一致。
  只读实例可以使得数据由多份复制，在数据节点和只读实例之间，可以做请求的读写分离, 也就是说, 主节点写入数据之后, 数据的读操作可以由数据只读实例进行分担, 这样减少主节点的压力, 增加性能
  当改变了数据节点的只读实例个数之后，对于现有的和以后的每一个数据节点都采用这个配置。如果UDDB实例有现有的数据节点, 那么它会根据新配置的参数，自动创建或删除数据节点的只读实例
  如下状态的UDDB实例可以进行这个操作:
  Running: 系统正常运行中
  当请求返回成功之后，UDDB实例的状态变成"ChangingSlaveCount"; 如果返回失败, UDDB实例状态保持不变 当UDDB更改数据分区的只读实例个数成功之后, UDDB实例的状态变成"Running"(正常运行中); 如果更改过程中出现异常, 状态变成"Abnormal"(异常运行中)或者"Error"(运行错误)
       *
       * See also: https://docs.ucloud.cn/api/uddb-api/change_uddb_slave_count
       */
    changeUDDBSlaveCount(request) {
        const args = Object.assign({ Action: 'ChangeUDDBSlaveCount' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateUDDBInstance - 创建创建分布式数据库UDDB实例, 简称UDDB实例。
     *
     * See also: https://docs.ucloud.cn/api/uddb-api/create_uddb_instance
     */
    createUDDBInstance(request) {
        const args = Object.assign({ Action: 'CreateUDDBInstance' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
       * DeleteUDDBInstance - 删除UDDB实例。
  如下状态的UDDB实例可以进行这个操作:
  InitFail: 初始化失败
  Shutoff: 已关闭
  当请求返回成功之后，UDDB实例就已经被删除, 列表上看不到对应的UDDB实例
       *
       * See also: https://docs.ucloud.cn/api/uddb-api/delete_uddb_instance
       */
    deleteUDDBInstance(request) {
        const args = Object.assign({ Action: 'DeleteUDDBInstance' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUDDBInstance - 获取分布式数据库UDDB的详细信息
     *
     * See also: https://docs.ucloud.cn/api/uddb-api/describe_uddb_instance
     */
    describeUDDBInstance(request) {
        const args = Object.assign({ Action: 'DescribeUDDBInstance' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUDDBInstancePrice - 获取分布式数据库UDDB价格
     *
     * See also: https://docs.ucloud.cn/api/uddb-api/describe_uddb_instance_price
     */
    describeUDDBInstancePrice(request) {
        const args = Object.assign({ Action: 'DescribeUDDBInstancePrice' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUDDBInstanceUpgradePrice - 升级UDDB时，获取升级后的价格
     *
     * See also: https://docs.ucloud.cn/api/uddb-api/describe_uddb_instance_upgrade_price
     */
    describeUDDBInstanceUpgradePrice(request) {
        const args = Object.assign({ Action: 'DescribeUDDBInstanceUpgradePrice' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
       * RestartUDDBInstance - 重启UDDB实例，开始提供服务。
  
  如下状态的UDDB实例可以进行这个操作:
  
  Running: 正常运行中
  Abnormal: 异常运行中
  当请求返回成功之后，UDDB实例的状态变成"Starting"(启动中); 如果返回失败, UDDB实例状态保持不变 UDDB实例在重启过程中, 当UDDB实例启动成功之后, UDDB实例的状态变成"Running"(正常运行中); 如果启动过程中出现异常, 状态变成"Abnormal"(异常运行中), 或者"Shutoff"(已关闭
       *
       * See also: https://docs.ucloud.cn/api/uddb-api/restart_uddb_instance
       */
    restartUDDBInstance(request) {
        const args = Object.assign({ Action: 'RestartUDDBInstance' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
       * StartUDDBInstance - 启动UDDB实例，开始提供服务。
  
  如下状态的UDDB实例可以进行这个操作:
  
  Shutoff: 已关闭
  当请求返回成功之后，UDDB实例的状态变成"Starting"(启动中); 如果返回失败, UDDB实例状态保持不变 UDDB实例在启动过程中, 当UDDB实例启动成功之后, UDDB实例的状态变成"Running"(正常运行中); 如果启动过程中出现异常, 状态变成"Abnormal"(异常运行中), 或者"Shutoff"(已关闭)
       *
       * See also: https://docs.ucloud.cn/api/uddb-api/start_uddb_instance
       */
    startUDDBInstance(request) {
        const args = Object.assign({ Action: 'StartUDDBInstance' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
       * StopUDDBInstance - 关闭UDDB实例，停止提供服务。
  
  如下状态的UDDB实例可以进行这个操作:
  
  Running: 正常运行中
  Abnormal: 异常运行中
  当请求返回成功之后，UDDB实例的状态变成"Shutdown"(关闭中); 如果返回失败, UDDB实例状态保持不变 UDDB实例在关闭过程中, 当UDDB实例关闭成功之后, UDDB实例的状态变成"Shutoff"(已关闭); 如果关闭过程中出现异常, 根据UDDB实例的情况, 状态变成"Abnormal"(异常运行中), 或者"Running"(正常运行中)
       *
       * See also: https://docs.ucloud.cn/api/uddb-api/stop_uddb_instance
       */
    stopUDDBInstance(request) {
        const args = Object.assign({ Action: 'StopUDDBInstance' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
       * UpgradeUDDBDataNode - 升降级分布式数据库数据节点的配置, 提高/降低数据节点的数据容量和内存
  
  所有数据节点以及其所挂载的只读实例的配置都受到影响
  
  升降级数据节点的配置之后之后, 会按照数据节点新的磁盘和内存大小重新计费
  
  如下状态的数据节点实例可以进行这个操作:
  
  Shutoff: 已关闭
  当请求返回成功之后，UDDB实例的状态变成"UpgradingDataNode"，相关数据节点的状态变成"Upgrading"; 如果返回失败, UDDB实例状态保持不变 当UDDB实例升级结束之后, UDDB实例的状态变成"Shutoff"
       *
       * See also: https://docs.ucloud.cn/api/uddb-api/upgrade_uddb_data_node
       */
    upgradeUDDBDataNode(request) {
        const args = Object.assign({ Action: 'UpgradeUDDBDataNode' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
       * UpgradeUDDBInstance - 升降级分布式数据库中间件的配置, 提高/降低请求处理的并发性
  
  修改请求处理节点个数之后, 按照所有请求处理节点的总内存容量和CPU核数重新计费
  
  如下状态的UDDB实例可以进行这个操作:
  
  Running: 系统正常运行中
  当请求返回成功之后，UDDB实例的状态变成"UpgradingUDDB"; 如果返回失败, UDDB实例状态保持不变 当UDDB实例升级成功之后, UDDB实例的状态变成"Running"; 如果更改过程中出现异常, 状态变成"Abnormal", 或者"Error"
       *
       * See also: https://docs.ucloud.cn/api/uddb-api/upgrade_uddb_instance
       */
    upgradeUDDBInstance(request) {
        const args = Object.assign({ Action: 'UpgradeUDDBInstance' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
}
exports.default = UDDBClient;
