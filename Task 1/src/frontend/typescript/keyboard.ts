class KeyBoard {
    productInputField: any;
    constructor(productInputField: any) {
        this.productInputField = productInputField;
    }

    onInput(e: any): void {
        if (isNaN(e.data) || parseInt(this.productInputField.value) > 12 ) {
            this.productInputField.value = this.productInputField.value.slice(0, this.productInputField.value.length-1);
        }
    }
}