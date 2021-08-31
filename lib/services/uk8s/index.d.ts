import Client from '../../core/client';
import { ConfigOptions } from '../../core/config';
import { CredentialOptions } from '../../core/credential';
/**
 * This client is used to call actions of **uk8s** service
 */
export default class UK8SClient extends Client {
    constructor({ config, credential, }: {
        config: ConfigOptions;
        credential: CredentialOptions;
    });
    /**
     * AddUK8SExistingUHost - 将预先创建好的云主机加入到UK8S集群，需要注意的是，该云主机依然会执行重装系统的操作。
     *
     * See also: https://docs.ucloud.cn/api/uk8s-api/add_uk8s_existing_uhost
     */
    addUK8SExistingUHost(request?: AddUK8SExistingUHostRequest): Promise<AddUK8SExistingUHostResponse>;
    /**
     * AddUK8SPHostNode - 为UK8S集群添加一台或多台物理云主机类型的节点。
     *
     * See also: https://docs.ucloud.cn/api/uk8s-api/add_uk8s_phost_node
     */
    addUK8SPHostNode(request?: AddUK8SPHostNodeRequest): Promise<AddUK8SPHostNodeResponse>;
    /**
     * AddUK8SUHostNode - 为UK8S集群添加一台Node节点，机型类型为云主机
     *
     * See also: https://docs.ucloud.cn/api/uk8s-api/add_uk8s_uhost_node
     */
    addUK8SUHostNode(request?: AddUK8SUHostNodeRequest): Promise<AddUK8SUHostNodeResponse>;
    /**
     * CreateUK8SClusterV2 - 创建UK8S集群
     *
     * See also: https://docs.ucloud.cn/api/uk8s-api/create_uk8s_cluster_v2
     */
    createUK8SClusterV2(request?: CreateUK8SClusterV2Request): Promise<CreateUK8SClusterV2Response>;
    /**
     * DelUK8SCluster - 删除UK8S集群
     *
     * See also: https://docs.ucloud.cn/api/uk8s-api/del_uk8s_cluster
     */
    delUK8SCluster(request?: DelUK8SClusterRequest): Promise<DelUK8SClusterResponse>;
    /**
     * DelUK8SClusterNodeV2 - 删除集群中的Node节点，删除前务必先将其中的Pod驱逐。
     *
     * See also: https://docs.ucloud.cn/api/uk8s-api/del_uk8s_cluster_node_v2
     */
    delUK8SClusterNodeV2(request?: DelUK8SClusterNodeV2Request): Promise<DelUK8SClusterNodeV2Response>;
    /**
     * DescribeUK8SImage - 获取UK8S支持的Node节点操作系统，可基于该操作系统制定自定义镜像
     *
     * See also: https://docs.ucloud.cn/api/uk8s-api/describe_uk8s_image
     */
    describeUK8SImage(request?: DescribeUK8SImageRequest): Promise<DescribeUK8SImageResponse>;
    /**
     * ListUK8SClusterNodeV2 - 获取UK8S集群节点信息
     *
     * See also: https://docs.ucloud.cn/api/uk8s-api/list_uk8s_cluster_node_v2
     */
    listUK8SClusterNodeV2(request?: ListUK8SClusterNodeV2Request): Promise<ListUK8SClusterNodeV2Response>;
    /**
     * ListUK8SClusterV2 - 获取UK8S集群列表信息
     *
     * See also: https://docs.ucloud.cn/api/uk8s-api/list_uk8s_cluster_v2
     */
    listUK8SClusterV2(request?: ListUK8SClusterV2Request): Promise<ListUK8SClusterV2Response>;
}
/**
 * AddUK8SExistingUHost - 将预先创建好的云主机加入到UK8S集群，需要注意的是，该云主机依然会执行重装系统的操作。
 */
