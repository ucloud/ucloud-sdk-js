"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("../../core/client"));
const request_1 = __importDefault(require("../../core/request"));
/**
 * This client is used to call actions of **ukafka** service
 */
class UKafkaClient extends client_1.default {
    constructor({ config, credential, }) {
        super({ config, credential });
    }
    /**
     * AddUKafkaInstanceNode - 给实例添加节点
     *
     * See also: https://docs.ucloud.cn/api/ukafka-api/add_ukafka_instance_node
     */
    addUKafkaInstanceNode(request) {
        const args = Object.assign({ Action: 'AddUKafkaInstanceNode' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateUKafkaInstance - 创建实例接口。\\ 创建实例前需要按以下步骤准备必要参数：\\ 1.获取Region（地域）和 Zone（可用区），访问链接：https://docs.ucloud.cn/api/summary/regionlist 可以获取所有支持的地域和可用区；\\ 2.获取FrameworkVersion，访问链接：https://docs.ucloud.cn/api/ukafka-api/list_ukafka_framework_version，响应字段的FrameworkVersions[N].Version是支持的 Kafka 版本；\\ 3.ChargeType付费类型，可用值：Dynamic为按小时付费，Month为按月付费，Year为按年付费；\\ 4.获取NodeType机型详情，访问链接：https://docs.ucloud.cn/api/ukafka-api/get_ukafka_node_type，响应字段的NodeTypeSet[N].NodeTypeName是支持的所有机型；\\ 5.获取DiskSize磁盘大小范围 ，访问链接：https://docs.ucloud.cn/api/ukafka-api/get_ukafka_node_type，该接口响应字段的NodeTypeSet[N].MinDiskSize和NodeTypeSet[N].MaxDiskSize是磁盘大小的取值范围；\\ 6.InstanceName，自定义输入实例名称，只能包含中英文、数字以及- _ .
     *
     * See also: https://docs.ucloud.cn/api/ukafka-api/create_ukafka_instance
     */
    createUKafkaInstance(request) {
        const args = Object.assign({ Action: 'CreateUKafkaInstance' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteUKafkaInstance - 删除实例
     *
     * See also: https://docs.ucloud.cn/api/ukafka-api/delete_ukafka_instance
     */
    deleteUKafkaInstance(request) {
        const args = Object.assign({ Action: 'DeleteUKafkaInstance' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUKafkaConsumer - 获取 Kafka 消费组信息
     *
     * See also: https://docs.ucloud.cn/api/ukafka-api/describe_ukafka_consumer
     */
    describeUKafkaConsumer(request) {
        const args = Object.assign({ Action: 'DescribeUKafkaConsumer' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUKafkaInstance - 获取整个实例的信息。实例ID，可以通过ListUKafkaInstance 接口的ClusterSet. ClusterInstanceId 获取
     *
     * See also: https://docs.ucloud.cn/api/ukafka-api/describe_ukafka_instance
     */
    describeUKafkaInstance(request) {
        const args = Object.assign({ Action: 'DescribeUKafkaInstance' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUKafkaNodeType - 获取节点机型配置
     *
     * See also: https://docs.ucloud.cn/api/ukafka-api/get_ukafka_node_type
     */
    getUKafkaNodeType(request) {
        const args = Object.assign({ Action: 'GetUKafkaNodeType' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * IsUKafkaTopicNameExist - 检查一个topic名称是否已经在集群中了。实例ID，可以通过ListUKafkaInstance 接口的ClusterSet. ClusterInstanceId 获取
     *
     * See also: https://docs.ucloud.cn/api/ukafka-api/is_ukafka_topic_name_exist
     */
    isUKafkaTopicNameExist(request) {
        const args = Object.assign({ Action: 'IsUKafkaTopicNameExist' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ListUKafkaConsumers - 列出 Kafka 消费组
     *
     * See also: https://docs.ucloud.cn/api/ukafka-api/list_ukafka_consumers
     */
    listUKafkaConsumers(request) {
        const args = Object.assign({ Action: 'ListUKafkaConsumers' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ListUKafkaFrameworkVersion - 列举ukafka框架版本
     *
     * See also: https://docs.ucloud.cn/api/ukafka-api/list_ukafka_framework_version
     */
    listUKafkaFrameworkVersion(request) {
        const args = Object.assign({ Action: 'ListUKafkaFrameworkVersion' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ListUKafkaInstance - 获取实例列表信息
     *
     * See also: https://docs.ucloud.cn/api/ukafka-api/list_ukafka_instance
     */
    listUKafkaInstance(request) {
        const args = Object.assign({ Action: 'ListUKafkaInstance' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ListUKafkaTopics - 获取 kafka 实例 topic  列表信息。实例ID，可以通过ListUKafkaInstance 接口的ClusterSet. ClusterInstanceId 获取
     *
     * See also: https://docs.ucloud.cn/api/ukafka-api/list_ukafka_topics
     */
    listUKafkaTopics(request) {
        const args = Object.assign({ Action: 'ListUKafkaTopics' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ModifyUKafkaInstanceType - 规格升降级，仅升级CPU 和内存
     *
     * See also: https://docs.ucloud.cn/api/ukafka-api/modify_ukafka_instance_type
     */
    modifyUKafkaInstanceType(request) {
        const args = Object.assign({ Action: 'ModifyUKafkaInstanceType' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ResizeUKafkaDisk - 磁盘扩容
     *
     * See also: https://docs.ucloud.cn/api/ukafka-api/resize_ukafka_disk
     */
    resizeUKafkaDisk(request) {
        const args = Object.assign({ Action: 'ResizeUKafkaDisk' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
}
exports.default = UKafkaClient;
