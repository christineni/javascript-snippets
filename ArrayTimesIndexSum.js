//Given an array of values, give sum of values in array multiplied by their respective array index

var arrTimesIndexSum = function(arr) {
  var len = arr.length;
  var sum = 0;
  for (var i = 0; i < len; i++) {
    sum += arr[i] * [i];
  }
  return sum;
};

arrTimesIndexSum([2]);
arrTimesIndexSum([2, 3]);
arrTimesIndexSum([2, 3, 5]);
arrTimesIndexSum([2, 3, 5, 2]);
