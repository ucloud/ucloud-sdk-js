import Client from '../../core/client';
import { ConfigOptions } from '../../core/config';
import { CredentialOptions } from '../../core/credential';
/**
 * This client is used to call actions of **ukms** service
 */
export default class UKMSClient extends Client {
    constructor({ config, credential, }: {
        config: ConfigOptions;
        credential: CredentialOptions;
    });
    /**
     * CancelKeyDeletion - 取消计划删除中的密钥。
     *
     * See also: https://docs.ucloud.cn/api/ukms-api/cancel_key_deletion
     */
    cancelKeyDeletion(request?: CancelKeyDeletionRequest): Promise<CancelKeyDeletionResponse>;
    /**
     * CreateAlias - 为密钥创建别名。
     *
     * See also: https://docs.ucloud.cn/api/ukms-api/create_alias
     */
    createAlias(request?: CreateAliasRequest): Promise<CreateAliasResponse>;
    /**
     * CreateKey - 创建密钥。
     *
     * See also: https://docs.ucloud.cn/api/ukms-api/create_key
     */
    createKey(request?: CreateKeyRequest): Promise<CreateKeyResponse>;
    /**
     * Decrypt - 您可以使用此操作解密使用对称加密 KMS 密钥或非对称加密 KMS 密钥加密的密文。当 KMS 密钥为非对称密钥时，您必须指定用于加密密文的 KMS 密钥和加密算法。
     *
     * See also: https://docs.ucloud.cn/api/ukms-api/decrypt
     */
    decrypt(request?: DecryptRequest): Promise<DecryptResponse>;
    /**
     * DeleteAlias - 删除密钥别名。
     *
     * See also: https://docs.ucloud.cn/api/ukms-api/delete_alias
     */
    deleteAlias(request?: DeleteAliasRequest): Promise<DeleteAliasResponse>;
    /**
     * DescribeKey - 查看指定密钥的元数据。
     *
     * See also: https://docs.ucloud.cn/api/ukms-api/describe_key
     */
    describeKey(request?: DescribeKeyRequest): Promise<DescribeKeyResponse>;
    /**
     * DisableKey - 禁用指定密钥。
     *
     * See also: https://docs.ucloud.cn/api/ukms-api/disable_key
     */
    disableKey(request?: DisableKeyRequest): Promise<DisableKeyResponse>;
    /**
     * DisableKeyRotation - 关闭密钥自动轮转。
     *
     * See also: https://docs.ucloud.cn/api/ukms-api/disable_key_rotation
     */
    disableKeyRotation(request?: DisableKeyRotationRequest): Promise<DisableKeyRotationResponse>;
    /**
     * EnableKey - 启用指定密钥。
     *
     * See also: https://docs.ucloud.cn/api/ukms-api/enable_key
     */
    enableKey(request?: EnableKeyRequest): Promise<EnableKeyResponse>;
    /**
     * EnableKeyRotation - 开启对称密钥自动轮转。
     *
     * See also: https://docs.ucloud.cn/api/ukms-api/enable_key_rotation
     */
    enableKeyRotation(request?: EnableKeyRotationRequest): Promise<EnableKeyRotationResponse>;
    /**
     * Encrypt - 使用指定密钥加密明文数据。
     *
     * See also: https://docs.ucloud.cn/api/ukms-api/encrypt
     */
    encrypt(request?: EncryptRequest): Promise<EncryptResponse>;
    /**
     * GenerateDataKey - 生成数据密钥，返回明文和密文。
     *
     * See also: https://docs.ucloud.cn/api/ukms-api/generate_data_key
     */
    generateDataKey(request?: GenerateDataKeyRequest): Promise<GenerateDataKeyResponse>;
    /**
     * GenerateDataKeyPair - 创建数据密钥对
     *
     * See also: https://docs.ucloud.cn/api/ukms-api/generate_data_key_pair
     */
    generateDataKeyPair(request?: GenerateDataKeyPairRequest): Promise<GenerateDataKeyPairResponse>;
    /**
     * GenerateDataKeyPairWithoutPlaintext - 创建数据密钥对（无明文返回）
     *
     * See also: https://docs.ucloud.cn/api/ukms-api/generate_data_key_pair_without_plaintext
     */
    generateDataKeyPairWithoutPlaintext(request?: GenerateDataKeyPairWithoutPlaintextRequest): Promise<GenerateDataKeyPairWithoutPlaintextResponse>;
    /**
     * GenerateDataKeyWithoutPlaintext - 创建数据密钥（无明文），仅返回加密后的数据密钥。
     *
     * See also: https://docs.ucloud.cn/api/ukms-api/generate_data_key_without_plaintext
     */
    generateDataKeyWithoutPlaintext(request?: GenerateDataKeyWithoutPlaintextRequest): Promise<GenerateDataKeyWithoutPlaintextResponse>;
    /**
     * GenerateMac - 使用HMAC密钥管理服务（KMS）密钥和该密钥支持的MAC算法，为消息生成基于哈希的消息认证码（HMAC）。
     *
     * See also: https://docs.ucloud.cn/api/ukms-api/generate_mac
     */
    generateMac(request?: GenerateMacRequest): Promise<GenerateMacResponse>;
    /**
     * GenerateRandom - 生成随机数
     *
     * See also: https://docs.ucloud.cn/api/ukms-api/generate_random
     */
    generateRandom(request?: GenerateRandomRequest): Promise<GenerateRandomResponse>;
    /**
     * GetKeyRotationStatus - 查询密钥自动轮转状态。
     *
     * See also: https://docs.ucloud.cn/api/ukms-api/get_key_rotation_status
     */
    getKeyRotationStatus(request?: GetKeyRotationStatusRequest): Promise<GetKeyRotationStatusResponse>;
    /**
     * GetPublicKey - 获取非对称密钥的公钥。
     *
     * See also: https://docs.ucloud.cn/api/ukms-api/get_public_key
     */
    getPublicKey(request?: GetPublicKeyRequest): Promise<GetPublicKeyResponse>;
    /**
     * ListAliases - 获取 UKMS 实例下的别名列表。
     *
     * See also: https://docs.ucloud.cn/api/ukms-api/list_aliases
     */
    listAliases(request?: ListAliasesRequest): Promise<ListAliasesResponse>;
    /**
     * ListKeys - 查询用户的主密钥信息列表。
     *
     * See also: https://docs.ucloud.cn/api/ukms-api/list_keys
     */
    listKeys(request?: ListKeysRequest): Promise<ListKeysResponse>;
    /**
     * RotateKeyOnDemand - 立即触发一次密钥轮转。
     *
     * See also: https://docs.ucloud.cn/api/ukms-api/rotate_key_on_demand
     */
    rotateKeyOnDemand(request?: RotateKeyOnDemandRequest): Promise<RotateKeyOnDemandResponse>;
    /**
     * ScheduleKeyDeletion - 计划删除指定密钥。
     *
     * See also: https://docs.ucloud.cn/api/ukms-api/schedule_key_deletion
     */
    scheduleKeyDeletion(request?: ScheduleKeyDeletionRequest): Promise<ScheduleKeyDeletionResponse>;
    /**
     * Sign - 使用非对称密钥对消息或消息摘要签名。
     *
     * See also: https://docs.ucloud.cn/api/ukms-api/sign
     */
    sign(request?: SignRequest): Promise<SignResponse>;
    /**
     * UpdateAlias - 将别名更新到另一个密钥。
     *
     * See also: https://docs.ucloud.cn/api/ukms-api/update_alias
     */
    updateAlias(request?: UpdateAliasRequest): Promise<UpdateAliasResponse>;
    /**
     * UpdateKeyDescription - 更新指定密钥的描述信息。
     *
     * See also: https://docs.ucloud.cn/api/ukms-api/update_key_description
     */
    updateKeyDescription(request?: UpdateKeyDescriptionRequest): Promise<UpdateKeyDescriptionResponse>;
    /**
     * Verify - 使用非对称密钥验证签名。
     *
     * See also: https://docs.ucloud.cn/api/ukms-api/verify
     */
    verify(request?: VerifyRequest): Promise<VerifyResponse>;
    /**
     * VerifyMac - 验证指定消息、HMAC KMS 密钥和 MAC 算法的基于哈希的消息认证码 (HMAC)。为了验证 HMAC，VerifyMac 会使用您指定的消息、HMAC KMS 密钥和 MAC 算法计算 HMAC，并将计算出的 HMAC 与您指定的 HMAC 进行比较。如果两个 HMAC 完全相同，则验证成功；否则，验证失败。  验证结果表明，自计算 HMAC 以来，消息未发生更改，并且使用了指定的密钥来生成和验证 HMAC。
     *
     * See also: https://docs.ucloud.cn/api/ukms-api/verify_mac
     */
    verifyMac(request?: VerifyMacRequest): Promise<VerifyMacResponse>;
}
/**
 * CancelKeyDeletion - 取消计划删除中的密钥。
 */
