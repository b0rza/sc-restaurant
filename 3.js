// And so, how do we now proceed with this order
// The waiter's instructions roughly translate into:
// 1. prepare the risotto
// 2. serve the risotto

prepareTheRisotto();
serveRisotto();

// The above will only work when we really want the last function to be the
// last one. If not, we need to do something else. What if the cook has more meals.

prepareTheRisotto();
serveRisotto();
prepareTheStuffedPaprika();
serveStuffedPaprika();

// Preparing the other meal means waiting for the first one to be served.
// That's hardly optimal!
// This is a one man show. Let's just tell the waiter to serve the meal after it's
// done, and start prepairing the next one immediatly.

function prepareTheRisotto() {
  filterOutIngredients();
  cookIngredients();
  thingToDoAfterCooking();
  cleanUp();
}

// He needs to to something after cooking, this time it's calling the waiter
// But it may also be handing the meal to someone else, because kitchen is
// divided between people. This function is what we call a CALLBACK.
// Call whatever comes up next when I decide to do it. This means that I am the
// master of my domain, and free to choose when something happens.

function prepareTheRisotto(callback) {
  filterOutIngredients();
  cookIngredients();
  callback();
  cleanUp();
}
