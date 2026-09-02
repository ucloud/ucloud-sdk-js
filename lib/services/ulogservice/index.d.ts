import Client from '../../core/client';
import { ConfigOptions } from '../../core/config';
import { CredentialOptions } from '../../core/credential';
/**
 * This client is used to call actions of **ulogservice** service
 */
export default class ULogServiceClient extends Client {
    constructor({ config, credential, }: {
        config: ConfigOptions;
        credential: CredentialOptions;
    });
    /**
     * BindULogServiceGroupToCollectConf - 日志主题采集配置绑定机器组
     *
     * See also: https://docs.ucloud.cn/api/ulogservice-api/bind_u_log_service_group_to_collect_conf
     */
    bindULogServiceGroupToCollectConf(request?: BindULogServiceGroupToCollectConfRequest): Promise<BindULogServiceGroupToCollectConfResponse>;
    /**
     * CreateULogServiceCollectConf - 创建日志主题采集配置
     *
     * See also: https://docs.ucloud.cn/api/ulogservice-api/create_u_log_service_collect_conf
     */
    createULogServiceCollectConf(request?: CreateULogServiceCollectConfRequest): Promise<CreateULogServiceCollectConfResponse>;
    /**
     * CreateULogServiceLogSet - 创建日志集
     *
     * See also: https://docs.ucloud.cn/api/ulogservice-api/create_u_log_service_log_set
     */
    createULogServiceLogSet(request?: CreateULogServiceLogSetRequest): Promise<CreateULogServiceLogSetResponse>;
    /**
     * CreateULogServiceMachineGroup - 创建机器组
     *
     * See also: https://docs.ucloud.cn/api/ulogservice-api/create_u_log_service_machine_group
     */
    createULogServiceMachineGroup(request?: CreateULogServiceMachineGroupRequest): Promise<CreateULogServiceMachineGroupResponse>;
    /**
     * CreateULogServiceTopic - 创建ULogService主题
     *
     * See also: https://docs.ucloud.cn/api/ulogservice-api/create_u_log_service_topic
     */
    createULogServiceTopic(request?: CreateULogServiceTopicRequest): Promise<CreateULogServiceTopicResponse>;
    /**
     * DeleteULogServiceCollectConf - 删除日志主题采集配置
     *
     * See also: https://docs.ucloud.cn/api/ulogservice-api/delete_u_log_service_collect_conf
     */
    deleteULogServiceCollectConf(request?: DeleteULogServiceCollectConfRequest): Promise<DeleteULogServiceCollectConfResponse>;
    /**
     * DeleteULogServiceLogSet - 删除日志集
     *
     * See also: https://docs.ucloud.cn/api/ulogservice-api/delete_u_log_service_log_set
     */
    deleteULogServiceLogSet(request?: DeleteULogServiceLogSetRequest): Promise<DeleteULogServiceLogSetResponse>;
    /**
     * DeleteULogServiceMachineGroup - 删除机器组
     *
     * See also: https://docs.ucloud.cn/api/ulogservice-api/delete_u_log_service_machine_group
     */
    deleteULogServiceMachineGroup(request?: DeleteULogServiceMachineGroupRequest): Promise<DeleteULogServiceMachineGroupResponse>;
    /**
     * DeleteULogServiceTopic - 删除ULogService主题
     *
     * See also: https://docs.ucloud.cn/api/ulogservice-api/delete_u_log_service_topic
     */
    deleteULogServiceTopic(request?: DeleteULogServiceTopicRequest): Promise<DeleteULogServiceTopicResponse>;
    /**
     * DescribeULogServiceMachineGroup - 查询日志采集机器组
     *
     * See also: https://docs.ucloud.cn/api/ulogservice-api/describe_u_log_service_machine_group
     */
    describeULogServiceMachineGroup(request?: DescribeULogServiceMachineGroupRequest): Promise<DescribeULogServiceMachineGroupResponse>;
    /**
     * GetULogServiceTopicField - 获取ULogService主题索引字段
     *
     * See also: https://docs.ucloud.cn/api/ulogservice-api/get_u_log_service_topic_field
     */
    getULogServiceTopicField(request?: GetULogServiceTopicFieldRequest): Promise<GetULogServiceTopicFieldResponse>;
    /**
     * ListULogServiceCollectConf - 查询日志主题采集配置列表
     *
     * See also: https://docs.ucloud.cn/api/ulogservice-api/list_u_log_service_collect_conf
     */
    listULogServiceCollectConf(request?: ListULogServiceCollectConfRequest): Promise<ListULogServiceCollectConfResponse>;
    /**
     * ListULogServiceLogSet - 查询日志集列表
     *
     * See also: https://docs.ucloud.cn/api/ulogservice-api/list_u_log_service_log_set
     */
    listULogServiceLogSet(request?: ListULogServiceLogSetRequest): Promise<ListULogServiceLogSetResponse>;
    /**
     * ListULogServiceMachineGroup - 查看机器组列表
     *
     * See also: https://docs.ucloud.cn/api/ulogservice-api/list_u_log_service_machine_group
     */
    listULogServiceMachineGroup(request?: ListULogServiceMachineGroupRequest): Promise<ListULogServiceMachineGroupResponse>;
    /**
     * ListULogServiceTopic - 获取ULogService主题
     *
     * See also: https://docs.ucloud.cn/api/ulogservice-api/list_u_log_service_topic
     */
    listULogServiceTopic(request?: ListULogServiceTopicRequest): Promise<ListULogServiceTopicResponse>;
    /**
     * QueryULogServiceLog - 查询ULogService日志
     *
     * See also: https://docs.ucloud.cn/api/ulogservice-api/query_u_log_service_log
     */
    queryULogServiceLog(request?: QueryULogServiceLogRequest): Promise<QueryULogServiceLogResponse>;
    /**
     * UpdateULogServiceCollectConf - 修改日志主题采集配置
     *
     * See also: https://docs.ucloud.cn/api/ulogservice-api/update_u_log_service_collect_conf
     */
    updateULogServiceCollectConf(request?: UpdateULogServiceCollectConfRequest): Promise<UpdateULogServiceCollectConfResponse>;
    /**
     * UpdateULogServiceMachineGroup - 更新日志机器组
     *
     * See also: https://docs.ucloud.cn/api/ulogservice-api/update_u_log_service_machine_group
     */
    updateULogServiceMachineGroup(request?: UpdateULogServiceMachineGroupRequest): Promise<UpdateULogServiceMachineGroupResponse>;
    /**
     * UpdateULogServiceTopicField - 更新ULogService主题索引字段
     *
     * See also: https://docs.ucloud.cn/api/ulogservice-api/update_u_log_service_topic_field
     */
    updateULogServiceTopicField(request?: UpdateULogServiceTopicFieldRequest): Promise<UpdateULogServiceTopicFieldResponse>;
}
/**
 * BindULogServiceGroupToCollectConf - 日志主题采集配置绑定机器组
 */
export interface BindULogServiceGroupToCollectConfRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * 日志主题ID
     */
    TopicId: string;
    /**
     * 采集配置id
     */
    CollectConfId: number;
    /**
     * 机器组ID，是一个数组
     */
    MachineGroupIds?: number;
}
/**
 * BindULogServiceGroupToCollectConf - 日志主题采集配置绑定机器组
 */
export interface BindULogServiceGroupToCollectConfResponse {
}
/**
 * CreateULogServiceCollectConf - 创建日志主题采集配置
 */
export interface CreateULogServiceCollectConfRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * 日志主题ID
     */
    TopicId: string;
    /**
     * 配置名称
     */
    Name: string;
    /**
     * 日志解析类型，决定了如何结构化日志。可选值: json:json 格式，delimiter:分隔符，full_regex:完全正则，multi_line_full_regex:多行完全正则，multi_line_delimiter: 多行分隔符正则，minimal_list:单行全文日志,multi_line:多行全文日志
     */
    LogType: string;
    /**
     * 采集策略。可选值: full (全量采集存量日志), increment (从当前时间点增量采集)。默认为 full。
     */
    CollectPolicy: string;
    /**
     * 日志原文的编码格式。可选值: utf-8, gbk。默认为 utf-8。
     */
    Encode?: string;
    /**
     * 索引字段key，是一个数组
     */
    Keys?: string[];
    /**
     * 当 LogType 为delimiter 或multi_line_delimiter时可选，支持多字符分隔，需要转换成Base64
     */
    Delimiter?: string;
    /**
     * 行首正则表达式。当 logType 为多行模式 (如 multi_line 或 multi_line_full_regex或multi_line_delimiter) 时，用于标识一条新日志的开始。需要转换成Base64
     */
    MatchRule?: string;
    /**
     * 日志提取正则表达式。当 logType 为正则模式 (如 full_regex,multi_line_full_regex) 时，用于从日志中提取字段。需要转换成Base64
     */
    ExtractRule?: string;
    /**
     * 如果 UnMatchUpload 为 true，无法解析的日志原文将被存放在此字段指定的 Key 下。默认为 LogParseFailure。
     */
    UnMatchKey?: string;
    /**
     *
     */
    FilePaths?: {
        /**
         * 定义采集路径，数组类型
         */
        Path?: string;
        /**
         * 定义采集路径的文件名，数组类型
         */
        File?: string;
    }[];
}
/**
 * CreateULogServiceCollectConf - 创建日志主题采集配置
 */
