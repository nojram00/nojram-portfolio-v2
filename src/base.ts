export abstract class BaseElement extends HTMLElement {
    private shadow : ShadowRoot;

    constructor() {
        super();

        this.shadow = this.attachShadow({
            mode: 'open'
        });
    }

    protected get css() : string {
        return ''
    }

    protected get template() : string {
        return ''
    }

    protected onInitialize(element : ShadowRoot) : void {}

    private initialize() {
        this.shadow.innerHTML = `
            <style>${this.css}</style>
            ${this.template}
        `;

        this.onInitialize(this.shadow)
    }

    connectedCallback() {
        this.initialize()
    }
}