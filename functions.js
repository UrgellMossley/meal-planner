//Save recipes to local storage
const saveSuggstion = (recipes) => localStorage.setItem('recipeArr', JSON.stringify(recipes))
//function generating a new meal and adding it to our array ready for use
const createMeal = (imgSRC,mealTitle,mealOrigin,calories,ingredientList) =>{
    const meal = new Meal(imgSRC,mealTitle,mealOrigin,calories,ingredientList)
    meals.push(meal)
}
const createRecipe = (recipeTitle,recipeIngredients,recipeStyle)=>{
    const recipeSuggestion = new Recipe(recipeTitle,recipeIngredients,recipeStyle)
    recipes.push(recipeSuggestion)
    console.log(recipes)
}
//makes navbar append to top of page
const stickyNav=()=> scrollY > 0 ? navbar.classList.add("nav-sticky") : navbar.classList.remove("nav-sticky")

//Automatic slideshow that iterates though each meal in the meals array
const slideShow = ()=> { 
    
    carosel.style.backgroundImage = 
    `linear-gradient(
        rgba(0, 0, 0, 0.45), 
        rgba(0, 0, 0, 0.45)
      ),
     url(${meals[i].imgSRC})` 
    caroselText.innerText = meals[i].mealTitle
    i < meals.length - 1 ? i++ : i = 0    
}

    const swipeSlide = () => {
            
            i < meals.length - 1 ? i++ : i = 0

            carosel.style.backgroundImage = 
            `linear-gradient(
                rgba(0, 0, 0, 0.45), 
                rgba(0, 0, 0, 0.45)),
                url(${meals[i].imgSRC})`; 
                caroselText.textContent = meals[i].mealTitle   
                
                if (mealInfo.innerHTML !== ``){
                    renderIngreds(meals[i].ingredientList)
                        mealInfo.innerHTML = 

                        `<div class="meal-render">
                            <h5 class="rendered-title">${meals[i].mealTitle}</h5>
                            <p class="rendered-calories">Calories: ${meals[i].calories}</p>    
                            <img class="rendered-img"src= ${meals[i].imgSRC} alt=${meals[i].mealTitle}>
                            <p class="rendered-origin"> Origin: ${meals[i].mealOrigin}</p>
                        </div>`;
                }
    }
    
//Need a fuction so that every time you click on a the carosel, it checks what index of meal
//the photo is from and serve up info from the Class as the divs innerHTML
const renderMeal = () => {
        //Using find index with a callback function which willb return the meal's index
    //..when both the meal objects img property and the img in the highlight reel are the same
/*     let mealIndex = meals.findIndex(meal=> meal.imgSRC === meals[i].imgSRC)
 */    
    scrollBtn2.style.display = "none";

//using the index to select the meal we want from the meals arr. Use OOP to manipulate data
    
 
 let highlightMeal = meals[i]
    let ingredArr = meals[i].ingredientList
    renderIngreds(ingredArr)
    mealInfo.innerHTML = 

    `<div class="meal-render">
        <h5 class="rendered-title">${highlightMeal.mealTitle}</h5>
        <p class="rendered-calories">Calories: ${highlightMeal.calories}</p>    
        <img class="rendered-img"src= ${highlightMeal.imgSRC} alt=${highlightMeal.mealTitle}>
        <p class="rendered-origin"> Origin: ${highlightMeal.mealOrigin}</p>
    </div>
    <div class="blurb-container">
            <h2>Instructions</h2>
            <p class="blurb-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus reprehenderit eos quas ratione dolor quam dicta quis perspiciatis veniam neque.</p>
            <p class="blurb-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, delectus!</p>
            <p class="blurb-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum labore aperiam commodi! Hic facere rerum vitae iste atque soluta maxime?</p>
    </div>`;
}

//function to scrape each ingredient, and somehow append it to a DOM element
const renderIngreds = (ingredArr) =>{
    ingredientEL.textContent = ` `
    ingredientEL.innerHTML =  `<div class="ingredient-render">
                                <h2 class = "ing-title">Ingredients</h2>
                               </div>`
    ingredArr.forEach(ingred =>{
        const ingredient = document.createElement(`li`)
        ingredient.classList.add(`ingredient-item`)
        ingredient.textContent = ingred
        ingredientEL.appendChild(ingredient)
    }) 
}


