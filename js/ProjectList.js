import { ProjectCard } from './ProjectCard.js';

export class ProjectList {
    constructor(container, projects) {
        this.container = container;
        this.projects = projects;
    }

    render() {
        this.projects.forEach(project => {
            const card = new ProjectCard(
                project.title,
                project.type,
                project.role,
                project.description,
                project.image,
                project.link
            );
            this.container.appendChild(card.render());
        });
    }
}