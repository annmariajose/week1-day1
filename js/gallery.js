var photos = []; //Declare an empty array to store image element
var fileNames = []; //Declare an empty element to store image file names
var imageList = []; //Declare an empty array to store html list that contain an image
var image; //Declare an empty variable to store the assembled image list codes
var openListTag = "<li id='photo"; //Declare a variable to contain open list tag
var openListIdCloseTag = "'>";
var closeListTag = "</li>"; //Declare a variable to contain close list tag
var openCaptionTag = "<p class='caption'>";
var closeCaptionTag = "</p>";
var openDescTag = "<p class='description' onmouseenter='showDescription(this)'>";
var closeDescTag = "</p>";
var caption;
var description;
//variables for information box in gallery
var infoHeadingOpentag = "<h2>";
var infoHeadingClosetag = "</h2>";
var infoTextOpentag = "<p>";
var infoTextClosetag = "</p>";
var infoCoseTextOpentag = "<a href='#' onclick='closeInfoBox()'>";
var infoCloseTextClosetag = "</a>";
var closeInfoBoxText = "Click This To Close";
var infoBox;
var infoHeading;
var infoText;

var captionTexts = [
    "Winter Wonderland",
    "Frosty Elegance",
    "Enchanting Snow",
    "Winter's Embrace",
    "Icy lake",
    "Frozen Beauty",
    "Snowy Tranquility",
    "Winter Sunrise",
    "Glistening Snowflake",
    "Dancing Lightss"
];
var descTexts = [
    "Snow-kissed magic in a serene landscape",
    "Delicate charm in the icy beauty of winter",
    "Captivating scenes of nature's snowy enchantment",
    "Tranquil beauty wrapped in winter's gentle hold",
    "Frozen serenity reflected on still, icy waters",
    "Nature's artistry in a crystalline winter spectacle",
    "Calm and peace under a blanket of snow",
    "Morning hues painting the frosty winter sky",
    "Sparkling brilliance in individual snow crystals",
    "Mesmerizing display of lights in the winter sky"
];
var infoTexts = [
    "Snow-kissed magic in a serene landscape",
    "Delicate charm in the icy beauty of winter",
    "Captivating scenes of nature's snowy enchantment",
    "Tranquil beauty wrapped in winter's gentle hold",
    "Frozen serenity reflected on still, icy waters",
    "Nature's artistry in a crystalline winter spectacle",
    "Calm and peace under a blanket of snow",
    "Morning hues painting the frosty winter sky",
    "Sparkling brilliance in individual snow crystals",
    "Mesmerizing display of lights in the winter sky"
];

//Create a loop to create 6 images starting with index of 0
for (var i = 0; i < 10; i++) {
    fileNames.push("winterland" + (i + 1)); //Create image file name and store in the array
    caption = openCaptionTag + captionTexts[i] + closeCaptionTag;
    description = openDescTag + descTexts[i] + closeDescTag;
    photos.push("<img src='images/" + fileNames[i] + ".jpg' onmouseenter='showDescription(this)' onmouseleave='hideDescription(this)'>"); //Assemble file name into image element and store in an array
    image = openListTag + (i + 1) + openListIdCloseTag + photos[i] + description + caption + closeListTag; //Assemble image element from array with list elements and store in a variable
    imageList.push(image); //Store(push) the assembled list codes into an array
}

//Display all images stored in the array
document.getElementById("album").innerHTML = imageList.join("");

//Add event listeners to description class on click
var allDescriptions = document.getElementsByClassName("description");
for (var i = 0; i < allDescriptions.length; i++) {
    allDescriptions[i].addEventListener('click', showInformationBox);
}

// event handler functions
function showDescription(object) {
    var className = object.className;

    if (className == "description") {
        object.style.visibility = "visible";
        return;
    }

    var parent = object.parentElement;
    var allDescriptions = document.getElementsByClassName("description");
    for (var i = 0; i < allDescriptions.length; i++) {
        if (allDescriptions[i].parentElement == parent) {
            allDescriptions[i].style.visibility = "visible";
        }
    }
}

function hideDescription(object) {
    var parent = object.parentElement;
    var allDescriptions = document.getElementsByClassName("description");
    for (var i = 0; i < allDescriptions.length; i++) {
        if (allDescriptions[i].parentElement == parent) {
            allDescriptions[i].style.visibility = "hidden";
        }
    }
}

function showInformationBox(event) {
    var allCaptions = document.getElementsByClassName("caption");
    var parent = event.target.parentElement;
    for (var i = 0; i < allCaptions.length; i++) {
        if (allCaptions[i].parentElement == parent) {
            infoHeading = allCaptions[i].textContent;
            infoText = infoTexts[i];
        }
    }
    infoBox = infoHeadingOpentag + infoHeading + infoHeadingClosetag + infoTextOpentag + infoText + infoTextClosetag + infoCoseTextOpentag + closeInfoBoxText + infoCloseTextClosetag;
    
    //Display information box
    var informationBox = document.getElementById("informationBox");
    informationBox.innerHTML = infoBox;
    informationBox.style.visibility = "visible";
}

function closeInfoBox() {
    var informationBox = document.getElementById("informationBox");
    informationBox.style.visibility = "hidden";
}