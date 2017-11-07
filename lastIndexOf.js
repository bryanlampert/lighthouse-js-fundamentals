function lastIndexOf(num, val) {
  for (var i = num.length - 1; i >= 0; i--) {
    if (val === num[i]) {
      var loc = i;
      var aMatch = true;
      break;
    }
  }
  if (aMatch) {
    return loc;
  } else {
    return -1;
  }
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);