export interface CancelKeyDeletionRequest {
    /**
     * 密钥  ID。
     */
    KeyId: string;
    /**
     * UKMS 实例资源 ID。
     */
    ResourceId?: string;
}
/**
 * CancelKeyDeletion - 取消计划删除中的密钥。
 */
export interface CancelKeyDeletionResponse {
}
/**
 * CreateAlias - 为密钥创建别名。
 */
export interface CreateAliasRequest {
    /**
     * 密钥别名，格式为 alias/name。
     */
    AliasName: string;
    /**
     * 密钥 ID 或别名。
     */
    KeyId: string;
    /**
     * UKMS 实例资源 ID。
     */
    ResourceId?: string;
}
/**
 * CreateAlias - 为密钥创建别名。
 */
export interface CreateAliasResponse {
}
/**
 * CreateKey - 创建密钥。
 */
export interface CreateKeyRequest {
    /**
     * UKMS 实例资源 ID。
     */
    ResourceId: string;
    /**
     * 密钥描述，最多 8192 字符。
     */
    Description?: string;
    /**
     * 可选密钥别名，格式为 alias/name。
     */
    Alias?: string;
    /**
     * 密钥规格，默认 SYMMETRIC_DEFAULT（AES_256）。可选值：SYMMETRIC_DEFAULT(AES_256)、RSA_2048、RSA_3072、RSA_4096、ECC_NIST_P256、ECC_NIST_P384、ECC_NIST_P521、HMAC_256、HMAC_384、HMAC_512。
     */
    KeySpec?: string;
    /**
     * 密钥用途
     */
    KeyUsage?: string;
    /**
     * 密钥材料来源，默认 UCLOUD_KMS。当前仅支持 UCLOUD_KMS；EXTERNAL 为 BYOK 规划值，当前传入会返回 1230。
     */
    Origin?: string;
    /**
     * 是否开启删除保护。可选值：true、false；默认 false。
     */
    DeletionProtection?: boolean;
}
/**
 * CreateKey - 创建密钥。
 */
