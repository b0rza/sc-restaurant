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

// Let's simulate. JS has built in waiting functions for show.
// In console...
function whatIWantToDo() {
  console.log('Hey waiter!!! Get yer arse here and serve!');
}
window.setTimeout(whatIWantToDo, 3000);

// No need to create a function here. This is very important to understand.
// The above code does the same thing as the one below, functions are values, and
// the second call is just function defined in place
window.setTimeout(function () {
  console.log('Hey waiter!!! Get yer arse here and serve!');
}, 3000);

// And in our example
function cookIngredients(callback) {
  window.setTimeout(callback, 3000);
}

function serveRisotto() {
  console.log('Hey waiter!!! Get yer arse here and serve!');
}

function prepareTheRisotto(callback) {
  filterOutIngredients();
  cookIngredients(serveRisotto);
  cleanUp();
}
// Now the cook is free to continue cleaning up.
// Very important to notice how cleanUp() is going to get executed immediately
// after, not wait on serve.
