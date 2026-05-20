import Client from '../../core/client';
import { ConfigOptions } from '../../core/config';
import { CredentialOptions } from '../../core/credential';
/**
 * This client is used to call actions of **uwsc** service
 */
export default class UWSCClient extends Client {
    constructor({ config, credential, }: {
        config: ConfigOptions;
        credential: CredentialOptions;
    });
    /**
     * AddExportLineRules - 添加加速规则
     *
     * See also: https://docs.ucloud.cn/api/uwsc-api/add_export_line_rules
     */
    addExportLineRules(request?: AddExportLineRulesRequest): Promise<AddExportLineRulesResponse>;
    /**
     * BindCPE - 绑定 CPE
     *
     * See also: https://docs.ucloud.cn/api/uwsc-api/bind_cpe
     */
    bindCPE(request?: BindCPERequest): Promise<BindCPEResponse>;
    /**
     * CreateCPE - 创建 CPE
     *
     * See also: https://docs.ucloud.cn/api/uwsc-api/create_cpe
     */
    createCPE(request?: CreateCPERequest): Promise<CreateCPEResponse>;
    /**
     * CreateExportLine - 创建加速线路
     *
     * See also: https://docs.ucloud.cn/api/uwsc-api/create_export_line
     */
    createExportLine(request?: CreateExportLineRequest): Promise<CreateExportLineResponse>;
    /**
     * DeleteExportLine - 删除加速线路
     *
     * See also: https://docs.ucloud.cn/api/uwsc-api/delete_export_line
     */
    deleteExportLine(request?: DeleteExportLineRequest): Promise<DeleteExportLineResponse>;
    /**
     * DeleteExportLineRules - 删除加速规则
     *
     * See also: https://docs.ucloud.cn/api/uwsc-api/delete_export_line_rules
     */
    deleteExportLineRules(request?: DeleteExportLineRulesRequest): Promise<DeleteExportLineRulesResponse>;
    /**
     * DescribeCPE - 查询 CPE 信息
     *
     * See also: https://docs.ucloud.cn/api/uwsc-api/describe_cpe
     */
    describeCPE(request?: DescribeCPERequest): Promise<DescribeCPEResponse>;
    /**
     * DescribeExportLine - 查询CPE绑定的加速线路信息
     *
     * See also: https://docs.ucloud.cn/api/uwsc-api/describe_export_line
     */
    describeExportLine(request?: DescribeExportLineRequest): Promise<DescribeExportLineResponse>;
    /**
     * DescribeExportLineRules - 查询白名单
     *
     * See also: https://docs.ucloud.cn/api/uwsc-api/describe_export_line_rules
     */
    describeExportLineRules(request?: DescribeExportLineRulesRequest): Promise<DescribeExportLineRulesResponse>;
    /**
     * UpdateExportLine - 修改加速线路
     *
     * See also: https://docs.ucloud.cn/api/uwsc-api/update_export_line
     */
    updateExportLine(request?: UpdateExportLineRequest): Promise<UpdateExportLineResponse>;
    /**
     * UpgradeExportLine - 升级加速线路
     *
     * See also: https://docs.ucloud.cn/api/uwsc-api/upgrade_export_line
     */
    upgradeExportLine(request?: UpgradeExportLineRequest): Promise<UpgradeExportLineResponse>;
}
/**
 * AddExportLineRules - 添加加速规则
 */
export interface AddExportLineRulesRequest {
    /**
     * UReach资源ID
     */
    ResourceId: string;
    /**
     * 白名单类型：Developer、CrossBorder
     */
    RuleTypes: string[];
}
/**
 * AddExportLineRules - 添加加速规则
 */
export interface AddExportLineRulesResponse {
}
/**
 * BindCPE - 绑定 CPE
 */
export interface BindCPERequest {
    /**
     * cpe id
     */
    CPEId: string;
    /**
     * sn id
     */
    Sn: string;
}
/**
 * BindCPE - 绑定 CPE
 */
export interface BindCPEResponse {
}
/**
 * CreateCPE - 创建 CPE
 */
