// Fonctionnalité 1

let footer = document.getElementsByTagName("footer")[0];

 function footerChange() {
    console.log("Clique");
};

footer.addEventListener("click", footerChange);


// Fonctionnalité 1-bis

i = 1
function footerChangeTwo() {
    console.log(`clic numéro ${i}`);
    i++;
}

footer.addEventListener("click", footerChangeTwo);

// Fonctionnalité 2

var navbar = document.querySelector("button")
var navcollapse = document.getElementById("navbarHeader");

var removeCollapse = function() {
    navcollapse.classList.toggle("collapse")
    console.log(navcollapse.className)
}

navbar.addEventListener("click", removeCollapse)


// Fonctionnalité 3

var first_button = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[0]

var redColor = function() {
    first_button.style.color = "red";
}

first_button.addEventListener("click", redColor);

// Fonctionnalité 4

var second_button = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[1]
var greenColor = function() {
    if (second_button.style.color === "green") {
        second_button.style.color = "";
    } else {
        second_button.style.color = "green"
    }
}

second_button.addEventListener("click", greenColor);


// Fonctionnalité 5

var css = document.getElementsByTagName('link')[0];

 var navbarall = document.getElementsByClassName('navbar')[0];
 navbarall.addEventListener('dblclick', removeLink);

 var body = document.getElementsByTagName('main')[0]
body.addEventListener('dblclick', addLink);

var hasattribute = css.hasAttribute('href');

function removeLink(){
    css.removeAttribute('href');
}

function addLink(){
    var hasattribute = css.hasAttribute('href');
    if (hasattribute === false){
        css.setAttribute("href", "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css");
    };
}


// Fonctionnalité 6

let card = document.getElementsByClassName("card mb-4 box-shadow")

for (let count = 0; count < card.length; count++) {
    let text = card[count].getElementsByClassName("card-text")[0];
    let image = card[count].getElementsByClassName("card-img-top")[0];
    let buttonview = card[count].getElementsByClassName("btn btn-sm btn-success")[0];

     function reduce() {
        if(image.style.width === "20%") {
            image.style = ""; 
            text.classList.toggle("collapse");
        } else {
            text.classList.toggle("collapse");
            image.style.width = "20%";
        }
    }

    buttonview.addEventListener("mouseover", reduce);
}


// Fonctionnalité 7

let rightbtn = document.getElementsByClassName("btn btn-secondary my-2")[0]
let cards = document.getElementsByClassName("row")[1]

function deplace() {
    cards.insertBefore(cards.children[5], cards.children[0]);
}

rightbtn.addEventListener("click", deplace)


// Fonctionnalité 8


let leftbtn = document.getElementsByClassName("btn btn-primary my-2")[0]


function deplacetwo() {
    leftbtn.removeAttribute("href")
    cards.insertBefore(cards.children[0], cards.children[6]);
}

leftbtn.addEventListener("click", deplacetwo);

// Fonctionnalité 9

var brand = document.getElementsByTagName('strong')[0]

var selection = document.getSelection()

brand.addEventListener("select", selected);
console.log(selection)
function selected() {
    if (selection == '<span class="navbar-toggler-icon"></span>') {
        console.log('#######################')
    }
}

var fullbody = document.body
window.addEventListener('keypress', (keyword) => {
if(selection.anchorNode.className == "navbar-toggler-icon") {
    switch(keyword.key) {
        case "a": 
        fullbody.className = "col-4";
        break
        case "y":
        fullbody.className = "col-4 offset-md-4";
        break
        case "p":
        fullbody.className = "col-4 offset-md-8";
        break
        case "b":
        fullbody.className = "";
    }
}
});
