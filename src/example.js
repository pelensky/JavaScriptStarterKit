function testFunction(argument) {
  return argument;
}

function plusOne(numbers) {
  const numbersPlus1 = numbers.map((number) => {
    return number + 1;
  });
  return numbersPlus1;
}

module.exports = { testFunction, plusOne };