export interface AddUK8SExistingUHostRequest {
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
     */
    Zone?: string;
    /**
     * Node节点密码。请遵照[[api:uhost-api:specification|字段规范]]设定密码。密码需使用base64进行编码，如下：# echo -n Password1 | base64
     */
    Password: string;
    /**
     * UK8S集群ID。 可从UK8S控制台获取。
     */
    ClusterId: string;
    /**
     * 云主机Id，为了保证节点正常运行，该主机配置不得低于2C4G。
     */
    UHostId: string;
    /**
     * 默认110，生产环境建议小于等于110。
     */
    MaxPods?: number;
    /**
     * Node节点标签。key=value形式,多组用”,“隔开，最多5组。 如env=pro,type=game
     */
    Labels?: string;
    /**
     * 该云主机所属子网Id。
     */
    SubnetId?: string;
    /**
     * 镜像 Id，不填时后台程序会自动选用一个可用的镜像 Id，支持用户自定义镜像，自定义镜像必须基于基础镜像制作。
     */
    ImageId?: string;
    /**
     * 用于标示添加完节点后是否将节点临时禁用. 传入 "true" 表示禁用,传入其它或不传表示不禁用
     */
    DisableSchedule?: boolean;
    /**
     * 用户自定义数据。当镜像支持Cloud-init Feature时可填写此字段。注意：1、总数据量大小不超过 16K；2、使用base64编码。
     */
    UserData?: string;
    /**
     * 用户自定义Shell脚本。与UserData的区别在于InitScript在节点初始化完毕后才执行，UserData则是云主机初始化时执行。
     */
    InitScript?: string;
}
/**
 * AddUK8SExistingUHost - 将预先创建好的云主机加入到UK8S集群，需要注意的是，该云主机依然会执行重装系统的操作。
 */
export interface AddUK8SExistingUHostResponse {
}
/**
 * AddUK8SPHostNode - 为UK8S集群添加一台或多台物理云主机类型的节点。
 */
export interface AddUK8SPHostNodeRequest {
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
     */
    Zone: string;
    /**
     * UK8S集群ID。 可从UK8S控制台获取。
     */
    ClusterId: string;
    /**
     * 最大创建Node节点数量，取值范围是[1,10]。
     */
    Count: number;
    /**
     * Node节点密码。请遵照[[api:uhost-api:specification|字段规范]]设定密码。密码需使用base64进行编码，如下：# echo -n Password1 | base64
     */
    Password: string;
    /**
     * 计费模式。枚举值为： \\ > Year，按年付费； \\ > Month，按月付费；\\ 默认为月付
     */
    ChargeType: string;
    /**
     * 购买时长。默认: 1。月付时，此参数传0，代表了购买至月末。
     */
    Quantity?: number;
    /**
     * Node节点标签。key=value形式,多组用”,“隔开，最多5组。 如env=pro,type=game
     */
    Labels?: string;
    /**
     * 默认110，生产环境建议小于等于110。
     */
    MaxPods?: number;
    /**
     * 物理机类型，默认为：db-2(基础型-SAS-V3)
     */
    Type?: string;
    /**
     * Raid配置，默认Raid10 支持:Raid0、Raid1、Raid5、Raid10，NoRaid
     */
    Raid?: string;
    /**
     * 网络环境，可选千兆：1G ，万兆：10G， 默认1G。
     */
    NIC?: string;
    /**
     * 子网 ID。默认为集群创建时填写的子网ID，也可以填写集群同VPC内的子网ID。
     */
    SubnetId?: string;
    /**
     * 镜像 Id，不填时后台程序会自动选用一个可用的镜像 Id，支持用户自定义镜像，自定义镜像必须基于基础镜像制作。
     */
    ImageId?: string;
    /**
     * 用于标示添加完节点后是否将节点临时禁用. 传入 "true" 表示禁用,传入其它或不传表示不禁用
     */
    DisableSchedule?: boolean;
    /**
     * 用户自定义Shell脚本。与UserData的区别在于InitScript在节点初始化完毕后才执行。
     */
    InitScript?: string;
}
/**
 * AddUK8SPHostNode - 为UK8S集群添加一台或多台物理云主机类型的节点。
 */
export interface AddUK8SPHostNodeResponse {
}
/**
 * AddUK8SUHostNode - 为UK8S集群添加一台Node节点，机型类型为云主机
 */
