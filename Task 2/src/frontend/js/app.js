const productInputField = document.getElementById('product_id_input');
const getProductBtn = document.getElementById('get_product');
const getProductsBtn = document.getElementById('get_products');
const itemsUI = document.getElementById('items');
const keyBoard = new KeyBoard(productInputField);
const display = new Display(itemsUI);
productInputField.addEventListener('input', e => {
    keyBoard.setUPCCode(e);
});
getProductsBtn.addEventListener('click', e => {
    e.preventDefault();
    keyBoard.getProducts()
        .then(data => {
        display.displayItems(data);
    });
});
getProductBtn.addEventListener('click', e => {
    e.preventDefault();
    keyBoard.getProducts(keyBoard.getUPCCode())
        .then(data => {
        display.displayProduct(data);
    });
});
