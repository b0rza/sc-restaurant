var serve = function (cookedFood) {
  return new Promise(function(thingToDoAfterServing) {
    var result = 'plate of ' + cookedFood;
    thingToDoAfterServing(result);
  });
}

var eat = function(plate) {
  console.log('eat a ' + plate);
}

var makeDough = function() {
  return 'raised dough';
}

var putToppings = function(order, base) {
  var toppings = {
    pizza: 'tomato, mozzarella, basil'
  }
  return toppings[order] + ' on ' + base;
}

var bake = function(preppedMeal) {
  return 'baked: ' + preppedMeal;
}

var cook = function(order) {
  return new Promise(function(thingToDoWhenPromiseFulfilled) {
    COOK_TIME = 3000;
    var cookedMeal;
    var thingThatsTakingTime = function() {
      cookedMeal = bake(putToppings(order, makeDough()));
      thingToDoWhenPromiseFulfilled(cookedMeal);
    };
    window.setTimeout(thingThatsTakingTime, COOK_TIME);
  })
}

function haveDinner(order) {
  var servedFood = cook(order).then(serve).then(eat);
};


// Oh no!
// Installations
var cook = function(order) {
  var areInstallationsOk = false;

  return new Promise(function(thingToDoWhenPromiseFulfilled, reject) {
    COOK_TIME = 3000;
    var cookedMeal;

    var thingThatsTakingTime = function() {
      cookedMeal = bake(putToppings(order, makeDough()));
      thingToDoWhenPromiseFulfilled(cookedMeal);
    };

    if (areInstallationsOk) {
      window.setTimeout(thingThatsTakingTime, COOK_TIME);
    }
    else {
      reject('Kitchen blew up!!!')
    }
  });
}

// Need to handle this
function apologize(whatHappened) {
  console.log('Terribly sorry, seems that ' + whatHappened);
}

function haveDinner(order) {
  cook(order)
    .then(serve)
    .then(eat)
    .catch(apologize);

};

haveDinner('pizza');
