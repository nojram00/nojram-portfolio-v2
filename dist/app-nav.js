"use strict";var a=Object.defineProperty;var d=Object.getOwnPropertyDescriptor;var l=Object.getOwnPropertyNames;var v=Object.prototype.hasOwnProperty;var m=(n,t)=>{for(var o in t)a(n,o,{get:t[o],enumerable:!0})},p=(n,t,o,e)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of l(t))!v.call(n,i)&&i!==o&&a(n,i,{get:()=>t[i],enumerable:!(e=d(t,i))||e.enumerable});return n};var h=n=>p(a({},"__esModule",{value:!0}),n);var u={};m(u,{AppNav:()=>s});module.exports=h(u);var r=class extends HTMLElement{shadow;constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}get css(){return""}get template(){return""}onInitialize(t){}initialize(){this.shadow.innerHTML=`
            <style>${this.css}</style>
            ${this.template}
        `,this.onInitialize(this.shadow)}connectedCallback(){this.initialize()}};var s=class extends r{navItems=["About","Services","Contact Me"];*navItemElements(){let t=1;for(let o of this.navItems)yield(function(){let e=document.createElement("div");return e.classList.add("nav-item"),e.innerText=o,e.setAttribute("data-target",`nav-item-${t}`),e})(),t++}get css(){return`
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
        `}onInitialize(t){let o=t.querySelector("nav");for(let e of this.navItemElements())o?.append(e),e.addEventListener("click",function(i){let c=e.getAttribute("data-target");c&&document.getElementById(c)?.scrollIntoView()})}};0&&(module.exports={AppNav});
