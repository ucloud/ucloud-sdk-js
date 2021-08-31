"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logMiddleware = exports.defaultsMiddleware = exports.credentialMiddleware = void 0;
const request_1 = __importDefault(require("./request"));
exports.credentialMiddleware = {
    request: function (ctx) {
        const signed = ctx.credential.sign(ctx.request.toObject());
        return new request_1.default(signed);
    },
};
exports.defaultsMiddleware = {
    request: function (ctx) {
        const req = ctx.request;
        const cfg = ctx.config;
        if (!req.data['Region'] && cfg.region) {
            req.data['Region'] = cfg.region;
        }
        if (!req.data['ProjectId'] && cfg.projectId) {
            req.data['ProjectId'] = cfg.projectId;
        }
        return req;
    },
};
exports.logMiddleware = {
    request: function (ctx) {
        if (!ctx.config.logger) {
            return ctx.request;
        }
        ctx.config.logger.info(ctx.request.toObject());
        return ctx.request;
    },
    response: function (ctx) {
        if (!ctx.config.logger) {
            return ctx.response;
        }
        if (ctx.response) {
            ctx.config.logger.info(ctx.response.toObject());
        }
        return ctx.response;
    },
    error: function (ctx) {
        var _a;
        console.log("debug", !ctx.config.logger);
        if (!ctx.config.logger) {
            return;
        }
        ctx.config.logger.error((_a = ctx.exception) === null || _a === void 0 ? void 0 : _a.message);
    },
};
