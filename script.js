var itemCount = 0;
var itemCounter = document.getElementById('itemNumber');
var item, itemName, itemPrice;
var tableList = [];
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

// Changes the style Properties of the selected tag
function changeProperty(item) {
    if (item.innerHTML == 'ADD TO CART') {
        itemCount++;
        item.innerHTML = "REMOVE FROM CART";
        item.style.backgroundColor = "#FFE9D6";
        item.style.color = 'black';
        itemCounter.innerHTML = itemCount;

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


function createList() {
    removed = 0;
    var price;
    var row = document.createElement('tr');

    row.id = "id" + itemName;

    var data1 = document.createElement('td');
    var data2 = document.createElement('td');
    var data3 = document.createElement('td');
    var data4 = document.createElement('td');
    var data5 = document.createElement('td');
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

    data1.innerHTML = itemCount;
    data1.style.textAlign = 'center';
    data1.style.padding = '10px';

    data2.innerHTML = itemName;
    data2.style.textAlign = 'center';
    data2.style.padding = '10px';

    data3.appendChild(symbol);
    data3.appendChild(digits);
    data3.style.textAlign = 'center';
    data3.style.padding = '10px';

    tableList.push({ name: itemName, removed: false, ID: row.id, dID: digits.id });

    data4.appendChild(decrBtn);
    data4.appendChild(quantity);
    data4.appendChild(incrBtn);
    data4.style.textAlign = 'center';
    data4.style.padding = '10px';

    data5.appendChild(removeBtn);

    row.appendChild(data1);
    row.appendChild(data2);
    row.appendChild(data3);
    row.appendChild(data4);
    row.appendChild(data5);

    var increase = function() {
        qCount++;
        quantity.innerHTML = qCount;
        price = itemPrice * qCount;
        digits.innerHTML = price;
        getTotalPrice();
    }

    var decrease = function() {
        qCount--;
        if (qCount >= 0) {
            quantity.innerHTML = qCount;
            price = itemPrice * qCount;
            digits.innerHTML = price;
            getTotalPrice();
        } else {
            alert("The item Quantity cannot be less than 0");
        }
    }

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

}

function removeRow(id) {
    document.getElementById(id).remove();
}

function getTotalPrice() {
    var totalPrice = 0;
    for (let i = 0; i < tableList.length; i++) {
        if (tableList[i].removed = false) {
            id = tableList[i].dID;
            totalPrice += parseInt(document.getElementById(id).innerHTML);
        }
    }
    total.innerHTML = totalPrice;
}


cartBtn = document.getElementById('cartEvent');
cartBtn.onclick = displayCart;