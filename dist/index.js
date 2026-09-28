"use strict";

// src/app-root.ts
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

// src/index.ts
customElements.define("app-root", Approot);
customElements.define("app-header", AppHeader);
customElements.define("app-nav", AppNav);
customElements.define("app-panel", AppPanel);
