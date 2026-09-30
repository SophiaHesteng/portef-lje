export class Component {
    render() {
        throw new Error(`${this.constructor.name} must implement render()`);
    }
 
    createElement(tag, { className, text, attributes = {} } = {}) {
        const element = document.createElement(tag);
            if (className) element.className = className;
            if (text !== undefined) element.textContent = text;
            Object.entries(attributes).forEach(([name, value]) => {
                element.setAttribute(name, value);
            });
        return element;
    }
}