export interface CreateCPERequest {
    /**
     * cpe 名称
     */
    Name: string;
    /**
     * cpe 备注
     */
    Remark: string;
    /**
     * 设备型号，枚举值: UCPE3600、UCPE3601
     */
    DeviceType: string;
    /**
     * 标签：UReach智能网关：Access
     */
    Label?: string;
    /**
     * 结构体，详见UserInfo模型
     */
    UserInfo?: string;
    /**
     * 数量，默认为1
     */
    Count?: number;
}
/**
 * CreateCPE - 创建 CPE
 */
export interface CreateCPEResponse {
    /**
     * cpe id
     */
    CPEId: string;
}
/**
 * CreateExportLine - 创建加速线路
 */
export interface CreateExportLineRequest {
    /**
     * 本端地域
     */
    FromRegion: string;
    /**
     * 目标地域
     */
    ToRegion: string;
    /**
     * IP类型：International、BGP、Native、Resident
     */
    IpType: string;
    /**
     * CPE Id
     */
    CPEId: string;
    /**
     * 套餐类型：2M-Entry、5M-Basic、10M-Enterprise
     */
    PkgType?: string;
    /**
     * 带宽大小
     */
    Bandwidth?: number;
    /**
     * 资源名称
     */
    Name?: string;
    /**
     * 业务组名称, 默认为 "Default"
     */
    Tag?: string;
    /**
     * 计费模式。枚举值为： Year，按年付费； Month，按月付费； Dynamic，按小时付费（需开启权限）。默认为月付
     */
    ChargeType?: string;
    /**
     * 购买时长。默认: 1。按小时购买(Dynamic)时无需此参数。 月付时，此参数传0，代表了购买至月末。
     */
    Quantity?: number;
    /**
     * 备注
     */
    Remark?: string;
    /**
     * 计费类型：fixed-bw，固定带宽；traffic，流量计费
     */
    PayMode?: string;
    /**
     * 代金券ID。请登录用户中心查看
     */
    CouponId?: number;
}
/**
 * CreateExportLine - 创建加速线路
 */
export interface CreateExportLineResponse {
    /**
     * 资源ID
     */
    ResourceId: string;
}
/**
 * DeleteExportLine - 删除加速线路
 */
export interface DeleteExportLineRequest {
    /**
     * UReach资源ID
     */
    ResourceId: string;
}
/**
 * DeleteExportLine - 删除加速线路
 */
export interface DeleteExportLineResponse {
}
/**
 * DeleteExportLineRules - 删除加速规则
 */
export interface DeleteExportLineRulesRequest {
    /**
     * UReach资源ID
     */
    ResourceId: string;
    /**
     * 白名单类型：Developer、CrossBorder
     */
    RuleTypes: string[];
}
/**
 * DeleteExportLineRules - 删除加速规则
 */
export interface DeleteExportLineRulesResponse {
}
/**
 * DescribeCPE - 查询 CPE 信息
 */
export interface DescribeCPERequest {
    /**
     * cpe id
     */
    CPEId?: string;
    /**
     * 标签：Access、Network
     */
    Label?: string;
}
/**
 * DescribeCPE - 查询 CPE 信息
 */
export interface DescribeCPEResponse {
    /**
     * cpe 详情
     */
    CPEInfos?: {
        /**
         * 资源ID
         */
        CPEId?: string;
        /**
         * 资源名称
         */
        CPEName?: string;
        /**
         * 备注
         */
        Remark?: string;
        /**
         * 设备型号
         */
        DeviceTypeName?: string;
        /**
         * 供应商
         */
        Vendor?: string;
        /**
         * 绑定的UWAN资源ID
         */
        PopGwId?: string[];
        /**
         * 设备SN
         */
        Sn?: string;
        /**
         * 状态
         */
        Status?: number;
        /**
         * 配置更新时间
         */
        ConfUpdateTime?: number;
        /**
         * 端口
         */
        Ports?: string[];
        /**
         * 链路数量
         */
        LinkNum?: number;
        /**
         * 创建时间
         */
        CreateTime?: number;
        /**
         * 是否与线路绑定
         */
        LineStatus?: string;
        /**
         * 绑定的UReach线路资源ID
         */
        ResourceIds?: string[];
        /**
         * 有效使用时间(天)
         */
        UseTime?: number;
    }[];
}
/**
 * DescribeExportLine - 查询CPE绑定的加速线路信息
 */
