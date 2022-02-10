const bubbleSort = (nums) => {
  let sorted = true

  for (let loop = 0; loop < nums.length - 1; loop++) {
    for (let index = 0; index < nums.length - 1 - loop; index++) {
      if (nums[index] > nums[index + 1]) {
        [nums[index], nums[index + 1]] = [nums[index + 1], nums[index]]
        sorted = false
      }
    }

    if (sorted) break
  }

  return nums
}

const selectionSort = (nums) => {
  for (let pivot = 0; pivot < nums.length - 1; pivot++) {
    let min = pivot

    for (let swap = pivot + 1; swap < nums.length; swap++) {
      if (nums[min] > nums[swap]) {
        min = swap
      }
    }

    [nums[pivot], nums[min]] = [nums[min], nums[pivot]]
  }

  return nums
}

const insertionSort = (nums) => {
  for (let target = 0; target < nums.length; target++) {
    let swap = target

    while (swap > 0 && nums[swap - 1] > nums[swap]) {
      [nums[swap - 1], nums[swap]] = [nums[swap], nums[swap - 1]]
      swap--
    }
  }

  return nums
}

const mergeSort = (nums) => {
  const merge = (left, right) => {
    const merged = []

    while (left.length && right.length) {
      merged.push(left[0] <= right[0] ? left.shift() : right.shift())
    }

    return [...merged, ...left, ...right]
  }

  const splitAndMerge = (array) => {
    if (array.length < 2) return array

    const mid = array.length / 2
    const left = array.slice(0, mid)
    const right = array.slice(mid, array.length)

    return merge(splitAndMerge(left), splitAndMerge(right))
  }

  return splitAndMerge(nums)
}

const heapSort = (nums) => {
  const heapifySubtree = (size, root) => {
    const left = root * 2 + 1
    const right = left + 1
    let max = root

    if (left < size && nums[left] > nums[max]) {
      max = left
    }
    if (right < size && nums[right] > nums[max]) {
      max = right
    }

    if (max !== root) {
      [nums[max], nums[root]] = [nums[root], nums[max]]
      heapifySubtree(size, max)
    }
  }

  const heapifyArray = () => {
    for (let index = Math.floor(nums.length / 2 - 1); index >= 0; index--) {
      heapifySubtree(nums.length, index)
    }
  }

  const sort = () => {
    heapifyArray()

    for (let index = nums.length - 1; index >= 0; index--) {
      [nums[0], nums[index]] = [nums[index], nums[0]]
      heapifySubtree(index, 0)
    }
  }

  sort()
  return nums
}

const quickSort = (nums) => {
  if (nums.length < 2) return nums

  const pivot = nums[0]
  const left = []
  const right = []

  for (let index = 1; index < nums.length; index++) {
    nums[index] < pivot ? left.push(nums[index]) : right.push(nums[index])
  }

  return [...quickSort(left), pivot, ...quickSort(right)]
}

module.exports = {
  bubbleSort,
  selectionSort,
  insertionSort,
  mergeSort,
  heapSort,
  quickSort
}