export interface CreateKeyResponse {
    /**
     * 密钥 ID。
     */
    KeyId: string;
}
/**
 * Decrypt - 您可以使用此操作解密使用对称加密 KMS 密钥或非对称加密 KMS 密钥加密的密文。当 KMS 密钥为非对称密钥时，您必须指定用于加密密文的 KMS 密钥和加密算法。
 */
export interface DecryptRequest {
    /**
     * 待解密密文。
     */
    CiphertextBlob: string;
    /**
     * UKMS 实例资源 ID。
     */
    ResourceId?: string;
    /**
     * 主密钥 KeyId；对称密钥可空，从 CiphertextBlob 自动识别；非对称必填。
     */
    KeyId?: string;
    /**
     * 加密上下文，JSON Object。该参数内容会记录在日志中，请勿传入密码、密钥、令牌等敏感信息。
     */
    EncryptionContext?: string;
    /**
     * 解密算法。可选值：SYMMETRIC_DEFAULT、RSAES_OAEP_SHA_1、RSAES_OAEP_SHA_256；非对称密钥解密时必填。
     */
    EncryptionAlgorithm?: string;
}
/**
 * Decrypt - 您可以使用此操作解密使用对称加密 KMS 密钥或非对称加密 KMS 密钥加密的密文。当 KMS 密钥为非对称密钥时，您必须指定用于加密密文的 KMS 密钥和加密算法。
 */
export interface DecryptResponse {
    /**
     * 解密后的明文，Base64 编码。
     */
    Plaintext: string;
    /**
     * 密钥资源长 ID。
     */
    KeyId: string;
    /**
     * 实际使用的解密算法。取值：SYMMETRIC_DEFAULT、RSAES_OAEP_SHA_1、RSAES_OAEP_SHA_256。
     */
    EncryptionAlgorithm: string;
}
/**
 * DeleteAlias - 删除密钥别名。
 */
export interface DeleteAliasRequest {
    /**
     * 密钥别名，格式为 alias/name。
     */
    AliasName: string;
    /**
     * UKMS 实例资源 ID。
     */
    ResourceId?: string;
}
/**
 * DeleteAlias - 删除密钥别名。
 */
export interface DeleteAliasResponse {
}
/**
 * DescribeKey - 查看指定密钥的元数据。
 */
export interface DescribeKeyRequest {
    /**
     * 密钥资源长 ID、ARN 或别名。
     */
    KeyId: string;
    /**
     * UKMS 实例资源 ID。
     */
    ResourceId?: string;
}
/**
 * DescribeKey - 查看指定密钥的元数据。
 */
export interface DescribeKeyResponse {
    /**
     * 密钥元数据。
     */
    KeyMetadata: {
        /**
         * 密钥所属项目ID。
         */
        ProjectId?: string;
        /**
         * 密钥资源长 ID。
         */
        KeyId: string;
        /**
         * 创建时间，Unix 时间戳。
         */
        CreationDate: number;
        /**
         * 是否启用。取值：true、false。
         */
        Enabled: string;
        /**
         * 密钥用途。取值：ENCRYPT_DECRYPT、SIGN_VERIFY、GENERATE_VERIFY_MAC、KEY_AGREEMENT。
         */
        KeyUsage: string[];
        /**
         * 密钥对外状态。取值：Enabled、Disabled、PendingDeletion、PendingImport、Unavailable。
         */
        KeyState: string;
        /**
         * 密钥材料来源。取值：UCLOUD_KMS、EXTERNAL；当前 CreateKey 仅支持 UCLOUD_KMS。
         */
        Origin: string;
        /**
         * 密钥规格。取值：SYMMETRIC_DEFAULT、RSA_2048、RSA_3072、RSA_4096、ECC_NIST_P256、ECC_NIST_P384、ECC_NIST_P521、HMAC_256、HMAC_384、HMAC_512。
         */
        KeySpec: string;
        /**
         * 是否开启删除保护。取值：true、false。
         */
        DeletionProtection: boolean;
        /**
         * 当前密钥版本。
         */
        KeyVersion: number;
        /**
         * 密钥所属的 UKMS 实例资源 ID。
         */
        ResourceId: string;
        /**
         * 密钥描述。
         */
        Description?: string;
        /**
         * 计划删除时间，Unix 时间戳。
         */
        DeletionDate?: number;
        /**
         * ucs:ukms:{Region}:{CompanyId}:key/{KeyId}
         */
        Arn?: string;
        /**
         * 所属组织数字 ID
         */
        OrganizationId?: number;
    };
}
/**
 * DisableKey - 禁用指定密钥。
 */
