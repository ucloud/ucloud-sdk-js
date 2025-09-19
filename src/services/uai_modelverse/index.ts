import Client from '../../core/client';
import Request from '../../core/request';
import { ConfigOptions } from '../../core/config';
import { CredentialOptions } from '../../core/credential';

/**
 * This client is used to call actions of **uai_modelverse** service
 */
export default class UAIModelverseClient extends Client {
  constructor({
    config,
    credential,
  }: {
    config: ConfigOptions;
    credential: CredentialOptions;
  }) {
    super({ config, credential });
  }

  /**
   * CreateUMInferAPIKey - 创建apikey
   *
   * See also: https://docs.ucloud.cn/api/uai-modelverse-api/create_um_infer_api_key
   */
  createUMInferAPIKey(
    request?: CreateUMInferAPIKeyRequest
  ): Promise<CreateUMInferAPIKeyResponse> {
    const args = { Action: 'CreateUMInferAPIKey', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as CreateUMInferAPIKeyResponse
    );
  }

  /**
   * DeleteUMInferAPIKey - 删除apikey
   *
   * See also: https://docs.ucloud.cn/api/uai-modelverse-api/delete_um_infer_api_key
   */
  deleteUMInferAPIKey(
    request?: DeleteUMInferAPIKeyRequest
  ): Promise<DeleteUMInferAPIKeyResponse> {
    const args = { Action: 'DeleteUMInferAPIKey', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DeleteUMInferAPIKeyResponse
    );
  }

  /**
   * GetUMInferAPIModel - 获取该apikey能调用api的模型列表
   *
   * See also: https://docs.ucloud.cn/api/uai-modelverse-api/get_um_infer_api_model
   */
  getUMInferAPIModel(
    request?: GetUMInferAPIModelRequest
  ): Promise<GetUMInferAPIModelResponse> {
    const args = { Action: 'GetUMInferAPIModel', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as GetUMInferAPIModelResponse
    );
  }

  /**
   * GetUMInferService - 获取模型服务
   *
   * See also: https://docs.ucloud.cn/api/uai-modelverse-api/get_um_infer_service
   */
  getUMInferService(
    request?: GetUMInferServiceRequest
  ): Promise<GetUMInferServiceResponse> {
    const args = { Action: 'GetUMInferService', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as GetUMInferServiceResponse
    );
  }

  /**
   * GetUMInferTokenUsage - 获取某个key下的某个模型的token使用量
   *
   * See also: https://docs.ucloud.cn/api/uai-modelverse-api/get_um_infer_token_usage
   */
  getUMInferTokenUsage(
    request?: GetUMInferTokenUsageRequest
  ): Promise<GetUMInferTokenUsageResponse> {
    const args = { Action: 'GetUMInferTokenUsage', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as GetUMInferTokenUsageResponse
    );
  }

  /**
   * ListUFSquareModel - 查询模型广场数据
   *
   * See also: https://docs.ucloud.cn/api/uai-modelverse-api/list_uf_square_model
   */
  listUFSquareModel(
    request?: ListUFSquareModelRequest
  ): Promise<ListUFSquareModelResponse> {
    const args = { Action: 'ListUFSquareModel', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as ListUFSquareModelResponse
    );
  }

  /**
   * ListUFSquareModelLen - 获取模型广场上下文长度列表
   *
   * See also: https://docs.ucloud.cn/api/uai-modelverse-api/list_uf_square_model_len
   */
  listUFSquareModelLen(
    request?: ListUFSquareModelLenRequest
  ): Promise<ListUFSquareModelLenResponse> {
    const args = { Action: 'ListUFSquareModelLen', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as ListUFSquareModelLenResponse
    );
  }

  /**
   * ListUMInferAPIKey - 列表查询apikey
   *
   * See also: https://docs.ucloud.cn/api/uai-modelverse-api/list_um_infer_api_key
   */
  listUMInferAPIKey(
    request?: ListUMInferAPIKeyRequest
  ): Promise<ListUMInferAPIKeyResponse> {
    const args = { Action: 'ListUMInferAPIKey', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as ListUMInferAPIKeyResponse
    );
  }

  /**
   * UpdateUMInferAPIKey - 更新apikey
   *
   * See also: https://docs.ucloud.cn/api/uai-modelverse-api/update_um_infer_api_key
   */
  updateUMInferAPIKey(
    request?: UpdateUMInferAPIKeyRequest
  ): Promise<UpdateUMInferAPIKeyResponse> {
    const args = { Action: 'UpdateUMInferAPIKey', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as UpdateUMInferAPIKeyResponse
    );
  }
}

/**
 * CreateUMInferAPIKey - 创建apikey
 */
export interface CreateUMInferAPIKeyRequest {
  /**
   * apikey名称
   */
  Name: string;
}

/**
 * CreateUMInferAPIKey - 创建apikey
 */
