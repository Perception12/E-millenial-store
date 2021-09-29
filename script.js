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



    row.appendChild(sn);
    row.appendChild(itemCol);
    row.appendChild(priceCol);
    row.appendChild(quantityCol);
    row.appendChild(buttonCol);
}