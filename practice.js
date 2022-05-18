// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function(fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function(numbers) {
  var results = 0;
  _.each(numbers, function(numbers, index) {
    if (numbers % 5 === 0) {
      results++;
    }
  });
  return results;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function(fruits, targetFruit) {
  var fruitList = _.filter (fruits, function(item) {
    return item === targetFruit;
  });
  return fruitList;
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function(fruits, letter) {
  return _.filter(fruits, function(item) {
    return item[0] === letter;
  });
};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function(desserts) {
  var cookieList = _.filter(desserts, function(type) {
    return type === desserts.type;
  });
  return cookieList;

};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function(products) {
  var total = _.reduce(products, function(memo, value) {
    return Number(memo) + Number(value.price.slice(1));
  }, 0);
  return total;
};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function(desserts) {
//I - array of objects of desserts
//O - return an object with dessert name as key and count as value
//exampleOutput: { dessertType: 3, dessertType2: 1 }
//C
//E
  var reduced = _.reduce(desserts, function(acc, dessert) {
    if (acc[dessert.type] === undefined) {
      acc[dessert.type] = 1;
    } else {
      acc[dessert.type]++;
    }
    return acc;
  }, {});

  return reduced;
};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
//I-array of objects some have arrays as values
//O- array of all movies between 1990 and 2000
//C- use array as an accumulator
//E-


var ninetiesKid = function(movies) {
// reduce
  //if release year 1990 to 2000
    //push to accumulator
  //return acc
  var reduced = _.reduce(movies, function (acc, movie) {
    if (movie.releaseYear >= 1990 && movie.releaseYear <= 2000) {
      acc.push(movie.title);
    }
    return acc;
  }, []);
  return reduced;
};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function(movies, timeLimit) {
//I-array of objects some have arrays as values
//O- return boolean if theres is a movie with a lower time limit
//C-
//E-

//reduce
  //if runtime is smaller than time limit
    //movies is true
    //use false as initital value
  var reduced = _.reduce(movies, function(acc, movie) {
    return acc || (movie.runtime < timeLimit);
  }, false);
  return reduced;
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
//I-array of fruits that are strings
//O- array containg all strinigs uppercased
//C-
//E-
var upperCaseFruits = function(fruits) {
  var mapped = _.map(fruits, function(element) {
    return element.toUpperCase();
  });
  return mapped;
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
//I-array of objects
//O- return array of objects with gluten free property with boolean value
//C-
//E-
var glutenFree = function(desserts) {
  // map
    //if ingredients array includes 'flour'
      //add key is glutenfree and value is false
    // otherwise value is true
  var mapped = _.map(desserts, function (value, key, list) {
    var ingredientArray = desserts[key].ingredients;
    if (ingredientArray.includes('flour')) {
      desserts['glutenFree'] = false;
    } else {
      desserts['glutenFree'] = true;
    }
    return desserts;
  });
  return mapped;
};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.68'
    }
  ];

*/

//I-array of objects
//O- new proprty salesPrice as key and discounted price as value
//C- rounding decimals
//E-
var applyCoupon = function(groceries, coupon) {
  //map
    // add key and value(discounted price) round?
    //multiply by 100
  var mapped = _.map(groceries, function(item) {
    var price = Number(item.price.slice(1)) * 100;
    var discPrice = price * (1 - coupon);
    discPrice = (Math.round(discPrice)) / 100;
    discPrice = '$' + discPrice;
    item.salePrice = discPrice;
    return item;
  });
  console.log(mapped);
  return mapped;
};

