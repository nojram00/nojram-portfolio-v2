import { BaseElement } from "./base";

export class AppHeader extends BaseElement {
    protected override get css() {
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
        `
    }
    protected override get template() {
        return `
            <div class="header">
                <div class="logo">NojramPortfolio</div>
                <div class="space"></div>
                <app-nav></app-nav>
            </div>
        `
    }
}