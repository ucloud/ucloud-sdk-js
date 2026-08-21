import Client from '../../core/client';
import Request from '../../core/request';
import { ConfigOptions } from '../../core/config';
import { CredentialOptions } from '../../core/credential';

/**
 * This client is used to call actions of **cloudwatch** service
 */
export default class CloudWatchClient extends Client {
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
   * BindAlertStrategy - 绑定告警策略
   *
   * See also: https://docs.ucloud.cn/api/cloudwatch-api/bind_alert_strategy
   */
  bindAlertStrategy(
    request?: BindAlertStrategyRequest
  ): Promise<BindAlertStrategyResponse> {
    const args = { Action: 'BindAlertStrategy', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as BindAlertStrategyResponse
    );
  }

  /**
   * CreateAlertStrategy - 创建告警策略
   *
   * See also: https://docs.ucloud.cn/api/cloudwatch-api/create_alert_strategy
   */
  createAlertStrategy(
    request?: CreateAlertStrategyRequest
  ): Promise<CreateAlertStrategyResponse> {
    const args = { Action: 'CreateAlertStrategy', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as CreateAlertStrategyResponse
    );
  }

  /**
   * CreateAlertStrategyTemplate - 新建条件模板
   *
   * See also: https://docs.ucloud.cn/api/cloudwatch-api/create_alert_strategy_template
   */
  createAlertStrategyTemplate(
    request?: CreateAlertStrategyTemplateRequest
  ): Promise<CreateAlertStrategyTemplateResponse> {
    const args = { Action: 'CreateAlertStrategyTemplate', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as CreateAlertStrategyTemplateResponse
    );
  }

  /**
   * DeleteAlertStrategyTemplate - 删除告警条件模板
   *
   * See also: https://docs.ucloud.cn/api/cloudwatch-api/delete_alert_strategy_template
   */
  deleteAlertStrategyTemplate(
    request?: DeleteAlertStrategyTemplateRequest
  ): Promise<DeleteAlertStrategyTemplateResponse> {
    const args = { Action: 'DeleteAlertStrategyTemplate', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as DeleteAlertStrategyTemplateResponse
    );
  }

  /**
   * EnableAlertStrategy - 是否启用告警策略
   *
   * See also: https://docs.ucloud.cn/api/cloudwatch-api/enable_alert_strategy
   */
  enableAlertStrategy(
    request?: EnableAlertStrategyRequest
  ): Promise<EnableAlertStrategyResponse> {
    const args = { Action: 'EnableAlertStrategy', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as EnableAlertStrategyResponse
    );
  }

  /**
   * GetMetricDataAggregationMethod - 获取指标数据聚合方式
   *
   * See also: https://docs.ucloud.cn/api/cloudwatch-api/get_metric_data_aggregation_method
   */
  getMetricDataAggregationMethod(
    request?: GetMetricDataAggregationMethodRequest
  ): Promise<GetMetricDataAggregationMethodResponse> {
    const args = {
      Action: 'GetMetricDataAggregationMethod',
      ...(request || {}),
    };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as GetMetricDataAggregationMethodResponse
    );
  }

  /**
   * GetProductMetrics - 获取云产品关联的指标列表
   *
   * See also: https://docs.ucloud.cn/api/cloudwatch-api/get_product_metrics
   */
  getProductMetrics(
    request?: GetProductMetricsRequest
  ): Promise<GetProductMetricsResponse> {
    const args = { Action: 'GetProductMetrics', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as GetProductMetricsResponse
    );
  }

  /**
   * ListAlertRecord - 获取时间段内的告警记录
   *
   * See also: https://docs.ucloud.cn/api/cloudwatch-api/list_alert_record
   */
  listAlertRecord(
    request?: ListAlertRecordRequest
  ): Promise<ListAlertRecordResponse> {
    const args = { Action: 'ListAlertRecord', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as ListAlertRecordResponse
    );
  }

  /**
   * ListAlertStrategy - 获取告警策略列表
   *
   * See also: https://docs.ucloud.cn/api/cloudwatch-api/list_alert_strategy
   */
  listAlertStrategy(
    request?: ListAlertStrategyRequest
  ): Promise<ListAlertStrategyResponse> {
    const args = { Action: 'ListAlertStrategy', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as ListAlertStrategyResponse
    );
  }

  /**
   * ListAlertStrategyTemplate - 条件模板列表
   *
   * See also: https://docs.ucloud.cn/api/cloudwatch-api/list_alert_strategy_template
   */
  listAlertStrategyTemplate(
    request?: ListAlertStrategyTemplateRequest
  ): Promise<ListAlertStrategyTemplateResponse> {
    const args = { Action: 'ListAlertStrategyTemplate', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as ListAlertStrategyTemplateResponse
    );
  }

  /**
   * ListMonitorProduct - 获取监控对象类型列表
   *
   * See also: https://docs.ucloud.cn/api/cloudwatch-api/list_monitor_product
   */
  listMonitorProduct(
    request?: ListMonitorProductRequest
  ): Promise<ListMonitorProductResponse> {
    const args = { Action: 'ListMonitorProduct', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as ListMonitorProductResponse
    );
  }

  /**
   * ModifyAlertStrategyRemark - 修改告警策略备注
   *
   * See also: https://docs.ucloud.cn/api/cloudwatch-api/modify_alert_strategy_remark
   */
  modifyAlertStrategyRemark(
    request?: ModifyAlertStrategyRemarkRequest
  ): Promise<ModifyAlertStrategyRemarkResponse> {
    const args = { Action: 'ModifyAlertStrategyRemark', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as ModifyAlertStrategyRemarkResponse
    );
  }

  /**
   * QueryMetricDataSet - 查询监控指标数据集
   *
   * See also: https://docs.ucloud.cn/api/cloudwatch-api/query_metric_data_set
   */
  queryMetricDataSet(
    request?: QueryMetricDataSetRequest
  ): Promise<QueryMetricDataSetResponse> {
    const args = { Action: 'QueryMetricDataSet', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as QueryMetricDataSetResponse
    );
  }

  /**
   * QueryMetricDataSummary - 获取资源看图属性列表
   *
   * See also: https://docs.ucloud.cn/api/cloudwatch-api/query_metric_data_summary
   */
  queryMetricDataSummary(
    request?: QueryMetricDataSummaryRequest
  ): Promise<QueryMetricDataSummaryResponse> {
    const args = { Action: 'QueryMetricDataSummary', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as QueryMetricDataSummaryResponse
    );
  }

  /**
   * UnBindAlertStrategy - 解绑告警策略
   *
   * See also: https://docs.ucloud.cn/api/cloudwatch-api/un_bind_alert_strategy
   */
  unBindAlertStrategy(
    request?: UnBindAlertStrategyRequest
  ): Promise<UnBindAlertStrategyResponse> {
    const args = { Action: 'UnBindAlertStrategy', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as UnBindAlertStrategyResponse
    );
  }

  /**
   * UpdateAlertStrategy - 更新告警策略
   *
   * See also: https://docs.ucloud.cn/api/cloudwatch-api/update_alert_strategy
   */
  updateAlertStrategy(
    request?: UpdateAlertStrategyRequest
  ): Promise<UpdateAlertStrategyResponse> {
    const args = { Action: 'UpdateAlertStrategy', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as UpdateAlertStrategyResponse
    );
  }

  /**
   * UpdateAlertStrategyTemplate - 编辑条件模板
   *
   * See also: https://docs.ucloud.cn/api/cloudwatch-api/update_alert_strategy_template
   */
  updateAlertStrategyTemplate(
    request?: UpdateAlertStrategyTemplateRequest
  ): Promise<UpdateAlertStrategyTemplateResponse> {
    const args = { Action: 'UpdateAlertStrategyTemplate', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as UpdateAlertStrategyTemplateResponse
    );
  }
}

