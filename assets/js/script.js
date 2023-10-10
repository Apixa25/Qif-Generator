// confirming that our js file is properly attached
console.log("js file loading");

// ~ \/ below is creating a variable in vue \/ ~ //
// const app = Vue.createApp({
//     template: '<h2>Hello CDN Vue</h2>'
// });

// ~ \/ below is how we add a script to an ID in the HTML \/ ~ //
// app.mount('#app');

// const savedWords = Vue.createApp({
//     template: '<h2>This is where saved words can go</h2>'
// });

// savedWords.mount('#saved-words');

// const generatedQuote = Vue.createApp({
//     template: '<h2>This is where our generated quote can go</h2>'
// });

// generatedQuote.mount('#generated-quote');

// const generatedGiphy = Vue.createApp({
//     template: '<h2>This is where our generated GIPHY can go</h2>'
// });

// generatedGiphy.mount('#generated-giphy');

// const addWord = Vue.createApp({
//     method: {
//         handleAddWord() {
//         console.log("add word")
//         } 
//     }
// })


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
// ~~~~~~~~~~~~~~ VANILLA JAVASCRIPT ~~~~~~~~~~~~~~ //
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

// ~~~~~~~~~~ DOCUMENT SELECTORS ~~~~~~~~~~ //
var wordInputForm = document.getElementById("word-input-form");
var wordInput = document.getElementById("word-input");
var inputButton = document.getElementById("input-button");
var clearWordsButton = document.getElementById("clear-words");
var savedWords = document.getElementById("saved-words");
var generatedQuote = document.getElementById("generated-quote");
var generatedGiphy = document.getElementById("generated-giphy");
var loggedWords = [];

// ~~~~~~~~~~ FUNCTIONS & EVENT LISTENERS ~~~~~~~~~~ //
function submitWord(e) {
    e.preventDefault();
    var wordValue = wordInput.value;
    fetchQuote(wordValue);
    fetchGiphy(wordValue);
}

function fetchQuote(wordValue) {
    var wordValue = "happiness";
    var quoteURL = `https://zenquotes.io/api/quotes/20f0ab3d282c49b93e06cf1487491f0d&keyword=${wordValue}`;
    console.log(quoteURL);
    fetch(quoteURL)
        .then(function (response) {
            console.log(response);
            return response.json();
            
        });
        
        displayQuote();
}
fetchQuote();
function fetchGiphy(wordValue) {
    var wordValue = "hello";
    var giphyURL = `https://api.giphy.com/v1/gifs/search?q=${wordValue}&api_key=T5jopP1Bh8SGzs6g1b6MrMdb26IrnDeC`;
    console.log(giphyURL);

                fetch(giphyURL)
                .then(function (response) {
                    console.log("giphy: ", response)
                    return response.json();
                    
                });
                
                displayGiphy();
}
fetchGiphy();
function displayQuote() {

}

function displayGiphy() {

}

function displaySavedWords() {
    if (localStorage.getItem("word")) {
        loggedWords = JSON.parse(localStorage.getItem("word"));
    }

    var wordList = "";
    for (let i = 0; i < loggedWords.length; i++) {
        wordList = wordList + `<button class="my-2" type="submit">${loggedWords[i]}`;
    }

    savedWords.innerHTML - wordList;

    var buttonMargin = document.querySelectorAll(".my-2");
    for (let i = 0; i < buttonMargin.length; i++) {
        buttonMargin[i].addEventListener("click", function() {
            displayQuote(this.textContent);
            displayGiphy(this.textContent);
        });
    }
}



// function displayResults(wordValue) {
//     var quoteURL = `https://zenquotes.io/api/random?option1=${wordValue}`;
//     fetch(quoteURL)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (giphyData) {
//             var giphyURL = `api.giphy.com/v1/gifs/search?q=${wordValue}&api_key=T5jopP1Bh8SGzs6g1b6MrMdb26IrnDeC`;
//             fetch(giphyURL)
//                 .then(function (response) {
//                     return response.json();
//                 })
//                 .then (function ())
//         })
// }


wordInputForm.addEventListener("submit", submitWord);