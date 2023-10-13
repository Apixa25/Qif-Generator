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
var intro = document.getElementById("intro");
var loggedWords = [];


// ~~~~ FUNCTIONS & EVENT LISTENERS ~~~~ //

// This function takes value of the word submitted and passes it to the generator functions. It also clears out the input field after submission.
function submitWord(e) {
    e.preventDefault();
    var wordValue = chooseWord.value;
    // console.log("word value: ", wordValue)
    quoteGenerator(wordValue);
    var nameValue = userName.value;
    // console.log("name value: ", nameValue)
    giphyGenerator(wordValue, nameValue);
    chooseWord.value = "";
}

// This function handles the quote API. Passing the word through the parameter. After receiving the response the value is saved to localstorage and then passes it to the saved words function. Finally the response is placed in the display.
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
            <div class=" bg-blue-500 drop-shadow-lg p-5 text-white">
            <img src="${displayQuote[0].i}" />
            <p class="p-3">${displayQuote[0].h}</p>
            </div>
            `
        })
}

// This function is the same as the Quote function, however it additionally takes the users name and combines it with the word input to make the API call.
function giphyGenerator(wordValue, nameValue) {
    var spaceBetween = " ";
    var searchTerm = wordValue +  spaceBetween + nameValue;
    console.log("search term: ", searchTerm)
    var giphyURL = `https://api.giphy.com/v1/gifs/random?tag=${searchTerm}&rating=g&api_key=T5jopP1Bh8SGzs6g1b6MrMdb26IrnDeC`;
        fetch(giphyURL)
        .then(function (response) {
            return response.json();  
        })
        .then (function (displayGiphy) {
            console.log("giphy word value: ", searchTerm)
            if (loggedWords.includes(wordValue) === false) {
                loggedWords.push(wordValue);
                localStorage.setItem("word", JSON.stringify(loggedWords));
            }

            displaySavedWords();
            intro.style.display = "none";
            generatedGiphy.innerHTML =
            ` 
            <div class=" bg-blue-500 drop-shadow-lg p-5">
            <img src="${displayGiphy.data.images.downsized.url}" />
            </div>
            `
        })
}

// This function displays all words previously used so that they can be re-used quickly. It pulls the data out of local storage to create the saved words buttons.
function displaySavedWords() {

    if (localStorage.getItem("word")) {
        loggedWords = JSON.parse(localStorage.getItem("word"));
    }

    var wordList = "";
    for (let i = 0; i < loggedWords.length; i++) {
        wordList = wordList + `<button class="w-full my-word bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border rounded m-3" type="submit">${loggedWords[i]}</button>`;
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

// This event listener initiates the submitted word function.
wordInputForm.addEventListener("submit", submitWord);

// Our function to clear all the saved words
function clearSavedWords() {
    localStorage.clear();
    savedWords.innerHTML = "";
    loggedWords = [];
}

// Event listener to initiate clearing the saved words.
clearWordsButton.addEventListener("click", function() {
    clearSavedWords();
})


// this is our Granim functionality
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