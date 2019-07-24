function prepareTheRisotto(serveRisotto) {
  filterOutIngredients();
  cookIngredients(serveRisotto);
  cleanUp();
}

// We assumed that filtering out is immediate, it's not...
function filterOutIngredients(callback) {
  console.log('Cooking...');
  window.setTimeout(callback, 3000);
}

function prepareTheRisotto(callback) {
  filterOutIngredients(function() {
    cookIngredients(serveRisotto);
  });
  cleanUp();
}

// Getting really ugly here...
// BAM!!! Promises. A natural looking, declarative way of writing the above
// How do we cook?
var plate = {};
var isChefGood = true;
function cookIngredients(callback) {
  window.setTimeout(function() {
    if (isChefGood){
      plate = { name: 'risotto' };
      callback(plate);
    }
    else {
      reject('Chef no good!')
    }
  }, 3000);
}

function cookIngredients(callback) {
  return new Promise((resolve, reject) => {
    window.setTimeout(function() {
      if (isChefGood){
        plate = { name: 'risotto' };
        resolve(plate);
      }
      else {
        reject('Chef no good!')
      }
    }, 3000);
  })
}

var plate = {};
var isChefGood = true;
var alertCooked = function(whatIGot){ alert(whatIGot.name) }
var cookIngredients = function (ca) {
  return new Promise((resolve, reject) => {
    window.setTimeout(function() {
      if (isChefGood){
        plate = { name: 'risotto' };
        resolve(plate);
      }
      else {
        reject('Chef no good!')
      }
    }, 3000);
  })
}







cookIngredients()
  .then(serveRisotto)
  .then(serverWine)