export interface CreateULogServiceCollectConfResponse {
}
/**
 * CreateULogServiceLogSet - 创建日志集
 */
export interface CreateULogServiceLogSetRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * 日志集名称  长度为1~64位
     */
    LogSetName: string;
    /**
     * 日志集备注  长度为0~255位
     */
    LogSetRemark?: string;
}
/**
 * CreateULogServiceLogSet - 创建日志集
 */
export interface CreateULogServiceLogSetResponse {
    /**
     * 日志集资源ID
     */
    LogSetId?: string;
}
/**
 * CreateULogServiceMachineGroup - 创建机器组
 */
export interface CreateULogServiceMachineGroupRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * 日志服务实例资源ID
     */
    InstanceId: string;
    /**
     * 机器组名称;格式校验：^[\w]{1,23}$
     */
    Name: string;
    /**
     * 采集客户端识别模式;可选值 LABEL | IP;
     */
    Type: string;
    /**
     * 采集客户端识别标识，是一个数组
     */
    Labels?: string;
    /**
     * 机器IP，如果Type是IP，那么Ips可以填写IP，是一个数组
     */
    Ips?: string;
}
/**
 * CreateULogServiceMachineGroup - 创建机器组
 */
export interface CreateULogServiceMachineGroupResponse {
}
/**
 * CreateULogServiceTopic - 创建ULogService主题
 */
export interface CreateULogServiceTopicRequest {
    /**
     * 主题名称，校验规则"^[\w]{1,64}$"
     */
    TopicName: string;
    /**
     * 保存时间 1~730 天
     */
    ReserveAge: number;
    /**
     * 日志集ID
     */
    LogSetId: string;
    /**
     * 分区数量，固定是2
     */
    TopicShardNum: number;
}
/**
 * CreateULogServiceTopic - 创建ULogService主题
 */
export interface CreateULogServiceTopicResponse {
    /**
     * 主题ID
     */
    TopicId?: string;
}
/**
 * DeleteULogServiceCollectConf - 删除日志主题采集配置
 */
export interface DeleteULogServiceCollectConfRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * 日志主题ID
     */
    TopicId: string;
    /**
     * 日志主题采集配置ID
     */
    CollectConfId: number;
}
/**
 * DeleteULogServiceCollectConf - 删除日志主题采集配置
 */
export interface DeleteULogServiceCollectConfResponse {
}
/**
 * DeleteULogServiceLogSet - 删除日志集
 */
export interface DeleteULogServiceLogSetRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * 日志集ID
     */
    LogSetId: string;
}
/**
 * DeleteULogServiceLogSet - 删除日志集
 */
export interface DeleteULogServiceLogSetResponse {
}
/**
 * DeleteULogServiceMachineGroup - 删除机器组
 */
export interface DeleteULogServiceMachineGroupRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * 删除的机器组ID
     */
    Id: number;
}
/**
 * DeleteULogServiceMachineGroup - 删除机器组
 */
export interface DeleteULogServiceMachineGroupResponse {
}
/**
 * DeleteULogServiceTopic - 删除ULogService主题
 */
export interface DeleteULogServiceTopicRequest {
    /**
     * 主题Id
     */
    TopicId: string;
}
/**
 * DeleteULogServiceTopic - 删除ULogService主题
 */
export interface DeleteULogServiceTopicResponse {
}
/**
 * DescribeULogServiceMachineGroup - 查询日志采集机器组
 */
export interface DescribeULogServiceMachineGroupRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * 机器组ID
     */
    Id: string;
}
/**
 * DescribeULogServiceMachineGroup - 查询日志采集机器组
 */
