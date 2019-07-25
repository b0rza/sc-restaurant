var order = {
  name: 'pizza',
  toppings: ['tomato', 'mozzarella', 'basil'],
  plate: ''
}

// =========================================
// JS introduces promises!
// They allow for a nicer syntax that makes the code look sequential

// I promise that I'm going to do something. Tell me what you want to do after
// the promise has been fulfilled - how you want to resolve it. I'm going to
// do it, and give it the result of my promise.

// I promise I'll tell whoever wants to
// do something with this dough that it's ready, and I'm going to give the dough
// to the next guy in the chain

function makeDough(order) {
  // return window.setTimeout(function(order) {
  //   var result = 'dough for ' + order;
  //   return result;
  // }, 1000)

  return new Promise((resolve) => {
    return window.setTimeout(function(order) {
      var result = 'raised dough for ' + order;
      resolve(result);
    }, 1000)
  })
}

// do the same for other callbacks...
function cook(order) {
  var putTopping = function(order) {
    var ingredients = recipes[order].ingredients;
    TIME_TO_PUT_INGREDIENTS = ingredients.length * 1000;

    return new Promise(function (resolve, reject) {
      return window.setTimeout(function(plate) {
        var result = ingredients.join() + ' on the' + plate;
        resolve(result);
      }, TIME_TO_PUT_INGREDIENTS);
    });
  }

  var makePizza = function(order) {
    return makeDough(order).then(putTopping).then(bake);
  };

  if (order === 'pizza') {
    return makePizza();
  }
}

function bake(preppedMeal) {
  hasPineappleOrOnions = preppedMeal.includes('onions');
  var TIME_TO_BAKE = hasPineappleOrOnions() ? 5000 : 3000;

  return new Promise(function (resolve, reject) {
    window.setTimeout(function {
      resolve('Baked ' + preppedMeal);
    }, TIME_TO_BAKE);
  });
}
