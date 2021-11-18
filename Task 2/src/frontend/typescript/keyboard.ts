class KeyBoard {
    private productInputField: any;
    constructor(productInputField: any) {
        this.productInputField = productInputField;
    }

    setUPCCode(e: any): void {
        if (isNaN(e.data) || parseInt(this.productInputField.value) > 12 ) 
            this.productInputField.value = this.productInputField.value.slice(0, this.productInputField.value.length-1);
    }

    getUPCCode(): string {
        return this.productInputField.value;
    }

    async getProducts (product_id? :string) {
        let productResponse;
        productResponse = (product_id !== undefined && product_id !== '') ? await fetch(`http://localhost:3000/items/${product_id}`) : await fetch(`http://localhost:3000/items`)
        if(productResponse.ok)
            return productResponse.json();
        else
            throw Error(); 
    }
}