export interface DescribeULogServiceMachineGroupResponse {
    /**
     * 机器组信息
     */
    MachineGroup: {
        /**
         * 机器组ID
         */
        Id?: number;
        /**
         * 机器组名称
         */
        Name?: string;
        /**
         * 机器组类型，取值有：LABEL和IP
         */
        Type?: string;
        /**
         * LogAgent信息，数组类型
         */
        LogAgents?: {
            /**
             * 主机标签
             */
            Label?: string;
            /**
             * 主机IP
             */
            HostIp?: string;
            /**
             * logagent id
             */
            InstanceId?: string;
            /**
             * LogAgent版本
             */
            AgentVersion?: string;
            /**
             * logagent状态，NORMAL：正常，OFFLINE： 离线
             */
            Status?: string;
            /**
             * 离线时间，单位是ms
             */
            OffLineTime?: string;
        };
        /**
         * 机器组标签，数组类型
         */
        Labels?: string[];
        /**
         * 机器组Ip，数组类型
         */
        Ips?: string;
    };
}
/**
 * GetULogServiceTopicField - 获取ULogService主题索引字段
 */
export interface GetULogServiceTopicFieldRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * 主题Id
     */
    TopicId: string;
}
/**
 * GetULogServiceTopicField - 获取ULogService主题索引字段
 */
export interface GetULogServiceTopicFieldResponse {
    /**
     * 索引字段数据，是一个数组
     */
    Data: {
        /**
         * 索引名称
         */
        FieldName?: string;
        /**
         * 索引类型，可取的值有: long, double, text
         */
        FieldType?: string;
        /**
         * 是否保留字段，true表示保留字段，false表示非保留字段
         */
        IsReserved?: boolean;
    }[];
}
/**
 * ListULogServiceCollectConf - 查询日志主题采集配置列表
 */
export interface ListULogServiceCollectConfRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * 日志主题ID
     */
    TopicId: number;
    /**
     * 采集配置ID
     */
    CollectConfId?: number;
}
/**
 * ListULogServiceCollectConf - 查询日志主题采集配置列表
 */
export interface ListULogServiceCollectConfResponse {
    /**
     * 日志采集配置列表
     */
    CollectConfs: {
        /**
         * 日志主题ID
         */
        TopicId: number;
        /**
         * State
         */
        State: number;
        /**
         * 机器组ID，是一个数组
         */
        MachineGroups: {
            /**
             * 机器组ID
             */
            Id?: string;
            /**
             * 机器组名称
             */
            Name?: string;
            /**
             * 采集器识别类型：LABEL：机器标识，IP：IP类型
             */
            Type?: string;
            /**
             * 创建时间
             */
            CreateTime?: number;
            /**
             * 修改时间
             */
            UpdateTime?: number;
        }[];
        /**
         * Id
         */
        Id?: number;
        /**
         * 日志采集配置名称
         */
        Name?: string;
        /**
         * 日志解析类型，决定了如何结构化日志。可选值: json:json 格式，delimiter:分隔符，full_regex:完全正则，multi_line_full_regex:多行完全正则，multi_line_delimiter: 多行分隔符正则，minimal_list:单行全文日志,multi_line:多行全文日志
         */
        LogType?: string;
        /**
         * 采集策略。可选值: full (全量采集存量日志), increment (从当前时间点增量采集)。默认为 full。
         */
        CollectPolicy?: string;
        /**
         * 日志原文的编码格式。可选值: utf-8, gbk。默认为 utf-8。
         */
        Encode?: string;
        /**
         * 索引字段key，是一个数组
         */
        Keys?: string;
        /**
         * 当 LogType 为delimiter 或multi_line_delimiter时可选，支持多字符分隔，需要转换成Base64
         */
        Delimiter?: string;
        /**
         * 行首正则表达式。当 logType 为多行模式 (如 multi_line 或 multi_line_full_regex或multi_line_delimiter) 时，用于标识一条新日志的开始。需要转换成Base64
         */
        MatchRule?: string;
        /**
         * 日志提取正则表达式。当 logType 为正则模式 (如 full_regex,multi_line_full_regex) 时，用于从日志中提取字段。需要转换成Base64
         */
        ExtractRule?: string;
        /**
         * 如果 UnMatchUpload 为 true，无法解析的日志原文将被存放在此字段指定的 Key 下。默认为 LogParseFailure。
         */
        UnMatchKey?: string;
        /**
         * FilePaths
         */
        FilePaths?: {
            /**
             * 路径
             */
            Path?: string;
            /**
             * 文件名
             */
            File?: string;
        }[];
        /**
         * CreateTime
         */
        CreateTime?: number;
        /**
         * updateTime
         */
        UpdateTime?: number;
    };
}
/**
 * ListULogServiceLogSet - 查询日志集列表
 */
