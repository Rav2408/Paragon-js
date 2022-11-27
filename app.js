console.log('Hello')


let product = new Product('nazwa',1,10)
let product2 = new Product('nazwas',3,10.5)
let product3 = new Product('nazwasssa',3,10.5)
let product4 = new Product('nazwasdfsdfdsf',3,10.5)

var paragon = []

paragon.push(product)
paragon.push(product2)
paragon.push(product3)
paragon.push(product4)
let placeholder = document.querySelector("#data-output");
let out = "";

for(let product of paragon)
{
    out += `
    <tr>
        <td>${product.id} </td>
        <td>${product.name} </td>
        <td>${product.amount} </td>
        <td>${product.price} </td>
        <td>${product.sum} </td>
    </tr>
    ` 
}
placeholder.innerHTML = out;