/**
 * BindAlertStrategy - 绑定告警策略
 */
export interface BindAlertStrategyRequest {
  /**
   * 告警策略id数组
   */
  AlertStrategyIDs: number[];
  /**
   * 资源数组
   */
  Resources: string[];
  /**
   * 产品唯一标识，参见 [产品概览](https://docs.ucloud.cn/cloudwatch/metric/intro)
   */
  ProductKey: string;
}

/**
 * BindAlertStrategy - 绑定告警策略
 */
export interface BindAlertStrategyResponse {}

/**
 * CreateAlertStrategy - 创建告警策略
 */
export interface CreateAlertStrategyRequest {
  /**
   * 告警策略名称。最大长度255个字符
   */
  Name: string;
  /**
   * 产品唯一标识，参见 [产品概览](https://docs.ucloud.cn/cloudwatch/metric/intro)
   */
  ProductKey: string;
  /**
   * 绑定资源类型1 - 资源组 2 - 资源
   */
  ObjectType: number;
  /**
   * 条件设置方式1 - 手动配置 2 - 选择模版
   */
  ConfigMode: number;
  /**
   * 绑定资源，对应绑定资源类型ObjectType=2
   */
  Resources?: string[];
  /**
   * 绑定资源组，对应绑定资源类型ObjectType=1
   */
  ResourceGroupIDs?: number[];
  /**
   * 模板id.对应ConfigMode=2时候需要填写
   */
  TemplateId?: number;
  /**
   *
   */
  RuleSet?: {
    /**
     * 规则指标ID。参考该类型产品下返回的指标列表GetProductMetrics
     */
    MetricID?: number;
    /**
     * 阈值比较方式。 枚举值：1：>= 2：<= 3：> 4：< 5：== 6：!=
     */
    ThresholdCompare?: number;
    /**
     * 触发阈值
     */
    ThresholdValue?: number;
    /**
     * 触发次数
     */
    TriggerCount?: number;
    /**
     * 触发周期。枚举值continuous - 连续exponent - 指数single - 不重复
     */
    SendPeriodType?: string;
    /**
     * 告警等级。枚举值：P0,P1,P2,P3
     */
    Level?: string;
    /**
     * 告警状态。枚举值0 - 关闭1 - 开启
     */
    Status?: number;
    /**
     * 沉默周期(告警周期选择为连续时必填)
     */
    SendInterval?: number;
  }[];
  /**
   * 通知类型。枚举值： group - 通知组 user - 通知人
   */
  NotifyType?: string;
  /**
   * 通知人id
   */
  NotifyUserIDs?: number[];
  /**
   * 通知人组id
   */
  NotifyGroupIDs?: number[];
  /**
   * 通知渠道。枚举值：sms - 短信email - 邮件webhook - 回调
   */
  NotifyChannelDs?: string[];
  /**
   * 当通知渠道=回调webhook时，需要设置回调语言。枚举值：cn - 中文en - 英文
   */
  CallbackLanguage?: string;
  /**
   * 回调URL地址
   */
  CallbackUrls?: string[];
  /**
   * 通知模板id
   */
  NotifyTemplateId?: string;
}

