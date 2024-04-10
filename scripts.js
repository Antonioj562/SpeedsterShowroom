/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 * 
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your 
 *    browser and make sure you can see that change. 
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 * 
 */
let motoCatalog = {
    "kawasaki": {
        "sport": [
            {
                "brand": "kawasaki",
                "model": "Ninja 400",
                "price": 5299,
                "image": "./assets/brands/kawasaki/sport/ninja400.png",
                "url": "https://www.kawasaki.com/en-us/motorcycle/ninja/sport/ninja-400",
                "description": "The Kawasaki Ninja 400 is powered by a 399cc parallel-twin engine, delivering around 45 horsepower."
            },
            {
                "brand": "kawasaki",
                "model": "ZX-6R",
                "price": 11399,
                "image": "./assets/brands/kawasaki/sport/zx6r.png",
                "url": "https://www.kawasaki.com/en-us/motorcycle/ninja/supersport/ninja-zx-6r",
                "description": "The Kawasaki Ninja ZX-6R is equipped with a 636cc inline-four engine, producing approximately 130 horsepower."
            },
            {
                "brand": "kawasaki",
                "model": "ZX-10R",
                "price": 17799,
                "image": "./assets/brands/kawasaki/sport/zx10r.png",
                "url": "https://www.kawasaki.com/en-us/motorcycle/ninja/supersport/ninja-zx-10r",
                "description": "The Kawasaki Ninja ZX-10R features a 998cc inline-four engine, delivering around 200 horsepower."
            }
        ],
        "street": [
            {
                "brand": "kawasaki",
                "model": "Z400",
                "price": 5599,
                "image": "./assets/brands/kawasaki/street/z400.png",
                "url": "https://www.kawasaki.com/en-us/motorcycle/z/supernaked/z400-abs",
                "description": "The Kawasaki Z400 is powered by a 399cc parallel-twin engine, producing around 45 horsepower."
            },
            {
                "brand": "kawasaki",
                "model": "Z650",
                "price": 8149,
                "image": "./assets/brands/kawasaki/street/z650.png",
                "url": "https://www.kawasaki.com/en-us/motorcycle/z/supernaked/z650",
                "description": "The Kawasaki Z650 features a 649cc parallel-twin engine, delivering approximately 67 horsepower."
            },
            {
                "brand": "kawasaki",
                "model": "Z900",
                "price": 9899,
                "image": "./assets/brands/kawasaki/street/z900.png",
                "url": "https://www.kawasaki.com/en-us/motorcycle/z/supernaked/z900",
                "description": "The Kawasaki Z900 is equipped with a 948cc inline-four engine, producing around 125 horsepower."
            }
        ]
    },
    "honda": {
        "sport": [
            {
                "brand": "honda",
                "model": "CBR300R",
                "price": 4899,
                "image": "./assets/brands/honda/sport/cbr300r.png",
                "url": "https://powersports.honda.com/motorcycle/sport/cbr300r",
                "description": "The Honda CBR300R is powered by a 286cc single-cylinder engine, delivering approximately 30 horsepower."
            },
            {
                "brand": "honda",
                "model": "CBR650R",
                "price": 9899,
                "image": "./assets/brands/honda/sport/cbr650r.png",
                "url": "https://powersports.honda.com/motorcycle/sport/cbr650r",
                "description": "The Honda CBR650R features a 649cc inline-four engine, producing around 95 horsepower."
            },
            {
                "brand": "honda",
                "model": "CBR1000RR",
                "price": 16699,
                "image": "./assets/brands/honda/sport/cbr1000rr.png",
                "url": "https://powersports.honda.com/motorcycle/supersport/cbr1000rr",
                "description": "The Honda CBR1000RR is equipped with a 999cc inline-four engine, delivering approximately 189 horsepower."
            }
        ],
        "street": [
            {
                "brand": "honda",
                "model": "CB300R",
                "price": 5149,
                "image": "./assets/brands/honda/street/cb300r.png",
                "url": "https://powersports.honda.com/motorcycle/standard/cb300r",
                "description": "The Honda CB300R is powered by a 286cc single-cylinder engine, producing around 30 horsepower."
            },
            {
                "brand": "honda",
                "model": "CB500F",
                "price": 6799,
                "image": "./assets/brands/honda/street/cb500f.png",
                "url": "https://powersports.honda.com/motorcycle/standard/cb500f",
                "description": "The Honda CB500F features a 471cc parallel-twin engine, delivering approximately 49 horsepower."
            },
            {
                "brand": "honda",
                "model": "CB1000R",
                "price": 12999,
                "image": "./assets/brands/honda/street/cb1000r.png",
                "url": "https://powersports.honda.com/motorcycle/standard/cb1000r",
                "description": "The Honda CB1000R is equipped with a 998cc inline-four engine, producing around 143 horsepower."
            }
        ]
    },
    "yamaha": {
        "sport": [
            {
                "brand": "yamaha",
                "model": "YZF-R3",
                "price": 5499,
                "image": "./assets/brands/yamaha/sport/r3.png",
                "url": "https://yamahamotorsports.com/models/yzf-r3",
                "description": "The Yamaha YZF-R3 is powered by a 321cc parallel-twin engine, delivering approximately 42 horsepower."
            },
            {
                "brand": "yamaha",
                "model": "YZF-R7",
                "price": 9199,
                "image": "./assets/brands/yamaha/sport/r7.png",
                "url": "https://pop.yamahamotorsports.com/supersport/models/yzf-r7",
                "description": "The Yamaha YZF-R7 features a 689cc parallel-twin engine, producing around 72 horsepower."
            },
            {
                "brand": "yamaha",
                "model": "YZF-R1",
                "price": 18399,
                "image": "./assets/brands/yamaha/sport/r1.png",
                "url": "https://yamahamotorsports.com/models/yzf-r1",
                "description": "The Yamaha YZF-R1 is equipped with a 998cc inline-four engine, delivering approximately 200 horsepower."
            }
        ],
        "standard": [
            {
                "brand": "yamaha",
                "model": "MT-03",
                "price": 4999,
                "image": "./assets/brands/yamaha/street/mt03.png",
                "url": "placeholder_url",
                "description": "The Yamaha MT-03 is powered by a 321cc parallel-twin engine, producing around 42 horsepower."
            },
            {
                "brand": "yamaha",
                "model": "MT-07",
                "price": 8199,
                "image": "./assets/brands/yamaha/street/mt07.png",
                "url": "placeholder_url",
                "description": "The Yamaha MT-07 features a 689cc parallel-twin engine, delivering approximately 72 horsepower."
            },
            {
                "brand": "yamaha",
                "model": "MT-09",
                "price": 10599,
                "image": "./assets/brands/yamaha/street/mt09.png",
                "url": "placeholder_url",
                "description": "The Yamaha MT-09 is equipped with an 847cc inline-triple engine, producing around 115 horsepower."
            }
        ]
    }
};


