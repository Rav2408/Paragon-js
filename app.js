const paragon = new Receipt()

paragon.add("nazwa1",1,10)
paragon.add('nazwa2',3,10.5)
paragon.add('nazwa3',3,10.5)
paragon.add('nazwa4',3,10.5)
// console.log(paragon.products.length)
// paragon.editOrder(1,3)
// console.log(paragon.products.length)
let placeholder = document.querySelector("#data-output");
let placeholder_price = document.querySelector("#price-output");
let table = document.getElementById("paragon")
let suma = document.getElementById("suma")

function renderTable(paragon){
    let out = "";
    for(let product of paragon.getAll())
    {   
        out += `
        <tr draggable="true" ondragstart="start()"  ondragover="dragover()">
            <td> ${product.id} </td>
            <td contenteditable="true">${product.name} </td>
            <td contenteditable="true">${product.amount} </td>
            <td contenteditable="true">${product.price} </td>
            <td>${product.sum} </td>
            <td> <input type="submit" name="Usuń" id="Usuń" value="Usuń"></td>
        </tr>
        ` 
    }
    
    placeholder.innerHTML = out;

    for(let i=1; i<table.rows.length;i++){ 
        addEditListener(table.rows[i])
        addDeleteListener(table.rows[i])        
    }
    suma.innerText = "Suma: " + paragon.calculate_sum()
}
renderTable(paragon)

function start(){  
    row = event.target; 
}
function dragover(){
    var e = event;
    e.preventDefault(); 
    
    let children= Array.from(e.target.parentNode.parentNode.children);
    
    if(children.indexOf(e.target.parentNode)>children.indexOf(row))
      e.target.parentNode.after(row);
    else
      e.target.parentNode.before(row);

    console.log(children.indexOf(row))
    console.log(children.indexOf(e.target.parentNode))
    
    
    // console.log(e.target.innerHTML)
    // console.log(children.indexOf(row))
    
    
    paragon.editOrder(children.indexOf(e.target.parentNode),children.indexOf(row))
    // paragon.updateIds()
    // updateTable(paragon)    
}



function updateTable(receipt){
    for(let i=1; i<table.rows.length;i++){
        table.rows[i].cells[4].innerHTML=receipt.get(table.rows[i].cells[0].innerHTML).sum
    }
}



function addEditListener(row) {
    row.addEventListener('input', function () {
        paragon.edit(row.cells[0].innerHTML,row.cells[1].innerHTML,row.cells[2].innerHTML,row.cells[3].innerHTML)
        updateTable(paragon)
    })
}
function addDeleteListener(row) {
    let cell = row.cells[5]
    cell.addEventListener('click', function () {
        paragon.delete(parseInt(row.cells[0].innerHTML))
        renderTable(paragon)
    })
}



let form = document.forms["nowy"]
form.onsubmit = (event)=>{
    event.preventDefault()
    paragon.add(form.elements["nazwa"].value, form.elements["ilość"].value, form.elements["cena"].value)
    renderTable(paragon)
}
