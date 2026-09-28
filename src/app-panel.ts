import { BaseElement } from "./base";
export class AppPanel extends BaseElement {

    protected override get css() {
        return `
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
        `
    }

    protected override get template() {
        return `
            <div class="panel">
                <div class="panel-header">
                    <slot name="header"></slot>
                </div>
                <div class="panel-content">
                    <slot></slot>
                </div>
            </div>
        `
    }
}