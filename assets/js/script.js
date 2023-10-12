// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
// ~~~~~~~~~~~~~~~~ QIF-SCRIPT ~~~~~~~~~~~~~~~~ //
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

// ~~~~~~~~~~ DOCUMENT SELECTORS ~~~~~~~~~~ //
var chooseWord = document.getElementById("choose-word");
var wordInputForm = document.getElementById("word-input-form");
var userName = document.getElementById("user-name");
var inputButton = document.getElementById("input-button");
var clearWordsButton = document.getElementById("clear-words");
var savedWords = document.getElementById("saved-words");
var generatedQuote = document.getElementById("generated-quote");
var generatedGiphy = document.getElementById("generated-giphy");
var loggedWords = [];


// ~~~~~~~~~~ FUNCTIONS & EVENT LISTENERS ~~~~~~~~~~ //
function submitWord(e) {
    e.preventDefault();
    var wordValue = chooseWord.value;
    console.log("word value: ", wordValue)
    quoteGenerator(wordValue);
    giphyGenerator(wordValue);
    chooseWord.value = "";
}

  

function quoteGenerator(wordValue) {
    var quoteURL = `https://zenquotes.io/api/quotes/20f0ab3d282c49b93e06cf1487491f0d&keyword=${wordValue}`;
    fetch(quoteURL)
        .then(function (response) {
            return response.json();
        })
        .then (function (displayQuote) {
            console.log("quote word value: ", wordValue)
            if (loggedWords.includes(wordValue) === false) {
                loggedWords.push(wordValue);
                localStorage.setItem("word", JSON.stringify(loggedWords));
            }

            displaySavedWords();

            generatedQuote.innerHTML = 
            `
            <div class=" bg-blue-500 drop-shadow-lg p-5">
            <img src="${displayQuote[0].i}" />
            <p>${displayQuote[0].h}</p>
            </div>
            `
        })
}

function giphyGenerator(wordValue) {
    var giphyURL = `https://api.giphy.com/v1/gifs/random?tag=${wordValue}&rating=g&api_key=T5jopP1Bh8SGzs6g1b6MrMdb26IrnDeC`;
        fetch(giphyURL)
        .then(function (response) {
            return response.json();  
        })
        .then (function (displayGiphy) {
            console.log("giphy word value: ", wordValue)
            if (loggedWords.includes(wordValue) === false) {
                loggedWords.push(wordValue);
                localStorage.setItem("word", JSON.stringify(loggedWords));
            }

            displaySavedWords();

            generatedGiphy.innerHTML =
            ` 
            <div class=" bg-blue-500 drop-shadow-lg p-5">
            <img src="${displayGiphy.data.images.downsized.url}" />
            </div>
            `
        })
}


function displaySavedWords() {

    if (localStorage.getItem("word")) {
        loggedWords = JSON.parse(localStorage.getItem("word"));
    }

    var wordList = "";
    for (let i = 0; i < loggedWords.length; i++) {
        wordList = wordList + `<button class="w-full my-word bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-3" type="submit">${loggedWords[i]}</button>`;
    }
    
    savedWords.innerHTML = wordList;

    var myWord = document.querySelectorAll(".my-word");
    for (let i = 0; i < myWord.length; i++) {
        myWord[i].addEventListener("click", function() {
            quoteGenerator(this.textContent);
            giphyGenerator(this.textContent);
        });
    }
}

displaySavedWords();


wordInputForm.addEventListener("submit", submitWord);

function clearSavedWords() {
    localStorage.clear();
    savedWords.innerHTML = "";
    loggedWords = [];
}

clearWordsButton.addEventListener("click", function() {
    clearSavedWords();
})


// this is our Granim stuff
var granimInstance = new Granim({
    element: '#canvas-basic',
    direction: 'left-right',
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                ['#ff9966', '#ff5e62'],
                ['#00F260', '#0575E6'],
                ['#e1eec3', '#f05053']
            ]
        }
    }
});