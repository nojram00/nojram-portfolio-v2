"use strict";var a=Object.defineProperty;var d=Object.getOwnPropertyDescriptor;var l=Object.getOwnPropertyNames;var v=Object.prototype.hasOwnProperty;var m=(o,t)=>{for(var n in t)a(o,n,{get:t[n],enumerable:!0})},p=(o,t,n,e)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of l(t))!v.call(o,i)&&i!==n&&a(o,i,{get:()=>t[i],enumerable:!(e=d(t,i))||e.enumerable});return o};var h=o=>p(a({},"__esModule",{value:!0}),o);var u={};m(u,{AppNav:()=>s});module.exports=h(u);var r=class extends HTMLElement{shadow;constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}get css(){return""}get template(){return""}onInitialize(t){}initialize(){this.shadow.innerHTML=`
            <style>${this.css}</style>
            ${this.template}
        `,this.onInitialize(this.shadow)}connectedCallback(){this.initialize()}};var s=class extends r{navItems=["About","Projects","Contact Me"];*navItemElements(){let t=1;for(let n of this.navItems)yield(function(){let e=document.createElement("div");return e.classList.add("nav-item"),e.innerText=n,e.setAttribute("data-target",`nav-item-${t}`),e})(),t++}get css(){return`
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
        `}onInitialize(t){let n=t.querySelector("nav");for(let e of this.navItemElements())n?.append(e),e.addEventListener("click",function(i){let c=e.getAttribute("data-target");c&&document.getElementById(c)?.scrollIntoView()})}};0&&(module.exports={AppNav});
