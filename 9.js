// Let's finally have dinner
function haveDinner() {
  return cook(order)
    .then(serve)
    .then(eat);
}

// Oh noes!
// Someone did not check the kitchen installations
var areInstallationsOk = false;

function bake(preppedMeal) {
  return new Promise(function (resolve, reject) {
    if (areInstallationsOk) {
      reject('The kitchen just blew up!');
    }
    window.setTimeout(function {
      resolve('baked ' + preppedMeal);
    }, 3000);
  });
}

function cook(order) {
  var recipes = {
    pizza: function(order) {
      return makeDough(order).then(putTopping).then(bake);
    }
  };

  var cookRecipe = recipes[order];
  return cookRecipe();
}

// The waiter has something to tell us...
function apologize(whatHappened) {
  console.log('Terribly sorry, seems that ' + whatHappened);
}

function haveDinner() {
  return cook(order)
    .then(serve)
    .then(eat)
    .catch(apologize);
}

// We can still do something about it...
haveDinner().then(function(foodRating) {
  if (foodRating > 7) {
    console.log('Damn that was some good dinner d00de!!!');
  } else {
    console.log("Let's just go for a White Cock");
  }
});

// And again, this can be a function
var uponDinner = function(foodRating) {
  if (foodRating > 7) {
    console.log('Damn that was some good dinner d00de !!!');
  } else {
    console.log("Let's just go and get ourselves a WHITE COCK");
  }
};
haveDinner().then(uponDinner);
