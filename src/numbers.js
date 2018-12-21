export class Numbers {
  // Exporting is important, otherwise our tests or index filel won't have access to it

  addToNumber(startingNumber, numberToAdd) {
    return startingNumber + numberToAdd;
  }

  addOneToAll(numbers) {
    return numbers.map(number => this.addToNumber(number, 1));
  }
}
