module.exports = class Product {
    constructor (title, products) {
        this.title = title;
        this.products = products;
        this.save();
    }
    save() {
        this.products.saveProduct({title: this.title});
    }
}