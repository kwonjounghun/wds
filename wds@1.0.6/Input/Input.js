var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
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

// src/Input/Input.tsx
var import_classnames = __toModule(require_classnames());
import React from "react";

// sass-plugin-0:/home/runner/work/wds/wds/main/src/Input/Input.module.scss
var css = `/**
 * Color
 */
/**
 * Spacing
 */
._input_1p7gt_7 {
  display: block;
  transition-property: border-color, background-color, color;
  transition-duration: 150ms;
  outline: none;
  border: 1px solid #dde2e6;
  border-radius: 3px;
  background-color: #fff;
  padding-right: 16px;
  padding-left: 16px;
  width: 100%;
  height: auto;
  color: #212529;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  -webkit-appearance: none;
  line-height: 28px;
  letter-spacing: -0.3px;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
}
@media (hover: hover) {
  ._input_1p7gt_7:hover {
    border-color: #868e96;
  }
}
._input_1p7gt_7:focus, ._input_1p7gt_7._active_1p7gt_34 {
  border-color: #00c4c4;
}
._input_1p7gt_7[readonly], ._input_1p7gt_7[disabled] {
  border-color: #f2f4f6;
  background-color: #f9fafb;
  cursor: default;
  pointer-events: none;
}
._input_1p7gt_7[disabled], ._input_1p7gt_7._disabled_1p7gt_43 {
  color: #adb5bd;
}
._input_1p7gt_7._error_1p7gt_46 {
  border-color: #f66;
}
._input_1p7gt_7::-webkit-input-placeholder {
  color: #adb5bd;
}
._input_1p7gt_7[type=number]::-webkit-inner-spin-button, ._input_1p7gt_7[type=number]::-webkit-outer-spin-button {
  margin: 0;
  -webkit-appearance: none;
}
._input_1p7gt_7._sm_1p7gt_56 {
  height: 40px;
  min-height: 40px;
  line-height: 20px;
  letter-spacing: 0;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
}
._input_1p7gt_7._md_1p7gt_65 {
  height: 48px;
  min-height: 48px;
}
._input_1p7gt_7._lg_1p7gt_69 {
  height: 56px;
  min-height: 56px;
  line-height: 28px;
  letter-spacing: -0.6px;
  font-size: 18px;
  font-weight: bold;
  font-style: normal;
  font-weight: normal;
}`;
document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(css));
var Input_module_default = {
  "input": "_input_1p7gt_7",
  "active": "_active_1p7gt_34",
  "disabled": "_disabled_1p7gt_43",
  "error": "_error_1p7gt_46",
  "sm": "_sm_1p7gt_56",
  "md": "_md_1p7gt_65",
  "lg": "_lg_1p7gt_69"
};

// src/Input/Input.tsx
function Input(_a) {
  var _b = _a, {
    type = "text",
    size = "md",
    status,
    className
  } = _b, props = __objRest(_b, [
    "type",
    "size",
    "status",
    "className"
  ]);
  const classes = (0, import_classnames.default)(Input_module_default.input, size && {
    [Input_module_default.sm]: size === "sm",
    [Input_module_default.md]: size === "md",
    [Input_module_default.lg]: size === "lg"
  }, {
    [Input_module_default.error]: status === "error"
  }, className);
  return /* @__PURE__ */ React.createElement("input", __spreadProps(__spreadValues({}, props), {
    type,
    className: classes,
    ref,
    "aria-invalid": status === "error" ? "true" : "false"
  }));
}
var Input_default = Input;
export {
  Input_default as default
};
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
