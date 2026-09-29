import { BaseElement } from "./base";
import { clamp } from "./utils/clamp";

export interface SlideData {
    header : string;
    content: string;
}

export class SlideDataFactory implements SlideData {
    constructor(
        public header: string,
        public content: string
    ) {}

    static create(header : string, content : string) : SlideData {
        return new SlideDataFactory(header, content)
    }
}

export abstract class AppSlide extends BaseElement {

    protected get slideData() : SlideData[] {
        return []
    }

    private *slides() : Generator<HTMLElement, null> {
        let slideIdx = 0;
        for (const data of this.slideData) {
            const element = document.createElement('div')

            element.innerHTML = `
                <div class="header">
                    ${data.header}
                </div>
                <div class="body">
                    ${data.content}
                </div>
            `

            element.id = `slide-${slideIdx}`;
            element.classList.add('slide-item');
            slideIdx++;

            yield element;

        }

        return null;
    }

    protected override get template() {
        return `
            <div id="slide-viewport">
                <button class="btn-prev btn"></button>
                <div id="slide-container"></div>
                <button class="btn-next btn"></button>
            </div>
        `
    }

    protected override get css() {
        return `
            :host {
                display: block;

                width: 100%;
                height: 100%;
                min-height: 300px;

                box-sizing: border-box;
            }

            /*
            * Carousel viewport
            */
            #slide-viewport {
                position: relative;

                width: 100%;
                height: 100%;
                min-height: 300px;

                overflow: hidden;

                box-sizing: border-box;
            }

            /*
            * Slide container
            *
            * Grid allows all slides to occupy the
            * exact same cell.
            */
            #slide-container {
                display: grid;

                width: 100%;
                height: 100%;
                min-height: 300px;
                margin: 0 50px;

                box-sizing: border-box;
            }

            /*
            * Every slide occupies the same grid cell.
            */
            #slide-container > .slide-item {
                grid-area: 1 / 1;

                width: 100%;
                height: 100%;

                box-sizing: border-box;

                display: flex;
                flex-direction: column;

                padding: 24px;

                overflow: hidden;

                /*
                * Hidden state
                */
                opacity: 0;
                visibility: hidden;
                pointer-events: none;

                /*
                * Fade animation
                */
                transition:
                    opacity 400ms ease,
                    visibility 400ms ease;

                will-change: opacity;
            }

            /*
            * Active slide
            */
            #slide-container > .slide-item[data-active] {
                opacity: 1;
                visibility: visible;
                pointer-events: auto;
            }

            /*
            * Slide header
            */
            #slide-container > .slide-item .header {
                flex: 0 0 auto;

                margin-bottom: 12px;

                font-size: 1.5rem;
                font-weight: 600;
                line-height: 1.2;
            }

            /*
            * Slide body
            */
            #slide-container > .slide-item .body {
                flex: 1 1 auto;

                min-height: 0;

                overflow-y: auto;

                font-size: 1rem;
                line-height: 1.5;
            }

            /*
            * Navigation buttons
            */
            #slide-viewport .btn {
                position: absolute;

                top: 50%;

                transform: translateY(-50%);

                z-index: 10;

                width: 40px;
                height: 40px;

                padding: 0;

                border: none;
                border-radius: 50%;

                cursor: pointer;

                display: flex;
                align-items: center;
                justify-content: center;

                background: rgba(0, 0, 0, 0.25);
                color: rgba(255, 255, 255, 0.5);

                transition:
                    background 150ms ease,
                    transform 100ms ease;
            }

            /*
            * Previous button
            */
            #slide-viewport .btn-prev {
                left: 12px;
            }

            #slide-viewport .btn-prev::before {
                content: "<";

                font-size: 32px;
                line-height: 1;
            }

            /*
            * Next button
            */
            #slide-viewport .btn-next {
                right: 12px;
            }

            #slide-viewport .btn-next::before {
                content: ">";

                font-size: 32px;
                line-height: 1;
            }

            /*
            * Button hover
            */
            #slide-viewport .btn:hover {
                background: rgba(0, 0, 0, 0.7);
            }

            /*
            * Button press
            */
            #slide-viewport .btn:active {
                transform: translateY(-50%) scale(0.95);
            }
        `;
    }

    protected override onInitialize(element: ShadowRoot): void {
        const slideContainer = element.querySelector<HTMLElement>('#slide-container');

        if (!slideContainer) return;

        for (const slideItem of this.slides()) {
            slideContainer.append(slideItem);
        }

        const slides = Array.from(
            slideContainer.querySelectorAll<HTMLElement>('.slide-item')
        );

        let currentIdx = -1;

        const showSlide = (idx : number) => {
            if (slides.length === 0) return;

            if (idx < 0) {
                idx = slides.length - 1;
            }

            if (idx >= slides.length) {
                idx = 0;
            }

            if (idx === currentIdx) return;
            
            slides[currentIdx]?.removeAttribute('data-active');
            currentIdx = idx;
            slides[currentIdx]?.setAttribute('data-active', '');

        };

        const prevBtn = element.querySelector('.btn-prev');
        const nextBtn = element.querySelector('.btn-next')

        prevBtn?.addEventListener('click' , () => {
            const clampedIdx = clamp(0, slides.length - 1, currentIdx - 1);
            console.log("Prev: ", clampedIdx);
            showSlide(clampedIdx);
        });

        nextBtn?.addEventListener('click' , () => {
            const clampedIdx = clamp(0, slides.length - 1, currentIdx + 1);
            console.log("Next: ", clampedIdx);
            showSlide(clampedIdx);
        });

        showSlide(0);
    }
}