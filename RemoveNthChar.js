function removeNth(str, n) {
  str1 = str.split("");
  nStr = "";
  for (i=0; i  < str.length; i++) {
    if (i === n) {
      continue;
    }
    else {
      nStr += str1[i];
    } 
  }
  return nStr;
}
