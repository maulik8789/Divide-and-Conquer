function countZeroes(arr) {
  let a = arr.sort();
  let leftIdx = 0;
  let rightIdx = a.length - 1;

  while (leftIdx <= rightIdx) {
    // find the middle value
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = a[middleIdx];

    if (middleVal == 0) {
      // middleVal is too small, look at the right half
      leftIdx = middleIdx + 1;
    } else if (middleVal == 1) {
      // middleVal is too large, look at the left half
      rightIdx = middleIdx - 1;
    } 
  }
  return leftIdx;

}

module.exports = countZeroes