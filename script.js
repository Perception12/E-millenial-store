//Buttons
var btn1, btn2, btn3, btn4, btn5, btn6;

btn1 = document.getElementById('item1');
btn2 = document.getElementById('item2');
btn3 = document.getElementById('item3');
btn4 = document.getElementById('item4');
btn5 = document.getElementById('item5');
btn6 = document.getElementById('item6');


function displayCart() {
    document.getElementById('shop').style.display = 'block';
}

function continueShopping() {
    document.getElementById('shop').style.display = 'none';
}

function getItemInfo() {

}

function addToCart() {

}

function createCartTable(n) {
    // Creates the Elements of a table row
    var row = document.createElement('tr');
    var sn = document.createElement('td');
    var itemCol = document.createElement('td');
    var priceCol = document.createElement('td');
    var quantityCol = document.createElement('td');
    var buttonCol = document.createElement('td');

    // Styling the Elements
    row.style.padding = '5px';

    sn.style.textAlign = 'center';
    sn.style.padding = '10px';
    sn.style.fontWeight = 'bold';
    sn.style.fontSize = '18px';
    sn.style.fontFamily = 'sans-serif';

    itemCol.style.textAlign = 'center';
    itemCol.style.padding = '10px';
    itemCol.style.fontWeight = 'bold';
    itemCol.style.fontSize = '18px';
    itemCol.style.fontFamily = 'sans-serif';

    priceCol.style.textAlign = 'center';
    priceCol.style.padding = '10px';
    priceCol.style.fontWeight = 'bold';
    priceCol.style.fontSize = '18px';
    priceCol.style.fontFamily = 'sans-serif';



    row.appendChild(sn);
    row.appendChild(itemCol);
    row.appendChild(priceCol);
    row.appendChild(quantityCol);
    row.appendChild(buttonCol);
}