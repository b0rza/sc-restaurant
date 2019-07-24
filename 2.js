for(var i=0; i < allIngredients.length; i++) {
  if (risottoRecipe.includes(allIngredients[i])) {
    pan.push(allIngredients[2]);
  }
}

// 1. pick the risotto recipe ingredients
// Among all of the ingredients, give me those that are
// included in the risotto recipe.

// Any part of code can be taken and put into a small utility function.
// It's a good practice to look for these abstractions. For example...
risottoRecipe.includes(ingredients[i])

function isInRisottoRecipe(ingredient) {
  return risottoRecipe.includes(ingredient);
}

for(var i=0; i < allIngredients.length; i++) {
  if (isInRisottoRecipe(allIngredients[i])) {
    pan.push(allIngredients[i]);
  }
}

// What if not risotto? New function?
function isInStuffedPaprikaRecipe(ingredient) {
  return stuffedPaprikaRecipe.includes(ingredient);
}

// better
function isInRecipe(recipe, ingredient) {
  return recipe.includes(ingredient);
}
// Notice how this is much more readable than what we had in the beginning
// Also notice how we are losing coupling, depending only on the variables
for(var i=0; i < allIngredients.length; i++) {
  if (isInRecipe(risottoRecipe, allIngredients[i])) {
    pan.push(allIngredients[i]);
  }
}


// Much better, but we can do better. What we are really saying is:
// "Filter out this recipe's ingredients"
// Or in FP language: recipe ingredients are those that recipe check is true for
// In JS, we can do that

function filterOutIngredients() {
  var recipeIngredients = [];

  for(var i=0; i < allIngredients.length; i++) {
    if (isInRecipe(recipe, allIngredients[i])) {
      recipeIngredients.push(allIngredients[i]);
    }
  }

  return recipeIngredients;
}

function filterOutIngredients() {
  var recipeIngredients = filter(allIngredients, isInRecipe)
  return recipeIngredients;
}

// We can do this because, you will remember: functions are values in javascript
// This approach is invaluable because later we'll need ingredients
// that need to be: chopped, boiled, cured

// 2. cook the recipe ingredients in a deep pan
// is a segway into asynchonicity, callbacks on ordering
// 3. serve
