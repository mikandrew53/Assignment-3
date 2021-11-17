var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Display {
    constructor(itemsUI) {
        this.itemsUI = itemsUI;
    }
    displayItem(product_id) {
        this.getProducts()
            .then(data => {
            this.setItems(data);
            this.itemsUI.innerHTML = `<li><p>Product Name: ${this.items[product_id]}</p></li>`;
        });
    }
    displayItems() {
        this.getProducts()
            .then(data => {
            this.setItems(data);
            const productIds = Object.keys(this.items);
            let itemsHTML = [];
            productIds.forEach(product_id => itemsHTML.push(`<li><p>Product Name: ${this.items[product_id]}</p></li>`));
            this.itemsUI.innerHTML = itemsHTML.join('');
        });
    }
    setItems(items) {
        this.items = items;
    }
    onGetProducts() {
        this.getProducts()
            .then((data) => this.setItems(data));
    }
    getProducts(product_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const productResponse = yield fetch(`http://localhost:3000/items`);
            if (productResponse.ok)
                return productResponse.json();
            else
                throw Error();
        });
    }
}
