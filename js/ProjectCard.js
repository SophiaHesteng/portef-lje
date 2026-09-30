import { Component } from './component.js';

export class ProjectCard extends Component {
    #project;
    #toggleButton;
    #processPanel;
 
    constructor(project) {
        super();
        this.#project = project;
    }
 
    render() {
        const { title, type, role, description, image, imageFit, link } = this.#project;
 
        const card = this.createElement('article', { className: 'project-card' });
 
        card.appendChild(this.createElement('img', {
            className: `project-card__img project-card__img--${imageFit ?? 'cover'}`,
            attributes: { src: image.src, alt: image.alt, loading: 'lazy' }
        }));
 
        const body = this.createElement('div', { className: 'project-card__body' });
        body.appendChild(this.createElement('h4', { text: title }));
        body.appendChild(this.createElement('p', {
            className: 'project-card__details',
            text: `${type}. Min rolle: ${role}`
        }));
        body.appendChild(this.createElement('p', { text: description }));
 
        if (this.#project.process?.length) {
            this.#renderProcess(body);
        }
 
        body.appendChild(this.createElement('a', {
            text: link.label,
            attributes: { href: link.href, 'aria-label': `${link.label}: ${title}` }
        }));
 
        card.appendChild(body);
        return card;
    }
 
    #renderProcess(body) {
        const panelId = `process-${this.#project.id}`;
 
        this.#toggleButton = this.createElement('button', {
            className: 'project-card__toggle',
            text: 'Se min proces',
            attributes: { type: 'button', 'aria-expanded': 'false', 'aria-controls': panelId }
        });
 
        this.#processPanel = this.createElement('div', {
            className: 'project-card__process',
            attributes: { id: panelId, hidden: '' }
        });
 
        const steps = this.createElement('ol');
            this.#project.process.forEach(step => {
                steps.appendChild(this.createElement('li', { text: step }));
            });
            
        this.#processPanel.appendChild(steps);
 
        this.#toggleButton.addEventListener('click', () => this.#toggleProcess());
 
        body.appendChild(this.#toggleButton);
        body.appendChild(this.#processPanel);
    }
 
    #toggleProcess() {
        const wasOpen = this.#toggleButton.getAttribute('aria-expanded') === 'true';
        this.#toggleButton.setAttribute('aria-expanded', String(!wasOpen));
        this.#toggleButton.textContent = wasOpen ? 'Se min proces' : 'Skjul min proces';
        this.#processPanel.hidden = wasOpen;
    }
}