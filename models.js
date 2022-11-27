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
        this.updateSum()
    }

    updateSum() {
        this.sum = this.amount*this.price
    }
}


class Receipt{
    constructor(){
        this.products = new Array()
    }

    add(name,amount,price){
        this.products.push(new Product(name,amount,price))
    }

    get(id){
        return this.products[this.getPosition(id)]
    }
    getPosition(id){
        for(let i=0; i<this.products.length; i++){
            if(this.products[i].id==id)
                return i
        }
    }
    getAll(){
        return this.products
    }

    edit(id,name,amount,price){
        let prod = this.get(id)
        prod.name = name
        prod.amount = amount
        prod.price = price
        prod.updateSum()
    }
    editOrder(product,orderId){
        //retrunOrderOfObject(product)
        this.products.splice(orderId,0,product)
    }
    delete(id){
        this.products.splice(this.getPosition(id),1)
    }

}
