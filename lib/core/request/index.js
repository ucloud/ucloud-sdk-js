"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Request {
    constructor(data, options) {
        this.data = data;
    }
    toObject() {
        return this.encode(this.data);
    }
    encode(args) {
        const result = {};
        for (const k in args) {
            if (args.hasOwnProperty(k)) {
                const v = args[k];
                if (v == null) {
                    continue;
                }
                if (Object.prototype.toString.call(v) === '[object Array]') {
                    v.forEach((value, index) => {
                        if (value instanceof Object) {
                            Object.entries(this.encode(value)).forEach(([key, value]) => {
                                result[`${k}.${index}.${key}`] = value;
                            });
                        }
                        else {
                            result[`${k}.${index}`] = value;
                        }
                    });
                }
                else if (Object.prototype.toString.call(v) === '[object Object]') {
                    Object.entries(this.encode(v)).forEach(([key, value]) => {
                        result[`${k}.${key}`] = value;
                    });
                }
                else {
                    result[k] = v;
                }
            }
        }
        return result;
    }
}
exports.default = Request;
