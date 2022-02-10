const { expect } = require('chai')
const sorting = require('./sorting-algorithms')

const testSubjects = [
  sorting.bubbleSort,
  sorting.selectionSort,
  sorting.insertionSort,
  sorting.mergeSort,
  sorting.heapSort,
  sorting.quickSort
]

const expectations = (sort) => () => {
  expect(sort([])).to.deep.equal([])
  expect(sort([7])).to.deep.equal([7])
  expect(sort([1, 2, 3, 4])).to.deep.equal([1, 2, 3, 4])
  expect(sort([2.3, 1, 0.5, -1.8])).to.deep.equal([-1.8, 0.5, 1, 2.3])
}

const test = (sort) => () =>
  it('sorts numeric array', expectations(sort))

const runTestOnSubject = (sort) =>
  describe(`Sorting algorithm ${sort.name}`, test(sort))

testSubjects.forEach(runTestOnSubject)