export interface ListULogServiceLogSetRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
}
/**
 * ListULogServiceLogSet - 查询日志集列表
 */
export interface ListULogServiceLogSetResponse {
    /**
     * 返回日志主题数据，是一个数组
     */
    Data?: {
        /**
         * 日志集下主题数量
         */
        TopicCount?: number;
        /**
         * 日志集备注
         */
        LogSetRemark?: string;
        /**
         * 日志集名称
         */
        LogSetName?: string;
        /**
         * 创建时间
         */
        CreateTime?: number;
        /**
         * 更新时间
         */
        UpdateTime?: number;
    }[];
}
/**
 * ListULogServiceMachineGroup - 查看机器组列表
 */
export interface ListULogServiceMachineGroupRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
}
/**
 * ListULogServiceMachineGroup - 查看机器组列表
 */
export interface ListULogServiceMachineGroupResponse {
    /**
     * 机器组信息列表
     */
    MachineGroups: {
        /**
         * 机器组ID
         */
        Id?: string;
        /**
         * 机器组名称
         */
        Name?: string;
        /**
         * 采集器识别类型：LABEL：机器标识，IP：IP类型
         */
        Type?: string;
        /**
         * 创建时间
         */
        CreateTime?: number;
        /**
         * 修改时间
         */
        UpdateTime?: number;
    }[];
}
/**
 * ListULogServiceTopic - 获取ULogService主题
 */
export interface ListULogServiceTopicRequest {
    /**
     * 日志集ID
     */
    LogSetId: string;
    /**
     * 分页起始条目数, 默认为0
     */
    Offset?: number;
    /**
     * 分页限制数,默认为30
     */
    Limit?: number;
}
/**
 * ListULogServiceTopic - 获取ULogService主题
 */
export interface ListULogServiceTopicResponse {
    /**
     * 主题列表
     */
    Data: {
        /**
         * 主题名称
         */
        TopicName?: string;
        /**
         * 主题ID
         */
        TopicId?: string;
        /**
         * 分区数量，固定是2
         */
        TopicShardNum?: number;
        /**
         * 保存时间 1~730 天
         */
        ReserveAge?: number;
        /**
         * 是否保留：0 - NORMAL, 1 - RESERVED
         */
        IsReserved?: number;
        /**
         * 主题描述
         */
        TopicDesc?: string;
    }[];
    /**
     * 主题总数
     */
    TotalCount: number;
}
/**
 * QueryULogServiceLog - 查询ULogService日志
 */
export interface QueryULogServiceLogRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * 查询条件，使用Base64编码。目前只支持查询索引，多个索引查询使用AND。比如:index1:http AND index2:http2
     */
    QueryCriteria: string;
    /**
     * 日志时间排序;可选值ASC|DESC
     */
    SortOrder: string;
    /**
     * 主题ID
     */
    TopicId: string;
    /**
     * 起始日志时间，秒级时间戳
     */
    StartTime?: number;
    /**
     * 终止日志时间，秒级时间戳
     */
    EndTime?: number;
    /**
     * 一次返回条数，默认20。仅当检索分析语句不包含SQL时有效。SQL结果条数方式可以在SQL里使用limit语法。
     */
    Size?: number;
    /**
     * Deprecated. 滚动加载参数ScrollId
     */
    ScrollId?: string;
    /**
     * 滚动加载参数,上一页最后一条数据的ID
     */
    LastId?: string;
    /**
     * 滚动加载参数,上一页最后一条数据的timestamp
     */
    LastTimestamp?: string;
}
/**
 * QueryULogServiceLog - 查询ULogService日志
 */
