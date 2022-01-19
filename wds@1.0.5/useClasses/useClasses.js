var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __reExport = (target, module, desc) => {
  if (module && typeof module === "object" || typeof module === "function") {
    for (let key of __getOwnPropNames(module))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module) => {
  return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
};

// node_modules/classnames/index.js
var require_classnames = __commonJS({
  "node_modules/classnames/index.js"(exports, module) {
    (function() {
      "use strict";
      var hasOwn = {}.hasOwnProperty;
      function classNames() {
        var classes = [];
        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (!arg)
            continue;
          var argType = typeof arg;
          if (argType === "string" || argType === "number") {
            classes.push(arg);
          } else if (Array.isArray(arg)) {
            if (arg.length) {
              var inner = classNames.apply(null, arg);
              if (inner) {
                classes.push(inner);
              }
            }
          } else if (argType === "object") {
            if (arg.toString === Object.prototype.toString) {
              for (var key in arg) {
                if (hasOwn.call(arg, key) && arg[key]) {
                  classes.push(key);
                }
              }
            } else {
              classes.push(arg.toString());
            }
          }
        }
        return classes.join(" ");
      }
      if (typeof module !== "undefined" && module.exports) {
        classNames.default = classNames;
        module.exports = classNames;
      } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
        define("classnames", [], function() {
          return classNames;
        });
      } else {
        window.classNames = classNames;
      }
    })();
  }
});

// src/useClasses/useClasses.ts
var import_classnames = __toModule(require_classnames());
import { useMemo } from "react";
import {
  WaffleColorType,
  WaffleInputStatus,
  WaffleElementSize
} from "../types.js";
function useClasses(factory, deps) {
  const classes = useMemo(factory, deps);
  const [
    styles,
    {
      name,
      color,
      size,
      status,
      disabled,
      className
    },
    ...rest
  ] = classes;
  return useMemo(() => (0, import_classnames.default)(styles[name], color && {
    [styles.primary]: WaffleColorType[color] === WaffleColorType.primary,
    [styles.info]: WaffleColorType[color] === WaffleColorType.info,
    [styles.danger]: WaffleColorType[color] === WaffleColorType.danger
  }, size && {
    [styles.small]: WaffleElementSize[size] === WaffleElementSize.small,
    [styles.medium]: WaffleElementSize[size] === WaffleElementSize.medium,
    [styles.large]: WaffleElementSize[size] === WaffleElementSize.large
  }, status && {
    [styles.success]: WaffleInputStatus[status] === WaffleInputStatus.success,
    [styles.error]: WaffleInputStatus[status] === WaffleInputStatus.error
  }, {
    [styles.disabled]: !!disabled
  }, ...rest, className), deps);
}
export {
  useClasses as default
};
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
