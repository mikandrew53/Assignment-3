const productInputField:any = document.getElementById('product_id_input');
const getProductBtn:any = document.getElementById('get_product');
const getProductsBtn:any = document.getElementById('get_products');
const itemsUI: any = document.getElementById('items');


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
