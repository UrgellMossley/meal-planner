//dom declarations
const carosel = document.querySelector(`.highlight`)
let caroselText = document.querySelector(`.lead-text`)
let mealInfo = document.querySelector(`.meal-info`)
const arrow = document.querySelectorAll(`.arrow`)
let ingredientEL = document.querySelector(`.ingredient-list`)
const form = document.querySelector(`#suggestion-form`)
const suggestionTitle = document.querySelector(`.recipe-title`)
const suggestionIngredients = document.querySelector(`.recipe-ingredients`)
const suggestionStyle = document.querySelector(`.recipe-style`)
const scrollBtn2 = document.querySelector(`.btn2`)
const navbar = document.querySelector(`.navbar`)


//declare an array of objects that will contain meal info
let meals = []
let recipes = []
//create a variable which allows us to increment through our array of meals
let i = 0 
//Create a time interval which will make our slideshow automatically sift through our array of meals every second
const timeInterval = 5000


//using OOP to create classes of meals, which we will use to populate dom elements
class Meal {
    constructor(imgSRC,mealTitle,mealOrigin,calories,ingredientList){
        //Defines the image src of the meal
        this.imgSRC = imgSRC
        //The title of the meal, used to populate dom element
        this.mealTitle = mealTitle 
        //Style and origin of the meal, used to populate dom element
        this.mealOrigin = mealOrigin
        //Calories of the meal, used to populate dom element
        this.calories = calories
        //An array of ingredients of the meal, used to populate dom element
        this.ingredientList = ingredientList
    }
}
//Using OOP to create a recipe, which eventually will be stored in local storage
class Recipe {
    constructor(recipeTitle,recipeIngredients,recipeStyle){
        this.recipeTitle = recipeTitle
        this.recipeIngredients = recipeIngredients
        this.recipeStyle = recipeStyle
    }
}
//calling our constructor
createMeal(`img/farhad-ibrahimzade-KpOl9jV2aJM-unsplash.jpg`,`Chicken Curry`,`Pakistan`, 865,[`chicken`,`Coriander`, `cumin`, `turmeric`, `fennel seeds`, `cinnamon`, `pepper`, `ground mustard`, `ground cloves`, `cayenne pepper`, `salt`,`onion`, `garlic`,`ginger`, `Canned tomatoes`])
createMeal(`img/markus-winkler-08aic3qPcag-unsplash.jpg`, `Beef Pho`, `Vietnam`, `734`,[`beef`, `noodles`,`coriander`, `chilli oil`])
createMeal(`img/mai-qu-c-tung-lam-HyuvFrHlJZc-unsplash.jpg`,`Fish and Chips`, `England`,940,[`Haddock`,`Maris Piper Potatoes`, `Flour`, `Salt to taste`, `Vegetable Oil`])
//set our carosel's background image and apply an effef
carosel.style.backgroundImage = 
    `linear-gradient(
        rgba(0, 0, 0, 0.45), 
        rgba(0, 0, 0, 0.45)
      ),
     url(${meals[i].imgSRC})`

arrow.forEach(arrow=> arrow.addEventListener(`click`,()=>{
    swipeSlide()
}))

carosel.addEventListener(`click`,renderMeal)

//create a function/event listner that will open a modal to say the suggestion
//has been accepted and to wait for Feedback
//Use OOP to create a recipe and store it in local storage
form.addEventListener(`submit`,(e)=>{
   e.preventDefault()
   let title = suggestionTitle.value
   let ingreds = suggestionIngredients.value
   let style = suggestionStyle.value
   createRecipe(title,ingreds,style)
   saveSuggstion(recipes)
   location.replace(`suggestion.html`)

   })

//


document.addEventListener('scroll', stickyNav);