const productInputField:any = document.getElementById('product_id_input');
const getProductBtn:any = document.getElementById('get_product');
const getProductsBtn:any = document.getElementById('get_products');
const itemsUI: any = document.getElementById('items');


const display = new Display(itemsUI);
const keyBoard = new KeyBoard(productInputField);



productInputField.addEventListener('input', e => {
    keyBoard.onInput(e);
});

getProductsBtn.addEventListener('click', e => {
    e.preventDefault();
    display.displayItems();
}); 

getProductBtn.addEventListener('click', e => {
    e.preventDefault();
    display.displayItem(productInputField.value);
}); 

async function getProducts (product_id? :string) {
    const productResponse = await fetch(`http://localhost:3000/items`);
    if(productResponse.ok)
        return productResponse.json();
    else
        throw Error(); 
}



