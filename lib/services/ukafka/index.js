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
     * CreateUKafkaInstance - 创建一个ukafka实例
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
     * DescribeUKafkaInstance - 获取整个集群的信息
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
     * IsUKafkaTopicNameExist - 检查一个topic名称是否已经在集群中了
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
     * ListUKafkaInstance - 列举集群信息
     *
     * See also: https://docs.ucloud.cn/api/ukafka-api/list_ukafka_instance
     */
    listUKafkaInstance(request) {
        const args = Object.assign({ Action: 'ListUKafkaInstance' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ListUKafkaTopics - 展示kafka集群上所有topic
     *
     * See also: https://docs.ucloud.cn/api/ukafka-api/list_ukafka_topics
     */
    listUKafkaTopics(request) {
        const args = Object.assign({ Action: 'ListUKafkaTopics' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ModifyUKafkaInstanceType - 规格升降级
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
