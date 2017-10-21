/*
Write a function lucky_sevens?(numbers), which takes in an array of 
integers and returns true if any three consecutive elements sum to 7
*/

function luckySeven(num) {
  var i = 0;
  while (i < num.length-2) {
    if (num[i]+num[i+1]+num[i+2] === 7) {
      return true;
    }
    i++;
  }
  
  return false
}

luckySeven([7,7,7,7]);
/*
lucky_sevens?([2,1,5,1,0]) == true # => 1 + 5 + 1 == 7
lucky_sevens?([0,-2,1,8]) == true # => -2 + 1 + 8 == 7
lucky_sevens?([7,7,7,7]) == false
lucky_sevens?([3,4,3,4]) == false
*/