/**
 * CreateAlertStrategy - 创建告警策略
 */
export interface CreateAlertStrategyResponse {
  /**
   * 创建告警策略返回对象
   */
  Data?: {
    /**
     * 告警策略id
     */
    AlertStrategyID?: number;
  };
}

/**
 * CreateAlertStrategyTemplate - 新建条件模板
 */
export interface CreateAlertStrategyTemplateRequest {
  /**
   * 告警模板名称。最大长度64个字符
   */
  Name: string;
  /**
   * 产品唯一标识，参见 [产品概览](https://docs.ucloud.cn/cloudwatch/metric/intro)
   */
  ProductKey: string;
  /**
   *
   */
  RuleSet?: {
    /**
     * 规则指标ID。参考该类型产品下返回的指标列表GetProductMetrics
     */
    MetricID: number;
    /**
     * 阈值比较方式。枚举值: 1：>= 2：<= 3：> 4：< 5：== 6：!=
     */
    ThresholdCompare: number;
    /**
     * 触发阈值
     */
    ThresholdValue: number;
    /**
     * 触发次数
     */
    TriggerCount: number;
    /**
     * 触发周期。枚举值：continuous连续 exponent 指数 single 不重复
     */
    SendPeriodType: string;
    /**
     * 告警等级。枚举值：P0,P1,P2,P3
     */
    Level: string;
    /**
     * 告警状态。枚举值：0-关闭 1-开启
     */
    Status: number;
    /**
     * 沉默周期(告警周期选择为连续时必填)
     */
    SendInterval?: number;
  }[];
  /**
   * 备注
   */
  Remark?: string;
}

/**
 * CreateAlertStrategyTemplate - 新建条件模板
 */
export interface CreateAlertStrategyTemplateResponse {
  /**
   * 创建告警模板返回对象
   */
  Data?: {
    /**
     * 告警模板ID
     */
    TemplateID: number;
  };
}

/**
 * DeleteAlertStrategyTemplate - 删除告警条件模板
 */
export interface DeleteAlertStrategyTemplateRequest {
  /**
   * 告警模板ID(支持批量删除)
   */
  TemplateID: number[];
}

/**
 * DeleteAlertStrategyTemplate - 删除告警条件模板
 */
export interface DeleteAlertStrategyTemplateResponse {
  /**
   * 删除告警模板返回对象
   */
  Data?: {
    /**
     * 模板ID
     */
    TemplateID: number[];
  };
}

/**
 * EnableAlertStrategy - 是否启用告警策略
 */
export interface EnableAlertStrategyRequest {
  /**
   * 告警策略id
   */
  AlertStrategyID: number;
  /**
   * 启用状态0 停用 1 启用
   */
  Status: number;
}

/**
 * EnableAlertStrategy - 是否启用告警策略
 */
export interface EnableAlertStrategyResponse {
  /**
   * 返回数据
   */
  Data?: {
    /**
     * 告警策略id
     */
    AlertStrategyID?: number;
  };
}

/**
 * GetMetricDataAggregationMethod - 获取指标数据聚合方式
 */
export interface GetMetricDataAggregationMethodRequest {
  /**
   * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
   */
  Zone?: string;
}

/**
 * GetMetricDataAggregationMethod - 获取指标数据聚合方式
 */
export interface GetMetricDataAggregationMethodResponse {
  /**
   * 获取指标数据聚合方式返回结果
   */
  Data: {
    /**
     * 聚合方式列表
     */
    List: {
      /**
       * 标签
       */
      Label: string;
      /**
       * 值
       */
      Value: string;
      /**
       * 是否是默认方式
       */
      IsDefault: boolean;
      /**
       * 描述
       */
      Description: string;
    }[];
  };
}

/**
 * GetProductMetrics - 获取云产品关联的指标列表
 */
export interface GetProductMetricsRequest {
  /**
   * 产品唯一标识，参见 [产品概览](https://docs.ucloud.cn/cloudwatch/metric/intro)
   */
  ProductKey: string;
}

/**
 * GetProductMetrics - 获取云产品关联的指标列表
 */
