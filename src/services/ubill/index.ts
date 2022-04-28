import Client from '../../core/client';
import Request from '../../core/request';
import { ConfigOptions } from '../../core/config';
import { CredentialOptions } from '../../core/credential';

/**
 * This client is used to call actions of **ubill** service
 */
export default class UBillClient extends Client {
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
   * GetBalance - 获取账户余额
   *
   * See also: https://docs.ucloud.cn/api/ubill-api/get_balance
   */
  getBalance(request?: GetBalanceRequest): Promise<GetBalanceResponse> {
    const args = { Action: 'GetBalance', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as GetBalanceResponse
    );
  }

  /**
   * GetBillDataFileUrl - 生成账单数据文件下载的 url
   *
   * See also: https://docs.ucloud.cn/api/ubill-api/get_bill_data_file_url
   */
  getBillDataFileUrl(
    request?: GetBillDataFileUrlRequest
  ): Promise<GetBillDataFileUrlResponse> {
    const args = { Action: 'GetBillDataFileUrl', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as GetBillDataFileUrlResponse
    );
  }

  /**
   * ListUBillDetail - 获取某个账期内的所有消费。
   *
   * See also: https://docs.ucloud.cn/api/ubill-api/list_u_bill_detail
   */
  listUBillDetail(
    request?: ListUBillDetailRequest
  ): Promise<ListUBillDetailResponse> {
    const args = { Action: 'ListUBillDetail', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as ListUBillDetailResponse
    );
  }

  /**
   * ListUBillOverview - 账单总览。可按产品/项目/用户纬度获取某个账期内账单总览信息。
   *
   * See also: https://docs.ucloud.cn/api/ubill-api/list_u_bill_overview
   */
  listUBillOverview(
    request?: ListUBillOverviewRequest
  ): Promise<ListUBillOverviewResponse> {
    const args = { Action: 'ListUBillOverview', ...(request || {}) };
    return this.invoke(new Request(args)).then(
      (resp) => resp.toObject() as ListUBillOverviewResponse
    );
  }
}

/**
 * GetBalance - 获取账户余额
 */
export interface GetBalanceRequest {}

/**
 * GetBalance - 获取账户余额
 */
export interface GetBalanceResponse {
  /**
   * 账户余额信息
   */
  AccountInfo: {
    /**
     * 冻结账户金额
     */
    AmountFreeze?: string;
    /**
     * 信用账户余额
     */
    AmountCredit?: string;
    /**
     * 赠送账户余额
     */
    AmountFree?: string;
    /**
     * 账户余额
     */
    Amount?: string;
    /**
     * 账户可用余额
     */
    AmountAvailable?: string;
  };
}

/**
 * GetBillDataFileUrl - 生成账单数据文件下载的 url
 */
export interface GetBillDataFileUrlRequest {
  /**
   * 账单类型，传 0 时获取账单总览报表，传 1 获取账单明细报表
   */
  BillType: number;
  /**
   * 账期(字符串格式，YYYY-MM，例如2021-08).   若BillingCycle 和 BillPeriod同时存在，BillingCycle 优先
   */
  BillingCycle: string;
  /**
   * 此字段不推荐使用，建议使用BillingCycle.   若BillingCycle 和 BillPeriod同时存在，BillingCycle 优先
   */
  BillPeriod?: number;
  /**
   * 获取账单总览报表时，账单的支付状态，传 0 时获取待支付账单，传 1 时获取已支付账单。获取账单明细报表时该参数无效
   */
  PaidType?: number;
  /**
   * 如需求其他语言版本的账单则使用此参数。默认中文。如 RequireVersion = "EN"，则提供英文版本账单。
   */
  RequireVersion?: string;
  /**
   * 文件版本，若为"v1"表示获取带有子用户信息的账单，可以为空
   */
  Version?: string;
}

/**
 * GetBillDataFileUrl - 生成账单数据文件下载的 url
 */
export interface GetBillDataFileUrlResponse {
  /**
   * 交易账单数据下载URL
   */
  FileUrl?: string;
  /**
   * 生成的 URL是否有效，即有对应数据文件
   */
  IsValid?: string;
}

/**
 * ListUBillDetail - 获取某个账期内的所有消费。
 */
