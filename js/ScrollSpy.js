export class ScrollSpy {
    #sections = new Map();
    #visible = new Set();
    #lastSection;
 
    constructor(nav) {
        nav.querySelectorAll('a[href^="#"]').forEach(link => {
            const id = link.getAttribute('href').slice(1);
            const section = document.getElementById(id);
            if (section) {
                this.#sections.set(section, link);
            }
        });
 
        this.#lastSection = [...this.#sections.keys()].pop();
    }
 
    init() {
        if (this.#sections.size === 0) return;
 
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.#visible.add(entry.target);
                } else {
                    this.#visible.delete(entry.target);
                }
            });
            this.#update();
        }, { rootMargin: '-40% 0px -55% 0px' });
 
        this.#sections.forEach((link, section) => observer.observe(section));
 
        window.addEventListener('scroll', () => this.#update(), { passive: true });
    }
 
    #isAtBottom() {
        return window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
    }
 
    #update() {
        if (this.#isAtBottom()) {
            this.#activate(this.#sections.get(this.#lastSection));
            return;
        }
 
        const active = [...this.#sections.keys()]
            .filter(section => this.#visible.has(section))
            .pop();
 
        this.#activate(active ? this.#sections.get(active) : null);
    }
 
    #activate(activeLink) {
        this.#sections.forEach(link => link.removeAttribute('aria-current'));
        if (activeLink) {
            activeLink.setAttribute('aria-current', 'location');
        }
    }
}