export interface GetProductMetricsResponse {
  /**
   * 返回数据
   */
  Data: {
    /**
     * 查询结果总数
     */
    Total?: number;
    /**
     * 指标列表
     */
    List?: {
      /**
       * 云产品ID
       */
      ProductType?: number;
      /**
       * 单位ID
       */
      UnitID?: number;
      /**
       * 指标ID
       */
      MetricID?: number;
      /**
       * 指标唯一标识 (uhost_cpu_usage)
       */
      Metric?: string;
      /**
       * 指标英文名称
       */
      MetricEnName?: string;
      /**
       * 指标中文名称
       */
      MetricChName?: string;
      /**
       * 指标英文描述
       */
      MetricEnDesc?: string;
      /**
       * 指标中文描述
       */
      MetricChDesc?: string;
      /**
       * 指标分类/指标组
       */
      MetricGroup?: string;
      /**
       * 上报频率毫秒
       */
      FrequencyMs?: number;
      /**
       * 单位
       */
      Unit?: {
        /**
         * 单位id
         */
        UnitID?: number;
        /**
         * GroupId
         */
        GroupId?: number;
        /**
         * 单位英文名称
         */
        UnitEnName?: string;
        /**
         * 单位中文名称
         */
        UnitChName?: string;
        /**
         * 单位描述
         */
        UnitDesc?: string;
        /**
         * 转换因子
         */
        ConversionFactor?: number;
        /**
         * 创建人
         */
        CreatedBy?: string;
        /**
         * 修改人
         */
        UpdatedBy?: string;
        /**
         * 创建时间
         */
        CreatedAt?: string;
        /**
         * 修改时间
         */
        UpdatedAt?: string;
        /**
         * 删除时间
         */
        DeletedAt?: number;
      };
      /**
       * 创建者
       */
      CreatedBy?: string;
      /**
       * 创建时间
       */
      CreatedAt?: string;
      /**
       * 修改者
       */
      UpdatedBy?: string;
      /**
       * 修改时间
       */
      UpdatedAt?: string;
    }[];
    /**
     * 单位转换信息
     */
    UnitConfigs?: {
      /**
       * 指标中文名列表
       */
      UnitCnNames?: string[];
      /**
       * 指标英文名列表
       */
      UnitEnNames?: string[];
      /**
       * 转换因子
       */
      ConversionFactor?: number;
      /**
       * 转换规则
       */
      ConversionRules?: {
        /**
         * 来源
         */
        From?: string;
        /**
         * 目标
         */
        To?: string;
        /**
         * 转换因子
         */
        ConversionFactor?: number;
      }[];
    }[];
  };
}

/**
 * ListAlertRecord - 获取时间段内的告警记录
 */
export interface ListAlertRecordRequest {
  /**
   * 开始时间，查询告警记录开始时间，不支持查询距当前时间一年前的数据)，值为10位数时间戳
   */
  StartAt: number;
  /**
   * 结束时间，查询告警记录结束时间(查询开始时间和结束时间不能超过一个月)，值为10位数时间戳
   */
  EndAt: number;
  /**
   * 模糊查询(支持资源id模糊搜索)
   */
  Fuzzy?: string;
  /**
   *
   */
  Filter?: {
    /**
     * 产品ID，根据产品类型精确搜索对应的告警记录，参见 [产品概览](https://docs.ucloud.cn/cloudwatch/metric/intro)
     */
    ProductTypes?: number[];
    /**
     * 告警级别，根据告警级别精确搜索对应的告警记录，枚举值:P0,P1,P2,P3
     */
    Levels?: string[];
    /**
     * 告警状态，根据告警状态精确搜索对应的告警记录，枚举值：firing-告警中，resolved-已恢复
     */
    Status?: string[];
  };
  /**
   * 排序(默认根据告警发生时间倒序)，枚举值：asc-升序，desc-降序
   */
  OrderType?: string;
  /**
   * 查询返回数量，默认值300，最大值：300。
   */
  Limit?: number;
  /**
   * 数据偏移量 (默认0)
   */
  Offset?: number;
}

/**
 * ListAlertRecord - 获取时间段内的告警记录
 */
export interface ListAlertRecordResponse {
  /**
   * 告警记录集合
   */
  Data?: {
    /**
     * 可用区
     */
    Region?: string;
    /**
     * 告警记录RecordID
     */
    RecordID?: number;
    /**
     * 项目ProjectID
     */
    ProjectID?: number;
    /**
     * 告警记录触发告警策略名称
     */
    StrategyName?: string;
    /**
     * 产品类型
     */
    ProductType?: number;
    /**
     * 产品类型名称
     */
    ProductName?: string;
    /**
     * 资源id
     */
    ResourceID?: string;
    /**
     * 指标id
     */
    MetricID?: number;
    /**
     * 指标名称
     */
    MetricName?: string;
    /**
     * 指标单位名称
     */
    UnitName?: string;
    /**
     * 告警记录触发告警策略Id
     */
    StrategyID?: number;
    /**
     * 告警记录触发告警规则Id
     */
    RuleID?: number;
    /**
     * 告警点tag信息
     */
    Tag?: string[];
    /**
     * 告警当前值
     */
    Value?: number;
    /**
     * 比较符
     */
    ThresholdCompare?: number;
    /**
     * 告警阈值
     */
    ThresholdValue?: number;
    /**
     * 告警屏蔽规则id(如果配置了屏蔽规则，并且满足条件)
     */
    ShieldRuleID?: number;
    /**
     * 告警等级
     */
    Level?: string;
    /**
     * 告警状态
     */
    Status?: string;
    /**
     * 告警触发时间
     */
    StartAt?: number;
    /**
     * 告警结束时间
     */
    EndAt?: number;
    /**
     * 产品相关的额外属性列表
     */
    ContentAttrList?: string[];
  }[];
  /**
   * 告警记录总数
   */
  TotalCount?: number;
}

/**
 * ListAlertStrategy - 获取告警策略列表
 */
export interface ListAlertStrategyRequest {
  /**
   * 模糊查询(支持告警策略名称模糊搜索)
   */
  Fuzzy?: string;
  /**
   *
   */
  Filter?: {
    /**
     * 产品ID，参见 [产品概览](https://docs.ucloud.cn/cloudwatch/metric/intro)
     */
    ProductTypes?: number[];
    /**
     * 告警策略id，根据策略id获取告警策略列表
     */
    AlertStrategyIDs?: number[];
    /**
     * 告警策略状态，根据告警策略状态精确搜索对应的告警策略，枚举值：0-停用，1-启用
     */
    Status?: number[];
  };
  /**
   * 资源id集合,根据资源id返回绑定的告警策略列表
   */
  Resources?: string[];
  /**
   * 查询返回数量，默认值300，最大值：300。
   */
  Limit?: number;
  /**
   * 数据偏移量 (默认0)
   */
  Offset?: number;
}