export interface DisableKeyRequest {
    /**
     * 密钥资源长 ID
     */
    KeyId: string;
    /**
     * UKMS 实例资源 ID。
     */
    ResourceId?: string;
}
/**
 * DisableKey - 禁用指定密钥。
 */
export interface DisableKeyResponse {
}
/**
 * DisableKeyRotation - 关闭密钥自动轮转。
 */
export interface DisableKeyRotationRequest {
    /**
     * 密钥 ID或别名。
     */
    KeyId: string;
    /**
     * UKMS 实例资源 ID。
     */
    ResourceId: string;
}
/**
 * DisableKeyRotation - 关闭密钥自动轮转。
 */
export interface DisableKeyRotationResponse {
}
/**
 * EnableKey - 启用指定密钥。
 */
export interface EnableKeyRequest {
    /**
     * 密钥资源长 ID
     */
    KeyId: string;
    /**
     * UKMS 实例资源 ID。
     */
    ResourceId?: string;
}
/**
 * EnableKey - 启用指定密钥。
 */
export interface EnableKeyResponse {
}
/**
 * EnableKeyRotation - 开启对称密钥自动轮转。
 */
export interface EnableKeyRotationRequest {
    /**
     * UKMS 实例资源 ID。
     */
    ResourceId: string;
    /**
     * 密钥 ID、ARN 或别名。
     */
    KeyId: string;
    /**
     * 轮转周期，单位天。取值范围 1~2560，默认 365。仅 SYMMETRIC_DEFAULT 且 Origin=UCLOUD_KMS 的密钥支持轮转。
     */
    RotationPeriodInDays?: number;
}
/**
 * EnableKeyRotation - 开启对称密钥自动轮转。
 */
export interface EnableKeyRotationResponse {
}
/**
 * Encrypt - 使用指定密钥加密明文数据。
 */
export interface EncryptRequest {
    /**
     * 密钥资源长 ID 或别名。
     */
    KeyId: string;
    /**
     * 待加密明文，Base64 编码。
     */
    Plaintext: string;
    /**
     * 加密上下文，JSON Object。该参数内容会记录在日志中，请勿传入密码、密钥、令牌等敏感信息。
     */
    EncryptionContext?: string;
    /**
     * UKMS 实例资源 ID。
     */
    ResourceId?: string;
    /**
     * 加密算法。可选值：SYMMETRIC_DEFAULT、RSAES_OAEP_SHA_1、RSAES_OAEP_SHA_256；对称密钥默认 SYMMETRIC_DEFAULT，RSA 默认 RSAES_OAEP_SHA_256。
     */
    EncryptionAlgorithm?: string;
}
/**
 * Encrypt - 使用指定密钥加密明文数据。
 */
export interface EncryptResponse {
    /**
     * 加密后的密文。
     */
    CiphertextBlob: string;
    /**
     * 密钥资源长 ID。
     */
    KeyId: string;
    /**
     * 实际使用的加密算法。取值：SYMMETRIC_DEFAULT、RSAES_OAEP_SHA_1、RSAES_OAEP_SHA_256。
     */
    EncryptionAlgorithm: string;
}
/**
 * GenerateDataKey - 生成数据密钥，返回明文和密文。
 */
export interface GenerateDataKeyRequest {
    /**
     * 密钥资源长 ID、ARN 或别名。
     */
    KeyId: string;
    /**
     * UKMS 实例资源 ID。
     */
    ResourceId?: string;
    /**
     * 数据密钥规格。可选值：AES_256、AES_128；默认 AES_256。与 NumberOfBytes 二选一，同时填写时 NumberOfBytes 优先。
     */
    KeySpec?: string;
    /**
     * 生成数据密钥的字节长度，取值范围 1~1024。与 KeySpec 二选一，同时填写时本字段优先。
     */
    NumberOfBytes?: number;
    /**
     * 加密上下文，JSON Object。该参数内容会记录在日志中，请勿传入密码、密钥、令牌等敏感信息。
     */
    EncryptionContext?: string;
}
/**
 * GenerateDataKey - 生成数据密钥，返回明文和密文。
 */
