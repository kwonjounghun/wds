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
var _default = {};

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
  return React.cloneElement(component, { className: (0, import_classnames.default)(_default.icon, className) });
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
    className: _default.children
  }, children), endIconComp), loading && /* @__PURE__ */ React.createElement("div", {
    className: _default.loader
  }, /* @__PURE__ */ React.createElement(Loader, {
    className: _default.svg,
    color: variant && ButtonVariant[variant] === 1 && (color && ButtonColor[color] !== 2) ? "white" : "primary"
  }))), [children, startIconComp, endIconComp, loading, color, variant]);
  const classes = useClasses(() => [
    _default,
    {
      name: "button",
      className
    },
    color && {
      [_default.primary]: ButtonColor[color] === 0,
      [_default.secondary]: ButtonColor[color] === 1,
      [_default["tertiaryMint"]]: ButtonColor[color] === 2,
      [_default["tertiaryGrey"]]: ButtonColor[color] === 3,
      [_default.info]: ButtonColor[color] === 4,
      [_default.danger]: ButtonColor[color] === 5
    },
    variant && {
      [_default.contained]: ButtonVariant[variant] === 1,
      [_default.text]: ButtonVariant[variant] === 2
    },
    size && {
      [_default.xs]: ButtonSize[size] === 0,
      [_default.sm]: ButtonSize[size] === 1,
      [_default.md]: ButtonSize[size] === 2,
      [_default.lg]: ButtonSize[size] === 3,
      [_default.xl]: ButtonSize[size] === 4
    },
    {
      [_default.startIcon]: !!startIconComp,
      [_default.endIcon]: !!endIconComp,
      [_default.iconOnly]: iconOnly,
      [_default.circular]: !!circular,
      [_default.block]: !!fullWidth,
      [_default.disabled]: !!disabled,
      [_default.loading]: !!loading
    }
  ], [
    _default,
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