/**
 * ListAlertStrategy - 获取告警策略列表
 */
export interface ListAlertStrategyResponse {
  /**
   * 告警策略集合
   */
  Data?: {
    /**
     * 告警规则集合
     */
    RuleSet?: {
      /**
       * 规则ID
       */
      RuleID?: number;
      /**
       * 规则指标ID。参考该类型产品下返回的指标列表GetProductMetrics
       */
      MetricID?: number;
      /**
       * 指标名称
       */
      MetricName?: string;
      /**
       * 阈值比较方式枚举值比较方式:1->=2-<=3->4-<5-==6-!=
       */
      ThresholdCompare?: number;
      /**
       * 触发阈值
       */
      ThresholdValue?: number;
      /**
       * 触发次数
       */
      TriggerCount?: number;
      /**
       * 触发周期。枚举值：continuous连续 exponent 指数 single 不重复
       */
      SendPeriodType?: string;
      /**
       * 发送间隔
       */
      SendInterval?: number;
      /**
       * 告警等级。枚举值：P0,P1,P2,P3
       */
      Level?: string;
      /**
       * 告警状态。枚举值：0-关闭 1-开启
       */
      Status?: number;
      /**
       * 单位id
       */
      UnitID?: number;
      /**
       * 单位名称
       */
      UnitName?: string;
    }[];
    /**
     * 告警策略Id
     */
    AlertStrategyID?: number;
    /**
     * 告警策略名称
     */
    Name?: string;
    /**
     * 资源类型
     */
    ProductType?: number;
    /**
     * 资源类型名称
     */
    ProductKey?: string;
    /**
     * 告警规则配置类型(基于模板配置、基于手工配置)
     */
    ConfigMode?: number;
    /**
     * 模板Id
     */
    TemplateId?: number;
    /**
     * 通知方式(通知组：group，通知人：user)
     */
    NotifyType?: string;
    /**
     * 通知人用户id集合
     */
    NotifyUserIDs?: number[];
    /**
     * 通知组id集合
     */
    NotifyGroupIDs?: number[];
    /**
     * 通知渠道('email', 'sms', 'webhook')
     */
    NotifyChannelDs?: string[];
    /**
     * 回调语言(cn,en)
     */
    CallbackLanguage?: string;
    /**
     * 回调地址
     */
    CallbackUrls?: string[];
    /**
     * 告警策略状态
     */
    Status?: number;
    /**
     * 告警策略备注
     */
    Remark?: string;
    /**
     * 创建人
     */
    CreatedBy?: string;
    /**
     * 更新人
     */
    UpdatedBy?: string;
    /**
     * 创建时间
     */
    CreatedAt?: number;
    /**
     * 更新时间
     */
    UpdatedAt?: number;
  }[];
  /**
   * 告警策略总数
   */
  TotalCount?: number;
  /**
   * 链路ID
   */
  TraceId?: string;
}

/**
 * ListAlertStrategyTemplate - 条件模板列表
 */
export interface ListAlertStrategyTemplateRequest {
  /**
   *
   */
  Filter?: {
    /**
     * 模板id集合，根据模板id获取告警条件模板列表
     */
    TemplateIDs?: number[];
  };
  /**
   * 查询返回数量，默认值300，最大值：300。
   */
  Limit?: number;
  /**
   * 数据偏移量 (默认0)
   */
  Offset?: number;
}

/**
 * ListAlertStrategyTemplate - 条件模板列表
 */
export interface ListAlertStrategyTemplateResponse {
  /**
   * 条件模板列表
   */
  Data?: {
    /**
     * 公司id
     */
    CompanyID?: number;
    /**
     * 模板Id
     */
    TemplateID?: number;
    /**
     * 告警模板名称
     */
    Name?: string;
    /**
     * 产品类型(数值型)。参考ListMonitorProduct获取监控对象类型列表
     */
    ProductType?: number;
    /**
     * 产品类型(字符型)。参考ListMonitorProduct获取监控对象类型列表
     */
    ProductKey?: string;
    /**
     * 告警条件规则
     */
    RuleSet?: {
      /**
       * 规则ID
       */
      RuleID?: number;
      /**
       * 规则指标ID。参考该类型产品下返回的指标列表GetProductMetrics
       */
      MetricID?: number;
      /**
       * 指标名称
       */
      MetricName?: string;
      /**
       * 阈值比较方式枚举值比较方式:1->=2-<=3->4-<5-==6-!=
       */
      ThresholdCompare?: number;
      /**
       * 触发阈值
       */
      ThresholdValue?: number;
      /**
       * 触发次数
       */
      TriggerCount?: number;
      /**
       * 触发周期。枚举值：continuous连续 exponent 指数 single 不重复
       */
      SendPeriodType?: string;
      /**
       * 发送间隔
       */
      SendInterval?: number;
      /**
       * 告警等级。枚举值：P0,P1,P2,P3
       */
      Level?: string;
      /**
       * 告警状态。枚举值：0-关闭 1-开启
       */
      Status?: number;
      /**
       * 单位id
       */
      UnitID?: number;
      /**
       * 单位名称
       */
      UnitName?: string;
    }[];
    /**
     * 条件模板备注
     */
    Remark?: string;
  }[];
  /**
   * 条件模板总条数
   */
  TotalCount?: number;
}

