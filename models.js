let idSequnce=0
function sequenceGenerator() {
    return ++idSequnce
}


class Product{
    constructor(name,amount,price){
        this.id = sequenceGenerator()
        this.name = name
        this.amount = amount
        this.price = price
        this.sum = this.sum()
    }

    sum() {
        return this.amount*this.price
    }
}


class Receipt{
    constructor(){
        this.products = new Array()
    }

    add(name,amount,price){
        this.products.push = new Product(name,amount,price)
    }
    get(id){
        return this.products[id]
    }
    getAll(){
        
    }
    edit(){
        
    }
    editOrder(product,orderId){
        //retrunOrderOfObject(product)
        this.products.splice(orderId,0,product)
    }
    delete(){
        
    }
    sequenceGenerator() {
        return ++idSequnce
    }

}
