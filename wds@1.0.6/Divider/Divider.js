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

// src/Divider/Divider.tsx
var import_classnames = __toModule(require_classnames());
import React from "react";

// sass-plugin-0:/home/runner/work/wds/wds/main/src/Divider/Divider.module.scss
var css = `/**
 * Color
 */
/**
 * Spacing
 */
._divider_eoa9l_7 {
  margin: 0;
  border: 0;
}
._divider_eoa9l_7._horizontal_eoa9l_11 {
  margin: 16px 0;
  background-color: #f2f4f6;
  height: 1px;
}
._divider_eoa9l_7._horizontal_eoa9l_11._lightBG_eoa9l_16 {
  background-color: #f2f4f6;
  opacity: 1;
}
._divider_eoa9l_7._horizontal_eoa9l_11._darkBG_eoa9l_20 {
  opacity: 0.2;
}
._divider_eoa9l_7._horizontal_eoa9l_11._spacing1_eoa9l_23 {
  margin: 2px 0;
}
._divider_eoa9l_7._horizontal_eoa9l_11._spacing2_eoa9l_26 {
  margin: 4px 0;
}
._divider_eoa9l_7._horizontal_eoa9l_11._spacing3_eoa9l_29 {
  margin: 8px 0;
}
._divider_eoa9l_7._horizontal_eoa9l_11._spacing4_eoa9l_32 {
  margin: 12px 0;
}
._divider_eoa9l_7._horizontal_eoa9l_11._spacing5_eoa9l_35 {
  margin: 16px 0;
}
._divider_eoa9l_7._horizontal_eoa9l_11._spacing6_eoa9l_38 {
  margin: 24px 0;
}
._divider_eoa9l_7._horizontal_eoa9l_11._spacing7_eoa9l_41 {
  margin: 32px 0;
}
._divider_eoa9l_7._horizontal_eoa9l_11._spacing8_eoa9l_44 {
  margin: 40px 0;
}
._divider_eoa9l_7._horizontal_eoa9l_11._spacing9_eoa9l_47 {
  margin: 80px 0;
}
._divider_eoa9l_7._horizontal_eoa9l_11._spacing10_eoa9l_50 {
  margin: 120px 0;
}
._divider_eoa9l_7._thick_eoa9l_53 {
  background-color: #f2f4f6;
  height: 12px;
}
._divider_eoa9l_7._thick_eoa9l_53._lightBG_eoa9l_16 {
  background-color: #f2f4f6;
  opacity: 1;
}
._divider_eoa9l_7._thick_eoa9l_53._darkBG_eoa9l_20 {
  opacity: 0.2;
}
._divider_eoa9l_7._thick_eoa9l_53._spacing1_eoa9l_23 {
  margin: 2px 0;
}
._divider_eoa9l_7._thick_eoa9l_53._spacing2_eoa9l_26 {
  margin: 4px 0;
}
._divider_eoa9l_7._thick_eoa9l_53._spacing3_eoa9l_29 {
  margin: 8px 0;
}
._divider_eoa9l_7._thick_eoa9l_53._spacing4_eoa9l_32 {
  margin: 12px 0;
}
._divider_eoa9l_7._thick_eoa9l_53._spacing5_eoa9l_35 {
  margin: 16px 0;
}
._divider_eoa9l_7._thick_eoa9l_53._spacing6_eoa9l_38 {
  margin: 24px 0;
}
._divider_eoa9l_7._thick_eoa9l_53._spacing7_eoa9l_41 {
  margin: 32px 0;
}
._divider_eoa9l_7._thick_eoa9l_53._spacing8_eoa9l_44 {
  margin: 40px 0;
}
._divider_eoa9l_7._thick_eoa9l_53._spacing9_eoa9l_47 {
  margin: 80px 0;
}
._divider_eoa9l_7._thick_eoa9l_53._spacing10_eoa9l_50 {
  margin: 120px 0;
}
._divider_eoa9l_7._vertical_eoa9l_94 {
  display: inline-block;
  width: 1px;
  height: 100%;
  vertical-align: middle;
}
._divider_eoa9l_7._vertical_eoa9l_94._lightBG_eoa9l_16 {
  background-color: #f2f4f6;
  opacity: 1;
}
._divider_eoa9l_7._vertical_eoa9l_94._darkBG_eoa9l_20 {
  opacity: 0.2;
}
._divider_eoa9l_7._vertical_eoa9l_94._spacing1_eoa9l_23 {
  margin: 0 2px;
}
._divider_eoa9l_7._vertical_eoa9l_94._spacing2_eoa9l_26 {
  margin: 0 4px;
}
._divider_eoa9l_7._vertical_eoa9l_94._spacing3_eoa9l_29 {
  margin: 0 8px;
}
._divider_eoa9l_7._vertical_eoa9l_94._spacing4_eoa9l_32 {
  margin: 0 12px;
}
._divider_eoa9l_7._vertical_eoa9l_94._spacing5_eoa9l_35 {
  margin: 0 16px;
}
._divider_eoa9l_7._vertical_eoa9l_94._spacing6_eoa9l_38 {
  margin: 0 24px;
}
._divider_eoa9l_7._vertical_eoa9l_94._spacing7_eoa9l_41 {
  margin: 0 32px;
}
._divider_eoa9l_7._vertical_eoa9l_94._spacing8_eoa9l_44 {
  margin: 0 40px;
}
._divider_eoa9l_7._vertical_eoa9l_94._spacing9_eoa9l_47 {
  margin: 0 80px;
}
._divider_eoa9l_7._vertical_eoa9l_94._spacing10_eoa9l_50 {
  margin: 0 120px;
}
._divider_eoa9l_7._inline_eoa9l_137 {
  display: inline-block;
  margin: 0 4px;
  width: 1px;
  height: 8px;
  vertical-align: middle;
}
._divider_eoa9l_7._inline_eoa9l_137._lightBG_eoa9l_16 {
  background-color: #e9ecef;
  opacity: 1;
}
._divider_eoa9l_7._inline_eoa9l_137._darkBG_eoa9l_20 {
  background-color: #f2f4f6;
  opacity: 0.3;
}
._divider_eoa9l_7._inline_eoa9l_137._caption2_eoa9l_152 {
  margin: 0 4px;
  height: 8px;
}
._divider_eoa9l_7._inline_eoa9l_137._caption1_eoa9l_156 {
  margin: 0 4px;
  height: 10px;
}
._divider_eoa9l_7._inline_eoa9l_137._body2_eoa9l_160 {
  margin: 0 8px;
  height: 12px;
}
._divider_eoa9l_7._inline_eoa9l_137._body1_eoa9l_164 {
  margin: 0 8px;
  height: 14px;
}
._divider_eoa9l_7._dot_eoa9l_168 {
  display: inline-block;
  border-radius: 100%;
  background-color: #dde2e6;
  width: 2px;
  height: 2px;
  vertical-align: middle;
}
._divider_eoa9l_7._dot_eoa9l_168._lightBG_eoa9l_16 {
  background-color: #dde2e6;
  opacity: 1;
}
._divider_eoa9l_7._dot_eoa9l_168._darkBG_eoa9l_20 {
  background-color: #f2f4f6;
  opacity: 0.4;
}
._divider_eoa9l_7._dot_eoa9l_168._caption2_eoa9l_152 {
  margin: 0 4px;
  width: 2px;
  height: 2px;
}
._divider_eoa9l_7._dot_eoa9l_168._caption1_eoa9l_156 {
  margin: 0 4px;
  width: 2px;
  height: 2px;
}
._divider_eoa9l_7._dot_eoa9l_168._body2_eoa9l_160 {
  margin: 0 4px;
  width: 2px;
  height: 2px;
}
._divider_eoa9l_7._dot_eoa9l_168._body1_eoa9l_164 {
  margin: 0 4px;
  width: 2px;
  height: 2px;
}
._divider_eoa9l_7._dot_eoa9l_168._title6_eoa9l_204 {
  margin: 0 8px;
  width: 3px;
  height: 3px;
}
._divider_eoa9l_7._dot_eoa9l_168._title5_eoa9l_209 {
  margin: 0 8px;
  width: 3px;
  height: 3px;
}
._divider_eoa9l_7._flexItem_eoa9l_214 {
  align-self: stretch;
  height: auto;
}`;
document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(css));
var Divider_module_default = {
  "divider": "_divider_eoa9l_7",
  "horizontal": "_horizontal_eoa9l_11",
  "lightBg": "_lightBG_eoa9l_16",
  "darkBg": "_darkBG_eoa9l_20",
  "spacing1": "_spacing1_eoa9l_23",
  "spacing2": "_spacing2_eoa9l_26",
  "spacing3": "_spacing3_eoa9l_29",
  "spacing4": "_spacing4_eoa9l_32",
  "spacing5": "_spacing5_eoa9l_35",
  "spacing6": "_spacing6_eoa9l_38",
  "spacing7": "_spacing7_eoa9l_41",
  "spacing8": "_spacing8_eoa9l_44",
  "spacing9": "_spacing9_eoa9l_47",
  "spacing10": "_spacing10_eoa9l_50",
  "thick": "_thick_eoa9l_53",
  "vertical": "_vertical_eoa9l_94",
  "inline": "_inline_eoa9l_137",
  "caption2": "_caption2_eoa9l_152",
  "caption1": "_caption1_eoa9l_156",
  "body2": "_body2_eoa9l_160",
  "body1": "_body1_eoa9l_164",
  "dot": "_dot_eoa9l_168",
  "title6": "_title6_eoa9l_204",
  "title5": "_title5_eoa9l_209",
  "flexItem": "_flexItem_eoa9l_214"
};

