function displayCart() {
    document.getElementById('shop').style.display = 'block';
}

function continueShopping() {
    document.getElementById('shop').style.display = 'none';
}

itemButtons = document.getElementsByClassName('items');
console.log(itemButtons);

for (let i = 0; i < itemButtons.length; i++) {
    var btn = itemButtons[i];
    btn.addEventListener('click', function(event) {
        var buttonClicked = event.target;
        if (buttonClicked.innerHTML == 'ADD TO CART') {
            styleOne(buttonClicked);
            updateTotalPrice();
        } else {
            styleTwo(buttonClicked);
            updateTotalPrice();
        }
    })
}

function styleOne(button) {
    button.innerHTML = "REMOVE FROM CART";
    button.style.backgroundColor = "#FFE9D6";
    button.style.color = 'black';
}

function styleTwo(button) {
    button.innerHTML = "ADD TO CART";
    button.style.backgroundColor = "#FF7A00";
    button.style.color = "white";
}

function updateTotalPrice() {
    var itemTable = document.getElementById('table');
    var cartRows = itemTable.getElementsByClassName('cart-row');
    var total;
    for (let i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName('cart-price')[0];
        var quantityElement = cartRow.getElementsByClassName('item-quantity')[0];
        var price = parseInt(priceElement.innerText.replace("&#8358;", ''));
        var quantity = parseInt(quantityElement.innerText);
        total += (price * quantity);
    }
    document.getElementById('total').innerHTML = total;
}