export interface DescribeExportLineRequest {
    /**
     * CPE资源ID
     */
    CPEId?: string;
    /**
     * UReach资源ID
     */
    ResourceId?: string;
}
/**
 * DescribeExportLine - 查询CPE绑定的加速线路信息
 */
export interface DescribeExportLineResponse {
    /**
     * 线路信息
     */
    LineInfos?: {
        /**
         * 名称
         */
        Name?: string;
        /**
         * 备注
         */
        Remark?: string;
        /**
         * 线路资源ID
         */
        ResourceId?: string;
        /**
         * 线路资源ID对应的加速线路ID
         */
        InstanceId?: string;
        /**
         * 带宽大小(Mbps)
         */
        Bandwidth?: number;
        /**
         * 付费方式(按月、按年等)
         */
        ChargeType?: string;
        /**
         * 计费方式(固定带宽: fixed-bw；流量计费：traffic)
         */
        PayMode?: string;
        /**
         * 入口地域
         */
        FromRegion?: string;
        /**
         * 入口地域名称
         */
        FromRegionName?: string;
        /**
         * 出口地域
         */
        ToRegion?: string;
        /**
         * 出口地域名称
         */
        ToRegionName?: string;
        /**
         *
         */
        IP?: string[];
        /**
         * 线路是否绑定CPE；"1"：已绑定；"0"未绑定
         */
        Status?: string;
        /**
         * 创建时间
         */
        CreateTime?: number;
        /**
         * 到期时间
         */
        ExpireTime?: number;
        /**
         * 线路绑定的CPE资源ID
         */
        CPEIds?: string[];
        /**
         * 套餐类型
         */
        PkgType?: string;
        /**
         * IP类型
         */
        IpType?: string;
        /**
         * 是否过期(normal/expire)
         */
        InstanceStatus?: string;
        /**
         *
         */
        Socks?: {
            /**
             *
             */
            Addr?: string;
            /**
             *
             */
            Port?: number;
            /**
             *
             */
            Account?: string;
        };
        /**
         * 源IP地址
         */
        Source?: string[];
    }[];
}
/**
 * DescribeExportLineRules - 查询白名单
 */
export interface DescribeExportLineRulesRequest {
    /**
     * UReach资源ID
     */
    ResourceId?: string;
    /**
     * 白名单类型
     */
    RuleType?: string;
}
/**
 * DescribeExportLineRules - 查询白名单
 */
export interface DescribeExportLineRulesResponse {
    /**
     * 白名单信息
     */
    WhiteListInfos: {
        /**
         *
         */
        RuleType?: string;
        /**
         *
         */
        Name?: string;
        /**
         *
         */
        Remark?: string;
    }[];
}
/**
 * UpdateExportLine - 修改加速线路
 */
export interface UpdateExportLineRequest {
    /**
     * UReach资源ID
     */
    ResourceId: string;
    /**
     * 带宽大小（仅自定义套餐支持修改）
     */
    Bandwidth: string;
}
/**
 * UpdateExportLine - 修改加速线路
 */
export interface UpdateExportLineResponse {
}
/**
 * UpgradeExportLine - 升级加速线路
 */
export interface UpgradeExportLineRequest {
    /**
     * UReach资源ID
     */
    ResourceId: string;
    /**
     * 目标套餐类型：2M-Entry、5M-Basic、10M-Enterprise
     */
    PkgType: string;
    /**
     * 原IP类型：International、BGP、Native、Resident
     */
    IpType: string;
    /**
     * 带宽大小
     */
    Bandwidth?: number;
    /**
     * 计费模式。枚举值为： Year，按年付费； Month，按月付费； Dynamic，按小时付费（需开启权限）。默认为月付
     */
    ChargeType?: string;
    /**
     * 购买时长。默认: 1。按小时购买(Dynamic)时无需此参数。 月付时，此参数传0，代表了购买至月末。
     */
    Quantity?: number;
    /**
     * 代金券ID。请登录用户中心查看
     */
    CouponId?: number;
}
/**
 * UpgradeExportLine - 升级加速线路
 */
export interface UpgradeExportLineResponse {
}