let selectedBrand = selectBrand.value; 

selectBrand.addEventListener('change', function() {
    selectedBrand = selectedBrand;
    showCards(selectedBrand); 
});

function showCards(selectedBrand){
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");

    selectedBrand = selectBrand.value;

    for (let brand in motoCatalog) {
        if(brand === selectedBrand || selectedBrand === ""){
            for(let category in motoCatalog[brand]){
                for (let i = 0; i < motoCatalog[brand][category].length; i++) {
                    const motorcycle = motoCatalog[brand][category][i];
                    const nextCard = templateCard.cloneNode(true); 
    
                    editCardContent(nextCard, motorcycle.model, motorcycle.image, motorcycle.url, motorcycle.description, motorcycle.price);
                    
                    if (brand === "yamaha") {
                        nextCard.style.background = "linear-gradient(45deg, rgba(0, 58, 112, 0.7), rgba(255, 215, 0, 0.7))";
                    } else if (brand === "honda") {
                        nextCard.style.background = "linear-gradient(45deg, rgba(196, 0, 0, 0.7), rgba(255, 215, 0, 0.5))";
                    } else {
                        nextCard.style.background = "linear-gradient(45deg, rgba(46, 139, 87, 0.7), rgba(0, 0, 0, 0.5))";
                    }
                    
                    nextCard.textColor = " white";
                    cardContainer.appendChild(nextCard); 
                }
            }
        }
        /* sport / street if ((sport === selector) ) { display sport } elseif (street === selector) {display street } else {display}*/
        }
}

function editCardContent(card, newModel, newImageURL, url, description, price) {
    card.style.display = "block";

    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = newModel;

    const cardImage = card.querySelector("img");
    cardImage.src = newImageURL;
    cardImage.alt = newModel + " motorcycle";

    const cardDesc = card.querySelector("h5");
    cardDesc.textContent = description;

    const cardPrice = card.querySelector("h4");
    cardPrice.innerHTML = `<span class="price-tag">$${price}</span>`;


    const cardLink = card.querySelector("a");
    cardLink.setAttribute('href', url);
}


// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

// try appending to div element bulllet pooints
// add selection input with if statments in for loop to display if selection is same as an item continue if
// start posting to git pages
const shuffleMotosButton = document.getElementById('shuffleMotos');

shuffleMotos.addEventListener('click', function() {
    console.log("shuffle?");
    const templateCard = document.querySelector(".card");
    let shuffledMotos = [];

    for (let brand in motoCatalog) {
        for (let category in motoCatalog[brand]) {
            shuffledMotos.push(...motoCatalog[brand][category]);
        }
    }
    for (let i = shuffledMotos.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [shuffledMotos[i], shuffledMotos[randomIndex]] = [shuffledMotos[randomIndex], shuffledMotos[i]];
    }

    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";

    for (let i = 0; i < shuffledMotos.length; i++) {
        const motorcycle = shuffledMotos[i];
        const nextCard = templateCard.cloneNode(true);

        editCardContent(nextCard, motorcycle.model, motorcycle.image, motorcycle.url, motorcycle.description, motorcycle.price);

        if (motorcycle.brand === "yamaha") {
            nextCard.style.background = "linear-gradient(45deg, rgba(0, 58, 112, 0.7), rgba(255, 215, 0, 0.7))";
        } else if (motorcycle.brand === "honda") {
            nextCard.style.background = "linear-gradient(45deg, rgba(196, 0, 0, 0.7), rgba(255, 215, 0, 0.5))";
        } else {
            nextCard.style.background = "linear-gradient(45deg, rgba(46, 139, 87, 0.7), rgba(0, 0, 0, 0.5))";
        }

        cardContainer.appendChild(nextCard);
    }
});

