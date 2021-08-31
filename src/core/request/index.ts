type argsT = { [index: string]: any };

export default class Request {
  data: argsT;

  constructor(data: object, options?: object) {
    this.data = data;
  }

  toObject(): argsT {
    return this.encode(this.data);
  }

  private encode(args: argsT): argsT {
    const result: argsT = {};
    for (const k in args) {
      if (args.hasOwnProperty(k)) {
        const v: any = args[k];
        if (v == null) {
          continue;
        }

        if (Object.prototype.toString.call(v) === '[object Array]') {
          v.forEach((value: any, index: number) => {
            if (value instanceof Object) {
              Object.entries(this.encode(value)).forEach(([key, value]) => {
                result[`${k}.${index}.${key}`] = value;
              });
            } else {
              result[`${k}.${index}`] = value;
            }
          });
        } else if (Object.prototype.toString.call(v) === '[object Object]') {
          Object.entries(this.encode(v)).forEach(([key, value]) => {
            result[`${k}.${key}`] = value;
          });
        } else {
          result[k] = v;
        }
      }
    }
    return result;
  }
}