// src/Divider/Divider.tsx
var DividerType;
(function(DividerType2) {
  DividerType2[DividerType2["horizontal"] = 0] = "horizontal";
  DividerType2[DividerType2["thick"] = 1] = "thick";
  DividerType2[DividerType2["vertical"] = 2] = "vertical";
  DividerType2[DividerType2["inline"] = 3] = "inline";
  DividerType2[DividerType2["dot"] = 4] = "dot";
})(DividerType || (DividerType = {}));
var DividerColor;
(function(DividerColor2) {
  DividerColor2[DividerColor2["lightBG"] = 0] = "lightBG";
  DividerColor2[DividerColor2["darkBG"] = 1] = "darkBG";
})(DividerColor || (DividerColor = {}));
var DividerElement;
(function(DividerElement2) {
  DividerElement2[DividerElement2["hr"] = 0] = "hr";
  DividerElement2[DividerElement2["li"] = 1] = "li";
})(DividerElement || (DividerElement = {}));
var Spacing;
(function(Spacing2) {
  Spacing2[Spacing2["spacing5"] = 0] = "spacing5";
  Spacing2[Spacing2["spacing1"] = 1] = "spacing1";
  Spacing2[Spacing2["spacing2"] = 2] = "spacing2";
  Spacing2[Spacing2["spacing3"] = 3] = "spacing3";
  Spacing2[Spacing2["spacing4"] = 4] = "spacing4";
  Spacing2[Spacing2["spacing6"] = 5] = "spacing6";
  Spacing2[Spacing2["spacing7"] = 6] = "spacing7";
  Spacing2[Spacing2["spacing8"] = 7] = "spacing8";
  Spacing2[Spacing2["spacing9"] = 8] = "spacing9";
  Spacing2[Spacing2["spacing10"] = 9] = "spacing10";
})(Spacing || (Spacing = {}));
var FontSize;
(function(FontSize2) {
  FontSize2[FontSize2["caption2"] = 0] = "caption2";
  FontSize2[FontSize2["caption1"] = 1] = "caption1";
  FontSize2[FontSize2["body2"] = 2] = "body2";
  FontSize2[FontSize2["body1"] = 3] = "body1";
  FontSize2[FontSize2["title6"] = 4] = "title6";
  FontSize2[FontSize2["title5"] = 5] = "title5";
})(FontSize || (FontSize = {}));
var Divider = (_a) => {
  var _b = _a, {
    type = "horizontal",
    color = "lightBG",
    element = "hr",
    spacing = "spacing5",
    fontSize = "caption2",
    flexItem = false,
    className
  } = _b, props = __objRest(_b, [
    "type",
    "color",
    "element",
    "spacing",
    "fontSize",
    "flexItem",
    "className"
  ]);
  const classes = (0, import_classnames.default)(Divider_module_default.divider, type && {
    [Divider_module_default.horizontal]: type === "horizontal",
    [Divider_module_default.thick]: type === "thick",
    [Divider_module_default.vertical]: type === "vertical",
    [Divider_module_default.inline]: type === "inline",
    [Divider_module_default.dot]: type === "dot"
  }, color && {
    [Divider_module_default.lightBG]: color === "lightBG",
    [Divider_module_default.darkBG]: color === "darkBG"
  }, spacing && {
    [Divider_module_default.spacing1]: spacing === "spacing1",
    [Divider_module_default.spacing2]: spacing === "spacing2",
    [Divider_module_default.spacing3]: spacing === "spacing3",
    [Divider_module_default.spacing4]: spacing === "spacing4",
    [Divider_module_default.spacing5]: spacing === "spacing5",
    [Divider_module_default.spacing6]: spacing === "spacing6",
    [Divider_module_default.spacing7]: spacing === "spacing7",
    [Divider_module_default.spacing8]: spacing === "spacing8",
    [Divider_module_default.spacing9]: spacing === "spacing9",
    [Divider_module_default.spacing10]: spacing === "spacing10"
  }, fontSize && {
    [Divider_module_default.caption2]: fontSize === "caption2",
    [Divider_module_default.caption1]: fontSize === "caption1",
    [Divider_module_default.body2]: fontSize === "body2",
    [Divider_module_default.body1]: fontSize === "body1",
    [Divider_module_default.title6]: fontSize === "title6",
    [Divider_module_default.title5]: fontSize === "title5"
  }, {
    [Divider_module_default.flexItem]: flexItem
  }, className);
  if (element === "li") {
    return /* @__PURE__ */ React.createElement("li", __spreadProps(__spreadValues({}, props), {
      role: "separator",
      className: classes
    }));
  }
  return /* @__PURE__ */ React.createElement("hr", __spreadProps(__spreadValues({}, props), {
    className: classes
  }));
};
var Divider_default = Divider;
export {
  DividerColor,
  DividerElement,
  DividerType,
  FontSize,
  Spacing,
  Divider_default as default
};
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