export interface CreateUMInferAPIKeyResponse {
  /**
   * apikey
   */
  Data?: {
    /**
     * 资源ID
     */
    KeyId?: string;
    /**
     * 名称
     */
    Name?: string;
    /**
     * 渠道id
     */
    ChannelId?: number;
    /**
     * 公司id
     */
    TopOrganizationId?: number;
    /**
     * 项目id
     */
    OrganizationId?: number;
    /**
     * 状态，1 正常
     */
    Status?: number;
    /**
     * 创建时间
     */
    CreateTime?: number;
    /**
     * 密钥值
     */
    Key?: string;
    /**
     * 过期时间的unix时间戳，-1 用不过期
     */
    ExpireTime?: number;
    /**
     * 授权的模型，英文逗号分隔，all表示所有模型都有权限
     */
    GrantedModels?: string;
  };
}

/**
 * DeleteUMInferAPIKey - 删除apikey
 */
export interface DeleteUMInferAPIKeyRequest {
  /**
   * 要删除的apikey id
   */
  KeyId: string;
}

/**
 * DeleteUMInferAPIKey - 删除apikey
 */
export interface DeleteUMInferAPIKeyResponse {
  /**
   * apikey 的资源ID
   */
  UminferID?: string;
}

/**
 * GetUMInferAPIModel - 获取该apikey能调用api的模型列表
 */
export interface GetUMInferAPIModelRequest {
  /**
   * apikey 的id
   */
  KeyId?: string;
  /**
   * 模型类型，1: 文本生成，2: 图片生成。
   */
  ModelType?: number;
  /**
   * 模型广场的id，用来跳转体验中心
   */
  SquareId?: string;
}

/**
 * GetUMInferAPIModel - 获取该apikey能调用api的模型列表
 */
export interface GetUMInferAPIModelResponse {
  /**
   * 模型名称的字符串列表
   */
  Data: {
    /**
     * 使用OpenAI接口调用时，填入的 model值
     */
    ServedModelName?: string;
    /**
     * id
     */
    Id?: string;
    /**
     * 名称
     */
    Name?: string;
    /**
     * 描述
     */
    SimpleDescribe?: string;
    /**
     * 语言
     */
    Language?: string[];
    /**
     * 图标链接
     */
    Icon?: string;
    /**
     * 模型价格
     */
    Pricing?: {
      /**
       * 输出定价
       */
      Completion?: number;
      /**
       * 提示词定价
       */
      Prompt?: number;
      /**
       * 生图定价
       */
      Image?: number;
      /**
       * 币种
       */
      Currency?: string;
    };
    /**
     * 创建时间
     */
    CreateAt?: number;
    /**
     * 更新时间
     */
    UpdateAt?: number;
  }[];
}

/**
 * GetUMInferService - 获取模型服务
 */
export interface GetUMInferServiceRequest {
  /**
   * 推理服务id
   */
  UminferID?: string;
  /**
   * offset
   */
  Offset?: string;
  /**
   * limit
   */
  Limit?: string;
  /**
   * 默认preDeploy,可获取DeepSeek Key
   */
  UminferType?: string;
}

/**
 * GetUMInferService - 获取模型服务
 */
export interface GetUMInferServiceResponse {
  /**
   * 推理服务数据
   */
  Data: {
    /**
     * 副本数
     */
    Replicas?: number;
    /**
     * 实际启动的副本数
     */
    ReadyReplicas?: number;
    /**
     * 算力单元
     */
    ComputingUnit?: number;
    /**
     * 推理服务资源id
     */
    UminferID?: string;
    /**
     * 推理服务资源类型
     */
    UminferType?: string;
    /**
     * 服务状态
     */
    Status?: string;
    /**
     * 服务的url
     */
    URL?: string;
    /**
     * 服务名字
     */
    Name?: string;
    /**
     * 创建时间
     */
    CreateTime?: number;
    /**
     * 模型id
     */
    ModelID?: string;
    /**
     * 模型名字
     */
    ModelName?: string;
    /**
     * 描述
     */
    Describe?: string;
    /**
     * 模型认证key
     */
    Key?: string;
  }[];
  /**
   * 模型数量
   */
  TotalCount?: number;
}

/**
 * GetUMInferTokenUsage - 获取某个key下的某个模型的token使用量
 */
export interface GetUMInferTokenUsageRequest {
  /**
   * apikey的id
   */
  KeyId: string;
  /**
   * 模型名称
   */
  Model: string;
  /**
   * 开始时间戳
   */
  StartTime: number;
  /**
   * 结束时间戳
   */
  EndTime: number;
}

/**
 * GetUMInferTokenUsage - 获取某个key下的某个模型的token使用量
 */
