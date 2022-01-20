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

// src/Avatar/Avatar.tsx
var import_classnames = __toModule(require_classnames());
import React, { forwardRef, useCallback, useState } from "react";
import useClasses from "../useClasses/useClasses.js";

// sass-plugin-0:/home/runner/work/wds/wds/main/src/Avatar/Avatar.module.scss
var css = `/**
 * Color
 */
/**
 * Spacing
 */
._avatar_1jwdh_7 {
  display: inline-flex;
  outline: none;
  border: 1px solid #dde2e6;
  border-radius: 100%;
  background: url("./img-blank.svg") no-repeat 50%/cover;
  cursor: pointer;
  padding: 0;
  width: 64px;
  height: 64px;
  vertical-align: middle;
}
._avatar_1jwdh_7 > span {
  display: block;
  opacity: 1;
  border-radius: 100%;
  background: inherit;
  width: 100%;
  height: 100%;
}
._avatar_1jwdh_7 > span > ._visible_1jwdh_27 {
  opacity: 0;
  background: #fff no-repeat 50%/cover;
}
._avatar_1jwdh_7._lg_1jwdh_31 {
  width: 80px;
  height: 80px;
}
._avatar_1jwdh_7._md_1jwdh_35 {
  width: 64px;
  height: 64px;
}
._avatar_1jwdh_7._sm_1jwdh_39 {
  width: 56px;
  height: 56px;
}
._avatar_1jwdh_7._xs_1jwdh_43 {
  width: 36px;
  height: 36px;
}`;
document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(css));
var Avatar_module_default = {
  "avatar": "_avatar_1jwdh_7",
  "visible": "_visible_1jwdh_27",
  "lg": "_lg_1jwdh_31",
  "md": "_md_1jwdh_35",
  "sm": "_sm_1jwdh_39",
  "xs": "_xs_1jwdh_43"
};

// src/Avatar/Avatar.tsx
import ImageWrap from "./ImageWrap.js";
var AvatarSize;
(function(AvatarSize2) {
  AvatarSize2[AvatarSize2["lg"] = 0] = "lg";
  AvatarSize2[AvatarSize2["md"] = 1] = "md";
  AvatarSize2[AvatarSize2["sm"] = 2] = "sm";
  AvatarSize2[AvatarSize2["xs"] = 3] = "xs";
})(AvatarSize || (AvatarSize = {}));
var Avatar = forwardRef((_a, ref) => {
  var _b = _a, { name, className, size = 1, href, imageUrl } = _b, props = __objRest(_b, ["name", "className", "size", "href", "imageUrl"]);
  const [isVisible, setVisible] = useState(false);
  const classes = useClasses(() => [
    Avatar_module_default,
    {
      name: "avatar",
      className
    },
    size && {
      [Avatar_module_default.lg]: AvatarSize[size] === 0,
      [Avatar_module_default.md]: AvatarSize[size] === 1,
      [Avatar_module_default.sm]: AvatarSize[size] === 2,
      [Avatar_module_default.xs]: AvatarSize[size] === 3
    }
  ], [Avatar_module_default, size]);
  const onVisible = useCallback((visible) => {
    if (isVisible !== visible) {
      setVisible(visible);
    }
  }, [isVisible]);
  if (href) {
    return /* @__PURE__ */ React.createElement("a", __spreadProps(__spreadValues({}, props), {
      className: classes,
      role: "button",
      href,
      target: "_blank",
      rel: "nofollow noopener noreferrer",
      ref
    }), /* @__PURE__ */ React.createElement(ImageWrap, {
      imageUrl,
      className: (0, import_classnames.default)({ [Avatar_module_default.visible]: isVisible }),
      onVisible
    }));
  }
  return /* @__PURE__ */ React.createElement("button", __spreadProps(__spreadValues({}, props), {
    className: classes,
    ref
  }), /* @__PURE__ */ React.createElement(ImageWrap, {
    imageUrl,
    className: (0, import_classnames.default)({ [Avatar_module_default.visible]: isVisible }),
    onVisible
  }));
});
var Avatar_default = Avatar;
export {
  Avatar,
  AvatarSize,
  Avatar_default as default
};
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
