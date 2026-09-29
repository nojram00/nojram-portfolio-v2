"use strict";var r=class extends HTMLElement{shadow;constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}get css(){return""}get template(){return""}onInitialize(t){}initialize(){this.shadow.innerHTML=`
            <style>${this.css}</style>
            ${this.template}
        `,this.onInitialize(this.shadow)}connectedCallback(){this.initialize()}};var l=class extends r{get css(){return`
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
        `}get template(){return`
            <div class="root-container">
                <slot></slot>
            </div>
        `}};var c=class extends r{get css(){return`
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
        `}get template(){return`
            <div class="header">
                <div class="logo">NojramPortfolio</div>
                <div class="space"></div>
                <app-nav></app-nav>
            </div>
        `}};var p=class extends r{navItems=["About","Projects","Contact Me"];*navItemElements(){let t=1;for(let i of this.navItems)yield(function(){let e=document.createElement("div");return e.classList.add("nav-item"),e.innerText=i,e.setAttribute("data-target",`nav-item-${t}`),e})(),t++}get css(){return`
            nav {
                color: var(--color-primary);
                display: flex;
                flex-direction: row;
                gap: 12px;
            }

            .nav-item {
                cursor: pointer;
            }
        `}get template(){return`
            <nav>
            </nav>
        `}onInitialize(t){let i=t.querySelector("nav");for(let e of this.navItemElements())i?.append(e),e.addEventListener("click",function(a){let s=e.getAttribute("data-target");s&&document.getElementById(s)?.scrollIntoView()})}};var m=class extends r{get css(){return`
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
        `}get template(){return`
            <div class="panel">
                <div class="panel-header">
                    <slot name="header"></slot>
                </div>
                <div class="panel-content">
                    <slot></slot>
                </div>
            </div>
        `}};var g=(n,t,i)=>Math.max(n,Math.min(t,i));var d=class n{constructor(t,i){this.header=t;this.content=i}header;content;static create(t,i){return new n(t,i)}},v=class extends r{get slideData(){return[]}*slides(){let t=0;for(let i of this.slideData){let e=document.createElement("div");e.innerHTML=`
                <div class="header">
                    ${i.header}
                </div>
                <div class="body">
                    ${i.content}
                </div>
            `,e.id=`slide-${t}`,e.classList.add("slide-item"),t++,yield e}return null}get template(){return`
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
        `}onInitialize(t){let i=t.querySelector("#slide-container");if(!i)return;for(let o of this.slides())i.append(o);let e=Array.from(i.querySelectorAll(".slide-item")),a=-1,s=o=>{e.length!==0&&(o<0&&(o=e.length-1),o>=e.length&&(o=0),o!==a&&(e[a]?.removeAttribute("data-active"),a=o,e[a]?.setAttribute("data-active","")))},u=t.querySelector(".btn-prev"),x=t.querySelector(".btn-next");u?.addEventListener("click",()=>{let o=g(0,e.length-1,a-1);console.log("Prev: ",o),s(o)}),x?.addEventListener("click",()=>{let o=g(0,e.length-1,a+1);console.log("Next: ",o),s(o)}),s(0)}};var h=class extends v{get slideData(){return[d.create("Personal Information",`
                    <div class="cover">
                        <h1>Marjon Godito</h1>
                        <div class="cover-content">
                            <h2>Web and Software Developer</h2>
                            <span>I create web, software and games for any clients.</span>
                            <img class="img-left" src="" />
                        </div>
                    </div>
                `),d.create("Educational Attainment",`
                    <div class="cover-content">
                        <span>Graduate in Bachelor of Science and Technology at Pamatasan ng Lungsod ng Valenzuela.</span>
                    </div>
                `),d.create("Work Experience",`
                    <div class="cover-content">
                        <span>Formerly worked at SlashTech Solutions Corp. as Backend Developer (2023 - 2024)</span>
                        <span>Currently worked at GMA New Media Inc. as Associate Developer (2024 - Present)</span>
                    </div>
                `)]}get css(){return`
            ${super.css}

            .cover-content {
                position: relative;
                display: flex;
                flex-direction: column;
            }

            .cover-content > span::before {
                content: "\u203A ";
            }
            
            .gallery {
                display: grid;
            }

            img.img-left {
                position: absolute;
                right: 0;
            }
        `}};customElements.define("app-root",l);customElements.define("app-header",c);customElements.define("app-nav",p);customElements.define("app-panel",m);customElements.define("about-slides",h);
