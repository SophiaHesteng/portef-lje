export class ProjectCard {
    constructor(title, type, role, description, image, link){
        this.title = title;
        this.type = type;
        this.role = role;
        this.description = description;
        this.image = image;
        this.link = link;
    }

    render() {
        const card = document.createElement('article');
            card.className = 'project-card';

        const img = document.createElement('img');
            img.src = this.image.src;
            img.alt = this.image.alt;
            card.appendChild(img);

        const cardBody = document.createElement('div');
            cardBody.className = 'project-card__body';

        const h3 = document.createElement('h3');
            h3.textContent = this.title;
            cardBody.appendChild(h3);

        const details = document.createElement('p');
            details.className = 'project-card__details';
            details.textContent = `${this.type}. Min rolle: ${this.role}`;
            cardBody.appendChild(details);

        const description = document.createElement('p');
            description.textContent = this.description;
            cardBody.appendChild(description);

        const a = document.createElement('a');
            a.href = this.link.href;
            a.textContent = this.link.label;
            cardBody.appendChild(a);

            card.appendChild(cardBody);

            return card;
    }
}