


    
/**
 * GetProjectListRequest - 
 */
export interface GetProjectListRequest {
    /**
     * 是否是财务账号（Yes：是，No：否）
     */
    IsFinance?:string
}
    
/**
 * GetRegionRequest - 
 */
export interface GetRegionRequest {
}
    
/**
 * GetNetworkMaskRequest - 
 */
export interface GetNetworkMaskRequest {
}
    
/**
 * NetworkMask - 
 */
export interface NetworkMask {
    /**
     * API调用网络掩码，默认空字符串，不限制登录IP，多个IP以英文逗号分隔。
     */
    APINetworkMask:string
    /**
     * 登录网络掩码，默认空字符串，不限制登录IP，多个IP以英文逗号分隔。
     */
    LoginNetworkMask:string
}
    
/**
 * AddMemberToProjectRequest - 
 */
export interface AddMemberToProjectRequest {
    /**
     * 项目ID，请参考[GetProjectList接口](../summary/get_project_list.html)的描述。不填写为创建时间最早的项目。 
     */
    ProjectId?:string
    /**
     * 被加入成员Email
     */
    MemberEmail:string
    /**
     * 被加入成员归属角色ID
     */
    CharacterId:string
}
    
/**
 * ProjectListInfo - 
 */
export interface ProjectListInfo {
    /**
     * 项目ID
     */
    ProjectId:string
    /**
     * 项目名称
     */
    ProjectName:string
    /**
     * 创建时间(Unix时间戳)
     */
    CreateTime:number
    /**
     * 是否为默认项目
     */
    IsDefault:boolean
    /**
     * 项目下资源数量（已废弃，不建议使用）
     */
    ResourceCount:number
    /**
     * 项目下成员数量
     */
    MemberCount:number
    /**
     * 父项目ID（已废弃）
     */
    ParentId?:string
    /**
     * 父项目名称（已废弃）
     */
    ParentName?:string
}
    
/**
 * RemoveMemberFromProjectResponse - 
 */
export interface RemoveMemberFromProjectResponse {
}
    
/**
 * GetNetworkMaskResponse - 
 */
export interface GetNetworkMaskResponse {
    /**
     * 接口返回数据
     */
    Data?:
        NetworkMask
}
    
/**
 * InviteSubaccountRequest - 
 */
export interface InviteSubaccountRequest {
    /**
     * 受邀成员邮箱地址，不得重复
     */
    UserEmail:string
    /**
     * 受邀成员手机号码
     */
    UserPhone:string
    /**
     * 受邀成员姓名
     */
    UserName:string
    /**
     * 是否有财务权限(true:是,false:否,默认为否)
     */
    IsFinance:string
}
    
/**
 * AddMemberToProjectResponse - 
 */
export interface AddMemberToProjectResponse {
}
    
/**
 * SetNetworkMaskRequest - 
 */
export interface SetNetworkMaskRequest {
    /**
     * 短信验证码
     */
    Code:string
    /**
     * API调用网络掩码，多个IP以英文逗号分隔。默认空字符串，不限制登录IP。
     */
    APINetworkMask?:string
    /**
     * 登录网络掩码，多个IP以英文逗号分隔。默认空字符串，不限制登录IP。
     */
    LoginNetworkMask?:string
}
    
/**
 * SetNetworkMaskResponse - 
 */
export interface SetNetworkMaskResponse {
}
    
/**
 * RemoveMemberFromProjectRequest - 
 */
export interface RemoveMemberFromProjectRequest {
    /**
     * 项目ID，请参考[GetProjectList接口](../summary/get_project_list.html)的描述。不填写为默认项目，子帐号必须填写。 
     */
    ProjectId:string
    /**
     * 需要被移除成员Email
     */
    MemberEmail:string
}
    
/**
 * RegionInfo - 
 */
export interface RegionInfo {
    /**
     * 数据中心ID
     */
    RegionId:number
    /**
     * 数据中心名称
     */
    RegionName:string
    /**
     * 是否用户当前默认数据中心
     */
    IsDefault:boolean
    /**
     * 用户在此数据中心的权限位
     */
    BitMaps:string
    /**
     * 地域名字，如cn-bj
     */
    Region:string
    /**
     * 可用区名字，如cn-bj-01
     */
    Zone:string
}
    
/**
 * GetProjectListResponse - 
 */
export interface GetProjectListResponse {
    /**
     * 项目总数
     */
    ProjectCount:number
    /**
     * JSON格式的项目列表实例
     */
    ProjectSet:
            ProjectListInfo[]
}
    
/**
 * GetRegionResponse - 
 */
export interface GetRegionResponse {
    /**
     * 各数据中心信息
     */
    Regions?:
            RegionInfo[]
}
    
/**
 * FreezeMemberRequest - 
 */
export interface FreezeMemberRequest {
    /**
     * 需要被冻结的成员Email
     */
    MemberEmail:string
}
    
/**
 * InviteSubaccountResponse - 
 */
export interface InviteSubaccountResponse {
}
    
/**
 * FreezeMemberResponse - 
 */
export interface FreezeMemberResponse {
}
