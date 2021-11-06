const fs = require('fs');
const path = require('path');

module.exports = class AllProducts {
    constructor () {
        this.p = path.join(
            path.dirname(process.mainModule.filename),
            'data',
            'products.json'
        );
        this.products = this.getProducts();

    }

    getProducts() {
        fs.readFile(this.p, (err, fileContent) => {
            err ? this.products = [] : this.products = JSON.parse(fileContent)
        });
        return this.products
    }

    saveProduct(title) {
        this.products = this.getProducts();
        this.products.push(title);
        fs.writeFile(this.p, JSON.stringify(this.products), error => console.log(error));           
    }
}