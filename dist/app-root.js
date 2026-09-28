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

// src/app-root.ts
var app_root_exports = {};
__export(app_root_exports, {
  Approot: () => Approot
});
module.exports = __toCommonJS(app_root_exports);
var Approot = class extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({
      mode: "open"
    });
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
                <style>
                    :host {
                        display: block;
                        width: 100%;
                    }
                    .root-container {
                        width: 100%;
                        min-height: 100vh;
                        background: var(--color-bg);
                        box-sizing: border-box;
                    }

                    @media (max-width: 768px) {
                        .root-container {
                            padding: 12px;
                        }
                    }

                    @media (max-width: 480px) {
                        .root-container {
                            padding: 8px;
                        }
                    }
                </style>

                <div class="root-container">
                    <slot></slot>
                </div>
            `;
    }
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Approot
});
