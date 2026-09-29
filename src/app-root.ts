import { BaseElement } from "./base";

export class Approot extends BaseElement {
    protected override get css() {
        return `
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
        `
    }

    protected override get template() {
        return `
            <div class="root-container">
                <slot></slot>
            </div>
        `
    }
}