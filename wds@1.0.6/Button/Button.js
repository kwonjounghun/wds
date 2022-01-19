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

// src/Button/Button.tsx
var import_classnames = __toModule(require_classnames());
import React, { useMemo, forwardRef } from "react";
import Loader from "../Loader/Loader.js";
import useClasses from "../useClasses/useClasses.js";

// sass-plugin-0:/home/runner/work/wds/wds/main/src/Button/Button.module.scss
var css = `/**
 * Color
 */
/**
 * Spacing
 */
/**
 * Color
 */
/**
 * Spacing
 */
._loader_o0b43_13 {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 0.5em;
  box-sizing: border-box;
}
._loader_o0b43_13 > ._svg_o0b43_22 {
  width: 100%;
  height: 100%;
}

._button_o0b43_27 {
  position: relative;
  transition-property: background-color, border-color, color, opacity;
  transition-duration: 150ms;
  border: 1px solid #cdd3d8;
  border-radius: 3px;
  background-color: transparent;
  cursor: pointer;
  padding: 9px 16px;
  vertical-align: middle;
  text-decoration: none;
  line-height: 1.43;
  white-space: nowrap;
  color: #495057;
  font-size: 14px;
  font-weight: 500;
  box-sizing: border-box !important;
  -webkit-appearance: none;
  -webkit-font-smoothing: antialiased;
}
._button_o0b43_27 span {
  display: inline-flex;
  align-items: center;
  vertical-align: top;
}
a._button_o0b43_27 {
  display: inline-block;
  align-items: center;
  padding-top: 0.07em;
  text-decoration: none;
}
a._button_o0b43_27._block_o0b43_58 {
  text-align: center;
}

@media (hover: hover) and (pointer: fine) {
  ._button_o0b43_27._hover_o0b43_63, ._button_o0b43_27:hover {
    border-width: #adb5bd;
    background-color: #e9ecef;
  }
}
._button_o0b43_27:active, ._button_o0b43_27._active_o0b43_68 {
  text-decoration: none;
  border-width: #adb5bd;
  background-color: #e9ecef;
}
._button_o0b43_27._disabled_o0b43_73, ._button_o0b43_27:disabled, ._button_o0b43_27[disabled] {
  opacity: 0.45;
  cursor: default;
  pointer-events: none;
}
._button_o0b43_27._circular_o0b43_78 {
  border-radius: 999em;
}
._button_o0b43_27._block_o0b43_58 {
  width: 100%;
}
._button_o0b43_27._loading_o0b43_84 {
  cursor: default;
  pointer-events: none;
}
._button_o0b43_27._loading_o0b43_84 > span {
  opacity: 0;
}
._button_o0b43_27._loading_o0b43_84 ._loader_o0b43_13 {
  opacity: 1;
}
._button_o0b43_27._loading_o0b43_84._iconOnly_o0b43_94 > span svg {
  opacity: 0;
}
._button_o0b43_27._loading_o0b43_84._primary_o0b43_97:hover ._loader_o0b43_13 circle {
  stroke: #fff !important;
}
._button_o0b43_27._contained_o0b43_100 {
  border-color: #dde2e6;
  background-color: #dde2e6;
}
@media (hover: hover) and (pointer: fine) {
  ._button_o0b43_27._contained_o0b43_100._hover_o0b43_63, ._button_o0b43_27._contained_o0b43_100:hover {
    border-color: #cdd3d8;
    background-color: #cdd3d8;
  }
}
._button_o0b43_27._contained_o0b43_100:active, ._button_o0b43_27._contained_o0b43_100._active_o0b43_68 {
  text-decoration: none;
  border-color: #cdd3d8;
  background-color: #cdd3d8;
}
._button_o0b43_27._text_o0b43_115 {
  border-color: transparent;
}
@media (hover: hover) and (pointer: fine) {
  ._button_o0b43_27._text_o0b43_115._hover_o0b43_63, ._button_o0b43_27._text_o0b43_115:hover {
    background-color: #dde2e6;
  }
}
._button_o0b43_27._text_o0b43_115:active, ._button_o0b43_27._text_o0b43_115._active_o0b43_68 {
  text-decoration: none;
  background-color: #dde2e6;
}
._button_o0b43_27._primary_o0b43_97 {
  border-color: #00c4c4;
  color: #00a2a2;
}
@media (hover: hover) and (pointer: fine) {
  ._button_o0b43_27._primary_o0b43_97._hover_o0b43_63, ._button_o0b43_27._primary_o0b43_97:hover {
    border-color: #00c4c4;
    background-color: #e7f9f9;
  }
}
._button_o0b43_27._primary_o0b43_97:active, ._button_o0b43_27._primary_o0b43_97._active_o0b43_68 {
  text-decoration: none;
  border-color: #00c4c4;
  background-color: #e7f9f9;
}
._button_o0b43_27._primary_o0b43_97._contained_o0b43_100 {
  border-color: #00c4c4;
  background-color: #00c4c4;
  color: #fff;
}
@media (hover: hover) and (pointer: fine) {
  ._button_o0b43_27._primary_o0b43_97._contained_o0b43_100._hover_o0b43_63, ._button_o0b43_27._primary_o0b43_97._contained_o0b43_100:hover {
    border-color: #00b2b2;
    background-color: #00b2b2;
    color: #fff;
  }
}
._button_o0b43_27._primary_o0b43_97._contained_o0b43_100:active, ._button_o0b43_27._primary_o0b43_97._contained_o0b43_100._active_o0b43_68 {
  text-decoration: none;
  border-color: #00b2b2;
  background-color: #00b2b2;
  color: #fff;
}
._button_o0b43_27._primary_o0b43_97._text_o0b43_115 {
  border-color: transparent;
}
@media (hover: hover) and (pointer: fine) {
  ._button_o0b43_27._primary_o0b43_97._text_o0b43_115._hover_o0b43_63, ._button_o0b43_27._primary_o0b43_97._text_o0b43_115:hover {
    background-color: #e7f9f9;
    color: #00a2a2;
  }
}
._button_o0b43_27._primary_o0b43_97._text_o0b43_115:active, ._button_o0b43_27._primary_o0b43_97._text_o0b43_115._active_o0b43_68 {
  text-decoration: none;
  background-color: #e7f9f9;
  color: #00a2a2;
}
._button_o0b43_27._secondary_o0b43_174 {
  border-color: #e9ecef;
  color: #343a40;
}
@media (hover: hover) and (pointer: fine) {
  ._button_o0b43_27._secondary_o0b43_174._hover_o0b43_63, ._button_o0b43_27._secondary_o0b43_174:hover {
    border-color: #e9ecef;
    background-color: #f9fafb;
  }
}
._button_o0b43_27._secondary_o0b43_174:active, ._button_o0b43_27._secondary_o0b43_174._active_o0b43_68 {
  text-decoration: none;
  border-color: #e9ecef;
  background-color: #f9fafb;
}
._button_o0b43_27._secondary_o0b43_174._contained_o0b43_100 {
  border-color: #868e96;
  background-color: #868e96;
  color: #fff;
}
@media (hover: hover) and (pointer: fine) {
  ._button_o0b43_27._secondary_o0b43_174._contained_o0b43_100._hover_o0b43_63, ._button_o0b43_27._secondary_o0b43_174._contained_o0b43_100:hover {
    border-color: #495057;
    background-color: #495057;
    color: #fff;
  }
}
._button_o0b43_27._secondary_o0b43_174._contained_o0b43_100:active, ._button_o0b43_27._secondary_o0b43_174._contained_o0b43_100._active_o0b43_68 {
  text-decoration: none;
  border-color: #495057;
  background-color: #495057;
  color: #fff;
}
._button_o0b43_27._secondary_o0b43_174._text_o0b43_115 {
  border-color: transparent;
}
@media (hover: hover) and (pointer: fine) {
  ._button_o0b43_27._secondary_o0b43_174._text_o0b43_115._hover_o0b43_63, ._button_o0b43_27._secondary_o0b43_174._text_o0b43_115:hover {
    background-color: #f2f4f6;
    color: #343a40;
  }
}
._button_o0b43_27._secondary_o0b43_174._text_o0b43_115:active, ._button_o0b43_27._secondary_o0b43_174._text_o0b43_115._active_o0b43_68 {
  text-decoration: none;
  background-color: #f2f4f6;
  color: #343a40;
}
._button_o0b43_27._tertiaryMint_o0b43_221 {
  border-color: #e7f9f9;
  color: #00a2a2;
}
._button_o0b43_27._tertiaryMint_o0b43_221._contained_o0b43_100 {
  border-color: #e7f9f9;
  background-color: #e7f9f9;
  color: #00a2a2;
}
@media (hover: hover) and (pointer: fine) {
  ._button_o0b43_27._tertiaryMint_o0b43_221._hover_o0b43_63, ._button_o0b43_27._tertiaryMint_o0b43_221:hover {
    border-color: #b9eeee;
    background-color: #b9eeee;
  }
}
._button_o0b43_27._tertiaryMint_o0b43_221:active, ._button_o0b43_27._tertiaryMint_o0b43_221._active_o0b43_68 {
  text-decoration: none;
  border-color: #b9eeee;
  background-color: #b9eeee;
}
._button_o0b43_27._tertiaryMint_o0b43_221._text_o0b43_115 {
  border-color: transparent;
}
@media (hover: hover) and (pointer: fine) {
  ._button_o0b43_27._tertiaryMint_o0b43_221._text_o0b43_115._hover_o0b43_63, ._button_o0b43_27._tertiaryMint_o0b43_221._text_o0b43_115:hover {
    background-color: #e7f9f9;
    color: #00a2a2;
  }
}
._button_o0b43_27._tertiaryMint_o0b43_221._text_o0b43_115:active, ._button_o0b43_27._tertiaryMint_o0b43_221._text_o0b43_115._active_o0b43_68 {
  text-decoration: none;
  background-color: #e7f9f9;
  color: #00a2a2;
}
._button_o0b43_27._tertiaryGrey_o0b43_255 {
  border-color: #f2f4f6;
  color: #495057;
}
._button_o0b43_27._tertiaryGrey_o0b43_255._contained_o0b43_100 {
  border-color: #f2f4f6;
  background-color: #f2f4f6;
  color: #495057;
}
@media (hover: hover) and (pointer: fine) {
  ._button_o0b43_27._tertiaryGrey_o0b43_255._hover_o0b43_63, ._button_o0b43_27._tertiaryGrey_o0b43_255:hover {
    border-color: #e9ecef;
    background-color: #e9ecef;
  }
}
._button_o0b43_27._tertiaryGrey_o0b43_255:active, ._button_o0b43_27._tertiaryGrey_o0b43_255._active_o0b43_68 {
  text-decoration: none;
  border-color: #e9ecef;
  background-color: #e9ecef;
}
._button_o0b43_27._tertiaryGrey_o0b43_255._text_o0b43_115 {
  border-color: transparent;
}
@media (hover: hover) and (pointer: fine) {
  ._button_o0b43_27._tertiaryGrey_o0b43_255._text_o0b43_115._hover_o0b43_63, ._button_o0b43_27._tertiaryGrey_o0b43_255._text_o0b43_115:hover {
    background-color: #f2f4f6;
    color: #343a40;
  }
}
._button_o0b43_27._tertiaryGrey_o0b43_255._text_o0b43_115:active, ._button_o0b43_27._tertiaryGrey_o0b43_255._text_o0b43_115._active_o0b43_68 {
  text-decoration: none;
  background-color: #f2f4f6;
  color: #343a40;
}
._button_o0b43_27._info_o0b43_289 {
  border-color: #7396ff;
  color: #395bbf;
}
@media (hover: hover) and (pointer: fine) {
  ._button_o0b43_27._info_o0b43_289._hover_o0b43_63, ._button_o0b43_27._info_o0b43_289:hover {
    border-color: #4167d9;
    background-color: #eff3fd;
  }
}
._button_o0b43_27._info_o0b43_289:active, ._button_o0b43_27._info_o0b43_289._active_o0b43_68 {
  text-decoration: none;
  border-color: #4167d9;
  background-color: #eff3fd;
}
._button_o0b43_27._info_o0b43_289._contained_o0b43_100 {
  border-color: #7396ff;
  background-color: #7396ff;
  color: #fff;
}
@media (hover: hover) and (pointer: fine) {
  ._button_o0b43_27._info_o0b43_289._contained_o0b43_100._hover_o0b43_63, ._button_o0b43_27._info_o0b43_289._contained_o0b43_100:hover {
    border-color: #557cf2;
    background-color: #557cf2;
    color: #fff;
  }
}
._button_o0b43_27._info_o0b43_289._contained_o0b43_100:active, ._button_o0b43_27._info_o0b43_289._contained_o0b43_100._active_o0b43_68 {
  text-decoration: none;
  border-color: #557cf2;
  background-color: #557cf2;
  color: #fff;
}
._button_o0b43_27._info_o0b43_289._text_o0b43_115 {
  border-color: transparent;
}
@media (hover: hover) and (pointer: fine) {
  ._button_o0b43_27._info_o0b43_289._text_o0b43_115._hover_o0b43_63, ._button_o0b43_27._info_o0b43_289._text_o0b43_115:hover {
    background-color: #eff3fd;
    color: #395bbf;
  }
}
._button_o0b43_27._info_o0b43_289._text_o0b43_115:active, ._button_o0b43_27._info_o0b43_289._text_o0b43_115._active_o0b43_68 {
  text-decoration: none;
  background-color: #eff3fd;
  color: #395bbf;
}
._button_o0b43_27._danger_o0b43_336 {
  border-color: #ff8181;
  color: #e54545;
}
@media (hover: hover) and (pointer: fine) {
  ._button_o0b43_27._danger_o0b43_336._hover_o0b43_63, ._button_o0b43_27._danger_o0b43_336:hover {
    border-color: #f25555;
    background-color: #fff1f1;
  }
}
._button_o0b43_27._danger_o0b43_336:active, ._button_o0b43_27._danger_o0b43_336._active_o0b43_68 {
  text-decoration: none;
  border-color: #f25555;
  background-color: #fff1f1;
}
._button_o0b43_27._danger_o0b43_336._contained_o0b43_100 {
  border-color: #ff8181;
  background-color: #ff8181;
  color: #fff;
}
@media (hover: hover) and (pointer: fine) {
  ._button_o0b43_27._danger_o0b43_336._contained_o0b43_100._hover_o0b43_63, ._button_o0b43_27._danger_o0b43_336._contained_o0b43_100:hover {
    border-color: #f66;
    background-color: #f66;
    color: #fff;
  }
}
._button_o0b43_27._danger_o0b43_336._contained_o0b43_100:active, ._button_o0b43_27._danger_o0b43_336._contained_o0b43_100._active_o0b43_68 {
  text-decoration: none;
  border-color: #f66;
  background-color: #f66;
  color: #fff;
}
._button_o0b43_27._danger_o0b43_336._text_o0b43_115 {
  border-color: transparent;
}
@media (hover: hover) and (pointer: fine) {
  ._button_o0b43_27._danger_o0b43_336._text_o0b43_115._hover_o0b43_63, ._button_o0b43_27._danger_o0b43_336._text_o0b43_115:hover {
    background-color: #fff1f1;
    color: #e54545;
  }
}
._button_o0b43_27._danger_o0b43_336._text_o0b43_115:active, ._button_o0b43_27._danger_o0b43_336._text_o0b43_115._active_o0b43_68 {
  text-decoration: none;
  background-color: #fff1f1;
  color: #e54545;
}
._button_o0b43_27 svg._icon_o0b43_94 {
  display: inline-block;
  width: 16px;
  height: 16px;
}
._button_o0b43_27 svg._icon_o0b43_94:first-child {
  margin-right: 6px;
}
._button_o0b43_27 svg._icon_o0b43_94:last-child {
  margin-left: 6px;
}
._button_o0b43_27 ._children_o0b43_394 {
  vertical-align: top;
}
._button_o0b43_27._xs_o0b43_397 {
  padding: 4px 12px;
  line-height: 1.5;
  font-size: 12px;
}
._button_o0b43_27._xs_o0b43_397 svg._icon_o0b43_94 {
  width: 12px;
  height: 12px;
}
._button_o0b43_27._xs_o0b43_397 svg._icon_o0b43_94:first-child {
  margin-right: 4px;
}
._button_o0b43_27._xs_o0b43_397 svg._icon_o0b43_94:last-child {
  margin-left: 4px;
}
._button_o0b43_27._xs_o0b43_397._startIcon_o0b43_412 {
  padding-left: 8px;
}
._button_o0b43_27._xs_o0b43_397._endIcon_o0b43_415 {
  padding-right: 8px;
}
._button_o0b43_27._sm_o0b43_418 {
  padding: 6px 12px;
  line-height: 1.5;
  font-size: 12px;
}
._button_o0b43_27._sm_o0b43_418 svg._icon_o0b43_94 {
  width: 16px;
  height: 16px;
}
._button_o0b43_27._sm_o0b43_418 svg._icon_o0b43_94:first-child {
  margin-right: 4px;
}
._button_o0b43_27._sm_o0b43_418 svg._icon_o0b43_94:last-child {
  margin-left: 4px;
}
._button_o0b43_27._sm_o0b43_418._startIcon_o0b43_412 {
  padding-left: 8px;
}
._button_o0b43_27._sm_o0b43_418._endIcon_o0b43_415 {
  padding-right: 8px;
}
._button_o0b43_27._md_o0b43_439 {
  padding: 9px 16px;
  line-height: 1.45;
  font-size: 14px;
}
._button_o0b43_27._md_o0b43_439 svg._icon_o0b43_94 {
  width: 16px;
  height: 16px;
}
._button_o0b43_27._md_o0b43_439 svg._icon_o0b43_94:first-child {
  margin-right: 6px;
}
._button_o0b43_27._md_o0b43_439 svg._icon_o0b43_94:last-child {
  margin-left: 6px;
}
._button_o0b43_27._md_o0b43_439._startIcon_o0b43_412 {
  padding-left: 10px;
}
._button_o0b43_27._md_o0b43_439._endIcon_o0b43_415 {
  padding-right: 10px;
}
._button_o0b43_27._lg_o0b43_460 {
  padding: 9px 24px;
  line-height: 1.75;
  font-size: 16px;
}
._button_o0b43_27._lg_o0b43_460 svg._icon_o0b43_94 {
  width: 20px;
  height: 20px;
}
._button_o0b43_27._lg_o0b43_460 svg._icon_o0b43_94:first-child {
  margin-right: 6px;
}
._button_o0b43_27._lg_o0b43_460 svg._icon_o0b43_94:last-child {
  margin-left: 6px;
}
._button_o0b43_27._lg_o0b43_460._startIcon_o0b43_412 {
  padding-left: 18px;
}
._button_o0b43_27._lg_o0b43_460._endIcon_o0b43_415 {
  padding-right: 18px;
}
._button_o0b43_27._xl_o0b43_481 {
  padding: 14px 28px;
  line-height: 1.4;
  font-size: 18px;
}
._button_o0b43_27._xl_o0b43_481 svg._icon_o0b43_94 {
  width: 24px;
  height: 24px;
}
._button_o0b43_27._xl_o0b43_481 svg._icon_o0b43_94:first-child {
  margin-right: 8px;
}
._button_o0b43_27._xl_o0b43_481 svg._icon_o0b43_94:last-child {
  margin-left: 8px;
}
._button_o0b43_27._xl_o0b43_481._startIcon_o0b43_412 {
  padding-left: 20px;
}
._button_o0b43_27._xl_o0b43_481._endIcon_o0b43_415 {
  padding-right: 20px;
}
._button_o0b43_27._inline-block_o0b43_502 {
  display: inline-block;
  padding-top: 10px;
  padding-bottom: 10px;
  height: auto;
  line-height: 1.25;
}
._button_o0b43_27._iconOnly_o0b43_94 {
  padding: 12px;
  height: auto;
}
._button_o0b43_27._iconOnly_o0b43_94 > span svg {
  width: 16px;
  height: 16px;
}
._button_o0b43_27._iconOnly_o0b43_94._xs_o0b43_397 {
  padding: 8px;
}
._button_o0b43_27._iconOnly_o0b43_94._xs_o0b43_397 > span svg {
  width: 12px;
  height: 12px;
}
._button_o0b43_27._iconOnly_o0b43_94._sm_o0b43_418 {
  padding: 8px;
}
._button_o0b43_27._iconOnly_o0b43_94._sm_o0b43_418 > span svg {
  width: 16px;
  height: 16px;
}
._button_o0b43_27._iconOnly_o0b43_94._md_o0b43_439 {
  padding: 12px;
}
._button_o0b43_27._iconOnly_o0b43_94._md_o0b43_439 > span svg {
  width: 16px;
  height: 16px;
}
._button_o0b43_27._iconOnly_o0b43_94._lg_o0b43_460 {
  padding: 14px;
}
._button_o0b43_27._iconOnly_o0b43_94._lg_o0b43_460 > span svg {
  width: 20px;
  height: 20px;
}
._button_o0b43_27._iconOnly_o0b43_94._xl_o0b43_481 {
  padding: 16px;
}
._button_o0b43_27._iconOnly_o0b43_94._xl_o0b43_481 > span svg {
  width: 24px;
  height: 24px;
}`;
document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(css));
var Button_module_default = {
  "loader": "_loader_o0b43_13",
  "svg": "_svg_o0b43_22",
  "button": "_button_o0b43_27",
  "block": "_block_o0b43_58",
  "hover": "_hover_o0b43_63",
  "active": "_active_o0b43_68",
  "disabled": "_disabled_o0b43_73",
  "circular": "_circular_o0b43_78",
  "loading": "_loading_o0b43_84",
  "iconOnly": "_iconOnly_o0b43_94",
  "primary": "_primary_o0b43_97",
  "contained": "_contained_o0b43_100",
  "text": "_text_o0b43_115",
  "secondary": "_secondary_o0b43_174",
  "tertiaryMint": "_tertiaryMint_o0b43_221",
  "tertiaryGrey": "_tertiaryGrey_o0b43_255",
  "info": "_info_o0b43_289",
  "danger": "_danger_o0b43_336",
  "icon": "_icon_o0b43_94",
  "children": "_children_o0b43_394",
  "xs": "_xs_o0b43_397",
  "startIcon": "_startIcon_o0b43_412",
  "endIcon": "_endIcon_o0b43_415",
  "sm": "_sm_o0b43_418",
  "md": "_md_o0b43_439",
  "lg": "_lg_o0b43_460",
  "xl": "_xl_o0b43_481",
  "inlineBlock": "_inline-block_o0b43_502"
};

