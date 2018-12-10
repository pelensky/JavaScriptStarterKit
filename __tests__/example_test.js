const example = require('../src/example');

describe('example', () => {

  describe('testFunction', () => {
    it('passes a test that is true', () => {
      const exampleOutput = 'I am the correct output';
      expect(example.testFunction(exampleOutput)).toEqual(exampleOutput);
    });


    it('fails a test that is false', () => {
      const exampleOutput = 'I am the correct output';
      expect(example.testFunction(exampleOutput)).toEqual('I am not the correct output');
    });
  });

  describe('testES6', () => {
    it('can map over an array', () => {
      const numbers = [1, 2, 3, 4, 5];
      expect(example.plusOne(numbers)).toEqual([2, 3, 4, 5, 6]);
    });
  });

});

