// Prepare the risotto !!!

// 0. buy the ingredients
var allIngredients = [
  { name: 'onion' },
  { name: 'garlic' },
  { name: 'olive oil' },
  { name: 'squid' },
  { name: 'rice' },
  { name: 'potato' },
  { name: 'avocado' },
  { name: 'chocolate pudding' }

];

// 1. take a pan
var pan = [];

// 2. check the recipe for risotto ingredients
var risottoRecipe = ['onion', 'garlic', 'olive oil', 'squid', 'rice'];

// 3. put ingredients into a deep pan
if (risottoRecipe.includes(ingredients[0])) {
  pan.push(ingredients[0]);
}

if (risottoRecipe.includes(ingredients[1])) {
  pan.push(ingredients[1]);
}

if (risottoRecipe.includes(ingredients[2])) {
  pan.push(ingredients[2]);
}

// =====================

for(var i=0; i < allIngredients.length; i++) {
  if (risottoRecipe.includes(ingredients[i])) {
    pan.push(ingredients[2]);
  }
}

// ===================================


function cook(pan) {

}
