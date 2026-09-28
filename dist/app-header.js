"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/app-header.ts
var app_header_exports = {};
__export(app_header_exports, {
  AppHeader: () => AppHeader
});
module.exports = __toCommonJS(app_header_exports);

// src/base.ts
var BaseElement = class extends HTMLElement {
  shadow;
  constructor() {
    super();
    this.shadow = this.attachShadow({
      mode: "open"
    });
  }
  get css() {
    return "";
  }
  get template() {
    return "";
  }
  onInitialize(element) {
  }
  initialize() {
    this.shadow.innerHTML = `
            <style>${this.css}</style>
            ${this.template}
        `;
    this.onInitialize(this.shadow);
  }
  connectedCallback() {
    this.initialize();
  }
};

// src/app-header.ts
var AppHeader = class extends BaseElement {
  get css() {
    return `
            .header {
                box-sizing: border-box;
                max-width: 100vw;
                width: 100%;
                background-color: black;
                color: white;
                min-height: 50px;
                padding: 5px 8px;
                display: flex;
                align-items: center;
            }

            .space {
                flex: 1;
            }
        `;
  }
  get template() {
    return `
            <div class="header">
                <div class="logo">NojramPortfolio</div>
                <div class="space"></div>
                <app-nav></app-nav>
            </div>
        `;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AppHeader
});
