"use strict";var a=Object.defineProperty;var d=Object.getOwnPropertyDescriptor;var l=Object.getOwnPropertyNames;var p=Object.prototype.hasOwnProperty;var c=(t,e)=>{for(var i in e)a(t,i,{get:e[i],enumerable:!0})},h=(t,e,i,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of l(e))!p.call(t,o)&&o!==i&&a(t,o,{get:()=>e[o],enumerable:!(s=d(e,o))||s.enumerable});return t};var x=t=>h(a({},"__esModule",{value:!0}),t);var g={};c(g,{AppPanel:()=>n});module.exports=x(g);var r=class extends HTMLElement{shadow;constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}get css(){return""}get template(){return""}onInitialize(e){}initialize(){this.shadow.innerHTML=`
            <style>${this.css}</style>
            ${this.template}
        `,this.onInitialize(this.shadow)}connectedCallback(){this.initialize()}};var n=class extends r{get css(){return`
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
        `}};0&&(module.exports={AppPanel});
