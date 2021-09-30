var itemCount = 0;
var itemCounter = document.getElementById('itemNumber');
var item, itemName, itemPrice;
var tableList = {
    releaseInfo: function() {

    }
}
var total = document.getElementById('total');

function displayCart() {
    document.getElementById('shop').style.display = 'block';
}

function continueShopping() {
    document.getElementById('shop').style.display = 'none';
}

function getInfo(name, price) {
    itemName = document.getElementById(name).innerHTML;
    itemPrice = document.getElementById(price).innerHTML;
}

// Changes the style Properties of the selected tag and add the item to cart
function changeProperty(item) {
    if (item.innerHTML == 'ADD TO CART') {
        itemCount++;
        item.innerHTML = "REMOVE FROM CART";
        item.style.backgroundColor = "#FFE9D6";
        item.style.color = 'black';
        itemCounter.innerHTML = itemCount;
        createTable();

    } else {
        itemCount--;
        item.innerHTML = "ADD TO CART";
        item.style.backgroundColor = "#FF7A00";
        item.style.color = "white";
        itemCounter.innerHTML = itemCount;
    }
}


function selectItem(idName) {
    item = document.getElementById(idName);

    if (idName == 'item1') {
        getInfo('name1', 'price1');

    } else if (idName == 'item2') {
        getInfo('name2', 'price2');

    } else if (idName == 'item3') {
        getInfo('name3', 'price3');

    } else if (idName == 'item4') {
        getInfo('name4', 'price4')

    } else if (idName == 'item5') {
        getInfo('name5', 'price5');

    } else {
        getInfo('name6', 'price6');
    }

    changeProperty(item);
}


function createTable() {
    var listIndex = 0;
    var row = document.createElement('tr');
    row.id = "id" + itemName;

    var snCol = document.createElement('td');
    var itemCol = document.createElement('td');
    var priceCol = document.createElement('td');
    var quantityCol = document.createElement('td');
    var removeBtnCol = document.createElement('td');
    var digits = document.createElement('span');
    var symbol = document.createElement('span');

    digits.id = "price" + itemName;
    digits.innerHTML = itemPrice;

    symbol.innerHTML = "&#8358;";


    var incrBtn = document.createElement('span');
    incrBtn.innerHTML = '+';
    incrBtn.style.padding = '5px 15px';
    incrBtn.style.backgroundColor = "#FF7A00";
    incrBtn.style.color = "white";
    incrBtn.style.borderRadius = "7px";
    incrBtn.style.cursor = "pointer";

    var decrBtn = document.createElement('span');
    decrBtn.innerHTML = '-';
    decrBtn.style.padding = '5px 15px';
    decrBtn.style.backgroundColor = "#FF7A00";
    decrBtn.style.color = "white";
    decrBtn.style.borderRadius = "7px";
    decrBtn.style.cursor = "pointer";

    var removeBtn = document.createElement('span');
    removeBtn.innerText = "Remove";
    removeBtn.style.padding = "5px 15px";
    removeBtn.style.backgroundColor = "#FFCD9E";
    removeBtn.style.color = 'black';
    removeBtn.style.borderRadius = "10px";
    removeBtn.style.cursor = "pointer";

    var quantity = document.createElement('span');
    quantity.style.padding = "5px";
    var qCount = 1;
    quantity.innerHTML = qCount;

    snCol.innerHTML = itemCount;
    snCol.style.textAlign = 'center';
    snCol.style.padding = '10px';

    itemCol.innerHTML = itemName;
    itemCol.style.textAlign = 'center';
    itemCol.style.padding = '10px';

    priceCol.appendChild(symbol);
    priceCol.appendChild(digits);
    priceCol.style.textAlign = 'center';
    priceCol.style.padding = '10px';

    quantityCol.appendChild(decrBtn);
    quantityCol.appendChild(quantity);
    quantityCol.appendChild(incrBtn);
    quantityCol.style.textAlign = 'center';
    quantityCol.style.padding = '10px';
    quantityCol.id = 'q' + itemName;

    removeBtnCol.appendChild(removeBtn);

    row.appendChild(snCol);
    row.appendChild(itemCol);
    row.appendChild(priceCol);
    row.appendChild(quantityCol);
    row.appendChild(removeBtnCol);

    var deleteRow = function() {
        row.remove();
        itemCount--;
        itemCounter.innerHTML = itemCount;
        tableList[itemCount].removed = true;

    }

    incrBtn.onclick = increase;
    decrBtn.onclick = decrease;
    removeBtn.onclick = deleteRow;

    document.getElementById('table').appendChild(row);
    var product = Object.create(tableList);
    product.index = listIndex;
    product.name = itemName;
    product.rowID = row.id;
    product.removed = false;
    product.priceID = digits.id;
    product.quantityID = quantityCol.id;
    product.price = itemPrice;
    console.log(tableList);
    listIndex++;
}


var increase = function() {
    qCount++;
    quantity.innerHTML = qCount;
    price = itemPrice * qCount;
    digits.innerHTML = price;
}

var decrease = function() {
    qCount--;
    if (qCount >= 0) {
        quantity.innerHTML = qCount;
        price = itemPrice * qCount;
        digits.innerHTML = price;
    } else {
        alert("The item Quantity cannot be less than 0");
    }
}



cartBtn = document.getElementById('cartEvent');
cartBtn.onclick = displayCart;