export interface GenerateDataKeyResponse {
    /**
     * 数据密钥明文，Base64 编码。
     */
    Plaintext?: string;
    /**
     * 加密后的数据密钥。
     */
    CiphertextBlob: string;
    /**
     * 加密该数据密钥的密钥资源长 ID。
     */
    KeyId: string;
}
/**
 * GenerateDataKeyPair - 创建数据密钥对
 */
export interface GenerateDataKeyPairRequest {
    /**
     * 密钥ID
     */
    KeyId: string;
    /**
     * 密钥类型
     */
    KeyPairSpec: string;
    /**
     * 加密上下文
     */
    EncryptionContext?: string;
}
/**
 * GenerateDataKeyPair - 创建数据密钥对
 */
export interface GenerateDataKeyPairResponse {
    /**
     * 用于加密私钥的 KMS 密钥
     */
    KeyId?: string;
    /**
     * 生成的数据键对类型。
     */
    KeyPairSpec?: string;
    /**
     * 私钥的加密副本。
     */
    PrivateKeyCiphertextBlob?: string;
    /**
     * 私钥的明文副本。
     */
    PrivateKeyPlaintext?: string;
    /**
     * 公钥（明文）。
     */
    DataPublicKey?: string;
}
/**
 * GenerateDataKeyPairWithoutPlaintext - 创建数据密钥对（无明文返回）
 */
export interface GenerateDataKeyPairWithoutPlaintextRequest {
    /**
     * 密钥ID
     */
    KeyId: string;
    /**
     * 指定生成的数据密钥对类型。
     */
    KeyPairSpec: string;
    /**
     * 指定加密私钥时使用的加密上下文。
     */
    EncryptionContext?: string;
}
/**
 * GenerateDataKeyPairWithoutPlaintext - 创建数据密钥对（无明文返回）
 */
export interface GenerateDataKeyPairWithoutPlaintextResponse {
}
/**
 * GenerateDataKeyWithoutPlaintext - 创建数据密钥（无明文），仅返回加密后的数据密钥。
 */
export interface GenerateDataKeyWithoutPlaintextRequest {
    /**
     * 密钥资源长 ID或别名。
     */
    KeyId: string;
    /**
     * UKMS 实例资源 ID。
     */
    ResourceId?: string;
    /**
     * 数据密钥规格。可选值：AES_256、AES_128；默认 AES_256。与 NumberOfBytes 二选一，同时填写时 NumberOfBytes 优先。
     */
    KeySpec?: string;
    /**
     * 生成数据密钥的字节长度，取值范围 1~1024。与 KeySpec 二选一，同时填写时本字段优先。
     */
    NumberOfBytes?: number;
    /**
     * 加密上下文，JSON Object。
     */
    EncryptionContext?: string;
}
/**
 * GenerateDataKeyWithoutPlaintext - 创建数据密钥（无明文），仅返回加密后的数据密钥。
 */
export interface GenerateDataKeyWithoutPlaintextResponse {
    /**
     * 加密后的数据密钥。
     */
    CiphertextBlob: string;
    /**
     * 加密该数据密钥的密钥资源长 ID。
     */
    KeyId: string;
}
/**
 * GenerateMac - 使用HMAC密钥管理服务（KMS）密钥和该密钥支持的MAC算法，为消息生成基于哈希的消息认证码（HMAC）。
 */
export interface GenerateMacRequest {
    /**
     * 密钥ID
     */
    KeyId: string;
    /**
     * 待哈希的消息。
     */
    MacMessage: string;
    /**
     * 用于生成消息认证码的 MAC 算法。
     */
    MacAlgorithm: string;
}
/**
 * GenerateMac - 使用HMAC密钥管理服务（KMS）密钥和该密钥支持的MAC算法，为消息生成基于哈希的消息认证码（HMAC）。
 */
export interface GenerateMacResponse {
    /**
     * 针对指定消息生成的基于哈希的消息认证码 (HMAC)、HMAC KMS 密钥和 MAC 算法。
     */
    Mac?: string;
    /**
     * 用于生成 HMAC 的 MAC 算法。
     */
    MacAlgorithm?: string;
}
/**
 * GenerateRandom - 生成随机数
 */
export interface GenerateRandomRequest {
    /**
     * 随机数长度，最大1024
     */
    NumberOfBytes: number;
}
/**
 * GenerateRandom - 生成随机数
 */
export interface GenerateRandomResponse {
    /**
     * 随机字节串。
     */
    Plaintext?: string;
}
/**
 * GetKeyRotationStatus - 查询密钥自动轮转状态。
 */
export interface GetKeyRotationStatusRequest {
    /**
     * 密钥资源长 ID 或别名。
     */
    KeyId: string;
    /**
     * UKMS 实例资源 ID。
     */
    ResourceId: string;
}
/**
 * GetKeyRotationStatus - 查询密钥自动轮转状态。
 */
