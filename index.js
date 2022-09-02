/* File: index.js
Created by: Group1
Created on: 04-08-2022
Purpose: Web Interactions Assignment : Web and Digital Prototyping */

// Function 1: Get the sevices data from the services.json file

window.onload = function () {
    $.getJSON('services.json', function (servicesList) {
        for (var key in servicesList) {
            for (var i = 0; i < servicesList[key].length; i++) {
                var title = servicesList[key][i].title;
                var image = servicesList[key][i].image;
                var widget = document.createElement('section');
                widget.className = 'widget-section';
                widget.innerHTML =
                    '<img src=' + image + ' ' + 'alt="services image">' +
                    '<h3>' + title + '</h3>' +
                    '<button class="btn"></i><a href="src/product/product.html">Subscribe</a></button>';
                document.getElementById('service-widget').appendChild(widget);
            }
        }
    });
};