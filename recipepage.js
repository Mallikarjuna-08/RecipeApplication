let recipeInputEl=document.getElementById("recipeInput");
let recipeIngredientsEl=document.getElementById("recipeIngredients");
let recipeInstructionsEl=document.getElementById("recipeInstructions");
let infoAboutRecipeEl=document.getElementById("infoAboutRecipe");



function searchRecipe(event){
    if(event.key==="Enter"){
    event.preventDefault();
        
    let recipeName = recipeInputEl.value.trim();
    let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + recipeName;

       const recipeCall = async () => {
  try {
    const response = await fetch(url);
    const jsonData = await response.json();
    console.log(jsonData);
    if (!jsonData.meals) {
    infoAboutRecipeEl.innerText = "Recipe not found ❌";
    recipeIngredientsEl.innerText = "";
    recipeInstructionsEl.innerHTML = "";
    return;
}

    infoAboutRecipeEl.innerText=jsonData.meals[0].strMeal + " is a " + 
    jsonData.meals[0].strArea + " dish that is prepared using " + 
    jsonData.meals[0].strCategory + " ingredients.";
    recipeIngredientsEl.innerText=jsonData.meals[0].strIngredient1 + ", " + 
    jsonData.meals[0].strIngredient2 + ", " + jsonData.meals[0].strIngredient3 + ", " + 
    jsonData.meals[0].strIngredient4 + ", " + jsonData.meals[0].strIngredient5 + ", " + 
    jsonData.meals[0].strIngredient6 + ", " + jsonData.meals[0].strIngredient7 + ", " + 
    jsonData.meals[0].strIngredient8 + ", " + jsonData.meals[0].strIngredient9 + ", " + 
    jsonData.meals[0].strIngredient10 + ", " + jsonData.meals[0].strIngredient11 + ", " + 
    jsonData.meals[0].strIngredient12 + ", " + jsonData.meals[0].strIngredient13 + ", " + 
    jsonData.meals[0].strIngredient14 + ", " + jsonData.meals[0].strIngredient15 + ", " + 
    jsonData.meals[0].strIngredient16 + ", " + jsonData.meals[0].strIngredient17 + ", " + 
    jsonData.meals[0].strIngredient18 + ", " + jsonData.meals[0].strIngredient19 + ", " + 
    jsonData.meals[0].strIngredient20 + ".";
    recipeInstructionsEl.innerHTML = "";
    recipeInstructionsEl.innerText=jsonData.meals[0].strInstructions; 
    

    let urlEl = document.createElement("a");
urlEl.classList.add("result-url");
urlEl.href = jsonData.meals[0].strYoutube;
urlEl.target = "_blank";
urlEl.textContent = "Watch Recipe on YouTube";
recipeInstructionsEl.appendChild(urlEl);
    console.log(jsonData);
} catch (error) {
    console.log(error);
  }
};

recipeCall();
}
}


recipeInputEl.addEventListener("keydown",searchRecipe);