export interface GetKeyRotationStatusResponse {
    /**
     * 是否开启自动轮转。取值：true、false。
     */
    KeyRotationEnabled: boolean;
    /**
     * 密钥资源长 ID。
     */
    KeyId: string;
    /**
     * 轮转周期，单位天；未开启时返回 0。
     */
    RotationPeriodInDays: number;
    /**
     * 下次轮转时间，Unix 时间戳。
     */
    NextRotationDate?: number;
    /**
     * 按需轮转开始时间，Unix 时间戳。
     */
    OnDemandRotationStartDate?: number;
    /**
     * 最后一次轮转时间，Unix 时间戳。
     */
    LastRotationDate?: number;
}
/**
 * GetPublicKey - 获取非对称密钥的公钥。
 */
export interface GetPublicKeyRequest {
    /**
     * 密钥 ID 或 别名。
     */
    KeyId: string;
    /**
     * UKMS 实例资源 ID。
     */
    ResourceId?: string;
}
/**
 * GetPublicKey - 获取非对称密钥的公钥。
 */
export interface GetPublicKeyResponse {
    /**
     * 密钥 ID。
     */
    KeyId: string;
    /**
     * PEM 或 DER 编码的公钥。
     */
    KmsPublicKey: string;
    /**
     * 密钥规格。取值：SYMMETRIC_DEFAULT、RSA_2048、RSA_3072、RSA_4096、ECC_NIST_P256、ECC_NIST_P384、ECC_NIST_P521、HMAC_256、HMAC_384、HMAC_512。
     */
    KeySpec: string;
    /**
     * 密钥用途。取值：ENCRYPT_DECRYPT、SIGN_VERIFY、GENERATE_VERIFY_MAC、KEY_AGREEMENT。
     */
    KeyUsage: string[];
    /**
     * 支持的签名算法列表。取值范围：RSASSA_PSS_SHA_256、RSASSA_PSS_SHA_384、RSASSA_PSS_SHA_512、RSASSA_PKCS1_V1_5_SHA_256、RSASSA_PKCS1_V1_5_SHA_384、RSASSA_PKCS1_V1_5_SHA_512、ECDSA_SHA_256、ECDSA_SHA_384、ECDSA_SHA_512。
     */
    SigningAlgorithms?: string[];
    /**
     * 支持的加密算法列表。取值范围：RSAES_OAEP_SHA_1、RSAES_OAEP_SHA_256。
     */
    EncryptionAlgorithms?: string[];
}
/**
 * ListAliases - 获取 UKMS 实例下的别名列表。
 */
export interface ListAliasesRequest {
    /**
     * UKMS 实例资源 ID。
     */
    ResourceId?: string;
    /**
     * 可选：筛选指定密钥资源长 ID 的别名。
     */
    KeyId?: string;
    /**
     * 列表起始位置偏移量。
     */
    Offset?: number;
    /**
     * 返回数据长度。
     */
    Limit?: number;
    /**
     * 按完整别名（含 alias/ 前缀）进行子串模糊匹配
     */
    Alias?: string;
    /**
     * 排序字段
     */
    OrderBy?: string;
    /**
     * 排序方向，默认 desc
     */
    Sort?: string;
}
/**
 * ListAliases - 获取 UKMS 实例下的别名列表。
 */
export interface ListAliasesResponse {
    /**
     * 别名总数。
     */
    TotalCount: number;
    /**
     * 别名列表，每项为 AliasInfo。
     */
    Aliases: {
        /**
         * 别名，含 alias/ 前缀。
         */
        AliasName: string;
        /**
         * 别名指向的密钥资源长 ID。
         */
        TargetKeyId: string;
        /**
         * 创建时间，Unix 时间戳。
         */
        CreationDate: number;
        /**
         * 最后更新时间，Unix 时间戳。
         */
        LastUpdatedDate: number;
    }[];
}
/**
 * ListKeys - 查询用户的主密钥信息列表。
 */
export interface ListKeysRequest {
    /**
     * UKMS 实例资源 ID。
     */
    ResourceId?: string;
    /**
     * 按密钥 ID 或别名模糊过滤。
     */
    Alias?: string;
    /**
     * 列表起始位置偏移量。
     */
    Offset?: number;
    /**
     * 返回数据长度。最大1000
     */
    Limit?: number;
    /**
     * 状态筛选：Active、Deactivated、PendingDeletion
     */
    Status?: string;
    /**
     * 排序字段
     */
    OrderBy?: string;
    /**
     * 排序方向，默认 desc
     */
    Sort?: string;
}
/**
 * ListKeys - 查询用户的主密钥信息列表。
 */
