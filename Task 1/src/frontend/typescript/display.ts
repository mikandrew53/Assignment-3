class Display {
    private items: any;
    private itemsUI: HTMLElement
    
    constructor(itemsUI: any) {
        this.itemsUI = itemsUI;
    }

    displayItem(product_id: string): void {
        this.getProducts()
        .then(data => {
            this.setItems(data);
            this.itemsUI.innerHTML = `<li><p>Product Name: ${this.items[product_id]}</p></li>`
        });
    }

    displayItems(): void {
        this.getProducts()
        .then(data => {
            this.setItems(data);
            const productIds: Array<string> = Object.keys(this.items);
            let itemsHTML: Array<string> = []
            productIds.forEach(product_id => itemsHTML.push(`<li><p>Product Name: ${this.items[product_id]}</p></li>`));
            this.itemsUI.innerHTML = itemsHTML.join('');
        });
    }

    setItems(items:any): void {
        this.items = items;
    }

    onGetProducts() {
        this.getProducts()
        .then((data) => this.setItems(data));  
    }

    private async getProducts (product_id? :string) {
        const productResponse = await fetch(`http://localhost:3000/items`);
        if(productResponse.ok)
            return productResponse.json();
        else
            throw Error(); 
    }
    
}