export interface AddUK8SUHostNodeRequest {
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
     */
    Zone: string;
    /**
     * UK8S集群ID。 可从UK8S控制台获取。
     */
    ClusterId: string;
    /**
     * 虚拟CPU核数。可选参数：2-64（具体机型与CPU的对应关系参照控制台）。默认值: 4。
     */
    CPU: number;
    /**
     * 最大创建Node节点数量，取值范围是[1,10]。
     */
    Count: number;
    /**
     * Node节点密码。请遵照[[api:uhost-api:specification|字段规范]]设定密码。密码需使用base64进行编码，如下：# echo -n Password1 | base64
     */
    Password: string;
    /**
     * 内存大小。单位：MB。范围 ：[4096, 262144]，取值为1024的倍数（可选范围参考控制台）。默认值：8192
     */
    Mem: number;
    /**
     * 计费模式。枚举值为： \\ > Year，按年付费； \\ > Month，按月付费；\\ > Dynamic，按小时预付费 \\ > Postpay，按小时后付费（支持关机不收费，目前仅部分可用区支持，请联系您的客户经理） \\ 默认为月付
     */
    ChargeType: string;
    /**
     * 磁盘类型。请参考[[api:uhost-api:disk_type|磁盘类型]]。默认为SSD云盘
     */
    BootDiskType?: string;
    /**
     * 磁盘类型。请参考[[api:uhost-api:disk_type|磁盘类型]]。默认为SSD云盘
     */
    DataDiskType?: string;
    /**
     * 数据磁盘大小，单位GB。默认0。范围 ：[20, 1000]
     */
    DataDiskSize?: string;
    /**
     * 购买时长。默认: 1。按小时购买(Dynamic)时无需此参数。 月付时，此参数传0，代表了购买至月末。
     */
    Quantity?: number;
    /**
     * 云主机机型。枚举值["N", "C", "G", "O", "OS"]。参考[[api:uhost-api:uhost_type|云主机机型说明]]。
     */
    MachineType?: string;
    /**
     * 最低cpu平台，枚举值["Intel/Auto", "Intel/IvyBridge", "Intel/Haswell", "Intel/Broadwell", "Intel/Skylake", "Intel/Cascadelake"；"Intel/CascadelakeR"; “Amd/Epyc2”,"Amd/Auto"],默认值是"Intel/Auto"
     */
    MinmalCpuPlatform?: string;
    /**
     * GPU类型，枚举值["K80", "P40", "V100",]，MachineType为G时必填
     */
    GpuType?: string;
    /**
     * GPU卡核心数。仅GPU机型支持此字段（可选范围与MachineType+GpuType相关）
     */
    GPU?: number;
    /**
     * Node节点标签。key=value形式,多组用”,“隔开，最多5组。 如env=pro,type=game
     */
    Labels?: string;
    /**
     * 默认110，生产环境建议小于等于110。
     */
    MaxPods?: number;
    /**
     * 硬件隔离组id。可通过DescribeIsolationGroup获取。
     */
    IsolationGroup?: string;
    /**
     * 镜像 Id，不填时后台程序会自动选用一个可用的镜像 Id，支持用户自定义镜像，自定义镜像必须基于基础镜像制作。
     */
    ImageId?: string;
    /**
     * 子网 ID。默认为集群创建时填写的子网ID，也可以填写集群同VPC内的子网ID。
     */
    SubnetId?: string;
    /**
     * 用于标示添加完节点后是否将节点临时禁用. 传入 "true" 表示禁用,传入其它或不传表示不禁用
     */
    DisableSchedule?: boolean;
    /**
     * 用户自定义数据。当镜像支持Cloud-init Feature时可填写此字段。注意：1、总数据量大小不超过 16K；2、使用base64编码。
     */
    UserData?: string;
    /**
     * 用户自定义Shell脚本。与UserData的区别在于InitScript在节点初始化完毕后才执行，UserData则是云主机初始化时执行。
     */
    InitScript?: string;
}
/**
 * AddUK8SUHostNode - 为UK8S集群添加一台Node节点，机型类型为云主机
 */
export interface AddUK8SUHostNodeResponse {
    /**
     * Node实例Id集合
     */
    NodeIds?: string[];
}
/**
 * CreateUK8SClusterV2 - 创建UK8S集群
 */
