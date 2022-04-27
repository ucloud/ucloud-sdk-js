import Client from "../../core/client";
import Request from "../../core/request";
import {ConfigOptions} from "../../core/config";
import {CredentialOptions} from "../../core/credential";

import * as models from './models';

/**
 * This client is used to call actions of **UAccount** service
 */
export default class UaccountClient extends Client {
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
     * AddMemberToProject - 
     *
     * See also: https://docs.ucloud.cn/api/u_account-api/u_account
     */
    addMemberToProject(request?: models.AddMemberToProjectRequest): Promise<models.AddMemberToProjectResponse> {
        const args = {Action: "AddMemberToProject", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.AddMemberToProjectResponse)
    }
    
        
    /**
     * FreezeMember - 
     *
     * See also: https://docs.ucloud.cn/api/u_account-api/u_account
     */
    freezeMember(request?: models.FreezeMemberRequest): Promise<models.FreezeMemberResponse> {
        const args = {Action: "FreezeMember", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.FreezeMemberResponse)
    }
    
        
    /**
     * GetNetworkMask - 
     *
     * See also: https://docs.ucloud.cn/api/u_account-api/u_account
     */
    getNetworkMask(request?: models.GetNetworkMaskRequest): Promise<models.GetNetworkMaskResponse> {
        const args = {Action: "GetNetworkMask", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.GetNetworkMaskResponse)
    }
    
        
    /**
     * GetProjectList - 
     *
     * See also: https://docs.ucloud.cn/api/u_account-api/u_account
     */
    getProjectList(request?: models.GetProjectListRequest): Promise<models.GetProjectListResponse> {
        const args = {Action: "GetProjectList", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.GetProjectListResponse)
    }
    
        
    /**
     * GetRegion - 
     *
     * See also: https://docs.ucloud.cn/api/u_account-api/u_account
     */
    getRegion(request?: models.GetRegionRequest): Promise<models.GetRegionResponse> {
        const args = {Action: "GetRegion", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.GetRegionResponse)
    }
    
        
    /**
     * InviteSubaccount - 
     *
     * See also: https://docs.ucloud.cn/api/u_account-api/u_account
     */
    inviteSubaccount(request?: models.InviteSubaccountRequest): Promise<models.InviteSubaccountResponse> {
        const args = {Action: "InviteSubaccount", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.InviteSubaccountResponse)
    }
    
        
    /**
     * RemoveMemberFromProject - 
     *
     * See also: https://docs.ucloud.cn/api/u_account-api/u_account
     */
    removeMemberFromProject(request?: models.RemoveMemberFromProjectRequest): Promise<models.RemoveMemberFromProjectResponse> {
        const args = {Action: "RemoveMemberFromProject", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.RemoveMemberFromProjectResponse)
    }
    
        
    /**
     * SetNetworkMask - 
     *
     * See also: https://docs.ucloud.cn/api/u_account-api/u_account
     */
    setNetworkMask(request?: models.SetNetworkMaskRequest): Promise<models.SetNetworkMaskResponse> {
        const args = {Action: "SetNetworkMask", ...(request || {})}
        return this.invoke(new Request(args)).then(resp => resp.toObject() as models.SetNetworkMaskResponse)
    }
    
}
