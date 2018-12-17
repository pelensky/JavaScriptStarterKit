class Numbers {

  addToNumber(startingNumber, numberToAdd) {
    return startingNumber + numberToAdd;
  }

  addOneToAll(numbers) {
    return numbers.map(number => this.addToNumber(number, 1));
  }
}

// This is how we can use these functions in other files
module.exports = { Numbers };