/**
 * ListMonitorProduct - 获取监控对象类型列表
 */
export interface ListMonitorProductRequest {}

/**
 * ListMonitorProduct - 获取监控对象类型列表
 */
export interface ListMonitorProductResponse {
  /**
   * 返回数据
   */
  Data: {
    /**
     * 查询结果总数
     */
    Total?: number;
    /**
     * 查询结果列表
     */
    List?: {
      /**
       * ID
       */
      Id?: number;
      /**
       * 资源类型ID
       */
      ProductType?: number;
      /**
       * 资源类型唯一key
       */
      ProductKey?: string;
      /**
       * 产品名称
       */
      ProductName?: string;
      /**
       * 产品子名称
       */
      ProductName1?: string;
      /**
       * 产品中文名称
       */
      ProductChName?: string;
      /**
       * 产品英文名称
       */
      ProductEnName?: string;
      /**
       * {Type: 1|2, Key:string, Name: string}[] -> JSON字符串
       */
      Metas?: string;
      /**
       * 产品分组
       */
      ProductGroup?: string;
    }[];
  };
  /**
   * 链路ID
   */
  TraceId?: string;
}

/**
 * ModifyAlertStrategyRemark - 修改告警策略备注
 */
export interface ModifyAlertStrategyRemarkRequest {
  /**
   * 策略id
   */
  AlertStrategyID: number;
  /**
   * 策略名称
   */
  Name: string;
  /**
   * 策略备注
   */
  Remark?: string;
}

/**
 * ModifyAlertStrategyRemark - 修改告警策略备注
 */
export interface ModifyAlertStrategyRemarkResponse {
  /**
   * 返回数据
   */
  Data?: {
    /**
     * 告警策略id
     */
    AlertStrategyID?: number;
  };
}

/**
 * QueryMetricDataSet - 查询监控指标数据集
 */
export interface QueryMetricDataSetRequest {
  /**
   * 产品唯一标识，参见 [产品概览](https://docs.ucloud.cn/cloudwatch/metric/intro)
   */
  ProductKey: string;
  /**
   * 开始时间，值为10位数时间戳
   */
  StartTime: number;
  /**
   * 截止时间，值为10位数时间戳
   */
  EndTime: number;
  /**
   * 计算方式，枚举值如下：raw:原始值,max:最大值,min:最小值,avg:平均值,sum:求和
   */
  CalcMethod: string;
  /**
   * 周期，单位为秒，即：数据查询时，返回数据点的时间间隔。不同的查询时间范围，对应的周期不同：0<时间范围<=1h——周期：1分钟/5分钟，对应的枚举值为60、300；1h<时间范围<=12h——周期：1分钟/5分钟/1小时，对应的枚举值为60、300、3600；12h<时间范围<=24h——周期：5分钟/1小时，对应的枚举值为300、3600；1天<时间范围<=30天——周期：1小时/6小时/24小时，对应的枚举值为3600、21600、86400
   */
  Period: number;
  /**
   *
   */
  MetricInfos?: {
    /**
     * 指标名，参数中N的取值范围为 0～9
     */
    Metric: string;
    /**
     * 指标所属资源id，参数中N的取值范围为 0～9
     */
    ResourceId: string;
    /**
     * 多个 Tag 条件的匹配方式；可选 and（默认）或 or。TagList 中使用 or 时最多支持 3 个 Tag。
     */
    TagOperation?: string;
    /**
     *
     */
    TagList?: {
      /**
       * 要查询指标的Tag的key，参数中N的取值范围为 0～9
       */
      TagKey?: string;
      /**
       * 要查询指标的Tag的Value，参数中N的取值范围为 0～9
       */
      TagValues?: string[];
    }[];
  }[];
}

/**
 * QueryMetricDataSet - 查询监控指标数据集
 */
export interface QueryMetricDataSetResponse {
  /**
   * 日志链路id
   */
  TraceId?: string;
  /**
   * QueryMetricDataResp
   */
  Data?: {
    /**
     * 无效或无权限资源的 ID 列表
     */
    InvalidResourceIds?: string[];
    /**
     * 查询的结果集
     */
    List?: {
      /**
       * 指标名
       */
      Metric?: string;
      /**
       * 该指标查询的处理状态码
       */
      ErrCode?: number;
      /**
       * 该指标查询的状态说明
       */
      ErrMsg?: string;
      /**
       * 标签列表。每项为 TagEntry：TagName（标签名）和 KeyList（该标签的全部候选值）。
       */
      TagEntries?: {
        /**
         * ID
         */
        Id?: number;
        /**
         * 资源类型ID
         */
        ObjectType?: string;
        /**
         * 资源类型
         */
        ObjectTypeKey?: string;
        /**
         * 产品名称
         */
        ProductName?: string;
        /**
         * 产品子名称
         */
        ProductName1?: string;
        /**
         * 产品中文名称
         */
        ProductCNName?: string;
        /**
         * 产品英文名称
         */
        ProductENName?: string;
        /**
         * {type: spec|basic, key:string, name: string}[] -> JSON字符串
         */
        Metas?: string;
      }[];
      /**
       * 查询到的时间序列列表
       */
      Results?: {
        /**
         * 资源的短id
         */
        ResourceId?: string;
        /**
         * 资源名称
         */
        ResourceName?: string;
        /**
         * 资源标签列表。每项为 TagListItem：Tag（标签名）和 TagValue（标签值）。
         */
        TagList?: number[];
        /**
         * 指标数据点列表，元素为 MetricPoint
         */
        Values?: {
          /**
           * 时间戳
           */
          Timestamp?: number;
          /**
           * 样本值
           */
          Value?: number;
        }[];
      }[];
    }[];
  };
}

