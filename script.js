var itemCount = 0;
var itemCounter = document.getElementById('itemNumber');

// Displays Cart
function displayCart() {
    document.getElementById('shop').style.display = 'block';
}

function closeCart() {
    document.getElementById('shop').style.display = 'none';
}

// All the cart Table list functions

itemButtons = document.getElementsByClassName('items');

for (let i = 0; i < itemButtons.length; i++) {
    var btn = itemButtons[i];
    btn.addEventListener('click', function(event) {
        var buttonClicked = event.target;
        if (buttonClicked.innerHTML == 'ADD TO CART') {
            itemCount++;
            itemCounter.innerHTML = itemCount;
            styleOne(buttonClicked);
            createCart(buttonClicked, itemCount);
        } else {
            itemCount--;
            itemCounter.innerHTML = itemCount;
            styleTwo(buttonClicked);
            removeCartRow(buttonClicked);
        }

        updateTotalPrice();
    })
}

function styleOne(button) {
    button.innerHTML = "REMOVE FROM CART";
    button.style.backgroundColor = "#FFE9D6";
    button.style.color = 'black';
    button.className = 'btn-danger';
}

function styleTwo(button) {
    button.innerHTML = "ADD TO CART";
    button.style.backgroundColor = "#FF7A00";
    button.style.color = "white";
}

function updateTotalPrice() {
    var itemTable = document.getElementById('table');
    var cartRows = itemTable.getElementsByClassName('cart-row');
    var total = 0;
    for (let i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName('cart-price')[0];
        var quantityElement = cartRow.getElementsByClassName('item-quantity')[0];
        var price = parseInt(priceElement.innerText.replace('₦', ''));
        var quantity = parseInt(quantityElement.innerText.replace('-', ''));
        total += (price * quantity);
    }
    document.getElementById('total').innerHTML = total;
}

function createCart(eventTarget, count) {
    btnTarget = eventTarget;
    var container = btnTarget.parentElement;

    var priceContainer = container.getElementsByClassName('centered')[0];
    var itemPrice = priceContainer.getElementsByClassName('item-price')[0].innerText.replace('₦', '');
    var itemName = container.getElementsByClassName('item-name')[0].innerText;

    var row = document.createElement('tr');
    row.className = 'cart-row';
    var snCol = document.createElement('td');
    var itemCol = document.createElement('td');
    var priceCol = document.createElement('td');
    var quantityCol = document.createElement('td');
    var removeBtnCol = document.createElement('td');

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
    removeBtn.className = 'btn-danger';
    removeBtn.innerText = "Remove";
    removeBtn.style.padding = "5px 15px";
    removeBtn.style.backgroundColor = "#FFCD9E";
    removeBtn.style.color = 'black';
    removeBtn.style.borderRadius = "10px";
    removeBtn.style.cursor = "pointer";

    incrBtn.onclick = incrQuantity;
    decrBtn.onclick = decrQuantity;
    removeBtn.addEventListener('click', function(event) {
        var removeClicked = event.target;
        removeClicked.parentElement.parentElement.remove();
        itemCount--;
        itemCounter.innerHTML = itemCount;
        styleTwo(eventTarget);
        updateTotalPrice();
    })

    var quantity = document.createElement('span');
    quantity.style.padding = "5px";
    var qCount = 1;
    quantity.innerHTML = qCount;

    snCol.innerHTML = count;
    snCol.className = "table-index";
    snCol.style.textAlign = 'center';
    snCol.style.padding = '10px';

    itemCol.innerHTML = itemName;
    itemCol.className = 'item-name';
    itemCol.style.textAlign = 'center';
    itemCol.style.padding = '10px';

    priceCol.innerHTML = '₦' + itemPrice;
    priceCol.style.textAlign = 'center';
    priceCol.style.padding = '10px';
    priceCol.className = 'cart-price';

    quantityCol.appendChild(decrBtn);
    quantityCol.appendChild(quantity);
    quantityCol.appendChild(incrBtn);
    quantityCol.style.textAlign = 'center';
    quantityCol.style.padding = '10px';
    quantityCol.className = 'item-quantity';

    removeBtnCol.appendChild(removeBtn);


    row.appendChild(snCol);
    row.appendChild(itemCol);
    row.appendChild(priceCol);
    row.appendChild(quantityCol);
    row.appendChild(removeBtnCol);

    document.getElementById('table').appendChild(row);

    function incrQuantity() {
        qCount++;
        quantity.innerHTML = qCount;
        updateTotalPrice();
    }

    function decrQuantity() {
        qCount--;
        if (qCount < 0) {
            alert('Item Cannot be less than zero');
        } else {
            quantity.innerHTML = qCount;
            updateTotalPrice();
        }
    }
}