export interface ListKeysResponse {
    /**
     * 密钥信息数组，每项为 DEK/ListKeys item。
     */
    Data: {
        /**
         * 密钥所属项目的对外别名，格式为 org-xxx。该值由项目数字 ID 解析得到，可能因项目别名查询失败而为空。
         */
        ProjectId?: string;
        /**
         * 对外主密钥 ID（ukms_key_info.key_id）。
         */
        KeyId: string;
        /**
         * 密钥规格。取值：SYMMETRIC_DEFAULT、RSA_2048、RSA_3072、RSA_4096、ECC_NIST_P256、ECC_NIST_P384、ECC_NIST_P521、HMAC_256、HMAC_384、HMAC_512。
         */
        KeySpec: string;
        /**
         * 按 KeySpec 派生的密钥用途。取值：ENCRYPT_DECRYPT、SIGN_VERIFY、GENERATE_VERIFY_MAC、KEY_AGREEMENT。
         */
        KeyUsage: string[];
        /**
         * 密钥来源，由 Origin 派生。取值：UCLOUD_KMS、EXTERNAL。当前 CreateKey 仅支持 UCLOUD_KMS。
         */
        Origin: string;
        /**
         * 数据库密钥状态。常见取值：Active、Deactivated、PendingDeletion。
         */
        Status: string;
        /**
         * 创建时间，Unix 时间戳。
         */
        CreatedTime: number;
        /**
         * 更新时间，Unix 时间戳。
         */
        UpdateTime: number;
        /**
         * 是否已开启自动轮转；未配置或已关闭均为 false
         */
        KeyRotationEnabled: boolean;
        /**
         * 自动轮转周期(天)；未开启时为 0
         */
        RotationPeriodInDays: number;
        /**
         * 密钥所属的 UKMS 实例资源 ID。
         */
        ResourceId: string;
        /**
         * 密钥描述。
         */
        Description?: string;
        /**
         * 计划删除时间，Unix 时间戳。
         */
        PlanDeleteTime?: number;
        /**
         * 下次自动轮转时间（Unix 时间戳，秒）；仅在已开启自动轮转时返回。
         */
        NextRotationDate?: number;
        /**
         * 密钥所属组织的数字 ID，来源于密钥关联的资源交易记录。
         */
        OrganizationId?: number;
    }[];
    /**
     * 符合条件的总数，不同于 Limit。
     */
    TotalCount: number;
}
/**
 * RotateKeyOnDemand - 立即触发一次密钥轮转。
 */
export interface RotateKeyOnDemandRequest {
    /**
     * 密钥 ID 或别名。
     */
    KeyId: string;
    /**
     * UKMS 实例资源 ID。
     */
    ResourceId: string;
}
/**
 * RotateKeyOnDemand - 立即触发一次密钥轮转。
 */
export interface RotateKeyOnDemandResponse {
    /**
     * 密钥 ID。
     */
    KeyId: string;
}
/**
 * ScheduleKeyDeletion - 计划删除指定密钥。
 */
export interface ScheduleKeyDeletionRequest {
    /**
     * 密钥资源长 ID
     */
    KeyId: string;
    /**
     * UKMS 实例资源 ID。
     */
    ResourceId?: string;
    /**
     * 删除等待天数，取值范围为 7~30 天；未填写时默认为 30 天。
     */
    DeleteDay?: number;
}
/**
 * ScheduleKeyDeletion - 计划删除指定密钥。
 */
export interface ScheduleKeyDeletionResponse {
}
/**
 * Sign - 使用非对称密钥对消息或消息摘要签名。
 */
export interface SignRequest {
    /**
     * 密钥资源长 ID 或别名。
     */
    KeyId: string;
    /**
     * 待签名消息，Base64 编码，最大 4096 字节。
     */
    SigningMessage: string;
    /**
     * 签名算法。可选值：RSASSA_PSS_SHA_256、RSASSA_PSS_SHA_384、RSASSA_PSS_SHA_512、RSASSA_PKCS1_V1_5_SHA_256、RSASSA_PKCS1_V1_5_SHA_384、RSASSA_PKCS1_V1_5_SHA_512、ECDSA_SHA_256、ECDSA_SHA_384、ECDSA_SHA_512；须与密钥 KeySpec 匹配。
     */
    SigningAlgorithm: string;
    /**
     * UKMS 实例资源 ID。
     */
    ResourceId?: string;
    /**
     * 消息类型。可选值：RAW、DIGEST；默认 RAW。
     */
    MessageType?: string;
}
/**
 * Sign - 使用非对称密钥对消息或消息摘要签名。
 */
export interface SignResponse {
    /**
     * 签名结果，Base64 编码。
     */
    SignatureResult: string;
    /**
     * 密钥资源长 ID。
     */
    KeyId: string;
    /**
     * 实际使用的签名算法。取值：RSASSA_PSS_SHA_256、RSASSA_PSS_SHA_384、RSASSA_PSS_SHA_512、RSASSA_PKCS1_V1_5_SHA_256、RSASSA_PKCS1_V1_5_SHA_384、RSASSA_PKCS1_V1_5_SHA_512、ECDSA_SHA_256、ECDSA_SHA_384、ECDSA_SHA_512。
     */
    SigningAlgorithm: string;
}
/**
 * UpdateAlias - 将别名更新到另一个密钥。
 */
