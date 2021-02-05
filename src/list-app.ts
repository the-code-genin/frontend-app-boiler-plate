export default class ListApp {
    private items: string[];

    constructor(readonly DOMElement: HTMLDivElement, initialItems: string[] = []) {
        this.items = initialItems;

        let button = DOMElement.querySelector('button#add-button') as HTMLButtonElement;
        button.addEventListener('click', () => {
            this.addItem('');
        });

        this.renderList();
    }

    public getItems(): string[] {
        return this.items;
    }

    public getItem(index: number): string {
        return this.items[index];
    }

    public addItem(item: string): number {
        this.items.push(item);
        this.renderList();
        return this.items.length;
    }

    public updateItem(index: number, item: string): string {
        this.items[index] = item;
        this.renderList();
        return item;
    }

    public removeItem(index: number): string {
        let item = this.items.splice(index, 1);
        this.renderList();
        return item[0];
    }

    public createElement(index: number): HTMLDivElement {
        let item = this.getItem(index);

        // Create the container
        let container = document.createElement('div');
        container.style.display = 'flex';

        // Input element
        let content = document.createElement('input');
        content.value = item;
        content.addEventListener('input', (e) => {
            this.items[index] = content.value;
        });

        // Button element
        let button = document.createElement('button');
        button.innerText = 'X';
        button.addEventListener('click', (e) => {
            this.removeItem(index);
            this.renderList();
        });

        // Append elements
        container.appendChild(content);
        container.appendChild(button);

        return container;
    }

    public renderList() {
        let content = this.DOMElement.querySelector('div#content') as HTMLDivElement;
        content.innerHTML = '';

        for (let itemIndex in this.items) {
            let el = this.createElement(Number(itemIndex));
            content.appendChild(el);
        }
    }
}