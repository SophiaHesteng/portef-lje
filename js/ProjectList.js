import { Component } from './component.js';
import { ProjectCard } from './ProjectCard.js';

export class ProjectList extends Component {
    #container;
    #projects;
 
    constructor(container, projects) {
        super();
        this.#container = container;
        this.#projects = projects;
    }
 
    render() {
        const cards = this.#projects.map(project => new ProjectCard(project).render());
        this.#container.replaceChildren(...cards);
    }
}