export interface UpdateAliasRequest {
    /**
     * 密钥别名，格式为 alias/name。
     */
    AliasName: string;
    /**
     * 密钥 ID 或别名。
     */
    KeyId: string;
    /**
     * UKMS 实例资源 ID。
     */
    ResourceId?: string;
}
/**
 * UpdateAlias - 将别名更新到另一个密钥。
 */
export interface UpdateAliasResponse {
}
/**
 * UpdateKeyDescription - 更新指定密钥的描述信息。
 */
export interface UpdateKeyDescriptionRequest {
    /**
     * 密钥资源长 ID或别名。
     */
    KeyId: string;
    /**
     * 新的密钥描述，最多 8192 字符；空字符串表示清空描述。
     */
    Description: string;
    /**
     * UKMS 实例资源 ID。
     */
    ResourceId?: string;
}
/**
 * UpdateKeyDescription - 更新指定密钥的描述信息。
 */
export interface UpdateKeyDescriptionResponse {
    /**
     * 返回状态。
     */
    Status?: string;
    /**
     * 此次请求唯一标识符。
     */
    RequestUuid?: string;
}
/**
 * Verify - 使用非对称密钥验证签名。
 */
export interface VerifyRequest {
    /**
     * 密钥 ID或别名。
     */
    KeyId: string;
    /**
     * 待验签的消息或消息摘要，Base64 编码。
     */
    SigningMessage: string;
    /**
     * 待验证的签名，Base64 编码。
     */
    SignatureResult: string;
    /**
     * 签名时使用的算法。可选值：RSASSA_PSS_SHA_256、RSASSA_PSS_SHA_384、RSASSA_PSS_SHA_512、RSASSA_PKCS1_V1_5_SHA_256、RSASSA_PKCS1_V1_5_SHA_384、RSASSA_PKCS1_V1_5_SHA_512、ECDSA_SHA_256、ECDSA_SHA_384、ECDSA_SHA_512；须与密钥 KeySpec 匹配。
     */
    SigningAlgorithm: string;
    /**
     * UKMS 实例资源 ID。
     */
    ResourceId?: string;
    /**
     * 消息类型。可选值：RAW、DIGEST；默认 RAW。
     */
    MessageType?: string;
}
/**
 * Verify - 使用非对称密钥验证签名。
 */
export interface VerifyResponse {
    /**
     * 密钥 ID。
     */
    KeyId: string;
    /**
     * 签名是否有效。
     */
    SignatureValid: boolean;
    /**
     * 使用的签名算法。取值：RSASSA_PSS_SHA_256、RSASSA_PSS_SHA_384、RSASSA_PSS_SHA_512、RSASSA_PKCS1_V1_5_SHA_256、RSASSA_PKCS1_V1_5_SHA_384、RSASSA_PKCS1_V1_5_SHA_512、ECDSA_SHA_256、ECDSA_SHA_384、ECDSA_SHA_512。
     */
    SigningAlgorithm: string;
}
/**
 * VerifyMac - 验证指定消息、HMAC KMS 密钥和 MAC 算法的基于哈希的消息认证码 (HMAC)。为了验证 HMAC，VerifyMac 会使用您指定的消息、HMAC KMS 密钥和 MAC 算法计算 HMAC，并将计算出的 HMAC 与您指定的 HMAC 进行比较。如果两个 HMAC 完全相同，则验证成功；否则，验证失败。  验证结果表明，自计算 HMAC 以来，消息未发生更改，并且使用了指定的密钥来生成和验证 HMAC。
 */
export interface VerifyMacRequest {
    /**
     * 密钥ID
     */
    KeyId: string;
    /**
     * 用于验证的消息。请输入与生成 HMAC 时所用消息相同的消息。
     */
    MacMessage: string;
    /**
     * 要验证的 HMAC。请输入由 GenerateMac 操作生成的 HMAC，前提是您指定的消息、HMAC KMS 密钥和 MAC 算法与此请求中指定的值相同。
     */
    Mac: string;
    /**
     * 验证过程中将使用的 MAC 算法。请输入与计算 HMAC 时相同的 MAC 算法。此算法必须受 KeyId 参数标识的 HMAC KMS 密钥支持。
     */
    MacAlgorithm: string;
}
/**
 * VerifyMac - 验证指定消息、HMAC KMS 密钥和 MAC 算法的基于哈希的消息认证码 (HMAC)。为了验证 HMAC，VerifyMac 会使用您指定的消息、HMAC KMS 密钥和 MAC 算法计算 HMAC，并将计算出的 HMAC 与您指定的 HMAC 进行比较。如果两个 HMAC 完全相同，则验证成功；否则，验证失败。  验证结果表明，自计算 HMAC 以来，消息未发生更改，并且使用了指定的密钥来生成和验证 HMAC。
 */
export interface VerifyMacResponse {
    /**
     * 密钥ID
     */
    KeyId?: string;
    /**
     * 验证中使用的 MAC 算法。
     */
    MacAlgorithm?: string;
    /**
     * 一个布尔值，表示 HMAC 是否已验证。
     */
    MacValid?: boolean;
}
