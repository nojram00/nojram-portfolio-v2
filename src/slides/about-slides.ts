import { AppSlide, SlideDataFactory } from "../app-slide";

export class AboutSlides extends AppSlide {
    protected override get slideData() {
        return [
            SlideDataFactory.create(
                'Personal Information',
                `
                    <div class="cover">
                        <h1>Marjon Godito</h1>
                        <div class="cover-content">
                            <h2>Web and Software Developer</h2>
                            <span>I create web, software and games for any clients.</span>
                            <img class="img-left" src="" />
                        </div>
                    </div>
                `
            ),
            SlideDataFactory.create(
                'Educational Attainment',
                `
                    <div class="cover-content">
                        <span>Graduate in Bachelor of Science and Technology at Pamatasan ng Lungsod ng Valenzuela.</span>
                    </div>
                `
            ),
            SlideDataFactory.create(
                'Work Experience',
                `
                    <div class="cover-content">
                        <span>Formerly worked at SlashTech Solutions Corp. as Backend Developer (2023 - 2024)</span>
                        <span>Currently worked at GMA New Media Inc. as Associate Developer (2024 - Present)</span>
                    </div>
                `
            )
        ]
    }

    protected override get css() {
        return `
            ${super.css}

            .cover-content {
                position: relative;
                display: flex;
                flex-direction: column;
            }

            .cover-content > span::before {
                content: "› ";
            }
            
            .gallery {
                display: grid;
            }

            img.img-left {
                position: absolute;
                right: 0;
            }
        `
    }
}