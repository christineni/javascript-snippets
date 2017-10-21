/*
Write a function disemvowel(string), which takes in a string, and returns 
that string with all the vowels removed. Treat “y” as a consonant.
*/


function removeVowels(s) {
  var noVowels = "";
  for (var i =0; i<s.length;i++) {
    if (s[i] !== "a" && s[i] !== "e" && s[i] !== "i" && s[i] !== "o" && s[i] !== "u") {
      noVowels += s[i];
    }
  }
  return noVowels;
}

removeVowels("foobar");

/*
disemvowel("foobar") == "fbr"
disemvowel("ruby") == "rby"
disemvowel("aeiou") == ""
*/