export interface ListUBillDetailRequest {
  /**
   * 账期，YYYY-MM，比如2021-08，只支持2018-05之后的查询
   */
  BillingCycle: string;
  /**
   * 项目名称 (筛选项, 默认全部)
   */
  ProjectName?: string;
  /**
   * 资源ID(筛选项, 默认全部)	支持多筛选，多筛选请在请求参数中添加多个字段例ResourceIds.0: uhost-bzgf1gh5，ResourceIds.1: uhost-gu1xpspa，
   */
  ResourceIds?: string[];
  /**
   * 订单类型 (筛选项, 默认全部) 。枚举值：\\ > OT_BUY:新购 \\ > OT_RENEW:续费 \\ > OT_UPGRADE:升级 \\ > OT_REFUND:退费 \\ > OT_DOWNGRADE:降级 \\ > OT_SUSPEND:结算 \\ > OT_PAYMENT:删除资源回款 \\ > OT_POSTPAID_PAYMENT:后付费回款 \\ > OT_RECOVER:删除恢复 \\ > OT_POSTPAID_RENEW:过期续费回款
   */
  OrderType?: string;
  /**
   * 计费方式 (筛选项, 默认全部)。枚举值：\\ > Dynamic:按时 \\ > Month:按月 \\ > Year:按年 \\ > Once:一次性按量 \\ > Used:按量 \\ > Post:后付费
   */
  ChargeType?: string;
  /**
   * 是否显示0元订单 (0 不显示, 1 显示, 默认0)
   */
  ShowZero?: number;
  /**
   * 支付状态 (筛选项, 1:仅显示未支付订单; 2:仅显示已支付订单; 0:两者都显示)
   */
  PaidState?: number;
  /**
   * 用户邮箱，可以根据用户邮箱来进行筛选
   */
  UserEmail?: string;
  /**
   * 每页数量，默认值25，最大值：100。
   */
  Limit?: number;
  /**
   * 数据偏移量 (默认0)
   */
  Offset?: number;
  /**
   * 产品类型 (筛选项, 默认全部),支持多筛选，多筛选请在请求参数中添加多个字段。枚举值：\\ > uhost:云主机 \\ > udisk:普通云硬盘 \\ > udb:云数据库 \\ > eip:弹性IP \\ > ufile:对象存储 \\ > fortress_host:堡垒机 \\ > ufs:文件存储 \\ > waf:WEB应用防火墙 \\ > ues:弹性搜索 \\ > udisk_ssd:SSD云硬盘 \\ > rssd:RSSD云硬盘
   */
  ResourceTypes?: string[];
}

/**
 * ListUBillDetail - 获取某个账期内的所有消费。
 */
