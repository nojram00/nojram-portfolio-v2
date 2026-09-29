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

// src/app-slide.ts
var app_slide_exports = {};
__export(app_slide_exports, {
  AppSlide: () => AppSlide
});
module.exports = __toCommonJS(app_slide_exports);

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

// src/utils/clamp.ts
var clamp = (min, max, value) => {
  return Math.max(min, Math.min(max, value));
};

// src/app-slide.ts
var SlideDataFactory = class {
  constructor(header, content) {
    this.header = header;
    this.content = content;
  }
  header;
  content;
};
var AppSlide = class extends BaseElement {
  slideData = [
    this.generateSlideData(
      "Education",
      "Graduate at ..."
    ),
    this.generateSlideData(
      "Work Experience",
      "Formerly worked at ..."
    )
  ];
  generateSlideData(header, content) {
    return new SlideDataFactory(header, content);
  }
  *slides() {
    let slideIdx = 0;
    for (const data of this.slideData) {
      const element = document.createElement("div");
      element.innerHTML = `
                <div class="header">
                    ${data.header}
                </div>
                <div class="body">
                    ${data.content}
                </div>
            `;
      element.id = `slide-${slideIdx}`;
      element.classList.add("slide-item");
      slideIdx++;
      yield element;
    }
    return null;
  }
  get template() {
    return `
            <div id="slide-viewport">
                <button class="btn-prev btn"></button>
                <div id="slide-container"></div>
                <button class="btn-next btn"></button>
            </div>
        `;
  }
  get css() {
    return `
            :host {
                display: block;

                width: 100%;
                height: 100%;
                min-height: 300px;

                box-sizing: border-box;
            }

            /*
            * Carousel viewport
            */
            #slide-viewport {
                position: relative;

                width: 100%;
                height: 100%;
                min-height: 300px;

                overflow: hidden;

                box-sizing: border-box;
            }

            /*
            * Slide container
            *
            * Grid allows all slides to occupy the
            * exact same cell.
            */
            #slide-container {
                display: grid;

                width: 100%;
                height: 100%;
                min-height: 300px;

                box-sizing: border-box;
            }

            /*
            * Every slide occupies the same grid cell.
            */
            #slide-container > .slide-item {
                grid-area: 1 / 1;

                width: 100%;
                height: 100%;

                box-sizing: border-box;

                display: flex;
                flex-direction: column;

                padding: 24px;

                overflow: hidden;

                /*
                * Hidden state
                */
                opacity: 0;
                visibility: hidden;
                pointer-events: none;

                /*
                * Fade animation
                */
                transition:
                    opacity 400ms ease,
                    visibility 400ms ease;

                will-change: opacity;
            }

            /*
            * Active slide
            */
            #slide-container > .slide-item[data-active] {
                opacity: 1;
                visibility: visible;
                pointer-events: auto;
            }

            /*
            * Slide header
            */
            #slide-container > .slide-item .header {
                flex: 0 0 auto;

                margin-bottom: 12px;

                font-size: 1.5rem;
                font-weight: 600;
                line-height: 1.2;
            }

            /*
            * Slide body
            */
            #slide-container > .slide-item .body {
                flex: 1 1 auto;

                min-height: 0;

                overflow-y: auto;

                font-size: 1rem;
                line-height: 1.5;
            }

            /*
            * Navigation buttons
            */
            #slide-viewport .btn {
                position: absolute;

                top: 50%;

                transform: translateY(-50%);

                z-index: 10;

                width: 40px;
                height: 40px;

                padding: 0;

                border: none;
                border-radius: 50%;

                cursor: pointer;

                display: flex;
                align-items: center;
                justify-content: center;

                background: rgba(0, 0, 0, 0.5);
                color: white;

                transition:
                    background 150ms ease,
                    transform 100ms ease;
            }

            /*
            * Previous button
            */
            #slide-viewport .btn-prev {
                left: 12px;
            }

            #slide-viewport .btn-prev::before {
                content: "<";

                font-size: 32px;
                line-height: 1;
            }

            /*
            * Next button
            */
            #slide-viewport .btn-next {
                right: 12px;
            }

            #slide-viewport .btn-next::before {
                content: ">";

                font-size: 32px;
                line-height: 1;
            }

            /*
            * Button hover
            */
            #slide-viewport .btn:hover {
                background: rgba(0, 0, 0, 0.7);
            }

            /*
            * Button press
            */
            #slide-viewport .btn:active {
                transform: translateY(-50%) scale(0.95);
            }
        `;
  }
  onInitialize(element) {
    const slideContainer = element.querySelector("#slide-container");
    if (!slideContainer) return;
    for (const slideItem of this.slides()) {
      slideContainer.append(slideItem);
    }
    const slides = Array.from(
      slideContainer.querySelectorAll(".slide-item")
    );
    let currentIdx = -1;
    const showSlide = (idx) => {
      if (slides.length === 0) return;
      if (idx < 0) {
        idx = slides.length - 1;
      }
      if (idx >= slides.length) {
        idx = 0;
      }
      if (idx === currentIdx) return;
      slides[currentIdx]?.removeAttribute("data-active");
      currentIdx = idx;
      slides[currentIdx]?.setAttribute("data-active", "");
    };
    const prevBtn = element.querySelector(".btn-prev");
    const nextBtn = element.querySelector(".btn-next");
    prevBtn?.addEventListener("click", () => {
      const clampedIdx = clamp(0, slides.length - 1, currentIdx - 1);
      console.log("Prev: ", clampedIdx);
      showSlide(clampedIdx);
    });
    nextBtn?.addEventListener("click", () => {
      const clampedIdx = clamp(0, slides.length - 1, currentIdx + 1);
      console.log("Next: ", clampedIdx);
      showSlide(clampedIdx);
    });
    showSlide(0);
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AppSlide
});
