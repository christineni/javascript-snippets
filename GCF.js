/*# Write a method that takes in two numbers. Return the greatest
# integer that evenly divides both numbers. You may wish to use the
# `%` modulo operation.
#
# Difficulty: medium.

# These are tests to check that your code is working. After writing
# your solution, they should all print true.

puts("\nTests for #greatest_commmon_factor")
puts("===============================================")
    puts(
      'greatest_common_factor(3, 9) == 3: ' +
      (greatest_common_factor(3, 9) == 3).to_s
    )
    puts(
      'greatest_common_factor(16, 24) == 8: ' +
      (greatest_common_factor(16, 24) == 8).to_s
    )
    puts(
      'greatest_common_factor(3, 5) == 1: ' +
      (greatest_common_factor(3, 5) == 1).to_s
    )
puts("===============================================")
*/

function gcf(n1, n2){
  var index = 0;
  var i = 0;
  var gcf = 0;
  if (n1 >= n2) {
    i = n2;
  }
  else {
    i = n1;
  }
  while (index <= i) {
    if(n1%index === 0 && n2%index === 0) {
      gcf = index;
    }
    index++;
  }
  return gcf;
}

gcf(3,9);
gcf(16,24);
