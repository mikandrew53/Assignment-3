/*
 * This class is a 'View' based on the controllers in the keyboard class
 * It should get and display the products
 */
class Display implements View{
    private items: any;
    private itemsUI: any
    
    constructor(itemsUI: any) {
        this.itemsUI = itemsUI;
    }

    displayProduct(data: any): void {
        this.setItems(data);
        this.itemsUI.innerHTML = `<li><p>Product Name: ${this.items.name[keyBoard.getUPCCode()]}: ${this.items.price[keyBoard.getUPCCode()]}</p></li>`
    }

    displayItems(data: any): void {
        this.setItems(data);
        const productIds: Array<string> = Object.keys(this.items.name);
        let itemsHTML: Array<string> = []
        productIds.forEach(product_id => itemsHTML.push(`<li><p>${this.items.name[product_id]}: ${this.items.price[product_id]}</p></li>`));
        this.itemsUI.innerHTML = itemsHTML.join('');
        
    }

    setItems(items:any): void {
        this.items = items;
    } 
}