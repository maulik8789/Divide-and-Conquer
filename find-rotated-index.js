function findRotatedIndex(array, num) {
    var pivot = findFirstNum(array)
    if (pivot > 0 && num >= array[0] && num <= array[pivot - 1]) {
      return binarySearch(array, num, 0, pivot - 1);
    } 
    else {
      return binarySearch(array, num, pivot, array.length - 1);
    }
}
  
function binarySearch(array, num, start, end) {
    if (array.length === 0) return -1;
    if (num < array[start] || num > array[end]) return -1;
  
    while (start <= end) {
      var mid = Math.floor((start + end) / 2);
      if (array[mid] === num) {
        return mid;
      } else if (num < array[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    return -1;
}
  



function findFirstNum(arr){
    if (arr.length === 1 || arr[0] < arr[arr.length - 1]) return 0;
    let first = 0;
    let last = arr.length - 1;
    while (first <= last) {
        // find the middle value
        let middleIdx = Math.floor((first + last) / 2);
        let middleVal = arr[middleIdx];
    
        if (middleVal > arr[middleIdx-1]) {
            // middleVal is too small, look at the right half
            return middleIdx + 1;
        } 
        else if (middleVal >= arr[first]) {
            // middleVal is too large, look at the left half
            first = middleIdx + 1;
        } 
        else{
            last = middleIdx - 1;
        }
    }
}

module.exports = findRotatedIndex