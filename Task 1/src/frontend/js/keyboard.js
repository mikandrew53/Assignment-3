class KeyBoard {
    constructor(productInputField) {
        this.productInputField = productInputField;
    }
    onInput(e) {
        if (isNaN(e.data) || parseInt(this.productInputField.value) > 12) {
            this.productInputField.value = this.productInputField.value.slice(0, this.productInputField.value.length - 1);
        }
    }
}
