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
    "Snow-kissed magic in a serene landscape creates a winter wonderland where nature's beauty is adorned in a pristine blanket of white, transforming the world into a captivating and enchanting spectacle.",
    "Delicate charm is found in the icy beauty of winter, where frosty elegance unfolds in every glistening snowflake, creating a world where nature's intricacies are displayed with graceful sophistication.",
    "Captivating scenes of nature's snowy enchantment come to life, as each snowfall weaves a spellbinding tapestry, turning ordinary landscapes into mesmerizing vistas filled with the hushed allure of winter.",
    "Tranquil beauty is wrapped in winter's gentle hold, where the crisp air and pristine snow come together to create a serene atmosphere that invites a sense of calm and introspection.",
    "Frozen serenity is reflected on still, icy waters, turning a once lively lake into a tranquil masterpiece where the frozen surface mirrors the surrounding winter landscape with crystal-clear precision.",
    "Nature's artistry is showcased in a crystalline winter spectacle, where frozen beauty takes center stage, transforming the world into a breathtaking display of intricate ice formations and glistening snow.",
    "Calm and peace reign under a blanket of snow, as the world is blanketed in a serene hush, creating a landscape of snowy tranquility that invites contemplation and a connection with nature.",
    "Morning hues paint the frosty winter sky, as the sun rises over a landscape adorned in snow, casting a warm glow on the icy scenery and heralding the start of a new day in winter's embrace.",
    "Sparkling brilliance is found in individual snow crystals, each glistening snowflake a unique masterpiece, contributing to the overall beauty of winter and adding a touch of magic to the cold, crisp air.",
    "Mesmerizing display of lights fills the winter sky, as the dance of auroras or city lights against the snowy backdrop creates a captivating spectacle, turning the night into a magical and enchanting experience."
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

function hideAllDescriptions() {
    var allDescriptions = document.getElementsByClassName("description");
    for (var i = 0; i < allDescriptions.length; i++) {
        if (allDescriptions[i].style.visibility == "visible") {
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
    //Hide all visible descriptions
    hideAllDescriptions();
}

$(document).ready(function(){

    /* Open lightbox on button click */
    $('main #gallery #album img').click(function(){
        $('.backdrop').animate({'opacity':'.50'}, 300, 'linear').css('display', 'block');
        $('.box').fadeIn();

        //Check if lightbox has an image and clear if true
        if ($('.box').contents('img')) {
            $('.box').contents().remove('img');
        }

        var img = $(this).clone(); //Duplicate DOM element
        $('.box').append(img); //Insert duplicated element in another element
    });

    /* Click to close lightbox */
    $('.close, .backdrop').click(function(){
        $('.backdrop').animate({'opacity':'0'}, 300, 'linear', function(){
            $('.backdrop').css('display', 'none');
        });
        $('.box').fadeOut();
    });
});