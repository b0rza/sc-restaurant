// One more problem...
// We need the meals to arrive at the same time, if we've got more orders
var orders = [{ name: 'pizza' }, { name: 'paprika'}];

// This means that on serving, we need to expect more things to be served
// We change the serve function to accept more plates, we also need to eat more
function serve(plates) {
  console.log('Here is your order sir: ', plates.join());
  return plates;
}

function eat(plates) {
  var rating  = Math.round(Math.random() * 10);
  console.log('I rate this: ', rating);
  return rating;
}

function fulfillOrder(orders) {
  var cookFirstMeal = cook(orders[0]);
  var cookSecondMeal = cook(orders[1]);
  return Promise
    .all([cookFirstMeal, cookSecondMeal])
    .then(serve)
    .catch(apologise);
}

// Now our dinner looks sane
function haveDinner() {
var orders = ['pizza', 'pineapple pizza'];
  return fulfillOrder(orders)
    .then(serve)
    .then(eat)
    .catch(apologize);
}
