/* File: product.js
Created by: Elizabeth Thomas
Created on: 04-08-2022
Purpose: Web Interactions Assignment : Web and Digital Prototyping */

// Function 2: close the filter popup
function filterDropDownFunction() {
    document.getElementById("filterDropDown").classList.toggle("show");
}

window.onload = function () {
    // Function 3: Get the products data from the products.json file
    $.getJSON('products.json', function (productsList) {
        var northIndianMeal = productsList['north-indian-meal'];
        for (var key in northIndianMeal) {
            var title = northIndianMeal[key].title;
            var rating = northIndianMeal[key].rating;
            var price = northIndianMeal[key].price;
            var image = northIndianMeal[key].img;
            var time = northIndianMeal[key].time;
            var widget = document.createElement('section');
            widget.className = 'popup-section';
            widget.innerHTML =
                '<section>' +
                '<img id="myBtn" src=' + image + ' ' + 'onclick="openPopupModel(\'' + title + '\',\'' + image + '\')" />' +
                '<h3>' + title + '</h3>' +
                '<span>' + time + '</span> <br />' +
                '<h4>' + price + '</h4>' +
                '<span class="ratings">' + rating + '</span>' +
                '<button class="btn"><a href="#">Add to Cart</a></button>' +
                '</section>';
            document.getElementById('products-widget').appendChild(widget);
        }
    });
};

// Function 4: open the customization popup on click of image
function openPopupModel(title, img) {
    var headerPopupWidget = document.createElement('section');
    headerPopupWidget.className = 'header-popUp';
    headerPopupWidget.innerHTML = ""
    headerPopupWidget.innerHTML =
        '<span class="close" onclick="closePopupModel(this)">&times;</span>' +
        '<h2>' + title + ' </h2>' +
        '<img src=' + img + ' ' + '/>';
    document.getElementById('modal-content').insertAdjacentElement('afterbegin', headerPopupWidget);
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
}

// Function 5: close the customization popup : click on close button or click outside popup modal
function closePopupModel(e) {
    var root = e.parentNode;
    root.parentNode.removeChild(root);
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}










