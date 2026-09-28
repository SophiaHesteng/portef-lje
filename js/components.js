export class ScrollSpy {
    constructor(nav) {
        this.links = new Map();

        nav.querySelectorAll('a[href^="#"]').forEach(link => {
            const id = link.getAttribute('href').slice(1); 
            const section = document.getElementById(id);
            if (section) {
                this.links.set(section, link);
            }
        });
    }

    init() {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.activate(this.links.get(entry.target));
                }
            });
        }, { rootMargin: '-40% 0px -55% 0px' });

        this.links.forEach((link, section) => observer.observe(section));
    }

    activate(activeLink) {
        this.links.forEach(link => link.removeAttribute('aria-current'));
        activeLink.setAttribute('aria-current', 'location');
    }
}