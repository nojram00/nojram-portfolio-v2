import { BaseElement } from "./base";

export class AppNav extends BaseElement {

    private navItems = [
        'About',
        'Services',
        'Contact Me'
    ]

    private *navItemElements() {
        let id = 1;
        for (const navItem of this.navItems) {
            yield (function(){
                const el = document.createElement('div');
                el.classList.add('nav-item');
                el.innerText = navItem;
                el.setAttribute('data-target', `nav-item-${id}`);
                return el;
            })();
            id++;
        }
    }

    protected override get css() {
        return `
            nav {
                color: var(--color-primary);
                display: flex;
                flex-direction: row;
                gap: 12px;
            }

            .nav-item {
                cursor: pointer;
            }
        `
    }

    protected override get template() {
        return `
            <nav>
            </nav>
        `
    }

    protected override onInitialize(element: ShadowRoot): void {
        const nav = element.querySelector('nav');
        for (const navItem of this.navItemElements()) {
            nav?.append(navItem);
            navItem.addEventListener('click', function(e) {
                const target = navItem.getAttribute('data-target');
                if (target) {
                    document.getElementById(target)?.scrollIntoView();
                }
            })
        }
    }
}