export interface GetUMInferTokenUsageResponse {
  /**
   * token使用详情
   */
  Data: {
    /**
     * 总token量
     */
    Total?: number;
    /**
     * 输出总token
     */
    InTotal?: number;
    /**
     * 输出总token
     */
    OutTotal?: number;
    /**
     * 生图总张数
     */
    ImageGenerationNum?: number;
    /**
     * 请求总次数
     */
    RequestTotal?: number;
    /**
     * 每个时间戳的token使用量
     */
    Usages?: {
      /**
       * 类型，in输入 out输出 total总  request_count 请求次数 image_generation 生图张数
       */
      Type?: string;
      /**
       * 数量
       */
      Count?: number;
      /**
       * unix时间戳
       */
      Timestamp?: number;
      /**
       * 模型名称
       */
      Model?: string;
    }[];
  };
}

/**
 * ListUFSquareModel - 查询模型广场数据
 */
export interface ListUFSquareModelRequest {
  /**
   * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
   */
  Zone?: string;
  /**
   * 模型类型
   */
  ModelType?: string;
  /**
   * 关键字
   */
  Keyword?: string;
  /**
   * 偏移量
   */
  Offset?: number;
  /**
   * 每页数量
   */
  Limit?: number;
  /**
   * 排序字段
   */
  OrderBy?: string;
  /**
   * 排序顺序，默认倒序
   */
  Order?: string;
  /**
   * 上下文长度，数组类型，可选值 [0,4096,16384,32768,131072,256000,262144,1048576]
   */
  MaxModelLen?: number[];
  /**
   * 语言，数组类型，可选值 ["chinese", "english"]
   */
  Language?: string[];
}

/**
 * ListUFSquareModel - 查询模型广场数据
 */
export interface ListUFSquareModelResponse {
  /**
   * 总数
   */
  TotalCount: number;
  /**
   * 广场模型
   */
  SquareModels: {
    /**
     * 主键
     */
    Id?: string;
    /**
     * 名称
     */
    Name?: string;
    /**
     * 简要描述
     */
    SimpleDescribe?: string;
    /**
     * 详细描述
     */
    Describe?: string;
    /**
     * 语言
     */
    Language?: string[];
    /**
     * 模型长度
     */
    MaxModelLen?: number;
    /**
     * 模型类型
     */
    ModelType?: string;
    /**
     * HuggingFace 更新时间
     */
    HfUpdateTime?: number;
    /**
     * 创建时间
     */
    CreateAt?: number;
    /**
     * 更新时间
     */
    UpdateAt?: number;
    /**
     * 模型能力
     */
    SupportedCapabilities?: string[];
    /**
     * 图标
     */
    Icon?: string;
    /**
     * 定价策略
     */
    Pricing?: {
      /**
       * 输出定价
       */
      Completion?: number;
      /**
       * 提示词定价
       */
      Prompt?: number;
      /**
       * 生图定价
       */
      Image?: number;
      /**
       * 币种
       */
      Currency?: string;
    };
  }[];
}

/**
 * ListUFSquareModelLen - 获取模型广场上下文长度列表
 */
export interface ListUFSquareModelLenRequest {}

/**
 * ListUFSquareModelLen - 获取模型广场上下文长度列表
 */
export interface ListUFSquareModelLenResponse {
  /**
   * 模型上下文长度列表
   */
  MaxModelLens: number[];
}

/**
 * ListUMInferAPIKey - 列表查询apikey
 */
export interface ListUMInferAPIKeyRequest {
  /**
   * 列表起始位置偏移量，默认为0
   */
  Offset?: number;
  /**
   * 返回数据长度，默认为20，最大100
   */
  Limit?: number;
}

/**
 * ListUMInferAPIKey - 列表查询apikey
 */
export interface ListUMInferAPIKeyResponse {
  /**
   * apikey
   */
  Data: {
    /**
     * 资源ID
     */
    KeyId?: string;
    /**
     * 名称
     */
    Name?: string;
    /**
     * 渠道id
     */
    ChannelId?: number;
    /**
     * 公司id
     */
    TopOrganizationId?: number;
    /**
     * 项目id
     */
    OrganizationId?: number;
    /**
     * 状态，1 正常
     */
    Status?: number;
    /**
     * 创建时间
     */
    CreateTime?: number;
    /**
     * 密钥值
     */
    Key?: string;
    /**
     * 过期时间的unix时间戳，-1 用不过期
     */
    ExpireTime?: number;
    /**
     * 授权的模型，英文逗号分隔，all表示所有模型都有权限
     */
    GrantedModels?: string;
  }[];
}

/**
 * UpdateUMInferAPIKey - 更新apikey
 */
export interface UpdateUMInferAPIKeyRequest {
  /**
   * apikey的id
   */
  KeyId: string;
  /**
   * 更新的名称
   */
  Name: string;
}

/**
 * UpdateUMInferAPIKey - 更新apikey
 */
export interface UpdateUMInferAPIKeyResponse {
  /**
   * apikey 的id
   */
  UminferID?: string;
}
