/* File: about-app.js
Created by: Elizabeth Thomas
Created on: 04-08-2022
Purpose: Web Interactions Assignment : Web and Digital Prototyping */

// Function 6: Get the sevices data from the services.json file
function validateForm() {
    var name = document.forms["myForm"]["name"];
    var email = document.forms["myForm"]["email"];
    var message = document.forms["myForm"]["message"];

    if (name.value == "") {
        document.getElementById('errorname').innerHTML = "Enter your name";
        name.focus();
        return false;
    } else {
        document.getElementById('errorname').innerHTML = "";
    }

    if (email.value == "") {
        document.getElementById('erroremail').innerHTML = "Incorrect Email";
        email.focus();
        return false;
    } else {
        document.getElementById('erroremail').innerHTML = "";
    }

    if (email.value.indexOf("@", 0) < 0) {
        document.getElementById('erroremail').innerHTML = "Incorrect Email";
        email.focus();
        return false;
    }

    if (email.value.indexOf(".", 0) < 0) {
        document.getElementById('erroremail').innerHTML = "Incorrect Email";
        email.focus();
        return false;
    }

    if (message.value == "") {
        document.getElementById('errormsg').innerHTML = "Enter your message";
        message.focus();
        return false;
    } else {
        document.getElementById('errormsg').innerHTML = "";
    }
    return true;
}