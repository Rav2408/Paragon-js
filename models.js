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
        return this.products[this.findById(id)]
    }
    findById(id){
        for(let i=0; i<this.products.length;i++){
            if(id == this.products[i].id)
                return i;
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
    editOrder(id,orderId){
        let a = this.products[id]
        let b = this.products[orderId] //this.get(this.findById(orderId+1))
        
        let name = b.name
        let amount = b.amount
        let price = b.price
        
        b.name = a.name
        b.amount = a.amount
        b.price = a.price

        a.name = name
        a.amount = amount
        a.price = price
        
        this.updateIds()
        console.log(a)
        console.log(b)
        // this.products.splice(orderId,0,this.products[id])
        // this.updateIds()
        // if(orderId>id){
        //     this.delete(id)
        // }else{
        //     this.delete(id+1)
        // }
        // //this.updateIds()
    }
    delete(id){
        this.products.splice(this.findById(id),1)
        this.updateIds()
    }
    updateIds(){
        let i = 1
        this.products.forEach(element=>{
            element.id=i
            i++
        })
    }
    calculate_sum(){
        let summ = 0;
        for(let product of this.products)
            {
                summ += product.sum
            }
            return summ
    }

}
