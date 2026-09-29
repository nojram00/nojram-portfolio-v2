"use strict";var a=Object.defineProperty;var d=Object.getOwnPropertyDescriptor;var c=Object.getOwnPropertyNames;var h=Object.prototype.hasOwnProperty;var l=(e,t)=>{for(var o in t)a(e,o,{get:t[o],enumerable:!0})},p=(e,t,o,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of c(t))!h.call(e,i)&&i!==o&&a(e,i,{get:()=>t[i],enumerable:!(n=d(t,i))||n.enumerable});return e};var m=e=>p(a({},"__esModule",{value:!0}),e);var g={};l(g,{Approot:()=>s});module.exports=m(g);var r=class extends HTMLElement{shadow;constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}get css(){return""}get template(){return""}onInitialize(t){}initialize(){this.shadow.innerHTML=`
            <style>${this.css}</style>
            ${this.template}
        `,this.onInitialize(this.shadow)}connectedCallback(){this.initialize()}};var s=class extends r{get css(){return`
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
        `}};0&&(module.exports={Approot});
