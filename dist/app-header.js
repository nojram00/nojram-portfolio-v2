"use strict";var a=Object.defineProperty;var n=Object.getOwnPropertyDescriptor;var c=Object.getOwnPropertyNames;var l=Object.prototype.hasOwnProperty;var p=(t,e)=>{for(var o in e)a(t,o,{get:e[o],enumerable:!0})},h=(t,e,o,d)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of c(e))!l.call(t,i)&&i!==o&&a(t,i,{get:()=>e[i],enumerable:!(d=n(e,i))||d.enumerable});return t};var v=t=>h(a({},"__esModule",{value:!0}),t);var g={};p(g,{AppHeader:()=>r});module.exports=v(g);var s=class extends HTMLElement{shadow;constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}get css(){return""}get template(){return""}onInitialize(e){}initialize(){this.shadow.innerHTML=`
            <style>${this.css}</style>
            ${this.template}
        `,this.onInitialize(this.shadow)}connectedCallback(){this.initialize()}};var r=class extends s{get css(){return`
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
        `}};0&&(module.exports={AppHeader});
