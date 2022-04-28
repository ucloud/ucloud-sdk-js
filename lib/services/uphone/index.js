"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("../../core/client"));
const request_1 = __importDefault(require("../../core/request"));
/**
 * This client is used to call actions of **uphone** service
 */
class UPhoneClient extends client_1.default {
    constructor({ config, credential, }) {
        super({ config, credential });
    }
    /**
     * CreateUPhoneApp - 一个 app 对应多个 app_version。
     *
     * See also: https://docs.ucloud.cn/api/uphone-api/create_u_phone_app
     */
    createUPhoneApp(request) {
        const args = Object.assign({ Action: 'CreateUPhoneApp' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
       * CreateUPhoneAppVersion - 创建云手机应用版本。
  注：一个 app 对应多个 app_version。
       *
       * See also: https://docs.ucloud.cn/api/uphone-api/create_u_phone_app_version
       */
    createUPhoneAppVersion(request) {
        const args = Object.assign({ Action: 'CreateUPhoneAppVersion' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateUPhoneImage - 创建云手机镜像。
     *
     * See also: https://docs.ucloud.cn/api/uphone-api/create_u_phone_image
     */
    createUPhoneImage(request) {
        const args = Object.assign({ Action: 'CreateUPhoneImage' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * CreateUPhoneServer - 创建云手机服务器
     *
     * See also: https://docs.ucloud.cn/api/uphone-api/create_u_phone_server
     */
    createUPhoneServer(request) {
        const args = Object.assign({ Action: 'CreateUPhoneServer' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteUPhoneImage - 删除自制云手机镜像。
     *
     * See also: https://docs.ucloud.cn/api/uphone-api/delete_u_phone_image
     */
    deleteUPhoneImage(request) {
        const args = Object.assign({ Action: 'DeleteUPhoneImage' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DeleteUPhoneServer - 删除云手机服务器。 注：关机状态下才能执行删除操作。
     *
     * See also: https://docs.ucloud.cn/api/uphone-api/delete_u_phone_server
     */
    deleteUPhoneServer(request) {
        const args = Object.assign({ Action: 'DeleteUPhoneServer' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUPhone - 获取云手机列表信息。
     *
     * See also: https://docs.ucloud.cn/api/uphone-api/describe_u_phone
     */
    describeUPhone(request) {
        const args = Object.assign({ Action: 'DescribeUPhone' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUPhoneApp - 获取应用列表。
     *
     * See also: https://docs.ucloud.cn/api/uphone-api/describe_u_phone_app
     */
    describeUPhoneApp(request) {
        const args = Object.assign({ Action: 'DescribeUPhoneApp' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUPhoneAppVersion - 获取应用版本列表。
     *
     * See also: https://docs.ucloud.cn/api/uphone-api/describe_u_phone_app_version
     */
    describeUPhoneAppVersion(request) {
        const args = Object.assign({ Action: 'DescribeUPhoneAppVersion' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUPhoneCities - 获取云手机提供服务的城市列表
     *
     * See also: https://docs.ucloud.cn/api/uphone-api/describe_u_phone_cities
     */
    describeUPhoneCities(request) {
        const args = Object.assign({ Action: 'DescribeUPhoneCities' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUPhoneDetailByApp - 根据AppId，查询安装该应用的云手机以及相关的应用版本信息
     *
     * See also: https://docs.ucloud.cn/api/uphone-api/describe_u_phone_detail_by_app
     */
    describeUPhoneDetailByApp(request) {
        const args = Object.assign({ Action: 'DescribeUPhoneDetailByApp' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUPhoneImage - 获取云手机镜像信息列表。
     *
     * See also: https://docs.ucloud.cn/api/uphone-api/describe_u_phone_image
     */
    describeUPhoneImage(request) {
        const args = Object.assign({ Action: 'DescribeUPhoneImage' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUPhoneIpRegions - 获取云手机支持绑定独立IP的城市列表
     *
     * See also: https://docs.ucloud.cn/api/uphone-api/describe_u_phone_ip_regions
     */
    describeUPhoneIpRegions(request) {
        const args = Object.assign({ Action: 'DescribeUPhoneIpRegions' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUPhoneJob - 查询Job的执行状态。
     *
     * See also: https://docs.ucloud.cn/api/uphone-api/describe_u_phone_job
     */
    describeUPhoneJob(request) {
        const args = Object.assign({ Action: 'DescribeUPhoneJob' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUPhoneModel -
     *
     * See also: https://docs.ucloud.cn/api/uphone-api/describe_u_phone_model
     */
    describeUPhoneModel(request) {
        const args = Object.assign({ Action: 'DescribeUPhoneModel' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUPhoneServer - 获取云手机服务器列表信息。
     *
     * See also: https://docs.ucloud.cn/api/uphone-api/describe_u_phone_server
     */
    describeUPhoneServer(request) {
        const args = Object.assign({ Action: 'DescribeUPhoneServer' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * DescribeUPhoneServerModel - 获取ServerModel列表。
     *
     * See also: https://docs.ucloud.cn/api/uphone-api/describe_u_phone_server_model
     */
    describeUPhoneServerModel(request) {
        const args = Object.assign({ Action: 'DescribeUPhoneServerModel' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUPhoneScreenCapture - 云手机截屏
     *
     * See also: https://docs.ucloud.cn/api/uphone-api/get_u_phone_screen_capture
     */
    getUPhoneScreenCapture(request) {
        const args = Object.assign({ Action: 'GetUPhoneScreenCapture' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * GetUPhoneServerPrice - 根据服务器规格名称，获取UPhoneServer实例的价格。
     *
     * See also: https://docs.ucloud.cn/api/uphone-api/get_u_phone_server_price
     */
    getUPhoneServerPrice(request) {
        const args = Object.assign({ Action: 'GetUPhoneServerPrice' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
       * GetUPhoneServerRenewPrice - 获取云手机服务器续费价格
  
  提示信息: 须按照控制台服务器模型配置创建服务器。详情请参考控制台。
       *
       * See also: https://docs.ucloud.cn/api/uphone-api/get_u_phone_server_renew_price
       */
    getUPhoneServerRenewPrice(request) {
        const args = Object.assign({ Action: 'GetUPhoneServerRenewPrice' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * InstallUPhoneAppVersion - 在云手机中安装应用版本相关的Apk文件。系统会根据AppVersionId将对应的Apk文件下载后安装到云手机中。一次只支持安装一个Apk。
     *
     * See also: https://docs.ucloud.cn/api/uphone-api/install_u_phone_app_version
     */
    installUPhoneAppVersion(request) {
        const args = Object.assign({ Action: 'InstallUPhoneAppVersion' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ModifyUPhoneName - 修改指定云手机实例名称。
     *
     * See also: https://docs.ucloud.cn/api/uphone-api/modify_u_phone_name
     */
    modifyUPhoneName(request) {
        const args = Object.assign({ Action: 'ModifyUPhoneName' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ModifyUPhoneRemark - 修改指定云手机实例备注信息。
     *
     * See also: https://docs.ucloud.cn/api/uphone-api/modify_u_phone_remark
     */
    modifyUPhoneRemark(request) {
        const args = Object.assign({ Action: 'ModifyUPhoneRemark' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ModifyUPhoneServerName - 修改指定云手机服务器实例名称。
     *
     * See also: https://docs.ucloud.cn/api/uphone-api/modify_u_phone_server_name
     */
    modifyUPhoneServerName(request) {
        const args = Object.assign({ Action: 'ModifyUPhoneServerName' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ModifyUPhoneServerRemark - 修改指定云手机实例备注信息。
     *
     * See also: https://docs.ucloud.cn/api/uphone-api/modify_u_phone_server_remark
     */
    modifyUPhoneServerRemark(request) {
        const args = Object.assign({ Action: 'ModifyUPhoneServerRemark' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * PoweroffUPhone - 关闭处于运行状态的云手机实例
     *
     * See also: https://docs.ucloud.cn/api/uphone-api/poweroff_u_phone
     */
    poweroffUPhone(request) {
        const args = Object.assign({ Action: 'PoweroffUPhone' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * PoweronUPhone - 启动处于关闭状态的云手机实例
     *
     * See also: https://docs.ucloud.cn/api/uphone-api/poweron_u_phone
     */
    poweronUPhone(request) {
        const args = Object.assign({ Action: 'PoweronUPhone' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * RebootUPhone - 重新启动云手机实例
     *
     * See also: https://docs.ucloud.cn/api/uphone-api/reboot_u_phone
     */
    rebootUPhone(request) {
        const args = Object.assign({ Action: 'RebootUPhone' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * ResetUPhone - 将云手机恢复为创建时的状态。
     *
     * See also: https://docs.ucloud.cn/api/uphone-api/reset_u_phone
     */
    resetUPhone(request) {
        const args = Object.assign({ Action: 'ResetUPhone' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * RunAsyncCommand - 在云手机中执行异步shell命令。
     *
     * See also: https://docs.ucloud.cn/api/uphone-api/run_async_command
     */
    runAsyncCommand(request) {
        const args = Object.assign({ Action: 'RunAsyncCommand' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * RunSyncCommand - 在云手机中执行同步shell命令。
     *
     * See also: https://docs.ucloud.cn/api/uphone-api/run_sync_command
     */
    runSyncCommand(request) {
        const args = Object.assign({ Action: 'RunSyncCommand' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * SetUPhoneConfig - 设置云手机画面参数（分辨率、DPI、帧率、码率）
     *
     * See also: https://docs.ucloud.cn/api/uphone-api/set_u_phone_config
     */
    setUPhoneConfig(request) {
        const args = Object.assign({ Action: 'SetUPhoneConfig' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * SetUPhoneGPS - 设置云手机GPS信息
     *
     * See also: https://docs.ucloud.cn/api/uphone-api/set_u_phone_gps
     */
    setUPhoneGPS(request) {
        const args = Object.assign({ Action: 'SetUPhoneGPS' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * SetUPhoneManagerMode - 管理员模式支持所有按键，普通用户模式禁用返回桌面
     *
     * See also: https://docs.ucloud.cn/api/uphone-api/set_u_phone_manager_mode
     */
    setUPhoneManagerMode(request) {
        const args = Object.assign({ Action: 'SetUPhoneManagerMode' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * SetUPhoneSplashScreen - 设置云手机启动画面，通过DescribeUPhone接口可以查询该地址
     *
     * See also: https://docs.ucloud.cn/api/uphone-api/set_u_phone_splash_screen
     */
    setUPhoneSplashScreen(request) {
        const args = Object.assign({ Action: 'SetUPhoneSplashScreen' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UnInstallUPhoneAppVersion - 传入应用版本Id，在云手机中根据应用版本的PackageName卸载相关应用。一次只支持卸载一个应用。
     *
     * See also: https://docs.ucloud.cn/api/uphone-api/un_install_u_phone_app_version
     */
    unInstallUPhoneAppVersion(request) {
        const args = Object.assign({ Action: 'UnInstallUPhoneAppVersion' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
    /**
     * UpdateUPhoneImage - 更新云手机镜像信息。
     *
     * See also: https://docs.ucloud.cn/api/uphone-api/update_u_phone_image
     */
    updateUPhoneImage(request) {
        const args = Object.assign({ Action: 'UpdateUPhoneImage' }, (request || {}));
        return this.invoke(new request_1.default(args)).then((resp) => resp.toObject());
    }
}
exports.default = UPhoneClient;
