console.log('Hello')

const paragon = new Receipt()

paragon.add("nazwa",1,10)
paragon.add('nazwas',3,10.5)
paragon.add('nazwasssa',3,10.5)
paragon.add('nazwasdfsdfdsf',3,10.5)
let placeholder = document.querySelector("#data-output");


let out = "";
for(let product of paragon.getAll())
{   
    out += `
    <tr>
        <td>${product.id} </td>
        <td contenteditable="true">${product.name} </td>
        <td contenteditable="true">${product.amount} </td>
        <td contenteditable="true">${product.price} </td>
        <td>${product.sum} </td>
    </tr>
    ` 
}
placeholder.innerHTML = out;

function updateTable(receipt){
    for(let i=1; i<table.rows.length;i++){
        table.rows[i].cells[4].innerHTML=receipt.get(table.rows[i].cells[0].innerHTML).sum
    }
}


let table = document.getElementById("paragon")
console.log(table)
console.log(table.rows[1])
console.log(table.rows.item(0))
console.log(table.rows[1].cells[0])

for(let i=1; i<table.rows.length;i++){
    const row = table.rows[i]
    row.addEventListener('input', function () {
        console.log("helo")
        console.log(row.cells[0].innerHTML)
        paragon.edit(row.cells[0].innerHTML,row.cells[1].innerHTML,row.cells[2].innerHTML,row.cells[3].innerHTML)
        updateTable(paragon)
    })
}

let form = document.forms["nowy"]
form.onsubmit = (event)=>{
    event.preventDefault()
    paragon.add(form.elements["nazwa"].value, form.elements["ilość"].value, form.elements["cena"].value)
}
form["nazwa"]
