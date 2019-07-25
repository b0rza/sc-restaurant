
var serve = function (cookedFood, callback) {
  var result = 'plate of ' + cookedFood;
  callback(result);
}

var eat = function(plate) {
  console.log('eat a ' + plate);
  return 'eat ' + plate;
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

// =========================================
// JS introduces promises!
// They allow for a nicer syntax that makes the code look sequential

// I promise that I'm going to do something. Tell me what you want to do after
// the promise has been fulfilled - how you want to resolve it. I'm going to
// do it, and give it the result of my promise.

// I promise to cook this meal, and I'll call you back when I'm done

// I promise to serve, and then you can eat
var serve = function (cookedFood) {
  // return new Promise(function(thingToDoAfterServing, reject) {
  //   thingToDoAfterServing(result)
  // })

  return new Promise(function(thingToDoAfterServing) {
    var result = 'plate of ' + cookedFood;
    thingToDoAfterServing(result);
  });
}

function haveDinner(order) {
  var servedFood = cook(order, function(cookedFood) {
    // serve(cookedFood, function(servedFood) {
    //   eat(servedFood);
    // });
    serve(cookedFood).then(eat);
  });
};


var cook = function(order) {
  // return new Promise(function(thingToDoAfterCooking, reject) {
  //   thingToDoAfterCooking(result)
  // })

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
  var servedFood = cook(order, function(cookedFood) {
    // serve(cookedFood, function(servedFood) {
    //   eat(servedFood);
    // });
    serve(cookedFood).then(eat);
  });

  var servedFood = cook(order).then(serve).then(eat);
};
