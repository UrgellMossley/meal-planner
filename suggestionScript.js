const sugEl = document.querySelector(`.suggestion`)
const ingredList = document.querySelector(`.ingredList`)

const getSuggestions = () =>{
    const getSuggestion = localStorage.getItem(`recipeArr`)

    const suggestionJSON = JSON.parse(getSuggestion)
        
        try {
             return getSuggestion ? suggestionJSON : []
        } catch(e){
            return []
        }
     }

const renderSuggestions=()=>{
    if (recipeList.length > 0){
        recipeList.forEach(recipe => {
            sugEl.innerHTML = `<div class="suggestionDiv">
                                    <h2 class="subtitle">Your Requests:</h2>
                                    <h4 class="suggestion-title">${recipe.recipeTitle}</h4>
                                    
                                    <p>Requested Style: ${recipe.recipeStyle}</p>
                                    <p class="ingredList">${recipe.recipeIngredients}</p>
                                </div>`
        });

    } else {
            sugEl.innerHTML = `<div class="suggestionDiv">
                                <h2 class="subtitle">We're waiting!</h2>
                                <div class="img-container"></div>
                                <p>You haven't asked for your bespoke pre-packed recipe yet!</p>
                                <p>Don't be shy, let us know what you're into and we'll do the rest...</p
                                    <form class="wishlist" id="suggestion-form">
                                        <h2 class="subtitle">Recipe Wishlist</h2>
                                        <h4>Let me know what meals you want this week!</h4>
                                        <small>Meal Title:</small>
                                        <input type="text" required class="recipe-title" id="suggestion-title" placeholder="what is your meal called?">
                                        <small>Meal Ingredients:</small>
                                        <input type="text" required class="recipe-ingredients" id="suggestion-ing" placeholder="what is your meal's main ingredient?">
                                        <small>Meal Style:</small>
    
                                        <textarea name="style" required class="recipe-style" id="suggestion-style" placeholder="How do you want it cooked (spicy/chinese/etc)?" cols="40" rows="10"></textarea>
                
                                        <button class="submit-btn">Submit!</button>
                                    </form> 
                                    <a href="#"><button>Back Home</button></a>
                                </div>`
    }
}

let recipeList = getSuggestions()
renderSuggestions()