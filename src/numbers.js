function addToNumber(startingNumber, numberToAdd) {
  return startingNumber + numberToAdd;
}

function addOneToAll(numbers) {
  return numbers.map(number => addToNumber(number, 1));
}

// This is how we can use these functions in other files
module.exports = { addToNumber, addOneToAll };
