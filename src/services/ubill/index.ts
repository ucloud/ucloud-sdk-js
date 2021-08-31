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
   * 账期（时间戳格式）
   */
  BillPeriod: number;
  /**
   * 账单类型，传 0 时获取账单总览报表，传 1 获取账单明细报表
   */
  BillType: number;
  /**
   * 获取账单总览报表时，账单的支付状态，传 0 时获取待支付账单，传 1 时获取已支付账单。获取账单明细报表时该参数无效
   */
  PaidType?: number;
  /**
   * 如需求其他语言版本的账单则使用此参数。默认中文。如 RequireVersion = "EN"，则提供英文版本账单。
   */
  RequireVersion?: string;
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
