var contactSelect = document.getElementById("contactOptions");
var contactValue = "";

function getContactInfo() {
    contactValue = contactSelect.value;
    if (contactValue != "") {
        displayContact();
        if (contactValue == "phone") {
            hideElement("email");
        } else {
            hideElement("phone");
        }
    } else {
        hideElement("email");
        hideElement("phone");
        document.getElementById("contactInput").style.visibility = "hidden";
    }
}

function displayContact() {
    var phoneElements = document.getElementsByClassName(contactValue);
    for (var i = 0; i < phoneElements.length; i++) {
        phoneElements[i].style.display = "block";
    }
    document.getElementById("contactInput").style.visibility = "visible";
}

function hideElement(value) {
    var elements = document.getElementsByClassName(value);
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
    }
    
}

// add event listeners
contactSelect.addEventListener("change", getContactInfo);