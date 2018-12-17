import { Numbers } from '../src/numbers';

describe('numbers', () => {

  const numbers = new Numbers();

  describe('addToNumber', () => {
    it('adds two numbers together', () => {
      expect(numbers.addToNumber(1, 2)).toEqual(3);
    });


    it('adds two numbers that are the same', () => {
      // Why is this failing?
      expect(numbers.addToNumber(1, 1)).toEqual(3);
    });
  });

  describe('test map', () => {
    it('can map over an array', () => {
      const list = [1, 2, 3, 4, 5];
      expect(numbers.addOneToAll(list)).toEqual([2, 3, 4, 5, 6]);
    });
  });
});
