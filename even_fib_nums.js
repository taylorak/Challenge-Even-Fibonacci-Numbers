/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */
function _sumFibs( maxFibValue ) {
  var sum = 0;

  var prevPrev = 0;
  var prev = 1;
  var newFib = 0;

  while(prev <= maxFibValue) {
    if(prev%2 === 0) {
      sum += prev;
    }

    newFib = prevPrev + prev;
    prevPrev = prev;
    prev = newFib;
  }
  return sum;
}

// bonus round
function _highestFibonacciNumber (maxFibValue){
  var highest = 0;

  var prevPrev = 0;
  var prev = 1;
  var newFib = 0;

  while(prev <= maxFibValue) {
    highest = prev;

    newFib = prevPrev + prev;
    prevPrev = prev;
    prev = newFib;
  }

  //do your work here

  return highest;
};

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs : _sumFibs,
  highestFibonacciNumber : _highestFibonacciNumber
};