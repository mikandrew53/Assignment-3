/*
 * This class is a 'View' based on the controllers in the keyboard class
 * It should get and display the products
 */
class Display {
    constructor(itemsUI) {
        this.itemsUI = itemsUI;
    }
    displayProduct(data) {
        this.setItems(data);
        this.itemsUI.innerHTML = `<li><p>Product Name: ${this.items.name[keyBoard.getUPCCode()]}: ${this.items.price[keyBoard.getUPCCode()]}</p></li>`;
    }
    displayItems(data) {
        this.setItems(data);
        const productIds = Object.keys(this.items.name);
        let itemsHTML = [];
        productIds.forEach(product_id => itemsHTML.push(`<li><p>${this.items.name[product_id]}: ${this.items.price[product_id]}</p></li>`));
        this.itemsUI.innerHTML = itemsHTML.join('');
    }
    setItems(items) {
        this.items = items;
    }
}
