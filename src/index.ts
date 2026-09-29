import { Approot } from './app-root';
import  { AppHeader } from './app-header';
import { AppNav } from './app-nav';
import { AppPanel } from './app-panel';
import { AboutSlides } from './slides/about-slides';

customElements.define('app-root', Approot);
customElements.define('app-header', AppHeader);
customElements.define('app-nav', AppNav);
customElements.define('app-panel', AppPanel);

// Slides
customElements.define('about-slides', AboutSlides);
