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

// src/app-nav.ts
var app_nav_exports = {};
__export(app_nav_exports, {
  AppNav: () => AppNav
});
module.exports = __toCommonJS(app_nav_exports);

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

// src/app-nav.ts
var AppNav = class extends BaseElement {
  navItems = [
    "About",
    "Services",
    "Contact Me"
  ];
  *navItemElements() {
    let id = 1;
    for (const navItem of this.navItems) {
      yield (function() {
        const el = document.createElement("div");
        el.classList.add("nav-item");
        el.innerText = navItem;
        el.addEventListener("click", function() {
          document.getElementById(`nav-item-${id}`)?.scrollIntoView();
        });
        return el;
      })();
      id++;
    }
  }
  get css() {
    return `
            nav {
                color: var(--color-primary);
                display: flex;
                flex-direction: row;
                gap: 12px;
            }
        `;
  }
  get template() {
    return `
            <nav>
            </nav>
        `;
  }
  onInitialize(element) {
    const nav = element.querySelector("nav");
    for (const navItem of this.navItemElements()) {
      nav?.append(navItem);
    }
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AppNav
});