export interface CreateUK8SClusterV2Request {
    /**
     * 集群Node及Pod所属VPC
     */
    VPCId: string;
    /**
     * 集群Node及Pod所属子网
     */
    SubnetId: string;
    /**
     * Service 网段，用于分配ClusterIP，如172.17.0.0/16。该网段不能与集群所属VPC网段重叠。
     */
    ServiceCIDR: string;
    /**
     * 集群名称
     */
    ClusterName: string;
    /**
     * 集群节点密码，包括Master和Node。密码需包含最少一个大写字母，请使用base64进行编码，举例如下：# echo -n Password1 | base64
     */
    Password: string;
    /**
     *
     */
    Master?: {
        /**
         * Master节点所属可用区，需要设置 Master.0.Zone、 Master.1.Zone、Master.2.Zone 三个 Master 节点的可用区。 三个节点可部署在不同可用区。参见 [可用区列表](../summary/regionlist.html)
         */
        Zone: string;
    }[];
    /**
     * Master节点的云主机机型（V2.0），如["N", "C", "O", "OS"]，具体请参照云主机机型。
     */
    MasterMachineType: string;
    /**
     * Master节点的虚拟CPU核数。可选参数：2-64（具体机型与CPU的对应关系参照控制台）。
     */
    MasterCPU: number;
    /**
     * Master节点的内存大小。单位：MB。范围 ：[4096, 262144]，取值为1024的倍数（可选范围参考控制台）。
     */
    MasterMem: number;
    /**
     *
     */
    Nodes?: {
        /**
         * 一组Nodes节点所属可用区，可创建多组Nodes节点，如一组是CPU Nodes节点，另一组是GPU Nodes节点。参见 [可用区列表](../summary/regionlist.html)
         */
        Zone: string;
        /**
         * 一组Nodes节点云主机机型，如["N", "C", "O", "OS"]，具体请参照云主机机型。
         */
        MachineType: string;
        /**
         * 一组Node节点的虚拟CPU核数。单位：核，范围：[2, 64]，可选范围参考控制台。
         */
        CPU: number;
        /**
         * 一组Node节点的内存大小。单位：MB,范围 ：[4096, 262144]，取值为1024的倍数，可选范围参考控制台。
         */
        Mem: number;
        /**
         * 一组Node节点的数量，范围：[1,10]。
         */
        Count: number;
        /**
         * 一组Node节点的隔离组Id，归属于同一隔离组的虚拟机节点将落在不同的物理机上，单个隔离组最多只能容纳8个节点。参见DescribeIsolationGroup。
         */
        IsolationGroup?: string;
        /**
         * Node节点上可运行最大节点数，默认为110。
         */
        MaxPods?: number;
        /**
         * Node节点标签，形式为key=value，多组Labels用”,“隔开,最多支持五组。
         */
        Labels?: string;
        /**
         * 一组Node节点的系统盘类型，请参考[[api:uhost-api:disk_type|磁盘类型]]。默认为SSD云盘
         */
        BootDiskType?: string;
        /**
         * 一组Node节点的数据盘类型，请参考[[api:uhost-api:disk_type|磁盘类型]]。默认为SSD云盘
         */
        DataDiskType?: string;
        /**
         * Node节点的最低cpu平台，不选则随机。枚举值["Intel/Auto", "Intel/IvyBridge", "Intel/Haswell", "Intel/Broadwell", "Intel/Skylake", "Intel/Cascadelake"。
         */
        MinmalCpuPlatform?: string;
        /**
         * 一组Node节点的GPU类型，枚举值["K80", "P40", "V100"]，最新值参考Console。
         */
        GpuType?: string;
        /**
         * 一组Node节点的GPU卡核心数，仅GPU机型支持此字段。
         */
        GPU?: number;
        /**
         * 数据磁盘大小，单位GB。默认0。范围 ：[20, 1000]
         */
        DataDiskSize?: number;
    }[];
    /**
     * Master节点系统盘类型。请参考[[api:uhost-api:disk_type|磁盘类型]]。默认为SSD云盘
     */
    MasterBootDiskType?: string;
    /**
     * Master节点数据盘类型。请参考[[api:uhost-api:disk_type|磁盘类型]]。默认为SSD云盘
     */
    MasterDataDiskType?: string;
    /**
     * Master节点的最低cpu平台，不选则随机。枚举值["Intel/Auto", "Intel/IvyBridge", "Intel/Haswell", "Intel/Broadwell", "Intel/Skylake", "Intel/Cascadelake"。
     */
    MasterMinmalCpuPlatform?: string;
    /**
     * Master节点的数据盘大小，单位GB，默认为0。范围 ：[20, 1000]
     */
    MasterDataDiskSize?: number;
    /**
     * 集群所有节点的付费模式。枚举值为： Year，按年付费； Month，按月付费； Dynamic，按小时付费（需开启权限），默认按月。
     */
    ChargeType?: string;
    /**
     * k8s集群的版本，版本信息请参考UK8S集群创建页，不指定的话默认为当前支持的最高版本。
     */
    K8sVersion?: string;
    /**
     * 购买时长。默认为1。按小时购买(Dynamic)时无需此参数。 月付时，此参数传0，代表了购买至月末。
     */
    Quantity?: number;
    /**
     * 是否允许外网访问apiserver，开启：Yes 不开启：No。默认为No。
     */
    ExternalApiServer?: string;
    /**
     * 【无效，已删除】当前将自动为Master节点创建隔离组，确保Master节点归属于不同物理机。
     */
    MasterIsolationGroup?: string;
    /**
     *
     */
    KubeProxy?: {
        /**
         * 集群kube-proxy模式。支持iptables和ipvs，默认为iptables。
         */
        Mode?: string;
    };
    /**
     * Master节点和Node节点的镜像 ID，不填则随机选择可用的基础镜像。支持用户自定义镜像。
     */
    ImageId?: string;
    /**
     * 用户自定义数据。注意：1、总数据量大小不超多16K；2、使用base64编码。
     */
    UserData?: string;
    /**
     * 用户自定义脚本，与UserData不同，自定义脚本将在集群安装完毕后执行。注意：1、总数据量大小不超多16K；2、使用base64编码。
     */
    InitScript?: string;
}
/**
 * CreateUK8SClusterV2 - 创建UK8S集群
 */
