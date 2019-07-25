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
    pizza: 'tomato, mozzarella, basil',
    pineapplePizza: 'tomato, mozzarella, basil, pineapple'
  }
  return toppings[order] + ' on ' + base;
}

var bake = function(preppedMeal) {
  return 'baked: ' + preppedMeal;
}

var cook = function(order) {
  var areInstallationsOk = true;

  return new Promise(function(thingToDoWhenPromiseFulfilled, reject) {
    var cookTimes = {
      pizza: 3000,
      pineapplePizza: 6000
    }
    var COOK_TIME = cookTimes[order];
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

var apologize = function(whatHappened) {
  console.log('Terribly sorry, seems that ' + whatHappened);
}

function haveDinner(order1, order2) {
  // cook(order1)
  //   .then(serve)
  //   .then(eat)
  //   .catch(apologize);

  // cook(order2)
  //   .then(serve)
  //   .then(eat)
  //   .catch(apologize);

  Promise.all([ cook(order1), cook(order2)])
    .then(serve)
    .then(eat)
    .catch(apologize);
};


haveDinner('pizza', 'pineapplePizza');