/**
 * QueryMetricDataSummary - 获取资源看图属性列表
 */
export interface QueryMetricDataSummaryRequest {
  /**
   * 产品唯一标识，参见 [产品概览](https://docs.ucloud.cn/cloudwatch/metric/intro)
   */
  ProductKey: string;
  /**
   * 跳过的数量
   */
  Offset: number;
  /**
   * 当前页数据尺寸
   */
  Limit: number;
  /**
   * 指定要查询的指标列表，不指定则使用默认的指标集合
   */
  Metrics?: string[];
  /**
   * 指定要查询的资源ID列表
   */
  ResourceIds?: string[];
}

/**
 * QueryMetricDataSummary - 获取资源看图属性列表
 */
export interface QueryMetricDataSummaryResponse {
  /**
   * 链路id
   */
  TraceId?: string;
  /**
   * 总数
   */
  TotalCount?: number;
  /**
   * 数据
   */
  Data?: {
    /**
     * 总数
     */
    Total?: number;
    /**
     * 结果集
     */
    List?: {
      /**
       * 地域
       */
      Region?: string;
      /**
       * 可用区
       */
      Zone?: string;
      /**
       * 项目id
       */
      ProjectId?: number;
      /**
       * 资源扩展属性列表
       */
      ResourceExtendAttrList?: {
        /**
         * 指标名
         */
        Metric?: string;
        /**
         * 指标数据数组
         */
        MetricValues?: {
          /**
           * 指标名
           */
          Metric?: string;
          /**
           * 指标标签列表
           */
          TagsList?: {
            /**
             * ID
             */
            Id?: number;
            /**
             * 资源类型ID
             */
            ProductType?: number;
            /**
             * 资源类型唯一key
             */
            ProductKey?: string;
            /**
             * 产品名称
             */
            ProductName?: string;
            /**
             * 产品子名称
             */
            ProductName1?: string;
            /**
             * 产品中文名称
             */
            ProductChName?: string;
            /**
             * 产品英文名称
             */
            ProductEnName?: string;
            /**
             * {Type: 1|2, Key:string, Name: string}[] -> JSON字符串
             */
            Metas?: string;
            /**
             * 产品分组
             */
            ProductGroup?: string;
          }[];
          /**
           * 指标单个样本点对象
           */
          Value?: {
            /**
             * 时间戳
             */
            Timestamp?: number;
            /**
             * 样本值
             */
            Value?: number;
          };
        }[];
      }[];
      /**
       * 资源标签属性列表
       */
      LabelAttrList?: {
        /**
         * 指标名
         */
        Metric?: string;
        /**
         * 指标数据数组
         */
        MetricValues?: {
          /**
           * 指标名
           */
          Metric?: string;
          /**
           * 指标标签列表
           */
          TagsList?: {
            /**
             * ID
             */
            Id?: number;
            /**
             * 资源类型ID
             */
            ProductType?: number;
            /**
             * 资源类型唯一key
             */
            ProductKey?: string;
            /**
             * 产品名称
             */
            ProductName?: string;
            /**
             * 产品子名称
             */
            ProductName1?: string;
            /**
             * 产品中文名称
             */
            ProductChName?: string;
            /**
             * 产品英文名称
             */
            ProductEnName?: string;
            /**
             * {Type: 1|2, Key:string, Name: string}[] -> JSON字符串
             */
            Metas?: string;
            /**
             * 产品分组
             */
            ProductGroup?: string;
          }[];
          /**
           * 指标单个样本点对象
           */
          Value?: {
            /**
             * 时间戳
             */
            Timestamp?: number;
            /**
             * 样本值
             */
            Value?: number;
          };
        }[];
      }[];
      /**
       * 公司id
       */
      CompanyId?: number;
      /**
       * 资源id
       */
      ResourceId?: string;
      /**
       * 资源名称
       */
      Name?: string;
      /**
       * 地域中文名
       */
      RegionCN?: string;
      /**
       * 可用区中文
       */
      ZoneCN?: string;
      /**
       * 产品类型
       */
      ProductKey?: string;
      /**
       * 项目id
       */
      OrganizationId?: number;
      /**
       * 资源状态
       */
      Status?: number;
      /**
       * 资源的各项指标当前值列表
       */
      MonitorAttr?: {
        /**
         * 指标名
         */
        Metric?: string;
        /**
         * 指标数据数组
         */
        MetricValues?: {
          /**
           * 指标名
           */
          Metric?: string;
          /**
           * 指标标签列表
           */
          TagsList?: {
            /**
             * ID
             */
            Id?: number;
            /**
             * 资源类型ID
             */
            ProductType?: number;
            /**
             * 资源类型唯一key
             */
            ProductKey?: string;
            /**
             * 产品名称
             */
            ProductName?: string;
            /**
             * 产品子名称
             */
            ProductName1?: string;
            /**
             * 产品中文名称
             */
            ProductChName?: string;
            /**
             * 产品英文名称
             */
            ProductEnName?: string;
            /**
             * {Type: 1|2, Key:string, Name: string}[] -> JSON字符串
             */
            Metas?: string;
            /**
             * 产品分组
             */
            ProductGroup?: string;
          }[];
          /**
           * 指标单个样本点对象
           */
          Value?: {
            /**
             * 时间戳
             */
            Timestamp?: number;
            /**
             * 样本值
             */
            Value?: number;
          };
        }[];
      }[];
    }[];
  };
}

