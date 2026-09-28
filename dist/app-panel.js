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

// src/app-panel.ts
var app_panel_exports = {};
__export(app_panel_exports, {
  AppPanel: () => AppPanel
});
module.exports = __toCommonJS(app_panel_exports);

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

// src/app-panel.ts
var AppPanel = class extends BaseElement {
  get css() {
    return `
            :host {
                box-sizing: border-box;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                width: 100%
            }

            .panel {
                margin-top: 40px;
                border-radius: 20px;
                max-width: 1200px;
                min-height: 512px;
                width: 100%;
                box-shadow: 0 4px 12px var(--color-panel-highlight);
                background: var(--color-panel);
            }

            .panel-header {
                box-sizing: border-box;
                width: 100%;
                min-height: 64px;

                display: flex;
                align-items: center;

                padding: 12px 20px;

                background: var(--color-panel-highlight);
                color: var(--color-text);

                border-bottom: 4px solid var(--color-outline);
                border-radius: 20px 20px 0 0;
            }

            .panel-content {
                box-sizing: border-box;
                width: 100%;

                padding: 24px;

                color: var(--color-text);
                background: var(--color-panel);
            }
        `;
  }
  get template() {
    return `
            <div class="panel">
                <div class="panel-header">
                    <slot name="header"></slot>
                </div>
                <div class="panel-content">
                    <slot></slot>
                </div>
            </div>
        `;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AppPanel
});
