"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("../../core/client"));
const request_1 = __importDefault(require("../../core/request"));
/**
 * This client is used to call actions of **ukms** service
 */
class UKMSClient extends client_1.default {
    constructor({ config, credential, }) {
        super({ config, credential });
    }
    /**
     * CancelKeyDeletion - 取消计划删除中的密钥。
     *
     * See also: https://docs.ucloud.cn/api/ukms-api/cancel_key_deletion
     */
    cancelKeyDeletion(request) {
        const args = Object.assign({ Action: 'CancelKeyDeletion' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateAlias - 为密钥创建别名。
     *
     * See also: https://docs.ucloud.cn/api/ukms-api/create_alias
     */
    createAlias(request) {
        const args = Object.assign({ Action: 'CreateAlias' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateKey - 创建密钥。
     *
     * See also: https://docs.ucloud.cn/api/ukms-api/create_key
     */
    createKey(request) {
        const args = Object.assign({ Action: 'CreateKey' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * Decrypt - 您可以使用此操作解密使用对称加密 KMS 密钥或非对称加密 KMS 密钥加密的密文。当 KMS 密钥为非对称密钥时，您必须指定用于加密密文的 KMS 密钥和加密算法。
     *
     * See also: https://docs.ucloud.cn/api/ukms-api/decrypt
     */
    decrypt(request) {
        const args = Object.assign({ Action: 'Decrypt' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteAlias - 删除密钥别名。
     *
     * See also: https://docs.ucloud.cn/api/ukms-api/delete_alias
     */
    deleteAlias(request) {
        const args = Object.assign({ Action: 'DeleteAlias' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeKey - 查看指定密钥的元数据。
     *
     * See also: https://docs.ucloud.cn/api/ukms-api/describe_key
     */
    describeKey(request) {
        const args = Object.assign({ Action: 'DescribeKey' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DisableKey - 禁用指定密钥。
     *
     * See also: https://docs.ucloud.cn/api/ukms-api/disable_key
     */
    disableKey(request) {
        const args = Object.assign({ Action: 'DisableKey' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DisableKeyRotation - 关闭密钥自动轮转。
     *
     * See also: https://docs.ucloud.cn/api/ukms-api/disable_key_rotation
     */
    disableKeyRotation(request) {
        const args = Object.assign({ Action: 'DisableKeyRotation' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * EnableKey - 启用指定密钥。
     *
     * See also: https://docs.ucloud.cn/api/ukms-api/enable_key
     */
    enableKey(request) {
        const args = Object.assign({ Action: 'EnableKey' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * EnableKeyRotation - 开启对称密钥自动轮转。
     *
     * See also: https://docs.ucloud.cn/api/ukms-api/enable_key_rotation
     */
    enableKeyRotation(request) {
        const args = Object.assign({ Action: 'EnableKeyRotation' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * Encrypt - 使用指定密钥加密明文数据。
     *
     * See also: https://docs.ucloud.cn/api/ukms-api/encrypt
     */
    encrypt(request) {
        const args = Object.assign({ Action: 'Encrypt' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GenerateDataKey - 生成数据密钥，返回明文和密文。
     *
     * See also: https://docs.ucloud.cn/api/ukms-api/generate_data_key
     */
    generateDataKey(request) {
        const args = Object.assign({ Action: 'GenerateDataKey' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GenerateDataKeyPair - 创建数据密钥对
     *
     * See also: https://docs.ucloud.cn/api/ukms-api/generate_data_key_pair
     */
    generateDataKeyPair(request) {
        const args = Object.assign({ Action: 'GenerateDataKeyPair' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GenerateDataKeyPairWithoutPlaintext - 创建数据密钥对（无明文返回）
     *
     * See also: https://docs.ucloud.cn/api/ukms-api/generate_data_key_pair_without_plaintext
     */
    generateDataKeyPairWithoutPlaintext(request) {
        const args = Object.assign({ Action: 'GenerateDataKeyPairWithoutPlaintext' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GenerateDataKeyWithoutPlaintext - 创建数据密钥（无明文），仅返回加密后的数据密钥。
     *
     * See also: https://docs.ucloud.cn/api/ukms-api/generate_data_key_without_plaintext
     */
    generateDataKeyWithoutPlaintext(request) {
        const args = Object.assign({ Action: 'GenerateDataKeyWithoutPlaintext' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GenerateMac - 使用HMAC密钥管理服务（KMS）密钥和该密钥支持的MAC算法，为消息生成基于哈希的消息认证码（HMAC）。
     *
     * See also: https://docs.ucloud.cn/api/ukms-api/generate_mac
     */
    generateMac(request) {
        const args = Object.assign({ Action: 'GenerateMac' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GenerateRandom - 生成随机数
     *
     * See also: https://docs.ucloud.cn/api/ukms-api/generate_random
     */
    generateRandom(request) {
        const args = Object.assign({ Action: 'GenerateRandom' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetKeyRotationStatus - 查询密钥自动轮转状态。
     *
     * See also: https://docs.ucloud.cn/api/ukms-api/get_key_rotation_status
     */
    getKeyRotationStatus(request) {
        const args = Object.assign({ Action: 'GetKeyRotationStatus' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetPublicKey - 获取非对称密钥的公钥。
     *
     * See also: https://docs.ucloud.cn/api/ukms-api/get_public_key
     */
    getPublicKey(request) {
        const args = Object.assign({ Action: 'GetPublicKey' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ListAliases - 获取 UKMS 实例下的别名列表。
     *
     * See also: https://docs.ucloud.cn/api/ukms-api/list_aliases
     */
    listAliases(request) {
        const args = Object.assign({ Action: 'ListAliases' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ListKeys - 查询用户的主密钥信息列表。
     *
     * See also: https://docs.ucloud.cn/api/ukms-api/list_keys
     */
    listKeys(request) {
        const args = Object.assign({ Action: 'ListKeys' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * RotateKeyOnDemand - 立即触发一次密钥轮转。
     *
     * See also: https://docs.ucloud.cn/api/ukms-api/rotate_key_on_demand
     */
    rotateKeyOnDemand(request) {
        const args = Object.assign({ Action: 'RotateKeyOnDemand' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ScheduleKeyDeletion - 计划删除指定密钥。
     *
     * See also: https://docs.ucloud.cn/api/ukms-api/schedule_key_deletion
     */
    scheduleKeyDeletion(request) {
        const args = Object.assign({ Action: 'ScheduleKeyDeletion' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * Sign - 使用非对称密钥对消息或消息摘要签名。
     *
     * See also: https://docs.ucloud.cn/api/ukms-api/sign
     */
    sign(request) {
        const args = Object.assign({ Action: 'Sign' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateAlias - 将别名更新到另一个密钥。
     *
     * See also: https://docs.ucloud.cn/api/ukms-api/update_alias
     */
    updateAlias(request) {
        const args = Object.assign({ Action: 'UpdateAlias' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateKeyDescription - 更新指定密钥的描述信息。
     *
     * See also: https://docs.ucloud.cn/api/ukms-api/update_key_description
     */
    updateKeyDescription(request) {
        const args = Object.assign({ Action: 'UpdateKeyDescription' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * Verify - 使用非对称密钥验证签名。
     *
     * See also: https://docs.ucloud.cn/api/ukms-api/verify
     */
    verify(request) {
        const args = Object.assign({ Action: 'Verify' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * VerifyMac - 验证指定消息、HMAC KMS 密钥和 MAC 算法的基于哈希的消息认证码 (HMAC)。为了验证 HMAC，VerifyMac 会使用您指定的消息、HMAC KMS 密钥和 MAC 算法计算 HMAC，并将计算出的 HMAC 与您指定的 HMAC 进行比较。如果两个 HMAC 完全相同，则验证成功；否则，验证失败。  验证结果表明，自计算 HMAC 以来，消息未发生更改，并且使用了指定的密钥来生成和验证 HMAC。
     *
     * See also: https://docs.ucloud.cn/api/ukms-api/verify_mac
     */
    verifyMac(request) {
        const args = Object.assign({ Action: 'VerifyMac' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
}
exports.default = UKMSClient;