/**
 * UnBindAlertStrategy - 解绑告警策略
 */
export interface UnBindAlertStrategyRequest {
  /**
   * 告警策略数组
   */
  AlertStrategyIDs: number[];
  /**
   * 资源数组
   */
  Resources: string[];
  /**
   * 产品唯一标识，参见 [产品概览](https://docs.ucloud.cn/cloudwatch/metric/intro)
   */
  ProductKey: string;
}

/**
 * UnBindAlertStrategy - 解绑告警策略
 */
export interface UnBindAlertStrategyResponse {}

/**
 * UpdateAlertStrategy - 更新告警策略
 */
export interface UpdateAlertStrategyRequest {
  /**
   * 告警策略id
   */
  AlertStrategyID: string;
  /**
   * 告警策略名称。最大长度255个字符
   */
  Name: string;
  /**
   * 产品唯一标识，参见 [产品概览](https://docs.ucloud.cn/cloudwatch/metric/intro)
   */
  ProductKey: string;
  /**
   * 绑定资源类型 1 资源组 2 资源
   */
  ObjectType: number;
  /**
   * 条件设置方式 1. 手动配置 2.选择模版
   */
  ConfigMode: number;
  /**
   * 绑定资源，对应绑定资源类型ObjectType=2
   */
  Resources?: string[];
  /**
   * 绑定资源组，对应绑定资源类型ObjectType=1
   */
  ResourceGroupIDs?: number[];
  /**
   * 模板id.对应ConfigMode=2
   */
  TemplateId?: number;
  /**
   *
   */
  RuleSet?: {
    /**
     * 规则指标ID。参考该类型产品下返回的指标列表GetProductMetrics
     */
    MetricID?: number;
    /**
     * 阈值比较方式。 枚举值：1：>= 2：<= 3：> 4：< 5：== 6：!=
     */
    ThresholdCompare?: number;
    /**
     * 触发阈值
     */
    ThresholdValue?: number;
    /**
     * 触发次数
     */
    TriggerCount?: number;
    /**
     * 触发周期。枚举值：continuous连续 exponent 指数 single 不重复
     */
    SendPeriodType?: string;
    /**
     * 告警等级。枚举值：P0,P1,P2,P3
     */
    Level?: string;
    /**
     * 告警状态。枚举值：0-关闭 1-开启
     */
    Status?: number;
    /**
     * 沉默周期(告警周期选择为连续时必填)
     */
    SendInterval?: number;
  }[];
  /**
   * 通知类型 通知组 group 通知人 user
   */
  NotifyType?: string;
  /**
   * 通知人id
   */
  NotifyUserIDs?: number[];
  /**
   * 通知人组id
   */
  NotifyGroupIDs?: number[];
  /**
   * 通知渠道 短信sms 邮件email 回调webhook
   */
  NotifyChannelDs?: string[];
  /**
   * 通知渠道回调webhook 回调语言 中文cn 英文en
   */
  CallbackLanguage?: string;
  /**
   * 回调url
   */
  CallbackUrls?: string[];
}

/**
 * UpdateAlertStrategy - 更新告警策略
 */
export interface UpdateAlertStrategyResponse {
  /**
   * 更新告警策略返回对象
   */
  Data?: {
    /**
     * 告警策略id
     */
    AlertStrategyID?: number;
  };
}

/**
 * UpdateAlertStrategyTemplate - 编辑条件模板
 */
export interface UpdateAlertStrategyTemplateRequest {
  /**
   * 条件模板ID
   */
  TemplateID: number;
  /**
   * 告警模板名称。最大长度64个字符
   */
  Name: string;
  /**
   * 产品唯一标识，参见 [产品概览](https://docs.ucloud.cn/cloudwatch/metric/intro)
   */
  ProductKey: string;
  /**
   *
   */
  RuleSet?: {
    /**
     * 规则指标ID。参考该类型产品下返回的指标列表GetProductMetrics
     */
    MetricID: number;
    /**
     * 阈值比较方式。枚举值比较方式: 1->=2-<= 3-> 4-< 5-== 6-!=
     */
    ThresholdCompare: number;
    /**
     * 触发阈值
     */
    ThresholdValue: number;
    /**
     * 触发次数
     */
    TriggerCount: number;
    /**
     * 触发周期。枚举值：continuous连续 exponent 指数 single 不重复
     */
    SendPeriodType: string;
    /**
     * 告警等级。枚举值：P0,P1,P2,P3
     */
    Level: string;
    /**
     * 告警状态。枚举值：0-关闭 1-开启
     */
    Status: number;
    /**
     * 沉默周期(告警周期选择为连续时必填)
     */
    SendInterval?: number;
  }[];
  /**
   * 备注
   */
  Remark?: string;
}

/**
 * UpdateAlertStrategyTemplate - 编辑条件模板
 */
export interface UpdateAlertStrategyTemplateResponse {
  /**
   * 更新条件模板ID
   */
  Data?: {
    /**
     * 告警模板ID
     */
    TemplateID: number;
  };
}
