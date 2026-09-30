import { Component } from './Component.js';
 
// CV-data: ret stien, når du har lagt PDF'en i files/
export const cv = {
    label: 'Download CV (PDF)',
    href: 'files/Opdateret_CV.pdf'
};

export class CvLink extends Component {
    #label;
    #href;
 
    constructor({ label, href }) {
        super();
        this.#label = label;
        this.#href = href;
    }
 
    render() {
        return this.createElement('a', {
            className: 'btn',
            text: this.#label,
            attributes: { href: this.#href, download: '' }
        });
    }
}