export interface CreateUK8SClusterV2Response {
    /**
     * 集群ID
     */
    ClusterId: string;
}
/**
 * DelUK8SCluster - 删除UK8S集群
 */
export interface DelUK8SClusterRequest {
    /**
     * 集群id
     */
    ClusterId: string;
    /**
     * 是否删除节点挂载的数据盘。枚举值[true:删除，false: 不删除]，默认不删除
     */
    ReleaseUDisk?: boolean;
}
/**
 * DelUK8SCluster - 删除UK8S集群
 */
export interface DelUK8SClusterResponse {
}
/**
 * DelUK8SClusterNodeV2 - 删除集群中的Node节点，删除前务必先将其中的Pod驱逐。
 */
export interface DelUK8SClusterNodeV2Request {
    /**
     * UK8S集群ID。 可从UK8S控制台获取。
     */
    ClusterId: string;
    /**
     * Node在UK8S处的唯一标示，如uk8s-reewqe5-sdasadsda。**非云主机或物理云主机资源Id**
     */
    NodeId: string;
    /**
     * 删除节点时是否释放数据盘。 枚举值[true:释放，false: 不释放]，默认为true。
     */
    ReleaseDataUDisk?: boolean;
}
/**
 * DelUK8SClusterNodeV2 - 删除集群中的Node节点，删除前务必先将其中的Pod驱逐。
 */
export interface DelUK8SClusterNodeV2Response {
}
/**
 * DescribeUK8SImage - 获取UK8S支持的Node节点操作系统，可基于该操作系统制定自定义镜像
 */
export interface DescribeUK8SImageRequest {
    /**
     * 可用区。参见 [可用区列表](../summary/regionlist.html)
     */
    Zone?: string;
}
/**
 * DescribeUK8SImage - 获取UK8S支持的Node节点操作系统，可基于该操作系统制定自定义镜像
 */
export interface DescribeUK8SImageResponse {
    /**
     * 虚拟机可用镜像集合, 详见ImageInfo 数组
     */
    ImageSet?: {
        /**
         * 可用区 Id
         */
        ZoneId: number;
        /**
         * 镜像 Id
         */
        ImageId: string;
        /**
         * 镜像名称
         */
        ImageName: string;
        /**
         * 该镜像是否支持GPU机型，枚举值[true:不支持，false:支持]。
         */
        NotSupportGPU: boolean;
    }[];
    /**
     * 物理机可用镜像集合, 详见ImageInfo 数组
     */
    PHostImageSet?: {
        /**
         * 可用区 Id
         */
        ZoneId: number;
        /**
         * 镜像 Id
         */
        ImageId: string;
        /**
         * 镜像名称
         */
        ImageName: string;
        /**
         * 该镜像是否支持GPU机型，枚举值[true:不支持，false:支持]。
         */
        NotSupportGPU: boolean;
    }[];
}
/**
 * ListUK8SClusterNodeV2 - 获取UK8S集群节点信息
 */
export interface ListUK8SClusterNodeV2Request {
    /**
     * UK8S集群ID
     */
    ClusterId: string;
}
/**
 * ListUK8SClusterNodeV2 - 获取UK8S集群节点信息
 */
