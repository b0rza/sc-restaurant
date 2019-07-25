var order = 'pizza';
haveDinner(order);

// Waiter takes your order, goes to the back.
// It's up to the chef to make it happen

function haveDinner(order) {
  return 'baked: tomato, mozzarella, basil on dough';
};

// ===============================
// Demo... nice, but how do we actually do it
function haveDinner(order) {
  // 1. cook
  var cookedFood = 'baked: tomato, mozzarella, basil on dough'

  // 2.serve
  var plate = 'plate of ' + cookedFood;

  // 3. eat
  var result = 'eat ' + plate;
};

// ===============================
// Demo... nice, but how do we actually do it
function serve(cookedFood) {
  return 'plate of ' + cookedFood;
}

function cook(order) {
  // ============================
  var recipes = {
    pizza: 'baked: tomato, mozzarella, basil on dough'
  }
  return recipes[order];
}

function eat(plate) {
  return 'eat ' + plate;
}

function haveDinner(order) {
  var cookedFood = cook(order);
  const servedFood = serve(cookedFood);
  eat(servedFood);
};
