//How many numbers are squares that are less than or equal to the input value

var square_nums = function(n) {
  var count = 0;
  var i = 1;
  while (i < n) {
    if (i * i < n) {
      count += 1;
    }
    i++;
  }
  return count;
};

square_nums(5); // 1*1=1, 2*2=4
square_nums(10); // 1*1=1, 2*2=4, 3*3=9
square_nums(25); // 1*1=1, 2*2=4, 3*3=9, 4*4=16, 5*5=25
