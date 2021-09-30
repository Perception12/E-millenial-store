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
        console.log(buttonClicked.parentElement.className);
        if (buttonClicked.innerHTML == 'ADD TO CART') {
            styleOne(buttonClicked);
        } else {
            styleTwo(buttonClicked);
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