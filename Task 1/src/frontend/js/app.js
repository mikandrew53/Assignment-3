var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const productInputField = document.getElementById('product_id_input');
const getProductBtn = document.getElementById('get_product');
const getProductsBtn = document.getElementById('get_products');
const itemsUI = document.getElementById('items');
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
function getProducts(product_id) {
    return __awaiter(this, void 0, void 0, function* () {
        const productResponse = yield fetch(`http://localhost:3000/items`);
        if (productResponse.ok)
            return productResponse.json();
        else
            throw Error();
    });
}
