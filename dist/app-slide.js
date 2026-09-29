"use strict";var d=Object.defineProperty;var m=Object.getOwnPropertyDescriptor;var v=Object.getOwnPropertyNames;var g=Object.prototype.hasOwnProperty;var u=(o,e)=>{for(var t in e)d(o,t,{get:e[t],enumerable:!0})},x=(o,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of v(e))!g.call(o,r)&&r!==t&&d(o,r,{get:()=>e[r],enumerable:!(i=m(e,r))||i.enumerable});return o};var f=o=>x(d({},"__esModule",{value:!0}),o);var w={};u(w,{AppSlide:()=>h,SlideDataFactory:()=>c});module.exports=f(w);var s=class extends HTMLElement{shadow;constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}get css(){return""}get template(){return""}onInitialize(e){}initialize(){this.shadow.innerHTML=`
            <style>${this.css}</style>
            ${this.template}
        `,this.onInitialize(this.shadow)}connectedCallback(){this.initialize()}};var l=(o,e,t)=>Math.max(o,Math.min(e,t));var c=class o{constructor(e,t){this.header=e;this.content=t}header;content;static create(e,t){return new o(e,t)}},h=class extends s{get slideData(){return[]}*slides(){let e=0;for(let t of this.slideData){let i=document.createElement("div");i.innerHTML=`
                <div class="header">
                    ${t.header}
                </div>
                <div class="body">
                    ${t.content}
                </div>
            `,i.id=`slide-${e}`,i.classList.add("slide-item"),e++,yield i}return null}get template(){return`
            <div id="slide-viewport">
                <button class="btn-prev btn"></button>
                <div id="slide-container"></div>
                <button class="btn-next btn"></button>
            </div>
        `}get css(){return`
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
                margin: 0 50px;

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

                background: rgba(0, 0, 0, 0.25);
                color: rgba(255, 255, 255, 0.5);

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
        `}onInitialize(e){let t=e.querySelector("#slide-container");if(!t)return;for(let n of this.slides())t.append(n);let i=Array.from(t.querySelectorAll(".slide-item")),r=-1,a=n=>{i.length!==0&&(n<0&&(n=i.length-1),n>=i.length&&(n=0),n!==r&&(i[r]?.removeAttribute("data-active"),r=n,i[r]?.setAttribute("data-active","")))},p=e.querySelector(".btn-prev"),b=e.querySelector(".btn-next");p?.addEventListener("click",()=>{let n=l(0,i.length-1,r-1);console.log("Prev: ",n),a(n)}),b?.addEventListener("click",()=>{let n=l(0,i.length-1,r+1);console.log("Next: ",n),a(n)}),a(0)}};0&&(module.exports={AppSlide,SlideDataFactory});
