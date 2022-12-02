class Product{
    constructor(id,name,amount,price){
        this.id = id
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
        this.products.push(new Product(this.products.length+1,name,amount,price))
    }

    get(id){
        return this.products[this.id-1]
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
    editOrder(id,orderId){
        this.products.splice(orderId,0,this.products[id])
        this.updateIds()
        //this.delete(id)
    }
    delete(id){
        this.products.splice(this.id,1)
        this.updateIds()
    }
    updateIds(){
        let i = 1
        this.products.forEach(element=>{
            element.id=i
            i++
        })
    }

}
