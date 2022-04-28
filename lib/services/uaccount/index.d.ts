import Client from '../../core/client';
import { ConfigOptions } from '../../core/config';
import { CredentialOptions } from '../../core/credential';
/**
 * This client is used to call actions of **uaccount** service
 */
export default class UAccountClient extends Client {
    constructor({ config, credential, }: {
        config: ConfigOptions;
        credential: CredentialOptions;
    });
    /**
     * AddMemberToProject - 添加成员到项目
     *
     * See also: https://docs.ucloud.cn/api/uaccount-api/add_member_to_project
     */
    addMemberToProject(request?: AddMemberToProjectRequest): Promise<AddMemberToProjectResponse>;
    /**
     * FreezeMember - 冻结成员
     *
     * See also: https://docs.ucloud.cn/api/uaccount-api/freeze_member
     */
    freezeMember(request?: FreezeMemberRequest): Promise<FreezeMemberResponse>;
    /**
     * GetNetworkMask - 查询登录与API调用的网络掩码
     *
     * See also: https://docs.ucloud.cn/api/uaccount-api/get_network_mask
     */
    getNetworkMask(request?: GetNetworkMaskRequest): Promise<GetNetworkMaskResponse>;
    /**
     * GetProjectList - 获取项目列表
     *
     * See also: https://docs.ucloud.cn/api/uaccount-api/get_project_list
     */
    getProjectList(request?: GetProjectListRequest): Promise<GetProjectListResponse>;
    /**
     * GetRegion - 获取用户在各数据中心的权限等信息
     *
     * See also: https://docs.ucloud.cn/api/uaccount-api/get_region
     */
    getRegion(request?: GetRegionRequest): Promise<GetRegionResponse>;
    /**
     * InviteSubaccount - 邀请子帐号成员
     *
     * See also: https://docs.ucloud.cn/api/uaccount-api/invite_subaccount
     */
    inviteSubaccount(request?: InviteSubaccountRequest): Promise<InviteSubaccountResponse>;
    /**
     * RemoveMemberFromProject - 从项目中移除成员
     *
     * See also: https://docs.ucloud.cn/api/uaccount-api/remove_member_from_project
     */
    removeMemberFromProject(request?: RemoveMemberFromProjectRequest): Promise<RemoveMemberFromProjectResponse>;
    /**
     * SetNetworkMask - 设置登录与API调用的网络掩码
     *
     * See also: https://docs.ucloud.cn/api/uaccount-api/set_network_mask
     */
    setNetworkMask(request?: SetNetworkMaskRequest): Promise<SetNetworkMaskResponse>;
}
/**
 * AddMemberToProject - 添加成员到项目
 */
export interface AddMemberToProjectRequest {
    /**
     * 被加入成员Email
     */
    MemberEmail: string;
    /**
     * 被加入成员归属角色ID
     */
    CharacterId: string;
}
/**
 * AddMemberToProject - 添加成员到项目
 */
export interface AddMemberToProjectResponse {
}
/**
 * FreezeMember - 冻结成员
 */
export interface FreezeMemberRequest {
    /**
     * 需要被冻结的成员Email
     */
    MemberEmail: string;
}
/**
 * FreezeMember - 冻结成员
 */
export interface FreezeMemberResponse {
}
/**
 * GetNetworkMask - 查询登录与API调用的网络掩码
 */
export interface GetNetworkMaskRequest {
}
/**
 * GetNetworkMask - 查询登录与API调用的网络掩码
 */
export interface GetNetworkMaskResponse {
    /**
     * 接口返回数据
     */
    Data?: {
        /**
         * API调用网络掩码，默认空字符串，不限制登录IP，多个IP以英文逗号分隔。
         */
        APINetworkMask: string;
        /**
         * 登录网络掩码，默认空字符串，不限制登录IP，多个IP以英文逗号分隔。
         */
        LoginNetworkMask: string;
    };
}
/**
 * GetProjectList - 获取项目列表
 */
export interface GetProjectListRequest {
    /**
     * 是否是财务账号（Yes：是，No：否）
     */
    IsFinance?: string;
}
/**
 * GetProjectList - 获取项目列表
 */
export interface GetProjectListResponse {
    /**
     * 项目总数
     */
    ProjectCount: number;
    /**
     * JSON格式的项目列表实例
     */
    ProjectSet: {
        /**
         * 项目ID
         */
        ProjectId: string;
        /**
         * 项目名称
         */
        ProjectName: string;
        /**
         * 创建时间(Unix时间戳)
         */
        CreateTime: number;
        /**
         * 是否为默认项目
         */
        IsDefault: boolean;
        /**
         * 项目下资源数量（已废弃，不建议使用）
         */
        ResourceCount: number;
        /**
         * 项目下成员数量
         */
        MemberCount: number;
        /**
         * 父项目ID（已废弃）
         */
        ParentId?: string;
        /**
         * 父项目名称（已废弃）
         */
        ParentName?: string;
    }[];
}
/**
 * GetRegion - 获取用户在各数据中心的权限等信息
 */
export interface GetRegionRequest {
}
/**
 * GetRegion - 获取用户在各数据中心的权限等信息
 */
export interface GetRegionResponse {
    /**
     * 各数据中心信息
     */
    Regions?: {
        /**
         * 数据中心ID
         */
        RegionId: number;
        /**
         * 数据中心名称
         */
        RegionName: string;
        /**
         * 是否用户当前默认数据中心
         */
        IsDefault: boolean;
        /**
         * 用户在此数据中心的权限位
         */
        BitMaps: string;
        /**
         * 地域名字，如cn-bj
         */
        Region: string;
        /**
         * 可用区名字，如cn-bj-01
         */
        Zone: string;
    }[];
}
/**
 * InviteSubaccount - 邀请子帐号成员
 */
export interface InviteSubaccountRequest {
    /**
     * 受邀成员邮箱地址，不得重复
     */
    UserEmail: string;
    /**
     * 受邀成员手机号码
     */
    UserPhone: string;
    /**
     * 受邀成员姓名
     */
    UserName: string;
    /**
     * 是否有财务权限(true:是,false:否,默认为否)
     */
    IsFinance: string;
}
/**
 * InviteSubaccount - 邀请子帐号成员
 */
export interface InviteSubaccountResponse {
}
/**
 * RemoveMemberFromProject - 从项目中移除成员
 */
export interface RemoveMemberFromProjectRequest {
    /**
     * 需要被移除成员Email
     */
    MemberEmail: string;
}
/**
 * RemoveMemberFromProject - 从项目中移除成员
 */
export interface RemoveMemberFromProjectResponse {
}
/**
 * SetNetworkMask - 设置登录与API调用的网络掩码
 */
export interface SetNetworkMaskRequest {
    /**
     * 短信验证码
     */
    Code: string;
    /**
     * API调用网络掩码，多个IP以英文逗号分隔。默认空字符串，不限制登录IP。
     */
    APINetworkMask?: string;
    /**
     * 登录网络掩码，多个IP以英文逗号分隔。默认空字符串，不限制登录IP。
     */
    LoginNetworkMask?: string;
}
/**
 * SetNetworkMask - 设置登录与API调用的网络掩码
 */
export interface SetNetworkMaskResponse {
}
