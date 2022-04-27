import Client from "../../core/client";
import Request from "../../core/request";
import {ConfigOptions} from "../../core/config";
import {CredentialOptions} from "../../core/credential";

import * as models from './models';

/**
 * This client is used to call actions of **USMS** service
 */
export default class UsmsClient extends Client {
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
     * CreateUSMSSignature - 
     *
     * See also: https://docs.ucloud.cn/api/usms-api/usms
     */
    createUSMSSignature(request?: models.CreateUSMSSignatureRequest): Promise<models.CreateUSMSSignatureResponse> {
        const args = {Action: "CreateUSMSSignature", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.CreateUSMSSignatureResponse)
    }
    
        
    /**
     * CreateUSMSTemplate - 
     *
     * See also: https://docs.ucloud.cn/api/usms-api/usms
     */
    createUSMSTemplate(request?: models.CreateUSMSTemplateRequest): Promise<models.CreateUSMSTemplateResponse> {
        const args = {Action: "CreateUSMSTemplate", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.CreateUSMSTemplateResponse)
    }
    
        
    /**
     * DeleteUSMSSignature - 
     *
     * See also: https://docs.ucloud.cn/api/usms-api/usms
     */
    deleteUSMSSignature(request?: models.DeleteUSMSSignatureRequest): Promise<models.DeleteUSMSSignatureResponse> {
        const args = {Action: "DeleteUSMSSignature", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DeleteUSMSSignatureResponse)
    }
    
        
    /**
     * DeleteUSMSTemplate - 
     *
     * See also: https://docs.ucloud.cn/api/usms-api/usms
     */
    deleteUSMSTemplate(request?: models.DeleteUSMSTemplateRequest): Promise<models.DeleteUSMSTemplateResponse> {
        const args = {Action: "DeleteUSMSTemplate", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.DeleteUSMSTemplateResponse)
    }
    
        
    /**
     * GetUSMSSendReceipt - 
     *
     * See also: https://docs.ucloud.cn/api/usms-api/usms
     */
    getUSMSSendReceipt(request?: models.GetUSMSSendReceiptRequest): Promise<models.GetUSMSSendReceiptResponse> {
        const args = {Action: "GetUSMSSendReceipt", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.GetUSMSSendReceiptResponse)
    }
    
        
    /**
     * QueryUSMSSignature - 
     *
     * See also: https://docs.ucloud.cn/api/usms-api/usms
     */
    queryUSMSSignature(request?: models.QueryUSMSSignatureRequest): Promise<models.QueryUSMSSignatureResponse> {
        const args = {Action: "QueryUSMSSignature", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.QueryUSMSSignatureResponse)
    }
    
        
    /**
     * QueryUSMSTemplate - 
     *
     * See also: https://docs.ucloud.cn/api/usms-api/usms
     */
    queryUSMSTemplate(request?: models.QueryUSMSTemplateRequest): Promise<models.QueryUSMSTemplateResponse> {
        const args = {Action: "QueryUSMSTemplate", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.QueryUSMSTemplateResponse)
    }
    
        
    /**
     * SendBatchUSMSMessage - 
     *
     * See also: https://docs.ucloud.cn/api/usms-api/usms
     */
    sendBatchUSMSMessage(request?: models.SendBatchUSMSMessageRequest): Promise<models.SendBatchUSMSMessageResponse> {
        const args = {Action: "SendBatchUSMSMessage", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.SendBatchUSMSMessageResponse)
    }
    
        
    /**
     * SendUSMSMessage - 
     *
     * See also: https://docs.ucloud.cn/api/usms-api/usms
     */
    sendUSMSMessage(request?: models.SendUSMSMessageRequest): Promise<models.SendUSMSMessageResponse> {
        const args = {Action: "SendUSMSMessage", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.SendUSMSMessageResponse)
    }
    
        
    /**
     * UpdateUSMSSignature - 
     *
     * See also: https://docs.ucloud.cn/api/usms-api/usms
     */
    updateUSMSSignature(request?: models.UpdateUSMSSignatureRequest): Promise<models.UpdateUSMSSignatureResponse> {
        const args = {Action: "UpdateUSMSSignature", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.UpdateUSMSSignatureResponse)
    }
    
        
    /**
     * UpdateUSMSTemplate - 
     *
     * See also: https://docs.ucloud.cn/api/usms-api/usms
     */
    updateUSMSTemplate(request?: models.UpdateUSMSTemplateRequest): Promise<models.UpdateUSMSTemplateResponse> {
        const args = {Action: "UpdateUSMSTemplate", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.UpdateUSMSTemplateResponse)
    }
    
}
