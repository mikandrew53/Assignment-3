var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class KeyBoard {
    constructor(productInputField) {
        this.productInputField = productInputField;
    }
    setUPCCode(e) {
        if (isNaN(e.data) || parseInt(this.productInputField.value) > 12)
            this.productInputField.value = this.productInputField.value.slice(0, this.productInputField.value.length - 1);
    }
    getUPCCode() {
        return this.productInputField.value;
    }
    getProducts(product_id) {
        return __awaiter(this, void 0, void 0, function* () {
            let productResponse;
            productResponse = (product_id !== undefined && product_id !== '') ? yield fetch(`http://localhost:3000/items/${product_id}`) : yield fetch(`http://localhost:3000/items`);
            if (productResponse.ok)
                return productResponse.json();
            else
                throw Error();
        });
    }
}