export interface ListUBillDetailResponse {
  /**
   * 账单明细数组
   */
  Items: {
    /**
     * 订单总金额
     */
    Amount: string;
    /**
     * 现金账户支付
     */
    AmountReal: string;
    /**
     * 赠送金额抵扣
     */
    AmountFree: string;
    /**
     * 代金券抵扣
     */
    AmountCoupon: string;
    /**
     * 可用区
     */
    AzGroupCName: string;
    /**
     * 计费方式 (筛选项, 默认全部)。枚举值：\\ > Dynamic:按时 \\ > Month:按月 \\ > Year:按年 \\ > Once:一次性按量 \\ > Used:按量 \\ > Post:后付费
     */
    ChargeType: string;
    /**
     * 创建时间（时间戳）
     */
    CreateTime: number;
    /**
     * 开始时间（时间戳）
     */
    StartTime: number;
    /**
     * 订单号
     */
    OrderNo: string;
    /**
     * 订单类型 (筛选项, 默认全部) 。枚举值：\\ > OT_BUY:新购 \\ > OT_RENEW:续费 \\ > OT_UPGRADE:升级 \\ > OT_REFUND:退费 \\ > OT_DOWNGRADE:降级 \\ > OT_SUSPEND:结算 \\ > OT_PAYMENT:删除资源回款 \\ > OT_POSTPAID_PAYMENT:后付费回款 \\ > OT_RECOVER:删除恢复 \\ > OT_POSTPAID_RENEW:过期续费回款
     */
    OrderType: string;
    /**
     * 项目名称
     */
    ProjectName: string;
    /**
     * 资源ID
     */
    ResourceId: string;
    /**
     * 产品类型。枚举值：\\ > uhost:云主机 \\ > udisk:普通云硬盘 \\ > udb:云数据库 \\ > eip:弹性IP \\ > ufile:对象存储 \\ > fortress_host:堡垒机 \\ > ufs:文件存储 \\ > waf:WEB应用防火墙 \\ > ues:弹性搜索 \\ > udisk_ssd:SSD云硬盘 \\ > rssd:RSSD云硬盘
     */
    ResourceType: string;
    /**
     * 产品类型代码
     */
    ResourceTypeCode: number;
    /**
     * 产品配置
     */
    ItemDetails: {
      /**
       * 产品小类名称
       */
      ProductName: string;
      /**
       * 产品小类规格
       */
      Value: string;
    }[];
    /**
     * 资源标识
     */
    ResourceExtendInfo: {
      /**
       * 资源标识健
       */
      KeyId: string;
      /**
       * 资源标识值
       */
      Value: string;
    }[];
    /**
     * 订单支付状态。枚举值：\\> 0:未支付 \\ > 1:已支付
     */
    ShowHover: number;
    /**
     * 账户邮箱
     */
    UserEmail: string;
    /**
     * 账户名
     */
    UserName: string;
    /**
     * 账户昵称
     */
    UserDisplayName: string;
    /**
     * 是否为主账号。枚举值：\\ > 0:子账号 \\ > 1:主账号
     */
    Admin: number;
  }[];
  /**
   * 账单明细总长度
   */
  TotalCount: number;
}

/**
 * ListUBillOverview - 账单总览。可按产品/项目/用户纬度获取某个账期内账单总览信息。
 */
export interface ListUBillOverviewRequest {
  /**
   * 账期，YYYY-MM格式，例如2022-02，只支持2018-05之后的查询
   */
  BillingCycle: string;
  /**
   * 账单维度, product 按产品聚合,project 按项目聚合，user 按子账号聚合
   */
  Dimension: string;
  /**
   * 是否显示已入账账单, 1 已入账, 0 待入账 (默认0 )
   */
  HideUnpaid?: number;
}

/**
 * ListUBillOverview - 账单总览。可按产品/项目/用户纬度获取某个账期内账单总览信息。
 */
export interface ListUBillOverviewResponse {
  /**
   * 账单总览数据总数
   */
  TotalCount: number;
  /**
   * 已入账订单总额（已入账时显示）
   */
  TotalPaidAmount?: string;
  /**
   * 现金账户扣款总额	（已入账时显示）
   */
  TotalPaidAmountReal?: string;
  /**
   * 待入账订单总额（待入账时显示）
   */
  TotalUnpaidAmount?: string;
  /**
   * 账单聚合数据
   */
  Items: {
    /**
     * 账单维度, product 按产品维度聚合,project 按项目维度聚合，user 按子账号维度聚合
     */
    Dimension: string;
    /**
     * 订单总金额
     */
    Amount: string;
    /**
     * 代金券抵扣（已入账时显示）
     */
    AmountCoupon?: string;
    /**
     * 赠送金额抵扣（已入账时显示）
     */
    AmountFree?: string;
    /**
     * 现金账户支付（已入账时显示）
     */
    AmountReal?: string;
    /**
     * 产品分类	（账单维度按产品筛选时显示）
     */
    ProductCategory?: string;
    /**
     * 产品类型	（账单维度按产品筛选时显示）
     */
    ResourceType?: string;
    /**
     * 产品类型代码（账单维度按产品筛选时显示）
     */
    ResourceTypeCode?: number;
    /**
     * 项目名称（账单维度按项目筛选时显示）
     */
    ProjectName?: string;
    /**
     * 账户邮箱（账单维度按子账号筛选时显示）
     */
    UserEmail?: string;
    /**
     * 账户名   （账单维度按子账号筛选时显示）
     */
    UserName?: string;
    /**
     * 账户昵称（账单维度按子账号筛选时显示）
     */
    UserDisplayName?: string;
    /**
     * 该账户是否为主账号，1 主账号，0 子账号（账单维度按子账号筛选时显示）
     */
    Admin?: number;
  }[];
}
