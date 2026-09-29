"use strict";var l=Object.defineProperty;var g=Object.getOwnPropertyDescriptor;var m=Object.getOwnPropertyNames;var u=Object.prototype.hasOwnProperty;var v=(o,e)=>{for(var t in e)l(o,t,{get:e[t],enumerable:!0})},x=(o,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of m(e))!u.call(o,r)&&r!==t&&l(o,r,{get:()=>e[r],enumerable:!(i=g(e,r))||i.enumerable});return o};var f=o=>x(l({},"__esModule",{value:!0}),o);var w={};v(w,{AppSlide:()=>h});module.exports=f(w);var a=class extends HTMLElement{shadow;constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}get css(){return""}get template(){return""}onInitialize(e){}initialize(){this.shadow.innerHTML=`
            <style>${this.css}</style>
            ${this.template}
        `,this.onInitialize(this.shadow)}connectedCallback(){this.initialize()}};var d=(o,e,t)=>Math.max(o,Math.min(e,t));var c=class{constructor(e,t){this.header=e;this.content=t}header;content},h=class extends a{slideData=[this.generateSlideData("Personal Information",`
                <ul>
                    <li>
                        <span style="font-weight: bold;">Name: </span> 
                        <span>Marjon Godito</span>
                    </li>
                    <li>
                        <span style="font-weight: bold;">Name: </span> 
                        <span>Marjon Godito</span>
                    </li>
                </ul>
            `),this.generateSlideData("Education","Graduate in Bachelor of Science and Technology at Pamatasan ng Lungsod ng Valenzuela."),this.generateSlideData("Work Experience","Formerly worked at ...")];generateSlideData(e,t){return new c(e,t)}*slides(){let e=0;for(let t of this.slideData){let i=document.createElement("div");i.innerHTML=`
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
        `}onInitialize(e){let t=e.querySelector("#slide-container");if(!t)return;for(let n of this.slides())t.append(n);let i=Array.from(t.querySelectorAll(".slide-item")),r=-1,s=n=>{i.length!==0&&(n<0&&(n=i.length-1),n>=i.length&&(n=0),n!==r&&(i[r]?.removeAttribute("data-active"),r=n,i[r]?.setAttribute("data-active","")))},p=e.querySelector(".btn-prev"),b=e.querySelector(".btn-next");p?.addEventListener("click",()=>{let n=d(0,i.length-1,r-1);console.log("Prev: ",n),s(n)}),b?.addEventListener("click",()=>{let n=d(0,i.length-1,r+1);console.log("Next: ",n),s(n)}),s(0)}};0&&(module.exports={AppSlide});