export interface ListUK8SClusterNodeV2Response {
    /**
     * 节点详细信息，见NodeInfoV2。
     */
    NodeSet: {
        /**
         * Node所在可用区
         */
        Zone: string;
        /**
         * NodeId，Node在UK8S处的唯一标示，如uk8s-reewqe5-sdasadsda
         */
        NodeId: string;
        /**
         * node角色，枚举值为master、node
         */
        NodeRole: string;
        /**
         * Node的状态
         */
        NodeStatus: string;
        /**
         * Node节点的资源类型，枚举值为UHost或UPHost。
         */
        InstanceType: string;
        /**
         * 资源名称，初始值等于NodeId，用户可在UHost或UPHost处修改。
         */
        InstanceName: string;
        /**
         * 资源ID，如uhost-xxxx，或uphost-xxxxx。
         */
        InstanceId: string;
        /**
         * 机型类别，分别对应Uhost的MachineType或PHost的PHostType。
         */
        MachineType: string;
        /**
         * Node节点的操作系统类别，如Linux或Windows。
         */
        OsType: string;
        /**
         * Node节点的镜像名称。
         */
        OsName: string;
        /**
         * Node节点CPU核数，单位: 个。
         */
        CPU: number;
        /**
         * 内存大小，单位: MB。
         */
        Memory: number;
        /**
         * 节点IP信息，详细信息见 UHostIPSet。
         */
        IPSet: {
            /**
             * 国际: Internation，BGP: Bgp，内网: Private
             */
            Type?: string;
            /**
             * IP资源ID (内网IP无对应的资源ID)
             */
            IPId?: string;
            /**
             * IP地址
             */
            IP?: string;
            /**
             * IP对应的带宽, 单位: Mb (内网IP不显示带宽信息)
             */
            Bandwidth?: number;
            /**
             * 是否默认的弹性网卡的信息。true: 是默认弹性网卡；其他值：不是。
             */
            Default?: string;
            /**
             * IP地址对应的VPC ID
             */
            VPCId?: string;
            /**
             * IP地址对应的子网 ID
             */
            SubnetId?: string;
            /**
             * Mac地址
             */
            Mac?: string;
        }[];
        /**
         * 节点创建时间
         */
        CreateTime: number;
        /**
         * 节点计费到期时间
         */
        ExpireTime: number;
        /**
         * 节点所属伸缩组ID，非伸缩组创建出来的节点，伸缩组ID为Default。
         */
        AsgId: string;
        /**
         * 是否允许Pod调度到该节点，枚举值为true或false。
         */
        Unschedulable: boolean;
        /**
         * kubeproxy信息，详细信息见KubeProxy。
         */
        KubeProxy: {
            /**
             * KubeProxy模式，枚举值为[ipvs,iptables]
             */
            Mode?: string;
        };
        /**
         * 加节点时判断是否没有资源，如果返回NORESOURCE则代表没有资源了
         */
        NodeLogInfo: string;
        /**
         * 节点的GPU颗数。
         */
        GPU?: number;
    }[];
    /**
     * 满足条件的节点数量，包括Master。
     */
    TotalCount: number;
}
/**
 * ListUK8SClusterV2 - 获取UK8S集群列表信息
 */
export interface ListUK8SClusterV2Request {
    /**
     * 列表起始位置偏移量，默认为0。
     */
    Offset?: number;
    /**
     * 返回数据长度，默认为20。
     */
    Limit?: number;
    /**
     * UK8S集群ID
     */
    ClusterId?: string;
}
/**
 * ListUK8SClusterV2 - 获取UK8S集群列表信息
 */
export interface ListUK8SClusterV2Response {
    /**
     * 满足条件的集群数量
     */
    ClusterCount: number;
    /**
     * 集群信息，具体参考ClusterSet
     */
    ClusterSet?: {
        /**
         * 资源名字
         */
        ClusterName: string;
        /**
         * 集群ID
         */
        ClusterId: string;
        /**
         * 所属VPC
         */
        VPCId: string;
        /**
         * 所属子网
         */
        SubnetId: string;
        /**
         * Pod网段
         */
        PodCIDR: string;
        /**
         * 服务网段
         */
        ServiceCIDR: string;
        /**
         * Master 节点数量
         */
        MasterCount: number;
        /**
         * 集群apiserver地址
         */
        ApiServer: string;
        /**
         * 集群版本
         */
        K8sVersion: string;
        /**
         * 创建时间
         */
        CreateTime?: number;
        /**
         * Node节点数量
         */
        NodeCount?: number;
        /**
         * 集群外部apiserver地址
         */
        ExternalApiServer?: string;
        /**
         * 状态
         */
        Status?: string;
    }[];
}
