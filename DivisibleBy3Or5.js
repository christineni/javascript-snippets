//Given a value, return an array that is less than or equal to that value that are divisible by 3  or 5

var divisible35 = function(max) {
  var arr = [];
  var i = 1;
  while (i < max) {
    if (i%3 === 0 && i%5 !== 0){
      arr.push(i);
    }
    else if (i%3 !== 0 && i%5 === 0) {
      arr.push(i);
    }
    i++;
  }
  return arr;
};

divisible35(3);
divisible35(10);
divisible35(20);