// src/Button/Button.tsx
var ButtonType;
(function(ButtonType2) {
  ButtonType2[ButtonType2["button"] = 0] = "button";
  ButtonType2[ButtonType2["submit"] = 1] = "submit";
})(ButtonType || (ButtonType = {}));
var ButtonVariant;
(function(ButtonVariant2) {
  ButtonVariant2[ButtonVariant2["outlined"] = 0] = "outlined";
  ButtonVariant2[ButtonVariant2["contained"] = 1] = "contained";
  ButtonVariant2[ButtonVariant2["text"] = 2] = "text";
})(ButtonVariant || (ButtonVariant = {}));
var ButtonSize;
(function(ButtonSize2) {
  ButtonSize2[ButtonSize2["xs"] = 0] = "xs";
  ButtonSize2[ButtonSize2["sm"] = 1] = "sm";
  ButtonSize2[ButtonSize2["md"] = 2] = "md";
  ButtonSize2[ButtonSize2["lg"] = 3] = "lg";
  ButtonSize2[ButtonSize2["xl"] = 4] = "xl";
})(ButtonSize || (ButtonSize = {}));
var ButtonColor;
(function(ButtonColor2) {
  ButtonColor2[ButtonColor2["primary"] = 0] = "primary";
  ButtonColor2[ButtonColor2["secondary"] = 1] = "secondary";
  ButtonColor2[ButtonColor2["tertiaryMint"] = 2] = "tertiaryMint";
  ButtonColor2[ButtonColor2["tertiaryGrey"] = 3] = "tertiaryGrey";
  ButtonColor2[ButtonColor2["info"] = 4] = "info";
  ButtonColor2[ButtonColor2["danger"] = 5] = "danger";
})(ButtonColor || (ButtonColor = {}));
var iconComponent = (component) => {
  if (!React.isValidElement(component)) {
    return null;
  }
  const { className } = component.props;
  return React.cloneElement(component, { className: (0, import_classnames.default)(Button_module_default.icon, className) });
};
var isIconOnly = (className) => {
  if (className) {
    return className.includes("iconButton");
  }
  return false;
};
var Button = forwardRef((_a, ref) => {
  var _b = _a, {
    type = "button",
    variant,
    color,
    size = "medium",
    circular = false,
    loading = false,
    startIcon,
    endIcon,
    className,
    children = null,
    href,
    fullWidth = false,
    disabled = false
  } = _b, props = __objRest(_b, [
    "type",
    "variant",
    "color",
    "size",
    "circular",
    "loading",
    "startIcon",
    "endIcon",
    "className",
    "children",
    "href",
    "fullWidth",
    "disabled"
  ]);
  const startIconComp = iconComponent(startIcon);
  const endIconComp = iconComponent(endIcon);
  const iconOnly = isIconOnly(className);
  const content = useMemo(() => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", null, startIconComp, /* @__PURE__ */ React.createElement("span", {
    className: Button_module_default.children
  }, children), endIconComp), loading && /* @__PURE__ */ React.createElement("div", {
    className: Button_module_default.loader
  }, /* @__PURE__ */ React.createElement(Loader, {
    className: Button_module_default.svg,
    color: variant && ButtonVariant[variant] === 1 && (color && ButtonColor[color] !== 2) ? "white" : "primary"
  }))), [children, startIconComp, endIconComp, loading, color, variant]);
  const classes = useClasses(() => [
    Button_module_default,
    {
      name: "button",
      className
    },
    color && {
      [Button_module_default.primary]: ButtonColor[color] === 0,
      [Button_module_default.secondary]: ButtonColor[color] === 1,
      [Button_module_default["tertiaryMint"]]: ButtonColor[color] === 2,
      [Button_module_default["tertiaryGrey"]]: ButtonColor[color] === 3,
      [Button_module_default.info]: ButtonColor[color] === 4,
      [Button_module_default.danger]: ButtonColor[color] === 5
    },
    variant && {
      [Button_module_default.contained]: ButtonVariant[variant] === 1,
      [Button_module_default.text]: ButtonVariant[variant] === 2
    },
    size && {
      [Button_module_default.xs]: ButtonSize[size] === 0,
      [Button_module_default.sm]: ButtonSize[size] === 1,
      [Button_module_default.md]: ButtonSize[size] === 2,
      [Button_module_default.lg]: ButtonSize[size] === 3,
      [Button_module_default.xl]: ButtonSize[size] === 4
    },
    {
      [Button_module_default.startIcon]: !!startIconComp,
      [Button_module_default.endIcon]: !!endIconComp,
      [Button_module_default.iconOnly]: iconOnly,
      [Button_module_default.circular]: !!circular,
      [Button_module_default.block]: !!fullWidth,
      [Button_module_default.disabled]: !!disabled,
      [Button_module_default.loading]: !!loading
    }
  ], [
    Button_module_default,
    color,
    className,
    disabled,
    circular,
    loading,
    size,
    variant,
    fullWidth,
    iconOnly,
    startIconComp,
    endIconComp
  ]);
  if (href) {
    return /* @__PURE__ */ React.createElement("a", __spreadProps(__spreadValues({}, props), {
      href,
      className: classes,
      ref
    }), content);
  }
  return /* @__PURE__ */ React.createElement("button", __spreadProps(__spreadValues({}, props), {
    className: classes,
    type,
    disabled,
    ref
  }), content);
});
var Button_default = Button;
export {
  Button,
  ButtonColor,
  ButtonSize,
  ButtonType,
  ButtonVariant,
  Button_default as default
};
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