export interface QueryULogServiceLogResponse {
    /**
     * 请求结果
     */
    Data?: {
        /**
         * 所属日志ID
         */
        TopicId: string;
        /**
         * 所属日志名称
         */
        TopicName: string;
        /**
         * 检索结果是否到底
         */
        IsOver: boolean;
        /**
         * 日志内容
         */
        Contents: {
            /**
             * 日志标识ID
             */
            LogId: string;
            /**
             * 日志来源主机
             */
            HostName: string;
            /**
             * 日志文件路径
             */
            FileName: string;
            /**
             * 日志时间
             */
            Timestamp: number;
            /**
             * JSON格式的日志内容
             */
            LogJson: string;
        };
        /**
         * 滚动检索Id Deprecated
         */
        ScrollId?: string;
        /**
         * 滚动检索,当前页最后一条数据ID
         */
        LastId?: string;
        /**
         * 滚动检索,当前页最后一条数据Timestamp
         */
        LastTimestamp?: string;
        /**
         * 当使用SQL语句查询时，数据通过AnalysisRecords字段返回，Columns字段返回的是字段名和类型
         */
        Columns?: {
            /**
             * 字段名
             */
            Name: string;
            /**
             * 字段类型
             */
            Type: string;
        }[];
        /**
         * 当使用SQL语句查询时，数据通过该字段返回
         */
        AnalysisRecords?: string[];
    };
}
/**
 * UpdateULogServiceCollectConf - 修改日志主题采集配置
 */
export interface UpdateULogServiceCollectConfRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * 日志主题ID
     */
    TopicId: string;
    /**
     * 日志主题采集配置ID
     */
    CollectConfId: number;
    /**
     * 日志解析类型，决定了如何结构化日志。可选值: json:json 格式，delimiter:分隔符，full_regex:完全正则，multi_line_full_regex:多行完全正则，multi_line_delimiter: 多行分隔符正则，minimal_list:单行全文日志,multi_line:多行全文日志
     */
    LogType: string;
    /**
     * 采集策略。可选值: full (全量采集存量日志), increment (从当前时间点增量采集)。默认为 full。
     */
    CollectPolicy: string;
    /**
     * 日志原文的编码格式。可选值: utf-8, gbk。默认为 utf-8。
     */
    Encode?: string;
    /**
     * 索引字段key，是一个数组
     */
    Keys?: string[];
    /**
     * 当 LogType 为delimiter 或multi_line_delimiter时可选，支持多字符分隔，需要转换成Base64
     */
    Delimiter?: string;
    /**
     * 行首正则表达式。当 logType 为多行模式 (如 multi_line 或 multi_line_full_regex或multi_line_delimiter) 时，用于标识一条新日志的开始。需要转换成Base64
     */
    MatchRule?: string;
    /**
     * 日志提取正则表达式。当 logType 为正则模式 (如 full_regex,multi_line_full_regex) 时，用于从日志中提取字段。需要转换成Base64
     */
    ExtractRule?: string;
    /**
     * 如果 UnMatchUpload 为 true，无法解析的日志原文将被存放在此字段指定的 Key 下。默认为 LogParseFailure。
     */
    UnMatchKey?: string;
    /**
     *
     */
    FilePaths?: {
        /**
         * 定义采集路径，数组类型
         */
        Path?: string;
        /**
         * 定义采集路径的文件名，数组类型
         */
        File?: string;
    }[];
}
/**
 * UpdateULogServiceCollectConf - 修改日志主题采集配置
 */
export interface UpdateULogServiceCollectConfResponse {
}
/**
 * UpdateULogServiceMachineGroup - 更新日志机器组
 */
export interface UpdateULogServiceMachineGroupRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * 机器组名称; 格式校验：^[\w]{1,255}$
     */
    Name: string;
    /**
     * 采集客户端识别模式;可选值 LABEL | IP;
     */
    Type: string;
    /**
     * 机器组ID
     */
    Id: number;
    /**
     * 采集客户端识别标识，数组类型
     */
    Labels?: string;
    /**
     * 机器IP，如果Type是IP，那么Ips可以填写IP，是一个数组
     */
    Ips?: string;
}
/**
 * UpdateULogServiceMachineGroup - 更新日志机器组
 */
export interface UpdateULogServiceMachineGroupResponse {
}
/**
 * UpdateULogServiceTopicField - 更新ULogService主题索引字段
 */
export interface UpdateULogServiceTopicFieldRequest {
    /**
     * 可用区。参见 [可用区列表](https://docs.ucloud.cn/api/summary/regionlist)
     */
    Zone: string;
    /**
     * 主题Id
     */
    TopicId: string;
    /**
     *
     */
    FieldInfos?: {
        /**
         * 字段名称支持字母、横线(-)、斜杠(/)、特殊符号（@）、数字、下划线（_）和点（.），且不能以下划线开头，长度不超过255个字符
         */
        FieldName?: string;
        /**
         * 主题字段类型（text、long、double）
         */
        FieldType?: string;
    }[];
}
/**
 * UpdateULogServiceTopicField - 更新ULogService主题索引字段
 */
export interface UpdateULogServiceTopicFieldResponse {
}
