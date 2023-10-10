# GROUP PROJECT 1

Group project 1
With our web-based application you will be able to generate a quote and a giphy image by inputting the word of your choice. The user is presented with an input box for their word and an “Add Word” button. Upon adding the word a random quote and gif image will display based off of the word input. The word will then be saved for the user to click as many times as they desire, each time refreshing with a new quote and gif image. The user is also able to click the “Clear Words” button to remove all their previously added words. For this project we will be using Zenquotes.io and giphy.com.

- PSEUDOCODE:

- WHEN THE USER HITS THE PAGE THEY ARE PRESENTED WITH A TEXT FIELD FOR THEM TO ENTER THEIR FAVORITE WORD.
- IF THEY PUT IN THEIR NAME THEY CAN MAKE THE QUOTE CUTOM TO THEM: I.E. "GREETINGS X!"
- WHEN THEY HIT SUBMIT IT WILL RANDOMLY GENERATE A QUOTE FOR THEM BASED OFF THEIR INPUT WORD.
- ALSO WHEN THEY HIT SUBMIT THEY ARE PRESENTED WITH A RANDOMLY GENERATED GIF.

Use a CSS framework other than Bootstrap.

- GOING TO USE TAILWIND FOR CSS
  Be deployed to GitHub Pages.
- DONE
  Be interactive (i.e: accept and respond to user input).
- WE HAVE ONE DATA POINT! ENTER A "WORD" MAYBE LATER AD "NAME"
  Use at least two server-side APIs.
- QUOTE API AND GIFY API
  Does not use alerts, confirms, or prompts (use modals).
- OK - THINK OF DOING A MODAL TO SOCIAL MEDIA
  Use client-side storage to store persistent data.
- MAYBE KEEP THEIR NAME, OR WORD THAT THEY GENERATED
  Be responsive.
- MAKE SURE TO USE TAILWIND PROPERTIES TO MAKE IT MOBILE FRIENDLY
  - OUR INTENTION IS TO USE THE LAYOUT AND PROPERTIES FROM THE WEATHER DASHBOARD
    Have a polished UI.
- GOING TO USE TAILWIND PROPERTIES TO MAKE SURE ITS POLLISHED
  Have a clean repository that meets quality coding standards (file structure, naming conventions, follows best practices for class/id-naming conventions, indentation, quality comments, etc.).
- AS IT STANDS RIGHT NOW ONE SET OF HANDS ON THE CODE AT A TIME, WE WILL REVIEW OUR ASSETS AND FILE NAMES
  Have a quality README (with unique name, description, technologies used, screenshot, and link to deployed application).
- FUNCTIONS SHOULD ALWAYS BE NAMED BY VERBS, STATIC ITEMS SHOULD BE A NOUN
  - WE WILL USE THE FORMAT OF OUR PREVIOUS README'S

ACTION ITEMS:

- LAYOUT THE HTML FOR OUR APP USING TAILWIND

  - LINKING TO TAILWIND CSS IN OUR HEADER
  - IN THE HTML LINK TO THE SCRIPT USING VUE
  - MIMIC THE BOOTSTRAP CLASSES AND TURN THEM INTO TAILWIND

- JAVASCRIPT = USE AS MANY OF THE FUNCTIONS AS POSSIBLY FROM WHAT WE DID IN OUR WEATHER APP,
  ASK OURSELVES: HOW CAN I TURN THIS INTO VUE.JS?

- API STUFF = NEED TO BE ABLE TO:
  FETCH THE DATA - WHAT DATA? FETCH A QUOTE BASED OFF THE WORD INPUT, THE WORD IS THE CATEGORY
  VIEW THE DATA = THIS IS THE "RESPONSE" FROM THE API TO US (THIS IS FOR US, NOT THE USER)
  DIPLAY THE DATA = THIS IS THE INERHTML PORITON = THIS IS THE PART THAT THE USER ACTUALLY SEES

## RESOURCES:

- Quotes API: https://api-ninjas.com/api/quotes
- GIPHY API: https://developers.giphy.com/dashboard/ -> APIkey: T5jopP1Bh8SGzs6g1b6MrMdb26IrnDeC
- CSS Framework: https://tailwindcss.com/
- Third-Party API: https://vuejs.org/
- Team Six Document: https://docs.google.com/document/d/177W1FZIYZbJCQoIUrh2FMPXjx8nMj2S77OAB2fnyOl0/edit