function removeCartRow(event) {
    btnTarget = event;
    var container = btnTarget.parentElement;
    var itemName = container.getElementsByClassName('item-name')[0].innerText;
    var rows = document.getElementsByClassName('cart-row');

    for (let i = 0; i < rows.length; i++) {
        var row = rows[i];
        rowItem = row.getElementsByClassName('item-name')[0];
        if (rowItem.innerText == itemName) {
            row.remove();
            updateTotalPrice();
        }
    }
    styleTwo(event);
}

// Form Validation
var form = document.getElementById('dForm');
var formInput = document.getElementsByTagName('input');
var nameInput;
var emailInput;
var numberInput;

function nameValidation() {
    nameInput = formInput[0];
    var nameError = document.getElementById('name-error');

    if (nameInput.value == "") {
        nameInput.style.borderColor = 'red';
        nameError.innerHTML = "Enter your name";
    } else {
        nameInput.style.borderColor = '#33cc33';
        nameError.innerHTML = "";
    }
}

function emailValidation() {
    emailInput = formInput[1];
    var emailError = document.getElementById('email-error');

    if (emailInput.value == "") {
        emailInput.style.borderColor = 'red';
        emailError.innerHTML = "please enter an email";
    } else if (!emailInput.value.includes("@")) {
        emailInput.style.borderColor = 'red';
        emailError.innerHTML = "enter a valid email";
    } else {
        emailInput.style.borderColor = '#33cc33';
        emailError.innerHTML = "";
    }
}

function numberValidation() {
    numberInput = formInput[2];
    var numberError = document.getElementById('phone-error');

    if (numberInput.value == "") {
        numberInput.style.borderColor = 'red';
        numberError.innerHTML = "enter a number";
    } else if (!parseInt(numberInput.value)) {
        numberInput.style.borderColor = 'red';
        numberError.innerHTML = "enter a valid number";
    } else if (numberInput.value.length != 11) {
        numberInput.style.borderColor = 'red';
        numberError.innerHTML = "number cannot be less or greater than 11";
    } else {
        numberInput.style.borderColor = '#33cc33';
        numberError.innerHTML = "";
    }
}

function summary() {
    closeCart();
    document.getElementById('customer').innerHTML = nameInput.value;
    document.getElementById('summary').style.display = 'block';
    summaryTable();
}

function closeSummary() {
    document.getElementById('summary').style.display = 'none';
}

function summaryTable() {
    var itemTable = document.getElementById('table');
    var summaryTable = document.getElementById('summary-table');
    var cartRows = itemTable.getElementsByClassName('cart-row');
    for (let i = 0; i < cartRows.length; i++) {
        var sn = i + 1
        var cartRow = cartRows[i];
        var nameElement = cartRow.getElementsByClassName('item-name')[0];
        var name = nameElement.innerText;
        var quantityElement = cartRow.getElementsByClassName('item-quantity')[0];
        var quantity = parseInt(quantityElement.innerText.replace('-', ''));

        var summaryRow = document.createElement('tr');
        var sumSN = document.createElement('td')
        var sumName = document.createElement('td');
        var sumQuantity = document.createElement('td');

        sumSN.innerHTML = sn;
        sumName.innerHTML = name;
        sumQuantity.innerHTML = quantity;

        sumSN.style.textAlign = 'center';
        sumSN.style.padding = '10px';

        sumName.style.textAlign = 'center';
        sumName.style.padding = '10px';

        sumQuantity.style.textAlign = 'center';
        sumQuantity.style.padding = '10px';

        summaryRow.appendChild(sumSN);
        summaryRow.appendChild(sumName);
        summaryRow.appendChild(sumQuantity);
        summaryTable.appendChild(summaryRow);
    }
}

function payWithPaystack() {

    var handler = PaystackPop.setup({
        key: 'pk_test_47b55371f72577dfc95aac213c0792e4393d43a9', //put your public key here
        email: emailInput.value, //put your customer's email here
        amount: document.getElementById('total').innerHTML, //amount the customer is supposed to pay
        metadata: {
            custom_fields: [{
                display_name: "Mobile Number",
                variable_name: "mobile_number",
                value: parseInt(numberInput.value) //customer's mobile number
            }]
        },
        callback: function(response) {
            //after the transaction have been completed
            //make post call  to the server with to verify payment 
            //using transaction reference as post data
            $.post("verify.php", { reference: response.reference }, function(status) {
                if (status == "success") {
                    //successful transaction
                    alert('Transaction was successful');
                } else {
                    //transaction failed
                    alert(response);
                }
            });
        },
        onClose: function() {
            //when the user close the payment modal
            alert('Transaction cancelled');
        }
    });
    handler.openIframe(); //open the paystack's payment modal
    summary();
}