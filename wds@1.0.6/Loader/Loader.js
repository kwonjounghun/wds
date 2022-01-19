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

// src/Loader/Loader.tsx
var import_classnames = __toModule(require_classnames());
import React, { forwardRef } from "react";

// sass-plugin-0:/home/runner/work/wds/wds/main/src/Loader/Loader.module.scss
var css = `._circular_1krue_1 {
  transform-origin: 100% 100%;
  animation: _waffle-loader-rotate_1krue_1 1.5s linear infinite;
}

._path_1krue_6 {
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  animation: _waffle-loader-dash_1krue_1 1.5s ease-in-out infinite, _waffle-loader-color_1krue_1 3s ease-in-out infinite;
  stroke-linecap: round;
}
._path_1krue_6._primary_1krue_12 {
  animation: _waffle-loader-dash_1krue_1 1.5s ease-in-out infinite, _waffle-loader-color-primary_1krue_1 3s ease-in-out infinite;
}
._path_1krue_6._white_1krue_15 {
  animation: _waffle-loader-dash_1krue_1 1.5s ease-in-out infinite;
  stroke: #fff;
}

@keyframes _waffle-loader-rotate_1krue_1 {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes _waffle-loader-dash_1krue_1 {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124px;
  }
}
@keyframes _waffle-loader-color_1krue_1 {
  100%, 0% {
    stroke: #557cf2;
  }
  50% {
    stroke: #00cca3;
  }
}
@keyframes _waffle-loader-color-primary_1krue_1 {
  100%, 0% {
    stroke: #2ed5d5;
  }
  50% {
    stroke: #00b2b2;
  }
}`;
document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(css));
var Loader_module_default = {
  "circular": "_circular_1krue_1",
  "waffleLoaderRotate": "_waffle-loader-rotate_1krue_1",
  "path": "_path_1krue_6",
  "waffleLoaderDash": "_waffle-loader-dash_1krue_1",
  "waffleLoaderColor": "_waffle-loader-color_1krue_1",
  "primary": "_primary_1krue_12",
  "waffleLoaderColorPrimary": "_waffle-loader-color-primary_1krue_1",
  "white": "_white_1krue_15"
};

// src/Loader/Loader.tsx
var Loader = forwardRef(({
  color = false,
  className
}, ref) => /* @__PURE__ */ React.createElement("svg", {
  viewBox: "25 25 50 50",
  className,
  ref,
  "aria-label": "Loading"
}, /* @__PURE__ */ React.createElement("g", {
  className: Loader_module_default.circular
}, /* @__PURE__ */ React.createElement("circle", {
  className: (0, import_classnames.default)(Loader_module_default.path, {
    [Loader_module_default.primary]: color === "primary",
    [Loader_module_default.white]: color === "white"
  }),
  cx: "50",
  cy: "50",
  r: "20",
  fill: "none",
  strokeWidth: "4",
  strokeMiterlimit: "10"
}))));
var Loader_default = Loader;
export {
  Loader,
  Loader_default as default
};
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
