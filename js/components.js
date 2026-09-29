export class ScrollSpy {
    constructor(nav) {
        this.links = new Map();
        this.visible = new Set();

        nav.querySelectorAll('a[href^="#"]').forEach(link => {
            const id = link.getAttribute('href').slice(1);
            const section = document.getElementById(id);
            if (section) {
                this.links.set(section, link);
            }
        });

        this.lastSection = [...this.links.keys()].pop();
    }

    init() {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.visible.add(entry.target);
                } else {
                    this.visible.delete(entry.target);
                }
            });
            this.update();
        }, { rootMargin: '-40% 0px -55% 0px' });

        this.links.forEach((link, section) => observer.observe(section));

        window.addEventListener('scroll', () => this.update(), { passive: true });
    }

    erIBunden() {
        return window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
    }

    update() {
        if (this.erIBunden()) {
            this.activate(this.links.get(this.lastSection));
            return;
        }

        const aktiv = [...this.links.keys()].filter(section => this.visible.has(section)).pop();
        if (aktiv) {
            this.activate(this.links.get(aktiv));
        }
    }

    activate(activeLink) {
        this.links.forEach(link => link.removeAttribute('aria-current'));
        activeLink.setAttribute('aria-current', 'location');
    }
}