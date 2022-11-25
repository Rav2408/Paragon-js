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

