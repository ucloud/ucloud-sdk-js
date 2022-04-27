import Client from "../../core/client";
import Request from "../../core/request";
import {ConfigOptions} from "../../core/config";
import {CredentialOptions} from "../../core/credential";

import * as models from './models';

/**
 * This client is used to call actions of **UBill** service
 */
export default class UbillClient extends Client {
    constructor(
        {
            config,
            credential,
        }: {
            config: ConfigOptions,
            credential: CredentialOptions,
        }
    ) {
        super({config, credential});
    }
        
    /**
     * GetBalance - 
     *
     * See also: https://docs.ucloud.cn/api/u_bill-api/u_bill
     */
    getBalance(request?: models.GetBalanceRequest): Promise<models.GetBalanceResponse> {
        const args = {Action: "GetBalance", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.GetBalanceResponse)
    }
    
        
    /**
     * GetBillDataFileUrl - 
     *
     * See also: https://docs.ucloud.cn/api/u_bill-api/u_bill
     */
    getBillDataFileUrl(request?: models.GetBillDataFileUrlRequest): Promise<models.GetBillDataFileUrlResponse> {
        const args = {Action: "GetBillDataFileUrl", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.GetBillDataFileUrlResponse)
    }
    
        
    /**
     * ListUBillDetail - 
     *
     * See also: https://docs.ucloud.cn/api/u_bill-api/u_bill
     */
    listUBillDetail(request?: models.ListUBillDetailRequest): Promise<models.ListUBillDetailResponse> {
        const args = {Action: "ListUBillDetail", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.ListUBillDetailResponse)
    }
    
        
    /**
     * ListUBillOverview - 
     *
     * See also: https://docs.ucloud.cn/api/u_bill-api/u_bill
     */
    listUBillOverview(request?: models.ListUBillOverviewRequest): Promise<models.ListUBillOverviewResponse> {
        const args = {Action: "ListUBillOverview", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.ListUBillOverviewResponse)
    }
    
}
