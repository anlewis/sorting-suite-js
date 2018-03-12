assert = require('chai').assert;
const bubbleSort = require('../lib/bubbleSort');


describe('bubbleSort', function () {
  context('bubbleSort function', function () {
    it('it can sort two numbers already in order', function () {
      array = [1, 2]

      assert.deepEqual(bubbleSort(array), [1, 2])
    });
    it('it can sort two numbers not in order', function () {
      array = [2, 1]

      assert.deepEqual(bubbleSort(array), [1, 2])
    });
  });
});