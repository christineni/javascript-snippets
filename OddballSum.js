/*
Write a function oddball_sum(numbers), which takes in an array
of integers and returns the sum of all the odd elements.
*/

function oddball(num) {
  var oddsum = 0;
  for (var i = 0; i < num.length; i ++) {
    if (num[i]%2 !== 0) {
      oddsum+=num[i];
    }
  }
  return oddsum;
}

oddball([1,2,1]);

/*
oddball_sum([1,2,3,4,5]) == 9 # => 1 + 3 + 5 == 9
oddball_sum([0,6,4,4]) == 0
oddball_sum([1,2,1]) == 2
*/
